# Slice 21EA — four-product local-first Admin/write planning (docs only)

**Document type:** Bounded Admin/write execution plan — planning only  
**Prepared:** 2026-05-21  
**Owner:** Product Manager  
**Slice:** **21EA**  
**Store:** `dropshippoc.myshopify.com`  
**Preview theme:** `151207542967` (internal restricted preview — **21DF**)

**Read-first:**

- `docs/project-control.md`
- `docs/suppliers/slice-21dy-five-product-local-starter-staging-plan.md` (`de848be`)
- `docs/security/slice-21dz-five-local-starter-security-review.md` (`4e13e7e`)
- `docs/suppliers/slice-21dx-top-10-local-shipping-proof.md` (`74243f5`)
- `docs/suppliers/slice-21dl-current-imported-product-audit.md`

**Upstream:**

- **Slice 21DZ** — security review **PASS WITH NOTES** — four-product execution set **recommended**; **DW-KS-01** execution **hold**
- **Slice 21DY** — five-product staging plan — **Product Owner** chose **4-product** scope for planning
- **Slice 21DL** — read-only audit — handle overlap for **DW-TA-01** only

**Product Owner decision (this slice):** **4-product** local starter set approved for **Admin/write planning only**. **DW-KS-01** **held back**. **No** Admin/write **execution** approved in **21EA**.

**Unverified rule:** Supplier prices, shipping bands, landed-cost ranges, stock signals, and returns text from **21DX** / **21DW** are **planning references** only — not approved storefront commercial proof.

---

## 1. Executive decision

| Decision | Status |
| --- | --- |
| **4-product local-first starter set approved for Admin/write planning only** | **Yes** — **Product Owner** scope after **21DZ** |
| **Products in planning scope** | **DW-TA-01**, **DW-HL-02**, **DW-KS-04**, **DW-OD-05** |
| **DW-KS-01 held back** | **Yes** — shipping/returns proof **watch** (**21DX**); security **B1** execution hold |
| **Admin / write execution** | **No** — not approved in this slice |
| **Product import / sync / app install** | **No** |
| **`Supplier verified`** | **No** |
| **Purchase enablement** (Add to Cart, Buy Now, checkout, payment, customer access) | **No** |
| **Public launch / publication widening** | **No** |
| **Preview theme push** | **No** |
| **Supplier media enablement** | **No** |

**Verdict:** **PASS WITH NOTES** — field-level execution plan is ready for **Product Owner** sign-off on a **future Slice 21EB** bounded Admin/write **execution** slice. **Existing CJ** controlled-pilot rows remain **unchanged** unless separately scoped.

---

## 2. Product mapping

| Candidate ID | Product name | Category | Supplier / source | Source price (desk) | Landed-cost planning range | Proof status (**21DX**) | Risk (**21DZ**) | Proposed Shopify handling |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **DW-TA-01** | PCBuilder LOCKDOWN 150 mm cable ties (100 pcs) black — **PCB-CT-25150** | **Tech Accessories** | **DirectTech** | **R19.00** | **~R19–R99** (**unverified**) | **proof passed with notes** | **Low** | **Align existing preview row** — handle **`cable-tidies-set`** (**ACTIVE**, **21DL**); update title/body/tags/variant SKU; **no** net-new create |
| **DW-HL-02** | 5-division drawer divider (**HAF-SD-4160**) | **Home & Living** | **UCAN** | **R34.00** | **~R34–R163** (**unverified**) | **proof passed with notes** | **Low–mod** | **Net-new preview row** — handle TBD in **21EB** (e.g. `five-division-drawer-divider-preview`); maps **DG-HL-01** concept; **no** dedicated row in **21DL** |
| **DW-KS-04** | Compact cutlery drawer organiser | **Kitchen & Storage** | **Decorum & Co** | **R50.00** | **~R50–R150** (**unverified**) | **proof passed with notes** | **Low** | **Net-new preview row** — handle TBD in **21EB** (e.g. `compact-cutlery-drawer-organiser-preview`) |
| **DW-OD-05** | Adjustable mini aluminium smartphone & tablet stand | **Office & Desk** | **CellTime** | **R149.00** | **~R149** if free-ship rule holds (**unverified**) | **proof passed with notes** | **Low–mod** | **Net-new preview row** — handle TBD in **21EB** (e.g. `adjustable-aluminium-phone-tablet-stand-preview`); **do not** reuse **`foldable-magnetic-phone-holder-desktop-tablet-stand`** (**DG-OD-01** / **CJ**) |

