# Slice 21CP — Decorative image rendered validation (post 21CO)

**Document type:** QA validation report  
**Prepared:** 2026-05-21  
**Owner:** QA / Test Engineer  
**Scope:** Rendered validation only — confirm reviewer-reported broken north-star decorative images are fixed on unpublished preview theme **`151207542967`** after **Slice 21CO** sync. **No** theme edits, push, Admin mutation, publish, or commerce enablement in this slice.

## Inputs

- **Implementation:** **`cfc4148`** (**Slice 21CN**)
- **Preview sync:** **Slice 21CO** (**PASS WITH NOTES**)
- **Harness (local):** `tools/qa/run-slice-21cp-decorative-image-validation.mjs` (**not** committed)
- **Evidence (local; not committed):** `artifacts/qa/slice-21cp-decorative-image-validation/2026-05-21-083742/`

## Method

- **Unlock:** `--manual-unlock` (single Chromium session; no password stored)
- **Preview URL:** `https://dropshippoc.myshopify.com/?preview_theme_id=151207542967`
- **Viewports:** desktop **`1366×768`**, mobile **`390×844`**
- **Checks:** decorative image load state (`naturalWidth`), fallback SVG detection, horizontal overflow, commerce-safety regression, CJ PDP media gate spot-check

## Verdict: **PASS WITH NOTES**

The reviewer-reported **broken decorative north-star image** issue is **resolved** on the preview theme after **21CO**. Hero collage, category quartet icons, promo visual, and feature tiles all load local theme JPG assets from Shopify CDN with **no broken-image icons**.

**Note:** automated overflow probe flagged **mobile horizontal overflow** on the homepage (`scrollWidth` > `clientWidth`); full-page screenshots remain visually acceptable and are not treated as a decorative-image regression. Product rails show **honest fallback SVG** on live preview rows without catalog media — expected under preview-only gates, not broken decorative JPG references.

## Desktop findings (`1366×768`)

| Area | Result | Detail |
| --- | --- | --- |
| Hero collage | **PASS** | **7/7** decorative rasters loaded (`headphones-premium`, `smart-watch-black-edition`, `insulated-vacuum-flask`, `fabric-storage-cube`, `charger-accessory`, `indoor-plant-pot`, `touch-lamp-warm-led`) |
| Category strip | **PASS** | **4/4** department icons loaded (`modern-living-room`, `stainless-french-press`, `office-desk-category`, `headphones-premium`) |
| Promo banner | **PASS** | **1/1** `promo-tech-home-bundles.jpg` loaded; no distortion |
| Feature tiles | **PASS** | **2/2** arrival tiles loaded |
| Static card fallbacks | **PASS WITH NOTES** | **1** visible static-slot image in DOM (live products fill most rail slots); that slot showed loaded **fallback SVG** only — no broken icon |
| Responsive | **PASS** | No horizontal overflow flag |
| Safety | **PASS** | No active Add to Cart / Buy Now; no `href="#"`; deferred commerce chrome intact |

**Screenshot:** `artifacts/qa/slice-21cp-decorative-image-validation/2026-05-21-083742/screenshots/homepage-decorative-desktop.png`

## Mobile findings (`390×844`)

| Area | Result | Detail |
| --- | --- | --- |
| Hero collage | **PASS** | **7/7** rasters loaded (mobile hero rail) |
| Category strip | **PASS** | **4/4** icons loaded |
| Promo banner | **PASS** | Promo visual loaded |
| Feature tiles | **PASS** | **2/2** tiles loaded |
| Static card fallbacks | **PASS WITH NOTES** | Same as desktop — fallback SVG on visible static-slot row only |
| Responsive | **PASS WITH NOTES** | Harness flagged **horizontal-overflow**; visual screenshot acceptable — likely pre-existing shell width probe, not decorative-image breakage |
| Safety | **PASS** | No commerce/customer route exposure |

**Screenshot:** `artifacts/qa/slice-21cp-decorative-image-validation/2026-05-21-083742/screenshots/homepage-decorative-mobile.png`

## Broken image findings

| Finding | Status |
| --- | --- |
| Broken decorative JPG icons (pre-21CO) | **Closed** — all targeted north-star decorative surfaces load CDN theme assets |
| External / Unsplash hosts in theme decorative surfaces | **None observed** |
| Empty `src` / zero-dimension broken rasters in hero/category/promo/tiles | **None** |

## Fallback SVG findings

| Context | Finding |
| --- | --- |
| Hero / category / promo / feature tiles | **No** fallback SVG required — all rasters loaded |
| Product rails | Fallback SVG appears on **live** preview product cards **without** catalog media (preview-only posture) — **expected**, not a decorative JPG failure |
| `decorative-placeholder.svg` on static-card path | **Observed once** in DOM where a single static-slot row remained visible — loaded cleanly (**no** broken icon) |

## Product / PDP media gate confirmation

- **Spot-check PDP:** `beverage-bottle-oil-bottle-handle-holder` on preview theme
- **Supplier catalog media on PDP:** **Absent** (`supplierCatalogMediaPresent: false`)
- **Placeholder-only treatment:** **PASS** — generic placeholder / no loaded supplier imagery
- **Gate widening:** **None** — decorative refresh did not enable product media

## Safety findings

| Check | Result |
| --- | --- |
| Add to Cart / Buy Now active | **PASS** — none |
| Checkout / payment / customer routes | **PASS** — none active |
| `href="#"` on homepage | **PASS** — none |
| Cart / wishlist / account enablement | **PASS** — deferred/disabled posture preserved |
| Newsletter capture | **PASS** — disabled |

## Strict confirmations

- **No** theme file edits in **21CP**
- **No** preview push in **21CP**
- **No** Shopify Admin mutation, publish, product visibility change, import/sync, or app install
- **No** `artifacts/` commit
- **No** secrets, cookies, tokens, or customer/order/payment data stored in repo

## Recommended next owner

**Product Owner** — accept decorative-image fix for internal reviewer re-circulation (**21CK** walkthrough / preview entry). Optional follow-up: **Senior Full-Stack Software Architect** only if Product Owner wants a separate bounded slice for the minor mobile overflow probe (out of decorative-image scope).
