# Slice 21AZ — controlled-pilot visibility / URL validation

**Document type:** Read-only visibility validation note  
**Prepared:** 2026-05-15  
**Owner:** Senior Full-Stack Software Architect  
**Scope:** Read-only repo, Shopify CLI, and low-noise storefront route validation only. No Shopify Admin mutation, no theme edit, no publish, no product import/sync, no app install, and no checkout/payment/customer-order enablement.

**Accepted upstream state:** Slice **21AY** accepted **PASS WITH NOTES** in commit `ed3844a735adfe9ef2ce1a3e0fb3c8530e75a3f8`.

## 1. Purpose

Resolve the visibility ambiguity recorded in **21AY** by checking, in a read-only way, whether the exact three controlled-pilot CJ products are reachable through direct storefront URLs, preview URLs, search routes, or the known `controlled-pilot` collection route.

This slice does **not** authorise or perform any write action.

## 2. Validation boundary

The check was limited to these exact handles only:

1. `beverage-bottle-oil-bottle-handle-holder`
2. `usb-bag-sealer`
3. `foldable-magnetic-phone-holder-desktop-tablet-stand`

No broader catalogue probing was performed.

## 3. Metadata reconfirmation

Read-only Shopify CLI metadata reconfirmed the same baseline captured in **21AX**:

- all three products remain `ACTIVE`
- `onlineStoreUrl` remains `null`
- each row still shows one `Online Store` publication with `isPublished=true`
- tags remain:
  - `cj-imported-supplier`
  - `controlled-pilot`
  - `non-purchasable`
  - `preview-only`
  - `price-to-confirm`
- first-variant non-sellable posture remains:
  - `availableForSale=false`
  - `inventoryQuantity=0`
  - `inventoryPolicy=DENY`

## 4. Direct route findings (without `preview_theme_id`)

The following exact direct product routes were checked with low-noise unauthenticated HTTP requests:

- `/products/beverage-bottle-oil-bottle-handle-holder`
- `/products/usb-bag-sealer`
- `/products/foldable-magnetic-phone-holder-desktop-tablet-stand`

### Result pattern — all three routes

- initial response redirected through **302**
- final destination resolved to `/password`
- final HTTP status was `200`
- page title resolved to `DropShipPOC`
- product content did **not** appear in the returned HTML
- no `Add to Cart` / `Buy Now` signal appeared
- no checkout/customer signal appeared
- no preview-safe product copy appeared on the password page

### Interpretation

The three product PDP routes are **not anonymously reachable as product content** through their direct live storefront URLs in the current password-gated posture.

## 5. Preview route findings (`preview_theme_id=151207542967`)

The following exact preview routes were checked:

- `/products/beverage-bottle-oil-bottle-handle-holder?preview_theme_id=151207542967`
- `/products/usb-bag-sealer?preview_theme_id=151207542967`
- `/products/foldable-magnetic-phone-holder-desktop-tablet-stand?preview_theme_id=151207542967`

### Result pattern — all three routes

- request redirected through **302 → 302**
- final destination resolved to `/password`
- final HTTP status was `200`
- page title resolved to `DropShipPOC`
- product content did **not** appear in the returned HTML
- no `Add to Cart` / `Buy Now` signal appeared
- no checkout/customer signal appeared
- no preview-only/non-purchasable product copy appeared in the passive unauthenticated response

### Interpretation

The three preview PDP routes are **not anonymously reachable as product content** without first passing the storefront password gate.

This does **not** contradict accepted **21AS** evidence. That earlier authenticated QA run confirmed the same three preview PDP routes are reviewable **after manual storefront unlock** in the accepted restricted-preview posture.

## 6. Search and collection exposure findings

The following low-noise exact routes were checked:

- `/search?q=usb-bag-sealer&type=product`
- `/search?q=usb-bag-sealer&type=product&preview_theme_id=151207542967`
- `/collections/controlled-pilot`
- `/collections/controlled-pilot?preview_theme_id=151207542967`

### Result pattern

- all four routes redirected to `/password`
- final HTTP status was `200`
- final title resolved to `DropShipPOC`
- no CJ product content appeared in the returned HTML
- no commerce/customer signal appeared in the passive unauthenticated response

### Controlled-pilot rule preserved

The accepted rule remains unchanged:

- `/collections/controlled-pilot` is informational only if Shopify still serves it through **404** handling after unlock

This **21AZ** pass did **not** reach that post-unlock render state, because the passive unauthenticated probe terminated at the storefront password gate first.

## 7. Visibility conclusion

### What is now proven

- the three controlled-pilot CJ products are **not anonymously reachable as product content** through:
  - direct live PDP routes
  - direct preview PDP routes
  - the exact tested search routes
  - the exact tested collection routes
- in all tested cases, the practical storefront exposure for an unauthenticated visitor is the password gate, not the product surface

### What remains true but must be interpreted carefully

- Admin metadata still shows `ACTIVE` + `Online Store` publication
- `onlineStoreUrl` is still `null`
- accepted prior QA evidence still shows the three preview PDP routes render in the **restricted preview context after manual unlock**

### Practical meaning

The current state is **not public-launch evidence**. It is also **not zero-visibility evidence**. The most accurate reading is:

- **anonymous storefront visibility is blocked by the password gate**
- **restricted preview visibility remains possible after accepted unlock flow**

## 8. Remaining ambiguity

The main unresolved ambiguity is no longer “are these publicly reachable right now?” — this pass shows the answer is **no for passive unauthenticated route access**.

The remaining ambiguity is narrower:

- whether the current `ACTIVE` + published Admin state is intentionally required for the accepted restricted preview posture, or merely an operational artefact that should later be tightened before any broader pilot change

That question matters for future write planning, but it is **not** an immediate security/compliance breach.

## 9. Explicit no-write confirmation

Confirmed for **Slice 21AZ**:

- no Shopify Admin mutation occurred
- no product visibility/publication change occurred
- no theme edit occurred
- no publish occurred
- no product import/sync occurred
- no app install occurred
- no media enablement occurred
- no checkout/payment/customer-order enablement occurred

## 10. Recommended next owner

**Product Owner**

The clean next decision is whether this visibility result is sufficient to support a later tightly bounded Admin/write proposal, or whether the Product Owner wants an additional authenticated visibility note focused only on post-unlock preview reachability.
