---
title: "Update Mainsail"
created: 2026-07-10
updated: 2026-07-11
author: "//Cart"
source: https://discord.com/channels/1524322283911381093/1524334562573025343/threads/1525250487367106680
tags: "root, mainsail"
---

The printer ships with an ancient version of Mainsail. You can replace it with
the latest release.

## Prerequisites

- [Root](#get-root).
- Moonraker & Mainsail enabled — see
  [Enable Moonraker & Mainsail](#enable-moonraker-mainsail).

## Steps

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
