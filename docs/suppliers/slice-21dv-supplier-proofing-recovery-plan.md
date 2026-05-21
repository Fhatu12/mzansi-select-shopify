# Slice 21DV — supplier-proofing recovery plan after CJ blockage

**Document type:** Supplier-proofing recovery and replacement plan (docs only)  
**Prepared:** 2026-05-21  
**Owner:** Product Manager  
**Slice:** **21DV**

**Read-first:** `docs/project-control.md`; `docs/suppliers/slice-21dg-launch-candidate-product-proofing.md`; `docs/suppliers/slice-21dh-top-8-shipping-landed-cost-proof.md`; `docs/suppliers/slice-21dk-post-login-supplier-evidence-analysis.md`; `docs/suppliers/slice-21dl-current-imported-product-audit.md`; `docs/suppliers/slice-21dm-two-existing-cj-staging-hygiene-plan.md`; `docs/suppliers/slice-21ds-two-cj-calculator-proof.md`; `docs/suppliers/slice-21du-windows-session-cj-calculator-capture.md`.

**Scope:** Recovery planning only. No Shopify Admin mutation, no product import/sync, no supplier app install, no product visibility/publication change, no checkout/payment/customer-order enablement, no publish, no preview theme push, no **`Supplier verified`**, and no media enablement.

**Current-turn evidence note:** after **21DS** / **21DT** / **21DU** blocked automation attempts, the operator manually reached **CJ** in **WSL** and confirmed that **DG-KS-01** / **CJYD230000901AZ** now shows as **product removed**. The **Product Owner** instructed the team to move on and stop fighting the **CJ** calculator path for that SKU.

---

## 1. Executive verdict

**Verdict:** **PASS WITH NOTES** — the supplier-proofing programme needs a controlled recovery, not more **CJ** friction on the removed product.

| Outcome | Count | IDs |
| --- | --- | --- |
| **usable** | **0** | — |
| **watch** | **1** | **DG-OD-01** |
| **blocked** | **6** | **DG-KS-03**, **DG-TA-01**, **DG-OD-02**, **DG-HL-01**, **DG-OD-03**, **DG-TA-03** |
| **rejected / replace** | **1** | **DG-KS-01** |

**Reset for this slice:**

1. **DG-KS-01** is no longer a live proof candidate. The supplier page is removed, so the candidate is **reject / replace**.
2. **DG-OD-01** stays **watch** only. It remains in restricted preview, but it does **not** have fresh calculator proof.
3. The previous top-8 launch-candidate mix is no longer strong enough to support a **CJ-first** recovery. The replacement direction should now be **local supplier / South Africa-first** wherever possible, with **CJ** used only when proof is straightforward and repeatable.

**Recommended Product Owner decision:** approve a **local-first replacement sourcing search** and keep the two existing **CJ**-era rows in their current restricted-preview posture only.

---

## 2. CJ blocker summary

### 2.1 DG-KS-01 outcome

| Field | Result |
| --- | --- |
| **ID** | **DG-KS-01** |
| **Shopify handle** | `beverage-bottle-oil-bottle-handle-holder` |
| **CJ SKU** | **CJYD230000901AZ** |
| **Current supplier outcome** | **product removed** on **CJ** |
| **Recovery status** | **reject / replace** |
| **Allowed posture** | Existing Shopify row may remain untouched until later cleanup; **no** staging, **no** launch, **no** **`Supplier verified`** |

**Decision:** stop spending effort on **CJ** calculator recovery for this SKU. Treat the category slot as open and source a replacement target.

### 2.2 DG-OD-01 outcome

| Field | Result |
| --- | --- |
| **ID** | **DG-OD-01** |
| **Shopify handle** | `foldable-magnetic-phone-holder-desktop-tablet-stand` |
| **CJ SKU** | **CJYD245830501AZ** |
| **Current supplier outcome** | Product still on record, but **no fresh CJ calculator proof** |
| **Recovery status** | **watch** |
| **Allowed posture** | **restricted preview only** unless later proof succeeds |

**Decision:** keep **DG-OD-01** as a narrow watch candidate only. Do not promote it toward launch, staging expansion, or **`Supplier verified`** on current evidence.

---

## 3. Top-8 reassessment after 21DU and manual CJ follow-up

### 3.1 Updated candidate status

