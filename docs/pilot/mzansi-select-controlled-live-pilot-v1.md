# Mzansi Select — Controlled live pilot (Gadgetgyz 4-SKU) — implementation planning v1

**Document type:** Controlled pilot implementation plan (planning only)  
**Prepared:** 2026-05-11  
**Updated:** 2026-05-12 — **Product Owner operational pilot decisions** recorded (SLAs, evidence handling, shipping gate, Admin/staging/checkout deferral). **2026-05-12 (Slice 21K):** partial **Gadgetgyz** supplier-checkout shipping signal (**R89** Economy; **not** final customer-facing promise).  
**Owner:** Product Owner  
**Status:** **Slice 21J** — **PASS WITH NOTES** — planning + operational controls recorded in docs. **Slice 21K** — **PASS WITH NOTES** — **partial** supplier-checkout shipping evidence only. **No** Shopify Admin execution, **no** product import/staging, **no** checkout/payment/customer access enablement, **no** theme push/publish/live overwrite. **Customer access remains BLOCKED** until a separate explicit go/no-go. **Gadgetgyz** pilot delivery: prior **R99** flat assumption **withdrawn as confirmed**; observed **R89** Economy + checkout-displayed **3–5 business days** are **supplier signals only** — see **§5**. **Admin/staging/checkout** remain **not approved** until basket/setup confirmation and SOP controls are recorded in docs.

**Related tracker:** `docs/project-control.md` — **Slice 21I** (Security / Compliance — **PASS WITH NOTES**, implementation planning only), **Slice 21J**, and **Slice 21K** (partial Gadgetgyz shipping evidence).  
**Catalogue cross-reference:** `docs/catalogue/mzansi-select-25-product-readiness-v1.md` — **Slice 21J** baseline + **Slice 21K** delivery gate wording.

---

## 1. Approved pilot baseline (planning record)

| Element | Approved value |
|--------|------------------|
| Posture | Controlled live pilot — **not** public launch |
| Access | Invite-only controlled group |
| Order cap | **10** total pilot orders initially |
| Supplier | **Gadgetgyz only** — do **not** route this pilot through ZA Dropshipping, Temu, Dropstore, KillerDeals, Calasca, or Ecomstock |
| Delivery fee (planning) | **Slice 21K (partial):** supplier-checkout observation — **Courier Door to Door Delivery — Economy**, **R89.00**; checkout-displayed timing **3 to 5 business days** (**supplier timing signal only**, **not** guaranteed customer-facing delivery). Basket total shown **R745.70**. Prior **R99** flat pilot assumption **no longer accepted as confirmed** — **do not** use **R99** in pilot planning unless later supplier evidence explains a different scenario. Conservative customer-facing wording remains **§1** until exact pilot basket and delivery setup are confirmed. |
| Margins | Product margins **exclude** delivery |
| Pricing | **Pilot-only** — **not** final public pricing |

### Approved delivery wording (pilot; exact)

> Pilot delivery is handled manually through our South African supplier route. Delivery timing is not guaranteed and will be confirmed after order review and supplier stock confirmation.

**Slice 21K note:** keep using this string for customer-facing posture until the **exact** pilot basket/product mix and **Gadgetgyz** delivery setup are confirmed. **Do not** add **guaranteed** delivery dates or fee promises from supplier checkout readouts alone.

### Approved returns/refund wording (pilot; exact)

> Returns and warranty handling are managed case by case during the controlled pilot. Statutory consumer rights are not limited. If an item arrives damaged, incorrect, or cannot be fulfilled, we will assist with a replacement, refund, or cancellation where applicable.

### Required wording posture (non-exhaustive)

