# Slice 21BX — EPROLO supplier-route assessment

**Document type:** Supplier-route assessment (docs only)  
**Prepared:** 2026-05-20  
**Owner:** Product Owner  
**Slice:** **21BX**  
**Scope:** Assess whether **EPROLO** should become the **preferred** supplier route for Mzansi Select, **replace** **CJdropshipping** / **DSers**, or be **tested** as an **additional** candidate. **No** Shopify Admin mutation, **no** app install, **no** product import/sync, **no** account changes unless an existing account is used **read-only** at desk level.

**Related tracker:** `docs/project-control.md` — **`## Slice 21BX`**  
**Upstream context (read-first):** `docs/project-control.md`; `docs/pilot/mzansi-select-controlled-live-pilot-v1.md`; `docs/pilot/slice-21at-controlled-pilot-publish-for-preview-plan.md`; `docs/security/slice-21ay-admin-baseline-security-review.md`; `docs/user-guides/mzansi-select-restricted-preview-application-walkthrough.md`; `docs/catalogue/local-supplier-sourcing-matrix-v1.md` (**Slice 21X**–**21AC**); `docs/pilot/mzansi-select-cj-3-sku-staging-field-spec-v1.md`

---

## 1. Assessment verdict

**PASS WITH NOTES** — **docs-only** route assessment recorded.

**Route recommendation (summary):** **Test manually** as an **additional** international candidate route. **Do not** replace **CJdropshipping** or **DSers** in the accepted **Slice 21X** stack. **Do not** elevate **EPROLO** to **preferred** supplier route until **product-level** South Africa proof exists for a **shortlisted 5–10** SKU set and a **Security / Compliance** app-permission review (parallel to **Slice 21Y**) is completed for any later install consideration.

**Unverified-supplier-claim rule:** All **EPROLO** marketing, App Store, and public help-centre claims in this document are **desk-level signals only** and remain **unverified** until captured per SKU with date, variant, destination (**South Africa**), and screenshot or sanitized note **outside** the repo (local evidence only; **not** committed).

---

## 2. Why this assessment exists

The project is **paused** on **route-honesty** and **restricted-preview** validation. **No** supplier app install, **no** product import/sync, and **no** Shopify Admin mutation are approved.

**EPROLO** was flagged as a **possible simpler sourcing route** because public positioning suggests a **consolidated** stack: Shopify dropshipping connection, catalogue sourcing (including AliExpress-style sourcing signals on public pages), fulfilment, shipping method selection, tracking updates, and optional branding/packaging tiers.

This slice answers whether that consolidation is **real enough** and **safe enough** for Mzansi Select **without** overturning the accepted **CJ-first / DSers-second** posture or the **three-SKU** **CJ** controlled-pilot evidence chain (**Slices 21AB**–**21AR**, **21AY**).

---

## 3. Supplier fit

### 3.1 Target Mzansi Select categories

| Category | Desk-level EPROLO fit | Notes |
|----------|----------------------|-------|
| **Home & Living** | **Conditional / unverified** | Public catalogue positioning is **fashion- and apparel-heavy** (**unverified** for organiser/home utility depth). Home utility SKUs may exist but are **not** proven for Mzansi taxonomy. |
| **Kitchen & Storage** | **Conditional / unverified** | Small kitchen gadgets and storage accessories may be findable; **food-contact**, **sealer**, and **sharp-edge** items need **claim controls** like the **CJ** **USB Bag Sealer** posture. |
| **Office & Desk** | **Moderate / unverified** | Phone stands, cable management, desk organisers align with general dropshipping catalogues — **product-level** media and claim review still required. |
| **Tech Accessories** | **Moderate / unverified** | Overlap with stands, hubs, cables, holders is plausible; **wireless-charge**, **speed**, **compatibility**, and **battery** claims remain **high risk** (consistent with **Slice 21Z** deferrals). |

### 3.2 Category rules (unchanged from Slice 21X)

Continue to prefer: lightweight parcel; low claim risk; **no** safety/medical/regulated positioning; **no** fragile/high-return-risk unless evidence-backed; clear images; **product-specific** **South Africa** shipping estimate; margin estimate; conservative delivery honesty.

