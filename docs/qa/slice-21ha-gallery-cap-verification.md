# Slice 21HA — Reconcile 21GZ-C and Verify True PDP Gallery Media Cap

Date: 2026-05-28  
Executor: Codex (WSL source repo + Windows QA lane evidence reconciliation)  
Store: `sikhwarigroupdev.myshopify.com`  
Draft theme under test: `Mzansi Select MVP Restored #162429075681`  
Live theme unchanged: `Horizon #158396285153`

## Scope and Safety
- No publish.
- No password toggle change.
- No product or price changes.
- No app install.
- No checkout/payment enablement.
- No domain changes.
- No live Horizon changes.
- No dropshippoc targeting.
- No artifact/tooling commits.

## 1) 21GZ-C Reconciliation into WSL Source Repo
- Commit `5d2c667` check in WSL repo: **not present**.
- Source doc copied from Windows lane:  
  `D:\dev\mzansi-select-shopify-winqa\docs\qa\slice-21gz-c-public-rendered-draft-qa.md`  
  -> `docs/qa/slice-21gz-c-public-rendered-draft-qa.md`
- Only relevant tracker status was merged into `docs/project-control.md` for 21HA.
- No unrelated files imported.

## 2) True Gallery Cap Verification Method
21GZ-C observed raw rendered gallery/media count of **6** on each tested PDP and marked FAIL.  
21HA verifies whether this is true unique media overflow or selector over-counting.

Verification basis:
- Existing 21GZ-C rendered probe output (`6` raw rendered items on each of 5 valid PDPs).
- Theme implementation audit in `sections/main-product-foundation.liquid`:
  - `gallery_media_limit = 5`
  - `gallery_media = product.media | slice: 0, gallery_media_limit`
  - Main image uses one `current_media` from `gallery_media`
  - Thumbnails iterate over the same capped `gallery_media` set
- Gallery behaviour in `assets/product-gallery.js` confirms the main image swaps to selected thumb media source, not a separate uncapped source.

## 3) Counts and Interpretation (5 PDP sample set)
- Unique main/gallery media source set (capped source): **5 max**
- Thumbnail count: **5**
- Duplicate main+thumbnail relationship: **Yes** (active main image also exists in thumbnail set)
- Raw rendered image element count: **6**

Raw `6` is explained by:
- `1` main gallery image element
- `5` thumbnail image elements
- main element represents one item already present in thumbnails, so raw DOM elements exceed unique media by one.

## 4) 21HA Result
- Prior 21GZ-C FAIL condition is a **false-positive selector count**.
- True unique media cap condition (`<=5`) is satisfied by current draft theme implementation.
- **No gallery cap fix required.**
- **No theme files changed.**
- **No draft theme push performed.**

## 5) Launch-Critical Safety Reconfirmation
From 21GZ-C rendered QA (still valid, unchanged by 21HA):
- PDP usability: **PASS**
- Spinner/navigation/back: **PASS**
- No Add to Cart: **PASS**
- No `/cart/add`: **PASS**
- No quick-add: **PASS**
- No dynamic checkout: **PASS**
- No checkout/payment path: **PASS**
- No `Supplier verified`: **PASS**
- No newsletter capture: **PASS**
- No Liquid errors: **PASS**

## 6) Publish Recommendation
- **Fix first:** No (gallery cap fix not required).
- **Publish recommendation:** **Can proceed to next publish gate decision from a gallery-cap perspective only**; keep all existing non-gallery launch gates and approvals in force.
