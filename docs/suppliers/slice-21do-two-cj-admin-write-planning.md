# Slice 21DO — two existing CJ Admin/write planning (docs only)

**Document type:** Bounded Admin/write execution plan — planning only  
**Prepared:** 2026-05-21  
**Owner:** Product Manager  
**Slice:** **21DO**  
**Store:** `dropshippoc.myshopify.com`  
**Preview theme:** `151207542967` (internal restricted preview — **21DF**)

**Upstream:**

- **Slice 21DN** — security review (**`c55a370`**, **PASS WITH NOTES**)
- **Slice 21DM** — staging hygiene plan (**`ea70b92`**, **PASS WITH NOTES**)
- **Slice 21DL** — read-only product audit (**`6588464`**)
- **Slice 21DK** — post-login proof analysis (**`bf2f9eb`**, **0** fresh proof passed)
- **Field spec:** `docs/pilot/mzansi-select-cj-3-sku-staging-field-spec-v1.md` (**§3.1**, **§3.3**, **§4.1**, **§4.3**, **§6**)

**Product Owner decision (this slice):** **Option A** — bounded Admin/write **planning only**. **No** Admin/write **execution** approved in **21DO**.

**Unverified rule:** **21AB** economics and Admin prices **R249** / **R699** remain **planning-only** until fresh **CJ** calculator proof closes (**21DK** class).

---

## 1. Executive summary

| Item | Posture |
| --- | --- |
| **Scope** | **2** existing **CJ** controlled-pilot products only |
| **Slice type** | **Docs-only** planning — **no** Shopify Admin mutation |
| **Execution** | **Blocked** until separate PO-signed execution approval (**§9**) |
| **Security gate** | **21DN PASS WITH NOTES** — planning gate satisfied |
| **Verdict** | **PASS WITH NOTES** — plan ready for **Product Owner** execution sign-off |

---

## 2. Products in scope

| Launch ID | Handle | Variant SKU | Variant | Product type |
| --- | --- | --- | --- | --- |
| **DG-KS-01** | `beverage-bottle-oil-bottle-handle-holder` | **CJYD230000901AZ** | **Color / Blue** | Kitchen & Storage |
| **DG-OD-01** | `foldable-magnetic-phone-holder-desktop-tablet-stand` | **CJYD245830501AZ** | **Color / Gun Gray** | Tech Accessories |

**Excluded from this plan:** **`usb-bag-sealer`**, all other catalogue rows, net-new product create, **CJ** import/sync, third-party apps.

---

## 3. Task 1 — Current state checkpoint (required before any write)

DevOps **must** capture a **read-only** baseline **immediately before** the first mutation in a future execution slice. Do **not** rely on **21DL** alone — Admin may have drifted.

### 3.1 Checkpoint method

| Step | Requirement |
| --- | --- |
| **1** | Read-only Admin GraphQL or equivalent CLI read (`shopify store execute` — **no** mutations) |
| **2** | Record evidence under **`artifacts/devops/slice-21do-pre-write-checkpoint/`** (local; **not** committed) |
| **3** | Abort write if live state differs materially from this plan without **Product Owner** re-approval |

### 3.2 Fields to capture per handle

| Field group | Fields |
| --- | --- |
| **Identity** | product GID, handle, title, vendor, product type |
| **Status** | `status` (**ACTIVE** expected per **21DL**), created/updated timestamps |
| **Commerce** | variant SKU, variant option values, price, compare-at, `availableForSale`, inventory quantity, inventory policy |
| **Tags** | full tag list (minimum set expected: `cj-imported-supplier`, `controlled-pilot`, `non-purchasable`, `preview-only`, `price-to-confirm`) |
| **Publication** | Online Store publication **Yes/No**, other channel scopes |
| **Collection** | membership in **`controlled-pilot`** only (no stray collections) |
| **Media** | media count (**0** expected) |
| **Body** | full description HTML (for rollback) |
| **Metafields** | any existing price-to-confirm or pilot metafields (read-only inventory) |

