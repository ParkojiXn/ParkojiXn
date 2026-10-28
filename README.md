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
  - National Certificate of Competency (SKK) **Intermediate Building Construction Supervisor (Level 5 KKNI) — BNSP** & Ministry of Public Works (BJKW I Banda Aceh).
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

## 3. Repository & Code Architecture

```text
├── package.json               # Next.js 14, React 18, Tailwind CSS, Lucide icons, Framer Motion
├── tsconfig.json              # TypeScript compiler configuration
├── tailwind.config.ts         # VoiceBox color tokens, font stacks & typography scales
├── postcss.config.js          # PostCSS configuration
├── voicebox-DESIGN.md         # VoiceBox Design System specifications
├── CV_Reza_Sepdide_Profesional.docx # Original authenticated CV source file
├── index.html                 # Standalone interactive preview (accessible directly in browser/Laragon)
├── preview-server.js          # Built-in local HTTP preview server
├── public/
│   ├── profile.jpg            # Authentic portrait of Reza Sepdide
│   └── CV_Reza_Sepdide_Profesional.docx # Downloadable CV asset
├── out/                       # Pre-rendered production static export from Next.js
└── src/
    ├── app/
    │   ├── globals.css        # VoiceBox design tokens, reset rules, button & card styles
    │   ├── layout.tsx         # Root layout with SEO meta tags & Google Fonts
    │   └── page.tsx           # Main homepage orchestrating modular sections
    ├── components/
    │   ├── Navbar.tsx         # Sticky editorial header, live ticker, mobile navigation drawer
    │   ├── HeroSection.tsx    # Massive Archivo Black headline, personal statement, CTAs, metrics ribbon
    │   ├── CorePrinciples.tsx # 4-pillar engineering mindset, work ethic & "Behind the Blueprints"
    │   ├── FeaturedProjects.tsx # Elevated project cards, category filters, in-depth modal dossier
    │   ├── ExperienceTimeline.tsx # Vertical milestone timeline with expandable responsibilities & impact
    │   ├── SkillsMatrix.tsx   # Categorized competency matrix (Engineering, BIM/CAD, Languages, Ethic)
    │   ├── EducationCertifications.tsx # Formal degrees, GPA 3.72, BNSP Level 5 & SSW accreditations
    │   ├── ContactSection.tsx # Interactive dispatch form, direct email/phone/WhatsApp, LinkedIn
    │   └── Footer.tsx         # Editorial magazine colophon, back-to-top trigger, copyright
    ├── data/
    │   └── cv-data.ts         # Strongly-typed source data strictly adhering to CV facts
    └── types/
        └── index.ts           # TypeScript interfaces (Project, Experience, Profile, CoreValue, etc.)
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
