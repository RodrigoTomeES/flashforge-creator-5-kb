/**
 * FlashForge Creator 5 / 5 Pro wiki scraper.
 *
 * Discovers all pages of the Creator 5 doc set (GraphQL listing + BFS over
 * internal links), extracts the server-rendered article HTML from each
 * Wiki.js page, converts it to markdown and writes:
 *   - docs/<wiki-path>.md   one file per page, frontmatter with source URL,
 *                           internal links rewritten to relative .md links
 *   - docs/INDEX.md         title → local file → original URL map
 *   - bundles/NN-topic.md   consolidated topic files for Gem/GPT upload
 */
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const BASE = 'https://wiki.flashforge.com';
const SECTION_PREFIX = 'creator-series/creator-5-series';
// Stray paths that belong to the Creator 5 doc set but live outside the
// canonical prefix (wiki typos / legacy paths). Discovered via BFS.
const DOC_SET_PREFIXES = ['creator-series/', 'creator-ser/'];
// Relevant doc-set pages that are orphaned (not linked from any Creator 5
// page) but listed in GraphQL under stray/typo paths.
const EXTRA_SEEDS = [
  'creator-series/creator-5m-series/troubleshooting-network-related-issues',
  'creator-ser/creator-5m-series/maintenance/mtc2',
];
const OUT_DOCS = path.resolve('docs');
const OUT_BUNDLES = path.resolve('bundles');
const DELAY_MS = 250;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------------------------------------------------------------- discovery

async function listAllPages() {
  const res = await fetch(`${BASE}/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: '{ pages { list(locale: "en") { id path title } } }',
    }),
  });
  if (!res.ok) throw new Error(`GraphQL listing failed: HTTP ${res.status}`);
  const json = await res.json();
  return json.data.pages.list;
}

const normalizePath = (p) =>
  decodeURIComponent(p).replace(/^\/?(en\/)?/, '').replace(/\/+$/, '');

const isDocSetPath = (p) => DOC_SET_PREFIXES.some((pre) => p.startsWith(pre));

// ---------------------------------------------------------------- fetching

async function fetchPageHtml(wikiPath) {
  const url = `${BASE}/en/${encodeURI(wikiPath)}`;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, { redirect: 'follow' });
      if (res.status === 404) return { status: 404 };
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return { status: 200, html: await res.text() };
    } catch (err) {
      if (attempt === 3) throw new Error(`${url}: ${err.message}`);
      await sleep(1000 * attempt);
    }
  }
}

// ------------------------------------------------------------- conversion

function makeTurndown() {
  const td = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
  });
  td.use(gfm);
  td.keep(['iframe']);
  return td;
}

const YT_RX =
  /^(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([\w-]+)/;

/**
 * Extract the article from a Wiki.js page and return { $, $content }.
 * Content lives in <template slot="contents"><div>…</div></template>.
 * Template content is a detached fragment in parse5, so .find() can't reach
 * it — re-load the inner HTML into its own cheerio document instead.
 */
function extractContent(html) {
  const inner = cheerio.load(html)('template[slot="contents"]').first().html();
  if (!inner || !inner.trim()) return null;
  const $ = cheerio.load(inner);
  return { $, $content: $.root() };
}

/**
 * Convert one page's HTML to markdown.
 * `localPaths` is the set of wiki paths that get their own local .md file,
 * used to decide between a relative deep link and an absolute wiki URL.
 */
function pageToMarkdown(html, wikiPath, localPaths, td) {
  const extracted = extractContent(html);
  if (!extracted) return null;
  const { $, $content } = extracted;

  const pageUrl = `${BASE}/en/${wikiPath}`;

  // Replace the ¶ anchors inside headings with a trailing [wiki §] link to
  // the exact section on the wiki, so the assistant can cite sections deeply.
  $content.find('h1, h2, h3, h4, h5, h6').each((_, el) => {
    const $h = $(el);
    $h.find('a.toc-anchor').remove();
    const id = $h.attr('id');
    if (id) $h.append(` <a href="${pageUrl}#${id}">[wiki §]</a>`);
  });

  // Rewrite links.
  $content.find('a[href]').each((_, el) => {
    const $a = $(el);
    const href = $a.attr('href') ?? '';

    // YouTube → keep absolute, mark as video for the assistant.
    if (YT_RX.test(href)) {
      const text = $a.text().trim();
      if (text && !/^▶/.test(text)) $a.text(`▶ Video: ${text}`);
      return;
    }

    // Same-page anchors → absolute wiki section URL (local markdown slugs
    // don't match Wiki.js heading ids, and citations should hit the wiki).
    if (href.startsWith('#')) {
      $a.attr('href', `${pageUrl}${href}`);
      return;
    }

    if (href.startsWith('/')) {
      const [purePath, fragment] = href.split('#');
      const target = normalizePath(purePath);
      if (localPaths.has(target)) {
        // Relative deep link between markdown files.
        const from = path.posix.dirname(stripSection(wikiPath) + '.md');
        let rel = path.posix.relative(from, stripSection(target) + '.md');
        if (fragment) rel += `#${fragment}`;
        $a.attr('href', rel);
      } else {
        $a.attr('href', `${BASE}${href}`);
      }
    }
  });

  // Absolute image URLs.
  $content.find('img[src]').each((_, el) => {
    const src = $(el).attr('src');
    if (src?.startsWith('/')) $(el).attr('src', `${BASE}${src}`);
  });

  // Remaining iframes (rare; embeds are client-side) → absolute too.
  $content.find('iframe[src]').each((_, el) => {
    const src = $(el).attr('src');
    if (src?.startsWith('/')) $(el).attr('src', `${BASE}${src}`);
  });

  return td.turndown($('body').html() ?? '').trim();
}

