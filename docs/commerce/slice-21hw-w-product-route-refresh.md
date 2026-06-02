# Slice 21HW-W - Product route refresh safety check

Date: 2026-06-02

## Objective
- Refresh stale public product-route render state only if a `templateSuffix` re-save is clearly safe and still matches the previously proven failure mode.

## Pre-check
- Windows Shopify CLI available: `3.94.3`
- Verified Admin GraphQL auth works on `sikhwarigroupdev.myshopify.com` via `shopify store execute`
- Verified source repo contains required commit threshold:
  - latest relevant commit includes `e144409`
- Verified no payment, shipping, product-content, media, inventory, or collection mutation was planned

## Live theme
- Customer-facing store: `https://mzansiselect.myshopify.com`
- Admin store: `sikhwarigroupdev.myshopify.com`
- Public route response headers confirmed live theme ID `158396285153`
- Live theme name from prior verified slice evidence: `Horizon`

## Prior stale-handle baseline from 21HW-V
- Previously stale or split-behaviour handles:
  - `virtual-reality-vr-glasses-imax-huge-screen-hd-3d-glasses-google-cardboard-box-vr-headset-helmet-for-5-7-phone-support-gamepad`
  - `labubu-display-box-transparent-labubu-big-leader-summer-doll-cotton-doll-blind-box-storage-cabinet`
  - `32-pieses-wooden-chess-standard-tournamen-staunton-wood-chessmen-8cm-king-height-chess-pieces-only-no-board`

## Current public re-check
- Re-checked the same candidate handles with cache-busting query strings.
- Result changed from the 21HW-V stale-render signature:
  - `virtual-reality-vr-glasses-imax-huge-screen-hd-3d-glasses-google-cardboard-box-vr-headset-helmet-for-5-7-phone-support-gamepad`
    - current public result: themed `404` page
    - page evidence exposed `pageType: "404"`
  - `labubu-display-box-transparent-labubu-big-leader-summer-doll-cotton-doll-blind-box-storage-cabinet`
    - current public result: themed `404` page
    - page evidence exposed `pageType: "404"`
  - `32-pieses-wooden-chess-standard-tournamen-staunton-wood-chessmen-8cm-king-height-chess-pieces-only-no-board`
    - no longer returned by the Admin product audit query

## Classification
- Stale public PDP handles found in this slice: none conclusively re-proven
- Current-good public PDP handles found in this slice: none newly sampled in scope
- Route-level blocker found:
  - candidate handles now resolve to themed `404` output instead of a stale-but-live PDP render

## Admin product audit result
- Read-only Admin audit executed for affected handles only
- Raw response saved under local artifacts:
  - `artifacts/slice-21hw-w/admin-product-audit.json`
- Matched uniquely in Admin:
  - `labubu-display-box-transparent-labubu-big-leader-summer-doll-cotton-doll-blind-box-storage-cabinet`
    - id: `gid://shopify/Product/9498179141857`
    - status: `ACTIVE`
    - templateSuffix: `null`
  - `virtual-reality-vr-glasses-imax-huge-screen-hd-3d-glasses-google-cardboard-box-vr-headset-helmet-for-5-7-phone-support-gamepad`
    - id: `gid://shopify/Product/9503916458209`
    - status: `ACTIVE`
    - templateSuffix: `null`
- Not matched in Admin:
  - `32-pieses-wooden-chess-standard-tournamen-staunton-wood-chessmen-8cm-king-height-chess-pieces-only-no-board`

## Template suffix result
- Both uniquely matched Admin products already use the default product template state:
  - `templateSuffix: null`
- Because the public symptom shifted to themed `404` pages, a no-op `productUpdate` with the same `templateSuffix` was not considered a sufficiently safe or justified mutation.

## Mutation decision
- Products refreshed/re-saved: `0`
- Exact mutation fields used: none
- `productUpdate` not executed

## Why mutation was not performed
- Approved scope allowed only a safe product template assignment refresh.
- The current public evidence no longer matches the earlier stale-render signature from 21HW-V.
- Two candidate handles now render themed `404` pages, which is a materially different symptom from:
  - stale `pdp-catalogue-lock.js`
  - stale `Price to be confirmed`
  - missing current PDP markers on a still-live product route
- One candidate handle is not returned by the Admin audit at all.
- Forcing `productUpdate(id, templateSuffix)` under these conditions risked mutating products without a clear causal basis for the route failure.

## Public PDP verification result
- Add to Cart visible: no, because sampled candidate routes did not resolve to live PDPs in this pass
- Stale lock reference present: no in the current sampled outputs, but the routes were `404` pages rather than working PDPs
- Public PDP verification verdict: blocked by route-state change

## Regression checks
- Not expanded beyond the scoped product-route checks in this pass
- No payment submitted
- No checkout/payment authorization attempted

## Manual fallback
- Do not edit title, description, price, variants, inventory, media, collections, shipping, or payment settings.
- For only a handle that Product Owner confirms should still be a live storefront product:
  1. Shopify Admin -> Products -> open the exact product
  2. Confirm the product is intended for the Online Store
  3. Confirm the Product template is the default product template unless a known safe custom suffix is already intended
  4. Save without changing content fields
  5. Re-check the public product URL
- If the public route still resolves to `404`, investigate publication/visibility/handle routing state before any further template refresh attempt.

## Safety confirmation
- Product content changed: no
- Price changed: no
- Media changed: no
- Inventory changed: no
- Shipping changed: no
- Payment submitted: no
- Dynamic checkout remained outside this slice scope and unchanged

## Raw evidence
- `artifacts/slice-21hw-w/admin-product-audit.json`
- `artifacts/slice-21hw-w/public-route-recheck.json`

## Verdict
- `21HW-W`: blocked
- Reason:
  - the approved `templateSuffix` refresh action is no longer clearly safe because the candidate routes now present as themed `404` pages rather than stale live PDP renders
