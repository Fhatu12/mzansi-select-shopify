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

---

## Slice 21AJ — Ubuntu-Dev tooling readiness (2026-05-15)

### Node.js install method
**nvm** (`$HOME/.nvm`, official install script v0.40.4 if missing; `~/.bashrc` already contained nvm initialization — no duplicate appended).

### Tool validation (Ubuntu-Dev, after nvm `use --lts`)
| Tool | Result |
|------|--------|
| **node** | **v24.15.0** (nvm LTS; `nvm which current` → `$HOME/.nvm/versions/node/v24.15.0/bin/node`) |
| **npm** | **11.12.1** |
| **git** | **git version 2.43.0** |
| **Shopify CLI** | **3.94.3** — `shopify version` only; **no** other Shopify commands run |
| **Playwright** | **Not locally validated** — repo has **no** `package.json`; `npx --no-install playwright --version` failed (no local `playwright` package). **No** `npm install`, browser install, or tests run in this slice. |

### Repo tooling
- Theme-only repo: **no** `package.json` / `package-lock.json`.
- Present: `.theme-check.yml`; standard theme dirs (`assets/`, `config/`, `layout/`, `locales/`, `sections/`, `snippets/`, `templates/`).
- **No** `shopify.theme.toml` / `theme.toml` at repo root (shallow scan).

### Zone.Identifier cleanup
- **Before:** 2 untracked files (`mzansi-select-interactive-elements.txt:Zone.Identifier`, `mzansi-select-mobile.html:Zone.Identifier`).
- **Action:** deleted both (untracked hygiene only).
- **After:** none found.

### Sensitive/runtime scan (maxdepth 4)
- **No** `.env`, `.env.*`, `storageState.json`, `*.har`, `node_modules`, or `.auth` under repo root scan.

### Live Shopify / Admin / storefront
- **No** live Shopify, Admin, storefront, theme list/pull/push/publish/dev, authentication, app install, import/sync, staging, checkout/payment/customer-access, or supplier/launch approvals in this slice.

### Ubuntu-Dev active working copy recommendation
**Conditional — recommend Product Owner acceptance before switch.** Node.js LTS and Shopify CLI version check are ready on Ubuntu-Dev. **Remaining notes:** Playwright not validated without a project `package.json`/local dependency; ensure interactive shells source nvm before theme/CLI work (Cursor-embedded `node` on PATH can differ from nvm until `nvm use`). Windows repo **`D:\dev\mzansi-select-shopify`** retained unchanged.

### Evidence (local; not committed)
`artifacts/devops/slice-21aj-ubuntu-dev-tooling-readiness/20260515-114721/`
