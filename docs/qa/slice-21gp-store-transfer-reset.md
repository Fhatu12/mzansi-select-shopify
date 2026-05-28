# Slice 21GP — Reset transferred-store assumption and start new-store rebuild plan

**Date:** 2026-05-28  
**Owner:** Product Owner / QA  
**Execution:** Codex only (docs + state reset)  
**Store:** `sikhwarigroupdev.myshopify.com`

## Decision

Treat the current environment as a **new paid Shopify store rebuild**.
Stop treating this as a transferred-catalogue recovery from the old dev/test store.

## Root cause

- The old store in `fhatu.sikhwari@gmail.com` is a Shopify **development/testing store** and cannot be transferred as a production catalogue migration source in the assumed path.
- The current paid store (`sikhwarigroupdev.myshopify.com`) is a **separate store/account context**.
- Catalogue products expected from the old store are not present in this paid store.
- This directly explains current storefront symptoms in the paid store context:
  - `/collections/all` shows `0` products.
  - sampled PDP routes return `404`.

## Store state (confirmed)

- Store: `sikhwarigroupdev.myshopify.com`
- Live theme: `Horizon` `#158396285153`
- Draft theme: `Mzansi Select MVP Restored` `#162429075681` (`unpublished`)
- Password protection: **still enabled**

## What is now obsolete

The prior “transferred catalogue recovery” troubleshooting path for this paid store context is now closed as an **invalid assumption**. This includes treating visibility/404 outcomes as if product rows had already migrated from the old development store.

## Active plan posture

- Keep draft theme `#162429075681` unpublished.
- Keep storefront password enabled.
- Do not enable checkout/payment/customer flows.
- Product baseline rebuild/import is a **separate, explicit approval step**.

## Controlled next-step checklist

1. Establish a product baseline in the new paid store (separate approval).
2. Re-run draft preview rendered QA only after baseline exists.
3. Keep catalogue-only safety posture during preview:
   - no cart/add, no quick-add, no dynamic checkout, no checkout/payment path.
4. Publish draft theme only after:
   - product baseline exists, and
   - preview QA passes.
5. Remove password only after public smoke QA pass.

## Rebuild options for product baseline (separate approval required)

- **Option A:** manual CJ/DSers product add (small controlled batch).
- **Option B:** controlled CSV export/import (if source export is available and approved).
- **Option C:** later approved DSers/CJ app installation route.

## 21GP verdict

**PASS** — root-cause reset documented; incorrect transfer-recovery assumption closed; new paid-store rebuild path prepared.
