# Slice 21AQ — CJ publish-for-preview execution readiness check

**Document type:** DevOps / Platform readiness note
**Prepared:** 2026-05-15
**Owner:** DevOps / Platform Engineer
**Scope:** Documentation-only readiness checkpoint; no Shopify Admin read/write, no product/channel/collection mutation, no storefront/customer-access widening.
**Upstream accepted slice:** **21AP** — **PASS WITH NOTES** (`17b84083f5f57bf08c7420418644902da9f2be09`)

## 1. DevOps verdict

**BLOCKED**

A future bounded publish-for-preview path is **technically feasible**, but it is **not yet execution-ready**. The current repo shows a gap between the accepted architectural intent and the exact later Admin delta needed for safety: storefront placeholder-price and media-suppression behaviour is keyed to **`preview-only`** / **`price-to-confirm`** tags, while the current CJ rows are documented with the CJ pilot tag set. A later **status/publication-only** widening would therefore risk exposing non-final staging prices rather than the established preview-safe price treatment.

## 2. Future execution method recommendation

**Recommended safest later method, subject to explicit Product Owner approval:**

1. Capture the complete pre-change snapshot in §6.
2. Keep the execution boundary fixed to exactly these **3** rows:
   - `CJYD230000901AZ`
   - `CJYD211196101AZ`
   - `CJYD245830501AZ`
3. Keep **`controlled-pilot`** as the only intended preview collection route.
4. Preserve password-gated / restricted preview access.
5. Before widening visibility, apply the Product Owner-approved preview-safety mechanism needed to prevent non-final price implication — **prefer the existing repo convention** of `preview-only` + `price-to-confirm` unless the Product Owner approves an explicit alternative.
6. Apply only the minimum Admin delta needed for storefront rendering in restricted preview: based on accepted historical patterns and current docs, that likely means moving the three products from **`DRAFT`** to a storefront-renderable state and publishing them only to the intended preview-visible Online Store path.
7. Preserve the non-purchasable posture and no-media default.
8. Run the required post-change QA before treating the execution as complete.

## 3. Exact Shopify objects / fields likely affected in a later execution pass

### Product objects — likely touched

For exactly the three CJ product rows only:

- **Product status** — current documented state is `DRAFT`; later visibility likely requires `ACTIVE`.
- **Publication / sales-channel availability** — current documented publication count is `0`; later preview visibility likely requires publication to the intended Online Store path.
- **Product tags** — likely need an explicit preview-safety delta such as adding `preview-only` and `price-to-confirm`, because current theme safety behaviour depends on those tags.
- **Inventory / sellability controls** — must be read and preserved exactly; if later non-purchasability depends on zero inventory + deny/continue-selling false, those values must remain unchanged or be explicitly set by the approved execution plan.
- **Media state** — must remain empty unless separate source-use approval exists.

### Collection object — expected read/verify only

- **`controlled-pilot`** collection membership should remain exactly the same **3** CJ rows.
- No collection membership mutation should be required if current state still matches accepted **21AL / 21AN** posture.

### Store / storefront controls — expected unchanged

- Password-gated / restricted storefront posture.
- Theme preview path and live-theme publish state.
- Checkout/payment/customer-account settings.

## 4. Preview-only visibility feasibility

**Technically feasible with conditions.**

- The repo already contains a precedent for preview-visible products: Slice **13I** used **Online Store** publication plus preview-safety tags for password-protected review.
- Slice **21AN** confirms the current CJ rows are not storefront-observable while **DRAFT** / unpublished.
- Therefore, a later preview-visible state is technically possible, but **not** from the current DRAFT/unpublished state alone.
- The safe path requires a deliberately bounded visibility delta **plus** preview-safety controls so restricted preview does not accidentally look commercially final.

## 5. Non-purchasable posture feasibility

**Technically feasible, but must be explicitly preserved in the later execution plan.**

Evidence from the current theme surface:

- PDP purchase controls are rendered disabled in **`sections/main-product-foundation.liquid`**.
- Cart checkout foundation is disabled in **`sections/main-cart-foundation.liquid`**.
- Preview-safe storefront copy already states that cart and checkout remain disabled.

However, theme-level disabled controls are not enough by themselves to define the full Admin sellability contract. The later execution slice must snapshot and preserve the exact product-side non-purchasable controls (for example zero inventory / deny policy / equivalent approved posture) before any visibility widening.

## 6. Required pre-change snapshot

Before any future execution, capture a sanitized read-only snapshot covering:

### Per product — all three rows

