# Follow-up work

## Release prerequisites

- Verify the FTP account's destination root and backup server-only files before triggering `master` deployment. Clean-slate deletion is now disabled, but synchronization still overwrites deployed files and is not atomic.
- Publish the complete verified export and check live content after React loads and navigation. Local implementation is complete; production release has not happened.

## Content follow-up

- Confirm the July reference to the "second message" if the dated May continuation appeal update is not what Talib intended.
- Collect the unspecified small changes and new material when Talib is ready. The two Dongola images and feedback video were supplied on 17 September 2026 and added to a separate, dated May 2026 update on the Sudan appeal page.
- Existing hourly mortality claims, Zakat eligibility copy and historical estimates were not independently audited in this maintenance task.

## Technical follow-up

- The earlier timeline overflow, wrong robots domain, missing sitemap, broken preview command and missing lint configuration have been fixed in the [site-wide repair pass](site-repairs.md).
- Apache configuration is source-reviewed but needs verification on Kualo: unknown paths must return 404 and existing directories must still serve their exported pages. Local preview servers do not execute `.htaccess`.
- Real video captions/transcripts require supplied or verified media content. This pass labels and defers videos but does not fabricate captions or claim full accessibility conformance.
- Raw-image optimization warnings remain; the site currently exports without a dynamic image optimizer. A future image optimization pass should preserve layout and document actual performance gains.
