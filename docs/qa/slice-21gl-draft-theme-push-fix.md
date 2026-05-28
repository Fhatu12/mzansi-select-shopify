# Slice 21GL — Draft theme push validation fix (transferred store)

## Context

- **Store (transferred):** `sikhwarigroupdev.myshopify.com`
- **Live theme (do not touch):** `Horizon` `#158396285153`
- **Draft theme target:** `Mzansi Select MVP Restored` `#162429075681` (unpublished)
- **Goal:** fix local theme validation errors so pushes to the **existing draft theme** succeed cleanly (no publish, no `--allow-live`).

## Failure observed

Shopify CLI push failed with preset validation errors originating from missing theme block types referenced by `sections/product-list.liquid`, including:

- Invalid preset `t:names.products_grid`: invalid block type `_product-card` (undefined block type).
- Follow-on errors after `_product-card` was restored: undefined block type `_product-list-content`, and then schema issues in newly added blocks until settings matched preset expectations.

## Root cause

The repository theme contained `sections/product-list.liquid` presets that referenced theme block types which were **not present in `blocks/`** (they had previously been pulled/copied into ignored `artifacts/` paths during earlier work).

Shopify’s theme validator requires all preset-referenced block types and preset-referenced setting IDs to exist in the theme’s block schemas.

## Fix applied (minimal, catalogue-safe)

Added missing theme blocks required for `sections/product-list.liquid` presets (no commerce actions added; no theme publishing):

- `blocks/_product-card.liquid` (minimal wrapper that renders `snippets/product-card.liquid` children; **does not** expose buy-buttons blocks)
- `blocks/product-title.liquid` (renders product title; schema accepts preset settings used by `product-list` presets)
- `blocks/_product-list-content.liquid` (header container; accepts nested `_product-list-text` and `_product-list-button`)
- `blocks/_product-list-text.liquid` (uses a `liquid` setting so preset header content can render `{{ closest.collection.title }}`; schema updated to match preset settings including `color`, `background`, `corner_radius`)
- `blocks/_product-list-button.liquid` (simple link-only CTA; schema defaults made non-blank to satisfy validator)

## Push command (existing draft only)

```bash
shopify theme push --store sikhwarigroupdev.myshopify.com --theme 162429075681
```

## Result

- Push completes **successfully** without the `product-list` preset/block-type validation errors.
- **Preview URL:** `https://sikhwarigroupdev.myshopify.com?preview_theme_id=162429075681`
- **Theme editor URL:** `https://sikhwarigroupdev.myshopify.com/admin/themes/162429075681/editor`

## Safety / guardrails confirmation

- Storefront password: **unchanged** (not removed).
- Live theme `Horizon` `#158396285153`: **unchanged** (no targeting; draft push only).
- Theme publish: **not performed**.
- Products/prices/apps/checkout/payments/domains: **no actions taken** in this slice.

## Remaining notes / blockers

- `shopify theme check` reports significant pre-existing schema-translation offenses in the repo theme; these were **not addressed** here because the immediate objective was to resolve the push-blocking preset validation errors for the transferred-store draft theme.

