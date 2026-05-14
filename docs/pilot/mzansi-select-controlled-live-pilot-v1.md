# Mzansi Select — Controlled live pilot (Gadgetgyz 4-SKU) — implementation planning v1 — **Gadgetgyz route closed Slice 21W-B (historical planning record)**

**Document type:** Controlled pilot implementation plan (planning only)  
**Prepared:** 2026-05-11  
**Updated:** 2026-05-12 — **Slice 21K** … **21S** (through **§15B** controlled pilot shipping-configuration readiness-only review — **docs only**; **no** Admin execution). **2026-05-13** — **Slice 21S** **Product Owner closure / tracker hygiene** — **`docs/project-control.md`** + **§15B** aligned; readiness docs commit **`3d1511b`**. **2026-05-13** — **Slice 21T** bounded Shopify Admin shipping-profile execution recorded under **§15C**. **2026-05-13** — **Slice 21U** controlled pilot **shipping isolation QA** **PASS WITH NOTES** (**Product Owner accepted**) under **§15D**; evidence **`artifacts/qa/slice-21u-controlled-pilot-shipping-isolation-validation/20260513-223303/`**. **2026-05-13** — **Slice 21V** **Gadgetgyz** **4-SKU** supplier re-check evidence **PASS WITH NOTES / CONDITIONAL** under **§15E**. **2026-05-13** — **Slice 21W-B** **Gadgetgyz** controlled-pilot **authenticated basket/delivery capture** **INCONCLUSIVE / BLOCKED** — **Product Owner** accepts **route closure** as **not ready** for the **current** pilot — **§15F**; evidence **`artifacts/catalogue/slice-21w-b-gadgetgyz-authenticated-basket-delivery-capture/20260513-232047/`** (local only; **not** committed); supplier pivot **CJdropshipping** + **DSers** for **next** **Product Manager** strategy reset; **`Mzansi Select Controlled Pilot — Gadgetgyz`** **dormant/blocked** posture (**no** Admin cleanup in this pass). **Slice 21X** — **supplier strategy reset** (**CJdropshipping** + **DSers**) — **PASS WITH NOTES** — **§15G**; **next** **Slice 21Y** app-permission/privacy review **before** install/import.  
**Owner:** Product Owner  
**Status:** **Slice 21J** / **21K** / **21L** — **PASS WITH NOTES**. **Slice 21M** — **planning recorded** (**§12**). **Slice 21N** — **PASS WITH NOTES** (**§13**; commit **`417e78f…`**). **Slice 21O** — **PASS WITH NOTES** — product-staging readiness (**§14**) **accepted**. **Slice 21P** — **bounded implementation plan recorded** (**§15**). **Slice 21Q-B1** — **exact write plan recorded for Product Owner review** (**§15A**) — **staging execution not approved yet**. **Slice 21S** — **PASS WITH NOTES** (**§15B**; readiness-only; **Product Owner accepted**; tracker commit **`3d1511b`**). **Slice 21T** — **PASS WITH NOTES** (**§15C**; bounded Shopify Admin shipping-profile execution recorded). **Slice 21U** — **PASS WITH NOTES** (**§15D**; read-only isolation QA; **Product Owner accepted**; **mixed-cart** checkout-rate validation **BLOCKED** pending separate test boundary). **Slice 21V** — **PASS WITH NOTES / CONDITIONAL** (**§15E**; **Gadgetgyz** **4-SKU** supplier re-check evidence; superseded for **Gadgetgyz** controlled-pilot **execution** by **Slice 21W-B**). **Slice 21W-B** — **INCONCLUSIVE / BLOCKED** — **Product Owner** **closes** **Gadgetgyz** controlled-pilot **route** for **current** pilot (**§15F**); **do not** proceed with **Gadgetgyz** checkout/shipping-rate validation; **do not** approve **R89** as final/public delivery promise. **Slice 21X** — **PASS WITH NOTES** — **CJdropshipping** **first**, **DSers** **second**, hybrid conditional; **Temu** benchmark-only; **no** app install/import/sync; **next** **Slice 21Y** (**§15G**). If still present in Admin, **`Mzansi Select Controlled Pilot — Gadgetgyz`** is **dormant/blocked** — **not** launch-ready (**no** Admin cleanup approved in this pass). **Customer access remains BLOCKED**. **Checkout/payment** remain **blocked / not enabled**. **Refund/cancellation** per **§1** remains accepted as **historical** pilot policy wording only — **no** new commerce enablement implied.

**Related tracker:** `docs/project-control.md` — **Slice 21I** … **Slice 21Y** (**next**); **Slice 21X** **PASS WITH NOTES** recorded (**supplier strategy reset** — **§15G**).  
**Catalogue cross-reference:** `docs/catalogue/mzansi-select-25-product-readiness-v1.md` — **Slice 21J** / **21O** / **21P** / **21Q-B1** / **21V** / **21W-B** / **21X** pilot staging + supplier strategy planning.

---

## 1. Approved pilot baseline (planning record)

| Element | Approved value |
|--------|------------------|
| Posture | Controlled live pilot — **not** public launch |
| Access | Invite-only controlled group |
| Order cap | **10** total pilot orders initially |
| Supplier | **Historical baseline (superseded for execution by Slice 21W-B):** this pilot plan originally targeted **Gadgetgyz only** for the **four-SKU** set. **Slice 21W-B** **Product Owner** acceptance records **Gadgetgyz** controlled-pilot supplier proof as **INCONCLUSIVE / BLOCKED** and **closes** the **Gadgetgyz** controlled-pilot **route** as **not ready** for the **current** pilot — **do not** continue **Gadgetgyz-only** execution on this basis. **Slice 21X** (**§15G**): **CJdropshipping** **first**, **DSers** **second**, **hybrid** only if both pass gates — **not** `Supplier verified`; **no** app install/import until **Slice 21Y**. **`docs/project-control.md`** **`## Slice 21X`**. |
| Delivery fee (planning) | **Slice 21W-B:** **R89** was **not** revalidated; **do not** approve **R89** as **final/public** delivery promise; **`Mzansi Select Controlled Pilot — Gadgetgyz`** (if still present) — **dormant/blocked**, **not** launch-ready. **Slice 21L (historical):** **R89** was accepted only as a **controlled-pilot delivery planning signal** (from **Slice 21K** supplier checkout: **Courier Door to Door Delivery — Economy**, **R89.00**; basket total shown **R745.70**). **R89** is **not** approved as **final public** delivery pricing. Checkout-displayed **3 to 5 business days** remains **supplier checkout signal / docs planning only** — **not** approved as customer-facing wording. Basket contents **not** fully confirmed. Delivery cost and timing remain subject to order review, stock confirmation, supplier checkout confirmation, **Shopify** shipping setup, checkout testing, and **Product Owner** final pilot go/no-go. Prior **R99** flat assumption **withdrawn** — **do not** use **R99** in pilot planning unless later supplier evidence explains a different scenario. |
| Margins | Product margins **exclude** delivery |
| Pricing | **Pilot-only** — **not** final public pricing |

### Approved customer-facing delivery wording (primary; exact) — **Slice 21L**

> Pilot delivery is handled manually through our South African supplier route. Delivery cost and timing will be confirmed during order review before fulfilment.

### Approved supporting delivery wording (exact) — **Slice 21L**

> Delivery timing is not guaranteed and will be confirmed after order review and supplier stock confirmation.

### Visible pilot shipping rate (Shopify checkout; only if a visible rate is required later; exact) — **Slice 21L**

> Pilot courier delivery — R89

**Note:** use **only** when **Shopify** checkout requires a visible pilot shipping rate **and** a later approved implementation slice enables it. **R89** remains a **pilot planning signal** until checkout setup and QA confirm it.

### Returns and warranty (pilot; exact)

> Returns and warranty handling are managed case by case during the controlled pilot. Statutory consumer rights are not limited. If an item arrives damaged, incorrect, or cannot be fulfilled, we will assist with a replacement, refund, or cancellation where applicable.

### Refund / cancellation — material changes before fulfilment (exact) — **Slice 21L**

> If we cannot fulfil your pilot order, or if delivery cost or supplier stock changes materially before fulfilment, we will contact you and arrange a cancellation, refund, or alternative where applicable.

### Support — order review changes (exact) — **Slice 21L**

> If supplier stock, delivery cost, or fulfilment timing changes during order review, we will contact you before fulfilment continues.

### Required wording posture (non-exhaustive)

- Conservative factual product descriptions.
- Use **“pilot price”** / **“controlled pilot”** framing where applicable.
- State that stock and fulfilment are **manually confirmed**.
- State that delivery timing is **not guaranteed**.
- State that **statutory consumer rights are not limited**.
- **Do not use:** Best Sellers, Deals, Sale, **Supplier verified**, final price, guaranteed stock, **guaranteed delivery**, **fast delivery**, **final delivery fee**, **final public shipping rate**, **standard public delivery**, **launch delivery promise**, universal compatibility, unsupported technical/performance claims, or **customer-facing** use of **“3 to 5 business days”** (supplier checkout signal from **§5** — **docs/planning only**).

---

## 2. Likely affected Shopify / theme / Admin surfaces (identification only)

**Theme (when a later bounded implementation slice is approved):**

- `sections/main-product-foundation.liquid` — PDP pilot copy, delivery/returns bands, price presentation, pilot badges.
- `sections/main-cart-foundation.liquid` + `templates/cart.json` — cart lines, delivery line item or note, checkout-adjacent honesty, pilot disclaimers.
- `sections/main-search-foundation.liquid` + `templates/search.json` — pilot card copy if pilot SKUs surface in search.
- `snippets/live-product-card.liquid`, `snippets/static-product-card.liquid` — pilot price labels, badges, deferred CTAs.
- `templates/product.json` — PDP section defaults.
- `config/settings_schema.json` — `controlled_pilot_trust_mode` and any future pilot-specific settings (only via approved slice).

**Shopify Admin (future slice only; not executed here):**

- Product records for the four SKUs: title, body HTML, SKU, price, inventory policy, tags (`preview-only` / `price-to-confirm` evolution must be explicitly decided), collections, media.
- Shipping profile / delivery profile — to validate **observed Gadgetgyz** supplier-checkout fee (**R89** Economy in **Slice 21K** capture) against future Shopify configuration — **research-only** until approved; **not** a final delivery promise.
- Checkout / payments / markets — **readiness review only**; **no** enablement without explicit go/no-go.

---

## 3. Product staging approach (definition only — **not** executed)

1. **Pilot slice gate:** Product Owner explicit acceptance of this plan + separate go/no-go before any Admin write.
2. **Dual verification:** Re-read Gadgetgyz stock/price for each SKU immediately before any staging action (timing TBD in implementation slice).
3. **Bounded change model:** Prefer manual Admin edits or a single controlled automation slice — **no** bulk import unless separately approved.
4. **Preview-first option:** If pilot is exercised on storefront before public launch, use unpublished preview theme + authenticated QA; **no** live theme publish without PO approval.
5. **Tags and inventory:** Pilot inventory and tag strategy (e.g. pilot-only tag, inventory tracking, `continue_selling` behaviour) to be chosen in implementation slice — **not** decided here.