### 3.3 Expected baseline (from **21DL** — verify live)

| Signal | **DG-KS-01** | **DG-OD-01** |
| --- | --- | --- |
| **Admin status** | **ACTIVE** | **ACTIVE** |
| **`availableForSale`** | **false** | **false** |
| **Inventory** | **0**, **DENY** | **0**, **DENY** |
| **Price** | **R249** (planning) | **R699** (planning) |
| **Compare-at** | blank | blank |
| **Online Store published** | **Yes** | **Yes** |
| **Media count** | **0** | **0** |
| **`controlled-pilot`** | **Yes** | **Yes** |

**Drift alert:** Older docs (**21AL**, **21AG**) describe **DRAFT** + publication **0**. If live read shows unexpected **`availableForSale: true`**, extra publications, or missing preview tags — **stop** and escalate to **Product Owner** + **Security / Compliance**.

---

## 4. Task 2 — Exact allowed Admin fields (future execution only)

Only the fields below may be changed in a **separate**, PO-approved execution slice. All changes must preserve **non-purchasable** / **preview-only** posture.

### 4.1 Allowed — both handles

| Admin field | Allowed change | Constraints |
| --- | --- | --- |
| **Title** | Preview-safe cleanup only | Match **§6** targets; **no** blocked claims (**field spec §4**) |
| **Description (body HTML)** | Replace/align with **field spec §3.1** or **§3.3** assembly | Order: product-specific → imported-route → controlled-pilot → support; **no** blocked phrases |
| **Tags** | Add/remove only to preserve or reinforce preview posture | **Must retain minimum:** `cj-imported-supplier`, `controlled-pilot`, `non-purchasable`, `preview-only`, `price-to-confirm` |
| **Product type** | Set only if blank/wrong | **DG-KS-01:** Kitchen & Storage; **DG-OD-01:** Tech Accessories |
| **Variant option value** | Correct label only | **Blue** / **Gun Gray** — **no** SKU change |
| **Variant SKU** | **No change** unless correcting a provable error | **CJYD…** in variant SKU **only** — **no** metafield CJ ref |
| **Metafields (price-to-confirm)** | Update **only** if already present and used for preview-safe “price to be confirmed” copy | **No** new metafields that imply final price or **Supplier verified** |
| **SEO title/description** | Preview-safe alignment with title/body | Same claim blocks as body |

### 4.2 Allowed — conditional (PO must confirm in execution brief)

| Field | Condition |
| --- | --- |
| **Variant price (ZAR)** | **Default: no change.** May remain **R249** / **R699** as planning bands. Any change requires explicit PO note that price stays **non-final** and **`price-to-confirm`** tag remains |
| **Legacy tag hygiene** | Remove obsolete tags **only** if PO lists them in execution brief and removal does **not** drop minimum preview tags |

### 4.3 Explicitly unchanged in allowed scope

| Field | Required value |
| --- | --- |
| **Handle** | **No change** |
| **Product GID** | **No** delete/archive |
| **`availableForSale`** | **false** |
| **Inventory quantity** | **0** |
| **Inventory policy** | **DENY** |
| **Compare-at price** | blank |
| **Media** | **0** — **no** upload |
| **Vendor** | **DropShipPOC** (unless PO documents vendor rename — **not** in default plan) |
| **Online Store publication** | Preserve current published state for preview — **no** new channels |
| **`controlled-pilot` collection** | Remain member — **no** new collections |

---

## 5. Task 3 — Exact blocked fields and actions

### 5.1 Blocked Admin fields

