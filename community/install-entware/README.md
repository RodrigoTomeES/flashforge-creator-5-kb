---
title: "Install Entware"
created: 2026-07-11
updated: 2026-07-13
author: "ano"
source: https://discord.com/channels/1524322283911381093/1524334562573025343/threads/1525607281842983104
tags: "root, entware"
---

Install [Entware](https://github.com/Entware/Entware) — the `opkg` package
manager — to `/opt`, so you can install real packages on the printer (needed for
[Update Moonraker](#update-moonraker)).

## Prerequisites

- [Root](#get-root).
- [Enable legacy NaN MIPS binaries](#enable-legacy-nan-mips-binaries) — **required, Entware won't work without it.**

## Steps

1. Install Entware and add it to your `PATH`:

   ```sh
   mkdir -p /usr/data/bin/opt
   mount --bind /usr/data/bin/opt /opt
   wget -O - http://bin.entware.net/mipselsf-k3.4/installer/generic.sh | sh
   echo 'export PATH=/opt/bin:/opt/sbin:$PATH' >> /etc/profile
   ```
2. Make it persist across boots. Add this to the top of
   `/usr/prog/app_startup.sh`, **under** the `busybox devmem` line from
   [Enable legacy NaN MIPS binaries](#enable-legacy-nan-mips-binaries):

   ```sh
   # entware
   mount --bind /usr/data/bin/opt /opt
   [ -x /opt/etc/init.d/rc.unslung ] && /opt/etc/init.d/rc.unslung start
   ```
3. To use `opkg` in your **current** shell without re-logging in:

   ```sh
   export PATH=/opt/bin:/opt/sbin:$PATH
   ```

Entware installs to `/opt` (backed by `/usr/data/bin/opt`). You can now use
`opkg` to install packages.
