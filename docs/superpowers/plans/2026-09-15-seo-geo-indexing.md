# SEO, GEO & Indexing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish a clean multilingual portfolio with renderable product media, explicit language URLs, strong machine-readable entity metadata, and automated search-engine discovery after production deployments.

**Architecture:** Keep the canonical English portfolio at the existing root URLs and add Russian mirrors under `/ru/` for the primary discovery pages. Replace same-URL JavaScript language swapping on those pages with explicit locale links, add `hreflang`/canonical metadata, structured data and image discovery, then notify participating search engines through IndexNow after main-branch deployments.

**Tech Stack:** Static HTML/CSS/JavaScript, GitHub Pages, XML sitemaps, Schema.org JSON-LD, GitHub Actions, IndexNow.

**Spec:** User-approved portfolio-v2 direction in PR #3 plus `docs/POSITIONING.md` and `docs/PROJECT_POSITIONING.md`.

## Global Constraints

- Production canonical host: `https://myahlovvlad.github.io/`.
- English primary URLs remain backward-compatible.
- Russian primary discovery pages live under `/ru/`.
- Employer/private repositories must not be linked publicly.
- Public project claims must link to inspectable public evidence where available.
- PR preview paths must not be indexed.
- No mixed Russian/English sentence-level copy on language-specific landing pages; product names, acronyms and technology names remain unchanged.

---

### Task 1: Repair product media

**Files:**
- Replace: `assets/projects/lcd-bitmap-ide/fsm-graph-editor.webp`
- Replace: `assets/projects/lcd-bitmap-ide/lcd-editor.webp`
- Replace: `assets/projects/lcd-bitmap-ide/control-panel-editor.webp`
- Replace: `assets/projects/lcd-bitmap-ide/text-registry.webp`

- [x] Identify corrupted/truncated repository blobs as the root cause.
- [x] Generate valid web-optimized WebP files from the supplied PNG screenshots.
- [x] Replace the four repository blobs and verify repository SHA/size against local assets.

### Task 2: Make primary English pages language-pure

**Files:**
- Modify: `index.html`
- Modify: `projects/index.html`
- Modify: `projects/lcd-bitmap-ide.html`
- Modify: `portfolio.js`

- [ ] Remove same-page RU/EN text swapping from primary discovery pages.
- [ ] Add explicit RU locale links.
- [ ] Add canonical, hreflang, robots, Open Graph and Twitter metadata.
- [ ] Strengthen entity-oriented headings and evidence links.
- [ ] Prevent `portfolio.js` from rewriting `html[lang]` on pages without the legacy language switch.

### Task 3: Add Russian discovery pages

**Files:**
- Create: `ru/index.html`
- Create: `ru/projects/index.html`
- Create: `ru/projects/lcd-bitmap-ide.html`

- [ ] Publish Russian-only copy with no mixed bilingual sentences.
- [ ] Add reciprocal EN/RU hreflang links and self canonicals.
- [ ] Reuse the same public evidence and product images.

### Task 4: Add structured-data and crawler discovery layer

**Files:**
- Modify: `sitemap.xml`
- Create: `sitemap-images.xml`
- Modify: `robots.txt`
- Modify: `llms.txt`

- [ ] Add EN/RU URL pairs to the main sitemap with `lastmod`.
- [ ] Add an image sitemap for LCD Bitmap IDE product screenshots.
- [ ] Explicitly disallow `/pr-preview/` in robots.txt and advertise both sitemaps.
- [ ] Align `llms.txt` with canonical entity names, pages, evidence and language URLs.

### Task 5: Add deployment-time IndexNow notifications

**Files:**
- Create: root IndexNow key file.
- Create: `.github/workflows/indexing.yml`

- [ ] Host a valid IndexNow key on the production host.
- [ ] On pushes to `main`, wait for Pages availability, collect canonical URLs from `sitemap.xml`, and submit them in one IndexNow request.
- [ ] Keep indexing notification failure non-blocking for site deployment while preserving diagnostics.

### Task 6: Verification and production merge

**Files:**
- Review all changed discovery pages and workflows.

- [ ] Verify image blob hashes and formats.
- [ ] Verify all canonical/hreflang pairs, sitemap URLs, image references and public GitHub links.
- [ ] Verify PR preview workflow and mergeability.
- [ ] Merge PR #3 to `main` only after the checks above pass.
- [ ] Verify the GitHub Pages deployment on the merged commit and check production URLs.
