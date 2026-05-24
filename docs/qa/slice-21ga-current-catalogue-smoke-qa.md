# Slice 21GA Current Catalogue Smoke QA (Read-only)

- **Date:** 2026-05-24
- **Verdict:** **PASS WITH NOTES (CATALOGUE VISIBILITY BLOCKED)**
- **Scope:** Read-only smoke QA against the current Product Owner CJ/DSers test baseline
- **Live theme:** `151207542967` / `Mzansi Select MVP Preview`

## Pre-check

- Repo: `/home/fhatu/dev/mzansi-select-shopify`
- Branch: `master`
- `artifacts/` ignore rule confirmed
- `tools/catalogue/` remained untracked and uncommitted
- No Shopify Admin product mutation planned or performed
- No price/visibility/tag/media/inventory/supplier changes planned or performed
- No checkout/payment enablement, theme publish, or full sync planned or performed

## Read-only Current Catalogue Audit (Baseline)

This baseline reflects the current Product Owner CJ/DSers test state.

Admin read-only snapshot:

- `ACTIVE` product count (Admin): **40**
- Note: current auth cannot read product publication fields (missing `read_product_listings`), so Online Store “visible vs hidden” cannot be computed directly from Admin.

Online Store visible snapshot (read-only storefront rendering):

- `/collections/all` returned `200` but rendered **0** product links/cards in the unlocked session (desktop and mobile).
- Therefore current Online Store-visible product count from storefront rendering is **0**.

Derived visibility interpretation (non-mutating):

- **Visible (storefront): 0**
- **Hidden/unpublished (inferred): 40** (Admin ACTIVE products that are not rendering on the Online Store)

Visible product/price baseline:

- No visible product cards were present on `/collections/all`, so no storefront “displayed prices” could be captured without modifying data.

## Storefront Smoke QA (Locked Store, Manual Unlock)

Routes tested (unlocked session):

- `/`
- `/search?q=organiser&type=product`
- `/collections/all`
- `/collections/retro-vault-consoles-classics`
- `/collections/games-toys`
- `/pages/contact#business-details`

Viewports:

- Desktop `1366x768`
- Mobile `390x844`

Results:

- `/collections/all`: **FAIL for catalogue browsing** (0 product links/cards)
- `/search?q=organiser&type=product`: loads, but no products surfaced in this run
- Retro Vault and Games & Toys routes: load and do not 404; empty/deferred state remained honest in prior slices
- Business Details/support: link and disclosure surface load and show expected business/support details

PDP smoke:

- **Blocked:** cannot test 5 current visible PDPs because the storefront currently exposes 0 product links on `/collections/all` and sampled PDP routes are not discoverable from the storefront without changing product publication/visibility.

## Safety Checks

- Commerce safety: **PASS**
  - No visible Add to Cart wording detected on tested routes
  - No `/cart/add` forms detected
  - No quick-add or dynamic checkout surfaced on tested routes
  - No checkout/payment/customer-flow path enabled
- Customer-data safety: **PASS**
  - No newsletter/email capture surfaces present
- UX safety: **PASS**
  - No Liquid error text detected on tested routes
  - No mobile horizontal overflow detected on tested routes

## Theme-only Fixes

- None applied in this slice (read-only QA only).

## Remaining Blockers / Readiness Recommendation

- **Primary blocker:** Online Store catalogue browsing is currently blocked because `/collections/all` renders 0 product cards/links despite Admin showing 40 ACTIVE products.
- Recommended next step (non-mutating to products unless separately approved): verify Online Store publication/visibility settings for the current product set and ensure at least 5 PDPs are accessible for catalogue-only browsing.
