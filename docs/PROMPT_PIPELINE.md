# Portfolio UI Prompt Pipeline

This document converts the original one-shot "Staff Front-end Engineer + motion architect" prompt into a repeatable pipeline with explicit inputs, review gates, feedback, corrective actions and release criteria.

## Objective

Produce production-ready static portfolio pages without one-shot generation drift. Each page must preserve the same positioning, design system, accessibility baseline, motion grammar and evidence boundaries.

The pipeline is designed for Codex, Claude Code or another repository-aware coding agent. The agent edits real files, runs checks, reads feedback and iterates until acceptance gates pass.

---

## Canonical constraints

### Role

Act as a Staff Front-end Engineer, interaction architect and verification-minded UI engineer. Own semantic HTML, responsive layout, motion, accessibility, performance, content hierarchy and implementation quality.

### Product identity

The site represents one canonical professional identity:

**Vlad Myahlov — Scientific Software & Instrumentation Engineer**

Narrative hierarchy:

1. Current positioning.
2. Industrial engineering evidence.
3. Public inspectable projects.
4. Scientific/STEM foundation.
5. Writing/research and external profiles.

Do not present teaching, science and engineering as unrelated parallel careers.

### Technical stack

- Static HTML5.
- Shared CSS, mobile first from 320 px to 1920 px+.
- Vanilla JavaScript only for progressive enhancement.
- Semantic landmarks: `header`, `nav`, `main`, `section`, `article`, `footer`.
- CSS Grid/Flexbox; no floats.
- `rem`, `%`, `clamp()`, viewport units where appropriate; pixels only for genuinely pixel-bound details such as 1px borders.
- Native CSS transitions/keyframes and small JavaScript interaction controllers.
- No dependency on a framework or build pipeline for the portfolio site.

### Motion grammar

Motion must explain hierarchy or state. It must not be decorative noise.

Allowed patterns:

- section reveal: opacity + small translateY;
- card hover: small translateY + border/shadow response;
- link affordance: underline/offset or small directional movement;
- system diagrams: restrained pointer-depth on fine pointers only;
- menu state: explicit open/closed transition;
- theme/language state: immediate semantic update with restrained visual transition.

Requirements:

- use `prefers-reduced-motion`;
- do not animate layout properties when transform/opacity is sufficient;
- use `will-change` only on elements that actually animate;
- target smooth interaction on ordinary mobile hardware;
- no perpetual looping animation unless it communicates a live system state.

### Accessibility

- keyboard-accessible navigation;
- visible `:focus-visible` states;
- correct heading hierarchy;
- meaningful link text;
- ARIA only when native semantics are insufficient;
- mobile menu must expose `aria-expanded` and `aria-controls`;
- theme and language controls expose pressed/current state;
- all content remains available with motion disabled.

### Content rules

- No Lorem Ipsum.
- No "Coming soon" filler.
- No invented metrics.
- No invented employers, customers, publications, certificates or product outcomes.
- Employer-associated work is sanitized to architecture/workflow/outcome level.
- Proprietary code, binaries, private protocol details and confidential device data are excluded.
- Research prototypes must have explicit maturity labels.
- Public repositories may be used as proof only when the claim is visible in the repository.
- If source evidence is missing, mark the claim as `NEEDS_EVIDENCE` in review notes instead of publishing it.

---

# Pipeline

## Stage 0 — Repository reconnaissance

### Input

- requested page or component;
- repository state;
- existing design system;
- relevant case/project source files;
- current navigation and sitemap.

### Prompt

> Inspect the repository before editing. Identify the current page architecture, shared CSS/JS, navigation patterns, SEO metadata, structured data, content boundaries and relevant evidence sources. Do not implement yet. Produce a compact implementation brief listing: files to change, claims that are directly evidenced, claims that require sanitization, responsive risks, accessibility risks and expected internal links.

### Output contract

```text
PAGE:
USER GOAL:
PRIMARY MESSAGE:
FILES:
EVIDENCED CLAIMS:
IP / CLAIM BOUNDARIES:
RESPONSIVE RISKS:
A11Y RISKS:
INTERNAL LINKS:
ACCEPTANCE TESTS:
```

### Gate G0

Do not continue if the primary message conflicts with the canonical positioning or if required source evidence cannot be located.

---

## Stage 1 — Content architecture

### Prompt

> Convert the page goal into a content hierarchy before writing markup. Define the exact section order and the job of each section. Every section must answer one visitor question. For case studies use: Context → Problem → System Model → Engineering Decisions → Evidence/Verification → Result/Boundary → What This Proves → Related Work. Remove sections that merely repeat skills or biography.

### Required review

Check:

- Can the page be understood in 20–40 seconds by a recruiter or R&D lead?
- Is one primary message dominant?
- Does each claim have a source or safe claim boundary?
- Does the page end with a meaningful next step?

### Gate G1

Reject content architecture if it reads as a CV list, generic agency landing page or technology inventory.

---

## Stage 2 — Visual and motion plan

### Prompt

> Map the approved content hierarchy to the existing design system. Specify layout, information density and motion for mobile, tablet and desktop. Reuse shared tokens and components before adding new ones. Motion must communicate hierarchy, state or causality. Define reduced-motion behaviour at the same time as the default motion.

### Output contract

```text
SECTION → LAYOUT → INTERACTION → REDUCED MOTION
```

### Gate G2

Reject any plan that needs a new animation library without a demonstrated requirement, uses animation as decoration, or creates a visual language inconsistent with the rest of the portfolio.

---

## Stage 3 — Implementation

### Prompt

