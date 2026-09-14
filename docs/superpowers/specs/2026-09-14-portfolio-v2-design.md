# Portfolio V2 Design Spec

## Goal

Turn `myahlovvlad.github.io` into the canonical professional portfolio for **Vlad Myahlov — Scientific Software & Instrumentation Engineer**, with evidence-first case studies, public project proofs, sanitized private-project pages, and search-engine/LLM-readable semantics.

## Canonical positioning

**EN:** Scientific Software & Instrumentation Engineer  
**RU:** Инженер научного и приборного ПО

Core narrative:

`measurement science → instrument behaviour → firmware/HMI → scientific software → verification / validation → engineering evidence`

The site must not present technical writing, frontend work, AI coding, chemistry, teaching, or research as unrelated parallel identities. They are supporting layers of one systems-engineering trajectory.

## Audience priority

1. R&D / engineering leads in scientific instrumentation.
2. Scientific software and laboratory automation teams.
3. Pharma / GxP / validation teams.
4. Recruiters hiring scientific-software, systems, verification or technical-product engineers.
5. Industrial partners evaluating instrument-control, HMI, validation or engineering-automation work.

## Information architecture

### Home

The homepage is a positioning and discovery surface, not a complete CV. Sequence:

1. Hero and professional thesis.
2. Instrument/software/verification capability model.
3. Selected outcomes/evidence.
4. Flagship engineering cases.
5. Public inspectable proof.
6. Scientific/laboratory foundation.
7. Contact / GitHub / ResearchGate.

### Engineering cases

Employer-associated or private repositories are represented as sanitized case studies. Pages explain problem, architecture, workflow, verification and outcome without exposing proprietary code, private logs, binaries, device secrets, confidential identifiers, vendor-specific implementation details or unpublished internal documents.

Primary case families:

- Scientific instrument productization.
- Scientific instrument control software / SpectroNex.
- Verification-first engineering.
- Embedded HMI / firmware workflow engineering.
- Cross-platform instrument data bridge / lab-data integrity.
- Firmware research and reconstruction methods.
- Measurement workflow engineering / traceability harness.
- Local-first engineering agent system.

### Public projects

Public repositories receive inspectable project pages with repository links and explicit maturity labels:

- LCD Bitmap IDE — flagship public engineering proof.
- Q2SC Platform — research alpha, computational chemistry / predictive spectroscopy.
- BioCult-KB — experimental bioprocess knowledge and modelling system.
- CardVault — cross-platform OCR/contact-capture application and mobile/desktop delivery case.

### Legacy / precursor repositories

Repositories that are primarily predecessors or subsystem snapshots should not be marketed as independent flagship products when that would fragment the story. They may be presented as evolution stages and linked to the current canonical case.

`frontend_28-05-2026` is positioned as the canonical SPA/UI refactor stage inside the SpectroNex evolution story rather than as a separate product identity.

## Project-to-positioning map

| Repository | Visibility | Portfolio role |
|---|---|---|
| `LCD-bitmap-IDE` | public | Flagship open-source embedded HMI/FSM engineering product |
| `q2sc-platform` | public | Computational chemistry and predictive spectroscopy research platform |
| `Cultivation-collagenase` | public | Bioprocess modelling / knowledge-system research prototype |
| `card-vault-tauri` | public | Cross-platform OCR/contact workflow product prototype |
| `SpectroNex` | private | Flagship scientific instrument control and measurement-workflow case |
| `spectrobridge-tauri` | private | Cross-platform laboratory data bridge and controlled spreadsheet handoff case |
| `firmware-x8-research` | private | Sanitized firmware-research / reconstruction methodology case |
| `wavelength-scan` | private | Measurement workflow, traceability and verification-harness case |
| `local-ai-agent-system` | private | Local-first evidence-aware engineering-agent case |
| `frontend_28-05-2026` | private | SpectroNex SPA refactor/evolution evidence, not separate flagship |

## Case-study structure

Every strong case uses this argument:

`Context → Problem → Constraints → My contribution → System model / architecture → Engineering decisions → Verification / evidence → Result → Claim/IP boundary → What this proves`

A page must answer what capability the case demonstrates. It must not read like a repository README or chronological project diary.

## Claim rules

Every strong public claim must be one of:

1. directly supported by a public repository/artifact;
2. supported by user-approved private evidence and conservatively sanitized;
3. explicitly labelled research/prototype/experimental;
4. withheld.

No invented metrics, customers, responsibilities, production status, validation status, regulatory status, publications or commercial outcomes.

## Media system

Prefer real engineering evidence over decorative imagery.

Recommended asset groups:

- `assets/cases/spectronex/`
- `assets/cases/verification/`
- `assets/cases/spectrobridge/`
- `assets/cases/firmware-research/`
- `assets/projects/lcd-bitmap-ide/`
- `assets/projects/q2sc/`
- `assets/projects/biocult/`
- `assets/projects/cardvault/`
- `assets/foundation/`

Preferred formats: SVG for diagrams, WebP/AVIF for photos, WebM for short muted demos, PNG only where UI screenshot fidelity requires it.

## SEO / GEO

Each indexable page must have a unique title, meta description, canonical URL, Open Graph metadata, semantic heading hierarchy and internal links. Key project pages use `SoftwareApplication`; case pages use `Article`/`TechArticle` where appropriate; the homepage uses `Person` + `WebSite`. Keep `sitemap.xml`, `robots.txt` and `llms.txt` synchronized.

The first implementation keeps the existing EN/RU progressive-enhancement switch for compatibility. A later multilingual phase may move to separate `/en/` and `/ru/` canonical URL trees with `hreflang`; this refactor must not block that migration.

## Design system

Retain the existing editorial/scientific visual language from Portfolio V2: restrained paper/graphite surfaces, serif/sans/mono hierarchy, evidence consoles, system diagrams and bounded motion. Motion explains hierarchy or system state and respects `prefers-reduced-motion`.

## Acceptance criteria

- Production candidate is multipage and internally connected.
- Homepage leads with industrial scientific-instrument engineering.
- Every significant repository has a deliberate portfolio role.
- Private repositories never link to private GitHub pages or disclose implementation secrets.
- Public repositories link to inspectable source/release evidence.
- Project maturity is explicit.
- New pages are included in `sitemap.xml` and `llms.txt`.
- No critical accessibility/navigation defects are introduced.
- Media placeholders are not invented; missing evidence is recorded as a concrete asset request.