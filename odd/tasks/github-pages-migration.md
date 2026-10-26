# GitHub Pages artifact deployment

## Objective
Keep source code on the main development line and publish generated assets through GitHub Actions instead of tracking build output.

## Scope and constraints
- Work on the existing `v1.05-release` branch; preserve the three portfolio commits and legacy `gh-pages` branch.
- Reconcile the npm lockfile, add a main-only Pages workflow, document activation and rollback, and stop tracking generated output.
- Public npm downloads without credentials are authorized. Local lint and no-emit TypeScript checks are authorized.
- Never run a local build. No push, remote settings changes, or deployment is authorized.
- Preserve unrelated changes. The 25 staged `dist/` deletions are part of the authorized cleanup.
- Generated documentation defaults to English. No AI attribution in commits.

## Delivery
- Strategy: ask-on-risk; forecast approximately 220 authored changed lines, excluding generated lockfile/output changes.
- Base: `74174d3`. Use Conventional Commits, one per coherent work unit.
- Native review is enabled by default; assessment/consent outcomes must be recorded without inventing approval.
- Mirror: pending synchronization to Engram topic `odd/github-pages-migration/tasks`.

## Tasks
- [ ] T1 — Reconcile locked dependencies and verify installation, lint and TypeScript without building.
  - Route: delegated; dependency investigation and lockfile writing belong to one worker.
  - Acceptance: lock agrees with the existing manifest; deterministic npm installation succeeds; check failures are explicitly recorded.
  - Checks: `npm ci --ignore-scripts`, `npm run lint`, `./node_modules/.bin/tsc --noEmit --incremental false -p tsconfig.app.json`, `./node_modules/.bin/tsc --noEmit --incremental false -p tsconfig.node.json`, `git diff --check`.
  - Commit: pending.
  - Status: verification passed after authorized narrow provider extraction; leave T1 unchecked until its pending work-unit commit.
  - Environment: Node `v24.13.0`, npm `11.6.2`; empty isolated user/global npm configs and HOME under `/tmp/opencode/t1-npm-vzlkhkv0`, allowlisted environment without inherited authentication variables, public registry `https://registry.npmjs.org`. No project `.npmrc` exists; all lock resolutions use the public registry.
  - Lock reconciliation: `npm install --package-lock-only --ignore-scripts --no-audit --no-fund --registry=https://registry.npmjs.org` exited 0 (`up to date in 18s`). Root dependencies and devDependencies exactly match the unchanged manifest.
  - Dependency delta: 19 package entries added, none removed; only existing version changes are `@eslint/js` 9.39.1 → 9.39.5 and `@eslint-community/eslint-utils` 4.9.0 → 4.10.1. Newly added `typescript-eslint` 8.72.0 satisfies `^8.52.0`; its utils require `@eslint-community/eslint-utils ^4.9.1`. No broad existing dependency upgrades occurred.
  - Installed/locked versions verified: `@eslint/js` 9.39.5, `eslint` 9.39.1, `typescript` 5.9.3, `typescript-eslint` 8.72.0, `@typescript-eslint/utils` 8.72.0, `@eslint-community/eslint-utils` 4.10.1, `vite` 7.2.2.
  - Foreground verification (same npm isolation for install and lint):
    - `npm ci --ignore-scripts --no-audit --no-fund --registry=https://registry.npmjs.org`: exit 0, `added 272 packages in 10s`.
    - Initial RED `npm run lint`: exit 1, 2 errors and 0 warnings. `src/context/LanguageContext.tsx:34:14` and `src/context/ThemeContext.tsx:39:14`: `Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components` (`react-refresh/only-export-components`). Narrow source remediation was subsequently authorized.
    - `./node_modules/.bin/tsc --noEmit --incremental false -p tsconfig.app.json`: exit 0, no diagnostics.
    - `./node_modules/.bin/tsc --noEmit --incremental false -p tsconfig.node.json`: exit 0, no diagnostics.
    - `git diff --check`: exit 0, no diagnostics.
  - Preservation: manifest SHA-256 unchanged; staged index unchanged, including all 25 `dist/` deletions. No build, install lifecycle scripts, native review, commit, or remote Git operation executed.
  - Lint remediation rationale: move providers into component-only `src/context/LanguageProvider.tsx` and `src/context/ThemeProvider.tsx`. Existing context modules retain the singleton contexts, exported types, and unchanged hooks/errors; the English dataset import in `LanguageContext.tsx` is type-only. Update only provider import paths in `src/main.tsx`; no rule disabling or lint configuration changes.
  - Follow-up foreground GREEN: `npm run lint` exited 0 without diagnostics; both exact no-emit TypeScript commands above exited 0 without diagnostics; `git diff --check` exited 0 without diagnostics.
  - Behavior review: extracted provider bodies and hooks/errors match their original source exactly, including initial English state, texts effect, theme localStorage/classes/toggle logic. `src/main.tsx` differs only in its two import paths; StrictMode and provider nesting are preserved. No test framework was introduced.
  - Work unit: lock reconciliation, authorized provider lint remediation, and verification evidence. Rollback boundary: T1 lockfile delta, the two context modules, two new provider modules, main provider import paths, and these T1 progress notes. Runtime harness: N/A for this behavior-preserving module extraction; installation evidence, static checks, and exact source comparison provide verification. Commit remains pending.
- [ ] T2 — Add artifact-based Pages workflow and documentation; remove generated output from source tracking.
  - Route: delegated; multiple non-trivial configuration/documentation files.
  - Acceptance: main-only deployment with minimal permissions, locked install, checks and artifact publication; no generated files tracked; legacy deployment retained.
  - Checks: workflow structural validation, lock/ignore consistency, scoped whitespace checks, lint and no-emit TypeScript. Actual build and deployment remain untested by instruction.
  - Commit: pending.

## Test-first policy
Configuration/data work has no existing runnable test suite or meaningful application RED. Use observed lock inconsistency as T1 failure evidence and structural/functional checks for T2; do not claim a build or live deployment passed.

## Progress and next step
T1 reconciled the lockfile and installed dependencies successfully. Authorized provider extraction resolved both lint errors; lint and both no-emit TypeScript checks pass. T1 remains unchecked with its work-unit commit pending.

## External activation and rollback
After explicit authorization, publish the branch through the normal main integration flow, select GitHub Actions as the Pages source, restrict the `github-pages` environment to main, and verify a successful deployment. Keep `gh-pages` available as the legacy rollback source until then.
