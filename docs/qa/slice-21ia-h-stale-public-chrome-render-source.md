## Slice 21IA-H - Isolate stale public chrome render source

Date: 2026-06-04

### Scope
- Prove where stale public storefront chrome wording is still coming from on the live store.
- Preserve Add to Cart, cart/checkout flow, navigation, support links, policies, wishlist, gallery, variants, and provider/payment configuration.

### Pre-check
- `git status --short --branch` confirmed a clean tracked worktree before the slice, with only untracked `tools/catalogue/`.
- `shopify theme list --store mzansiselect.myshopify.com` confirmed live theme `Horizon` `#158396285153`.
- Pulled the current live theme into a temp folder only:
  - `/tmp/mzansi-21iah-live`

### Search scope
- Repo source:
  - `layout/`
  - `sections/`
  - `snippets/`
  - `templates/`
  - `blocks/`
  - customer-facing text in `assets/`
- Pulled live theme source:
  - same paths plus `config/settings_data.json` and `config/settings_schema.json`

### Exact stale strings found in public HTML

Public route fetches used cache-busting query strings and no-cache headers.

Found in public HTML on `/`, `/cart`, and sampled PDP:
- `Preview announcements`
- `Preview picks for South African homes.`
- `Checkout preview`
- `Returns guidance pending approval`
- `Local support details to follow`
- `Preview catalogue: delivery and fulfilment details on this page are not final until separately approved.`
- `Delivery (preview)`
- `Payments launch later`
- `Checkout stays in preview in this slice.`
- `Returns (preview)`
- `Support (preview)`

Found in public HTML on `/`:
- `Invite-only controlled pilot - not a public launch. We are still refining fulfilment, support, and checkout routing before broad release.`
- old support email `Fhatuwani.Sikhwari@sikhwarigroup.co.za`
- old phone `+27 82 997 4112`

Found in sampled PDP public HTML:
- stale topbar/header/trust chrome as above
- `Controlled pilot preview`
- `Add to Cart` still present
- `info@sikhwarigroup.co.za` still present where support email appears

### Source and settings comparison

Pulled live theme source matched repo source for the chrome files that were updated in earlier slices:
- `layout/theme.liquid`
- `sections/announcement-topbar.liquid`
- `sections/trust-bar.liquid`
- `sections/site-header.liquid`
- `sections/main-cart-foundation.liquid`
- `sections/main-product-foundation.liquid`
- `snippets/live-product-card.liquid`

Pulled live source shows updated customer-facing wording in the main public chrome files:
- `sections/announcement-topbar.liquid`
  - `Store announcements`
  - `Practical picks for South African homes.`
  - `Checkout available`
  - `Returns backed by the published refund policy`
  - `Email support at info@sikhwarigroup.co.za`
- `sections/trust-bar.liquid`
  - `Delivery`
  - `Payments`
  - `Returns`
  - `Support`
- `sections/site-header.liquid`
  - updated category/search/account wording with no preview labels

Important exception still present in live source:
- `sections/announcement-topbar.liquid`
  - `Preview catalogue: delivery and fulfilment details on this page are not final until separately approved.`

Search result across pulled live source/settings:
- stale public chrome strings were not present in `/tmp/mzansi-21iah-live/config/settings_data.json`
- repo does not carry `config/settings_data.json`
- `config/settings_schema.json` still contains internal/admin schema wording for preview-era settings labels, but not the stale public route strings listed above

Other stale source strings still present outside the chrome mismatch:
- `Price to be confirmed` remains in product gating logic in:
  - `sections/main-product-foundation.liquid`
  - `snippets/live-product-card.liquid`
  - `blocks/add-to-cart.liquid`
  - `blocks/buy-buttons.liquid`
  - `snippets/price.liquid`
- non-live fallback copy remains in `sections/main-404-foundation.liquid`
- `Preview Picks` CTA text remains in `sections/promo-banner-split.liquid`

These do not explain the stale homepage/cart/topbar/trust/footer chrome currently served to the public.

### Route evidence
- `/`
  - public HTML still served stale topbar, trust-bar, and old footer/contact chrome
- `/cart`
  - public HTML still served stale topbar and trust-bar wording
- `/search?q=bracelet`
  - route remained part of the stale-chrome investigation, with earlier slices already showing mixed topbar/trust/header rendering outside the main search section
- sampled PDP
  - public HTML still served stale topbar/trust chrome
  - `Add to Cart` remained visible

### Root cause classification
- Live theme confirmed: `yes`
- Stale strings found in pulled live source/settings: `yes`, but only as limited residual source strings and not as the exact stale public chrome bundle currently served
- Public HTML stale strings found: `yes`
- Root cause classification: `C`

Why `C`:
- The pulled current live theme source matches the repo for the main chrome files.
- The exact stale public chrome bundle still served on `/`, `/cart`, and PDP does not match the pulled current live source or `settings_data.json`.
- Public fetches returned normal storefront HTML, so this is not a challenge page.
- Live theme identity was confirmed, so this is not the wrong store/theme context.

### Files changed
- `docs/qa/slice-21ia-h-stale-public-chrome-render-source.md`
- `docs/project-control.md`

### Files pushed
- None to Shopify in this slice.

### Exact push command
- None. No theme push was performed because the evidence pointed to stale public serving rather than a new safe source-only fix.

### Add to Cart regression result
- PASS
- Sampled PDP still rendered `Add to Cart`.

### Payment/provider confirmation
- Unchanged: yes
- No changes were made to Stitch, Payflex, PayPal, PayFast, Peach, shipping, checkout settings, products, prices, inventory, collections, domain, or apps.

### Remaining blockers
- Public storefront HTML continues to serve stale preview-era chrome that does not match the pulled current live theme source.
- One stale source string still remains in `sections/announcement-topbar.liquid`, but it does not explain the broader stale public chrome bundle currently returned on multiple routes.

### Recommended next action
- Do not keep editing source blindly.
- In Shopify Admin theme customizer for live theme `#158396285153`, open and save these sections without changing provider or commerce settings:
  - `Announcement topbar`
  - `Trust bar`
  - `Site header`
  - footer/contact section in use on homepage
- Recheck `/`, `/cart`, `/search?q=bracelet`, and one live PDP in a normal incognito browser.
- If stale chrome still persists while pulled live source remains correct, escalate to Shopify support with the source-versus-public evidence from this slice.

### Verdict
- PASS for diagnosis.
- The smallest safe action in this slice was to stop additional theme edits and document that the stale public chrome is being served from outside the currently pulled live theme source-of-truth.
