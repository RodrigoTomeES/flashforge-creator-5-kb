# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A scraper that mirrors the FlashForge Creator 5 / 5 Pro section of the official wiki (https://wiki.flashforge.com/en/creator-series/creator-5-series) into markdown files used as the knowledge base for a Gemini Gem / custom GPT. `docs/` and `bundles/` are **generated output** — never hand-edit them; change `scrape.mjs` and re-run.

## Commands

```bash
npm run scrape   # full re-scrape: deletes nothing, but regenerate cleanly with: rm -rf docs bundles && npm run scrape
npm run check    # validates all relative .md links resolve + samples remote wiki URLs (HEAD requests); exits 1 on failure
```

There are no tests or linters; `npm run check` after a scrape is the verification step.

## How the wiki works (hard-won facts, don't rediscover)

- The wiki is **Wiki.js**, fully server-rendered — plain `fetch` returns complete article HTML. No headless browser needed.
- Page discovery uses the **public GraphQL API**: `POST https://wiki.flashforge.com/graphql` with `{ pages { list(locale:"en") { id path title } } }`. Raw markdown source (`pages.single`, `/s/en/...`) returns **403 for guests** — that's why we convert rendered HTML instead.
- Article content lives in `<template slot="contents"><div>…</div></template>`. **Cheerio cannot `.find()` inside `<template>` elements** (parse5 detached fragment) — `extractContent()` re-loads the template's inner HTML into a fresh cheerio document. Any DOM manipulation must go through that helper or it will silently no-op.
- Internal links carry `class="is-internal-link"`, images are relative `/resource/pictures/...` paths (Chinese segments percent-encoded), and YouTube videos are plain `youtu.be` anchor links (embeds are client-side only).

## Pipeline architecture (scrape.mjs, single file)

1. **Discovery**: GraphQL listing filtered to `creator-series/creator-5-series*` paths, plus `EXTRA_SEEDS` (relevant pages orphaned under typo'd wiki paths like `creator-ser/...`), plus BFS over `is-internal-link` hrefs matching `DOC_SET_PREFIXES`.
2. **Conversion** (`pageToMarkdown`): Turndown + GFM plugin. Link policy — in-scope internal links become **relative `.md` deep links**; out-of-scope internal links, same-page `#anchors`, images and iframes become absolute wiki URLs; YouTube link text is prefixed `▶ Video:`. Every heading with an id gets a trailing `[wiki §]` link to its exact wiki section URL — that's the section-level citation contract for the assistant, keep it intact.
3. **Per-page output**: `docs/<path>.md` mirroring the wiki tree (section prefix stripped; stray pages under `docs/_linked/`). Every file gets frontmatter `title:`/`source:` plus a visible "Official wiki page:" line — the source URL is the citation contract for the AI assistant, keep it intact.
4. **`docs/INDEX.md`**: title → local file → original URL table.
5. **Bundles**: pages grouped by the `BUNDLES` regex matchers into 7 standalone topic files for Gem/GPT upload. `rewriteForBundle` converts relative links to in-bundle anchors when the target landed in the same bundle, otherwise back to absolute wiki URLs (bundles are uploaded standalone, so relative file links would be dead). Content headings get demoted one level under each page's `# title`. Also emits `bundles/system-prompt.md` (suggested Gem/GPT instructions).

If you add/remove bundle matchers, note a page always falls into exactly one bundle: first `BUNDLES` entry whose `match()` hits, defaulting to the overview bundle.

## Conventions

- Local git identity for commits: `RodrigoTomeES <hi@rodrigotome.es>` (already set in `.git/config`).
- Keep crawling polite: sequential fetches with `DELAY_MS` delay and retry; don't parallelize aggressively against the wiki.
