# Slice 21IA-M - Homepage preview section removal

Date: 2026-06-04

## Objective
Remove the remaining homepage preview wording by removing the homepage promo section that carries it, and rename the New Arrivals home-living tile heading from `Modern Living Room Collection` to `Modern Living Collection` on live theme `Horizon` `#158396285153`.

## Pre-check
- `git status --short --branch` before edits: `## master...origin/master [ahead 1]` and untracked `tools/catalogue/`
- `shopify theme list --store mzansiselect.myshopify.com` confirmed live theme: `Horizon [live] #158396285153`

## Root cause
- The remaining preview wording on the homepage came from the homepage promo section wired as `promo_banner` in `templates/index.json`, rendered by `sections/promo-banner-split.liquid`.
- The New Arrivals home-living heading was still hard-coded as `Modern Living Room Collection` in `sections/feature-tile-grid.liquid`.
- After the first push, Shopify remote theme source reflected the approved changes, but the public storefront HTML for `/` continued to serve stale pre-change homepage markup during verification. This appears to be storefront propagation or cache lag rather than an unresolved local-source diff.

## Approved changes applied
- Removed the homepage `promo_banner` section from `templates/index.json`.
- Renamed the New Arrivals tile heading in `sections/feature-tile-grid.liquid`:
  - `Modern Living Room Collection` -> `Modern Living Collection`

## Files changed
- `templates/index.json`
- `sections/feature-tile-grid.liquid`
- `docs/qa/slice-21ia-m-homepage-preview-section-removal.md`
- `docs/project-control.md`

## Files pushed
- `templates/index.json`
- `sections/feature-tile-grid.liquid`

## Exact push command
```bash
shopify theme push --store mzansiselect.myshopify.com --theme 158396285153 --allow-live --nodelete --only templates/index.json --only sections/feature-tile-grid.liquid
```

## Live verification
### Theme source verification
- Remote live theme pull for `#158396285153` confirmed:
  - `templates/index.json` no longer includes `promo_banner`
  - `sections/feature-tile-grid.liquid` now contains `Modern Living Collection`

### Public storefront route verification
- Verified reachable with no Liquid error surfaced:
  - `/`
  - `/collections/all`
  - `/pages/contact`
  - `/pages/faq`
  - `/policies/shipping-policy`
  - `/policies/refund-policy`
  - sampled PDP: `/products/mini-7-in-1-multifunctional-led-desk-lamp-with-wireless-charger`
  - `/cart`

### Homepage verification result
- Source-of-truth theme files: pass
- Public storefront HTML at `/`: still stale at verification time
- Observed stale public homepage strings still present during live fetch:
  - `Preview highlight`
  - `Tech & Home Preview Picks`
  - `Browse preview picks`
  - `Modern Living Room Collection`
- Therefore:
  - section removed/hidden in live theme source: yes
  - preview wording removed from public homepage response at verification time: no
  - heading rename visible on public homepage at verification time: no

## Regression checks
- Sampled PDP still exposes a live `/cart/add` form and visible Add to Cart messaging.
- Cart route still renders correctly.
- Safe cart-add regression passed using variant `48439852925153`; cart rendered quantity `1` for the sampled product after POST to `/cart/add`.
- Footer cleanup remained present in fetched storefront HTML.
- No old phone number was found in fetched storefront HTML.
- No old personal email was found in fetched storefront HTML.

## Payment/provider unchanged confirmation
- No payment, provider, checkout configuration, shipping, product, inventory, price, or collection changes were made.
- Verification was theme-file and storefront-route only.

## Remaining blockers
- Shopify storefront `/` continued to serve stale homepage markup after the live theme source update and repeated cache-busted fetches.
- Follow-up may be needed if public homepage cache does not self-refresh to the already-pushed live theme state.
