# Portofolio Interaktif & Modern — Reza Sepdide

Website portofolio profesional berarsitektur modern dan interaktif untuk **Reza Sepdide** (*Civil Engineering Graduate | Quantity Surveyor & Construction Planner | BIM & CAD Modeler*), dibangun dengan kepatuhan mutlak pada **VoiceBox Design System** (`voicebox-DESIGN.md`) dan data riil terverifikasi dari berkas resmi Curriculum Vitae (`CV_Reza_Sepdide_Profesional.docx`) tanpa rekayasa data (*zero hallucination*).

---

## 1. Kepatuhan Sistem Desain VoiceBox (`voicebox-DESIGN.md`)

- **Filosofi Visual**: *Bold, opinionated, editorial magazine-style*. Struktur visual berbasis kontras hitam-putih tegas (*high-contrast black & white*) dengan satu warna aksen merah tegas (`#EF4444`) yang digunakan secara hemat dan presisi (*scalpel, not a paintbrush*).
- **Palet Warna**:
  - **Brand Primary**: `#0A0A0A` (Black)
  - **Brand Secondary / Accent**: `#EF4444` (Red)
  - **Tertiary / Background**: `#FAFAFA` (Pure white page surface)
  - **Surface**: `#F5F5F5` (Card & quote background)
  - **Text Primary / Secondary / Tertiary**: `#0A0A0A`, `#525252`, `#A3A3A3`
  - **Border**: `#E5E5E5` (Subtle), `#D4D4D4` (Medium), `#0A0A0A` (Strong)
  - **Semantic**: Success `#16A34A` (Bg `#F0FDF4`), Error `#EF4444`
- **Tipografi**:
  - **Display / Headings**: `Archivo Black` (56px, 38px, 24px)
  - **UI / Body**: `Work Sans` (20px, 16px, 14px, 12px)
  - **Mono / Technical Tags**: `Space Mono` (14px, 11px)
- **Komponen & Micro-Interactions**:
  - **Border Radius**: Mandatori `0px` (*sharp, square edges across all components*).
  - **Elevated Card**: `border-top: 4px solid #EF4444` dengan `border: 2px solid #E5E5E5`.
  - **Pull Quote**: Garis batas kiri `4px solid #EF4444` dengan latar belakang `#F5F5F5`.
  - **Tombol**: Border 2px solid `#0A0A0A`, uppercase, hover berubah menjadi aksen `#EF4444`.

---

## 2. Struktur Data CV Terverifikasi (Zero Hallucination)

Seluruh riwayat, metrik kuantitatif, dan lisensi diekstrak langsung dari `CV_Reza_Sepdide_Profesional.docx`:

- **Profil Akademik**:
  - D3 Teknik Sipil — Politeknik Negeri Padang (**IPK: 3,72 / 4,00**).
  - D4 Manajemen Rekayasa Konstruksi — Politeknik Negeri Padang (Agus 2026 – Sekarang).
  - SMA Negeri 1 Padang (Jurusan MIPA, 2019 – 2022).
- **Sertifikasi & Lisensi**:
  - Sertifikat Kompetensi Kerja (SKK) **Pelaksana Lapangan Pekerjaan Gedung Madya (Jenjang 5) — BNSP** & Kementerian PU BJKW I Banda Aceh.
  - Certificate of Completion: **Revit Masterclass for Beginners (BIM)** — Arsisten Academy.
  - **Specified Skilled Worker (SSW)** Evaluation Exam for Construction Industry — JAC Jepang.
  - Sertifikasi Bahasa Jepang: **JFT-Basic Skor 250 & JLPT N4 Skor 165**.
  - Sertifikasi Bahasa Inggris: **TOEIC Skor 640**.
