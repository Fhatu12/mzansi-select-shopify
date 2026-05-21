# Slice 21DI — fresh supplier evidence capture (operator-assisted)

**Document type:** Fresh evidence capture pass (docs + local artifacts; **not** committed)  
**Prepared:** 2026-05-20  
**Owner:** Product Manager  
**Slice:** **21DI**  
**Upstream:** **Slice 21DH** (**`c2f6826`**) — **INCONCLUSIVE / PASS WITH NOTES**; **Product Owner Option B** — launch depth **2** **CJ** SKUs now; run **fresh** supplier evidence for top **8**.

**Read-first:** `docs/project-control.md`; `docs/suppliers/slice-21dg-launch-candidate-product-proofing.md`; `docs/suppliers/slice-21dh-top-8-shipping-landed-cost-proof.md`

**Evidence root (local only):** `artifacts/suppliers/slice-21di/<candidate-id>/` — **gitignored** via `artifacts/` in `.gitignore`.

**Unverified rule:** Figures in this doc are **planning / inherited** until a matching file exists under the SKU folder with a **2026** capture date. **Do not** treat inherited **21AB** values as **21DI** fresh proof.

---

## 1. Executive verdict

**Verdict:** **BLOCKED / PREPARED** — capture **scaffold** and **operator runbooks** are ready; **no** fresh SKU-level evidence files were written by this pass because **human-gated** supplier access is required.

| Metric | Count |
| --- | --- |
| **proof passed** (fresh **21DI** file) | **0** |
| **proof passed with notes** (inherited only) | **2** — **DG-KS-01**, **DG-OD-01** (**21AB**; stale) |
| **watch** | **3** — **DG-KS-03**, **DG-TA-01**, **DG-OD-02** |
| **blocked** | **3** — **DG-HL-01**, **DG-OD-03**, **DG-TA-03** |
| **reject** | **0** |

