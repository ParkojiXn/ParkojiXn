# Interactive & Professional Portfolio — Reza Sepdide

A modern, high-impact engineering portfolio website for **Reza Sepdide** (*Civil Engineer | Quantity Surveyor & Construction Planner | BIM & CAD Modeler*), built in accordance with the **VoiceBox Design System** (`voicebox-DESIGN.md`) and verified against official Curriculum Vitae records (`CV_Reza_Sepdide_Profesional.docx`) with zero extrapolation.

---

## 1. Design System & Human-Centered Philosophy

- **Visual Identity**: *Bold, opinionated, editorial magazine aesthetic*. High-contrast monochrome architecture (`#0A0A0A` & `#FAFAFA`) punctuated with intentional, precise red accents (`#EF4444`).
- **Human Touch & Storytelling**:
  - **Engineering Mindset & Principles**: Dedicated 4-pillar section articulating Reza's work ethic—*Field-First Practicality*, *Zero-Waste Cost Governance*, *Human Multi-Stakeholder Communication*, and *Relentless Craft & Learning*.
  - **Behind the Blueprints Callout**: Introduces the human builder behind the calculations, his multilingual background (Indonesian native, JLPT N4 / SSW Japanese certified, TOEIC 640 English), and his transition into advanced D4 Construction Engineering Management.
  - **Direct WhatsApp Chat & Touchpoints**: Streamlined communication channels enabling immediate collaboration, contractor consultation, or hiring interviews.
- **Color Palette**:
  - **Primary**: `#0A0A0A` (Black)
  - **Accent**: `#EF4444` (Vibrant Editorial Red)
  - **Background**: `#FAFAFA` (Clean White Surface)
  - **Muted Surface**: `#F5F5F5` (Card & Quote Backgrounds)
  - **Borders**: `#E5E5E5` (Subtle), `#D4D4D4` (Medium), `#0A0A0A` (Strong)
  - **Semantic**: Success `#16A34A` (Background `#F0FDF4`), Error `#EF4444`
- **Typography**:
  - **Display / Headings**: `Archivo Black` (Bold uppercase editorial titling)
  - **UI / Body Prose**: `Work Sans` (Highly legible human typography)
  - **Monospace**: `Space Mono` (Engineering data, datelines, and technical tags)
- **Geometry & Micro-Interactions**:
  - Mandatory `0px` border radius across all cards, inputs, and buttons for crisp architectural discipline.
  - Interactive project detail modal, expandable timeline milestones, categorized skill tabs, and validated contact dispatch.

---

## 2. Authenticated Engineering Data

All career milestones, academic credentials, and project metrics are authenticated directly from official records:

- **Academic Foundations**:
  - D3 Civil Engineering — Politeknik Negeri Padang (**GPA: 3.72 / 4.00 — Graduated with High Distinction**).
  - D4 Construction Engineering & Project Management — Politeknik Negeri Padang (Aug 2026 – Present).
  - SMA Negeri 1 Padang (Natural Sciences: Mathematics & Physics, 2019 – 2022).
- **Official Accreditations & Licenses**:
  - National Certificate of Competency (SKK) **Intermediate Building Construction  (Level 5 KKNI) — BNSP** & Ministry of Public Works (BJKW I Banda Aceh).
  - Certificate of Completion: **Revit Masterclass for Beginners (BIM)** — Arsisten Academy.
  - **Specified Skilled Worker (SSW)** Evaluation Exam for Construction Industry — JAC Japan.
  - Japanese Language Proficiency: **JFT-Basic Score 250 & JLPT N4 Score 165**.
  - English Language Proficiency: **TOEIC Score 640**.
- **Real-World Project Portfolio**:
  1. Technical Planning Engineer (SDN 19 Kuamang Elementary School Revitalization) — Sep 2026.
  2. Technical Planning Engineer (SLBN 2 Pariaman Special Education School Revitalization) — Jul 2026 (including formal Contract Change Order / CCO management).
  3. Freelance Quantity Surveyor (PT Mulia Djasmine Sentosa for PT Perfetti Van Melle Indonesia) — Sep 2025.
  4. Technical Facilitator for School Revitalization (Ministry of Primary & Secondary Education) — Jun 2025 – Dec 2025.
  5. Quality Control & Quantity Surveyor Intern (PT Solusi Industri Energi for Waste Gas Recovery Project at PT Indo-Bharat Rayon Purwakarta) — Aug 2024 – Dec 2024 (Bar Bending Schedules, fresh concrete slump testing, progress billing backup volumes).
  6. Final Capstone Project: Construction Planning, BoQ/RAB, & S-Curve Scheduling for the Pasaman Regency DPRD Legislative Complex.
  7. National Construction Tender Competition "Fondasi Days 2025" (Universitas Sebelas Maret - UNS).
  8. National Student Scientific Research Program (PKM-AI Kemendikbudristek): Scaffolding Cost Feasibility Analysis.
  9. Pre-Project Finite Element Structural Modeling & Seismic Analysis in SAP2000.

---

