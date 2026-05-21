# Slice 21DZ — five-product local-first starter security / compliance review

**Document type:** Security / compliance review note (docs only)  
**Prepared:** 2026-05-21  
**Owner:** Security / Compliance Engineer  
**Slice:** **21DZ**  
**Store:** `dropshippoc.myshopify.com`  
**Preview theme:** `151207542967` (internal restricted preview — **21DF** accepted)

**Upstream (read-only):**

- **Slice 21DY** — five-product local-first starter staging plan (`de848be`, **PASS WITH NOTES** planning only)
- **Slice 21DX** — Top **10** local shipping / landed proof (`74243f5`)
- **Slice 21DW** — local-first replacement sourcing (`cbcda45`)
- **Slice 21DL** — current imported product audit (read-only)
- **Slice 21DF** — internal reviewer acceptance (password-gated preview)
- **Slice 21DN** / **21DQ** — prior **CJ** two-row security + rendered QA posture

**Scope:** Offline review of whether the **21DY** five-product **local-first** starter set is safe to proceed to a **future bounded Admin/write planning** slice (and later execution only with separate PO approval). **No** live Shopify mutation, import/sync, app install, publication change, theme push, checkout/payment/customer access, **`Supplier verified`**, or media enablement in this slice.

**Unverified rule:** **21DX** economics, shipping bands, and stock signals are **planning-only** — not security-approved commercial or delivery proof.

---

## 1. Executive verdict

**PASS WITH NOTES**

The **five-product local-first starter** set is **acceptable to proceed to a future bounded Admin/write *planning* slice** subject to §3–§7 controls. This review does **not** approve Admin/write **execution**, product import/sync, purchase enablement, public launch, **`Supplier verified`**, supplier media on PDPs, or final price/delivery/stock claims.

**Conditional execution posture:**

| Row | **21DX** proof | Security posture for *future* Admin/write execution |
| --- | --- | --- |
| **DW-TA-01** | proof passed with notes | **Acceptable** in a bounded write slice after PO + planning doc |
| **DW-HL-02** | proof passed with notes | **Acceptable** after stock signal confirmed |
| **DW-KS-04** | proof passed with notes | **Acceptable** |
| **DW-OD-05** | proof passed with notes | **Acceptable** after marketing-claim scrub in copy |
| **DW-KS-01** | **watch** | **Hold** from execution until checkout **ZA** shipping quote and returns policy captured |

**Product Owner may** reduce the execution set to **four** products (exclude **DW-KS-01**) without changing this security verdict.

**Existing CJ rows** (**DG-KS-01**, **DG-OD-01**, third **CJ** SKU) remain **out of scope** — unchanged **restricted preview** posture per **21DX** Option C.

---

## 2. Product-by-product risk table

| ID | Category | Commerce risk | Claim risk | Proof / ops risk | Media risk | Overall |
| --- | --- | --- | --- | --- | --- | --- |
| **DW-KS-01** | Kitchen | Low if preview guards hold | **Mod** — drain-fit, food-adjacency, anti-clog | **High** — ship proof incomplete; returns weak | **Blocked** | **Mod** — plan OK; **execution hold** |
| **DW-TA-01** | Tech | Low | **Low** — qty/material if factual | **Mod** — ship at checkout; margin open | **Blocked** | **Low** |
| **DW-HL-02** | Home | Low | **Low–mod** — drawer size/fit | **Mod** — stock UI conflict | **Blocked** | **Low–mod** |
| **DW-KS-04** | Kitchen | Low | **Low–mod** — BPA-free, drawer height | **Mod** — courier fee at checkout | **Blocked** | **Low** |
| **DW-OD-05** | Office | Low | **Mod** — device size, stability, charging adjacency | **Mod** — free-ship rule unconfirmed at checkout | **Blocked** | **Low–mod** |

---

## 3. Product-specific risks (detail)

### 3.1 **DW-KS-01** — stainless steel sink strainer

| Risk area | Concern | Required control |
| --- | --- | --- |
| **Food / drain adjacency** | Kitchen sink context invites food-safe, anti-bacterial, or clog-free guarantees | **No** food-grade, anti-clog, odour-free, or guaranteed hygiene claims |
| **Misleading fit** | “Universal” or “all sinks” wording | Use cautious “designed for most standard kitchen sinks” only if retained; prefer dimension-free functional copy |
| **Corrosion / durability** | Stainless claims may imply lifetime performance | **No** rust-proof or lifetime durability guarantees |
| **Delivery** | No captured ship policy | **No** fixed delivery window on storefront; pilot honesty only |
| **Supplier proof** | **watch** on **21DX** | **Do not** execute Admin/write until ship quote + returns captured |

**Risk level:** **medium** for claims; **high** for proof completeness.

---

### 3.2 **DW-TA-01** — cable ties (**PCB-CT-25150**)