| ID | Product | Prior route | Current status | Reason | Existing Shopify row? |
| --- | --- | --- | --- | --- | --- |
| **DG-KS-01** | Beverage & oil bottle handle holder | **CJ** | **reject / replace** | **CJ** product removed; Product Owner said move on | **Yes** |
| **DG-OD-01** | Foldable magnetic phone / tablet stand | **CJ** | **watch** | No fresh **ZA** calculator proof after **21DS** / **21DK** / **21DU** | **Yes** |
| **DG-KS-03** | Sink strainer | **Ecomstock** / local benchmark | **blocked** | Local source and stock signal inconsistent; no current quote proof | **Partial** preview row only |
| **DG-TA-01** | Cable tidies set | **Gadgetgyz** benchmark | **blocked** | Route proof not refreshed; **Gadgetgyz** execution path remains closed for pilot | **Partial** preview row only |
| **DG-OD-02** | Acrylic tablet & phone stand | **Gadgetgyz** benchmark | **blocked** | Existing draft row, but no approved route proof for current pilot | **Yes** |
| **DG-HL-01** | Drawer divider set | **CJ** / **EPROLO** desk fill | **blocked** | No locked supplier SKU; no **ZA** proof | **No** |
| **DG-OD-03** | Desk pen caddy | **CJ** / **EPROLO** desk fill | **blocked** | No locked supplier SKU; no **ZA** proof | **No** |
| **DG-TA-03** | Cable management sleeve | **CJ** | **blocked** | No locked supplier SKU; no **ZA** proof | **No** |

### 3.2 Existing Shopify rows vs new sourcing needs

#### Existing Shopify rows already in Admin

| ID | Handle / row | Current posture |
| --- | --- | --- |
| **DG-KS-01** | `beverage-bottle-oil-bottle-handle-holder` | Existing imported row; now **reject / replace**; leave untouched in this slice |
| **DG-OD-01** | `foldable-magnetic-phone-holder-desktop-tablet-stand` | Existing imported row; **watch** only; restricted preview only |
| **DG-KS-03** | `sink-strainer-stainless-steel` | Preview placeholder row without locked supplier proof |
| **DG-TA-01** | `cable-tidies-set` | Preview placeholder row without locked supplier proof |
| **DG-OD-02** | `acrylic-tablet-phone-stand` | Existing **DRAFT** row; route not approved for current pilot |

#### New sourcing needs or replacement search lanes

| Need | Why |
| --- | --- |
| **Kitchen & Storage replacement for DG-KS-01** | Original **CJ** SKU removed |
| **DG-HL-01** live supplier target | No existing Admin row; no current proof |
| **DG-OD-03** live supplier target | No existing Admin row; no current proof |
| **DG-TA-03** live supplier target | No existing Admin row; no current proof |

**Conclusion:** the recovery plan should not widen store scope. It should reopen sourcing and proofing first, while leaving existing Admin rows untouched.

---

## 4. Replacement strategy

### 4.1 Direction

1. **Local supplier / South Africa-first** where possible.
2. Prefer **small, light, low-claim utility products** with simple fulfilment and low breakage risk.
3. Avoid **baby**, **health**, **beauty treatment**, **fast-charge**, **high-claim**, **fragile**, **regulated**, and **certification-heavy** items.
4. Use **CJ** only when both the product page and **South Africa** shipping proof are easy to reproduce without repeated verification fights.
5. Keep **EPROLO** as **watch-only** until a product-specific **ZA** price and shipping path is easy to capture.
6. Keep **DSers** as **benchmark only**, not an execution route.

### 4.2 Route policy by supplier class

| Route | 21DV policy |
| --- | --- |
| **Local SA supplier** | **Preferred** recovery path |
| **CJ** | **Conditional only** — use only where SKU page is live and **ZA** shipping proof is straightforward |
| **EPROLO** | **Watch-only** |
| **DSers** | **Benchmark only** |
| **Gadgetgyz** | Historical benchmark only; not the primary pilot execution path |

### 4.3 Candidate shape rules

- Low-claim organiser, storage, cable-management, stand, tray, or pouch type products
- Small/light parcel size
- Simple returns profile
- No safety promise, medical promise, charging-performance promise, or compatibility-overclaim requirement
- Clear product identity that can be matched exactly to one supplier reference

