# Slice 21DJ — operator-assisted automated supplier evidence capture

**Document type:** Automated capture pass with manual login gate (docs + local artifacts)  
**Prepared:** 2026-05-21  
**Owner:** Product Manager  
**Slice:** **21DJ**  
**Upstream:** **Slice 21DI** (**`0a4b1c1`**) — folders/runbooks prepared; **Product Owner Option B** — fresh evidence for top **8**.

**Harness:** `tools/suppliers/run-slice-21dj-operator-assisted-capture.mjs`  
**Evidence root (local; gitignored):** `artifacts/suppliers/slice-21di/<candidate-id>/capture-notes.txt`  
**Run summary (local):** `artifacts/suppliers/slice-21di/slice-21dj-run-summary.json`

**Unverified rule:** Figures in **`capture-notes.txt`** are **fresh automation outputs** only when **`recommendation`** is **`proof passed`** or **`proof passed with notes`** with numeric ship/landed fields. Inherited **21AB** desk figures remain **unverified** for **21DJ** until replaced by a successful harness run.

---

## 1. Executive verdict

**Verdict:** **BLOCKED / INCONCLUSIVE** — automation **ran** and wrote **`capture-notes.txt`** for all **8** SKUs, but **no** SKU reached **`proof passed`** or **`proof passed with notes`** with complete **ZA** shipping and landed-cost fields.

| Metric | Count |
| --- | --- |
| **proof passed** | **0** |
| **proof passed with notes** (fresh) | **0** |
| **watch** | **0** |
| **blocked** | **8** |
| **reject** | **0** |

**Primary blockers:**

1. **CJ (5 rows):** Operator did **not** complete **CJ** manual sign-in within the automation wait window in this environment (**`cjLoggedIn: false`** in run summary).
2. **Gadgetgyz (2 rows):** Public search pages did **not** resolve product text in automated session (**empty** or blocked render).
3. **Ecomstock (1 row):** Storefront returned **Shopify “store currently unavailable”** — SKU **P5260S** not reachable on public desk.

**Planning reference only (not fresh 21DJ proof):** **DG-KS-01**, **DG-OD-01** — **21AB** (**2026-05-14**) — ship **$6.21** / **$8.65**; landed **~$7.40** / **~$23.41**.

---

## 2. Capture status per SKU

| Pri | ID | Route | SKU | Variant | Captured | Proof source | Recommendation | Blocker |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | **DG-KS-01** | **CJ** | **CJYD230000901AZ** | Blue | **2026-05-21** | **blocked** | **blocked** | CJ login not completed |
| 2 | **DG-OD-01** | **CJ** | **CJYD245830501AZ** | Gun Gray | **2026-05-21** | **blocked** | **blocked** | CJ login not completed |
| 3 | **DG-KS-03** | **Ecomstock** | **P5260S** | default | **2026-05-21** | **blocked** | **blocked** | Ecomstock store unavailable |
| 4 | **DG-TA-01** | **Gadgetgyz** | **PCB-CT-25150** | Black / 100 pcs | **2026-05-21** | **blocked** | **blocked** | Product search not resolved |
| 5 | **DG-OD-02** | **Gadgetgyz** | **DP0402** | default | **2026-05-21** | **blocked** | **blocked** | Product search not resolved |
| 6 | **DG-HL-01** | **CJ** | **TBD** | — | **2026-05-21** | **blocked** | **blocked** | CJ login not completed |
| 7 | **DG-OD-03** | **CJ** | **TBD** | — | **2026-05-21** | **blocked** | **blocked** | CJ login not completed |
| 8 | **DG-TA-03** | **CJ** | **TBD** | — | **2026-05-21** | **blocked** | **blocked** | CJ login not completed |

**Evidence files:** Each row has `artifacts/suppliers/slice-21di/<ID>/capture-notes.txt` (automation stamp **`slice: 21DJ`**). **No** screenshots saved (**--no-screenshots**; desk pages unsuitable).

---

## 3. Products with fresh usable proof

**None.**

**Inherited usable for staging-planning discussion only (stale):**

| ID | Product | Reference |
| --- | --- | --- |
| **DG-KS-01** | Bottle handle holder | **21AB** — **$6.21** ship, **~$7.40** landed |
| **DG-OD-01** | Foldable magnetic stand | **21AB** — **$8.65** ship, **~$23.41** landed |

---

## 4. Products still blocked

All **8** SKUs — see §2. Re-run harness after clearing blockers (§12).

---

## 5. Products rejected

**None** in this pass.

---

## 6. Landed-cost / margin notes

| ID | Fresh landed capture | Planning note |
| --- | --- | --- |
| **DG-KS-01** | **Not captured** | **21AB** **~$7.40** USD vs **R249** staged — moderate **if** **FX** stable |
| **DG-OD-01** | **Not captured** | **21AB** **~$23.41** USD vs **R599–R699** — tight at **R699** |
| **DG-KS-03** | **Not captured** | Desk **~R30** product-only margin **misleading** until ship quoted |
| **DG-TA-01** | **Not captured** | Desk **R20.90** — strong **if** local ship **≤R30** |
| **DG-OD-02** | **Not captured** | Desk **~R159** + ship TBD |
| **DG-HL-01**, **DG-OD-03**, **DG-TA-03** | **Not captured** | SKU lock + calculator required |

