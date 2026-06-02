# Slice 21HW-Y-WIN - Current PDP render inconsistency isolation

Date: 2026-06-02

## Objective
- Isolate why specific current live catalogue PDPs were not showing visible Add to Cart despite rendering live product forms.
- Stay read-only and identify whether the blocker is product availability, stale route state, UI hiding, or an audit mismatch.

## Scope and safety
- Windows-only execution
- Read-only except documentation
- No Shopify Admin mutation
- No theme push
- No product, inventory, media, shipping, payment-provider, or domain changes
- No payment submitted
- No card details entered
- `tools/catalogue/` left untracked

## Live baseline verification
- Verified `200` for:
  - `/`
  - `/collections/all`
  - `/pages/faq`
  - `/policies/shipping-policy`
  - `/policies/refund-policy`
- Verified current live theme from response headers remains:
  - `Horizon #158396285153`

## Inconsistent handles checked
- `virtual-reality-vr-glasses-imax-huge-screen-hd-3d-glasses-google-cardboard-box-vr-headset-helmet-for-5-7-phone-support-gamepad`
- `23-pack-desk-drawer-organizers-4-sizes-office-desk-organizer-tray-bins-office-organizer-with-non-slip-pads-for-home-organization-and-storage`

## Known-good handles compared
- `happy-acrylic-pearl-charm-beaded-bracelet-set`
- `2026-new-retro-gaming-console-with-23-emulators-20-000-built-in-games-4k-hdmi-2-4g-with-dual-wireless-controllers`

## Re-check results

### 1. `virtual-reality-vr-glasses-imax-huge-screen-hd-3d-glasses-google-cardboard-box-vr-headset-helmet-for-5-7-phone-support-gamepad`
- Status: `200`
- Title visible: yes
- `/cart/add` form present: yes
- Add to Cart visible: yes
- Price to be confirmed visible: no
- `pdp-catalogue-lock.js` present: no
- Live markers present: yes
- Variant selector present: yes
- Selected variant id: `48428425445601`
- Button text: `Add to Cart`
- Button class: `add-btn product-main-add`
- Button disabled: no
- Product availability from live feed:
  - variants: `4`
  - available variants: `4`
  - all variants available: yes

### 2. `23-pack-desk-drawer-organizers-4-sizes-office-desk-organizer-tray-bins-office-organizer-with-non-slip-pads-for-home-organization-and-storage`
- Status: `200`
- Title visible: yes
- `/cart/add` form present: yes
- Add to Cart visible: no
- Price to be confirmed visible: no
- `pdp-catalogue-lock.js` present: no
- Live markers present: yes
- Variant selector present: yes
- Selected variant id: `48428422234337`
- Button text: none visible in the rendered audit pass
- Button class: none detected on the visible CTA path
- Button disabled: not detected on a visible Add to Cart button because no visible Add to Cart was rendered
- Product availability from live feed:
  - variants: `1`
  - available variants: `0`
  - all variants available: no
  - sold-out/unavailable signal visible on PDP: yes

## Comparison against known-good current PDPs

### Known-good reference behaviour
- Both known-good handles showed:
  - `200`
  - title visible
  - `/cart/add` form present
  - Add to Cart visible
  - no stale lock script
  - live markers present
  - variant availability from feed consistent with visible purchase UI
  - button text `Add to Cart`
  - button class `add-btn product-main-add`
  - selected variant id present

### Comparison summary

#### VR glasses handle
- Current rendered result now matches known-good PDPs in all important purchase-flow signals:
  - Add to Cart visible
  - stale lock absent
  - live markers present
  - all variants available
  - same core button class and script set as known-good products
- Interpretation:
  - the 21HW-X failure on this handle was not reproduced in 21HW-Y
  - current live route appears healthy in this pass

#### 23-pack desk drawer organizers handle
- Differs from known-good PDPs on availability, not theme/render markers:
  - no variants available in live feed
  - sold-out/unavailable signal present
  - no visible Add to Cart
  - live markers still present
  - stale lock absent
- Interpretation:
  - this is not behaving like a stale-lock or split-render route
  - it is consistent with an unavailable product state

## Root cause classification
- `virtual-reality-vr-glasses-imax-huge-screen-hd-3d-glasses-google-cardboard-box-vr-headset-helmet-for-5-7-phone-support-gamepad`
  - class: `E`
  - interpretation: prior QA selector / timing / transient state mismatch in 21HW-X, because current pass renders as a normal live purchasable PDP
- `23-pack-desk-drawer-organizers-4-sizes-office-desk-organizer-tray-bins-office-organizer-with-non-slip-pads-for-home-organization-and-storage`
  - class: `A`
  - interpretation: product-specific availability issue; no available variants in live feed

## Blocker class decision
- `A` product-specific availability/inventory issue:
  - yes for `23-pack-desk-drawer-organizers...`
- `B` product-specific template/render cache issue:
  - not supported by this pass
- `C` stale cached product route:
  - not supported by this pass
- `D` CSS/JS hides button only for certain product states:
  - not needed to explain the two target handles after this pass
- `E` QA selector mismatch:
  - best fit for the non-reproduced `virtual-reality-vr-glasses...` issue
- `F` product exists in collection feed but storefront PDP is partially stale:
  - not supported by the current 21HW-Y evidence

## Recommended fix
- `virtual-reality-vr-glasses...`
  - no immediate fix recommended from this slice
  - treat as currently healthy unless the failure reproduces again
- `23-pack-desk-drawer-organizers...`
  - inspect product availability/inventory/publication state in Shopify Admin before launch
  - fields to inspect manually:
    - variant availability
    - inventory policy / stock state
    - whether the product should remain publicly listed while unavailable
  - do not mutate in this slice

## Hide/defer recommendation before launch
- `virtual-reality-vr-glasses...`
  - hide/defer before launch: no
- `23-pack-desk-drawer-organizers...`
  - hide/defer before launch: yes, if the product is not intended to remain publicly visible while unavailable and Add to Cart cannot be made reliable before launch

## Product mutations
- Performed: no

## Payment
- Submitted: no

## Raw evidence
- Local artifact:
  - `artifacts/slice-21hw-y/audit.json`
- Local untracked runner:
  - `tools/catalogue/run-slice-21hw-y-win.cjs`

## Verdict
- `21HW-Y`: `partial pass`

## Conclusion
- No active stale-lock/render blocker was reproduced on `virtual-reality-vr-glasses...` in this slice.
- The remaining consistently failing current handle is `23-pack-desk-drawer-organizers...`, and its failure aligns with no available variants rather than a stale template/render path.

## Recommended next slice
- `21HW-Z-WIN`
  - Product Owner review of publicly listed unavailable products
  - decide whether products like `23-pack-desk-drawer-organizers...` should be kept visible as unavailable catalogue items or deferred/hidden before launch
