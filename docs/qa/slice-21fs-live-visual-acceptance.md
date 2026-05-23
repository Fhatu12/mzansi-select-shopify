# Slice 21FS Live Visual Acceptance

- **Date:** 2026-05-23
- **Verdict:** **FAIL**
- **Scope:** Read-only live visual acceptance QA after **Slice 21FR**
- **Live theme:** `151207542967`
- **Upstream slice:** `5888a59a8577c88e679947c609b187d262897b3c`
- **Evidence run:** `artifacts/qa/slice-21fs-live-visual-acceptance/2026-05-23T13-19-32-728Z/`

## Pre-check

- Branch and status before QA: `## master` with `tools/catalogue/` still untracked.
- `artifacts/` ignore rule confirmed.
- `tools/catalogue/` remains untracked and uncommitted.
- No Shopify Admin mutation, theme push, theme publish, checkout/payment/customer-flow enablement, product import/sync, app installation, `Supplier verified` change, deletion, or media upload was performed or planned.

## Unlock Method

- The storefront was opened in a headed browser.
- Product Owner completed manual unlock in the browser window only.
- No unlock details were recorded, printed, or stored.
- The same in-memory browser session was reused for all route checks.

## Routes And Viewports Tested

- Desktop `1366x768`
  - `/`
  - `/search?q=organiser&type=product`
  - `/collections/retro-vault-consoles-classics`
  - `/collections/games-toys`
  - 3 PDPs sampled from live browse links
- Mobile `390x844`
  - `/`
  - `/search?q=organiser&type=product`
  - `/collections/retro-vault-consoles-classics`
  - `/collections/games-toys`
  - The same 3 PDPs sampled from live browse links

## Desktop Result

- **Homepage:** PASS WITH NOTES
  - Hero rendered correctly.
  - Category strip showed `Retro Vault`, `Games & Toys`, `Shipping`, `Returns`, and `FAQ`.
  - Retro Vault and Games & Toys homepage showcase sections were visible.
  - Footer/support browse links were visible.
- **Search page:** PASS WITH NOTES
  - Search route rendered and showed preview-safe browse cards.
  - Commerce-safe product cards still used `View product`.
- **PDP sample:** FAIL
  - All 3 sampled PDPs still displayed `Add to Cart` text inside the live page body.

## Mobile Result

- **Homepage:** PASS WITH NOTES
  - Mobile drawer opened correctly.
  - Drawer contained `The Retro Vault`, `Games & Toys`, `Shipping`, `Returns`, and `FAQ`.
  - Retro Vault and Games & Toys homepage showcase sections were visible.
  - No horizontal overflow was detected on tested mobile routes.
- **Search page:** PASS WITH NOTES
  - Search route rendered correctly at mobile width.
- **PDP sample:** FAIL
  - All 3 sampled PDPs still displayed `Add to Cart` text inside the live page body.

## Retro Vault Result

- **Homepage block:** PASS
  - The north-star section was visible on both desktop and mobile.
  - The approved `Classic Consoles, Cartridges & More` presentation rendered.
  - Honest empty-state handling remained in place.
- **Collection route:** FAIL
  - `/collections/retro-vault-consoles-classics` returned the 404 foundation on both desktop and mobile.

## Games & Toys Result

- **Homepage block:** PASS
  - The north-star section was visible on both desktop and mobile.
  - The approved family-fun presentation rendered.
  - Honest empty-state handling remained in place.
- **Collection route:** FAIL
  - `/collections/games-toys` returned the 404 foundation on both desktop and mobile.

## Commerce Safety Result

- **FAIL**
- Confirmed safe:
  - No dynamic checkout surfaced on tested routes.
  - No `Supplier verified` claim was found.
  - No fake/demo product wording was found.
  - Newsletter remained visually present but deferred.
  - Account flows remained deferred.
  - No mobile horizontal overflow was detected.
  - No Liquid error text was rendered.
- Failed:
  - `Add to Cart` text was still present on all 3 sampled PDPs in both desktop and mobile.
- Notes:
  - The tested PDPs also surfaced controlled-pilot copy and live prices, which indicates those routes are outside the intended catalogue-only north-star acceptance surface.

## Visual Defects

1. **Collection-route failure**
   - `https://dropshippoc.myshopify.com/collections/retro-vault-consoles-classics`
   - `https://dropshippoc.myshopify.com/collections/games-toys`
   - Both returned the 404 preview foundation instead of a valid collection experience.

2. **PDP commerce-gate regression**
   - Sampled PDPs still rendered `Add to Cart` text in both desktop and mobile.
   - This fails the approved commerce gate for a catalogue-only storefront.

3. **Asset loading defects**
   - Repeated 404s were observed for font assets:
     - `dm-sans-400.ttf`
     - `dm-sans-500.ttf`
     - `dm-sans-600.ttf`
     - `dm-sans-700.ttf`
     - `playfair-display-400-italic.ttf`
     - `playfair-display-600.ttf`
   - These did not produce Liquid errors, but they remain live asset defects.

4. **Track-order posture wording drift**
   - Footer still shows `Track Order` as visible text with deferred note copy.
   - This remained non-clickable in the tested experience, but the visual posture is not as clearly paused as the rest of the deferred support set.

## Sampled PDPs

- `/products/1pc-self-adhesive-wall-mounted-paper-tissue-rack-suitable-for-kitchen-bathroom-under-cabinet-sink-cling-film-storage-punch-free`
- `/products/1pcs-upgradation-adjustable-flatware-tableware-organizer-plastic-multifunctional-drawer-organizer-for-kitchen-counter-utensils`
- `/products/2-tier-under-sink-sliding-storage-basket-multifunctional-organizer-rack-with-hooks-hanging-cup-space-saving-for-bathroom-kitchen`

## Remaining Launch Blockers

- Retro Vault collection route missing live collection rendering.
- Games & Toys collection route missing live collection rendering.
- PDP commerce gate still leaking `Add to Cart` wording on sampled live routes.
- Font-asset 404s remain unresolved on the live theme.
- Product Owner acceptance is blocked until the defects above are resolved and re-validated.

## Product Owner Decision

- **Pending**
- QA recommendation: **do not accept Slice 21FS** until the collection-route and PDP commerce-gate defects are fixed and re-tested.