### 3.3 Fit vs current CJ controlled-pilot SKUs

The accepted **CJ** **3-SKU** subset (**Slice 21AB** / **21AC** / field spec) already maps to **Kitchen** + **Tech/Office** crossover:

- Beverage & Oil Bottle Handle Holder — **Kitchen & Storage**
- USB Bag Sealer — **Kitchen & Storage** (claim caution)
- Foldable Magnetic Phone Holder & Desktop Tablet Stand — **Office & Desk** / **Tech Accessories**

**EPROLO** does **not** automatically improve fit for these three rows. Any **EPROLO** comparison must use **equivalent or better** candidates found **manually** in the **EPROLO** catalogue — **not** assumed from marketing copy.

---

## 4. Operational fit

| Capability | EPROLO desk signal | Verified for Mzansi? | Comparison to accepted project posture |
|------------|-------------------|----------------------|----------------------------------------|
| **Shopify integration** | Shopify App Store listing **EPROLO‑Dropshipping & Branding**; install/connect framing on public pages | **No** — **unverified** until permission screen capture in a future slice | Same class of risk as **CJ** / **DSers** (**Slice 21Y**) — install **BLOCKED** |
| **Product import flow** | One-click / bulk import language on App Store and site | **No** | Import/sync **BLOCKED**; import drift risk |
| **Order sync / fulfilment** | Auto order sync and fulfilment language | **No** | Requires customer/order data handling review before install |
| **Tracking updates** | Tracking sync to store claimed | **No** | Acceptable **only** with automation off by default + PO controls |
| **Branding options** | Paid branding tiers (labels, hangtags, packing) advertised | **No** | Useful **only** after SKU proof and PO commercial approval; **not** pilot-blocking |
| **Supplier complexity reduction** | **Possible** — single vendor UI vs **CJ** + optional **DSers** + AliExpress mapping | **Unverified** | **CJ** already has **desk proof**, **ZA** calculator subset, **staging**, and **controlled-pilot** rows; **EPROLO** has **no** project evidence yet |

**Operational verdict:** **EPROLO** **may** reduce **tooling fragmentation** in theory, but Mzansi Select **cannot** rely on that claim until a **manual** shortlist proves **South Africa** shipping, landed cost, media quality, and refund path **per SKU**. Until then, operational fit is **not better** than the accepted **CJ** route for the **current** pilot.

---

## 5. South Africa suitability

| Topic | Assessment | Status |
|-------|------------|--------|
| **Shipping options to South Africa** | Public materials market **global** shipping and **South Africa** entrepreneur positioning; product-level methods vary by SKU/warehouse | **Unverified** — must be captured per candidate SKU |
| **Delivery-time claims** | Public pages cite regional bands (e.g. US/UK/EU) and generic long-window guarantees on some help content — **not** Mzansi-specific promises | **Unverified** for **ZA**; treat any fast-delivery marketing as **invalid** for customer copy |
| **Refund/return policy** | Supplier terms must be read per product/route; imported-route caution from **Slice 21AC** still applies | **Unverified** until desk capture per SKU |
| **Landed-cost / margin risk** | Landed-cost model from **Slice 21X** still applies: product + shipping + FX + fees + refund buffer + margin | **Cannot** approve margins without **ZA** shipping quotes |
| **Customs / duties uncertainty** | China/US warehouse sourcing implied on public shipping pages — **DDU/duties** treatment **unknown** | **High caution** — same class of risk that weakened **CJ** in **Slice 11R** historical notes |

**South Africa verdict:** **Not proven** for controlled-pilot or launch reliance. **EPROLO** must be assumed **imported-route** and **long-delivery** until **product-level** **ZA** calculator or equivalent desk proof contradicts that — mirroring **CJ** **Slice 21AB** honesty, **not** replacing local-first **ZA Dropshipping** / **Gadgetgyz** historical lanes.

**Approved delivery honesty (reuse — do not weaken):**

> Imported supplier-route item. Delivery timing varies by supplier, warehouse, product attributes, and courier method. Final delivery estimate must be confirmed before fulfilment.

**Controlled-pilot add-on (reuse):**

> This item is part of a controlled pilot and may have extended imported-supplier delivery timing. Delivery estimate will be confirmed before fulfilment.

