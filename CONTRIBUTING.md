# Contributing

Everything under `docs/` and `bundles/` is **generated** by scraping the official
FlashForge wiki — don't edit those files, they get overwritten.

But you're welcome to add **your own guides** (tips, mods, fixes, community
know-how) that aren't in the official wiki. Those live in `community/` and are
folded into a separate, clearly-labeled **unofficial** bundle
(`bundles/08-community.md`) for the Gem / custom GPT.

## Add a guide

1. Create a folder `community/<short-slug>/` and copy `community/_template.md`
   into it as `README.md` (e.g. `community/bed-leveling-tips/README.md`). Put any
   files the guide references (configs, scripts, zips) in that **same folder** and
   link them relatively, e.g. `[macro.cfg](macro.cfg)`.
2. Fill in the frontmatter. Three fields are **required**:

   ```
   ---
   title: "Bed leveling tips"   # required
   created: 2026-07-09          # required — date first added (YYYY-MM-DD)
   updated: 2026-07-09          # required — date of the last change (YYYY-MM-DD)
   author: "Your name or @github"   # optional
   source: https://...              # optional external reference
   tags: "root, mainsail"   # optional — comma-separated topical tags
   ---
   ```

   When you edit an existing guide later, bump `updated` to that day.
3. Write the guide in Markdown below the frontmatter. Use `##`, `###`… for
   sections (they're demoted one level automatically in the bundle).
4. Run `bun run community` to validate the frontmatter and preview
   `bundles/08-community.md`.
5. Open a pull request against `main`.

## Rules

- **Be accurate.** Test what you write; mark anything uncertain as such.
- **Don't copy the official wiki verbatim** — link to it instead. This is for
  content that *isn't* already covered officially.
- **It's unofficial.** Your guide is labeled as community-contributed, not
  FlashForge official. Don't present it as if it came from FlashForge.
- **Licensing.** By opening a PR you agree your contribution can be included and
  redistributed as part of this repository.
- **Review.** The maintainer reviews and merges PRs. A guide won't reach the
  Gem/GPT bundle until it's merged and the bundle is regenerated
  (`bun run community`, or the weekly refresh).
