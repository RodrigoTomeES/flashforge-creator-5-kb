---
title: "Print built-in models on Creator 5 series"
source: https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/print-built-in-models-on-creator-5-series
scraped: 2026-07-13
---

> Official wiki page: https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/print-built-in-models-on-creator-5-series

Models printed from a USB drive or sent remotely via Flash Studio are automatically saved to the printer's internal storage.

## Printing 3mf file from Internal Storage [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/print-built-in-models-on-creator-5-series#printing-3mf-file-from-internal-storage)

1.Tap \[Print File\] on the Home Screen.

![en1.jpg](https://wiki.flashforge.com/resource/pictures/creator5_en/local_printing/en1.jpg)

2.Select a model to print from Local Files, such as "one color.3mf".

![en2.jpg](https://wiki.flashforge.com/resource/pictures/creator5_en/local_printing/en2.jpg)

3.  In Print Settings, you can toggle Flow Calibration, Leveling, or Timelapse on or off. Tap \[Next\] to proceed to Extruder Settings.

![en3.jpg](https://wiki.flashforge.com/resource/pictures/creator5_en/local_printing/en3.jpg)

4.  In Extruder Settings, assign each extruder to the filament used in the sliced file. While the colors can differ, the filament types must match exactly. Once all extruders are configured, tap \[Print\] to start.

![en4.jpg](https://wiki.flashforge.com/resource/pictures/creator5_en/local_printing/en4.jpg)

![en5.jpg](https://wiki.flashforge.com/resource/pictures/creator5_en/local_printing/en5.jpg)  
Selecting an extruder (Extruders 1, 2, and 4 are compatible)

![en6.jpg](https://wiki.flashforge.com/resource/pictures/creator5_en/local_printing/en6.jpg)  
Mismatch alert when selecting Extruder 3

5.Once printing starts, the printer automatically executes the startup sequence, including homing, preheating, and loading filament.

![en7.jpg](https://wiki.flashforge.com/resource/pictures/creator5_en/local_printing/en7.jpg)

6.Extruder and heatbed temperatures can be adjusted in real-time during the print.

![en8.jpg](https://wiki.flashforge.com/resource/pictures/creator5_en/local_printing/en8.jpg)  
![en9.jpg](https://wiki.flashforge.com/resource/pictures/creator5_en/local_printing/en9.jpg)

You can also adjust the speed of the Part Cooling Fan and the Auxiliary Cooling Fan in Settings.

![en10.jpg](https://wiki.flashforge.com/resource/pictures/creator5_en/local_printing/en10.jpg)

7.Upon completion, a pop-up will display the total elapsed time.

![en11.jpg](https://wiki.flashforge.com/resource/pictures/creator5_en/local_printing/en11.jpg)

8.Once the build plate has cooled to room temperature, remove it from the printer. Gently flex the plate to remove the model.

![en12.jpg](https://wiki.flashforge.com/resource/pictures/creator5_en/local_printing/en12.jpg)

Note: If the model warps or shifts during printing, simply remove the oil film and dirt from the PEI board surface with alcohol or a cleaning agent to restore adhesion. If you find that the PEI board still cannot stick to the model after cleaning, it is recommended to apply glue or replace the PEI board.

## Printing gcode file from Internal Storage [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/print-built-in-models-on-creator-5-series#printing-gcode-file-from-internal-storage)

1.Click the "Print File" button on the main interface.

![en1.jpg](https://wiki.flashforge.com/resource/pictures/creator5_en/local_printing/en1.jpg)

[2.In](http://2.In) the local file interface, select the model you want to print, such as "3min.gcode".

![en13.jpg](https://wiki.flashforge.com/resource/pictures/creator5_en/local_printing/en13.jpg)

3.  In the print settings interface, you can choose whether to perform flow calibration, leveling, and time-lapse photography. Click the "Print" button to start printing directly.

![en14.jpg](https://wiki.flashforge.com/resource/pictures/creator5_en/local_printing/en14.jpg)

Note: The gcode file does not allow printhead selection. The printer will automatically match the printhead with the filament number in the slice file. For example, if the slice file uses filament 1 and filament 3, then printheads 1 and 3 will be used.
