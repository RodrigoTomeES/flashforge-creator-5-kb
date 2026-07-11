---
title: "Enable Moonraker & Mainsail"
created: 2026-07-09
updated: 2026-07-11
author: "ano"
source: https://discord.com/channels/1524322283911381093/1524334562573025343/threads/1524659571052904459
tags: "root, mainsail, moonraker"
---

The Creator 5 / 5 Pro ships with Moonraker and Mainsail present but disabled.
You can turn them on by uncommenting two lines.

## Prerequisites

- [Root](#get-root).

## Steps

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
