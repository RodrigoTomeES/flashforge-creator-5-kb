---
title: "Using more than 256x256x256"
created: 2026-07-11
updated: 2026-07-11
author: "//Cart"
source: https://discord.com/channels/1524322283911381093/1524334562573025343/threads/1525302040434315345
tags: "slicer, bed"
---

The bed is physically **260×260(×270)**, not the advertised 256×256×256 — it's
already set that way in the firmware. That means you can use a bit more area
than you paid for.

## Prerequisites

- None — this is a slicer-only change (no root or firmware modifications).

## Steps

1. In your slicer, open the machine settings → **Basic information → Printable
   area** and set it to **258×260**.
   - Using **258×260** (rather than the full 260×260) keeps a small margin so
     the head doesn't crash into parked heads.
   - **Keep Z at ≤ 256.** Don't use more than 256 in Z — it can cause issues
     with objects.
2. Attach the matching build-plate texture and model so the plate renders
   correctly. They ship with the slicer at:

   ```
   (slicer install)/resources/profiles/Flashforge/
   ```
   - Texture: `flashforge_c5_buildplate_texture.png`
   - Model: `flashforge_c5_buildplate_model.stl`

## Heads-up (usable area near the edges)

You may not be able to use the full extra area in practice. As reported by
`salocain`: a purge / prime-tower macro that runs to remove the prime tower
can't reach the whole bed — the area in **front** of the bed is longer than the
hotend can travel, and on the **side** you can get too close to the hotend
holder / the parked head in the rack. Leave clearance near those edges.
