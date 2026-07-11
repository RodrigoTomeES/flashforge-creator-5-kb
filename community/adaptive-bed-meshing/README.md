---
title: "Adaptive bed meshing"
created: 2026-07-09
updated: 2026-07-11
author: "ano"
source: https://discord.com/channels/1524322283911381093/1524334562573025343/threads/1524722301541679155
tags: "root, klipper, slicer, bed"
---

By default, enabling **"Leveling before print"** in the slicer does a **full**
bed mesh. This mod makes that option do **adaptive** bed meshing instead (only
meshing the area your print actually covers), by making the
`BED_MESH_CALIBRATE` macro always use adaptive meshing when possible.

It's an odd way to achieve it, but short of moving fully off FlashForge's
software (e.g. starting prints via Moonraker), it's the cleanest approach.

## Prerequisites

- [Root](#get-root).
- Orca Slicer with **"Exclude objects"** enabled (otherwise it falls back to full bed meshing).

## Steps

1. Put [`ff_adaptive_mesh.py`](ff_adaptive_mesh.py) in
   `/usr/prog/klipper/klippy/extras`.
2. Add these hooks to `/usr/data/config/printer.macro.cfg`:

   ```ini
   ; adaptive mesh hooks
   [gcode_macro BED_MESH_CALIBRATE]
   rename_existing: _BED_MESH_CALIBRATE
   variable_adaptive_done: 0
   gcode:
     FF_PREPARSE_OBJECTS
     _BED_MESH_CALIBRATE ADAPTIVE=1
     SET_GCODE_VARIABLE MACRO=BED_MESH_CALIBRATE VARIABLE=adaptive_done VALUE=1

   [gcode_macro BED_MESH_PROFILE]
   rename_existing: _BED_MESH_PROFILE
   gcode:
     {% if 'LOAD' in params and printer["gcode_macro BED_MESH_CALIBRATE"].adaptive_done == 1 %}
       {action_respond_info("ff_adaptive: skipping profile load, keeping adaptive mesh")}
       SET_GCODE_VARIABLE MACRO=BED_MESH_CALIBRATE VARIABLE=adaptive_done VALUE=0
     {% else %}
       _BED_MESH_PROFILE {rawparams}
     {% endif %}
   ```

   You can change `_BED_MESH_CALIBRATE ADAPTIVE=1` to add `ADAPTIVE_MARGIN=<x>`
   if you like. **Save with Unix (LF) line endings.**
3. In **Orca Slicer**, enable **"Exclude objects"** — otherwise it falls back to
   full bed meshing.

## Notes

- You have to tick **"Leveling before print"** for **each** print; it defaults
  to off in Orca.
- In `/usr/data/firmwareRes/config/test.json` there's an option
  `keepBedTempPrint` — how many **minutes** the bed heat-soaks before leveling.
  Set it to `0` to disable the soak.
