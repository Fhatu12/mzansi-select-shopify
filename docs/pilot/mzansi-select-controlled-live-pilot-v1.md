# Mzansi Select — Controlled live pilot (Gadgetgyz 4-SKU) — implementation planning v1

**Document type:** Controlled pilot implementation plan (planning only)  
**Prepared:** 2026-05-11  
**Updated:** 2026-05-12 — **Slice 21K** … **21P** (through **§15** controlled Admin **product-staging implementation plan** — **docs only**; **no** Admin execution).  
**Owner:** Product Owner  
**Status:** **Slice 21J** / **21K** / **21L** — **PASS WITH NOTES**. **Slice 21M** — **planning recorded** (**§12**). **Slice 21N** — **PASS WITH NOTES** (**§13**; commit **`417e78f…`**). **Slice 21O** — **PASS WITH NOTES** — product-staging readiness (**§14**) **accepted**; intended **Shopify** handles + collection/tags/SKU mapping **recorded** for planning (**not** Admin execution). **Slice 21P** — **bounded implementation plan recorded** (**§15**) — **no** Shopify Admin product staging, import, shipping, checkout, payment, theme, or customer-access execution in this pass. **Customer access remains BLOCKED**. **Shipping:** **product-specific profile only**; **general-profile fallback blocked** unless **separately** approved. **Pilot courier delivery — R89** — **conditional**; **controlled checkout testing only** when later approved; **R89** **supplier re-check** before customer access; **no** final delivery promise. **Payment/capture** **blocked** pending separate checks. **Refund/cancellation** per **§1** remains accepted.

**Related tracker:** `docs/project-control.md` — **Slice 21I** … **Slice 21P**.  
**Catalogue cross-reference:** `docs/catalogue/mzansi-select-25-product-readiness-v1.md` — **Slice 21J** / **21O** / **21P** pilot staging planning (handles, tags, collection, prices).

---

## 1. Approved pilot baseline (planning record)

| Element | Approved value |
|--------|------------------|
| Posture | Controlled live pilot — **not** public launch |
| Access | Invite-only controlled group |
| Order cap | **10** total pilot orders initially |
| Supplier | **Gadgetgyz only** — do **not** route this pilot through ZA Dropshipping, Temu, Dropstore, KillerDeals, Calasca, or Ecomstock |
| Delivery fee (planning) | **Slice 21L:** **R89** accepted only as the **current controlled-pilot delivery planning signal** (from **Slice 21K** supplier checkout: **Courier Door to Door Delivery — Economy**, **R89.00**; basket total shown **R745.70**). **R89** is **not** approved as **final public** delivery pricing. Checkout-displayed **3 to 5 business days** remains **supplier checkout signal / docs planning only** — **not** approved as customer-facing wording. Basket contents **not** fully confirmed. Delivery cost and timing remain subject to order review, stock confirmation, supplier checkout confirmation, **Shopify** shipping setup, checkout testing, and **Product Owner** final pilot go/no-go. Prior **R99** flat assumption **withdrawn** — **do not** use **R99** in pilot planning unless later supplier evidence explains a different scenario. |
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
6. **R89:** remains **conditional** on **Gadgetgyz / supplier re-check** immediately **before** any customer access widening.
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
| **CONDITIONAL GO** (**accepted posture after Slice 21N PASS WITH NOTES**) | A **later** bounded Admin shipping slice may proceed **only after:** **(a)** **§15 Slice 21P** execution prerequisites: exact **Shopify** rows verified / reuse-or-create **per-SKU PO decisions** recorded — **no duplicate rows**; **(b)** **pilot-only / product-specific** profile — **general-profile fallback blocked** unless **separate** PO approval; **(c)** **South Africa only** validated in Admin QA; **(d)** **Pilot courier delivery — R89** **only** in **controlled pilot checkout testing** if separately approved; **(e)** **R89** supplier re-check before customer access; **(f)** **payment/capture** in a **separate** slice — **blocked** until then; **(g)** **no manual card/payment data handling**; **(h)** **customer-access** **blocked** until approved Admin setup + **QA pass** + final **PO** go/no-go; **(i)** **§12.H** approvals. |

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
| 1 | Acrylic Tablet & Phone Stand | `acrylic-tablet-or-phone-stand` | Default Title | `DP0402` | **249** | **blank** | **§15.D** + **Controlled Pilot** | **Gadgetgyz** | **Tech Accessories** (or **Office & Desk** per PO) | **Only** after **PO**-approved image/content-use basis | **§1** pilot delivery + returns + refund/support; **no** **Supplier verified**; **no** final claims | Manual stock confirmation before fulfilment; policy **TBD** in execution slice | **Draft / unpublished / restricted** until **PO** go/no-go — **non-purchasable** until checkout/payment separately approved |
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

---

## Document control

- **Version:** 1.7  
- **Next review:** **Product Owner / User** — approve **bounded Shopify Admin product-staging execution** slice when ready (**§15** satisfied + **§15.J**); **DevOps** / operator — execute **only** after written approval; **Product Owner** — shipping profile slice (**§12**) after row verification + staging **QA**; **Product Manager** or **Senior Full-Stack Software Architect** — maintain **§15** as living execution spec until slice completes.
