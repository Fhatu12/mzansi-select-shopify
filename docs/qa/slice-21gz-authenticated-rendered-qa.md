# Slice 21GZ-WIN — authenticated rendered QA after PDP loading fix

Date: 2026-05-28
Execution host: Windows (`D:\dev\mzansi-select-shopify-winqa`)
Store: `sikhwarigroupdev.myshopify.com`
Theme under test: `Mzansi Select MVP Restored #162429075681` (draft)
Live theme reference: `Horizon #158396285153`

## Preconditions and Safety
- `MZANSI_STOREFRONT_PASSWORD` was expected in Windows env and never logged.
- No publish action performed.
- No product/price/domain/app/checkout configuration changes performed.
- No theme push performed.
- No cookies/tokens/password/HAR/trace/video/session artifacts were committed.

## Result
Verdict: **BLOCKED**
Reason: password gate remained active on required preview routes, so full authenticated rendered QA could not be completed.

## Password unlock result
- Unlock status: `FAILED`
- Observed final URL on protected routes: `https://sikhwarigroupdev.myshopify.com/password`

## Routes tested
- `/?preview_theme_id=162429075681`
- `/collections/all?preview_theme_id=162429075681`
- `/search?q=retro&type=product&preview_theme_id=162429075681`
- `/search?q=mouse&type=product&preview_theme_id=162429075681`
- `/pages/contact?preview_theme_id=162429075681#business-details`

## Observations from blocked run
- `/collections/all` product count: `0`
- Search counts:
  - `retro`: `0`
  - `mouse`: `0`
- PDP usable content: `2/4 pass` (blocked context made PDP evidence unreliable for sign-off)
- Navigation/back/link result: **Not sign-offable due to auth gate interception**
- Spinner result: no persistent spinner observed in sampled PDP loads (`spinnerAfter3s = 0` where PDP loaded)
- Mobile overflow result:
  - Overflow true on home and collections routes in blocked session
  - Other sampled routes false/null
- Commerce safety result (blocked session):
  - No Add to Cart
  - No `/cart/add`
  - No quick-add
  - No dynamic checkout
  - No checkout/payment path
  - No supplier-verified claim
  - No newsletter capture detected
  - No Liquid errors detected

## Recommendation
**blocked**

Next required action before re-run:
1. Confirm `MZANSI_STOREFRONT_PASSWORD` is set in the same Windows shell session that launches the QA runner.
2. Re-run authenticated rendered pass to collect final sign-off metrics for 5/5 PDP usability, business details visibility, and navigation/back checks.