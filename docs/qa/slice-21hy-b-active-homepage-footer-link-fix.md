# Slice 21HY-B - Active homepage and footer support link fix

Date: 2026-06-01
Store: `mzansiselect.myshopify.com`
Live theme: `Mzansi Select MVP Restored #162429075681`

## Objective
Fix active rendered support links on homepage and footer to policy/FAQ routes.

## Root cause
Active rendered output still referenced legacy About anchors in live Liquid for navigation/footer help links:
- `sections/primary-navigation.liquid`
- `sections/site-footer.liquid`

These links pointed to `/pages/about#shipping`, `/pages/about#returns`, `/pages/about#faq` and caused stale/404 behavior after FAQ route moved to `/pages/faq`.

## Changes made
- Updated help links to:
  - Shipping -> `/policies/shipping-policy`
  - Returns -> `/policies/refund-policy`
  - FAQ -> `/pages/faq`
- Files changed:
  - `sections/primary-navigation.liquid`
  - `sections/site-footer.liquid`

## Files pushed
- `sections/primary-navigation.liquid`
- `sections/site-footer.liquid`

## Exact push command
`shopify theme push --store mzansiselect.myshopify.com --theme 162429075681 --allow-live --nodelete --only sections/primary-navigation.liquid --only sections/site-footer.liquid`

## Route verification
- `/` -> `200`
- `/policies/shipping-policy` -> `200`
- `/policies/refund-policy` -> `200`
- `/pages/faq` -> `200`
- `/pages/contact` -> `200`
- `/collections/all` -> `200`
- Sample PDP `/products/17cm-labubu-mini-plush-toy-multiple-styles-clothing-set-labubu-outfit-accessories-trendy-play-clothing-labubu-clothes-gift` -> `200`

## Rendered link verification
Homepage/footer rendered output now resolves to:
- Homepage Shipping info / rates -> `/policies/shipping-policy`
- Homepage Returns / Easy returns -> `/policies/refund-policy`
- Homepage FAQ / Get answers -> `/pages/faq`
- Hero secondary Shipping info CTA -> `/policies/shipping-policy`
- Footer Shipping -> `/policies/shipping-policy`
- Footer Returns -> `/policies/refund-policy`
- Footer FAQ -> `/pages/faq`
- No active homepage/footer output contains:
  - `/pages/about#shipping`
  - `/pages/about#returns`
  - `/pages/about#faq`

## Hero decorative tile status
No decorative tile click behavior was added or changed. Decorative tiles remain visual-only.

## Commerce safety verification
Confirmed no changes or enablement for:
- PayFast
- Peach
- payment provider activation
- Add to Cart activation
- `/cart/add` wiring changes
- quick-add
- dynamic checkout
- Supplier verified changes
- newsletter capture
- Liquid errors observed during checks

## Notes
`tools/catalogue/` remains untracked.
