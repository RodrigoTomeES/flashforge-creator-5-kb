---
title: "Enable legacy NaN MIPS binaries"
created: 2026-07-11
updated: 2026-07-13
author: "ano"
source: https://discord.com/channels/1524322283911381093/1524334562573025343/threads/1525605603945353327
tags: "root, kernel, entware"
---

The C5-series kernel is compiled to only run MIPS binaries that carry the
`EF_MIPS_NAN2008` flag, but the hardware can run binaries without it. Very few
prebuilt packages have that flag (you'd otherwise have to build them yourself),
so this mod patches a "magic" memory offset on every boot to let the kernel run
legacy-NaN binaries. It's the foundation for [Install Entware](#install-entware)
and [Update Moonraker](#update-moonraker).

The patched field is [this one in the Linux MIPS ELF loader](https://github.com/torvalds/linux/blob/59dee6d28756c629f3a0bb56266f80e36ef7c99c/arch/mips/kernel/elf.c#L164).

> ⚠️ **Version-specific.** The offset depends on your kernel package version.
> Only apply this if your version is in the list below — a wrong offset patches
> the wrong memory.

## Prerequisites

- [Root](#get-root).

## Steps

1. Check your kernel package version:

   ```sh
   ls /usr/prog/PROGRAM/kernel/
   ```
2. Take the **highest** version number and map it to its offset:

   | Kernel package | Offset |
   |---|---|
   | 2.0.1 | `0x00a130d1` |
3. Verify the offset reads `0x0` first (this only reads, writes nothing).
   Substitute `<offset>` with the value from the table, e.g. `0x00a130d1`:

   ```sh
   busybox devmem <offset> 8
   ```
4. If it reads `0x0`, add this to the **top** of `/usr/prog/app_startup.sh`, right
   after the shebang (again substituting `<offset>`):

   ```sh
   # allow legacy nan binaries to run
   busybox devmem <offset> 8 1
   ```
5. Reboot.

The author notes this is the best approach available; the alternatives are
recompiling the kernel or changing bootargs via U-Boot over UART.
