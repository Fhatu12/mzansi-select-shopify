# Slice 21FQ-A — CJ manual intake and shipping-inclusive pricing policy

**Document type:** Product plan policy (documentation only)  
**Prepared:** 2026-05-22  
**Owner:** Product Owner  
**Slice:** **21FQ-A**  
**Store:** `dropshippoc.myshopify.com`

**Upstream context:** **21X** supplier strategy reset (CJdropshipping first); existing **15** visible preview catalogue with commerce gate (**21FF** / **21FN**). **No** execution in this slice.

---

## 1. Executive verdict

**PASS** (docs-only)

This slice records the changed product-intake and pricing policy for the next catalogue expansion phase. **No** Shopify Admin mutation, theme change, app install, import automation, checkout enablement, or publish occurred here.

---

## 2. Policy statements (Product Owner approved)

| # | Policy |
| --- | --- |
| 1 | The **initial product batch** for this phase will be **manually added from CJdropshipping** (CJ), row by row, with deliberate field control—not an unreviewed bulk dump. |
| 2 | **CJ shipping cost must be included** in the **total planned selling price** for each SKU (landed-price thinking at planning time). |
| 3 | **No separate customer-facing shipping surprise** should be introduced later for this batch (avoid “low product price + high checkout shipping” unless a future slice explicitly approves a different commercial model). |
| 4 | **Bulk import / app automation** (DSers, CJ import apps, sync jobs) is **deferred** unless a **separate** Product Owner approval authorises tooling, scopes, and rollback. |
| 5 | **Product copy** must stay **conservative and source-backed**—South African English, no import keyword stuffing, no Supplier verified, no unsupported performance/delivery/stock/warranty claims (align with **21FK** / **21FN** copy discipline). |
| 6 | **Preview commerce gate remains active:** visible rows keep **`non-purchasable`** + **`price-to-confirm`** (or equivalent approved gate tags) until a separate go/no-go enables checkout; **no** cart, payment, or customer-flow enablement in this phase. |
| 7 | **Product intake QA** must run **after** the manual CJ batch is added to Shopify (Admin verification + password-gated rendered spot-check where applicable)—not before rows exist. |

---

## 3. Pricing model (planning rule)

For each CJ candidate SKU, planners should work from:

```
Planned selling price (ZAR) ≥ (CJ product cost + CJ shipping to ZA + planned margin buffer)
```

| Input | Source | Notes |
| --- | --- | --- |
| CJ product cost | CJ desk/calculator proof (sanitised evidence in `artifacts/` only) | Use latest PO-accepted CJ shipping interpretation (**21AB** / **21AC** posture: long-delivery import route) |
| CJ shipping | Same | Must be explicit per SKU/variant where shipping varies |
| Margin buffer | Product Owner commercial decision | Not final launch approval by itself |
| Storefront price display | Shopify Admin | Until checkout enabled, storefront may still show **Price to be confirmed** per commerce gate |

**Customer-facing rule:** If a later slice enables checkout for a SKU, the **shelf price should already reflect shipping-inclusive planning** so checkout does not introduce a material “shipping shock” relative to shopper expectations set during preview.

---

## 4. Manual intake boundaries

| Allowed in manual CJ batch (when separately approved per row/slice) | Not allowed without separate approval |
| --- | --- |
| Manual Shopify product create/edit | DSers/CJ app install |
| Conservative title/description from approved copy packs | Bulk automated import/sync |
| Tags: preview gate, supplier path notes | **Supplier verified** tag or claim |
| Media from approved CJ references | Final delivery/warranty/stock certainty copy |
| Collection assignment per existing hygiene rules | Theme push/publish for commerce |
| Price fields staged per PO (may remain gated on storefront) | Checkout/payment enablement |

---

## 5. Copy and claims discipline

- Reuse **21FK** approval-pack pattern: propose clean title/description before Admin write; flag **needs supplier proof** where CJ listing copy implies unverified specs, included accessories, or performance.
- **21FN** updated **12** rows remain the reference for acceptable conservative tone; **3** deferred supplier-proof rows still require a **separate** Admin pack before mutation.
- Theme continues to render `product.title` and `product.description` from Shopify—no hard-coded CJ copy in Liquid for new SKUs.

---

## 6. Commerce gate (unchanged)

Until explicit programme approval:

| Gate | Requirement |
| --- | --- |
| Tags | **`non-purchasable`** + **`price-to-confirm`** on visible preview products (unless PO approves a narrower pilot exception) |
| Storefront | No Add to Cart, no `/cart/add`, no quick-add, no checkout path |
| Supplier verified | **Not** added |
| Delivery certainty | **Not** promised in customer copy |

New CJ rows added manually must **enter** with the same preview-safe posture unless a future slice documents an approved exception.

---

## 7. Required follow-up after manual batch

| Step | Owner | When |
| --- | --- | --- |
| Manual CJ → Shopify staging | **DevOps / Platform** (bounded slice, PO-approved field list) | After PO signs SKU list |
| Admin intake QA (tags, price posture, publication, collections) | **QA** | Immediately after staging |
| Rendered spot-check (copy, commerce gate, no checkout leakage) | **QA** | After staging + password unlock |
| Copy approval pack for any non-trivial CJ wording | **Product Owner** / **Architect** | Before or with staging, per row risk |
| Shipping-inclusive price sign-off | **Product Owner** | Before removing **price-to-confirm** in any future commerce slice |

---

## 8. Out of scope (21FQ-A)

- Shopify Admin product mutation in this slice
- Theme file changes
- Theme push or publish
- Checkout, cart, payments, markets
- App installation or import/sync automation
- Supplier verified status
- Committing `artifacts/` or `tools/catalogue/`

---

## 9. Recommended next owner

1. **Product Owner** — approve initial CJ SKU shortlist and per-SKU landed price worksheet (product cost + shipping + margin).
2. **DevOps / Platform Engineer** — execute a **separate** bounded manual staging slice when approved.
3. **QA / Test Engineer** — run **product intake QA** after the batch exists in Admin.

---

## 10. Safety

No supplier credentials, customer data, payment data, or raw CJ calculator exports belong in this document.
