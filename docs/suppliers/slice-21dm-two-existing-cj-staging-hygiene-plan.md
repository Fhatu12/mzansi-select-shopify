# Slice 21DM — two existing CJ staging hygiene plan (docs only)

**Document type:** Staging hygiene plan — existing Shopify rows only  
**Prepared:** 2026-05-21  
**Owner:** Product Manager  
**Slice:** **21DM**  
**Store:** `dropshippoc.myshopify.com`  
**Upstream:** **Slice 21DL** (**`6588464`**) — read-only product audit; **Slice 21DK** — post-login proof analysis; **Slice 21DG** launch-candidate shortlist.

**Related execution records (historical):** `docs/pilot/mzansi-select-cj-3-sku-staging-field-spec-v1.md` (**21AE** / **21AF-D** / **21AG**); `docs/checkpoints/slice-21df-internal-reviewer-acceptance.md`.

**Unverified rule:** Planning figures from **21AB** (**2026-05-14**) and desk staging prices (**R249** / **R699**) are **not** fresh proof and **not** final commercial approval.

---

## 1. Executive decision

| Decision | Posture |
| --- | --- |
| **Use existing CJ rows only** | **Yes** — **two** products already in Shopify; **no** net-new product creation for this plan |
| **No new import** | **Yes** |
| **No sync** | **Yes** — **no** **CJ** / **DSers** app install or catalogue sync |
| **No `Supplier verified`** | **Yes** — remains **`Supplier proof in progress`** |
| **No purchase enablement** | **Yes** — **no** checkout, payment, or customer-order flows |
| **No launch approval** | **Yes** — internal restricted preview only (**21DF**) |

**This slice:** **docs-only** hygiene plan for **future** Admin/write work on **two** handles. **No** Shopify Admin mutation, publication change, theme push, or media enablement in **21DM**.

**Verdict:** **PASS WITH NOTES** — plan ready for **Product Owner** acceptance and **Security / Compliance** review.

---

## 2. Product mapping

| Launch ID | Product (desk) | Shopify handle | Supplier SKU | Variant (exact) | Shopify status (**21DL**) | Proof status (**21DK**) | Risk level |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **DG-KS-01** | Beverage & oil bottle handle holder | `beverage-bottle-oil-bottle-handle-holder` | **CJYD230000901AZ** | **Color / Blue** | **ACTIVE** | **watch** — PDP opened; **no** **ZA** ship/landed in fresh notes | **medium** |
| **DG-OD-01** | Foldable magnetic phone & small tablet stand | `foldable-magnetic-phone-holder-desktop-tablet-stand` | **CJYD245830501AZ** | **Color / Gun Gray** | **ACTIVE** | **watch** — same gap | **medium** |

### Proof limitations (both rows)

| Limitation | Detail |
| --- | --- |
| **Fresh economics** | **21DK** did **not** pass the shipping/landed-cost gate |
| **Inherited desk reference** | **21AB** captured **ZA** calculator signals (**unverified** for **21DM** until refreshed) |
| **Staging prices in Admin** | **R249** (**DG-KS-01**), **R699** (**DG-OD-01**) — planning bands only |
| **21AB desk economics (planning only)** | **DG-KS-01:** ship **$6.21**, landed **~$7.40**; **DG-OD-01:** ship **$8.65**, landed **~$23.41** — long **20–60 day** imported band |

---

## 3. Required staging hygiene before any future Admin/write

Applies to **both** handles when a **separate** approved execution slice runs. Align with `docs/pilot/mzansi-select-cj-3-sku-staging-field-spec-v1.md` unless **Product Owner** supersedes.

