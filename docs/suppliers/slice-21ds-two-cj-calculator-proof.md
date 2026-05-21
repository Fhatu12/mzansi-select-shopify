# Slice 21DS — two CJ shipping calculator proof (DG-KS-01, DG-OD-01)

**Document type:** Supplier calculator proof (operator-assisted; docs only)  
**Prepared:** 2026-05-20  
**Owner:** Product Manager  
**Slice:** **21DS**  
**Scope:** **DG-KS-01**, **DG-OD-01** only — **no** third **CJ** SKU.

**Read-first:** `docs/project-control.md`; `docs/suppliers/slice-21dk-post-login-supplier-evidence-analysis.md`; `docs/suppliers/slice-21dm-two-existing-cj-staging-hygiene-plan.md`; `docs/security/slice-21dn-two-cj-staging-security-review.md`; `docs/devops/slice-21dp-two-cj-admin-execution.md`; `docs/qa/slice-21dq-two-cj-pdp-validation.md`; `tools/suppliers/run-slice-21dj-operator-assisted-capture.mjs`; `tools/suppliers/run-slice-21ds-two-cj-calculator-proof.mjs`.

**Harness:** `node tools/suppliers/run-slice-21ds-two-cj-calculator-proof.mjs --manual-unlock [--manual-calculator]`

**Evidence (local only; not committed):** `artifacts/suppliers/slice-21ds/<candidate-id>/capture-notes.txt`

**Sanitisation:** **No** passwords, cookies, tokens, HAR, trace, video, storage state, account emails, order/payment data, or private dashboard screenshots in this doc or in committed files.

---

## 1. Executive verdict

**Verdict:** **PASS WITH NOTES** (proof pass **documented**; **economics gate still open**).

| Outcome | Count | IDs |
| --- | --- | --- |
| **Fresh SKU-level ZA calculator proof passed** | **0** | — |
| **proof passed / proof passed with notes** (fresh) | **0** | — |
| **watch** | **0** | — |
| **blocked** | **2** | **DG-KS-01**, **DG-OD-01** |
| **reject** | **0** | — |

**Primary blocker:** **Cloudflare Turnstile** on **CJ** login — operator message **“Turnstile verification failed. Please try again.”** — prevented an authenticated session and **all** per-SKU **South Africa** calculator capture in this pass.

**Secondary notes (earlier harness attempts):** Intermittent **`net::ERR_ABORTED`** on product-detail navigation and browser closure during long login waits; harness updated with multi-URL PDP open, retry, Turnstile detection, and per-product error isolation (**uncommitted** local tool).

**Product Owner decision (recommended):** **Require more supplier proof** — retry **21DS**-class capture after successful **Turnstile** login **or** desk manual calculator entry into local `capture-notes.txt` (**no** secrets in repo). **Do not** treat **21AB** figures as fresh proof. **Keep** both products **restricted preview only** until fresh economics close.

---

## 2. Calculator proof table

| # | Candidate ID | Shopify handle | CJ SKU | Variant | Unit cost | Destination | Ship method | Ship cost | Delivery est. | Landed est. | Currency | Captured at | Calculator / source | Evidence path | Return/refund note | Blocker | Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | **DG-KS-01** | `beverage-bottle-oil-bottle-handle-holder` | **CJYD230000901AZ** | **Blue** | **not captured** | **South Africa** (intent) | **not captured** | **not captured** | **not captured** | **not captured** | **USD** | **2026-05-20** (blocked pass) | **CJ** product logistics / shipping calculator — **not reached** | `artifacts/suppliers/slice-21ds/DG-KS-01/` | **not captured** | **Turnstile** login failure | **blocked** |
| 2 | **DG-OD-01** | `foldable-magnetic-phone-holder-desktop-tablet-stand` | **CJYD245830501AZ** | **Gun Gray** | **not captured** | **South Africa** (intent) | **not captured** | **not captured** | **not captured** | **not captured** | **USD** | **2026-05-20** (blocked pass) | Same | `artifacts/suppliers/slice-21ds/DG-OD-01/` | **not captured** | Login not established | **blocked** |

**Legend:** All economics fields are **unverified** in **21DS** except where noted as **not captured**.

---

## 3. DG-KS-01 result

| Field | Value |
| --- | --- |
| **Candidate ID** | **DG-KS-01** |
| **Shopify handle** | `beverage-bottle-oil-bottle-handle-holder` |
| **CJ SKU** | **CJYD230000901AZ** |
| **Variant** | **Blue** |
| **Recommendation** | **blocked** |
| **Blocker** | **CJ** login **Turnstile** verification failed — no authenticated calculator session |
| **Operator steps** | See §10 — complete Turnstile in headed Chromium, then product-detail → variant **Blue** → **South Africa** → calculate ship/landed |

**21AB planning reference only (stale; unverified for 21DS):** ship **$6.21**, landed **~$7.40**, delivery **20–60 days**, processing **1–3 days** (**90%** orders).

---

## 4. DG-OD-01 result

| Field | Value |
| --- | --- |
| **Candidate ID** | **DG-OD-01** |
| **Shopify handle** | `foldable-magnetic-phone-holder-desktop-tablet-stand` |
| **CJ SKU** | **CJYD245830501AZ** |
| **Variant** | **Gun Gray** |
| **Recommendation** | **blocked** |
| **Blocker** | Same login gate — SKU capture not attempted |
| **Operator steps** | Same as **DG-KS-01** for **CJYD245830501AZ** / **Gun Gray** |

