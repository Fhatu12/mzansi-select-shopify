# Slice 21HT-WIN Apply Approved Product Organisation

- Date: 2026-05-31
- Execution host: Windows only (D:\dev\mzansi-select-shopify-winqa)
- Customer storefront: https://mzansiselect.myshopify.com
- Admin/CLI store: sikhwarigroupdev.myshopify.com
- Live theme confirmed: Mzansi Select MVP Restored #162429075681

## Scope and Safety

- Mutations limited to collection creation/publication/membership only.
- No mutations to product titles, descriptions, prices, variants, inventory, media, tags, status, domain, theme, checkout, or payments.
- Raw GraphQL responses saved under rtifacts/slice-21ht/ only.
- 	ools/catalogue/ kept untracked.

## Pre-Mutation Audit

- Products scanned: 48
- Products matched: 48 unique products (50 mapping rows due one approved duplicate title)
- Products unmatched: 0
- Cross-department collisions: 0
- Safety gate: pass

Whitespace-normalized safe matches used where exact-title string differed only by repeated spaces (4 titles):
- USB C To USB C Cable ... (double-space variant in live title)
- 17cm Labubu Mini Plush ... (double-space variant in live title)
- Dumpling Squishies LED Bun ... (double-space variant in live title)
- For Labubu V1 V2 V3 Doll Case ... (double-space variant in live title)

## Collection Updates Performed

- Missing collections created: none
- Published to Online Store: all 6 approved department collections
- Adds performed:
  - 	ech-accessories: 4
  - games-toys: 4
- Removes performed (only among approved six collections):
  - from office-desk for 	ech-accessories: 1
  - from kitchen-storage for games-toys: 2
  - from 	ech-accessories for games-toys: 1

## Final Department Counts

- Home & Living (home-living): 3
- Kitchen & Storage (kitchen-storage): 1
- Office & Desk (office-desk): 1
- Tech Accessories (	ech-accessories): 20
- The Retro Vault (etro-vault-consoles-classics): 8
- Games & Toys (games-toys): 15

Count verification: pass (all expected counts matched).

## Route Verification

All approved collection routes returned 200:
- /collections/home-living
- /collections/kitchen-storage
- /collections/office-desk
- /collections/tech-accessories
- /collections/retro-vault-consoles-classics
- /collections/games-toys

## Regression Smoke

Routes tested:
- /
- /collections/all
- /search?q=retro&type=product
- /products/car-leather-repair-kit-liquid-skin-recoloring-balm-no-heat-repair-tool-auto-seat-holes-scratch-cracks-rips-restoration-set-shoes

All returned 200.

## Commerce Safety

Confirmed on smoke surfaces:
- no Add to Cart
- no /cart/add
- no quick-add
- no dynamic checkout
- no checkout/payment path
- no Supplier verified text
- no newsletter capture
- no Liquid errors

## Verdict

21HT-WIN: **PASS**
