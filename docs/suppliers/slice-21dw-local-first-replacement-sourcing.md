# Slice 21DW — local-first replacement sourcing search

**Document type:** Launch-candidate replacement sourcing (public desk research; docs only)  
**Prepared:** 2026-05-21  
**Owner:** Product Manager  
**Slice:** **21DW**

**Read-first:** `docs/project-control.md`; `docs/suppliers/slice-21dv-supplier-proofing-recovery-plan.md`; `docs/suppliers/slice-21dg-launch-candidate-product-proofing.md`; `docs/suppliers/slice-21dl-current-imported-product-audit.md`; `docs/checkpoints/slice-21df-internal-reviewer-acceptance.md`

**Upstream:** **Slice 21DV** (`b1cb8bf`) — **Product Owner** approved **local-first replacement sourcing search**. **DG-KS-01** / **CJYD230000901AZ** is **reject / replace**. **DG-OD-01** remains **watch-only** on existing **CJ** row.

**Method:** Public supplier storefront pages and marketplace listings only (**2026-05-21** desk pass). **No** authenticated supplier sessions, **no** orders, **no** app installs.

**Unverified rule:** Prices, stock, shipping, returns, and delivery times are **unverified** unless a follow-up proof slice captures them on the exact SKU with date and **South Africa** destination.

**Candidate IDs:** New rows use **`DW-`** prefix for this search pass. Programme IDs (**`DG-*`**) are referenced where an Admin row or prior slice already exists.

---

## 1. Executive verdict

**Verdict:** **PASS WITH NOTES** — a **local-first** replacement lane is **viable** for **Kitchen & Storage** and **Tech Accessories**; **Office & Desk** has usable **local reseller** stand and caddy options; **Home & Living** needs one more divider/basket proof pass before category depth is launch-ready.

| Metric | Count |
| --- | --- |
| **Categories searched** | **4** (approved set) |
| **New desk candidates logged** | **24** (**≥5** per category) |
| **strong candidate** | **6** |
| **candidate** | **9** |
| **watch** | **7** |
| **reject** | **2** (plus **route-level** rejects below) |

**Headline findings:**

1. **Best local-first economics (desk, unverified):** stainless sink strainer **~R30** (**Pots And Things**); cable ties **PCB-CT-25150** **~R19** (**DirectTech**); drawer divider **~R34** (**UCAN**); cutlery tray **R50–R210** band.
2. **Replacement for lost `DG-KS-01`:** prioritise **`DW-KS-01`** (sink strainer) and **`DW-KS-03`** / **`DW-KS-05`** (cutlery organiser trays) — **not** another **CJ** kitchen gadget.
3. **`DG-OD-01`:** remains **watch** on **CJ** only; local stand proof should use **`DW-OD-05`** or **`DW-OD-04`** if the programme moves off **CJ**.
4. **Gadgetgyz** remains a **historical benchmark** only (**21W-B** route closed) — local resellers (**Parrot**, **Beyond Revelation**, **DirectTech**) are acceptable **desk** sources but still need dropship/returns/image proof.
5. **Ecomstock** **`P5260S`** stays **watch** — prior desk signal **R30** strainer (**13N**) but public catalogue match **not** reconfirmed; store availability **unverified** in **21DK**.

**Recommended Product Owner decision:** **Approve next proof gate** on the **Top 10** table (**§3**) — **public desk lock + local shipping/landed quote** per SKU — **no** import/sync/Admin.

---

## 2. Candidate table by category

### 2.1 Kitchen & Storage

