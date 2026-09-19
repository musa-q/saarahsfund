---
title: 'Stakeholder impact and donation update'
type: 'chore'
created: '2026-09-19'
status: 'done'
baseline_commit: 'd47ac7bee37e927aad8b3e032a8422c44bd43696'
context:
  - '{project-root}/AGENTS.md'
  - '{project-root}/docs/maintenance-plan.md'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** The country and low-cost-incubator breakdown omits Tanzania, Zambia and newer funded projects, while the main Donate page offers more platforms than the stakeholder now wants and points JustGiving to search instead of the supplied checkout.

**Approach:** Reconcile the visible country breakdown to the supplied total of 411 low-cost incubators, add the two requested countries, and simplify only the main Donate page to Wonderful and the corrected JustGiving checkout.

## Boundaries & Constraints

**Always:** Preserve the charity-wide `400+` figure required by repository guidance; count Sudan's May 2026 total once, including its earlier 20; retain supplied wording precision; use accessible ordinary links; edit source only.

**Ask First:** Any production deployment, broader donation-platform removal outside `/donate`, or implementation of a zakat/sadaqah information architecture.

**Never:** Invent years for Tanzania or Zambia, inject the JustGiving widget script, submit a donation, remove GoFundMe from existing appeal surfaces, edit generated output as source, or redesign unrelated pages.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| Impact tally | Existing country figures plus Tanzania, Zambia and Sudan's May 2026 cumulative figure | Detail totals exactly 411 without double-counting Sudan's earlier 20 | Build the total from numeric source entries rather than a disconnected heading |
| Donation choice | Visitor opens `/donate` | Wonderful and JustGiving are the only platform cards; JustGiving opens the final supplied checkout | Use a normal external anchor so checkout remains usable without injected JavaScript |

</frozen-after-approval>

## Code Map

- `src/app/where-we-work/WhereWeWorkClient.tsx` -- country list and visible project summaries.
- `src/app/our-impact/OurImpactClient.tsx` -- selected historical low-cost-incubator breakdown.
- `src/app/donate/DonateClient.tsx` -- primary donation-platform choices.
- `src/content/site.ts` -- shared current totals and dated Sudan report.

## Tasks & Acceptance

**Execution:**
- [x] `src/app/where-we-work/WhereWeWorkClient.tsx` -- add Tanzania and Zambia with 10 low-cost incubators each; align Sudan with the dated cumulative report.
- [x] `src/app/our-impact/OurImpactClient.tsx` -- render an auditable breakdown whose numeric entries sum to 411.
- [x] `src/app/donate/DonateClient.tsx` -- remove PayPal and KindLink cards, update JustGiving to `https://checkout.justgiving.com/gbr4stupkl`, and keep the two-card layout balanced.
- [x] Generated `/where-we-work/`, `/our-impact/` and `/donate/` routes -- inspect content after a complete build.

**Acceptance Criteria:**
- Given Where We Work, when the country list opens, then Tanzania and Zambia each show 10 low-cost incubators without an invented year.
- Given Our Impact, when the low-cost breakdown is read and summed, then it totals 411 and Sudan's 100 is not added to its earlier 20 again.
- Given Donate, when donation options load, then only Wonderful and JustGiving are shown and JustGiving targets the final corrected checkout URL.
- Given existing Home and Sudan appeal content, when the change is reviewed, then GoFundMe remains available there.
- Given a production export, when the affected routes are inspected, then the updated content is present in matching HTML and route assets.

## Design Notes

Keep the existing cards and button styling. Prefer the site's accessible anchor over JustGiving's script-driven popup because both reach the checkout while the direct link adds no third-party runtime dependency.

## Verification

**Commands:**
- `npm run lint` -- expected: no errors; known raw-image warnings may remain.
- `npm test` -- expected: export-normalizer tests pass.
- `npm run build` -- expected: static export completes.
- `npm run typecheck` -- expected: TypeScript reports no errors.
- `git diff --check` -- expected: no whitespace errors.

**Manual checks:**
- Inspect generated affected routes for the exact country, total and checkout content.
- Confirm source still contains the existing GoFundMe links and does not load JustGiving's widget script.

## Verification Results

- `npm run lint` passed with 0 errors and 10 known raw-image warnings.
- `npm test` passed all 3 export-normalizer tests.
- `npm run build` generated all 16 static pages and normalized the Windows route aliases.
- `npm run typecheck` and `git diff --check` passed.
- Generated HTML and client assets contain the 411 total, both countries and the corrected JustGiving link; PayPal, KindLink and the widget script are absent from `/donate`.
- The JustGiving checkout returned HTTP 200 and resolved to Saarah's Fund's JustGiving charity donation page; no donation was attempted.
- Local headless Edge checks opened the Tanzania and Zambia dialogs, verified the impact heading and Donate choices after hydration, found no narrow-screen overflow and captured no console errors.

## Suggested Review Order

**Impact reconciliation**

- Numeric project records compute the displayed 411 total and document Sudan's cumulative figure.
  [`OurImpactClient.tsx:17`](../src/app/our-impact/OurImpactClient.tsx#L17)

- The rendered breakdown keeps undated Tanzania and Zambia entries free of invented years.
  [`OurImpactClient.tsx:54`](../src/app/our-impact/OurImpactClient.tsx#L54)

- Country cards add Tanzania and Zambia while aligning Sudan with its dated report.
  [`WhereWeWorkClient.tsx:17`](../src/app/where-we-work/WhereWeWorkClient.tsx#L17)

**Donation simplification**

- Two explicit platform records retain Wonderful and use the corrected JustGiving checkout.
  [`DonateClient.tsx:6`](../src/app/donate/DonateClient.tsx#L6)

- The responsive two-card grid keeps the reduced choice set visually balanced.
  [`DonateClient.tsx:40`](../src/app/donate/DonateClient.tsx#L40)

**Supporting context**

- Brand principles preserve accuracy, accessibility and the established maintenance boundaries.
  [`PRODUCT.md:23`](../PRODUCT.md#L23)
