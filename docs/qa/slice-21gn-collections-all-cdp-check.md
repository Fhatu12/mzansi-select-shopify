# Slice 21GN — Playwright retry via Windows Chrome CDP (`/collections/all`)

## Scope

- **Store:** `sikhwarigroupdev.myshopify.com`
- **Live theme:** `Horizon` `#158396285153`
- **Draft theme under test:** `Mzansi Select MVP Restored` `#162429075681` (unpublished)
- **Target route:** `https://sikhwarigroupdev.myshopify.com/collections/all?preview_theme_id=162429075681`
- **Execution mode:** Codex-only, non-interactive, no manual browser unlock

## Pre-check status

- `git status --short --branch`: expected untracked paths only (`tools/catalogue/`, existing `tools/qa/run-slice-21gj-pdp-pending-load-diagnostics.mjs`).
- `git check-ignore -v artifacts/`: confirmed ignored.
- `shopify theme list --store sikhwarigroupdev.myshopify.com`:
  - `Horizon` `[live]` `#158396285153`
  - `Mzansi Select MVP Restored` `[unpublished]` `#162429075681`
- No publish/password/product/price/checkout/domain/app mutation actions were performed.

## Harness delivered

- Added: `tools/qa/run-slice-21gn-collections-all-cdp-check.mjs`
- Added npm script: `qa:slice-21gn-collections-all-cdp`
- Safe output path: `artifacts/qa/slice-21gn-collections-all-cdp-check/<timestamp>/summary.json`
- Safety controls in harness:
  - CDP-only strategy (no WSL Chromium fallback)
  - no storageState/cookie/token dumps
  - no HAR/trace/video capture
  - no password/token/session logging
  - `MZANSI_STOREFRONT_PASSWORD` support (masked usage only; never printed)

## CDP method attempted

1. Connect to existing local CDP endpoint(s) from WSL.
2. Launch Windows Chrome through `powershell.exe` with remote debugging and dedicated profile under ignored `artifacts/browser-profiles/slice-21gn/`.
3. Re-probe CDP endpoint candidates from WSL and connect with timeout guard.

## Result

- **Final verdict:** `BLOCKED_CDP_UNAVAILABLE`
- **Summary file:** `artifacts/qa/slice-21gn-collections-all-cdp-check/2026-05-28-08-55-39/summary.json`
- **Observed blocker detail:** `launch_windows_chrome_profile_failed:cdp_endpoint_not_ready`

## Password / captcha status

- Password automation was **not reached** because CDP connection was not established.
- `MZANSI_STOREFRONT_PASSWORD` was not set in this run (`passwordEnvProvided: false`).
- Captcha was **not directly observed** in this run (`captchaBlocked: false`) because browser automation never attached.

## Route verification status (`/collections/all`)

Rendered checks could not execute due to CDP unavailability:

- non-password content reachability: **not verified**
- product cards count: **not verified**
- product links count: **not verified**
- first 10 product handles: **not verified**
- commerce safety assertions (Add to Cart, cart/add, quick-add, dynamic checkout, checkout/payment path, Supplier verified, newsletter/email capture, Liquid errors): **not verified**
- spinner-after-render observation: **not verified**
- mobile overflow check: **not verified**

## Recommendation

- **Recommendation:** **BLOCKED / FIX FIRST** (do not publish).
- Next required action: establish a reachable Windows Chrome CDP endpoint from WSL for this store session, then rerun `npm run qa:slice-21gn-collections-all-cdp`.

