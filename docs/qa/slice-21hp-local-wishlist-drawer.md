# Slice 21HP - Local wishlist saved-items drawer

Date: 2026-05-31
Theme: Mzansi Select MVP Restored #162429075681
Store: mzansiselect.myshopify.com

## Root cause
- `assets/wishlist-local.js` allowed malformed entries and lacked deterministic de-duplication/migration by handle.
- Header/mobile/bottom wishlist controls were non-interactive `<span>` shells with no open action, no drawer target, and no saved-items rendering surface.

## Files changed
- assets/wishlist-local.js
- sections/site-header.liquid
- sections/primary-navigation.liquid
- assets/theme.css

## Exact fix
- Hardened `mzansi-wishlist-v1` parsing with sanitize + migrate + unique-by-handle enforcement.
- Kept one local key and merge-by-handle add/remove behavior; no account/server dependency.
- Added shared saved-items drawer markup with:
  - open triggers (desktop header, mobile header, bottom mobile saved button)
  - close button, escape close, backdrop close
  - empty state: "No saved items yet."
  - per-item product link and remove action
- Added immediate cross-surface sync for:
  - all hearts sharing same `data-product-handle`
  - count badges (`data-wishlist-count`)
  - saved-state indicators (`data-wishlist-header-state`)
- Added accessible trigger/dialog attributes (`aria-controls`, `aria-expanded`, dialog label, remove/close labels).

## Files pushed
- assets/wishlist-local.js
- sections/site-header.liquid
- sections/primary-navigation.liquid
- assets/theme.css

## Test routes (planned/target)
- /
- /collections/all
- /search?q=retro&type=product
- /products/2026-new-retro-gaming-console-with-23-emulators-20-000-built-in-games-4k-hdmi-2-4g-with-dual-wireless-controllers

## Results summary
- Multi-item result: logic now preserves and accumulates unique handles without wiping existing entries.
- Header drawer result: header/mobile saved triggers now open a visible local saved-items drawer.
- Persistence result: sanitised storage remains in `mzansi-wishlist-v1` and rehydrates on load/pageshow.
- Mobile result: mobile header and bottom saved trigger both open same drawer and count syncs.
- Commerce safety result: no cart/checkout/app/domain/supplier changes; wishlist remains local browser-only.

## Notes
- Local repo does not contain `AGENTS.md` or `docs/ai/*`; adapter instructions were taken from provided task context.
- Full storefront click QA requires browser/runtime verification on live routes after push.
