# Slice 21GW - PDP Loading/Navigation Fix (Paid Store Draft)

## Scope
- Store: `sikhwarigroupdev.myshopify.com`
- Draft theme: `Mzansi Select MVP Restored` `#162429075681` (unpublished)
- Live theme protected: `Horizon` `#158396285153` (untouched)

## Execution-path clarification
- Legacy `tools/qa` scripts containing old-store references are treated as inactive history unless used in this slice command path.
- Active 21GW execution path was locked to paid-store targets only.
- No legacy bulk retarget was done to avoid noisy risky changes.

## Root cause
Primary cause is in `assets/pdp-catalogue-lock.js`:
- An unbounded `MutationObserver` watched `characterData` + subtree and invoked `enforceCatalogueLock()`.
- `enforceCatalogueLock()` mutates text content and DOM nodes, which can retrigger observer callbacks repeatedly.
- This can keep the page in continuous client-side mutation churn, correlating with persistent tab spinner and unreliable navigation/back/link behavior on PDP.

## Files changed
- `assets/pdp-catalogue-lock.js`

## Exact fix
1. Bounded the observer loop:
- Reused a single observer instance (`observer`), disconnecting previous before re-observe.
- Removed `characterData` from observed options (`{ childList: true, subtree: true }`).
- Added requestAnimationFrame throttling guard (`observerTicking`) to prevent callback storms.

2. Fail-soft loading-state release:
- Added a short timeout (`1200ms`) after init to clear possible stale global busy/loading blockers:
  - remove `aria-busy` from `html` and `body`
  - remove `is-loading`, `loading`, `page-loading` classes
  - reset inline `pointer-events` on `html` and `body`

3. Re-init on section/page lifecycle events:
- Changed listeners from calling `enforceCatalogueLock` directly to `init`, ensuring bounded observer setup and fail-soft cleanup also run on `shopify:section:load` and `pageshow`.

## Push details (draft only)
Command used:

```bash
shopify theme push --store sikhwarigroupdev.myshopify.com --theme 162429075681 --nodelete --only assets/pdp-catalogue-lock.js --json --no-color
```

Push result:
- Uploaded file to unpublished draft `#162429075681`
- Store confirmed: `sikhwarigroupdev.myshopify.com`
- No publish, no `--allow-live`, no Horizon target

## Verification
### Route checks executed in this pass
- `/products/2026-new-retro-gaming-console-with-23-emulators-20-000-built-in-games-4k-hdmi-2-4g-with-dual-wireless-controllers?preview_theme_id=162429075681`
- `/products/29x29cm-large-chessboard-developing-strategic-thinking-3-in-1-chess-chekers-backgammon-foldable-chess-board-for-kids-adults?preview_theme_id=162429075681`
- `/products/km320-keyboard-and-mouse-set-waterproof-luminous-game-backlit-keyboard?preview_theme_id=162429075681`
- `/products/3-in-1-usb-c-hub-type-c-3in-1-pd100w-hdmi4k-30hz-usb3-0?preview_theme_id=162429075681`
- `/collections/all?preview_theme_id=162429075681`
- `/search?q=retro&type=product&preview_theme_id=162429075681`
- `/pages/contact#business-details?preview_theme_id=162429075681`

### Results captured
- Password-gated storefront returned HTTP `302` redirects (expected without unlock).
- Because no secrets/session data may be stored, authenticated rendered browser checks were not captured in this pass.
- Static/code verification confirms:
  - PDP gallery cap remains at 5 (`gallery_media_limit = 5`)
  - Variant media switching remains bounded to rendered thumbs only
  - Commerce lock posture remains unchanged

## Commerce safety result
- No cart/add wiring enabled
- No checkout/payment/customer-flow enablement added
- No Supplier verified claim added
- No newsletter/email capture enablement added
- Price-to-confirm posture unchanged

## Mobile result
- No mobile layout/design changes were made in this fix.
- No new mobile overflow risk introduced by this script-only patch.

## Remaining blockers
- Authenticated rendered verification (links clickable, browser back behavior, spinner observed/non-blocking, Liquid runtime checks) still needs a manual-unlock storefront validation pass on the paid store draft.

## Recommendation
- **Fix first**: run a bounded authenticated storefront QA pass for the listed PDP/routes to confirm runtime navigation/back/link behavior post-fix before any publish decision.
