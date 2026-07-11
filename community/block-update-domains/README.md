---
title: "Block update domains"
created: 2026-07-08
updated: 2026-07-11
author: "ano"
source: https://discord.com/channels/1524322283911381093/1524334562573025343/threads/1524394243668312084
tags: "root, updates, network"
---

Stop the printer from pulling over-the-air (OTA) firmware updates, which can
**overwrite `/etc/passwd` and other changes you make** (for example after
[getting root](#get-root)). Even in LAN-only mode the printer reaches out over
the internet to check for updates on startup and whenever you manually check.

## Prerequisites

- [Root](#get-root).

## Steps

Add these lines to `/etc/hosts` to point the update servers at localhost:

```
127.0.0.1 update.flashforge.com
127.0.0.1 update.sz3dp.com
127.0.0.1 update.cn.sz3dp.com
```

Reboot afterward. The printer will still try to check for updates but the
requests resolve to `127.0.0.1` and go nowhere.
