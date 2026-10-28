import { ProfileData, Project, Experience, Education, Certification, SkillCategory } from '../types';

export const profileData: ProfileData = {
  name: "REZA SEPDIDE",
  roleTitle: "Civil Engineer & Construction Planner",
  headline: "Quantity Surveyor & Construction Planner | BIM & CAD Modeler",
  location: "Padang, Sumatera Barat, Indonesia",
  phone: "+62 896-4459-0915",
  email: "rezasepdide@gmail.com",
  linkedin: "https://linkedin.com/in/rezasepdide",
  status: "TERBUKA UNTUK PELUANG KERJA",
  bioSummary:
    "Lulusan Diploma III Teknik Sipil Politeknik Negeri Padang (IPK 3,72/4,00) bersertifikasi BNSP Pelaksana Gedung Madya (Jenjang 5) dengan rekam jejak teruji dalam perencanaan teknis bangunan, Quantity Surveying (QS), serta pengendalian mutu dan jadwal proyek konstruksi. Berpengalaman dalam menyusun Detailed Engineering Design (DED), Rencana Anggaran Biaya (RAB), Rencana Kerja dan Syarat-Syarat (RKS), serta penjadwalan proyek (Kurva S). Mahir mengoperasikan perangkat lunak pemodelan dan manajemen konstruksi meliputi Autodesk Revit (BIM), AutoCAD, SketchUp, SAP2000, Microsoft Project, dan Microsoft Excel, serta memiliki kemampuan komunikasi bahasa Jepang & Inggris tersertifikasi.",
  keyStats: [
    {
      value: "3.72",
      label: "IPK KELULUSAN / 4.00",
      description: "Politeknik Negeri Padang — D3 Teknik Sipil",
    },
    {
      value: "JENJANG 5",
      label: "SKK BNSP RESMI",
      description: "Pelaksana Lapangan Pekerjaan Gedung Madya (Kementerian PU)",
    },
    {
      value: "5+",
      label: "PROYEK NYATA",
      description: "Revitalisasi Sekolah, Waste Gas Recovery, Tender, & QS Industri",
    },
    {
      value: "3 BAHASA",
      label: "KOMUNIKASI GLOBAL",
      description: "Indonesia (Native), Jepang (JLPT N4/SSW), Inggris (TOEIC 640)",
    },
  ],
};

