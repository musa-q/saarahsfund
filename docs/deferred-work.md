# Follow-up work

## Release prerequisites

- Verify the FTP account's destination root and backup server-only files before triggering `master` deployment. The existing workflow deletes remote destination contents before uploading.
- Publish the complete verified export and check live content after React loads and navigation. Local implementation is complete; production release has not happened.

## Content follow-up

- Confirm the July reference to the "second message" if the dated May continuation appeal update is not what Talib intended.
- Collect the unspecified small changes and new material when Talib is ready. Omitted Dongola images/video are not available in the chat export and were not fabricated or substituted.
- Existing hourly mortality claims, Zakat eligibility copy and historical estimates were not independently audited in this maintenance task.

## Pre-existing technical issues observed

- At 375px, Our Impact's off-screen timeline entries with a positive horizontal animation offset can produce a 379px document width. Reproduced on both the live site and local export. Consider a contained timeline animation or vertical-only entry animation in a focused accessibility/responsiveness change.
- `public/robots.txt` refers to saarahsfund.org although the verified live website and metadata use www.saarahsfund.com; no source sitemap was found. Review separately.
- `npm start` invokes `next start`, although this site uses static export. The README documents a working static-server preview; changing the script is outside this content repair.
- ESLint has no repository configuration and the Browserslist database is dated. Tooling updates should be tested separately from the content release.
