# Slice 21HX - Homepage support links and hero tile audit

Date: 2026-06-01
Store: `https://mzansiselect.myshopify.com`
Live theme: `Mzansi Select MVP Restored #162429075681`
Mode: Read-only audit only (no mutations performed)

## 21HX verdict
FAIL (link integrity)

Homepage support links in the category strip currently target a missing `/pages/about` route and return 404.

## Pre-check
- `git status --short --branch`: `## master...origin/master`, `?? tools/catalogue/`
- `git check-ignore -v artifacts/`: `.gitignore:5:artifacts/ artifacts/`
- `shopify theme list --store mzansiselect.myshopify.com`: live theme confirmed as `Mzansi Select MVP Restored [live] #162429075681`

## Source findings (homepage support links)
File: `sections/category-strip.liquid`
- Shipping tile href: `/pages/about#shipping`
- Returns tile href: `/pages/about#returns`
- FAQ tile href: `/pages/about#faq`

File: `sections/hero-collage.liquid`
- Hero secondary CTA "Shipping info" href: `/pages/about#shipping`
- Decorative hero collage items are rendered as `<div class="cg-item">` image blocks (no `<a>` wrappers).

## Live storefront findings
Route checked: `/`

Current support-link hrefs found in homepage markup:
- `Shipping info & rates` -> `/pages/about#shipping`
- `Returns / Easy returns` -> `/pages/about#returns`
- `FAQ / Get answers` -> `/pages/about#faq`

HTTP status checks:
- `/pages/about` -> `404`
- `/pages/about#shipping` -> `404`
- `/pages/about#returns` -> `404`
- `/pages/about#faq` -> `404`

## Replacement targets assessment
Recommended targets were validated for current availability:
- `Shipping info & rates` -> `/policies/shipping-policy` (`200`) 
- `Returns / Easy returns` -> `/policies/refund-policy` (`200`)
- `FAQ / Get answers` -> `/pages/faq` currently `404` (FAQ page does not exist)

FAQ existence result:
- `/pages/faq` exists: No (`404`)

Recommendation for FAQ target:
- Create `/pages/faq` and then wire FAQ links there.
- Until FAQ exists, keep FAQ link unchanged or route temporarily to `/pages/contact` to avoid a 404.

## Hero decorative tile assessment
Current behavior (homepage hero collage in `sections/hero-collage.liquid`):
- Tiles are visual-only decorative image cards.
- They are not links and not buttons.
- No tile-level hrefs are present.
- Present alt/label intent in image text includes: tech preview, accessories preview, kitchen preview, storage preview, tech accessory preview, home preview, lighting preview.

Recommendation:
- Keep current hero tiles visual-only in this slice (no change).
- If future wiring is approved, convert selected tiles to explicit `<a>` links with accessible labels and these targets:
  - Tech Accessories -> `/collections/tech-accessories`
  - Games & Toys -> `/collections/games-toys`
  - The Retro Vault -> `/collections/retro-vault-consoles-classics`
  - Home & Living -> `/collections/home-living`
  - Kitchen & Storage -> `/collections/kitchen-storage`
  - Office & Desk -> `/collections/office-desk`

## Storefront safety check (health only)
- `/` -> `200`
- `/collections/all` -> `200`
- `/policies/shipping-policy` -> `200`
- `/policies/refund-policy` -> `200`
- `/pages/contact` -> `200`

## Implementation recommendation (no mutation in this slice)
1. Update category strip support links away from `/pages/about#...` to live policy/page targets.
2. Update hero "Shipping info" CTA to `/policies/shipping-policy`.
3. Publish/create FAQ page at `/pages/faq`, then route all FAQ links there.
4. Keep hero decorative collage visual-only unless Product Owner explicitly approves category-link behavior.

## Mutation confirmation
No theme, navigation, pages, collections, products, prices, checkout/payment, apps, domain, or live publish changes were performed.
