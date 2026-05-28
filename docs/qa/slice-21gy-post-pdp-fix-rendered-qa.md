## Slice 21GY - post-fix rendered PDP and storefront QA

- **Date:** 2026-05-28
- **Store:** `sikhwarigroupdev.myshopify.com`
- **Draft under test:** `Mzansi Select MVP Restored` `#162429075681` (`unpublished`)
- **Live (untouched):** `Horizon` `#158396285153`
- **Execution lane:** Codex Windows lane (no credential/session storage)

### Pre-check
- `git status --short --branch` returned:
  - `## master`
  - ` M mzansi-select-mobile.html`
  - ` M mzansi-select-theme.html`
  - `?? zadropshipping/`
- `shopify theme list --store sikhwarigroupdev.myshopify.com` confirmed:
  - `Horizon [live] #158396285153`
  - `Mzansi Select MVP Restored [unpublished] #162429075681`

### Routes tested
1. `/?preview_theme_id=162429075681`
2. `/collections/all?preview_theme_id=162429075681`
3. `/search?q=retro&type=product&preview_theme_id=162429075681`
4. `/search?q=mouse&type=product&preview_theme_id=162429075681`
5. `/pages/contact#business-details?preview_theme_id=162429075681`

### PDPs tested
1. `/products/2026-new-retro-gaming-console-with-23-emulators-20-000-built-in-games-4k-hdmi-2-4g-with-dual-wireless-controllers?preview_theme_id=162429075681`
2. `/products/29x29cm-large-chessboard-developing-strategic-thinking-3-in-1-chess-chekers-backgammon-foldable-chess-board-for-kids-adults?preview_theme_id=162429075681`
3. `/products/km320-keyboard-and-mouse-set-waterproof-luminous-game-backlit-keyboard?preview_theme_id=162429075681`
4. `/products/3-in-1-usb-c-hub-type-c-3in-1-pd100w-hdmi4k-30hz-usb3-0?preview_theme_id=162429075681`
5. Additional baseline-PDP requirement from the 41-product set: **blocked in unattended execution** (no authenticated product-index extraction route used in this pass).

### Results
- Route reachability: all tested URLs returned HTTP 200.
- Password gate: all tested storefront URLs returned the storefront password wall (`Please Log In` / password form signature), which blocked rendered assertions in unattended execution.
- Navigation/back/links/spinner/PDP-content assertions: **blocked** in this pass due to password-gated storefront rendering.
- Catalogue/search rendered-result assertions: **blocked** (HTTP reachable only).
- Mobile `390x844` storefront-overflow assertion: **blocked** (password-wall response, not storefront content).
- Commerce safety rendered assertions (`Add to Cart`, `/cart/add`, quick-add, dynamic checkout, checkout/payment path, supplier claim, newsletter capture): **blocked** for rendered confirmation in this pass.

### Guardrail compliance
- No publish action.
- No password removal.
- No product/price/domain/app/checkout/payment changes.
- No live-theme edits and no draft-theme push.
- No credential/session/cookie/token artifacts stored.

### Verdict
- **Slice 21GY verdict:** `BLOCKED` (rendered storefront QA not executable in unattended mode while password-gated).
- **Publish recommendation:** `fix first / blocked` (do not treat as publish-ready from this slice result alone).

### Next action
- Re-run this exact route/PDP matrix in an authenticated local browser-driven session where storefront rendering is verifiably unlocked for the active test context, then finalize publish/fix decision.