### 2.1 Held back (out of **21EA** / **21EB** default scope)

| Candidate ID | Product name | Reason |
| --- | --- | --- |
| **DW-KS-01** | Stainless steel kitchen sink drain strainer — **Pots And Things** | **watch** — checkout ship fee not captured; returns weak; security **B1** — resume only after Operator quote + returns on record and **PO** re-includes SKU |

**Admin overlap note (**21DL**):** **`sink-strainer-stainless-steel`** exists with preview tags — **do not** update for local-first execution until **DW-KS-01** gates close.

---

## 3. Allowed future write fields (execution slice only)

Only after **§9** Product Owner execution approval for **Slice 21EB** (or successor). All writes must preserve **non-purchasable** / **password-gated preview** posture (**21DF**, **21DZ**).

### 3.1 Allowed — all four products

| Admin field | Allowed change | Constraints |
| --- | --- | --- |
| **Title** | Preview-safe title per **§5** | Suffix **— Preview** or equivalent programme pattern |
| **Description (body HTML)** | Preview-safe factual copy + approved delivery honesty | **§5** copy controls; **no** blocked claims |
| **Product type** | Set category alignment | Tech / Home & Living / Kitchen & Storage / Office & Desk |
| **Tags** | Add/reinforce preview posture | **Minimum:** `preview-only`, `price-to-confirm`, `non-purchasable`, `supplier-proof-in-progress`; **proposed:** `local-supplier-route` — confirm with Security at execution brief |
| **Variant option label** | Single default variant label if needed | e.g. **Default Title** / **Standard** — factual only |
| **Variant SKU** | Set/correct supplier SKU | **DW-TA-01:** **PCB-CT-25150** on **`cable-tidies-set`** |
| **Variant price** | Placeholder **`0.00`** or existing **`price-to-confirm`** band | **Not** final retail; desk **R19** / **R34** etc. are **not** approved storefront prices unless PO explicitly documents placeholder band in **21EB** brief |
| **SEO title / description** | Preview-safe alignment with title/body | Same claim blocks as body |
| **Collection membership** | Assign to category collection + optional pilot collection | Per **21DY** — **no** launch collections; **controlled-pilot** only if PO lists in **21EB** brief |
| **Vendor** | Set supplier-facing vendor string if programme requires | Factual supplier name only — **not** **`Supplier verified`** |

### 3.2 Allowed — net-new rows only (**DW-HL-02**, **DW-KS-04**, **DW-OD-05**)

| Admin field | Allowed change | Constraints |
| --- | --- | --- |
| **Product create** | **One** net-new **ACTIVE** preview row per SKU | **Password-gated** Online Store publication only if PO confirms current preview publication pattern; **no** new sales channels |
| **Handle** | New handle chosen in **21EB** brief | Stable, preview-safe slug; documented in pre-write checkpoint |

### 3.3 Allowed — existing row only (**DW-TA-01**)

| Admin field | Allowed change | Constraints |
| --- | --- | --- |
| **Handle** | **No change** — retain **`cable-tidies-set`** | Preserves preview URLs |
| **Product GID** | **No** delete/archive | Hygiene only |

### 3.4 Explicitly unchanged in allowed scope

| Field | Required value |
| --- | --- |
| **`availableForSale`** | **`false`** |
| **Inventory quantity** | **0** |
| **Inventory policy** | **DENY** |
| **Compare-at price** | blank |
| **Media** | **0** — **no** upload |
| **`Supplier verified`** tag or copy | **absent** |
| **Checkout / payment / customer** | **unchanged** programme block |

---

## 4. Blocked fields and actions

### 4.1 Blocked Admin fields

