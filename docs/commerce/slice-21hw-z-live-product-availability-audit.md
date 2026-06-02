# Slice 21HW-Z-WIN - Live product availability and purchase-readiness audit

Date: 2026-06-02

## Objective
- Audit the full current live catalogue for availability and launch readiness.
- Identify any unavailable live products and determine whether they should remain visible, be deferred, or receive Admin review before launch.

## Scope and safety
- Windows-only
- Read-only only
- No Shopify Admin mutation
- No theme push
- No product, price, inventory, variant, media, collection, shipping, or payment-provider changes
- No payment submitted
- No Payflex authorization attempted
- `tools/catalogue/` left untracked

## Live catalogue source
- `https://mzansiselect.myshopify.com/products.json?limit=250`

## Totals
- Total live products: `48`
- Products with at least one available variant: `47`
- Products with zero available variants: `1`
- Products with missing or weak price signals: `0`

## Unavailable product list

| Title | Handle | Variant count | Available variant count | Public URL |
|---|---|---:|---:|---|
| 23 Pack Desk Drawer Organizers, 4 Sizes Office Desk Organizer Tray Bins, Office Organizer with Non-Slip Pads for Home Organization and Storage | `23-pack-desk-drawer-organizers-4-sizes-office-desk-organizer-tray-bins-office-organizer-with-non-slip-pads-for-home-organization-and-storage` | 1 | 0 | `https://mzansiselect.myshopify.com/products/23-pack-desk-drawer-organizers-4-sizes-office-desk-organizer-tray-bins-office-organizer-with-non-slip-pads-for-home-organization-and-storage` |

## Unavailable PDP behaviour

### `23-pack-desk-drawer-organizers-4-sizes-office-desk-organizer-tray-bins-office-organizer-with-non-slip-pads-for-home-organization-and-storage`
- PDP status: `200`
- Add to Cart visible: no
- Sold-out / unavailable signal visible: yes
- `Price to be confirmed` visible: no
- stale `pdp-catalogue-lock.js` present: no
- dynamic checkout absent/disabled: yes

## Available-product sample checks

Sampled available products:
- `happy-acrylic-pearl-charm-beaded-bracelet-set`
- `2026-new-retro-gaming-console-with-23-emulators-20-000-built-in-games-4k-hdmi-2-4g-with-dual-wireless-controllers`
- `virtual-reality-vr-glasses-imax-huge-screen-hd-3d-glasses-google-cardboard-box-vr-headset-helmet-for-5-7-phone-support-gamepad`
- `electric-milk-frother-kitchen-drink-foamer-whisk-mixer-stirrer-coffee-cappuccino-creamer-whisk-frothy-blend-whisker-egg-beater`

Results across the sample:
- Add to Cart visible: yes on all sampled available products
- `/cart/add` form present: yes on all sampled available products
- stale lock absent: yes on all sampled available products
- dynamic checkout absent/disabled: yes on all sampled available products

## Unavailable-product classification
- Safe to keep visible as sold out:
  - none recommended in this pass
- Should hide/defer before launch:
  - `23-pack-desk-drawer-organizers-4-sizes-office-desk-organizer-tray-bins-office-organizer-with-non-slip-pads-for-home-organization-and-storage`
- Needs Admin inventory/product review:
  - the same product should be reviewed if Product Owner intends it to remain purchasable before launch

## Why hide/defer is recommended
- The product is publicly live but currently has:
  - `1` variant
  - `0` available variants
  - no visible Add to Cart
  - a visible sold-out/unavailable state
- If launch expectation is a fully purchasable live catalogue, this product should be hidden or deferred until its availability state is intentionally resolved.

## Purchase-flow verification on an available low-priced product
- Flow target:
  - `happy-acrylic-pearl-charm-beaded-bracelet-set`
- Result:
  - Add to Cart visible: yes
  - cart reached: yes
  - cart line item visible: yes
  - subtotal visible: yes
  - checkout button visible: yes
  - checkout opened: yes
  - stopped before payment: yes

## Payment visibility
- Checkout reached: yes
- Payflex visible: yes
- PayPal visible: yes
- PayFast visible: no
- Peach visible: no
- Real payment submitted: no

## Verdict
- `21HW-Z`: `pass with one launch-readiness note`

## Remaining blockers
- Only one current live product is unavailable in the active catalogue:
  - `23-pack-desk-drawer-organizers-4-sizes-office-desk-organizer-tray-bins-office-organizer-with-non-slip-pads-for-home-organization-and-storage`
- The remaining decision is commercial/launch policy:
  - keep visibly sold out
  - or hide/defer until availability is restored

## Recommended next slice
- `21IA-A-WIN`
  - Product Owner launch-decision slice for unavailable live products
  - decide whether to keep publicly visible sold-out items or hide/defer them before launch
  - if launch requires all visible products to be purchasable, execute a bounded collection/publication adjustment for the single unavailable product only

## Safety confirmation
- Product mutations performed: no
- Payment submitted: no

## Raw evidence
- Local artifact:
  - `artifacts/slice-21hw-z/audit.json`
- Local untracked runner:
  - `tools/catalogue/run-slice-21hw-z-win.cjs`
