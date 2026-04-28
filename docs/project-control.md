# Mzansi Select Shopify MVP Theme

**Document Type:** Project Control  
**Prepared:** 2026-04-28  
**Owner:** Product Owner  
**Status:** Slice 10.9 docs-only project-control current-state correction completed pending commit  
**Version:** 1.1  
**Source of Truth:** `mzansi-select-theme.html`

## Project name

Mzansi Select Shopify MVP Theme Conversion

## Current State

- Active slice: Slice 10.9 docs-only project-control current-state correction and documentation-control rule setup
- Active owner: Product Owner
- Next owner: Product Manager
- Last accepted slice: Slice 10.7 Contact/About route availability diagnosis
- Last committed slice: Slice 10.7 Contact/About route availability diagnosis (`ae9ac7d`)
- Current blockers:
  - Contact/About route availability remains unresolved
  - `/pages/contact` and `/pages/about` rendered HTTP `404` in authenticated unpublished-preview evidence
  - Launch-readiness and any publish decision are blocked until the required Contact/About page resources are created in Shopify or their existence, handles, visibility, and template assignment are verified
- Deferred items:
  - Slice 10.8 Contact/About store-content setup and preview verification is deferred/incomplete
  - Dynamic product/catalogue wiring remains deferred
  - Product import remains deferred
  - Checkout customization remains deferred
  - Final legal publication remains deferred
- Launch readiness: Blocked by unresolved Contact/About route availability
- Product import status: Not approved and not started
- Shopify push/publish status: No Shopify push approved in this pass; no publish approved; no live theme overwrite approved
- Artifacts policy: `artifacts/` must remain untracked and uncommitted unless separately approved
- Last tracker update: 2026-04-28 during Slice 10.9 docs-only correction
- Tracker status: Updated
- LLD status: Unchanged — no durable product, page-behaviour, catalogue-rule, or launch-criteria change was approved in this pass

## Current active pass

Slice 10.9 docs-only project-control current-state correction and documentation-control rule setup

## Source of truth

The approved frontend source of truth for this project is `D:\dev\mzansi-select-shopify\mzansi-select-theme.html`.

All future Shopify implementation work must preserve the approved visual design and structure represented by this file.

## Documentation-control rules

- No meaningful slice may be accepted as closed unless `docs/project-control.md` is updated or explicitly marked unchanged with a reason.
- Every handoff must include:
  - `Tracker status: Updated / Unchanged / Needs update before next acceptance`
  - `LLD status: Updated / Unchanged / Needs update before next acceptance`
- Product Owner acceptance is blocked when the agreed tracker or living specification is stale.
- `docs/project-control.md` is the live execution-state tracker for this project.
- `docs/lld/mzansi-select-shopify-mvp-theme-v1.md` is the durable living specification for product, page, catalogue, structure, and launch-readiness requirements.
- Update the LLD only when durable product rules, page behaviour, catalogue rules, or launch criteria change; otherwise mark it unchanged with a reason in the handoff.

## Current status

- Documentation extraction pass completed.
- Technical architecture inspection completed.
- Slice 1 foundation implementation completed.
- Slice 2 global chrome refinement completed.
- Slice 2.5 global chrome design/QA fidelity review completed and accepted as PASS WITH NOTES.
- Slice 2.6 docs-only QA closure documentation completed and committed.
- Slice 3 homepage composition foundation completed.
- Slice 3.5 homepage design/QA fidelity review completed and accepted as PASS WITH NOTES.
- Slice 3.6 docs-only homepage QA closure documentation completed and committed.
- Slice 4 collection/category template foundation completed.
- DevOps safe Shopify preview workflow attempted and correctly blocked before Shopify store access because Theme Check returned blocking errors.
- Theme Check blocker fix pass completed.
- DevOps Shopify unpublished preview retry completed.
- Slice 4.7 unpublished preview acceptance closure completed.
- Slice 5 product detail page template foundation completed.
- Slice 5.5 product detail page design/QA fidelity review completed and accepted as PASS WITH NOTES.
- Slice 6 search/results template foundation completed.
- Slice 6.5 search/results design/QA fidelity review completed and accepted as PASS WITH NOTES.
- Slice 6.6 docs-only search/results QA closure documentation completed and committed.
- Slice 7 cart page/drawer foundation implementation completed.
- Slice 7.5 cart page/drawer design/QA fidelity review completed and accepted as PASS WITH NOTES.
- Slice 7.6 docs-only cart QA closure documentation completed and committed.
- Slice 8 legal/support page foundation completed.
- Slice 8.5 legal/support page design/QA fidelity review completed and accepted as PASS WITH NOTES.
- Slice 8.6 docs-only legal/support QA closure documentation completed and committed.
- Slice 9 404 / generic empty-state foundation completed.
- Slice 9.5 404 / generic empty-state design/QA fidelity review completed and accepted as PASS WITH NOTES.
- Slice 9.6 docs-only 404 / generic empty-state QA closure documentation completed and committed.
- Slice 10 full foundation unpublished preview refresh completed and committed at `e91d529`.
- Slice 10.5 / 10.5B authenticated Shopify preview QA evidence capture completed and accepted as PASS WITH NOTES.
- Slice 10.6 docs-only authenticated preview QA closure completed and committed at `5d74ddc`.
- Slice 10.7 Contact/About route availability diagnosis completed and committed at `ae9ac7d`.
- Slice 10.8 Contact/About store-content setup and preview verification is deferred/incomplete and has not been approved for execution in this repo pass.
- Slice 10.9 corrects project-control current-state drift and adds the documentation-control rule set without changing theme/code files.

## Current product state