---

## 4. Product-by-product data requirements

| # | Product | SKU | Pilot price | Title (storefront planning) | Pilot description approach | Image requirements | Collection assignment (planning) | Inventory / stock assumption | Delivery / returns on PDP | Explicit non-final status |
|---|---------|-----|-------------|------------------------------|------------------------------|--------------------|-----------------------------------|------------------------------|----------------------------|---------------------------|
| 1 | Acrylic Tablet & Phone Stand | DP0402 | R249 | Match approved pilot naming; avoid absolute performance claims | Factual acrylic stand / size / materials only; **pilot price** label | Supplier-approved or PO-approved imagery only; placeholder until permission | **Tech Accessories** (and/or **Office & Desk** if dual placement approved) | Manual stock check with Gadgetgyz before each batch; **no** guaranteed stock | Use **§1** primary + supporting delivery, returns, refund/cancellation, and support strings + link to pilot policy snippet | Not **Supplier verified**; not final public price; fulfilment manual |
| 2 | UGREEN 4-in-1 USB 2.0 Hub | CR106-20277 | R279 | USB **2.0** hub factual description only | No speed/performance guarantees beyond USB 2.0 spec facts | As above | **Tech Accessories** | As above | As row 1 | As above |
| 3 | Gizzu USB to Type-C Cable — 2m | GCPU2C2 | R129 | Length and connector facts only | **No** 66W / 480Mbps / universal compatibility unless evidence attached in implementation slice | As above | **Tech Accessories** | As above | As row 1 | As above |
| 4 | World Map Extended Mouse Pad | 74886 | R219 | Dimensions/material facts only | **No** anti-slip / durability guarantees unless softened or evidence-backed | As above | **Office & Desk** / **Tech Accessories** per PO | As above | As row 1 | As above |

**Note:** Pilot descriptions must stay inside Security / Compliance guardrails from prior Gadgetgyz wording review; unsupported claims remain **out of scope** until evidence is attached in a later slice.

---

## 5. Pilot delivery — Gadgetgyz supplier checkout evidence (**Slice 21K** partial)

### 5.1 Observed supplier-checkout signal (sanitized; **not** a customer-facing promise)

| Field | Value |
|-------|--------|
| Shipping option (as shown) | **Courier Door to Door Delivery — Economy** |
| Fee shown | **R89.00** |
| Timing shown at checkout | **3 to 5 business days** — **supplier checkout timing signal only**; **do not** treat as **guaranteed** delivery wording |
| Basket total shown | **R745.70** |

### 5.2 Product Owner interpretation (planning only)

- The prior **R99** flat pilot delivery **assumption** is **no longer accepted as confirmed**.
- **R89** is the **observed Gadgetgyz** delivery fee for **this** supplier-checkout capture; it **appears** to apply to the tested basket — **non-final** until the basket is verified against the four approved pilot SKUs.
- **R99** should **not** be used in pilot planning unless **later supplier evidence** explains a different scenario.
- **3–5 business days** remains a **supplier checkout display** signal only — **not** a Mzansi Select **guaranteed** delivery commitment.

### 5.3 Handling and verification (planning)

| Step | Action |
|------|--------|
| V1 | Record **R89** + timing as **supplier evidence** in docs only — **Slice 21K** (this pass). |
| V2 | Confirm whether **R745.70** equals **exactly** the four approved pilot products (quantities, variants). |
| V3 | Confirm fee sensitivity: **destination**, **quantity**, **mixed basket**. |
| V4 | Confirm **free shipping** threshold visibility (if any) at supplier checkout. |
| V5 | Confirm fee visibility **before payment** and **without placing an order**. |
| V6 | Decide Shopify implementation (shipping rate draft, line item, or manual adjustment) only in a **later approved slice** — must **not** imply guaranteed delivery. |
| V7 | PDP/cart must show pilot delivery as **non-final** and **manually confirmed** until **V2–V5** close. |

**Product Owner gate — before any customer access:** **R89** is the **current planning signal** (**Slice 21L**) — **not** final public delivery pricing. **3–5 business days** from **§5.1** is **supplier checkout display only** — **must not** appear in customer-facing copy. Customer-facing delivery uses **§1** primary + supporting strings; material-change refund/cancellation + support strings are **required** when those surfaces go live. Delivery cost and timing remain subject to order review, stock confirmation, supplier checkout confirmation, **Shopify** shipping setup, checkout testing, and **Product Owner** final pilot go/no-go.

---

## 6. Checkout / payment readiness checks (**no** enablement)

| Check | Purpose |
|-------|---------|
| Payments account status | Confirm gateway **not** live for pilot until PO + Security sign-off. |
| Checkout test mode | If used, must be **staff-only** / password-gated store — **no** public customer access. |
| Cart → checkout path | Verify no accidental navigation to live checkout URLs from preview theme. |
| Legal / refund copy | Ensure checkout legal snippets align with **§1** primary + supporting delivery, returns, refund/cancellation, and support strings (non-final until go/no-go). |
| Order cap | System or manual guard for **10** orders — see **§7**. |

**Explicit:** these are **readiness and gap-identification** steps only. **No** checkout or payment **enablement** is approved by **Slice 21J** / **Slice 21L**.

**Admin / staging / checkout:** **not approved** in **Slice 21J** … **21P** (**Slice 21P** = **bounded implementation plan only** — **no** Admin writes). **Do not** execute **Shopify** Admin product staging, import, shipping, checkout, or payment — **§6A** + **§12** + **§13** + **§14** + **§15**. **Execution** requires **separate Product Owner–approved** bounded slices per **`docs/project-control.md`** **`## Slice 21P`** and shipping **§12.H** / **§13**. See **`## Slice 21J`** … **`## Slice 21P`**.

### 6A. Bounded Shopify shipping and checkout configuration (planning only — **do not configure yet**)

Full DevOps / platform plan: **§12 (Slice 21M)** — Admin shipping touchpoints, rollback, QA, **§12.H** approvals. **Execution-readiness (accepted):** **§13 (Slice 21N)**. **Product-staging readiness (accepted):** **§14 (Slice 21O)**. **Bounded product-staging implementation plan:** **§15 (Slice 21P)** — **no** Admin execution in this pass.

- **Do not configure** **Shopify** shipping rates, profiles, markets, taxes, payments, or checkout in this documentation pass.
- **Proposed visible rate label** (if checkout later requires a visible pilot shipping rate and an implementation slice approves it): **Pilot courier delivery — R89** (exact string in **§1**).
- **R89** must be treated as **controlled-pilot planning signal** only until **Shopify** shipping setup + preview/test checkout + QA confirm it.
- **3 to 5 business days** (**§5.1**) must **not** be used in **customer-facing** copy.
- Checkout / payment / customer access remains **disabled** until **separate** **Product Owner** approval and **`## Slice 21L` / §6B** gates close.

**Required future checks** (before treating checkout as pilot-ready):

- Shipping profile / rate setup **approved** (Admin) — **not** executed here.
- Preview / test checkout confirmation (gated environment).
- **Mobile** and **desktop** checkout QA passed.
- Payment readiness confirmation.
- Delivery fee visibility confirmation (including whether **Pilot courier delivery — R89** displays correctly if used).
- Refund / cancellation path confirmation.
- Customer support / contact path visible and correct.
- **Product Owner** final pilot go/no-go.

### 6B. Customer-access blockers (before pilot customer access)

- **Shopify** shipping setup **approved** and **tested**.
- Checkout displays the **pilot** shipping rate **correctly** (if a visible rate is used).
- Payment readiness **confirmed**.
- Refund / cancellation path **documented** and operationally verified.
- Customer support / contact path **visible**.
- **Gadgetgyz** stock and supplier price **rechecked immediately** before access.
- Pilot **10-order** cap control **confirmed**.
- **Mobile** and **desktop** checkout QA **passed**.
- **Product Owner** final pilot go/no-go **given**.

---

## 7. Manual fulfilment SOP additions (planning) — **Product Owner operational SLAs**

### 7.1 Stock-failure / refund SLA (**approved**)

| Rule | Target |
|------|--------|
| Order review | **Within 1 business day** of pilot order receipt. |
| Supplier stock | **Gadgetgyz** stock recheck **must** occur **before** supplier order/payment is placed. |
| Stock failure — customer notice | **Within 1 business day** of **confirming** the stock issue to the customer. |
| Cannot fulfil | Offer **refund/cancellation** or **Product Owner–approved** alternative. |
| Refund initiation | **Within 1 business day** after refund **decision**, via **approved Shopify/payment refund path only**. |
| Payment data | **No** manual card/payment data handling. |

### 7.2 Customer update SLA (**approved**)

| Event | Action |
|-------|--------|
| After stock/fulfilment confirmation | Send customer update. |
| Supplier tracking received | Send tracking update **within 1 business day**. |
| Tracking delayed | Send status update **within 3 business days** of order review **or** supplier order placement (per operational timeline). |

### 7.3 Order cap, data access, evidence retention / deletion (**approved**)

| Topic | Rule |
|-------|------|
| **10-order cap** | **Product Owner** owns the running count and go/no-go pause at **10** unless another owner is **explicitly** assigned in writing before go-live. |
| **Order / customer evidence** | Keep customer/order evidence in **approved operational systems only** (e.g. Shopify, payment, order records). **Do not** store customer personal data in **repository** documentation, committed artifacts, screenshots as project deliverables, or local project notes. |
| **Project documentation** | May record **sanitized** order counts/statuses only. |
| **Temporary local exports/screenshots** | Delete after reconciliation unless legally or operationally required to retain elsewhere under approved systems. |
| **Data access** | **Product Owner** controls access to customer/order data during the pilot; only **approved operators** (named list at go/no-go) and least-privilege Admin accounts when/if Admin access is approved in a future slice. |
| **Payment data** | **No** manual card/payment detail collection or storage. Use Shopify-native paths only when/if checkout is formally enabled. |

---

## 8. Customer data / payment handling controls (planning)

- **PII minimisation:** collect only what checkout requires when enabled.
- **No** shadow databases of payment credentials.
- **Repository hygiene:** treat **repo docs + local project notes** as **non-systems-of-record** for customer/order PII — align with **§7.3** and **`docs/project-control.md` `## Slice 21J`** / **`## Slice 21K`** / **`## Slice 21L`**.
- **Access logging:** recommend Admin audit log review cadence during pilot (implementation detail later).
- **Support channels:** pilot support contact method must not exfiltrate card data via chat/email.

---

## 9. QA validation plan (after implementation slice; not executed in 21J)

