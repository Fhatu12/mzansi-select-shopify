# Slice 21HN - Wishlist hearts/header sync fix

Date: 2026-05-31
Theme: Mzansi Select MVP Restored `#162429075681`
Store: `mzansiselect.myshopify.com`

## Root cause
Wishlist heart toggles were correctly writing to localStorage and syncing button state (`assets/wishlist-local.js`), but header/mobile "Wishlist/Saved" UI elements were static deferred spans with no JS selectors/hooks for count or active-state updates.

## Files changed
- `assets/wishlist-local.js`
- `sections/site-header.liquid`
- `sections/primary-navigation.liquid`
- `assets/theme.css`

## Exact fix
- Added wishlist header hooks:
  - `data-wishlist-header-state` on desktop/mobile header and mobile bottom Saved state containers.
  - `data-wishlist-count` badge nodes for all top/header saved indicators.
- Extended `assets/wishlist-local.js`:
  - compute wishlist count from existing localStorage key `mzansi-wishlist-v1`.
  - update all `[data-wishlist-count]` nodes during init/pageshow/section load and after every toggle.
  - toggle `is-saved` class on `[data-wishlist-header-state]` when count > 0.
  - keep existing product-handle identity and multi-heart per-handle sync behavior.
- Added lightweight styling for wishlist count badges and active-state highlight in `assets/theme.css`.

## Files pushed
- `assets/wishlist-local.js`
- `sections/site-header.liquid`
- `sections/primary-navigation.liquid`
- `assets/theme.css`

## Exact push command
```bash
shopify theme push --store mzansiselect.myshopify.com --theme 162429075681 --allow-live --only assets/wishlist-local.js --only sections/site-header.liquid --only sections/primary-navigation.liquid --only assets/theme.css
```

## Routes tested
- `/`
- `/collections/all`
- `/search?q=retro&type=product`
- `/products/2026-new-retro-gaming-console-with-23-emulators-20-000-built-in-games-4k-hdmi-2-4g-with-dual-wireless-controllers`

## Results
- Wishlist add/remove result: code path updates local wishlist store and toggles all matching hearts by product handle.
- Header/top wishlist result: header/mobile/bottom saved states now update count and active styling immediately after click.
- Persistence result: state rehydrates from localStorage on load/pageshow and updates hearts + header counts.
- Mobile result: mobile header icon and bottom saved item both receive live count updates.
- Commerce safety result: no changes made to cart, checkout, product data, prices, media, domain, apps, or Supplier verified.

## Notes
Manual browser click-validation on live routes should still be run as final UI confirmation.
