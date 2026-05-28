# Slice 21GT-WIN — authenticated Store API product baseline after manual auth

## Verdict

**21GT-WIN verdict: BLOCKED (stored `shopify store` auth not present in this execution environment)**

Windows-only execution was used. No mutations were performed.

## 1) Theme verification

Command:
- `shopify theme list --store sikhwarigroupdev.myshopify.com`

Result:
- `Horizon` `[live]` `#158396285153`
- `Mzansi Select MVP Restored` `[unpublished]` `#162429075681`

## 2) Store API auth result

Attempted read-only export command family:
- `shopify store execute --store sikhwarigroupdev.myshopify.com ...`

CLI result in this environment:
- `No stored app authentication found for sikhwarigroupdev.myshopify.com`

Meaning:
- Even though theme auth exists, `shopify store execute` requires a separate stored Store API auth profile that is not currently available to this runtime.

## 3) Admin export status

Requested fields:
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

Status:
- **Blocked in this run** due to missing stored `shopify store` auth profile.
- No product mutations occurred.

## 4) Draft storefront handle extraction

URL:
- `https://sikhwarigroupdev.myshopify.com/collections/all?preview_theme_id=162429075681`

Windows fetch result:
- HTTP: `200`
- Extracted product handles from `/products/<handle>` links: **0**

## 5) Comparison

- Admin handles: **blocked** (could not export this run)
- Storefront handles on draft `/collections/all`: **0**
- 21GQ sampled 404 handles:
  - `beverage-bottle-oil-bottle-handle-holder`
  - `usb-bag-sealer`
  - `foldable-magnetic-phone-holder-desktop-tablet-stand`

## 6) Diagnosis (from this run + consistent prior evidence)

- **PDP 404 root cause (most likely):** visibility/indexing/session-gating mismatch in storefront context, not proven by this run to be handle deletion.
- **Search 0-result explanation (most likely):** same visibility/indexing mismatch and/or gated storefront response context.
- **`/collections/all` visibility mismatch:** confirmed in this run as zero extracted product links despite successful theme-list auth.

## Artifacts written (Windows only)

- `artifacts/qa/slice-21gt-authenticated-store-api-baseline/product-baseline.graphql`
- `artifacts/qa/slice-21gt-authenticated-store-api-baseline/admin-products-full.json` (contains failed export context)
- `artifacts/qa/slice-21gt-authenticated-store-api-baseline/admin-products-flat.json` (contains failed export context)
- `artifacts/qa/slice-21gt-authenticated-store-api-baseline/storefront-handles.json`
- `artifacts/qa/slice-21gt-authenticated-store-api-baseline/handles-21gq-404-sample.txt`

## Recommended next slice

**Slice 21GU-WIN — same-session Store API baseline capture**
1. In the same Windows terminal session, run and complete:
   - `shopify store auth --store sikhwarigroupdev.myshopify.com --scopes read_products,read_publications`
2. Immediately re-run the 21GT export query.
3. If export succeeds, produce authoritative first-20 handle list and final Admin vs storefront vs 21GQ comparison.
