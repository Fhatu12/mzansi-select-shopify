# Slice 21GS-WIN — authenticated paid-store handle-map and catalogue diagnosis

## Verdict

**21GS-WIN verdict: PARTIAL / BLOCKED (Store API auth execution blocked)**

Windows lane execution succeeded for Shopify theme verification and read-only storefront/code comparisons. Full read-only Admin product export could not complete because `shopify store auth` (required for `shopify store execute`) timed out awaiting interactive auth completion.

## Store / Theme Verification

Command:
- `shopify theme list --store sikhwarigroupdev.myshopify.com`

Result:
- `Horizon` `[live]` `#158396285153`
- `Mzansi Select MVP Restored` `[unpublished]` `#162429075681`

## Read-only Admin Export Status

Requested export fields:
- product count
- handle
- title
- status
- first variant price
- variant count
- media count
- tags
- `onlineStoreUrl`
- publication state

Execution status:
- `shopify store execute` requires stored Store auth.
- `shopify store auth --store sikhwarigroupdev.myshopify.com --scopes read_products` timed out waiting for interactive completion.
- Therefore a fresh authoritative Admin export is **blocked in this unattended run**.

Artifacts written (Windows only):
- `artifacts/qa/slice-21gs-windows-authenticated-handle-map/product-baseline.graphql`
- `artifacts/qa/slice-21gs-windows-authenticated-handle-map/admin-products-full.json` (partial/invalid due auth failure)
- `artifacts/qa/slice-21gs-windows-authenticated-handle-map/admin-products-flat.json` (partial/invalid due auth failure)

## Draft Preview Handle Extraction

Target URL:
- `https://sikhwarigroupdev.myshopify.com/collections/all?preview_theme_id=162429075681`

Windows read-only fetch:
- HTTP status: `200`
- Extracted `/products/<handle>` links: **0**

## Handle Map Comparison

### 1) Admin product handles

- **Blocked** in this run (Store API auth timed out).

### 2) Draft `/collections/all` visible handles

- **0** extracted in this run.

### 3) Hardcoded theme product links in repo

Code scan across `sections/`, `snippets/`, `templates/`, `layout/`, `assets/`:
- hardcoded `/products/<handle>` matches: **0**

### 4) 21GQ sampled 404 handles

- `beverage-bottle-oil-bottle-handle-holder`
- `usb-bag-sealer`
- `foldable-magnetic-phone-holder-desktop-tablet-stand`

Fresh Admin verification for these handles is blocked in this run; prior slice evidence suggests visibility/indexing/session conditions are the dominant issue rather than a simple hardcoded-link mismatch.

## Findings

- **Valid current handles:** not authoritatively listable from this unattended run (Admin export blocked).
- **Old/missing hardcoded handles found:** none detected in theme code (`/products/<handle>` hardcoded count = 0).
- **PDP 404 root cause (most likely):** Online Store visibility/indexing/session-gating mismatch in transferred store context, not direct hardcoded theme-link breakage.
- **Search zero-result explanation (most likely):** same visibility/indexing mismatch (and/or gated storefront session) rather than query-only mismatch.
- **Mobile overflow status:** remains **untested/open** in this slice because rendered authenticated browser validation did not execute.

## Required output summary

- 21GS-WIN verdict: **PARTIAL / BLOCKED (Store API auth execution blocked)**
- Theme list result: **verified** (`Horizon` live `#158396285153`; `Mzansi Select MVP Restored` unpublished `#162429075681`)
- Admin product count: **blocked in this unattended run**
- Storefront handle count: **0** (`/collections/all` draft preview fetch)
- First 20 current handles: **not available (Admin export blocked)**
- Old/missing hardcoded handles found: **none**
- 404 root cause: **likely visibility/indexing/session gating mismatch**
- Search zero-result explanation: **likely visibility/indexing mismatch; not query-only**
- Mobile overflow status: **untested/open**

## Recommended next slice

**Slice 21GT-WIN (interactive Store API auth + authoritative export):**
1. Complete `shopify store auth --store sikhwarigroupdev.myshopify.com --scopes read_products` interactively in Windows browser.
2. Re-run `shopify store execute` export and capture full handle baseline.
3. In an unlocked authenticated browser session, capture rendered draft `/collections/all` handles.
4. Publish final authoritative 3-way diff (Admin vs storefront vs theme links) and 404-handle disposition.
