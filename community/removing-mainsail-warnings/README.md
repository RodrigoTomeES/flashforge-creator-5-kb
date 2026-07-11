---
title: "Removing annoying warnings on Mainsail"
created: 2026-07-11
updated: 2026-07-11
author: "//Cart"
source: https://discord.com/channels/1524322283911381093/1524334562573025343/threads/1525400765328523264
tags: "root, mainsail, klipper"
---

Mainsail complains when you aren't using its own configs. This is a modified
`mainsail.cfg` with the SD-card bits disabled (they conflict on this printer), just enough to stop Mainsail being angry.

> ⚠️ The macros/commands in the file exist **only to keep Mainsail quiet** —
> the author does **not** recommend actually running them directly.

## Prerequisites

- [Root](#get-root).
- Mainsail enabled — see
  [Enable Moonraker & Mainsail](#enable-moonraker-mainsail).

## Steps

1. Upload [`mainsail.cfg`](mainsail.cfg) to the printer's config directory.
2. Add this line near the **top** of `printer.cfg` (below the rest of the includes):

   ```
   [include mainsail.cfg]
   ```
3. Restart Klipper / reboot. The warnings should be gone.
