# Slice 21DY — five-product local-first starter staging plan

**Document type:** Planning-only staging plan (docs only)  
**Prepared:** 2026-05-21  
**Owner:** Product Manager  
**Slice:** **21DY**

**Read-first:** `docs/project-control.md`; `docs/suppliers/slice-21dw-local-first-replacement-sourcing.md`; `docs/suppliers/slice-21dx-top-10-local-shipping-proof.md`; `docs/checkpoints/slice-21df-internal-reviewer-acceptance.md`; `docs/suppliers/slice-21dl-current-imported-product-audit.md`

**Upstream:** **Slice 21DX** (`74243f5`) — **Product Owner** accepts **21DX** and approves **planning-only** staging docs for the **best 5** local-first candidates.

**Store:** `dropshippoc.myshopify.com` — preview theme **`151207542967`** (restricted preview accepted **21DF**).

**Unverified rule:** Supplier prices, shipping, delivery, returns, stock, and margins in this plan are **planning references** from **21DW** / **21DX** public desk work unless a later proof slice captures them with date and destination.

---

## 1. Executive decision

| Decision | Status |
| --- | --- |
| **5-product local-first starter set approved for planning only** | **Yes** — **Product Owner** approved after **21DX** |
| **Admin / write execution** | **No** — not approved in this slice |
| **Product import / sync** | **No** |
| **`Supplier verified`** | **No** |
| **Purchase enablement** (Add to Cart, Buy Now, checkout, payment, customer access) | **No** |
| **Public launch approval** | **No** |
| **Publication widening** | **No** |
| **Preview theme push** | **No** |
| **Supplier media enablement** | **No** |

**Verdict:** **PASS WITH NOTES** — staging **plan** is ready for **Security / Compliance** review. **One** of five rows (**DW-KS-01**) remains **watch** on shipping proof; PO may narrow to **four** products until checkout ship quote closes.

**Programme context:** This plan introduces a **local-first** lane alongside existing **CJ** controlled-pilot rows. **Do not** conflate with **`Supplier verified`**, final pricing, or launch readiness.

---

## 2. Product table

| Candidate ID | Product name | Category | Supplier / source | Price (desk) | Shipping / delivery proof | Landed-cost range (planning) | Proof status (**21DX**) | Risk | Staging-plan recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **DW-KS-01** | Stainless steel kitchen sink drain strainer | **Kitchen & Storage** | **Pots And Things** | **R30.00** | **Incomplete** — ship fee checkout-only; no public ship policy captured | **~R30–R90** (**unverified**) | **watch** | **Mod** | **Plan only** — prefer **new** row or relink `sink-strainer-stainless-steel` after ship proof; **do not** execute until quote captured |
| **DW-TA-01** | PCBuilder LOCKDOWN 150 mm cable ties (100 pcs) black — **PCB-CT-25150** | **Tech Accessories** | **DirectTech** | **R19.00** | **Policy + PDP** — courier; free ship **>R3,450**; ship at checkout for single SKU | **~R19–R99** (**unverified**) | **proof passed with notes** | **Low** | **Plan** hygiene on existing `cable-tidies-set` preview row — variant SKU + tags; **no** media |
| **DW-HL-02** | 5-division drawer divider (**HAF-SD-4160**) | **Home & Living** | **UCAN** | **R34.00** | **Policy captured** — **2–7** d total band; ship **R0–R129** by postal code | **~R34–R163** (**unverified**) | **proof passed with notes** | **Low–mod** | **Plan** **net-new** preview row — stock UI conflict must clear before execution |
| **DW-KS-04** | Compact cutlery drawer organiser | **Kitchen & Storage** | **Decorum & Co** | **R50.00** | **Policy captured** — warehouse dispatch **2–7** d; courier at checkout (**<R3k** free threshold) | **~R50–R150** (**unverified**) | **proof passed with notes** | **Low** | **Plan** **net-new** preview row |
| **DW-OD-05** | Adjustable mini aluminium smartphone & tablet stand | **Office & Desk** | **CellTime** | **R149.00** | **Policy captured** — **free ship >R500**; **1–3** d after dispatch (**unverified** at checkout) | **~R149** if free ship holds (**unverified**) | **proof passed with notes** | **Low–mod** | **Plan** **net-new** preview row — trim supplier marketing claims in copy |

**Evidence (local; not committed):** `artifacts/suppliers/slice-21dx/<id>/capture-notes.txt`

---

## 3. Per-product staging posture

### 3.1 **DW-KS-01** — sink strainer

| Field | Planning posture |
| --- | --- |
| **Preview-safe title idea** | Stainless Steel Kitchen Sink Strainer — Preview |
| **Description direction** | Functional fit for standard sinks; easy clean; **no** food-safety guarantees; **no** universal-fit promise beyond “designed for most standard kitchen sinks” (supplier desk wording — **unverified** in use) |
| **Price posture** | **`price-to-confirm`** / placeholder — **not** final **R30** retail |
| **Delivery wording** | Imported/local-supplier-route honesty: timing **confirmed before fulfilment**; **no** fixed day count until ship proof closes |
| **Media / image-use** | **Blocked** — **0** media; placeholder visual only until **PO** image-use gate |
| **Claim restrictions** | **No** anti-clog performance guarantees; **no** odour/health claims |
| **Remaining proof gap** | Checkout **ZA** shipping quote; public returns policy; image PO |

