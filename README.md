# Saarah's Fund website

Next.js 14 App Router website using React, TypeScript, Tailwind CSS and Framer Motion. Production is a static export hosted by Kualo at https://www.saarahsfund.com/.

## Run and check

Use Node.js 20 to match the deployment workflow, with npm and the committed lockfile.

```sh
npm ci
npm run dev
```

The development server normally runs at http://localhost:3000. For production verification:

```sh
npm run build
npx tsc --noEmit --incremental false
git diff --check
```

The build writes the complete static site to `out/`. Preview that directory with a static HTTP server, for example, if Python is installed:

```sh
python -m http.server 3000 --bind 127.0.0.1 --directory out
```

Do not use `npm start` for this export: the existing script invokes `next start`, which expects a server build. `npm run lint` exists but ESLint has not been configured in this repository; it may prompt for setup. No automated test suite is configured.

## Where to edit

| Content | Source |
| --- | --- |
| Current charity totals and contact details | `src/content/site.ts` |
| Shared impact metrics | `src/components/ImpactMetrics.tsx` |
| Homepage | `src/app/page.tsx` |
| About | `src/app/about/AboutClient.tsx` |
| Our Impact and historical breakdown | `src/app/our-impact/OurImpactClient.tsx` |
| Sudan appeal and search description | `src/app/sudan-incubator-appeal/SudanClient.tsx`, `page.tsx` |
| Country project descriptions | `src/app/where-we-work/WhereWeWorkClient.tsx` |
| Contact | `src/app/contact-us/ContactClient.tsx` |
| Site-wide contact/navigation | `src/components/Footer.tsx`, `Navbar.tsx` |
| Images, videos and PDF assets | `public/` |

The September 2026 charity-wide figures are 400+ incubators, £275,000 raised and 9,800+ babies helped. Sudan's May 2026 update is a separate, dated report of 100 low-cost incubators and over 2,400 newborns helped. Do not substitute the global totals into country-specific reports or overwrite dated historical results.

## Why editing index.html did not reliably update the site

The source is under `src/`; `out/index.html` and the other exported HTML pages are generated files, excluded from Git. React JavaScript and route payloads are generated alongside them.

Fresh HTTP inspection on 16 September 2026 found new figures in the live homepage/About HTML but old figures in the JavaScript those pages loaded. A browser check reproduced both pages reverting to 300+, 7,000+ and £175,000+ after React loaded, with React mismatch errors. This is consistent with editing exported HTML alone: the browser receives incompatible content and application code. The failure is reproduced; the exact steps Talib used were not observed.

Edit the source, rebuild, and deploy the **entire `out/` directory**, including `_next/` assets and route payloads. Do not upload only an edited HTML file. A subsequent build also replaces manual edits to generated output.

## Publishing

`.github/workflows/deploy.yml` runs on a push to `master` in `musa-q/saarahsfund`. It installs dependencies, builds, and uploads `out/` via FTP to Kualo using the repository secrets `FTP_SERVER`, `FTP_USERNAME`, and `FTP_PASSWORD`.

**Before triggering a release:** the existing workflow has `server-dir: /` and `dangerous-clean-slate: true`, which deletes the destination contents before upload. Confirm the FTP account is restricted to the intended website root and retain a recoverable copy of server-only files and the current deployment. Do not assume `/` is a safe destination from the workflow alone. Credentials belong in repository secrets, never source or documentation.

1. Review and verify source changes and the complete local export.
2. Confirm the FTP destination and backup, then publish through the repository's deployment process.
3. Check the GitHub Actions build and FTP deployment both succeed.
4. Open the live Home, About, Our Impact, Sudan appeal, Where We Work and Contact pages in a fresh browser session.
5. Confirm figures persist after JavaScript loads and after navigation. Check the email/telephone destinations and donation links without sending test messages or payments.
6. If the release fails, restore the previously verified full export and any necessary server-only files. Local completion does not mean the live deployment is complete.

## Current maintenance scope

See [the maintenance plan](docs/maintenance-plan.md). Contact uses direct email and telephone links; no enquiry form or delivery service is introduced. Missing Dongola media and unspecified follow-up changes remain deferred. The July reference to the earlier message is interpreted as the May continuation appeal update, not a requirement to publish omitted media.
