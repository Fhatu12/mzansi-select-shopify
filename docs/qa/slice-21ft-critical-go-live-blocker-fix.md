# Slice 21FT Critical Go-Live Blocker Fix

- **Date:** 2026-05-23
- **Verdict:** **FAIL WITH PARTIAL FIX**
- **Scope:** Bounded critical blocker fix before catalogue-only public go-live
- **Live theme:** `151207542967` / `Mzansi Select MVP Preview`
- **Upstream slice:** `37b2f5a71793897ed47dc85a17b2987ec801e8dc`

## Pre-check

- Branch and status before work: `## master` with `tools/catalogue/` still untracked.
- `HEAD` included accepted 21FS commit `37b2f5a7`.
- `artifacts/` ignore rule confirmed.
- `tools/catalogue/` remained untracked and uncommitted.
- Shopify CLI auth worked through `shopify theme list` and `shopify store execute` without exposing sensitive details.
- No checkout/payment/customer-flow enablement, product import/sync, product deletion, media upload, `Supplier verified`, price, inventory, delivery, warranty, or stock changes were performed or planned.
- No theme publish or full theme sync was performed or planned.

## Collection 404 Root Cause

- Both approved collection records already existed in Shopify Admin with the exact approved handles:
  - `retro-vault-consoles-classics`
  - `games-toys`
- Both collections were empty, which is acceptable for this slice.
- Both collections had **no Online Store publication**:
  - `resourcePublicationsV2` returned empty for both
- Because the records existed but were not published to Online Store, the storefront served 404 for both collection routes.

## Collection Route Fix

- Applied bounded Admin mutation:
  - `publishablePublish` for collection `gid://shopify/Collection/326118899895`
  - `publishablePublish` for collection `gid://shopify/Collection/326118932663`
  - Publication target: `gid://shopify/Publication/169105293495` (`Online Store`)
- No product membership was changed.
- No product was added.
- No collection handle was changed.
- Updated the collection theme section so published-but-empty categories render an honest state:
  - `Products coming soon.`
  - `This category is being prepared.`
  - `This category is being prepared for the public catalogue. Check back soon for its first products.`

## PDP Add To Cart Text Root Cause

- The sampled live PDPs were not consistently using the expected non-purchasable / price-to-confirm product-tag gate.
- Read-only Admin check on the three sampled live products showed **empty tag sets** for all three.
- The PDP theme contract depended on those tags to decide whether to show the catalogue-only blocked posture.
- Visible `Add to Cart` wording on PDPs came from the PDP foundation copy branch, not from an enabled cart form or quick-add component.

## Theme Fix Attempt

- Updated `sections/main-product-foundation.liquid` to:
  - remove visible `Add to Cart` wording from the PDP reassurance copy
  - use approved wording such as `Price to be confirmed` and `This product is being prepared for launch.`
  - force the catalogue-only blocked posture for live PDP rendering even when product tags drift
- Updated `sections/main-collection-foundation.liquid` to render the approved honest empty/deferred state for the two newly published empty collections.

## Files Changed

- `sections/main-collection-foundation.liquid`
- `sections/main-product-foundation.liquid`
- `docs/qa/slice-21ft-critical-go-live-blocker-fix.md`
- `docs/project-control.md`

## Files Pushed To Live Theme

- `sections/main-collection-foundation.liquid`
- `sections/main-product-foundation.liquid`

### Push commands

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 151207542967 --allow-live --nodelete --json --no-color --only sections/main-collection-foundation.liquid --only sections/main-product-foundation.liquid
```

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 151207542967 --allow-live --nodelete --json --no-color --only sections/main-product-foundation.liquid
```

## Theme / Static Checks

- `shopify theme check --fail-level error` ran.
- Result remained the same repo-wide pre-existing failure set:
  - `56 files inspected`
  - `305 total offences`
  - `264 errors`
  - `41 warnings`
- No new slice-specific Theme Check issue was isolated beyond those existing repo-wide failures.

## Verification

### Admin read-back

- Collection existence: **PASS**
- Collection handles exact: **PASS**
- Collection Online Store publication after fix: **PASS**
- Collection product count remained `0` for both: **PASS**

### Storefront validation

- Manual unlock used in headed browser only.
- No unlock details recorded or stored.
- Routes tested:
  - `/`
  - `/collections/retro-vault-consoles-classics`
  - `/collections/games-toys`
  - `/search?q=organiser&type=product`
  - 3 sampled PDPs from 21FS
- Viewports tested:
  - desktop `1366x768`
  - mobile `390x844`

### Verified passes

- `/collections/retro-vault-consoles-classics` no longer returns 404.
- `/collections/games-toys` no longer returns 404.
- Both collection routes now render honest empty/deferred catalogue pages.
- No fake/demo products were introduced on those collection routes.
- No cart/add forms were detected on tested routes.
- No quick-add component was detected on tested routes.
- No dynamic checkout surfaced on tested routes.
- No checkout/payment/customer-flow path was enabled on tested routes.
- No `Supplier verified` claim surfaced on tested routes.
- No Liquid error text surfaced on tested routes.
- No mobile horizontal overflow was detected on tested routes.
- Wishlist spot-check passed on the first sampled PDP:
  - aria-label changed from add-to-wishlist to remove-from-wishlist after click

### Remaining failure

- The collection-route blocker is closed.
- The PDP blocker is only **partially** closed:
  - one sampled PDP rendered the expected catalogue-only wording after the theme fix
  - two sampled PDPs still showed inconsistent live PDP posture in the rerun
  - those two still failed for visible `Add to Cart` text and did not consistently show `Price to be confirmed` / `This product is being prepared for launch.`

## Commerce Safety Result

- **FAIL**
- Closed:
  - no collection 404 on the two approved routes
  - no cart/add forms
  - no quick-add
  - no dynamic checkout
  - no checkout/payment/customer-flow enablement
- Still blocked:
  - PDP catalogue-only wording remains inconsistent on 2 of the 3 sampled live products

## Remaining Low-Severity Issues

- Font asset 404s remain on the live theme:
  - `dm-sans-400.ttf`
  - `dm-sans-500.ttf`
  - `dm-sans-600.ttf`
  - `dm-sans-700.ttf`
  - `playfair-display-400-italic.ttf`
  - `playfair-display-600.ttf`
- Footer `Track Order` still remains visible as deferred wording, although it stayed non-clickable in prior QA.

## Go-Live Readiness Recommendation

- **Do not remove the storefront lock yet.**
- **Do not treat 21FT as sufficient for catalogue-only public go-live yet.**
- Recommended next step:
  - a follow-on bounded slice focused only on why two live PDPs still diverge from the forced catalogue-only theme posture despite the section update
  - likely investigate stale route caching or product-specific rendering divergence before any storefront-unlock decision
