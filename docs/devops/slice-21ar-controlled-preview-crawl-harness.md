# Slice 21AR — controlled preview crawl harness

**Document type:** DevOps / Platform harness note  
**Prepared:** 2026-05-15  
**Owner:** DevOps / Platform Engineer  
**Scope:** local read-only storefront crawl for QA route visibility; no Shopify Admin mutation.

## Purpose

Provide a bounded Playwright crawl for **Slice 21AR** controlled-preview QA when targeted route harnesses need independent evidence of what the unlocked preview storefront is actually rendering.

Tracked harness:

- `tools/qa/run-controlled-preview-crawl.mjs`

## Constraints

- Read-only **GET** navigation only.
- Storefront password unlock is the only allowed form submission.
- No Add to Cart, Buy Now, checkout, account/login, newsletter, or wishlist activation.
- No Admin/API mutations.
- No HAR, trace, video, cookies, `storageState`, or browser profile persistence.
- Password is read from `MZANSI_STOREFRONT_PASSWORD` only and is never printed or written to evidence.
- `artifacts/` remains local and uncommitted.
- Playwright must resolve from repo `node_modules` (`npm install` required). The harness does not bootstrap dependencies at runtime.

## Run command

```bash
cd ~/dev/mzansi-select-shopify
read -rsp "Storefront password: " MZANSI_STOREFRONT_PASSWORD; echo
MZANSI_STOREFRONT_PASSWORD="$MZANSI_STOREFRONT_PASSWORD" node tools/qa/run-controlled-preview-crawl.mjs
```

Optional npm alias:

```bash
MZANSI_STOREFRONT_PASSWORD="$MZANSI_STOREFRONT_PASSWORD" npm run qa:controlled-preview-crawl
```

## Crawl boundaries

- Seed routes: homepage, `controlled-pilot` collection, three CJ PDPs, three product search queries (preview theme `151207542967`).
- Same-origin internal link expansion only.
- Maximum **30** pages, maximum depth **2**.
- Excludes `/cart`, `/cart/add`, `/checkout`, `/checkouts`, `/account`, `/admin`, `/apps`, external links, and URLs containing `customer`, `payment`, `order`, `login`, `register`, `recover`, or `challenge`.
- Viewports: **1366×768** and **390×844**.

## Evidence output

`artifacts/qa/slice-21ar-controlled-preview-crawl/<timestamp>/`

Required files:

- `qa-crawl-report.md`
- `crawl-route-table.csv`
- `crawl-route-summary.json`
- `visible-text-findings.json`
- `commerce-signal-summary.json`
- `media-signal-summary.json`
- `network-summary.json`
- `console-errors.txt`
- `screenshots/` (safe storefront screenshots only)

## Terminal verdict contract

The harness prints:

- **Verdict:** `PASS` / `PASS WITH NOTES` / `FAIL` / `BLOCKED`
- Evidence folder path
- Routes crawled count
- Controlled-pilot, CJ visibility, Gadgetgyz absence, commerce, media, network/console summaries
- Final `git status`

Exit codes:

- `0` — `PASS` or `PASS WITH NOTES`
- non-zero — `FAIL` or `BLOCKED`

Without `MZANSI_STOREFRONT_PASSWORD`, the harness exits **BLOCKED** and does **not** create crawl evidence.

## LLD

**Unchanged.** QA tooling only; no product/storefront behaviour change.
