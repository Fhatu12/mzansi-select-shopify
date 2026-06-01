# Slice 21HY - Homepage support link fix and FAQ page creation

Date: 2026-06-01
Store: `https://mzansiselect.myshopify.com`
Live theme target: `Mzansi Select MVP Restored #162429075681`

## 21HY verdict
BLOCKED / PARTIAL

- Theme source link fixes were implemented and pushed.
- FAQ page creation automation is blocked in this execution environment.
- Public homepage output still renders old `/pages/about#...` links after push (live-render mismatch), so acceptance checks cannot pass yet.

## Pre-check
- `git status --short --branch`: `## master...origin/master`, `?? tools/catalogue/`
- `git check-ignore -v artifacts/`: `.gitignore:5:artifacts/ artifacts/`
- `shopify theme list --store mzansiselect.myshopify.com`: live theme confirmed as `Mzansi Select MVP Restored [live] #162429075681`

## Files changed
- `sections/category-strip.liquid`
- `sections/hero-collage.liquid`
- `docs/qa/slice-21hy-homepage-support-link-fix.md`
- `docs/project-control.md`

## Theme link updates applied in source
- `/pages/about#shipping` -> `/policies/shipping-policy`
- `/pages/about#returns` -> `/policies/refund-policy`
- `/pages/about#faq` -> `/pages/faq`
- Hero secondary CTA "Shipping info": `/pages/about#shipping` -> `/policies/shipping-policy`
- Hero decorative tiles: unchanged (still visual-only, non-clickable)

## FAQ page creation result
Result: MANUAL-BLOCKED

Attempted command:
- `shopify api graphql --store sikhwarigroupdev.myshopify.com ... pageCreate ...`

Observed blocker:
- CLI error: `Command api graphql not found.`

### Exact manual Admin steps (required)
1. Open Shopify Admin for the store.
2. Go to `Online Store` -> `Pages`.
3. Click `Add page`.
4. Title: `FAQ`
5. Handle/URL: `faq` (final URL `/pages/faq`)
6. Paste content from the FAQ block below.
7. Set visibility to published/visible.
8. Save.

### FAQ content to paste
```markdown
# FAQ

## Where do you deliver?

Mzansi Select currently delivers within South Africa only.

## How much is delivery?

Standard South Africa delivery is R99. Orders over R1,500 qualify for free delivery.

## How long does delivery take?

Delivery timelines depend on supplier processing and courier availability. Tracking details will be shared once your order has been processed.

## Do you offer international shipping?

No. International shipping is not available at launch.

## Can I return an item?

You may request a return within 7 days of receiving your order, provided the item is unused, in its original condition, and in its original packaging where applicable. Some items may not be eligible for return due to hygiene, safety, or supplier restrictions.

## What if my item arrives damaged or incorrect?

Contact us as soon as possible with your order number, contact details, and photos of the issue where possible. We will review the issue and guide you on the next steps.

## How do I contact support?

Use the support email and phone number listed on our Contact page.

## How do I track my order?

Tracking details will be shared once your order has been processed. Full self-service order tracking is planned for a later phase.
```

## Files pushed
- `sections/category-strip.liquid`
- `sections/hero-collage.liquid`

Exact push command:
```bash
shopify theme push --store mzansiselect.myshopify.com --theme 162429075681 --allow-live --only sections/category-strip.liquid --only sections/hero-collage.liquid
```

## Route verification
- `/` -> `200`
- `/policies/shipping-policy` -> `200`
- `/policies/refund-policy` -> `200`
- `/pages/faq` -> `404` (expected until manual FAQ page creation)
- `/pages/contact` -> `200`
- `/collections/all` -> `200`
- Sample PDP -> `200`

## Homepage link verification (public output)
Current public output still contains old links:
- `/pages/about#shipping`
- `/pages/about#returns`
- `/pages/about#faq`

Required updated links are not yet reflected in the live rendered HTML despite successful push response.

## Hero tile status
- Hero decorative collage tiles remain visual-only (not clickable), as required.

## Commerce safety check
No evidence of disallowed changes introduced by this slice:
- No PayFast activation
- No Peach activation
- No payment provider enablement
- No Add to Cart enablement changes
- No `/cart/add` wiring changes
- No quick-add changes
- No dynamic checkout changes
- No checkout/payment path changes
- No `Supplier verified` changes
- No newsletter capture changes
- No Liquid errors observed in route fetch checks
