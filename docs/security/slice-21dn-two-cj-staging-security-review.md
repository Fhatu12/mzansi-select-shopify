# Slice 21DN — two existing CJ staging security / compliance review

**Document type:** Security / compliance review note  
**Prepared:** 2026-05-21  
**Owner:** Security / Compliance Engineer  
**Slice:** **21DN**  
**Store:** `dropshippoc.myshopify.com`  
**Preview theme:** `151207542967` (internal restricted preview — **21DF** accepted)

**Upstream (read-only):**

- **Slice 21DM** — two-existing-**CJ** staging hygiene plan (**`ea70b92`**, **PASS WITH NOTES**)
- **Slice 21DL** — current imported product audit (**`6588464`**, read-only GraphQL)
- **Slice 21DK** — post-login supplier evidence analysis (**`bf2f9eb`**, **0** fresh proof passed)
- **Slice 21DF** — internal reviewer acceptance (**password-gated** preview only)
- **Slice 21AH** / **21AC** / **21AU** — prior **CJ** draft/preview security posture
- **Field spec:** `docs/pilot/mzansi-select-cj-3-sku-staging-field-spec-v1.md` (**§4.1**, **§4.3** blocked claims)

**Scope:** Offline documentation review of **two** existing Shopify rows only. **No** live Shopify Admin mutation, import/sync, app install, publication change, theme push, checkout/payment/customer-access enablement, **`Supplier verified`**, or media enablement in this slice.

**Unverified rule:** **21AB** economics and Admin staging prices (**R249** / **R699**) are **planning-only** and **not** security-approved commercial proof.

---

## 1. Security / Compliance verdict

**PASS WITH NOTES**

The two existing **CJ** controlled-pilot rows are **acceptable to proceed to a future bounded Admin/write *planning* slice** (field-level hygiene delta against a **21DL** baseline), subject to the controls in §6–§7. This review does **not** approve Admin/write **execution**, purchase enablement, public launch, fresh economics as final, supplier media, or **`Supplier verified`**.

Current commerce and claim posture remains **defensible** only while:

- variants stay **`availableForSale: false`**
- preview tags and theme non-purchasable guards remain intact
- copy stays within field-spec blocked-claim lists
- imported-route / long-delivery honesty is preserved
- store access stays **password-gated** (**21DF**)

---

## 2. Commerce posture