---

## 7. Delivery-risk notes

| Route | Posture |
| --- | --- |
| **CJ** | **20–60 days** imported band per **21AB** when refreshed — **no** fast/local implication |
| **Gadgetgyz** / **Ecomstock** | **Unverified** — automation did **not** capture delivery bands |

---

## 8. Claim / media-risk notes

Unchanged from **21DG** / **21DH**: **DG-KS-01** / **DG-OD-01** moderate claim risk; media PO **open** on **CJ** rows; local rows low claim risk when eventually captured.

---

## 9. Recommended staging-candidate set

| Tier | IDs | Condition |
| --- | --- | --- |
| **Planning only (inherited)** | **DG-KS-01**, **DG-OD-01** | **21AB** acceptance + **Security** review — **not** fresh **21DJ** |
| **After successful re-run** | Same **2** | **`proof passed with notes`** or **`proof passed`** in **`capture-notes.txt`** |
| **After local proof** | **DG-KS-03**, **DG-TA-01**, **DG-OD-02** | Itemised **ZAR** ship in notes |
| **Defer** | **DG-HL-01**, **DG-OD-03**, **DG-TA-03** | **CJ** SKU lock + calculator |

**Not approved:** Admin staging execution, import/sync, app install, **`Supplier verified`**, publish, checkout.

---

## 10. Remaining gap toward 5 products per category

| Category | Fresh proof-ready | Gap to 5 |
| --- | --- | --- |
| **Home & Living** | **0** | **5** |
| **Kitchen & Storage** | **0** | **5** |
| **Office & Desk** | **0** | **5** |
| **Tech Accessories** | **0** | **5** |

**Option B** active depth remains **2** **CJ** SKUs on **21AB** inheritance only until **21DJ** re-run succeeds.

---

## 11. Product Owner decision options

| Option | Description |
| --- | --- |
| **A — Operator re-run harness (recommended)** | Complete **§12** on a machine with display; sign in to **CJ** when prompted; re-check **Gadgetgyz** / **Ecomstock** manually if automation still fails |
| **B — Accept 21AB for 2 CJ SKUs** | Proceed to staging-**plan** without fresh **21DJ** files (**stale-date risk**) |
| **C — Pause catalogue work** | Preserve **21DF** preview |
| **D — Replace Ecomstock row** | If **P5260S** path stays dead, swap **DG-KS-03** supplier |

---

## 12. Operator re-run commands (executed in this slice)

**Full capture (headed; CJ login required):**

```bash
cd /home/fhatu/dev/mzansi-select-shopify
node --check tools/suppliers/run-slice-21dj-operator-assisted-capture.mjs
node tools/suppliers/run-slice-21dj-operator-assisted-capture.mjs --manual-unlock
```

**Desk-only probe (headless; no CJ login):**

```bash
node tools/suppliers/run-slice-21dj-operator-assisted-capture.mjs --desk-public-only --no-screenshots
```

**Single SKU:**

```bash
node tools/suppliers/run-slice-21dj-operator-assisted-capture.mjs --manual-unlock --only DG-KS-01
```

**Optional longer login wait (default 15 min):**

```bash
SLICE_21DJ_LOGIN_WAIT_MS=900000 node tools/suppliers/run-slice-21dj-operator-assisted-capture.mjs --manual-unlock
```

**Operator steps when Chromium opens:**

1. **CJ:** Sign in at `https://www.cjdropshipping.com/login.html` — wait until the script prints **`CJ login detected.`**
2. Let the script process each SKU (variant select + **South Africa** calculator where implemented).
3. **Gadgetgyz / Ecomstock:** If automation still returns **blocked**, complete shipping quote manually and edit **`capture-notes.txt`** per **21DI** §10 template (**no** credentials in file).

**Harness safety:** **No** `storageState`, trace, video, or HAR; **no** committed **`artifacts/`**; screenshots skipped when page may contain account/checkout signals.

**Commands executed (this slice):**

| Command | Outcome |
| --- | --- |
| `node --check tools/suppliers/run-slice-21dj-operator-assisted-capture.mjs` | **PASS** |
| `… --desk-public-only --no-screenshots` | **3** desk rows **blocked** |
| `SLICE_21DJ_LOGIN_WAIT_MS=8000 … --only DG-KS-01` | **blocked** (login timeout) |
| `SLICE_21DJ_LOGIN_WAIT_MS=5000 … --manual-unlock` | **8** **`capture-notes.txt`** files; **0** proof passed |

---

## Strict confirmations (this slice)

- **No** Shopify Admin mutation, import/sync, app install, publish, theme push, checkout/payment, **`Supplier verified`**, or media enablement.
- **`artifacts/`** / **`zadropshipping/`** **not** committed.
- **No** passwords, cookies, tokens, HAR, trace, video, auth/session exports, or customer/order/payment data in repo or committed files.

## Next owner

**Operator (human)** — re-run **§12** full **`--manual-unlock`** pass with real **CJ** login, then **Product Owner** chooses **A** vs **B**.
