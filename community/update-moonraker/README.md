---
title: "Update Moonraker"
created: 2026-07-11
updated: 2026-07-13
author: "ano"
source: https://discord.com/channels/1524322283911381093/1524334562573025343/threads/1525610073328713808
tags: "root, moonraker, entware"
---

Build and install the latest [Moonraker](https://github.com/Arksine/moonraker)
from source, replacing the printer's ancient bundled version. This also gets you
a modern Python (the bundled one lacks `sqlite3`, which newer Moonraker needs)
and lets you access the webcam through Mainsail. This one takes a while.

> ⚠️ Some `opkg` and `pip` steps look **frozen but are just slow** — let them run.

## Prerequisites

- [Root](#get-root) — and your `pwned` user's home must be on writable
  persistent storage (`/usr/data/home/pwned`, not `/root`). The current
  [Get Root](#get-root) script already does this; if you rooted earlier, fix
  `/etc/passwd` first or the build fails on a read-only home.
- [Enable legacy NaN MIPS binaries](#enable-legacy-nan-mips-binaries) — **required.**
- [Install Entware](#install-entware) — **required. Will not work without both of these.**

## Steps

### 1. Set the clock

These printers have no RTC, so set the time with `rdate` (needed for TLS
verification later):

```sh
rdate -s time.nist.gov
```

Optionally do it on every boot by adding this to `/usr/prog/app_startup.sh`:

```sh
# set time
(
  n=0
  while [ $n -lt 30 ]; do
    if ping -c1 -W2 time.nist.gov >/dev/null 2>&1; then
      rdate -s time.nist.gov
      break
    fi
    n=$((n+1))
    sleep 2
  done
) &
```

### 2. Prepare lmdb headers

Pick one:

- **Fast:** copy the attached [`lmdb.h`](lmdb.h) to `/opt/include`. (Simplest, but
  the header could eventually go out of date.)
- **Thorough:** download all include headers (slower, always current):

  ```sh
  cd /tmp
  wget http://bin.entware.net/mipselsf-k3.4/include/include.tar.gz
  gunzip -c include.tar.gz | tar x -C /opt/include/
  ```

### 3. Back up the old Moonraker and install dependencies

```sh
mv /usr/prog/moonraker/moonraker /usr/prog/moonraker/moonraker-old
mv /usr/prog/moonraker/moonraker-env /usr/prog/moonraker/moonraker-env-old

opkg update
opkg install git git-http

# download new moonraker
cd /usr/prog/moonraker
git clone https://github.com/Arksine/moonraker.git

# kill moonraker
/usr/prog/klipper/moonrakerDaemon stop

opkg install python3 python3-pip

python3 -m pip install virtualenv
virtualenv --system-site-packages -p python3 ./moonraker-env

# install system site-package deps
opkg install python3-dev python3-pillow python3-numpy python3-msgpack python3-cryptography python3-cffi python3-yaml python3-requests python3-setuptools libsodium libffi gcc lmdb

# symlink libsodium for pip
ln -sf $(ls /opt/lib/libsodium.so.*[0-9] | head -1) /opt/lib/libsodium.so

# source the venv
. ./moonraker-env/bin/activate

# install deps
pip install -r /usr/prog/moonraker/moonraker/scripts/moonraker-requirements.txt
LMDB_FORCE_SYSTEM=1 pip install --no-build-isolation lmdb
```

### 4. Test it

```sh
python3 /usr/prog/moonraker/moonraker/moonraker/moonraker.py -d /usr/data
```

### 5. Point the daemon at the new environment

Edit `/usr/prog/klipper/moonrakerDaemon` and set the Python path at the top:

```sh
# change it to the new env path
PYTHON=/usr/prog/moonraker/moonraker-env/bin/python3
```

Ensure `moonrakerDaemon` is enabled in `/usr/prog/klipper/start.sh` (see
[Enable Moonraker & Mainsail](#enable-moonraker-mainsail)) and reboot. You now
have the latest Moonraker and can access the webcam through Mainsail.

## Notes (from the thread)

- If the **`dbus-fast` build errors**, it's the read-only-home problem — fix your
  `pwned` home per [Get Root](#get-root), then re-run:

  ```sh
  cd /usr/prog/moonraker
  . ./moonraker-env/bin/activate
  pip install -r /usr/prog/moonraker/moonraker/scripts/moonraker-requirements.txt
  ```
- If a command "just isn't saying anything," it's building — it's just very slow.
- Don't skip `opkg update`.