| Control | **DG-KS-01** | **DG-OD-01** | Assessment |
| --- | --- | --- | --- |
| **Add to Cart** | Theme + **`non-purchasable`** tag expected | Same | **Blocked** — no evidence of purchasable PDP pattern on accepted preview QA (**21CL** / **21DF**) |
| **Buy Now** | Same | Same | **Blocked** |
| **Checkout / payment / customer order** | Store password-gated; no slice approves widening | Same | **Blocked** |
| **`availableForSale`** | **false** (**21DL**) | **false** | **PASS** — mitigates historical **21AR** class risk |
| **Inventory** | **0**, **DENY** | **0**, **DENY** | **PASS** |
| **Price posture** | **R249** + **`price-to-confirm`** | **R699** + **`price-to-confirm`** | **PASS WITH NOTES** — planning band only; not final public price |
| **Online Store publication** | **Yes** | **Yes** | **PASS WITH NOTES** — acceptable only under **password-gated** preview; **`onlineStoreUrl` null** in **21DL** |
| **Admin status** | **ACTIVE** | **ACTIVE** | **NOTE** — docs drift from **21AL**/**21AG** **DRAFT** era; live Admin read mandatory before any write |

**Commerce verdict:** **PASS WITH NOTES** for continued **internal preview-only** posture. **FAIL** if any future slice sets **`availableForSale: true`**, removes **`non-purchasable`** / **`preview-only`**, enables checkout, or drops store password without a new security gate.

---

## 3. Claim posture

| Claim class | Required posture | Current evidence | Verdict |
| --- | --- | --- | --- |
| **Final supplier claim** | **Forbidden** | Vendor **DropShipPOC**; **`cj-imported-supplier`**; no **`Supplier verified`** tag in **21DL** | **PASS** |
| **`Supplier verified` label** | **Forbidden** | Not present; programme remains **Supplier proof in progress** | **PASS** |
| **Final delivery promise** | **Forbidden** | Field-spec imported-route blocks; **21AB** band **20–60 days** is planning class only | **PASS WITH NOTES** — any Admin copy edit must preserve non-final timing |
| **Warranty / stock certainty** | **Forbidden** | **0** inventory, **DENY**; no warranty copy in accepted staging spec | **PASS** |
| **Exaggerated product performance** | **Forbidden** per **§4.1** / **§4.3** | **21AG** QA accepted conservative wording for three-SKU set; hygiene plan targets preview-safe titles | **PASS WITH NOTES** — re-check on **every** write delta |

**Claim verdict:** **PASS WITH NOTES** — no accepted doc set implies verification or launch-ready claims for these two rows. Future Admin/write must re-run blocked-claim checklist (**field spec §4**) per handle.

---

## 4. Product-specific risks

### 4.1 **DG-KS-01** — beverage & oil bottle handle holder (`CJYD230000901AZ` / **Blue**)

| Risk area | Concern | Required control |
| --- | --- | --- |
| **Misleading fit** | Buyers may assume universal bottle compatibility | Block **§4.1** phrases (*fits all bottles*, *universal fit*, brand compatibility) |
| **Food / pouring safety** | Adjacency to beverages/oils invites spill-proof, food-grade, child-safe implications | Block food-grade, spill/leak-proof, guaranteed pouring, child-safe |
| **Durability** | Light accessory may be overstated as heavy-duty | Block anti-slip guarantee, heavy-duty durability, heat/dishwasher claims |
| **Delivery expectations** | Small item; customers may expect local/fast ship | Keep imported-route + **20–60 day** class disclosure (**21AB** planning — not a guarantee) |

**Risk level:** **medium** — acceptable for preview hygiene planning if controls above stay enforced.

### 4.2 **DG-OD-01** — foldable magnetic phone & tablet stand (`CJYD245830501AZ` / **Gun Gray**)

| Risk area | Concern | Required control |
| --- | --- | --- |
| **Magnetic / compatibility** | MagSafe, universal phone/tablet, guaranteed magnet strength | Block **§4.3** list (*MagSafe-certified*, *compatible with all phones/tablets*, etc.) |
| **Misleading use** | Car/driving mount implications | Block car-safe mounting, driving use, vacuum mount |
| **Tablet size** | “Desktop tablet stand” may imply all tablet sizes | Block *supports all tablets*; use cautious preview-safe title only |
| **Margin / price trust** | **R699** vs **~$23.41** landed (**21AB** desk) is tight | **Commercial note** — not a security **FAIL**; flag for **Product Owner** before any final price talk |
| **Delivery expectations** | Higher ticket may amplify disappointment on long import | Same long-route honesty as **DG-KS-01** |

**Risk level:** **medium** — acceptable for preview hygiene planning with **§4.3** enforcement and margin review before pricing discussions.

### 4.3 Excluded third **CJ** row (out of scope)

**`usb-bag-sealer`** (**CJYD211196101AZ**) remains **outside** this two-row review — elevated food/seal claim risk (**21DG**). Do not bundle into the same Admin/write execution slice without separate security review.

---

## 5. Supplier proof limitations

| Source | Status | Security implication |
| --- | --- | --- |
| **21AB** (**2026-05-14**) | **Stale / planning-only** | May inform desk planning only; **must not** be cited as fresh **ZA** calculator proof |
| **21DK** | **0** fresh proof passed; **2× watch** | PDP opened; **no** captured ship/landed/**ZA** destination — economics **unverified** |
| **21DH** | Top-8 gate **INCONCLUSIVE** | Only these two inherit **21AB** in shortlist; gate not closed |
| **Long-delivery imported route** | **21AC** / **21AB** class | Customer-facing copy must state imported supplier, extended timing, confirmation before fulfilment — **no** fast/local implication |

**Proof verdict:** **PASS WITH NOTES** for **planning** the hygiene slice; **BLOCKED** for treating ship/landed or **R249**/**R699** as security-approved commercial facts until **21DK Option A** (manual calculator) or equivalent fresh capture closes.

