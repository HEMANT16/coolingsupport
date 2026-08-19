---
layout: ../../../layouts/GuideLayout.astro
title: "How to Fix an AC Dripping Water Through Ceiling: Condensate Troubleshooting"
description: "Stop water damage in its tracks. A step-by-step diagnostic guide to identifying, draining, and clearing a clogged AC condensate line, rusty drain pan, or malfunctioning safety switch."
keywords: "ac leaking water ceiling, condensate drain line clogged, fix ac dripping water, hvac drain pan overflow, clear ac condensate line"
schema: "HowTo"
author: "Mike Reynolds"
credentials: "Master HVAC Technician"
date: "2026-06-15T00:00:00Z"
dateModified: "2026-06-15T00:00:00Z"
image: "/images/condensate_drain_assembly.png"
categoryName: "Repair Guides"
categoryUrl: "/guides/how-to"
---

Finding water dripping from your ceiling directly beneath your attic-mounted air handler or closet unit is an absolute emergency. By the time water breaks through drywall, the leak has likely been active for days, creating a perfect environment for toxic mold and structural wood rot.

Air conditioners don't just cool the air—they act as massive dehumidifiers. When warm, humid indoor air passes over the freezing evaporator coil, moisture condenses on the aluminum fins and runs down into a collection pan. If that water has nowhere to go, it overflows.

In this guide, I will walk you through the math of condensate volume, the engineering design of a drainage system, and the step-by-step instructions to clear the clog and dry out your home.

---

## Condensate Volume: The Mathematics of Moisture

How much water can an air conditioner actually generate? It depends on the cooling capacity of the system (tonnage) and the relative humidity (RH) of the indoor air.

The rate of water extraction ($W_c$ in gallons per hour) can be calculated using the following air-side moisture formula:

$$W_c = \frac{\text{CFM} \cdot 60 \cdot \rho \cdot (W_{\text{in}} - W_{\text{out}})}{8.33}$$

Where:
*   $\text{CFM}$ = Airflow rate in Cubic Feet per Minute (typically **400 CFM per ton**).
*   $\rho$ = Density of air ($\approx 0.075\text{ lb/ft}^3$).
*   $W_{\text{in}}$ and $W_{\text{out}}$ = Humidity ratio of entering and leaving air (lb of water per lb of dry air).
*   $8.33$ = Weight of one gallon of water in pounds.

Under typical summer conditions (80°F dry bulb, 60% indoor RH), a standard residential air conditioner will extract approximately **3 pints (0.375 gallons) of water per hour, per ton of cooling capacity**.

| System Tonnage | Daily Condensate Production (10 Hours Runtime) |
| :--- | :--- |
| **2.0 Tons** | 7.5 Gallons / Day |
| **3.0 Tons** | 11.25 Gallons / Day |
| **4.0 Tons** | 15.0 Gallons / Day |
| **5.0 Tons** | 18.75 Gallons / Day |

If your drain line is clogged, a 3-ton system will dump over **11 gallons of water directly into your ceiling** in a single day of operation.

---

## Anatomy of a Code-Compliant Drain System

To diagnose where your leak is coming from, you must understand the components of your condensate drainage assembly. 

![HVAC Condensate Drain Line Assembly Blueprint](/images/condensate_drain_assembly.png)

1.  **Primary Drain Pan**: Located directly under the evaporator coil inside the air handler. It collects the initial drips.
2.  **P-Trap**: A U-shaped bend in the PVC line. Because the air handler blower creates a **negative static pressure** (vacuum) inside the cabinet, a P-trap is required to seal the line. Without the water seal in the trap, the blower will suck air backward through the drain line, holding the water inside the primary pan and preventing it from draining (causing "blow-off" into the ductwork).
3.  **Vent Pipe**: A vertical open pipe located **downstream** (after) the P-trap. This vent breaks the vacuum and allows gravity to pull the water down the remaining run. 
4.  **Secondary Drain Pan**: A metal or plastic auxiliary pan situated underneath the entire air handler. This is your second line of defense.
5.  **Safety Float Switch**: A sensor installed in either the secondary pan or the auxiliary drain port of the primary pan. If water rises, the float rises, breaking the 24V thermostat control circuit (R-terminal) and immediately shutting down the outdoor condenser to stop condensate production.

