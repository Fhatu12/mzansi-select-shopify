# Slice 21HK - AutoDS Product Reset Checkpoint

Date: 2026-05-31

## Objective
Record Product Owner decision to replace the current live catalogue with a fresh AutoDS-driven product set, and preserve a pre-reset catalogue snapshot before any deletion/rebuild execution.

## Snapshot source and archive
- Public source: `https://mzansiselect.myshopify.com/products.json?limit=250`
- Archive file: `artifacts/catalogue/slice-21hk-current-products-before-autods-reset.json`
- Snapshot product count: **43**

## Current departments and collection routes (pre-reset baseline)
- The Retro Vault: Consoles & Classics: `/collections/the-retro-vault-consoles-classics`
- Games & Toys: `/collections/games-toys`
- Tech Accessories: `/collections/tech-accessories`
- Office & Desk: `/collections/office-desk`
- Kitchen & Storage: `/collections/kitchen-storage`
- Home & Living: `/collections/home-living`

## Checkpoint decisions
- Product Owner decision captured: current live catalogue will be replaced by fresh AutoDS products.
- Slice 21HI/21HJ copy cleanup and handle-reconciliation stream is now paused/obsolete against the outgoing catalogue baseline.
- Current product-to-department mapping is temporary baseline only and must be recalculated after AutoDS import completes.

## Safety and scope confirmation
- No product deletions were performed.
- No product/price/content changes were performed.
- No collection changes were performed.
- No AutoDS install/config was performed.
- No checkout/payment changes were performed.
- No theme files were pushed.
- Artifact retained under `artifacts/` and intentionally left uncommitted.
