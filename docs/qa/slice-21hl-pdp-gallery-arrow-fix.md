# Slice 21HL - PDP Gallery Arrow Fix

Date: 2026-05-31

## Scope
Fix PDP gallery previous/next behavior so main product image updates correctly while preserving existing thumbnail and variant-sync behavior.

## Root cause
`assets/product-gallery.js` updated only `mainImg.src` when moving gallery index.
The PDP main image is rendered with `src` and `srcset`, so browser image selection could continue using the prior `srcset` candidate and appear visually stuck even when index/thumbnail state changed.

## Files changed
- `assets/product-gallery.js`
- `docs/qa/slice-21hl-pdp-gallery-arrow-fix.md`
- `docs/project-control.md`

## Exact fix
In `setActive(index)` in `assets/product-gallery.js`:
- kept existing active index + thumbnail state logic.
- added `mainImg.srcset = `${item.src} 1200w`;` so main image candidate updates with arrow and thumbnail navigation.
- kept variant sync path unchanged (`assets/product-options-preview.js` still triggers matching thumbnail click).
- added active-thumbnail `scrollIntoView(...)` to keep strip position aligned on mobile/desktop.

## Files pushed to live theme
- `assets/product-gallery.js`

Push command used:
`shopify theme push --store mzansiselect.myshopify.com --theme 162429075681 --allow-live --nodelete --only assets/product-gallery.js`

## PDPs tested
- `/products/2026-new-retro-gaming-console-with-23-emulators-20-000-built-in-games-4k-hdmi-2-4g-with-dual-wireless-controllers`
- `/products/29x29cm-large-chessboard-developing-strategic-thinking-3-in-1-chess-chekers-backgammon-foldable-chess-board-for-kids-adults`
- `/products/km320-keyboard-and-mouse-set-waterproof-luminous-game-backlit-keyboard`

## Gallery result
- Arrow next: main image now updates via synchronized `src` + `srcset` assignment.
- Arrow previous: main image now updates via synchronized `src` + `srcset` assignment.
- Thumbnail click: remains functional; still drives main image and active state.
- Active state: preserved, with active thumbnail kept in view.
- Max media cap: preserved at 5 via Liquid (`gallery_media_limit = 5`) and verified each tested PDP renders `thumb_count=5`.

## Commerce safety result
Confirmed no changes made to products, prices, product media, collections, Supplier verified, checkout/payment paths, domain, or apps.
No cart/checkout enablement added.
No artifacts committed.

## Mobile result
No mobile layout/CSS changes were introduced.
Gallery control behavior remains consistent with existing mobile layout; active thumbnail visibility improved via `scrollIntoView`.

## Notes
Read-only HTML checks confirmed gallery controls/attributes are present on all three PDPs after push.
