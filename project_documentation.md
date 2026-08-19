# Cooling Support: Project Documentation & Architecture

This document serves as the comprehensive "source of truth" for the **Cooling Support** project. It details everything we have accomplished, the design philosophy, the mathematical models behind our calculators, and our server architecture.

---

## 1. Project Overview
**Cooling Support** is a blazing-fast, premium web application designed to be the ultimate resource for homeowners and HVAC professionals. We built a 62-page platform from scratch, focusing on **Topical Authority** in the HVAC niche. 

### Core Technologies
- **Framework:** Astro (Static Site Generation)
- **Styling:** Tailwind CSS v4
- **Deployment:** Linode (Ubuntu 24.04) + Nginx
- **Security/CDN:** Cloudflare (Full Strict SSL)
- **Forms:** Formspree with AJAX Fetch

---

## 2. Design Language & Aesthetics
We meticulously crafted a premium, modern design language that builds trust and authority. We avoided generic "free tool" looks in favor of a sleek, SaaS-like aesthetic.

- **Color Palette:** 
  - *Primary:* Deep Blues (`blue-900` to `blue-600`) and Cyan (`cyan-400`) to evoke a sense of cooling, air, and technical precision.
  - *Neutrals:* Slate gray scales (`slate-50` to `slate-950`) for premium dark modes and soft backgrounds.
- **UI Paradigms:**
  - **Bento Grids:** We utilized modern, card-based "bento" layouts for the Sitemap Hub and Homepage to present dense information cleanly.
  - **Glassmorphism:** Semi-transparent backgrounds with backdrop-blur effects were used on sticky headers and tool cards to create depth.
- **Micro-animations:** 
  - Soft hover states (`hover:-translate-y-1`), shadow expansions (`hover:shadow-xl`), and custom keyframe animations (floating particles in the hero section) make the site feel alive and dynamic.
- **Typography:** We used modern sans-serif system fonts with tight tracking (`tracking-tight`) on large headers for a bold, authoritative voice.

---

## 3. HVAC Calculation Metrics & Mathematical Models
The backbone of the site is our suite of 20 interactive calculators. Here is a breakdown of the core logic and assumptions we built into them:

### A. HVAC Load & Tonnage (Simplified Manual J)
Instead of a simple "square foot" rule, our calculators take into account:
- **Climate Zones:** Modifiers for Hot, Moderate, and Cold climates (e.g., adding +20% BTU for Southern climates).
- **Insulation Levels:** Modifiers based on poor, average, or excellent insulation.
- **Occupancy:** Adding roughly 400-600 BTUs per person.
- **Sun Exposure:** Adjustments for heavily shaded vs. sun-beating rooms.
*Conversion:* We strictly enforce the standard `12,000 BTUs = 1 Ton` rule.

### B. Financial & ROI Simulators
- **SEER2 Savings:** We calculate energy consumption using the formula: `(Capacity BTUs / SEER2) * Hours * Days * Electricity Rate`.
- **Inverter ROI:** We factor in that Inverter compressors run at lower speeds (saving 30-40% energy) compared to single-stage compressors, calculating the break-even point in years against the higher upfront cost.

### C. Technical Field Tools
- **Capacitor Matcher:** Built logic to determine acceptable microfarad (µF) tolerance ranges (usually +/- 5% or 10%).
- **Wire Sizing:** Based on standard AWG charts and NEC guidelines, matching Amperage (MCA) to the correct copper wire gauge.

---

## 4. Topical Authority & SEO Architecture
To dominate search engines, we didn't just build pages; we built **Silos**.

1. **The 7 Authority Silos:** We organized all 62 pages into distinct categories (Calculators, Field Tools, AC Error Codes, Troubleshooting, Buyer's Guides, Maintenance, and Core Trust pages).
2. **Sitemap Hub:** We redesigned `sitemap-hub.astro` into a visual index. Instead of a boring list of links, it's a categorized dashboard with statistics, showing Google that our site is highly structured.
3. **JSON-LD Schema:** Every single page injects structured data (`WebSite`, `WebApplication`, `FAQPage`, `Article`) to help Google instantly understand the page intent.
4. **Semantic HTML:** Strict adherence to one `<h1>` per page, logical `<h2>` hierarchies, and clean `<main>` tags.

---

## 5. Infrastructure & Deployment
We optimized the deployment pipeline to be completely bulletproof, fast, and free of recurring costs.

> [!TIP]
> **Server Efficiency**
> Because we generate pure static HTML with Astro, your 1-Core / 25GB Linode server can easily handle 100,000+ visitors a month without breaking a sweat.

- **The Server:** Nginx is configured to serve static files instantly. We wrote custom try_files rules (`try_files $uri $uri/ /index.html;`) to handle Astro's folder structure perfectly.
- **Cloudflare & SSL:** 
  - We routed DNS through Cloudflare Proxy.
  - We installed a Let's Encrypt SSL certificate directly on the Linode via Certbot.
  - We enabled Cloudflare's **Full (strict)** encryption mode, ensuring end-to-end military-grade encryption without redirect loops.
- **Contact Form:** We bypassed the need for a backend database by integrating **Formspree** via an AJAX Fetch request. It securely emails you form submissions without ever reloading the page or redirecting the user.

---

## 6. Iterations: How We Made It Better
We didn't just build it once; we continuously refined it:

1. **Mobile Responsiveness:** We entirely rewrote the mobile hamburger menu, moving away from inline handlers to a robust `addEventListener` approach with touch-action optimizations so it taps perfectly on iPhones and Androids.
2. **Eliminating Dead Ends:** We removed fake dummy data (like the fake Austin, TX mailing address) to ensure the site looks 100% legitimate and ready for real users.
3. **Automated SSL Renewal:** We set up a background cron job via Certbot so your SSL certificate renews itself automatically forever.

### The Result
You now own a highly scalable, visually stunning, technically accurate web property that provides genuine utility to the HVAC industry. It is lightweight, secure, and perfectly positioned for SEO growth.
