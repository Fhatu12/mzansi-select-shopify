# Slice 21DX — Top 10 local-first shipping and landed-cost proof

**Document type:** Local shipping / landed-cost proof gate (public desk; docs only)  
**Prepared:** 2026-05-21  
**Owner:** Product Manager  
**Slice:** **21DX**

**Read-first:** `docs/project-control.md`; `docs/suppliers/slice-21dw-local-first-replacement-sourcing.md`; `docs/suppliers/slice-21dv-supplier-proofing-recovery-plan.md`; `docs/suppliers/slice-21dl-current-imported-product-audit.md`

**Upstream:** **Slice 21DW** (`cbcda45`) — **Product Owner** approved **Option A + C**: run **Top 10** local ship/landed proof; keep existing **CJ** rows **restricted preview only**.

**Evidence (local only; not committed):** `artifacts/suppliers/slice-21dx/<candidate-id>/capture-notes.txt`; summary `artifacts/suppliers/slice-21dx/slice-21dx-run-summary.json`

**Method:** Public product pages and published shipping/return policies only (**2026-05-21**). **No** orders, **no** payment entry, **no** supplier login, **no** checkout completion.

**Sanitisation:** This doc quotes **field-level** desk outcomes only. **No** account, payment, order, or credential material.

---

## 1. Executive verdict

**Verdict:** **PASS WITH NOTES** — **6** of **10** rows reach **`proof passed with notes`**; **4** remain **`watch`**; **0** **`proof passed`** (strict: itemised ship fee captured at checkout); **0** **`blocked`** / **`reject`** in the Top 10 set.

| Outcome | Count | IDs |
| --- | --- | --- |
| **proof passed** (strict) | **0** | — |
| **proof passed with notes** | **6** | **DW-TA-01**, **DW-HL-02**, **DW-KS-04**, **DW-OD-05**, **DW-HL-01**, **DW-TA-03** |
| **watch** | **4** | **DW-KS-01**, **DW-KS-03**, **DW-OD-02**, **DW-KS-06** |
| **blocked** | **0** | — |
| **reject** | **0** | — |

**Why PASS WITH NOTES:** Most **SA** suppliers publish **delivery bands** and **return rules**, but **exact courier fees** for low-basket orders still require **checkout postal-code quotes** we did not complete (by design). **HEARTDECO** and **UCAN** policies are strong enough for **planning-level** landed bands; **CellTime** likely **free ship** at **R149**; **Pots And Things**, **Zhoozh**, **Loot**, and **shopadeal** need follow-up.

**Programme posture unchanged:** **DG-KS-01** **reject/replace**; **DG-OD-01** **CJ** **watch** — existing Admin rows **not** promoted.

**Recommended Product Owner decision:** **Approve staging-plan docs** for the **Best 5 starter set** (**§6**) at **planning-only** level — **not** import/sync/Admin — after **Operator** confirms checkout quotes for **watch** rows.

---

## 2. Top 10 proof table

