---
title: "Troubleshooting: Equipment Usage Issues"
source: https://wiki.flashforge.com/en/creator-series/creator-5-series/troubleshooting-equipment-usage-issues
---

> Official wiki page: https://wiki.flashforge.com/en/creator-series/creator-5-series/troubleshooting-equipment-usage-issues

## 1\. Filament Guide Tube Clogged.

**Issue:** During filament change, the filament cannot pass through the filament guide tube.

**Cause 1:** Uneven (inclined) surface of the filament end, making it get stuck at the filament detection position

**Solution:** Rotate the filament or trim the filament end, and then re-feed the filament.

**Cause 2:** Filament breaks off in the filament guide tube.

**Solution:** Remove the broken filament remained in the filament guide tube.

## 2\. Filament Extrusion Issue.

**Issue:** 1. Under-extrusion; 2. No filament extrusion.

**Cause:**

1\. Filament tangles;

2\. Mismatched parameter settings;

3\. Nozzle clogged;

4\. Extruder clogged

**Solution:**

Step 1: Check if filament is tangled on the spool.

Step 2: Ensure the setting temperature of the nozzle matches the setting temperature of the current filament, and then perform filament loading. If no extrusion, remove the filament guide tube on the top of the extruder, hold the filament by hand, and push it downward to clear the blockage.

Step 3: If the above steps don't work, use the provided unclogging pin tool to clear the nozzle.

Step 4: If the above steps don't work, replace the nozzle.

Step 5: If the above steps still don't solve the problem, check for extruder blockage.

## 3\. No Extrusion on the First Yayer.

**Cause:** Distance too close.

**Solution:** Re-level.

## 4\. Model Not Sticking to the Build Plate.

**Cause:**

1\. Build plate damaged or severe wear, resulting in an uneven surface;

2\. Oil stains on the build plate;

3\. Improper distance after leveling;

4\. Incorrect parameter settings

**Solution:**

**Solution 1:**

Step 1: Clean the build plate surface by removing the oil stains and filament residues.

Step 2: Clean the nozzle by removing the residues.

Step 3: Re-level and perform a test print. If the issue persists, please proceed to Solution 2.

**Solution 2**

Step 1: Update the firmware, enable leveling before printing, and conduct a test print.

Step 2: If Step 1 doesn't work, slightly increase the bed temperature by 5-10℃ based on the corresponding filament. For example, for PLA filament, set the bed temperature to 55-60℃; for ABS filament, set the bed temperature to 110℃.

Step 3: If the above steps don't work, manually raise the bed by 0.05-0.1mm during the first layer printing to reduce the distance between the nozzle and bed, thus improving adhesion.

Step 4: If the above steps still don't solve the problem, please copy logs to a USB flash drive and contact customer support.

## 5\. Nozzle Scraping Against the Built Plate.

**Issues:** After automatic leveling, the extruder is too close to the bed when printing the first layer, causing the nozzle to scrape against the build plate.

**Cause:** Filament residues at the nozzle tip or uncleared print bed.

**Solution:**

Step 1: Clean the nozzle and bed by removing the residues.

Step 2: Restart the printer and perform automatic leveling again.

Step 3: If the above steps don't work, consider checking for firmware updates. Upgrade the firmware if a new version is available and retry.

Step 4: If the above steps still don't solve the problem, please copy logs to a USB flash drive and contact customer support.

## 6.Nozzle Clogged

Issue: When printing, the nozzle fails to extrude filament properly.

Cause 1：Print temperature and filament temperature do not match, preventing smooth extrusion.

Solution 1、Reslice and set the correct extrusion temperature.

Cause 2：Carbonization occurs inside the hot end of the nozzle, increasing the extrusion resistance

Solution2：Replace with a new hot end.

①First, manually press the cutter handle all the way down to cut the filament;  
②Use a wrench to remove the two screws securing the hot end；  
③Pull out the hot end downward, install a new hot end, and secure the screws；  
④Reperform XYZ calibration.
