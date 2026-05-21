# Slice 21DK — post-login supplier evidence analysis

**Document type:** Post-login capture analysis (docs only)  
**Prepared:** 2026-05-21  
**Owner:** Product Manager  
**Slice:** **21DK**  
**Upstream:** **Slice 21DJ** harness re-run — **`cjLoggedIn: true`**; terminal outcomes **2× watch**, **6× blocked**; evidence **`artifacts/suppliers/slice-21di/`** (local; **not** committed).

**Read-first:** `docs/suppliers/slice-21dj-operator-assisted-supplier-capture.md`; `docs/project-control.md` **`## Slice 21AB`**; `docs/suppliers/slice-21dh-top-8-shipping-landed-cost-proof.md`

**Source files analysed (local only):** `artifacts/suppliers/slice-21di/*/capture-notes.txt`; `artifacts/suppliers/slice-21di/slice-21dj-run-summary.json` — captured **2026-05-21T12:38–12:39Z**.

**Sanitisation:** This doc quotes **field values** and **sanitised excerpts** only. **No** account emails, passwords, cookies, order IDs, or screenshot binaries are reproduced here. Local screenshots under **`artifacts/suppliers/slice-21di/`** remain **gitignored** and are **not** committed.

---

## 1. Executive verdict

**Verdict:** **PASS WITH NOTES** (analysis complete) — **supplier proof posture unchanged**.

| Outcome | Count | IDs |
| --- | --- | --- |
| **Fresh usable proof** (`proof passed` / `proof passed with notes` with **ZA** ship + landed) | **0** | — |
| **watch** | **2** | **DG-KS-01**, **DG-OD-01** |
| **blocked** | **6** | **DG-KS-03**, **DG-TA-01**, **DG-OD-02**, **DG-HL-01**, **DG-OD-03**, **DG-TA-03** |
| **reject** | **0** | — |

**Why no SKU reached `proof passed`:** The **21DJ** harness confirmed **CJ** login and opened the correct **product-detail** URLs for the two priority **CJ** SKUs, but it did **not** complete the **product-level South Africa shipping calculator** workflow. Recorded “shipping method” values are **global navigation labels**, not calculator results. **Price**, **ship cost**, **delivery band**, and **landed total** are **`not captured`** on every row.

**Product Owner decision (recommended):** **Targeted manual CJ calculator capture** for **DG-KS-01** and **DG-OD-01** before treating any row as fresh proof. **Staging-plan discussion** may reference **21AB** figures **only** as **stale planning inheritance** — **not** as **21DJ/21DK** proof closure.

---

## 2. Run summary (from `slice-21dj-run-summary.json`)

| Field | Value |
| --- | --- |
| **Run captured at** | **2026-05-21T12:39:48.941Z** |
| **CJ login detected** | **true** |
| **Screenshots (local)** | **6** (blocked desk rows only; **not** committed) |
| **Harness** | `tools/suppliers/run-slice-21dj-operator-assisted-capture.mjs` |

---

## 3. Per-SKU capture summary

| ID | Product found | Variant found | Price | **ZA** ship | Delivery est. | Landed cost | Harness rec. | Blocker (notes) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **DG-KS-01** | **Yes** (PDP URL) | **Recorded** (Blue) | **No** | **No** | **No** | **No** | **watch** | **ZA** destination not confirmed on page |
| **DG-OD-01** | **Yes** (PDP URL) | **Recorded** (Gun Gray) | **No** | **No** | **No** | **No** | **watch** | **ZA** destination not confirmed on page |
| **DG-KS-03** | **No** | N/A | **No** | **No** | **No** | **No** | **blocked** | Ecomstock store unavailable |
| **DG-TA-01** | **No** | N/A | **No** | **No** | **No** | **No** | **blocked** | Gadgetgyz DNS failure (`NXDOMAIN`) |
| **DG-OD-02** | **No** | N/A | **No** | **No** | **No** | **No** | **blocked** | Gadgetgyz DNS failure |
| **DG-HL-01** | **No** (SKU lock) | **No** | **No** | **No** | **No** | **No** | **blocked** | No **CJ** SKU in warehouse search |
| **DG-OD-03** | **No** (SKU lock) | **No** | **No** | **No** | **No** | **No** | **blocked** | No **CJ** SKU in warehouse search |
| **DG-TA-03** | **No** (SKU lock) | **No** | **No** | **No** | **No** | **No** | **blocked** | No **CJ** SKU in warehouse search |

**Legend:** **Yes** / **No** = whether the capture file contains a usable value for that field, not a commercial approval.