| Risk area | Concern | Required control |
| --- | --- | --- |
| **Quantity / material** | Wrong pack size or material on PDP | Lock **100 pcs**, **150 mm**, nylon class only with sample or supplier page verification at write time |
| **Durability** | “Heavy duty” or tensile guarantees | **No** tensile-strength or load guarantees beyond factual supplier specs |
| **Electrical safety** | Cable management ≠ electrical certification | **No** electrical-safety or fire-rating claims |
| **SKU integrity** | Admin row lacks **PCB-CT-25150** (**21DL**) | Variant SKU update must match **13O** exact-item record in execution slice |

**Risk level:** **low** — strongest tech row if SKU and copy stay factual.

---

### 3.3 **DW-HL-02** — 5-division drawer divider

| Risk area | Concern | Required control |
| --- | --- | --- |
| **Fit / size** | “Fits all drawers” | **No** universal-fit; cite dimensions only if verified on supplier page |
| **Load / capacity** | Overstated storage capacity | **No** weight-load or capacity guarantees |
| **Stock reliability** | **Sold Out** vs **In Stock: 32** conflict (**21DX**) | Reconfirm stock before any write; **DENY** / zero inv on preview row |

**Risk level:** **low–medium**.

---

### 3.4 **DW-KS-04** — compact cutlery organiser

| Risk area | Concern | Required control |
| --- | --- | --- |
| **Food contact** | Cutlery adjacency; **BPA-free** can imply food-safety approval | State material fact only; **no** food-safety certification or “safe for food” claims |
| **Drawer fit** | Minimum **8 cm** height (supplier desk) | May state minimum drawer height as factual dimension; **no** “fits all kitchens” |
| **Cutlery included** | Buyer expectation | Explicit “cutlery not included” on PDP |

**Risk level:** **low–medium**.

---

### 3.5 **DW-OD-05** — aluminium phone & tablet stand

| Risk area | Concern | Required control |
| --- | --- | --- |
| **Compatibility** | “Universal”, MagSafe, all tablets | **No** MagSafe-certified, **no** “all phones/tablets”, **no** max size without verified spec |
| **Stability / safety** | Car mount or driving use | **No** car-safe, driving, or crash-safe implications |
| **Charging** | Supplier page mentions charging while viewing | **No** fast-charge, charging-speed, or “perfect angle” marketing |
| **Tablet size** | “Up to 7.9 inches” (supplier desk — **unverified**) | If used, label as supplier-stated spec pending verification; otherwise omit |

**Risk level:** **low–medium** — copy discipline is the main gate.

---

## 4. Required controls

### 4.1 Commerce safety

| Control | Requirement | Assessment |
| --- | --- | --- |
| **Add to Cart** | **Disabled** / not offered on preview PDP | **Required** — theme + tags (**21DQ** class) |
| **Buy Now** | **Disabled** | **Required** |
| **Checkout / payment / customer order** | **Blocked** | **Required** — store remains password-gated (**21DF**) |
| **Purchase enablement** | **No** slice may enable without new security gate | **PASS** if unchanged |
| **Launch / publication widening** | **Blocked** | **Required** |
| **`availableForSale`** | **`false`** on variants | **Required** — **21DL** lesson for **CJ** applies to new rows |
| **Inventory** | **0**, **`DENY`** | **Required** |
| **Price display** | **`price-to-confirm`** / placeholder only | **Required** — desk **R30** / **R19** etc. are **not** final prices |

**Commerce verdict:** **PASS** for continued **internal preview-only** posture. **FAIL** if any future slice enables purchasable PDP, checkout, or drops password without re-review.

---

### 4.2 Product-claim safety

| Claim class | Requirement | Assessment |
| --- | --- | --- |
| **`Supplier verified`** | **Forbidden** | **PASS** — plan uses **`supplier-proof-in-progress`** only |
| **Final delivery promise** | **Forbidden** | **PASS WITH NOTES** — must use **21DY** deferred wording; **no** **2–7 day** guarantee on storefront |
| **Final price certainty** | **Forbidden** | **PASS** |
| **Stock / warranty guarantee** | **Forbidden** | **PASS** |
| **Exaggerated performance** | **Forbidden** per §3 | **PASS WITH NOTES** — per-product copy review mandatory at write time |

---

### 4.3 Proof limitations (security view)

| Limitation | Impact |
| --- | --- |
| **No strict itemised checkout shipping proof** (**21DX**) | Landed-cost and margin claims **not** security-approved |
| **DW-KS-01** remains **watch** | **Execution hold** for that SKU |
| **Planning bands only** | **R30–R90**, **~R19–R99**, etc. are **unverified** |
| **Stock signals** | **DW-HL-02** conflict must clear |
| **Returns / margin / media** | All **open** — not blockers for *planning* slice; blockers for *launch* |

---

### 4.4 Media / image-use posture

| Rule | Status |
| --- | --- |
| **Supplier media on PDP** | **Not approved** — **0** media on new/updated rows |
| **`image-permission-confirmed`** | **Not** to be set without **PO** image-use gate |
| **Sample / quality check** | **Required** before any future media enablement slice |
| **Placeholder visuals** | Acceptable under **21DF** / theme placeholder posture |

**Media verdict:** **PASS** while media count remains **0**.

---

## 5. Blockers

