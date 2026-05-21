# Slice 21DH — top-8 launch-candidate shipping and landed-cost proof gate

**Document type:** Shipping and landed-cost proof gate (docs only)  
**Prepared:** 2026-05-20  
**Owner:** Product Manager  
**Slice:** **21DH**  
**Product Owner decision:** **Option A approved** — authenticated **South Africa** shipping and landed-cost refresh for the **top 8** only (**Slice 21DG**).  
**Context:** Internal restricted preview **accepted** (**Slice 21DF**). **Not** public launch, import/sync, app install, Admin mutation, **`Supplier verified`**, or staging approval.

**Read-first:** `docs/project-control.md`; `docs/suppliers/slice-21dg-launch-candidate-product-proofing.md`; `docs/checkpoints/slice-21df-internal-reviewer-acceptance.md`; `docs/project-control.md` **`## Slice 21AB`**; `docs/suppliers/slice-21by-eprolo-manual-sku-shortlist.md`

**Evidence rule:** Sanitized calculator captures, supplier desk pages, and quotes live **only** under **`artifacts/suppliers/slice-21dh/`** (local; **not** committed). **No** screenshots, account pages, or credentials in this repo.

**Unverified rule:** Supplier marketing, platform badges, and cross-slice desk figures remain **unverified** until backed by a **SKU-level** capture with date, variant, destination (**South Africa**), and currency noted below.

---

## 1. Executive verdict

**Verdict:** **INCONCLUSIVE / PASS WITH NOTES** — the proof gate **closes partially**. **Two** of **eight** SKUs inherit **authenticated** **CJ** **South Africa** calculator proof from **Slice 21AB** (**2026-05-14**). **Three** local-desk SKUs have **product unit cost** only — **shipping cost not captured** → **watch**. **Three** category-fill SKUs have **no locked supplier SKU** and **no** **ZA** calculator run → **proof blocked**.

**Summary:**

| Outcome | Count | IDs |
| --- | --- | --- |
| **proof passed with notes** | **2** | **DG-KS-01**, **DG-OD-01** |
| **watch** | **3** | **DG-KS-03**, **DG-TA-01**, **DG-OD-02** |
| **proof blocked** | **3** | **DG-HL-01**, **DG-OD-03**, **DG-TA-03** |
| **proof passed** (fresh **21DH** capture on active working copy) | **0** | — |

**Operator note:** At slice documentation time, **`artifacts/suppliers/slice-21dh/`** was **not** populated on the active Ubuntu-Dev working copy. **CJ** rows rely on **documented** **21AB** interpretation; **local** rows rely on **13N** / **13O** / **20F** public desk signals. A **bounded operator refresh** (manual browser login; per-SKU folders under **`artifacts/suppliers/slice-21dh/<candidate-id>/`**) remains **recommended** before any staging-plan approval.

**Strict posture preserved:** **no** import/sync; **no** app install; **no** Admin mutation; **no** publish; **no** checkout/payment/customer access; **no** **`Supplier verified`**; **no** final customer-facing price or delivery promise.

---

## 2. Top-8 proof table

