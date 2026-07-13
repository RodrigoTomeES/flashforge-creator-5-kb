---
title: "Get Root"
created: 2026-07-08
updated: 2026-07-13
author: "ano"
source: https://discord.com/channels/1524322283911381093/1524334562573025343/threads/1524337489886842942
tags: "root, ssh, firmware"
---

Get a root shell over SSH on the Creator 5 / 5 Pro by having the printer run a
script off a USB drive at boot. This is the prerequisite for most other mods
here (enabling Moonraker/Mainsail, patching firmware, etc.).

> ⚠️ **Security note.** This adds a Unix user `pwned` with a **known, public
> password** and gives it root. It lowers the security of your printer. Only do
> this on a printer you control and keep on a **trusted, isolated network** —
> never expose an SSH-rooted printer to the open internet. After rooting, you
> almost certainly want to [block update domains](#block-update-domains) so an
> over-the-air update doesn't overwrite `/etc/passwd` and undo your changes.

## Prerequisites

- A USB flash drive. **USB 3.1 drives may not work — use a USB 2.0 drive if you
  have problems.**
- The printer on a network so you can SSH into it afterward.

## Steps

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

## How it works

The script creates a persistent home directory and appends a pre-hashed root
account to `/etc/passwd`:

```sh
#!/bin/sh
mkdir -p /usr/data/home/pwned
echo 'pwned:$1$Z8nL7oiO$szyo3IN6J1fuTM1zQ9Nw7.:0:0::/usr/data/home/pwned:/bin/sh' >> /etc/passwd
exit 0
```

(`uid 0` / `gid 0` = root; the password hash decodes to `letmein`.) The home is
`/usr/data/home/pwned` — on writable persistent storage, **not** the read-only
`/root` — which later mods like [Update Moonraker](#update-moonraker) need.

> **Already rooted with an older script?** If your `pwned` user still points at
> `/root`, edit `/etc/passwd` and change its home field from `/root` to
> `/usr/data/home/pwned` (and `mkdir -p /usr/data/home/pwned`), otherwise
> updating Moonraker will fail on the read-only home.
