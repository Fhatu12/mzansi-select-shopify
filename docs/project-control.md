# Project Control Update - Slice 21HC-WIN

Date: 2026-05-28

## Objective
Resolve live 404s for collection routes:
- /collections/retro-vault-consoles-classics
- /collections/games-toys

## Execution summary
- Confirmed live theme remained Mzansi Select MVP Restored.
- Audited collection handles via Admin GraphQL; both are missing.
- Attempted to create both approved manual collections with exact handle/title/description.
- Mutation blocked by access control: missing write_products scope in current CLI auth.
- Verified route status remains 404 for both target routes.
- Ran regression checks on home, all collections, search, and one PDP; all passed.

## Decision
Status: blocked.
Recommendation: fix first by granting appropriate Admin/API scope and rerunning collection create/publish step.
