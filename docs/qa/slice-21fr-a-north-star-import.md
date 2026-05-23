# Slice 21FR-A — north-star import and verification

**Date:** 2026-05-23  
**Repo:** `/home/fhatu/dev/mzansi-select-shopify`  
**Verdict:** **PASS**  
**Scope:** import the approved updated desktop/mobile north-star HTML files into the active WSL repo only. No Liquid, CSS, theme push, Shopify Admin mutation, product mutation, publish, checkout/payment enablement, or `Supplier verified` change.

## 1. Pre-check

- `git status --short --branch`: `## master` with existing untracked `tools/catalogue/run-slice-21eg-product-media-audit.mjs`
- `artifacts/` ignore confirmed via `.gitignore:5`
- `tools/catalogue/` remains untracked
- Confirmed execution plan excluded theme push, Admin mutation, product mutation, publish, checkout/payment/customer-flow enablement, and `Supplier verified`

## 2. Active repo north-star files before import

| File | Size | Modified | SHA-256 |
| --- | ---: | --- | --- |
| `mzansi-select-theme.html` | 46,136 bytes | 2026-05-03 20:24 | `c4b815505facd4ba73b2d36121c47deba116a48f1a611f5c2e6b2e08ee35be1f` |
| `mzansi-select-mobile.html` | 53,557 bytes | 2026-05-09 23:17 | `a7cefdb0b06a67c0b5acf07e05e4dded7a55073046c817d7ce79a619a12307f7` |

## 3. Source file verification

Confirmed newer/different source pair at:

- `/mnt/d/dev/mzansi-select-shopify/mzansi-select-theme.html`
- `/mnt/d/dev/mzansi-select-shopify/mzansi-select-mobile.html`

Source details:

| File | Size | Modified | SHA-256 |
| --- | ---: | --- | --- |
| `/mnt/d/dev/mzansi-select-shopify/mzansi-select-theme.html` | 60,404 bytes | 2026-05-23 14:27 | `ffecc95f2ae50e30735d85e3b329fa57c44322dcdcfa3a6364e43a0a721db507` |
| `/mnt/d/dev/mzansi-select-shopify/mzansi-select-mobile.html` | 66,383 bytes | 2026-05-23 14:25 | `ce84c24d336a125847649d8f4740e52972eae48f9e3b90f7edef5b0eec6f9f94` |

Comparison result:

- Both source files were newer than the active repo copies
- Both source files had different SHA-256 hashes from the active repo copies
- No broader Windows search was required because the `/mnt/d` pair already met the Product Owner import condition

## 4. Backup and import

- Backup path created: `artifacts/north-star/slice-21fr-a/`
- Backed up current repo copies before import:
  - `artifacts/north-star/slice-21fr-a/mzansi-select-theme.html`
  - `artifacts/north-star/slice-21fr-a/mzansi-select-mobile.html`
- Imported only:
  - `mzansi-select-theme.html`
  - `mzansi-select-mobile.html`

## 5. Post-import verification

| File | Size | Modified | SHA-256 |
| --- | ---: | --- | --- |
| `mzansi-select-theme.html` | 60,404 bytes | 2026-05-23 14:27 | `ffecc95f2ae50e30735d85e3b329fa57c44322dcdcfa3a6364e43a0a721db507` |
| `mzansi-select-mobile.html` | 66,383 bytes | 2026-05-23 14:25 | `ce84c24d336a125847649d8f4740e52972eae48f9e3b90f7edef5b0eec6f9f94` |

Hash change confirmation:

- `mzansi-select-theme.html`: old `c4b815505facd4ba73b2d36121c47deba116a48f1a611f5c2e6b2e08ee35be1f` -> new `ffecc95f2ae50e30735d85e3b329fa57c44322dcdcfa3a6364e43a0a721db507`
- `mzansi-select-mobile.html`: old `a7cefdb0b06a67c0b5acf07e05e4dded7a55073046c817d7ce79a619a12307f7` -> new `ce84c24d336a125847649d8f4740e52972eae48f9e3b90f7edef5b0eec6f9f94`

Content confirmation:

- Desktop file includes `The Retro Vault`
- Desktop file includes `Consoles & Classics`
- Desktop file includes `Games & Toys`
- Mobile file includes `The Retro Vault`
- Mobile file includes `Consoles & Classics`
- Mobile file includes `Games & Toys`

## 6. Files changed in this slice

- `mzansi-select-theme.html`
- `mzansi-select-mobile.html`
- `docs/qa/slice-21fr-a-north-star-import.md`
- `docs/project-control.md`

## 7. Next step

- Proceed to **Slice 21FR** theme adoption using these imported north-star files as the active visual source of truth.