| Blocked field / action | Reason |
| --- | --- |
| **`Supplier verified`** tag or equivalent | Proof incomplete (**21DK**) |
| **`availableForSale: true`** | **21AR** class commerce risk |
| **Inventory > 0** or **CONTINUE** policy | Implies stock availability |
| **Compare-at / “was” pricing** | Final-price implication |
| **Media upload / CJ image URL** | **21DN** media gate |
| **Metafield CJ reference** | Field spec **§2** — SKU only |
| **New product create** | Existing rows only |
| **Handle change** | Breaks preview URLs and audit trail |
| **Product delete / archive** | Out of hygiene scope unless rollback |
| **Additional sales channels** | Exposure risk |
| **Removing** `non-purchasable`, `preview-only`, or `price-to-confirm` | Commerce/claim risk |
| **SEO or body copy** with **§4.1** / **§4.3** blocked phrases | Claim risk |

### 5.2 Blocked programme actions

| Blocked action | Reason |
| --- | --- |
| **Add to Cart / Buy Now** enablement | Theme + Admin commerce gate |
| **Checkout / payment / customer-order flows** | **21DF** internal preview only |
| **Final price approval** | **`price-to-confirm`** posture |
| **Final delivery promise** | Imported route — confirm before fulfilment only |
| **Warranty / in-stock guarantee** | Not evidenced |
| **Product import / sync** | Not approved |
| **CJ / DSers app install** | Not approved |
| **Publish / live launch** | Password-gated preview only |
| **Preview theme push** | Separate DevOps slice |
| **Public store password removal** | Customer-access gate |
| **Third row `usb-bag-sealer`** in same batch | Separate claim-risk profile |

---

## 6. Task 4 — Claim / copy guardrails per product

Source of truth for blocked phrases: **field spec §4.1** (**DG-KS-01**), **§4.3** (**DG-OD-01**). Global blocks: **no** `Supplier verified`, **no** fast/local delivery, **no** launch-ready language.

### 6.1 **DG-KS-01** — `CJYD230000901AZ`

| Area | Guardrail |
| --- | --- |
| **Title target** | Beverage & Oil Bottle Handle Holder |
| **Body source** | Field spec **§3.1** (exact assembly order) |
| **Must say** | Fit depends on bottle size/shape; imported route; timing confirmed before fulfilment; controlled pilot |
| **Must not say** | universal fit; fits all bottles; spill-proof; leak-proof; food-grade; dishwasher-safe; heat-resistant; guaranteed pouring; anti-slip guarantee; heavy-duty; child-safe; brand compatibility; warranty |
| **Delivery honesty** | May reference **20–60 day** imported **class** from **21AB** in internal planning only — customer-facing copy uses non-final “extended imported-supplier timing” wording from field spec, **not** a guaranteed window |

### 6.2 **DG-OD-01** — `CJYD245830501AZ`

| Area | Guardrail |
| --- | --- |
| **Title target** | Foldable Magnetic Phone Holder & Desktop Tablet Stand |
| **Body source** | Field spec **§3.3** (exact assembly order) |
| **Must say** | Suitability depends on device size, weight, case, surface; compatibility confirmed before fulfilment; imported route; controlled pilot |
| **Must not say** | compatible with all phones/tablets; guaranteed magnetic strength; MagSafe-certified; anti-slip guarantee; supports all tablets; car-safe; driving use; vacuum mount; heavy-duty; military-grade; charging support; universal compatibility; warranty |
| **Commercial note** | **R699** vs **~$23.41** landed (**21AB** desk) — margin review before any price discussion; **not** a security block on planning |

### 6.3 Pre-write copy review checklist (execution slice)

- [ ] Title scanned against blocked list for that SKU  
- [ ] Body scanned against **§4.1** or **§4.3**  
- [ ] Tags exclude `supplier-verified` / `Supplier verified` variants  
- [ ] No “in stock”, “ready to ship”, “ships in 24 hours”, or local-fast implication  
- [ ] **`price-to-confirm`** present  
- [ ] Security notified if copy materially broadens claims  

---

## 7. Task 5 — Rollback plan

Align with field spec **§6** and **21DN** §7.3.

### 7.1 Before write

| Step | Action |
| --- | --- |
| **1** | Complete **§3** checkpoint; store JSON/CSV + optional screenshots under **`artifacts/devops/slice-21do-pre-write-checkpoint/`** |
| **2** | If checkpoint cannot be captured for a handle — **do not write** that handle |

