---
title: "Printer Calibration"
source: https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/cal_printer
---

> Official wiki page: https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/cal_printer

> Screenshots are for reference only. Actual interface may vary depending on the firmware version.

Creator 5 and Creator 5 Pro share identical calibration procedures. This guide uses the Creator 5 Pro as the reference model.

From the Home screen, tap **Move & Calibrate** and select **Calibrate** to open the calibration menu. Available options include:

-   Leveling (①)
-   Vibration Compensation (②)
-   Extruder Offset Calibration (③)
-   Extruder Position Calibration (④)
-   VFA Vertical Stripe Compensation (⑤)

![cal-printer-16.png](https://wiki.flashforge.com/resource/pictures/creator5_en/cal-printer/cal-printer-16.png)

Review the following sections for detailed instructions on each calibration option.

## Bed Leveling [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/cal_printer#bed-leveling)

> Ensure the build plate is properly installed on the heatbed before starting this calibration.

Select **Leveling** and tap **Start Calibration** to initiate the automatic leveling process.

![cal-printer-02.png](https://wiki.flashforge.com/resource/pictures/creator5_en/cal-printer/cal-printer-02.png)

To ensure data accuracy, the heatbed will maintain the target temperature for 5 minutes before executing the 10×10 mesh leveling sequence (100 points in total). The screen will display "Leveling calibration complete" once the process is complete.

| Calibration Started | Calibration Complete |
| --- | --- |
| ![cal-printer-03.png](https://wiki.flashforge.com/resource/pictures/creator5_en/cal-printer/cal-printer-03.png) | ![cal-printer-04.png](https://wiki.flashforge.com/resource/pictures/creator5_en/cal-printer/cal-printer-04.png) |

## Vibration Compensation [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/cal_printer#vibration-compensation)

Select **Vibration Compensation** and tap **Start Calibration** to initiate the automatic tuning process.

![cal-printer-05.png](https://wiki.flashforge.com/resource/pictures/creator5_en/cal-printer/cal-printer-05.png)

The screen will display "Vibration Compensation calibration complete" once the process is complete.

| Calibration Started | Calibration Complete |
| --- | --- |
| ![cal-printer-06.png](https://wiki.flashforge.com/resource/pictures/creator5_en/cal-printer/cal-printer-06.png) | ![cal-printer-07.png](https://wiki.flashforge.com/resource/pictures/creator5_en/cal-printer/cal-printer-07.png) |

## VFA Vertical Stripe Compensation [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/cal_printer#vfa-vertical-stripe-compensation)

> Requires firmware v1.9.6 or later.

Vertical Fine Artifacts (VFAs) are fine vertical line patterns that appear on the print surface. They are typically caused by micro-vibrations and motion inconsistencies resulting from factors such as mechanical resonance, belt tension, or stepper motor uneven torque, which can affect the surface finish.

This calibration uses algorithms to compensate for torque unevenness during motor rotation, smoothing motion output and reducing periodic vertical lines on the print surface.

Select **VFA vertical stripe compensation** and tap **Start Calibration** to initiate the process.

![cal-printer-17.png](https://wiki.flashforge.com/resource/pictures/creator5_en/cal-printer/cal-printer-17.png)

The screen will display "VFA vertical stripe compensation calibration complete" once the process is complete.

| Calibration Started | Calibration Complete |
| --- | --- |
| ![cal-printer-18.png](https://wiki.flashforge.com/resource/pictures/creator5_en/cal-printer/cal-printer-18.png) | ![cal-printer-19.png](https://wiki.flashforge.com/resource/pictures/creator5_en/cal-printer/cal-printer-19.png) |

## Extruder Offset Calibration [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/cal_printer#extruder-offset-calibration)

> Remove the build plate from the heatbed before starting this calibration.

Select **Extruder Offset Calibration** and tap **Start Calibration**. The printer will automatically calibrate the offset values for all four extruders in sequence.

![cal-printer-08.png](https://wiki.flashforge.com/resource/pictures/creator5_en/cal-printer/cal-printer-08.png)

To ensure data accuracy, the heated bed will maintain the target temperature for 5 minutes. The screen will display "Extruder Offset calibration complete" when the process is complete.

| Calibration Started | Calibration Complete |
| --- | --- |
| ![cal-printer-09.png](https://wiki.flashforge.com/resource/pictures/creator5_en/cal-printer/cal-printer-09.png) | ![cal-printer-10.png](https://wiki.flashforge.com/resource/pictures/creator5_en/cal-printer/cal-printer-10.png) |

## Extruder Position Calibration [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/cal_printer#extruder-position-calibration)

1.  Tap **Extruder Position Calibration**.  
    ![cal-printer-11.png](https://wiki.flashforge.com/resource/pictures/creator5_en/cal-printer/cal-printer-11.png)
    
2.  Select the extruder you wish to calibrate and tap **Next**.  
    ![cal-printer-12.png](https://wiki.flashforge.com/resource/pictures/creator5_en/cal-printer/cal-printer-12.png)
    
3.  Manually move the extruder mount to the target position and push it all the way until it is seated. The extruder will automatically lock into place. The **Start Calibration** button will become active.
    
4.  Keep hands clear of the device’s motion area, then tap **Start Calibration**. The printer will automatically calibrate the extruder position.  
    ![cal-printer-13.png](https://wiki.flashforge.com/resource/pictures/creator5_en/cal-printer/cal-printer-13.png)
    
5.  The screen will display "Extruder position calibration completed" once the process is complete.
    

| Calibration Started | Calibration Complete |
| --- | --- |
| ![cal-printer-14.png](https://wiki.flashforge.com/resource/pictures/creator5_en/cal-printer/cal-printer-14.png) | ![cal-printer-15.png](https://wiki.flashforge.com/resource/pictures/creator5_en/cal-printer/cal-printer-15.png) |