/** Map a wiki path to its file path inside docs/ (section prefix stripped). */
function stripSection(wikiPath) {
  if (wikiPath.startsWith(SECTION_PREFIX + '/'))
    return wikiPath.slice(SECTION_PREFIX.length + 1);
  if (wikiPath === SECTION_PREFIX) return 'creator-5-series';
  // Stray doc-set pages keep their full path under _linked/.
  return `_linked/${wikiPath}`;
}

// ---------------------------------------------------------------- bundles

const BUNDLES = [
  { file: '01-overview-and-quick-start.md', title: 'Creator 5 Series — Overview & Quick Start', match: (p) => p === SECTION_PREFIX || /user-guide|unboxing|notice|printer-setup|quick-start|accessories-list|intro-creator-5/.test(p) },
  { file: '02-user-manual.md', title: 'Creator 5 Series — User Manual', match: (p) => p.includes('/manual') && !/firmware|flash-studio/.test(p) },
  { file: '03-faq.md', title: 'Creator 5 Series — FAQ', match: (p) => /faq/.test(p) },
  { file: '04-troubleshooting.md', title: 'Creator 5 Series — Troubleshooting', match: (p) => /troubleshooting|filament-usage|filament_guide/.test(p) },
  { file: '05-error-codes.md', title: 'Creator 5 Series — Error Codes', match: (p) => /error_code|error-code/.test(p) },
  { file: '06-maintenance.md', title: 'Creator 5 Series — Maintenance', match: (p) => /maintenance|mtc/.test(p) },
  { file: '07-firmware-and-software.md', title: 'Creator 5 Series — Firmware & Flash Studio', match: (p) => /firmware|flash-studio|flash_studio/.test(p) },
];

function bundleFor(wikiPath) {
  return BUNDLES.find((b) => b.match(wikiPath)) ?? BUNDLES[0];
}

const slugify = (s) =>
  s.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');

/**
 * Rewrite a page's markdown for inclusion in a bundle: relative .md links
 * become in-bundle anchors when the target page landed in the same bundle,
 * otherwise the original absolute wiki URL.
 */
function rewriteForBundle(markdown, page, pagesByDocFile, bundleFile) {
  const fromDir = path.posix.dirname(stripSection(page.path));
  return markdown.replace(
    /\]\((?!https?:\/\/|#)([^)#]+\.md)(#[^)]*)?\)/g,
    (m, relTarget, fragment) => {
      const targetFile = path.posix.normalize(path.posix.join(fromDir, relTarget));
      const target = pagesByDocFile.get(targetFile);
      if (!target) return m;
      if (bundleFor(target.path).file === bundleFile) {
        return `](#${slugify(target.title)})`;
      }
      return `](${BASE}/en/${target.path}${fragment ?? ''})`;
    }
  );
}

// -------------------------------------------------------------------- main

const allPages = await listAllPages();
console.log(`Wiki has ${allPages.length} pages total.`);

const titleByPath = new Map(allPages.map((p) => [p.path, p.title]));
const knownPaths = new Set(allPages.map((p) => p.path));

// Seed: everything under the Creator 5 section.
const queue = allPages
  .filter((p) => p.path === SECTION_PREFIX || p.path.startsWith(SECTION_PREFIX + '/'))
  .map((p) => p.path)
  .concat(EXTRA_SEEDS.filter((p) => knownPaths.has(p)));

const scraped = new Map(); // wikiPath -> { html }
const failed = [];
const enqueued = new Set(queue);

console.log(`Seeding with ${queue.length} Creator 5 section pages; crawling…`);

while (queue.length) {
  const wikiPath = queue.shift();
  try {
    const { status, html } = await fetchPageHtml(wikiPath);
    if (status === 404 || !extractContent(html)) {
      failed.push({ path: wikiPath, reason: status === 404 ? '404' : 'no content' });
      continue;
    }
    scraped.set(wikiPath, { html });

    // BFS: follow internal links into the doc set.
    const { $, $content } = extractContent(html);
    $content.find('a.is-internal-link[href^="/"]').each((_, el) => {
      const target = normalizePath($(el).attr('href').split('#')[0]);
      if (target && isDocSetPath(target) && !enqueued.has(target)) {
        enqueued.add(target);
        queue.push(target);
      }
    });
    process.stdout.write(`\r${scraped.size} scraped, ${queue.length} queued   `);
  } catch (err) {
    failed.push({ path: wikiPath, reason: err.message });
  }
  await sleep(DELAY_MS);
}
console.log(`\nScraped ${scraped.size} pages, ${failed.length} failed/skipped.`);
for (const f of failed) console.log(`  skipped: ${f.path} (${f.reason})`);

// All successfully scraped paths get a local file.
const localPaths = new Set(scraped.keys());
const td = makeTurndown();

const pages = []; // { path, title, docFile, markdown }
for (const [wikiPath, { html }] of scraped) {
  const markdown = pageToMarkdown(html, wikiPath, localPaths, td);
  if (markdown == null) {
    failed.push({ path: wikiPath, reason: 'extraction failed' });
    continue;
  }
  const title =
    titleByPath.get(wikiPath) ??
    cheerio.load(html)('title').text().replace(/\s*\|.*$/, '').trim() ??
    wikiPath;
  pages.push({ path: wikiPath, title, docFile: stripSection(wikiPath) + '.md', markdown });
}

// ------------------------------------------------------- write per-page docs

for (const page of pages) {
  const sourceUrl = `${BASE}/en/${page.path}`;
  const out = [
    '---',
    `title: "${page.title.replace(/"/g, '\\"')}"`,
    `source: ${sourceUrl}`,
    '---',
    '',
    `> Official wiki page: ${sourceUrl}`,
    '',
    page.markdown,
    '',
  ].join('\n');
  const filePath = path.join(OUT_DOCS, page.docFile);
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, out);
}
console.log(`Wrote ${pages.length} files to docs/.`);

