# Slice 21FZ Final Locked-Store Polish And Launch Readiness

- **Date:** 2026-05-24
- **Verdict:** **PASS WITH NOTES (NOT LAUNCH-READY)**
- **Scope:** Final polish and locked-store readiness check before paid plan activation
- **Live theme:** `151207542967` / `Mzansi Select MVP Preview`
- **Storefront status:** access lock enabled (paid plan not activated)

## Pre-check

- Repo: `/home/fhatu/dev/mzansi-select-shopify`
- Branch: `master`
- `HEAD` includes `32b369d` or later
- `artifacts/` ignore rule confirmed
- `tools/catalogue/` remained untracked and uncommitted
- No checkout/payment enablement, product mutation, import/sync, `Supplier verified`, media upload, theme publish, or full sync performed or planned

## Font 404 Result

- **Action:** pushed the committed local font assets to the live theme (bounded selected-file push).
- **Result:** should resolve prior 404s for `DM Sans` and `Playfair Display` local `.ttf` assets.
- **Notes:** no external font dependencies added.

Fonts pushed:

- `assets/dm-sans-300.ttf`
- `assets/dm-sans-400.ttf`
- `assets/dm-sans-500.ttf`
- `assets/dm-sans-600.ttf`
- `assets/dm-sans-700.ttf`
- `assets/playfair-display-400-italic.ttf`
- `assets/playfair-display-400.ttf`
- `assets/playfair-display-600.ttf`

## Track Order Result

- **Action:** ensured Track Order is clearly deferred and non-functional.
- **Wording:** “Order tracking will be available once checkout is enabled.”
- **Surface:** footer Help lists (desktop + mobile).
- **No order lookup form added.**

## Business Details And Support Result

- Footer Business Details link: `/pages/contact#business-details`
- Verified visible on Contact/Business Details surface:
  - `SIKHWARI GROUP (PTY) LTD`
  - `2026/166219/07`
  - `Fhatuwani Sikhwari`
  - `Unit 93 Amber Hill, 26 Lemonwood St, Centurion, Gauteng, 0144`
  - `Fhatuwani.Sikhwari@sikhwarigroup.co.za`
  - `+27 82 997 4112`
- No newsletter/email capture surfaces present.

## Retro Vault / Games & Toys Result

- `/collections/retro-vault-consoles-classics` loads and does not 404.
- `/collections/games-toys` loads and does not 404.
- Both remain honest browse routes; no fake/demo products introduced by this slice.

## Commerce Safety Smoke Result (Locked Store)

Routes checked in an unlocked session:

- `/`
- `/search?q=organiser&type=product`
- `/collections/retro-vault-consoles-classics`
- `/collections/games-toys`
- `/pages/contact#business-details`

Desktop `1366x768` and mobile `390x844` checks:

- **PASS:** no visible Add to Cart wording, no cart/add forms, no quick-add, no dynamic checkout, no checkout/payment enablement, no `Supplier verified`, no Liquid error text, no mobile overflow detected.
- **PASS:** newsletter/email capture remains removed (no email inputs present beyond search inputs; no subscribe/newsletter surfaces).

### Major finding (launch blocker)

- Sampled PDP routes returned real 404s (desktop + mobile) in unlocked session.
- `/collections/all` returned 200 but exposed **0** product links.
- Search query `/search?q=organiser&type=product` returned **0** results in the smoke run.

Interpretation:
- This strongly suggests products are not currently published/available as Online Store product detail pages, despite the “15 visible products” baseline noted elsewhere. This is a go-live blocker for a catalogue-only MVP that must allow PDP browsing.

## Theme Check

- `shopify theme check --fail-level error` reran.
- Result remained blocked by pre-existing repo-wide failures (`305` offences / `264` errors / `41` warnings).
- No new slice-specific Theme Check issue isolated.

## Files Changed

- `sections/site-footer.liquid` (Track Order deferral wording)

## Files Pushed To Live Theme

- `sections/site-footer.liquid`
- Font assets list (see “Font 404 Result” section)

## Paid-Plan / Password-Removal Checklist (Readiness)

Before activating the paid plan or removing the storefront access lock:

1. Confirm PDP browsing is live:
   - At least 5 products open on `/products/...` without 404.
   - `/collections/all` shows expected product cards and links.
   - `/search` returns expected products for at least one query.
2. Confirm catalogue-only posture:
   - No cart/add, no Add to Cart wording, no dynamic checkout, no checkout/payment/customer flows.
3. Confirm compliance/support disclosure:
   - Footer Business Details link works.
   - Business details and support contact are visible and correct.
4. Confirm categories:
   - Retro Vault and Games & Toys routes are non-404 and honest if empty.
5. Confirm low-severity polish:
   - No local font 404s in browser devtools network tab.

## Remaining Blockers

- PDP routes currently returning 404 in unlocked smoke run (major).
- Storefront access lock and paid-plan activation steps remain separate approvals.