**Stop rule applied:** **CJdropshipping** calculator and **Gadgetgyz**/**Ecomstock** checkout quotes require **manual browser** work. **Do not** automate login or store credentials.

**Next action:** Operator completes **§11** in priority order; Product Manager updates this doc or a follow-on slice when folders contain **`capture-notes.txt`** (+ optional sanitized screenshots).

---

## 2. Fresh evidence table

Priority order per **Product Owner** (**Option B** depth = **2** **CJ** first).

| Pri | ID | Route | SKU / ref | Variant | Unit cost | Ship → **ZA** | Ship cost | Delivery est. | Landed est. | Currency | Captured | Proof source | Evidence path | Blocker | Rec. |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | **DG-KS-01** | **CJ** | **CJYD230000901AZ** | **Color / Blue** | **TBD** fresh | **CJ** calculator | **TBD** | **TBD** | **TBD** | **USD** | **Not captured** | **blocked** (login) | `artifacts/suppliers/slice-21di/DG-KS-01/` | **CJ** sign-in required (**21AA** class) | **blocked** |
| 2 | **DG-OD-01** | **CJ** | **CJYD245830501AZ** | **Color / Gun Gray** | **TBD** | **CJ** calculator | **TBD** | **TBD** | **TBD** | **USD** | **Not captured** | **blocked** (login) | `…/DG-OD-01/` | **CJ** sign-in required | **blocked** |
| 3 | **DG-KS-03** | **Ecomstock** | **P5260S** | Default (**unverified**) | **~R30** desk (**13N**) | Local checkout / quote | **TBD** | **TBD** | **TBD** | **ZAR** | **Not captured** | **blocked** (operator) | `…/DG-KS-03/` | No desk ship quote run | **watch** |
| 4 | **DG-TA-01** | **Gadgetgyz** | **PCB-CT-25150** | Black / 100 pcs | **R20.90** desk (**13O**) | Local checkout / quote | **TBD** | **TBD** | **TBD** | **ZAR** | **Not captured** | **blocked** (operator) | `…/DG-TA-01/` | **21W-B** basket path unreliable; desk price only | **watch** |
| 5 | **DG-OD-02** | **Gadgetgyz** | **DP0402** | Default | **~R158.89** desk (**20F**) | Local checkout / quote | **TBD** | **TBD** | **TBD** | **ZAR** | **Not captured** | **blocked** (operator) | `…/DG-OD-02/` | Ship fee not captured | **watch** |
| 6 | **DG-HL-01** | **CJ** preferred | **TBD** | — | — | — | — | — | — | — | **Not captured** | **blocked** | `…/DG-HL-01/` | **No** **CJ** SKU locked | **blocked** |
| 7 | **DG-OD-03** | **CJ** preferred | **TBD** | — | — | — | — | — | — | — | **Not captured** | **blocked** | `…/DG-OD-03/` | **No** **CJ** SKU locked | **blocked** |
| 8 | **DG-TA-03** | **CJ** preferred | **TBD** | — | — | — | — | — | — | — | **Not captured** | **blocked** | `…/DG-TA-03/` | **No** **CJ** SKU locked | **blocked** |

### Inherited reference (not fresh **21DI** proof)

| ID | Historical source | Desk figures (**unverified** for **21DI**) |
| --- | --- | --- |
| **DG-KS-01** | **21AB** (**2026-05-14**) | Ship **$6.21**; landed **~$7.40**; **20–60** days + **1–3** processing |
| **DG-OD-01** | **21AB** (**2026-05-14**) | Ship **$8.65**; landed **~$23.41**; same delivery band |

Until **`DG-KS-01/capture-notes.txt`** and **`DG-OD-01/capture-notes.txt`** exist, treat rows as **blocked** for **fresh** proof, or **proof passed with notes** only if **Product Owner** explicitly accepts **21AB** inheritance (**Option B** narrow path).

---

## 3. Products with usable proof

### 3.1 Fresh **21DI** proof

**None.**

### 3.2 Usable inherited proof (staging-planning reference only)

| ID | Product | Usable for |
| --- | --- | --- |
| **DG-KS-01** | Bottle handle holder | **Planning** only — **21AB** **ZA** ship band; refresh **required** before **proof passed** |
| **DG-OD-01** | Foldable magnetic stand | Same |

**Not usable as fresh proof:** **DG-KS-03**, **DG-TA-01**, **DG-OD-02** (missing ship); **DG-HL-01**, **DG-OD-03**, **DG-TA-03** (no SKU).

---

## 4. Products still blocked

| ID | Blocker | Operator unblock |
| --- | --- | --- |
| **DG-KS-01** | **CJ** login + calculator | **§11.1** |
| **DG-OD-01** | **CJ** login + calculator | **§11.2** |
| **DG-KS-03** | Local ship quote not run | **§11.3** |
| **DG-TA-01** | Local ship quote not run | **§11.4** |
| **DG-OD-02** | Local ship quote not run | **§11.5** |
| **DG-HL-01** | **CJ** SKU **TBD** | **§11.6** |
| **DG-OD-03** | **CJ** SKU **TBD** | **§11.7** |
| **DG-TA-03** | **CJ** SKU **TBD** | **§11.8** |

---

## 5. Products rejected

**None** in this pass. (**21DG** rejects **DG-HL-05**, **DG-OD-05**, **DG-TA-05** remain out of scope.)

---

## 6. Products that can move to staging-planning later

| ID | Condition for staging-**plan** discussion (**not** execution) |
| --- | --- |
| **DG-KS-01** | Fresh **21DI** capture **or** PO-written acceptance of **21AB** + **Security** claim/media review |
| **DG-OD-01** | Same |
| **DG-TA-01**, **DG-OD-02**, **DG-KS-03** | After **ZAR** landed total with itemised local ship in **`capture-notes.txt`** |
| **DG-HL-01**, **DG-OD-03**, **DG-TA-03** | After **CJ** SKU lock + calculator row in folder |

**Not approved in this slice:** Admin mutation, import/sync, app install, publication, **`Supplier verified`**, media enablement.

---

## 7. Remaining gaps toward 5 products per category

**21DG** target: **20** SKUs (**5** × **4** categories). **Option B** active depth: **2** **CJ** SKUs.

| Category | Proof-ready (fresh) | Watch / blocked in top 8 | Gap to 5 |
| --- | --- | --- | --- |
| **Home & Living** | **0** | **DG-HL-01** blocked | **5** |
| **Kitchen & Storage** | **0** fresh (**DG-KS-01** inherited) | **DG-KS-01** blocked refresh; **DG-KS-03** watch | **4–5** |
| **Office & Desk** | **0** fresh (**DG-OD-01** inherited) | **DG-OD-01** blocked refresh; **DG-OD-02** watch; **DG-OD-03** blocked | **3–5** |
| **Tech Accessories** | **0** | **DG-TA-01** watch; **DG-TA-03** blocked | **4–5** |

**Category-fill strategy:** Prioritise **CJ** SKU lock for **DG-HL-01**, **DG-OD-03**, **DG-TA-03** before expanding **21DG** watch rows (**DG-KS-04/05**, etc.).

---

## 8. Product Owner decision options

| Option | Description |
| --- | --- |
| **A — Accept 21AB inheritance for 2 CJ SKUs** | Proceed to **staging-plan** slice for **DG-KS-01** + **DG-OD-01** without **21DI** refresh (**stale-date risk**) |
| **B — Hold at 2 CJ until fresh capture** | **Recommended.** Operator completes **§11.1–11.2** before any staging-plan approval |
| **C — Expand operator pass to locals** | Run **§11.3–11.5** before adding **Gadgetgyz**/**Ecomstock** to launch depth |
| **D — Pause catalogue work** | Keep **21DF** preview; defer all capture |