| # | Blocker | Affects | Clears when |
| --- | --- | --- | --- |
| **B1** | **DW-KS-01** incomplete shipping proof | **DW-KS-01** Admin/write **execution** | Operator checkout quote + returns policy on record |
| **B2** | **DW-HL-02** stock UI conflict | **DW-HL-02** execution | Supplier page shows consistent in-stock signal |
| **B3** | **No PO image-use approval** | All **5** — media | Separate **PO** decision |
| **B4** | **No margin / final pricing approval** | Commercial copy | **PO** commercial gate |
| **B5** | **Separate security review** if purchasable posture changes | Whole programme | N/A until scope change |

**Not blockers for Admin/write *planning* slice:** **B3**, **B4** (planning may proceed).

---

## 6. Allowed next planning scope (if any)

**Allowed (docs-only / planning-only — not execution):**

1. **Bounded Admin/write execution planning** document for up to **five** products (field-level delta spec: handles, titles, body HTML, tags, variant SKU, **`price-to-confirm`**, collections, **no** media).
2. **Product Owner** decision: **five** vs **four** products (exclude **DW-KS-01** until **B1** clears).
3. **Operator** checkout shipping quote for **DW-KS-01** (and optional confirmation for other rows).
4. **QA plan** referencing **21DQ** harness pattern for any future preview URLs.

**Allowed later in a separate PO-approved *execution* slice (not this review):**

- Create or update preview rows for **DW-TA-01**, **DW-HL-02**, **DW-KS-04**, **DW-OD-05** with **21DY** tag set + **§4** controls.
- Hygiene on **`cable-tidies-set`** (**DW-TA-01**) — SKU **PCB-CT-25150**, tags, copy only.
- **Hold** net-new/create for **DW-KS-01** until **B1** clears.

---

## 7. Blocked actions

Until explicit **PO** + security re-review per action:

| Action | Status |
| --- | --- |
| Shopify Admin write / import / sync | **Blocked** in **21DZ** |
| **`Supplier verified`** tag or copy | **Blocked** |
| Product media upload / catalog images on PDP | **Blocked** |
| **`availableForSale: true`**, purchasable variants | **Blocked** |
| Checkout, payment, customer accounts, markets widening | **Blocked** |
| Public launch, live theme publish, preview theme push | **Blocked** |
| Final price, final delivery date, stock guarantee on storefront | **Blocked** |
| Treating **21DX** landed bands as approved pricing | **Blocked** |
| Bundling **DW-KS-01** into execution while **watch** | **Blocked** (PO may waive by excluding SKU) |
| Conflating local-first rows with **`cj-imported-supplier`** tag without review | **Blocked** — use distinct **`local-supplier-route`** (proposed) or equivalent planning tag |

---

## 8. Admin/write gate (future slice requirements)

If **Product Owner** approves a bounded Admin/write **execution** slice after this review:

| Requirement | Detail |
| --- | --- |
| **Pre-write checkpoint** | Read-only GraphQL snapshot per handle (**21DL** / **21DP** class) |
| **Allowed fields** | Title, description, SEO (if in scope), tags, vendor (if planned), variant SKU, **`price-to-confirm`** price, collection membership, inventory **0** / **DENY**, **no** media |
| **Forbidden fields** | **`Supplier verified`**, compare-at “sale” pricing, media, **`availableForSale: true`**, publication beyond password-gated preview |
| **Copy checklist** | Per-product §3 restrictions; blocked-claim pass on every handle |
| **Post-write QA** | **21DQ**-class rendered PDP validation on preview theme **`151207542967`** |
| **Rollback** | Document revert to pre-write checkpoint; no silent publication widening |
| **CJ rows** | **Do not** modify **`beverage-bottle-oil-bottle-handle-holder`** or **`foldable-magnetic-phone-holder-desktop-tablet-stand`** in the same slice unless separately scoped |

---

## 9. Recommended Product Owner decision

| Option | Description | Security alignment |
| --- | --- | --- |
| **A** | Accept **21DZ**; authorise **bounded Admin/write planning** slice (docs only next) | **Recommended** |
| **B** | Authorise execution planning for **four** products only — exclude **DW-KS-01** until **B1** clears | **Recommended** if PO wants zero-**watch** execution set |
| **C** | Defer all Admin/write until **DW-KS-01** ship quote completes | **Acceptable** — stricter |
| **D** | Pause catalogue work | Always valid |

**Recommended:** **A** + **B** for execution scope — proceed with planning; default execution set **excludes DW-KS-01** unless **B1** closes first.

---

## 10. Strict confirmations

- **Docs-only** in **21DZ** — **no** Shopify Admin mutation, import/sync, app install, visibility change, checkout, publish, theme push, **`Supplier verified`**, or media enablement.
- **No** committed `artifacts/` or `zadropshipping/`.
- **No** credentials, cookies, tokens, or private dashboard material in this doc.

---

## 11. Next owner

**Product Owner** — accept **21DZ**; choose **four** vs **five** execution scope; authorise **bounded Admin/write planning** slice (docs only).

Then **Product Manager** (planning doc) → **DevOps** (execution only after separate PO approval + pre/post checkpoints).

**LLD:** unchanged unless a direct contradiction is found.