---

## 5. Replacement search targets

All items below are **search targets only**. None is an approved product.

### 5.1 Kitchen & Storage

| Search target | Why it fits | Status |
| --- | --- | --- |
| **Sink strainer with exact local SKU and live stock** | Small, low-claim, practical kitchen utility | **search target** |
| **Cutlery drawer organiser tray (non-expandable or simple adjustable)** | Low-fragility storage item; easy sizing description | **search target** |

### 5.2 Office & Desk

| Search target | Why it fits | Status |
| --- | --- | --- |
| **Desk pen / stationery caddy with exact local SKU** | Low-claim, lightweight, broad office utility | **search target** |
| **Acrylic or metal phone / tablet stand with simple fit wording** | Useful desk accessory if sourced locally with simple proof | **search target** |

### 5.3 Home & Living

| Search target | Why it fits | Status |
| --- | --- | --- |
| **Drawer divider set with exact local SKU** | Organiser class already fits the catalogue direction | **search target** |
| **Collapsible fabric storage basket / organiser bin** | Lightweight, low-claim home organiser class | **search target** |

### 5.4 Tech Accessories

| Search target | Why it fits | Status |
| --- | --- | --- |
| **Cable tidies / cable ties set from a local source** | Strong utility, low claim, light parcel | **search target** |
| **Cable management sleeve or zip organiser pouch (non-powered)** | Avoids charging claims while staying in tech-accessories space | **search target** |

**Preferred search order:** start with **Kitchen & Storage** and **Office & Desk** replacements first, because **DG-KS-01** is now lost and **DG-OD-01** is only watch.

---

## 6. Next proof gate

### 6.1 Required sequence

1. **Public desk search first**  
   Lock the exact product type, supplier page, live stock signal, and exact SKU/reference where available.

2. **Local quote / calculator next**  
   Capture product price, **South Africa** shipping cost, delivery estimate, and landed-cost planning note.

3. **Admin staging plan only if proof passes**  
   A product must reach a real proof-passed or proof-passed-with-notes posture before any later Admin planning discussion.

### 6.2 Explicit non-approvals

- No import/sync
- No app install
- No Shopify Admin mutation
- No publication change
- No preview push
- No checkout/payment/customer enablement

---

## 7. Product Owner decision options

| Option | Description | Recommendation |
| --- | --- | --- |
| **A — Approve replacement sourcing search** | Reopen sourcing using the target classes in §5 | **Recommended** |
| **B — Keep two existing CJ rows as preview-only and pause** | Leave **DG-KS-01** and **DG-OD-01** untouched in Admin and do no new sourcing yet | Acceptable if bandwidth is limited |
| **C — Pivot to a local supplier-first launch set** | Rebuild the next shortlist around local **SA** proof first | **Recommended** |
| **D — Reduce launch catalogue size** | Accept a smaller, more defensible pilot catalogue | Reasonable fallback |

**Recommended Product Owner decision:** **A + C**, with **D** available if the team wants a smaller first launch set. Keep **DG-OD-01** preview-only as a watch row; treat **DG-KS-01** as replaced, not pending.

---

## 8. What 21DV changes in programme posture

| Item | 21DV posture |
| --- | --- |
| **DG-KS-01** | **reject / replace** |
| **DG-OD-01** | **watch only** |
| **Top-8 recovery** | No longer **CJ-first** by default |
| **Replacement direction** | **local supplier-first**, low-claim, lightweight items |
| **EPROLO** | **watch-only** |
| **DSers** | **benchmark only** |
| **Admin/write/import/sync/publish** | Still **not approved** |

---

## 9. Strict confirmations

- Docs-only.
- No Shopify Admin mutation.
- No product import/sync.
- No supplier app install.
- No product visibility/publication change.
- No checkout/payment/customer-order enablement.
- No publish.
- No preview theme push.
- No **`Supplier verified`** status.
- No media enablement.
- No committed `artifacts/` or `zadropshipping/`.
- No credentials, cookies, tokens, auth/session files, customer/order/payment data, supplier credentials, or private dashboard material in repo docs.

## 10. Next owner

**Product Owner** — approve the replacement sourcing direction and confirm whether the next slice should be **local supplier-first search** or a narrower **reduced catalogue** decision.

**LLD:** unchanged.