The repository is a Git-initialized Shopify theme foundation with implementation completed through Slice 9 and unpublished-preview validation recorded through Slice 10.7:

- The approved static HTML source remains unchanged.
- Global chrome, homepage, collection, product, search, cart, legal/support, and 404 foundation work exists in native Shopify theme structure.
- JSON validation has passed for the implemented template set recorded through Slice 10.
- Shopify Theme Check passed with zero blocking errors in the accepted preview-refresh evidence.
- `24` non-blocking `RemoteAsset` warnings remain intentionally deferred.
- Slice 10 refreshed the existing unpublished preview theme `Mzansi Select MVP Preview` (`151207542967`) and kept it `unpublished`.
- Slice 10.5B captured authenticated unpublished-preview evidence for home, collection, product, search, cart, Contact, About, and a missing-route check.
- Contact/About route evidence showed `/pages/contact` and `/pages/about` returning `404`.
- Slice 10.7 confirmed the required theme templates exist locally and in the unpublished preview theme, but Admin-level verification of Shopify page resources was not completed because no existing Admin access token was present in the environment.
- The most likely unresolved issue remains store-content setup or verification outside theme-code scope for this pass.
- No publish, live-theme overwrite, product import, checkout customization, dynamic product/catalogue wiring, or final legal publication has been approved.
- `artifacts/` remains untracked and must not be committed unless separately approved.

## Launch-readiness blockers

- Contact/About route availability remains a launch-readiness blocker.
- Launch-readiness and publish consideration cannot proceed until Contact/About page resources are created or verified in Shopify.
- Required verification includes page existence, page handles, Online Store visibility, and template assignment for the Contact/About resources.
- Slice 10.8 store-content setup and preview verification remains deferred/incomplete, so this blocker is still open.

## Approved execution constraints

- No publish approved.
- No live theme overwrite approved.
- No product import approved.
- No checkout customization approved.
- No dynamic product/catalogue wiring approved.
- No final legal publication approved.
- Contact/About route availability remains unresolved.
- `artifacts/` must remain untracked/uncommitted.

## Preview workflow status

- Slice 4 unpublished preview remains historically accepted against theme `151207542967`.
- Slice 10 refreshed the existing unpublished preview theme `Mzansi Select MVP Preview` (`151207542967`) at `https://dropshippoc.myshopify.com?preview_theme_id=151207542967`.
- Slice 10 confirmed the live theme remained untouched and the refreshed preview theme remained `unpublished`.
- Slice 10.5B captured authenticated route-level preview evidence after manual storefront unlock.
- Slice 10.5B confirmed no Shopify push, publish, live overwrite, product import, checkout customization, or dynamic product/catalogue wiring occurred during evidence capture.
- Shopify publish remains unapproved and launch-readiness remains blocked pending Contact/About page-resource resolution or verification.
- `artifacts/` remains untracked and must not be committed unless separately approved.

## Next approved slice

Slice 11 — 25-product launch catalogue readiness plan

## Scope completed

- Read-only architecture and source-of-truth extraction completed.
- Native Shopify theme foundation implemented through Slice 9.
- Unpublished preview refresh completed through Slice 10.
- Authenticated unpublished-preview evidence capture and docs closure completed through Slice 10.6.
- Contact/About route diagnosis completed through Slice 10.7.
- Slice 10.9 project-control correction completed to align tracker state with the latest Product Owner-approved understanding.

## Decisions made

- `docs/project-control.md` now carries the fixed live Current State block and is the authoritative tracker for execution state.
- Slice 10.6 is treated as accepted and committed.
- Slice 10.7 is treated as completed and committed history.
- Slice 10.8 is explicitly deferred/incomplete rather than implied as complete.
- Contact/About `404` route availability is explicitly recorded as a launch-readiness blocker.
- The next approved slice is Slice 11 for 25-product launch catalogue readiness planning.
- The next owner after this tracker correction is Product Manager.
- The LLD remains unchanged in this pass because no durable product or launch-rule change was approved.

## Risks / unknowns

- Contact/About route availability still cannot be fully resolved from theme files alone.
- Admin-side verification of Shopify page existence, handles, visibility, and template assignment remains pending.
- RemoteAsset warnings remain open by design and are not part of this docs-only correction pass.
- Dynamic product/catalogue wiring, product import, checkout customization, final legal publication, and broader launch-readiness work remain deferred.
- `artifacts/` remains untracked and should not be committed unless separately approved.

## Handoff queue

- Keep `artifacts/` excluded from any commit unless separately approved.
- Preserve the unresolved Contact/About route blocker until store-content setup or verification is completed.
- Do not treat launch-readiness or publish as eligible until Contact/About page resources are created or verified.
- When the next meaningful slice completes, update `docs/project-control.md` or explicitly mark it unchanged with a reason before acceptance.
- Record `Tracker status` and `LLD status` in every handoff.

## Final handoff summary

This Slice 10.9 docs-only pass corrects the live tracker so it reflects the Product Owner-approved project state: theme foundation remains complete through Slice 9, unpublished preview refresh remains complete through Slice 10, authenticated preview evidence and docs closure are treated as completed through Slice 10.6, Contact/About diagnosis is recorded as completed through Slice 10.7, Slice 10.8 store-content setup remains deferred/incomplete, Contact/About `404` route availability is now explicitly a launch-readiness blocker, Slice 11 is recorded as the next approved slice, Product Manager is recorded as the next owner, and `artifacts/` remains untracked/uncommitted.

---

**Footer Standard For This Pass:** Slice 10.9 tracker correction recorded. Live execution state updated, documentation-control rules added, LLD left unchanged for lack of durable requirement change, and `artifacts/` remains untracked and uncommitted.
