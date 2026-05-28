# Slice 21HJ-A Copy Update Handle Reconciliation

Date: 2026-05-28T21:10:18.847Z

## Outcome
- Read-only reconciliation completed.
- 18 approved handles checked from the 21HI approval pack.
- 23 needs-review products remained excluded.
- Public catalogue count: 41
- Admin catalogue count: 41
- Matched count: 18
- Missing/unresolved count: 0

## productByHandle Failure Explanation
- The earlier stop happened because at least one approved handle did not resolve through `productByHandle` in the prior script pass.
- This reconciliation used full catalogue listing in both public and Admin views and verified each approved handle against unique Admin product IDs/GIDs.
- Result: all 18 approved handles map safely to single Admin products.

## Approved Product Reconciliation
| Approved-pack handle | Public catalogue match | Admin product ID | Admin GID | Confidence | Safe to update |
|---|---|---:|---|---|---|
| 3-in-1-chess-backgammon-checkers-set-chessboard-wooden-board-games-set-educational-improve-intelligence-international-chess-game | yes | 9498179633377 | gid://shopify/Product/9498179633377 | high | yes |
| 3-in-1-chess-board-folding-wooden-portable-chess-game-board-wooden-chess-board-for-adultschess-checkers-and-backgammon | yes | 9498179600609 | gid://shopify/Product/9498179600609 | high | yes |
| 17cm-labubu-mini-plush-toy-multiple-styles-clothing-set-labubu-outfit-accessories-trendy-play-clothing-labubu-clothes-gift | yes | 9498179404001 | gid://shopify/Product/9498179404001 | high | yes |
| tic-tac-toe-board-board-multifunctional-electronic-games-montessori-puzzle-table-game-chess-chess-set-portable-for-adults-kids | yes | 9498179338465 | gid://shopify/Product/9498179338465 | high | yes |
| labubu-rain-boots-1st-generation-2nd-generation-3rd-generation-general-shoes-17cm-labubu-baby-shoes-peripheral-accessories | yes | 9498179240161 | gid://shopify/Product/9498179240161 | high | yes |
| labubu-display-box-transparent-labubu-big-leader-summer-doll-cotton-doll-blind-box-storage-cabinet | yes | 9498179141857 | gid://shopify/Product/9498179141857 | high | yes |
| retro-x80-handheld-game-machine-7-inch-psp-handheld-card-hd-big-screen-gba-classic-arcade-portable-built-in-20000-games | yes | 9498179076321 | gid://shopify/Product/9498179076321 | high | yes |
| r36s-retro-handheld-game-console-3-5-inch-ips-screen-64gb-128gb-256gb-portable-gaming-device-with-built-in-games | yes | 9498178912481 | gid://shopify/Product/9498178912481 | high | yes |
| retro-16bit-game-console-for-sega-mega-drive-2-old-fashioned-md-game-consoleinclude-5-different-kind-of-games | yes | 9498178945249 | gid://shopify/Product/9498178945249 | high | yes |
| dumpling-squishy-for-adults-slow-rising-tpr-stress-reliever-fidget-sensory-squeeze-toy-for-office-desk-unique-gift | yes | 9498178879713 | gid://shopify/Product/9498178879713 | high | yes |
| retro-video-game-console-portable-handheld-gaming-videogame-machine-mini-arcade-player-emulator-smart-gamepad-portatil-retrogame | yes | 9498178846945 | gid://shopify/Product/9498178846945 | high | yes |
| latest-high-quality-ergonomic-gaming-mouse-suitable-for-desktop-and-laptop-computers-4-button-usb-rgb-backlit-mouse | yes | 9498178683105 | gid://shopify/Product/9498178683105 | high | yes |
| 2-4g-wireless-mouse-2-4ghz-gaming-mouse-ergonomic-design-wireless-mouse-slim-mini-noiseless-mice-dpi1600-for-macbook-pc-laptops | yes | 9498178584801 | gid://shopify/Product/9498178584801 | high | yes |
| 3-in-1-usb-c-hub-type-c-3in-1-pd100w-hdmi4k-30hz-usb3-0 | yes | 9498178552033 | gid://shopify/Product/9498178552033 | high | yes |
| wireless-bluetooth-vertical-mouse-800-1200-1600-dpi-6-button-personalised-side-grip-ergonomic-2-4g-mute-gaming-pc-computer-mouse | yes | 9498178519265 | gid://shopify/Product/9498178519265 | high | yes |
| usb-3-0-hub-usb-hub-2-0-multi-usb-splitter-hub-100cm-long-cable-multiple-expander-for-computer-laptop-pc-accessories-usb-adapter | yes | 9498178289889 | gid://shopify/Product/9498178289889 | high | yes |
| hifi-sound-bluetooth-headphones-wireless-over-ear-headsets-with-microphone-noise-reduction-comfortable-for-travel-and-home-use | yes | 9498178224353 | gid://shopify/Product/9498178224353 | high | yes |
| km320-keyboard-and-mouse-set-waterproof-luminous-game-backlit-keyboard | yes | 9498178126049 | gid://shopify/Product/9498178126049 | high | yes |

## Recommended Next Slice
- Apply copy updates by verified Admin product IDs/GIDs only.
- Keep mutation fields restricted to `descriptionHtml` and `title` only when approved title is not `unchanged`.