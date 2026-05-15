# Slice 21AR — authenticated preview QA harness

**Document type:** DevOps / Platform harness note  
**Prepared:** 2026-05-15  
**Owner:** DevOps / Platform Engineer  
**Scope:** local QA harness only; no Shopify Admin mutation, no theme mutation, no checkout/payment/customer-access change.

## Purpose

Provide a short, repeatable Ubuntu-shell command for **Slice 21AR** authenticated controlled-preview QA without pasting a long Playwright script into the terminal or manually inspecting JSON to learn the verdict.

Tracked harness:

- `tools/qa/run-slice-21ar-auth-preview.mjs`

## Constraints

- Read-only storefront QA only.
- Playwright is now a tracked repo `devDependency`.
- Password is read from `MZANSI_STOREFRONT_PASSWORD` **only**.
- The harness never prints, saves, echoes, or commits the password.
- The harness uses an in-memory browser context only.
- The harness does **not** write storageState, cookies, HARs, traces, videos, or browser-profile data.
- `artifacts/` remains evidence-only and must not be committed.
- Browser QA must run directly from the Ubuntu shell, not inside the Codex sandbox.
- The harness prints the final structured QA report directly to terminal and writes the same report to `qa-report.md`.
- The harness prints the evidence path and final `git status` directly to terminal.
- The harness exits non-zero for **FAIL** or **BLOCKED**, and zero for **PASS** or **PASS WITH NOTES**.

## Short QA command

```bash
cd ~/dev/mzansi-select-shopify
read -rsp "Storefront password: " MZANSI_STOREFRONT_PASSWORD; echo
MZANSI_STOREFRONT_PASSWORD="$MZANSI_STOREFRONT_PASSWORD" node tools/qa/run-slice-21ar-auth-preview.mjs
```

Optional tablet viewport:

```bash
SLICE21AR_INCLUDE_TABLET=1 MZANSI_STOREFRONT_PASSWORD="$MZANSI_STOREFRONT_PASSWORD" node tools/qa/run-slice-21ar-auth-preview.mjs
```

## Evidence output path

- Run-specific evidence:
  - `artifacts/qa/slice-21ar-authenticated-controlled-preview-validation-rerun/<timestamp>/`

The tracked harness is safe to commit because it contains no secrets and no runtime evidence.

Each real run writes exactly one timestamped evidence folder.

## Playwright package handling

Playwright is now part of the tracked repo QA tooling surface:

1. the repo carries a tracked `package.json`;
2. `playwright` is declared as a repo `devDependency`; and
3. QA should not see artifact-local bootstrap during normal validation.

If the local dependency is missing anyway, the harness fails clearly with a **BLOCKED** setup message instead of trying to bootstrap dependencies during QA execution.

## Validation scope

The harness is designed for the **Slice 21AR** authenticated rerun boundary:

- password unlock and actual storefront DOM reachability
- controlled-pilot collection inspection
- three CJ PDP checks
- preview-safe wording
- prohibited wording absence
- no-media / placeholder-only posture
- no active Add to Cart / Buy Now / checkout path
- no customer/newsletter/wishlist activation
- desktop/mobile layout coherence and overflow checks
- sanitized network + console summary only

## Terminal output contract

At the end of every real run, the harness prints:

```text
=== Slice 21AR Authenticated Controlled Preview QA ===
Verdict: <PASS|PASS WITH NOTES|FAIL|BLOCKED>
Evidence: artifacts/qa/slice-21ar-authenticated-controlled-preview-validation-rerun/<timestamp>/
Git status:
<git status --short --branch>

Summary:
- Controlled-pilot collection:
- PDP validation:
- Preview-safe wording:
- Prohibited wording:
- Media:
- Commerce actions:
- Checkout/customer access:
- Desktop/mobile layout:
- Network/console:
- Blockers/regressions:
```

The same terminal report is also written to:

- `artifacts/qa/slice-21ar-authenticated-controlled-preview-validation-rerun/<timestamp>/qa-report.md`

The harness also writes:

- `git-status-after.txt`
- the required JSON summaries
- `console-errors.txt`
- safe screenshots under `screenshots/`

## LLD

**Unchanged.** This note records a local QA harness only; it does not change product/storefront behaviour.
