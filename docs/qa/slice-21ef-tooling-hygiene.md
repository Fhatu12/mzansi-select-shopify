# Slice 21EF — tooling hygiene after four-product local PDP validation

**Document type:** Tooling hygiene note (docs + selective commit)  
**Prepared:** 2026-05-21  
**Owner:** QA / Test Engineer  
**Slice:** **21EF**

**Upstream:** **Slice 21EE** (`9b859e9`, **PASS**) — four local-first preview PDPs accepted in restricted preview.

**Trigger:** Untracked tools left after **21EC** / **21EE** / **21EB** execution:

| Path | Origin |
| --- | --- |
| `tools/devops/run-slice-21eb-four-local-admin-execution.mjs` | **21EB** Admin execution helper |
| `tools/qa/run-slice-21ec-four-local-pdp-validation.mjs` | **21EC** four-product rendered QA |
| `tools/qa/run-slice-21ee-dw-hl-02-pdp-validation.mjs` | **21EE** **DW-HL-02** revalidation |

---

## 1. Executive decision

**PASS** — commit **two** read-only QA harnesses; **delete** the **21EB** Admin mutation runner. **No** `artifacts/` committed.

---

## 2. Per-tool decisions

| Tool | Decision | Rationale |
| --- | --- | --- |
| `tools/qa/run-slice-21ec-four-local-pdp-validation.mjs` | **Commit** | Read-only Playwright validation; **`--manual-unlock`** required; writes only under `artifacts/qa/slice-21ec-*`; no credentials/HAR/trace/video; mirrors committed **`run-slice-21dq-two-cj-pdp-validation.mjs`** (**21DR**) |
| `tools/qa/run-slice-21ee-dw-hl-02-pdp-validation.mjs` | **Commit** | Read-only; focused **DW-HL-02** + optional local regression; same safety posture as **21EC**; reusable after publication fixes |
| `tools/devops/run-slice-21eb-four-local-admin-execution.mjs` | **Delete** | **One-off** Shopify Admin **mutation** runner (`productCreate`, `productUpdate`, `publishablePublish`, collection adds); execution complete and documented in **`docs/devops/slice-21eb-four-local-admin-execution.md`**; risk of accidental re-run outweighs reuse — prefer explicit PO-scoped execution slices over committed bulk mutators |

---

## 3. Safety review summary

### 3.1 Committed QA harnesses

| Control | **21EC** | **21EE** |
| --- | --- | --- |
| Shopify Admin writes | **No** | **No** |
| Theme push | **No** | **No** |
| Password storage | **No** | **No** |
| HAR / trace / video / `storageState` | **No** | **No** |
| Evidence path | `artifacts/qa/slice-21ec-*` | `artifacts/qa/slice-21ee-*` |
| Required flag | `--manual-unlock` | `--manual-unlock` |

### 3.2 Deleted Admin runner (**21EB**)

| Risk | Present? |
| --- | --- |
| `shopify store execute --allow-mutations` | **Yes** — bulk product create/update |
| Hardcoded publication GID / product copy | **Yes** |
| Re-run could duplicate or drift catalogue | **Yes** |
| Sanitised for repo reuse | **No** — execution record is the source of truth |

**Evidence for deleted runner:** local **`artifacts/devops/slice-21eb-*`** remains gitignored if present on disk.

---

## 4. Validation performed

| Check | Result |
| --- | --- |
| `node --check tools/qa/run-slice-21ec-four-local-pdp-validation.mjs` | **PASS** |
| `node --check tools/qa/run-slice-21ee-dw-hl-02-pdp-validation.mjs` | **PASS** |
| `tools/devops/` inspection | **Deleted** — no remaining committed DevOps one-off |
| `git check-ignore artifacts/` | **PASS** — still ignored |
| Secrets scan on committed harness paths | **PASS** — no credential literals |

---

## 5. Usage (committed harnesses)

```bash
# Four local-first PDPs (21EC class)
node tools/qa/run-slice-21ec-four-local-pdp-validation.mjs --manual-unlock

# DW-HL-02 revalidation + optional regression (21EE class)
node tools/qa/run-slice-21ee-dw-hl-02-pdp-validation.mjs --manual-unlock
```

**Requires:** Playwright + Chromium; manual storefront unlock in headed browser only.

---

## 6. Strict confirmations

- **No** `artifacts/` committed.
- **No** credentials, tokens, cookies, customer/order/payment data, or supplier credentials in committed tooling.
- **No** Admin mutation tooling retained in repo after this slice.

---

## Next owner

**Product Owner** — accept **21EE** / four-product preview starter posture; programme backlog beyond tooling hygiene.
