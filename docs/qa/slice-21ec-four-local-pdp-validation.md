# Slice 21EC — four local-first PDP rendered validation (post-21EB)

**Document type:** QA validation report (read-only rendered)  
**Prepared:** 2026-05-21  
**Owner:** QA / Test Engineer  
**Slice:** **21EC**  
**Store:** `dropshippoc.myshopify.com`  
**Preview theme:** `151207542967` / Mzansi Select MVP Preview / **unpublished**

**Upstream:** **Slice 21EB** Admin execution (`83daf45`) — **PASS WITH NOTES**; **no** rollback.

**Unlock:** **`--manual-unlock`** (single Chromium session). **No** passwords, cookies, tokens, HAR, trace, or video stored.

---

## 1. Executive verdict

**PASS WITH NOTES**

Rendered validation confirms **three of four** in-scope local-first PDPs are preview-safe on theme **`151207542967`** at desktop **1366×768** and mobile **390×844**. **DW-HL-02** (`five-division-drawer-divider-preview`) returns **HTTP 404** on the preview storefront — Admin read-back shows **no** **Online Store** publication (empty `resourcePublicationsV2`). **DevOps follow-up** required before that PDP can be treated as validated.

**Regression:** Homepage, search, **controlled-pilot** fallback, and **two** **CJ** PDP spot-checks **PASS**. **No** purchase-path regression detected on routes exercised.

**Evidence (local; not committed):** `artifacts/qa/slice-21ec-four-local-pdp-validation/2026-05-21-184318/`

**Harness (local; not committed):** `tools/qa/run-slice-21ec-four-local-pdp-validation.mjs`

---

## 2. Validation scope

| URL | Launch ID |
| --- | --- |
| `/products/cable-tidies-set?preview_theme_id=151207542967` | **DW-TA-01** |
| `/products/five-division-drawer-divider-preview?preview_theme_id=151207542967` | **DW-HL-02** |
| `/products/compact-cutlery-drawer-organiser-preview?preview_theme_id=151207542967` | **DW-KS-04** |
| `/products/adjustable-aluminium-phone-tablet-stand-preview?preview_theme_id=151207542967` | **DW-OD-05** |

| Viewport | Size |
| --- | --- |
| Desktop | **1366×768** |
| Mobile | **390×844** |

---

## 3. Checklist results (in-scope local PDPs)

| # | Check | **DW-TA-01** | **DW-HL-02** | **DW-KS-04** | **DW-OD-05** |
| --- | --- | --- | --- | --- | --- |
| 1 | PDP loads after unlock | **PASS** | **FAIL** (404) | **PASS** | **PASS** |
| 2 | Title/body preview-safe | **PASS** | **FAIL** (404 shell) | **PASS** | **PASS** |
| 3 | Not available to buy yet | **PASS** | n/a (404) | **PASS** | **PASS** |
| 4 | Price-to-confirm / non-misleading | **PASS** | n/a | **PASS** | **PASS** |
| 5 | No **Supplier verified** | **PASS** | **PASS** (404) | **PASS** | **PASS** |
| 6 | No Add to Cart | **PASS** | **PASS** | **PASS** | **PASS** |
| 7 | No Buy Now | **PASS** | **PASS** | **PASS** | **PASS** |
| 8 | No checkout/payment/customer route | **PASS** | **PASS** | **PASS** | **PASS** |
| 9 | No final delivery promise | **PASS** | n/a | **PASS** | **PASS** |
| 10 | No stock/warranty guarantee | **PASS** | n/a | **PASS** | **PASS** |
| 11 | No supplier media | **PASS** | **PASS** | **PASS** | **PASS** |
| 12 | Placeholder visual posture | **PASS** | n/a | **PASS** | **PASS** |
| 13 | Safe tags/posture visible | **PASS** | n/a | **PASS** | **PASS** |
| 14 | Mobile layout acceptable | **PASS** | **FAIL** (404) | **PASS** | **PASS** |
| 15 | Desktop layout acceptable | **PASS** | **FAIL** (404) | **PASS** | **PASS** |
| 16 | No mobile horizontal overflow | **PASS** | **PASS** (404 page) | **PASS** | **PASS** |

---

## 4. Desktop PDP findings

### **DW-TA-01** — `cable-tidies-set` — **PASS**

| Observation | Result |
| --- | --- |
| **HTTP** | **200** |
| **Title** | Cable Tidies Set (100 pcs) — Preview |
| **Price** | **Price to be confirmed** |
| **Pilot / preview** | Controlled pilot preview; not yet available for purchase |
| **Commerce** | **No** active Add to Cart / Buy Now |
| **Media** | Placeholder / **0** supplier photos |
| **Layout** | No horizontal overflow |

**Screenshot:** `screenshots/pdp-cable-tidies-set-desktop.png`

### **DW-HL-02** — `five-division-drawer-divider-preview` — **FAIL** (storefront)

| Observation | Result |
| --- | --- |
| **HTTP** | **404** |
| **Visible page** | Theme **404 PREVIEW** foundation — not product PDP |
| **Root cause (Admin read-back)** | Product **ACTIVE** in Admin but **`resourcePublicationsV2` empty** — **not** published to **Online Store** (unlike the other three net-new rows) |
| **Commerce on 404** | **No** purchase path on error page |

**Screenshot:** `screenshots/pdp-five-division-drawer-divider-desktop.png`