- **Pengalaman Kerja & Proyek Nyata**:
  1. Perencana Teknis (SDN 19 Kuamang, Pasaman) — Sep 2026.
  2. Perencana Teknis (SLBN 2 Pariaman) — Jul 2026 (termasuk CCO / Contract Change Order).
  3. Quantity Surveyor Freelance (PT Mulia Djasmine Sentosa — PT Perfetti Van Melle Indonesia) — Sep 2025.
  4. Fasilitator Teknis Revitalisasi SD (Kemendikdasmen) — Jun 2025 – Des 2025.
  5. PKL / Magang Quality Control & QS (PT Solusi Industri Energi — Waste Gas Recovery Project PT Indo-Bharat Rayon Purwakarta) — Agu 2024 – Des 2024 (Bar Bending Schedule/BBS, Slump Test, Progress Billing).
  6. Tugas Akhir: Perencanaan Pelaksanaan Gedung DPRD Kab. Pasaman (RAB & Kurva S).
  7. Kompetisi Tender Nasional "Fondasi Days 2025" (Universitas Sebelas Maret).
  8. Riset PKM-AI Kemendikbudristek: Analisa Biaya Scaffolding.
  9. Pra-Proyek Pemodelan & Analisis Struktur SAP2000 Gedung Bertingkat.

---

## 3. Arsitektur Kode & Folder

```text
Portofolio_web/
├── package.json               # Konfigurasi Next.js 14, React 18, Tailwind, Lucide, Framer Motion
├── tsconfig.json              # TypeScript compiler configuration
├── tailwind.config.ts         # Token warna, font stack & scale VoiceBox
├── postcss.config.js          # PostCSS builder
├── voicebox-DESIGN.md         # Panduan gaya VoiceBox
├── CV_Reza_Sepdide_Profesional.docx # Berkas CV asli
├── index.html                 # Standalone interactive preview (bisa dibuka langsung di browser)
├── preview-server.js          # Server lokal mandiri (agy-node preview-server.js)
├── public/
│   └── profile.jpg            # Foto profil profesional Reza Sepdide (diekstrak dari CV)
└── src/
    ├── app/
    │   ├── globals.css        # Implementasi VoiceBox typography, buttons, cards, focus rings
    │   ├── layout.tsx         # Root layout dengan metadata SEO & Google Fonts
    │   └── page.tsx           # Halaman utama menyatukan seluruh komponen modular
    ├── components/
    │   ├── Navbar.tsx         # Sticky header editorial, status pill "SIAP BEKERJA", mobile menu
    │   ├── HeroSection.tsx    # Headline Archivo Black masif, pull quote, dual CTA, ribbon metrik
    │   ├── FeaturedProjects.tsx # Kartu proyek elevated, filter kategori dinamis, modal rincian teknis
    │   ├── ExperienceTimeline.tsx # Timeline vertikal interaktif, akordion rincian tanggung jawab & dampak
    │   ├── SkillsMatrix.tsx   # Matriks kompetensi 4 pilar (Hard skills, BIM/CAD, Bahasa, Karakter)
    │   ├── EducationCertifications.tsx # Kredensial formal, IPK 3.72, lisensi resmi BNSP & JAC
    │   ├── ContactSection.tsx # Form kontak interaktif, mailto generator, tautan LinkedIn & WhatsApp
    │   └── Footer.tsx         # Kolofon editorial majalah, tombol kembali ke atas
    ├── data/
    │   └── cv-data.ts         # Sumber data typed terstruktur 100% konsisten dengan CV
    └── types/
        └── index.ts           # Definisi interface TypeScript (Project, Experience, Profile, dsb.)
```

---

## 4. Cara Menjalankan Portofolio

### Opsi A: Standalone Langsung (Tanpa Install Apapun)
Cukup buka berkas `index.html` dengan peramban (browser) favorit Anda:
- Double-click file `index.html` pada File Explorer, atau
- Buka via server lokal bawaan:
  ```bash
  agy-node preview-server.js
  ```
  Lalu buka tautan `http://127.0.0.1:3000` pada browser.

### Opsi B: Pengembangan Next.js (App Router)
Jika ingin menjalankan dalam mode development Next.js secara penuh:
```bash
npm install
npm run dev
```
Buka `http://localhost:3000` di peramban.
