# Slice 21GU-WIN — same-session Store API auth and product export

## Verdict

**21GU-WIN verdict: PASS WITH NOTES**

Store API auth was completed in the same Windows session and a full read-only product baseline export succeeded. No mutation actions were performed.

## 1) Theme auth verification

Command:
- `shopify theme list --store sikhwarigroupdev.myshopify.com`

Result:
- `Horizon` `[live]` `#158396285153`
- `Mzansi Select MVP Restored` `[unpublished]` `#162429075681`

## 2) Store API auth result

Command:
- `shopify store auth --store sikhwarigroupdev.myshopify.com --scopes read_products,read_publications`

Result:
- Success in same Windows terminal session.
- Authenticated as `fhatuwani.sikhwari@sikhwarigroup.co.za` against `sikhwarigroupdev.myshopify.com`.

## 3) Tiny Store API test result

Command:
- `shopify store execute --store sikhwarigroupdev.myshopify.com --query "query { shop { name id } }"`

Result:
- Success.
- Shop name: `Mzansi Select`
- Shop id: `gid://shopify/Shop/80681926881`

## 4) Full read-only product export result

Notes:
- Initial query failed on old publication ID (`Invalid publication id`).
- Publication lookup returned current Online Store publication ID: `gid://shopify/Publication/183141630177`.
- Export rerun used publication-agnostic `resourcePublications` and succeeded.

Admin export summary:
- **Admin product count:** `41`
- **Unique handles:** `41`

Captured fields per product:
- `handle`
- `title`
- `status`
- `firstVariantPrice`
- `totalVariants`
- `mediaCount`
- `tags`
- `onlineStoreUrl`
- `onlineStorePublished` (derived from `resourcePublications` where publication name is `Online Store`)

First 20 handles:
1. `17cm-labubu-mini-plush-toy-multiple-styles-clothing-set-labubu-outfit-accessories-trendy-play-clothing-labubu-clothes-gift`
2. `2-4g-usb-wireless-bluetooth-mouse-ergonomic-silent-office-mice-rechargeable-e-sports-backlight-mouse-for-computer-laptop-macbook`
3. `2-4g-wireless-mouse-2-4ghz-gaming-mouse-6d-optical-wireless-mouse-slim-and-mini-compatible-with-macbook-and-laptops`
4. `2-4g-wireless-mouse-2-4ghz-gaming-mouse-ergonomic-design-wireless-mouse-slim-mini-noiseless-mice-dpi1600-for-macbook-pc-laptops`
5. `2026-new-retro-gaming-console-with-23-emulators-20-000-built-in-games-4k-hdmi-2-4g-with-dual-wireless-controllers`
6. `29x29cm-large-chessboard-developing-strategic-thinking-3-in-1-chess-chekers-backgammon-foldable-chess-board-for-kids-adults`
7. `29x29cm-large-chessboard-developing-strategic-thinking-foldable-chess-board-best-gifts-wood-board-game-no-toxic-for-boys-girls`
8. `3-in-1-chess-backgammon-checkers-set-chessboard-wooden-board-games-set-educational-improve-intelligence-international-chess-game`
9. `3-in-1-chess-board-folding-wooden-portable-chess-game-board-wooden-chess-board-for-adultschess-checkers-and-backgammon`
10. `3-in-1-usb-c-hub-type-c-3in-1-pd100w-hdmi4k-30hz-usb3-0`
11. `75-mechanical-keyboard-wired-with-media-knob-apayado-black-gaming-keyboard-hot-swap-abs-cap-transparent-character-backlighting`
12. `75-mechanical-keyboard-wired-with-media-knob-apayado-black-gaming-keyboard-hot-swap-abs-cap-transparent-character-backlighting-1`
13. `a520-wireless-bluetooth-headset-hd-sound-quality-stereo-universal-headset-touch-light-mini-high-quality-earplugs-anti-sweat`
14. `computer-gaming-keyboard-light-backlit-rgb-mute-wired-keyboard-usb-office-home-russian-french-spanish-german-arabic-english`
15. `dumpling-squishies-led-bun-glowing-spitting-squeeze-toy-realistic-food-ornament-solid-gel-sensory-stress-reliever-gift`
16. `dumpling-squishy-for-adults-slow-rising-tpr-stress-reliever-fidget-sensory-squeeze-toy-for-office-desk-unique-gift`
17. `elough-mute-wired-mouse-usb-wired-gaming-mouse-for-desktop-pc-laptop-computer-home-office-rgb-led-luminous-backlit-mouse-game`
18. `for-labubu-v1-v2-v3-doll-case-transparent-protective-cover-dustproof-shell-for-labubu-4-0-case-storage-box-dolls-accessories`
19. `hifi-sound-bluetooth-headphones-wireless-over-ear-headsets-with-microphone-noise-reduction-comfortable-for-travel-and-home-use`
20. `km320-keyboard-and-mouse-set-waterproof-luminous-game-backlit-keyboard`

## 5) Draft preview storefront handle extraction

URL:
- `https://sikhwarigroupdev.myshopify.com/collections/all?preview_theme_id=162429075681`

Result:
- HTTP `200`
- Extracted `/products/<handle>` links: **0**

## 6) Comparison

- Admin handles: **41**
- Storefront handles from unauthenticated fetch: **0**
- Admin-only delta: **41**
- Storefront-only delta: **0**

21GQ sampled 404 handles:
- `beverage-bottle-oil-bottle-handle-holder` → in Admin: **No**; in storefront extract: **No**
- `usb-bag-sealer` → in Admin: **No**; in storefront extract: **No**
- `foldable-magnetic-phone-holder-desktop-tablet-stand` → in Admin: **No**; in storefront extract: **No**

## 7) Root-cause findings

### PDP 404s

Primary cause in this run: sampled 21GQ handles are not present in current Admin product set (`41` handles), so those exact PDP routes can validly 404 now.

### Why storefront handle extraction sees 0 in this context

The extraction used plain HTTP fetch without an unlocked storefront browser session. With password/captcha/gating still active, the response can be non-product shell content even at HTTP 200, yielding zero `/products/<handle>` links.

### Search 0-result explanation

Most likely gating/visibility context mismatch, not just query mismatch:
- Admin has `41` products.
- Unauthenticated fetch-based storefront extraction returns `0` handles.
- This pattern supports session/password/challenge gating and/or Online Store visibility rendering differences by context.

## 8) Smallest next recovery action

**Slice 21GV-WIN (unlocked rendered storefront parity check):**
1. Keep current Store API auth session.
2. In a manual unlocked browser session on the draft preview URL, capture rendered product-link handles (desktop + mobile).
3. Compare rendered handles against the 41-handle Admin baseline from this slice.
4. Confirm whether zero-result symptoms are purely unauthenticated-gating artifacts or true storefront visibility/indexing defects.

## Artifacts (Windows only)

- `artifacts/qa/slice-21gu-store-api-product-export/product-baseline.graphql`
- `artifacts/qa/slice-21gu-store-api-product-export/admin-products-full.json`
- `artifacts/qa/slice-21gu-store-api-product-export/admin-products-flat.json`
- `artifacts/qa/slice-21gu-store-api-product-export/admin-handles.txt`
- `artifacts/qa/slice-21gu-store-api-product-export/storefront-handles.txt`
- `artifacts/qa/slice-21gu-store-api-product-export/sample-404-presence.json`
