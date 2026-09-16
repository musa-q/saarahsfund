# Site-wide repair audit — 16 September 2026

Baseline: `055242c`. User requested agents to find and repair other confirmed problems. Scope: functioning navigation and galleries, accessibility, accurate page URLs, usable development commands and safer deployment. Preserve charity figures, historical facts and the overall site structure.

## Confirmed findings and repairs

| Finding | Repair |
| --- | --- |
| Image/campaign/country overlays lacked keyboard dismissal, contained focus and scroll locking. | Shared native dialog used by Sudan, News, Donate and Where We Work. Restores focus to the trigger; supports Escape, close controls and backdrop dismissal. |
| News gallery thumbnails were mouse-only divs. | Native buttons with keyboard activation. |
| Menus lacked open-state semantics and dismissal; tablet navigation was crowded. | Expanded/control states, named navigation, Escape/outside/focus-leave dismissal and desktop navigation from 1024px. |
| Slideshows rotated indefinitely with unnamed controls. | Pause/play, labelled photo controls, pause on hover/manual interaction, reduced-motion preference. |
| Timeline entrance translations produced horizontal overflow on phones. | Vertical-only entrance animation. |
| Pale brand text and white text on pale brand backgrounds had low contrast. | Darker pink/blue text and backgrounds; solid heading text. Original colour endpoints measured 2.68:1 and 2.40:1 against white, replacements 6.92:1 and 6.77:1. This is not a claim of full WCAG conformance. |
| Footer social icons lacked accessible names; fine print was faint. | Named links and higher-contrast fine print. |
| No skip link; smooth scrolling ignored reduced motion. | Skip-to-main link, explicit focus outlines, shared motion preference and CSS reduced-motion handling. |
| Homepage/country video files loaded eagerly. | Defer loading and supply accessible names. |
| Anniversary timeline included 2024 under first-decade framing. | Heading explicitly includes later milestones; dates and figures preserved. |
| Nystagmus support link led to a parked domain. | Verified `https://nystagmusnetwork.org/`; other support links use verified HTTPS addresses. |
| Robots advertised the wrong domain and a missing sitemap. | Correct domain and static sitemap containing all 13 public routes. |
| Every route inherited homepage Open Graph URL; no canonical URLs. | Shared route metadata with individual canonical and sharing URLs. |
| `npm start` failed with static export; lint was unconfigured. | Local static preview via `serve`, ESLint configuration, and typecheck script. |
| FTP deployment erased remote destination contents before upload. | Disable clean-slate deletion and serialize deployments. Destination verification and backup still required. |
| Missing Apache routes repeatedly received another slash or fell back to Home. | Use real exported directories, disable directory listing, and serve the exported 404 page with 404 status. HTML/route payloads revalidate instead of persisting stale application content. |
| Next 16 Windows exports used nested segment filenames that caused browser prefetch 404s. | Tested, repeatable postbuild aliases match requested filenames; existing Linux output is unchanged. See [upstream issue](https://github.com/vercel/next.js/issues/92339). |
| Tablet metric totals overflowed their cards; reduced-motion slideshow markup differed during hydration. | Responsive numeric type sizing and server-stable motion-preference subscription. |

## Dependencies and publishing

Patch-only updates left advisories unresolved. Next and its ESLint configuration were upgraded to 16.3.5, with React 19.3.0, compatible React types and ESLint 9. The Webpack build path and static-export hosting are retained. The ESLint CLI replaces `next lint`, and CI runs lint separately. The resolved dependency tree reports zero npm audit vulnerabilities after installation. Both development and preview bind to localhost. CI uses Node 22, matching local verification.

Production is a static export, not a running Next server. Remaining server-related advisories need to be distinguished from exposure of the actual deployed architecture. Do not describe a successful build or smaller advisory count as a complete security audit.

No changes have been pushed or deployed. FTP account scope, server-only files and recovery must be checked before releasing a complete export. Disabling clean-slate prevents blanket deletion but does not make FTP uploads atomic.

## Verification

- Production build and automatic postbuild succeeded; 13 Windows route-segment aliases were generated. TypeScript and whitespace checks passed.
- ESLint passed with no errors and nine existing raw-image optimization warnings. `npm audit` reported zero vulnerabilities in the installed dependency tree.
- All three export-normalizer tests passed, including repeated execution and conflicting-file protection.
- Browser checks covered all 13 public routes at 1440px, 768px and 375px (39 route/viewport combinations): no horizontal overflow, uncaught JavaScript errors or failed local HTTP requests. Canonical and Open Graph URLs matched each route.
- Axe WCAG A/AA scans on all 13 desktop pages reported no violations. This automated check does not establish complete accessibility conformance; captions, transcripts and assistive-technology testing remain separate work.
- Independent agents verified menu dismissal, keyboard focus, navigation, slideshow controls and reduced motion. Four dialog types passed at desktop, phone and short landscape sizes (12 checks), including Escape, backdrop, close button, focus restoration and scroll locking.
- Checked 62 referenced local assets/routes and all 13 sitemap entries. Reviewed fresh desktop and mobile screenshots for layout and legibility.
- These results are local. Kualo's Apache behavior, FTP destination scope and the live release have not been verified. No push or deployment was performed.
