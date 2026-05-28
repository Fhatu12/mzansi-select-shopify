# Slice 21GM — Transferred store draft preview smoke QA

## Scope

- **Store:** `sikhwarigroupdev.myshopify.com`
- **Live theme:** `Horizon` `#158396285153`
- **Draft theme under test:** `Mzansi Select MVP Restored` `#162429075681` (unpublished)
- **Preview URL:** `https://sikhwarigroupdev.myshopify.com?preview_theme_id=162429075681`
- **Goal:** safe smoke QA before any publish or password removal.

## Pre-check

- `git status --short --branch`: clean branch with expected untracked paths only:
  - `tools/catalogue/` (untracked)
  - `tools/qa/run-slice-21gj-pdp-pending-load-diagnostics.mjs` (untracked)
- `git check-ignore -v artifacts/`: confirmed ignored by `.gitignore`.
- `shopify theme list --store sikhwarigroupdev.myshopify.com`:
  - `Horizon` `[live]` `#158396285153`
  - `Mzansi Select MVP Restored` `[unpublished]` `#162429075681`
- No publish/password/product/price/checkout/domain/app action was executed in this slice.

## Execution status

- **Automated rendered smoke pass:** **BLOCKED** by repeated captcha failure during storefront password unlock in headed Chromium automation.
- Product Owner confirmed manual Chrome login, but Codex-rendered scripted route pass could not be completed due to captcha flow instability in automation window.

## Evidence-backed checks completed (non-destructive, code/state level)

### Visual/theme wiring signals

- Route/menu wiring for required collections present:
  - `retro-vault-consoles-classics`
  - `games-toys`
- Business details anchor/link wiring present in footer/contact surfaces (`#business-details`).
- Support email wiring present in footer and business details sections.

### Catalogue and wording posture

- Catalogue-only wording present in business details and preview surfaces.
- `Price to be confirmed` / preview-only wording remains present in product card/PDP related snippets and sections.
- Canonical collection/section references for Retro Vault and Games & Toys remain wired in templates/sections.

### Commerce safety posture (code-level)

- Product card and product foundations still gate commerce for preview-only/non-purchasable tags.
- No intentional enablement action for checkout/payment/customer flow was taken.
- No product/price mutations performed.

### Gallery cap posture

- Slice 21GI gallery-limiting implementation remains in place; no code changes in this slice altered PDP media logic.

## Route test matrix (required rendered checks)

Required rendered routes were **planned** but **not fully executable in Codex browser automation** due to captcha block:

- `/`
- `/collections/all`
- `/search?q=organiser&type=product`
- `/pages/contact#business-details`
- `/collections/retro-vault-consoles-classics`
- `/collections/games-toys`
- `>=3` PDPs (`/products/<handle>`)

Status: **BLOCKED IN AUTOMATION** (manual browser verification still required for full rendered verdict).

## PDP pending-load observation

- Pending-load spinner observation across live rendered PDP navigation could not be captured in this slice due to captcha block in automation run.
- Carry forward as an explicit follow-up check once a stable unlocked session is available.

## Remaining blockers

1. Captcha prevents a stable Codex-headed unlocked storefront session for rendered preview QA.
2. Required rendered assertions (visual parity, route rendering, no-liquid-errors, PDP spinner behavior) need one completed unlocked run.

## Recommendation

- **Recommendation now:** **FIX FIRST / DO NOT PUBLISH YET**.
- Reason: Required rendered smoke QA for the transferred-store draft preview could not be fully completed under automation due to captcha gating; publish/password-removal decisions should wait for a completed rendered pass.