export const featuredProjects: Project[] = [
  {
    id: "dprd-pasaman",
    title: "Perencanaan Pelaksanaan Pembangunan Gedung DPRD Kabupaten Pasaman",
    category: "Planning & QS",
    role: "Lead Project Planner & Cost Estimator (Tugas Akhir)",
    period: "2025",
    clientOrInstitution: "Politeknik Negeri Padang",
    location: "Kabupaten Pasaman, Sumatera Barat",
    summary:
      "Perancangan komprehensif rencana pelaksanaan konstruksi gedung pemerintahan bertingkat, mencakup estimasi volume detail, penentuan Rencana Anggaran Biaya (RAB), dan simulasi penjadwalan terpadu dengan Kurva S.",
    architectureAndSolution: [
      "Perhitungan Quantity Take-Off (QTO) presisi untuk struktur beton bertulang, arsitektur, dan MEP.",
      "Penyusunan Time Schedule berbasis Critical Path Method (CPM) dan pembobotan Kurva S di MS Project.",
      "Penyusunan Rencana Kerja & Syarat-Syarat (RKS) serta spesifikasi teknis sesuai standar PUPR."
    ],
    metrics: [
      { label: "Akurasi Estimasi", value: "Tingkat Rinci Item" },
      { label: "Jadwal", value: "Kurva S Terintegrasi" },
      { label: "Dokumen", value: "DED, RAB, & RKS Lengkap" }
    ],
    techStack: ["Microsoft Project", "Microsoft Excel", "AutoCAD", "Estimasi Biaya (RAB)", "Kurva S"],
    deliverables: ["Dokumen RAB Lengkap", "Kurva S & Gantt Chart", "Analisa Harga Satuan Pekerjaan (AHSP)"],
    featured: true
  },
  {
    id: "waste-gas-recovery",
    title: "Waste Gas Recovery Industrial Project — PT Indo-Bharat Rayon",
    category: "Industrial & QC",
    role: "Quality Control & Quantity Surveyor Intern",
    period: "Agu 2024 – Des 2024",
    clientOrInstitution: "PT Solusi Industri Energi (Kontraktor)",
    location: "Purwakarta, Jawa Barat",
    summary:
      "Pelaksanaan inspeksi mutu lapangan dan manajemen kuantitas pada proyek industri berskala besar, menjamin ketepatan tulangan baja dan validitas penagihan progres pekerjaan klien multinasional.",
    architectureAndSolution: [
      "Penyusunan Bar Bending Schedule (BBS) untuk optimalisasi pemotongan dan penulangan baja.",
      "Kalkulasi Backup Volume pekerjaan aktual terpasang sebagai basis resmi Progress Billing.",
      "Inspeksi Quality Control harian: Slump Test beton segar, verifikasi dimensi bekisting & tulangan.",
      "Pemetaan lapangan (mapping) serta pembuatan daftar perbaikan pekerjaan (Punch List)."
    ],
    metrics: [
      { label: "Pengujian Beton", value: "Slump Test Sesuai Standar" },
      { label: "Efisiensi Baja", value: "BBS Presisi Terpasang" },
      { label: "Validasi Tagihan", value: "100% Backup Volume Terverifikasi" }
    ],
    techStack: ["AutoCAD", "Bar Bending Schedule (BBS)", "Microsoft Excel", "Slump Test QC", "Punch List Management"],
    deliverables: ["Lembar Bar Bending Schedule", "Laporan Backup Volume Progres", "QC Inspection Checklist"],
    featured: true
  },
  {
    id: "revitalisasi-sekolah",
    title: "Revitalisasi Fasilitas Pendidikan SDN 19 Kuamang & SLBN 2 Pariaman",
    category: "BIM & CAD",
    role: "Perencana Teknis (Konsultan Perencana)",
    period: "Jul 2026 – Sep 2026",
    clientOrInstitution: "Konsultan Perencana Revitalisasi Sekolah",
    location: "Pasaman & Pariaman, Sumatera Barat",
    summary:
      "Perencanaan teknis menyeluruh rehabilitasi sarana dan prasarana pendidikan formal dan khusus, mencakup DED struktural/arsitektural, estimasi biaya, time schedule, hingga adendum Contract Change Order (CCO).",
    architectureAndSolution: [
      "Produksi Detailed Engineering Design (DED) lengkap menggunakan AutoCAD berstandar teknis pemerintah.",
      "Kalkulasi volume pekerjaan rehabilitasi dan penyusunan RAB sesuai AHSP setempat.",
      "Penyusunan RKS untuk pedoman spesifikasi teknis dan standar mutu material.",
      "Penyesuaian rancangan gambar dan volume akibat kondisi lapangan melalui Contract Change Order (CCO)."
    ],
    metrics: [
      { label: "2 Fasilitas Sekolah", value: "SDN 19 & SLBN 2" },
      { label: "DED Lengkap", value: "Arsitektur & Struktur" },
      { label: "Contract Change", value: "CCO Resmi Tervalidasi" }
    ],
    techStack: ["AutoCAD", "Microsoft Excel", "Microsoft Project", "DED", "CCO Management", "Kurva S"],
    deliverables: ["Gambar DED 2D", "Buku RAB & Spesifikasi RKS", "Dokumen Kurva S & Berita Acara CCO"],
    featured: true
  },
  {
    id: "tender-fondasi-days",
    title: "Kompetisi Tender Nasional 'Fondasi Days 2025'",
    category: "Tender & Research",
    role: "Cost Estimator & 3D Construction Modeler",
    period: "2025",
    clientOrInstitution: "Universitas Sebelas Maret (UNS)",
    location: "Surakarta / Nasional",
    summary:
      "Simulasi lelang tender konstruksi nasional berskala kompetitif yang melibatkan penyusunan proposal teknis, estimasi biaya konstruksi komprehensif, pemodelan visual metode pelaksanaan 3D, dan strategi penawaran yang kompetitif.",
    architectureAndSolution: [
      "Pemodelan konstruksi 3D tahapan pelaksanaan menggunakan SketchUp untuk visualisasi metode kerja.",
      "Analisis metode kerja pelaksanaan teknis guna meminimalisir risiko keterlambatan proyek.",
      "Penyusunan dokumen penawaran harga tender terperinci dengan strategi efisiensi biaya."
    ],
    metrics: [
      { label: "Tingkat Kompetisi", value: "Skala Nasional (UNS)" },
      { label: "Visualisasi Metode", value: "3D SketchUp Model" },
      { label: "Dokumen Tender", value: "Proposal Teknis & Harga" }
    ],
    techStack: ["SketchUp 3D", "Microsoft Excel", "Analisis Metode Teknis", "Tender Estimation"],
    deliverables: ["Dokumen Penawaran Tender Lengkap", "Animasi & Model 3D Metode Kerja", "Analisa Harga Satuan Khusus"],
    featured: false
  },
  {
    id: "pkm-ai-scaffolding",
    title: "Analisa Biaya Scaffolding Waste Gas Recovery — PKM-AI",
    category: "Tender & Research",
    role: "Penulis Utama & Cost Analyst",
    period: "2025",
    clientOrInstitution: "Kemendikbudristek (Pekan Kreativitas Mahasiswa)",
    location: "Nasional",
    summary:
      "Karya tulis ilmiah berbasis studi kasus proyek nyata industri Waste Gas Recovery IBR Purwakarta, mengevaluasi kelayakan ekonomi dan efisiensi biaya antara skema pembelian aset langsung versus skema penyewaan scaffolding.",
    architectureAndSolution: [
      "Pengumpulan data durasi sewa, volume pemasangan scaffolding aktual, dan fluktuasi biaya pemeliharaan.",
      "Kalkulasi komparatif life-cycle cost antara direct purchase vs rental equipment.",
      "Formulasi rekomendasi strategis bagi kontraktor untuk proyek konstruksi berdurasi menengah-panjang."
    ],
    metrics: [
      { label: "Program Riset", value: "PKM-AI Kemendikbudristek" },
      { label: "Fokus Studi", value: "Direct Buy vs Rental" },
      { label: "Efisiensi Biaya", value: "Optimalisasi Skema Sewa" }
    ],
    techStack: ["Cost Engineering Analysis", "Microsoft Excel", "Scientific Writing"],
    deliverables: ["Artikel Ilmiah PKM-AI", "Model Komparasi Biaya Scaffolding"],
    featured: false
  },
  {
    id: "sap2000-structural",
    title: "Pemodelan & Analisis Struktur Gedung Bertingkat — SAP2000",
    category: "BIM & CAD",
    role: "Structural Modeling Engineer",
    period: "2024",
    clientOrInstitution: "Politeknik Negeri Padang (Pra-Proyek)",
    location: "Padang, Indonesia",
    summary:
      "Pemodelan struktur gedung bertingkat 3D dan simulasi pembebanan komprehensif mencakup beban mati, beban hidup, dan beban gempa dinamis sesuai kaidah SNI konstruksi tahan gempa Indonesia.",
    architectureAndSolution: [
      "Pemodelan geometri 3D portal bertulang pada software elemen hingga SAP2000.",
      "Input kombinasi pembebanan (Beban Gravitasi dan Respons Spektrum Gempa).",
      "Pemeriksaan drift rasio, lendutan, dan gaya dalam (momen, geser, aksial) untuk penentuan dimensi profil."
    ],
    metrics: [
      { label: "Software", value: "SAP2000 Finite Element" },
      { label: "Standar Desain", value: "SNI Gempa & Beton" },
      { label: "Simulasi", value: "3D Dynamic Response" }
    ],
    techStack: ["SAP2000", "AutoCAD", "Analisis Beban Gempa", "SNI Beton Bertulang"],
    deliverables: ["Model Struktur 3D SAP2000", "Output Diagram Gaya Dalam & Deformasi"],
    featured: false
  }
];

