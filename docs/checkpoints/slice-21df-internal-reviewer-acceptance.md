# Slice 21DF — internal reviewer acceptance checkpoint

**Document type:** Acceptance checkpoint (docs only)  
**Prepared:** 2026-05-21  
**Owner:** Product Owner  
**Slice:** **21DF**  
**Store:** `dropshippoc.myshopify.com`  
**Preview theme:** `151207542967` / Mzansi Select MVP Preview / **unpublished**  
**Live theme (unchanged):** `148914077879` / Horizon / **live**

## Checkpoint verdict

**PASS** — internal reviewers have **no further feedback pending** on the restricted preview experience covered by this checkpoint. The unpublished preview theme is **accepted for continued internal use only**. It remains **password-gated**, **non-purchasable**, and **not public launch-ready**. This checkpoint does **not** approve checkout, payment, customer accounts, product import/sync, app installs, Shopify Admin changes, or public launch.

## 1. Reviewer acceptance summary

All internal reviewers on the current restricted-preview pass are **satisfied** with the storefront polish and navigation experience on preview theme **`151207542967`**, subject to the blocked/deferred gates in §4.

| Review lane | Outcome | Closing evidence (committed / local) |
| --- | --- | --- |
| **Decorative north-star imagery** | **Accepted** | **Slice 21CP** rendered validation **PASS WITH NOTES**; **21CO** preview sync; harness **`tools/qa/run-slice-21cp-decorative-image-validation.mjs`** |
| **Mobile horizontal overflow / side-scroll** | **Accepted** | **Slice 21DC** fix (**`b5e02d5`**), **21DD** sync, **21CT** re-validation **PASS** (**`096f49d`**); probe **`tools/qa/run-slice-21dc-live-dom-overflow-probe.mjs`** (**`bb0c684`**) |
| **Topbar ticker** | **Accepted** | **Slice 21CR** / **21CS** implementation; **21CT** ticker + reduced-motion **PASS** |
| **Back-to-top** | **Accepted** | **Slice 21CR** / **21CS**; **21CT** visibility, clearance, click/focus **PASS** |
| **Broader restricted preview** | **Accepted with prior notes** | **Slice 21CJ** readiness; **21CK** walkthrough refresh; **21CL** full QA sweep **18/18 PASS** |

**Reviewer feedback status:** **none pending** — no open defects remain on the accepted capability set above.

## 2. Issues closed

### Decorative north-star images

- **Was:** broken decorative rasters on homepage hero, category strip, promo, and feature tiles.
- **Closed by:** **`snippets/decorative-image.liquid`**, local **`assets/*.jpg`**, **Slice 21CN** / **21CO** sync, **Slice 21CP** QA.
- **Current state:** decorative surfaces load on desktop and mobile; broken-image icons cleared for north-star fallbacks.

### Mobile horizontal overflow

- **Was:** homepage mobile **`documentElement 640 / 375`** with forced root side-scroll (~**265px**); **`body`** contained but page-level play failed.
- **Closed by:** **Slice 21DC** category-strip scrollport contract + topbar containment hardening; **Slice 21DD** **`assets/theme.css`** preview sync; **Slice 21CT** re-validation **375/375 PASS**.
- **Current state:** no page-level horizontal overflow on homepage, search, or controlled-pilot at **390×844**.

### Topbar ticker

- **Was:** reviewer expectation for north-star-style motion on mobile/narrow viewports with readable static desktop strip.
- **Closed by:** **Slice 21CR** ticker + **21CS** sync; containment slices **21CU**–**21DC** as needed.
- **Current state:** ticker animates on mobile/narrow; static strip on wide desktop; **`prefers-reduced-motion`** safe manual scroll inside bounded marquee.

### Back-to-top navigation

- **Was:** long-page return-to-top affordance above mobile bottom bar without hash-link shortcuts.
- **Closed by:** **`#backToTop`** in **`layout/theme.liquid`** + **Slice 21CR** CSS; validated in **21CT**.
- **Current state:** hidden at top, visible after scroll, does not overlap bottom bar, returns to **`#MainContent`**.

## 3. Current accepted preview state

| Item | Value |
| --- | --- |
| **Preview URL** | `https://dropshippoc.myshopify.com/?preview_theme_id=151207542967` |
| **Access** | Store password required — **internal reviewers only** |
| **Theme role** | **Unpublished** MVP preview — **not** live storefront |
| **Commerce posture** | Preview-safe copy; disabled purchase; no live checkout path |
| **Homepage** | North-star shell + decorative imagery + bounded mobile rails |
| **Search** | Preview-safe **`/search`** with live result cards (**21CB**) |
| **Controlled pilot** | Client-side fallback on **`/collections/controlled-pilot`** (**21CH**) — not a native live collection grid |
| **CJ PDPs** | Three controlled-pilot handles: placeholder price, disabled purchase, **no** supplier media on storefront |
| **QA harnesses (committed)** | **21CT** mobile UX; **21DC** overflow probe; **21CP** decorative; **21CL** sweep; route harnesses (**21CB**, **21CC**, **21BQ**, etc.) |

