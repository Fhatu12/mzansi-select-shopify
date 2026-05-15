# Slice 21AR — CJ 3-SKU publish-for-preview execution

**Document type:** DevOps execution note  
**Prepared:** 2026-05-15  
**Owner:** DevOps / Platform Engineer  
**Upstream:** **Slice 21AQ** (`f55b9df`); **Product Owner** approved bounded execution only.

## 1. DevOps verdict

**BLOCKED**

## 2. Execution method

- **Phase 1:** Repo/theme safety gate — **PASS** (read-only).
- **Phase 2:** Sanitized pre-change Admin snapshot via **`shopify store execute`** (read-only GraphQL) — **PASS**.
- **Phase 3:** Bounded Admin execution — **BLOCKED** at **Online Store publication** step.
- **Tool:** Shopify CLI **`shopify store execute --store dropshippoc.myshopify.com`** with **`--allow-mutations`** for attempted product updates only.

## 3. Theme / repo preview-safety marker support

**Confirmed PASS** before any intended publish step:

| Control | Theme support |
| --- | --- |
| `preview-only` | **Yes** — `sections/main-product-foundation.liquid`, `snippets/live-product-card.liquid` |
| `price-to-confirm` | **Yes** — placeholder price `Price to be confirmed` |
| `non-purchasable` / purchase UI | **Yes** — PDP add-to-cart disabled globally; collection cards use **View product** only |
| `controlled-pilot` route | **Yes** — `templates/collection.json` + `sections/main-collection-foundation.liquid` render `collection.products` |
| Media suppression | **Yes** — `preview-only` without `image-permission-confirmed` hides catalog media |

Theme does **not** rely on **DRAFT** status alone for price safety; **`preview-only`** + **`price-to-confirm`** are required for non-final price treatment (aligned with **Slice 21AQ** finding and **Product Owner** approved tag set).

## 4. Pre-change snapshot summary

| Item | State |
| --- | --- |
| **Products** | All **3** CJ rows **DRAFT**, **unpublished**, **media count 0** |
| **Tags** | CJ pilot set (`pilot`, `pilot-cj`, `imported-supplier`, …) — **not** yet the approved preview-safety set |
| **Inventory** | **0** qty, **`DENY`** policy on all variants |
| **`availableForSale`** | **true** on all three variants pre-change (note: requires explicit post-publish validation) |
| **`controlled-pilot`** | **3** members via **`products.edges`**; **`productsCount.count` = 3** |
| **Removed handles** | All **`inCollection: false`** |
| **Stored auth scopes** | `read_products`, `write_products` only |

**Evidence (local; not committed):** `artifacts/devops/slice-21ar-cj-publish-for-preview-execution/20260515-131150/`

## 5. Admin changes attempted

1. **`productUpdate`** on **`beverage-bottle-oil-bottle-handle-holder`** — set **`ACTIVE`** + approved tag set — **succeeded** (probe).
2. **`publishablePublish`** to **Online Store** — **BLOCKED** — missing **`write_publications`** scope on stored CLI auth.
3. **No** changes applied to the other two CJ rows.
4. **No** collection membership changes.
5. **No** media uploads.

## 6. Rollback

**Yes — performed.**

After publication blocker confirmed, the probed product was restored to:

- **Status:** **DRAFT**
- **Tags:** pre-change CJ pilot set (`controlled-pilot`, `imported-supplier`, `kitchen-storage`, `manual-review`, `pilot`, `pilot-cj`)

Post-rollback verification: product **DRAFT**; collection membership unchanged at **3** CJ rows.

## 7. Blocker and required human action

**Blocker:** Stored Shopify CLI auth for `dropshippoc.myshopify.com` lacks **`write_publications`** (and **`read_publications`**) required for **`publishablePublish`**.

**Human-only action (do not store credentials in repo):**

Re-authenticate with publication scopes, then rerun **Slice 21AR** or a retry slice:

```bash
shopify store auth --store dropshippoc.myshopify.com --scopes read_products,write_products,read_publications,write_publications
```

## 8. Post-change validation summary

**Not applicable** — execution blocked before publication; rollback restored pre-change posture.

## 9. Preserved gates

Customer access, checkout/payment, public launch, **`Supplier verified`**, final pricing/delivery/claims, media exposure, and app install/import/sync remain **BLOCKED**.

## 10. LLD status

**Unchanged** — no storefront visibility widening occurred; rollback restored pre-execution Admin posture.

## 11. Recommended next owner

**DevOps / Platform Engineer** — after operator re-auth with **`write_publications`**, rerun bounded publish-for-preview execution with the same approved tag set and pre-snapshot discipline.

Then **QA / Test Engineer** for post-execution controlled preview validation.

## 12. Confirmation no out-of-scope action occurred

Confirmed: no successful Online Store publication; no purchasability enablement; no customer-access/checkout/payment/public-launch widening; no media upload; no collection membership change beyond verification; no changes to non-CJ products after rollback (one CJ row briefly probed then restored).
