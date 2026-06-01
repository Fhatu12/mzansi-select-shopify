# Slice 21HW-Q-WIN - Final Live Cart Checkout QA and Shipping Verification

Date: 2026-06-01
Store: https://mzansiselect.myshopify.com
Execution environment: Windows Playwright run from `D:\dev\mzansi-select-shopify-winqa`
Source docs target repo: `\\wsl$\Ubuntu-Dev\home\fhatu\dev\mzansi-select-shopify`

## Scope and Safety
- Live storefront customer-flow QA only.
- No Shopify Admin mutation.
- No product/price/shipping/payment configuration change.
- No payment submitted.
- Stopped before any payment authorization action.

## Run Artefacts
- Harness used: `tools/catalogue/run-slice-21hw-o-final-checkout-qa.cjs`
- Output directory: `D:\dev\mzansi-select-shopify-winqa\artifacts\qa\slice-21hw-o\2026-06-01T21-54-14-668Z`

## Route and PDP pre-check
- `/`: pass
- `/collections/all`: pass
- `/pages/faq`: pass
- `/pages/contact`: pass
- `/policies/shipping-policy`: pass
- `/policies/refund-policy`: pass
- Low-priced PDP selected: `virtual-reality-vr-glasses-imax-huge-screen-hd-3d-glasses-google-cardboard-box-vr-headset-helmet-for-5-7-phone-support-gamepad` (detected price: R5.00)
- Higher-priced PDP selected: `23-pack-desk-drawer-organizers-4-sizes-office-desk-organizer-tray-bins-office-organizer-with-non-slip-pads-for-home-organization-and-storage` (detected price: R3355.33)

## Desktop checkout path findings
- Add to Cart visible on low-value PDP: yes
- Add to Cart click executed: yes
- Forced cart open after add: yes (`/cart` loaded)
- Cart line item visible: no
- Cart quantity visible: no
- Cart subtotal visible: no
- Cart checkout button visible: yes
- Dynamic checkout visible: no
- Checkout reached: no (hard blocker: checkout contact email field did not become fillable in run)

Blocker details:
- `TimeoutError` while waiting for checkout email field locator (`input[type="email"], input[name="email"]`).

## Shipping and payment visibility findings
- Standard delivery R99 visible: no (not reached due to checkout form blocker)
- Free delivery over R1,500 visible: yes (text detection on checkout content)
- International shipping option available: no (treated as disabled in observed content)
- Payflex visible: yes
- PayPal visible: yes
- PayFast visible: no
- Peach visible: no

## Mobile sanity
- PDP Add to Cart visible: yes
- Add to Cart routes to cart: yes (`/cart` opened)
- Cart line item visible: not confirmed in this run
- Checkout button visible: no
- Horizontal overflow on PDP/cart: no

## Regression checks
- Wishlist add/drawer works: not confirmed (wishlist trigger not detected in this run)
- Gallery arrows update main image: yes
- Variant selector breakage where present: no breakage observed on low PDP (no variant options detected there)
- Support links to shipping/refund/FAQ: yes
- Liquid errors visible: no

## 21HW-Q Verdict
- **FAIL (blocked)** for final checkout sign-off.
- Primary blocker: checkout/contact step automation could not progress to reliable shipping-step verification due to missing/blocked email input interaction.

## Required Output Matrix
- 21HW-Q verdict: FAIL (blocked)
- Desktop Add to Cart result: PASS
- Cart landing result: PASS (`/cart` reached)
- Cart line item result: FAIL (not visible)
- Quantity/subtotal result: FAIL (not visible)
- Checkout reached yes/no: no
- Standard R99 shipping visible yes/no: no
- Free shipping over R1,500 visible yes/no: yes
- International shipping disabled yes/no: yes
- Payflex visible yes/no: yes
- PayPal visible yes/no: yes
- PayFast visible yes/no: no
- Peach visible yes/no: no
- Mobile result: PARTIAL PASS (add/cart route and overflow checks pass; checkout button missing)
- Regression result: PARTIAL PASS (gallery/support/liquid pass; wishlist unconfirmed)
- Real payment submitted yes/no: no
- Remaining blockers:
  - Checkout contact step not reliably enterable (email field timeout).
  - Cart line/qty/subtotal not rendering as expected after add.
  - Mobile cart checkout CTA not visible.
- Recommended next slice:
  - **21HW-R**: targeted checkout DOM/session diagnostic on live storefront (cart persistence + checkout form readiness + shipping step certainty), then rerun 21HW-Q verification.
