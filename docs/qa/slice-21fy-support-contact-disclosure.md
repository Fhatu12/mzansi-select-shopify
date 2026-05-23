# Slice 21FY Support Contact Disclosure

- **Date:** 2026-05-23
- **Verdict:** **PASS WITH NOTES**
- **Scope:** Bounded support contact disclosure (email + phone) on existing Contact / Business Details surface and footer
- **Live theme:** `151207542967` / `Mzansi Select MVP Preview`
- **Upstream:** Slice 21FX Business Details disclosure already present under `/pages/contact#business-details`

## Pre-check

- Branch: `master`
- `artifacts/` ignore rule confirmed
- `tools/catalogue/` remained untracked and uncommitted
- No Admin product mutation, checkout/payment enablement, newsletter capture, theme publish, full sync, import/sync, media upload, `Supplier verified`, or stock/inventory/pricing changes were performed or planned

## Approved Support Contact Added

- Support email (display): `Fhatuwani.Sikhwari@sikhwarigroup.co.za`
- Support email link: `mailto:Fhatuwani.Sikhwari@sikhwarigroup.co.za`
- Support phone (display): `+27 82 997 4112`
- Support phone link: `tel:+27829974112`

## Storefront Surfaces Updated

- Contact / Business Details surface: `sections/business-details-foundation.liquid`
  - Shows support email + phone as links
  - No forms added
- Footer (desktop + mobile Help lists): `sections/site-footer.liquid`
  - Added compact email and phone links under Help

## Files Changed

- `sections/business-details-foundation.liquid`
- `sections/site-footer.liquid`
- `docs/qa/slice-21fy-support-contact-disclosure.md`
- `docs/project-control.md`

## Files Pushed To Live Theme

- `sections/business-details-foundation.liquid`
- `sections/site-footer.liquid`

Push command:

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 151207542967 --allow-live --nodelete --json --no-color --only sections/business-details-foundation.liquid --only sections/site-footer.liquid
```

## Routes Checked

- `/pages/contact#business-details` (Business Details section + support contact)
- Footer “Business Details” link points to `/pages/contact#business-details`

## Customer-Data Safety Result

- **PASS**
- No newsletter/email capture surfaces were introduced
- No email input fields were introduced (support email is a mailto link only)

## Commerce Safety Result

- **PASS**
- No Add to Cart, cart/add forms, quick-add, dynamic checkout, or checkout/payment/customer-flow paths were introduced by this slice
- Catalogue-only posture remains unchanged

## Remaining Go-Live Blockers

- Storefront access lock still blocks unauthenticated public rendering checks in this environment
- Public go-live decision remains separate from this slice

