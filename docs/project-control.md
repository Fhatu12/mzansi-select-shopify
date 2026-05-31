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
