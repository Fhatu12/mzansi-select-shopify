# Slice 21AR — fixed-route preview check

**Document type:** DevOps / Platform harness note  
**Prepared:** 2026-05-15  
**Owner:** DevOps / Platform Engineer  
**Scope:** minimal read-only Playwright verifier for four approved preview routes.

## Purpose

Replace the overcomplicated crawl/targeted QA flow with one predictable verifier that answers route-by-route whether the unlocked preview storefront shows the expected CJ controlled-pilot posture.

Tracked harness:

- `tools/qa/run-slice-21ar-fixed-route-preview-check.mjs`

## Run command

```bash
cd ~/dev/mzansi-select-shopify
read -rsp "Storefront password: " MZANSI_STOREFRONT_PASSWORD; echo
MZANSI_STOREFRONT_PASSWORD="$MZANSI_STOREFRONT_PASSWORD" node tools/qa/run-slice-21ar-fixed-route-preview-check.mjs
```

Optional npm alias:

```bash
MZANSI_STOREFRONT_PASSWORD="$MZANSI_STOREFRONT_PASSWORD" npm run qa:slice-21ar-fixed-route-preview-check
```

## Behaviour

1. Launch Chromium from repo-local Playwright.
2. Open `https://dropshippoc.myshopify.com/password` and submit `MZANSI_STOREFRONT_PASSWORD`.
3. Verify the storefront is unlocked before any route checks.
4. Reuse the **same browser context** for all route checks (viewport resized between desktop and mobile).
5. Visit only these four routes (preview theme `151207542967`):
   - `/collections/controlled-pilot`
   - `/products/beverage-bottle-oil-bottle-handle-holder`
   - `/products/usb-bag-sealer`
   - `/products/foldable-magnetic-phone-holder-desktop-tablet-stand`
6. **No crawl** and **no link following**.

## Evidence

`artifacts/qa/slice-21ar-fixed-route-preview-check/<timestamp>/`

- `qa-fixed-route-report.md`
- `route-results.json`
- `route-results.csv`
- `console-errors.txt`
- `git-status-after.txt`
- `screenshots/`

## Verdict contract

| Verdict | When |
| --- | --- |
| **BLOCKED** | Missing password, Playwright not resolvable, or password unlock fails |
| **FAIL** | Password gate on a route, missing CJ products, Gadgetgyz visible, active purchase/checkout/customer controls, or CJ supplier media |
| **PASS WITH NOTES** | Checks pass but only generic placeholder/no-media visuals |
| **PASS** | All checks pass cleanly |

Without `MZANSI_STOREFRONT_PASSWORD`, the harness exits non-zero and does **not** create evidence.

## LLD

**Unchanged.** QA tooling only.