| Area | Validation |
|------|------------|
| PDP | Desktop + mobile — pilot copy, **pilot price**, delivery/returns strings, **no** prohibited promo language, **no** accidental purchasable state until approved. |
| Product cards | Desktop + mobile — pilot badges, **no** sale/compare-at abuse, deferred CTAs. |
| Cart | Pilot delivery line visibility; use **§1** primary + supporting delivery strings; if a visible shipping line is required later, use **§1** rate label only when approved — **no** **3 to 5 business days** in customer-facing copy; **no** guaranteed delivery or final-fee claims; checkout button state honest. |
| Checkout path | **Only** after explicit approval — smoke test in gated environment; **no** public traffic. |
| Payment readiness | Gateway configuration review — **no** live charges without approval. |
| Service leakage | Confirm **no** accidental account / wishlist / newsletter / social **service** enablement. |
| Trust wording | **No** final-price, final-delivery, public-launch, or **Supplier verified** wording. |

---

## 10. DevOps / live safety checklist (planning)

- **Backup / rollback:** export theme before any pilot-related theme push; document theme IDs (preview vs live).
- **Push model:** selected-file **`shopify theme push --only`** to preview **`151207542967`** first; **no** `--publish`, **no** `--live`, **no** `--allow-live`** without PO approval.
- **Live theme:** **Horizon** live ID remains default; **no** overwrite without explicit PO + DevOps checkpoint.
- **Password / restricted access:** maintain storefront password or equivalent restricted access until final go/no-go for any widening.
- **Go / no-go checkpoint:** formal checklist (PO + Security + DevOps + QA) **before** customer access or checkout enablement.

---

## 11. Unresolved risks / gaps

- **Slice 21K still open:** whether basket **R745.70** contained **exactly** the four approved pilot products; whether delivery fee varies by **destination**, **quantity**, or **mixed basket**; whether **free shipping** threshold was visible; whether fee is shown **before payment** **without** placing an order.
- **R89** / **3–5 business days** (checkout display) remain **supplier / planning context** — **Slice 21L** accepts **R89** as **current planning signal** only; **not** final public delivery pricing; **3–5 business days** **not** customer-facing.
- **Slice 21L:** customer-facing strings in **§1** are **approved for planning** — **not** an instruction to publish theme copy or enable checkout without a later implementation slice + **§6B** closure.
- **Slice 21M:** DevOps **bounded Shopify** shipping/checkout **configuration planning** recorded (**§12**) — **no** Admin execution until **Product Owner** accepts this plan.
- **Slice 21N:** **Product Owner** accepts **Slice 21N** as **PASS WITH NOTES** — docs commit **`417e78f5ec37ab8d9e450a8fd7d9aab9c10025fd`**; **§13** **CONDITIONAL GO** for future bounded Admin shipping **only after** exact pilot **Shopify** rows/handles locked (**§14**); **no** shipping Admin in **21N**.
- **Slice 21O:** **Product Owner** accepts **Slice 21O** as **PASS WITH NOTES** — **§14** readiness **accepted**; intended handles / collection / tags / SKU mapping **specified** in **§15** (**not** Admin execution).
- **Slice 21P:** **bounded controlled Shopify Admin product-staging implementation plan** recorded (**§15**) — **planning only**; **no** product row create/update/import/staging in this pass.
- Stock volatility on **74886** / **GCPU2C2** evidence gaps from prior Security notes.
- Operator roster and POPIA-aligned retention schedule for pilot order evidence.
- Whether pilot orders use **draft orders** vs **live checkout** — **undecided**; affects payment PCI scope.

---

## 12. Slice 21M — Bounded Shopify shipping/checkout configuration plan (DevOps / Platform Engineer; **planning only**)

**Prerequisite:** **Slice 21L** … **§13 (Slice 21N)**. **Product-staging readiness (accepted):** **§14 (Slice 21O)**. **Bounded staging implementation plan:** **§15 (Slice 21P)** — **no** Admin execution in this documentation pass.

### A. Planning verdict

- **Recommended approach:** create a **controlled-pilot** shipping setup **only after** **Product Owner** **execution** approval (separate slice from **Slice 21M** planning acceptance).
- **Preferred operational posture:** keep storefront **password** / **invite-only** controls active; **do not** open public access.
- **Pilot rate** must be clearly labelled as **pilot** / **manual order review** — **not** final public pricing (**§1** rate label + primary/supporting delivery strings).

### B. Shopify Admin areas that would be touched in a **later execution slice** (identification only)

- **Settings → Shipping and delivery** (store-level shipping settings entry).
- **Shipping profiles** (general profile and/or a **pilot-only** profile if adopted).
- **Shipping zones** and **rates** (manual/custom pilot rate placement; region match for South Africa / pilot geography).
- **Markets** — if **South Africa** (or target region) availability / rate visibility requires market alignment.
- **Settings → Payments** — **readiness review only** (provider status, manual capture / review posture if available — **not** enabling public launch).
- **Checkout** settings — **readiness review only** (**not** checkout customization in **Slice 21M**).
- **Locations** — only if shipping profile / calculated rate behaviour depends on **fulfilment location** setup.
- **Products / Collections** — only if a **later approved** slice requires confirming **pilot SKU** inclusion in a profile-bound set; **no** product edits in **Slice 21M**.

### C. Recommended pilot shipping-rate setup

- **Preferred:** after PO approval, add a **controlled-pilot manual/custom shipping rate** in a **narrow** shipping profile (pilot-only profile **or** carefully scoped zone in the general profile).
- **Label (if later approved):** **Pilot courier delivery — R89** (exact; **§1**).
- **Pairing:** surface **§1** customer-facing copy that **delivery cost and timing** are **confirmed during order review before fulfilment** — adjacent PDP/cart/checkout policy snippets as approved in a later slice.
- **Do not** use **3 to 5 business days** in customer-facing checkout or storefront copy.
- **Do not** present **R89** as final public delivery pricing.
- **Operational containment:** password / invite-only access, **approved pilot products only**, **Gadgetgyz** / local route assumptions validated against **Markets** / zones before go-live.

**Options evaluation:**

| Option | When useful | Caveat |
|--------|-------------|--------|
| **Pilot-only shipping profile** | Safest if only pilot SKUs should see the pilot rate and mapping stays clean | Requires clean product↔profile association |
| **Manual/custom rate** | Simplest when zone + profile are already correct | Wrong zone = missing/wrong rate at checkout |
| **Product-specific profile** | Useful only if pilot products are isolated from non-pilot catalogue | Mixed carts can split rates or confuse shoppers |
| **Market/location-limited rate** | When rate visibility depends on active **Market** / **Location** | Misaligned market hides rate or shows wrong region |
| **Password / invite-only control** | **Required regardless** of rate — shipping labels alone do **not** stop public discovery if storefront access widens | Primary access gate alongside technical rate setup |

### D. Can **Pilot courier delivery — R89** be configured without implying final public delivery pricing?

- **Yes, only if:** it stays behind **controlled pilot** access and is accompanied by **§1** wording that cost/timing are **confirmed during order review**; refund/cancellation + support strings visible **before** payment where practical.
- **Risk:** checkout labels are short; shoppers may read **R89** as a **live final** charge if access leaks beyond pilot.
- **Mitigation:** **customer access remains blocked** until final go/no-go; **no** public delivery/pricing claims; enforce **§6B** + **§12.H** approvals before widening access.

### E. Checkout / payment readiness checks before customer access

- Confirm **payment provider** readiness **without** enabling public launch.
- Confirm **payment capture** / manual review posture if available and **PO**-approved.
- Confirm **order cancellation** / **refund** workflow in **Shopify** + payment provider.
- Confirm **pilot order support** workflow (who responds; channels; SLAs from **§7**).
- Confirm **no** public customer can reach checkout before **PO** go/no-go (password, draft checkout, or equivalent).
- Confirm cart/PDP still communicate **pilot / manual review** honestly (**Slice 21E** + **§1**).
- Confirm **no** final delivery **timing** promise appears customer-facing.
- Confirm **no** final product / pricing claim appears.
- Confirm **10-order** cap and operational handling are **documented** and assigned.

### F. Rollback plan (if pilot shipping rate is misconfigured)

1. **Remove or disable** the pilot rate / revert profile-zone edits to the **captured pre-change** state (Admin screenshots / settings notes — **no secrets** in repo).
2. **Re-affirm** customer-access block if any widening occurred.
3. **Pause** pilot ordering.
4. **Notify** any affected pilot testers **before** fulfilment continues.
5. **Cancel / refund / offer alternative** per **§1** approved wording and **Shopify**-native paths only.
6. **Record** incident + validation evidence under **`artifacts/`** only — **uncommitted**.

### G. QA validation plan (**later execution slice only**)

- Capture **pre-change** Admin screenshots / settings notes (**no** credentials, tokens, or payment payloads in repo).
- Validate **cart → checkout** path in **gated** environment.
- Validate **checkout shipping-rate** display (correct rate, correct zone).
- Validate **mobile** and **desktop** checkout paths.
- Validate rate label **exactly** if approved: **Pilot courier delivery — R89**.
- Validate **no** **3 to 5 business days** appears customer-facing.
- Validate **payment readiness** without accidental public launch.
- Validate **password / invite-only** access remains enforced.
- Validate **no** live/public launch signals in theme or checkout.
- Validate **rollback** by removing/disabling the test rate in a controlled way if a dry-run requires it.
- Store evidence under **`artifacts/`** only — **uncommitted**.

### H. Product Owner approvals required before **execution**

Explicit **written** approval required for:

- Admin **shipping profile / rate** change.
- Whether **Pilot courier delivery — R89** may appear in checkout.
- Whether **R89** remains acceptable after supplier re-confirmation.
- **Pilot-product scope** and product↔profile mapping.
- **Market / location** scope for rates.
- **Payment readiness / capture** posture.
- **Customer access** go/no-go.
- **Refund / cancellation** handling before live pilot orders.
- **QA pass** before pilot invite / customer access.

### I. Risks / blockers

- **Shopify plan** / **payment provider** limitations may block payment readiness.
- **Markets** / **shipping zones** may hide or mis-apply rates.
- **Product-specific** profiles can create **split** or **missing** rates if carts mix pilot and non-pilot items.
- **R89** could be read as final pricing if access leaks beyond pilot.
- **3–5 business days** must remain **supplier/docs-only** — never customer-facing.
- **Store password** / invite access remains the **primary** public-access control.
- Misconfigured shipping may show **no rate**, **wrong rate**, or **wrong region**.
- **Product readiness** and **Supplier verified** remain **separate** gates from shipping planning.

---

## 13. Slice 21N — Shopify pilot shipping **configuration execution-readiness** check (DevOps / Platform Engineer; **docs only**)

**Prerequisite:** **Slice 21M** planning commit **`3f791a9fc7d4614731030188073eeb6c66318969`**; canonical plan remains **§12**. **Slice 21N** accepted docs commit **`417e78f5ec37ab8d9e450a8fd7d9aab9c10025fd`** (`docs: record pilot shipping execution readiness`). This section **refines** execution feasibility; it is **not** a Shopify Admin change and **does not** configure shipping, checkout, or payments.

