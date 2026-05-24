# Slice 21GD — Automated Catalogue Availability Recovery

**Date:** 2026-05-24  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `151207542967` (Mzansi Select MVP Preview)  
**Repo:** `/home/fhatu/dev/mzansi-select-shopify`  
**Execution:** Codex-only  

## Goal

Recover storefront catalogue browseability for the current Product Owner CJ/DSers baseline products (without changing the product list or any prices).

## Hard Rules (Product Owner)

- Product list must remain unchanged.
- All prices must remain unchanged.
- No deletes, no imports/sync, no media uploads.
- No checkout/payment/customer-flow enablement.
- Do not mark Supplier verified.

## Pre-check

- `artifacts/` is gitignored.
- `tools/catalogue/` remains untracked (must not be committed).
- No theme publish or full theme sync planned.

## Immutable Baseline Snapshot (Before)

**Evidence folder (not committed):**
- `artifacts/qa/slice-21gd-automated-catalogue-availability-recovery/20260524-114204/`

**Admin API snapshots (not committed):**
- `products-before.json`
- `product-ids.tsv`

**Counts (before):**
- Product count: **40**
- Variant prices captured: **295** variant prices

**Key baseline findings (before):**
- `status: ACTIVE` for all products.
- Publication state: all products report `isPublished: true` to **Online Store**.
- All products returned `onlineStoreUrl: null` despite being published.
- Tags: **all 40 products had empty tag sets**.

## Online Store Publication Identified

- **Online Store publication ID used:** `gid://shopify/Publication/169105293495`

## Recovery Plan (Before Mutation)

Planned minimal, safe mutations that do not alter prices or product list:

1. Add catalogue safety tags to all products:
   - `non-purchasable`
   - `price-to-confirm`
2. Do **not** change:
   - price(s)
   - title/description
   - media
   - inventory
   - variants
   - vendor/type

Reason: previous slices showed tag-based gating could leak; these tags restore a consistent safety posture while we troubleshoot visibility/indexing.

## Bounded Recovery Mutations Applied

### 1. Add safety tags to all 40 products

Mutation used:
- `productUpdate(input: { id, tags: [...] })`

Applied tags (exact):
- `non-purchasable`
- `price-to-confirm`

**Evidence (not committed):**
- `mutations-tags.log`

**Result:**
- No `userErrors` returned for any of the 40 updates.

## Post-write Admin Verification (After)

**Admin API snapshot (not committed):**
- `products-after.json`

**Counts (after):**
- Product count: **40** (unchanged)

**Price invariants (after):**
- Variant prices diff: **no changes detected** (`prices-before.json` == `prices-after.json`)

**Tag verification (after):**
- Products missing `non-purchasable`: **0**
- Products missing `price-to-confirm`: **0**

**Visibility signal (after):**
- Products still report `onlineStoreUrl: null` (published to Online Store): **40**

## Storefront Smoke Verification

Storefront password lock prevents non-interactive smoke verification (password cookie must not be captured/stored in automation).

**Status:** blocked for automated verification.

Recommended manual routes to re-check (unlocked session):
- `/collections/all`
- `/search?q=organiser&type=product`
- 5 PDPs (open from `/collections/all` links once visible)

## Outcome

- **Product list:** unchanged.
- **Prices:** unchanged.
- **Safety tags:** restored for all current products.
- **Storefront visibility blocker remains:** Admin still returns `onlineStoreUrl: null` for all products even though publication state says published.

This indicates the “0 products on `/collections/all` + 0 search results” symptom is likely not solved by republish toggles or tags alone, and may be due to:
- Shopify Online Store listing/indexing/catalogue availability state, or
- a channel/catalogue/market restriction not surfaced in our current query shape, or
- CJ/DSers/testing side-effects on product listing availability.

## Next Recommendation (Stop Condition Applied)

Per approval, **stop mutating** once it’s clear further publish/tag changes are not resolving visibility.

Next steps:
1. Escalate as a Shopify Online Store listing/indexing/catalogue availability issue with evidence:
   - `products-before.json` and `products-after.json` show `ACTIVE` + published, but `onlineStoreUrl` remains null for all products.
2. If Shopify Support asks for checks:
   - confirm in Admin UI whether “Online Store” sales channel is actually ticked for multiple products
   - confirm no market/catalogue restriction is blocking Online Store
3. Only after root cause is identified, consider further bounded product mutations (if separately approved).

**21GD verdict:** PASS WITH NOTES (bounded safety-tag recovery completed; visibility/indexing blocker persists).