### 7.2 Rollback triggers (during or after write)

| Trigger | Action |
| --- | --- |
| **`availableForSale`** becomes **true** | Immediate revert; treat as **21AR**-class incident |
| **Preview tags removed** | Restore tag list from checkpoint |
| **Blocked claim introduced** | Restore title + body from checkpoint |
| **Media count > 0** | Remove media; restore **0** |
| **Unintended publication/channel** | Restore publication scopes from checkpoint |
| **Collection membership wrong** | Restore **`controlled-pilot`** only |

### 7.3 Rollback procedure

| Scenario | Procedure |
| --- | --- |
| **Hygiene update only** (row pre-existed) | Restore exact checkpoint values: title, body, tags, product type, variant option, price, compare-at, AFS, inventory, publication, collection membership |
| **Partial failure** (one of two handles) | Roll back failed handle only; report other handle unchanged |
| **Cannot restore** | Escalate **Product Owner**; pause second handle; **no** further mutations |

### 7.4 Evidence after rollback

Record rollback outcome under **`artifacts/devops/slice-21do-rollback/`** (local; **not** committed). Tracker update in a **separate** docs slice if needed.

---

## 8. Task 6 — Post-write QA plan

Execution slice **must not** close without **QA / Test Engineer** sign-off on preview theme **`151207542967`**.

### 8.1 Admin row QA (per handle)

| Check | Pass criterion |
| --- | --- |
| **Handle / SKU** | Unchanged; **CJYD…** on variant only |
| **Title / body** | Matches approved **§6** targets; blocked-claim scan **PASS** |
| **Tags** | Minimum five preview tags present |
| **`availableForSale`** | **false** |
| **Inventory** | **0**, **DENY** |
| **Price** | Planning band or PO-approved non-final; **`price-to-confirm`** tag present |
| **Media** | **0** |
| **`controlled-pilot`** | Member; **no** extra programme collections |
| **Publication** | No new public channels vs checkpoint |

**Reference class:** **Slice 21AG** row validation, adapted for **ACTIVE** + preview tags.

### 8.2 Storefront preview QA (password-gated)

| Check | Pass criterion |
| --- | --- |
| **PDP loads** | Preview URL for handle on theme **`151207542967`** |
| **Add to Cart** | Absent or disabled / preview-only |
| **Buy Now** | Absent |
| **Checkout path** | Not reachable from PDP |
| **Price display** | Price-to-confirm or non-final posture — **not** “final sale” |
| **Delivery copy** | Imported-route honesty; **no** fast/local guarantee |
| **Images** | No catalog media on PDP (placeholder/neutral only) |
| **Collection card** | If surfaced in **`controlled-pilot`**, same non-purchasable posture |

**Reference class:** **Slice 21CL** sweep; **21AN** collection preview checks where applicable.

### 8.3 QA evidence

| Item | Location |
| --- | --- |
| **Admin read-back** | `artifacts/qa/slice-21do-post-write-admin/` |
| **Preview DOM / notes** | `artifacts/qa/slice-21do-post-write-preview/` |
| **Commit to repo** | **No** — artifacts stay local |

### 8.4 QA verdict gates

| Verdict | Meaning |
| --- | --- |
| **PASS** | All **§8.1** and **§8.2** checks pass |
| **PASS WITH NOTES** | Informational findings; no commerce/claim regression |
| **FAIL** | Any AFS true, purchasable pattern, blocked claim, or media enablement — **rollback** required |

---

## 9. Task 7 — Fresh CJ calculator proof dependency

| Source | Status | Planning impact | Execution impact |
| --- | --- | --- | --- |
| **21DK** | **0** passed; **2× watch** | Does **not** block **21DO** planning | **Recommended** before execution; **required** if execution brief changes price or delivery copy beyond field spec |
| **21AB** | Stale desk economics | May inform internal margin notes only | **Must not** be sole basis for final price or delivery claims |
| **21DH** | Top-8 gate **INCONCLUSIVE** | Inherited for these two SKUs only | No change |

