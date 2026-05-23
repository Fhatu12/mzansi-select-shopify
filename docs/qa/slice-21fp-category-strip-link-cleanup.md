# Slice 21FP: Category strip link cleanup

**Scope:** fix the new Retro Vault category strip card so the title and CTA are rendered correctly while preserving the existing card styling and route.

## Issue
- The Retro Vault card rendered the subtitle text `Consoles & Classics` instead of a proper `Browse now` call-to-action.
- The card title should read: `The Retro Vault: Consoles & Classics`.
- The CTA should read: `Browse now` and point to `/collections/retro-vault-consoles-classics`.

## Fix
- Updated `sections/category-strip.liquid`.
- Kept the existing `Games & Toys` card CTA pattern intact.
- No changes were made to products, Admin settings, checkout/payment flows, theme publish, or Supplier verified status.

## Files changed
- `sections/category-strip.liquid`
- `docs/project-control.md`
- `docs/qa/slice-21fp-category-strip-link-cleanup.md`

## Live push
- Pushed only `sections/category-strip.liquid` to live theme `Mzansi Select MVP Preview` (#151207542967) with `--allow-live`.
- Did not publish the theme.

## Verification
- Home category strip is expected to render:
  - Retro Vault: Consoles & Classics
  - Browse now →
  - Games & Toys
  - Browse now →
- No fake/demo products were introduced.
- No Add to Cart, cart/add, quick-add, dynamic checkout, or Supplier verified markers were added.
- No theme publish or product mutation was performed.

## Remaining blockers
- `artifacts/` remains ignored.
- `tools/catalogue/` remains untracked.
- The store is password-protected, so live storefront route content may remain gated behind the Shopify password screen.
