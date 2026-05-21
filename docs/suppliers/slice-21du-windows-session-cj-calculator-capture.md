# Slice 21DU — Windows-session CJ calculator capture

**Document type:** Supplier calculator capture (Windows CDP session; docs only)  
**Prepared:** 2026-05-21  
**Owner:** Product Manager  
**Slice:** **21DU**  
**Scope:** **DG-KS-01** and **DG-OD-01** only — no third **CJ** SKU.

**Read-first:** `docs/project-control.md`; `docs/suppliers/slice-21ds-two-cj-calculator-proof.md`; `docs/suppliers/slice-21dk-post-login-supplier-evidence-analysis.md`; `tools/suppliers/run-slice-21ds-two-cj-calculator-proof.mjs`; `tools/suppliers/run-slice-21du-windows-cj-session-capture.mjs`.

**Harness:** `node tools/suppliers/run-slice-21du-windows-cj-session-capture.mjs --cdp-url http://127.0.0.1:9222`

**Evidence (local only; not committed):**

- `artifacts/suppliers/slice-21du/DG-KS-01/capture-notes.txt`
- `artifacts/suppliers/slice-21du/DG-OD-01/capture-notes.txt`
- `artifacts/suppliers/slice-21du/slice-21du-run-summary.json`

**Sanitisation:** No passwords, cookies, tokens, storage state, HAR, trace, video, customer/order/payment data, or raw private dashboard material are stored in this doc or in committed files.

---

## 1. Executive verdict

**Verdict:** **PASS WITH NOTES** for the Windows-session automation pass; **live supplier proof remains BLOCKED**.

| Outcome | Count | IDs |
| --- | --- | --- |
| **proof passed** | **0** | — |
| **proof passed with notes** | **0** | — |
| **watch** | **0** | — |
| **blocked** | **2** | **DG-KS-01**, **DG-OD-01** |
| **reject** | **0** | — |

**What passed:** the new **Slice 21DU** harness was created, validated with **`node --check`** and **`--help`**, and wrote the required local evidence files under **`artifacts/suppliers/slice-21du/`**.

**What blocked the live capture:** the requested **CDP** endpoint **`http://127.0.0.1:9222`** was not reachable at **2026-05-21 15:58:52 SAST** (**2026-05-21T13:58:52.601Z**). Because the Windows browser was not exposing a remote-debugging listener, the harness could not attach to the existing **CJ** session, could not confirm login, and could not open either SKU calculator.

**Recommended Product Owner decision:** keep both products **restricted preview only** and require a re-run after the Windows operator relaunches **Chrome** or **Edge** with **`--remote-debugging-port=9222`** on the normal profile.

---

## 2. CDP connection result

| Field | Result |
| --- | --- |
| **Target URL** | `http://127.0.0.1:9222` |
| **Run timestamp** | **2026-05-21 15:58:52 SAST** |
| **Connection result** | **blocked** |
| **Observed error** | `fetch failed` |
| **Windows browser session attached?** | **No** |
| **CJ login detected?** | **No** |

**Harness output:** the runner printed the required Windows **PowerShell** launch commands and then wrote blocked notes for both SKUs.

```powershell
# Google Chrome
Stop-Process -Name chrome -ErrorAction SilentlyContinue
Start-Process -FilePath "$env:ProgramFiles\Google\Chrome\Application\chrome.exe" -ArgumentList "--remote-debugging-port=9222"

# Microsoft Edge
Stop-Process -Name msedge -ErrorAction SilentlyContinue
Start-Process -FilePath "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe" -ArgumentList "--remote-debugging-port=9222"
```

**Important:** do **not** add **`--user-data-dir`**. The objective is to reuse the operator’s normal logged-in Windows browser profile, not a fresh profile.

---

## 3. Calculator proof table

| ID | Shopify handle | CJ SKU | Variant | Unit cost | Ship method | Ship cost | Delivery est. | Landed est. | Currency | Captured at | Recommendation | Blocker |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **DG-KS-01** | `beverage-bottle-oil-bottle-handle-holder` | **CJYD230000901AZ** | **Blue** | **not captured** | **not captured** | **not captured** | **not captured** | **not captured** | **USD** | **2026-05-21 15:58 SAST** | **blocked** | **CDP** endpoint unavailable |
| **DG-OD-01** | `foldable-magnetic-phone-holder-desktop-tablet-stand` | **CJYD245830501AZ** | **Gun Gray** | **not captured** | **not captured** | **not captured** | **not captured** | **not captured** | **USD** | **2026-05-21 15:58 SAST** | **blocked** | **CDP** endpoint unavailable |