---

## 9. Evidence folder layout

```
artifacts/suppliers/slice-21di/
├── README.md
├── DG-KS-01/          # CJ refresh — priority 1
├── DG-OD-01/          # CJ refresh — priority 2
├── DG-KS-03/          # Ecomstock local quote
├── DG-TA-01/          # Gadgetgyz local quote
├── DG-OD-02/          # Gadgetgyz local quote
├── DG-HL-01/          # CJ SKU search + calculator
├── DG-OD-03/          # CJ SKU search + calculator
└── DG-TA-03/          # CJ SKU search + calculator
```

**Required per completed capture:** `capture-notes.txt` using the template in **§10**.

---

## 10. capture-notes.txt template (operator)

```text
slice: 21DI
candidate_id: DG-XX-XX
captured_at: YYYY-MM-DDTHH:MM (local)
supplier_route: CJ | Gadgetgyz | Ecomstock
supplier_sku: 
variant_tested: 
product_unit_cost: 
currency: USD | ZAR
shipping_method_to_za: 
shipping_cost: 
delivery_estimate: 
landed_cost_estimate: 
proof_source: CJ calculator | supplier page | local supplier quote
source_url: (desk URL only; no auth params)
operator_initials: 
notes: (FX buffer, stock signal, claim caution)
```

---

## 11. Operator instructions (human-gated)

### 11.1 Priority 1 — **DG-KS-01** (**CJ** refresh)

**Stop:** Automated capture cannot sign in to **CJ**.

**Operator steps:**

1. Open a **private** browser window. Go to **https://cjdropshipping.com** (or your existing **CJ** desk URL).
2. **Sign in manually** with your own credentials. **Do not** share passwords or export cookies into the repo.
3. Open product **CJYD230000901AZ** (Beverage & Oil Bottle Handle Holder).
4. Select variant **Color: Blue** (must match staged Shopify row).
5. Run the **shipping calculator** with destination **South Africa**. Record **method name**, **shipping cost**, **delivery range**, and **total / landed** if shown.
6. Save **`artifacts/suppliers/slice-21di/DG-KS-01/capture-notes.txt`** per **§10**.
7. Optional: sanitized screenshot **`screenshot-calculator.png`** (crop account email).

**Success criteria:** **ZA** shipping **available** with numeric ship cost → recommendation may move to **proof passed** or **proof passed with notes** (if delivery still **20–60** class).

---

### 11.2 Priority 2 — **DG-OD-01** (**CJ** refresh)

Same as **§11.1**, but:

