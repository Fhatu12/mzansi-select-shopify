# Slice 21IA-C-WIN - Phone Reference Replacement Audit

## Scope

- Header: scanned visible theme/header files; no phone reference found.
- Footer: scanned and updated.
- Contact page: scanned; business-details section on the contact template updated.
- FAQ: scanned visible theme/template references; no phone reference found.
- Shipping policy: local theme links scanned; Shopify policy body is not stored in this repository.
- Refund policy: local theme links scanned; Shopify policy body is not stored in this repository.
- Visible theme sections/snippets: scanned.

## Inventory Of Phone References Found

| Surface | File | Existing reference | Action |
| --- | --- | --- | --- |
| Footer desktop Help column | `sections/site-footer.liquid` | `tel:+27829974112` / `+27 82 997 4112` | Removed phone link; support email shown as `info@sikhwarigroup.co.za`. |
| Footer mobile Help accordion | `sections/site-footer.liquid` | `tel:+27829974112` / `+27 82 997 4112` | Removed phone link; support email shown as `info@sikhwarigroup.co.za`. |
| Contact / Business Details support contact | `sections/business-details-foundation.liquid` | `support_phone_display = '+27 82 997 4112'`, `support_phone_tel = '+27829974112'`, visible `Phone:` row | Removed phone variables and visible phone row; support email shown as `info@sikhwarigroup.co.za`. |

## Files Changed

- `sections/site-footer.liquid`
- `sections/business-details-foundation.liquid`

## Verification

Command:

```sh
rg -n -i "(tel:|telephone|cellphone|cell phone|support phone|phone:|\+27|0[0-9]{2}[[:space:]-]?[0-9]{3}[[:space:]-]?[0-9]{4})" sections snippets templates layout blocks config assets
```

Result:

- No customer-facing phone references remain.
- The only remaining matches were Unsplash image URL dimensions in `sections/category-strip.liquid` and `sections/category-showcase.liquid`; these are not phone numbers or contact references.

## Boundaries Preserved

- Checkout not modified.
- Payment settings not modified.
- Products not modified.
- Shipping rates not modified.
