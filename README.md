# Reza Sepdide — Professional Civil Engineering Portfolio

A modern, high-performance portfolio website for **Reza Sepdide** (*Civil Engineer | Quantity Surveyor & Construction Planner | BIM & CAD Modeler*), built with Next.js 14, TypeScript, and Tailwind CSS. Authenticated against official Curriculum Vitae records and certified credentials.

---

## 1. Professional Overview & Authenticated Data

- **Academic Qualifications**:
  - **Diploma III (D3) Civil Engineering** — Politeknik Negeri Padang (**GPA: 3.72 / 4.00 — Graduated with High Honors / Magna Cum Laude**).
  - **Diploma IV (D4) Construction Engineering Management** — Politeknik Negeri Padang (Aug 2026 – Present).
  - **SMA Negeri 1 Padang** (Natural Sciences & Mathematics, 2019 – 2022).
- **Professional Accreditations & Licenses**:
  - **National Certificate of Competency (SKK) Level 5** — Implementing Intermediate Building Construction Supervisor (BNSP & Kementerian PUPR Balai Jasa Konstruksi Wilayah I Banda Aceh).
  - **Specified Skilled Worker (SSW) Evaluation Exam for Construction Industry** — Japan Association for Construction Human Resources (JAC).
  - **Autodesk Revit Masterclass (BIM)** — Arsisten Academy.
  - **Bilingual Japanese**: JFT-Basic (Score: 250/250) & JLPT Level N4 (Score: 165/180).
  - **Professional English**: TOEIC (Score: 640).
- **Featured Projects & Engineering Scope**:
  1. **SDN 19 Kuamang School Revitalization** (Sep 2026) — DED Blueprints (AutoCAD Layout Viewports), BoQ/RAB, RKS Technical Specifications, Time Schedule & S-Curve.
  2. **SLBN 2 Pariaman Special School Revitalization** (Jul 2026) — Universal accessibility engineering, DED, BoQ/RAB, RKS, and Contract Change Order (CCO) formulation.
  3. **PT Perfetti Van Melle Indonesia Project via PT Mulia Djasmine Sentosa** (Sep 2025) — Freelance Quantity Surveyor, physical on-site re-measurement (MC-100), and Bar Bending Schedule (BBS) engineering.
  4. **Primary School Revitalization Program (Kemendikdasmen)** (Jun 2025 – Dec 2025) — Government Technical Facilitator, DED/BoQ auditing, and milestone disbursement verification.
  5. **Waste Gas Recovery EPC Project (PT Indo-Bharat Rayon Plant)** (Aug 2024 – Dec 2024) — Quality Control & Quantity Surveyor Intern (PT Solusi Industri Energi), fresh concrete slump testing, rebar BBS, monthly progress billing backup volumes, and zone handover punch lists.
  6. **Final Capstone Thesis** — Construction Planning, BoQ/RAB, and Time Schedule & S-Curve on the Pasaman Regency DPRD Building.
  7. **National Tender Competition "Fondasi Days 2025" (UNS)** — Commercial tender proposal, 3D SketchUp site staging, and competitive cost modeling.
  8. **PKM-AI Kemendikbudristek** — Lead author of scientific paper analyzing modular scaffolding cost feasibility.
  9. **Studio Structural Analysis** — 3D finite element frame modeling and dynamic response spectrum seismic analysis using SAP2000.

---

## 2. Clean & Idiomatic Codebase Architecture

The project has been cleaned of unnecessary enterprise boilerplate, refactored into a lean, modular Next.js architecture:

```text
src/
├── app/                                # Next.js 14 App Router
│   ├── globals.css                     # Design tokens, typography & print stylesheet
│   ├── layout.tsx                      # Root layout & SEO metadata
│   └── page.tsx                        # Main landing page
│
├── components/                         # Modular UI Components
│   ├── Navbar.tsx                      # Header with navigation & PDF export dropdown
│   ├── HeroSection.tsx                 # Profile headline, summary & key metrics
│   ├── CorePrinciples.tsx              # Engineering approach & work ethic
│   ├── FeaturedProjects.tsx            # Project cards, category filters & image viewer modal
│   ├── ExperienceTimeline.tsx          # Chronological career progression & scope
│   ├── SkillsMatrix.tsx                # Categorized technical competencies
│   ├── EducationCertifications.tsx     # Degrees, BNSP license & credentials
│   ├── ContactSection.tsx              # Direct contact channels & inquiry form
│   ├── Footer.tsx                      # Colophon & credentials summary
│   ├── PdfExportModal.tsx              # Modal for downloading full portfolios & CVs
│   ├── PdfViewerModal.tsx              # Embedded in-app PDF previewer
│   └── index.ts                        # Clean component exports
│
├── context/
│   └── PdfModalContext.tsx             # Context provider for PDF viewer & export dialogs
│
├── data/
│   └── cv-data.ts                      # Authenticated single source of truth for portfolio data
│
├── hooks/
│   └── useActiveSection.ts             # Navigation scroll-spy hook
│
└── types/
    └── index.ts                        # Clean, strongly-typed TypeScript interfaces
```

---

## 3. How to Run & Build

### Development Mode
```bash
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

### Production Build & Export
```bash
npm run build
```
Creates an optimized static export in the `out/` folder and automatically synchronizes the build artifacts (`index.html`, `_next/`, etc.) to the root directory for hosting on GitHub Pages or any static web host.

### Local Static Preview
```bash
node preview-server.js
```
Serves the statically exported files on `http://127.0.0.1:3000`.