- SKU **CJYD245830501AZ**
- Variant **Color: Gun Gray**
- Folder **`artifacts/suppliers/slice-21di/DG-OD-01/`**

---

### 11.3 Priority 3 — **DG-KS-03** (**Ecomstock** local)

1. Open **Ecomstock** desk (supplier used in **Slice 13N** for SKU **P5260S**).
2. Locate **Effective Anti-Clogging Bathroom Kitchen Sink Strainer** / SKU **P5260S**.
3. Confirm live **R** price and stock display (note if inconsistent).
4. Proceed to checkout or **shipping quote** step for a **South Africa** address **without** placing a paid order unless PO approves test orders separately.
5. Record **courier name**, **shipping cost**, and **delivery band** in **`capture-notes.txt`**.
6. **Do not** store full delivery address in the repo — use initials or “test ZA metro” only.

**If ship unavailable:** mark **watch** or **reject** in notes; do not mark **proof passed**.

---

### 11.4 Priority 4 — **DG-TA-01** (**Gadgetgyz** local)

1. Open **Gadgetgyz** and search SKU **PCB-CT-25150** (PCBuilder LOCKDOWN 150mm Cable Ties, 100 pcs, Black).
2. Confirm price matches **~R20.90** band (**unverified** until captured).
3. Add **one** unit to cart; proceed to shipping step for **South Africa**.
4. Record shipping cost and delivery estimate. **Note:** **21W-B** could not rely on basket path for pilot SKUs — capture **this exact SKU** only.
5. Save under **`artifacts/suppliers/slice-21di/DG-TA-01/`**.

**Route note:** **Gadgetgyz** remains **closed** for controlled-pilot **execution**; this capture is **benchmark** for launch-candidate economics only.

---

### 11.5 Priority 5 — **DG-OD-02** (**Gadgetgyz** local)

1. Search SKU **DP0402** (Acrylic Tablet & Phone Stand).
2. Confirm visible price (historical **~R158.89**).
3. Cart → **ZA** shipping quote (same discipline as **§11.4**).
4. Save under **`artifacts/suppliers/slice-21di/DG-OD-02/`**.

---

### 11.6 Priority 6 — **DG-HL-01** (**CJ** SKU lock)

1. **CJ** signed-in search: `drawer divider adjustable 4pcs` (low-claim organiser; avoid health/deodoriser classes).
2. Shortlist **3** SKUs; reject fragile, electric, or high-claim listings.
3. Pick one SKU; run **ZA** calculator on that variant.
4. Record **locked CJ SKU** in **`capture-notes.txt`**.
5. If no acceptable SKU or **ZA** ship unavailable → leave **`blocked`** and note reason.

**EPROLO** **BY-03** remains **watch-only** parallel — **do not** install **EPROLO** app.

---

### 11.7 Priority 7 — **DG-OD-03** (**CJ** SKU lock)

1. **CJ** search: `desk pen holder rotating` / `stationery caddy`.
2. Lock SKU; **ZA** calculator capture.
3. Folder **`DG-OD-03/`**.

**EPROLO** **BY-04** is desk parallel only.

---

### 11.8 Priority 8 — **DG-TA-03** (**CJ** SKU lock)

1. **CJ** search: `cable management sleeve nylon` / `cable wrap` (non-powered; avoid USB performance cables).
2. Lock SKU; **ZA** calculator.
3. Folder **`DG-TA-03/`**.

---

## Strict confirmations (this slice)

- **Docs + local artifact scaffold only** — **no** theme/Admin/publish/push/import/app/checkout/media/**`Supplier verified`**.
- **`artifacts/`** and **`zadropshipping/`** **not** committed.
- **No** passwords, tokens, cookies, customer data, order data, payment data, supplier credentials, HAR, trace, or video in repo.

## Next owner

**Operator (human)** — execute **§11.1** then **§11.2** (**Option B** minimum), then **§11.3–11.5** if PO selects **Option C**.  
**Product Owner** — confirm **B** vs **A** after folders populated.  
**Product Manager** — reconcile outcomes into tracker when capture files exist.
