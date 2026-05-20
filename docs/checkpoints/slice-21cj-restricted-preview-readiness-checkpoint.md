# Slice 21CJ — restricted preview readiness checkpoint

**Document type:** Readiness checkpoint (docs only)  
**Prepared:** 2026-05-20  
**Owner:** Product Owner  
**Slice:** **21CJ**  
**Store:** `dropshippoc.myshopify.com`  
**Preview theme:** `151207542967` / Mzansi Select MVP Preview / **unpublished**  
**Live theme (unchanged):** `148914077879` / Horizon / **live**

## Checkpoint verdict

**PASS WITH NOTES** — restricted preview is **ready for continued internal review** on the accepted capability set below. The preview remains **password-gated**, **non-purchasable**, and **not launch-ready**. No new commerce, Admin, import, app, or publish enablement is implied by this checkpoint.

## 1. Accepted preview capabilities

| Capability | Status | Basis |
| --- | --- | --- |
| **Homepage** | **Accepted** | **Slice 21BI** north-star parity shell (**`7f64c2f`**) + **Slice 21BO** content parity (**`b6b744a`**) + preview sync chain (**21BK** / **21BM** class) |
| **Department links** | **Accepted** | **Slice 21BQ** route honesty (**`422344e`**) + **Slice 21BR** preview sync + rendered QA **PASS WITH NOTES** |
| **Search** | **Accepted** | **Slice 21CB** preview-safe search (**`ab1de73`**) + **Slice 21CD** sync + rendered QA **PASS** |
| **Controlled-pilot fallback** | **Accepted** | **Slice 21CH** client-side reveal (**`e8e4ff8`**) + **Slice 21CI** sync (**`b3a8f44`**) + rendered QA **PASS WITH NOTES** |
| **PDP preview posture** | **Accepted with notes** | Three CJ controlled-pilot PDPs: placeholder price, disabled purchase, no supplier media — **Slice 21AR** authenticated evidence chain + **21CA** audit |
| **Reviewer walkthrough** | **Accepted with notes** | **Slice 21BU** markdown guide (**`94d589f`**); **Slice 21BW** walkthrough PDF with screenshots **accepted by Product Owner** — PDF/screenshots may lag latest search and controlled-pilot state (see risks) |

### Controlled-pilot behaviour (accepted contract)

- Route: `/collections/controlled-pilot` on preview theme **`151207542967`**
- Shopify still returns **HTTP 404**; theme shows **client-side reveal** of controlled-pilot fallback (not a native live collection grid)
- Three approved CJ handles render as live preview-safe cards with **View product** only
- Generic unrelated **404** routes do **not** show the controlled-pilot shell

### Search behaviour (accepted contract)

- `/search` honours query terms, renders **`search.results`** via **`live-product-card`**, and shows honest empty / start-search states
- No static unrelated demo product grid for real queries such as **`organiser`**

## 2. Remaining blocked / deferred items

| Item | Status |
| --- | --- |
| Checkout / payment | **BLOCKED** |
| Cart (live add / checkout path) | **BLOCKED** |
| Customer accounts | **BLOCKED** |
| Wishlist persistence | **DEFERRED** |
| Newsletter capture | **DEFERRED** |
| Native **`controlled-pilot`** Shopify Admin collection route | **DEFERRED** — requires separate approved Admin publication slice |
| Product import / sync | **BLOCKED** |
| App installs (CJ, DSers, EPROLO, etc.) | **BLOCKED** |
| Public launch / live theme publish | **BLOCKED** |
| **`Supplier verified`** | **BLOCKED** |
| Final pricing / delivery / product claims | **BLOCKED** |
| Product / supplier media enablement on storefront | **BLOCKED** (CJ pilot rows remain media count **0**) |

## 3. Current supplier state

| Route | Role | Notes |
| --- | --- | --- |
| **CJdropshipping** | **Primary** international route for current controlled pilot | Accepted **South Africa** desk interpretation on forward subset (**Slice 21AB**); **3** CJ SKUs staged / publish-for-preview chain (**21AR** class); long-delivery imported-supplier posture only |
| **DSers** | **Secondary / benchmark** | **Slice 21X** stack; no new install or sync approved |
| **EPROLO** | **Watch-only** | **Slice 21BX** assessment + **Slice 21BY** manual shortlist — **no** app install, **no** product import; **no** ZA price/shipping proof captured; **do not** replace CJ execution path |
| **Gadgetgyz** | **Closed** for current pilot | **Slice 21W-B** route closure accepted |
| **ZA Dropshipping** | **Inconclusive** at product level | **Slice 13N** — not a current execution path |

## 4. Evidence summary

Evidence folders are **local only** under **`artifacts/`** — **not** copied into this checkpoint.

