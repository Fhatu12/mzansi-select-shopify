# Mzansi Select — Controlled live pilot (Gadgetgyz 4-SKU) — implementation planning v1

**Document type:** Controlled pilot implementation plan (planning only)  
**Prepared:** 2026-05-11  
**Updated:** 2026-05-12 — **Slice 21K** / **21L** / **21M** (supplier signal; delivery posture; **Shopify** shipping/checkout **configuration planning** — **§12**).  
**Owner:** Product Owner  
**Status:** **Slice 21J** / **21K** / **21L** — **PASS WITH NOTES** (**Product Owner**). **Slice 21M** — **planning recorded** (DevOps / Platform Engineer; **no** Admin execution until **Product Owner** accepts **§12**). **No** Shopify Admin configuration in **Slice 21M**, **no** checkout/payment/customer access enablement, **no** theme push/publish/live overwrite. **Customer access remains BLOCKED**. **Shopify** shipping/checkout remains **unconfigured** until **Product Owner** accepts the **Slice 21M** plan and a **separate** execution go/no-go. **R89** = **current planning signal** only; **not** final public delivery pricing. **3–5 business days** = **supplier/docs only** — **not** customer-facing. Planning detail: **§6A** + **§12**.

**Related tracker:** `docs/project-control.md` — **Slice 21I**, **Slice 21J**, **Slice 21K**, **Slice 21L**, **Slice 21M**.  
**Catalogue cross-reference:** `docs/catalogue/mzansi-select-25-product-readiness-v1.md` — **Slice 21J** baseline + **Slice 21K** / **Slice 21L** delivery posture.

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

**Admin / staging / checkout:** **not approved** in **Slice 21J** / **Slice 21K** / **Slice 21L** / **Slice 21M** (**Slice 21M** = **planning only**). **Do not configure** **Shopify** shipping or checkout in this pass — **§6A** + **§12**. Shopify Admin edits, product import/staging, checkout/payment enablement, and theme publish require a **separate execution slice** after **Product Owner** accepts the **Slice 21M** plan and **§6B** / **§12.H** gates — see **`docs/project-control.md` `## Slice 21J`**, **`## Slice 21K`**, **`## Slice 21L`**, **`## Slice 21M`**.

### 6A. Bounded Shopify shipping and checkout configuration (planning only — **do not configure yet**)

Full DevOps / platform plan: **§12 (Slice 21M)** — this subsection remains the **high-level gate**; **§12** expands Admin touchpoints, rate options, rollback, QA, risks, and **Product Owner** execution approvals.

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
- Stock volatility on **74886** / **GCPU2C2** evidence gaps from prior Security notes.
- Operator roster and POPIA-aligned retention schedule for pilot order evidence.
- Whether pilot orders use **draft orders** vs **live checkout** — **undecided**; affects payment PCI scope.

---

## 12. Slice 21M — Bounded Shopify shipping/checkout configuration plan (DevOps / Platform Engineer; **planning only**)

**Prerequisite:** **Slice 21L** accepted docs commit **`bc5fb304f56204bb65e25a00a9499750766b4781`**. This section is **planning only** — **no** Shopify Admin edits, **no** shipping configuration, **no** payment/checkout enablement, **no** customer access.

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

## Document control

- **Version:** 1.4  
- **Next review:** **Product Owner / User** — **accept** the **Slice 21M** plan (**planning**); then **DevOps** — **execution** slice only after **written** PO approval and **§6B** / **§12.H** closure.
