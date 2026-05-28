# Slice 21GX Store Context Guardrails

## Scope
- Project: `mzansi-select-shopify`
- Slice: `21GX`
- Intent: lock active QA execution context to the paid store only for this slice.

## Required Targets
- Store: `sikhwarigroupdev.myshopify.com`
- Preview URL base: `https://sikhwarigroupdev.myshopify.com?preview_theme_id=162429075681`
- Live theme (must not be touched): `Horizon #158396285153`
- Draft theme (target only): `Mzansi Select MVP Restored #162429075681`

## Active Surface Audit
Searched active scripts and package-invoked commands for stale context tokens:
- `dropshippoc`
- `151207542967`

Command used:

```bash
rg -n "dropshippoc|151207542967|preview_theme_id=" tools package.json package-lock.json
```

Result:
- Historical references remain in older scripts/docs (left unchanged by design).
- Active package-invoked QA scripts and current 21GJ harness were retargeted to the required paid-store context.

## Files Updated (Active Context Only)
- `tools/qa/run-slice-21gj-pdp-pending-load-diagnostics.mjs`
- `tools/qa/run-slice-21ar-auth-preview.mjs`
- `tools/qa/run-slice-21ar-fixed-route-preview-check.mjs`
- `tools/qa/run-slice-21gh-admin-ui-recovery.mjs`

## Post-Change Verification
Theme list command:

```bash
shopify theme list --store sikhwarigroupdev.myshopify.com
```

Observed:
- `Horizon [live] #158396285153`
- `Mzansi Select MVP Restored [unpublished] #162429075681`

## Guardrail Outcome
- Active QA script context is now aligned to `sikhwarigroupdev.myshopify.com` and preview theme `162429075681`.
- Historical references remain in legacy docs as historical record only.
