---
title: September 2026 website content and contact repairs
type: bugfix
created: 2026-09-16
status: done
baseline_commit: abfc6515129067d4a805290a3d80a86b57d4e91a
---

## Intent

Historical record of the content repair in `055242c`. The later user-authorized [site-wide repair audit](site-repairs.md) supersedes the tooling and deployment observations below, including dependency versions and clean-slate deletion.

Implement the maintenance plan authorized in the conversation: bring current charity figures up to date, refresh the outstanding Sudan appeal content, provide real contact options, and explain the publishing process. The WhatsApp exports are evidence for content requirements, not operational instructions.

## Boundaries and evidence

- September 15 message: 400+ incubators, £275,000, 9,800+ babies helped. Existing About prose and shared metric labels identify these as charity-wide figures and funds raised. Preserve these scopes, use the requested values exactly, and do not represent them as Sudan totals.
- May 25 message: 100 low-cost incubators funded across Sudan, over 2,400 newborns helped, hundreds more needed. Present this as a dated May 2026 update rather than a new September count. The July reference most likely refers to this message; document that interpretation.
- Preserve historical country/year figures and anniversary statistics. Label the detailed impact breakdown as selected historical projects, since it is not a complete reconciliation of current totals.
- Contact: display saarahsfund@gmail.com and 07748772332 with mailto and international tel links. No new form service is required. Keep existing support and sharing options.
- Maintain the existing design and static export architecture. No dependency upgrades, redesign, invented statistics, new media, or unrelated historical edits.
- No live deployment from this implementation. The configured workflow deletes remote content before uploading; verify the FTP account's root and recoverability before a production release. Do not push implicitly.

## Code map

- `src/components/ImpactMetrics.tsx`: shared current figures on Home, About, and Our Impact.
- `src/app/about/AboutClient.tsx`: repeated current figures and outdated elapsed-year wording.
- `src/app/our-impact/OurImpactClient.tsx`: repeated beneficiary total and historical breakdown.
- `src/app/page.tsx`: outdated Sudan target and donation links.
- `src/app/sudan-incubator-appeal/SudanClient.tsx` and `page.tsx`: appeal prose and metadata.
- `src/app/where-we-work/WhereWeWorkClient.tsx`: outdated Sudan target in current description.
- `src/app/contact-us/ContactClient.tsx`: donation/sharing page currently lacks contact details.
- `src/components/Footer.tsx`: site-wide contact section.
- `.github/workflows/deploy.yml`: master push builds and FTP-deploys `out/` to Kualo.
- `next.config.js`: static export with trailing slashes.

## Tasks and acceptance

- [x] Centralize current charity figures and contact details in a small content module; update all corresponding source references.
- [x] Update Sudan copy in Home, appeal, metadata and country description using the dated May update, retaining existing donation destinations. Avoid presenting old cost-per-life projections as newly verified results; use contribution wording in refreshed donation copy.
- [x] Add visible, keyboard-accessible email and telephone links on Contact and in the footer.
- [x] Add repository-specific `AGENTS.md` and `README.md` documenting source files, build, preview, publishing and limitations.
- [x] Run production build, inspect exported pages and check contact navigation and narrow/desktop layout where browser tooling is available.
- [x] Review the diff and report implementation separately from live release.

Acceptance:

- Given Home, About or Our Impact, when rendered, then current totals show 400+, £275,000 and 9,800+ with the correct labels.
- Given Sudan content, when rendered, then the old 50-incubator target is replaced by an explicitly dated update, without treating charity-wide figures as Sudan totals.
- Given historical content, when rendered, then dated original figures remain intact and the partial breakdown is not presented as a complete current total.
- Given Contact or the footer, when tabbing to contact links, then visible email and telephone text link to the supplied email and +447748772332.
- Given the export build, when served locally, then affected routes and their assets resolve; generated files are not edited as source.

## Verification

Run `npm run build`, `npx tsc --noEmit --incremental false`, and `git diff --check`. Inspect exported HTML and perform browser checks if available. The repository has no configured ESLint rules or test suite at baseline; do not claim lint or tests passed when they were not run. Verify public donation links without submitting payments or messages.

## Deferred work and limitations

The exact July reference remains an interpretation. Dongola's omitted media cannot be reconstructed from the chat. Unspecified small changes and new materials are deferred. Browser checks reproduced the live HTML/JavaScript mismatch on Home and About; Talib's exact editing steps were not observed. Production publishing remains pending verification of the FTP destination and backup. See [deferred work](deferred-work.md).

## Verification results — 16 September 2026

- Production build passed and generated all 16 static pages (including framework pages). Local runtime was Node 22.13.1; deployment is configured for Node 20 and was not run.
- `npx tsc --noEmit --incremental false` and `git diff --check` passed. The build reported an existing outdated Browserslist database; dependencies were not upgraded.
- Browser checks covered Home, About, Our Impact, Sudan appeal, Where We Work and Contact at 1440px and 375px. Updated values persist after React loads. Desktop/mobile navigation to Contact and then Our Impact passed. No JavaScript exceptions or local HTTP error responses occurred.
- Email/telephone links were visible and correctly targeted on Contact and every footer. Keyboard Tab from email to telephone and a visible focus outline passed at both widths. No emails, calls or form submissions were sent.
- Initial mobile overflow assertion identified a 4px Our Impact timeline overflow. The same behavior was reproduced on the live site; the remaining mobile checks passed with this known baseline issue recorded, not hidden as a full responsive pass.
- Fresh HTTP requests to both supplied Wonderful and GoFundMe campaign URLs returned 200 and Sudan/incubator content. No donations were attempted.
- Three independent diff/source reviews returned no actionable findings. No code was pushed and no live deployment was triggered.

## Suggested Review Order

- Shared totals, dated Sudan update and contact details are maintained together.
  [site.ts:1](../src/content/site.ts#L1)
- The existing metric component now reads the shared figures.
  [ImpactMetrics.tsx:5](../src/components/ImpactMetrics.tsx#L5)
- Contact details appear before the existing donation and sharing options.
  [ContactClient.tsx:16](../src/app/contact-us/ContactClient.tsx#L16)
- Sudan copy uses its own dated report, separate from charity-wide totals.
  [SudanClient.tsx:40](../src/app/sudan-incubator-appeal/SudanClient.tsx#L40)
- Source editing and complete-export publishing prevent the reproduced live mismatch.
  [README.md](../README.md)