---

## 6. Risk and controls

| Risk area | EPROLO desk concern | Required control |
|-----------|--------------------|------------------|
| **App permissions** | Shopify app likely requests product, order, and customer-scoped access (class similar to **Slice 21Y**) | **No** install without PO + permission capture + **Security / Compliance** review |
| **Product import drift** | One-click import can change titles, tags, prices, and publish state | Default **off** automation; manual shortlist only; **no** sync |
| **Product media / claims risk** | Supplier images and titles may overstate compatibility, food safety, or durability | PO media/content-use decision per SKU; conservative copy |
| **Supplier / pricing / delivery claim risk** | Marketing times and prices may not match **ZA** outcomes | Mark **unverified**; confirm before fulfilment wording only |
| **Customer trust risk** | Long import delivery + refund uncertainty damages trust if copy overclaims | Keep **preview-only** / **price-to-confirm** / **non-purchasable** posture |
| **Checkout / payment** | Enabling checkout before proof | **BLOCKED** — unchanged headline gates |

**Community signal (desk only; unverified):** Shopify Community threads report **“no shipping method available”** for some **EPROLO** SKUs — treat as a **watch** item during manual shortlist (**not** proof of universal failure).

---

## 7. Recommended pilot approach (no install)

| Step | Action | Owner |
|------|--------|-------|
| 1 | **No** Shopify app install | **Product Owner** gate |
| 2 | **Manual catalogue review** on public **EPROLO** catalogue (or read-only account if already exists — **no** credential storage in repo) | **Product Manager** |
| 3 | Shortlist **5–10** candidates across **Home & Living**, **Kitchen & Storage**, **Office & Desk**, **Tech Accessories** using **Slice 21X** rules | **Product Manager** |
| 4 | Per SKU capture: **product price**, **shipping cost to South Africa**, **delivery estimate**, **refund notes**, **media quality**, **claim risk** | **Product Manager** |
| 5 | Compare each shortlisted SKU against nearest **CJ** candidate (and **DSers** desk benchmark where useful) | **Product Manager** + **Product Owner** |
| 6 | Decision: reject route, continue watch, or approve a **later** bounded **app-install / read-only Admin planning** slice | **Product Owner** |
| 7 | If install is ever approved: repeat **Slice 21Y**-class permission review for **EPROLO** specifically | **Security / Compliance** |

**Explicit non-goals for 21BX:** **no** Shopify rows, **no** import, **no** publish-for-preview changes, **no** media enablement, **no** checkout/payment, **no** customer access.

---

## 8. EPROLO vs CJdropshipping vs DSers