export const workExperiences: Experience[] = [
  {
    id: "exp-revitalisasi-sd",
    role: "Perencana Teknis (Konsultan Perencana Revitalisasi SD)",
    company: "Konsultan Perencana Revitalisasi Fasilitas Sekolah",
    type: "Proyek Revitalisasi SDN 19 Kuamang",
    period: "Sep 2026",
    location: "Pasaman, Indonesia",
    responsibilities: [
      "Menyusun perhitungan volume pekerjaan (Quantity Take-Off) serta Rencana Anggaran Biaya (RAB) revitalisasi fasilitas sekolah.",
      "Merancang dokumen Rencana Kerja dan Syarat-Syarat (RKS) sebagai pedoman spesifikasi teknis dan standar mutu material konstruksi di lapangan.",
      "Menyusun jadwal pelaksanaan proyek (Time Schedule) dan memetakan bobot pekerjaan ke dalam Kurva S.",
      "Memproduksi gambar kerja perencanaan (Detailed Engineering Design/DED) bangunan sekolah menggunakan AutoCAD."
    ],
    keyImpacts: [
      "Menghasilkan dokumen DED dan RAB yang presisi sebagai acuan legalitas dan operasional fisik lapangan.",
      "Mencegah pembengkakan anggaran melalui estimasi spesifikasi material yang terstandarisasi."
    ],
    toolsUsed: ["AutoCAD", "Microsoft Excel", "Microsoft Project", "RKS", "Kurva S"]
  },
  {
    id: "exp-revitalisasi-slb",
    role: "Perencana Teknis (Konsultan Perencana Revitalisasi SLB)",
    company: "Konsultan Perencana Revitalisasi Fasilitas Sekolah",
    type: "Proyek Revitalisasi SLBN 2 Pariaman",
    period: "Jul 2026",
    location: "Pariaman, Indonesia",
    responsibilities: [
      "Menyusun perhitungan volume pekerjaan serta Rencana Anggaran Biaya (RAB) revitalisasi fasilitas sekolah SLBN.",
      "Merancang dokumen Rencana Kerja dan Syarat-Syarat (RKS) pedoman spesifikasi teknis dan mutu material.",
      "Menyusun Time Schedule dan pemetaan bobot pekerjaan ke dalam Kurva S.",
      "Memproduksi Detailed Engineering Design (DED) bangunan sekolah menggunakan AutoCAD.",
      "Membuat dokumen penyesuaian rancangan rencana dari kontrak awal (Contract Change Order / CCO)."
    ],
    keyImpacts: [
      "Mengeksekusi Contract Change Order (CCO) secara tertib administrasi guna menyesuaikan kondisi aktual lapangan.",
      "Menjamin spesifikasi khusus bangunan SLB terpenuhi dengan standar mutu tinggi."
    ],
    toolsUsed: ["AutoCAD", "Microsoft Excel", "Contract Change Order (CCO)", "Kurva S"]
  },
  {
    id: "exp-qs-freelance",
    role: "Quantity Surveyor (Freelance)",
    company: "PT Mulia Djasmine Sentosa",
    type: "Subkontraktor Proyek PT Perfetti Van Melle Indonesia",
    period: "Sep 2025",
    location: "Indonesia",
    responsibilities: [
      "Melaksanakan perhitungan ulang volume pekerjaan berdasarkan kondisi aktual di lokasi proyek (as-built measurement).",
      "Menyusun rekapitulasi biaya dan valuasi harga pekerjaan berdasarkan kuantitas aktual yang telah terverifikasi sebagai dasar pengajuan klaim pembayaran subkontraktor."
    ],
    keyImpacts: [
      "Memastikan klaim pembayaran subkontraktor berbasis kuantitas riil yang valid dan dapat dipertanggungjawabkan ke kontraktor utama.",
      "Mereduksi potensi selisih volume penagihan (billing variance)."
    ],
    toolsUsed: ["Quantity Surveying", "Microsoft Excel", "Re-measurement", "Cost Valuation"]
  },
  {
    id: "exp-kemendikdasmen",
    role: "Fasilitator Teknis — Program Revitalisasi Sekolah Dasar",
    company: "Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen)",
    type: "Program Revitalisasi SD Bantuan Pemerintah",
    period: "Jun 2025 – Des 2025",
    location: "Sumatera Barat, Indonesia",
    responsibilities: [
      "Melakukan reviu dan evaluasi kelayakan dokumen administrasi serta dokumen teknis perencanaan (DED, RAB, dan RKS) sekolah penerima bantuan.",
      "Melaksanakan pemantauan (monitoring) dan evaluasi berkala terhadap progres fisik pelaksanaan program revitalisasi di lapangan agar sesuai dengan jadwal dan standar mutu.",
      "Memverifikasi kelengkapan dan keabsahan dokumen laporan kemajuan pekerjaan sebagai syarat pencairan dana termin bantuan pemerintah."
    ],
    keyImpacts: [
      "Memvalidasi kepatuhan teknis dan tata kelola anggaran sekolah penerima bantuan sesuai regulasi kementerian.",
      "Menjaga kesesuaian progres fisik di lapangan terhadap kurva rencana termin pencairan."
    ],
    toolsUsed: ["Audit Dokumen DED/RAB", "Monitoring Fisik Lapangan", "Verifikasi Termin Bantuan", "Quality Control"]
  },
  {
    id: "exp-magang-sie",
    role: "Praktek Kerja Lapangan (Magang) — Quality Control & QS",
    company: "PT Solusi Industri Energi",
    type: "Kontraktor Waste Gas Recovery Project (PT Indo-Bharat Rayon)",
    period: "Agu 2024 – Des 2024",
    location: "Purwakarta, Indonesia",
    responsibilities: [
      "Menyusun Bar Bending Schedule (BBS) untuk penulangan struktur beton.",
      "Menghitung volume pekerjaan terpasang (Backup Volume) sebagai dokumen pendukung penagihan progres pekerjaan (Progress Billing).",
      "Melaksanakan inspeksi pengendalian mutu (Quality Control) di lapangan: pengujian Slump Test beton segar, pengecekan pemasangan tulangan sebelum pengecoran, dan checklist pekerjaan.",
      "Melakukan pemetaan lapangan (mapping) dan menyusun daftar perbaikan pekerjaan (Punch List) sebelum dan sesudah serah terima area kerja.",
      "Menyusun laporan progres proyek harian, mingguan, dan bulanan untuk mendukung koordinasi manajemen proyek."
    ],
    keyImpacts: [
      "Memastikan pengecoran beton memenuhi nilai slump standar teknis dan tulangan terpasang presisi sesuai shop drawing.",
      "Menyajikan dokumen backup volume akurat yang meloloskan penagihan progress billing tanpa dispute."
    ],
    toolsUsed: ["Bar Bending Schedule (BBS)", "Slump Test Kit", "AutoCAD", "Punch List", "Backup Volume Calculation"]
  }
];