**Product Owner decision — Slice 21N:** accepted as **PASS WITH NOTES** — **execution-readiness check only**. **Shopify Admin shipping execution is not approved** by this acceptance; it remains **deferred** until **Slice 21O** (**§14**) locks exact pilot **Shopify** product rows/handles and a **separate bounded execution** slice is **explicitly approved**. **Customer access remains BLOCKED** until Admin setup (when approved), **QA pass**, and final **Product Owner** go/no-go. **Admin/configuration execution remains BLOCKED** until that sequence.

**Product Owner confirmations (recorded; planning / posture only — not execution approval):**

1. **Final controlled-pilot SKU set (four):** (1) Acrylic Tablet & Phone Stand — **DP0402**; (2) UGREEN 4-in-1 USB 2.0 Hub — **CR106-20277**; (3) Gizzu USB to Type-C Cable — 2m — **GCPU2C2**; (4) World Map Extended Mouse Pad — **74886** — aligns **§4**; **Shopify** handles/rows to be **locked under §14**.
2. **Shipping profile strategy — preferred:** **pilot-only / product-specific** shipping profile for the bounded pilot shipping slice when executed.
3. **General-profile fallback:** **not approved** unless **separately** justified and **Product Owner**-approved in a later decision record.
4. **Market / location scope:** **South Africa only**.
5. **Checkout rate label:** **Pilot courier delivery — R89** — **only** for **controlled pilot checkout testing** when a later slice approves that test window — **not** a public launch or final-pricing claim.
6. **R89:** remains **conditional** and **not** a final/public delivery promise; **Slice 21W-B** did **not** revalidate **R89** against **Gadgetgyz** checkout and **closes** the **Gadgetgyz** controlled-pilot **supplier execution route** — the historical **Gadgetgyz** “supplier re-check before customer access” chain is **not** an active execution prerequisite until a **new** **Product Owner**–scoped supplier path is approved.
7. **Payment readiness / capture:** remains **blocked** pending **separate** readiness checks; **no manual card/payment data handling** (unchanged **Slice 21J** posture).
8. **Customer-access gate:** remains **blocked** until approved Admin setup, **QA pass**, and final **Product Owner** go/no-go.
9. **Refund/cancellation** material-change handling: remains **accepted** per **§1** (no change to prior acceptance).

### 1. Admin areas for **later execution** (identification only)

Exact touchpoints for a future bounded Admin slice (unchanged intent from **§12.B**, consolidated for readiness):

- **Settings → Shipping and delivery** (store-level entry).
- **Shipping profiles** (create/edit **pilot-only / product-specific** profile — **preferred**; **general-profile** pilot rate **not approved** unless **separately** justified and approved).
- **Shipping zones** and **rates** (manual/custom pilot rate; **South Africa** geography / **Markets** alignment — **South Africa only** per **Product Owner** confirmation).
- **Markets** — **South Africa only** scope for pilot-rate visibility validation.
- **Locations** — if **fulfilment origin** or inventory location affects calculated-rate behaviour or rate visibility.
- **Settings → Payments** — **readiness review only** (provider status, capture posture); **no** enablement implied by **Slice 21N**.
- **Checkout** settings — **readiness review only** (not checkout customization).
- **Products / Collections** — **read-only membership check** only: confirm which **Shopify** product rows correspond to the **four approved pilot SKUs** (**§4**) and whether any **non-pilot** products share the same sales channel / purchasability surface; **no** product edits in **Slice 21N** unless a **separate** slice approves them.

### 2. Isolation feasibility — can the **R89** pilot rate be isolated safely?

- **Best isolation** depends on **pilot products existing in Shopify** with a **clean** mapping to a **pilot-only** or **product-specific** shipping profile so the rate applies **only** to those rows.
- **Pilot-only / product-specific shipping profile** is the **safest** pattern when pilot SKUs are known, staged, and **not** mixed with unrelated purchasable catalogue in the same profile.
- **General shipping profile** carries **higher risk** and is **not Product Owner–approved** as a fallback for this pilot unless **separately** justified and approved: any product that inherits that profile’s zones/rates may show the pilot rate if checkout becomes reachable or if **non-pilot** products remain **ACTIVE** on the same channel.
- **Market / location** constraints help **who** sees a rate but **do not** replace **password / invite-only** operational control — they are **not** a substitute for access gating.
- **Password / invite-only** control remains **mandatory** regardless of shipping-profile strategy (**§12.C** table — password row).

### 3. Whether pilot products must exist **before** shipping setup / testing

- **Yes, for product-specific / pilot-only profile validation:** final profile↔product association and QA (“no unintended products get the pilot rate”) **requires** the **four pilot** product records to exist and be **explicitly identified** in Admin (handles / IDs documented in the execution slice).
- **Without** staged / confirmed pilot rows, a **general-profile** manual rate can be **planned in docs** but **cannot** be **safely validated** for product-limited behaviour — **NO-GO** for claiming product-isolated shipping until mapping exists.
- **Product import / staging** remains **out of scope** for **Slice 21N** — this pass only records the dependency.
- **Catalogue note:** **`docs/catalogue/mzansi-select-25-product-readiness-v1.md` `## Slice 21J`** lists the **four pilot SKUs**; **Slice 13I** history includes **five** different preview-stage handles — **not** identical to the **four-SKU pilot set**. **Product Owner** must confirm **which** Admin products are **in** vs **out** of pilot scope before execution maps a profile.

### 4. General-profile and live-store impact risk

- A **general-profile** pilot rate can expose **Pilot courier delivery — R89** to **unintended** products if **customer access widens**, **non-pilot** products are **purchasable** on the same profile, or checkout is exercised without strict containment.
- **Mixed carts** and **multi-profile** carts may **combine** or **split** shipping lines — **customer-facing confusion** and QA complexity increase; profile mapping must be checked **before** execution.
- **Live-store impact:** shipping Admin changes affect **store configuration** globally for the scoped profile/zone; they do **not** by themselves publish themes, but misconfiguration can surface at checkout **whenever** checkout is reachable — hence **access** and **product** containment remain the primary risk controls.

### 5. Recommended execution approach (for a **later** approved slice)

| Tier | Recommendation |
|------|----------------|
| **Preferred** | Use a **pilot-only / product-specific shipping profile** **after** the **four pilot** Shopify products exist, are confirmed, and are mapped **only** to that profile (plus **§1** wording discipline). |
| **Fallback** | **General-profile** manual/custom pilot rate — **not approved** unless **separately** justified and **Product Owner**-approved; if ever approved, still requires strict password/invite-only containment and explicit non-pilot purchasability controls. |
| **Required regardless** | Keep **customer access blocked** until final go/no-go; keep **§1** posture that cost/timing are **confirmed after order review**; **never** customer-facing **3 to 5 business days**; **R89** **not** represented as final public delivery pricing. |

### 6. Payment / checkout dependency

- **Shipping configuration** can be **planned and (later) applied** in Admin **without** enabling payment — **no payment enablement** in **Slice 21N**.
- **End-to-end** checkout shipping-rate QA may still require a **controlled** checkout path and **payment-readiness review** in a **later** slice; that slice must **explicitly** define **capture / manual review** posture **before** real pilot orders. **Payment readiness/capture** remains **blocked** pending **separate** checks (**Product Owner** confirmation — **Slice 21N** acceptance).
- **Do not** enable payment or widen customer access in **Slice 21N**.

### 7. Rollback plan (execution slice; extends **§12.F**)

1. **Remove or disable** the rate labelled **Pilot courier delivery — R89** (or equivalent pilot rate name used in Admin).
2. **Restore** prior shipping profile / zone / rate settings from **captured pre-change** screenshots or settings notes (**no secrets** in repo).
3. If a **pilot-only profile** was used: **remove pilot products** from that profile association or delete/disable the pilot profile per Admin-safe practice documented in the execution runbook.
4. **Re-block customer access** if any widening occurred in a later slice.
5. **Pause** pilot ordering; **notify** affected pilot testers if a misconfigured rate was exposed.
6. **Cancel / refund / alternative** per **§1** approved wording and **Shopify**-native paths only.
7. **Record** incident and validation evidence under **`artifacts/`** only — **uncommitted**.

### 8. QA validation requirements (**later execution**; extends **§12.G**)

- **Pre-change** and **post-change** Admin evidence (screenshots / notes) **without secrets**.
- **Cart** path and **checkout shipping-rate** display (**desktop** + **mobile**).
- If approved for **controlled pilot checkout testing only**: rate label **exactly** **Pilot courier delivery — R89** (**not** a final public pricing claim).
- Confirm **no** **3 to 5 business days** appears **customer-facing**.
- Confirm **R89** is **not** represented as **final public** delivery pricing (copy + context).
- Confirm **password / invite-only** access remains enforced for the test window.
- Confirm **no** unintended **public-launch** signals (theme + checkout surfaces).
- Confirm **no unintended products** receive the pilot rate (matrix: pilot SKUs vs profile membership).
- Confirm **rollback** can remove/disable the rate in a controlled way.
- Store evidence under **`artifacts/`** only — **uncommitted**.

### 9. Go / no-go recommendation for **later bounded Admin execution**

| Verdict | Meaning |
|---------|---------|
| **GO** | **Not** chosen as unconditional in **Slice 21N** — full **GO** requires prior **§12** acceptance **and** the confirmations below. |
| **NO-GO** | **Until** pilot Shopify products are **staged/confirmed** and product↔profile mapping can be tested, **do not** claim a **product-isolated** pilot rate is safe — treat product-specific execution as **NO-GO** for isolation proof. |
| **CONDITIONAL GO** (**accepted posture after Slice 21N PASS WITH NOTES**) | A **later** bounded Admin shipping slice may proceed **only after:** **(a)** **§15 Slice 21P** execution prerequisites: exact **Shopify** rows verified / reuse-or-create **per-SKU PO decisions** recorded — **no duplicate rows**; **(b)** **pilot-only / product-specific** profile — **general-profile fallback blocked** unless **separate** PO approval; **(c)** **South Africa only** validated in Admin QA; **(d)** **Pilot courier delivery — R89** **only** in **controlled pilot checkout testing** if separately approved; **(e)** **R89** **not** treated as final/public delivery promise — **Slice 21W-B** **closes** historical **Gadgetgyz** re-check execution chain (**superseded** until a **new** supplier path is scoped); **(f)** **payment/capture** in a **separate** slice — **blocked** until then; **(g)** **no manual card/payment data handling**; **(h)** **customer-access** **blocked** until approved Admin setup + **QA pass** + final **PO** go/no-go; **(i)** **§12.H** approvals. |

