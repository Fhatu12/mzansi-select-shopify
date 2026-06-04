## Slice 21IA-F - Live commerce wording, navigation, cart, and search alignment

Date: 2026-06-04

### Scope
- Verify, push, and commit the approved seven-file live-commerce wording/navigation/cart/search state on live Horizon theme `#158396285153`.
- Preserve products, prices, inventory, collections, shipping rates, payment providers, domain, and apps.

### Files approved
- `sections/main-cart-foundation.liquid`
- `sections/main-search-foundation.liquid`
- `sections/primary-navigation.liquid`
- `snippets/live-product-card.liquid`
- `templates/cart.json`
- `templates/product.json`
- `templates/search.json`

### Verification summary before push
- `git status --short --branch` showed only the approved seven tracked theme files plus untracked `tools/catalogue/`.
- `git diff --stat` confirmed the change set was limited to the seven approved files.
- `shopify theme list --store mzansiselect.myshopify.com` confirmed live theme `Horizon` `#158396285153`.
- Diff review confirmed the approved files only touched:
  - live-commerce wording
  - cart messaging
  - search messaging
  - product-card wording/trust cues
  - navigation/cart entry behaviour
  - template labels/copy
- No approved diff touched product data, prices, inventory, variants, shipping-rate configuration, payment-provider configuration, domain, or apps.

### Stale wording search in approved files
- Removed or reduced customer-facing preview/pilot wording in:
  - `sections/main-search-foundation.liquid`
  - `sections/primary-navigation.liquid`
  - `snippets/live-product-card.liquid`
  - `templates/cart.json`
  - `templates/product.json`
  - `templates/search.json`
- Remaining non-customer-facing/internal logic references such as `pilot_trust` were left intact where they are only variable names/branch controls.
- `Price to be confirmed` remains in gated `live-product-card` logic for blocked products and was not broadened by this slice.

### Support email verification
- Approved support email preserved:
  - `info@sikhwarigroup.co.za`
- No old personal phone or email strings remained in the approved seven files.

### Files pushed
- `sections/main-cart-foundation.liquid`
- `sections/main-search-foundation.liquid`
- `sections/primary-navigation.liquid`
- `snippets/live-product-card.liquid`
- `templates/cart.json`
- `templates/product.json`
- `templates/search.json`

### Exact push command
```bash
shopify theme push --store mzansiselect.myshopify.com --theme 158396285153 --allow-live --nodelete --only sections/main-cart-foundation.liquid --only sections/main-search-foundation.liquid --only sections/primary-navigation.liquid --only snippets/live-product-card.liquid --only templates/cart.json --only templates/product.json --only templates/search.json
```

### Route verification
- `/` -> `200`
- `/collections/all` -> `200`
- `/search?q=bracelet` -> `200`
- `/cart` -> `200`
- `/pages/faq` -> `200`
- `/pages/contact` -> `200`
- `/policies/shipping-policy` -> `200`
- `/policies/refund-policy` -> `200`
- Sampled PDP: `/products/2-inch-wireless-two-way-intercom-baby-video-monitor`

### Live behaviour verification
- PDP:
  - `Product details` rendered on the sampled PDP.
  - `Add to Cart` remained visible.
  - Support email rendered as `info@sikhwarigroup.co.za`.
- Search route:
  - Search page core content updated to:
    - `Search live products currently visible on Mzansi Select.`
    - `Search products`
    - `Search query`
    - `Product matches`
  - Restricted-preview wording was removed from the main search page section that this slice controls.
- Homepage/footer:
  - Cache-busted fetch confirmed footer/support/company links from the already-updated footer section remained correct, including `info@sikhwarigroup.co.za`, `/pages/contact#business-details`, `/policies/privacy-policy`, and `/policies/contact-information`.
- Cart route:
  - Public fetch remained inconsistent during verification and still served older `Cart Preview` / pilot-verification copy despite the pulled live theme source showing the updated approved files.

### Source-of-truth cross-check
- Pulled live theme files after push matched local approved source for:
  - `sections/main-cart-foundation.liquid`
  - `sections/main-search-foundation.liquid`
  - `sections/primary-navigation.liquid`
  - `snippets/live-product-card.liquid`
  - `templates/cart.json`
  - `templates/product.json`
  - `templates/search.json`

### Payment/provider confirmation
- Unchanged.
- No payment providers were activated/deactivated.
- No checkout provider settings were changed.
- No payment authorization or payment detail entry was performed.

### Remaining blockers
- Public storefront serving/caching remained inconsistent on some routes during verification:
  - `/cart` still returned older `Cart Preview` / controlled-pilot cart copy in fetched HTML even after the approved source push.
  - `/search?q=bracelet` still includes unrelated preview phrasing in non-approved surfaces outside the seven-file scope, such as topbar/trust/header elements.
- These remaining strings are outside or only partially inside the approved seven-file slice and need a separate bounded follow-up if the goal is full storefront preview-copy removal.

### Verdict
- PARTIAL PASS:
  - Approved seven files were verified, pushed, and are reflected in pulled live theme source.
  - PDP/search/core cart/search/navigation wording moved in the approved live-commerce direction.
  - `Add to Cart` remained visible on the sampled available PDP.
  - Payment/provider state remained unchanged.
  - Final public route HTML still showed mixed stale preview wording on some non-PDP routes, so full customer-facing copy cleanup is not yet complete.