**Admin overlap (**21DL**):** `sink-strainer-stainless-steel` exists (**R0.00**, preview tags) — execution slice must choose **update existing** vs **new handle**; **not** decided here.

---

### 3.2 **DW-TA-01** — cable ties set

| Field | Planning posture |
| --- | --- |
| **Preview-safe title idea** | Cable Tidies Set (100 pcs) — Preview |
| **Description direction** | Nylon cable ties for desk/PC cable management; **100 pcs**; **150 mm**; factual specs from **13O** / **DirectTech** desk — **unverified** until sample check |
| **Price posture** | **`price-to-confirm`** — desk supplier **R19** is **not** approved storefront price |
| **Delivery wording** | Local-supplier-route + controlled-pilot add-on: extended timing **possible**; estimate **confirmed before fulfilment** |
| **Media / image-use** | **Blocked** — align **13O** exact-item proof; **no** **`image-permission-confirmed`** |
| **Claim restrictions** | **No** tensile-strength / “heavy duty” superlatives beyond supplier fact sheet |
| **Remaining proof gap** | Exact checkout ship fee; landed margin after ship; stock near launch |

**Admin overlap:** `cable-tidies-set` — **ACTIVE**, preview tags; variant SKU **not** **PCB-CT-25150** on row (**21DL**).

---

### 3.3 **DW-HL-02** — drawer divider

| Field | Planning posture |
| --- | --- |
| **Preview-safe title idea** | 5-Division Drawer Divider — Preview |
| **Description direction** | Organises drawers for stationery, cosmetics, utensils; **no** load-rating claims |
| **Price posture** | **`price-to-confirm`** |
| **Delivery wording** | Policy band **2–7** working days total (**unverified** for buyer address) — use non-final “timing varies” pilot wording |
| **Media / image-use** | **Blocked** |
| **Claim restrictions** | **No** “fits all drawers” — note minimum drawer dimensions if listed |
| **Remaining proof gap** | Resolve **Sold Out** vs **In Stock: 32** conflict; checkout ship quote |

**Admin overlap:** **No** row — maps programme **DG-HL-01** concept; **net-new** handle TBD in execution slice.

---

### 3.4 **DW-KS-04** — compact cutlery organiser

| Field | Planning posture |
| --- | --- |
| **Preview-safe title idea** | Compact Cutlery Drawer Organiser — Preview |
| **Description direction** | Angled compartments; **BPA-free** plastic (supplier desk); cutlery **not** included |
| **Price posture** | **`price-to-confirm`** |
| **Delivery wording** | **2–7** day standard total (**policy**); non-final pilot honesty |
| **Media / image-use** | **Blocked** |
| **Claim restrictions** | **No** “fits all drawers” — minimum **8 cm** drawer height (supplier desk) |
| **Remaining proof gap** | Checkout courier fee; margin review |

**Admin overlap:** **No** dedicated row — **net-new** handle TBD.

---

### 3.5 **DW-OD-05** — aluminium stand

| Field | Planning posture |
| --- | --- |
| **Preview-safe title idea** | Adjustable Aluminium Phone & Tablet Stand — Preview |
| **Description direction** | Desk stand for phones/small tablets; adjustable angle; **no** “perfect” / charging-performance claims |
| **Price posture** | **`price-to-confirm`** |
| **Delivery wording** | Local route; **1–3** business days after dispatch (**policy** — **unverified**); **no** guaranteed window on storefront |
| **Media / image-use** | **Blocked** |
| **Claim restrictions** | **No** fast-charge compatibility; **no** device compatibility list without proof |
| **Remaining proof gap** | Confirm **R0** ship at checkout; claim scrub vs **CellTime** marketing copy |

**Admin overlap:** **Do not** reuse **`foldable-magnetic-phone-holder-desktop-tablet-stand`** (**DG-OD-01** / **CJ**) — separate local-first row if created.

---

## 4. Required controls

All five planned rows **must** inherit the programme preview-safety envelope (**21DF**, **13I** class, **21DQ** posture):

| Control | Requirement |
| --- | --- |
| **`Supplier verified`** | **Prohibited** |
| **Final price claim** | **Prohibited** unless separate **PO** approval |
| **Final delivery promise** | **Prohibited** — use deferred / pilot honesty only |
| **Stock / warranty guarantee** | **Prohibited** on storefront |
| **Add to Cart** | **Disabled** / not offered |
| **Buy Now** | **Disabled** / not offered |
| **Checkout / payment / customer flow** | **Blocked** |
| **Supplier media on PDP** | **Blocked** unless separate **PO** image-use approval |
| **Inventory** | **0** quantity, **DENY** policy, **`availableForSale: false`** where programme requires |
| **Tags (planning class)** | `preview-only`, `price-to-confirm`, `non-purchasable`, `supplier-proof-in-progress`, `local-supplier-route` (proposed), collection assignment per category — **execution slice must confirm exact set with Security** |
| **Publication** | Restricted preview only — **no** launch publication widening |

