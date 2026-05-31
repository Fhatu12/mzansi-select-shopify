# Project Control Update - Slice 21HG

Date: 2026-05-28

## Objective
Classify all current live Shopify products into defined store departments and document mappings without mutating store data.

## Execution summary
- Verified live theme visibility context for `mzansiselect.myshopify.com` with live theme `#162429075681`.
- Executed read-only Admin API export using authenticated CLI domain `sikhwarigroupdev.myshopify.com`.
- Captured raw export artifacts (JSON and CSV) under the required WINQA artifacts route.
- Export result returned zero products (`productsCount: 0`), so no per-product department mapping could be performed.
- Produced slice classification document with full department list, zero-count mapping state, and follow-up recommendations.

## Decision
Status: blocked by empty product dataset in authenticated Admin store context.
Recommendation: confirm target Admin store/catalogue linkage, then rerun Slice 21HG classification against the store that contains live catalogue products.

---

## Project Control Update - Slice 21HG-B (Public Storefront Catalogue)

Date: 2026-05-28

### Objective
Classify all live customer-facing products into departments using the public storefront catalogue after Admin API returned zero products in Slice 21HG.

### Execution summary
- Used read-only public endpoint: `https://mzansiselect.myshopify.com/products.json?limit=250`.
- Saved raw output to `artifacts/catalogue/slice-21hg-b-products.json`.
- Extracted product fields (`title`, `handle`, `product_type`, `vendor`, `tags`, first variant `price`) for classification support.
- Classified every live product into exactly one primary department.
- Produced mapping report: `docs/catalogue/slice-21hg-b-public-product-department-classification.md`.

### Verdict
Status: completed.

### Department counts
- The Retro Vault: Consoles & Classics: 8
- Games & Toys: 11
- Tech Accessories: 17
- Office & Desk: 1
- Kitchen & Storage: 2
- Home & Living: 0
- Unclassified / Needs review: 2

### Safety confirmation
No mutation was performed on products, prices, collections, tags, checkout/payment, apps, or theme files.
## 2026-05-28 - Slice 21HH (Department collection apply)

Applied approved 21HG-B product-to-department mapping to Shopify manual collections via Windows Shopify CLI against `sikhwarigroupdev.myshopify.com`.

Completed:
- Ensured department collections exist (created missing: Tech Accessories, Office & Desk, Kitchen & Storage, Home & Living)
- Published all six department collections to Online Store
- Reconciled mapped product membership to exact one-primary-department among six department collections
- Excluded both Unclassified/Needs review products from all six public department collections
- Verified final department counts match expected: 8/11/17/1/2/0
- Verified collection routes return 200 on customer-facing store

Notes:
- No product content/price/media mutations performed.
- No theme push, checkout/payment, app install, or domain changes performed.
- Raw operation outputs were saved under local Windows repo `artifacts/` per runbook.
- Automated smoke-string checks for commerce safety were inconclusive/noisy; manual browser QA is still required for final UX assertions.

## 2026-05-28 - Slice 21HI (Product wording cleanup approval pack)

Objective:
- Review current live product wording from the public storefront catalogue and prepare cleaned, customer-ready copy for Product Owner approval, without mutating Shopify.

Execution summary:
- Read-only source used: `https://mzansiselect.myshopify.com/products.json?limit=250`.
- Saved raw fetch to `artifacts/catalogue/slice-21hi-products-raw.json`.
- Reviewed 41 products and extracted title, handle, description/body, plus available product metadata.
- Drafted concise, factual South African English wording proposals in:
  - `docs/catalogue/slice-21hi-product-wording-cleanup-approval-pack.md`
- Flagged products with risky or unclear claims as `needs review` for Product Owner decision before any Shopify updates.

Safety confirmation:
- No Shopify Admin/product mutation was performed.
- No changes to prices, collections, theme files, checkout/payment settings, or apps.
- Artifacts retained under `artifacts/` and left uncommitted.

## 2026-05-28 - Slice 21HJ-A handle reconciliation
- Scope: read-only reconciliation of 18 approved 21HI handles to live Shopify Admin product IDs.
- Public catalogue products: 41.
- Admin catalogue products: 41.
- Approved checked: 18.
- Matched: 18.
- Unresolved: 0.
- Safety: No product mutations performed; safe to retry updates using verified Admin IDs only.


