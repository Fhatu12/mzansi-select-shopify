## Slice 21IA-G - Remove remaining preview storefront wording

Date: 2026-06-04

### Scope
- Remove remaining customer-facing preview/pilot/deferred-launch wording across the live storefront theme where safely possible.
- Preserve products, prices, inventory, collections, shipping, payments, and the current purchase flow.

### Root cause
- Earlier slices updated only a subset of live-commerce wording files.
- Additional customer-facing preview-era copy still lived in shared layout/header/topbar/trust/cart/product-card surfaces.
- After updating those source files, Shopify continued serving stale public HTML on several routes despite the pulled live theme source reflecting the changes, indicating an additional storefront-serving/cache inconsistency outside normal source control.

### Stale wording found

Customer-facing stale wording removed from source:
- `layout/theme.liquid`
  - `Controlled pilot preview` page title override for `/collections/controlled-pilot`
- `sections/announcement-topbar.liquid`
  - `Preview announcements`
  - `Preview picks for South African homes.`
  - `Checkout preview`
  - `Returns guidance pending approval`
  - `Local support details to follow`
  - `Preview catalogue: delivery and fulfilment details on this page are not final until separately approved.`
- `sections/trust-bar.liquid`
  - `Delivery (preview)`
  - `Payments launch later`
  - `Checkout stays in preview in this slice.`
  - `Returns (preview)`
  - `Support (preview)`
  - related preview/pending wording in both trust-bar variants
- `sections/site-header.liquid`
  - `Preview category filter`
  - `Search currently runs across all preview items.`
  - `Account access not active in preview. Customer accounts paused.`
- `sections/main-cart-foundation.liquid`
  - cart line badge `Cart item` -> `Product`
- `snippets/live-product-card.liquid`
  - `Pending item`
  - `Preview product`
  - `Price pending confirmation`
  - `Price to be confirmed. This product is being prepared for launch.`
- `sections/main-product-foundation.liquid`
  - `Pending item`
  - `Price to be confirmed. This product is being prepared for launch.`
  - button/aria wording for `Price to be confirmed`
  - preview-specific reassurance wording on purchasable surfaces

Internal or safe-to-keep references not removed:
- internal variable names like `controlled_preview_route`, `pilot_trust`, `product-options-preview`
- Shopify technical `preview_image` APIs and CSS class names
- non-live fallback/recovery surfaces such as controlled 404 preview logic

### Files changed
- `layout/theme.liquid`
- `sections/announcement-topbar.liquid`
- `sections/trust-bar.liquid`
- `sections/site-header.liquid`
- `sections/main-cart-foundation.liquid`
- `snippets/live-product-card.liquid`
- `sections/main-product-foundation.liquid`
- `templates/index.json`
- `docs/qa/slice-21ia-g-remove-remaining-preview-wording.md`
- `docs/project-control.md`

### Files pushed
- `layout/theme.liquid`
- `sections/announcement-topbar.liquid`
- `sections/trust-bar.liquid`
- `sections/site-header.liquid`
- `sections/main-cart-foundation.liquid`
- `snippets/live-product-card.liquid`
- `sections/main-product-foundation.liquid`
- `templates/index.json`

### Exact push commands
```bash
shopify theme push --store mzansiselect.myshopify.com --theme 158396285153 --allow-live --only layout/theme.liquid --only sections/announcement-topbar.liquid --only sections/trust-bar.liquid --only sections/site-header.liquid --only sections/main-cart-foundation.liquid --only snippets/live-product-card.liquid --only sections/main-product-foundation.liquid
shopify theme push --store mzansiselect.myshopify.com --theme 158396285153 --allow-live --only templates/index.json
```

### Live route verification
- `/` -> `200`
- `/collections/all` -> `200`
- `/search?q=bracelet` -> `200`
- `/cart` -> `200`
- `/pages/faq` -> `200`
- `/pages/contact` -> `200`
- `/policies/shipping-policy` -> `200`
- `/policies/refund-policy` -> `200`
- sampled PDP -> `200`

### Live result verification
- Pulled live theme source matched local edited files after push.
- Support email remained `info@sikhwarigroup.co.za`.
- Old phone number and old personal email were not present in the edited source files.
- Add to Cart remained visible on the sampled purchasable PDP.
- Cart route still opened successfully.
- No Liquid errors surfaced in fetched HTML.

### Add to Cart regression result
- PASS: sampled available PDP still rendered `Add to Cart`.

### Payment/provider confirmation
- Unchanged:
  - Stitch
  - Payflex
  - PayPal
  - PayFast
  - Peach
  - shipping rates
  - checkout provider settings
- No payment details entered and no payment authorization attempted.

### Remaining blockers
- Public storefront HTML continued to serve stale preview-era header/topbar/trust/cart/PDP chrome on several routes even after:
  - live source edits
  - successful theme push
  - successful live pull confirming source parity
  - template `index.json` touch-and-push
- This means source cleanup is complete for the changed files, but customer-facing verification remains partially blocked by storefront-serving/cache inconsistency.

### Verdict
- PARTIAL PASS:
  - remaining preview/pilot wording was removed from the targeted live theme source files
  - live theme pull confirms the updated source is published
  - Add to Cart and purchase flow remained intact
  - payment/provider state remained unchanged
  - public route HTML still served stale wording on some routes, so full storefront cleanup could not be verified as complete end-to-end