---

## 4. DG-KS-01 result

| Field | Value |
| --- | --- |
| **Candidate ID** | **DG-KS-01** |
| **Shopify handle** | `beverage-bottle-oil-bottle-handle-holder` |
| **CJ SKU** | **CJYD230000901AZ** |
| **Variant** | **Blue** |
| **Recommendation** | **blocked** |
| **Reason** | The harness could not attach to the Windows browser via **CDP**, so the logged-in **CJ** session and calculator were never reached |
| **Fresh vs 21AB** | **No fresh comparison available** |

**Stale 21AB reference only:** shipping **$6.21**, landed **~$7.40**, delivery **20–60 days** plus **1–3 days** processing. These remain **planning-only** and were **not** refreshed in **21DU**.

---

## 5. DG-OD-01 result

| Field | Value |
| --- | --- |
| **Candidate ID** | **DG-OD-01** |
| **Shopify handle** | `foldable-magnetic-phone-holder-desktop-tablet-stand` |
| **CJ SKU** | **CJYD245830501AZ** |
| **Variant** | **Gun Gray** |
| **Recommendation** | **blocked** |
| **Reason** | Same **CDP** listener gap; the harness could not attach to the Windows browser session |
| **Fresh vs 21AB** | **No fresh comparison available** |

**Stale 21AB reference only:** shipping **$8.65**, landed **~$23.41**, delivery **20–60 days** plus **1–3 days** processing. These remain **planning-only** and were **not** refreshed in **21DU**.

---

## 6. Comparison against stale 21AB

| ID | 21AB shipping | 21AB landed | 21DU fresh capture | Comparison |
| --- | --- | --- | --- | --- |
| **DG-KS-01** | **$6.21** | **~$7.40** | **not captured** | **21AB remains stale planning only** |
| **DG-OD-01** | **$8.65** | **~$23.41** | **not captured** | **21AB remains stale planning only** |

**Conclusion:** **21DU** did **not** replace **21AB** for either SKU. The project still lacks fresh Windows-session calculator proof for both products.

---

## 7. Evidence files created

| Path | Result |
| --- | --- |
| `artifacts/suppliers/slice-21du/DG-KS-01/capture-notes.txt` | **created** |
| `artifacts/suppliers/slice-21du/DG-OD-01/capture-notes.txt` | **created** |
| `artifacts/suppliers/slice-21du/slice-21du-run-summary.json` | **created** |

These evidence files are local only and remain **gitignored**.

---

## 8. Recommended next operator step

1. Close all **Chrome** or **Edge** windows on Windows.
2. Relaunch one browser with **`--remote-debugging-port=9222`** on the normal profile.
3. Sign in to **CJ** in that Windows browser.
4. Re-run:

```bash
node tools/suppliers/run-slice-21du-windows-cj-session-capture.mjs --cdp-url http://127.0.0.1:9222
```

If the attach succeeds but selectors miss the calculator, the harness already falls back to assisted mode and tells the operator exactly what visible calculator action to complete before scraping the result automatically.

---

## 9. Product Owner decision

| Option | Description | Recommendation |
| --- | --- | --- |
| **A** | Accept **21AB** as stale planning inheritance only | **Acceptable only for planning**, not for proof closure |
| **B** | Keep both products restricted preview only | **Recommended** |
| **C** | Re-run **21DU** after enabling the Windows **CDP** listener | **Recommended** |
| **D** | Approve supplier proof as-is | **Not supported** |

**Recommended decision:** **B + C**. Hold both products in the current restricted-preview posture and re-run the Windows-session capture once the operator exposes **`http://127.0.0.1:9222`** successfully.

---

## 10. Strict confirmations

- No cookies, tokens, passwords, storage state, HAR, trace, video, or raw dashboard material were saved.
- No Shopify Admin mutation, import/sync, app install, product publish, media enablement, or **`Supplier verified`** change occurred.
- No order, checkout, payment, or customer data was touched.
- **`artifacts/`** remains local-only and must not be committed.

## 11. Next owner

**Operator** — relaunch the Windows browser with **`--remote-debugging-port=9222`**, sign in to **CJ**, and re-run **Slice 21DU** for fresh calculator proof.

**LLD:** unchanged.