## 2026-05-31 - Slice 21HK (Product reset checkpoint before AutoDS rebuild)

Objective:
- Record Product Owner decision to replace current live catalogue with fresh AutoDS products, and archive a pre-reset product snapshot before deletion/rebuild execution.

Execution summary:
- Fetched public storefront catalogue (read-only): `https://mzansiselect.myshopify.com/products.json?limit=250`.
- Archived raw snapshot to `artifacts/catalogue/slice-21hk-current-products-before-autods-reset.json`.
- Snapshot count at checkpoint: **43 products**.
- Recorded checkpoint and implications in `docs/catalogue/slice-21hk-autods-product-reset-checkpoint.md`.

Decision notes:
- 21HI/21HJ copy cleanup stream is paused/obsolete for the outgoing catalogue.
- Product-to-department mapping must be recalculated after AutoDS import produces the new catalogue.

Safety confirmation:
- No product, price, collection, checkout/payment, app, or theme mutation was performed.

## 2026-05-31 - Slice 21HL (PDP gallery arrow main-image sync)

Objective:
- Fix PDP gallery previous/next controls so main image updates correctly on desktop/mobile without changing catalogue or commerce state.

Execution summary:
- Inspected `sections/main-product-foundation.liquid`, `assets/product-gallery.js`, and `assets/product-options-preview.js`.
- Identified root cause: gallery navigation updated `img.src` but not `img.srcset` on main image.
- Implemented minimal fix in `assets/product-gallery.js` to sync `srcset` during gallery index changes.
- Preserved variant-featured-image behavior by leaving thumbnail-driven variant sync unchanged.
- Pushed only changed theme asset to live theme `#162429075681` using `--only` and `--allow-live`.
- Verified three target PDPs still render gallery controls with five-thumbnail cap.

Safety confirmation:
- No product, price, media, collection, app, checkout/payment, domain, or Supplier verified changes were made.
- No artifacts were committed.

## 2026-05-31 - Slice 21HM (PDP colour/variant selector sync)

Objective:
- Fix PDP colour/variant selector behavior so option selection and variant media sync are reliable before AutoDS catalogue rebuild.

Execution summary:
- Inspected `assets/product-options-preview.js`, `sections/main-product-foundation.liquid`, and verified 21HL gallery logic in `assets/product-gallery.js` remained intact.
- Identified brittle exact URL-string match for variant featured image to gallery thumbnails as root cause.
- Added `featuredMediaId` to variant JSON payload in Liquid.
- Updated variant gallery sync to resolve thumbnail by media ID first, with normalized URL fallback.
- Preserved soft-fail when variant media is not part of rendered capped gallery.
- Pushed only changed files to live theme `#162429075681`.
- Verified target PDPs still render gallery controls and options with 5-thumbnail cap.

Safety confirmation:
- No mutations to products, prices, variants, product media, collections, checkout/payment, domain, apps, or Supplier verified.
- No artifacts committed.

## 2026-05-31 - Slice 21HN (Wishlist hearts/header sync)

Objective:
- Ensure product/card and PDP wishlist hearts stay in sync with top/header wishlist state and persist locally.

Execution summary:
- Confirmed live theme target: `Mzansi Select MVP Restored` `#162429075681`.
- Found root cause: header/mobile wishlist indicators were static markup without JS state hooks.
- Added header/mobile/bottom saved-state data hooks and live count badges.
- Extended `assets/wishlist-local.js` to update header count/active state on init, section load, pageshow, and each toggle.
- Kept local/browser-only wishlist storage (`mzansi-wishlist-v1`) and product-handle identity.
- Pushed only changed theme files to live theme with `--allow-live`.

Safety confirmation:
- No product, price, media, collection, checkout/payment, domain, app, or Supplier verified changes.
- No artifacts committed.


- 2026-05-31: Slice 21HO-WIN inspected top/header wishlist capture behavior on live storefront. Result: FAIL (no dedicated saved-items route/view; unstable/potentially non-persistent captured list behavior). See docs/qa/slice-21ho-top-wishlist-captured-items.md.
