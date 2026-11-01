# Blush & Plum production implementation

Goal: port the approved private review into the existing Next.js production application, preserving the current working-tree content updates and static export architecture.

Design reference: `/home/clawpi/Documents/SaarahsFund/design.md` and the approved private preview. This is preparation for production, not authorization to trigger the Kualo release.

## Constraints

- Keep React 19, Next.js 16, Tailwind, existing route metadata and static export configuration.
- Preserve all 14 application routes, including the existing Gaza appeal update, current donation destinations, original assets, dated statistics and contact details.
- Reuse the native `Modal` accessibility behaviour; ensure route changes close navigation and Escape restores focus.
- Use the approved ivory/blush/plum/raspberry design, original butterfly logo and original photos. No generated mockup imagery or review-only links in the production app.
- Keep videos local under `public/videos/`; build a self-contained full export. Keep the PDF and add its original rendered preview for phones.
- Preserve pre-existing changes. They were captured under `/tmp/saarahs-production-baseline/` before this work. Work on `codex/blush-plum-production`, not the deployment branch.

## Tasks

- [x] Build the current source baseline; save a content-preservation fixture for every page.
- [x] Port shared design tokens, header, footer and manual photo galleries; apply the same typography and surfaces to existing page components.
- [x] Port the approved homepage layout, retaining the existing Gaza appeal as featured and keeping the dated Sudan appeal accessible. Keep all original homepage gallery images and project videos.
- [x] Replace the embedded Ramadan PDF with a rendered original page preview linked to the original document.
- [x] Keep initial page content visible before JavaScript; retain existing dialog interactions and route metadata.
- [x] Apply targeted patches for confirmed dependency advisories, rerun the npm audit, and reverify the production build.
- [x] Add export verification for routes, preserved copy, donation URLs, metadata and local media references. Run export tests, lint, type checks and production build.
- [x] Verify the production export in Chromium at 320/390/768/1440px; inspect screenshots against the approved design, check client navigation, hydration, campaign links, galleries, country dialogs, Escape/focus, reduced motion and no-JavaScript readability.
- [x] Prepare a full export archive and checksums outside the checkout; document exact verification, source changes and release prerequisites. Do not push to `master` or initiate FTP publication.

## Release boundary

The repository's `AGENTS.md` requires confirmation of the FTP account root and a recoverable backup before publishing because `server-dir: /` synchronization is not atomic. Neither is established by a successful local build. Production readiness will distinguish the tested application/export from those outstanding hosting checks.