| Dimension | **EPROLO** (desk; **unverified** product proof) | **CJdropshipping** (accepted project evidence) | **DSers** (accepted secondary route) |
|-----------|-----------------------------------------------|-----------------------------------------------|--------------------------------------|
| **Stack position** | **Additional candidate only** | **First** (**Slice 21X**) | **Second** |
| **Shopify app** | Listed; install **BLOCKED** | Listed; install **BLOCKED** (**Slice 21Y**) | Listed; install **BLOCKED** |
| **Desk proof without install** | **This slice** — planning only | **PASS WITH NOTES** (**Slice 21Z**) | **Not started** as execution route |
| **ZA shipping proof** | **None** in project | **Authenticated subset** (**Slice 21AB**) — **20–60** day band on 3 SKUs | **None** |
| **Controlled-pilot rows** | **None** | **3** staged/preview CJ SKUs + **21AR** publish-for-preview posture | **None** |
| **Catalogue breadth** | Fashion-heavy marketing (**unverified** utility depth) | Broad general goods; 15-SKU desk matrix (**21Z**/**21AA**) | AliExpress-backed breadth; higher timing risk |
| **Complexity** | **Claimed** all-in-one (**unverified**) | Known multi-step desk + calculator | Multi-supplier mapping overhead |
| **Security review** | **Not done** | **Slice 21Y** **PASS WITH NOTES** | **Slice 21Y** **PASS WITH NOTES** |
| **Replace other routes?** | **No** — insufficient proof | **Keep** as primary international proof route | **Keep** as secondary benchmark |

---

## 9. Clear recommendation

| Option | Verdict for **Slice 21BX** |
|--------|---------------------------|
| **Reject** | **No** — premature; desk signals warrant structured manual test |
| **Watch** | **Yes** at **route** level until shortlist complete |
| **Test manually** | **Yes** — **recommended now** (5–10 SKU desk capture **without** install) |
| **Approve bounded app-install planning later** | **Conditional** — **only after** manual shortlist beats or matches **CJ** on **ZA** cost, honesty, and claim risk |

**Primary recommendation:** **Test manually** as an **additional** route. **Retain** **CJdropshipping** as the **active** international proof route for the **controlled pilot**. **Defer** any **EPROLO** app install, **DSers** execution, and **route replacement** decisions until the shortlist comparison is complete.

---

## 10. Product Owner decision options

| Option | Description | When to choose |
|--------|-------------|----------------|
| **A — Reject EPROLO for current pilot** | Stop route exploration after manual review if SKUs fail **ZA** cost/honesty/claim gates | Shortlist shows systematic **no shipping method**, weak margins, or high claim risk |
| **B — Watch only** | Record desk assessment; take **no** manual shortlist yet | Capacity constrained; **CJ** preview/route-honesty work takes priority |
| **C — Approve manual shortlist (recommended)** | Proceed with **§7** steps 2–5 **without** install | Default path — lowest risk way to test consolidation claim |
| **D — Approve bounded app-install planning slice** | Open **docs-only** install/permission plan (**not** execution) | Shortlist **passes** and **Security / Compliance** agrees a **21Y**-parallel review is warranted |
| **E — Elevate EPROLO to preferred / replace CJ** | Change **Slice 21X** stack order | **Not recommended** in **21BX** — would discard accepted **3-SKU** evidence chain without superior per-SKU proof |

**Suggested Product Owner decision now:** **Option C** — approve **manual catalogue review** (**5–10** SKUs) while keeping **CJ** as the **only** approved international **execution** route for the controlled pilot.

---

## 11. What must remain blocked

Unchanged from accepted headline gates and **Slice 21AT** / **Slice 21AY** posture:

- **Customer access** — **BLOCKED**
- **Checkout / payment** — **BLOCKED**
- **Public launch** — **BLOCKED**
- **Customer account flows** — **BLOCKED**
- **`Supplier verified`** — **BLOCKED**
- **Final pricing / delivery promises / product claims** — **BLOCKED**
- **Shopify Admin mutation** — **BLOCKED** (except separately approved bounded slices)
- **App install / import / sync / Shopify authorization** — **BLOCKED**
- **Product visibility / publication widening** — **BLOCKED** unless separately approved
- **Preview theme push / live theme publish** — **BLOCKED**
- **Media enablement** — **BLOCKED**
- **`artifacts/`** commit — **BLOCKED**
- **`zadropshipping/`** commit — **BLOCKED**
- **Secrets, passwords, tokens, cookies, customer data, order data, payment data, supplier credentials, raw auth/session files** in repo — **BLOCKED**

---

## 12. LLD and behaviour

**Unchanged.** This assessment does **not** approve storefront, theme, checkout, payment, customer-access, app-install, import, sync, publication, or supplier-account behaviour.

---

## 13. Recommended next owner

| Priority | Owner | Action |
|----------|-------|--------|
| 1 | **Product Owner** | Accept **Option C** or choose **A** / **B** / **D** / **E** |
| 2 | **Product Manager** | Run **5–10** SKU manual desk capture (**§7**) |
| 3 | **Security / Compliance** | Only if **Option D** is requested — **EPROLO** app-permission review parallel to **Slice 21Y** |
| 4 | **Product Owner** | Continue **restricted-preview** / **route-honesty** acceptance (**Slice 21BU** walkthrough) without supplier-route disruption |

---

## 14. Sources (desk-level only; no secrets)

- Shopify App Store public listing for **EPROLO** (capabilities described in listing copy — **unverified** operationally)
- Public **EPROLO** marketing/help pages (shipping regions, branding tiers — **unverified** per SKU)
- Project canonical docs cited in **§1** (**CJ** / **DSers** / controlled-pilot / security baseline)

**No** supplier credentials, account exports, or private evidence are recorded in this file.
