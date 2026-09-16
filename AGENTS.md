# Repository guidance

## Architecture and source

- Read `README.md` and the relevant plan under `docs/` before working.
- This is Next.js 16 App Router with TypeScript, React 19, Tailwind and Framer Motion. It exports a static site; do not add server-only form handlers or runtime APIs without changing the hosting design deliberately.
- Edit `src/` and `public/`. Never edit generated `.next/` or `out/` files as the implementation.
- Page metadata lives in `page.tsx`; route content lives in a sibling `*Client.tsx`. Home content is in `src/app/HomeClient.tsx`.
- Use `src/content/site.ts` for shared current figures and contact details. Keep current totals separate from dated project reports.
- Preserve established page styling for maintenance changes. Avoid unrelated redesigns, dependency upgrades, or refactors.

## Content accuracy

- September 2026 figures are charity-wide: 400+ incubators, £275,000 raised, 9,800+ babies helped. Preserve the supplied precision and labels.
- Sudan's May 2026 report is separate: 100 low-cost incubators and over 2,400 newborns helped. Always retain its date when presenting it.
- Preserve country/year and anniversary statistics. Partial historical lists must not imply they reconcile to the current charity totals.
- Do not change "babies helped" to "lives saved" or invent donation outcomes. Keep uncertainty in contributor documentation rather than inventing public claims.
- Contact details are public, user-supplied content: saarahsfund@gmail.com and 07748772332 (`tel:+447748772332`). Do not send messages to test links without authorization.

## Verification

- `npm ci` installs the committed lockfile; deployment uses Node 22 (minimum 22.13).
- `npm run dev` starts local development.
- `npm run build` creates `out/` and checks types. Run `npm run lint` separately using `eslint.config.mjs`.
- `npx tsc --noEmit --incremental false` checks types without modifying the tracked incremental cache.
- `git diff --check` checks whitespace.
- `npm start` previews `out/` with a localhost-only static server. Build first.
- ESLint is configured; raw-image optimization warnings are known. No permanent browser test suite exists; report actual browser checks.
- `npm test` checks Windows export aliases, Linux no-op behavior, repeated execution and collision safety. Keep the postbuild normalizer until the upstream defect is fixed and verified on Windows.
- Verify changed routes, generated assets, contact links, mobile layout, and that figures persist after React loads and client navigation. Distinguish browser checks from static HTML inspection and local results from live release results.

## Deployment boundary

- A push to `master` automatically builds and deploys to Kualo via `.github/workflows/deploy.yml`. Do not treat pushing as harmless backup.
- Clean-slate deletion is disabled and deployments are serialized. The destination remains `server-dir: /`; verify the FTP account root and backup server-only files before publishing. Synchronization is not atomic. Never infer that the root is safely scoped.
- Deploy HTML, JavaScript and route payloads from the same complete build. Editing live HTML alone produces mismatched React content.
- Keep secrets out of source, logs and handover notes. Report actual deployment evidence rather than assuming a successful local build is live.

## Accessibility and metadata

- Reuse `Modal` for overlays: retain native dialog semantics, Escape, focus restoration and scroll locking.
- Slideshow reduced-motion state must have a stable server snapshot to avoid hydration errors.
- Keep improved text contrast and keyboard focus visible; do not restore pale brand text on white.
- Add new routes to `src/app/sitemap.ts` and use `src/lib/metadata.ts` for canonical/sharing URLs.