---

## 6. Media posture

| Signal | **DG-KS-01** | **DG-OD-01** | Verdict |
| --- | --- | --- | --- |
| **Media count** | **0** | **0** | **PASS** |
| **Supplier / CJ images** | **Blocked** pending separate **Product Owner** content-use decision | Same | **BLOCKED** |
| **Theme catalog media** | No **`image-permission-confirmed`**; theme blocks without PO tag (**21DM**) | Same | **PASS** |
| **Pre-enablement review** | Image-use + claim review **required** before any media enablement | Same | **Mandatory gate** |

**Media verdict:** **PASS** (current zero-media posture). Enabling images requires **new** **Product Owner** + **Security / Compliance** approval — not covered by **21DN**.

---

## 7. Admin/write gate (future slices)

### 7.1 What may be allowed later (bounded planning → separate approved execution)

Only after **Product Owner** approves a dedicated execution slice **and** this **21DN** gate is recorded:

| Allowed (hygiene-only delta) | Notes |
| --- | --- |
| **Read live Admin** first | Reconcile **ACTIVE** vs historical **DRAFT** docs |
| **Title / body copy** alignment | Preview-safe; field-spec **§3** assembly; **§4** blocks |
| **Tag preservation** | Minimum: `cj-imported-supplier`, `controlled-pilot`, `non-purchasable`, `preview-only`, `price-to-confirm` |
| **`controlled-pilot`** membership | **No** new collection; **no** Gadgetgyz-era re-adds |
| **Variant SKU** | **CJYD…** in variant SKU **only** — no metafield CJ ref |
| **Preserve `availableForSale: false`** | Explicit post-write verification (**21AR** lesson) |
| **Preserve inventory 0 / DENY** | No stock guarantee implication |

### 7.2 What must remain blocked (until separate PO + security decisions)

| Blocked action | Reason |
| --- | --- |
| **`Supplier verified`** | No fresh proof closure |
| **Final pricing / compare-at as “real” price** | **price-to-confirm** must stay |
| **Final delivery / warranty / stock claims** | Proof incomplete |
| **Checkout / payment / customer access / public launch** | **21DF** internal preview only |
| **CJ app install / import / sync** | Route not execution-approved |
| **Supplier media enablement** | No PO content-use approval |
| **Setting `availableForSale: true`** | **21AR** rollback trigger class |
| **Removing preview/non-purchasable tags** | Commerce exposure risk |
| **Publishing beyond password-gated preview** | Requires new security + QA chain |
| **Third row `usb-bag-sealer`** in same write batch | Separate claim-risk profile |

### 7.3 Rollback and QA requirements (execution slice)

