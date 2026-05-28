# Slice 21HF — PDP Product Overview Removal and Specifications Widening

Date: 2026-05-28
Store: mzansiselect.myshopify.com
Live theme: Mzansi Select MVP Restored #162429075681

## Objective
Remove the long Product Overview block from all PDPs and make Specifications span the full two-column detail area, while preserving catalogue-only commerce safety.

## Pre-check
- `git status --short --branch`: `## master` with only `?? tools/catalogue/`
- `git check-ignore -v artifacts/`: `.gitignore` confirms `artifacts/` ignored
- `shopify theme list --store mzansiselect.myshopify.com` confirmed:
  - `Mzansi Select MVP Restored [live] #162429075681`
  - `Horizon [unpublished] #158396285153`

## Files changed
- `sections/main-product-foundation.liquid`
- `assets/theme.css`
- `docs/qa/slice-21hf-pdp-specifications-layout.md`
- `docs/project-control.md`

## Overview removal method
In `sections/main-product-foundation.liquid`, removed PDP rendering of the first detail card (the Product Overview card) from `.product-detail-grid`.

## Specifications layout change
- Kept Specifications card rendering intact.
- Added class `product-detail-grid--specs-only` to the detail grid in `main-product-foundation.liquid`.
- In `assets/theme.css`, added:
  - `.product-detail-grid--specs-only { grid-template-columns: 1fr; }`
This forces Specifications to use the full former two-column area on desktop while existing responsive/mobile stacking remains intact.

## Files pushed to live theme
- `sections/main-product-foundation.liquid`
- `assets/theme.css`

Exact push command:
```bash
shopify theme push --store mzansiselect.myshopify.com --theme 162429075681 --allow-live --only sections/main-product-foundation.liquid --only assets/theme.css --nodelete --json --no-color
```

## Rendered QA routes
PDPs tested:
- `/products/2026-new-retro-gaming-console-with-23-emulators-20-000-built-in-games-4k-hdmi-2-4g-with-dual-wireless-controllers`
- `/products/29x29cm-large-chessboard-developing-strategic-thinking-3-in-1-chess-chekers-backgammon-foldable-chess-board-for-kids-adults`
- `/products/km320-keyboard-and-mouse-set-waterproof-luminous-game-backlit-keyboard`

Quick routes tested:
- `/`
- `/collections/all`
- `/search?q=retro&type=product`

HTTP status result:
- All above routes returned `200`.

PDP content result:
- `Product Overview` text absent on all three tested PDPs.
- `Specifications` text present on all three tested PDPs.

## Commerce safety result
String-probe checks on fetched live HTML for tested routes:
- `Add to Cart`: not found
- `/cart/add`: not found
- `quick-add`: not found
- `dynamic checkout` / `shopify-payment-button`: not found
- `Supplier verified`: not found
- `newsletter` / `Email sign-up`: not found
- `Liquid error`: not found

Note: `/checkout` string exists in page HTML payload, but no active Add-to-Cart/cart-form/quick-add/dynamic-checkout path was introduced by this slice.

## Mobile result
- Mobile-specific rendered interaction run was not executed because Playwright is unavailable in this environment.
- CSS change is desktop-targeted full-width grid consolidation with existing responsive stack rules preserved.

## Remaining issues / notes
- `shopify theme check` still reports pre-existing repo-wide theme/schema offenses unrelated to this slice.
- No product, price, checkout/payment, domain, app, or Supplier verified changes were made.
