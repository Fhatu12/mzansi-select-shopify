# Slice 21GB — Online Store Visibility Recovery (CJ/DSers Baseline)

**Date:** 2026-05-24  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `151207542967` (Mzansi Select MVP Preview)  
**Repo:** `/home/fhatu/dev/mzansi-select-shopify`  
**Execution:** Codex-only (Cursor offline)  

## Scope And Guardrails

- Keep the current product list exactly as-is (no deletes/imports).
- Keep all product prices exactly as-is (immutable baseline).
- Admin mutations allowed only if required for catalogue visibility/safety (Online Store visibility, ACTIVE status, safe tags, remove unsafe claims).
- No checkout/payment/customer flow enablement.
- Do not commit `artifacts/` or `tools/catalogue/`.

## Pre-check

- `artifacts/` is gitignored (confirmed via `git check-ignore`).
- `tools/catalogue/` is untracked (must remain untracked).
- No theme publish/full sync planned in this slice.

## Read-only Admin Audit (Baseline)

**Baseline source capture (not committed):**
- `artifacts/slice-21gb-products-before.json`

**Product count (Admin API):** 40 products (baseline; must not change).

### Immutable Price Baseline (Before)

All prices below are captured read-only from the Admin API and must remain unchanged.

| Handle | Price | Status | Tags | Online Store published |
|---|---:|---|---|---|
| psp-3000-x6-consola-12-types-of-simulators-10000-arcade-games-retro-retro-arcade-console-4-3inch-ips-screen-video-game-toy-gift | 1393.99 | ACTIVE | (none) | yes |
| upgraded-g90-portable-arcade-game-console-retro-handheld-gaming-device-high-definition-display-rich-built-in-classic-games-long | 1964.99 | ACTIVE | (none) | yes |
| r36s-retro-game-console-handheld-video-arkos-2-0-system-3-5-inch-single-card-portable-pocket-video-player-64gb-128gb-20000-games | 1475.99 | ACTIVE | (none) | yes |
| retro-portable-handheld-arcade-video-game-console-player-for-children-videogame-tv-hand-machine-kids-retrogame-emulator-classic | 1008.99 | ACTIVE | (none) | yes |
| retro-handheld-game-console-3-5inch-ips-screen-dual-3d-joystick-11-simulators-gba-video-game-players-10000-games-for-kids-gifts | 960.99 | ACTIVE | (none) | yes |
| new-r36s-retro-handheld-game-console-linux-system-3-5-inch-ips-screen-portable-pocket-video-player-64gb-128gb-games-kid-gift | 1226.99 | ACTIVE | (none) | yes |
| upgraded-g90-portable-arcade-game-console-retro-handheld-gaming-device-high-definition-display-rich-built-in-classic-games-long-1 | 1893.99 | ACTIVE | (none) | yes |
| x6-retro-video-game-console-2-4g-wireless-4k-hd-double-rocker-console-stick-64gb-built-in-15000-retro-games-for-play-kids-gift | 1932.99 | ACTIVE | (none) | yes |
| r36s-retro-handheld-game-console-3-5-inch-ips-screen-64gb-128gb-256gb-portable-gaming-device-with-built-in-games | 1007.99 | ACTIVE | (none) | yes |
| gaming-portable-handheld-retro-video-game-console-player-portatil-mini-arcade-videogames-for-hand-held-family-pocket-retrogaming | 894.99 | ACTIVE | (none) | yes |
| r36s-classic-retro-game-console-with-arkos-system-video-games-single-card-portable-hand-held-gaming-console-kids-gift-3-5-inch | 1106.99 | ACTIVE | (none) | yes |
| arkos-r36s-retro-handheld-game-console-linux-system-3-5-inch-ips-screen-video-player-64gb-128gb-portable-handheld-game-console | 942.99 | ACTIVE | (none) | yes |
| handheld-game-console-with-5000-games-retro-gaming-console-retro-handheld-video-game-console-for-kids-and-adults | 1259.99 | ACTIVE | (none) | yes |
| retro-portable-mini-video-game-console-built-in-400-games-3-0-inch-lcd-screen-kids-gift-8-bit-handheld-game-player-av-output | 461.99 | ACTIVE | (none) | yes |
| 3-in-1-chess-backgammon-checkers-set-chessboard-wooden-board-games-set-educational-improve-intelligence-international-chess-game | 376.99 | ACTIVE | (none) | yes |
| chess-game-board-non-magnetic-and-portable-family-interactive-and-friends-party-toy-suitable-for-birthday-christmas-halloween-thanksgiving-gifts | 331.99 | ACTIVE | (none) | yes |
| 128g-r36s-retro-handheld-video-game-console-linux-system-3-5-inch-ips-screen-r35s-pro-portable-pocket-video-player-64gb-games | 1894.99 | ACTIVE | (none) | yes |
| portable-retro-game-console-7-inch-hd-screen-arcade-video-gaming-console-handheld-with-7000-free-games-for-ps1-mame-boy-kid-gift | 1685.99 | ACTIVE | (none) | yes |
| built-in-500-classic-games-5-inch-arcade-retro-console-games-console-for-game-boy-emulator-tv-video-game-handheld-game-player | 556.99 | ACTIVE | (none) | yes |
| portable-built-in-500-classic-arcade-retro-games-console-for-gameboy-output-emulator-tv-5-inch-video-game-handheld-game-player | 381.99 | ACTIVE | (none) | yes |
| 29x29cm-large-chessboard-developing-strategic-thinking-3-in-1-chess-chekers-backgammon-foldable-chess-board-for-kids-adults | 693.99 | ACTIVE | (none) | yes |
| labubu-doll-casual-clothing-solid-color-sportswear-suit-breathable-cotton-outfit-change-doll-clothes-comfortable-daily-wear | 241.99 | ACTIVE | (none) | yes |
| labubu-10th-anniversary-same-clothes-labubu-v1v2v3-embroidered-number-10-t-shirt-labubu-4-0-doll-cute-clothes-accessories | 267.99 | ACTIVE | (none) | yes |
| labubu-doll-sofa-for-labubu-mini-lazy-sofa-bed-v1-v2-v3-diy-clothing-accessories-cute-doll-cushion-childrens-toy-gift | 317.99 | ACTIVE | (none) | yes |
| retro-nostalgic-bicycle-model-living-room-porch-soft-decoration-with-creative-exquisite-home-accessories-ornaments-gifts | 271.99 | ACTIVE | (none) | yes |
| labubu-protect-case-labubu-sitting-party-17cm-cotton-doll-shoulder-pain-bag-pvc-storage-bag-labubu-walk-dustproof-bag | 222.99 | ACTIVE | (none) | yes |
| ups-backup-battery-power-supply-supports-5v-9v-12v-mini-dc-ups-uninterruptible-power-supply-for-router-modem-security-camera | 975.99 | ACTIVE | (none) | yes |
| labubu-rain-boots-1st-generation-2nd-generation-3rd-generation-general-shoes-17cm-labubu-baby-shoes-peripheral-accessories | 180.99 | ACTIVE | (none) | yes |
| labubu-protect-case-labubu-sitting-party-15cm-cotton-doll-shoulder-pain-bag-pvc-storage-bag-labubu-walk-bag-dustproof | 272.99 | ACTIVE | (none) | yes |
| labubu-6-5cm-glasses-accessories-transparent-plastic-glasses-for-15-17cm-labubu-plush-doll-diy-toys-for-labubu-sunglasses | 197.99 | ACTIVE | (none) | yes |
| labubu-accessories-clothes-designer-suitable-for-v1-v2-v3-labubu-pendants-cute-personality-fashion-birthday-gift | 232.99 | ACTIVE | (none) | yes |
| labubu-clothes-designer-is-suitable-for-v1-v2-v3-labubu-doll-overalls-shirts-clothes-accessories-childrens-toys-birthday-gifts | 187.99 | ACTIVE | (none) | yes |
| labubu-doll-the-monsters-mystery-box-100-genuine-macaron-color-its-the-perfect-gift-for-children-family-and-frict-gift | 350.99 | ACTIVE | (none) | yes |
| labubu-doll-macaron-color-100-genuine-its-the-perfect-gift-for-children-family-and-friends | 346.99 | ACTIVE | (none) | yes |
| genuine-labubu-3-0-big-into-energy-plush-doll-pop-mart-official-blind-box-soft-collectible-toys-home-decor | 335.99 | ACTIVE | (none) | yes |
| logitech-g-pro-x-60g-professional-grade-5-programmable-keys-44000-dpi | 818.99 | ACTIVE | (none) | yes |
| premium-monopoly-global-village-board-game-exquisite-craftsmanship-for-tabletop-gamers-tabletop-gaming-english-version | 468.99 | ACTIVE | (none) | yes |
| monopoly-classic-board-game-family-property-trading-game-portable-kids-adults-party-table-game-educational-toy-gift | 323.99 | ACTIVE | (none) | yes |
| monopoly-premium-high-quality-components-pour-board-game-enthusiasts-party-gatherers-version-francaise | 831.99 | ACTIVE | (none) | yes |
| 32-pieses-wooden-chess-standard-tournamen-staunton-wood-chessmen-8cm-king-height-chess-pieces-only-no-board | 337.99 | ACTIVE | (none) | yes |

