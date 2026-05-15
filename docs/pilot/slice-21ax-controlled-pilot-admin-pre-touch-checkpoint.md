# Slice 21AX — controlled-pilot Admin pre-touch checkpoint

**Document type:** Product / DevOps read-only checkpoint  
**Prepared:** 2026-05-15  
**Owner:** Senior Full-Stack Software Architect  
**Scope:** Read-only pre-touch checkpoint only. No Shopify Admin mutation, no theme change, no publish, no product import/sync, and no customer/order/payment access.

## 1. Purpose

Capture the current pre-write baseline for the exact three controlled-pilot CJ products and the approved preview theme so that any later bounded Shopify Admin/write proposal can be reviewed against a real read-only snapshot.

This slice does **not** approve or execute any Admin change.

## 2. Current git baseline before inspection

- **Branch:** `master`
- **Commit:** `c8efb4bbebf848379421ea4c7e85241ca369115a`
- **Git status before inspection:** clean (`## master`)

## 3. Exact product boundary confirmed

The read-only checkpoint was limited to exactly these three handles:

1. `beverage-bottle-oil-bottle-handle-holder`
2. `usb-bag-sealer`
3. `foldable-magnetic-phone-holder-desktop-tablet-stand`

No other product rows were inspected for mutation or planning scope.

## 4. Current read-only product state

### 4.1 beverage-bottle-oil-bottle-handle-holder

- **Product ID:** `8572435726519`
- **Admin GID:** `gid://shopify/Product/8572435726519`
- **Status:** `ACTIVE`
- **Online Store publication count:** `1` (`EXACT`)
- **Publication label visible via read-only GraphQL:** `Online Store`
- **Publication state on that publication:** `isPublished=true`
- **onlineStoreUrl:** `null`
- **Observed preview-safe / non-purchasable signals:**
  - tags include `controlled-pilot`, `cj-imported-supplier`, `non-purchasable`, `preview-only`, `price-to-confirm`
  - `tracksInventory=true`
  - `totalInventory=0`
  - first variant `inventoryPolicy=DENY`
  - first variant `availableForSale=false`

### 4.2 usb-bag-sealer

- **Product ID:** `8572435693751`
- **Admin GID:** `gid://shopify/Product/8572435693751`
- **Status:** `ACTIVE`
- **Online Store publication count:** `1` (`EXACT`)
- **Publication label visible via read-only GraphQL:** `Online Store`
- **Publication state on that publication:** `isPublished=true`
- **onlineStoreUrl:** `null`
- **Observed preview-safe / non-purchasable signals:**
  - tags include `controlled-pilot`, `cj-imported-supplier`, `non-purchasable`, `preview-only`, `price-to-confirm`
  - `tracksInventory=true`
  - `totalInventory=0`
  - first variant `inventoryPolicy=DENY`
  - first variant `availableForSale=false`

### 4.3 foldable-magnetic-phone-holder-desktop-tablet-stand

- **Product ID:** `8572435759287`
- **Admin GID:** `gid://shopify/Product/8572435759287`
- **Status:** `ACTIVE`
- **Online Store publication count:** `1` (`EXACT`)
- **Publication label visible via read-only GraphQL:** `Online Store`
- **Publication state on that publication:** `isPublished=true`
- **onlineStoreUrl:** `null`
- **Observed preview-safe / non-purchasable signals:**
  - tags include `controlled-pilot`, `cj-imported-supplier`, `non-purchasable`, `preview-only`, `price-to-confirm`
  - `tracksInventory=true`
  - `totalInventory=0`
  - first variant `inventoryPolicy=DENY`
  - first variant `availableForSale=false`

## 5. Current preview theme checkpoint

- **Preview theme ID:** `151207542967`
- **Preview theme name:** `Mzansi Select MVP Preview`
- **Theme role:** `unpublished`

This confirms the expected preview target remains present and identifiable in existing authenticated CLI tooling.

## 6. Read-only uncertainty and interpretation limits

The current checkpoint is useful, but it does **not** remove all uncertainty:

- `onlineStoreUrl` is `null` for all three products even though each row shows one `Online Store` publication.
- That means the product-publication layer is visible, but this checkpoint does **not** by itself prove a public live exposure path.
- No live publish, visibility mutation, channel mutation, or customer-path widening was attempted in this slice.
- No raw session files, cookies, tokens, or private payloads were inspected or recorded.

## 7. Rollback baseline status

**Rollback baseline: partially captured and materially useful for a later write proposal.**

Captured read-only baseline:

- branch and commit before inspection
- exact three-product scope
- product IDs / GIDs
- current `ACTIVE` status
- current publication count and `Online Store` publication label
- current preview-safe / non-purchasable tags
- current inventory / sellability posture indicators visible via read-only GraphQL
- target preview theme ID / name / role

Still incomplete for a full rollback script:

- no write delta exists yet
- no before/after publication mutation exists yet
- no separately approved Admin export package has been captured in this slice

That incompleteness is expected because **21AX** is a pre-touch checkpoint, not an execution pass.

## 8. Readiness for a later write proposal

**Conditionally ready for a later bounded write proposal, with notes.**

What is now strong enough for the next gate:

- exact three-product scope is confirmed
- target preview theme is confirmed
- current product status and publication metadata are readable through existing authenticated tooling
- current non-purchasable signals remain visible without any write action

What still requires explicit later approval before any write:

- the exact future Admin delta
- the exact rollback method to be used
- any visibility/publication change
- any wording or claim change
- any media enablement
- any checkout/payment/customer-access widening

## 9. Explicit no-write confirmation

Confirmed for **Slice 21AX**:

- no Shopify Admin mutation occurred
- no product visibility/publication state was changed
- no theme publish occurred
- no product import/sync occurred
- no app install occurred
- no media enablement occurred
- no checkout/payment/customer-order enablement occurred

## 10. Recommended next owner

**Product Owner**

The next clean decision is whether to approve a narrowly defined later Admin/write proposal using this checkpoint as the pre-touch baseline, or to hold the pilot in the current preview-safe posture.
