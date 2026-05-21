# Slice 21DQ — two CJ PDP rendered validation (post-21DP)

**Document type:** QA validation report (read-only rendered)  
**Prepared:** 2026-05-21  
**Owner:** QA / Test Engineer  
**Slice:** **21DQ**  
**Store:** `dropshippoc.myshopify.com`  
**Preview theme:** `151207542967` / Mzansi Select MVP Preview / **unpublished**

**Upstream:** **Slice 21DP** Admin hygiene (**`a6f3fcc`**) — SEO meta description only; no rollback.

**Unlock:** **`--manual-unlock`** (single Chromium session). **No** passwords, cookies, tokens, HAR, trace, or video stored.

---

## 1. Executive verdict

**PASS WITH NOTES**

Rendered PDP validation on both in-scope handles confirms preview-safe posture after **21DP**. **No** commerce regression, **no** supplier media, **no** active purchase controls, and **no** final claim drift detected on visible PDP surfaces. **Search** and **controlled-pilot** desktop regression checks **PASS**.

**Note:** First desktop load for **`beverage-bottle-oil-bottle-handle-holder`** returned transient **HTTP 503** while visible content still rendered preview-safe; mobile reload **PASS** with **HTTP 200**. **21DP** SEO meta description change is **not** visible on PDP body (expected — Admin SEO field only).

**Evidence (local; not committed):** `artifacts/qa/slice-21dq-two-cj-pdp-validation/2026-05-21-132203/`

**Harness (local; not committed):** `tools/qa/run-slice-21dq-two-cj-pdp-validation.mjs`

---

## 2. Validation scope

| URL | Launch ID |
| --- | --- |
| `/products/beverage-bottle-oil-bottle-handle-holder?preview_theme_id=151207542967` | **DG-KS-01** |
| `/products/foldable-magnetic-phone-holder-desktop-tablet-stand?preview_theme_id=151207542967` | **DG-OD-01** |

| Viewport | Size |
| --- | --- |
| Desktop | **1366×768** |
| Mobile | **390×844** |

---

## 3. Checklist results

| # | Check | **DG-KS-01** desktop | **DG-KS-01** mobile | **DG-OD-01** desktop | **DG-OD-01** mobile |
| --- | --- | --- | --- | --- | --- |
| 1 | PDP loads after unlock | **PASS WITH NOTES** (503 then renders) | **PASS** | **PASS** | **PASS** |
| 2 | Title/body preview-safe | **PASS** | **PASS** | **PASS** | **PASS** |
| 3 | No **Supplier verified** | **PASS** | **PASS** | **PASS** | **PASS** |
| 4 | No Add to Cart | **PASS** | **PASS** | **PASS** | **PASS** |
| 5 | No Buy Now | **PASS** | **PASS** | **PASS** | **PASS** |
| 6 | No checkout/payment/customer route | **PASS** | **PASS** | **PASS** | **PASS** |
| 7 | Price-to-confirm / non-purchasable clear | **PASS** | **PASS** | **PASS** | **PASS** |
| 8 | No final delivery promise | **PASS** | **PASS** | **PASS** | **PASS** |
| 9 | No warranty/stock guarantee | **PASS** | **PASS** | **PASS** | **PASS** |
| 10 | No supplier media | **PASS** | **PASS** | **PASS** | **PASS** |
| 11 | Placeholder/generic visual posture | **PASS** | **PASS** | **PASS** | **PASS** |
| 12 | No visibility widening | **PASS** | **PASS** | **PASS** | **PASS** |
| 13 | Mobile layout acceptable | n/a | **PASS** | n/a | **PASS** |
| 14 | Desktop layout acceptable | **PASS** | n/a | **PASS** | n/a |

---

## 4. Desktop PDP findings

### **DG-KS-01** — `beverage-bottle-oil-bottle-handle-holder`

| Observation | Result |
| --- | --- |
| **HTTP** | **503** on first navigation; page still showed controlled-pilot preview shell |
| **Title** | Beverage & Oil Bottle Handle Holder — preview-safe |
| **Price** | **Price to be confirmed** |
| **Pilot banners** | Controlled pilot preview; not available for purchase |
| **Commerce** | **No** active Add to Cart / Buy Now |
| **Media** | Broken-image placeholder icon only (**0** supplier photos) |
| **Layout** | Readable; no horizontal overflow |

**Screenshot:** `screenshots/pdp-beverage-bottle-oil-bott-desktop.png`

### **DG-OD-01** — `foldable-magnetic-phone-holder-desktop-tablet-stand`

| Observation | Result |
| --- | --- |
| **HTTP** | **200** |
| **Title** | Foldable Magnetic Phone Holder & Desktop Tablet Stand — preview-safe |
| **Price** | **Price to be confirmed** |
| **Commerce / media** | Same safe posture as **DG-KS-01** |

**Screenshot:** `screenshots/pdp-foldable-magnetic-phone--desktop.png`

---

## 5. Mobile PDP findings

Both handles **PASS** at **390×844**:

- Controlled-pilot preview badges visible  
- **Price to be confirmed** and non-purchasable copy present  
- **No** purchase buttons  
- Placeholder gallery only  
- **No** root horizontal overflow on PDP  

**Screenshots:** `screenshots/pdp-beverage-bottle-oil-bott-mobile.png`, `screenshots/pdp-foldable-magnetic-phone--mobile.png`

---

## 6. Commerce safety findings

| Control | Result |
| --- | --- |
| Active **Add to Cart** / **Buy Now** | **None** on PDP or regression routes |
| Active checkout / payment / customer links | **None** |
| Hash-only dead commerce links | **None** |
| Cart icon | Present in header chrome only — **no** PDP purchase path enabled |

---

## 7. Claim / media safety findings

| Control | Result |
| --- | --- |
| **Supplier verified** label | **Not** shown |
| Final numeric delivery window on PDP body | **Not** shown (deferral: “will be confirmed before launch/fulfilment”) |
| Warranty **guarantee** | **Not** shown — deferred handling copy only |
| In-stock guarantee | **Not** shown |
| Blocked performance claims (**§4.1** / **§4.3**) | **Not** detected in product description scrape |
| Supplier catalogue media | **0** — placeholder/broken-image posture only |

**21DP impact:** SEO meta description-only change does **not** alter visible PDP title/body; no claim regression attributable to Admin hygiene.

---

## 8. Regression checks (desktop)

| Route | Verdict | Detail |
| --- | --- | --- |
| **Search** `?q=organiser&type=product` | **PASS** | **10** live preview cards; **no** active purchase on results |
| **Controlled-pilot** collection fallback | **PASS** | Client-side reveal; **3** CJ cards; recovery links present |

**Screenshots:** `search-organiser-desktop.png`, `controlled-pilot-desktop.png`

---

## 9. Regressions

| Item | Severity | Action |
| --- | --- | --- |
| Transient **503** on first **DG-KS-01** desktop navigation | **Informational** | Re-test if intermittent; mobile **200** **PASS** |
| None blocking preview safety | — | — |

**No rollback** required from QA perspective.

---

## 10. Strict confirmations (this slice)

- **Read-only** rendered validation — **no** theme edit, theme push, Admin mutation, publish, import/sync, or app install.
- **No** `artifacts/` or credentials committed.
- **No** passwords, cookies, tokens, HAR, trace, video, customer/order/payment data, or supplier credentials in repo docs.

---

## Next owner

**Product Owner** — accept **21DQ** and decide whether to pause, continue supplier proof (**21DK** calculator), or plan next bounded pilot step. **No** further QA required for **21DP** SEO-only hygiene unless Admin copy changes again.
