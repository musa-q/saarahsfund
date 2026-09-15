# Repository guidance

## Architecture and source

- Read `README.md` and the relevant plan under `docs/` before working.
- This is Next.js 14 App Router with TypeScript, React 18, Tailwind and Framer Motion. It exports a static site; do not add server-only form handlers or runtime APIs without changing the hosting design deliberately.
- Edit `src/` and `public/`. Never edit generated `.next/` or `out/` files as the implementation.
- Page metadata lives in `page.tsx`; most route content lives in a sibling `*Client.tsx`. Home content is directly in `src/app/page.tsx`.
- Use `src/content/site.ts` for shared current figures and contact details. Keep current totals separate from dated project reports.
- Preserve established page styling for maintenance changes. Avoid unrelated redesigns, dependency upgrades, or refactors.

## Content accuracy

- September 2026 figures are charity-wide: 400+ incubators, £275,000 raised, 9,800+ babies helped. Preserve the supplied precision and labels.
- Sudan's May 2026 report is separate: 100 low-cost incubators and over 2,400 newborns helped. Always retain its date when presenting it.
- Preserve country/year and anniversary statistics. Partial historical lists must not imply they reconcile to the current charity totals.
- Do not change "babies helped" to "lives saved" or invent donation outcomes. Keep uncertainty in contributor documentation rather than inventing public claims.
- Contact details are public, user-supplied content: saarahsfund@gmail.com and 07748772332 (`tel:+447748772332`). Do not send messages to test links without authorization.

## Verification

- `npm ci` installs the committed lockfile; deployment uses Node 20.
- `npm run dev` starts local development.
- `npm run build` creates `out/` and performs the framework's checks.
- `npx tsc --noEmit --incremental false` checks types without modifying the tracked incremental cache.
- `git diff --check` checks whitespace.
- Preview `out/` with a static server, such as `python -m http.server 3000 --bind 127.0.0.1 --directory out`. The existing `npm start` script is not a static-export preview.
- No test suite or ESLint configuration exists at baseline. Do not claim the lint script is configured or silently initialize it during maintenance.
- Verify changed routes, generated assets, contact links, mobile layout, and that figures persist after React loads and client navigation. Distinguish browser checks from static HTML inspection and local results from live release results.

## Deployment boundary

- A push to `master` automatically builds and deploys to Kualo via `.github/workflows/deploy.yml`. Do not treat pushing as harmless backup.
- The existing FTP workflow deletes destination contents (`dangerous-clean-slate: true`, `server-dir: /`). Before publishing, verify the actual FTP account root and backup server-only files. Never infer that the root is safely scoped.
- Deploy HTML, JavaScript and route payloads from the same complete build. Editing live HTML alone produces mismatched React content.
- Keep secrets out of source, logs and handover notes. Report actual deployment evidence rather than assuming a successful local build is live.
