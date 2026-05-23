# Slice 21FR North-Star Adoption

- **Date:** 2026-05-23
- **Verdict:** **PASS WITH NOTES**
- **Active repo:** `/home/fhatu/dev/mzansi-select-shopify`
- **Accepted upstream import:** `2991e307e46c0f6ef76e5f98c6f2acc18f7e6f9d`

## Source Of Truth

- `/home/fhatu/dev/mzansi-select-shopify/mzansi-select-theme.html`
- `/home/fhatu/dev/mzansi-select-shopify/mzansi-select-mobile.html`

## Pre-check

- Branch and status before work: `## master` with `tools/catalogue/` still untracked.
- `HEAD` includes accepted import commit `2991e307`.
- `artifacts/` ignore rule confirmed with `git check-ignore -v artifacts/`.
- `tools/catalogue/` remains untracked and uncommitted.
- No Shopify Admin mutation, product mutation, theme publish, checkout/payment enablement, import/sync, app install, media upload, deletion, or `Supplier verified` change was performed or planned.

## Sections Opened Or Unblocked

- Homepage `Shipping info` hero CTA now links to the static-safe shipping section on `/pages/about#shipping`.
- Homepage category strip now presents `The Retro Vault` and `Games & Toys` with the imported north-star visual treatment instead of piecemeal wording-only cleanup.
- Homepage category strip support tiles for `Shipping`, `Returns`, and `FAQ` are now open browse links to approved static-safe page anchors.
- New homepage showcase sections for `The Retro Vault: Consoles & Classics` and `Games & Toys` are now visible in the section order.
- Mobile drawer help links for `Shipping`, `Returns`, `FAQ`, and `Contact Us` are now open to approved static-safe destinations.
- Footer help and company browse links are now open where the theme already has static-safe page foundations.
- Footer newsletter area now matches the updated visual posture, while submission remains disabled.

## Mapping

| North-star section | Current theme file(s) | Required action |
| --- | --- | --- |
| Hero secondary support CTA | `sections/hero-collage.liquid` | Open/unblock safe `Shipping info` browse link |
| Department strip with Retro Vault and Games & Toys | `sections/category-strip.liquid` | Restyle to imported north-star layout and keep approved collection links |
| Category-strip support tiles | `sections/category-strip.liquid` | Open/unblock `Shipping`, `Returns`, and `FAQ` to static-safe anchors |
| Retro Vault homepage block | `templates/index.json`, `sections/category-showcase.liquid`, `assets/theme.css` | Add section, match north-star layout, remove need for old wording-only workaround |
| Games & Toys homepage block | `templates/index.json`, `sections/category-showcase.liquid`, `assets/theme.css` | Add section and match north-star layout |
| Main nav and mobile drawer browse labels | `sections/primary-navigation.liquid` | Restyle labels to north-star wording |
| Mobile drawer help section | `sections/primary-navigation.liquid` | Add safe links for approved support routes |
| Desktop header category selector and wishlist wording | `sections/site-header.liquid` | Restyle visible chrome, keep filter and wishlist interaction deferred |
| Footer help, company, and newsletter chrome | `sections/site-footer.liquid` | Open safe links, restyle copy, keep newsletter submission deferred |
| New-in promo wording | `sections/feature-tile-grid.liquid` | Restyle copy only |
| Transactional flows: cart, checkout, accounts, track order, live newsletter submission | `sections/site-header.liquid`, `sections/primary-navigation.liquid`, `sections/site-footer.liquid`, existing product card snippets | Leave unchanged and deferred for commerce safety |

## Theme Files Changed

- `assets/theme.css`
- `templates/index.json`
- `sections/category-showcase.liquid`
- `sections/category-strip.liquid`
- `sections/feature-tile-grid.liquid`
- `sections/hero-collage.liquid`
- `sections/primary-navigation.liquid`
- `sections/site-footer.liquid`
- `sections/site-header.liquid`

## Files Pushed To Live Theme

- Live theme: `151207542967` / `Mzansi Select MVP Preview`
- Pushed files:
  - `assets/theme.css`
  - `templates/index.json`
  - `sections/category-showcase.liquid`
  - `sections/category-strip.liquid`
  - `sections/feature-tile-grid.liquid`
  - `sections/hero-collage.liquid`
  - `sections/primary-navigation.liquid`
  - `sections/site-footer.liquid`
  - `sections/site-header.liquid`
- Command used:

```bash
shopify theme push --store dropshippoc.myshopify.com --theme 151207542967 --allow-live --nodelete --json --no-color --only assets/theme.css --only templates/index.json --only sections/category-showcase.liquid --only sections/category-strip.liquid --only sections/feature-tile-grid.liquid --only sections/hero-collage.liquid --only sections/primary-navigation.liquid --only sections/site-footer.liquid --only sections/site-header.liquid
```

## Checks

- `shopify theme check --fail-level error` ran before push and returned pre-existing repo-wide failures: `305 total offences`, `264 errors`, `41 warnings`. No new slice-specific theme-check failure was isolated to the changed files.
- `templates/index.json` remained valid JSON after section updates.
- Storefront render validation was attempted from the public storefront entry point, but unauthenticated access still resolves to the Shopify lock screen and no approved unlock method was available in this environment.

## Routes And Viewports Tested

- Full rendered validation for `/`, `/search?q=organiser&type=product`, `/collections/retro-vault-consoles-classics`, `/collections/games-toys`, and three PDPs at `1366x768` and `390x844` remains **blocked** by the storefront access gate in this environment.
- External unauthenticated fetch to `https://dropshippoc.myshopify.com` confirmed the storefront lock screen is still active.

## Commerce Safety Result

- **PASS**
- No Add to Cart enablement.
- No `/cart/add` forms added.
- No quick-add enablement.
- No dynamic checkout enablement.
- No checkout/payment/customer-flow path enabled.
- No `Supplier verified` claim introduced.
- Product surfaces still rely on the existing price-to-confirm posture through the live product card contract.

## Visual Notes

- `The Retro Vault` now follows a dedicated hero-style showcase instead of relying on title wrap adjustments alone.
- `Games & Toys` now has its own homepage showcase and no longer depends only on the compact category strip.
- Footer and drawer support areas now feel visually complete without activating unsafe back-end flows.
- Empty collection states stay honest through the existing empty-state component instead of introducing fake product cards.

## Remaining Blockers

- Storefront access gating prevented full rendered desktop/mobile validation on the approved route set.
- Theme Check still reports substantial pre-existing repo-wide errors and warnings outside the 21FR slice scope.
- Newsletter submission, account flows, track order, cart, and checkout remain intentionally deferred.

## Next Owner

- Product Owner for visual review and acceptance of the live selected-file push.
