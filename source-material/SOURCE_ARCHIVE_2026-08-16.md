# Portfolio ZIP source archive — 2026-08-16

This file records the useful source material found in the user-provided `myahlovvlad.github.io.zip`. It is stored on a separate source branch so the production site on `main` remains untouched until the redesign is reviewed.

## Source snapshot

The ZIP contains an evolved bilingual portfolio prototype plus product-specific case pages, media preparation notes and demo-video editing notes.

### Core website files

- `index.html` — bilingual RU/EN portfolio entry point.
- `styles.css` — editorial visual system based on Source Serif 4, Source Sans 3 and IBM Plex Mono.
- `script.js` — RU/EN language switching and reveal behaviour.
- `README.md` — publishing and case-writing rules.
- `site.webmanifest`, `sitemap.xml`, `robots.txt`, `404.html`, `.nojekyll`.
- `.github/workflows/pages.yml` — GitHub Pages deployment.

### Existing case pages

- `products/lcd-bitmap-ide.html` — engineering case for LCD-bitmap IDE.
- `products/spectronex.html` — engineering case for SpectroNex / UV-Vis spectrum-scan workflow.

The existing case-writing principle is useful and should be preserved: one product/case per page; state context, risk, personal contribution, engineering result and the boundary of each claim.

### Existing portfolio positioning

The current prototype positions Vlad Myahlov around scientific-instrument software and the transition from measurement logic to a testable operator workflow. It presents work around laboratory requirements, optics, firmware constraints, UV-Vis interfaces, measurement workflows, integration contracts, test scenarios and technical documentation.

This positioning should be upgraded rather than discarded. The new site should make the stronger thesis explicit:

> Scientific Software & Instrumentation Engineer — from measurement science and instrument behaviour to validated software, HMI/firmware workflows and engineering evidence.

### Media present in the ZIP

Prepared web media:

- `assets/media/lcd-bitmap-ide-poster.jpg` — 181,268 bytes.
- `assets/media/lcd-bitmap-ide-workflow.webm` — 251,563 bytes.
- `assets/media/spectronex-scan-poster.jpg` — 81,103 bytes.
- `assets/media/spectronex-scan-workflow.webm` — 106,818 bytes.

Raw demo recordings:

- `demo video/Demo LCD Bitmap Editor IDE.mp4` — 22,060,325 bytes.
- `demo video/Demo_scan spectrum_hol_1.8_ECROS-5620.mp4` — 83,050,848 bytes.

Do not publish the raw recordings automatically. Review frames for confidential data first. Prefer compact WebM excerpts and poster frames for the public site.

### LCD-bitmap IDE demo story found in the ZIP

The editing notes define a verified story based on the actual screen recording:

1. Select an instrument screen.
2. Edit a 128×64 LCD layout.
3. Link the screen to an FSM state.
4. Inspect transition logic.
5. Configure a transition route.
6. Run the execution scenario.

The notes explicitly warn not to claim firmware export, HMI transfer or flashing to physical hardware when those steps are not shown by the recording.

Recommended public message from the ZIP:

> From LCD screen to FSM scenario validation.

### SpectroNex material found in the ZIP

The portfolio prototype treats SpectroNex as an instrument-control engineering case rather than a generic application. The case centres the spectrum-scan workflow and the alignment of operator path, instrument state and measurement/calculation data.

The new portfolio should expand this into a full industrial case study using the verified workflow and OEM-validation evidence available in the connected/private project sources, while respecting employer IP boundaries.

### Existing media pipeline

The ZIP includes:

- `tools/media-build.ps1`
- `tools/media-pipeline.md`

The pipeline uses FFmpeg to create lightweight muted VP9 WebM clips and JPEG posters from the raw demo recordings. The documented publishing rule prefers WebM over GIF and requires manual confidentiality review before publication.

### Design direction already present in the ZIP

The ZIP contains an editorial/scientific direction that is more suitable than generic AI/SaaS glassmorphism. Useful elements to preserve and develop:

- serif display typography + restrained sans + monospace engineering metadata;
- evidence-first case layouts;
- real screenshots and real engineering artefacts rather than decorative AI imagery;
- warm technical-paper / graphite visual language;
- explicit claim boundaries and maturity/status labels.

The new implementation may use motion, WebGL/3D and richer transitions, but these effects must support engineering storytelling rather than recreate generic glowing-orb, gradient-card or glassmorphism patterns.

## Material intentionally not promoted as source-of-truth

The ZIP also contains local working artefacts such as `.git/`, Playwright logs, Graphify output/cache and editing scratch files. Treat these as process artefacts, not portfolio claims.

## Intended use

Use this source archive together with:

1. the current GitHub repositories;
2. the professional-achievements document for 2024–2026;
3. the old Tilda portfolio only as historical evidence;
4. the current LCD-bitmap IDE landing prototype;
5. the personal-brand notes supplied by the user.

Do not invent metrics, responsibilities, ownership or production status. Every strong claim on the public site must be supported by a repository, document, test artefact, real product outcome or an explicit user-provided fact.