| Slice | Verdict | Commit (where recorded) | Evidence path (local) |
| --- | --- | --- | --- |
| **21BI** | PASS WITH NOTES | `7f64c2f` | Prior **21BJ** / **21BM** homepage rendered chains |
| **21BO** | PASS WITH NOTES | `b6b744a` | Composed with **21BI** homepage evidence |
| **21BQ** | PASS WITH NOTES (PO accepted) | `422344e` | `artifacts/qa/slice-21bq-route-honesty-validation/2026-05-20-141950/` |
| **21CB** | PASS | `ab1de73` | `artifacts/qa/slice-21cb-search-rendered-validation/2026-05-20-19-1/` |
| **21CH** | PASS WITH NOTES | `e8e4ff8` (impl), `b3a8f44` (sync) | `artifacts/qa/slice-21ch-controlled-pilot-rendered-validation/2026-05-20-20-5/` |
| **21CA** | PASS WITH NOTES (read-only audit) | `9eb56a4` | `artifacts/qa/slice-21ca-route-readiness-audit/2026-05-20-route-readiness-passive/` |
| **21BU / 21BW** | PASS WITH NOTES / PO accepted PDF | `94d589f` (guide) | Walkthrough source: `docs/user-guides/mzansi-select-restricted-preview-application-walkthrough.md` |

**QA harnesses committed for reruns:**

- `tools/qa/run-slice-21bq-route-honesty-validation.mjs`
- `tools/qa/run-slice-21cb-search-rendered-validation.mjs`
- `tools/qa/run-slice-21cc-controlled-pilot-rendered-validation.mjs` (**`e1820fd`**)

## 5. Top remaining risks

1. **Password-gated preview** — all rendered validation depends on authorised internal access; passive checks remain inconclusive without unlock.
2. **No native `controlled-pilot` collection route** — reviewers still hit **404** handling; clarity depends on **client-side** reveal, not Shopify collection grid semantics.
3. **Limited supplier / pricing / delivery proof** — CJ pilot SKUs remain **`Supplier proof in progress`**, placeholder pricing, zero inventory, **non-purchasable**, and **no** accepted supplier media on storefront.
4. **Client-side fallback dependency** — controlled-pilot UX requires inline script path match; unrelated **404** regression must stay guarded (validated in **21CH** QA).
5. **Walkthrough PDF / screenshot drift** — **21BU** guide and **21BW** PDF still lean on pre-**21CB** / pre-**21CH** homepage screenshot references in places; search and controlled-pilot steps need reviewer-facing refresh.
6. **Department catalogue mixing** — legacy **Slice 13I** preview SKUs may still appear in department collections alongside CJ pilot scope (**21CA** note).

## 6. Product Owner decision options

| Option | Description |
| --- | --- |
| **A** | Update walkthrough PDF and screenshots after final search + controlled-pilot route state |
| **B** | Run a full end-to-end restricted-preview QA sweep (homepage → departments → search → controlled-pilot → CJ PDPs) |
| **C** | Plan native **`controlled-pilot`** Shopify Admin collection work (publication / routing slice) |
| **D** | Resume supplier proofing (CJ closure gates, EPROLO watch-only desk capture, or **13I** legacy SKU decisions) |
| **E** | Prepare stakeholder review pack (checkpoint summary + refreshed walkthrough + risk register) |

## 7. Recommended next step

**Option A — update walkthrough PDF and screenshots** (safest immediate step).

**Rationale:** Search (**21CB**) and controlled-pilot fallback (**21CH**) are now rendered-validated on the preview theme, but the accepted walkthrough material still reflects older homepage-only screenshot references and “to be confirmed” search language. Refreshing reviewer-facing docs/PDF is **docs-only**, avoids Admin/theme/commerce enablement, closes the highest reviewer-misdirection risk, and prepares the ground for **Option B** or **Option E** without widening scope.

**Secondary queue (after A):** **Option B** — single authenticated QA sweep using committed harnesses — to produce one consolidated evidence folder for stakeholder sign-off.

**Defer unless explicitly approved:** **Option C** (Admin collection), **D** (supplier proof expansion), and any checkout/cart/customer/import/app work.

## Strict confirmations (this slice)

- **Docs-only** — **no** theme edits, **no** Shopify Admin mutation, **no** publish, **no** preview-theme push, **no** product visibility/publication change, **no** checkout/payment/customer-order enablement, **no** product import/sync, **no** app install, **no** media enablement.
- **No** `artifacts/` or **`zadropshipping/`** committed.
- **No** passwords, tokens, cookies, customer data, order data, payment data, supplier credentials, or raw auth/session files stored in repo docs.

## Next owner

**Product Owner** — confirm **Option A** (recommended) or select another option from §6; then **Technical Documentation Specialist** if PDF export is approved.