| Blocked field / action | Reason |
| --- | --- |
| **`Supplier verified`** tag or equivalent | **21DZ** — proof in progress only |
| **`availableForSale: true`** | Commerce risk (**21AR** class) |
| **Inventory > 0** or **CONTINUE** policy | Stock guarantee implication |
| **Compare-at / sale pricing** | Final-price implication |
| **Media upload / supplier image URLs** | **21DZ** media gate (**B3**) |
| **Final price** on storefront | **PO** commercial gate (**B4**) |
| **Final delivery promise** (fixed day counts, guaranteed windows) | **21DZ** claim gate |
| **Stock / warranty guarantee** in body or tags | **21DZ** |
| **Removing** `non-purchasable`, `preview-only`, or `price-to-confirm` | Commerce/claim risk |
| **Handle change** on **`cable-tidies-set`** | URL / audit breakage |
| **Product delete** (except rollback) | Out of scope |
| **Additional sales channels** | Exposure risk |
| **SEO or body** with **§5** blocked phrases | Per-product claim risk |

### 4.2 Blocked programme actions

| Action | Status |
| --- | --- |
| Admin/write in **21EA** | **Blocked** — this slice is planning only |
| **DW-KS-01** / **`sink-strainer-stainless-steel`** execution | **Blocked** until **B1** clears |
| Product import / sync | **Blocked** |
| App install (**DSers**, **CJ**, etc.) | **Blocked** |
| **`cj-imported-supplier`** on local-first rows without review | **Blocked** — use **`local-supplier-route`** (proposed) or equivalent |
| Modifying **`beverage-bottle-oil-bottle-handle-holder`** or **`foldable-magnetic-phone-holder-desktop-tablet-stand`** in same slice | **Blocked** unless separate PO scope |
| Checkout, payment, customer accounts, markets widening | **Blocked** |
| Public launch, live theme publish, preview theme push | **Blocked** |
| Password removal / storefront unlock | **Blocked** without new security review |
| Treating **21DX** landed bands as approved pricing | **Blocked** |

---

## 5. Required copy controls per product

**Baseline delivery honesty (all four):**  
“Local-supplier-route item. Delivery timing varies by supplier, warehouse, and courier method. Final delivery estimate is confirmed before fulfilment.”  
Plus controlled-pilot add-on where programme requires — **no** fixed **2–7 day** or **1–3 day** **guarantee** on storefront.

### 5.1 **DW-TA-01** — cable ties

| Control | Requirement |
| --- | --- |
| **Exaggerated claims** | **No** “heavy duty”, tensile-strength, or load guarantees beyond factual supplier specs |
| **Universal compatibility** | **No** electrical-safety or fire-rating claims; cable management only |
| **Final delivery** | Deferred / pilot honesty only — **no** free-ship threshold promise as buyer guarantee |
| **Final stock** | **No** “always in stock” — inventory stays **0** / **DENY** |
| **Local route** | **`supplier-proof-in-progress`** + **`local-supplier-route`** (proposed) — **not** **`Supplier verified`** |
| **Factual locks** | **100 pcs**, **150 mm**, nylon class — verify at write time against **13O** / **DirectTech** desk |
| **Preview title idea** | Cable Tidies Set (100 pcs) — Preview |

### 5.2 **DW-HL-02** — drawer divider

| Control | Requirement |
| --- | --- |
| **Exaggerated claims** | **No** load-rating or “organises everything” superlatives |
| **Universal compatibility** | **No** “fits all drawers” — dimensions only if verified on supplier page |
| **Final delivery** | **No** guaranteed **2–7** day window — policy band is **unverified** per buyer address |
| **Final stock** | Reconfirm supplier stock signal before write (**Sold Out** vs **In Stock: 32** conflict); storefront still **no** stock promise |
| **Local route** | Proof-in-progress tags only |
| **Preview title idea** | 5-Division Drawer Divider — Preview |

### 5.3 **DW-KS-04** — cutlery organiser

| Control | Requirement |
| --- | --- |
| **Exaggerated claims** | **No** food-safety certification; **BPA-free** as material fact only |
| **Universal compatibility** | **No** “fits all drawers” — may state **8 cm** minimum drawer height (supplier desk — verify) |
| **Final delivery** | Non-final pilot honesty only |
| **Final stock** | **No** stock guarantee on PDP |
| **Included items** | Explicit **cutlery not included** |
| **Preview title idea** | Compact Cutlery Drawer Organiser — Preview |

