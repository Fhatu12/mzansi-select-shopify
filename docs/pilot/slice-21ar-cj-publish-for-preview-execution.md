# Slice 21AR — CJ 3-SKU publish-for-preview execution

**Document type:** DevOps execution note
**Prepared:** 2026-05-15
**Owner:** DevOps / Platform Engineer
**Upstream:** **Slice 21AQ** (`f55b9df`); **Product Owner** approved bounded execution only.

## 1. DevOps verdict

**PASS**

The bounded CJ publish-for-preview execution completed successfully after inventory-scope re-auth. All three approved CJ rows are now **ACTIVE**, published to **Online Store**, carry the approved preview-safety marker set, remain inside the exact **`controlled-pilot`** 3-row boundary, and validate **`availableForSale: false`** with **`inventoryItem.tracked: true`**, **`inventoryPolicy: DENY`**, and available quantity **0**. Storefront routes remain password-gated.

## 2. Execution method used

- **Phase 1:** Read-only scope/publication/collection verification via **`shopify store execute`**.
- **Phase 2:** Theme/repo preview-safety support confirmation.
- **Phase 3:** Sanitized pre-change snapshot capture.
- **Phase 4:** Bounded Admin mutations for the exact three CJ rows only.
- **Phase 5:** Post-change validation of Admin state, collection containment, sellability, and restricted storefront posture.
- **Tool:** Shopify CLI **`shopify store execute --store dropshippoc.myshopify.com`**; write operations used **`--allow-mutations`**.

## 3. Inventory/publication-scope auth verification

**PASS**

Verified through read-only query:

| Scope | Present |
| --- | --- |
| `read_products` | Yes |
| `write_products` | Yes |
| `read_publications` | Yes |
| `write_publications` | Yes |
| `read_inventory` | Yes |
| `write_inventory` | Yes |

**Online Store publication ID:** `gid://shopify/Publication/169105293495`

## 4. Theme/repo preview-safety marker support

**PASS**

| Control | Result |
| --- | --- |
| `preview-only` marker | Supported in PDP/card templates |
| `price-to-confirm` marker | Supported; placeholder price renders instead of live price |
| `non-purchasable` UI posture | Supported; PDP add button disabled, cart checkout disabled |
| `controlled-pilot` route | Supported by collection rendering |
| Media suppression | Supported when `preview-only` is present without `image-permission-confirmed` |

Theme safety remains driven by tags and disabled controls, not by `DRAFT` status alone.

## 5. Pre-change snapshot summary

Snapshot path:

`artifacts/devops/slice-21ar-cj-publish-for-preview-execution/20260515-133230/`

Pre-change state confirmed:

| Check | Result |
| --- | --- |
| All 3 CJ rows `DRAFT` | Yes |
| All 3 unpublished on Online Store | Yes |
| Media count `0` for all 3 | Yes |
| `controlled-pilot` contains exactly 3 CJ rows | Yes |
| Removed Gadgetgyz-era rows absent from collection | Yes |
| `inventoryPolicy: DENY` | Yes |
| Inventory quantity `0` | Yes |
| `inventoryItem.tracked: false` | Yes |
| `availableForSale: true` pre-change | Yes |

## 6. Admin changes made

Only the three approved CJ rows were touched:

1. Updated tags to the approved preview-safety set only:
   - `controlled-pilot`
   - `preview-only`
   - `price-to-confirm`
   - `cj-imported-supplier`
   - `non-purchasable`
2. Set **`inventoryItem.tracked: true`** on all three variants.
3. Reconfirmed zero available inventory and `DENY` posture through post-mutation validation.
4. Set all three products to **`ACTIVE`**.
5. Published all three to **Online Store**.

No collection membership changes, no media uploads, and no product outside the 3-row boundary was touched.

## 7. Post-change validation summary

**PASS**

| Check | Result |
| --- | --- |
| Product status `ACTIVE` | PASS |
| Published on Online Store | PASS |
| Approved tag set present | PASS |
| Media count `0` | PASS |
| `controlled-pilot` still exactly 3 CJ rows | PASS |
| Gadgetgyz-era rows still absent | PASS |
| `inventoryItem.tracked: true` | PASS |
| Inventory quantity `0` | PASS |
| `inventoryPolicy: DENY` | PASS |
| `availableForSale: false` | PASS |
| Password-gated storefront posture | PASS |
| Theme non-purchasable UI contract | PASS |

## 8. Product status/channel state after execution

All three approved CJ rows are now:

- **Status:** `ACTIVE`
- **Online Store publication:** `true`
- **Collection membership:** still inside `controlled-pilot`

Affected handles:

- `beverage-bottle-oil-bottle-handle-holder`
- `usb-bag-sealer`
- `foldable-magnetic-phone-holder-desktop-tablet-stand`

## 9. Tag/marker state after execution

All three rows now carry the same exact tag set:

- `cj-imported-supplier`
- `controlled-pilot`
- `non-purchasable`
- `preview-only`
- `price-to-confirm`

## 10. Non-purchasable / availableForSale result

**PASS**

For all three variants:

- `inventoryItem.tracked = true`
- `inventoryPolicy = DENY`
- available inventory = `0`
- `availableForSale = false`

Theme-level purchase controls remain disabled in the current storefront code, and public storefront routes remain blocked by the password gate.

## 11. controlled-pilot membership result

**PASS**

`controlled-pilot` still contains exactly:

- `CJYD230000901AZ`
- `CJYD211196101AZ`
- `CJYD245830501AZ`

The four older Gadgetgyz-era handles remain `inCollection: false`.

## 12. Media result

**PASS**

No media was added. All three CJ rows still have media count `0`.

## 13. Checkout/payment/customer-access result

**PASS WITH NOTES**

- Checkout/payment remain disabled at the theme level.
- Public storefront route access still resolves to `/password`.
- Customer access is still blocked by the password gate and by the project-level no-launch posture.

This slice widens preview visibility within the password-gated Online Store only. It does **not** approve customer access, checkout/payment enablement, or public launch.

## 14. Rollback performed

**No**

Rollback was **not** required on this retry because all required validations passed.

## 15. Evidence path

Local only; **not committed**:

`artifacts/devops/slice-21ar-cj-publish-for-preview-execution/20260515-133230/`

Included:

- `auth-scope-check.md`
- `pre-change-snapshot.md`
- `post-change-snapshot.md`
- `storefront-checks.md`

## 16. Preserved gates

Still blocked:

- Customer access
- Checkout/payment enablement
- Public launch
- `Supplier verified`
- Final pricing
- Final delivery promises
- Final stock / warranty / product claims
- Media approval
- CJ app install / import / sync

## 17. LLD status

**Unchanged** — no code or behaviour contract in the repo changed; this was an execution slice against existing approved theme and Admin posture.

## 18. Recommended next owner

**QA / Test Engineer** — perform authenticated post-execution controlled preview validation on collection/PDP routes under the password-gated preview posture.

## 19. Historical blocked retry

The earlier 21AR retry with missing inventory scope remains part of the audit trail only. This pass supersedes it as the durable execution result.

## 20. Confirmation no out-of-scope action occurred

Confirmed:

- No product outside the three approved CJ rows was touched.
- No collection membership was changed.
- No media was uploaded.
- No checkout/payment/customer access was enabled.
- No `Supplier verified`, final pricing, final delivery, stock, warranty, claim, or public-launch approval was introduced.
- No private evidence, credentials, tokens, cookies, supplier-account data, or customer/order/payment data was committed.
