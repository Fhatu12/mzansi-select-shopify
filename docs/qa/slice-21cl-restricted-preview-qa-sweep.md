# Slice 21CL — restricted preview end-to-end QA sweep

**Document type:** QA sweep report (read-only rendered validation)  
**Prepared:** 2026-05-20  
**Owner:** QA / Test Engineer  
**Preview theme:** `151207542967` / Mzansi Select MVP Preview / **unpublished** on `dropshippoc.myshopify.com`  
**Trigger:** **Slice 21CJ** Option B — full restricted-preview QA sweep before internal reviewer circulation (post-**21CK** walkthrough refresh).

## Executive verdict

**PASS WITH NOTES**

One authenticated sweep across homepage, navigation, search, controlled-pilot fallback, three CJ PDPs, safety regression, and walkthrough alignment. **Eighteen** check rows **PASS** on desktop **`1366x768`** and mobile **`390x844`**. Documentation alignment **PASS WITH NOTES** (preview-entry screenshot gap only). **No** commerce, Admin, publish, import, app, or media enablement occurred in this slice.

**Evidence (local; not committed):** `artifacts/qa/slice-21cl-restricted-preview-qa-sweep/2026-05-20-21-1/`

**Harness (local; not committed):** `tools/qa/run-slice-21cl-restricted-preview-qa-sweep.mjs` — single manual-unlock session.

## Sweep method

| Layer | Approach |
| --- | --- |
| Unlock | **`--manual-unlock`** — one Chromium session; **no** passwords stored |
| Viewports | Desktop **1366×768**, mobile **390×844** |
| Prior slice harnesses | Logic aligned with **21BQ** (nav), **21CB** (search), **21CH** (controlled-pilot), **21AR** class (PDP safety) |
| Walkthrough PDF | Compared against `artifacts/docs/user-guides/mzansi-select-restricted-preview-application-walkthrough-current.pdf` and v2.0 markdown source |

## 1. Homepage findings

| Viewport | Verdict | Observations |
| --- | --- | --- |
| Desktop | **PASS** | Hero, category strip, product rails, promo/trust/footer surfaces present; restricted-preview wording visible |
| Mobile | **PASS** | Same browse-first posture; layout readable |

**Screenshots:** `homepage-desktop.png`, `homepage-mobile.png`

## 2. Navigation findings

| Check | Desktop | Mobile |
| --- | --- | --- |
| Approved department quartet (live links) | **PASS** | **PASS** (drawer) |
| Deferred department posture | **PASS** | **PASS** |
| Route honesty (no misleading `/collections/all`) | **PASS** | **PASS** |
| Mobile drawer | n/a | **PASS** |
| Bottom bar / cart deferred | **PASS** | **PASS** |
| No active `href="#"` | **PASS** | **PASS** |

## 3. Search findings (**Slice 21CB** contract)

| Route | Desktop | Mobile | Detail |
| --- | --- | --- | --- |
| `organiser` query | **PASS** | **PASS** | **10** live `product-card--live` results; **no** static demo headphones/watch |
| Bare `/search` | **PASS** | **PASS** | **Start a preview search**; **0** cards |
| `zzzz-no-match-preview` | **PASS** | **PASS** | Honest empty; **0** cards |

**Screenshots:** `search-organiser-{desktop|mobile}.png`, `search-no-query-*.png`, `search-no-match-*.png`

## 4. Controlled-pilot findings (**Slice 21CH** contract)

| Check | Desktop | Mobile |
| --- | --- | --- |
| Client-side fallback reveal | **PASS** | **PASS** |
| Route notice + restricted preview + Admin deferral | **PASS** | **PASS** |
| Three CJ cards in grid | **PASS** (3) | **PASS** (3) |
| Recovery links (homepage + department quartet) | **PASS** | **PASS** |
| Generic 404 regression (`not-a-real-controlled-pilot`) | **PASS** | **PASS** — controlled shell **not** leaked |

**Screenshots:** `controlled-pilot-{desktop|mobile}.png`, `generic-404-regression-{desktop|mobile}.png`

## 5. PDP findings (three CJ pilot handles)

| Handle | Desktop | Mobile |
| --- | --- | --- |
| `beverage-bottle-oil-bottle-handle-holder` | **PASS** | **PASS** |
| `usb-bag-sealer` | **PASS** | **PASS** |
| `foldable-magnetic-phone-holder-desktop-tablet-stand` | **PASS** | **PASS** |

**Posture:** **Price to be confirmed** / non-purchasable copy present; **no** active Add to Cart or Buy Now; **no** active checkout/payment/customer links; placeholder gallery (no supplier media).

## 6. Documentation alignment

| Item | Verdict | Notes |
| --- | --- | --- |
| Walkthrough markdown v2.0 (**21CK**) | **PASS** | Search and controlled-pilot steps match rendered sweep |
| Walkthrough PDF (`…-current.pdf`) | **PASS WITH NOTES** | Embedded screenshots match **21CB**/**21CH** evidence class; **preview entry** step still lacks captured screenshot (documented in guide) |
| **21CJ** checkpoint claims | **PASS** | Accepted capability set validated in one sweep |

## 7. Safety findings

| Check | Result |
| --- | --- |
| No active Add to Cart / Buy Now | **PASS** |
| No active checkout / payment / customer routes | **PASS** |
| No active `href="#"` | **PASS** |
| Newsletter capture disabled | **PASS** |
| Cart / account chrome deferred | **PASS** |
| No Storefront API / cart API / checkout URL / Buy Button / Hydrogen / JS Buy SDK flows enabled | **PASS** (no new integration surfaces observed) |

## Residual risks (unchanged)

1. Preview remains **password-gated** — external reviewers need authorised access only.
2. **`/collections/controlled-pilot`** remains **HTTP 404** with **client-side** reveal — not a native Shopify collection grid.
3. **Supplier verified**, final pricing, delivery claims, and product media remain **blocked**.
4. **EPROLO** remains **watch-only**; **no** app install or import approved.
5. Walkthrough **preview entry** screenshot still outstanding.

## Strict confirmations

- **Read-only QA** — **no** theme edits, **no** Shopify Admin mutation, **no** publish, **no** preview-theme push, **no** product visibility change, **no** checkout/payment/customer-order enablement, **no** product import/sync, **no** app install, **no** media enablement.
- **`artifacts/`** not committed; **no** secrets, cookies, tokens, HAR, trace, video, or customer/order/payment data stored.

## Recommended next owner

**Product Owner** — accept **Slice 21CL** sweep for internal reviewer circulation of the **21CK** PDF/ZIP; choose follow-on from **21CJ** (**Option C** Admin collection planning, **Option D** supplier proofing, or **Option E** stakeholder pack) without enabling blocked commerce gates.