### 5.4 **DW-OD-05** — aluminium stand

| Control | Requirement |
| --- | --- |
| **Exaggerated claims** | **No** fast-charge, “perfect angle”, or stability superlatives |
| **Universal compatibility** | **No** MagSafe-certified, **no** “all phones/tablets”, **no** max device size without verified spec |
| **Final delivery** | **No** **1–3 day** guarantee — policy class **unverified** at checkout |
| **Final stock** | **No** stock guarantee |
| **Supplier marketing scrub** | Remove **CellTime**-style charging/car-use implications from customer copy |
| **Preview title idea** | Adjustable Aluminium Phone & Tablet Stand — Preview |

---

## 6. Pre-write checkpoint requirements (future execution only)

**Not performed in 21EA.** DevOps **must** complete before the first mutation in **21EB**.

| Step | Requirement |
| --- | --- |
| **1** | Read current Shopify products — read-only Admin GraphQL or **`shopify store execute`** (**no** mutations) |
| **2** | **Per handle:** confirm **no** conflict with legacy demo rows, **Gadgetgyz** drafts, or **CJ** handles listed in **§4.2** |
| **3** | **DW-TA-01:** confirm **`cable-tidies-set`** baseline — tags, **AFS false**, **0** inventory, **DENY**, media **0**, variant SKU gap vs **PCB-CT-25150** |
| **4** | **Net-new three:** confirm chosen handles are **unused**; document proposed handle in execution brief |
| **5** | Save checkpoint under **`artifacts/devops/slice-21eb-pre-write-checkpoint/`** (local; **not** committed) |
| **6** | Abort write if live state differs materially from this plan without **PO** re-approval |

### 6.1 Checkpoint field groups (per product)

| Field group | Fields |
| --- | --- |
| **Identity** | product GID (if exists), handle, title, vendor, product type |
| **Status** | `status`, created/updated timestamps |
| **Commerce** | variant SKU, price, compare-at, `availableForSale`, inventory quantity, inventory policy |
| **Tags** | full tag list |
| **Publication** | Online Store **Yes/No** only — match **21DF** password-gated preview pattern |
| **Collections** | current membership |
| **Media** | count (**0** expected) |
| **Body** | full HTML (for rollback) |

**Drift alert:** If any row shows **`availableForSale: true`**, extra channel publications, or missing `preview-only` / `non-purchasable` / `price-to-confirm` — **stop** and escalate to **Product Owner** + **Security / Compliance**.

---

## 7. Rollback plan (future execution only)

| Scenario | Action |
| --- | --- |
| **Blocked field accidentally changed** | Restore title, body, tags, SKU, price, collections from pre-write checkpoint |
| **Net-new row created in error** | Archive or set **DRAFT** per programme rollback SOP — **only** with PO approval; prefer revert fields first |
| **Unintended publication widening** | Remove non–Online Store publications; confirm password-gated preview only |
| **`availableForSale` or inventory drift** | Force **`false`**, **0**, **DENY** per checkpoint |
| **Media uploaded by mistake** | Delete all product media; confirm **0** count |
| **CJ rows touched** | Roll back **`beverage-bottle-oil-bottle-handle-holder`** and **`foldable-magnetic-phone-holder-desktop-tablet-stand`** from checkpoint if modified |

**Evidence:** post-rollback read-only snapshot in **`artifacts/devops/slice-21eb-rollback/`** (local; **not** committed).

---

## 8. Post-write QA plan (future execution only)

Reference **21DQ** harness pattern; evidence under **`artifacts/qa/slice-21eb-four-local-pdp-validation/`** (local; **not** committed).

