# FlashForge Creator 5 Wiki → Markdown Knowledge Base

Mirrors the **FlashForge Creator 5 / Creator 5 Pro** section of the
[official FlashForge Wiki](https://wiki.flashforge.com/en/creator-series/creator-5-series)
into markdown files, ready to use as the knowledge base for a **Gemini Gem**
or **custom GPT** support assistant.

Every generated file carries the original wiki URL so the assistant can always
cite the official source. All content belongs to FlashForge — this repo only
mirrors it for personal AI-assistant use.

## Usage

```bash
npm install
npm run scrape   # scrape the wiki and regenerate docs/ and bundles/
npm run check    # validate links (relative .md links + sampled remote URLs)
```

To regenerate from scratch: `rm -rf docs bundles && npm run scrape`.

No headless browser is needed: the wiki is Wiki.js and serves fully
server-rendered HTML. Pages are discovered through the wiki's public GraphQL
listing plus a crawl of internal links, fetched politely (sequential, with a
small delay).

## Output

### `docs/` — faithful per-page mirror (59 pages)

One markdown file per wiki page, mirroring the wiki's URL structure:

- Frontmatter with `title:` and `source:` (the canonical wiki URL), plus a
  visible "Official wiki page:" line.
- Every heading ends with a `[wiki §]` link to the **exact section** on the
  wiki (e.g. `…/error_code_creator_5#e0002-communication-with-mcu-interrupted`),
  so the assistant can cite sections, not just pages.
- Internal links rewritten as **relative deep links** between the `.md` files.
- Images and videos kept as **absolute URLs** to the wiki / YouTube
  (video links are marked `▶ Video:`).
- [`docs/INDEX.md`](docs/INDEX.md): map of every page → local file → original URL.

### `bundles/` — consolidated files for Gem/GPT upload

Custom GPTs allow ~20 knowledge files and Gemini Gems ~10, so the 59 pages are
also consolidated into 7 topic files:

| Bundle | Content |
|---|---|
| `01-overview-and-quick-start.md` | Section index, intro, unboxing, setup, user guides |
| `02-user-manual.md` | Day-to-day printing manual |
| `03-faq.md` | FAQ for Creator 5 and Creator 5 Pro |
| `04-troubleshooting.md` | Symptom-based troubleshooting |
| `05-error-codes.md` | Error code list (E0001…) with causes and solutions |
| `06-maintenance.md` | Cleaning, lubrication, part replacement |
| `07-firmware-and-software.md` | Firmware updates, release notes, Flash Studio |
| `08-community.md` | **Unofficial** community-contributed guides (see below) |

Each section inside a bundle starts with its `Source:` URL. Links between
pages in the same bundle become in-document anchors; links across bundles fall
back to the original wiki URL, so each file works standalone.

## Creating the Gem / custom GPT

1. Upload the 7 `bundles/*.md` files as knowledge documents.
2. Paste the instruction block from
   [`bundles/system-prompt.md`](bundles/system-prompt.md) into the
   Gem/GPT instructions — it tells the assistant to always cite the official
   wiki URL, share video/image links, and distinguish Creator 5 vs 5 Pro.

## Contributing

`docs/` and `bundles/` are generated from the official wiki — don't edit them.
But you can add your **own guides** (things not covered officially) under
`community/`. They're hand-authored Markdown that the scraper never touches, and
they're folded into a separate **unofficial** bundle (`bundles/08-community.md`).

Start from `community/_template.md`, run `bun run community` to build the bundle,
and open a PR. See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the full guide.

## Updating

When the wiki changes, re-run `npm run scrape` followed by `npm run check`
and commit the regenerated `docs/` and `bundles/`. `docs/` and `bundles/` are
generated output — edit `scrape.mjs`, never the markdown files.
