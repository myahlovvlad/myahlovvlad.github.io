# LCD Bitmap IDE Flagship + Real Media Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make LCD Bitmap IDE the primary public proof on the portfolio, expose direct project links, and publish four real product screenshots on the project page.

**Architecture:** Keep the existing static multipage Portfolio V2 architecture and shared `portfolio.css` / `portfolio.js`. Update only the existing flagship/project surfaces, add real media under `assets/projects/lcd-bitmap-ide/`, and preserve the public/private repository boundary already defined by the portfolio spec.

**Tech Stack:** Static HTML5, CSS, vanilla JavaScript, GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-09-14-portfolio-v2-design.md`

## Global Constraints

- Work only on `refactor/portfolio-v2`; do not modify `main` directly.
- LCD Bitmap IDE becomes the first flagship/public proof on the homepage.
- Public repositories may link directly to GitHub and Releases; private repositories remain sanitized case studies.
- Use only the four user-provided LCD Bitmap IDE screenshots; do not invent product media.
- Keep RU/EN switching, responsive layout, canonical URLs, sitemap and llms index working.

---

### Task 1: Publish real LCD Bitmap IDE media

**Files:**
- Create: `assets/projects/lcd-bitmap-ide/fsm-graph-editor.png`
- Create: `assets/projects/lcd-bitmap-ide/lcd-editor.png`
- Create: `assets/projects/lcd-bitmap-ide/control-panel-editor.png`
- Create: `assets/projects/lcd-bitmap-ide/text-registry.png`

- [ ] Add the four supplied PNG files with semantic filenames.
- [ ] Verify each blob exists on the branch and is referenced by HTML.

### Task 2: Promote LCD Bitmap IDE on the homepage

**Files:**
- Modify: `index.html`
- Modify: `portfolio.css`

- [ ] Reorder flagship evidence so LCD Bitmap IDE is first.
- [ ] Add an actual product screenshot preview to the LCD flagship block.
- [ ] Add explicit links to the project page, GitHub repository and latest release.
- [ ] Keep SpectroNex, Verification Engineering and Instrument Productization as following flagship cases.
- [ ] Verify all relative links resolve.

### Task 3: Expand the LCD Bitmap IDE project page

**Files:**
- Modify: `projects/lcd-bitmap-ide.html`
- Modify: `portfolio.css`

- [ ] Add a real hero/product preview using the supplied screenshots.
- [ ] Add a four-item product screenshot gallery with RU/EN captions for FSM graph editor, LCD editor, control panel editor and multilingual text registry.
- [ ] Keep direct GitHub and Releases links above the fold.
- [ ] Preserve existing problem/workflow/capability/architecture/distribution sections.

### Task 4: Make project links explicit across the catalog

**Files:**
- Modify: `projects/index.html`

- [ ] Keep LCD Bitmap IDE as the first and visually strongest public project.
- [ ] Expose separate `Project page`, `GitHub`, and `Latest release` actions for LCD Bitmap IDE.
- [ ] Keep Q2SC, BioCult and CardVault on dedicated pages with direct GitHub links where public.

### Task 5: SEO/GEO and release verification

**Files:**
- Modify: `sitemap.xml`
- Modify: `llms.txt`

- [ ] Ensure LCD Bitmap IDE remains explicitly indexed as the flagship public engineering project.
- [ ] Verify all new media references and internal links exist on the branch.
- [ ] Compare the branch with `main` and confirm PR #3 remains mergeable.
