# Creator 5 Series — Error Codes

> Knowledge document mirrored from the official FlashForge Wiki
> (https://wiki.flashforge.com/en/creator-series/creator-5-series).
> When answering from this document, always reference the `Source:` URL of
> the section you used so the user can verify it on the official wiki.

---

# Error code list for Creator 5 series

Source: https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5

> Error code list is the quick checklist for you to locate the possible issue on your Flashforge 3D printer. Please search for error code number or failure mode of the printer to locate causes and suggested actions.

### E0001 Printer out of range. Please home again ! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0001-printer-out-of-range-please-home-again)

Possible Causes and Solutions as bellow:

**Cause1：** Wrong printer type was selected for slicing.

**Solution:** Select the correct printer type and re-slice.

\*\*Cause2：\*\*The sliced file contains incorrect instructions.

**Solution:** Re-slice the file.

### E0002 Communication with MCU interrupted ! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0002-communication-with-mcu-interrupted)

This issue typically occurs during printing, and the Possible Causes and Solutions as bellow:

\*\*Cause1：\*\*Poor connection of the extruder cable.

**Solution:** Reconnect the extruder cable.

**Cause2**： Damaged extruder cable:

**Solution:** Replace the extruder cable,please refer to the video. [▶ Video: this video](https://youtu.be/GRBI4yLffAo).

**Cause3：** Damaged extruder board.

**Solution:** Replace the extruder board，please refer to the video.  [▶ Video: this video](https://youtu.be/bFT6mIpxazE).

### E0003 X/Y/Z/E TMC error: GSTAT ! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0003-xyze-tmc-error-gstat)

Possible Causes and Solutions as bellow:

**Cause1：** X/Y/Z motor TMC chip read error.

**Solution:** first restart the printer.if the printer can't work ,replace the mainboard for the X,Y, and Z axes.refer to the video. [▶ Video: this video](https://youtu.be/5h_mIf8kq_M)

\*\*Cause2：\*\*Extruder motor TMC chip read error.

**Solution:** first restart the printer.if the printer can't work, replace the extruder board if the extruder motor is abnormal.refer to the video. [▶ Video: this video](https://youtu.be/bFT6mIpxazE)

### E0004 X/Y/Z/E motor TMC chip communication error ! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0004-xyze-motor-tmc-chip-communication-error)

Possible Causes and Solutions as bellow:

**Cause1：** X/Y/Z motor TMC chip read error.

**Solution:** first restart the printer.if the printer can't work ,replace the mainboard for the X,Y, and Z axes,please refer to the video. [▶ Video: this video](https://youtu.be/5h_mIf8kq_M).

\*\*Cause2：\*\*Extruder motor TMC chip read error.

**Solution:** first restart the printer.if the printer can't work,replace [the extruder board](https://wiki.flashforge.com/en/ad5x/maintenance/replacement_of_extruder_board) if the extruder motor is abnormal. If replacing the extruder board doesn't resolve the issue, it is recommended to replace [the extruder board communication cable](https://wiki.flashforge.com/en/ad5x/maintenance/replacement_of_extruder_bus) and [the mainboard](https://wiki.flashforge.com/en/ad5x/maintenance/replacement_of_motherboard_and_wi-fi_antenna) in order.

### E0005 MCU: Unable to connect ! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0005-mcu-unable-to-connect)

After powering on, the extruder and bed temperatures are zero, and XYZ coordinates are zero. Possible causes as bellow:

**Cause1：** Damaged cable.

**Solution:** Replace the extruder cable.please refer to the video. [▶ Video: this video](https://youtu.be/GRBI4yLffAo).

\*\*Cause2：\*\*Damaged extruder board.

**Solution:** Replace the extruder board.refer to the video. [▶ Video: this video](https://youtu.be/bFT6mIpxazE)

\*\*Cause3：\*\*Damaged mainboard.

**Solution:** Replace the mainboard,please refer to the video. [▶ Video: this video](https://youtu.be/5h_mIf8kq_M).

### E0006 Nozzle temperature below minimum temperature! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0006-nozzle-temperature-below-minimum-temperature)

**Cause1：** Nozzle thermocouple cable is open circuit.

**Solution:** Replace the nozzle heating assembly;.please refer to the video. [▶ Video: this video](https://youtu.be/aTIdw30e2g4).

\*\*Cause2：\*\*Damaged extruder board.

**Solution:** Replace the extruder board.refer to the video. [▶ Video: this video](https://youtu.be/bFT6mIpxazE)

\*\*Cause3：\*\*Damaged extruder cable.

**Solution:** Replace the extruder cable,please refer to the video. [▶ Video: this video.](https://youtu.be/GRBI4yLffAo)

\*\*Cause4：\*\*Damaged mainboard.

**Solution:** Replace the mainboard,please refer to the video. [▶ Video: this video.](https://youtu.be/5h_mIf8kq_M)

### E0007 Extruder T0 not heating as expected！ [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0007-extruder-t0-not-heating-as-expected)

**Cause1:**  Missing the Silicone thermal cover.

![](https://wiki.flashforge.com/resource/pictures/ad5x_picture/ad5x_errorcode/missing_cover.png)

**Solution:** put on the Silicone thermal cover .

![](https://wiki.flashforge.com/resource/pictures/ad5x_picture/ad5x_errorcode/put_on_cover.png)

\*\*Cause2：\*\*Damaged nozzle heater wire.

**Solution:** Replacement of hotend assembly,and please refer to the video. [▶ Video: this video.](https://youtu.be/aTIdw30e2g4)

\*\*Cause3：\*\*Damaged connection cable of mainboard and extruder board.

**Solution:** Replace the extruder cable.please refer to the video. [▶ Video: this video](https://youtu.be/GRBI4yLffAo).

\*\*Cause4：\*\*Damaged extruder board.

**Solution:** Replace the extruder board.refer to the video. [▶ Video: this video](https://youtu.be/bFT6mIpxazE).

\*\*Cause5：\*\*Damaged mainboard.

**Solution:** Replace the mainboard,please refer to the video. [▶ Video: this video.](https://youtu.be/5h_mIf8kq_M)

### E0008 Extruder T1 not heating as expected！ [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0008-extruder-t1-not-heating-as-expected)

\*\*Cause1：\*\*Damaged nozzle heater wire.

**Solution:** Replace the nozzle heater wire.

\*\*Cause2：\*\*Damaged nozzle assembly.

**Solution:** Replace the nozzle assembly.

\*\*Cause3：\*\*Damaged connection cable of nozzle assembly and extruder board

**Solution:** Replace the connection cable

\*\*Cause4：\*\*Damaged mainboard.

**Solution:** Replace the mainboard

### E0009 Heated bed not heating as expected！ [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0009-heated-bed-not-heating-as-expected)

This issue occurs when heating cannot reach the target temperature, and the possible causes are:

**Cause1：** Loose or damaged heated bed cable.

**Solution:** Reconnect or replace the heated bed cable;.please refer to the video. [▶ Video: this video.](https://youtu.be/g7aEL7tKleQ)

**Cause2：** Damaged heating plate.

**Solution:** Replace the heating plate.refer to the video. [▶ Video: this video](https://youtu.be/g7aEL7tKleQ)

\*\*Cause3：\*\*Damaged mainboard.

**Solution:** Replace the mainboard，please refer to the video. [▶ Video: this video.](https://youtu.be/5h_mIf8kq_M)

### E0010 Chamber not heating as expected ! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0010-chamber-not-heating-as-expected)

This issue occurs when heating cannot reach the target temperature, and the possible causes are:

\*\*Cause1：\*\*Loose or damaged heater block cable;

**Solution:**   Reconnect or replace the heater block cable.

\*\*Cause2：\*\*Damaged heater block;

**Solution:**  Replace the heater block

\*\*Cause3：\*\*Damaged mainboard

**Solution:**  Replace the mainboard.

### E0011 Host error. Please restart! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0011-host-error-please-restart)

This issue typically occurs during printing when communication is suddenly interrupted, causing the system to enter protection mode, and the possible causes are:

**Cause1：** Damaged extruder board cable.

**Solution:** Replace the extruder cable.please refer to the video. [▶ Video: this video](https://youtu.be/GRBI4yLffAo).

**Cause2**：Damaged extruder board.

**Solution:** Replace the extruder board.refer to the video. [▶ Video: this video](https://youtu.be/bFT6mIpxazE)

### E0012 X-axis homing error. X-axis sensor not triggered！ [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0012-x-axis-homing-error-x-axis-sensor-not-triggered)

the possible causes are：

**Cause1：** Wiring is hanging down or other objects are blocking the X-axis homing path.

**Solution:** Clear any obstructions or organize the wiring.

\*\*Cause2：\*\*Damaged extruder board Hall sensor.

**Solution:** Replace the extruder board.refer to the video. [▶ Video: this video](https://youtu.be/bFT6mIpxazE)

### E0013 Y-axis homing error. Y-axis sensor not triggered! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0013-y-axis-homing-error-y-axis-sensor-not-triggered)

the possible causes are：

\*\*Cause1：\*\*Wiring is hanging down or other objects are blocking the Y-axis homing path;

**Solution:** Clear any obstructions or organize the wiring.

**Cause2：** Homing sensor cable is loose or detached (this occurs when the extruder moves to the home position normally, but the sensor fails to trigger, causing a clicking sound);

**Solution:** Reconnect the cable (at the homing sensor end and mainboard end).

**Cause3：** There are foreign objects blocking the sensor (this occurs when the extruder moves away from the home position);

**Solution:** Clear any obstructions inside the sensor.

**Cause4**：Damaged homing sensor

**Solution:** Replace the homing sensor.refer to the video. [▶ Video: this video](https://youtu.be/hQooGmwCIAA)

### E0014 Z-axis homing error. Z-axis sensor not triggered! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0014-z-axis-homing-error-z-axis-sensor-not-triggered)

the possible causes are：

\*\*Cause1：\*\*Wiring is hanging down or other objects are blocking the Z-axis homing path.

**Solution:** Clear any obstructions or organize the wiring.

**Cause2：** Homing sensor cable is loose or detached (this occurs when the extruder moves to the home position normally, but the sensor fails to trigger, causing a clicking sound);

**Solution:** Reconnect the cable (at the homing sensor end and mainboard end).

**Cause3：**  There are foreign objects blocking the sensor (this occurs when the extruder moves away from the home position).

**Solution:** Clear any obstructions inside the sensor.

\*\*Cause4：\*\*Damaged homing sensor

**Solution:** Replace the homing sensor.refer to the video. [▶ Video: this video](https://youtu.be/m_87nULNxUc)

### E0015 Extruder temperature < -10! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0015-extruder-temperature-10)

This issue occurs when resuming printing after a power outage, and the system detects the temperature.the possible causes are:

\*\*Cause1：\*\*Extruder thermocouple is open circuit;

**Solution:** Replace the thermocouple.refer to the video. [▶ Video: this video](https://youtu.be/aTIdw30e2g4)

\*\*Cause2：\*\*Thermocouple cable is loose or detached.

**Solution:** Reconnect Thermocouple cable

### E0016 Heated bed temperature < -10! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0016-heated-bed-temperature-10)

This issue occurs when resuming printing after a power outage, and the system detects the temperature.the possible causes are:

\*\*Cause1：\*\*Heated bed thermocouple is open circuit;

**Solution:** Replace the print bed.refer to the video. [▶ Video: this video](https://youtu.be/g7aEL7tKleQ)

\*\*Cause2：\*\*Thermocouple cable is loose or detached.

**Solution:** Reconnect print bed cable .

### E0017 Command exceeds queue limit! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0017-command-exceeds-queue-limit)

The rootcause is the print speed is too fast, causing a buffer overflow.the solutions are:

1\. Lower the overall print speed to 50% in the settings;

2\. Reduce the resolution when slicing.

### E0018 Language initialization failed. Please retry! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0018-language-initialization-failed-please-retry)

the possible causes are:

\*\*Cause：\*\*Language pack missing.

**Solution:**

1\. Restore factory settings;

2\. Re-select the language in the device settings.

### E0019 USB flash drive read error! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0019-usb-flash-drive-read-error)

the possible causes are:

\*\*Cause1：\*\*USB flash drive format mismatch.

**Solution:** Reformat the USB flash drive to FAT32.

\*\*Cause2：\*\*Damaged display screen board.

**Solution:** Replace the display screen.please refer to the video. [▶ Video: this video.](https://youtu.be/_faurdRGAcc)

**Cause3**：Damaged display screen cable.

**Solution:** Replace the display screen cable.please refer to the video. [▶ Video: this video.](https://youtu.be/_faurdRGAcc)

\*\*Cause4：\*\*Damaged mainboard.

**Solution:** Replace the mainboard,please refer to the video. [▶ Video: this video.](https://youtu.be/5h_mIf8kq_M)

### E0020 Real-time video service failure！ [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0020-real-time-video-service-failure)

Possible Causes are:

\*\*Cause1：\*\*Camera is not enabled;

\*\*Cause2：\*\*No camera is installed;

\*\*Cause3：\*\*Camera is faulty.

### E0021 Failed to enable the camera. Please check! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0021-failed-to-enable-the-camera-please-check)

Possible Causes are:

\*\*Cause1：\*\*Damaged camera.

**Solution:** Replace the camera.

\*\*Cause2：\*\*Damaged camera connector.

**Solution:** Replace the camera.

\*\*Cause3：\*\*Loose or damaged camera cable.

**Solution:** Reconnect the camera or replace the cable.

\*\*Cause4：\*\*Damaged screen board.

**Solution:** Replace the screen board.please refer to the video. [▶ Video: this video.](https://youtu.be/_faurdRGAcc)

\*\*Cause5：\*\*Damaged mainboard.

**Solution:** Replace the mainboard,please refer to the video. [▶ Video: this video.](https://youtu.be/5h_mIf8kq_M)

### E0022 Insufficient storage space! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0022-insufficient-storage-space)

Possible Causes are:

**Cause:** Too many videos, photos, or models are stored.

**Solution:**

1\. Delete files to free up memory;

2\. If space is not freed after deleting internal photos and models, please contact customer support.

### E0028 File copy error! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0028-file-copy-error)

Possible Causes are:

**Cause 1:** The USB flash drive was removed before the file copy was completed.

**Solution:** Wait until the print interface appears before removing the USB flash drive.

**Cause 2:** The printer or USB flash drive has insufficient memory.

**Solution:** Clean up space on the printer or USB flash drive.

### E0029 Model download failed! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0029-model-download-failed)

Possible Causes are:

**Cause 1:** The model name may contain special characters.

**Solution:** Remove any special characters from the model name and rename it.

**Cause 2:**  The network is unstable or the signal is weak.

**Solution:** Ensure stable network communication and resend the file.

### E0041 Leveling sensor data cannot be cleared. Please check! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0041-leveling-sensor-data-cannot-be-cleared-please-check)

Possible Causes are:

**Cause 1:** Damaged leveling PCB.

**Solution:** Replace the leveling PCB.please refer to the video. [▶ Video: this video.](https://youtu.be/M0KZPSncS9c)

**Cause 2:**  Damaged wiring from the leveling PCB to the mainboard.

**Solution:** Replace the wiring from the leveling PCB to the mainboard.please refer to the video. [▶ Video: this video.](https://youtu.be/g7aEL7tKleQ)

**Cause 3:** Damaged mainboard.

**Solution:** Replace the mainboard.please refer to the video. [▶ Video: this video.](https://youtu.be/5h_mIf8kq_M)

### E0042 Leveling sensor not triggered. Please check! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0042-leveling-sensor-not-triggered-please-check)

Possible Causes are:

**Cause 1:** Heated bed rises abnormally.

**Solution:** 1. Re-level

**Cause 2:** Damaged strain gauge.

**Solution:** Replace the strain gauge.please refer to the video. [▶ Video: this video.](https://youtu.be/g7aEL7tKleQ)

**Cause 3:** Damaged leveling PCB.

**Solution:** Replace the leveling PCB.please refer to the video. [▶ Video: this video.](https://youtu.be/g7aEL7tKleQ)

**Cause 4:** Travel limit exceeded.

**Solution:** Check if the extruder is missing or if the bed nuts are too tight. It's fine to loosen all four nuts by 1-2 turns.

### E0043 Leveling sensor triggered early. Please check! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0043-leveling-sensor-triggered-early-please-check)

Possible Causes are:

**Cause 1:** Foreign object collision during heated bed rise.

**Solution:** Check for any obstructions, and clear them if so.and re-lever again.

**Cause 2:** Damaged strain gauge.

**Solution:** Replace the strain gauge.please refer to the video. [▶ Video: this video.](https://youtu.be/g7aEL7tKleQ)

**Cause 3:** Damaged leveling PCB.

**Solution:** Replace the leveling PCB.please refer to the video. [▶ Video: this video.](https://youtu.be/g7aEL7tKleQ)

### E0046 Heated bed temperature control error! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0046-heated-bed-temperature-control-error)

Possible Causes are:

**Cause 1:** Damaged heated bed temperature sensor.

**Solution:** Replace the heated bed.please refer to the video. [▶ Video: this video.](https://youtu.be/g7aEL7tKleQ)

**Cause 2:** Damaged heated bed temperature sensor cable.

**Solution:** Replace the heated bed cable. please refer to the video. [▶ Video: this video.](https://youtu.be/g7aEL7tKleQ)

**Cause 3:** Damaged mainboard.

**Solution:** Replace the mainboard.please refer to the video. [▶ Video: this video.](https://youtu.be/5h_mIf8kq_M)

### E0047 Heated bed heating timeout！ [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0047-heated-bed-heating-timeout)

Possible Causes are:

**Cause 1:** Damaged Heated bed.

**Solution:** Replace the heated bed.please refer to the video. [▶ Video: this video.](https://youtu.be/g7aEL7tKleQ)

**Cause 2:**  Damaged bed cable.

**Solution:** Replace the heated bed cable. please refer to the video. [▶ Video: this video](https://youtu.be/g7aEL7tKleQ)

**Cause 3:** Damaged mainboard.

**Solution:** Replace the mainboard.please refer to the video. [▶ Video: this video.](https://youtu.be/5h_mIf8kq_M)

### E0048 Extruder temperature control error! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0048-extruder-temperature-control-error)

Possible Causes are:

**Cause 1:** Hotend is not installed.

**Solution:**  Reinstall the hotend.

**Cause 2:** Damaged temperature sensor

**Solution:** Replace the hotend heating assembly.please refer to the video. [▶ Video: this video.](https://youtu.be/aTIdw30e2g4)

### E0075 Nozzle too low！ [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0075-nozzle-too-low)

Possible Causes is:

**Cause :** Extruder installed improperly

**Solution:**  Check if the extruder is properly installed and reinstall it.

### E0076 Nozzle too high！ [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0076-nozzle-too-high)

Possible Causes is:

**Cause :** Extruder installed improperly

**Solution:**  Check if the extruder is properly installed and reinstall it.

### E0077 Chamber heating timeout! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0077-chamber-heating-timeout)

Possible Causes are:

**Cause 1:**  Air outlet is blocked.

**Solution:**  Clean the air outlet.

**Cause 2:** Ambient temperature too low.

**Solution:**  Turn on the air conditioner or take insulation measures.

**Cause 3:**  Damaged chamber heating device.

**Solution:**  Replace the chamber heating device.

**Cause 4:** Damaged mainboard.

**Solution:**  Replace the mainboard.

### E0078 Chamber heating failed. Left heating fan speed too low! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0078-chamber-heating-failed-left-heating-fan-speed-too-low)

Possible Causes are:

**Cause 1:**  Fan is obstructed by foreign objects.

**Solution:**  Clean up foreign objects in the fan.

**Cause 2:**  Damaged fan.

**Solution:**  Replace the fan.

**Cause 3:**  Damaged mainboard.

**Solution:**  Replace the mainboard.

### E0079 Chamber heating failed. Right heating fan speed too low! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0079-chamber-heating-failed-right-heating-fan-speed-too-low)

Possible Causes are:

**Cause 1:**  Fan is obstructed by foreign objects.

**Solution:**  Clean up foreign objects in the fan.

**Cause 2:**  Damaged fan.

**Solution:**  Replace the fan.

**Cause 3:**  Damaged mainboard.

**Solution:**  Replace the mainboard.

### E0080 Abnormal chamber temperature. Air outlet temperature sensor may be damaged! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0080-abnormal-chamber-temperature-air-outlet-temperature-sensor-may-be-damaged)

Possible Causes are:

**Cause 1:**  Damaged air outlet temperature sensor.

**Solution:**  Replace the air outlet temperature sensor.

**Cause 2:**  Damaged temperature sensor cable.

**Solution:**  Replace the temperature sensor cable.

**Cause 3:**  Damaged mainboard.

**Solution:**  Replace the mainboard.

### E0083 Air filter fan speed too low or stopped! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0083-air-filter-fan-speed-too-low-or-stopped)

Possible Causes are:

**Cause 1:**  Fan is obstructed by foreign objects.

**Solution:**  Clean up foreign objects in the fan.

**Cause 2:**  Damaged fan.

**Solution:**  Replace the fan.

**Cause 3:**  Damaged mainboard.

**Solution:**  Replace the mainboard.

### E0088 The detection indicates that the official PEI have not been used,Might not be able to ensure the quality of print! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0088-the-detection-indicates-that-the-official-pei-have-not-been-usedmight-not-be-able-to-ensure-the-quality-of-print)

Possible Causes is:

\*\*Cause

![😗](https://wiki.flashforge.com/_assets/svg/twemoji/1f617.svg)

\*The non-official steel plates or those not intended for this particular machine type have been used.

**Solution:**  Replace with official steel plates for this machine model.

### E0089 Laser radar has detected first-layer defects. Please review the defects and determine if printing can proceed! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0089-laser-radar-has-detected-first-layer-defects-please-review-the-defects-and-determine-if-printing-can-proceed)

Possible Causes are:

**Cause 1:**  Print bed planarity Aabnormal.

**Solution: R**e-levering

**Cause 2:**  Print  abnormal.

**Solution:**  clean the nozzle.

### E0100 Channel 1 feeding timeout！ [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0100-channel-1-feeding-timeout)

Possible Causes are:

**Cause 1:**  Filament is tangled or wrapped around the spool holder, preventing feeding.

**Solution:**  In the paused state: Untangle the filament to allow it to smoothly enter the extruder.

**Cause 2:**  Filament is stuck at the 4-in-1 connector and cannot be fed。

**Solution:**  Cancel printing, and confirm the reason why the filament is stuck at the 4-in-1 connector. If the issue persists after multiple attempts, consider replacing the 4-in-1 guide tube. replacing the 4-in-1 guide tube refer to the video.[▶ Video: this video](https://youtu.be/TUNURbdQIx4)

**Cause 3:**   IFS filament detection is triggered by retracted filament, which is in the guide tube, preventing it from feeding filament into the extruder.

**Solution:**  In the paused state: Load a new roll of filament, and allow automatic filament feeding to push the filament into the extruder; (If the leftover filament cannot be pushed into the extruder, remove the 4-in-1 guide tube from the extruder end, clear the remaining filament, reinstall the guide tube, and restart feeding.)

**Cause 4:**  Abnormal filament detection at the extruder end。

**Solution:**   Cancel printing, and replace the filament sensor at the extruder end.refer to the video.[▶ Video: this video](https://youtu.be/fAcLue2rjXc)

**Cause 5:**  Abnormal IFS module

**Solution:**   Repair the IFS module or contact our after-sales support team. Repair the IFS module refer to the video.[▶ Video: this video](https://youtu.be/pKcQT98wHyg)

### E0101 Channel 2 feeding timeout！ [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0101-channel-2-feeding-timeout)

Possible Causes are:

**Cause 1:**  Filament is tangled or wrapped around the spool holder, preventing feeding.

**Solution:**  In the paused state: Untangle the filament to allow it to smoothly enter the extruder.

**Cause 2:**  Filament is stuck at the 4-in-1 connector and cannot be fed。

**Solution:**  Cancel printing, and confirm the reason why the filament is stuck at the 4-in-1 connector. If the issue persists after multiple attempts, consider replacing the 4-in-1 guide tube. replacing the 4-in-1 guide tube refer to the video.[▶ Video: this video](https://youtu.be/TUNURbdQIx4)

**Cause 3:**   IFS filament detection is triggered by retracted filament, which is in the guide tube, preventing it from feeding filament into the extruder.

**Solution:**  In the paused state: Load a new roll of filament, and allow automatic filament feeding to push the filament into the extruder; (If the leftover filament cannot be pushed into the extruder, remove the 4-in-1 guide tube from the extruder end, clear the remaining filament, reinstall the guide tube, and restart feeding.)

**Cause 4:**  Abnormal filament detection at the extruder end。

**Solution:**   Cancel printing, and replace the filament sensor at the extruder end.refer to the video.[▶ Video: this video](https://youtu.be/fAcLue2rjXc)

**Cause 5:**  Abnormal IFS module

**Solution:**   Repair the IFS module or contact our after-sales support team. Repair the IFS module refer to the video.[▶ Video: this video](https://youtu.be/pKcQT98wHyg)

### E0102 Channel 3 feeding timeout！ [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0102-channel-3-feeding-timeout)

Possible Causes are:

**Cause 1:**  Filament is tangled or wrapped around the spool holder, preventing feeding.

**Solution:**  In the paused state: Untangle the filament to allow it to smoothly enter the extruder.

**Cause 2:**  Filament is stuck at the 4-in-1 connector and cannot be fed。

**Solution:**  Cancel printing, and confirm the reason why the filament is stuck at the 4-in-1 connector. If the issue persists after multiple attempts, consider replacing the 4-in-1 guide tube. replacing the 4-in-1 guide tube refer to the video.[▶ Video: this video](https://youtu.be/TUNURbdQIx4)

**Cause 3:**   IFS filament detection is triggered by retracted filament, which is in the guide tube, preventing it from feeding filament into the extruder.

**Solution:**  In the paused state: Load a new roll of filament, and allow automatic filament feeding to push the filament into the extruder; (If the leftover filament cannot be pushed into the extruder, remove the 4-in-1 guide tube from the extruder end, clear the remaining filament, reinstall the guide tube, and restart feeding.)

**Cause 4:**  Abnormal filament detection at the extruder end。

**Solution:**   Cancel printing, and replace the filament sensor at the extruder end.refer to the video.[▶ Video: this video](https://youtu.be/fAcLue2rjXc)

**Cause 5:**  Abnormal IFS module

**Solution:**   Repair the IFS module or contact our after-sales support team. Repair the IFS module refer to the video.[▶ Video: this video](https://youtu.be/pKcQT98wHyg)

### E0103 Channel 4 feeding timeout！ [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0103-channel-4-feeding-timeout)

Possible Causes are:

**Cause 1:**  Filament is tangled or wrapped around the spool holder, preventing feeding.

**Solution:**  In the paused state: Untangle the filament to allow it to smoothly enter the extruder.

**Cause 2:**  Filament is stuck at the 4-in-1 connector and cannot be fed。

**Solution:**  Cancel printing, and confirm the reason why the filament is stuck at the 4-in-1 connector. If the issue persists after multiple attempts, consider replacing the 4-in-1 guide tube. replacing the 4-in-1 guide tube refer to the video.[▶ Video: this video](https://youtu.be/TUNURbdQIx4)

**Cause 3:**   IFS filament detection is triggered by retracted filament, which is in the guide tube, preventing it from feeding filament into the extruder.

**Solution:**  In the paused state: Load a new roll of filament, and allow automatic filament feeding to push the filament into the extruder; (If the leftover filament cannot be pushed into the extruder, remove the 4-in-1 guide tube from the extruder end, clear the remaining filament, reinstall the guide tube, and restart feeding.)

**Cause 4:**  Abnormal filament detection at the extruder end。

**Solution:**   Cancel printing, and replace the filament sensor at the extruder end.refer to the video.[▶ Video: this video](https://youtu.be/fAcLue2rjXc)

**Cause 5:**  Abnormal IFS module

**Solution:**   Repair the IFS module or contact our after-sales support team. Repair the IFS module refer to the video.[▶ Video: this video](https://youtu.be/pKcQT98wHyg)

### E0104 Channel 1 retracting timeout! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0104-channel-1-retracting-timeout)

Possible Causes are:

**Cause 1:**  The cutter fails to cut the filament, preventing it from being pulled out of the extruder.

**Solution:**   In the paused state: Replace the cutter. After replacement, manually cut off the filament and then resume printing.refer to the video.[▶ Video: this video](https://youtu.be/Em46nM7B5S4)

**Cause 2:**  The filament breaks inside the extruder, causing the filament sensor to remain in a triggered state.

**Solution:**    In the paused state: Remove the broken filament from the extruder, and then resume printing.  Remove the broken filament from the extruder refer to the video.[▶ Video: this video](https://youtu.be/Ya1YLt_iHtg)

**Cause 3:**  Damaged filament sensor at the extruder end.

**Solution:**   Cancel printing, and replace the filament sensor. refer to the video.[▶ Video: this video](https://youtu.be/fAcLue2rjXc)

**Cause 4:**  Abnormal IFS module

**Solution:**  Repair the IFS module or contact our after-sales support team. Repair the IFS module refer to the video.[▶ Video: this video](https://youtu.be/pKcQT98wHyg)

### E0105 Channel 2 retracting timeout! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0105-channel-2-retracting-timeout)

Possible Causes are:

**Cause 1:**  The cutter fails to cut the filament, preventing it from being pulled out of the extruder.

**Solution:**   In the paused state: Replace the cutter. After replacement, manually cut off the filament and then resume printing.refer to the video.[▶ Video: this video](https://youtu.be/Em46nM7B5S4)

**Cause 2:**  The filament breaks inside the extruder, causing the filament sensor to remain in a triggered state.

**Solution:**    In the paused state: Remove the broken filament from the extruder, and then resume printing.  Remove the broken filament from the extruder refer to the video.[▶ Video: this video](https://youtu.be/Ya1YLt_iHtg)

**Cause 3:**  Damaged filament sensor at the extruder end.

**Solution:**   Cancel printing, and replace the filament sensor. refer to the video.[▶ Video: this video](https://youtu.be/fAcLue2rjXc)

**Cause 4:**  Abnormal IFS module

**Solution:**  Repair the IFS module or contact our after-sales support team. Repair the IFS module refer to the video.[▶ Video: this video](https://youtu.be/pKcQT98wHyg)

### E0106 Channel 3 retracting timeout! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0106-channel-3-retracting-timeout)

Possible Causes are:

**Cause 1:**  The cutter fails to cut the filament, preventing it from being pulled out of the extruder.

**Solution:**   In the paused state: Replace the cutter. After replacement, manually cut off the filament and then resume printing.refer to the video.[▶ Video: this video](https://youtu.be/Em46nM7B5S4)

**Cause 2:**  The filament breaks inside the extruder, causing the filament sensor to remain in a triggered state.

**Solution:**    In the paused state: Remove the broken filament from the extruder, and then resume printing.  Remove the broken filament from the extruder refer to the video.[▶ Video: this video](https://youtu.be/Ya1YLt_iHtg)

**Cause 3:**  Damaged filament sensor at the extruder end.

**Solution:**   Cancel printing, and replace the filament sensor. refer to the video.[▶ Video: this video](https://youtu.be/fAcLue2rjXc)

**Cause 4:**  Abnormal IFS module

**Solution:**  Repair the IFS module or contact our after-sales support team. Repair the IFS module refer to the video.[▶ Video: this video](https://youtu.be/pKcQT98wHyg)

### E0107 Channel 4 retracting timeout! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0107-channel-4-retracting-timeout)

Possible Causes are:

**Cause 1:**  The cutter fails to cut the filament, preventing it from being pulled out of the extruder.

**Solution:**   In the paused state: Replace the cutter. After replacement, manually cut off the filament and then resume printing.refer to the video.[▶ Video: this video](https://youtu.be/Em46nM7B5S4)

**Cause 2:**  The filament breaks inside the extruder, causing the filament sensor to remain in a triggered state.

**Solution:**    In the paused state: Remove the broken filament from the extruder, and then resume printing.  Remove the broken filament from the extruder refer to the video.[▶ Video: this video](https://youtu.be/Ya1YLt_iHtg)

**Cause 3:**  Damaged filament sensor at the extruder end.

**Solution:**   Cancel printing, and replace the filament sensor. refer to the video.[▶ Video: this video](https://youtu.be/fAcLue2rjXc)

**Cause 4:**  Abnormal IFS module

**Solution:**  Repair the IFS module or contact our after-sales support team. Repair the IFS module refer to the video.[▶ Video: this video](https://youtu.be/pKcQT98wHyg)

### E0108 Failed to feed filament to the extruder！ [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0108-failed-to-feed-filament-to-the-extruder)

Possible Causes are:

**Cause 1:**  The filament is tangled or the spool is jammed, preventing the filament from moving.

**Solution:**  In the paused state: Untangle the filament so that it can smoothly enter the extruder.

**Cause 2:**  Damaged filament sensor at the extruder end.

**Solution:**   Cancel printing, and replace the filament sensor. refer to the video.[▶ Video: this video](https://youtu.be/fAcLue2rjXc)

### E0109 IFS odometer roller 1/2/3/4 not moving！ [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0109-ifs-odometer-roller-1234-not-moving)

Possible Causes are:

**Cause 1:**   The filament is tangled or the spool is jammed, preventing the filament from moving.

**Solution:**  In the paused state: Untangle the filament so that it can smoothly enter the extruder.

**Cause 2:**  The nozzle is clogged。

**Solution:**  In the paused state: Wait for the extruder temperature to drop to room temperature, and then replace the nozzle refer to the video ;[▶ Video: this video](https://youtu.be/AsEq2gJKeoY)

Or stop printing and unclog the nozzle,refer to the video.[▶ Video: this video](https://youtu.be/Ya1YLt_iHtg)

**Cause 3:**  Abnormal sensor ofodometer roller

**Solution:**   Replace the sensor of odometer roller，refer to the video.[▶ Video: this video](https://youtu.be/pKcQT98wHyg)

### E0110 Filament type mismatch! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0110-filament-type-mismatch)

Possible Causes is:

**Cause：** Material station settings do not match the slicing settings.

**Solution:**   Set the filament type on the material station to match the slicing settings, or switch to the corresponding filament channel.

### E0111 Abnormal leveling data！ [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0111-abnormal-leveling-data)

Possible Causes are:

**Cause 1:**   Foreign objects on the extruder or heated bed.

**Solution:**   Clean up foreign objects from the extruder and heated bed, and then re-level.

**Cause 2:**   The heated bed is not level, resulting in an excessive gap between the maximum and minimum points.

**Solution:**   Copy logs and send them to Customer Support.

### E0112 Z-axis print height less than 220mm!! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0112-z-axis-print-height-less-than-220mm)

This error occurs when the Z-axis coordinate is greater than 0.5mm during triggering, and the possible causes are:

**Cause 1:**  Foreign objects on the extruder or heated bed.

**Solution:**   Clean up foreign objects from the bed or extruder, and then try again.

**Cause 2:**  The extruder is not properly installed.

**Solution:**   Reinstall the extruder and ensure it is installed properly.

**Cause 3:**  The bed locking nuts are not tightened as required, causing the bed to lift.

**Solution:**  Tighten the four nuts according to the support team's instructions.

### E0113 Filament is detected in the extruder. Please check the feeding position and clean it manually or check the condition of the nozzle sensor! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0113-filament-is-detected-in-the-extruder-please-check-the-feeding-position-and-clean-it-manually-or-check-the-condition-of-the-nozzle-sensor)

The reasons are as follows:

**Cause1**: The filament failed to be retracted to the designated position, which caused the sensor to trigger within the extruder.；

**Solution**: Remove the 4-in-1 catheter to check if any material is exposed at the 4-in-1. If so, investigate the cause of material blockage in the IFS；

**Cause2**: There was a filament stuck above the extruder, causing the sensor to trigger.；

**Solution**: Clear the broken filament；

**Cause3**: The sensor trigger piece of the extruder shows abnormal rebound or there is residual magnetized iron powder on the trigger piece；

**Solution**: Remove the Hall sensor, check the elasticity of the trigger plate, and perform maintenance and cleaning；

**Cause4**: Hall sensor is damaged；

**Solution**: Remove the two screws of the Hall sensor, keep away from the trigger plate. Check the trigger status of the sensor in the status bar. If the sensor is consistently in the triggered state, it indicates that the Hall sensor is damaged. Please replace it。

### E0114 IFS homing error! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0114-ifs-homing-error)

The reasons are as follows：

**Cause1**： home/clutch motor failure；

**Solution**：Replace the home/clutch motor；

**Cause2**： home sensor is blocked by foreign objects or damaged.；

**Solution**：Clean foreign objects or replace the home sensor；

**Cause3**： IFS motherboard is damaged；

**Solution**：Replace the IFS motherboard；

**Cause4**： The clutch lever bearing is stuck or damaged。

**Solution**：Replace the clutch lever bearing。

### E0115 The laser radar has failed to focus. Please check the laser radar! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0115-the-laser-radar-has-failed-to-focus-please-check-the-laser-radar)

To be perfected......

### E0116 Exception in priming\_handler, please copy the logs! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0116-exception-in-priming_handler-please-copy-the-logs)

**Cause 1**: Unstable hardware connection.

**Solution**: Reconnect the extruder board cable and restart the printer.

**Cause 2**: The model contains many curves. The "Arc fitting" function in the slicing software may generate a high density of tiny line segments, which puts a heavy load on the system.

**Solution**: Try disabling this function in the slicing software, re-slice the model and print it to see if the issue is resolved.  
If the above methods do not work, please provide the logs and the print model to Customer Support.

### E0117 Exception in flush\_handler, please copy the logs! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0117-exception-in-flush_handler-please-copy-the-logs)

**Cause 1**: Unstable hardware connection.

**Solution**: Reconnect the extruder board cable and restart the printer.

**Cause 2**: The model contains many curves. The "Arc fitting" function in the slicing software may generate a high density of tiny line segments, which puts a heavy load on the system.

**Solution**: Try disabling this function in the slicing software, re-slice the model and print it to see if the issue is resolved.  
If the above methods do not work, please provide the logs and the print model to Customer Support.

### E0118 Internal error on command, please copy the logs! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0118-internal-error-on-command-please-copy-the-logs)

**Cause**: The model file contains command errors.

**Solution**: Delete the model from the printer and copy it again, or replace the model if internal commands are corrupted.

### E0119 Timing error, please copy the logs! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0119-timing-error-please-copy-the-logs)

**Cause 1**: Unstable hardware connection.

**Solution**: Reconnect the extruder board cable and restart the printer.

**Cause 2**: The model contains many curves. The "Arc fitting" function in the slicing software may generate a high density of tiny line segments, which puts a heavy load on the system.

**Solution**: Try disabling this function in the slicing software, re-slice the model and print it to see if the issue is resolved.  
If the above methods do not work, please provide the logs and the print model to Customer Support.

### E0120 System restarted, please copy the logs! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0120-system-restarted-please-copy-the-logs)

**Cause**: The device's configuration file is corrupted.

**Solution**: Contact Customer Support for a configuration file update or firmware upgrade.

### E0121 The "spi\_transfer\_response" cannot be obtained.! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0121-the-spi_transfer_response-cannot-be-obtained)

**Cause1**：Vibration compensation data cannot be obtained；

**Solution**：Re-perform the vibration compensation；

**Cause2**：The nozzle board is broken；

**Solution**：Replace the nozzle board。

### E0122 Extruder temperature error! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0122-extruder-temperature-error)

**Cause1**：The heating component is not properly plugged in；

**Solution**：Reinsert and reattach the heating component wires；

**Cause2**：Open circuit or short circuit of the thermistor；

**Solution**：Replace the heating component。

### E0123 platform temperature error! [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0123-platform-temperature-error)

**Cause1**：The NTC line on the platform is not properly plugged in or is damaged；

**Solution**：Reinsert the NTC line or replace it；

**Cause2**：The platform thermistor is open-circuited or short-circuited；

**Solution**：Replace the heating bed。

### E0124 Extruder Carriage MCU Communication Timeout [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0124-extruder-carriage-mcu-communication-timeout)

**Cause1**：Damaged or loose harness.

**Solution**：Replace with a new harness.

**Cause2**：Logic timing error.

**Solution**：Reseat the harness.

**Cause3**：Faulty Carriage PCB.

**Solution**：Replace with a new Carriage PCB.

### E0125 Heatbed MCU Communication Error [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0125-heatbed-mcu-communication-error)

**Cause1**：Loose or damaged heatbed harness.

**Solution**：Replace with a new heatbed harness.

**Cause2**：Logic timing error.

**Solution**：Reseat the heatbed harness.

**Cause3**：Faulty heatbed PCB.

**Solution**：Replace with a new heatbed PCB.

### E0126 Leveling Board MCU Communication Error [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0126-leveling-board-mcu-communication-error)

**Cause1**：Loose or damaged leveling board harness.

**Solution**：Replace with a new leveling board harness.

**Cause2**：Logic timing error.

**Solution**：Reseat the leveling board harness.

**Cause3**：Faulty leveling board PCB.

**Solution**：Replace with a new leveling board PCB.

### E0127 T1 Not in Dock: Unable to Engage [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0127-t1-not-in-dock-unable-to-engage)

**Cause1**：Faulty Extruder PCB (Dock detection failed).

**Solution**：Replace with a new Extruder PCB.

**Cause2**：Extruder has been removed from the Extruder Dock.

**Solution**：Place the Extruder back into the Extruder Dock.

### E0128 T2 Not in Dock: Unable to Engage [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0128-t2-not-in-dock-unable-to-engage)

**Cause1**：Faulty Extruder PCB (Dock detection failed).

**Solution**：Replace with a new Extruder PCB.

**Cause2**：Extruder has been removed from the Extruder Dock.

**Solution**：Place the Extruder back into the Extruder Dock.

### E0129 T3 Not in Dock: Unable to Engage [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0129-t3-not-in-dock-unable-to-engage)

**Cause1**：Faulty Extruder PCB (Dock detection failed).

**Solution**：Replace with a new Extruder PCB.

**Cause2**：Extruder has been removed from the Extruder Dock.

**Solution**：Place the Extruder back into the Extruder Dock.

### E0130 T4 Not in Dock: Unable to Engage [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0130-t4-not-in-dock-unable-to-engage)

**Cause1**：Faulty Extruder PCB (Dock detection failed).

**Solution**：Replace with a new Extruder PCB.

**Cause2**：Extruder has been removed from the Extruder Dock.

**Solution**：Place the Extruder back into the Extruder Dock.

### E0131 T1 Slot Occupied: Unable to Disengage [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0131-t1-slot-occupied-unable-to-disengage)

**Cause1**：Another extruder is already in T1 Slot.

**Solution**：Ensure each extruder is in its correct slot.

### E0132 T2 Slot Occupied: Unable to Disengage [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0132-t2-slot-occupied-unable-to-disengage)

**Cause1**：Another extruder is already in T2 Slot.

**Solution**：Ensure each extruder is in its correct slot.

### E0133 T3 Slot Occupied: Unable to Disengage [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0133-t3-slot-occupied-unable-to-disengage)

**Cause1**：Another extruder is already in T3 Slot.

**Solution**：Ensure each extruder is in its correct slot.

### E0134 T4 Slot Occupied: Unable to Disengage [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0134-t4-slot-occupied-unable-to-disengage)

**Cause1**：Another extruder is already in T4 Slot.

**Solution**：Ensure each extruder is in its correct slot.

### E0135 T1 Disengage Failed [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0135-t1-disengage-failed)

**Cause1**：Faulty extruder locking motor or motor harness.

**Solution**：Replace with a new extruder locking motor.

**Cause2**：Faulty extruder PCB.

**Solution**：Replace with a new extruder PCB.

**Cause3**：Damaged extruder harness.

**Solution**：Replace with a new extruder harness.

### E0136 T2 Disengage Failed [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0136-t2-disengage-failed)

**Cause1**：Faulty extruder locking motor or motor harness.

**Solution**：Replace with a new extruder locking motor.

**Cause2**：Faulty extruder PCB.

**Solution**：Replace with a new extruder PCB.

**Cause3**：Damaged extruder harness.

**Solution**：Replace with a new extruder harness.

### E0137 T3 Disengage Failed [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0137-t3-disengage-failed)

**Cause1**：Faulty extruder locking motor or motor harness.

**Solution**：Replace with a new extruder locking motor.

**Cause2**：Faulty extruder PCB.

**Solution**：Replace with a new extruder PCB.

**Cause3**：Damaged extruder harness.

**Solution**：Replace with a new extruder harness.

### E0138 T4 Disengage Failed [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0138-t4-disengage-failed)

**Cause1**：Faulty extruder locking motor or motor harness.

**Solution**：Replace with a new extruder locking motor.

**Cause2**：Faulty extruder PCB.

**Solution**：Replace with a new extruder PCB.

**Cause3**：Damaged extruder harness.

**Solution**：Replace with a new extruder harness.

### E0139 Extruder Carriage Sensor Not Triggered [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0139-extruder-carriage-sensor-not-triggered)

**Cause1**：Faulty locking motor (failed to engage).

**Solution**：Replace with a new locking motor.

**Cause2**：Faulty extruder PCB.

**Solution**：Replace with a new extruder PCB.

**Cause3**：Extruder Carriage magnet is missing.

**Solution**：Check if the magnet is installed; install if missing.

**Cause4**：Damaged extruder harness.

**Solution**：Replace with a new extruder harness.

### E0140 Dock Slot Sensor Not Triggered [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0140-dock-slot-sensor-not-triggered)

**Cause1**：Faulty locking motor (failed to disengage).

**Solution**：Replace with a new locking motor.

**Cause2**：Faulty extruder PCB.

**Solution**：Replace with a new extruder PCB.

**Cause3**：Dock magnet is missing.

**Solution**：Check if the dock magnet is installed; install if missing.

**Cause4**：Damaged extruder harness.

**Solution**：Replace with a new extruder harness.

### E0141 Carriage Sensor Still Triggered [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0141-carriage-sensor-still-triggered)

**Cause1**： Faulty locking motor (failed to disengage).

**Solution**：Replace with a new locking motor.

**Cause2**：Faulty extruder PCB.

**Solution**：Replace with a new extruder PCB.

**Cause3**：Damaged extruder harness.

**Solution**：Replace with a new extruder harness.

### E0142 Dock Slot Sensor Still Triggered [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0142-dock-slot-sensor-still-triggered)

**Cause1**： Pickup failed: The extruder was not successfully removed from the slot.

**Solution**：Disengage the locking motor, home the carriage, and retry the pickup.

**Cause2**： Faulty locking motor (failed to engage).

**Solution**：Replace with a new locking motor.

**Cause3**： Faulty extruder PCB.

**Solution**：Replace with a new extruder PCB.

**Cause4**： Damaged extruder harness.

**Solution**：Replace with a new extruder harness.

### E0143 Invalid Status After Pickup [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0143-invalid-status-after-pickup)

**Cause1**： Pickup failed: The extruder was not successfully removed from the slot.

**Solution**：Disengage the locking motor, home the carriage, and retry the pickup.

**Cause2**： Faulty locking motor (failed to engage).

**Solution**：Replace with a new locking motor.

**Cause3**： Faulty extruder PCB.

**Solution**：Replace with a new extruder PCB

**Cause4**： Damaged extruder harness.

**Solution**：Replace with a new extruder harness.

**Cause5**： Extruder Carriage magnet is missing.

**Solution**：Check if Extruder Carriage magnet is installed; install if missing.

**Cause6**： Dock magnet is missing.

**Solution**：Check if Dock magnet is installed; install if missing.

### E0144 Invalid Status After Disengage [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0144-invalid-status-after-disengage)

**Cause1**： Faulty locking motor (failed to disengage).

**Solution**：Replace with a new locking motor.

**Cause2**： Faulty extruder PCB.

**Solution**：Replace with a new extruder PCB.

**Cause3**： Extruder Carriage magnet is missing.

**Solution**：Check if the extruder carriage magnet is installed; install if missing.

**Cause4**： Damaged extruder harness.

**Solution**：Replace with a new extruder harness.

### E0146 Disengage Sensor Not Triggered [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0146-disengage-sensor-not-triggered)

**Cause1**： Faulty optical sensor PCB.

**Solution**：Replace with a new optical sensor PCB.

**Cause2**： Faulty extruder carriage PCB.

**Solution**：Replace with a new extruder carriage PCB.

**Cause3**： Damaged optical flag switch.

**Solution**：Replace with a new optical flag switch.

### E0147 PEI Steel Sheet Not Removed [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0147-pei-steel-sheet-not-removed)

**Cause1**： The PEI steel sheet was detected during XYZ Offset Calibration.

**Solution**：Remove the PEI steel sheet.

### E0148 Z-Offset Variance Out of Range [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0148-z-offset-variance-out-of-range)

**Cause1**： The difference between the maximum and minimum points in multi-point leveling exceeds the limit.

**Solution**：Re-level the heatbed by adjusting the leveling knobs to minimize the gap between the nozzle and the heatbed.

### E0149 Eddy-current Sensor Not Triggered at Max Travel [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0149-eddy-current-sensor-not-triggered-at-max-travel)

**Cause1**： Faulty eddy-current sensor.

**Solution**：Replace the eddy-current sensor.

**Cause2**： Faulty eddy-current sensor PCB.

**Solution**：Replace the eddy-current sensor harness.

### E0150 Homing Timeout [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0150-homing-timeout)

**Cause1**： Homing error.

**Solution**：Restart the printer and home again.

### E0151 Eddy-current Sensor Already Triggered Before Movement [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0151-eddy-current-sensor-already-triggered-before-movement)

**Cause1**： Faulty eddy-current sensor.

**Solution**：Replace the eddy-current sensor.

**Cause2**： Damaged eddy-current sensor harness.

**Solution**：Replace the eddy-current sensor harness.

### E0152 Leveling Height Out of Range [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0152-leveling-height-out-of-range)

**Cause1**： Faulty eddy-current sensor.

**Solution**：Replace the eddy-current sensor.

**Cause2**： Faulty extruder carriage PCB.

**Solution**：Replace the extruder carriage PCB.

**Cause3**： Eddy-current trigger is damaged or improperly installed.

**Solution**：Check or replace the eddy-current trigger.

### E0153 Nozzle Calibration Value Out of Range [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0153-nozzle-calibration-value-out-of-range)

**Cause1**： Faulty eddy-current sensor in heatbed.

**Solution**：Replace the eddy-current sensor.

**Cause2**： Faulty eddy-current sensor PCB in heatbed.

**Solution**：Replace the eddy-current sensor PCB.

**Cause3**： Eddy-current sensor in heatbed is improperly installed and interfering with heatbed magnets.

**Solution**：Reinstall the eddy-current sensor bracket.

### E0154 Motor Overheating [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0154-motor-overheating)

**Cause1**： Faulty PCB cooling fan.

**Solution**：Replace the PCB cooling fan.

### E0155 X-Axis Sensor Still Triggered After Retraction [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0155-x-axis-sensor-still-triggered-after-retraction)

**Cause1**： Faulty X-axis sensor PCB.

**Solution**：Replace the X-axis sensor PCB.

**Cause2**： Faulty X-axis sensor harness.

**Solution**：Replace the X-axis sensor harness.

### E0156 Y-Axis Sensor Still Triggered After Retraction [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0156-y-axis-sensor-still-triggered-after-retraction)

**Cause1**： Faulty Y-axis sensor PCB.

**Solution**：Replace the Y-axis sensor PCB.

**Cause2**： Faulty Y-axis sensor harness.

**Solution**：Replace the Y-axis sensor harness.

### E0157 Z-Axis Sensor Still Triggered After Retraction [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0157-z-axis-sensor-still-triggered-after-retraction)

**Cause1**： Faulty Z-axis sensor PCB.

**Solution**：Replace the Z-axis sensor PCB.

**Cause2**： Faulty Z-axis sensor harness.

**Solution**：Replace the Z-axis sensor harness.

### E0158 Eddy-current Sensor Abnormal [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0158-eddy-current-sensor-abnormal)

**Cause1**： Faulty extruder carriage eddy-current sensor.

**Solution**：Replace the extruder carriage eddy-current sensor.

**Cause2**： Faulty extruder carriage eddy-current sensor PCB.

**Solution**：Replace the extruder carriage eddy-current sensor PCB.

**Cause3**： Heatbed eddy-current sensor abnormal.

**Solution**：Replace the heatbed eddy-current sensor.

### E0159 Homing Error [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/error_code_creator_5#e0159-homing-error)

**Cause1**： Faulty sensor PCB or harness on the X, Y, or Z axis.

**Solution**：Replace the sensor PCB or harness for the affected axis (X, Y, or Z).

---