// ----------------------------------------------------------- write INDEX.md

pages.sort((a, b) => a.path.localeCompare(b.path));
const indexLines = [
  '# FlashForge Creator 5 Series — Wiki Mirror Index',
  '',
  `Mirrored from the official FlashForge wiki on ${new Date().toISOString().slice(0, 10)}.`,
  `Root page: ${BASE}/en/${SECTION_PREFIX}`,
  '',
  '| Page | Local file | Original wiki URL |',
  '|---|---|---|',
  ...pages.map(
    (p) => `| ${p.title} | [${p.docFile}](${p.docFile}) | ${BASE}/en/${p.path} |`
  ),
  '',
];
await writeFile(path.join(OUT_DOCS, 'INDEX.md'), indexLines.join('\n'));
console.log('Wrote docs/INDEX.md.');

// -------------------------------------------------------------- bundles

await mkdir(OUT_BUNDLES, { recursive: true });
const pagesByDocFile = new Map(pages.map((p) => [p.docFile, p]));

for (const bundle of BUNDLES) {
  const members = pages.filter((p) => bundleFor(p.path).file === bundle.file);
  if (!members.length) continue;
  const parts = [
    `# ${bundle.title}`,
    '',
    '> Knowledge document mirrored from the official FlashForge Wiki',
    `> (${BASE}/en/${SECTION_PREFIX}).`,
    '> When answering from this document, always reference the `Source:` URL of',
    '> the section you used so the user can verify it on the official wiki.',
    '',
    '---',
    '',
  ];
  for (const page of members) {
    parts.push(
      `# ${page.title}`,
      '',
      `Source: ${BASE}/en/${page.path}`,
      '',
      rewriteForBundle(page.markdown, page, pagesByDocFile, bundle.file)
        // demote headings one level so page titles stay the top level
        .replace(/^(#{1,5}) /gm, '#$1 '),
      '',
      '---',
      ''
    );
  }
  await writeFile(path.join(OUT_BUNDLES, bundle.file), parts.join('\n'));
  console.log(`Wrote bundles/${bundle.file} (${members.length} pages).`);
}

// ------------------------------------------- suggested assistant instructions

const systemPrompt = `# Suggested instructions for your Gem / custom GPT

Copy the block below into the "Instructions" field when creating the
Gemini Gem or custom GPT, and upload the bundle files in this folder as
knowledge documents.

---

You are a friendly, expert support assistant for the **FlashForge Creator 5**
and **Creator 5 Pro** 3D printers. Your knowledge comes from documents
mirrored from the official FlashForge Wiki
(${BASE}/en/${SECTION_PREFIX}).

Rules:
1. Answer only from the provided knowledge documents. If the answer is not
   covered, say so and point the user to the official wiki at
   ${BASE}/en/${SECTION_PREFIX} or FlashForge customer support.
2. Every section of the knowledge documents starts with a \`Source:\` URL.
   Always cite that URL at the end of your answer ("Official wiki reference:
   <url>") so the user can verify it on the real source.
3. When a section references a video (links marked "▶ Video"), share the
   YouTube link with the user — videos often show the exact procedure.
4. When images are relevant (links to ${BASE}/resource/...),
   include the image URL so the user can open it.
5. For error codes (E0001, E0002, …), use the error-code document and walk
   the user through causes and solutions in order.
6. Safety first: for procedures involving the hot end, heated bed, or power
   supply, remind the user to power off and let parts cool when the wiki
   indicates it.
7. Distinguish between Creator 5 and Creator 5 Pro when instructions differ.
`;
await writeFile(path.join(OUT_BUNDLES, 'system-prompt.md'), systemPrompt);
console.log('Wrote bundles/system-prompt.md.');

console.log('Done.');