| Requirement | Detail |
| --- | --- |
| **Pre-write snapshot** | Document handle, status, tags, AFS, inventory, publication scopes |
| **Rollback plan** | Revert tags, copy, AFS, publication per field-spec **§6** / **21AF-D** narrative |
| **Post-write QA** | **21AG**/**21CL**-class row checks + PDP on preview **`151207542967`** |
| **Security re-check** | Any delta touching copy, tags, AFS, publication, or media triggers **new** review if risk broadens |

---

## 8. Security verdict summary table

| Review area | Verdict |
| --- | --- |
| **1. Commerce posture** | **PASS WITH NOTES** |
| **2. Claim posture** | **PASS WITH NOTES** |
| **3. Product-specific risks** | **PASS WITH NOTES** (both **medium**) |
| **4. Supplier proof limitations** | **PASS WITH NOTES** (planning only; execution economics **blocked**) |
| **5. Media posture** | **PASS** (enablement **blocked**) |
| **6. Admin/write planning gate** | **PASS WITH NOTES** |
| **Overall** | **PASS WITH NOTES** |

---

## 9. Remaining blockers (execution — not planning)

- Fresh **CJ** **ZA** calculator proof (**21DK Option A**) — **recommended** before Admin touch; **not** required to accept **21DM**/**21DN** planning docs.
- **`Supplier verified`**, final pricing, final delivery, warranty, stock guarantees, public launch, checkout/payment, customer access, app install/import/sync, supplier media.
- **Documentation drift:** treat **ACTIVE** + Online Store pub. as live truth; do not assume **DRAFT** from **21AL**/**21AG** era.
- **Margin buffer** on **DG-OD-01** at planning **R699** — **Product Owner** commercial gate.

---

## 10. Recommended Product Owner decision

| Option | Description | Security alignment |
| --- | --- | --- |
| **A — Approve bounded Admin/write *planning* slice** | DevOps/PM drafts field-level delta vs **21DL**; no execution in planning slice | **Aligned** with **PASS WITH NOTES** |
| **B — Require fresh CJ calculator proof first** | Close **21DK** watch before any Admin touch | **Strongest** risk reduction; **recommended** if economics-sensitive copy/prices will change |
| **C — Pause** | Preserve **21DF** preview; defer hygiene | **Valid** — no security objection |
| **D — Parallel supplier search** | **21DG** gap fill | Does not block **A** on existing two rows |

**Suggested sequence:** **PO accepts 21DN** → (**B** optional) → bounded Admin/write **planning** → PO approves execution slice → DevOps execution + **QA** → no launch/customer commerce without new gates.

---

## 11. Files inspected

- `docs/project-control.md`
- `docs/suppliers/slice-21dm-two-existing-cj-staging-hygiene-plan.md`
- `docs/suppliers/slice-21dl-current-imported-product-audit.md`
- `docs/suppliers/slice-21dk-post-login-supplier-evidence-analysis.md`
- `docs/checkpoints/slice-21df-internal-reviewer-acceptance.md`
- `docs/pilot/mzansi-select-cj-3-sku-staging-field-spec-v1.md`
- `docs/security/slice-21ah-cj-draft-security-posture-review.md`
- `docs/security/slice-21au-controlled-pilot-preview-security-review.md`

**Not inspected live:** Shopify Admin UI, supplier dashboards, orders, customers, payments, credentials, or local **`artifacts/`** binaries (referenced by pointer only).

---

## 12. Validation performed (this slice)

- Reviewed accepted **21DM** hygiene plan, **21DL** audit summary, **21DK** proof gaps, **21DF** preview acceptance, field-spec blocked claims, and prior **21AH**/**21AU** posture.
- Confirmed review scope is **two handles** only; third **CJ** row excluded.
- Confirmed **no** live Shopify, supplier login, checkout, payment, customer-access, app-install, or Admin mutation occurred for **21DN**.
- Confirmed no prohibited secrets or customer/order/payment data introduced in this note.

---

## 13. Strict confirmations (this slice)

- **Docs-only** — **no** Shopify Admin mutation, import/sync, app install, publication change, publish, theme push, checkout/payment/customer access, **`Supplier verified`**, or media enablement.
- **No** `artifacts/` or **`zadropshipping/`** committed.
- **No** passwords, tokens, cookies, customer/order/payment data, supplier credentials, or raw private dashboard material in this doc.

---

## 14. Knowledge capture

- **Reusable finding:** **`availableForSale: false`** on **CJ** variants is the critical commerce control when Admin status reads **ACTIVE** and Online Store publication is **Yes**; security review must pair Admin flags with theme/tag guards and password-gated preview.
- **Asset:** this review; **`docs/project-control.md`** tracker sync (**Slice 21DN**).
- **Location:** `docs/security/` for future equivalent reviews.

---

## Next owner

**Product Owner** — accept **21DN** and choose **Option A** (Admin/write planning), **Option B** (fresh calculator first), or **Option C** (pause). **DevOps / Platform Engineer** only after explicit PO approval of a separate bounded **execution** slice.