- Conservative factual product descriptions.
- Use **“pilot price”** / **“controlled pilot”** framing where applicable.
- State that stock and fulfilment are **manually confirmed**.
- State that delivery timing is **not guaranteed**.
- State that **statutory consumer rights are not limited**.
- **Do not use:** Best Sellers, Deals, Sale, Supplier verified, final price, guaranteed stock, guaranteed delivery, fast delivery, universal compatibility, or unsupported technical/performance claims.

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
| 1 | Acrylic Tablet & Phone Stand | DP0402 | R249 | Match approved pilot naming; avoid absolute performance claims | Factual acrylic stand / size / materials only; **pilot price** label | Supplier-approved or PO-approved imagery only; placeholder until permission | **Tech Accessories** (and/or **Office & Desk** if dual placement approved) | Manual stock check with Gadgetgyz before each batch; **no** guaranteed stock | Use **§1 approved pilot** delivery + returns strings + link to pilot policy snippet | Not **Supplier verified**; not final public price; fulfilment manual |
| 2 | UGREEN 4-in-1 USB 2.0 Hub | CR106-20277 | R279 | USB **2.0** hub factual description only | No speed/performance guarantees beyond USB 2.0 spec facts | As above | **Tech Accessories** | As above | As above | As above |
| 3 | Gizzu USB to Type-C Cable — 2m | GCPU2C2 | R129 | Length and connector facts only | **No** 66W / 480Mbps / universal compatibility unless evidence attached in implementation slice | As above | **Tech Accessories** | As above | As above | As above |
| 4 | World Map Extended Mouse Pad | 74886 | R219 | Dimensions/material facts only | **No** anti-slip / durability guarantees unless softened or evidence-backed | As above | **Office & Desk** / **Tech Accessories** per PO | As above | As above | As above |

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

**Product Owner gate — before any customer access:** **R89**, **R745.70**, and **3–5 business days** do **not** become **customer-facing** delivery policy until **exact** pilot basket/product mix and **Gadgetgyz** delivery setup are confirmed. Customer-facing copy stays **§1** (conservative, **not guaranteed**) until an explicit go/no-go updates it.

---

## 6. Checkout / payment readiness checks (**no** enablement)

| Check | Purpose |
|-------|---------|
| Payments account status | Confirm gateway **not** live for pilot until PO + Security sign-off. |
| Checkout test mode | If used, must be **staff-only** / password-gated store — **no** public customer access. |
| Cart → checkout path | Verify no accidental navigation to live checkout URLs from preview theme. |
| Legal / refund copy | Ensure checkout legal snippets align with **§1** returns wording (non-final). |
| Order cap | System or manual guard for **10** orders — see **§7**. |

**Explicit:** these are **readiness and gap-identification** steps only. **No** checkout or payment **enablement** is approved by **Slice 21J**.

**Admin / staging / checkout:** **not approved** in **Slice 21J** / **Slice 21K**. Shopify Admin edits, product import/staging, checkout/payment enablement, and theme publish require a **separate bounded slice** opened only after **Gadgetgyz** pilot **basket composition** and delivery-setup questions in **§5** are **closed** in docs and **SOP** controls (including **§7** SLAs) are **recorded** — see **`docs/project-control.md` `## Slice 21J`** and **`## Slice 21K`**.

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
- **Repository hygiene:** treat **repo docs + local project notes** as **non-systems-of-record** for customer/order PII — align with **§7.3** and **`docs/project-control.md` `## Slice 21J`** / **`## Slice 21K`**.
- **Access logging:** recommend Admin audit log review cadence during pilot (implementation detail later).
- **Support channels:** pilot support contact method must not exfiltrate card data via chat/email.

---

## 9. QA validation plan (after implementation slice; not executed in 21J)

| Area | Validation |
|------|------------|
| PDP | Desktop + mobile — pilot copy, **pilot price**, delivery/returns strings, **no** prohibited promo language, **no** accidental purchasable state until approved. |
| Product cards | Desktop + mobile — pilot badges, **no** sale/compare-at abuse, deferred CTAs. |
| Cart | Pilot delivery line visibility; show **observed supplier fee / timing** only as **non-final** pilot planning where designed — **no** guaranteed delivery or final-fee claims; checkout button state honest. |
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
- **R89** / **3–5 business days** remain **supplier checkout signals** — **not** approved as final customer-facing delivery promise.
- Stock volatility on **74886** / **GCPU2C2** evidence gaps from prior Security notes.
- Operator roster and POPIA-aligned retention schedule for pilot order evidence.
- Whether pilot orders use **draft orders** vs **live checkout** — **undecided**; affects payment PCI scope.

---

## Document control

- **Version:** 1.2  
- **Next review:** **Product Owner / User** — close **Slice 21K** basket/setup questions — **or** **Product Manager** — pilot delivery recommendation (docs only); then prior to any implementation or Admin staging slice after explicit go/no-go.
