# Creator 5 Series — Firmware & Flash Studio

> Knowledge document mirrored from the official FlashForge Wiki
> (https://wiki.flashforge.com/en/creator-series/creator-5-series).
> When answering from this document, always reference the `Source:` URL of
> the section you used so the user can verify it on the official wiki.
> Last updated: 2026-07-20

---

# Firmware Release Note

Source: https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/firmware-release-history

### **Creator5Pro Update log** [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/firmware-release-history#creator5pro-update-log)

**Creator5-1.9.3-1.2.5-20260615**

1\. Fixed abnormal issues occurring during startup wizard.

2\. Fixed abnormal noise under high-speed operation.

3\. Optimized the firmware upgrade process.

4\.  Optimize fan control during filament feeding for models with chamber temperature.

5\. Fix other known bugs.

**Creator5-1.9.2-1.2.3-20260603**

 1.Optimize power-off resume printing.

 2.Optimize Startup Wizard.

3\. Fix the issue that Flash Studio stays offline after recovery from prolonged network outage.

4\. Improve reliability to resolve occasional USB drive upgrade failures.

5\. Update the QR code on the after-sales guide.

6\. Add Z-axis compensation adjustment in the maintenance interface.

7\. Fix other known bugs.

**Creator5-1.7.8-1.1.7-20260427**

1.Optimized the calibration completion prompt.    

2.Optimized error prompts for toolhead pick-and-place operations.

3.Fixed the screen freezing issue during filament loading.

4.Fixed the screen freezing issue caused by tapping the screen during printing.

5.Fixed the issue where Flash Studio displays as offline after connecting to the printer.

6.Fixed several issues with the startup wizard.

7.Fixed several issues with the power loss recovery function.

8.Fixed other known bugs.

**Creator5-1.7.3-1.1.5-20260411**

1.First release

### **Creator5Pro Update log** [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/firmware-release-history#creator5pro-update-log-1)

**Creator5Pro-1.9.3-1.2.5-20260615**

1\. Fixed abnormal issues occurring during startup wizard.

2\. Fixed abnormal noise under high-speed operation.

3.Optimized the firmware upgrade process.

4\.  Optimize fan control during filament feeding for models with chamber temperature.

5\. Fix other known bugs.

**Creator5Pro-1.9.2-1.2.3-20260603**

1\. Optimize power-off resume printing.

2\. Optimize Startup Wizard.

3\. Optimize door-open alert logic.

4\. Fix the issue that Flash Studio stays offline after recovery from prolonged network outage.

5\.  Improve reliability to resolve occasional USB drive upgrade failures.

6\.  Update the QR code on the after-sales guide.

7\.  Add Z-axis compensation adjustment in the maintenance interface.

8\. Fix other known bugs.

**Creator5Pro-1.7.8-1.1.7-20260427**

1.Optimized the calibration completion prompt.    

2.Optimized error prompts for toolhead pick-and-place operations.

3.Fixed the screen freezing issue during filament loading.

4.Fixed the screen freezing issue caused by tapping the screen during printing.

5.Fixed the issue where Flash Studio displays as offline after connecting to the printer.

6.Fixed several issues with the startup wizard.

7.Fixed several issues with the power loss recovery function.

8.Fixed other known bugs.

**Creator5Pro-1.7.3-1.1.5-20260411**

1.First release

---

# Firmware Upgrade

Source: https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/firmware-upgrade

## Firmware Update [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/firmware-upgrade#firmware-update)

For Creator 5, there will be ongoing firmware updates released from time to time. To update the firmware, simply connect the printer to Wi-Fi or Ethernet. For details, please refer to the following instructions:

### Firmware Update via OTA [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/firmware-upgrade#firmware-update-via-ota)

1\. When the printer is first connected to Wi-Fi or Ethernet, it will check the server for new firmware and prompt updates through OTA.

2.When an update is available, an on-screen prompt will appear. Review the changelog and select whether to install the new version.

![](https://wiki.flashforge.com/resource/pictures/creator5_en/update_en/en1.png)

3.Click **Yes** to install the new version.

![](https://wiki.flashforge.com/resource/pictures/creator5_en/update_en/en2.png)

4\. A manual restart is required to finalize the installation and apply the new firmware.

![](https://wiki.flashforge.com/resource/pictures/creator5_en/update_en/en3.png)

### Manual Update Check [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/firmware-upgrade#manual-update-check)

1\. You can also manually check for the latest firmware by navigating to the Tools menu, and tap Firmware.

![](https://wiki.flashforge.com/resource/pictures/creator5_en/update_en/en4.png)

2.The system checks for new firmware versions in the background automatically.

![](https://wiki.flashforge.com/resource/pictures/creator5_en/update_en/en5.png)

3.When a new update is available, changelog will be displayed.

![](https://wiki.flashforge.com/resource/pictures/creator5_en/update_en/en6.png)

4.Tap **Update** to initiate the firmware upgrade.

To ensure a successful installation, maintain a stable network connection and do not power off or restart the printer during the process. To skip the update and keep your current version, tap the < icon in the top-left corner.

![](https://wiki.flashforge.com/resource/pictures/creator5_en/update_en/en7.png)

5\. Once the update is complete, manually restart the printer to apply the new firmware.

![](https://wiki.flashforge.com/resource/pictures/creator5_en/update_en/en8.png)

---

# Flash Studio Introduction

Source: https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/intro_flash-studio

> Welcome to Flash Studio, your control center for the Creator 5 series printers. This guide will walk you through the basics of getting started with Flash Studio.

### What is Flash Studio? [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/intro_flash-studio#what-is-flash-studio)

Flash Studio is a slicing software developed on OrcaSlicer, specifically optimized for Creator 5 series and related printer series. It offers rich features, seamless connectivity, optimized slicing algorithms, and an intuitive user interface, delivering a smooth and efficient printing experience.

### System Requirements [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/intro_flash-studio#system-requirements)

-   Windows 10 or later
-   macOS V10.15 or later
-   Intel® Core 2 or AMD Athlon® 64 processor; 2 GHz or faster processor
-   RAM: 8GB or more
-   Storage: 80GB or more

### Download & Installation [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/intro_flash-studio#download-installation)

1.  Download Flash Studio.
2.  Follow the steps below to complete the installation.  
    **Setup Wizard**
3.  Select Your Region  
    Please choose your current region, for example：Europe.

![flashstudio28.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio28.png)

2.Select Your Printer  
From the menu, choose the printer and nozzle you want to display. You may select one, several, or all available options. If you only select one nozzle size now, you can change it later from the menu.

![flashstudio2.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio2.png)

3.Select Filaments  
Choose the filaments you would like to appear in the "Filament Preset List". You can select as many filaments as needed.

![flashstudio3.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio3.png)

4、Connection & File Transfer  
There are two connection modes: WAN Mode and LAN Only Mode.

-   WAN Mode: Files are transferred to the printer via a cloud server.
-   LAN Only Mode: Files are transferred directly over the local network, bypassing the cloud.

**Connecting via WAN Mode**  
The printer and computer do not need to be on the same network.

Log in  
Before connecting to a printer, log in to your Flashforge account. If you don't have an account, click \[Register\] to create one.

![flashstudio4.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio4.png)

Select a Printer  
On the Device interface, click \[+\] to open the search list and select the printer you want to connect to.

![flashstudio5.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio5.png)

Connect to the printer

![flashstudio6.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio6.png)  
![flashstudio7.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio7.png)

Unbind a Printer  
On the Device List interface, click \[![con5.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/con5.png)\] to unbind the printer.

![flashstudio8.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio8.png)  
![flashstudio9.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio9.png)

**Connecting via LAN Only Mode**  
The printer and computer must be connected to the same network.

![flashstudio10.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio10.png)

In the slicing software, click \[+\] on the Device interface to search for available printers.

![flashstudio11.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio11.png)

Select the printer and enter the Printer ID displayed on the printer's screen.

![flashstudio12.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio12.png)

Remote Control  
Once the printer is connected, you can remotely manage it through Flash Studio. The Device menu includes the device list and real-time status information.

Device List

![flashstudio13.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio13.png)

**Device List View:** Display all devices bound to your account along with their current status. Select a device to view detailed information on the Device Status interface.  
**Filter Module:** Filter devices by criteria such as group, device status, device type, or connection mode.  
**Bind a Device:** Click \[+\] to show all devices on the same network as your computer (as shown). Select a device to bind it to your account. (Note: A device that is already bound cannot be bound again.)

Device Status

![flashstudio14.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio14.png)

Live Monitoring Module  
Click the play button to watch a real‑time video feed, whether the printer is idle or actively printing.  
Print Job Module  
This module displays the model name, model image, total filament usage (if included in the sliced file), print progress, and buttons to pause or cancel the print while printing.

![flashstudio15.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio15.png)

Printer Control Module

![flashstudio16.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio16.png)

View and adjust the extruder and bed temperatures in real time

【![con1.png](https://wiki.flashforge.com/resource/pictures/%E4%B8%AD%E6%96%87/creator5/flash_studio/con1.png)】Chamber light control button; blue indicates the light is on, gray indicates it is off.  
【![con2.png](https://wiki.flashforge.com/resource/pictures/%E4%B8%AD%E6%96%87/creator5/flash_studio/con2.png)】When the printer is idle, a printer icon is shown—click it to view basic printer information. During printing, a file icon is displayed—click it to view and modify detailed print parameters.

![flashstudio17.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio17.png)

Extruder & Filament  
Display the extruder information along with the corresponding filament type and color.

### Printing [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/intro_flash-studio#printing)

There are two ways to print files:

1.  Remote printing
2.  Printing from a USB flash drive

### Create a New Project [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/intro_flash-studio#create-a-new-project)

To start slicing a model, click \[New Project\].

![flashstudio18.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio18.png)

### Load a File [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/intro_flash-studio#load-a-file)

On the top menu bar of the Prepare interface, click【![con3.png](https://wiki.flashforge.com/resource/pictures/%E4%B8%AD%E6%96%87/creator5/flash_studio/con3.png)】to load a model；

![flashstudio19.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio19.png)

Select Printer/Filament/Process Presets  
Before slicing, configure the printer, filament, and print parameters:

1.  Under \[Printer\], select the printer and nozzle size from the dropdown menu.
2.  Under \[Filament\], select the filament type you want to use.
3.  Under \[Process\], select the layer height for printing. Note: Smaller layer heights increase print time. For most models printed with a 0.4 mm nozzle, the standard layer height is 0.20 mm.

![flashstudio20.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio20.png)

Click \[Slice plate\]. After slicing, you can print remotely or export the file to a USB flash drive.

【![con4.png](https://wiki.flashforge.com/resource/pictures/%E4%B8%AD%E6%96%87/creator5/flash_studio/con4.png)】Click the Dropdown Menu

![flashstudio21.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio21.png)

①Print plate: Send the file to the printer and start printing immediately.  
②Send: Send the file to the printer and save it to the printer's memory without starting the print.  
③Export plate sliced file: Export the sliced file in ".3mf" format to local storage.  
④Export G-code file: Export the sliced file in ".gcode" format to local storage.

Print Method 1: Remote Printing

1.  After slicing the model, click \[Print plate\] and select the target printer.

![flashstudio22.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio22.png)

2.  Click \[Send\] to transfer the model to the printer.

![flashstudio23.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio23.png)

3.  The printer receives the file data.

![flashstudio24.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio24.png)

4.  Printing begins automatically once the file transfer is complete.

![flashstudio25.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio25.png)

Print Method 2: Export to a USB Flash Drive

1.  To export the file to a USB flash drive, select \[Export plate sliced file\] from the dropdown menu. A file explorer window will open; locate your USB flash drive and click \[Save\].

![flashstudio26.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio26.png)

2.  After saving, insert the USB flash drive into the printer's USB port. On the printer's memory interface, select the USB icon and choose the corresponding model file to start printing.

![flashstudio27.png](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio/flashstudio27.png)

### Slice Parameters [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/intro_flash-studio#slice-parameters)

Good parameter configuration helps improve printing success rate and print quality.Click to learn more details！[orca Official Website](https://github.com/OrcaSlicer/OrcaSlicer/wiki/quality_settings_precision#slice-gap-closing-radius%23slice-gap-closing-radius)

---

# Print via flash studio

Source: https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/print-via-flash-studio

This section provides instructions on printing from Flash Studio.

### Flash Studio directly sends multi-color models for printing [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/print-via-flash-studio#flash-studio-directly-sends-multi-color-models-for-printing)

After slicing the multi-color model, click Print plate to send the file directly to the printer.

![en1.jpg](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio_printing/en1.jpg)

A print task settings dialog box will appear.

![en2.jpg](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio_printing/en2.jpg)

①Select the target printer from the list.  
②Click the drop-down menu to assign the filament to the corresponding extruder (e.g., assign yellow filament to Extruder 2).

![en3.jpg](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio_printing/en3.jpg)

③Select additional print settings as needed  
④Once the printer and extruders are assigned, the \[Send\] button will become active. Click to send the file and start printing.

![en4.jpg](https://wiki.flashforge.com/resource/pictures/creator5_en/flash_studio_printing/en4.jpg)

Note：  
1.Multi-color model sliced files can only be sent to one printer at a time.  
[2.An](http://2.An) extruder cannot be selected if it is empty or if its filament type does not match the sliced file.

---
