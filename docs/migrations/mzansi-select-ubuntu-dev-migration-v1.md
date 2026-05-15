# Mzansi Select Ubuntu-Dev Migration Parity Report

## Source path
D:\dev\mzansi-select-shopify

## Target path
/home/fhatu/dev/mzansi-select-shopify

## Migration method
Safe copy preserving `.git` metadata (robocopy staging with exclusions, then WSL copy). No usable git remote was configured on the Windows source; remote clone was not used.

## Source git status
```
## master
?? zadropshipping/
```

## Target git status
```
## master
?? mzansi-select-interactive-elements.txt:Zone.Identifier
?? mzansi-select-mobile.html:Zone.Identifier
```

## Branch
master (source and target)

## Latest commit parity
PASS — source and target HEAD match:

- `211be9f297189de8332e28b0215f559a2b65efa8`
- `211be9f docs: accept cj draft row qa`

## Remote parity
PASS — neither source nor target has remotes configured (local-only repo).

## Untracked / ignored handling
- `artifacts/`: Not copied to Ubuntu-Dev (remains on Windows source as local ignored evidence; gitignored via `.gitignore`).
- `zadropshipping/`: Not copied to Ubuntu-Dev (remains on Windows source as local untracked reference; not committed).
- Sensitive/runtime files excluded: `.env`, `.env.*`, `node_modules`, `.cache`, `.next`, `dist`, `build`, `.auth`, `playwright-report`, `test-results`, `storageState.json`, `*.har`, browser profiles.
- Windows `Zone.Identifier` alternate data streams copied as untracked `*:Zone.Identifier` files on Ubuntu; safe to delete locally; do not commit.

## Tool validation
- node: NOT INSTALLED in Ubuntu-Dev (`node: command not found`)
- npm: 11.9.0 (present; depends on node for project scripts)
- git: git version 2.43.0
- Shopify CLI: NOT FUNCTIONAL (`exec: node: not found` via Windows npm shim path)
- Playwright: Version 1.60.0 (via `npx playwright --version` in repo)

## Parity result
PASS WITH NOTES — git HEAD, branch, tracked file count (73), `docs/project-control.md`, and `docs/pilot/` present on target. `artifacts/` and `zadropshipping/` intentionally not migrated. No sensitive/runtime paths found in shallow scan. Ubuntu-Dev toolchain incomplete (Node.js required before theme/Shopify CLI work).

## Rollback path
- Windows source repo remains intact at `D:\dev\mzansi-select-shopify`.
- If Ubuntu target parity is rejected, keep using Windows repo and remove or archive `~/dev/mzansi-select-shopify` only after Product Owner approval.
- Do not delete Windows working copy until Product Owner accepts migration parity and explicitly approves cleanup.

## Blockers
- Node.js not installed in Ubuntu-Dev (blocks npm project scripts and Shopify CLI).
- Shopify CLI non-functional until Node is installed in WSL.
- Product Owner acceptance pending before Ubuntu-Dev becomes active working copy.

## Final recommendation
Accept migration parity for repository content and git state. Install Node.js LTS in Ubuntu-Dev before switching active development. Retain Windows repo until Product Owner explicitly accepts Ubuntu-Dev as primary working copy. Remove untracked `*:Zone.Identifier` files on Ubuntu when convenient (optional hygiene).
