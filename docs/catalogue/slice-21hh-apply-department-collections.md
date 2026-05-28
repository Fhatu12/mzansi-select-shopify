# Slice 21HH - Apply Department Collections

Date: 2026-05-28
Executor: Codex (Windows-only execution)

## Scope
Applied approved 21HG-B product-to-department mapping to manual Shopify collections on admin store `sikhwarigroupdev.myshopify.com`, for customer-facing storefront `mzansiselect.myshopify.com`.

## Preconditions
- Live theme confirmed earlier: `Mzansi Select MVP Restored #162429075681`
- Stored auth/scopes already in place: `read_products,write_products,read_publications,write_publications`
- Source mapping: `docs/catalogue/slice-21hg-b-public-product-department-classification.md`
- Pre-audit source: `D:\dev\mzansi-select-shopify-winqa\artifacts\21hh-pre.json`

## Collections ensured
- The Retro Vault: Consoles & Classics (`retro-vault-consoles-classics`)
- Games & Toys (`games-toys`)
- Tech Accessories (`tech-accessories`) [created]
- Office & Desk (`office-desk`) [created]
- Kitchen & Storage (`kitchen-storage`) [created]
- Home & Living (`home-living`) [created]

Collection IDs:
- retro-vault-consoles-classics: `gid://shopify/Collection/488805564641`
- games-toys: `gid://shopify/Collection/488805597409`
- tech-accessories: `gid://shopify/Collection/488811462881`
- office-desk: `gid://shopify/Collection/488811495649`
- kitchen-storage: `gid://shopify/Collection/488811528417`
- home-living: `gid://shopify/Collection/488811561185`

## Mutation method and safety
- Used `shopify store execute --json --allow-mutations` for write operations.
- Executed collection creates one-by-one.
- Checked `userErrors` after each mutation step.
- Stopped on error policy enforced in script.
- Raw query/mutation responses saved under `artifacts/` only.

## Membership reconciliation outcome
Mapped products were added to exactly one approved primary department collection and removed from incorrect membership only within the 6 department collections.

Final counts:
- Retro Vault: 8
- Games & Toys: 11
- Tech Accessories: 17
- Office & Desk: 1
- Kitchen & Storage: 2
- Home & Living: 0

Unclassified / Needs review skipped:
- `dumpling-squishies-led-bun-glowing-spitting-squeeze-toy-realistic-food-ornament-solid-gel-sensory-stress-reliever-gift`
- `wireless-bluetooth-vertical-mouse-800-1200-1600-dpi-6-button-personalised-side-grip-ergonomic-2-4g-mute-gaming-pc-computer-mouse`

Verification:
- `unclassifiedPresent`: empty (not present in any of the 6 public department collections)

## Route status
All target routes returned HTTP 200:
- /collections/retro-vault-consoles-classics
- /collections/games-toys
- /collections/tech-accessories
- /collections/office-desk
- /collections/kitchen-storage
- /collections/home-living

## Regression smoke
Checked routes:
- /
- /collections/all
- /search?q=retro&type=product
- PDP: /products/retro-classic-tetris-handheld-game-console-nostalgic-80s-90s-electronic-game-toy

Status:
- All returned HTTP 200.
- Automated string-presence scan was noisy/inconclusive for commerce-safety assertions (matches can come from dormant markup/scripts/text).
- Manual browser QA is required to conclusively assert no Add to Cart, no quick-add, no dynamic checkout, no checkout path, no Supplier verified, no newsletter capture, and no Liquid errors in rendered UI.

## Artifacts
All raw outputs persisted under:
- `D:\dev\mzansi-select-shopify-winqa\artifacts\`

Key files:
- `21hh-summary.json`
- `21hh-route-check.json`
- `21hh-regression-check.json`
- `21hh-*.json` and `21hh-*.graphql`
