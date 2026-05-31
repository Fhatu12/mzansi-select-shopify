# Slice 21HO-WIN - Top Wishlist Captured Items Inspection

Date: 2026-05-31
Environment: Windows Playwright run against live storefront (`https://mzansiselect.myshopify.com`)
Theme under test: `Mzansi Select MVP Restored #162429075681`

## Scope and Safety
- No Shopify Admin mutations performed.
- No product/price/media/domain/app/checkout changes made.
- No theme push performed.
- Only storefront UI interactions and `localStorage` key `mzansi-wishlist-v1` inspected.

## Actions Executed
1. Opened storefront home page.
2. Cleared only `localStorage` key `mzansi-wishlist-v1`.
3. Added wishlist items via visible heart buttons from:
   - Homepage/card
   - `/collections/all`
   - PDP heart (`/products/17cm-labubu-mini-plush-toy-multiple-styles-clothing-set-labubu-outfit-accessories-trendy-play-clothing-labubu-clothes-gift`)
4. Inspected `localStorage` key structure/content.
5. Clicked top/header saved-items control.
6. Re-tested after refresh.
7. Rechecked in mobile viewport.

## Captured Products Attempted
- Home/card heart click: selector `[data-wishlist-toggle]`
- Collection heart click: selector `[data-wishlist-toggle]` on `/collections/all`
- PDP heart click: selector `[data-wishlist-toggle]` on product page above

## localStorage Verification
Key: `mzansi-wishlist-v1`

Observed structure:
- JSON array of object(s)
- Object keys observed: `handle`, `title`, `url`
- No stable product `id` captured in observed item

Observed behavior:
- Key exists after wishlist interaction.
- Value contains meaningful fields (`handle`, `title`, `url`), but only one saved item persisted at a time in test runs.
- Additional heart actions did not accumulate to a multi-item list; latest state resolved to a single entry.
- After refresh, key persisted but was reset to empty array (`[]`) in this run, indicating state loss.

## Header / Top Wishlist Click Result
Clicked UI:
- Selector: `button[aria-label*="saved" i]`
- Visible text: none

Navigation/result:
- Destination URL before click: `https://mzansiselect.myshopify.com/`
- Destination URL after click: `https://mzansiselect.myshopify.com/`
- No route navigation occurred.

Saved-items view:
- No dedicated saved-items route/view opened.
- Behavior appears to be header state/control only (count/indicator/modal/state), not a stable saved-items page.
- No reliable full saved-products listing was verified as a standalone view.

Mobile check:
- Same top saved button found (`button[aria-label*="saved" i]`)
- Same behavior: no navigation; remains on home URL.

Persistence check:
- After refresh, wishlist state did not retain expected saved item list in this run.
- Re-clicking top saved control showed same non-navigation behavior.

## Verdict
FAIL

Reason:
- Header/top wishlist does not open a clear usable saved-items page.
- Wishlist capture did not retain a stable multi-item saved list through refresh.
- Behavior risks misleading users because saved interactions do not map to a persistent, browsable saved-items experience.

## Recommendation
- Fix header saved control to route to a real saved-items page/view, or clearly implement and preserve an in-place saved-items drawer/modal.
- Ensure `mzansi-wishlist-v1` accumulates distinct products and persists across refresh.
- Keep `handle`, `title`, `url`; add stable identifier (`id`/variant id) for robust rendering/removal.
