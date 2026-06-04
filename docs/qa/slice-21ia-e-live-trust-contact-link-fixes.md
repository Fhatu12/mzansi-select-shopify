## Slice 21IA-E - Live trust/contact/link fixes

Date: 2026-06-04

### Scope
- Fix customer-facing trust/contact/link regressions on live theme `Horizon` `#158396285153`.
- Preserve products, prices, inventory, collections, shipping, checkout providers, and current Add to Cart flow.

### Pre-check
- Repo: `/home/fhatu/dev/mzansi-select-shopify`
- `git status --short --branch` at start showed existing unrelated local theme edits plus untracked `tools/catalogue/`.
- `shopify theme list --store mzansiselect.myshopify.com` confirmed live theme `Horizon` `#158396285153`.
- Read baseline audit: `docs/qa/slice-21ia-d-live-store-regression-audit.md`.

### Root cause
- The live Horizon theme still served older footer/contact/PDP copy that was written for a restricted pilot phase.
- Footer links still pointed to dead `/pages/about` anchors and legacy support contact details.
- The contact route continued serving stale rendered output until the contact page template was repushed, which caused Shopify to rebuild that page route from the updated live section files.

### Files changed
- `sections/site-footer.liquid`
- `sections/business-details-foundation.liquid`
- `sections/main-product-foundation.liquid`
- `templates/page.contact.json`
- `docs/qa/slice-21ia-e-live-trust-contact-link-fixes.md`
- `docs/project-control.md`

### Files pushed to live theme
- `sections/site-footer.liquid`
- `sections/business-details-foundation.liquid`
- `sections/main-product-foundation.liquid`
- `templates/page.contact.json`

### Exact push commands
```bash
shopify theme push --store mzansiselect.myshopify.com --theme 158396285153 --allow-live --only sections/site-footer.liquid --only sections/business-details-foundation.liquid --only sections/main-product-foundation.liquid
shopify theme push --store mzansiselect.myshopify.com --theme 158396285153 --allow-live --only templates/page.contact.json
```

### What changed
- Removed customer-facing old phone references from footer/contact business-details output.
- Standardized support email to `info@sikhwarigroup.co.za`.
- Repointed broken company/privacy links:
  - `About Us` -> `/pages/contact#business-details`
  - `Privacy Policy` -> `/policies/privacy-policy`
  - company disclosure self-link -> `/pages/contact#business-details`
  - footer legal/contact route -> `/policies/contact-information`
- Replaced stale PDP pilot messaging in the purchase area with live-commerce-safe wording that does not conflict with visible prices and `Add to Cart`.
- Preserved available-product `Add to Cart` visibility and did not alter payment/provider configuration.

### Verification
- Route checks:
  - `/` -> `200`
  - `/collections/all` -> `200`
  - `/pages/faq` -> `200`
  - `/pages/contact` -> `200`
  - `/policies/shipping-policy` -> `200`
  - `/policies/refund-policy` -> `200`
  - `/policies/contact-information` -> `200`
  - `/policies/privacy-policy` -> `200`
- Live PDP sampled: `/products/2-inch-wireless-two-way-intercom-baby-video-monitor`
  - `Add to Cart` visible
  - no rendered `controlled pilot`, `not a public launch`, `deferred checkout`, `preview only`, `not available for purchase`, or `Invite-only pilot` copy in the fetched PDP HTML
- Old phone/email verification after final push:
  - no `tel:+27829974112` on `/` or `/pages/contact`
  - no visible `+27 82 997 4112` on `/` or `/pages/contact`
  - no `Fhatuwani.Sikhwari@sikhwarigroup.co.za` on `/` or `/pages/contact`
  - `info@sikhwarigroup.co.za` visible in footer and business-details/contact output
- Broken link verification after final push:
  - no `/pages/about#about-us` in rendered homepage/contact output
  - no `/pages/about#privacy-policy` in rendered homepage/contact output
  - no `/pages/business-details` disclosure link in rendered contact output
- Liquid/runtime check:
  - no Liquid errors surfaced in fetched storefront HTML during verification

### Payment/provider status
- Unchanged.
- No payment providers were activated, deactivated, configured, or tested through checkout submission in this slice.

### Remaining blockers
- Shopify storefront page caching briefly served stale `/pages/contact` HTML after the first section push; repushing `templates/page.contact.json` resolved the route.
- Full checkout/payment visibility remains outside this slice and was not revalidated here.

### Verdict
- PASS: live trust/contact/link regressions targeted by 21IA-E were corrected on the published Horizon theme without touching product or payment configuration.
