## Slice 21IA-I - Clean theme candidate to bypass stale storefront chrome

Date: 2026-06-04

### Scope
- Remove the last known stale customer-facing source string.
- Create a fresh unpublished theme candidate from the current repo.
- Verify whether candidate preview output bypasses the stale preview-era storefront chrome without publishing.

### Pre-check
- `git status --short --branch` showed only untracked `tools/catalogue/` before edits.
- `shopify theme list --store mzansiselect.myshopify.com` confirmed live theme `Horizon` `#158396285153`.
- `git fetch origin` and `git status -sb` confirmed repo sync with GitHub except `tools/catalogue/`.

### Source fixes applied

Remaining stale source string fixed:
- `sections/announcement-topbar.liquid`
  - replaced:
    - `Preview catalogue: delivery and fulfilment details on this page are not final until separately approved.`
  - with:
    - `Delivery is calculated at checkout and support is available at info@sikhwarigroup.co.za.`

Additional customer-facing stale wording fixed:
- `sections/promo-banner-split.liquid`
  - `Preview highlight` -> `Featured selection`
  - `Preview Picks` -> `Featured Picks`
  - `Preview picks for the products you actually need` -> `Practical picks for the products you actually need`
  - `Browse preview picks` -> `Browse featured picks`
  - decorative image alt text updated to remove `preview`

### Full source scan results

Customer-facing stale wording fixed in this slice:
- `sections/announcement-topbar.liquid`
- `sections/promo-banner-split.liquid`

Internal or non-customer-facing safe references left unchanged:
- `layout/theme.liquid`
  - JS checks for `/price to be confirmed/i` used to recover visible purchase UI wording
- `sections/main-404-foundation.liquid`
  - controlled-pilot fallback copy for the non-standard `/collections/controlled-pilot` 404 surface

Shopify schema or technical safe references left unchanged:
- `config/settings_schema.json`
  - internal admin labels/info for controlled-pilot trust wording

Customer-facing commerce-gating wording still present in source:
- `snippets/live-product-card.liquid`
- `sections/main-product-foundation.liquid`
- `blocks/buy-buttons.liquid`
- `blocks/add-to-cart.liquid`
- `snippets/price.liquid`

These contain `Price to be confirmed` for commerce-blocked product states. They were not expanded by this slice and were left unchanged to avoid altering availability gating behavior.

### Candidate theme creation
- Created unpublished candidate theme: `Mzansi Select Clean Candidate 21IA-I`
- Candidate theme ID: `162643345633`
- Candidate preview URL:
  - `https://mzansiselect.myshopify.com?preview_theme_id=162643345633`

Exact candidate creation command:
```bash
shopify theme push --store mzansiselect.myshopify.com --unpublished --json --theme "Mzansi Select Clean Candidate 21IA-I"
```

### Candidate source verification
- Pulled the candidate theme back to `/tmp/mzansi-21iai-candidate`.
- Candidate source matched repo for the key chrome files:
  - `sections/announcement-topbar.liquid`
  - `sections/trust-bar.liquid`
  - `sections/site-header.liquid`
  - `sections/promo-banner-split.liquid`
  - `sections/main-cart-foundation.liquid`
  - `sections/main-product-foundation.liquid`

Pulled candidate source scan result:
- targeted stale public chrome strings were no longer present in the uploaded candidate source files above
- remaining hits were limited to:
  - `Price to be confirmed` gating strings
  - `sections/main-404-foundation.liquid` controlled-pilot fallback copy
  - `config/settings_schema.json` internal admin schema labels

### Candidate preview verification

Checked routes:
- `/`
- `/collections/all`
- `/search?q=bracelet`
- `/cart`
- `/pages/faq`
- `/pages/contact`
- `/policies/shipping-policy`
- `/policies/refund-policy`
- sampled PDP: `/products/2-inch-wireless-two-way-intercom-baby-video-monitor`

Candidate preview routes with stale wording still present:
- `/`
  - stale preview topbar and trust-bar wording still rendered
- `/cart`
  - stale preview topbar, cart copy, and trust-bar wording still rendered
- `/pages/contact`
  - stale preview topbar and trust-bar wording still rendered
- sampled PDP
  - stale preview topbar/trust-bar wording still rendered
  - `Controlled pilot preview` still rendered

Candidate preview routes that mostly reflected cleaned source:
- `/collections/all`
- `/search?q=bracelet`
- `/pages/faq`
- `/policies/shipping-policy`
- `/policies/refund-policy`

Important preview finding:
- even on the routes that mostly reflected cleaned source, `Preview catalogue: delivery and fulfilment details on this page are not final until separately approved.` still appeared in preview HTML
- this stale phrase was not present in the pulled candidate source for `sections/announcement-topbar.liquid`

Candidate preview safety checks:
- old phone `+27 82 997 4112`: not found in candidate preview fetches
- old personal email `Fhatuwani.Sikhwari@sikhwarigroup.co.za`: not found in candidate preview fetches
- `info@sikhwarigroup.co.za`: present where support email appears
- sampled PDP `Add to Cart`: visible
- `/cart`: opens
- `Liquid error`: not found in fetched candidate HTML
- dynamic checkout button marker `shopify-payment-button`: not found in fetched candidate HTML

### Live vs candidate comparison

Current live stale wording:
- yes
- `/`, `/cart`, and sampled PDP still served the same stale preview-era topbar/trust/cart/PDP wording previously documented in 21IA-H

Candidate preview stale wording:
- yes
- `/`, `/cart`, `/pages/contact`, and sampled PDP still served the same stale preview-era chrome bundle

Comparison verdict:
- creating a fresh unpublished theme candidate did **not** bypass the stale render path on the affected routes
- because the uploaded candidate source itself is clean for the targeted chrome files, the remaining stale preview output is not explained by repo state or by a bad theme upload

### Publish recommendation
- Do **not** publish the candidate theme yet.
- Reason:
  - candidate preview still shows stale customer-facing preview-era chrome on critical routes
  - publishing would not be evidence-based and would risk promoting the same stale output path to the live published theme role

### Remaining blockers
- Route-specific storefront or preview serving is still mixing stale preview-era chrome on `/`, `/cart`, `/pages/contact`, and PDP routes.
- `Controlled pilot preview` still appears on the sampled PDP preview output even though the pulled candidate source for the main chrome files is clean.
- This slice did not use Shopify Admin customizer saves/toggles, by design.

### Recommended next action
- Escalate with the combined 21IA-H and 21IA-I evidence that:
  - live theme source is clean for the targeted chrome files
  - newly uploaded unpublished candidate source is also clean
  - live and preview HTML still serve stale route-specific chrome on critical routes
- Until that route-serving issue is resolved, do not publish the candidate.

### Verdict
- PARTIAL PASS
- A clean unpublished candidate theme was created successfully, but its preview output still shows stale preview-era chrome on key routes, so it is not safe to publish.