| Hygiene item | Requirement |
| --- | --- |
| **Preview-safe title** | No absolute fit/performance claims; match approved field-spec titles |
| **Preview-safe description** | Product-specific copy + imported-route + controlled-pilot + support blocks — **no** blocked claims (**§4** field spec) |
| **Price-to-confirm posture** | Keep **`price-to-confirm`** tag; prices are **planning** only — **not** final |
| **No final delivery claim** | Use **21AB**/**21AC** honesty: imported route; timing confirmed before fulfilment — **no** fast/local implication |
| **No `Supplier verified` label** | **Forbidden** in tags, copy, or merchandising |
| **No final stock/warranty claim** | Zero inventory, **DENY** policy; **no** in-stock guarantee or warranty promises |
| **No Add to Cart** | Theme + **`non-purchasable`** / preview-safe PDP posture (**21CJ** / **21CL** baseline) |
| **No Buy Now** | Same |
| **No checkout/payment/customer flow** | Store remains password-gated; commerce gates **unchanged** |
| **No supplier media** | **Media count 0** — **no** **CJ** images unless **separate** **Product Owner** media/content-use approval |

### Hygiene checklist per handle (planning target)

| Field | **DG-KS-01** | **DG-OD-01** |
| --- | --- | --- |
| **Title** | Beverage & Oil Bottle Handle Holder (preview-safe) | Foldable Magnetic Phone Holder & Desktop Tablet Stand (preview-safe) |
| **Variant value** | **Blue** | **Gun Gray** |
| **Variant SKU** | **CJYD230000901AZ** only (no metafield CJ ref) | **CJYD245830501AZ** only |
| **Tags (minimum)** | `cj-imported-supplier`, `controlled-pilot`, `non-purchasable`, `preview-only`, `price-to-confirm` | Same |
| **Collection** | **`controlled-pilot`** membership only (already present) | Same |
| **Compare-at** | Blank | Blank |
| **Inventory** | **0**, **DENY** | **0**, **DENY** |
| **`availableForSale`** | **false** (preserve per **21DL**) | **false** |

---

## 4. Risk controls

| Control | Application |
| --- | --- |
| **Stale 21AB economics warning** | Any Admin price or margin discussion must cite **21AB** as **historical** until **21DK**-class fresh calculator capture |
| **Long-delivery imported-supplier warning** | Customer-facing copy must preserve extended imported timing (**20–60 days** class per **21AB** — **not** a guarantee) |
| **Claim review required** | **Security / Compliance** must re-check blocked-claim lists (**field spec §4.1** / **§4.3**) before write |
| **Media/image-use review required** | **No** media in plan; separate PO gate if images proposed later |
| **Margin review required** | **DG-OD-01** tight at **R699** planning band vs **~$23.41** landed desk signal — buffer review before any final price talk |
| **Security/Compliance before Admin/write** | **Mandatory** — this plan does **not** substitute **21AC**/**21AH**-class review for any **new** write delta |

### Claim-risk summary

| ID | Primary cautions |
| --- | --- |
| **DG-KS-01** | Bottle fit, food-contact adjacency, pouring ease — avoid universal fit / food-grade claims |
| **DG-OD-01** | Magnetic strength, device fit, tablet size — avoid MagSafe / universal compatibility claims |

---

## 5. Existing Shopify state from 21DL

| Signal | **DG-KS-01** | **DG-OD-01** | **Third CJ row (excluded)** |
| --- | --- | --- | --- |
| **Admin status** | **ACTIVE** | **ACTIVE** | `usb-bag-sealer` **ACTIVE** |
| **`availableForSale`** | **false** | **false** | **false** |
| **Online Store published** | **Yes** | **Yes** | **Yes** |
| **Preview tags** | **Yes** (`preview-only`, `price-to-confirm`, `non-purchasable`, `cj-imported-supplier`, `controlled-pilot`) | **Yes** | **Yes** (same tag set) |
| **Media count** | **0** | **0** | **0** |
| **Media gate** | **Closed** — no `image-permission-confirmed`; theme blocks catalog media without PO tag | Same | Same |
| **Non-purchasable posture** | **`non-purchasable`** tag + **AFS false** + theme preview guards | Same | Same |
| **`onlineStoreUrl`** | **null** (password-gated preview context) | **null** | **null** |
| **Vendor** | DropShipPOC | DropShipPOC | DropShipPOC |