### Visibility Finding

- Admin API shows all 40 products are `ACTIVE` and published to the **Online Store** publication.
- Despite that, storefront browse surfaces were previously reported as empty (`/collections/all` showing 0 products and `/search` returning 0).
- Additional Admin API signal: `onlineStoreUrl` returned `null` for sampled products even while publication state shows `isPublished: true`. This may indicate an Online Store listing/indexing issue rather than a pure publication toggle.

## Changes Made (Admin Mutations)

- **None applied broadly yet.** A single `publishablePublish` retry was attempted for one product (no price change, no tag change), but `onlineStoreUrl` remained `null` immediately after. No bulk republish/unpublish was applied because the publication state already reports published.

## Post-write Verification

### Admin invariants

- Product count unchanged: **40** (before/after).
- Prices unchanged: baseline above remains the reference.

### Storefront checks (requires manual unlock)

Blocked in this run because storefront browsing requires a password session cookie that cannot be captured/stored in automation:
- `/collections/all`
- `/search?q=organiser&type=product`
- 5 PDPs

## Commerce Safety (Theme Level)

Theme catalogue-only lock is expected to remain active from earlier slices:
- No visible Add to Cart wording
- No cart/add forms
- No quick-add
- No dynamic checkout
- No checkout/payment path
- No newsletter/email capture

## Remaining Blockers / Next Step

1. Run a manual unlocked storefront check to confirm whether products are still empty on `/collections/all` and `/search` after Shopify indexing settles.
2. If still empty while Admin still reports published, escalate as a Shopify Online Store indexing/listing issue (possible CJ/DSers side-effects) before making further product mutations.

**Verdict:** PASS WITH NOTES (Admin baseline captured; no destructive changes made; storefront visibility issue requires manual unlocked verification and may be platform/indexing-related).