**21AB planning reference only (stale; unverified for 21DS):** ship **$8.65**, landed **~$23.41**, delivery **20–60 days**, processing **1–3 days** (**90%** orders).

---

## 5. Economics and delivery risk

| ID | Fresh **21DS** economics | Delivery risk (fresh) | Margin / pricing note |
| --- | --- | --- | --- |
| **DG-KS-01** | **None captured** | **Unverified** — assume **imported long-band** class until calculator closes | Storefront **R249** (**21DP**) — **not** final; margin vs landed **unverified** |
| **DG-OD-01** | **None captured** | **Unverified** — same | Storefront **R699** — **not** final; **21AB** desk landed **~$23.41** is planning-only |

**Risk:** Approving pilot economics without fresh proof repeats **21DK** posture (PDP safe, supplier maths open).

---

## 6. Whether fresh proof replaces stale **21AB** planning figures

| Question | Answer |
| --- | --- |
| Does **21DS** replace **21AB**? | **No** — **0** fresh calculator rows |
| May **21AB** still inform internal planning? | **Yes**, **only** as **stale planning inheritance** with explicit date risk — **not** proof closure |
| Customer-facing delivery/price claims | **Still blocked** — use field-spec honesty; **no** guaranteed **20–60** window on live copy without fresh proof + PO |

---

## 7. Whether either product can move toward a later pilot/staging decision

| ID | Move forward on **21DS** alone? | Rationale |
| --- | --- | --- |
| **DG-KS-01** | **No** | **blocked** — economics gate open |
| **DG-OD-01** | **No** | **blocked** — economics gate open |

**Allowed without contradicting this slice:** Continue **restricted preview** (**21DQ** **PASS WITH NOTES**); bounded **Admin** hygiene already done (**21DP**); **no** **`Supplier verified`**, **no** checkout, **no** import/sync, **no** publication widening.

**Not allowed on fresh proof:** Limited pilot planning approval based on **21DS** economics; **Supplier verified**; final price/delivery claims.

---

## 8. Remaining blockers

1. **CJ Turnstile** on login when using headed automation browser — operator must pass human verification **before** credentials submit.
2. **Per-SKU South Africa calculator** not run for **Blue** / **Gun Gray** variants.
3. **Fresh unit, ship method, ship cost, delivery band, landed total** — all **not captured**.
4. **21DK** class issue remains: global nav ≠ product logistics calculator.
5. Programme gates unchanged: **`Supplier verified`**, checkout/payment, import/sync, app install, launch approval — **BLOCKED**.

---

## 9. Product Owner decision options

| Option | Description | **21DS** alignment |
| --- | --- | --- |
| **A** | Approve limited pilot **planning** for proof-passed products | **Not supported** — **0** proof-passed |
| **B** | Keep as **restricted preview only** | **Recommended** |
| **C** | Require more supplier proof | **Recommended** — retry after Turnstile success |
| **D** | Continue supplier search | **Optional** if **CJ** login/calculator remains unreliable |

**Recommended:** **B** + **C** — hold preview; schedule **Turnstile-clear** calculator retry or desk manual capture into local notes.

---

## 10. Operator instructions (Turnstile + calculator)

### 10.1 Turnstile login (fix “verification failed”)

1. Use only the **headed Chromium** window from `run-slice-21ds-two-cj-calculator-proof.mjs --manual-unlock`.
2. Open **`https://www.cjdropshipping.com/login.html`**, wait for full load.
3. If **Turnstile** fails: **refresh once**, wait **5–10 s**, complete the **human-check** box **before** entering email/password.
4. Avoid rapid repeat submits; if still failing, wait **2–5 min** and re-run the harness.
5. **Do not** paste credentials into the terminal or commit any session files.

### 10.2 Per-SKU calculator (after login)

For each SKU:

1. Open **product-detail** with SKU query (e.g. `product-detail.html?sku=CJYD230000901AZ`).
2. Select variant (**Blue** / **Gun Gray**).
3. Open **product** shipping / logistics panel (**not** global “Shipping Calculation” menu only).
4. Set destination **South Africa**.
5. Run **Calculate** / **Get shipping fee**.
6. Record in `artifacts/suppliers/slice-21ds/<id>/capture-notes.txt`: unit **USD**, method name, ship **USD**, delivery text, landed if shown.
7. **No** orders, cart checkout, or payment steps.

Re-run harness: `node tools/suppliers/run-slice-21ds-two-cj-calculator-proof.mjs --manual-unlock --manual-calculator`

---

## 11. Strict confirmations

- **No** Shopify Admin mutation, import/sync, app install, product visibility change, checkout/payment/customer-order enablement, order placement, publish, preview theme push, **`Supplier verified`**, or media enablement in this slice.
- **No** committed `artifacts/` or `zadropshipping/`.
- **No** secrets or private dashboard material in committed docs.

---

## 12. Next owner

**Product Owner** — accept **21DS** blocked economics posture; choose **preview hold** vs **Turnstile retry** vs broader supplier search. **Product Manager** may re-run harness after operator confirms login success.

**LLD:** unchanged.
