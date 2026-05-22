# Slice 21FF — keep tech products with commerce-gate tags

**Document type:** Bounded Admin tag correction  
**Prepared:** 2026-05-22  
**Owner:** DevOps / Platform Engineer  
**Slice:** **21FF**  
**Store:** `dropshippoc.myshopify.com`  
**Online Store publication:** `gid://shopify/Publication/169105293495`

**Product Owner correction:** The two tech products below were **intentionally added** and must **remain visible**. Apply missing commerce-gate tags only.

**Upstream:** **Slice 21FE** (`33d359d`) — **15** visible; **2/15** missing gate tags.

**Evidence (local; not committed):** `artifacts/catalogue/slice-21ff/2026-05-22T12-10-34/summary.json`

---

## 1. Executive verdict

**PASS**

| Check | Result |
| --- | --- |
| Both handles resolved unambiguously | **PASS** |
| Online Store visibility preserved | **PASS** — both already visible; no `publishablePublish` required |
| Tags added | **PASS** — `non-purchasable` + `price-to-confirm` on **both** |
| Visible / hidden counts | **15** / **15** |
| Commerce gate on visible set | **15/15 PASS** |
| **21EZ** four removals still hidden | **PASS** |
| Theme push / publish / checkout | **Not** performed |

---

## 2. Pre-check

| Check | Result |
| --- | --- |
| Branch | `master` @ **`33d359d`** |
| `artifacts/` | **gitignored** ✓ |
| `tools/catalogue/` | Untracked — **not** committed ✓ |
| Shopify CLI auth | **PASS** (no secrets logged) |
| Scope limits | **Honoured** ✓ |

---

## 3. Product Owner correction

| Handle | PO intent |
| --- | --- |
| `low-delay-wireless-tws-games-sports-headset` | **Keep visible** on Online Store |
| `vertical-office-mouse-wireless-mouse-vertical-mouse` | **Keep visible** on Online Store |

**21FE finding addressed:** Both were visible but lacked `non-purchasable` and `price-to-confirm`. No hide action taken.

---

## 4. Target verification (before)

| Handle | Title | Online Store | Media | Tags (before) | Price (ZAR, read-only) |
| --- | --- | --- | ---: | --- | --- |
| `low-delay-wireless-tws-games-sports-headset` | Low-delay Wireless TWS Games, Sports Headset | **Visible** | 8 | *(none)* | 398.00 |
| `vertical-office-mouse-wireless-mouse-vertical-mouse` | Vertical Office Mouse Wireless Mouse Vertical Mouse | **Visible** | 6 | *(none)* | 379.00 |

Neither handle was missing or ambiguous.

---

## 5. Bounded Admin actions

| Product | Action | Result |
| --- | --- | --- |
| `low-delay-wireless-tws-games-sports-headset` | `tagsAdd`: `non-purchasable`, `price-to-confirm` | **PASS** (0 userErrors) |
| `vertical-office-mouse-wireless-mouse-vertical-mouse` | `tagsAdd`: `non-purchasable`, `price-to-confirm` | **PASS** (0 userErrors) |

**Not performed:** `publishablePublish` (both already Online Store visible); title, description, price, inventory, variants, vendor, type, SEO, media, metafields, collections, delivery, warranty, stock, supplier claims, hard delete, Supplier verified, theme push, publish, checkout enablement.

**Existing tags preserved:** both products had **no** prior tags; only the two gate tags were added.

---

## 6. Post-write verification

| Metric | Before | After | Expected |
| --- | ---: | ---: | ---: |
| Online Store **visible** | **15** | **15** | **15** |
| Online Store **hidden** (ACTIVE, unpublished) | **15** | **15** | **15** |
| Commerce gate (`non-purchasable` + `price-to-confirm`) | **13/15** | **15/15** | **15/15** |
| Tech products visible | **2/2** | **2/2** | **2/2** |
| **21EZ** four removals leaked to OS | **0** | **0** | **0** |

**Tags after (both products):** `non-purchasable`, `price-to-confirm`.

**15-product visible baseline (authoritative):** unchanged handle list from **21FE**; tech SKUs remain in scope for catalogue-only MVP and **21FD** copy planning.

---

## 7. Rollback

Remove gate tags only (if ever required): Admin `tagsRemove` for `non-purchasable` and `price-to-confirm` on the **two** handles only — separate PO-approved slice.

To hide a product from Online Store: `publishableUnpublish` to publication `169105293495` only — **not** performed in **21FF**.

---

## 8. Remaining blockers

| Blocker | Owner |
| --- | --- |
| Rendered **21FD** QA (password unlock) | **QA** — `artifacts/catalogue/slice-21fe/run-rendered-qa.mjs` |
| **21FC-B** split-theme on some live routes | **Product Owner** — **21FC-C** (paused) |
| **21FD** Admin copy updates | **Product Owner** — after rendered QA **PASS** |

---

## 9. Recommended next owner

1. **QA / Test Engineer** — run rendered product-experience harness with storefront password.
2. **Product Owner** — approve **21FD** copy rows for **15** visible products (including tech SKUs).

---

## 10. Commands executed

```bash
git status --short --branch
git check-ignore -v artifacts/
node artifacts/catalogue/slice-21ff/run-tech-commerce-tags.mjs
node artifacts/catalogue/slice-21ff/run-tech-commerce-tags.mjs --fix
```

---

## 11. Safety

No passwords, cookies, tokens, customer/order/payment data, supplier credentials, or raw sensitive Admin payloads are stored in this document.
