# Slice 21IA-A-WIN - Hide unavailable desk drawer organiser from live storefront

Date: 2026-06-02

## Objective
- Remove the one unavailable live product from the public Online Store publication only.
- Preserve the underlying product record and all product content.

## Scope and safety
- Windows-only execution
- Only approved Admin mutation: `publishableUnpublish`
- No changes to product title, description, price, variants, inventory, media, shipping, payment providers, collections beyond Online Store publication removal, theme files, or domain
- No payment submitted
- `tools/catalogue/` left untracked

## Target product
- Title:
  - `23 Pack Desk Drawer Organizers, 4 Sizes Office Desk Organizer Tray Bins, Office Organizer with Non-Slip Pads for Home Organization and Storage`
- Handle:
  - `23-pack-desk-drawer-organizers-4-sizes-office-desk-organizer-tray-bins-office-organizer-with-non-slip-pads-for-home-organization-and-storage`
- Product ID:
  - `gid://shopify/Product/9503913869537`
- Status before mutation:
  - `ACTIVE`
- Online Store URL before mutation:
  - `https://mzansiselect.myshopify.com/products/23-pack-desk-drawer-organizers-4-sizes-office-desk-organizer-tray-bins-office-organizer-with-non-slip-pads-for-home-organization-and-storage`

## Pre-checks
- Shopify CLI store auth verified against Admin store:
  - `sikhwarigroupdev.myshopify.com`
- Public live route header confirmed current live theme remained:
  - `Horizon #158396285153`
- Read-only product audit confirmed:
  - exact unique product match
  - `publishedOnPublication: true`
  - `resourcePublicationsCount: 1`

## Online Store publication
- Publication ID:
  - `gid://shopify/Publication/183141630177`
- Publication name:
  - `Online Store`

## Mutation used

```graphql
mutation PublishableUnpublish($id: ID!, $input: [PublicationInput!]!) {
  publishableUnpublish(id: $id, input: $input) {
    publishable {
      ... on Product {
        id
        handle
        resourcePublicationsCount(onlyPublished: true) { count }
        publishedOnPublication(publicationId: "gid://shopify/Publication/183141630177")
        unpublishedPublications(first: 10) { nodes { id name } }
      }
    }
    userErrors {
      field
      message
    }
  }
}
```

Variables used:

```json
{
  "id": "gid://shopify/Product/9503913869537",
  "input": [
    {
      "publicationId": "gid://shopify/Publication/183141630177"
    }
  ]
}
```

## Mutation result
- `userErrors`: none
- Product hidden/unpublished from Online Store: yes
- Post-mutation publication state:
  - `resourcePublicationsCount: 0`
  - `publishedOnPublication: false`
  - `unpublishedPublications` includes `Online Store`

## Public storefront verification
- Visible product count before:
  - `48`
- Visible product count after:
  - `47`
- Target handle still in `/products.json?limit=250` after mutation:
  - no
- Target PDP result after mutation:
  - themed `404`
  - HTTP status `404`
  - no Liquid errors detected

## Known-good product sanity
- Verification product:
  - `happy-acrylic-pearl-charm-beaded-bracelet-set`
- PDP result:
  - status `200`
  - Add to Cart visible: yes
  - `/cart/add` form present: yes
  - stale `pdp-catalogue-lock.js` present: no
  - dynamic checkout absent/disabled: yes

## Checkout sanity
- Cart cleared: yes
- Add to Cart worked: yes
- Cart line item visible: yes
- Quantity visible: yes
- Subtotal visible: yes
- Checkout button visible: yes
- Shopify checkout opened: yes
- Stopped before payment: yes

## Payment visibility
- Payflex visible: yes
- PayPal visible: yes
- PayFast visible: no
- Peach visible: no
- Real payment submitted: no

## Regression checks
- `/`: `200`
- `/collections/all`: `200`
- `/pages/faq`: `200`
- `/pages/contact`: `200`
- `/policies/shipping-policy`: `200`
- `/policies/refund-policy`: `200`
- support links present on sampled pages: yes
- Liquid errors detected: no

## Safety confirmation
- Product content changed: no
- Product price changed: no
- Product media changed: no
- Product inventory changed: no
- Product variants changed: no
- Shipping changed: no
- Payment providers changed: no
- Theme files changed: no
- Payment submitted: no

## Verdict
- `21IA-A`: `pass`

## Remaining blockers
- None from this target product after storefront removal.

## Raw evidence
- `artifacts/slice-21ia-a/public-feed-before.json`
- `artifacts/slice-21ia-a/public-feed-after.json`
- `artifacts/slice-21ia-a/publishable-unpublish-response.json`
- `artifacts/slice-21ia-a/verification.json`
- untracked runner:
  - `tools/catalogue/run-slice-21ia-a-win.cjs`