**Slice 21N** records **CONDITIONAL GO** for a **future** execution slice under the conditions above — **not** approval to execute Admin work in this pass. **Next:** **§15 (Slice 21P)** defines bounded **product-staging** execution plan; shipping Admin follows **§12** after staging **QA** + **§12.H** + row verification outcomes.

---

## 14. Slice 21O — Controlled pilot **product-staging readiness** plan (**docs only**)

**Product Owner decision — Slice 21O:** accepted as **PASS WITH NOTES** — readiness criteria **closed in documentation** by **§15 (Slice 21P)** bounded implementation plan (intended handles, collection/tags, SKU/variant mapping, price rules, visibility posture — **planning only**; **no** Admin execution).

**Status:** **PASS WITH NOTES** — **docs only**. **Does not** approve Shopify Admin edits, product import, product staging, shipping configuration, checkout/payment enablement, theme push/publish, or customer access.

### Objective

Lock the **controlled pilot product-staging readiness** inputs required **before** any **bounded Shopify Admin shipping configuration** execution slice — so **pilot-only / product-specific** shipping profiles can be mapped without ambiguity.

### Checklist resolution (**Slice 21P** — **§15**)

The **§14** checklist items are **specified** in **§15** as a **bounded implementation plan** for a **later execution slice**. **No** Shopify rows are created or updated by this docs pass.

### Explicit boundary (**Slice 21O**)

**No** Shopify Admin **edit**, **import**, **staging**, **shipping**, **checkout**, **payment**, or **customer-access** action is **approved** by **Slice 21O** acceptance text alone — **only** a **later explicitly scoped execution slice** may authorize writes.

---

## 15. Slice 21P — Controlled **Shopify Admin product-staging** implementation plan (**planning only**)

**Prerequisite:** **Slice 21O** (**§14**) **PASS WITH NOTES**. This section is a **bounded implementation plan** for a **future** **Product Owner–approved** Admin execution slice — **it does not execute staging**, **does not** create/update product rows, **does not** import, **does not** configure shipping, **does not** enable checkout/payment/customer access, **does not** push/publish themes.

### A. Shopify Admin areas touched **only after separate execution approval**

| Area | Purpose (later execution) |
|------|---------------------------|
| **Shopify Admin → Products** | Verify existing rows; create/update **only** per **§15.F** + **PO** reuse/create approvals |
| **Shopify Admin → Collections** | Create/maintain **Controlled Pilot** collection (**handle:** `controlled-pilot`) and membership |
| **Shopify Admin → Product organization / tags** | Apply approved pilot tags (**§15.C**) |
| **Shopify Admin → Product media / images** | Add media **only** with **PO**-approved image/content-use basis |
| **Shopify Admin → Inventory / variants** | Single **Default Title** variant per SKU; SKU on variant (**§15.F**) |
| **Shopify Admin → Shipping and delivery → Shipping profiles** | **Product-specific pilot profile** — **only after** rows/handles verified and locked; **not** in product-staging slice unless combined in an explicitly scoped execution |
| **Checkout / Payments settings** | **Out of scope** for product-staging slice unless **separately** PO-approved |

### B. Existing-row verification plan (**before** any write in execution slice)

1. In **Shopify Admin → Products**, search by **exact intended handle**, **title**, and **variant SKU** for each of the **four** lines (**§15.F**).
2. Determine whether an existing row **already matches** the intended pilot identity (handle/title/SKU coherence).
3. Search for **duplicate-like** rows (similar title or same SKU on a different product) — **do not** create a second row for the same SKU/handle.
4. If execution is later approved, record **sanitized** outcomes only in docs/evidence (**product ID**, handle, status) — **no** credentials, **no** customer/order/payment payloads, **no** supplier account secrets in repo.
5. **This planning pass:** **no** Admin search is required for repo completeness; operators perform verification **only** during an approved execution slice.

### C. Reuse-vs-create decision points

- **Reuse / update existing row** only if **title + SKU + handle** alignment is confirmed **or** **Product Owner** explicitly approves reuse of a specific row ID for that SKU.
- **Create new row** only in a **later execution slice** if **no** suitable existing row exists — **and** PO approves create.
- **Never** create **duplicate** rows for the same **SKU** or **intended handle**.
- If an existing row has **incompatible** history, content, or status, **Product Owner** decides: **update in place**, **archive/retire** (if store policy allows), or **create** a new row — **no** deletion without **PO** approval; **escalate** if duplicates found.

### D. Approved pilot collection and tags

- **Collection title:** Controlled Pilot  
- **Collection handle:** `controlled-pilot`  
- **Tags (all pilot rows):** `pilot`, `pilot-gadgetgyz`, `pilot-21`, `supplier-gadgetgyz`, `manual-fulfilment`  
- **Additional safety tags** (e.g. `preview-only`, `price-to-confirm`) remain subject to **Product Owner** / execution slice alignment with **Slice 13G** / **Slice 21E** conventions — **not** relaxed by this plan alone.

### E. Shipping-profile dependency (**unchanged posture**)

- **Product-specific shipping profile** is the **only** approved shipping strategy for the pilot; **general-profile fallback remains blocked** unless **separately** justified and **Product Owner**-approved.
- **Exact product rows and handles** must be **verified and locked** in Admin **before** product-specific shipping profile setup.
- **Pilot courier delivery — R89** — **conditional**; for **controlled pilot checkout testing only** when a later slice approves; **R89** requires **Gadgetgyz / supplier re-check** before customer access; **no** final delivery promise approved.

### F. Product field plan — **all four SKUs** (execution target state; **not** applied in this pass)

| # | Title | Intended handle | Variant | SKU | Pilot price (ZAR) | Compare-at | Tags / collection | Vendor | Product type (suggested) | Media | Copy / delivery | Inventory assumption | Visibility |
|---|------|-----------------|---------|-----|---------------------|------------|-------------------|--------|-------------------------|-------|------------------|----------------------|------------|
| 1 | Acrylic Tablet & Phone Stand | `acrylic-tablet-phone-stand` | Default Title | `DP0402` | **249** | **blank** | **§15.D** + **Controlled Pilot** | **Gadgetgyz** | **Tech Accessories** (or **Office & Desk** per PO) | **Only** after **PO**-approved image/content-use basis | **§1** pilot delivery + returns + refund/support; **no** **Supplier verified**; **no** final claims | Manual stock confirmation before fulfilment; policy **TBD** in execution slice | **Draft / unpublished / restricted** until **PO** go/no-go — **non-purchasable** until checkout/payment separately approved |
| 2 | UGREEN 4-in-1 USB 2.0 Hub | `ugreen-4-in-1-usb-2-0-hub` | Default Title | `CR106-20277` | **279** | **blank** | **§15.D** | **Gadgetgyz** | **Tech Accessories** | As above | As row 1 | As row 1 | As row 1 |
| 3 | Gizzu USB to Type-C Cable — 2m | `gizzu-usb-to-type-c-cable-2m` | Default Title | `GCPU2C2` | **129** | **blank** | **§15.D** | **Gadgetgyz** | **Tech Accessories** | As above | As row 1 | As row 1 | As row 1 |
| 4 | World Map Extended Mouse Pad | `world-map-extended-mouse-pad` | Default Title | `74886` | **219** | **blank** | **§15.D** | **Gadgetgyz** | **Office & Desk** / **Tech Accessories** per **§4** / PO | As above | As row 1 | As row 1 | As row 1 |

**Price rules:** pilot-only prices — **not** final public pricing; **no** compare-at pricing; **no** sale/deal labels; **no** discount claims; **recheck supplier price** before customer access and **before each manual fulfilment decision** where practical.

### G. Visibility / restriction posture

- Keep products **draft / unpublished / restricted** (and **non-purchasable** via checkout/payment gates) until **Product Owner** go/no-go.
- Prevent **accidental public catalogue** exposure; align sales-channel publication with a **later** execution checklist.
- **No** public-launch language on PDP or merchandising.

### H. Rollback plan (**execution slice**)

1. If an incorrect row is created or updated: set product to **draft/unpublished** immediately; remove from **Controlled Pilot** collection; strip or correct tags **only** under change control.
2. Revert title/handle/SKU/price/media **only** with **PO**-approved Admin rollback steps.
3. Record **sanitized** rollback notes; **no** customer/order/payment data in repo.
4. **Duplicates found:** **do not delete** without **Product Owner** approval; mark **blocked** and escalate.

### I. QA checklist (**after** later staging execution — not in **Slice 21P**)

- **No** duplicate product rows for the four SKUs/handles.
- Correct **handles**, **SKUs**, **Default Title** variants, **pilot-only** prices.
- **No** compare-at; **no** sale/deal/discount signals.
- **Controlled Pilot** collection + approved tags present.
- PDPs **non-public** / non-purchasable until approved; **no** **Supplier verified** wording; **no** final delivery/product claims.
- **No** accidental checkout/payment/customer access; **no** accidental public catalogue exposure.
- **Mobile + desktop** PDP visual checks when preview-visible.

### J. Product Owner approvals required **before** Admin execution

- Per-SKU: **reuse existing row** vs **create new** (or update strategy for incompatible row).
- **Bounded Admin product-staging execution slice** (scope, owner, rollback owner).
- **Image / content-use** basis for media and body copy.
- **Exact pilot wording** and product descriptions (Security/Compliance alignment).
- **Inventory / stock policy** (tracking, `continue_selling`, quantities).
- **Timing** for **product-specific shipping** profile work relative to product QA.
- **QA route / viewport matrix** for post-staging validation.
- **Final go/no-go** before customer access (with **§6B** + payment + shipping gates).

## 15A. Slice 21Q-B1 Controlled pilot product-staging exact write plan (docs only; **non-executable**)

**Product Owner decision — Slice 21Q-B1:** prepare the exact write plan first; **do not** execute Shopify Admin product staging yet. This section is **non-executable** planning only. It **does not** approve or perform Shopify Admin writes, shipping configuration, checkout/payment/customer-access enablement, or theme push/publish.

### A. Product-by-product write plan

| Product | Action after later PO execution approval | Current discovery posture | Locked / intended handle |
|---------|-------------------------------------------|---------------------------|--------------------------|
| Acrylic Tablet & Phone Stand | **Update existing row only**; **do not create duplicate** | Existing close-title row found: **`Acrylic Tablet or Phone Stand`**; handle **`acrylic-tablet-phone-stand`**; SKU blank; **ACTIVE / published**; price **0.00**; collections **Office & Desk** + **Tech Accessories** | **`acrylic-tablet-phone-stand`** locked unless PO later changes it |
| UGREEN 4-in-1 USB 2.0 Hub | **Create new draft / unpublished / restricted row only** | Not found in Slice 21Q-A discovery | **`ugreen-4-in-1-usb-2-0-hub`** |
| Gizzu USB to Type-C Cable — 2m | **Create new draft / unpublished / restricted row only** | Not found in Slice 21Q-A discovery | **`gizzu-usb-to-type-c-cable-2m`** |
| World Map Extended Mouse Pad | **Create new draft / unpublished / restricted row only** | Not found in Slice 21Q-A discovery | **`world-map-extended-mouse-pad`** |

