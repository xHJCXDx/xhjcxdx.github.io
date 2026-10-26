# GitHub Pages artifact deployment

## Objective and authorized scope
Keep source on the main development line; publish generated assets through GitHub Actions. Work on `v1.05-release`, preserving existing portfolio commits and the legacy `gh-pages` branch.

- Synchronize the npm lockfile, resolve demonstrated lint blockers, add the workflow and deployment documentation, and stop tracking generated output.
- Public npm downloads without credentials and local lint/no-emit TypeScript checks are authorized.
- Never run a local build. No push, remote settings changes, or deployment is authorized.
- Include existing 25 staged `dist/` deletions in cleanup; preserve unrelated work.
- English technical artifacts and Conventional Commits without AI attribution.

## Delivery and recovery
- Strategy: ask-on-risk. Forecast approximately 300 authored changed lines, excluding generated files.
- Base and pending review boundary: `74174d3`; retain one coherent commit per work unit.
- Mirror: pending synchronization after T2 evidence changes; Engram `odd/github-pages-migration/tasks`, locator `odd/tasks/github-pages-migration.md`.
- Native review is enabled; record actual assessment and consent outcomes, never invent approval.

## Tasks
- [x] T1 — Restore reproducible installation and passing lint/TypeScript checks.
  - Route: delegated; dependency investigation and multi-file lint remediation.
  - Commit: `ee797e2` — `fix(tooling): restore reproducible dependency and lint checks`.
  - Lock matches unchanged manifest; 19 entries added. Only existing version changes: `@eslint/js` 9.39.1 to 9.39.5 and `@eslint-community/eslint-utils` 4.9.0 to 4.10.1.
  - Installed 272 packages with isolated credential-free public npm configuration and scripts disabled.
  - RED: lint reported two `react-refresh/only-export-components` errors. GREEN: moved providers into component-only modules, retaining existing context singletons, hooks, state/effects and entry-point nesting.
  - Checks passed: `npm ci --ignore-scripts --no-audit --no-fund`, `npm run lint`, both no-emit TypeScript commands below, and `git diff --check`. Parent reran lint successfully.
  - Native committed assessment against `74174d3`: medium, `review_due: false`, `under_budget`. No approval issued; slice remains pending.
  - Rollback boundary: lockfile, context/provider modules and main provider imports. Browser smoke test remains pending.
- [ ] T2 — Add main-only Pages artifact deployment and docs; stop tracking generated output.
  - Route: delegated; multiple non-trivial configuration/documentation files.
  - Acceptance: locked installation, lint/typechecked build in CI, minimal permissions, artifact upload/deploy, source branch free of generated output, legacy deployment retained.
  - Checks: workflow structure, ignored/tracked paths, lock consistency, whitespace, lint and no-emit TypeScript.
  - Prepared: main-only build/deploy guards, Node 24 with `setup-node@v7` (verified against official README and v7 action metadata), locked scripts-disabled installation, lint/typechecked CI build, `dist` artifact, deploy-only write permissions, Pages environment URL and serialized runs. `configure-pages@v5` reads configuration in deploy with enablement disabled.
  - GREEN: `npm run lint`, both exact no-emit TypeScript commands below, `git diff --check` and `git diff --cached --check` exited 0. Installed `js-yaml` parsed the workflow; Node assertions passed for triggers, guards, permissions, artifact wiring, needs/environment/concurrency, Node version, lock tracking/manifest consistency, generated ignores and branch/index preservation.
  - Cleanup: retained all 25 staged `dist/` deletions; `git rm --cached -- tsconfig.app.tsbuildinfo tsconfig.node.tsbuildinfo` removed only index entries. Both local files retain their original SHA-256 hashes. Lockfile remains tracked; one `node_modules` ignore remains.
  - Limits: `actionlint` unavailable; no installation, local build, browser smoke test, live deployment, remote operation or native review performed. Test-first exception: configuration-only assertions, no application test runner; Actions runtime verification remains pending.
  - Rollback boundary: Pages workflow, README migration instructions, generated ignore rules and generated-file index removals. Current branch `v1.05-release` and legacy `gh-pages` ref remain unchanged.
  - Budget: 307 authored added/deleted lines against HEAD; 391 against `74174d3`, including the untracked 56-line workflow and excluding generated files. Near the advisory 400-line boundary; report further growth before committing.
  - Commit: pending.

## Verification contract
- `npm run lint`
- `./node_modules/.bin/tsc --noEmit --incremental false -p tsconfig.app.json`
- `./node_modules/.bin/tsc --noEmit --incremental false -p tsconfig.node.json`
- `git diff --check`
- `git diff --cached --check`
- Configuration work has no application test suite; observed lock mismatch and lint RED provide baseline evidence. No new test framework is needed.
- Local build, browser smoke test and live deployment remain unverified; never present static checks as deployment proof.

## Next step, activation and rollback
T2 source preparation and static verification are complete; commit, native review and task mirror synchronization remain pending with the parent session. After separate authorization, integrate through main, select GitHub Actions as the Pages source, restrict the `github-pages` environment to main, and verify deployment. Keep `gh-pages` as the legacy rollback source until the new deployment succeeds.
