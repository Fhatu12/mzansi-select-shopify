# Slice 21GZ-C-WIN Public-Access Rendered Draft QA

Date: 2026-05-28  
Executor: Codex on Windows (PowerShell + Playwright)  
Store: `sikhwarigroupdev.myshopify.com`  
Draft theme under test: `Mzansi Select MVP Restored #162429075681` (preview)  
Live theme unchanged: `Horizon #158396285153`

## Scope and Safety
- Public-access rendered QA only on draft preview routes.
- No publish, no product/price/domain/payment changes, no theme push, no app install.
- No cookie/token/password/HAR/trace/video capture persisted.

## Routes Tested
- `/?preview_theme_id=162429075681`
- `/collections/all?preview_theme_id=162429075681`
- `/search?q=retro&type=product&preview_theme_id=162429075681`
- `/search?q=mouse&type=product&preview_theme_id=162429075681`
- `/pages/contact?preview_theme_id=162429075681#business-details`

## PDPs Tested (5)
- `/products/2026-new-retro-gaming-console-with-23-emulators-20-000-built-in-games-4k-hdmi-2-4g-with-dual-wireless-controllers?preview_theme_id=162429075681`
- `/products/29x29cm-large-chessboard-developing-strategic-thinking-3-in-1-chess-chekers-backgammon-foldable-chess-board-for-kids-adults?preview_theme_id=162429075681`
- `/products/km320-keyboard-and-mouse-set-waterproof-luminous-game-backlit-keyboard?preview_theme_id=162429075681`
- `/products/3-in-1-usb-c-hub-type-c-3in-1-pd100w-hdmi4k-30hz-usb3-0?preview_theme_id=162429075681`
- `/products/17cm-labubu-mini-plush-toy-multiple-styles-clothing-set-labubu-outfit-accessories-trendy-play-clothing-labubu-clothes-gift?preview_theme_id=162429075681` (additional current valid product)

## Results

### 21GZ-C verdict
- **FAIL (fix first)** due to gallery cap regression signal (`max 5` expected, `6` rendered on all tested PDPs).

### Draft visibility and route render
- Draft preview rendered successfully on all required routes.
- `/collections/all` product-card links visible.

### Product and search counts
- `/collections/all` product-link count: **123**
- `/search?q=retro&type=product...` product-link count: **24**
- `/search?q=mouse&type=product...` product-link count: **21**
- Search returned products for at least one matching query: **PASS** (both queries matched)

### PDP usability (5/5)
- Usable PDPs: **5/5 PASS**
- Spinner before/after 3s on each PDP: **0 -> 0** (no spinner block)
- Link click and browser back on PDPs: **PASS** (navigation returned to PDP URL)

### Commerce safety
- No Add to Cart buttons: **PASS**
- No `/cart/add` forms: **PASS**
- No quick-add: **PASS**
- No dynamic checkout: **PASS**
- No checkout/payment path links/forms: **PASS**

### Content and quality checks
- No `Supplier verified`: **PASS**
- No newsletter capture surfaces: **PASS**
- No Liquid/template error text: **PASS**
- Support email visible: **PASS**
- Support phone visible: **PASS**
- Business Details visible: **PASS**

### Gallery cap check
- Expected: max **5** media/gallery items rendered on PDP.
- Observed on tested PDPs: **6** each.
- Result: **FAIL** (requires fix before publish)

### Mobile overflow
- Routes checked (home, collections/all, both search routes, contact, one PDP): **no overflow detected**.

## Evidence
- Primary run summary: `artifacts/qa/slice-21gz-win/2026-05-28T15-46-08-504Z/summary.json`
- Supplemental gallery probe run: in-session Playwright check (5 PDPs, gallery count output = 6 each)

## Recommendation
- **Fix first** (restore/enforce PDP rendered gallery cap to max 5) before publish consideration.
