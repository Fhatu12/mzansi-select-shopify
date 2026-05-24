# Slice 21GH — Shopify Admin UI Catalogue Publish Recovery

**Date:** 2026-05-24  
**Store:** `dropshippoc.myshopify.com`  
**Live theme:** `151207542967` (Mzansi Select MVP Preview)  
**Repo:** `/home/fhatu/dev/mzansi-select-shopify`  
**Execution:** Codex-only (no browser automation tools available in this environment)  

## Goal

Use Shopify Admin UI (bulk actions) to make the current products available on the **Online Store** sales channel, without changing product list or prices.

## Constraints / Safety Rules

- Keep product list exactly as-is.
- Keep all prices exactly as-is.
- No deletes, no imports/sync, no media uploads.
- Do not change titles/descriptions (unless separately approved).
- Do not enable checkout/payment/customer flows.
- Do not mark Supplier verified.

## Important Note (Blocking Constraint)

Codex does not have access to a browser automation tool in this environment, so it cannot click through Shopify Admin UI directly.

This slice therefore provides a **manual Admin UI runbook** for the Product Owner to execute, plus fields to record what happened and the storefront results.

## Admin UI Runbook (Product Owner Performs)

### 1. Login (manual)

- Open Shopify Admin for `dropshippoc.myshopify.com`.
- If login/MFA is required, complete it manually.
- Do not share or paste credentials into chat.

### 2. Products list (confirm baseline)

1. Go to **Products**.
2. Confirm total product count is **40** (or otherwise record the current count).
3. Optional: sort by **Newest** to confirm list is the current CJ/DSers baseline.

### 3. Bulk availability: Online Store

Goal: ensure all current products are available on **Online Store**.

1. Select all products (use “Select all” across pages if Shopify offers it).
2. Use one of the following Shopify bulk actions (wording may vary):
   - **Set as active** (only if Status is blocking availability)
   - **Make products available** / **Manage sales channels** / **Manage availability**
3. In the sales channel selection:
   - Enable **Online Store** only.
   - Do not enable other channels unless already required for internal operations.
4. If Shopify shows a scheduled publish date:
   - publish now (Online Store only), only if this is clearly the reason products are not visible.
5. Save/apply changes.

### 4. Spot-check a few products

Pick 5 products and confirm inside each product record:

- Status = **Active**
- Sales channels and apps includes **Online Store**
- Variant exists (at least one)
- Price looks unchanged (do not edit)

### 5. Wait for indexing

- Wait 2 to 5 minutes.
- Refresh the Products page once.

## Storefront Verification (Unlocked Session Required)

In a fresh browser tab (storefront unlocked as needed):

- `/collections/all`
- `/search?q=organiser&type=product`
- Open at least 5 PDPs from product cards/links

Confirm:

- `/collections/all` shows product cards/links (not zero)
- search returns results when query matches the catalogue (as applicable)
- PDPs return 200 (no 404)
- prices display as-is
- catalogue-only safety remains (no Add to Cart/cart-add/quick-add/dynamic checkout)

## Results Capture (Fill In After Manual Run)

### Admin UI action performed

- Product count observed in Admin: ___
- Bulk action used (exact wording): ___
- Online Store enabled via (menu path): ___
- Any scheduled publishing cleared? (yes/no): ___
- Any warnings/errors shown by Shopify: ___

### Storefront results

| Route | Result (PASS/FAIL) | Notes |
|---|---|---|
| `/collections/all` |  |  |
| `/search?q=organiser&type=product` |  |  |
| 5 PDPs open (200) |  |  |
| No Add to Cart/cart-add/quick-add/dynamic checkout |  |  |

## Stop Condition / Escalation

If products still do not appear on `/collections/all` and `/search` after the Admin UI availability bulk action:

- Stop further mutations.
- Escalate to Shopify Support as an Online Store listing/indexing/catalogue availability issue (CJ/DSers/testing side-effects possible).
- Use Slice 21GD evidence: Admin API shows `ACTIVE` + published, but `onlineStoreUrl` remains null for all products.

**21GH verdict:** _(to be set after Product Owner runs the Admin UI steps)_.