**Documentation drift:** **21AL**/**21AG** era records describe **`DRAFT`** status; **21DL** read shows **`ACTIVE`** with safer commerce signals. Any future write slice must **read live Admin** first and **not** assume **DRAFT**.

---

## 6. Products excluded

| Item | Reason excluded from **21DM** hygiene scope |
| --- | --- |
| **`usb-bag-sealer`** (**CJYD211196101AZ**) | Third **CJ** controlled-pilot row — **not** in top-2 staging depth; **high** food/seal claim risk (**21DG**); outside **Option B** two-product focus |
| **DG-KS-03** (sink strainer / **P5260S**) | **No** Shopify row with supplier SKU; **Ecomstock** blocked (**21DK**); local route not proofed |
| **DG-TA-01** (cable tidies / **PCB-CT-25150**) | Preview handle exists but **no** variant SKU; **Gadgetgyz** desk blocked |
| **DG-OD-02** (acrylic stand / **DP0402**) | Exists as **DRAFT** **Gadgetgyz** pilot row — **21W-B** route closed; not **CJ** |
| **DG-HL-01** | **No** **CJ** SKU locked; **no** Admin product |
| **DG-OD-03** | **No** **CJ** SKU locked; **no** Admin product |
| **DG-TA-03** | **No** **CJ** SKU locked; **no** Admin product |
| **Slice 13I preview quartet** | Separate preview-only programme — not part of two-**CJ** hygiene plan |
| **Gadgetgyz pilot drafts (×4)** | Unpublished; pilot abandoned for execution |
| **Legacy demo catalogue (~18)** | Out of supplier-proof scope |

---

## 7. Future approval gates

| Gate | Owner | Status |
| --- | --- | --- |
| **1. Product Owner accepts docs-only plan** | **Product Owner** | **Pending** (this slice) |
| **2. Security/Compliance review** | **Security / Compliance Engineer** | **Required** before any Admin/write |
| **3. Fresh CJ calculator proof (if required)** | **Operator** + **Product Manager** | **Recommended** per **21DK** before write; PO may accept **21AB** for planning-only |
| **4. Admin/write execution plan** | **DevOps / Platform Engineer** | **Separate** slice only — field-level delta vs **21DL** baseline |
| **5. QA after any later write** | **QA / Test Engineer** | **Required** — **21AG**/**21CL**-class row + PDP checks on preview **`151207542967`** |

**Explicit blockers until gates close:**

- **`Supplier verified`**
- Final pricing / delivery promises / product claims
- Checkout / payment / customer access
- **CJ** app install / import / sync
- Supplier media on storefront

---

## 8. Product Owner decision options

| Option | Description | Recommendation |
| --- | --- | --- |
| **A — Approve Security/Compliance review for 2 existing CJ handles** | Proceed to **Security / Compliance** on this plan + field-spec claim blocks | **Recommended next step** |
| **B — Require fresh CJ calculator proof first** | Complete **21DK Option A** manual capture before any write plan execution | **Recommended** if PO wants fresh economics before **any** Admin touch |
| **C — Pause supplier work** | Preserve **21DF** preview; defer hygiene execution | Valid if bandwidth limited |
| **D — Continue supplier search toward 5 per category** | Parallel **21DG** gap fill (**HL/OD/TA** SKUs, local routes) | Does **not** block **A** on existing two rows |

**Suggested sequence:** **PO accepts 21DM** → **B** or parallel **A** → **Security / Compliance** → bounded **Admin/write** execution slice (only if PO approves) → **QA**.

---

## Strict confirmations (this slice)

- **Docs-only** — **no** Shopify Admin mutation, import/sync, app install, publication change, publish, theme push, checkout/payment/customer access, **`Supplier verified`**, or media enablement.
- **No** `artifacts/` or **`zadropshipping/`** committed.
- **No** passwords, tokens, cookies, customer/order/payment data, supplier credentials, or raw private dashboard material in repo docs.

## Next owner

**Security / Compliance Engineer** — review **§3–§4** claim/delivery/commerce posture for **`beverage-bottle-oil-bottle-handle-holder`** and **`foldable-magnetic-phone-holder-desktop-tablet-stand`** before any Admin/write slice.