## 3. Clean Architecture Codebase Structure

The website is engineered following **Clean Architecture (Domain-Driven & Layered Architecture)** principles, enforcing strict separation of concerns, inward dependency flow, and high testability:

```text
src/
├── core/                               # [DOMAIN LAYER] Enterprise Business Rules (Zero Framework Dependencies)
│   ├── entities/                       # Core domain entities & models
│   │   ├── Profile.ts                  # ProfileData, CoreValue, KeyStat, ContactChannel
│   │   ├── Project.ts                  # Project, ProjectMediaItem, ProjectDocument, ProjectCategory
│   │   ├── Experience.ts               # Experience, MediaPreviewItem, DocumentItem
│   │   ├── Education.ts                # Education, DegreeDetails
│   │   ├── Certification.ts            # Certification, CertificationFile
│   │   ├── Skill.ts                    # SkillCategory, SkillItem
│   │   └── index.ts                    # Barrel export
│   └── repositories/                   # Domain repository interfaces (Ports)
│       └── ICvRepository.ts            # Contract for CV data retrieval & queries
│
├── application/                        # [APPLICATION LAYER] Use Cases & Business Workflows
│   ├── use-cases/                      # High-level business interactors
│   │   ├── GetProfileUseCase.ts        # Retrieve profile information and core stats
│   │   ├── GetProjectsUseCase.ts       # Retrieve projects & category counts
│   │   ├── GetExperiencesUseCase.ts    # Retrieve timeline experiences
│   │   ├── GetEducationUseCase.ts      # Retrieve education & degree records
│   │   ├── GetCertificationsUseCase.ts# Retrieve official accreditations & certificates
│   │   ├── GetSkillsUseCase.ts         # Retrieve categorised technical competencies
│   │   └── index.ts                    # Barrel export
│   └── index.ts
│
├── infrastructure/                     # [INFRASTRUCTURE LAYER] Data Sources & Concrete Adapters
│   ├── data/                           # Authenticated static domain data
│   │   └── cv-data.ts                  # Authentic CV records adhering to verified docs
│   ├── repositories/                   # Concrete repository implementations (Adapters)
│   │   └── StaticCvRepository.ts       # Implementation of ICvRepository
│   ├── services/                       # External / infrastructure adapters
│   │   └── PdfExportService.ts         # PDF printing & download service adapter
│   └── di/                             # Dependency Injection / Service Container
│       └── container.ts                # Provides singleton instances of repositories & use cases
│
├── presentation/                       # [PRESENTATION LAYER] UI, Controllers & State
│   ├── components/                     # Modular component hierarchy
│   │   ├── layout/                     # Application layout scaffolding
│   │   │   ├── Navbar.tsx              # Sticky header navigation, status ticker, export dropdown
│   │   │   └── Footer.tsx              # Architectural magazine colophon
│   │   ├── features/                   # Feature-driven UI modules
│   │   │   ├── hero/HeroSection.tsx    # Hero headline, executive summary, verified badges
│   │   │   ├── principles/CorePrinciples.tsx # 4-pillar engineering methodology & work ethic
│   │   │   ├── projects/FeaturedProjects.tsx # Project showcase, category tabs, modal dossier
│   │   │   ├── experience/ExperienceTimeline.tsx # Career timeline, responsibilities & impact
│   │   │   ├── skills/SkillsMatrix.tsx # Technical skills matrix & tools
│   │   │   ├── education/EducationCertifications.tsx # Formal degrees & BNSP/SSW certifications
│   │   │   ├── contact/ContactSection.tsx # Direct channels & consultation
│   │   │   └── pdf/                    # PDF document previewer & print export modals
│   │   └── shared/                     # Reusable presentation atoms & components
│   │       └── SectionHeader.tsx       # Reusable editorial section header
│   ├── context/                        # Presentation state management
│   │   └── PdfModalContext.tsx         # Modal state provider & consumer hook
│   └── hooks/                          # Custom presentation hooks / View-models
│       ├── useActiveSection.ts         # Navigation scroll spy hook
│       └── useCvPortfolio.ts           # Hook connecting presentation to application use cases
│
└── app/                                # [FRAMEWORK / DELIVERY LAYER] Next.js App Router
    ├── globals.css                     # VoiceBox design tokens & reset
    ├── layout.tsx                      # Root layout & font injection
    └── page.tsx                        # Home route composing presentation features
```

---

## 4. How to Run the Website

### Option A: Open Directly in Browser or Laragon
Because `index.html` is provided as a standalone preview, you can:
- Open `http://localhost/ParkojiXn` in your browser if running Laragon / Apache.
- Or simply double-click `index.html` in Windows File Explorer.
- Or start the preview server:
  ```bash
  node preview-server.js
  ```
  Then visit `http://127.0.0.1:3000`.

### Option B: Next.js Development Server
```bash
npm install
npm run dev
```
Then visit `http://localhost:3000` to preview with Hot Module Replacement (HMR).

### Option C: Production Build & Static Export
```bash
npm run build
```
Generates an optimized static production export into the `out/` directory.
