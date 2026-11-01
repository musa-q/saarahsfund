# Saarah's Fund website

Next.js 16 App Router website using React 19, TypeScript, Tailwind CSS and Framer Motion. Production is a static export hosted by Kualo at https://www.saarahsfund.com/.

## Run and check

Use Node.js 22.13 or newer to match the deployment workflow, with npm and the committed lockfile.

```sh
npm ci
npm run dev
```

The development server normally runs at http://localhost:3000. For production verification:

```sh
npm run lint
npm test
npm run build
npm run typecheck
npm run verify:export
git diff --check
```

The build writes the complete static site to `out/`. Start the preview at http://127.0.0.1:3000 with `npm start`. Alternatively, if Python is installed:

```sh
python -m http.server 3000 --bind 127.0.0.1 --directory out
```

Development and preview servers bind to localhost. Build before starting the preview. ESLint runs separately from the Next build; existing image optimization warnings remain on this static export. `npm test` checks export normalization; no permanent browser test suite is configured. See the repair report for browser checks performed.

The build automatically runs `scripts/normalize-export.mjs` to work around a [Next.js Windows export defect](https://github.com/vercel/next.js/issues/92339): it adds the flat route-payload filenames requested by browser navigation. Correct Linux exports are unchanged. Deploy the complete resulting `out/` directory.

## Approved redesign

The Blush & Plum design is implemented in the production app. See [production readiness](docs/production-readiness.md) for the retained content, verification and release package, and [the implementation plan](docs/blush-plum-production-plan.md). All 14 routes, including the existing Gaza appeal update, are retained. The private design gallery is separate from production.

## Where to edit

| Content | Source |
| --- | --- |
| Current charity totals and contact details | `src/content/site.ts` |
| Shared impact metrics | `src/components/ImpactMetrics.tsx` |
| Homepage | `src/app/HomeClient.tsx` (content), `src/app/page.tsx` (metadata) |
| Gaza appeal, shared homepage copy and donation links | `src/app/gaza-incubator-appeal/`, `src/content/site.ts` |
| About | `src/app/about/AboutClient.tsx` |
| Our Impact and historical breakdown | `src/app/our-impact/OurImpactClient.tsx` |
| Sudan appeal and search description | `src/app/sudan-incubator-appeal/SudanClient.tsx`, `page.tsx` |
| Country project descriptions | `src/app/where-we-work/WhereWeWorkClient.tsx` |
| Contact | `src/app/contact-us/ContactClient.tsx` |
| Site-wide contact/navigation | `src/components/Footer.tsx`, `Navbar.tsx` |
| Images, videos and PDF assets | `public/` |
| Approved palette and responsive layout | `src/app/design.css` |
| Shared navigation destinations | `src/content/navigation.ts` |

The September 2026 charity-wide figures are 400+ incubators, £275,000 raised and 9,800+ babies helped. Sudan's May 2026 update is a separate, dated report of 100 low-cost incubators and over 2,400 newborns helped. Do not substitute the global totals into country-specific reports or overwrite dated historical results.

## Why editing index.html did not reliably update the site

The source is under `src/`; `out/index.html` and the other exported HTML pages are generated files, excluded from Git. React JavaScript and route payloads are generated alongside them.

Fresh HTTP inspection on 16 September 2026 found new figures in the live homepage/About HTML but old figures in the JavaScript those pages loaded. A browser check reproduced both pages reverting to 300+, 7,000+ and £175,000+ after React loaded, with React mismatch errors. This is consistent with editing exported HTML alone: the browser receives incompatible content and application code. The failure is reproduced; the exact steps Talib used were not observed.

Edit the source, rebuild, and deploy the **entire `out/` directory**, including `_next/` assets and route payloads. Do not upload only an edited HTML file. A subsequent build also replaces manual edits to generated output.

## Publishing

`.github/workflows/deploy.yml` runs on a push to `master` in `musa-q/saarahsfund`. It installs dependencies, builds, and uploads `out/` via FTP to Kualo using the repository secrets `FTP_SERVER`, `FTP_USERNAME`, and `FTP_PASSWORD`.

**Before triggering a release:** confirm the FTP account is restricted to the intended website root (`server-dir: /`) and retain a recoverable copy of server-only files and the current deployment. Clean-slate deletion is disabled and deployments are serialized. Synchronization can still overwrite tracked files and is not atomic. Do not assume `/` is safely scoped from the workflow alone. Credentials belong in repository secrets, never source or documentation.

1. Review and verify source changes and the complete local export.
2. Confirm the FTP destination and backup, then publish through the repository's deployment process.
3. Check the GitHub Actions build and FTP deployment both succeed.
4. Open the live Home, About, Our Impact, Sudan appeal, Where We Work and Contact pages in a fresh browser session.
5. Confirm figures persist after JavaScript loads and after navigation. Check the email/telephone destinations and donation links without sending test messages or payments.
6. If the release fails, restore the previously verified full export and any necessary server-only files. Local completion does not mean the live deployment is complete.

## Current maintenance scope

See [the maintenance plan](docs/maintenance-plan.md). Contact uses direct email and telephone links; no enquiry form or delivery service is introduced. Missing Dongola media and unspecified follow-up changes remain deferred. The July reference to the earlier message is interpreted as the May continuation appeal update, not a requirement to publish omitted media.

See [the site repair report](docs/site-repairs.md) for keyboard/mobile fixes, contrast improvements, sitemap and metadata repairs, dependency updates and verification.
