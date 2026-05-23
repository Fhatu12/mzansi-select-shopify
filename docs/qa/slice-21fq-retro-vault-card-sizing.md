# Slice 21FQ: Retro Vault card sizing cleanup

**Scope:** adjust the category strip title layout so the new Retro Vault card balances visually with the other category blocks.

## Issue
- The Retro Vault title `The Retro Vault: Consoles & Classics` is longer than the other labels and causes the category block to look uneven.

## Fix
- Updated `assets/theme.css` to allow `.cat-name` content to wrap neatly and stay visually consistent with the other category cards.
- Preserved the `Browse now` CTA and the collection target `/collections/retro-vault-consoles-classics`.
- No product changes, Shopify Admin changes, checkout/payment/customer-flow changes, theme publish, import/sync, or Supplier verified changes were made.

## Files changed
- `assets/theme.css`
- `docs/project-control.md`
- `docs/qa/slice-21fq-retro-vault-card-sizing.md`

## Live push
- Pushed only `assets/theme.css` to live theme `Mzansi Select MVP Preview` (#151207542967) with `--allow-live`.
- Did not publish the theme.

## Verification
- Homepage loads.
- Retro Vault title wraps cleanly across two lines.
- Category blocks remain visually even.
- Browse now links are preserved for both Retro Vault and Games & Toys.
- No Add to Cart, cart/add, quick-add, dynamic checkout, or Supplier verified markers were introduced.

## Remaining blockers
- `artifacts/` remains ignored.
- `tools/catalogue/` remains untracked.
- The storefront remains password-gated.
