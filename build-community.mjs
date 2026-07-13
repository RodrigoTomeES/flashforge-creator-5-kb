/**
 * Builds bundles/08-community.md from hand-authored community/*.md files.
 *
 * Community sections are NOT official FlashForge content — they live in
 * community/ (never touched by the scraper) and are folded into a single,
 * clearly-labeled "unofficial" bundle for Gem/GPT upload. Independent of the
 * wiki scrape, so it runs standalone (`bun run community`) in ~no time.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const COMMUNITY = path.resolve('community');
const OUT = path.resolve('bundles', '08-community.md');
const INDEX = path.resolve('community', 'INDEX.md');
const DATE_RX = /^\d{4}-\d{2}-\d{2}$/;
// The bundle is uploaded standalone, so relative asset links are dead — point them
// at the canonical repo copy on `main`.
const RAW =
  'https://raw.githubusercontent.com/RodrigoTomeES/flashforge-wiki-kb/main/community';

// Same slug rule as scrape.mjs:195 so bundle anchors match the "# {title}" heading.
const slugify = (s) =>
  s.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');

/** Split "---\n…\n---\n" frontmatter from the markdown body. */
function parseFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: text.trim() };
  const data = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (!kv) continue;
    // Strip surrounding quotes and trailing "# comment".
    let val = kv[2].replace(/\s+#.*$/, '').trim().replace(/^["']|["']$/g, '');
    data[kv[1]] = val;
  }
  return { data, body: m[2].trim() };
}

export async function buildCommunityBundle() {
  if (!existsSync(COMMUNITY)) {
    console.log('No community/ directory; skipping community bundle.');
    return;
  }
  // Each article is a folder community/<slug>/ holding README.md plus its own assets.
  // ponytail: one level deep; nest deeper only if an article ever needs sub-pages.
  const dirs = (await readdir(COMMUNITY, { withFileTypes: true }))
    .filter((e) => e.isDirectory() && !e.name.startsWith('_'))
    .map((e) => e.name)
    .sort();

  const sections = [];
  const errors = [];
  for (const dir of dirs) {
    const rel = `${dir}/README.md`;
    const full = path.join(COMMUNITY, dir, 'README.md');
    if (!existsSync(full)) {
      errors.push(`${dir}/: missing README.md`);
      continue;
    }
    const { data, body } = parseFrontmatter(await readFile(full, 'utf8'));
    for (const req of ['title', 'created', 'updated']) {
      if (!data[req]) errors.push(`${rel}: missing required frontmatter "${req}"`);
    }
    for (const d of ['created', 'updated']) {
      if (data[d] && !DATE_RX.test(data[d]))
        errors.push(`${rel}: "${d}" must be YYYY-MM-DD, got "${data[d]}"`);
    }
    sections.push({ dir, data, body });
  }

  if (errors.length) {
    console.error('Community bundle validation failed:');
    for (const e of errors) console.error(`  ${e}`);
    process.exitCode = 1;
    throw new Error(`${errors.length} community frontmatter error(s)`);
  }

  if (!sections.length) {
    console.log('No community sections found; community bundle not written.');
    return;
  }

  const parts = [
    '# Creator 5 Series — Community Contributions (Unofficial)',
    '',
    '> ⚠️ **Unofficial content.** The sections below are contributed by the',
    '> community and are **NOT** part of the official FlashForge wiki. They come',
    '> with no guarantee of accuracy — verify before relying on them, and prefer',
    '> the official documents when they conflict.',
    '',
    '## Community',
    '',
    'Join the community for help and to share mods:',
    '',
    '- Discord: https://discord.gg/pchjzCwwVS',
    '- Telegram (English): https://t.me/flashforgecreator5series',
    '- Telegram (Español): https://t.me/flashforgecreator5es',
    '',
    '## Contents',
    '',
    ...sections.map(({ data }) => `- [${data.title}](#${slugify(data.title)})`),
    '',
    '---',
    '',
  ];
  for (const { dir, data, body } of sections) {
    const tags = data.tags
      ? data.tags.split(',').map((t) => t.trim()).filter(Boolean)
      : [];
    // Rewrite colocated asset links (e.g. [x](runFirmwareExe.sh)) to raw repo URLs
    // so they resolve in the standalone bundle.
    let text = body;
    const assets = (await readdir(path.join(COMMUNITY, dir), { withFileTypes: true }))
      .filter((e) => e.isFile() && e.name !== 'README.md')
      .map((e) => e.name);
    for (const a of assets) text = text.replaceAll(`](${a})`, `](${RAW}/${dir}/${a})`);
    parts.push(`# ${data.title}`, '');
    parts.push(`Added: ${data.created} · Updated: ${data.updated}`);
    if (data.author) parts.push(`Contributed by: ${data.author}`);
    if (data.source) parts.push(`Reference: ${data.source}`);
    if (tags.length) parts.push(`Tags: ${tags.join(', ')}`);
    parts.push(
      '',
      // demote headings one level so section titles stay the top level
      text.replace(/^(#{1,5}) /gm, '#$1 '),
      '',
      '---',
      ''
    );
  }

  await writeFile(OUT, parts.join('\n'));
  console.log(`Wrote bundles/08-community.md (${sections.length} sections).`);

  // Human-facing index for browsing community/ on GitHub (like docs/INDEX.md).
  const indexLines = [
    '# Community Contributions — Index',
    '',
    'Unofficial, community-contributed guides. See [../CONTRIBUTING.md](../CONTRIBUTING.md) to add one.',
    '',
    '| Guide | Added | Updated | File | Author | Tags |',
    '|---|---|---|---|---|---|',
    ...sections.map(
      ({ dir, data }) =>
        `| ${data.title} | ${data.created} | ${data.updated} | [${dir}/](${dir}/) | ${data.author ?? ''} | ${data.tags ?? ''} |`
    ),
    '',
  ];
  await writeFile(INDEX, indexLines.join('\n'));
  console.log(`Wrote community/INDEX.md (${sections.length} entries).`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  // Standalone: report the validation error cleanly, no stack trace.
  await buildCommunityBundle().catch(() => process.exit(1));
}
