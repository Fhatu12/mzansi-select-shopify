# Slice 21IA-O - Homepage preview context resolution

Date: 2026-06-04

## Objective
Resolve the mismatch between prior automated homepage QA showing stale preview wording and current live-theme source that had already been cleaned in Slice 21IA-M.

## Pre-check
- `git status --short --branch`: `## master...origin/master [ahead 1]` with untracked `tools/catalogue/`
- `shopify theme list --store mzansiselect.myshopify.com` confirmed live theme `Horizon` `#158396285153`
- Latest docs baseline `b788dce` is already present in history and pushed; local branch is newer than that baseline

## Root cause classification
- **C** - verification/request context previously saw stale homepage HTML while current live theme source, live settings, and fresh clean-browser/live-request contexts are clean

## Offending source/context found
- Offending active homepage source/settings context: **no**
- Preview copy still exists in an unused section source file:
  - `sections/promo-banner-split.liquid`
- But that section is **not** referenced by the active pulled live homepage template:
  - `/tmp/mzansi-21iao-live/templates/index.json`

## Exact locations checked
- Repo source:
  - `templates/index.json`
  - `templates/*.json`
  - `sections/`
  - `snippets/`
  - `layout/`
  - `config/settings_data.json`
  - `config/settings_schema.json`
  - `locales/`
  - `blocks/`
  - customer-facing text hits in `assets/`
- Pulled live theme temp copy:
  - `/tmp/mzansi-21iao-live/templates/index.json`
  - `/tmp/mzansi-21iao-live/config/settings_data.json`
  - `/tmp/mzansi-21iao-live/sections/promo-banner-split.liquid`
  - `/tmp/mzansi-21iao-live/sections/feature-tile-grid.liquid`
  - `/tmp/mzansi-21iao-live/sections/announcement-topbar.liquid`
  - `/tmp/mzansi-21iao-live/sections/trust-bar.liquid`

## Findings
- Repo search found:
  - `sections/promo-banner-split.liquid` still contains preview-era copy
  - `sections/feature-tile-grid.liquid` already contains `Modern Living Collection`
  - `templates/index.json` references `feature-tile-grid` and does **not** reference `promo_banner`
- Pulled live theme confirmed the same:
  - active live `templates/index.json` includes:
    - `hero_collage`
    - `category_strip`
    - `best_sellers`
    - `new_arrivals`
    - `kitchen_storage`
    - `retro_vault_showcase`
    - `games_toys_showcase`
  - active live `templates/index.json` does **not** include `promo_banner`
  - live `feature-tile-grid.liquid` renders `Modern Living Collection`
- Pulled `config/settings_data.json` did not expose an alternate active homepage section order invoking `promo_banner`

## Public homepage render comparison

### Plain desktop request
- URL: `/`
- status: `200`
- preview wording present: `no`
- `Modern Living Room Collection` present: `no`
- `Modern Living Collection` present: `yes`
- visible theme markers:
  - `template--21373507961057__hero_collage`
  - `template--21373507961057__category_strip`
  - `template--21373507961057__best_sellers`
  - `template--21373507961057__new_arrivals`
  - `template--21373507961057__kitchen_storage`
  - `template--21373507961057__retro_vault_showcase`
  - `template--21373507961057__games_toys_showcase`
- content type: normal HTML

### Cache-busted desktop request
- URL: `/?cacheBust=21iao`
- status: `200`
- preview wording present: `no`
- `Modern Living Room Collection` present: `no`
- `Modern Living Collection` present: `yes`
- theme markers matched the cleaned active homepage section set
- content type: normal HTML

### Plain mobile request
- URL: `/`
- status: `200`
- preview wording present: `no`
- `Modern Living Room Collection` present: `no`
- `Modern Living Collection` present: `yes`
- theme markers matched the cleaned active homepage section set
- content type: normal HTML

### Cache-busted mobile request
- URL: `/?cacheBust=21iao`
- status: `200`
- preview wording present: `no`
- `Modern Living Room Collection` present: `no`
- `Modern Living Collection` present: `yes`
- theme markers matched the cleaned active homepage section set
- content type: normal HTML

### Fresh Playwright browser context
- URL: `/?cacheBust=21iao-playwright`
- status: rendered normally
- preview wording present: `no`
- `Modern Living Room Collection` present: `no`
- `Modern Living Collection` present: `yes`
- section markers matched the cleaned active homepage section set

## Decision
- Root cause A not proven: no missed active source/settings file was found.
- Root cause B not proven: no alternate homepage template/market/context was found in checked live source/settings.
- Root cause D not proven: pulled live template/settings did not show stale customizer homepage wiring.
- Root cause E partially possible for the earlier 21IA-N run, but the stronger classification is **C** because both fresh HTTP requests and a fresh Playwright browser context are now clean.

## Theme/source changes
- No theme source change was made in this slice.
- No theme push was performed.

## Files changed
- `docs/qa/slice-21ia-o-homepage-preview-context-resolution.md`
- `docs/project-control.md`

## Files pushed
- None to Shopify theme

## Exact push command
- None; no theme files changed in Slice 21IA-O

## Verification result
- Homepage preview wording removed on current verified live render contexts: `yes`
- `Modern Living Room Collection` absent: `yes`
- `Modern Living Collection` visible: `yes`
- Sampled PDP Add to Cart visible: `yes`
- Cart opens: `yes`
- Checkout button visible from cart: `yes`
- No Liquid errors observed on checked routes: `yes`
- Payment/provider settings changed: `no`

## Automated QA trust assessment
- Automated QA **can be trusted** for this homepage wording check **only when**:
  - the browser context is fresh/clean, and
  - the request is not reusing stale local cache/state
- The earlier stale 21IA-N homepage result should **not** be treated as current source-of-truth because:
  - active live source/settings are clean
  - current plain/cache-busted desktop/mobile requests are clean
  - a fresh Playwright browser context is also clean

## Manual incognito launch-check instruction
- Open a fresh incognito/private window.
- Visit:
  - `https://mzansiselect.myshopify.com/?cacheBust=21iao-manual`
- Confirm:
  - no `PREVIEW HIGHLIGHT`
  - no `Tech & Home Preview Picks`
  - no `Browse preview picks`
  - no `Modern Living Room Collection`
  - `Modern Living Collection` is visible in New Arrivals

## Remaining blockers
- No active homepage source mismatch remains proven in this slice.
- Remaining caution: if a future automated run reports stale homepage preview wording again, treat it as a local browser/session cache artifact unless a fresh live pull plus fresh clean request/browser check reproduces it.