| # | ID | Product | Supplier | Price | Ship method (ZA) | Ship cost (desk) | Delivery est. | Landed est. | Stock | Returns (desk) | Rec. |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | **DW-KS-01** | Sink strainer | **Pots And Things** | **R30** | Courier at checkout | **Not captured** | **Not captured** | **R30+** ship TBD | **6** in stock | **Not captured** | **watch** |
| 2 | **DW-TA-01** | Cable ties 100 (**PCB-CT-25150**) | **DirectTech** | **R19** | Courier; free **>R3,450** | At checkout (under threshold) | **Not itemised** | **~R19–R99** | **In stock** | **14-day** returns | **proof passed with notes** |
| 3 | **DW-HL-02** | 5-division drawer divider | **UCAN** | **R34** | Fastway/Big Foot | **R0–R129** band (policy) | **2–7** d total (policy) | **~R34–R163** | **Conflict** UI | Contact store | **proof passed with notes** |
| 4 | **DW-KS-04** | Compact cutlery organiser | **Decorum & Co** | **R50** | Standard courier | At checkout (**<R3k**) | **2–7** d standard | **~R50–R150** | **In stock** | **14d** / **30d** warranty | **proof passed with notes** |
| 5 | **DW-OD-05** | Aluminium phone/tablet stand | **CellTime** | **R149** | BobGo; **free >R500** | **~R0** if rule holds | **1–3** d after dispatch | **~R149** | Buy flow OK | Support contact | **proof passed with notes** |
| 6 | **DW-HL-01** | Collapsible felt basket | **HEARTDECO** | **R129** | Standard | **R150** (non-Gauteng **<R1k**) | **2–7** d | **~R279** | **In stock** | **Not on ship page** | **proof passed with notes** |
| 7 | **DW-KS-03** | Expandable cutlery organiser | **Zhoozh** | **R210** | **Not captured** | **Not captured** | **5–7** d (prior desk) | **~R210–R280** | Add to cart | **Not captured** | **watch** |
| 8 | **DW-OD-02** | Rotating pen holder | **Loot** / Deli | **R89** | Loot standard | **Not on PDP** | **3–5** d ship class | **~R89–R140** | **3–5** d | **6 mo** warranty | **watch** |
| 9 | **DW-TA-03** | UGREEN cable tube 3 m | **DirectTech** | **R129** | Same store | At checkout | **Not itemised** | **~R129–R200** | **In stock** | **14-day** class | **proof passed with notes** |
| 10 | **DW-KS-06** | Strainer plug set 3× | **shopadeal** / **Bob Shop** proxy | **R99** (Bob) | Bob Shop standard | **R35** (orders **>R100**) | **3** d ready + checkout | **~R134** | Ready **3** d | Marketplace BPP | **watch** |

**Evidence paths:** `artifacts/suppliers/slice-21dx/<id>/capture-notes.txt`

---

## 3. Products that passed proof

**Strict `proof passed` (itemised ship fee on desk):** **None.**

**Rationale:** No checkout quote was completed; programme rules forbid payment entry.

---

## 4. Products that passed with notes

| ID | Key proof captured | Notes |
| --- | --- | --- |
| **DW-TA-01** | **R19**, in stock, **14-day** returns, free-ship threshold **R3,450** | Aligns **DG-TA-01** / **13O** SKU; ship fee at checkout |
| **DW-HL-02** | **R34**, published **UCAN** ship table, delivery bands | Stock UI conflict; postal-code quote still needed |
| **DW-KS-04** | **R50**, warehouse dispatch, **2–7** d, returns/warranty text | Courier fee at checkout; not dropship |
| **DW-OD-05** | **R149**, **free ship >R500**, **1–3** d delivery class | Trim marketing claims before customer copy |
| **DW-HL-01** | **R129**, **R150** ship (non-Gauteng policy), **2–7** d | Gauteng would be **R100** band — confirm buyer region |
| **DW-TA-03** | **R129**, same store rules as **DW-TA-01** | Lock dedicated product URL in follow-up |

---

## 5. Watch / blocked / rejected products

### 5.1 Watch (4)

| ID | Gap |
| --- | --- |
| **DW-KS-01** | No public shipping policy; ship fee checkout-only |
| **DW-KS-03** | Shipping policy page empty on desk fetch |
| **DW-OD-02** | Loot ship cost not on product page |
| **DW-KS-06** | **shopadeal** URL **404**; Bob Shop proxy **R99** vs **R90** desk |

### 5.2 Blocked (0)

None in Top 10 — no login-gated supplier dashboards required for policy-class proof.

### 5.3 Rejected (0)

None in Top 10. (**DG-KS-01** / **CJ** remains programme-level **reject/replace** — out of scope.)

---

## 6. Best 5-product starter set

Planning-only shortlist for a **local-first** controlled-pilot lane (**not** Admin approval):