### **DW-KS-04** — `compact-cutlery-drawer-organiser-preview` — **PASS**

| Observation | Result |
| --- | --- |
| **HTTP** | **200** |
| **Title** | Compact Cutlery Drawer Organiser — Preview |
| **Price / purchase** | Price to be confirmed; not yet available for purchase |
| **Media / commerce** | Same safe posture as **DW-TA-01** |

**Screenshot:** `screenshots/pdp-compact-cutlery-drawer-organ-desktop.png`

### **DW-OD-05** — `adjustable-aluminium-phone-tablet-stand-preview` — **PASS**

| Observation | Result |
| --- | --- |
| **HTTP** | **200** |
| **Title** | Adjustable Aluminium Phone & Tablet Stand — Preview |
| **Price / purchase** | Price to be confirmed; not yet available for purchase |
| **Media / commerce** | Placeholder only; **no** purchase controls |

**Screenshot:** `screenshots/pdp-adjustable-aluminium-phone-t-desktop.png`

---

## 5. Mobile PDP findings

| Handle | Verdict | Notes |
| --- | --- | --- |
| **cable-tidies-set** | **PASS** | Preview-safe copy; **no** overflow; **no** purchase buttons |
| **five-division-drawer-divider-preview** | **FAIL** | **404** — same as desktop |
| **compact-cutlery-drawer-organiser-preview** | **PASS** | Full preview PDP shell |
| **adjustable-aluminium-phone-tablet-stand-preview** | **PASS** | Full preview PDP shell |

**Screenshots:** `screenshots/pdp-*-mobile.png` (per handle)

---

## 6. Commerce safety findings

| Control | Result |
| --- | --- |
| Active **Add to Cart** / **Buy Now** on validated PDPs | **None** on **200** PDPs |
| Active checkout / payment / customer links | **None** on routes checked |
| **404** route commerce | **No** purchase enablement on static 404 |
| Cart icon in header | Present as chrome only — **no** PDP purchase path on **200** PDPs |

---

## 7. Claim / media safety findings

| Control | Result |
| --- | --- |
| **Supplier verified** label | **Not** shown on **200** PDPs |
| Final numeric delivery guarantee on visible PDP body | **Not** shown — deferral wording used |
| Stock / warranty guarantee on PDP | **Not** shown — deferred handling copy on theme shell |
| Blocked superlatives in product description scrape | **Not** detected on **200** PDPs |
| Supplier catalogue media | **0** on all **200** PDPs — placeholder posture |

**Theme note:** Visible PDP body on **200** responses shows theme **controlled-pilot** preview shell copy (delivery “will be confirmed before launch”) in addition to **21EB** Admin HTML — consistent with existing preview programme behaviour.

---

## 8. Regression findings (desktop)

| Route | Verdict | Detail |
| --- | --- | --- |
| **Homepage** `/?preview_theme_id=…` | **PASS** | Loads; **no** active purchase on page |
| **Search** `?q=cable&type=product` | **PASS** | **2** live cards; **no** active purchase |
| **Search** `?q=organiser&type=product` | **PASS** | **10** live cards; **no** active purchase |
| **Controlled-pilot** collection fallback | **PASS** | Client reveal; **3** CJ cards |
| **CJ** `beverage-bottle-oil-bottle-handle-holder` | **PASS** | Non-purchasable preview posture unchanged |
| **CJ** `foldable-magnetic-phone-holder-desktop-tablet-stand` | **PASS** | Non-purchasable preview posture unchanged |

**Screenshots:** `homepage-desktop.png`, `search-cable-desktop.png`, `search-organiser-desktop.png`, `controlled-pilot-desktop.png`, CJ PDP desktop shots

---

## 9. Regressions and follow-up

| Item | Severity | Owner / action |
| --- | --- | --- |
| **DW-HL-02** preview PDP **404** — missing **Online Store** publication | **High** | **DevOps** — run `publishablePublish` (or equivalent) for `five-division-drawer-divider-preview`; re-run **21EC** PDP checks for that handle only |
| **21EB** execution note claimed Online Store publish for **DW-HL-02** | **Documentation drift** | Align **21EB** evidence with Admin read-back after fix |
| Other three local PDPs | — | **No** QA rollback recommended |

**No rollback** of **21EB** writes recommended from QA alone — fix publication for **DW-HL-02** only.

---

## 10. Admin publication cross-check (read-only; QA slice)

| Handle | **Online Store** published? |
| --- | --- |
| `cable-tidies-set` | **Yes** |
| `compact-cutlery-drawer-organiser-preview` | **Yes** |
| `adjustable-aluminium-phone-tablet-stand-preview` | **Yes** |
| `five-division-drawer-divider-preview` | **No** (empty publications) |

---

## 11. Strict confirmations (this slice)

- **Read-only** rendered validation — **no** theme edit, theme push, Admin mutation, publish, import/sync, or app install.
- **No** `artifacts/` or credentials committed.
- **No** passwords, cookies, tokens, HAR, trace, video, customer/order/payment data, or supplier credentials in repo docs.

---

## Next owner

**DevOps / Platform Engineer** — publish **`five-division-drawer-divider-preview`** to **Online Store** (password-gated preview posture only); then **QA** re-check **DW-HL-02** PDP only.

After **DW-HL-02** storefront **PASS**, **Product Owner** may accept **21EC** and the four-product local starter preview set.
