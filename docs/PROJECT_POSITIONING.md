# Project Positioning Registry

This registry defines how each owned repository contributes to the canonical professional identity: **Scientific Software, Instrumentation & Validation Engineer**.

| Repository | Visibility | Maturity | Portfolio position | Primary proof | Target page |
|---|---|---|---|---|---|
| `LCD-bitmap-IDE` | Public | Flagship engineering tool | Primary public proof: Embedded HMI / FSM engineering workbench | Deterministic project model, real product UI, FSM/runtime validation, multilingual text registry, firmware exports, REST/MCP automation, desktop releases | `/projects/lcd-bitmap-ide.html` |
| `q2sc-platform` | Public | Research alpha | Computational chemistry and predictive spectroscopy platform | PySCF calculation path, QSAR/QSPR/chemometrics architecture, traceability-oriented research software | `/projects/q2sc.html` |
| `Cultivation-collagenase` | Public | Experimental research | Bioprocess modelling and knowledge-system prototype | Structured domain knowledge, process simulation, COBRA/SBML and OMICS context | `/projects/biocult.html` |
| `card-vault-tauri` | Public | Product prototype | Cross-platform OCR → verified structured-contact workflow | OCR with human confirmation, local-first data model, QR/vCard exchange, Windows/Android delivery and iOS CI validation | `/projects/cardvault.html` |
| `SpectroNex` | Private | Industrial prototype / active engineering case | Flagship private scientific instrument control case | Protocol → HAL → state → measurement core → workflow → operator application; real-hardware verification | `/cases/instrument-control-software.html` |
| `spectrobridge-tauri` | Private | Cross-platform utility / industrial case | Laboratory data bridge and controlled spreadsheet handoff | Serial acquisition, packet validation, audit-oriented journal, protected workbook-copy workflow, multi-OS packaging | `/cases/spectrobridge.html` |
| `firmware-x8-research` | Private | Research / reverse-engineering environment | Firmware research and reconstruction methodology | Structured evidence extraction, resource analysis, emulator/reconstruction tooling and hardware/software system modelling | `/cases/firmware-research.html` |
| `wavelength-scan` | Private | Validation / engineering workspace | Measurement workflow and verification-harness case | Controlled repo zones, traceability, run packages, logs/plots/reports and repeatable test evidence | `/cases/measurement-workflow.html` |
| `local-ai-agent-system` | Private | Prototype | Local-first evidence-aware engineering agent | Local indexing/search, approval-gated delegation, audit trail, report/evidence generation and constrained safety boundary | `/cases/local-agent-os.html` |
| `frontend_28-05-2026` | Private | Precursor / subsystem snapshot | SpectroNex frontend evolution evidence | Canonical SPA, mock instrument path, shared measurement shell and mode registry | Integrated into `/cases/instrument-control-software.html`; no standalone product page |

## Portfolio hierarchy

### Tier S — lead with these

1. **LCD Bitmap IDE** — primary public, directly inspectable proof of engineering execution.
2. **SpectroNex / Scientific Instrument Control Software** — strongest sanitized industrial instrument-control case.
3. **Verification-first Engineering** — validation, traceability and evidence discipline.
4. **Scientific Instrument Productization** — system/product integration across testing, metrology, HMI and documentation.

### Tier A — strong supporting engineering cases

- SpectroBridge / laboratory data bridge.
- Firmware research and reconstruction methodology.
- Measurement workflow / traceability harness.
- Local Agent OS / evidence-aware engineering automation.

### Tier B — scientific and product breadth

- Q2SC Platform.
- BioCult-KB.
- CardVault.

## Public/private rule

Public repositories may link directly to GitHub and Releases and should expose those links clearly from both the project catalog and dedicated page. Private repositories must never expose a private GitHub URL on the portfolio. Their pages are case studies of ideas, system boundaries, workflows, decisions and engineering evidence only.

## Media rule

Use real product screenshots, diagrams and engineering outputs when available. For LCD Bitmap IDE, the canonical public media set is the FSM graph editor, LCD screen editor, control-panel editor and multilingual text registry stored under `/assets/projects/lcd-bitmap-ide/`.

## Language rule

Do not use repository names as the only professional message when a clearer engineering concept exists. The heading and summary must answer **what problem/capability this proves**; the repository/product name is the evidence-bearing artifact.