Rendered evidence folders remain **local** under **`artifacts/qa/`** — **not** committed.

## 4. Remaining blocked / deferred items

| Item | Status |
| --- | --- |
| Public launch / live theme publish | **BLOCKED** |
| Checkout / payment | **BLOCKED** |
| Cart (live add / checkout path) | **BLOCKED** |
| Customer accounts / order history | **BLOCKED** |
| Product import / sync | **BLOCKED** |
| App installs (CJ, DSers, EPROLO, etc.) | **BLOCKED** |
| Shopify Admin mutation (products, collections, shipping, markets) | **BLOCKED** unless a separate approved slice |
| Native **`controlled-pilot`** Shopify Admin collection route | **DEFERRED** |
| **`Supplier verified`** | **BLOCKED** |
| Final pricing / delivery / product claims | **BLOCKED** |
| Product / supplier media enablement on storefront | **BLOCKED** |
| Wishlist persistence | **DEFERRED** |
| Newsletter capture | **DEFERRED** |
| Legal/support placeholder publication | **DEFERRED** until public-launch preparation |

**Supplier posture (unchanged):** **CJdropshipping** primary for current controlled pilot; **DSers** secondary/benchmark; **Gadgetgyz** closed for current pilot; **EPROLO** watch-only; **ZA Dropshipping** inconclusive at product level.

## 5. Current reviewer PDF / ZIP location

| Asset | Location | Notes |
| --- | --- | --- |
| **Walkthrough markdown (source of truth in repo)** | `docs/user-guides/mzansi-select-restricted-preview-application-walkthrough.md` | Refreshed in **Slice 21CK** (v2.0 — search + controlled-pilot) |
| **Current walkthrough PDF (local export)** | `artifacts/docs/user-guides/mzansi-select-restricted-preview-application-walkthrough-current.pdf` | **Not committed** — regenerate from markdown when needed |
| **Current walkthrough ZIP (PDF only)** | `artifacts/docs/user-guides/mzansi-select-restricted-preview-application-walkthrough-current.zip` | **Not committed** |
| **Supporting reviewer material** | `docs/pilot/slice-21bb-restricted-preview-reviewer-pack.md`, `docs/pilot/slice-21bc-restricted-preview-feedback-template.md`, `docs/pilot/slice-21bd-restricted-preview-review-runbook.md` | Structured feedback capture; internal audience only |

Distribute PDF/ZIP only through approved internal channels. Do **not** embed passwords, tokens, cookies, or supplier credentials in shared packs.

## 6. Recommended next Product Owner options

| Option | Description | When to choose |
| --- | --- | --- |
| **Pause and preserve current preview** | Freeze theme/Admin scope; keep **`151207542967`** unpublished for reference | Lowest risk; no new execution |
| **Supplier proofing** | Resume CJ (or watch-only desk) closure gates — shipping, margin, sample quality, returns wording | When catalogue truth matters more than UX polish |
| **Native controlled-pilot Admin planning** | Plan Shopify Admin collection/publication slice for real **`/collections/controlled-pilot`** routing | When client-side **404** reveal is no longer acceptable |
| **Stakeholder pack** | Consolidate checkpoint + walkthrough PDF + risk register for leadership | When wider internal sign-off is needed beyond reviewers |
| **Launch-readiness planning later** | Separate programme for markets, payments, legal, media, and publish gates | **Only** after explicit launch approval — **not** implied here |

## 7. Recommended next step

**Option: Pause and preserve current preview** (default recommendation immediately after reviewer acceptance).

**Rationale:** All reviewer-facing UX blockers on the restricted preview are closed. Further theme or commerce work without a new approved slice risks reopening settled reviewer sign-off. Preserving the current unpublished preview keeps a stable internal reference while Product Owner selects supplier, Admin, or stakeholder workstreams deliberately.

**Secondary queue (when ready):** **Supplier proofing** or **stakeholder pack** — depending on whether the next priority is catalogue truth or leadership communication.

**Defer unless explicitly approved:** public launch, checkout/payment/customer enablement, import/sync, app install, and native Admin collection execution.

## 8. Acceptance statement

- **Internal restricted preview:** **ACCEPTED** for the capability set in §3, with **no pending reviewer feedback** on decorative imagery, mobile overflow, topbar ticker, or back-to-top behaviour.
- **Public launch readiness:** **NOT ACCEPTED** — password-gated preview only; commerce, supplier verification, media, and launch gates in §4 remain **blocked** or **deferred**.

## Strict confirmations (this slice)

- **Docs-only** — **no** theme edits, **no** Shopify Admin mutation, **no** publish, **no** preview-theme push, **no** product visibility/publication change, **no** checkout/payment/customer-order enablement, **no** product import/sync, **no** app install, **no** media enablement.
- **No** `artifacts/` or **`zadropshipping/`** committed.
- **No** passwords, tokens, cookies, customer data, order data, payment data, supplier credentials, or raw auth/session files stored in repo docs.

## Next owner

**Product Owner** — confirm strategic option from §6 (default: **pause and preserve**); record follow-on slice when scope is approved.
