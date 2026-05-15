# Slice 21AR — fixed-route preview check

**Document type:** DevOps / Platform harness note  
**Prepared:** 2026-05-15  
**Owner:** DevOps / Platform Engineer  
**Scope:** minimal read-only Playwright verifier for four approved preview routes.

## Purpose

Provide a predictable fixed-route QA verifier for Slice 21AR controlled-preview posture. The recommended path uses **manual unlock** in a headed browser so QA does not depend on shell env password propagation.

Tracked harness:

- `tools/qa/run-slice-21ar-fixed-route-preview-check.mjs`

## Recommended run command

```bash
cd ~/dev/mzansi-select-shopify
node tools/qa/run-slice-21ar-fixed-route-preview-check.mjs --manual-unlock
```

Optional npm alias:

```bash
npm run qa:slice-21ar-fixed-route-preview-check
```

## Manual unlock behaviour

1. Launches **headed** Chromium (repo-local Playwright).
2. Opens `https://dropshippoc.myshopify.com/password`.
3. Prints a terminal instruction: enter the storefront password **only in the browser window** — do not paste it into the terminal.
4. Waits up to **5 minutes** for unlock.
5. Confirms unlock when the page is no longer on `/password` and the preview storefront homepage is reachable.
6. Reuses the **same browser context and page session** for all fixed-route checks (desktop then mobile viewport resize).
7. Visits only these four routes (preview theme `151207542967`):
   - `/collections/controlled-pilot`
   - `/products/beverage-bottle-oil-bottle-handle-holder`
   - `/products/usb-bag-sealer`
   - `/products/foldable-magnetic-phone-holder-desktop-tablet-stand`
8. **No crawl** and **no link following**.

## Auth / session safety

- The harness does **not** read, print, store, or request the password in the terminal.
- The human submits the Shopify password page manually in the browser only.
- No `storageState`, cookies, HAR, trace, video, or browser profile files are saved.
- Evidence contains sanitized page text snippets and safe screenshots only.

## Secondary mode (not recommended)

Automated env unlock remains available for local debugging only:

```bash
MZANSI_STOREFRONT_PASSWORD='...' node tools/qa/run-slice-21ar-fixed-route-preview-check.mjs --env-unlock
```

Prefer `--manual-unlock` for QA handoff.

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
| **BLOCKED** | Playwright/headed launch fails, or manual unlock times out |
| **FAIL** | Password gate on a route, Gadgetgyz visible, active purchase/checkout/customer controls, or CJ supplier media |
| **PASS WITH NOTES** | Checks pass but only generic placeholder/no-media visuals |
| **PASS** | All checks pass cleanly |

## LLD

**Unchanged.** QA tooling only.
