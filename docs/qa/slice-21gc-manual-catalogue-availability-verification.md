# Slice 21GC — Manual Shopify Catalogue Availability Verification

**Date:** 2026-05-24  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `151207542967` (Mzansi Select MVP Preview)  
**Repo:** `/home/fhatu/dev/mzansi-select-shopify`  
**Execution:** Codex-only (no Admin API mutations permitted in this slice)  

## Goal

Manually verify (in Shopify Admin) why products that appear `ACTIVE` and published are not showing on storefront browse surfaces (for example `/collections/all` and `/search`).

## Guardrails (Product Owner Rule)

- Keep the current product list exactly as-is.
- Keep current prices exactly as-is.
- Do not mutate products via API in this slice.
- No product deletes, no imports/sync, no media changes, no inventory/variant changes.
- No checkout/payment enablement.

## Pre-check (Repo Hygiene)

- `artifacts/` is gitignored.
- `tools/catalogue/` remains untracked (must not be committed).
- No theme publish/full sync planned.

## Sample Set (5 Products To Check Manually)

These were selected as a current sample set for manual verification:

1. `32-pieses-wooden-chess-standard-tournamen-staunton-wood-chessmen-8cm-king-height-chess-pieces-only-no-board`
2. `monopoly-premium-high-quality-components-pour-board-game-enthusiasts-party-gatherers-version-francaise`
3. `monopoly-classic-board-game-family-property-trading-game-portable-kids-adults-party-table-game-educational-toy-gift`
4. `premium-monopoly-global-village-board-game-exquisite-craftsmanship-for-tabletop-gamers-tabletop-gaming-english-version`
5. `logitech-g-pro-x-60g-professional-grade-5-programmable-keys-44000-dpi`

## Manual Shopify Admin Checklist (Per Product)

For each sampled product in Shopify Admin:

1. Confirm **Status** = `Active`.
2. Confirm **Sales channels and apps** includes **Online Store** (Publishing).
3. Confirm **Publishing** is not scheduled for the future:
   - Publish date/time is not in the future (if shown).
4. Confirm **Media**:
   - At least 1 image/media item is present.
5. Confirm **Variants**:
   - At least one variant exists.
   - Variant is active (not deleted/archived).
6. Confirm **Handle**:
   - Handle exists and matches the expected handle above.
7. Confirm **Markets / Catalogues (if visible in Admin)**:
   - Product is not restricted from the active market/catalogue that the Online Store is using.
8. Confirm **Online Store preview / view links (if available)**:
   - Use “Preview” (or equivalent) and note whether the PDP opens.

### Record Sheet (Fill In Manually)

Use this table to record what you observe. Do not paste any credentials.

| Handle | Status Active | Online Store published | Future publish scheduled | Media count >=1 | Variant exists | Handle OK | Markets/catalogue restricted? | Preview link opens PDP? | Notes |
|---|---|---|---|---|---|---|---|---|---|
| 32-pieses-wooden-chess-standard-tournamen-staunton-wood-chessmen-8cm-king-height-chess-pieces-only-no-board |  |  |  |  |  |  |  |  |  |
| monopoly-premium-high-quality-components-pour-board-game-enthusiasts-party-gatherers-version-francaise |  |  |  |  |  |  |  |  |  |
| monopoly-classic-board-game-family-property-trading-game-portable-kids-adults-party-table-game-educational-toy-gift |  |  |  |  |  |  |  |  |  |
| premium-monopoly-global-village-board-game-exquisite-craftsmanship-for-tabletop-gamers-tabletop-gaming-english-version |  |  |  |  |  |  |  |  |  |
| logitech-g-pro-x-60g-professional-grade-5-programmable-keys-44000-dpi |  |  |  |  |  |  |  |  |  |

## Optional Manual Admin Action (Only If Clearly Available)

If Shopify Admin shows a bulk action like “Make available on Online Store” that:

- Does not change prices
- Does not change the product list

Then the Product Owner may perform it manually.

**If performed, record exactly:**
- Where in Admin the action was found (page + menu path)
- Which products were selected
- What button/action was used
- Any confirmation text Shopify displayed

## Unlocked Storefront Verification (After Manual Checks)

In a fresh normal/incognito browser (unlocked manually; do not record/store password):

### Routes

- `/collections/all`
- `/search?q=organiser&type=product`
- 5 PDPs: open PDPs for the sampled products if links appear (or use any 5 visible PDPs if the sampled items are not surfaced).

### Pass Criteria

- `/collections/all` shows product cards/links (not zero).
- `/search` returns products when query matches (as applicable).
- PDP routes return `200` (no 404).
- Prices display exactly as-is (no edits performed).
- Catalogue-only safety remains:
  - No visible Add to Cart wording
  - No cart/add forms
  - No quick-add
  - No dynamic checkout

### Results (Fill In Manually)

| Check | Result (PASS/FAIL) | Notes |
|---|---|---|
| `/collections/all` shows product cards |  |  |
| `/search?q=organiser&type=product` returns products (if applicable) |  |  |
| 5 PDPs open (no 404) |  |  |
| No Add to Cart/cart/add/quick-add/dynamic checkout |  |  |

## Outcome / Next Recommendation

- **If Admin checks show products are not actually published to Online Store:** use Admin bulk publish (if available) and re-test storefront.
- **If Admin shows products are published and healthy but storefront still shows 0:** treat as a Shopify Online Store listing/indexing/catalogue availability issue (likely platform-side) and escalate before further product mutations.

**21GC verdict:** _(to be finalised after Product Owner completes the manual steps)_.