export const educationHistory: Education[] = [
  {
    institution: "Politeknik Negeri Padang",
    degree: "Diploma IV (D4)",
    field: "Manajemen Rekayasa Konstruksi",
    period: "Agus 2026 – Sekarang",
    location: "Padang, Indonesia",
    details: [
      "Studi lanjutan berfokus pada manajemen konstruksi terintegrasi, analisis risiko proyek, pengadaan jasa konstruksi, dan implementasi teknologi BIM."
    ]
  },
  {
    institution: "Politeknik Negeri Padang",
    degree: "Diploma III (D3)",
    field: "Teknik Sipil",
    period: "Sep 2022 – Jul 2025",
    location: "Padang, Indonesia",
    gpa: "3,72 / 4,00",
    details: [
      "Tugas Akhir: Merancang estimasi Rencana Anggaran Biaya (RAB) dan penjadwalan proyek (Time Schedule) pada studi kasus 'Rencana Pelaksanaan Pembangunan Gedung DPRD Kabupaten Pasaman'.",
      "Peserta Kompetisi Tender Nasional 'Fondasi Days 2025' di Universitas Sebelas Maret (UNS).",
      "Pekan Kreativitas Mahasiswa Artikel Ilmiah (PKM-AI) Kemendikbudristek: Analisa Biaya Scaffolding.",
      "Pra-Proyek: Pemodelan struktur 3D dan analisis pembebanan gedung bertingkat menggunakan SAP2000."
    ]
  },
  {
    institution: "SMA Negeri 1 Padang",
    degree: "Sekolah Menengah Atas",
    field: "Ilmu Pengetahuan Alam (IPA)",
    period: "2019 – 2022",
    location: "Padang, Indonesia"
  }
];