> Implement the approved page completely. Write production-ready semantic HTML, shared CSS additions and progressive-enhancement JavaScript. Do not leave placeholders, TODOs, pseudocode or comments saying that omitted code is similar. Preserve relative links so both GitHub Pages root deployment and `/pr-preview/pr-N/` deployment work. Add canonical URL, meta description, Open Graph metadata and relevant Schema.org data. Ensure all controls work from keyboard and all motion has a reduced-motion fallback.

### CAPA rule during implementation

If repetition grows:

- Corrective Action: move repeated visual rules into existing CSS variables/classes.
- Preventive Action: reuse structural patterns and shared JS behaviours before creating page-specific code.

Do not solve repetition by omitting content or returning pseudo-code.

---

## Stage 4 — Static verification

### Prompt

> Verify the implementation before visual review. Check HTML structure, CSS syntax, JavaScript syntax, internal links, duplicate IDs, missing canonical/meta data, keyboard control semantics and reduced-motion coverage. Inspect responsive behaviour conceptually at 320, 375, 768, 1024, 1440 and 1920 px. Record defects; do not silently ignore them.

### Mandatory checks

- no unclosed tags;
- no duplicate IDs;
- no broken relative internal links;
- no `href="#"` dummy navigation;
- no missing `alt` on meaningful images;
- no pointer-only interaction;
- no inaccessible mobile navigation;
- no horizontal overflow at 320 px;
- no layout assumption that only works at one breakpoint;
- no CSS animation that ignores reduced motion;
- no public claim beyond evidence boundary.

### Gate G4

All critical defects must be corrected before preview publication.

---

## Stage 5 — Preview review

Publish the PR preview and review the real deployed URL, not only source code.

### Reviewer prompt

> Review the deployed page as four audiences: (1) technical recruiter, (2) R&D / engineering lead, (3) scientific-instrument product stakeholder, (4) accessibility/performance reviewer. For each audience identify the first message received, strongest proof, confusion point and missing evidence. Then score Positioning, Evidence, Information hierarchy, Mobile UX, Motion restraint, Accessibility, SEO/GEO semantics and Cross-page navigation from 1–5.

### Feedback schema

```yaml
page: /cases/example.html
revision: <commit SHA>
reviewer: <human|agent|tool>
severity: <critical|major|minor|suggestion>
category: <positioning|content|visual|motion|a11y|responsive|seo|geo|performance|claim>
observation: "What is wrong or unclear"
evidence: "URL, viewport, selector or source reference"
expected: "Desired behaviour or message"
proposed_action: "Concrete corrective action"
```

---

## Stage 6 — CAPA feedback loop

For every `critical` or `major` feedback item create a CAPA record.

```yaml
problem: "Observed defect"
root_cause: "Why the defect was introduced"
corrective_action: "Change that fixes this instance"
preventive_action: "Rule/test/component change that prevents recurrence"
verification: "How the fix will be checked"
status: <open|implemented|verified>
```

### Prompt

> Apply feedback by root cause, not by cosmetic patching. Fix the current defect, then decide whether a shared style, component pattern, content rule, prompt rule or verification check should change to prevent recurrence. Re-run all gates affected by the correction.

### Stop condition

The loop stops only when:

- no critical feedback remains;
- no major positioning/a11y/responsive defects remain;
- every published claim is evidenced or safely bounded;
- preview navigation is intact;
- reviewer scores for Positioning, Evidence, Information hierarchy and Accessibility are all at least 4/5.

---

## Stage 7 — Release gate

Before merge:

1. Confirm PR preview URL works.
2. Confirm every new page is in `sitemap.xml`.
3. Confirm canonical URLs point to production URLs, never PR preview URLs.
4. Confirm navigation works from root and nested pages.
5. Confirm `llms.txt` reflects major new public pages/claims when relevant.
6. Confirm no Tilda CDN hotlinks are introduced for migrated evidence.
7. Confirm photos/certificates are original owned/licensed files and stored locally.
8. Update PR description with pages added, claims added/removed, verification performed and known evidence gaps.

---

# Page-specific sub-prompts

## Landing page

> Optimize for immediate professional identity and case discovery. Do not duplicate full case content. Sequence: Hero → system positioning → featured cases → public proof → selected evidence → professional trajectory → foundation bridge → collaboration/contact. Every case teaser links to a dedicated case page.

## Engineering case

> Write the page as an engineering argument, not a project diary. The visitor should understand the original system constraint, what was formalized, which decisions mattered, how evidence was obtained, what cannot be disclosed and what capability the case proves.

## Public project page

> Treat the repository as source of truth. Verify current version, platforms, architecture and capability claims from repository files. Separate implemented capability from roadmap or incomplete work. Link to repository/releases as inspectable evidence.

## Foundation page

> Preserve earlier scientific, laboratory, STEM and educational evidence without presenting it as a second current career. Explain how each layer contributes to present systems-engineering capability. Historical photos/certificates belong in a curated evidence archive, not in the hero.

## Writing page

> Separate published external material from editorial-pipeline topics. Never label an unpublished topic as an article. Use writing to establish searchable technical reasoning around the same engineering identity.

---

# One-shot invocation template

Use this only to start a pipeline run. Do not ask the coding agent to skip stages.

```text
Run the Portfolio UI Prompt Pipeline from docs/PROMPT_PIPELINE.md for:

TARGET: <page/path>
GOAL: <visitor outcome>
SOURCE EVIDENCE: <repository files / case notes / approved public sources>
SPECIAL CONSTRAINTS: <IP, language, motion, content>

Start with Stage 0. Do not implement until G0 and G1 are internally satisfied. Implement the complete page, publish/update the PR preview, perform Stage 5 review, apply Stage 6 CAPA corrections, and report the final revision plus preview URL and any unresolved NEEDS_EVIDENCE items.
```
