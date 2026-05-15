# Slice 21BA — authenticated post-unlock visibility note

**Document type:** Read-only authenticated visibility note  
**Prepared:** 2026-05-15  
**Owner:** Senior Full-Stack Software Architect  
**Scope:** Read-only post-unlock storefront observation only. No Shopify Admin mutation, no product visibility/publication change, no theme edit, no publish, no product import/sync, no app install, and no checkout/payment/customer-order enablement.

**Accepted upstream state:** Slice **21AZ** accepted **PASS WITH NOTES** in commit `23a4a8a8408296e1a1d5e851fa0de99a4d9cca95`.

## 1. Purpose

Document what a restricted reviewer sees **after successful manual storefront unlock** on the exact three controlled-pilot CJ PDP routes, plus the accepted informational `controlled-pilot` collection route.

This slice does **not** approve any write action.

## 2. Evidence source

Authenticated read-only validation was recorded via the accepted contract-aware fixed-route harness:

- **Command:** `node tools/qa/run-slice-21ar-fixed-route-preview-check.mjs --manual-unlock`
- **Evidence folder:** `artifacts/qa/slice-21ar-fixed-route-preview-check/2026-05-15-21-1/`
- **Harness verdict:** `PASS WITH NOTES`
- **Unlock verified before route checks:** `yes`

## 3. Viewports covered

- desktop `1366x768`
- mobile `390x844`

## 4. PDP route findings by viewport

The following exact routes were checked after successful manual unlock:

- `/products/beverage-bottle-oil-bottle-handle-holder?preview_theme_id=151207542967`
- `/products/usb-bag-sealer?preview_theme_id=151207542967`
- `/products/foldable-magnetic-phone-holder-desktop-tablet-stand?preview_theme_id=151207542967`

### 4.1 Desktop `1366x768`

For all three PDP routes:

- final route resolved to the corresponding `/products/...` path
- `httpStatus=200`
- product content was visible
- expected CJ PDP signal was visible
- preview-safe catalogue wording was visible in the route snippet
- Gadgetgyz-era product signals were absent
- `Add to Cart` / `Buy Now` were absent
- checkout/customer signals were absent
- `media=no`
- `onlyGenericPlaceholderVisuals=true`
- route verdict was `PASS WITH NOTES`

### 4.2 Mobile `390x844`

For all three PDP routes:

- final route resolved to the corresponding `/products/...` path
- `httpStatus=200`
- product content was visible
- expected CJ PDP signal was visible
- preview-safe catalogue wording was visible in the route snippet
- Gadgetgyz-era product signals were absent
- `Add to Cart` / `Buy Now` were absent
- checkout/customer signals were absent
- `media=no`
- `onlyGenericPlaceholderVisuals=true`
- route verdict was `PASS WITH NOTES`

## 5. Controlled-pilot route note

The accepted informational route was also checked after unlock:

- `/collections/controlled-pilot?preview_theme_id=151207542967`

Observed on both desktop and mobile:

- final route resolved to `/collections/controlled-pilot`
- `httpStatus=404`
- title remained `404 Not Found – DropShipPOC`
- `0/3 CJ signals visible`
- Gadgetgyz remained absent
- `Add to Cart` / `Buy Now` remained absent
- checkout/customer absence check remained `no`
- `media=no`
- route contract classification remained `informational/non-blocking 404`
- route verdict remained `INFO`

This remains consistent with the accepted Product Owner route contract and does **not** block the current restricted-preview posture.

## 6. Post-unlock visibility conclusion

### What a restricted reviewer can see after unlock

- the exact three approved CJ PDP routes are reviewable on desktop and mobile
- the routes show expected CJ PDP content
- the routes keep the accepted preview-only / non-purchasable posture
- no real product media is shown
- only generic placeholder visuals remain

### What a restricted reviewer does not see

- no Add to Cart
- no Buy Now
- no checkout/customer path on the three approved PDP routes
- no Gadgetgyz-era product exposure
- no resolved success collection grid on `/collections/controlled-pilot`

## 7. Remaining risk or ambiguity

The main visibility ambiguity is now materially narrowed:

- anonymous access is password-gated (**21AZ**)
- authenticated restricted-preview access is available for the three approved PDPs (**21BA**)

The remaining planning question is not whether the routes are reviewable. It is whether the current `ACTIVE` + `Online Store` Admin state should remain as-is for the accepted restricted-preview posture, or whether a later bounded Admin/write proposal should tighten or reshape that state before any broader pilot move.

That is a Product Owner / later planning question, not an immediate security or QA failure.

## 8. Explicit no-write confirmation

Confirmed for **Slice 21BA**:

- no Shopify Admin mutation occurred
- no product visibility/publication change occurred
- no theme edit occurred
- no publish occurred
- no product import/sync occurred
- no app install occurred
- no media enablement occurred
- no checkout/payment/customer-order enablement occurred

## 9. Recommended next owner

**Product Owner**

The next clean decision is whether the combined **21AZ + 21BA** evidence is sufficient to support a later tightly bounded Admin/write proposal, or whether the current restricted-preview posture should simply be retained without further change.