export const certifications: Certification[] = [
  {
    name: "Sertifikat Kompetensi Kerja (SKK) Pelaksana Lapangan Pekerjaan Gedung Madya (Jenjang 5)",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP) & Kementerian PU Balai Jasa Konstruksi Wilayah I Banda Aceh",
    levelOrScore: "Jenjang 5 (Madya)",
    year: "Resmi BNSP"
  },
  {
    name: "Revit Masterclass for Beginners (Building Information Modeling)",
    issuer: "Arsisten Academy",
    levelOrScore: "Certificate of Completion",
    year: "BIM Certified"
  },
  {
    name: "Specified Skilled Worker (SSW) Evaluation Exam for Construction Industry",
    issuer: "Japan Association for Construction Human Resources (JAC)",
    levelOrScore: "Standard Konstruksi Jepang Terakreditasi",
    year: "International Certified"
  },
  {
    name: "Japan Foundation Test for Basic Japanese (JFT-Basic) & JLPT N4",
    issuer: "The Japan Foundation",
    levelOrScore: "JFT-Basic Score: 250 | JLPT N4 Score: 165",
    year: "Kemampuan Bahasa Jepang Menengah"
  },
  {
    name: "Test of English for International Communication (TOEIC)",
    issuer: "ETS / Sertifikasi Internasional Bahasa Inggris",
    levelOrScore: "Score: 640",
    year: "Kemampuan Bahasa Inggris Kerja"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Hard Skills & Engineering",
    description: "Keahlian teknis kuantitatif, perencanaan lapangan, dan dokumen kontraktual konstruksi.",
    items: [
      { name: "Quantity Take-Off (QTO)", level: "Mahir", categoryTag: "Estimasi" },
      { name: "Estimasi Biaya & RAB", level: "Mahir", categoryTag: "Biaya" },
      { name: "Penyusunan RKS", level: "Mahir", categoryTag: "Spesifikasi" },
      { name: "Time Schedule & Kurva S", level: "Mahir", categoryTag: "Penjadwalan" },
      { name: "Bar Bending Schedule (BBS)", level: "Mahir", categoryTag: "Baja & Pembesian" },
      { name: "Detailed Engineering Design (DED)", level: "Mahir", categoryTag: "Desain Teknis" },
      { name: "Contract Change Order (CCO)", level: "Kompeten", categoryTag: "Kontrak" },
      { name: "Quality Control (Slump Test & Rebar)", level: "Kompeten", categoryTag: "Mutu Lapangan" }
    ]
  },
  {
    category: "Software & BIM/CAD Suite",
    description: "Perangkat lunak standar industri untuk pemodelan informasi bangunan, desain 2D/3D, dan manajemen biaya.",
    items: [
      { name: "Autodesk Revit (BIM)", level: "Certified", details: "Arsisten Academy Certified", categoryTag: "BIM" },
      { name: "AutoCAD", level: "Mahir", details: "DED & Shop Drawing 2D", categoryTag: "CAD" },
      { name: "SketchUp", level: "Mahir", details: "Pemodelan 3D Tender & Konstruksi", categoryTag: "3D Modeling" },
      { name: "SAP2000", level: "Kompeten", details: "Analisis Struktur Gedung Bertingkat", categoryTag: "Struktur" },
      { name: "Microsoft Project", level: "Mahir", details: "Critical Path Method & Kurva S", categoryTag: "Manajemen" },
      { name: "Microsoft Excel", level: "Mahir Lanjut", details: "QTO, AHSP, RAB, & Progress Billing", categoryTag: "Spreadsheet" }
    ]
  },
  {
    category: "Kemampuan Bahasa & Komunikasi Internasional",
    description: "Kemampuan multibahasa tersertifikasi untuk kolaborasi tim lokal maupun internasional.",
    items: [
      { name: "Bahasa Indonesia", level: "Penutur Asli (Native)", details: "Komunikasi profesional & penyusunan dokumen teknis", categoryTag: "Native" },
      { name: "Bahasa Jepang (日本語)", level: "Menengah (Intermediate)", details: "JFT-Basic Score 250 & JLPT N4 Score 165 (SSW Certified)", categoryTag: "Certified" },
      { name: "Bahasa Inggris", level: "Menengah (Working Proficiency)", details: "TOEIC Score 640", categoryTag: "Certified" }
    ]
  },
  {
    category: "Karakter Kerja & Soft Skills",
    description: "Atribut kepemimpinan lapangan dan kebiasaan kerja profesional di lingkungan proyek.",
    items: [
      { name: "Adaptabilitas Cepat", details: "Cepat menyesuaikan dengan ritme lapangan dan perubahan CCO", categoryTag: "Mindset" },
      { name: "Pekerja Keras & Teliti", details: "Verifikasi backup volume hingga satuan terkecil", categoryTag: "Etos" },
      { name: "Tanggung Jawab Lapangan", details: "Kepatuhan penuh pada checklist mutu dan regulasi K3/SNI", categoryTag: "Integritas" },
      { name: "Kolaborasi Tim Multidisiplin", details: "Komunikasi lancar antara owner, konsultan, dan subkontraktor", categoryTag: "Teamwork" }
    ]
  }
];