| # | ID | Product | Route | Supplier ref | Variant tested | Unit cost | Ship method → **ZA** | Ship cost | Delivery est. | Landed est. | Currency | Captured | Source | Evidence (local) | Return note | Claim risk | Media risk | Sell band | Margin est. | Rec. |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | **DG-KS-03** | Stainless sink strainer | **Ecomstock** benchmark | **P5260S** | Desk default variant (**unverified**) | **~R30** (**13N**, public desk) | **Not captured** — local courier/checkout **TBD** | **Not captured** | **Not captured** | **~R30–R45** product only (**unverified**) | **ZAR** | **13N** era; **21DH** **not** refreshed | **public desk source** | `artifacts/suppliers/slice-21dh/DG-KS-03/` — **empty** | **14-day** signal on desk (**unverified** per order) | **Low** | **Not assessed** | **R79–R99** (planning) | **~62–70%** product-only vs **R79/R99** (**blocked** until ship) | **watch** |
| 2 | **DG-TA-01** | Cable tidies set (100 pcs) | **Gadgetgyz** local | **PCB-CT-25150** / **`cable-tidies-set`** | Black / 100 pcs (**13O**) | **R20.90** (**13O**, public desk) | **Assumed** local SA dispatch — **fee not captured** | **Not captured** | **Not captured** | **~R35–R50** desk (**unverified**) | **ZAR** | **13O**; **21DH** **not** refreshed | **public desk source** | `artifacts/suppliers/slice-21dh/DG-TA-01/` — **empty** | Gadgetgyz standard terms — **unverified** | **Low** | **13O** exact-item proof; image PO **open** | **R79–R99** | **Strong** **if** ship **≤R30** | **watch** |
| 3 | **DG-OD-02** | Acrylic tablet & phone stand | **Gadgetgyz** local | **DP0402** / **`acrylic-tablet-phone-stand`** | Default (**20F**) | **~R158.89** visible (**20F**, **unverified** live) | **Assumed** local SA — **fee not captured** | **Not captured** | **Not captured** | **~R248+** desk (**R159** + **~R89** pilot signal **unverified**) | **ZAR** | **20F**; **21DH** **not** refreshed | **public desk source** | `artifacts/suppliers/slice-21dh/DG-OD-02/` — **empty** | Returns wording **non-final** | **Low–mod** | Image PO **open** | **R229–R279** | **Moderate** **if** local ship holds | **watch** |
| 4 | **DG-KS-01** | Bottle handle holder | **CJ** primary | **CJYD230000901AZ** | **Color / Blue** | **Included in landed** (**21AB**; unit **USD** **not** re-split) | **CJ** calculator → **South Africa** | **$6.21** (**21AB**, **unverified** until refresh) | **20–60 days** + **1–3** days processing (**90%** orders) (**21AB**) | **~$7.40** (**21AB**) | **USD** | **2026-05-14** (**21AB**) | **authenticated dashboard** (historical) | `artifacts/catalogue/slice-21ab-cj-authenticated-shipping-calculator-proof/20260514-122736/` (**expected**; **not** on Ubuntu-Dev); `artifacts/suppliers/slice-21dh/DG-KS-01/` — **empty** | Imported-route returns **non-final** | **Mod** (fit / food contact) | Blocked pending PO | **R249–R299** | **Moderate** at **R249** staged | **proof passed with notes** |
| 5 | **DG-OD-01** | Foldable magnetic stand | **CJ** primary | **CJYD245830501AZ** | **Color / Gun Gray** | **Included in landed** (**21AB**) | **CJ** calculator → **South Africa** | **$8.65** (**21AB**, **unverified** until refresh) | **20–60 days** + **1–3** processing (**21AB**) | **~$23.41** (**21AB**) | **USD** | **2026-05-14** (**21AB**) | **authenticated dashboard** (historical) | Same **21AB** folder class; `artifacts/suppliers/slice-21dh/DG-OD-01/` — **empty** | Imported-route returns **non-final** | **Mod** (magnetic / fit) | Blocked pending PO | **R599–R699** | **Tight** at **R699**; fee/**FX** buffer needed | **proof passed with notes** |
| 6 | **DG-HL-01** | Drawer divider set (4 pcs) | **CJ** preferred; **EPROLO** watch **BY-03** | **CJ** SKU **TBD**; EPROLO desk ref only | **Not tested** | **Not captured** | **Unknown** | **Not captured** | **Not captured** | **Not captured** | — | **21DH** | **public desk source** (EPROLO); **no** **ZA** run | `artifacts/suppliers/slice-21dh/DG-HL-01/` — **empty** | **Not assessed** | **Low–mod** | **Not assessed** | **R149–R199** (planning) | **Cannot score** | **proof blocked** |
| 7 | **DG-OD-03** | Desk pen caddy | **CJ** preferred; **EPROLO** watch **BY-04** | **CJ** SKU **TBD**; EPROLO desk ref only | **Not tested** | **Not captured** | **Unknown** | **Not captured** | **Not captured** | **Not captured** | — | **21DH** | **public desk source** (EPROLO); **no** **ZA** run | `artifacts/suppliers/slice-21dh/DG-OD-03/` — **empty** | **Not assessed** | **Low** | **Not assessed** | **R149–R199** (planning) | **Cannot score** | **proof blocked** |
| 8 | **DG-TA-03** | Cable management sleeve | **CJ** preferred | **CJ** SKU **TBD** | **Not tested** | **Not captured** | **Unknown** | **Not captured** | **Not captured** | **Not captured** | — | **21DH** | **no** desk economics | `artifacts/suppliers/slice-21dh/DG-TA-03/` — **empty** | **Not assessed** | **Low** | **Not assessed** | **R99–R149** (planning) | **Cannot score** | **proof blocked** |

---

## 3. Products that pass proof gate

### 3.1 proof passed with notes (inherited **21AB** — long-delivery **CJ** only)

| ID | Product | Why pass | Conditions |
| --- | --- | --- | --- |
| **DG-KS-01** | Bottle handle holder | **ZA** shipping **available** on **CJ** calculator (**$6.21**); landed **~$7.40**; variant **Blue** locked in staging | **21DH** refresh **not** on active copy; treat as **imported** **20–60 day** route; **FX**/fees/**R** planning **unverified**; media/claims **open** |
| **DG-OD-01** | Foldable magnetic stand | **ZA** shipping **$8.65**; landed **~$23.41**; variant **Gun Gray** staged | Same as above; margin **tight** at **R699** planning band |

### 3.2 proof passed (fresh **21DH** capture)

**None** at slice close.

---

## 4. Products that fail or remain blocked

| ID | Product | Recommendation | Primary reason |
| --- | --- | --- | --- |
| **DG-HL-01** | Drawer divider set | **proof blocked** | **No** **CJ** SKU; **EPROLO** **BY-03** calculator login-gated (**21BY**); **ZA** ship/cost **unknown** |
| **DG-OD-03** | Desk pen caddy | **proof blocked** | **No** **CJ** SKU; **EPROLO** **BY-04** — same blocker |
| **DG-TA-03** | Cable management sleeve | **proof blocked** | **No** supplier SKU or desk economics |

### 4.1 watch (economics incomplete — do not treat as pass)

| ID | Product | Gap |
| --- | --- | --- |
| **DG-KS-03** | Sink strainer | **R30** product signal only; **Ecomstock** stock inconsistent (**13N**); **no** itemised **ZA** ship |
| **DG-TA-01** | Cable tidies | **R20.90** product; **no** courier fee; **Gadgetgyz** route **closed** for pilot execution (**21W-B**) but valid as **local benchmark** |
| **DG-OD-02** | Acrylic stand | **~R159** product; **~R89** ship **unverified**; preview row exists but **not** proof-closed |

---

## 5. Margin / landed-cost notes

| ID | Landed posture | Margin note |
| --- | --- | --- |
| **DG-KS-01** | **~$7.40** USD landed (**21AB**) vs **R249** staged | **Moderate** planning margin **if** **USD→ZAR** and payment/support buffers hold — **not** final |
| **DG-OD-01** | **~$23.41** USD landed vs **R599–R699** band | **Tight** at upper band; needs explicit **FX**, gateway, and support allowance before staging price lock |
| **DG-KS-03** | Product **~R30** only | Catalogue desk **~62–70%** at **R79/R99** **without** ship — **misleading** until local ship quoted |
| **DG-TA-01** | **~R35–R50** desk total **unverified** | **Strong** **if** local ship **≤R30**; **weak** if ship approaches product cost |
| **DG-OD-02** | **~R248+** desk **unverified** | **Moderate** at **R229–R279** **if** ship stable; recheck live Gadgetgyz price |
| **DG-HL-01**, **DG-OD-03**, **DG-TA-03** | **Not scored** | Blocked pending SKU lock + calculator |

**Planning buffers (all rows):** payment fees, support/refund reserve, and **FX** movement are **not** included in supplier calculator totals unless explicitly captured.

---

## 6. Delivery-risk notes

| Route | SKUs | Honest customer posture |
| --- | --- | --- |
| **CJ** (**DG-KS-01**, **DG-OD-01**) | **20–60 days** to **ZA** + **1–3** day processing (**21AB**) | **Imported** controlled-pilot wording only — **no** fast/local implication (**21AC** / pilot §15J) |
| **Gadgetgyz** (**DG-TA-01**, **DG-OD-02**) | **Unverified** | Assume **local SA** only after **authenticated** basket/quote — **not** proven in **21W-B** |
| **Ecomstock** (**DG-KS-03**) | **Unverified** | Local supplier **assumed**; stock display **inconsistent** (**13N**) |
| **Blocked** (**DG-HL-01**, **DG-OD-03**, **DG-TA-03**) | **Unknown** | **No** delivery band may be stated on storefront |

---

## 7. Claim / media-risk notes

| ID | Claim risk | Media / image-use |
| --- | --- | --- |
| **DG-KS-01** | **Moderate** — bottle fit / food-contact adjacency | Staging **blocked** pending PO image acceptance |
| **DG-OD-01** | **Moderate** — magnetic / device fit | Same |
| **DG-KS-03** | **Low** | Not assessed |
| **DG-TA-01** | **Low** | **13O** exact-item match; PO image gate **open** |
| **DG-OD-02** | **Low–mod** | PO image gate **open** |
| **DG-HL-01**, **DG-OD-03**, **DG-TA-03** | **Low** (category) | **Not assessed** — SKU not locked |

---

## 8. Recommended launch-candidate set after proof

### 8.1 Ready for staging **planning** discussion only (not import)

| ID | Product | Route |
| --- | --- | --- |
| **DG-KS-01** | Bottle handle holder | **CJ** — **proof passed with notes** |
| **DG-OD-01** | Foldable magnetic stand | **CJ** — **proof passed with notes** |

### 8.2 Continue proof before staging plan

| ID | Product | Next capture |
| --- | --- | --- |
| **DG-KS-03** | Sink strainer | **Ecomstock** or alternate **local** checkout quote → **`DG-KS-03/`** |
| **DG-TA-01** | Cable tidies | Gadgetgyz desk/basket ship fee → **`DG-TA-01/`** |
| **DG-OD-02** | Acrylic stand | Local ship + live price recheck → **`DG-OD-02/`** |

### 8.3 Defer until SKU lock + calculator

**DG-HL-01**, **DG-OD-03**, **DG-TA-03** — run **CJ** desk search for organiser/sleeve equivalents **or** drop from launch-candidate set until **SKU** exists.

### 8.4 Reduced launch-candidate set (if Product Owner chooses narrow path)

**Minimum viable proof-backed set today:** **2** SKUs (**DG-KS-01**, **DG-OD-01**) + up to **3** **watch** locals after ship capture → **5** max without new **CJ** SKUs.

---

## 9. Product Owner decision options

| Option | Description | When to choose |
| --- | --- | --- |
| **A — Approve staging plan for proof-passed products** | **Planning-only** staging spec for **DG-KS-01** + **DG-OD-01** (existing draft rows may be updated only under a **separate** approved Admin slice) | Accept **long-delivery** **CJ** pilot economics and **21AB**-class honesty |
| **B — Reduce candidate set** | Launch-candidate depth = **2** **CJ** rows now; add locals only after **`artifacts/suppliers/slice-21dh/`** ship capture | Minimise claim/price risk |
| **C — Continue supplier search** | Close **HL-01** / **OD-03** / **TA-03** via **CJ** SKU lock; refresh **Ecomstock** / **Gadgetgyz** ship proof | Maximise category balance |
| **D — Pause catalogue work** | Preserve **21DF** preview; defer all supplier economics | Bandwidth or PO priority shift |

**Recommended:** **Option B** short term — treat **Option A** as **blocked** until operator populates **`artifacts/suppliers/slice-21dh/`** with **2026**-dated refresh for **all** rows intended for staging (**minimum:** **DG-KS-01**, **DG-OD-01** re-capture + **three** **watch** locals). If PO accepts **inherited** **21AB** only, **Option A** applies to **two** **CJ** SKUs **with notes** only.

---

## 10. Next required work (no import)

| Step | Owner | Output |
| --- | --- | --- |
| 1 | **Product Manager** / desk operator | Per-SKU folders under **`artifacts/suppliers/slice-21dh/<ID>/`** with sanitized calculator or local quote captures |
| 2 | **Product Manager** | **CJ** SKU lock for **DG-HL-01**, **DG-OD-03**, **DG-TA-03** **or** replace with alternate candidates from **21DG** watch list |
| 3 | **Product Owner** | Select **Option A**, **B**, **C**, or **D** |
| 4 | **Security / Compliance** | Re-review claim/delivery copy if staging plan approved |

---

## Strict confirmations (this slice)

- **Docs-only** — **no** theme edits, **no** Shopify Admin mutation, **no** publish, **no** preview-theme push, **no** product visibility/publication change, **no** checkout/payment/customer-order enablement, **no** product import/sync, **no** app install, **no** media enablement, **no** **`Supplier verified`**.
- **No** `artifacts/` or **`zadropshipping/`** committed.
- **No** passwords, tokens, cookies, customer data, order data, payment data, supplier credentials, or raw auth/session files in repo docs.

## Next owner

**Product Owner** — confirm **Option B** (recommended) or **Option A** (two **CJ** SKUs with **21AB** inheritance); assign desk operator for **`artifacts/suppliers/slice-21dh/`** capture on **watch** + **blocked** rows.
