# Slice 21CN — Decorative north-star image inventory

**Document type:** Design / implementation inventory  
**Prepared:** 2026-05-20  
**Owner:** Senior Full-Stack Software Architect  
**Scope:** Bounded decorative/north-star imagery refresh only. No product media, Admin, publish, import, checkout, or supplier media enablement.

## Root cause

Homepage sections reference **local theme assets** (`assets/*.jpg`) mapped from the approved north-star filenames. Reviewer **broken image** reports on the restricted preview align with **preview theme `151207542967` missing those JPG assets on Shopify** (prior pushes often synced Liquid/CSS only). Repo copies are present; **`snippets/decorative-image.liquid`** adds an honest SVG fallback when a URL fails to load.

## Broken image inventory (pre-21CN)

| Asset | Surfaces | North-star source | Likely fix |
| --- | --- | --- | --- |
| `headphones-premium.jpg` | Hero collage (wide), category Tech, static Best Sellers card | Desktop/mobile hero + category + product rail | Restore theme asset; use `decorative-image` |
| `smart-watch-black-edition.jpg` | Hero collage, static cards, feature tile Tech | Hero + rails + arrivals | Same |
| `insulated-vacuum-flask.jpg` | Hero collage, static Kitchen card | Hero + rails | Same |
| `fabric-storage-cube.jpg` | Hero collage (tall), static Kitchen card | Hero + rails | Same |
| `charger-accessory.jpg` | Hero collage | Hero | Same |
| `indoor-plant-pot.jpg` | Hero collage, static Kitchen card | Hero + rails | Same |
| `touch-lamp-warm-led.jpg` | Hero collage, static Best Sellers card | Hero + rails | Same |
| `modern-living-room.jpg` | Category Home, feature tile Home | Category + arrivals | Same |
| `stainless-french-press.jpg` | Category Kitchen, static Kitchen card | Category + rails | Same |
| `office-desk-category.jpg` | Category Office | Category | Same |
| `promo-tech-home-bundles.jpg` | Promo banner visual | Promo split | Same |
| `bamboo-storage-containers.jpg` | Static Best Sellers fallback | Product rail | Same |

**Not broken by design:** trust bar and footer use SVG icons only. Shipping/Returns/FAQ category chips use `svg-only` (no raster). Live PDP/collection cards use `placeholder_svg_tag` when catalog media is blocked — out of 21CN scope.

## Post-21CN behaviour

- All homepage decorative rasters render through **`snippets/decorative-image.liquid`**.
- Failed loads swap to **`assets/decorative-placeholder.svg`** (local, neutral, no external hosts).
- Alt text uses neutral **preview decorative** wording (no supplier/product claims).
- **Next DevOps slice:** bounded `--only` push of `assets/*.jpg` + `assets/decorative-placeholder.svg` to preview theme **`151207542967`**.

## Explicitly unchanged

- Product/catalog media gates on PDP and `live-product-card`
- Checkout, cart, payment, customer routes
- Shopify Admin state
- `artifacts/` / `zadropshipping/` commits
