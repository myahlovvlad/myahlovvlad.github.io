# Claim Register

Public claims are controlled here before they are promoted into the portfolio. `Approved private` means the claim may be described in sanitized form but the underlying private repository or evidence must not be linked publicly.

| ID | Claim | Evidence | Public wording | Status |
|---|---|---|---|---|
| POS-001 | Professional identity spans scientific software and instrumentation | Portfolio history + project set | Scientific Software & Instrumentation Engineer | Approved |
| UVV-001 | Experience with single- and double-beam UV-Vis workflows | Private instrument validation work | Single + double beam UV-Vis measurement workflows | Approved private |
| LCD-001 | LCD Bitmap IDE is an offline HMI/FSM workbench | Public README | Offline workbench for LCD/FSM design and validation | Approved |
| LCD-002 | LCD Bitmap IDE supports Electron + Tauri and Windows/Linux/macOS releases | Public README + Releases | Electron · Tauri · Windows/Linux/macOS | Approved |
| LCD-003 | LCD Bitmap IDE exposes local REST/MCP automation | Public README | Local REST + MCP automation | Approved |
| LCD-004 | LCD Bitmap IDE exports firmware-ready display assets | Public README | Firmware-ready embedded exports | Approved |
| SPX-001 | SpectroNex uses protocol/HAL/state/measurement-core/workflow layering | Private README | Sanitized layered instrument-control architecture | Approved private |
| SPX-002 | Spectrum Scan canonical workflow is Baseline → Rezero → Sample | Private README | Baseline → Rezero → Sample | Approved private |
| SPX-003 | A canonical SPA and mock instrument path were used during frontend evolution | Private frontend repository | Canonical SPA + mock instrument workflow used as engineering evolution evidence | Approved private |
| VRF-001 | Work includes FAT/OQ-related testing, metrology and CAPA-oriented methods | Work history + private evidence | FAT/OQ-related testing · metrology · CAPA-oriented methods | Approved private |
| BRG-001 | A cross-platform instrument bridge validates serial packets and controls spreadsheet handoff | Private project README | Controlled instrument-to-spreadsheet data bridge | Approved private |
| BRG-002 | The bridge uses a journal and protected working-copy approach | Private project README | Operator-visible transfer journal + protected workbook copy | Approved private |
| FWR-001 | Firmware research workspace separates evidence, decoded resources, architecture notes, emulation and reconstruction | Private repository structure | Evidence-driven firmware research and reconstruction methodology | Approved private |
| WFS-001 | Measurement workflow repository uses controlled test/evidence zones and run packages | Private README | Traceable measurement run packages with raw, processed, plots, logs and reports | Approved private |
| AOS-001 | Local Agent OS indexes/searches local files and gates external delegation behind explicit approval | Private README | Local-first agent with approval-gated external research | Approved private |
| AOS-002 | Local Agent OS writes audit/evidence artifacts | Private README | Audit record + report + evidence manifest | Approved private |
| Q2S-001 | Q2SC contains a real PySCF calculation path | Public README | PySCF-based quantum calculation workflow | Approved |
| Q2S-002 | Q2SC predictive models require separate scientific validation | Public README | Research alpha; model/spectral validation required | Approved |
| BIO-001 | BioCult-KB combines process simulation, COBRA/SBML and OMICS context | Public README | Experimental bioprocess modelling and knowledge-system prototype | Approved |
| CRD-001 | CardVault performs OCR with user confirmation before structured save | Public README | OCR → field proposal → user confirmation → structured contact | Approved |
| CRD-002 | CardVault supports local storage, JSON backup, CSV/vCard and QR exchange | Public README | Local-first contact storage and portable exchange | Approved |
| CRD-003 | CardVault has Windows/Android delivery and iOS simulator CI | Public README | Cross-platform desktop/mobile product prototype | Approved |
| OEM-001 | Redesigned HMI behaviour specification was implemented by an OEM partner | Explicit user-provided professional fact | Redesigned behaviour specification was implemented in the target instrument | Approved private; conservative wording |
| MET-001 | Firmware iteration reduced from ~3 months to ~2 weeks | User comparison; baseline scope incomplete | Omit until comparison basis is documented | Withheld |
| MET-002 | Five measurement modes are OEM-validated | User validation history; evidence review incomplete | Omit numeric claim | Withheld |
| RSH-001 | Research prototypes are production-ready | Not supported | Explicitly label Research / Alpha / Experimental | Rejected |

## Rules

- Private GitHub URLs never appear in public HTML, sitemap or `llms.txt`.
- Public project pages may link to public repositories and Releases.
- Every numeric commercial, validation or productivity claim requires a documented comparison basis.
- If a claim becomes uncertain after repository changes, downgrade it to `Withheld` until re-verified.