### 9.1 Dependency rules

| Execution brief content | Calculator proof |
| --- | --- |
| **Copy/tags/title hygiene only** (default plan) | **Recommended** (**21DK Option A**) but **not** mandatory if PO execution approval accepts **21AB**-inherited planning prices unchanged |
| **Price change** or **compare-at** | **Mandatory** fresh **ZA** calculator capture before write |
| **Delivery window stated numerically** on PDP | **Mandatory** fresh proof + **Security** re-review |

### 9.2 Manual capture minimum (when run)

Per **DG-KS-01** and **DG-OD-01**: **ZA** destination, unit cost, ship to **ZA**, delivery band text, landed total — sanitised notes only in repo docs; raw dashboards **not** committed.

---

## 10. Task 8 — Product Owner approval wording (required before execution)

**21DO** does **not** constitute execution approval. DevOps **must not** mutate Admin until the **Product Owner** records the following (email, ticket, or committed checkpoint doc):

### 10.1 Required approval text (template)

> **Product Owner approval — Slice 21DO execution**  
> I approve bounded Shopify Admin/write execution for **exactly two** products on **`dropshippoc.myshopify.com`**:  
> - **`beverage-bottle-oil-bottle-handle-holder`** (**CJYD230000901AZ**, variant **Blue**)  
> - **`foldable-magnetic-phone-holder-desktop-tablet-stand`** (**CJYD245830501AZ**, variant **Gun Gray**)  
>  
> Execution is limited to **§4** allowed fields in **`docs/suppliers/slice-21do-two-cj-admin-write-planning.md`**.  
> **§5** blocked actions remain forbidden.  
> **No** `Supplier verified`, **no** purchase enablement, **no** checkout/payment/customer access, **no** media, **no** import/sync/app install, **no** publish/live launch.  
> Pre-write checkpoint (**§3**) and post-write QA (**§8**) are **required**.  
> Rollback per **§7** applies on any commerce or claim regression.  
> [Optional: Fresh CJ calculator proof completed / waived for price-only hygiene: \_\_\_\_ ]  
> Approved by: \_\_\_\_ Date: \_\_\_\_

### 10.2 Waiver language (calculator — optional)

If PO waives fresh calculator for **copy-only** hygiene:

> I accept execution without fresh **21DK** calculator proof because changes are **copy/tag hygiene only** and staging prices remain **R249** / **R699** with **`price-to-confirm`** unchanged.

### 10.3 Execution slice naming

Recommended execution tracker label: **Slice 21DP** (or next DevOps slice ID assigned in **`docs/project-control.md`**).

---

## 11. Planned field delta summary (execution target)

| Field | **DG-KS-01** | **DG-OD-01** |
| --- | --- | --- |
| **Title** | Align to **§6.1** if drift | Align to **§6.2** if drift |
| **Body** | Full **§3.1** assembly if not already exact | Full **§3.3** assembly if not already exact |
| **Tags** | Ensure minimum five preview tags | Same |
| **Price** | Keep **R249** unless PO brief says otherwise | Keep **R699** unless PO brief says otherwise |
| **All other fields** | Preserve checkpoint values | Preserve checkpoint values |

---

## 12. Strict confirmations (this slice)

- **Docs-only** — **no** Shopify Admin mutation, import/sync, app install, publication change, publish, theme push, checkout/payment/customer access, **`Supplier verified`**, or media enablement.
- **No** `artifacts/` or **`zadropshipping/`** committed.
- **No** passwords, tokens, cookies, customer/order/payment data, supplier credentials, or raw private dashboard material in this doc.

---

## Next owner

**Product Owner** — issue execution approval (**§10**) or request fresh **CJ** calculator proof (**§9**) first.  
**DevOps / Platform Engineer** — only after **§10** approval: checkpoint (**§3**) → bounded write (**§4**) → QA (**§8**) → rollback if needed (**§7**).
