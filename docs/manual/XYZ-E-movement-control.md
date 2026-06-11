---
title: "Motion Control"
source: https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/XYZ-E-movement-control
---

> Official wiki page: https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/XYZ-E-movement-control

When the printer is idle, you can manually control the motion of the XY-axis (extruder mount), Z-axis (heatbed), and extruder motor. This is useful for device calibration, maintenance, cleaning, and mechanical inspections, allowing for precise positioning of the extruder and heatbed.

From the Home screen, tap the **Move & Calibrate** icon to open the Move screen.

![movement-control\_main\_interface.png](https://wiki.flashforge.com/resource/pictures/creator5_en/xyz-e-movement-control/movement-control_main_interface.png)

## Safety Precautions

-   Keep hands away from the nozzle and moving parts to avoid burns or pinching injuries.
-   Before moving the axes, make sure the print area is clear of obstacles to prevent collisions.
-   When moving the Z axis, monitor the clearance between the nozzle and the heatbed to avoid crushing.
-   Always [unlock the motors](XYZ-E-movement-control.md#unlock-motors) before moving components by hand. Do not force movement, as this may damage the mechanical structure and the motors.

## XYZ-Axis Control

-   XY-Axis Control: Moves the extruder mount left/right and front/back along the horizontal plane.
-   Z-Axis Control: Moves the heatbed up and down vertically.

### Operating Steps

1.  Tap the **Home** icon to return the heatbed and extruder mount to their mechanical home positions, ensuring accurate coordinate referencing.  
    ![xyz-movement-01.png](https://wiki.flashforge.com/resource/pictures/creator5_en/xyz-e-movement-control/xyz-movement-01.png)
    
2.  Tap the arrows to move the heatbed vertically.  
    ![xyz-movement-02.png](https://wiki.flashforge.com/resource/pictures/creator5_en/xyz-e-movement-control/xyz-movement-02.png)  
    Tap the arrows to move the extruder mount horizontally.  
    ![xyz-movement-03.png](https://wiki.flashforge.com/resource/pictures/creator5_en/xyz-e-movement-control/xyz-movement-03.png)  
    The default movement increment is 1. You can switch between increments (1/10/50) as needed.  
    ![xyz-movement-04.png](https://wiki.flashforge.com/resource/pictures/creator5_en/xyz-e-movement-control/xyz-movement-04.png)
    
3.  The **Position** section updates to show the current X/Y/Z coordinates.  
    ![xyz-movement-05.png](https://wiki.flashforge.com/resource/pictures/creator5_en/xyz-e-movement-control/xyz-movement-05.png)
    

### Load an Extruder

To load an extruder:

1.  Tap the **Load Extruder** icon.
2.  Select an extruder.
3.  Tap **✕** to execute loading.

![xyz-movement-06.png](https://wiki.flashforge.com/resource/pictures/creator5_en/xyz-e-movement-control/xyz-movement-06.png)

### Unlock Motors

Tap 🔓 to unlock the motors.

![xyz-movement-07.png](https://wiki.flashforge.com/resource/pictures/creator5_en/xyz-e-movement-control/xyz-movement-07.png)

Once unlocked, you can manually move the extruder mount, or pull the Z-axis belt at the bottom of the printer to adjust the heatbed position.

![manual-z-movement.png](https://wiki.flashforge.com/resource/pictures/%E4%B8%AD%E6%96%87/creator5/xyz-e-movement-control/manual-z-movement.png)

Home all axes to restore automatic control and reset their positions.

## Extruder Motor Control

You can manually control the extruder motor to extrude or retract filament. Common use cases include manual loading/unloading, nozzle cleaning, and test-extruding.

> Before extruding, ensure at least 50 mm of clearance between the nozzle and the heatbed to prevent filament buildup and nozzle clogs.

### Operating Steps

1.  Select and load the desired extruder.
2.  Control the extruder motor using the arrows:  
    ![e-movement-01.png](https://wiki.flashforge.com/resource/pictures/creator5_en/xyz-e-movement-control/e-movement-01.png)
    -   **(A) Up**：Retracts filament.
    -   **(B) Down**：Extrudes filament.  
        A prompt will appear instructing you to heat the extruder.  
        ![e-movement-02.png](https://wiki.flashforge.com/resource/pictures/creator5_en/xyz-e-movement-control/e-movement-02.png)
3.  Heat the extruder to the recommended temperature for your filament.  
    ![e-movement-03.png](https://wiki.flashforge.com/resource/pictures/creator5_en/xyz-e-movement-control/e-movement-03.png)
4.  Return to the **Move & Calibrate** screen. tap the arrow again to start the operation.