> [!CAUTION]
> If water is leaking through your ceiling, either your secondary drain pan is rusted through, your drain line is completely clogged before the safety switch, or your installer failed to install a secondary safety float switch.

---

## Step-by-Step: Emergency Drain Clearing

### Step 1: Shut Off the HVAC System Immediately
*   **Action**: Go to your thermostat and switch the system mode to **"OFF"**. Next, go to your main electrical panel and turn off the circuit breaker labeled "Furnace" or "Air Handler."
*   **Why it's critical**: Turning off the system halts the refrigeration cycle, immediately stopping the production of new water. Leaving it on will continue to worsen the flooding.

### Step 2: Locate the Clog (Attic/Closet Inspection)
*   **Action**: Locate your indoor air handler. Inspect the secondary metal drain pan underneath the unit.
    *   **Scenario A (Pan is dry)**: The leak is likely a cracked primary drain pan or water blowing past the coil directly into the supply plenum.
    *   **Scenario B (Pan is full of water)**: The primary drain line is clogged, and the water has overflowed into the secondary pan.

### Step 3: Clear the Line from the Outside (Wet/Dry Vac Method)
*   **Action**: Go outside to where your AC drain line terminates (usually near the outdoor condenser unit or near a foundation wall). 
    1.  Attach the hose of a wet/dry shop vacuum to the end of the PVC pipe.
    2.  Wrap a damp rag or duct tape around the connection to form an airtight seal.
    3.  Turn the vacuum on and let it run for **2 to 3 minutes**.
*   **Why it works**: The vacuum creates a high pressure differential that pulls out the blockage of algae, rust flakes, and mold ("snot") that builds up in the P-trap. You should see a large volume of dirty water and sludge enter the vacuum canister.

### Step 4: Flush and Disinfect from the Inside Cleanout
*   **Action**: Locate the cleanout tee on the PVC line inside the house (before the P-trap). Remove the cap (it should not be glued). 
    1.  Pour **1 cup of distilled white vinegar** down the line.
    2.  Let it sit for 30 minutes to kill any remaining biological growth.
    3.  Flush the line with **1 gallon of warm tap water** to ensure it drains freely outside.
*   **Why it's critical**: Never use commercial drain openers (like Drano) in your AC drain line. These chemicals generate intense heat that will melt thin-walled PVC pipes and destroy the glue joints, leading to leaks behind your walls.

### Step 5: Verify or Install a Safety Float Switch
*   **Action**: If you do not have a float switch installed in your secondary pan, purchase a standard low-voltage float switch (e.g., Safe-T-Switch SS2) and wire it in series with the thermostat **"R"** wire.
*   **Why it's critical**: This simple $30 part will save you thousands of dollars in drywall repairs by automatically shutting down the system the moment a clog occurs.

---

## Preventing Future Condensate Clogs

*   **Monthly Vinegar Flush**: Pour 1 cup of vinegar down the cleanout tee every 30 days during the cooling season.
*   **Condensate Tablets**: Place slow-dissolving condensate pan tablets (pan-treats) in the primary pan to prevent slime buildup.
*   **Slope Check**: Ensure the PVC line maintains a minimum downward slope of **1/4 inch per linear foot** of horizontal run. Sagging lines will pool water and accelerate algae growth.

If your evaporator coil and primary pan are rusted through and leaking water directly, simple cleaning won't fix it. Use our [Repair vs. Replace Calculator](/tools/repair-vs-replace) to see if replacing the evaporator coil or the entire air handler is the more economical long-term option.

---

## Related Reading
*   [How to Unfreeze an Evaporator Coil (Step-by-Step DIY)](/guides/how-to/coil-freezing)
*   [How to Clean AC Condenser Coils (Step-by-Step DIY)](/guides/how-to/ac-maintenance)
*   [Central AC vs Ductless Mini-Split: Cost & Installation Compared](/guides/articles/central-vs-mini-split)
