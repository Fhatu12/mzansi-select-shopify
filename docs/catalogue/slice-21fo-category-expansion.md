# Slice 21FO: Category Expansion Pass

**Scope:** add two approved catalogue categories as Shopify collections and minimal navigation entry points only.

## Approved collections
- `retro-vault-consoles-classics`
- `games-toys`

## Collection creation
- Created Shopify custom collections in admin only, with approved titles and handles.
- No products were added to either collection.
- Collections were confirmed as existing in the target store.

## Theme/navigation changes
- Updated `sections/category-strip.liquid` to add homepage category strip entries for:
  - The Retro Vault: Consoles & Classics
  - Games & Toys
- Updated `sections/primary-navigation.liquid` to add department menu and mobile drawer entries for the same categories.
- Updated `sections/main-collection.liquid` to render an honest empty collection state when a collection has no products:
  - badge: `Coming soon`
  - title: `Category being prepared`
  - description: `This category is being prepared for the public catalogue. Check back soon for its first products.`

## Routes tested
- Route entry points were added for:
  - `/collections/retro-vault-consoles-classics`
  - `/collections/games-toys`

## Empty/deferred state
- If the collections have no approved products yet, the collection page shows honest deferred wording and no product cards.
- No fake products, placeholder product cards, generated products, or demo products are rendered.

## Commerce safety result
- Preserved catalogue-only commerce gate.
- No Add to Cart, cart/add, quick-add, dynamic checkout, or checkout/payment path was introduced.
- No Supplier verified claim was added.
- No checkout/payment/customer-flow enablement was changed.

## Launch blockers remaining
- Controlled preview/public launch remains blocked by existing pilot safety gates:
  - no customer access approval
  - no checkout/payment enablement
  - no product import/sync
  - no app install
  - no media upload
  - no Supplier verified status
  - no price, inventory, delivery, warranty, stock, or supplier-claim changes

## Next owner
- Product Owner

## Live push and verification
- Pushed to live theme `Mzansi Select MVP Preview` (#151207542967).
- Verified live routes returned HTTP 200 for:
  - `/`
  - `/collections/retro-vault-consoles-classics`
  - `/collections/games-toys`
  - `/search?q=organiser&type=product`
- Store is password-protected, so the public storefront page content is gated behind the Shopify password screen.
- Verified the new section code contains honest empty-state logic for empty collections and no fake/demo product markup.
- No Add to Cart, cart/add, quick-add, dynamic checkout, or Supplier verified markers were detected in the raw page HTML of the live routes.

## Notes
- `artifacts/` remains ignored and uncommitted.
- `tools/catalogue/` remains untracked and uncommitted.