- Product GID / handle / title
- Status
- Publication/channel availability and publication count
- Vendor, product type, tags
- Description/body checksum or full sanitized body
- Variant ID, variant SKU, option values, price, compare-at price
- Inventory quantity, inventory policy / continue-selling posture, tracking state
- Media count and media IDs
- Collections containing the product

### Collection

- **`controlled-pilot`** collection GID / handle / title
- `products.edges` membership list
- `inCollection` confirmation for the three CJ rows and removed Gadgetgyz-era rows where available

### Storefront / release controls

- Password/restricted-preview posture
- Preview theme ID intended for QA
- Live theme unchanged confirmation
- Checkout/payment/customer-access unchanged confirmation

## 7. Rollback / reversal plan

Planning-level reversal only; do **not** execute in this slice.

If a future visibility widening must be reversed:

1. Return each of the three products to its exact pre-change **status** and **publication/channel** state from the snapshot.
2. Remove only the new preview-safety tags if they were added solely for the widened preview state and Product Owner-approved rollback says to remove them; otherwise restore the exact prior tag set from snapshot.
3. Restore any sellability controls changed during execution to the exact prior inventory/policy state.
4. Confirm media returns to the pre-change state.
5. Confirm **`controlled-pilot`** membership remains the exact three-row set.
6. Re-run QA on collection/PDP routes and confirm restricted preview / non-purchasable posture.
7. Record a sanitized rollback note only; do not commit raw Admin payloads or private evidence.

**Admin UI equivalent, if a future UI-based rollback is approved:** restore each product’s prior status, remove Online Store availability for those rows, restore prior tag set, verify inventory/sellability settings, and re-check **`controlled-pilot`** membership.

## 8. Post-execution QA requirements

After any future implementation, QA evidence must show:

1. Exact **3** CJ members only in **`controlled-pilot`** via **`products.edges`** plus **`inCollection`** where available.
2. Removed Gadgetgyz-era rows remain absent from the collection.
3. Restricted/password-gated preview posture remains active.
4. Only the approved collection/PDP routes are preview-visible.
5. Products remain non-purchasable; no live add-to-cart, checkout, or payment path is available.
6. Preview-safe price treatment is active; no non-final staging price is presented as final public price.
7. Required imported-supplier and controlled-pilot wording remains present.
8. **USB Bag Sealer** blocked claims remain absent.
9. No media appears unless separately approved.
10. Desktop and mobile collection/PDP renderings pass review.
11. No customer access, checkout/payment, public-launch, or `Supplier verified` implication was introduced.

## 9. Readiness recommendation

**Blocked pending Product Owner clarification.**

The future path is technically viable, but execution should not be opened until the Product Owner locks:

1. The exact preview-safety mechanism for non-final pricing — preferably `preview-only` + `price-to-confirm`, or an explicitly approved equivalent.
2. The exact product-side non-purchasable Admin controls that must remain true during visibility widening.
3. Whether the later execution may change only the minimum status/publication fields plus those preview-safety controls, with no other product-field drift.

## 10. Remaining blockers

- Exact future Admin delta not yet Product Owner-approved
- Exact non-final-price control not yet Product Owner-approved
- Exact non-purchasable Admin control set not yet locked for the later execution slice
- Customer access
- Checkout/payment
- Public launch
- `Supplier verified`
- Final pricing / delivery / stock / warranty / product claims
- Media/source-use approval
- CJ app install/import/sync approval

## 11. LLD status

**Unchanged.** This pass documents readiness only; it does not change app/import/sync/storefront/checkout/payment/customer-access behaviour.

## 12. Knowledge capture

- **Reusable knowledge discovered:** Preview visibility and preview safety are separate controls. A product can be technically renderable yet still commercially unsafe if the theme’s placeholder-price contract is not activated.
- **Asset created/updated:** this readiness note; `docs/project-control.md` tracker sync.
- **Suggested repository location:** `docs/devops/` for bounded execution-readiness checkpoints before Admin mutations.
- **Sensitive material excluded:** credentials, tokens, cookies, browser state, Admin payloads, supplier-account data, customer/order/payment data, and local artifact contents.
- **Follow-up needed:** Product Owner clarification on exact future tag / price-safety / non-purchasable controls before any execution slice is approved.

## 13. Confirmation no out-of-scope action occurred

Confirmed for Slice **21AQ**: no Shopify Admin mutation, no Admin read/write call, no product publish, no status change, no channel/publication change, no collection mutation, no purchasability change, no media upload, no checkout/payment enablement, no customer-access enablement, no `Supplier verified` approval, no final commercial approval, no app install, no import/sync, and no sensitive material committed.
