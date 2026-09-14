# Portfolio V2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio as an evidence-first multipage showcase of scientific software, instrumentation, verification and public engineering work.

**Architecture:** Use the existing static HTML/CSS/JS Portfolio V2 design system. Public repositories receive inspectable project pages; private repositories receive sanitized case pages. Shared navigation, SEO metadata, sitemap/LLM index and claim rules remain centralized.

**Tech Stack:** Static HTML5, shared CSS, vanilla JavaScript, GitHub Pages, Schema.org JSON-LD.

**Spec:** `docs/superpowers/specs/2026-09-14-portfolio-v2-design.md`

## Global Constraints

- Canonical identity: `Vlad Myahlov — Scientific Software & Instrumentation Engineer`.
- Industrial engineering evidence leads; research supports breadth.
- No invented metrics or claims.
- No private repository links, proprietary code, binaries, private logs or confidential identifiers on public pages.
- Public repository capabilities must be grounded in repository evidence.
- Research/prototype maturity must be explicit.
- Existing static/no-build architecture remains intact.
- Every new page must have canonical/meta/OG metadata and internal navigation.

---

### Task 1: Establish Portfolio V2 baseline

**Files:**
- Modify: `index.html`
- Create/modify: `cases/**`, `projects/**`, `about/**`, `foundation/**`, `writing/**`
- Create: `docs/POSITIONING.md`, `docs/CLAIM_REGISTER.md`, `docs/TILDA_MIGRATION.md`, `docs/PROMPT_PIPELINE.md`
- Create: `portfolio.css`, `portfolio.js`, `llms.txt`

**Produces:** Multipage baseline from the reviewed PR #1 design, rebased conceptually onto current `main` without merging stale preview history.

- [x] Copy the reviewed multipage files from PR #1 onto `refactor/portfolio-v2`.
- [x] Keep current `main` as parent so preview artifacts/history are not merged wholesale.
- [x] Commit baseline as `refactor: establish portfolio v2 multipage baseline`.

### Task 2: Add project taxonomy and positioning registry

**Files:**
- Modify: `docs/CLAIM_REGISTER.md`
- Create: `docs/PROJECT_POSITIONING.md`
- Modify: `projects/index.html`

**Produces:** One deliberate portfolio role for every owned project repository.

- [ ] Add repository visibility, maturity, audience, core proof, public wording and page target for each repository.
- [ ] Mark precursor/snapshot repositories as evolution evidence rather than separate flagship products.
- [ ] Update Projects index so public proof and private case-study work are clearly separated.
- [ ] Verify no private GitHub URL is emitted.
- [ ] Commit `content: define project positioning taxonomy`.

### Task 3: Expand public project pages

**Files:**
- Modify: `projects/lcd-bitmap-ide.html`
- Create: `projects/q2sc.html`
- Create: `projects/biocult.html`
- Create: `projects/cardvault.html`

**Produces:** Inspectable pages grounded in public repositories.

- [ ] Keep LCD Bitmap IDE as flagship public proof and update its current implemented-capability language from README evidence.
- [ ] Create Q2SC research-alpha page with explicit scientific-validation boundary.
- [ ] Create BioCult-KB experimental page focused on knowledge structure, modelling and biotechnology foundation.
- [ ] Create CardVault product-prototype page focused on OCR → human confirmation → structured contact workflow and cross-platform delivery.
- [ ] Add repository links only for these public pages.
- [ ] Commit `content: add public project case pages`.

### Task 4: Add sanitized private-project case pages

**Files:**
- Create: `cases/spectrobridge.html`
- Create: `cases/firmware-research.html`
- Create: `cases/measurement-workflow.html`
- Create: `cases/local-agent-os.html`
- Modify: `cases/instrument-control-software.html`
- Modify: `cases/index.html`

**Produces:** Public case studies that demonstrate methods without leaking private implementation details.

- [ ] Reframe Instrument Control Software explicitly as the sanitized SpectroNex flagship case.
- [ ] Create cross-platform instrument data bridge / controlled spreadsheet handoff case from `spectrobridge-tauri` evidence.
- [ ] Create firmware-research methodology page that omits vendor-specific addresses, binaries, bypass details, private protocols and confidential artifacts.
- [ ] Create measurement-workflow/traceability case from `wavelength-scan`; describe canonical evidence zones and controlled run packages without private dataset contents.
- [ ] Create Local Agent OS case describing local-first indexing, approval-gated external delegation, evidence manifests and current safety boundary.
- [ ] Treat `frontend_28-05-2026` as evolution evidence inside SpectroNex, not a standalone product.
- [ ] Verify private GitHub repository URLs never appear in rendered pages.
- [ ] Commit `content: add sanitized private engineering cases`.

### Task 5: Reposition homepage around achievements and evidence

**Files:**
- Modify: `index.html`

**Produces:** Recruiter/R&D discovery flow that reaches strongest evidence within one screen and flagship cases within two sections.

- [ ] Keep the measurement → instrument → firmware/HMI → software → verification stack.
- [ ] Add selected evidence/outcomes without unsupported commercial metrics.
- [ ] Ensure flagship order is SpectroNex / Verification / LCD Bitmap IDE / Productization.
- [ ] Move research projects to supporting breadth rather than primary product cards.
- [ ] Add direct links to project/case pages.
- [ ] Commit `content: refocus homepage on engineering evidence`.

### Task 6: SEO / GEO index synchronization

**Files:**
- Modify: `sitemap.xml`
- Modify: `llms.txt`
- Modify: page `<head>` metadata as needed

**Produces:** Crawlable page graph and machine-readable professional identity.

- [ ] Add all new canonical pages to sitemap.
- [ ] Add all important public/sanitized pages to `llms.txt`.
- [ ] Ensure unique titles/descriptions and correct canonical URLs.
- [ ] Keep private repository names only where safe and never include private GitHub URLs.
- [ ] Commit `seo: expand portfolio discovery surface`.

### Task 7: Media evidence manifest

**Files:**
- Create: `docs/MEDIA_REQUESTS.md`

**Produces:** Exact list of missing screenshots/photos/plots/video evidence, with page location and confidentiality guidance.

- [ ] Request only assets that materially improve proof.
- [ ] Define recommended crop/content, not proprietary content.
- [ ] Map every asset to a target page/section.
- [ ] Commit `docs: define portfolio media evidence requests`.

### Task 8: Verification and PR

**Files:**
- Review all changed files.

**Produces:** Reviewable draft PR with documented residual evidence gaps.

- [ ] Check internal relative links from root and nested pages.
- [ ] Check every meaningful page has one H1, title, description and canonical URL.
- [ ] Check no private GitHub URL is present in public HTML, sitemap or llms index.
- [ ] Check project maturity labels match evidence.
- [ ] Check `sitemap.xml` contains all intended canonical pages.
- [ ] Check navigation and footer links include new surfaces where appropriate.
- [ ] Open a draft PR against `main` and document media gaps rather than inventing media.