**Approved delivery honesty baseline (planning reference):** “Imported supplier-route item. Delivery timing varies by supplier, warehouse, and courier method. Final delivery estimate is confirmed before fulfilment.” + controlled-pilot add-on where applicable.

---

## 5. Products excluded from this starter set

| ID / subject | Reason deferred |
| --- | --- |
| **DW-KS-03** | **watch** — **Zhoozh** shipping policy not captured on **21DX** desk |
| **DW-OD-02** | **watch** — **Loot** ship cost not on PDP; marketplace chain |
| **DW-TA-03** | **proof passed with notes** but **excluded** from best **5** — reserve / second tech slot; not in PO-approved starter |
| **DW-HL-01** | **proof passed with notes** but higher landed **~R279** — reserve home slot |
| **DW-KS-06** | **watch** — **shopadeal** **404**; Bob Shop proxy only |
| **DG-OD-01** | **CJ** **watch** — existing row **`foldable-magnetic-phone-holder-desktop-tablet-stand`** stays **restricted preview**; **no** fresh calculator proof; superseded by **DW-OD-05** for local-first planning |
| **DG-KS-01** | **reject / replace** — **CJ** SKU removed; existing row **`beverage-bottle-oil-bottle-handle-holder`** **not** promoted — replacement planning via **DW-KS-01** only |
| **usb-bag-sealer** (3rd **CJ** row) | Out of **21DY** scope — existing **CJ** controlled-pilot member; unchanged |
| **All other `DW-*` from 21DW** | Not in best **5** — remain search backlog |

---

## 6. Remaining proof gates

| Gate | Applies to | Owner |
| --- | --- | --- |
| **Checkout shipping quote** | **DW-KS-01** (mandatory before treating kitchen lead as execution-ready) | **Operator** |
| **Firm delivery bands** | All rows where only policy-class evidence exists | **Operator** / **Product Manager** |
| **Stock confirmation** | **DW-HL-02** (UI conflict), **DW-KS-01** (reconfirm **6** in stock) | **Operator** |
| **Media / image-use review** | All **5** | **Product Owner** |
| **Return / refund confirmation** | **DW-KS-01**, **DW-OD-05** (weak desk capture) | **Product Manager** |
| **Margin review** | All **5** — landed bands **unverified** | **Product Owner** |
| **Security / Compliance review** | Whole **5-product** plan before any Admin/write | **Security / Compliance Engineer** — **next owner** |
| **Variant SKU linkage** | **DW-TA-01** → **PCB-CT-25150** on `cable-tidies-set` | **DevOps** (future execution slice only) |
| **Handle / import decision** | Net-new rows (**DW-HL-02**, **DW-KS-04**, **DW-OD-05**) vs update placeholders | **Product Owner** + **Product Manager** |

**No gate in this slice authorises:** import/sync, app install, **`Supplier verified`**, checkout testing, or theme publish.

---

## 7. Product Owner decision options

| Option | Description | **21DY** recommendation |
| --- | --- | --- |
| **A** | Approve **Security / Compliance** review for the **5-product** starter set | **Recommended** |
| **B** | Reduce to **4** products — exclude **DW-KS-01** until shipping proof captured | **Acceptable** if PO wants zero-**watch** execution set |
| **C** | Continue quote cleanup for **watch** rows (**DW-KS-01**, plus backlog **03**, **06**, **OD-02**) | **Recommended** in parallel with **A** |
| **D** | Pause catalogue work | Always valid — preview-only hold |

**Recommended:** **A** + **C** — proceed to **Security / Compliance** on this plan while **Operator** captures **DW-KS-01** checkout ship quote.

---

## 8. Execution sequence (after approvals — not authorised now)

1. **Security / Compliance** — **21DY** plan review (**docs-only**).
2. **Product Owner** — confirm **4** vs **5** set and handle strategy (update vs net-new).
3. **Operator** — close **DW-KS-01** ship quote; refresh **21DX**-class notes if needed.
4. **Separate bounded Admin/write slice** — tags, titles, body, SKU, **`price-to-confirm`**, **no** media — **only** if **PO** + Security approve.
5. **QA** — rendered preview PDP pass (**21DQ** class) on new/updated handles.
6. **No** launch, **no** checkout, **no** **`Supplier verified`**.

---

## 9. Strict confirmations

- **Docs-only** in **21DY** — **no** Shopify Admin mutation, import/sync, app install, visibility change, checkout, publish, theme push, **`Supplier verified`**, or media enablement.
- **No** committed `artifacts/` or `zadropshipping/`.
- **No** credentials, cookies, tokens, or private dashboard material in this doc.
- **Existing CJ rows** remain **restricted preview only** per **21DX** **Option C**.

---

## 10. Next owner

**Security / Compliance Engineer** — review **§4** controls, claim posture (**§3**), and category/handle overlap (**§2**, **§5**) before any Admin/write planning slice.

**LLD:** unchanged unless Security finds direct contradiction.
