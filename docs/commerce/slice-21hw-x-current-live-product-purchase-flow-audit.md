# Slice 21HW-X-WIN - Current live product purchase-flow audit

Date: 2026-06-02

## Objective
- Audit current live catalogue product routes only.
- Verify current Add to Cart and cart-to-checkout readiness on active products.
- Reclassify only truly absent old handles as legacy/non-blocking.

## Scope and safety
- Windows-only execution.
- Read/verify only.
- No product, price, shipping, payment-provider, theme, app, or domain mutation.
- No payment submitted.
- No card details entered.
- No Payflex authorization attempted.
- `tools/catalogue/` left untracked.

## Current product discovery
- Live catalogue source used:
  - `https://mzansiselect.myshopify.com/products.json?limit=250`
  - `/collections/all`
- Current live product count observed from feed: `48`

## Current products sampled
- Low-priced:
  - `happy-acrylic-pearl-charm-beaded-bracelet-set`
  - `kids-watches-led-digital-kids-watch-silicone-strap-cartoon-electronic-wristwatch-sports-clock-for-boys-and-girls-gifts`
- High-priced:
  - `labubu-doll-the-monsters-mystery-box-100-genuine-macaron-color-its-the-perfect-gift-for-children-family-and-frict-gift`
  - `23-pack-desk-drawer-organizers-4-sizes-office-desk-organizer-tray-bins-office-organizer-with-non-slip-pads-for-home-organization-and-storage`
- Tech:
  - `virtual-reality-vr-glasses-imax-huge-screen-hd-3d-glasses-google-cardboard-box-vr-headset-helmet-for-5-7-phone-support-gamepad`
- Games / toys:
  - `dumpling-squishies-led-bun-glowing-spitting-squeeze-toy-realistic-food-ornament-solid-gel-sensory-stress-reliever-gift`
- Retro:
  - `2026-new-retro-gaming-console-with-23-emulators-20-000-built-in-games-4k-hdmi-2-4g-with-dual-wireless-controllers`
- Home / kitchen / office:
  - `electric-milk-frother-kitchen-drink-foamer-whisk-mixer-stirrer-coffee-cappuccino-creamer-whisk-frothy-blend-whisker-egg-beater`

## Legacy route classification
- `virtual-reality-vr-glasses-imax-huge-screen-hd-3d-glasses-google-cardboard-box-vr-headset-helmet-for-5-7-phone-support-gamepad`
  - still appears in current live feed
  - classification: `current active product route`
  - not a legacy/non-blocking route
- `labubu-display-box-transparent-labubu-big-leader-summer-doll-cotton-doll-blind-box-storage-cabinet`
  - still appears in current live feed
  - classification: `current active product route`
  - not a legacy/non-blocking route
- `32-pieses-wooden-chess-standard-tournamen-staunton-wood-chessmen-8cm-king-height-chess-pieces-only-no-board`
  - absent from current live feed
  - classification: `legacy / not current active product route`
  - non-blocking unless Product Owner explicitly expects it to be live

## Current PDP audit

| Handle | Status | Add to Cart visible | `/cart/add` form | `Price to be confirmed` near purchase area | `pdp-catalogue-lock.js` | Dynamic checkout absent/disabled |
|---|---:|---|---|---|---|---|
| `happy-acrylic-pearl-charm-beaded-bracelet-set` | 200 | yes | yes | no | no | yes |
| `kids-watches-led-digital-kids-watch-silicone-strap-cartoon-electronic-wristwatch-sports-clock-for-boys-and-girls-gifts` | 200 | yes | yes | no | no | yes |
| `labubu-doll-the-monsters-mystery-box-100-genuine-macaron-color-its-the-perfect-gift-for-children-family-and-frict-gift` | 200 | yes | yes | no | no | yes |
| `23-pack-desk-drawer-organizers-4-sizes-office-desk-organizer-tray-bins-office-organizer-with-non-slip-pads-for-home-organization-and-storage` | 200 | no | yes | no | no | yes |
| `virtual-reality-vr-glasses-imax-huge-screen-hd-3d-glasses-google-cardboard-box-vr-headset-helmet-for-5-7-phone-support-gamepad` | 200 | no | yes | yes | yes | yes |
| `dumpling-squishies-led-bun-glowing-spitting-squeeze-toy-realistic-food-ornament-solid-gel-sensory-stress-reliever-gift` | 200 | yes | yes | no | no | yes |
| `2026-new-retro-gaming-console-with-23-emulators-20-000-built-in-games-4k-hdmi-2-4g-with-dual-wireless-controllers` | 200 | yes | yes | no | no | yes |
| `electric-milk-frother-kitchen-drink-foamer-whisk-mixer-stirrer-coffee-cappuccino-creamer-whisk-frothy-blend-whisker-egg-beater` | 200 | yes | yes | no | no | yes |