### B. Exact update/create decision per product

1. **Acrylic Tablet & Phone Stand / `DP0402`:** update the existing close-title row only after **Product Owner** approves execution. Reuse the current row; **do not create a duplicate**.
2. **UGREEN 4-in-1 USB 2.0 Hub / `CR106-20277`:** create a new **draft / unpublished / restricted** row only after **Product Owner** approves execution.
3. **Gizzu USB to Type-C Cable — 2m / `GCPU2C2`:** create a new **draft / unpublished / restricted** row only after **Product Owner** approves execution.
4. **World Map Extended Mouse Pad / `74886`:** create a new **draft / unpublished / restricted** row only after **Product Owner** approves execution.

### C. Exact field list per product

#### Acrylic Tablet & Phone Stand

- Action: update existing row only after later execution approval.
- Current row: **`Acrylic Tablet or Phone Stand`**; handle **`acrylic-tablet-phone-stand`**; SKU blank; **ACTIVE / published**; price **0.00**.
- Planned fields:
  - title: **Acrylic Tablet & Phone Stand**
  - handle: **`acrylic-tablet-phone-stand`**
  - variant: **Default Title**
  - SKU: **`DP0402`**
  - pilot price: **R249**
  - compare-at price: **blank**
  - status/visibility: **draft / unpublished / restricted** before go/no-go
  - tags: **`pilot`**, **`pilot-gadgetgyz`**, **`pilot-21`**, **`supplier-gadgetgyz`**, **`manual-fulfilment`**
  - collection: **Controlled Pilot**
  - vendor/supplier reference: **Gadgetgyz**
  - product type/category: **Tech Accessories / Office & Desk accessory**, or approved Shopify category if available
  - short description: **Acrylic stand for holding a compatible phone or tablet on a desk, counter, or bedside surface.**
  - delivery wording: **Pilot delivery is handled manually through our South African supplier route. Delivery cost and timing will be confirmed during order review before fulfilment.**
  - supporting wording: **Delivery timing is not guaranteed and will be confirmed after order review and supplier stock confirmation.**
  - refund/cancellation wording: **If we cannot fulfil your pilot order, or if delivery cost or supplier stock changes materially before fulfilment, we will contact you and arrange a cancellation, refund, or alternative where applicable.**
  - image/content-use status: **requires Product Owner approval before execution**

#### UGREEN 4-in-1 USB 2.0 Hub

- Action: create new **draft / unpublished / restricted** row only after later execution approval.
- Planned fields:
  - title: **UGREEN 4-in-1 USB 2.0 Hub**
  - handle: **`ugreen-4-in-1-usb-2-0-hub`**
  - variant: **Default Title**
  - SKU: **`CR106-20277`**
  - pilot price: **R279**
  - compare-at price: **blank**
  - status/visibility: **draft / unpublished / restricted** before go/no-go
  - tags: **`pilot`**, **`pilot-gadgetgyz`**, **`pilot-21`**, **`supplier-gadgetgyz`**, **`manual-fulfilment`**
  - collection: **Controlled Pilot**
  - vendor/supplier reference: **Gadgetgyz**
  - product type/category: **Tech Accessories**
  - short description: **USB 2.0 hub for connecting compatible USB devices.**
  - delivery wording: **Pilot delivery is handled manually through our South African supplier route. Delivery cost and timing will be confirmed during order review before fulfilment.**
  - supporting wording: **Delivery timing is not guaranteed and will be confirmed after order review and supplier stock confirmation.**
  - refund/cancellation wording: **If we cannot fulfil your pilot order, or if delivery cost or supplier stock changes materially before fulfilment, we will contact you and arrange a cancellation, refund, or alternative where applicable.**
  - image/content-use status: **requires Product Owner approval before execution**

#### Gizzu USB to Type-C Cable — 2m

- Action: create new **draft / unpublished / restricted** row only after later execution approval.
- Planned fields:
  - title: **Gizzu USB to Type-C Cable — 2m**
  - handle: **`gizzu-usb-to-type-c-cable-2m`**
  - variant: **Default Title**
  - SKU: **`GCPU2C2`**
  - pilot price: **R129**
  - compare-at price: **blank**
  - status/visibility: **draft / unpublished / restricted** before go/no-go
  - tags: **`pilot`**, **`pilot-gadgetgyz`**, **`pilot-21`**, **`supplier-gadgetgyz`**, **`manual-fulfilment`**
  - collection: **Controlled Pilot**
  - vendor/supplier reference: **Gadgetgyz**
  - product type/category: **Tech Accessories**
  - short description: **2m USB to Type-C cable for compatible devices.**
  - delivery wording: **Pilot delivery is handled manually through our South African supplier route. Delivery cost and timing will be confirmed during order review before fulfilment.**
  - supporting wording: **Delivery timing is not guaranteed and will be confirmed after order review and supplier stock confirmation.**
  - refund/cancellation wording: **If we cannot fulfil your pilot order, or if delivery cost or supplier stock changes materially before fulfilment, we will contact you and arrange a cancellation, refund, or alternative where applicable.**
  - image/content-use status: **requires Product Owner approval before execution**

#### World Map Extended Mouse Pad

- Action: create new **draft / unpublished / restricted** row only after later execution approval.
- Planned fields:
  - title: **World Map Extended Mouse Pad**
  - handle: **`world-map-extended-mouse-pad`**
  - variant: **Default Title**
  - SKU: **`74886`**
  - pilot price: **R219**
  - compare-at price: **blank**
  - status/visibility: **draft / unpublished / restricted** before go/no-go
  - tags: **`pilot`**, **`pilot-gadgetgyz`**, **`pilot-21`**, **`supplier-gadgetgyz`**, **`manual-fulfilment`**
  - collection: **Controlled Pilot**
  - vendor/supplier reference: **Gadgetgyz**
  - product type/category: **Office & Desk accessory**
  - short description: **Extended desk mat/mouse pad with world map print and anti-slip backing.**
  - delivery wording: **Pilot delivery is handled manually through our South African supplier route. Delivery cost and timing will be confirmed during order review before fulfilment.**
  - supporting wording: **Delivery timing is not guaranteed and will be confirmed after order review and supplier stock confirmation.**
  - refund/cancellation wording: **If we cannot fulfil your pilot order, or if delivery cost or supplier stock changes materially before fulfilment, we will contact you and arrange a cancellation, refund, or alternative where applicable.**
  - image/content-use status: **requires Product Owner approval before execution**

### D. Draft NON-EXECUTABLE Shopify GraphQL mutation templates

**Important:** templates below are **NON-EXECUTABLE planning drafts only**. They use placeholders and must **not** be run from this slice.

```graphql
# NON-EXECUTABLE DRAFT ONLY
mutation UpdateExistingAcrylicPilotProduct {
  productUpdate(
    input: {
      id: "<existing_acrylic_product_gid>"
      title: "Acrylic Tablet & Phone Stand"
      handle: "acrylic-tablet-phone-stand"
      vendor: "Gadgetgyz"
      productType: "Tech Accessories / Office & Desk accessory"
      tags: [
        "pilot"
        "pilot-gadgetgyz"
        "pilot-21"
        "supplier-gadgetgyz"
        "manual-fulfilment"
      ]
      descriptionHtml: "<approved_pilot_copy_with_delivery_support_refund_wording>"
      collectionsToJoin: ["<controlled_pilot_collection_gid>"]
      status: DRAFT
    }
  ) {
    product {
      id
      handle
      title
      status
    }
    userErrors {
      field
      message
    }
  }
}
```

```graphql
# NON-EXECUTABLE DRAFT ONLY
mutation UpdateExistingAcrylicPilotVariant {
  productVariantsBulkUpdate(
    productId: "<existing_acrylic_product_gid>"
    variants: [
      {
        id: "<existing_acrylic_default_variant_gid>"
        price: "249.00"
        compareAtPrice: null
        inventoryItem: { sku: "DP0402" }
      }
    ]
  ) {
    productVariants {
      id
      price
    }
    userErrors {
      field
      message
    }
  }
}
```

```graphql
# NON-EXECUTABLE DRAFT ONLY
mutation CreateNewPilotProductRows {
  productCreate(
    product: {
      title: "<product_title>"
      handle: "<product_handle>"
      vendor: "Gadgetgyz"
      productType: "<product_type>"
      tags: [
        "pilot"
        "pilot-gadgetgyz"
        "pilot-21"
        "supplier-gadgetgyz"
        "manual-fulfilment"
      ]
      descriptionHtml: "<approved_pilot_copy_with_delivery_support_refund_wording>"
      status: DRAFT
      productOptions: [{ name: "Title", values: [{ name: "Default Title" }] }]
    }
  ) {
    product {
      id
      handle
      title
      status
    }
    userErrors {
      field
      message
    }
  }
}
```

```graphql
# NON-EXECUTABLE DRAFT ONLY
mutation UpdateNewPilotVariantAndCollection {
  productVariantsBulkUpdate(
    productId: "<new_product_gid>"
    variants: [
      {
        id: "<new_default_variant_gid>"
        price: "<pilot_price>"
        compareAtPrice: null
        inventoryItem: { sku: "<intended_sku>" }
      }
    ]
  ) {
    userErrors {
      field
      message
    }
  }
}
```

### E. Safer manual Admin step list for a later execution slice

1. Search existing products by exact SKU, handle, and title before writing.
2. For **Acrylic**, open the existing row only if **Product Owner** approves reuse.
3. For the other three products, create rows as **draft / unpublished / restricted** only after **Product Owner** approves execution.
4. Apply SKU, pilot price, tags, collection, vendor, approved copy, and approved image fields exactly as recorded here.
5. Keep compare-at price **blank**.
6. Keep products **non-public / non-purchasable** until final go/no-go.
7. Do **not** configure shipping in this product-staging slice.
8. Record sanitized row handles and statuses after execution only.

### F. Conflict risks

- The acrylic row is currently **ACTIVE / published** with old title, blank SKU, and **0.00** price; updating it may alter a visible preview row, so **Product Owner** must approve the exact visibility/status treatment before execution.
- Duplicate risk exists if a new acrylic row is created instead of reusing the existing row.
- **Controlled Pilot** collection/tagging depends on that collection already existing or receiving later creation/reuse approval.
- Image/content-use basis remains unapproved until the execution gate.
- Shipping profile setup remains dependent on locked product rows and handles.
- Pilot pricing remains **pilot-only**, not final public pricing.

### G. Product Owner approvals required before execution

