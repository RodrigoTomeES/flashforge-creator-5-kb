---
title: "Unlock camera to 720p@30"
created: 2026-07-10
updated: 2026-07-11
author: "ano"
source: https://discord.com/channels/1524322283911381093/1524334562573025343/threads/1524988530286264423
tags: "root, camera, firmware"
---

Patch the firmware so the built-in camera streams at **720p@30fps** via mjpg-streamer, instead of the locked-down default.

> ⚠️ **Trade-off.** After this patch the printer's own camera views die — both
> the **cloud camera and the LAN (app) camera are dead**; only the mjpg-streamer
> **web stream** works. Tested in **LAN-only mode**; not tested with cloud
> features.

## Prerequisites

- [Root](#get-root).
- A supported model and firmware: **Creator 5 or 5 Pro** on firmware **1.9.3 or
  1.9.4** (the patched binaries in the attachment only cover these).

## What's in the attachment

[`camera-mod-070926.zip`](camera-mod-070926.zip) contains patched
`firmwareExe` binaries for each supported version, plus `start_webcam.sh`:

```
camera-mod/c5/1.9.3/firmwareExe        camera-mod/c5p/1.9.3/firmwareExe
camera-mod/c5/1.9.4/firmwareExe        camera-mod/c5p/1.9.4/firmwareExe
camera-mod/start_webcam.sh
```

Currently supported: **c5 & c5p, firmware 1.9.3 and 1.9.4**.

## Steps

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
