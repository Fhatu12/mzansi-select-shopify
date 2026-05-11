# Mzansi Select — Controlled live pilot (Gadgetgyz 4-SKU) — implementation planning v1

**Document type:** Controlled pilot implementation plan (planning only)  
**Prepared:** 2026-05-11  
**Owner:** Product Owner  
**Status:** **Slice 21J** — planning recorded. **No** Shopify Admin execution, **no** product import/staging, **no** checkout/payment/customer access enablement, **no** theme push/publish/live overwrite. **Customer access remains BLOCKED** until a separate explicit go/no-go.

**Related tracker:** `docs/project-control.md` — **Slice 21I** (Security / Compliance — **PASS WITH NOTES**, implementation planning only) and **Slice 21J**.  
**Catalogue cross-reference:** `docs/catalogue/mzansi-select-25-product-readiness-v1.md` — **Slice 21J** baseline.

---

## 1. Approved pilot baseline (planning record)

| Element | Approved value |
|--------|------------------|
| Posture | Controlled live pilot — **not** public launch |
| Access | Invite-only controlled group |
| Order cap | **10** total pilot orders initially |
| Supplier | **Gadgetgyz only** — do **not** route this pilot through ZA Dropshipping, Temu, Dropstore, KillerDeals, Calasca, or Ecomstock |
| Delivery fee assumption | **R99** separate flat **pilot** delivery fee — **pending** exact Gadgetgyz checkout/shipping confirmation |
| Margins | Product margins **exclude** delivery |
| Pricing | **Pilot-only** — **not** final public pricing |

### Approved delivery wording (pilot; exact)

> Pilot delivery is handled manually through our South African supplier route. Delivery timing is not guaranteed and will be confirmed after order review and supplier stock confirmation.

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
- Shipping profile / delivery profile — to validate **R99** pilot flat fee against Gadgetgyz checkout behaviour (research-only until approved).
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

## 5. R99 pilot delivery fee — handling and verification (planning)

| Step | Action |
|------|--------|
| V1 | Record **R99** as **assumption** in cart/checkout copy experiments **on paper** or in **preview** theme only after approval — not in this slice. |
| V2 | Capture Gadgetgyz checkout shipping line items (screenshot / order test in **supplier** context only — **no** customer payment in this planning phase) to confirm whether **R99** flat maps to supplier behaviour or needs adjustment. |
| V3 | Decide implementation: Shopify **shipping rate** draft, **line-item property**, or **manual invoice** adjustment — **decision deferred** to implementation slice; must not imply guaranteed delivery. |
| V4 | PDP/cart must show pilot delivery as **non-final** and **manually confirmed** until V2 closes. |

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

---

## 7. Manual fulfilment SOP additions (planning)

| Topic | Plan |
|-------|------|
| **10-order cap** | **Product Owner** owns the running count and go/no-go pause at **10** unless another owner is **explicitly** assigned in writing before go-live. |
| **Order evidence** | Store operational evidence only in **approved project evidence locations** (e.g. `artifacts/` policy-compliant folders); **no** card numbers, CVV, full PAN, or payment gateway raw tokens in tickets/docs. |
| **Payment data** | **No** manual card/payment detail collection or storage. Use Shopify-native capture only when/if checkout is formally enabled. |
| **Gadgetgyz stock failure** | Before customer access: define **refund/cancellation SLA** (target communication window, e.g. within **24–48 business hours** of internal confirmation — **to be finalized** in go/no-go) and who executes the refund in Shopify. |
| **Customer updates** | Define proactive update timeframes (e.g. order received, supplier confirmed, shipped, delay) **before** opening access. |
| **Data access** | Only **approved operators** (named role list TBD at go/no-go) may access customer order PII; least-privilege Admin accounts. |
| **Retention / deletion** | Evidence and order-related exports: retention window and secure deletion expectation **must** be defined before customer access (align with POPIA posture in `project-control` / Security guidance). |

---

## 8. Customer data / payment handling controls (planning)

- **PII minimisation:** collect only what checkout requires when enabled.
- **No** shadow databases of payment credentials.
- **Access logging:** recommend Admin audit log review cadence during pilot (implementation detail later).
- **Support channels:** pilot support contact method must not exfiltrate card data via chat/email.

---

## 9. QA validation plan (after implementation slice; not executed in 21J)

| Area | Validation |
|------|------------|
| PDP | Desktop + mobile — pilot copy, **pilot price**, delivery/returns strings, **no** prohibited promo language, **no** accidental purchasable state until approved. |
| Product cards | Desktop + mobile — pilot badges, **no** sale/compare-at abuse, deferred CTAs. |
| Cart | Pilot delivery line visibility; **R99** shown as pilot assumption where designed; checkout button state honest. |
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

- Exact Gadgetgyz shipping fee mapping vs **R99** flat pilot fee.
- Stock volatility on **74886** / **GCPU2C2** evidence gaps from prior Security notes.
- Operator roster and POPIA-aligned retention schedule for pilot order evidence.
- Whether pilot orders use **draft orders** vs **live checkout** — **undecided**; affects payment PCI scope.

---

## Document control

- **Version:** 1.0  
- **Next review:** Product Owner prior to any **Slice 21K+** implementation or Admin staging slice.
