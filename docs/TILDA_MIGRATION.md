# Tilda → GitHub portfolio migration

Source archive: https://vladmyahlovportfolio.tilda.ws/
Canonical site: https://myahlovvlad.github.io/

## Positioning rule

The GitHub Pages site remains the canonical professional identity: **Scientific Software & Instrumentation Engineer**. The Tilda site is treated as an evidence archive for the earlier foundation: biotechnology, analytical chemistry, WorldSkills/Professional skills competitions, STEM mentoring, technical administration, educational-method design, CAD/3D prototyping and public speaking.

This material should support the current engineering narrative rather than create a second competing identity.

## Content to preserve

- Biotechnology education and analytical-chemistry foundation.
- WorldSkills Russia Juniors / Professional skills competition roles and technical-expert experience.
- Mentoring evidence, including student competition outcomes.
- Laboratory chemical analysis and method-development experience.
- Autodesk Inventor / CAD and FDM prototyping background.
- Public talks and educational work around AI/LLM-assisted projects.
- Public archive links: VC.ru, ResearchGate, Dzen and educational materials.

## Content to de-emphasize on the canonical landing

Long certificate chronology, hobby lists, favorite books/series, quotations and duplicated event entries should not occupy primary landing-page space. They may remain in an archive/evidence page if needed.

## Image migration

Images should be copied into the repository under `assets/archive/` rather than hot-linked from Tilda CDN.

Recommended naming convention:

- `profile-vlad-myahlov.webp`
- `worldskills-lab-analysis-2022.webp`
- `worldskills-roscosmos-2022.webp`
- `hydroponics-stem-project-2022.webp`
- `professional-skills-technical-expert-2023.webp`
- `science-education-expedition-2023.webp`

Before committing, use the original source files or a Tilda export/API export and confirm that the photos are owned by the portfolio author or otherwise cleared for republication. Do not use Tilda lazy-load placeholder images as source assets.

## SEO / GEO migration notes

- Keep one canonical URL: `https://myahlovvlad.github.io/`.
- Keep `Person` structured data and enrich `sameAs` with stable public profiles.
- Use one coherent RU/EN professional descriptor.
- Preserve externally verifiable achievements as concise facts with source links where possible.
- Maintain `llms.txt`, `robots.txt` and `sitemap.xml`.
- Add descriptive `alt` text for every migrated image.

## SMM notes

Use the canonical landing as the profile link for GitHub, LinkedIn/other professional networks, ResearchGate and technical articles. Social posts should point to individual engineering case studies rather than to the Tilda archive.