- Approve acrylic reuse/update and the exact visibility/status treatment for the existing row.
- Approve create-new **draft / unpublished / restricted** rows for **UGREEN**, **Gizzu**, and **World Map**.
- Approve the exact image/content-use basis.
- Approve the exact product descriptions and pilot wording.
- Approve **Controlled Pilot** collection creation/reuse if needed.
- Approve the exact tag set.
- Approve whether product pages remain **draft**, **unpublished**, or otherwise **restricted** before go/no-go.
- Approve the later bounded Shopify Admin execution slice.
- Approve the post-staging QA matrix.
- Confirm **no** checkout/payment/customer access until final go/no-go.

### H. Safety confirmation

- **No Shopify Admin write action occurred** in **Slice 21Q-B1**.
- **No** product create/update/delete/import/staging occurred in **Slice 21Q-B1**.

---

## 15B. Slice 21S — Controlled pilot shipping-configuration readiness/execution pass (DevOps / Platform Engineer)

**Verdict:** **PASS WITH NOTES** — **readiness-only**; **Product Owner accepted** (tracker hygiene **`docs/project-control.md`** + **§15B**). **No Shopify Admin shipping execution occurred in this slice.**

**Readiness docs commit:** **`3d1511b`** — `docs: record controlled pilot shipping readiness`

**Evidence:** `artifacts/devops/slice-21s-controlled-pilot-shipping-configuration-readiness/20260512-205422/`

### A. Exact configuration reviewed (read-only)

- **Shopify Admin delivery profiles** via read-only GraphQL.
- **Shipping zone / active rate** state visible on the current delivery profile.
- The **four locked Gadgetgyz pilot rows** for handle / SKU / draft status / tag / pilot-price confirmation.

### B. Sanitized findings

- Only one delivery profile was visible: **`General profile`**.
- The visible shipping zone on that profile was **South Africa** (**ZA**).
- The visible active rate on that profile was **`Standard shipping`** at **ZAR 99.0**.
- The four locked pilot products still validate as **draft** **Gadgetgyz** rows with exact approved handles, SKUs, expected pilot prices, and expected pilot tags.
- No pilot-only / product-specific shipping profile was visible in the reviewed configuration.

### C. Decision / blocker

- **Do not configure shipping** in this slice.
- The accepted shipping strategy remains **pilot-only / product-specific shipping profile only**.
- **General-profile fallback remains blocked** unless **separately** justified and **Product Owner**-approved.
- Because only **`General profile`** was visible, and no safe product-isolated profile scope was confirmed, a bounded shipping execution could not be applied without risk of affecting unintended products if customer access later widens.

### D. What must be explicit before a later execution slice

- Exact **pilot-only / product-specific** shipping-profile strategy.
- Exact **product ↔ profile** assignment approval for the four locked pilot products.
- Exact **South Africa-only** zone/rate scope to apply.
- Exact customer-facing rate label / amount if execution is later approved.
- Pre-change capture and rollback notes for the specific profile / zone / rate to be changed.

### E. Rollback / recovery notes

- **No rollback was needed** in **Slice 21S** because **no Shopify Admin change occurred**.
- For any later execution slice, capture sanitized **before** state for the profile, zone, and rate, and be prepared to remove or disable the pilot rate and restore prior profile settings if any shipping behaviour is mis-scoped.

---

## 15C. Slice 21T — Controlled pilot product-specific shipping setup execution gate (DevOps / Platform Engineer)

**Verdict:** **PASS WITH NOTES** — bounded Shopify Admin shipping-profile execution completed; checkout/payment/customer access remain blocked.

**Evidence:** `artifacts/devops/slice-21t-controlled-pilot-product-specific-shipping-setup/20260513-221127/`

### A. Pre-change state reconfirmed

- **`General profile`** was still the only visible profile in the initial readiness-style query.
- The visible default-profile zone was **South Africa** (**ZA**).
- The visible default-profile active rate was **`Standard shipping`** at **ZAR 99.0**.
- All four locked **Gadgetgyz** pilot rows still validated as **draft** with exact approved handles, SKUs, pilot prices, and expected tags.
- All four locked pilot variants still resolved to **`General profile`** before execution.

### B. Execution gate confirmations used

- Strategy remained **pilot-only / product-specific shipping profile only**.
- Exact profile name used: **`Mzansi Select Controlled Pilot — Gadgetgyz`**.
- Exact assignments used: the four locked pilot variants only (**`DP0402`**, **`CR106-20277`**, **`GCPU2C2`**, **`74886`**).
- Exact zone used: **South Africa** (**ZA**) only.
- Exact rate used: **`Pilot courier delivery`** at **ZAR 89.0**.
- Rate posture remained **controlled-pilot planning/test only**, **not** a final public delivery promise.
- Rollback path was prepared before write execution:
  - **Preferred full rollback:** remove the new profile with **`deliveryProfileRemove`**.
  - **Narrow rollback:** use **`deliveryProfileUpdate`** with **`variantsToDissociate`** so the four pilot variants move back to the default profile, then remove the pilot profile if safe.
  - Restore anchor: captured pre-change **`General profile`** state under the evidence folder.
- Execution did **not** require or enable checkout/payment/customer access/public launch.

### C. Admin changes made

- Created delivery profile **`Mzansi Select Controlled Pilot — Gadgetgyz`** (`gid://shopify/DeliveryProfile/102254641335`).
- Added the existing **`Shop location`** origin (`gid://shopify/Location/81872421047`) to the new profile.
- Added **South Africa** zone (`gid://shopify/DeliveryZone/428803883191`) with **`includeAllProvinces: true`**.
- Added active fixed rate **`Pilot courier delivery`** (`gid://shopify/DeliveryMethodDefinition/775970619575`) at **ZAR 89.0**.
- Associated exactly four locked pilot variants to the new profile:
  - **`DP0402`** / **`Acrylic Tablet & Phone Stand`** / **`acrylic-tablet-phone-stand`**
  - **`CR106-20277`** / **`UGREEN 4-in-1 USB 2.0 Hub`** / **`ugreen-4-in-1-usb-2-0-hub`**
  - **`GCPU2C2`** / **`Gizzu USB to Type-C Cable — 2m`** / **`gizzu-usb-to-type-c-cable-2m`**
  - **`74886`** / **`World Map Extended Mouse Pad`** / **`world-map-extended-mouse-pad`**

### D. Notes and after-state verification

- The first create attempt was rejected because **ZA** required province coverage; the successful create used **`includeAllProvinces: true`**.
- After-state verification confirmed:
  - the new profile exists and is non-default
  - all four pilot variants now resolve to the new profile
  - **`General profile`** remains the default profile
  - **`General profile`** still carries **South Africa** (**ZA**) with active **`Standard shipping`** at **ZAR 99.0**
  - **`shop.countriesInShippingZones`** remains **ZA** only and **`includeRestOfWorld`** remains **false**
- **`markets`** GraphQL inspection was not available because the current local stored auth lacks **`read_markets`**. No market settings were changed in this slice; ZA-only scope was inferred from the shipping-zone context plus the unchanged blocked customer-access posture.

### E. Safety and rollback / recovery notes

- **No** checkout/payment/customer-access/public-launch enablement occurred.
- **No** theme push/publish occurred.
- **No** product create/update/delete/import/staging occurred.
- **No** product data changed except shipping-profile assignment.
- **No** customer/order/payment data, supplier account data, tokens, cookies, or raw Admin payloads were stored in repo docs.
- If rollback is needed later:
  1. remove the pilot profile with **`deliveryProfileRemove`**, or first dissociate the four pilot variants back to default with **`deliveryProfileUpdate`**
  2. confirm each pilot variant resolves back to **`General profile`**
  3. confirm **`General profile`** still shows **South Africa** (**ZA**) and **`Standard shipping`** **ZAR 99.0**
  4. keep checkout/payment/customer access blocked throughout

---

## 15D. Slice 21U — Controlled pilot shipping isolation QA (read-only validation)

**Verdict:** **PASS WITH NOTES** — **Product Owner accepted**. **Docs-only** tracker/pilot sync; **no** Shopify Admin, theme, product-row, checkout, payment, or customer-access changes in this slice.

**Evidence:** `artifacts/qa/slice-21u-controlled-pilot-shipping-isolation-validation/20260513-223303/`

### A. Accepted QA matrix (summary)

| Area | Result |
|------|--------|
| Documentation sync | **PASS** |
| Pilot profile / rate / zone validation | **PASS** |
| Pilot product assignment | **PASS WITH NOTES** |
| Non-pilot product isolation | **PASS WITH NOTES** |
| Mixed-cart behaviour | **BLOCKED** (requires cart/checkout or shipping-rate calculation — separate safe test boundary) |
| Commerce / customer-access signals | **PASS WITH NOTES** |

### B. Validated shipping configuration (read-only Admin GraphQL)

- **Profile:** **`Mzansi Select Controlled Pilot — Gadgetgyz`**
- **Zone:** **South Africa** (**ZA**)
- **Rate:** **`Pilot courier delivery`** — **ZAR 89.0**
- **Assigned pilot products (exact four):**
  1. **`DP0402`** / Acrylic Tablet & Phone Stand / `acrylic-tablet-phone-stand`
  2. **`CR106-20277`** / UGREEN 4-in-1 USB 2.0 Hub / `ugreen-4-in-1-usb-2-0-hub`
  3. **`GCPU2C2`** / Gizzu USB to Type-C Cable — 2m / `gizzu-usb-to-type-c-cable-2m`
  4. **`74886`** / World Map Extended Mouse Pad / `world-map-extended-mouse-pad`

### C. Accepted notes

- All four locked pilot products resolved to the controlled pilot shipping profile in read-only Admin GraphQL.
- Representative non-pilot products remained on **`General profile`**.
- No store-wide reassignment to the pilot profile was observed.
- Mixed-cart validation requires cart/checkout or shipping-rate calculation interaction and remains **BLOCKED** until a separate safe test boundary is approved.
- Passive preview routes redirected to **`/password`**, consistent with customer access remaining blocked.
- No **`/cart/add`**, checkout, payment, customer, newsletter, or wishlist request signals were observed.
- Current shipping-zone state showed **ZA** only, with **`includeRestOfWorld=false`**.

### D. Safety posture (unchanged)

- **Customer access** remains **BLOCKED**.
- **Checkout / payment** remain **BLOCKED**.
- **Public launch** remains **BLOCKED**.
- **`Supplier verified`** remains **BLOCKED**.
- **Final delivery promise** remains **BLOCKED**.
- **Final product claims** remain **BLOCKED**.
- **R89** remains a **controlled pilot shipping configuration**, **not** a public/final delivery promise.

### E. Next recommended gate (superseded by **§15E**, then **§15F**)

- **Product Manager** supplier re-check and readiness planning **before** any checkout/shipping-rate test window — **completed as evidence posture** in **Slice 21V** (**§15E**). **Slice 21W-B** (**§15F**) **closes** the **Gadgetgyz** controlled-pilot **route** — **do not** treat **Slice 21W** basket-recheck + **no-payment** checkout/shipping-rate validation framing as an active **Gadgetgyz** execution gate without a **new** **Product Owner**–scoped slice.