---

## 4. Why **DG-KS-01** and **DG-OD-01** are **watch** (not proof passed)

### 4.1 What the harness did achieve

| Check | **DG-KS-01** | **DG-OD-01** |
| --- | --- | --- |
| **CJ login** | **Yes** (run-level `cjLoggedIn: true`) | **Yes** |
| **Product URL opened** | `…/product-detail.html?sku=CJYD230000901AZ` | `…/product-detail.html?sku=CJYD245830501AZ` |
| **SKU in notes** | **CJYD230000901AZ** | **CJYD245830501AZ** |
| **Variant in notes** | **Blue** | **Gun Gray** |
| **proof_source** | **CJ calculator** (intent; not completed) | Same |

### 4.2 What failed (root cause)

1. **Page body scrape did not contain product economics.**  
   `page_text_excerpt` for both rows is dominated by the **cookie-consent banner** and **global CJ navigation** (Home, Products, **Shipping Calculation** menu item, Wallet, etc.). There is **no** visible product title, unit **USD** price, or per-SKU logistics panel in the excerpt. The harness therefore left **`product_unit_cost: not captured`**.

2. **“Shipping method” is a false positive.**  
   `shipping_method_to_za` = `By CJ | By AliExpress | CJ Prime | Shipping Calculation | From CJ | Shipping Update` matches **top-level site navigation**, not a selected courier/method for **South Africa** on the SKU. This must **not** be read as **ZA** shipping proof.

3. **South Africa destination never confirmed.**  
   Harness logic sets **`watch`** when the page text lacks **South Africa** / **ZA** confirmation after automation clicks. **`blocker_reason`:** `South Africa destination not confirmed on page`. No **`shipping_cost`**, **`delivery_estimate`**, or **`landed_cost_estimate`** were written.

4. **Calculator workflow not completed.**  
   Opening **Shipping Calculation** from the global menu ≠ running the **warehouse product shipping calculator** with **South Africa** + variant **Blue** / **Gun Gray**. **21AB**-class proof required per-SKU calculator output; that step did not occur in automation.

### 4.3 Why this is **watch**, not `proof passed with notes`

| Gate | Required for `proof passed with notes` | **21DJ** post-login state |
| --- | --- | --- |
| Authenticated session | **Yes** | **Yes** |
| Product / variant identified | **Yes** | **Partial** — URL + variant label only |
| **ZA** destination on calculator | **Yes** | **No** |
| Itemised ship cost | **Yes** | **No** |
| Delivery band | **Yes** | **No** |
| Landed cost | **Yes** | **No** |

**Conclusion:** Both rows are correctly **`watch`**: login and PDP routing improved vs pre-login run, but **economics proof gate is still open**.

### 4.4 Staging-plan discussion?

| Question | Answer |
| --- | --- |
| Can **DG-KS-01** / **DG-OD-01** move to **staging-plan** on **21DJ** evidence alone? | **No** — fresh proof incomplete |
| Can they move on **21AB** inheritance only? | **Product Owner call** — **allowed as planning-only** with **stale-date** and **honesty** caveats; **not** fresh proof |
| Recommended next step | **Targeted manual CJ calculator capture** (§8) |

**21AB reference (unverified for 21DK; planning only):**

| ID | Ship (**21AB**) | Landed (**21AB**) | Delivery (**21AB**) |
| --- | --- | --- | --- |
| **DG-KS-01** | **$6.21** | **~$7.40** | **20–60 days** + **1–3** processing |
| **DG-OD-01** | **$8.65** | **~$23.41** | **20–60 days** + **1–3** processing |

---

## 5. Other SKUs (blocked)

### 5.1 Local desk routes

| ID | Finding |
| --- | --- |
| **DG-KS-03** | **Ecomstock** homepage returns **Shopify “store currently unavailable”** — SKU **P5260S** not reachable. |
| **DG-TA-01** | **`www.gadgetgyz.co.za`** — **`DNS_PROBE_FINISHED_NXDOMAIN`** in excerpt. Try alternate host (e.g. **`gadgetgyz.co.za`** without **`www`**) in a follow-up desk pass. |
| **DG-OD-02** | Same **Gadgetgyz** DNS failure. |

### 5.2 **CJ** SKU-lock rows

| ID | Search URL (desk) | Result |
| --- | --- | --- |
| **DG-HL-01** | Warehouse search `drawer divider adjustable 4pcs` | **`supplier_sku: not found`**; excerpt **none** |
| **DG-OD-03** | `desk pen holder rotating` | **`not found`** |
| **DG-TA-03** | `cable management sleeve nylon` | **`not found`** |

