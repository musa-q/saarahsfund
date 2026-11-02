# Blush & Plum production release

The approved design is implemented in the existing Next.js/React application on `codex/blush-plum-production`. The production branch and live website have not been changed.

## Implementation

- The homepage, header, footer and manual galleries use the approved ivory, blush, plum and raspberry palette, Georgia headings, curved photographs and mobile layout.
- All 14 application routes are retained. The existing working-tree Gaza appeal, updated Sudan donation options and contact changes were preserved. Gaza remains the featured appeal; the dated Sudan update also appears on the homepage.
- The original butterfly logo, family/project images, videos, document, stories, timeline, charity figures and contact details are retained. All media is included in the production export; this version does not stream video from the private review site or depend on it.
- React route navigation, existing campaign/country dialogs and the native `Modal` focus/Escape behaviour remain in use. Photo galleries are manual by default and support keyboard navigation and enlargement.
- Page content is visible in initial HTML rather than waiting for animation to reveal it. The original Ramadan PDF has a rendered page preview that works on phones, linking to the original PDF.
- Production canonical URLs, sitemap, robots file, trailing-slash routes and `.htaccess` are retained. Private review links, concept images, review scripts and `noindex` are not included.
- The export verification step is added to the existing GitHub workflow before its FTP upload.

## Source and repeatable checks

Primary changes: `src/app/HomeClient.tsx`, `src/app/design.css`, `src/app/globals.css`, `src/components/{Navbar,Footer,Slideshow}.tsx`, shared navigation/content, and the existing page wrappers. No application framework or runtime feature dependencies were added. The production-readiness dependency check identified published advisories in the installed toolchain, so Next.js and its matching ESLint configuration were updated from 16.3.5 to 16.4.3, with patched compatible `sharp` and `source-map-js` transitive packages in the lockfile.

```sh
npm ci
npm run lint
npm test
npm run build
npm run typecheck
npm run verify:export
git diff --check
npm start
```

`npm test` contains three export-normalization tests. `npm run verify:export` contains 16 production checks: 14 routes compared with the pre-redesign working-tree content, the approved design palette, and exclusion of the concept gallery and mockup images. Each page also rejects design-concept links and controls. It checks paragraphs, existing destination URLs, local images/video/poster files, canonical URLs, indexability and initial content visibility. The baseline fixture is a regression record; change it only for deliberate content changes.

Browser checks use the actual production export, not a development server. Chromium checks cover all 14 pages at 390px; homepage layouts at 320/390/768/1440px; client-side navigation and persisted figures after hydration; ten country dialogs; donation campaign choices; gallery previous/next/enlargement; Escape and focus restoration; image decoding; reduced-motion preference; no-JavaScript readability; and local Gaza video playback. No runtime errors or failed resource requests occurred. The Browser plugin was unavailable, so the installed local Playwright/Chromium tooling was used. Screenshots and the temporary browser script are outside the repository under `/tmp/`.

Lint reports the established raw-image optimization warnings for this static export; there are no lint errors. Image optimization requires a separate asset pipeline or image host and has not been introduced as part of this design port. Real iPhone/Safari testing and completed payments are not claimed.

## Dependency advisory check

The initial runtime npm audit reported one critical and two high package findings. The site is a static export and does not run the affected Next.js server APIs in Kualo; this report does not claim an exploitable live-site vulnerability. The maintained build/development dependencies were updated as part of release preparation. Relevant upstream records: [Next.js typed-array cache advisory](https://github.com/advisories/GHSA-673q-mjm6-r5xr), [sharp/librsvg advisory](https://github.com/advisories/GHSA-wq5f-xc86-pv6w), [source-map-js advisory](https://github.com/advisories/GHSA-68fv-2mgg-jv7q), and [Next.js 16.4.3 release](https://github.com/vercel/next.js/releases/tag/v16.4.3). The final `npm audit --omit=dev` reports zero known vulnerabilities in production dependencies. The broader all-dependencies audit was stopped after a prolonged CPU-bound run without a result; no claim is made about a completed development-dependency audit. This was a dependency advisory check, not a full security audit.

## Final verification — 1 November 2026

- Next.js 16.4.3 production build and TypeScript checks passed.
- ESLint completed with zero errors and 17 raw-image warnings.
- Three export-normalization tests and 15 production export checks passed.
- The complete Chromium browser checks passed again after dependency updates, with no runtime or HTTP resource errors.
- Production dependency audit: zero known vulnerabilities.
- Release archive contents were compared by SHA-256 with every file in the verified export.

## Release package

On 2 November 2026, all 16 export checks and three normalization tests passed after adding the design-review exclusion guard. The separately hosted phone preview also had its concepts link, gallery and mockup images removed. No production application or exported assets changed; the verified release archive remains unchanged.

The complete final `out/` directory is packaged outside the repository under:

`/home/clawpi/Documents/SaarahsFund/releases/2026-11-01/`

The archive includes HTML, JavaScript, route payloads, original media and `.htaccess` from the same build. File checksums and an archive checksum accompany it. Deploy the complete export; uploading individual edited HTML files would reintroduce the former hydration mismatch.

## Before publication

The repository's `AGENTS.md` and deployment instructions require verifying the FTP account's root and retaining a recoverable backup of server-only files and the current deployment. These hosting facts have not been verified by this local work. The workflow uploads to `server-dir: /`, is serialized, and has clean-slate deletion disabled, but synchronization is still non-atomic.

Once those hosting prerequisites are satisfied and publication is requested, use the established `master` deployment process, inspect both build and FTP results, and check the live pages in a fresh browser. No FTP operation, push to `master`, payment or outbound message was performed during this preparation.
