# Slice 21AR — CJ 3-SKU publish-for-preview execution

**Document type:** DevOps execution note  
**Prepared:** 2026-05-15  
**Owner:** DevOps / Platform Engineer  
**Upstream:** **Slice 21AQ** (`f55b9df`); **Product Owner** approved bounded execution only.

## 1. DevOps verdict

**BLOCKED**

Publication scopes are now sufficient, and bounded Admin mutations succeeded through **Online Store** publication for all three CJ rows. Execution was **rolled back** because post-mutation validation failed the required **`availableForSale: false`** contract: all three variants remained **`availableForSale: true`** while **`inventoryItem.tracked`** remained **`false`**. Enabling inventory tracking requires **`write_inventory`**, which is **not** present on stored CLI auth.

## 2. Execution method

- **Phase 1:** Repo/theme safety gate — **PASS** (read-only; unchanged from first attempt).
- **Phase 2:** Sanitized pre-change Admin snapshot via **`shopify store execute`** — **PASS** (`20260515-132109-retry/`).
- **Phase 3:** Bounded Admin execution — **partial success then rollback**.
- **Tool:** Shopify CLI **`shopify store execute --store dropshippoc.myshopify.com`** with **`--allow-mutations`**.

## 3. Publication-scope / auth verification

**PASS** on retry (no re-auth run; operator had already re-authenticated):

| Scope | Present |
| --- | --- |
| `read_products` | Yes |
| `write_products` | Yes |
| `read_publications` | Yes |
| `write_publications` | Yes |
| `write_inventory` | **No** — required for `inventoryItemUpdate` / tracked inventory |

**Online Store publication ID:** `gid://shopify/Publication/169105293495`

**Read-only publication query:** succeeded.

## 4. Theme / repo preview-safety marker support

**Confirmed PASS** before mutation:

| Control | Theme support |
| --- | --- |
| `preview-only` | **Yes** — `sections/main-product-foundation.liquid`, `snippets/live-product-card.liquid` |
| `price-to-confirm` | **Yes** — placeholder price `Price to be confirmed` |
| `non-purchasable` / purchase UI | **Yes** — PDP add-to-cart disabled globally; collection cards use **View product** only |
| `controlled-pilot` route | **Yes** — collection template renders `collection.products` |
| Media suppression | **Yes** — `preview-only` without `image-permission-confirmed` hides catalog media |

Theme does **not** rely on **DRAFT** status alone for price safety; **`preview-only`** + **`price-to-confirm`** are required (aligned with **Slice 21AQ**).

## 5. Pre-change snapshot summary (retry)

| Item | State |
| --- | --- |
| **Products** | All **3** CJ rows **DRAFT**, **unpublished**, **media count 0** |
| **Tags** | CJ pilot set (`pilot`, `pilot-cj`, `imported-supplier`, …) — not yet approved preview-safety set |
| **Inventory** | **0** qty, **`DENY`** policy; **`inventoryItem.tracked: false`** |
| **`availableForSale`** | **true** pre-change (known; must be validated **false** post-mutation) |
| **`controlled-pilot`** | **3** members; **`productsCount.count` = 3** |
| **Removed Gadgetgyz handles** | All **`inCollection: false`** |

**Evidence (local; not committed):** `artifacts/devops/slice-21ar-cj-publish-for-preview-execution/20260515-132109-retry/`

## 6. Admin changes attempted (retry)

For each of the three CJ rows:

1. **`productUpdate`** — **`ACTIVE`** + approved tag set (`controlled-pilot`, `preview-only`, `price-to-confirm`, `cj-imported-supplier`, `non-purchasable`, plus category/claim tags) — **succeeded**.
2. **`productVariantsBulkUpdate`** — **`inventoryPolicy: DENY`**, qty **0** — **succeeded**; **`availableForSale`** still **true**.
3. **`publishablePublish`** to **Online Store** — **succeeded** for all three.
4. **`inventoryItemUpdate`** (`tracked: true`) — **BLOCKED** — missing **`write_inventory`**.
5. **No** collection membership changes; **no** media uploads.

Brief intermediate state: all three rows were **ACTIVE**, published to **Online Store**, with approved preview tags, then restored.

## 7. Post-change validation summary

| Check | Result |
| --- | --- |
| Approved tag set on all three | **PASS** (during execution window) |
| **ACTIVE** + **Online Store** published | **PASS** (during execution window) |
| Media count **0** | **PASS** |
| **`controlled-pilot`** exactly **3** CJ rows | **PASS** |
| Gadgetgyz-era handles absent | **PASS** |
| **`availableForSale: false`** | **FAIL** — all three remained **true** (`tracked: false`) |
| Theme non-purchasable UI | **Not re-tested on live published PDP** — execution rolled back before QA handoff |

Validation failure triggered immediate rollback per slice rules.

## 8. Rollback

**Yes — performed** for all three CJ rows.

| Restore target | Result |
| --- | --- |
| **`publishableUnpublish`** from **Online Store** | **PASS** |
| **Status** **DRAFT** | **PASS** |
| Pre-change tag sets | **PASS** |
| **`inventoryPolicy` DENY**, qty **0** | **PASS** (unchanged) |
| Media **0** | **PASS** |
| **`controlled-pilot`** membership | **PASS** — still exactly **3** CJ rows |

Post-rollback: all three **DRAFT**, **unpublished**, pre-change tags restored; Gadgetgyz handles remain **`inCollection: false`**.

## 9. Blocker and required human action

**Blocker:** Stored Shopify CLI auth lacks **`write_inventory`** (and likely **`read_inventory`**) required to set **`inventoryItem.tracked: true`**, which is needed for **`availableForSale: false`** when qty is **0** and policy is **DENY**.

**Human-only action (do not store credentials in repo):**

Re-authenticate with inventory scopes, then rerun bounded publish-for-preview execution:

```bash
shopify store auth --store dropshippoc.myshopify.com --scopes read_products,write_products,read_publications,write_publications,read_inventory,write_inventory
```

**Do not** run `shopify store auth` again unless auth fails on the next attempt.

## 10. First attempt (20260515-131150) — historical

First attempt blocked on missing **`write_publications`** before publication could succeed for all three rows. One product was probed then rolled back. Documented in commit **`e8005d0`**.

## 11. Preserved gates

Customer access, checkout/payment, public launch, **`Supplier verified`**, final pricing/delivery/claims, media exposure, and app install/import/sync remain **BLOCKED**.

## 12. LLD status

**Unchanged** — rollback restored pre-execution Admin posture; no durable storefront visibility widening.

## 13. Recommended next owner

**DevOps / Platform Engineer** — after operator re-auth with **`write_inventory`**, rerun bounded publish-for-preview with the same approved tag set, pre-snapshot discipline, and **`availableForSale`** validation.

Then **QA / Test Engineer** for post-execution controlled preview validation (password-gated storefront, collection/PDP routes).

## 14. Confirmation no out-of-scope action occurred

Confirmed after rollback: no durable Online Store publication; no collection membership change; no media upload; no checkout/payment/customer-access/public-launch widening; no changes outside the three CJ rows beyond the rolled-back execution window.