Automation did not surface a **CJ** SKU pattern in page text; manual sourcing search still required.

---

## 6. Outcome buckets

### 6.1 Usable fresh proof

**None.**

### 6.2 Watch

| ID | Rationale |
| --- | --- |
| **DG-KS-01** | PDP URL + variant; **no** **ZA** calculator economics |
| **DG-OD-01** | Same |

### 6.3 Blocked

**DG-KS-03**, **DG-TA-01**, **DG-OD-02**, **DG-HL-01**, **DG-OD-03**, **DG-TA-03** — see §5.

### 6.4 Reject

**None.**

---

## 7. Landed-cost / margin notes

No fresh landed costs to score. **21AB** planning bands remain the only **CJ** economics reference for **DG-KS-01** / **DG-OD-01** until manual calculator capture closes the gate.

---

## 8. Delivery-risk notes

Without fresh calculator output, preserve **imported** **20–60 day** honesty from **21AB** for the two **CJ** SKUs only in **planning** copy — **not** customer-facing promises.

---

## 9. Claim / media-risk notes

Unchanged from **21DG** / **21DH**: moderate claim risk on **CJ** kitchen/office rows; media PO still **open**.

---

## 10. Recommended staging-candidate set (after analysis)

| Tier | IDs | Basis |
| --- | --- | --- |
| **Not ready (fresh proof)** | All **8** | No complete **ZA** ship + landed in **21DJ** notes |
| **Planning-only (stale)** | **DG-KS-01**, **DG-OD-01** | **21AB** only — PO may allow **staging-plan** talk |
| **Defer** | **DG-KS-03** … **DG-TA-03** | Blocked suppliers / SKU lock |

---

## 11. Remaining gap toward 5 products per category

Still **0** SKUs with fresh proof-pass economics per category. **Option B** depth (**2** **CJ** SKUs) remains valid only with **21AB** inheritance or after §12 manual capture.

---

## 12. Product Owner decision options

| Option | Description | Recommendation |
| --- | --- | --- |
| **A — Targeted manual CJ calculator capture** | Operator completes **Shipping Calculation** on **`CJYD230000901AZ`** / **`CJYD245830501AZ`** with **South Africa** + **Blue** / **Gun Gray**; updates **`capture-notes.txt`** or new **21DK.1** note file locally | **Recommended** |
| **B — Accept 21AB for staging-plan only** | Allow **staging-plan** discussion for **2** **CJ** rows without fresh proof | **Acceptable with notes** — document **stale** + **no** `Supplier verified` |
| **C — Continue supplier search** | Fix **Gadgetgyz** host / **Ecomstock** path; re-run **CJ** search for **HL-01**, **OD-03**, **TA-03** | Parallel track |
| **D — Reduce launch depth** | Hold at **2** **CJ** planning SKUs; pause other lanes | If bandwidth limited |

**Recommended Product Owner decision:** **A** first, then **B** only if **A** is delayed and PO explicitly accepts **21AB** staleness for **planning** — **not** for launch or **`Supplier verified`**.

### Manual capture checklist (operator)

1. Already logged in to **CJ** (confirmed in **21DJ** re-run).
2. Open each PDP by SKU; confirm **variant** (**Blue** / **Gun Gray**).
3. Open **product-level** shipping calculator (not global menu only).
4. Set country **South Africa**; run calculation.
5. Record in `artifacts/suppliers/slice-21di/DG-KS-01/capture-notes.txt` (and **OD-01**): unit cost, ship method name, ship cost, delivery range, landed total, timestamp — **no** credentials.
6. Set **`recommendation:`** to **`proof passed with notes`** only when all numeric fields are present.

---

## 13. Sensitive data and artifacts

| Check | Result |
| --- | --- |
| Credentials in committed docs | **None** |
| Cookie/token/HAR in repo | **None** committed |
| **`artifacts/suppliers/slice-21di/`** | **Gitignored** — confirmed in validation |
| Screenshots | Local only; **not** committed; **not** embedded in this doc |

---

## Strict confirmations (this slice)

- **Docs-only analysis** — **no** Admin/import/app/publish/checkout/media/**`Supplier verified`**.
- **`artifacts/`** **not** committed.

## Next owner

**Operator (human)** — **Option A** manual **CJ** calculator for **DG-KS-01** and **DG-OD-01**.  
**Product Owner** — approve **A** vs **B** for staging-plan gate.  
**Product Manager** — optional **21DK.1** doc sync after manual notes updated.
