# Dongola media — 17 September 2026

Source folder: `../assets_17_9_26/`, supplied by the user. These are the two images and named MP4 omitted from the WhatsApp export.

| Supplied file | Website asset | Identification |
| --- | --- | --- |
| Dongola hospital.png | `/images/dongola-hospital.png` | Three-photo hospital collage showing incubators, staff and a Human Appeal banner acknowledging Saarah's Fund. |
| Dongola impact.JPG.jpeg | `/images/dongola-impact.jpeg` | Impact graphic: two operational incubators, 240 individuals reached (120 girls, 120 boys), 40% increased neonatal care capacity, fewer emergency referrals and staff training. |
| Provision of Incubators to Dongola Maternity Hospital - Personalised Feedback.mp4 | `/videos/dongola-hospital-feedback.mp4` | 48-second hospital feedback video; visually sampled at 10 seconds to confirm incubator footage. |

The Sudan appeal page presents these in a separate update dated 25 May 2026, matching Talib's message. The two hospital incubators are distinct from the 100 low-cost incubators across Sudan. Graphic information is repeated as readable page text; images open in the existing accessible dialog.

Images retain their supplied pixels. Video is encoded as H.264/AAC at its original 1920×1080 resolution with fast-start metadata, reduced from 97,273,004 to 22,638,529 bytes. The original remains untouched in the source folder. Poster is a frame from the supplied video. Playback requires user action and uses `preload="none"`. No captions or transcript have been invented.

Local implementation only; no deployment performed.

Verification: production build and TypeScript passed. Page lint passed with two raw-image optimization warnings. Browser checks confirmed both images load, full-size dialog opens/closes, the video actually plays, and the 375px layout has no horizontal overflow. Desktop and mobile screenshots were inspected. Independent content review found no unsupported claims or confusion between project totals.