| Rank | ID | Category | Desk landed band | Why included |
| --- | --- | --- | --- | --- |
| 1 | **DW-KS-01** | Kitchen | **R30+** | Best **DG-KS-01** replacement — confirm ship at checkout |
| 2 | **DW-TA-01** | Tech | **~R19–R99** | Strongest unit economics; **PCB-CT-25150** |
| 3 | **DW-HL-02** | Home | **~R34–R163** | Lowest home organiser price; policy-rich |
| 4 | **DW-KS-04** | Kitchen | **~R50–R150** | Cutlery tray + clear returns |
| 5 | **DW-OD-05** | Office | **~R149** | Local stand vs **DG-OD-01** **CJ** watch |

**Reserve:** **DW-HL-01** (higher landed **~R279**); drop **DW-KS-03** until ship policy captured.

---

## 7. Category balance after proof

| Category | proof passed with notes | watch | Starter coverage |
| --- | --- | --- | --- |
| **Kitchen & Storage** | **1** (**DW-KS-04**) | **3** (**DW-KS-01**, **03**, **06**) | **2** in best 5 (**DW-KS-01**, **04**) |
| **Office & Desk** | **1** (**DW-OD-05**) | **1** (**DW-OD-02**) | **1** (**DW-OD-05**) |
| **Home & Living** | **2** (**DW-HL-02**, **01**) | **0** | **1** (**DW-HL-02**) |
| **Tech Accessories** | **2** (**DW-TA-01**, **03**) | **0** | **1** (**DW-TA-01**) |

**Gap:** Kitchen still has **three** **watch** rows — checkout quotes needed before category is launch-ready.

---

## 8. Delivery and landed-cost risk summary

| Risk | Detail |
| --- | --- |
| **Checkout-only shipping** | **7**/**10** rows need postal-code quote for exact fee |
| **Free-ship thresholds** | **DirectTech** **R3,450** — single-SKU orders pay ship; **CellTime** **R500** — **DW-OD-05** likely **R0** |
| **High landed outliers** | **DW-HL-01** **~R279** non-Gauteng; **DW-KS-03** **R210** + unknown ship |
| **Marketplace variance** | **Loot** / **Bob Shop** — seller and ship rules differ from first-party stores |
| **Stock reliability** | **UCAN** divider UI conflict; **shopadeal** URL dead |
| **CJ comparison** | **DG-OD-01** **21AB** stale **20–60** d import band — local **DW-OD-05** likely faster but unverified end-to-end |

All landed figures are **planning bands** — **unverified** until checkout or fulfilment proof.

---

## 9. Claim / media / returns risk summary

| Theme | Assessment |
| --- | --- |
| **Claims** | **DW-OD-05** page uses strong marketing language — keep preview-safe / non-final wording |
| **Returns** | **Decorum** strongest desk text (**14d** + **30d** warranty); **DirectTech** **14-day**; **Loot** marketplace BPP |
| **Media** | All rows: **image-use PO** still **open** — no **`Supplier verified`**, no media enablement |
| **Food/kitchen contact** | **DW-KS-01** / strainers — low claim if wording stays functional |

---

## 10. Product Owner decision options

| Option | Description | **21DX** alignment |
| --- | --- | --- |
| **A** | Approve **staging-plan docs** for **proof passed with notes** + best 5 | **Recommended** (planning only) |
| **B** | Reduce to **best 5** only | **Recommended** if capacity-limited |
| **C** | Continue local supplier search (fix **watch** rows) | **Recommended** for **DW-KS-01**, **03**, **06**, **OD-02** |
| **D** | Pause catalogue work | Compatible — preview-only hold |

**Recommended:** **A** + **B** + **C** — planning approval for **6** passed-with-notes rows and **best 5** starter; **Operator** checkout quotes for **4** **watch** rows; **no** import/Admin.

---

## 11. Strict confirmations

- **Docs/evidence only** — **no** Shopify Admin mutation, import/sync, app install, visibility change, checkout/payment/customer-order enablement, publish, theme push, **`Supplier verified`**, or media enablement.
- **No** committed `artifacts/` or `zadropshipping/`.
- **Existing CJ rows:** **restricted preview only** per **Option C**.

---

## 12. Next owner

**Operator** — safe checkout shipping quote (postal code only, abandon before payment) for **4** **watch** SKUs; then **Product Owner** staging-plan decision.

**LLD:** unchanged.