## PDP audit counts
- Current products sampled: `8`
- Add to Cart visible count: `6 / 8`
- `/cart/add` form count: `8 / 8`
- Stale lock reference count: `1 / 8`
- Dynamic checkout absent/disabled: `8 / 8`

## Customer flow check
- Flow target:
  - `happy-acrylic-pearl-charm-beaded-bracelet-set`
- Result:
  - cart clear request: not conclusively confirmed by automation
  - PDP opened: yes
  - Add to Cart clicked: yes
  - `/cart` reached: yes
  - cart state updated: yes
  - cart line item visible: yes
  - quantity visible: yes
  - subtotal visible: yes
  - checkout button visible: yes
  - Shopify checkout opened: yes
  - stopped before authorization: yes

## Shipping and payment visibility
- Checkout reached: yes
- Payflex visible: yes
- PayPal visible: yes
- PayFast visible: no
- Peach visible: no
- R99 standard shipping: not confirmed from this automated pass
- Free shipping over `R1,500`: not confirmed from this automated pass
- Reason shipping was not confirmed:
  - this pass intentionally stopped before risky checkout progression and did not force deeper shipping-step completion

## Regression checks
- `/`: `200`
- `/collections/all`: `200`
- `/pages/faq`: `200`
- `/pages/contact`: `200`
- `/policies/shipping-policy`: `200`
- `/policies/refund-policy`: `200`
- Support links:
  - shipping -> `/policies/shipping-policy`
  - returns -> `/policies/refund-policy`
  - faq -> `/pages/faq`
  - contact -> `/pages/contact#contact`
- Wishlist on one current product: visible
- Gallery arrows on one current product: visible
- Liquid errors detected: none

## Key findings
- Current live catalogue products do have a working purchase path on multiple active PDPs.
- The store can currently reach cart and hosted Shopify checkout from at least one confirmed live product without entering payment details.
- One sampled current live PDP remains inconsistent:
  - `virtual-reality-vr-glasses-imax-huge-screen-hd-3d-glasses-google-cardboard-box-vr-headset-helmet-for-5-7-phone-support-gamepad`
  - still renders `pdp-catalogue-lock.js`
  - still shows `Price to be confirmed` near the purchase area
  - does not show visible Add to Cart
- Another sampled current live PDP had no visible Add to Cart despite a cart form being present:
  - `23-pack-desk-drawer-organizers-4-sizes-office-desk-organizer-tray-bins-office-organizer-with-non-slip-pads-for-home-organization-and-storage`

## Raw evidence
- Local uncommitted artifact:
  - `artifacts/slice-21hw-x/audit.json`
- Local untracked runner:
  - `tools/catalogue/run-slice-21hw-x-win.cjs`

## Verdict
- `21HW-X`: `partial pass with blockers`

## Remaining blockers
- At least one current active live product route still renders stale lock behaviour (`virtual-reality-vr-glasses...`).
- At least one sampled current live PDP still lacks visible Add to Cart despite a live cart form (`23-pack-desk-drawer-organizers...`).
- Shipping visibility (`R99`, free-over-threshold) was not conclusively confirmed in this pass.

## Recommended next slice
- `21HW-Y-WIN`:
  - current-live-product route inconsistency audit focused only on active feed handles
  - compare a larger active sample for visible Add to Cart vs hidden/locked purchase UI
  - isolate whether the remaining issue is product-level variant/availability/UI-state drift on specific current handles rather than legacy-route noise

## Safety confirmation
- Real payment submitted: no
- Card details entered: no
- Payment authorization attempted: no
- Product or store mutation performed: no
