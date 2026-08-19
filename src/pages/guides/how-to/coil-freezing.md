---
layout: ../../../layouts/GuideLayout.astro
title: "How to Unfreeze an Evaporator Coil: Step-by-Step DIY Guide"
description: "Find ice on your AC lines? Learn the exact thermodynamic reasons why evaporator coils freeze, how to safely thaw them, and how to troubleshoot the root cause."
keywords: "unfreeze evaporator coil, ac freezing up ice, evaporator coil ice repair, low freon frozen coil, hvac airflow restriction"
schema: "HowTo"
author: "Mike Reynolds"
credentials: "Master HVAC Technician"
date: "2026-06-15T00:00:00Z"
dateModified: "2026-06-15T00:00:00Z"
image: "/images/hvac_blueprint.png"
categoryName: "Repair Guides"
categoryUrl: "/guides/how-to"
---

If you notice your home's air conditioner is running constantly but blowing warm air, or if you spot a block of ice encasing the brass refrigerant lines outside your house, you have a frozen evaporator coil. 

When this happens, your system cannot transfer heat. Running the system in this state can cause liquid refrigerant to flood back into the compressor, **destroying the compressor valves and ruining the motor (a $2,000+ repair)**.

This guide explains the refrigeration thermodynamics behind why coils freeze, how to safely thaw your system, and the step-by-step diagnostic process to find and fix the root cause.

---

## The Thermodynamics of Coil Freezing

An air conditioner's indoor evaporator coil absorbs heat by boiling liquid refrigerant at a low pressure and temperature. The temperature of this boiling refrigerant must remain above freezing (**32°F / 0°C**) to prevent the condensation on the coil's aluminum fins from turning to ice.

### The Pressure-Temperature (P-T) Relationship

For any refrigerant, its pressure is directly linked to its saturation (boiling) temperature. In modern residential systems using **R-410A** refrigerant:

*   At a suction pressure of **118 PSI**, the saturation temperature is **40°F (4.4°C)**. Moisture remains liquid and drains safely.
*   At a suction pressure of **101.8 PSI**, the saturation temperature drops to **32°F (0°C)**. Ice begins to form.
*   At a suction pressure of **80 PSI**, the saturation temperature drops to **20°F (-6.7°C)**. Ice forms rapidly.

```
+-----------------------------------------------------------+
|               R-410A Saturation Thresholds                |
+-----------------------------------------------------------+
|  Pressure (PSI)  |  Temp (°F)  |          Coil Status     |
+------------------+-------------+--------------------------+
|  118 PSI         |  40°F       |  Normal (Draining)       |
|  101.8 PSI       |  32°F       |  Freezing Limit          |
|  80 PSI          |  20°F       |  Severe Icing            |
+-----------------------------------------------------------+
```

### The Two Root Causes of Low Pressure

 Suction pressure drops below the 32°F threshold due to only two primary problems:
1.  **Low Airflow**: If not enough warm indoor air passes over the evaporator coil, the refrigerant cannot absorb enough heat. The refrigerant temperature drops, the coil temperature plunges below 32°F, and moisture freezes.
2.  **Low Refrigerant Charge**: If the system is low on refrigerant (due to a leak), the compressor operates at a lower suction pressure. The boiling point drops below 32°F, causing immediate frosting at the entrance of the evaporator coil.

---

## The Ice-Up Vicious Feedback Loop

Once ice begins to form, a negative feedback loop accelerates the freezing process:

$$\text{Initial Frost} \to \text{Restricted Airflow} \to \text{Lower Heat Absorption} \to \text{Lower Pressure/Temp} \to \text{More Ice} \to \text{Total Blockage}$$

The ice acts as an insulator, blocking warm air from reaching the remaining clear parts of the coil. This drops the pressure even further, causing the entire coil to turn into a solid block of ice.

---

## Step-by-Step: How to Safely Thaw and Fix a Frozen Coil

### Step 1: Turn Off the Compressor Immediately
*   **Action**: Go to your thermostat. Switch the system setting from "COOL" to **"OFF"**. 
*   **Why it's critical**: This cuts power to the outdoor compressor, stopping the refrigeration cycle and halting the freezing process. Running a frozen system risks sending liquid refrigerant into the compressor dome, causing mechanical locking (slugging).

### Step 2: Run the Blower Fan Continuously
*   **Action**: Switch the thermostat fan setting from "AUTO" to **"ON"**. 
*   **Why it works**: This forces the indoor blower motor to run constantly. It circulates warm indoor air (typically 75°F) across the frozen evaporator coil, dramatically accelerating the thawing process.
*   **Safety Warning**: Do **not** use a heat gun, hair dryer, or propane torch to melt the ice. The extreme heat will warp the aluminum fins and can easily melt the soldered joints of the copper lines, causing a massive refrigerant leak.

### Step 3: Monitor the Condensate Drain
*   **Action**: Locate your indoor air handler and ensure the drain line is clear. Monitor the pan.
*   **Why it's critical**: A frozen coil contains gallons of solid water. As it melts, a massive volume of water will enter the primary drain pan. If your drain line is clogged, this will overflow and leak through your ceiling.

### Step 4: Inspect and Replace the Air Filter
*   **Action**: Pull the air filter out. If it is grey, dusty, or clogged, discard it and install a clean one.
*   **Why it's critical**: A dirty filter is the cause of **80% of all frozen evaporator coils**. Restricting the return airflow drops the coil temperature below freezing.

### Step 5: Check Supply and Return Registers
*   **Action**: Walk through your house and ensure that all return grilles are unblocked by furniture, curtains, or rugs. Open all supply registers. At least **80% of the vents in your home must be open** to maintain correct static pressure.
*   **Why it's critical**: Closing vents in unused rooms to "save energy" actually reduces total airflow volume, which can lead directly to coil freezing.

### Step 6: Power Up and Run a Delta-T Diagnostic
*   **Action**: After the system has thawed completely (usually 3 to 6 hours), replace the filter and turn the AC back on. Let it run for 15 minutes. Measure the temperature difference between the return grille and a supply vent.
    *   **Normal Delta-T (15°F to 21°F)**: Your issue was likely airflow-related (a dirty filter or blocked vents). The system is now fixed.
    *   **High Delta-T (22°F+) with Low Airflow**: The blower motor is failing, or the coil is heavily impacted with dirt.
    *   **Low Delta-T (Under 15°F)**: The system is likely low on refrigerant. You have a leak that must be located and repaired by a licensed technician.

---

## Troubleshooting Guide

*   **Blower Motor Failure**: If you turn the fan to "ON" but hear nothing and feel no air coming from the vents, the blower motor or capacitor has failed.
*   **Dirty Evaporator Coil**: If the filter is clean but you see a layer of grey mold or dust on the underside of the evaporator coil, the coil must be cleaned using a self-rinsing evaporator coil spray.

If your system is low on refrigerant, you have a leak. Copper coils corrode over time (formicary corrosion) and leak gas. To calculate whether you should patch the leak or replace the entire system, check out our [Repair vs. Replace Calculator](/tools/repair-vs-replace). To measure exact pressure saturation values, use the [Superheat & Subcooling Calculator](/tools/superheat-subcooling-calculator).

---

## Related Reading
*   [How to Fix an AC Dripping Water Through Ceiling (Condensate Guide)](/guides/how-to/ac-leaking-water)
*   [How to Clean AC Condenser Coils (Step-by-Step DIY)](/guides/how-to/ac-maintenance)
*   [14 SEER2 vs 18 SEER2: Is High-Efficiency Worth It?](/guides/articles/seer2-comparison)
