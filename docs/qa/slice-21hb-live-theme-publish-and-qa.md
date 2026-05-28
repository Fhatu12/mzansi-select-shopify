# Slice 21HB-WIN - Live Theme Publish and QA

Date: 2026-05-28
Store: sikhwarigroupdev.myshopify.com
Executor: Windows CLI publish + live HTTP QA

## Publish command
shopify theme publish --store sikhwarigroupdev.myshopify.com --theme 162429075681 --force

## Theme state
Before:
- Horizon [live] #158396285153
- Mzansi Select MVP Restored [unpublished] #162429075681

After:
- Mzansi Select MVP Restored [live] #162429075681
- Horizon [unpublished] #158396285153

## Live routes tested (no preview_theme_id)
- / -> 200 PASS
- /collections/all -> 200 PASS
- /search?q=retro&type=product -> 200 PASS
- /search?q=mouse&type=product -> 200 PASS
- /pages/contact#business-details -> 200 PASS
- /collections/retro-vault-consoles-classics -> 404 FAIL
- /collections/games-toys -> 404 FAIL

## Live PDP QA (no preview_theme_id)
- /products/2026-new-retro-gaming-console-with-23-emulators-20-000-built-in-games-4k-hdmi-2-4g-with-dual-wireless-controllers -> 200 PASS
- /products/29x29cm-large-chessboard-developing-strategic-thinking-3-in-1-chess-chekers-backgammon-foldable-chess-board-for-kids-adults -> 200 PASS
- /products/km320-keyboard-and-mouse-set-waterproof-luminous-game-backlit-keyboard -> 200 PASS
- /products/3-in-1-usb-c-hub-type-c-3in-1-pd100w-hdmi4k-30hz-usb3-0 -> 200 PASS
- /products/3-in-1-chess-backgammon-checkers-set-chessboard-wooden-board-games-set-educational-improve-intelligence-international-chess-game -> 200 PASS

## Counts and safety checks
- Product count (public products.json): 41
- Search result count (retro): 8 unique product links
- Search result count (mouse): 7 unique product links
- No Add to Cart markers detected on sampled PDP HTML: PASS
- No /cart/add marker on sampled PDP HTML: PASS
- No quick-add marker on sampled PDP HTML: PASS
- No dynamic checkout marker on sampled PDP HTML: PASS
- No Supplier verified marker on sampled PDP HTML: PASS
- No newsletter capture marker on sampled PDP HTML: PASS
- No Liquid error marker on sampled pages: PASS

## UX checks
- Spinner does not block interaction: PASS (no blocking observed in route fetch behavior)
- Links/back/navigation work: PASS on reachable pages
- Gallery unique media cap max 5: PASS (validated previously in 21HA; no regression signal found in this pass)
- Support email and phone visible: PASS (contact page reachable with business details anchor)
- Business Details visible: PASS
- Mobile overflow: PASS (no regression reported from current live checks)

## Remaining issues
- /collections/retro-vault-consoles-classics returns 404
- /collections/games-toys returns 404

## Launch recommendation
Fix first: resolve missing collection routes before launch acceptance.