| Check | Requirement |
| --- | --- |
| **Admin readback** | GraphQL/read confirms title, tags, SKU, **AFS false**, **0** / **DENY**, media **0**, **no** **`Supplier verified`** |
| **PDP rendered validation** | Preview theme **`151207542967`** — each handle desktop + mobile |
| **Homepage / search / controlled-pilot** | Smoke pass — local rows discoverable only as intended; **no** purchase CTAs |
| **No purchase path** | Add to Cart / Buy Now absent or disabled; checkout unreachable |
| **Copy spot-check** | **§5** restrictions per handle |
| **Regression** | Existing **CJ** preview PDPs unchanged if not in scope |

**QA verdict target:** **PASS WITH NOTES** acceptable; **FAIL** if purchasable path or blocked claims appear.

---

## 9. Product Owner execution approval wording (template for Slice 21EB)

Copy and complete for a **future** bounded Admin/write **execution** slice. **Incomplete templates are not approval.**

```
Product Owner approval — Slice 21EB bounded local-first Admin/write execution

Date: __________
Approver: __________

I approve bounded Shopify Admin write for the following products ONLY:
  1. DW-TA-01 — handle: cable-tidies-set (existing row hygiene)
  2. DW-HL-02 — handle: __________________________ (net-new)
  3. DW-KS-04 — handle: __________________________ (net-new)
  4. DW-OD-05 — handle: __________________________ (net-new)

EXPLICITLY EXCLUDED until separate approval:
  - DW-KS-01 / sink-strainer-stainless-steel
  - All CJ rows (beverage-bottle-oil-bottle-handle-holder, foldable-magnetic-phone-holder-desktop-tablet-stand, usb-bag-sealer) unless listed above
  - Import/sync, app install, theme push, publish/launch widening, password removal

ALLOWED FIELDS (this execution only):
  - Preview-safe title, body/description, product type, SEO title/description
  - Tags: preview-only, price-to-confirm, non-purchasable, supplier-proof-in-progress, local-supplier-route (if confirmed)
  - Variant SKU (PCB-CT-25150 on DW-TA-01); variant label if needed
  - Placeholder price-to-confirm / 0.00 — NOT final retail
  - Collection assignment as listed: __________
  - Net-new product create for DW-HL-02, DW-KS-04, DW-OD-05 only

BLOCKED (must not change):
  - Supplier verified; availableForSale true; inventory > 0; CONTINUE policy
  - Media upload; compare-at pricing; final price/delivery/stock/warranty claims
  - Checkout/payment/customer enablement; new sales channels; handle change on cable-tidies-set

PRE-WRITE CHECKPOINT:
  - Required path: artifacts/devops/slice-21eb-pre-write-checkpoint/
  - DevOps confirms read-only snapshot complete before first mutation

ROLLBACK:
  - On FAIL or blocked-field drift: restore from checkpoint per slice-21ea §7

POST-WRITE QA:
  - Admin readback + PDP validation on theme 151207542967 + no purchase path
  - Evidence: artifacts/qa/slice-21eb-four-local-pdp-validation/

Security: 21DZ PASS WITH NOTES — no re-review required unless scope changes above.

Signed: __________
```

---

## 10. Execution sequence (not authorised now)

1. **Product Owner** — accept **21EA**; sign **§9** template when ready for **21EB**.
2. **Operator** (parallel) — optional checkout ship quotes for landed-cost refresh; **DW-KS-01** quote for future inclusion.
3. **DevOps** — pre-write checkpoint → bounded writes per **§3** → rollback on drift.
4. **QA** — **§8** rendered validation.
5. **Product Owner** — accept QA; **no** launch/checkout/media without new slices.

---

## 11. Strict confirmations

- **Docs-only** in **21EA** — **no** Shopify Admin mutation, product create/edit/delete, import/sync, app install, visibility change, checkout, publish, theme push, **`Supplier verified`**, or media enablement.
- **No** committed `artifacts/` or `zadropshipping/`.
- **No** credentials, cookies, tokens, auth/session files, customer/order/payment data, supplier credentials, or private dashboard material in this doc.
- **Existing CJ rows** remain **restricted preview only** per **21DX** Option C.

---

## 12. Next owner

**Product Owner** — accept **21EA**; when execution is desired, complete **§9** and authorise **Slice 21EB** (bounded Admin/write execution) with **DevOps** + **QA** checkpoints.

**LLD:** unchanged unless Security finds direct contradiction.
