/**
 * Validates the generated knowledge base:
 *  1. every relative .md link in docs/ resolves to an existing file
 *  2. a sample of image / source URLs returns HTTP 200
 */
import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const DOCS = path.resolve('docs');

async function* mdFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* mdFiles(full);
    else if (entry.name.endsWith('.md')) yield full;
  }
}

const LINK_RX = /\]\(([^)\s]+)\)/g;
let broken = 0;
let relCount = 0;
const urls = new Set();

for await (const file of mdFiles(DOCS)) {
  const text = await readFile(file, 'utf8');
  for (const [, target] of text.matchAll(LINK_RX)) {
    if (/^https?:\/\//.test(target)) {
      // Strip #fragment: fetch ignores it, and section anchors would flood
      // the sample with duplicates of the same page.
      urls.add(target.split('#')[0]);
      continue;
    }
    if (target.startsWith('#')) continue;
    const [purePath] = target.split('#');
    if (!purePath.endsWith('.md')) continue;
    relCount++;
    const resolved = path.resolve(path.dirname(file), decodeURI(purePath));
    if (!existsSync(resolved)) {
      broken++;
      console.log(`BROKEN: ${path.relative(DOCS, file)} -> ${target}`);
    }
  }
  for (const [, src] of text.matchAll(/!\[[^\]]*\]\(([^)\s]+)\)/g)) {
    if (/^https?:\/\//.test(src)) urls.add(src);
  }
}
console.log(`Relative .md links checked: ${relCount}, broken: ${broken}`);

// Sample remote URLs (wiki-hosted only; externals are out of our control).
const wikiUrls = [...urls].filter((u) => u.startsWith('https://wiki.flashforge.com'));
const sample = wikiUrls.filter((_, i) => i % Math.ceil(wikiUrls.length / 40) === 0);
console.log(`Wiki URLs found: ${wikiUrls.length}, sampling ${sample.length}…`);
let bad = 0;
for (const url of sample) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    if (!res.ok) {
      bad++;
      console.log(`HTTP ${res.status}: ${url}`);
    }
  } catch (err) {
    bad++;
    console.log(`FAIL ${url}: ${err.message}`);
  }
}
console.log(`Sampled URL failures: ${bad}`);
process.exit(broken || bad ? 1 : 0);
