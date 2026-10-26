# HJCXD Portfolio

Personal portfolio built with React, TypeScript and Vite. Source changes are developed on branches and integrated into `main`; GitHub Actions publishes generated assets to GitHub Pages.

## Local development

Use Node.js 24 and npm with the committed `package-lock.json`:

```bash
npm ci --ignore-scripts --no-audit --no-fund
npm run dev
```

Installation skips dependency lifecycle scripts, matching the verified local installation. Keep the lockfile tracked; intentional dependency updates must include the corresponding lockfile changes.

## Checks without a build

```bash
npm run lint
./node_modules/.bin/tsc --noEmit --incremental false -p tsconfig.app.json
./node_modules/.bin/tsc --noEmit --incremental false -p tsconfig.node.json
```

Use the project's installed TypeScript compiler. If checks fail, fix the reported dependency or source error rather than deleting the lockfile, installing a global compiler, or bypassing typechecking.

## GitHub Pages deployment

The workflow in [`.github/workflows/pages.yml`](.github/workflows/pages.yml) runs on pushes to `main` or manual dispatch. Both jobs require `refs/heads/main`, so a manual run on another branch cannot publish.

CI installs locked dependencies, runs lint, then runs `npm run build` (`tsc -b && vite build`). It uploads `dist/` as the Pages artifact and deploys only after the build job succeeds. Only the deploy job receives Pages and OIDC write permissions. Runs share the `pages` concurrency group without cancelling an in-progress deployment.

`dist/`, TypeScript build metadata and local `.atl/` state are ignored. Generated files belong in the deployment artifact, not in source commits.

### One-time activation (maintainer action)

1. In repository **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
2. In **Settings → Environments → github-pages**, restrict deployment branches to `main`.
3. Integrate the reviewed source branch into `main` through the normal pull-request workflow, then inspect the Actions run and deployed site. For a manual run, select `main`.

The workflow reads Pages configuration with automatic enablement disabled. These settings require manual activation; adding the workflow does not prove that deployment succeeded.

### Daily workflow and rollback

Develop on a source branch, run the checks above, and open a pull request to `main`. A merged change triggers the artifact deployment; do not commit `dist/` or push generated output to a deployment branch.

Keep the existing `gh-pages` branch as the legacy rollback source until the new deployment is verified. If rollback is needed, a maintainer can pause the Actions workflow and restore **Deploy from a branch → gh-pages → / (root)** in Pages settings. Retain the branch while investigating.

Local build, browser smoke testing, Pages activation and live deployment are still unverified for this migration. See [the migration task](odd/tasks/github-pages-migration.md) for verification evidence.