### F. LLD

- **Likely unchanged** unless a direct contradiction is found: **Slice 21U** validated existing configuration; **no** Admin configuration, storefront contracts, theme code, checkout/payment behaviour, or customer-access behaviour changed.

---

## 15E. Slice 21V — Gadgetgyz 4-SKU supplier re-check evidence capture (Product Manager / Product Owner conditional acceptance; **next-step framing superseded by §15F**)

**Verdict:** **PASS WITH NOTES / CONDITIONAL** — **Product Manager** verdict **PASS WITH NOTES / CONDITIONAL**; **Product Owner** conditional acceptance **in substance** **pending docs closure**. **Docs-only**; **no** Shopify Admin, theme, product rows, shipping configuration, checkout/payment, or customer-access changes in this slice.

### A. Accepted SKU-level evidence (Gadgetgyz signals; not final pricing or claims)

| SKU | Storefront title / handle | Supplier price signal | Stock signal | Recommendation |
|-----|----------------------------|------------------------|--------------|----------------|
| **DP0402** | Acrylic Tablet & Phone Stand / `acrylic-tablet-phone-stand` | **R158.89** | **In Stock** | **Conditionally ready** |
| **CR106-20277** | UGREEN 4-in-1 USB 2.0 Hub / `ugreen-4-in-1-usb-2-0-hub` | **R163.90** | **In Stock** | **Conditionally ready with claim caution** |
| **GCPU2C2** | Gizzu USB to Type-C Cable — 2m / `gizzu-usb-to-type-c-cable-2m` | **R53.90** | **In Stock** | **Conditionally ready with claim caution** |
| **74886** | World Map Extended Mouse Pad / `world-map-extended-mouse-pad` | **R120.00** | **In Stock** | **Conditionally ready with softened claim wording** |

### B. R89 courier / delivery posture

- **Accepted project setup (may still exist in Admin):** profile **`Mzansi Select Controlled Pilot — Gadgetgyz`**; zone **South Africa** (**ZA**); rate **`Pilot courier delivery`** — **ZAR 89.0** (**Slice 21T** Shopify configuration). **Slice 21W-B:** treat this profile as **dormant / blocked** — **not** launch-ready; **no** Admin cleanup in this pass.
- **Slice 21V** did **not** freshly validate a current **Gadgetgyz** checkout basket showing **R89**.
- **R89** remains **conditional** and must be treated as a **supplier checkout / planning signal**, **not** a **final delivery promise**.
- **Same-day manual Gadgetgyz basket + delivery signal recheck** was **historically** framed as **required** before any **no-payment** checkout/shipping-rate validation window — **superseded for the Gadgetgyz controlled-pilot route** by **Slice 21W-B** (**§15F**): authenticated capture **INCONCLUSIVE / BLOCKED**; **do not** proceed with that **Gadgetgyz** validation chain without a **new** **Product Owner** slice.

### C. Manual fulfilment posture (workable with controls)

- **Product Owner** rechecks stock and supplier price.
- **Product Owner** places supplier order manually.
- **Product Owner** captures supplier order/reference/tracking.
- **Product Owner** communicates status to customer.
- **Product Owner** handles refund/cancellation if stock, supplier price, or delivery changes.

### D. Claim / safety / warranty posture

- **No** new high-risk product/safety issue identified.
- Keep claims **conservative**.
- **Do not** use unsupported fast-charge, **66W**, **480Mbps**, universal compatibility, guaranteed anti-slip, professional-grade, durability, or warranty claims.
- Customer wording remains **non-final**.

### E. Current blockers (preserve)

- **Customer access** remains **BLOCKED**.
- **Checkout / payment** remain **BLOCKED**.
- **Public launch** remains **BLOCKED**.
- **`Supplier verified`** remains **BLOCKED**.
- **Final delivery promise** remains **BLOCKED**.
- **Product claims** remain **BLOCKED**.
- **No-payment checkout/shipping-rate validation window** is **not** approved — **Slice 21W-B** **closes** the **Gadgetgyz** controlled-pilot route basis for proceeding.

### F. Recommended next slice (superseded by **§15F**)

- **Historical:** **Slice 21W** was framed as **Product Owner** decision on a **bounded no-payment checkout/shipping-rate validation window** after **same-day Gadgetgyz** basket/delivery recheck. **Slice 21W-B** **Product Owner** acceptance **closes** the **Gadgetgyz** controlled-pilot **route** — **do not** proceed with that **Gadgetgyz** validation chain without a **new** scoped decision.

### G. LLD

- **Unchanged** unless a direct contradiction is found — **Slice 21V** did **not** change checkout, Admin, theme, storefront, shipping configuration, payment, or customer-access behaviour.

---

## 15F. Slice 21W-B — Gadgetgyz controlled-pilot authenticated basket/delivery capture (INCONCLUSIVE / BLOCKED; route closure)

**Verdict:** **INCONCLUSIVE / BLOCKED** — **Product Owner** accepts **Gadgetgyz** controlled-pilot supplier proof as **not ready** — **closes** the **Gadgetgyz** controlled-pilot **route** for the **current** pilot. **Docs-only**; **no** Shopify Admin cleanup, theme, product rows, shipping configuration changes, checkout/payment, or customer-access changes in this pass.

**Evidence (local only; not committed):** `artifacts/catalogue/slice-21w-b-gadgetgyz-authenticated-basket-delivery-capture/20260513-232047/`

### A. Affected SKUs (controlled pilot)

- **`DP0402`** — Acrylic Tablet & Phone Stand
- **`CR106-20277`** — UGREEN 4-in-1 USB 2.0 Hub
- **`GCPU2C2`** — Gizzu USB to Type-C Cable — 2m
- **`74886`** — World Map Extended Mouse Pad

### B. Reason

- Authenticated **Gadgetgyz** inspection could **not** reliably resolve exact product pages for the four SKUs above.
- **No** safe basket/delivery signal was captured.
- **R89** courier signal was **not** revalidated against supplier checkout in this pass.

### C. Gates (record)

- **Do not** proceed with **Gadgetgyz** checkout/shipping-rate validation on this basis.
- **Do not** approve **R89** as a **final/public** delivery promise.
- **Do not** approve **`Supplier verified`**, final pricing, final delivery promises, or final product claims.
- **Do not** enable checkout/payment or customer access; **do not** approve public launch — **customer access remains BLOCKED**.

### D. Supplier strategy pivot

- **CJdropshipping** + **DSers** are the **primary** supplier routes for the **next** **Product Manager** strategy reset — **not** `Supplier verified`.
- **No** import/sync/app permissions/product staging approved by this docs pass.
- The **next** **Product Manager** pass must reframe catalogue sourcing, delivery-time honesty, pricing/margin assumptions, supplier proof checklist, Shopify import/sync approach, and risks compared with the failed **Gadgetgyz** authenticated capture path.

### E. Shopify pilot shipping profile posture

- If **`Mzansi Select Controlled Pilot — Gadgetgyz`** remains in Admin, treat it as **dormant / blocked** — **not** launch-ready.
- **No** Admin cleanup/removal approved in this pass; future **DevOps** cleanup may be sequenced after the supplier reset if needed.

### F. LLD

- **Likely unchanged** unless a direct contradiction is found — this slice is a supplier strategy/docs decision; it does **not** change theme, checkout, payment, customer-access, shipping configuration execution, or storefront behaviour by itself.

---

## 15G. Slice 21X — Supplier strategy reset (CJdropshipping + DSers; Product Owner PASS WITH NOTES)

**Verdict:** **PASS WITH NOTES** — **Product Owner accepted**. **Docs-only**; **no** Shopify app **install**/**import**/**sync**, **no** Admin/theme/product/shipping/checkout/payment/customer-access changes.

### A. Accepted supplier strategy

- **CJdropshipping** **first**; **DSers** **second**; **hybrid** later **only** if **both** routes pass proof gates.
- **Gadgetgyz** remains **closed** for the **current** pilot (**Slice 21W-B** / **§15F**).
- **Temu** **benchmark-only** — **not** a supplier route.

### B. Product Manager recommendation (accepted)

- **CJdropshipping** as first replacement proof route: product sourcing, Shopify integration, global fulfilment, order tracking, categories aligned to Mzansi Select.
- **DSers** as broader AliExpress-backed catalogue/supplier-mapping route — **stricter delivery honesty** (AliExpress delivery-time risk).

### C. Replacement catalogue sourcing plan (planning)

- **10–15** candidates (**not** a broad import).
- **Categories:** **Tech Accessories**, **Office & Desk**, **Kitchen & Storage**, **Home & Living**.
- **Rules:** lightweight/small parcel; low claim risk; **no** safety/medical/regulated; **no** fragile/high-return-risk; clear images; **product-specific** shipping estimate to **South Africa**; margin estimate; delivery honesty.

### D. Approved delivery-time honesty wording

- **General:** “Imported supplier-route item. Delivery timing varies by supplier, warehouse, and courier method. Final delivery estimate is confirmed before fulfilment.”
- **Pilot add-on:** “This item is part of a controlled pilot. Delivery timing and fulfilment route will be confirmed before customer access or fulfilment.”

### E. Landed-cost pricing + margin targets (planning)

- **Landed-cost pricing:** supplier product cost + shipping cost + Shopify/payment fee buffer + refund/support risk buffer + target margin.
- **Minimum gross-margin targets:** **CJdropshipping** **35–45%** after product + shipping estimate; **DSers/AliExpress** **45–60%** (higher delivery/quality/refund risk).

### F. Non-approvals and next gate

- **No** **`Supplier verified`**; **no** app install/import/sync; **customer access** **BLOCKED**; **checkout/payment** **BLOCKED**; **public launch** **BLOCKED**; **final pricing / delivery promises / product claims** **BLOCKED**.
- **Next approved gate:** **Slice 21Y** — **CJdropshipping** + **DSers** **app-permission / privacy risk review** **before** any **install** or **import**.

### G. LLD

- **Unchanged** unless a direct contradiction is found — **Slice 21X** is supplier strategy/docs only.

---

## Document control

- **Version:** 1.14  
- **Next review:** **Product Owner / User** + **Product Manager** — **Slice 21Y** (**CJdropshipping** + **DSers** **app-permission / privacy risk review** **before** any app **install** or product **import/sync**). **DevOps / Platform Engineer** — **no** install/import until **Slice 21Y** **PASS**. **Product Owner / User** — maintains **customer access BLOCKED** and all headline gates (**§15G** **F**). **Product Manager** or **Senior Full-Stack Software Architect** — maintain **§15A** / **§15C** / **§15D** / **§15E** / **§15F** / **§15G** as living planning records. **Canonical:** **`docs/project-control.md` `## Slice 21X`** + **`docs/catalogue/mzansi-select-25-product-readiness-v1.md` `## Slice 21X`** + **`docs/catalogue/local-supplier-sourcing-matrix-v1.md` `## Slice 21X`**.