| ID | Product name | Supplier / source | URL / ref | Price (desk) | ZA ship / delivery (desk) | Landed est. (desk) | Stock | Return note | Media risk | Claim risk | Trust | Rec. |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **DW-KS-01** | Stainless steel kitchen sink drain strainer | **Pots And Things** (local SA shop) | [product page](https://potsandthings.co.za/index.php/product/stainless-steel-kitchen-sink-drain-strainer/) | **R30.00** | Shipping calculated at checkout (**unverified**) | **~R30–R80** product + ship (**unverified**) | **6 in stock** (page) | Store policy **unverified** | Supplier images **unverified** | **Low** | **Low–mod** | **strong candidate** |
| **DW-KS-02** | Anti-clogging sink strainer (**P5260S** class) | **Ecomstock** (desk backup; **13N**) | `ecomstock.co.za` collections only — **no** exact SKU page found this pass | **~R30** (**13N**, **unverified**) | Local ZA assumed; **unverified** | **~R30–R60** (**unverified**) | **Inconsistent** (**13N**, **21DK** store unavailable) | **~14-day** retail signal (**13N**, **unverified**) | **Unverified** | **Low** | **Mod** (ops) | **watch** |
| **DW-KS-03** | Expandable cutlery draw organiser | **Zhoozh.africa** (local Shopify) | [product page](https://www.zhoozh.co.za/products/expandable-cutlery-draw-organiser) | **R210.00** inc. VAT | **5–7 working days** (site class; **unverified**) | **~R210–R280** (**unverified**) | Add to cart open | Shopify returns policy **unverified** | Supplier images likely | **Low** | **Low** | **candidate** |
| **DW-KS-04** | Compact cutlery drawer organiser | **Decorum & Co** (local SA) | [product page](https://decorumandco.co.za/products/decorum-co-compact-cutlery-drawer-organizer) | **R50.00** | Calculated at checkout | **~R50–R120** (**unverified**) | **In stock** (page) | **14-day** return + **30-day** mfg warranty (page) | **Unverified** | **Low** | **Low** | **strong candidate** |
| **DW-KS-05** | 8-piece drawer organiser (honeycomb) | **PEP HOME** online | [product page](https://www.pepstores.com/products/drawer-organiser-sku-enc07) | **R69.99** | **Free delivery orders over R500** (site) | **~R70–R130** (**unverified**) | Online buy flow | PEP returns at stores (**unverified** detail) | PEP imagery | **Low** | **Low** — **wrong drawer use** (hosiery) | **watch** |
| **DW-KS-06** | Kitchen strainer & filter plugs set (3×) | **shopadeal.co.za** | Desk search listing **R90** set | **R90.00** (**unverified**) | **Unverified** | **~R90–R150** | **Unverified** | **Unverified** | **Unverified** | **Low** | **Low** | **candidate** |

**Programme overlap:** **`DG-KS-03`** / handle `sink-strainer-stainless-steel` aligns with **DW-KS-01** / **DW-KS-02** — still **no** locked Admin SKU.

---

### 2.2 Office & Desk

| ID | Product name | Supplier / source | URL / ref | Price (desk) | ZA ship / delivery (desk) | Landed est. (desk) | Stock | Return note | Media risk | Claim risk | Trust | Rec. |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **DW-OD-01** | Pen holder multi-colour desk organiser | **Stationery Net** | [product page](https://stationerynet.co.za/products/pen-holder-multi-colour-desk-organizer) | **R21.74** | **Unverified** | **~R22–R80** | **Unavailable** on fetch | **Unverified** | **Unverified** | **Low** | **Low** | **watch** |
| **DW-OD-02** | Deli 360° rotating pen holder (white) | **Loot.co.za** marketplace | Desk search **R89** | **R89.00** (**unverified**) | **3–5 working days** (Loot class) | **~R89–R140** | **Unverified** | Loot marketplace returns | Marketplace images | **Low** | **Low** | **candidate** |
| **DW-OD-03** | Desk pen holder organiser | **Lamay** | Desk search **R150** | **R150.00** (**unverified**) | **Unverified** | **~R150–R220** | **Unverified** | **Unverified** | **Unverified** | **Low** | **Low** | **candidate** |
| **DW-OD-04** | Acrylic tablet or phone stand (**DP0402** class) | **Beyond Revelation** / **Parrot** reseller | Desk **R158**; Parrot **DP0401** list **R855** — **different SKU** | **R158–R855** band | Local reseller ship **unverified** | **~R160–R950+** | **Unverified** | Reseller terms **unverified** | **Unverified** | **Low–mod** (fit/charge slot wording) | **Mod** (reseller chain) | **candidate** |
| **DW-OD-05** | Adjustable mini aluminium phone & tablet stand | **CellTime** (local SA) | [product page](https://celltime.co.za/products/celltime-adjustable-mini-multi-angle-aluminium-smartphone-tablet-stand) | **R149.00** | **From R65**; **free over R500** (page) | **~R149–R214** | Add to cart | Policies on site **unverified** | Supplier images | **Mod** (“perfect”, charging while viewing) | **Low–mod** | **strong candidate** |
| **DW-OD-06** | Clear acrylic phone stand (display class) | **HOLDiT / Retail Signage** | Desk search **R149** | **R149.00** (**unverified**) | **Unverified** | **~R149–R220** | **Unverified** | **Unverified** | **Unverified** | **Low** | **Low** | **candidate** |

**Programme overlap:** **`DG-OD-01`** (**CJ** foldable magnetic stand) — **watch only**; **`DG-OD-02`** acrylic **DRAFT** — align with **DW-OD-04** if **Gadgetgyz** route stays closed and reseller proof passes.

---

### 2.3 Home & Living

| ID | Product name | Supplier / source | URL / ref | Price (desk) | ZA ship / delivery (desk) | Landed est. (desk) | Stock | Return note | Media risk | Claim risk | Trust | Rec. |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **DW-HL-01** | Collapsible felt storage basket with handles | **HEARTDECO** | [product page](https://heartdeco.co.za/products/collapsible-felt-storage-basket-with-handles) | **R129.00** (was **R199**) | Calculated at checkout | **~R129–R200** | **In stock** (page) | **Unverified** | Supplier images | **Low** (**10 kg** capacity claim) | **Low** | **strong candidate** |
| **DW-HL-02** | 5-division drawer divider | **UCAN** (KZN; Shopify) | [product page](https://ucandoit.co.za/products/5-division-drawer-divider) | **R34.00** (list **R69**) | Calculated at checkout | **~R34–R100** | Page shows **Sold Out** banner but **In Stock: 32** — **conflicting** | **Unverified** | **Unverified** | **Low** | **Low–mod** | **strong candidate** |
| **DW-HL-03** | 8-piece drawer organiser | **PEP HOME** | Same as **DW-KS-05** | **R69.99** | Free over **R500** | **~R70–R130** | Online | PEP store returns | PEP | **Low** | **Low** | **candidate** |
| **DW-HL-04** | Wooden drawer organiser (5-tray) | **House of York** / **OneDayOnly** desk | Desk **R179** promo (**unverified**) | **R179–R300** band | **Unverified** | **~R180–R350** | **Unverified** | **Unverified** | **Unverified** | **Low** | **Low** | **candidate** |
| **DW-HL-05** | Interlocking drawer organiser set (8) | **Bob Shop** marketplace | Desk **R106** | **R106.00** (**unverified**) | Marketplace | **~R106–R170** | **Unverified** | Marketplace | Marketplace | **Low** | **Low** | **candidate** |
| **DW-HL-06** | Collapsable fabric storage bin (baby laundry class) | **Checkers** | Desk listing — baby aisle | **Unverified** | Retail | **Unverified** | **Unverified** | Retail | Retail | **Mod** | **Mod** (baby adjacency) | **reject** |

**Programme overlap:** **`DG-HL-01`** drawer divider — maps to **DW-HL-02**; no Admin row yet.

---

### 2.4 Tech Accessories

| ID | Product name | Supplier / source | URL / ref | Price (desk) | ZA ship / delivery (desk) | Landed est. (desk) | Stock | Return note | Media risk | Claim risk | Trust | Rec. |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **DW-TA-01** | PCBuilder LOCKDOWN 150 mm cable ties (100 pcs) black | **DirectTech** | [product page](https://directtech.co.za/product/pcbuilder-lockdown-150mm-cable-ties-100-pcs-black) — **PCB-CT-25150** | **R19.00** | **Free shipping over R3,450**; else **unverified** | **~R19–R85** | **In stock** | **14-day returns** (page) | Brand/supplier images | **Low** | **Low** | **strong candidate** |
| **DW-TA-02** | Same SKU — alternate local listing | **Techniverse** / **Getit** | Desk **R16.99–R14.95** | **~R15–R20** | **Unverified** | **~R20–R80** | Desk **in stock** | **Unverified** | **Unverified** | **Low** | **Low** | **candidate** |
| **DW-TA-03** | UGREEN cable protection tube 25 mm × 3 m | **DirectTech** (related aisle) | Desk **R129** on same site | **R129.00** (**unverified**) | Same store rules | **~R129–R200** | **In stock** (related listing) | **14-day** store class | **Unverified** | **Low** | **Low** | **candidate** |
| **DW-TA-04** | Lumi fabric cable zip sleeve **CC10-3** | **ComX** / **FirstShop** | Desk **R325–R340** | **R325+** | Courier **unverified** | **~R325–R420** | **Unverified** | **Unverified** | **Unverified** | **Low** | **Low** | **watch** |
| **DW-TA-05** | Cable management sleeve 2-pack | **Bob Shop** | Desk **R487** | **R487.00** (**unverified**) | Marketplace | **~R487+** | **Unverified** | Marketplace | Marketplace | **Low** | **Low** | **watch** |
| **DW-TA-06** | **CJ** nylon cable sleeve (search target) | **CJdropshipping** | **No** easy desk SKU lock | — | **ZA** calc **blocked** (**21DS**) | — | — | — | — | **Low** | **High** (route) | **watch** |

**Programme overlap:** **`DG-TA-01`** / `cable-tidies-set` — **13O** exact **`PCB-CT-25150`** proof aligns with **DW-TA-01**; shipping/margin gates still **open**.

---

## 3. Top 10 local-first candidates overall

Ranked for **visible ZA pricing**, **low claim risk**, **light parcel**, and **category spread**:

| Rank | ID | Product | Category | Supplier | Desk price | Why top 10 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | **DW-KS-01** | Sink drain strainer | Kitchen | **Pots And Things** | **R30** | Direct replacement lane for **DG-KS-01**; low claim; live stock signal |
| 2 | **DW-TA-01** | Cable ties 100 pcs (**PCB-CT-25150**) | Tech | **DirectTech** | **R19** | Matches **13O** / **DG-TA-01**; strong unit economics |
| 3 | **DW-HL-02** | 5-division drawer divider | Home | **UCAN** | **R34** | Fills **DG-HL-01** slot; low price — stock UI conflict needs confirmation |
| 4 | **DW-KS-04** | Compact cutlery organiser | Kitchen | **Decorum & Co** | **R50** | Exact search-target fit; clear returns wording on page |
| 5 | **DW-OD-05** | Aluminium phone/tablet stand | Office | **CellTime** | **R149** | Local metal stand; clearer than **CJ** **DG-OD-01** |
| 6 | **DW-HL-01** | Collapsible felt storage basket | Home | **HEARTDECO** | **R129** | Collapsible fabric bin search target |
| 7 | **DW-KS-03** | Expandable cutlery organiser | Kitchen | **Zhoozh** | **R210** | Premium organiser option |
| 8 | **DW-OD-02** | Rotating pen holder | Office | **Loot** | **R89** | Low-cost caddy — marketplace terms need lock |
| 9 | **DW-TA-03** | UGREEN cable tube 3 m | Tech | **DirectTech** | **R129** | Sleeve/pouch class without powered claims |
| 10 | **DW-KS-06** | Strainer plug set (3) | Kitchen | **shopadeal** | **R90** | Backup kitchen SKU — verify exact spec |

**Not in top 10 but tracked:** **DW-OD-04** (acrylic **DP0402** reseller chain); **DW-KS-02** (**Ecomstock**); programme **`DG-OD-01`** (**CJ** **watch**).

---

## 4. Rejected products and why

| ID / subject | Recommendation | Primary reason |
| --- | --- | --- |
| **DG-KS-01** / **CJYD230000901AZ** | **reject / replace** | **CJ** product **removed** (**21DV**); do not re-source on **CJ** |
| **DW-HL-06** | **reject** | **Baby** laundry / nursery adjacency — outside approved risk class |
| **DG-HL-05** class (charcoal deodoriser) | **reject** | Health/deodorising claim risk (**21DG** / **21Z**) |
| **DG-TA-05** / USB-C fast-charge cable | **reject** | Performance/charging claim risk |
| **DG-OD-05** / **CJ** cable clip with verification block | **reject** | **CJ** human-verification friction (**21AC**) |
| **Gadgetgyz** as **execution** route | **reject** (route) | **21W-B** closed current pilot — not a sourcing approval |
| **DSers** / AliExpress class | **reject** (route) | **Benchmark only** per programme |
| **Parrot DP0401** at **~R855** | **reject** (this SKU) | Price band unsuitable for pilot utility stand |

---

## 5. Watch products and what proof is missing

| ID | Product | Missing proof |
| --- | --- | --- |
| **DG-OD-01** | **CJ** foldable magnetic stand | Fresh **ZA** **CJ** calculator; **Turnstile** / removed-SKU risk; keep **preview only** |
| **DW-KS-02** | **Ecomstock** **P5260S** strainer | Exact public product URL; live stock; dropship workflow; ship fee |
| **DW-KS-05** | PEP honeycomb organiser | Confirm intended use (cutlery vs hosiery); ship quote |
| **DW-OD-01** | Stationery Net pen holder | Availability; ship/returns |
| **DW-OD-04** | Acrylic **DP0402** resellers | Exact SKU match (**DP0402** vs **DP0401**); reseller dropship terms; image PO |
| **DW-TA-04** / **DW-TA-05** | Premium cable sleeves | High landed cost; marketplace proof |
| **DW-TA-06** | **CJ** cable sleeve | **CJ** route deprioritised unless easy **ZA** proof |
| **DW-HL-02** | UCAN divider | Resolve **Sold Out** vs **In Stock: 32** conflict |

---

## 6. Category balance toward 5 products each

Target: **5 launch candidates per category** (programme planning band — **not** approved import).

| Category | **strong candidate** | **candidate** | **watch** | **reject** | Balance note |
| --- | --- | --- | --- | --- | --- |
| **Kitchen & Storage** | **2** (**DW-KS-01**, **DW-KS-04**) | **2** | **2** | **0** (+ **DG-KS-01** programme reject) | **Strongest** recovery category — sink + cutlery tray |
| **Office & Desk** | **1** (**DW-OD-05**) | **4** | **2** | **1** route/SKU | Stand + caddy options; **DG-OD-01** stays **CJ** watch |
| **Home & Living** | **2** (**DW-HL-01**, **DW-HL-02**) | **3** | **0** | **1** | Divider + basket viable; need stock confirmation on **UCAN** |
| **Tech Accessories** | **1** (**DW-TA-01**) | **2** | **3** | **0** (+ route rejects) | Cable ties strongest; sleeves expensive |

**Proposed 5-per-category shortlist for next proof gate (planning only):**

| Category | Proposed five |
| --- | --- |
| **Kitchen & Storage** | **DW-KS-01**, **DW-KS-04**, **DW-KS-03**, **DW-KS-06**, **DW-KS-02** (watch uplift) |
| **Office & Desk** | **DW-OD-05**, **DW-OD-02**, **DW-OD-03**, **DW-OD-06**, **DW-OD-04** |
| **Home & Living** | **DW-HL-02**, **DW-HL-01**, **DW-HL-03**, **DW-HL-04**, **DW-HL-05** |
| **Tech Accessories** | **DW-TA-01**, **DW-TA-02**, **DW-TA-03**, **DW-TA-04** (if economics pass), **DG-TA-01** continuity |

---

## 7. Supplier route notes

| Route | **21DW** posture |
| --- | --- |
| **Local SA Shopify / specialist stores** (**UCAN**, **Zhoozh**, **HEARTDECO**, **Decorum**, **Pots And Things**, **CellTime**, **DirectTech**) | **Preferred** — visible **ZAR** pricing |
| **National retail online** (**PEP**, **Checkers**) | **Conditional** — clear consumer terms; avoid baby/health aisles |
| **Marketplaces** (**Loot**, **Bob Shop**, **Takealot** class) | **Second** — only with clear seller, returns, and exact SKU lock |
| **Local reseller of known SKU** (**Parrot** / **Beyond Revelation** for **DP0402**) | **Allowed desk** — not **Gadgetgyz** execution; needs reseller proof |
| **Ecomstock** | **Watch** — backup strainer only |
| **CJdropshipping** | **Deprioritised** — **DG-OD-01** watch only; no new **CJ** kitchen replacement |
| **EPROLO** | **Watch-only** desk references (**21BY**) — not in top 10 |
| **DSers** | **Benchmark only** — not listed as candidates |

---

## 8. Recommended next proof gate

**Slice class:** **21DX** (or operator desk follow-up) — **local quote + shipping proof** per **Top 10** SKU.

| Step | Action | Owner |
| --- | --- | --- |
| 1 | Lock exact supplier page + variant/SKU per **`DW-*`** row | **Operator** / **Product Manager** |
| 2 | Capture **ZA** shipping cost, delivery band, and landed-cost note (cart or policy page) | **Operator** |
| 3 | Confirm stock + returns + image-use / sample need | **Product Manager** |
| 4 | Security / claim review on any promoted row | **Security / Compliance** |
| 5 | **Only then** — Admin staging **plan** (separate PO approval; **no** import in this slice) | **Product Owner** |

**Explicit non-approvals:** import/sync, app install, Admin mutation, publication change, preview theme push, checkout, **`Supplier verified`**, media enablement.

---

## 9. Product Owner decision options

| Option | Description | **21DW** alignment |
| --- | --- | --- |
| **A** | Approve **Top 10** local-first proof gate (**§3**) | **Recommended** |
| **B** | Approve **5-per-category** shortlist (**§6**) only | **Acceptable** — narrower |
| **C** | Keep all programme rows **restricted preview only** | Compatible — no contradiction |
| **D** | Reduce launch depth (e.g. **2** categories first: **Kitchen** + **Tech**) | **Acceptable** if capacity-limited |
| **E** | Continue broader supplier search | Use if **Top 10** proof fails |

**Recommended:** **A** + **C** — run local shipping/landed proof on **Top 10** while leaving existing **CJ** preview rows untouched (**DG-OD-01** **watch**; **DG-KS-01** do not promote).

---

## 10. Strict confirmations

- **Docs-only** public desk research — **no** Shopify Admin mutation, import/sync, app install, visibility change, checkout, publish, theme push, **`Supplier verified`**, or media enablement.
- **No** committed `artifacts/` or `zadropshipping/`.
- **No** credentials, cookies, tokens, or private dashboard material in this doc.

---

## 11. Next owner

**Operator** — desk shipping/landed proof on **§3 Top 10** (or **Product Manager** to schedule **21DX** doc closure).

**LLD:** unchanged.
