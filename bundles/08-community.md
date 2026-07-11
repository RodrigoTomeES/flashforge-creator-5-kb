# Creator 5 Series — Community Contributions (Unofficial)

> ⚠️ **Unofficial content.** The sections below are contributed by the
> community and are **NOT** part of the official FlashForge wiki. They come
> with no guarantee of accuracy — verify before relying on them, and prefer
> the official documents when they conflict.

## Contents

- [Adaptive bed meshing](#adaptive-bed-meshing)
- [Block update domains](#block-update-domains)
- [Enable Moonraker & Mainsail](#enable-moonraker-mainsail)
- [Get Root](#get-root)
- [Using more than 256x256x256](#using-more-than-256x256x256)
- [Removing annoying warnings on Mainsail](#removing-annoying-warnings-on-mainsail)
- [Unlock camera to 720p@30](#unlock-camera-to-720p30)
- [Update Mainsail](#update-mainsail)

---

# Adaptive bed meshing

Added: 2026-07-09 · Updated: 2026-07-11
Contributed by: ano
Reference: https://discord.com/channels/1524322283911381093/1524334562573025343/threads/1524722301541679155
Tags: root, klipper, slicer, bed

By default, enabling **"Leveling before print"** in the slicer does a **full**
bed mesh. This mod makes that option do **adaptive** bed meshing instead (only
meshing the area your print actually covers), by making the
`BED_MESH_CALIBRATE` macro always use adaptive meshing when possible.

It's an odd way to achieve it, but short of moving fully off FlashForge's
software (e.g. starting prints via Moonraker), it's the cleanest approach.

### Prerequisites

- [Root](#get-root).
- Orca Slicer with **"Exclude objects"** enabled (otherwise it falls back to full bed meshing).

### Steps

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

### Notes

- You have to tick **"Leveling before print"** for **each** print; it defaults
  to off in Orca.
- In `/usr/data/firmwareRes/config/test.json` there's an option
  `keepBedTempPrint` — how many **minutes** the bed heat-soaks before leveling.
  Set it to `0` to disable the soak.

---

# Block update domains

Added: 2026-07-08 · Updated: 2026-07-11
Contributed by: ano
Reference: https://discord.com/channels/1524322283911381093/1524334562573025343/threads/1524394243668312084
Tags: root, updates, network

Stop the printer from pulling over-the-air (OTA) firmware updates, which can
**overwrite `/etc/passwd` and other changes you make** (for example after
[getting root](#get-root)). Even in LAN-only mode the printer reaches out over
the internet to check for updates on startup and whenever you manually check.

### Prerequisites

- [Root](#get-root).

### Steps

Add these lines to `/etc/hosts` to point the update servers at localhost:

```
127.0.0.1 update.flashforge.com
127.0.0.1 update.sz3dp.com
127.0.0.1 update.cn.sz3dp.com
```

Reboot afterward. The printer will still try to check for updates but the
requests resolve to `127.0.0.1` and go nowhere.

---

# Enable Moonraker & Mainsail

Added: 2026-07-09 · Updated: 2026-07-11
Contributed by: ano
Reference: https://discord.com/channels/1524322283911381093/1524334562573025343/threads/1524659571052904459
Tags: root, mainsail, moonraker

The Creator 5 / 5 Pro ships with Moonraker and Mainsail present but disabled.
You can turn them on by uncommenting two lines.

### Prerequisites

- [Root](#get-root).

### Steps

In `/usr/prog/klipper/start.sh`, remove the leading `#` from these two lines
near the bottom:

```sh
#/usr/prog/nginx/sbin/nginx -p /usr/prog/nginx -c /usr/prog/nginx/conf/nginx.conf
#/usr/prog/klipper/moonrakerDaemon start
```

so they become:

```sh
/usr/prog/nginx/sbin/nginx -p /usr/prog/nginx -c /usr/prog/nginx/conf/nginx.conf
/usr/prog/klipper/moonrakerDaemon start
```

Reboot. After that:

- **Mainsail** is on port **80** → `http://<printer-ip>/`
- **Moonraker** is on port **7125**

The bundled Mainsail is quite old — see [Update Mainsail](#update-mainsail) to
pull the latest release, and [Removing annoying warnings on
Mainsail](#removing-annoying-warnings-on-mainsail) to quiet its config nags.

---

# Get Root

Added: 2026-07-08 · Updated: 2026-07-11
Contributed by: ano
Reference: https://discord.com/channels/1524322283911381093/1524334562573025343/threads/1524337489886842942
Tags: root, ssh, firmware

Get a root shell over SSH on the Creator 5 / 5 Pro by having the printer run a
script off a USB drive at boot. This is the prerequisite for most other mods
here (enabling Moonraker/Mainsail, patching firmware, etc.).

> ⚠️ **Security note.** This adds a Unix user `pwned` with a **known, public
> password** and gives it root. It lowers the security of your printer. Only do
> this on a printer you control and keep on a **trusted, isolated network** —
> never expose an SSH-rooted printer to the open internet. After rooting, you
> almost certainly want to [block update domains](#block-update-domains) so an
> over-the-air update doesn't overwrite `/etc/passwd` and undo your changes.

### Prerequisites

- A USB flash drive. **USB 3.1 drives may not work — use a USB 2.0 drive if you
  have problems.**
- The printer on a network so you can SSH into it afterward.

### Steps

1. Format the USB drive as **FAT32**.
2. Put `runFirmwareExe.sh` in the **root** of the drive
   ([`runFirmwareExe.sh`](runFirmwareExe.sh)).
3. Turn the printer off, plug the USB drive in, then power it on.
4. It will **hang forever on the FlashForge boot logo**. Wait about **1 minute**
   to be sure the script ran.
5. Turn the printer off, unplug the USB drive, then power it on again.
6. SSH in:

   ```
   ssh pwned@<printer-ip>
   # password: letmein
   ```

If you edit the script, make sure it's saved with **Unix (LF) line endings** or
the printer won't run it.

### How it works

The script simply appends a pre-hashed root account to `/etc/passwd`:

```sh
#!/bin/sh
echo 'pwned:$1$Z8nL7oiO$szyo3IN6J1fuTM1zQ9Nw7.:0:0::/root:/bin/sh' >> /etc/passwd
exit 0
```

(`uid 0` / `gid 0` = root; the password hash decodes to `letmein`.)

---

# Using more than 256x256x256

Added: 2026-07-11 · Updated: 2026-07-11
Contributed by: //Cart
Reference: https://discord.com/channels/1524322283911381093/1524334562573025343/threads/1525302040434315345
Tags: slicer, bed

The bed is physically **260×260(×270)**, not the advertised 256×256×256 — it's
already set that way in the firmware. That means you can use a bit more area
than you paid for.

### Prerequisites

- None — this is a slicer-only change (no root or firmware modifications).

### Steps

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

### Heads-up (usable area near the edges)

You may not be able to use the full extra area in practice. As reported by
`salocain`: a purge / prime-tower macro that runs to remove the prime tower
can't reach the whole bed — the area in **front** of the bed is longer than the
hotend can travel, and on the **side** you can get too close to the hotend
holder / the parked head in the rack. Leave clearance near those edges.

---

# Removing annoying warnings on Mainsail

Added: 2026-07-11 · Updated: 2026-07-11
Contributed by: //Cart
Reference: https://discord.com/channels/1524322283911381093/1524334562573025343/threads/1525400765328523264
Tags: root, mainsail, klipper

Mainsail complains when you aren't using its own configs. This is a modified
`mainsail.cfg` with the SD-card bits disabled (they conflict on this printer), just enough to stop Mainsail being angry.

> ⚠️ The macros/commands in the file exist **only to keep Mainsail quiet** —
> the author does **not** recommend actually running them directly.

### Prerequisites

- [Root](#get-root).
- Mainsail enabled — see
  [Enable Moonraker & Mainsail](#enable-moonraker-mainsail).

### Steps

1. Upload [`mainsail.cfg`](mainsail.cfg) to the printer's config directory.
2. Add this line near the **top** of `printer.cfg` (below the rest of the includes):

   ```
   [include mainsail.cfg]
   ```
3. Restart Klipper / reboot. The warnings should be gone.

---

# Unlock camera to 720p@30

Added: 2026-07-10 · Updated: 2026-07-11
Contributed by: ano
Reference: https://discord.com/channels/1524322283911381093/1524334562573025343/threads/1524988530286264423
Tags: root, camera, firmware

Patch the firmware so the built-in camera streams at **720p@30fps** via mjpg-streamer, instead of the locked-down default.

> ⚠️ **Trade-off.** After this patch the printer's own camera views die — both
> the **cloud camera and the LAN (app) camera are dead**; only the mjpg-streamer
> **web stream** works. Tested in **LAN-only mode**; not tested with cloud
> features.

### Prerequisites

- [Root](#get-root).
- A supported model and firmware: **Creator 5 or 5 Pro** on firmware **1.9.3 or
  1.9.4** (the patched binaries in the attachment only cover these).

### What's in the attachment

[`camera-mod-070926.zip`](camera-mod-070926.zip) contains patched
`firmwareExe` binaries for each supported version, plus `start_webcam.sh`:

```
camera-mod/c5/1.9.3/firmwareExe        camera-mod/c5p/1.9.3/firmwareExe
camera-mod/c5/1.9.4/firmwareExe        camera-mod/c5p/1.9.4/firmwareExe
camera-mod/start_webcam.sh
```

Currently supported: **c5 & c5p, firmware 1.9.3 and 1.9.4**.

### Steps

1. Back up the stock binary: `/usr/prog/PROGRAM/software/firmwareExe`.
2. Pick the patched `firmwareExe` for your model and firmware version from the
   zip and replace the stock one with it.
3. `chmod 755 firmwareExe`
4. Place `start_webcam.sh` in `/usr/prog/klipper`.
5. `chmod 755 start_webcam.sh`
6. Add this to the **bottom** of `/usr/prog/klipper/start.sh`:

   ```sh
   sh /usr/prog/klipper/start_webcam.sh
   ```
7. Reboot.

The UI will show an error, **"Failed to open camera"** — that's expected.
mjpg-streamer will be running on port **8080** at 720p@30:

```
http://<printer-ip>:8080/
```

`start_webcam.sh` waits for `/dev/video0`, then runs mjpg-streamer with
`input_uvc.so -r 1280x720 -f 30` and `output_http.so -p 8080`, relaunching it if
it ever exits.

---

# Update Mainsail

Added: 2026-07-10 · Updated: 2026-07-11
Contributed by: //Cart
Reference: https://discord.com/channels/1524322283911381093/1524334562573025343/threads/1525250487367106680
Tags: root, mainsail

The printer ships with an ancient version of Mainsail. You can replace it with
the latest release.

### Prerequisites

- [Root](#get-root).
- Moonraker & Mainsail enabled — see
  [Enable Moonraker & Mainsail](#enable-moonraker-mainsail).

### Steps

1. Enable Mainsail first via [Enable Moonraker &
   Mainsail](#enable-moonraker-mainsail).
2. Move the existing Mainsail folder aside as a backup (to a temp folder or to
   your computer):

   ```sh
   mv /usr/data/mainsail /usr/data/mainsailbackup
   ```
3. Create a fresh Mainsail folder:

   ```sh
   cd /usr/data/
   mkdir /usr/data/mainsail
   ```
4. Upload the Mainsail zip into `/usr/data/mainsail/` by any means (e.g.
   `scp -O`). Latest release:

   ```
   https://github.com/mainsail-crew/mainsail/releases/latest/download/mainsail.zip
   ```
5. SSH back in and, from inside that folder, unzip it:

   ```sh
   cd /usr/data/mainsail
   unzip mainsail.zip
   ```
6. Reboot. You're now on the latest Mainsail.

---
