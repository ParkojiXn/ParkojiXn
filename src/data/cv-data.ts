import { ProfileData, Project, Experience, Education, Certification, SkillCategory } from '../types';

export const profileData: ProfileData = {
  name: "REZA SEPDIDE",
  roleTitle: "Civil Engineer & Construction Planner",
  headline: "Quantity Surveyor & Construction Planner | BIM & CAD Modeler",
  location: "Padang, Sumatera Barat, Indonesia",
  timezone: "UTC+7 (WIB)",
  phone: "+62 896-4459-0915",
  email: "rezasepdide@gmail.com",
  linkedin: "https://linkedin.com/in/rezasepdide",
  status: "OPEN FOR ROLES & CONSULTANCIES",
  bioSummary:
    "Lulusan Diploma III Teknik Sipil Politeknik Negeri Padang (IPK 3,72/4,00) bersertifikasi BNSP Pelaksana Bangunan Gedung Madya (Jenjang 5) dengan rekam jejak teruji dalam perencanaan teknis, Quantity Surveying (QS), pengawasan mutu lapangan, dan penjadwalan konstruksi (Kurva S). Mahir dalam pemodelan BIM Revit, AutoCAD DED (layout publish to PDF), SAP2000 seismic analysis, MS Project CPM, serta memiliki sertifikasi bahasa Jepang (JLPT N4 & JFT-Basic) dan Inggris (TOEIC 640).",
  personalStatement:
    "Bagi saya, rekayasa sipil yang berkualitas tidak hanya berhenti pada lembar gambar kerja atau simulasi teoritis—tetapi bagaimana rancangan tersebut dapat dieksekusi di lapangan dengan presisi tinggi, tepat mutu, tepat waktu, dan efisien tanpa pemborosan material. Dari optimasi Bar Bending Schedule di proyek industri kimia berisiko tinggi hingga audit revitalisasi sekolah pemerintah, saya senantiasa mengedepankan integritas data, ketelitian matematis, dan akuntabilitas teknis.",
  keyStats: [
    {
      value: "3.72",
      label: "IPK KELULUSAN / 4.00",
      description: "Politeknik Negeri Padang — D3 Teknik Sipil (Lulus Dengan Pujian / High Honors)",
    },
    {
      value: "JENJANG 5",
      label: "SERTIFIKASI BNSP",
      description: "SKK Pelaksana Lapangan Pekerjaan Gedung Madya (Kementerian PU Balai Jasa Konstruksi Wilayah I)",
    },
    {
      value: "10+",
      label: "PROYEK & STUDI TEKNIS",
      description: "Revitalisasi Sekolah, EPC Waste Gas Recovery, Re-Measurement QS, Tender Nasional, & BIM",
    },
    {
      value: "3",
      label: "BAHASA TERVERIFIKASI",
      description: "Bahasa Indonesia (Native) • Jepang (JLPT N4 / SSW JAC / JFT) • Inggris (TOEIC 640)",
    },
  ],
  coreValues: [
    {
      title: "Field-First Rigor & Constructability",
      subtitle: "Menghubungkan Gambar Kerja dengan Realitas Lapangan",
      description: "Gambar kerja dan jadwal hanya bernilai bila dapat dibangun secara aman dan realistis di lapangan. Setiap estimasi dan jadwal selalu disinkronkan dengan kondisi aktual medan proyek."
    },
    {
      title: "Zero-Waste Cost & Material Governance",
      subtitle: "Ketelitian Kuantitas Hingga Potongan Terkecil",
      description: "Mulai dari penyusunan Bar Bending Schedule (BBS) untuk menekan scrap baja tulangan hingga penyusunan BoQ/RAB yang transparan dan terukur tanpa deviasi liar."
    },
    {
      title: "Audit-Ready Technical Documentation",
      subtitle: "Dokumentasi Lengkap, Rapi, & Dapat Dipertanggungjawabkan",
      description: "Setiap volume penagihan (Progress Billing) didukung Backup Volume yang sah, dokumen CCO dengan justifikasi teknis kuat, serta RKS yang terstandarisasi SNI/PUPR."
    },
    {
      title: "Continuous Mastery & Global Standards",
      subtitle: "Pendidikan Lanjutan D4 & Kualifikasi Internasional",
      description: "Sedang menempuh jenjang D4 Manajemen Rekayasa Konstruksi, mendalami ekosistem BIM Revit terintegrasi, dan tersertifikasi standar industri konstruksi Jepang (SSW)."
    }
  ]
};

export const featuredProjects: Project[] = [
  {
    id: "sdn-19-kuamang",
    title: "Perencanaan Teknis Revitalisasi Fasilitas SDN 19 Kuamang",
    category: "Planning & QS",
    role: "Perencana Teknis (Konsultan Perencana Revitalisasi SD)",
    period: "Sep 2026",
    clientOrInstitution: "Konsultan Perencana / Dinas Pendidikan",
    location: "Pasaman, Sumatera Barat, Indonesia",
    summary:
      "Perencanaan teknis menyeluruh untuk revitalisasi gedung sekolah SDN 19 Kuamang. Bertanggung jawab atas survei identifikasi kerusakan, perhitungan volume pekerjaan (Quantity Take-Off), penyusunan Rencana Anggaran Biaya (RAB), dokumen spesifikasi teknis RKS, Time Schedule & Kurva S, serta produksi Detailed Engineering Design (DED) lengkap menggunakan AutoCAD dengan pemanfaatan layout viewports siap cetak PDF.",
    architectureAndSolution: [
      "Melakukan perhitungan volume pekerjaan rinci (Backup Volume) berdasarkan survei kerusakan struktur dan arsitektur fasilitas sekolah.",
      "Menyusun dokumen Rencana Anggaran Biaya (RAB) mengacu pada standar Analisa Harga Satuan Pekerjaan (AHSP) yang berlaku.",
      "Merancang dokumen Rencana Kerja dan Syarat-Syarat (RKS) sebagai pedoman mutu material, tata cara pelaksanaan, dan pengujian lapangan.",
      "Menyusun jadwal waktu pelaksanaan (Time Schedule) dan memetakan bobot mingguan ke dalam grafik Kurva S untuk pengendalian proyek.",
      "Memproduksi lembar kerja DED arsitektur dan struktur menggunakan AutoCAD Layout viewports untuk publikasi standar PDF."
    ],
    metrics: [
      { label: "Paket Dokumen", value: "DED, RAB, RKS, & Kurva S" },
      { label: "Sistem Drafting", value: "AutoCAD Paper Layout Viewports" },
      { label: "Jadwal Pengendalian", value: "Kurva S Berbobot Akurat" }
    ],
    techStack: ["AutoCAD", "Microsoft Excel", "Time Schedule & Kurva S", "Spesifikasi Teknis (RKS)", "Analisis Biaya (RAB)"],
    deliverables: [
      "Gambar Kerja Perencanaan DED AutoCAD Lengkap",
      "Rencana Anggaran Biaya (RAB) & Rekapitulasi",
      "Dokumen Rencana Kerja dan Syarat-Syarat (RKS)",
      "Time Schedule & Grafik Kurva S",
      "Form Identifikasi Kerusakan Bangunan"
    ],
    featured: true,
    coverImage: "/portfolio/sdn-19-kuamang/menggunakan-layout-autocad.png",
    mediaGallery: [
      {
        title: "Sistem Layout AutoCAD ke PDF",
        url: "/portfolio/sdn-19-kuamang/menggunakan-layout-autocad.png",
        caption: "Pengaturan viewport dan layout lembar kerja di AutoCAD untuk menghasilkan cetak PDF presisi dengan etiket standar konsultan."
      },
      {
        title: "DED Denah Bangunan & Tata Ruang",
        url: "/portfolio/sdn-19-kuamang/1.png",
        caption: "Gambar kerja denah revitalisasi ruang kelas, ruang guru, dan fasilitas penunjang SDN 19 Kuamang."
      },
      {
        title: "DED Tampak Bangunan & Elevasi",
        url: "/portfolio/sdn-19-kuamang/2.png",
        caption: "Tampak depan, belakang, dan samping bangunan yang memperlihatkan elevasi finishing dan bukaan."
      },
      {
        title: "DED Rencana Atap & Kuda-kuda",
        url: "/portfolio/sdn-19-kuamang/3.png",
        caption: "Rencana perkuatan rangka atap dan sambungan struktur atap terhadap ring balok."
      },
      {
        title: "DED Detail Sanitasi & Plafond",
        url: "/portfolio/sdn-19-kuamang/4.png",
        caption: "Detail konstruksi langit-langit plafond gypsum dan instalasi pemipaan air bersih/kotor."
      },
      {
        title: "DED Detail Kusen, Pintu & Jendela",
        url: "/portfolio/sdn-19-kuamang/5.png",
        caption: "Spesifikasi tipe kusen, ukuran kaca, dan aksesoris engsel/kunci sesuai standar keselamatan."
      },
      {
        title: "Spreadsheet Backup Volume Pekerjaan",
        url: "/portfolio/sdn-19-kuamang/backup-volume.png",
        caption: "Tabel perhitungan kuantitas matematis tiap sub-pekerjaan sebagai landasan legal volume RAB."
      },
      {
        title: "Dokumen Rencana Kerja dan Syarat (RKS)",
        url: "/portfolio/sdn-19-kuamang/rks.png",
        caption: "Uraian teknis spesifikasi material, toleransi dimensi pelaksanaan, dan metode kerja kontraktor."
      }
    ],
    documents: [
      {
        name: "Kurva S Proyek SDN 19 Kuamang",
        url: "/portfolio/sdn-19-kuamang/kurva-s.pdf",
        format: "PDF",
        size: "146 KB"
      },
      {
        name: "Rencana Anggaran Biaya (RAB) Lengkap",
        url: "/portfolio/sdn-19-kuamang/RAB.pdf",
        format: "PDF",
        size: "426 KB"
      },
      {
        name: "Form Hasil Penilaian Kerusakan Fisik",
        url: "/portfolio/sdn-19-kuamang/form-kerusakan.pdf",
        format: "PDF",
        size: "1.96 MB"
      }
    ]
  },
  {
    id: "slbn-2-pariaman",
    title: "Perencanaan Teknis Revitalisasi Bangunan SLBN 2 Pariaman",
    category: "Planning & QS",
    role: "Perencana Teknis (Konsultan Perencana Revitalisasi SLB)",
    period: "Jul 2026",
    clientOrInstitution: "Konsultan Perencana / Sekolah Luar Biasa Negeri 2 Pariaman",
    location: "Pariaman, Sumatera Barat, Indonesia",
    summary:
      "Perencanaan teknis revitalisasi fasilitas Sekolah Luar Biasa Negeri (SLBN) 2 Pariaman yang menuntut kepatuhan spesifik terhadap standar aksesibilitas inklusif (ramp kursi roda, handrail, sanitasi difabel). Menyusun Detailed Engineering Design (DED), perhitungan RAB, spesifikasi RKS, Time Schedule & Kurva S, serta menyusun adendum Contract Change Order (CCO) untuk penyesuaian volume akibat kondisi lapangan.",
    architectureAndSolution: [
      "Merancang DED dengan mempertimbangkan kebutuhan khusus peserta didik disabilitas (desain ramp, kemiringan aksesibel, lebar pintu, dan toilet khusus).",
      "Menghitung volume pekerjaan dan menyusun Rencana Anggaran Biaya (RAB) secara terperinci.",
      "Menyusun Rencana Kerja dan Syarat-Syarat (RKS) yang mengatur spesifikasi lantai anti-slip, material dinding ramah benturan, dan instalasi mekanikal.",
      "Membuat adendum Contract Change Order (CCO) resmi akibat ditemukannya perbedaan antara gambar rencana awal dengan kondisi struktur eksisting di lokasi.",
      "Menyusun Time Schedule dan grafik Kurva S untuk pengendalian waktu dan tahapan kerja konstruksi."
    ],
    metrics: [
      { label: "Standar Desain", value: "Aksesibilitas SLB Inklusif" },
      { label: "Administrasi Kontrak", value: "Adendum CCO Disetujui" },
      { label: "Instrumen Waktu", value: "Time Schedule & Kurva S" }
    ],
    techStack: ["AutoCAD", "Contract Change Order (CCO)", "Microsoft Excel", "RKS Spesifikasi", "Time Schedule & Kurva S"],
    deliverables: [
      "Gambar Kerja Arsitektur & Struktur SLB (DED AutoCAD)",
      "Dokumen Contract Change Order (CCO) & Justifikasi",
      "Dokumen Rekapitulasi Rencana Anggaran Biaya",
      "Rencana Kerja dan Syarat-Syarat (RKS)",
      "Master Time Schedule & Kurva S (PDF)"
    ],
    featured: true,
    coverImage: "/portfolio/slbn-2-pariaman/layout-autocad.png",
    mediaGallery: [
      {
        title: "AutoCAD Multi-Sheet Layout to PDF",
        url: "/portfolio/slbn-2-pariaman/layout-autocad.png",
        caption: "Pengelolaan viewport dan tata letak gambar kerja di AutoCAD untuk publikasi cetak format PDF profesional."
      },
      {
        title: "DED Denah Penataan Ruang Inklusif",
        url: "/portfolio/slbn-2-pariaman/1.png",
        caption: "Denah ruang kelas, ruang terapi wicara, dan jalur sirkulasi aksesibel bagi anak berkebutuhan khusus."
      },
      {
        title: "DED Tampak Bangunan & Fasad",
        url: "/portfolio/slbn-2-pariaman/2.png",
        caption: "Tampak arsitektural yang menampilkan ventilasi alami dan bukaan ramah cahaya."
      },
      {
        title: "DED Potongan Melintang Bangunan",
        url: "/portfolio/slbn-2-pariaman/3.png",
        caption: "Gambar potongan memperlihatkan peil lantai, perkuatan balok, dan elevasi atap."
      },
      {
        title: "DED Rencana Pondasi & Struktur Bawah",
        url: "/portfolio/slbn-2-pariaman/4.png",
        caption: "Struktur sloof, pondasi tapak, dan perkuatan kolom praktis anti-gempa."
      },
      {
        title: "DED Detail Ramp & Toilet Aksesibel",
        url: "/portfolio/slbn-2-pariaman/5.png",
        caption: "Detail kemiringan ram kursi roda (maksimal 1:12) dan instalasi handrail pengaman disabilitas."
      },
      {
        title: "DED Rencana Elektrikal & Sanitasi",
        url: "/portfolio/slbn-2-pariaman/6.png",
        caption: "Titik instalasi penerangan, saklar ramah jangkauan, dan sistem plumbing."
      },
      {
        title: "Adendum Contract Change Order (CCO)",
        url: "/portfolio/slbn-2-pariaman/cco.png",
        caption: "Penyusunan berita acara perubahan volume pekerjaan tambah/kurang dan justifikasi teknis resmi."
      },
      {
        title: "Spreadsheet Backup Volume Pekerjaan",
        url: "/portfolio/slbn-2-pariaman/backup-volume.png",
        caption: "Lembar verifikasi volume aktual untuk memastikan akurasi nilai pembayaran kontrak."
      },
      {
        title: "Dokumen RKS Spesifikasi Mutu Material",
        url: "/portfolio/slbn-2-pariaman/rks.png",
        caption: "Standar mutu material non-toksik, ubin anti-slip, dan toleransi pemasangan pekerjaan."
      }
    ],
    documents: [
      {
        name: "Time Schedule Resmi Pelaksanaan (PDF)",
        url: "/portfolio/slbn-2-pariaman/TS.pdf",
        format: "PDF",
        size: "806 KB"
      },
      {
        name: "Rekapitulasi Anggaran Biaya Revitalisasi (PDF)",
        url: "/portfolio/slbn-2-pariaman/REKAP.pdf",
        format: "PDF",
        size: "468 KB"
      }
    ]
  },
  {
    id: "magang-sie-purwakarta",
    title: "Proyek Waste Gas Recovery PT Indo-Bharat Rayon Plant",
    category: "Industrial & QC",
    role: "Quality Control & Quantity Surveyor Intern",
    period: "Agu 2024 – Des 2024",
    clientOrInstitution: "PT Solusi Industri Energi (Main EPC Contractor) / PT Indo-Bharat Rayon",
    location: "Purwakarta, Jawa Barat, Indonesia",
    summary:
      "Pengawasan mutu konstruksi (Quality Control) dan Quantity Surveying pada proyek fasilitas pemulihan gas buang (Waste Gas Recovery) di kawasan industri kimia aktif PT Indo-Bharat Rayon. Bertanggung jawab atas pembuatan Bar Bending Schedule (BBS) untuk efisiensi pemotongan baja tulangan, perhitungan Backup Volume pekerjaan terpasang untuk pengajuan Progress Billing, pengujian Slump Test beton segar di lapangan, checklist penulangan sebelum pengecoran, pemetaan lapangan (Site Mapping), serta penyusunan Punch List serah terima pekerjaan.",
    architectureAndSolution: [
      "Menyusun Bar Bending Schedule (BBS) untuk optimasi pemotongan dan pembengkokan baja tulangan, menekan scrap besi di lapangan.",
      "Menghitung volume pekerjaan terpasang aktual (Backup Volume) sebagai dasar resmi penagihan berkala (Progress Billing) tanpa perselisihan.",
      "Melakukan perhitungan kuantitas dan biaya tambahan akibat adanya pengerjaan ulang (QTO Rework) pada elemen struktur.",
      "Melaksanakan inspeksi QC lapangan: pengujian Slump Test beton segar untuk memastikan workability sesuai mix design, cek dimensi bekisting, dan jarak pembesian.",
      "Melakukan pemetaan lapangan (Site Mapping) dan mengelola Punch List serah terima parsial antar sub-area proyek.",
      "Menyusun laporan progres harian (Daily Progress), mingguan (Weekly Report), dan bulanan (Monthly Report) untuk koordinasi lintas pemangku kepentingan."
    ],
    metrics: [
      { label: "Inspeksi Beton Segar", value: "100% Slump Test & QC Sesuai Mutu" },
      { label: "Efisiensi Rebar", value: "BBS Terukur Minimal Scrap" },
      { label: "Penagihan Progres", value: "Backup Volume Terverifikasi" }
    ],
    techStack: ["Bar Bending Schedule (BBS)", "Slump Testing", "AutoCAD", "Punch List Resolution", "Progress Billing", "Microsoft Excel"],
    deliverables: [
      "Bar Bending Schedule (BBS) Fabrikasi Tulangan",
      "Dossier Backup Volume Penagihan Bulanan",
      "Laporan Hasil Pengujian Slump Test & Inspeksi Pembesian",
      "Peta Kerja Lapangan (Site Mapping) & Punch List",
      "Daily, Weekly, & Monthly Progress Reports"
    ],
    featured: true,
    coverImage: "/portfolio/magang-sie/slump-test.jpg",
    mediaGallery: [
      {
        title: "Pengujian Slump Test Beton Segar di Lapangan",
        url: "/portfolio/magang-sie/slump-test.jpg",
        caption: "Uji slump cone untuk memastikan workability dan nilai fas beton ready-mix sebelum diizinkan masuk ke cetakan struktur industri."
      },
      {
        title: "Penyusunan Bar Bending Schedule (BBS)",
        url: "/portfolio/magang-sie/bbs.png",
        caption: "Tabel potong dan tekuk baja tulangan untuk meminimalkan sisa potongan besi (waste minimization)."
      },
      {
        title: "Dossier Dokumen Backup Volume",
        url: "/portfolio/magang-sie/dokumen.jpeg",
        caption: "Arsip fisik bukti hitung volume terpasang lengkap dengan tanda tangan verifikasi engineer proyek."
      },
      {
        title: "Lampiran Perhitungan Backup Volume",
        url: "/portfolio/magang-sie/dokumen-2.jpeg",
        caption: "Rincian lembar matematis kuantitas beton, bekisting, dan pembesian untuk progress billing bulanan."
      },
      {
        title: "Pemetaan Area Kerja (Site Mapping Work)",
        url: "/portfolio/magang-sie/mapping-work.png",
        caption: "Visualisasi status kemajuan konstruksi pada denah fasilitas Waste Gas Recovery."
      },
      {
        title: "Daftar Perbaikan Cacat (Punch List)",
        url: "/portfolio/magang-sie/punch-list.png",
        caption: "Log checklist perbaikan pekerjaan sebelum dan sesudah serah terima zona kerja kepada owner."
      },
      {
        title: "Kalkulasi QTO Rework Lapangan",
        url: "/portfolio/magang-sie/qto-rework-1.png",
        caption: "Perhitungan kuantitas dan estimasi dampak biaya atas pekerjaan yang memerlukan modifikasi/rework."
      },
      {
        title: "Daily Progress Log Proyek",
        url: "/portfolio/magang-sie/daily-proggres.png",
        caption: "Catatan harian pencapaian fisik, tenaga kerja, alat berat, dan kondisi cuaca di tapak industri."
      },
      {
        title: "Weekly Construction Progress Summary",
        url: "/portfolio/magang-sie/weekly-report.png",
        caption: "Rekapitulasi performa mingguan membandingkan deviasi target rencana terhadap realisasi lapangan."
      },
      {
        title: "Laporan Manajemen Bulanan (Monthly Report)",
        url: "/portfolio/magang-sie/monthly-report.png",
        caption: "Laporan bulanan eksekutif mencakup status material, K3/HSE, pencapaian Kurva S, dan dokumentasi foto."
      }
    ],
    documents: [
      {
        name: "Sertifikat Resmi Magang PT Solusi Industri Energi",
        url: "/portfolio/certificates/sertifikat-magang-sie.pdf",
        format: "PDF",
        size: "298 KB"
      }
    ]
  },
  {
    id: "fasilitator-kemendikdasmen",
    title: "Pengawasan & Reviu Teknis Revitalisasi Sekolah Dasar — Kemendikdasmen",
    category: "Government & Supervision",
    role: "Fasilitator Teknis - Program Revitalisasi Sekolah Dasar",
    period: "Jun 2025 – Des 2025",
    clientOrInstitution: "Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen)",
    location: "Sumatera Barat, Indonesia",
    summary:
      "Bertindak sebagai Fasilitator Teknis yang ditugaskan oleh Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen) untuk mengawal program revitalisasi infrastruktur sekolah dasar. Bertanggung jawab atas reviu dan evaluasi kelayakan dokumen teknis & administrasi (DED, RAB, RKS) sekolah penerima bantuan, melaksanakan monitoring berkala progres fisik konstruksi di lapangan, serta memverifikasi keabsahan laporan kemajuan sebagai syarat mutlak pencairan dana termin bantuan pemerintah.",
    architectureAndSolution: [
      "Melakukan audit teknis terhadap kelayakan Detailed Engineering Design (DED), kesesuaian harga RAB terhadap AHSP daerah, dan kejelasan RKS.",
      "Melaksanakan kunjungan monitoring berkala ke lokasi proyek sekolah di berbagai wilayah untuk mengevaluasi mutu bahan dan kesesuaian fisik.",
      "Menilai deviasi jadwal dan membantu tim swakelola sekolah mencari solusi percepatan saat terjadi kendala material.",
      "Memeriksa kelengkapan administrasi dan fisik laporan kemajuan pekerjaan sebagai prasyarat persetujuan rekomendasi pencairan dana termin pemerintah.",
      "Menyelenggarakan Bimbingan Teknis (BIMTEK) bersama panitia pembangunan sekolah guna memastikan kepatuhan tata kelola teknis."
    ],
    metrics: [
      { label: "Cakupan Peran", value: "Audit DED, RAB, RKS, & Fisik" },
      { label: "Akuntabilitas", value: "100% Termin Berkas Terverifikasi" },
      { label: "Program Negara", value: "Revitalisasi Sekolah Kemendikdasmen" }
    ],
    techStack: ["Technical Review DED/RAB/RKS", "Field Site Monitoring", "Disbursement Milestone Audit", "BIMTEK Facilitation"],
    deliverables: [
      "Lembar Form Review Dokumen Perencanaan Teknis",
      "Laporan Monitoring dan Evaluasi Fisik Berkala",
      "Berita Acara Verifikasi Kemajuan Fisik Termin Bantuan",
      "Dokumentasi Pengawasan dan Bimbingan Teknis (BIMTEK)"
    ],
    featured: true,
    coverImage: "/portfolio/fasilitator/site-monitoring.jpeg",
    mediaGallery: [
      {
        title: "Monitoring Fisik Proyek di Lapangan",
        url: "/portfolio/fasilitator/site-monitoring.jpeg",
        caption: "Inspeksi berkala ke lokasi sekolah penerima bantuan untuk memeriksa mutu pengerjaan dan struktur bangunan."
      },
      {
        title: "Verifikasi Lapangan Bersama Komite Sekolah",
        url: "/portfolio/fasilitator/site-monitoring-2.jpeg",
        caption: "Pengecekan langsung material yang digunakan di tapak bangunan untuk menjamin standar mutu Kemendikdasmen."
      },
      {
        title: "Pelaksanaan Bimbingan Teknis (BIMTEK)",
        url: "/portfolio/fasilitator/bimtek.jpeg",
        caption: "Pemberian materi bimbingan teknis mengenai tata kelola administrasi dan mutu konstruksi kepada pengelola sekolah."
      },
      {
        title: "Form Evaluasi & Review Dokumen Teknis",
        url: "/portfolio/fasilitator/form-review.png",
        caption: "Format audit kelayakan gambar DED, perhitungan RAB, dan RKS sebelum pelaksanaan konstruksi dimulai."
      },
      {
        title: "Format Laporan Berkala Fasilitator Teknis",
        url: "/portfolio/fasilitator/laporan-fasilitator.png",
        caption: "Instrumen pelaporan status kemajuan fisik dan realisasi serapan anggaran bantuan revitalisasi."
      },
      {
        title: "Sesi Koordinasi Reviewer Teknis",
        url: "/portfolio/fasilitator/reviewer.jpeg",
        caption: "Rapat pleno penelaahan berkas laporan kemajuan proyek bersama tim fasilitator daerah."
      }
    ]
  },
  {
    id: "qs-mulia-djasmine",
    title: "Quantity Surveying & Re-Measurement MC-100 — PT Perfetti Van Melle Indonesia",
    category: "Planning & QS",
    role: "Quantity Surveyor (Freelance)",
    period: "Sep 2025",
    clientOrInstitution: "PT Mulia Djasmine Sentosa (Subkontraktor PT Perfetti Van Melle Indonesia)",
    location: "Cikarang / Jawa Barat, Indonesia",
    summary:
      "Quantity Surveyor freelance yang menangani perhitungan ulang kuantitas pekerjaan aktual di lapangan (Mutual Check 100 / MC-100) pada proyek fasilitas pabrik multinasional PT Perfetti Van Melle Indonesia. Menyusun rekapitulasi biaya dan valuasi harga berdasarkan kuantitas fisik yang telah diverifikasi sebagai dasar resmi pengajuan klaim pembayaran subkontraktor, penyusunan Bar Bending Schedule (BBS), serta formulasi adendum Contract Change Order (CCO).",
    architectureAndSolution: [
      "Melaksanakan opname lapangan dan re-measurement aktual bersama perwakilan main contractor untuk memastikan angka MC-100 valid.",
      "Menyusun lembar Backup Volume terperinci untuk membuktikan setiap meter kubik beton, luas bekisting, dan tonase baja yang terpasang.",
      "Menyusun rekapitulasi biaya dan valuasi klaim tagihan subkontraktor berbasis kuantitas riil lapangan.",
      "Menyusun daftar perubahan item pekerjaan dari kontrak awal (CCO) disertai rincian analisa harga satuan.",
      "Menyusun Bar Bending Schedule (BBS) untuk kebutuhan fabrikasi besi struktur subkontraktor."
    ],
    metrics: [
      { label: "Validasi Lapangan", value: "100% Selesai MC-100 Tanpa Dispute" },
      { label: "Penyusunan Kontrak", value: "Klaim Valuasi & CCO Terverifikasi" },
      { label: "Manajemen Material", value: "Bar Bending Schedule Presisi" }
    ],
    techStack: ["Quantity Surveying", "Mutual Check (MC-100)", "Contract Change Order (CCO)", "Bar Bending Schedule (BBS)", "Microsoft Excel"],
    deliverables: [
      "Dossier Backup Volume Pekerjaan Terpasang MC-100",
      "Dokumen Rekapitulasi Valuasi Klaim Pembayaran",
      "Form Perubahan Kontrak (CCO) & Justifikasi Biaya",
      "Bar Bending Schedule (BBS) Fabrikasi"
    ],
    featured: true,
    coverImage: "/portfolio/qs-mulia-djasmine/backup-vol.png",
    mediaGallery: [
      {
        title: "Backup Volume Perhitungan MC-100",
        url: "/portfolio/qs-mulia-djasmine/backup-vol.png",
        caption: "Lembar hitung matematis kuantitas aktual terpasang sebagai acuan verifikasi klaim pembayaran subkontraktor."
      },
      {
        title: "Bar Bending Schedule (BBS) Subkontraktor",
        url: "/portfolio/qs-mulia-djasmine/bbs.png",
        caption: "Tabel kebutuhan baja tulangan dengan spesifikasi diameter, panjang potong, dan bentuk tekukan standar."
      },
      {
        title: "Dokumen Contract Change Order (CCO)",
        url: "/portfolio/qs-mulia-djasmine/cco.png",
        caption: "Dokumentasi pergantian item dan volume pekerjaan dari kontrak awal dengan analisis biaya transparan."
      },
      {
        title: "Rapat Koordinasi Evaluasi & Klarifikasi",
        url: "/portfolio/qs-mulia-djasmine/meeting.jpeg",
        caption: "Pertemuan koordinasi teknis bersama manajemen kontraktor utama terkait verifikasi hasil opname lapangan."
      }
    ]
  },
  {
    id: "revit-bim-modeling",
    title: "Pemodelan 3D Terintegrasi Struktur & Arsitektur — Autodesk Revit (BIM)",
    category: "BIM & CAD",
    role: "BIM Modeler & Digital Drafter",
    period: "2025",
    clientOrInstitution: "Arsisten Academy (Revit Masterclass for Beginners)",
    location: "Indonesia",
    summary:
      "Penerapan alur kerja Building Information Modeling (BIM) profesional menggunakan Autodesk Revit. Melakukan pemodelan parametrik 3D struktur beton bertulang (kolom, balok, plat lantai, dan perkuatan struktur) serta integrasi elemen arsitektural (dinding, partisi, kusen jendela, pintu, dan material schedules). Menghasilkan model digital terpadu yang meminimalkan benturan elemen (clash) serta mampu menghasilkan kuantitas material otomatis.",
    architectureAndSolution: [
      "Membangun grid dan level elevasi bangunan sesuai datum koordinat referensi arsitektural.",
      "Memodelkan komponen struktur primer (kolom, balok portal, dan sloof) dengan konfigurasi sambungan yang akurat.",
      "Melakukan penggambaran ulang (re-modeling) dari gambar 2D CAD ke dalam objek parametrik 3D BIM yang kaya informasi.",
      "Mengintegrasikan elemen arsitektural (dinding bata, finishing lantai, plafond, dan kusen jendela/pintu).",
      "Memanfaatkan fitur schedule otomatis Revit untuk ekstraksi volume beton dan material secara cepat."
    ],
    metrics: [
      { label: "Metodologi", value: "Building Information Modeling (BIM)" },
      { label: "Sertifikasi", value: "Arsisten Academy Revit Completion" },
      { label: "Integrasi Desain", value: "Struktur & Arsitektur Terpadu" }
    ],
    techStack: ["Autodesk Revit", "Building Information Modeling (BIM)", "Parametric Modeling", "Quantity Scheduling"],
    deliverables: [
      "Model 3D Revit (.rvt) Struktur dan Arsitektur",
      "Gambar Kerja Ekstraksi 2D Denah & Tampak",
      "Tabel Ekstraksi Kuantitas Material Otomatis"
    ],
    featured: true,
    coverImage: "/portfolio/revit-bim/screenshot-2026-10-29-123810.png",
    mediaGallery: [
      {
        title: "Model 3D Struktur Balok & Kolom Revit",
        url: "/portfolio/revit-bim/screenshot-2026-10-29-123810.png",
        caption: "Pemodelan kerangka struktur portal beton bertulang dengan level elevasi dan grid struktural presisi."
      },
      {
        title: "Detailing Geometri Pertemuan Elemen",
        url: "/portfolio/revit-bim/screenshot-2026-10-29-123739.png",
        caption: "Konfigurasi sambungan dan join geometri balok terhadap kolom untuk mencegah benturan volume pemodelan."
      },
      {
        title: "Pemodelan Dinding & Bukaan Arsitektural",
        url: "/portfolio/revit-bim/screenshot-2026-10-29-123825.png",
        caption: "Penyusunan komponen dinding, partisi ruang, dan bukaan pintu/jendela pada model arsitektural Revit."
      },
      {
        title: "Tampilan Perspektif Massa Bangunan",
        url: "/portfolio/revit-bim/screenshot-2026-10-29-123933.png",
        caption: "Visualisasi menyeluruh perpaduan struktur dan arsitektur dalam tampilan 3D isometrik terintegrasi."
      }
    ],
    documents: [
      {
        name: "Sertifikat Revit Masterclass Arsisten Academy",
        url: "/portfolio/certificates/sertifikat-revit.pdf",
        format: "PDF",
        size: "440 KB"
      }
    ]
  },
  {
    id: "tugas-akhir-dprd-pasaman",
    title: "Tugas Akhir: Rencana Pelaksanaan Pembangunan Gedung DPRD Kab. Pasaman",
    category: "Planning & QS",
    role: "Lead Project Planner & Cost Estimator (Tugas Akhir D3)",
    period: "2025",
    clientOrInstitution: "Politeknik Negeri Padang (Jurusan Teknik Sipil)",
    location: "Kabupaten Pasaman, Sumatera Barat",
    summary:
      "Tugas Akhir kelulusan Diploma III Teknik Sipil dengan judul 'Rencana Pelaksanaan Pembangunan Gedung DPRD Kabupaten Pasaman'. Merancang estimasi Rencana Anggaran Biaya (RAB) menyeluruh, penjadwalan proyek menggunakan Microsoft Project (Time Schedule), serta pemetaan distribusi bobot pekerjaan ke dalam Kurva S.",
    architectureAndSolution: [
      "Menghitung Quantity Take-Off (QTO) pekerjaan struktur bawah (pondasi, pile cap), struktur atas (kolom, balok, plat, tangga), arsitektur, dan MEP.",
      "Menyusun Rencana Anggaran Biaya (RAB) dengan analisis harga satuan standar SNI/AHSP.",
      "Menyusun penjadwalan komprehensif pada Microsoft Project menggunakan Critical Path Method (CPM) untuk mengidentifikasi lintasan kritis.",
      "Menyusun Kurva S distribusi bobot mingguan sebagai instrumen monitoring progres konstruksi dan arus kas (cash-flow)."
    ],
    metrics: [
      { label: "IPK Kelulusan", value: "3.72 / 4.00 (Dengan Pujian)" },
      { label: "Software Scheduling", value: "Microsoft Project CPM & Kurva S" },
      { label: "Objek Studi", value: "Gedung Bertingkat Pemerintahan" }
    ],
    techStack: ["Microsoft Project", "Microsoft Excel", "AutoCAD", "Cost Estimating (RAB)", "Critical Path Method (CPM)"],
    deliverables: [
      "Buku Laporan Tugas Akhir Lengkap",
      "Dokumen Rencana Anggaran Biaya (RAB) Detail",
      "Master Schedule Microsoft Project & Kurva S Rencana"
    ],
    featured: true,
    coverImage: "/portfolio/final-project-dprd/kurva-s.png",
    mediaGallery: [
      {
        title: "Kurva S Rencana Pelaksanaan Gedung DPRD",
        url: "/portfolio/final-project-dprd/kurva-s.png",
        caption: "Grafik distribusi kumulatif bobot mingguan pekerjaan sebagai tolok ukur pengendalian waktu dan deviasi progres."
      },
      {
        title: "Time Schedule Microsoft Project & Gantt Chart",
        url: "/portfolio/final-project-dprd/schedule-ms-project.png",
        caption: "Penyusunan dependensi aktivitas, durasi kerja, dan identifikasi jalur kritis (CPM) pada MS Project."
      },
      {
        title: "Lembar Rencana Anggaran Biaya (RAB)",
        url: "/portfolio/final-project-dprd/rab.png",
        caption: "Kalkulasi terstruktur biaya konstruksi per divisi pekerjaan berdasarkan analisa harga satuan."
      }
    ],
    documents: [
      {
        name: "Transkrip Nilai Kelulusan D3 (IPK 3.72)",
        url: "/portfolio/certificates/transkrip-nilai.pdf",
        format: "PDF",
        size: "755 KB"
      }
    ]
  },
  {
    id: "tender-fondasi-days-uns",
    title: "Kompetisi Tender Konstruksi Nasional 'Fondasi Days 2025' — UNS",
    category: "Tender & Research",
    role: "Cost Estimator, 3D Modeler & Presenter (Tim Jaya Jaya)",
    period: "2025",
    clientOrInstitution: "Universitas Sebelas Maret (UNS) Surakarta",
    location: "Tingkat Nasional / Surakarta, Indonesia",
    summary:
      "Berpartisipasi dalam kompetisi tender konstruksi bergengsi tingkat nasional 'Fondasi Days 2025' di Universitas Sebelas Maret. Terlibat langsung dalam penyusunan proposal dokumen penawaran tender komersial dan teknis: pemodelan 3D tahapan konstruksi menggunakan SketchUp, analisis metode pelaksanaan teknis (site logistics dan mobile crane), perhitungan RAB bersaing, time schedule MS Project & Kurva S, penyusunan poster tender, serta materi PPT penawaran.",
    architectureAndSolution: [
      "Menyusun perhitungan volume pekerjaan dan kalkulasi penawaran harga bersaing dengan pemodelan margin kontingensi.",
      "Memodelkan visualisasi 3D pentahapan konstruksi (phasing) pada SketchUp untuk memperjelas tata letak site logistik, tower crane, dan alur sirkulasi alat berat.",
      "Menyusun Master Time Schedule menggunakan Microsoft Project dan menurunkan kurva S bobot pelaksanaan.",
      "Merancang materi slide PPT penawaran dan poster teknis komprehensif untuk mempresentasikan strategi rekayasa nilai (value engineering)."
    ],
    metrics: [
      { label: "Skala Kompetisi", value: "Tingkat Nasional (UNS Fondasi Days)" },
      { label: "Simulasi 3D", value: "SketchUp Phasing & Site Logistics" },
      { label: "Kelengkapan Dokumen", value: "Tender Proposal, Kurva S, & Poster" }
    ],
    techStack: ["SketchUp 3D", "Microsoft Project", "Microsoft Excel", "Tender Estimation", "PowerPoint Pitching"],
    deliverables: [
      "Dokumen Proposal Penawaran Tender Teknis & Biaya",
      "Model 3D Visualisasi Metode Kerja (SketchUp)",
      "Time Schedule MS Project & Kurva S Penawaran",
      "Poster Teknis Kompetisi & Slide Penawaran"
    ],
    featured: false,
    coverImage: "/portfolio/tender-uns/render-uns-2.jpg",
    mediaGallery: [
      {
        title: "3D Render Metode Pelaksanaan Konstruksi (SketchUp)",
        url: "/portfolio/tender-uns/render-uns-2.jpg",
        caption: "Visualisasi 3D staging konstruksi, posisi tower crane, drop zone material, dan proteksi keselamatan kerja."
      },
      {
        title: "Time Schedule Microsoft Project",
        url: "/portfolio/tender-uns/ms-project.png",
        caption: "Gantt chart jadwal kerja dengan integrasi ketergantungan antar aktivitas konstruksi."
      },
      {
        title: "Estimasi Biaya Penawaran (RAB Kompetisi)",
        url: "/portfolio/tender-uns/rab.png",
        caption: "Perhitungan harga penawaran bersaing dengan optimalisasi koefisien alat dan tenaga kerja."
      },
      {
        title: "Slide Pitching Penawaran Tender",
        url: "/portfolio/tender-uns/ppt-penawaran.png",
        caption: "Dek presentasi strategi metode pelaksanaan dan manajemen risiko di hadapan dewan juri."
      },
      {
        title: "Poster Tender Tim Jaya Jaya",
        url: "/portfolio/tender-uns/poster-jaya-jaya-team.jpg",
        caption: "Poster infografis komprehensif mencakup metode kerja, time schedule, Kurva S, K3, dan inovasi ramah lingkungan."
      }
    ]
  },
  {
    id: "pra-proyek-sap2000",
    title: "Pemodelan Elemen Hingga & Analisis Beban Gempa Gedung — SAP2000",
    category: "BIM & CAD",
    role: "Structural Modeling & Dynamic Analysis Modeler",
    period: "2024",
    clientOrInstitution: "Studio Pra-Proyek Perancangan Gedung (Politeknik Negeri Padang)",
    location: "Padang, Sumatera Barat",
    summary:
      "Melaksanakan pemodelan struktur rangka 3D dan analisis pembebanan struktur bertingkat berbasis Finite Element Method menggunakan software SAP2000. Menerapkan kombinasi beban mati, beban hidup, serta beban gempa dinamik respons spektrum sesuai standar ketahanan gempa SNI 1726, guna mengevaluasi gaya dalam (aksial, geser, momen lentur) dan memeriksa kelayakan dimensi penampang beton bertulang.",
    architectureAndSolution: [
      "Membangun model rangka ruang 3D balok, kolom, dan pelat beton bertulang pada software SAP2000.",
      "Menghitung preliminary design dimensi penampang komponen struktur sebelum analisis dilakukan.",
      "Menginput parameter respon spektrum gempa rencana berdasarkan koordinat wilayah gempa dan jenis tanah tapak gedung sesuai SNI 1726.",
      "Mengekstraksi diagram envelope gaya dalam (gaya aksial, gaya geser, dan momen lentur) untuk perancangan tulangan lentur dan geser.",
      "Memeriksa simpangan antar tingkat (story drift) gedung untuk memastikan struktur berada dalam batas elastis aman."
    ],
    metrics: [
      { label: "Software Analisis", value: "SAP2000 Finite Element Method" },
      { label: "Standar Gempa", value: "Respons Spektrum SNI 1726" },
      { label: "Evaluasi Struktur", value: "Diagram Gaya Dalam (Aksial, Geser, Momen)" }
    ],
    techStack: ["SAP2000", "AutoCAD", "SNI Gempa 1726", "Desain Struktur Beton Bertulang (SNI 2847)"],
    deliverables: [
      "File Pemodelan Struktur 3D SAP2000",
      "Diagram Gaya Aksial, Momen Lentur, & Gaya Geser",
      "Kurva Analisis Respons Spektrum Beban Gempa Dinamik",
      "Dokumen Perhitungan Primary Design Dimensi Struktur"
    ],
    featured: false,
    coverImage: "/portfolio/pra-proyek-sap2000/sap2000.png",
    mediaGallery: [
      {
        title: "Model Struktur Portal 3D SAP2000",
        url: "/portfolio/pra-proyek-sap2000/sap2000.png",
        caption: "Pemodelan 3D rangka beton bertulang gedung bertingkat dengan penomoran joint dan elemen batang."
      },
      {
        title: "Kurva Analisis Respons Spektrum Gempa SNI",
        url: "/portfolio/pra-proyek-sap2000/beban-gempa.png",
        caption: "Input fungsi respon spektrum percepatan gempa sesuai zona wilayah dan kelas situs tanah."
      },
      {
        title: "Diagram Envelope Momen Lentur & Gaya Geser",
        url: "/portfolio/pra-proyek-sap2000/momen,-geser.png",
        caption: "Grafik distribusi momen maksimum dan gaya lintang untuk penentuan rasio penulangan balok dan kolom."
      },
      {
        title: "Distribusi Gaya Aksial pada Kolom Struktur",
        url: "/portfolio/pra-proyek-sap2000/axial.png",
        caption: "Visualisasi beban aksial tekan kumulatif dari lantai atas menuju kolom lantai dasar."
      },
      {
        title: "Kalkulasi Primary Design Dimensi Struktur",
        url: "/portfolio/pra-proyek-sap2000/primery-design.png",
        caption: "Perhitungan awal kekakuan dan ukuran penampang balok-kolom sebelum running analisis numerik."
      },
      {
        title: "Evaluasi Story Drift & Deformasi Struktur",
        url: "/portfolio/pra-proyek-sap2000/screenshot-2026-10-29-114714.png",
        caption: "Pengecekan perpindahan lateral gedung akibat gempa guna memenuhi batas izin SNI ketahanan gempa."
      }
    ]
  },
  {
    id: "artikel-ilmiah-scaffolding",
    title: "Artikel Ilmiah: Analisa Biaya Scaffolding Proyek Waste Gas Recovery — PKM-AI",
    category: "Tender & Research",
    role: "Penulis Utama & Peneliti Studi Biaya",
    period: "2025",
    clientOrInstitution: "Pekan Kreativitas Mahasiswa – Artikel Ilmiah (PKM-AI) Kemendikbudristek",
    location: "Tingkat Nasional",
    summary:
      "Menyusun karya tulis ilmiah berjudul 'Analisa Biaya Scaffolding pada Proyek Waste Gas Recovery IBR Purwakarta' yang didanai dalam program PKM-AI Kemendikbudristek. Penelitian ini mengevaluasi efisiensi biaya konstruksi antara skema pembelian aset tetap (CapEx) dengan skema penyewaan berkala (OpEx) scaffolding berdasarkan data aktual durasi dan frekuensi pemakaian di lapangan.",
    architectureAndSolution: [
      "Mengumpulkan data empiris lapangan terkait biaya sewa harian/bulanan, biaya transportasi, mobilisasi/demobilisasi, dan biaya pengadaan baru scaffolding.",
      "Menghitung perbandingan titik impas (break-even point) biaya total antara opsi sewa vs opsi beli.",
      "Menghasilkan kesimpulan strategis: efisiensi biaya scaffolding sangat bergantung pada durasi pemakaian proyek; pada durasi proyek jangka panjang skema pembelian jauh lebih efisien, sedangkan untuk durasi singkat skema penyewaan menjadi opsi paling optimal.",
      "Memformulasikan pedoman pengambilan keputusan finansial alat bantu kerja bagi kontraktor industri."
    ],
    metrics: [
      { label: "Program", value: "PKM-AI Kemendikbudristek" },
      { label: "Fokus Studi", value: "Analisis Kelayakan Biaya (Beli vs Sewa)" },
      { label: "Data Acuan", value: "Proyek Waste Gas Recovery IBR Purwakarta" }
    ],
    techStack: ["Cost Engineering Analysis", "Microsoft Excel", "Penulisan Ilmiah", "Life-Cycle Costing"],
    deliverables: [
      "Naskah Artikel Ilmiah PKM-AI Kemendikbudristek",
      "Model Matriks Keputusan Finansial Scaffolding"
    ],
    featured: false,
    coverImage: "/portfolio/artikel-ilmiah/screenshot-2026-10-29-120442.png",
    mediaGallery: [
      {
        title: "Dokumen Artikel Ilmiah PKM-AI",
        url: "/portfolio/artikel-ilmiah/screenshot-2026-10-29-120442.png",
        caption: "Naskah karya tulis ilmiah evaluasi efisiensi biaya perancah modular scaffolding pada proyek industri Purwakarta."
      }
    ]
  }
];

export const workExperiences: Experience[] = [
  {
    id: "exp-sdn19-kuamang",
    role: "Perencana Teknis (Konsultan Perencana Revitalisasi SD)",
    company: "Konsultan Perencana Revitalisasi Sekolah",
    type: "Proyek Revitalisasi SDN 19 Kuamang",
    period: "Sep 2026",
    location: "Pasaman, Sumatera Barat, Indonesia",
    responsibilities: [
      "Menyusun perhitungan volume pekerjaan (Quantity Take-Off) serta Rencana Anggaran Biaya (RAB) revitalisasi fasilitas sekolah.",
      "Merancang dokumen Rencana Kerja dan Syarat-Syarat (RKS) sebagai pedoman spesifikasi teknis dan standar mutu material di lapangan.",
      "Menyusun jadwal pelaksanaan proyek (Time Schedule) dan memetakan bobot pekerjaan ke dalam Kurva S.",
      "Memproduksi gambar kerja perencanaan (Detailed Engineering Design/DED) bangunan sekolah menggunakan AutoCAD.",
      "Mengoptimalkan sistem layout viewport pada AutoCAD untuk publikasi cetak format PDF siap lelang dan siap kerja."
    ],
    keyImpacts: [
      "Menghasilkan dokumen DED dan RAB yang akurat tanpa duplikasi item pekerjaan, mencegah pembengkakan biaya saat konstruksi.",
      "Penerapan layout AutoCAD to PDF yang rapi mempercepat proses approval berkas oleh pihak dinas terkait."
    ],
    toolsUsed: ["AutoCAD (Layout Viewports)", "Microsoft Excel", "Microsoft Project", "RKS Spesifikasi Teknis", "Kurva S"],
    mediaPreview: [
      { title: "Layout AutoCAD", url: "/portfolio/sdn-19-kuamang/menggunakan-layout-autocad.png" },
      { title: "Kurva S Proyek", url: "/portfolio/sdn-19-kuamang/kurva-s.pdf" }
    ],
    documents: [
      { name: "Kurva S SDN 19 Kuamang (PDF)", url: "/portfolio/sdn-19-kuamang/kurva-s.pdf" },
      { name: "RAB Revitalisasi (PDF)", url: "/portfolio/sdn-19-kuamang/RAB.pdf" }
    ]
  },
  {
    id: "exp-slbn2-pariaman",
    role: "Perencana Teknis (Konsultan Perencana Revitalisasi SLB)",
    company: "Konsultan Perencana Revitalisasi Sekolah",
    type: "Proyek Revitalisasi SLBN 2 Pariaman",
    period: "Jul 2026",
    location: "Pariaman, Sumatera Barat, Indonesia",
    responsibilities: [
      "Menyusun perhitungan volume pekerjaan serta Rencana Anggaran Biaya (RAB) revitalisasi fasilitas sekolah ramah disabilitas.",
      "Merancang dokumen Rencana Kerja dan Syarat-Syarat (RKS) spesifikasi teknis dan standar mutu material ramah kebutuhan khusus.",
      "Menyusun jadwal pelaksanaan proyek (Time Schedule) dan memetakan bobot pekerjaan ke dalam Kurva S.",
      "Memproduksi gambar kerja Detailed Engineering Design (DED) lengkap menggunakan AutoCAD layout to PDF.",
      "Menyusun adendum pergantian rancangan rencana dari kontrak awal (Contract Change Order / CCO) akibat kondisi eksisting lapangan."
    ],
    keyImpacts: [
      "Penyusunan CCO yang akurat menjaga legalitas dan transparansi perubahan volume tanpa memicu klaim sengketa kontrak.",
      "Standar aksesibilitas disabilitas (ramp kursi roda dan toilet difabel) terpenuhi 100% sesuai pedoman teknis keselamatan."
    ],
    toolsUsed: ["AutoCAD", "Contract Change Order (CCO)", "Microsoft Excel", "Time Schedule & Kurva S", "Spesifikasi RKS"],
    mediaPreview: [
      { title: "DED Layout AutoCAD", url: "/portfolio/slbn-2-pariaman/layout-autocad.png" },
      { title: "Dokumen CCO", url: "/portfolio/slbn-2-pariaman/cco.png" }
    ],
    documents: [
      { name: "Time Schedule Pelaksanaan (PDF)", url: "/portfolio/slbn-2-pariaman/TS.pdf" },
      { name: "Rekapitulasi Anggaran (PDF)", url: "/portfolio/slbn-2-pariaman/REKAP.pdf" }
    ]
  },
  {
    id: "exp-qs-freelance",
    role: "Quantity Surveyor (Freelance)",
    company: "PT Mulia Djasmine Sentosa",
    type: "Subkontraktor Proyek PT Perfetti Van Melle Indonesia",
    period: "Sep 2025",
    location: "Cikarang, Indonesia",
    responsibilities: [
      "Melaksanakan perhitungan ulang volume pekerjaan berdasarkan kondisi aktual (Mutual Check 100 / MC-100) di lokasi proyek pabrik.",
      "Menyusun rekapitulasi biaya dan valuasi harga pekerjaan berdasarkan kuantitas aktual terverifikasi sebagai dasar pengajuan klaim pembayaran subkontraktor.",
      "Menyusun dokumen pergantian item pekerjaan dari kontrak awal (Contract Change Order / CCO).",
      "Menyusun Bar Bending Schedule (BBS) untuk kebutuhan fabrikasi besi struktur subkontraktor."
    ],
    keyImpacts: [
      "Klaim penagihan pembayaran subkontraktor disetujui penuh oleh kontraktor utama tanpa deviasi berkat backup volume terverifikasi.",
      "Seluruh pergantian item pekerjaan terdokumentasi rapi dalam CCO dengan penyesuaian biaya yang transparan."
    ],
    toolsUsed: ["Quantity Surveying (MC-100)", "Bar Bending Schedule (BBS)", "CCO Administration", "Microsoft Excel"],
    mediaPreview: [
      { title: "Backup Volume MC-100", url: "/portfolio/qs-mulia-djasmine/backup-vol.png" },
      { title: "BBS Fabrikasi", url: "/portfolio/qs-mulia-djasmine/bbs.png" }
    ]
  },
  {
    id: "exp-kemendikdasmen",
    role: "Fasilitator Teknis - Program Revitalisasi Sekolah Dasar",
    company: "Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen)",
    type: "Program Revitalisasi Sekolah Bantuan Pemerintah",
    period: "Jun 2025 – Des 2025",
    location: "Sumatera Barat, Indonesia",
    responsibilities: [
      "Melakukan reviu dan evaluasi kelayakan dokumen administrasi serta teknis perencanaan (Detailed Engineering Design/DED, RAB, dan RKS) sekolah penerima bantuan.",
      "Melaksanakan pemantauan (monitoring) dan evaluasi berkala terhadap progres fisik pelaksanaan program revitalisasi di lapangan agar sesuai dengan jadwal dan standar mutu.",
      "Memverifikasi kelengkapan dan keabsahan dokumen laporan kemajuan pekerjaan sebagai syarat pencairan dana termin bantuan pemerintah.",
      "Memfasilitasi Bimbingan Teknis (BIMTEK) bagi tim pelaksana sekolah mengenai kepatuhan teknis dan pengelolaan anggaran."
    ],
    keyImpacts: [
      "Memastikan 100% pencairan dana termin bantuan pemerintah didukung oleh bukti fisik lapangan yang sah dan terverifikasi.",
      "Mencegah potensi kegagalan konstruksi dan penyimpangan spesifikasi mutu bahan material pada sekolah sasaran."
    ],
    toolsUsed: ["DED / RAB Technical Audit", "Field Monitoring & Quality Inspection", "Disbursement Verification", "BIMTEK Facilitation"],
    mediaPreview: [
      { title: "Site Monitoring", url: "/portfolio/fasilitator/site-monitoring.jpeg" },
      { title: "Dokumen Review", url: "/portfolio/fasilitator/form-review.png" }
    ]
  },
  {
    id: "exp-magang-sie",
    role: "Praktek Kerja Lapangan (Magang) — QC & Quantity Surveyor",
    company: "PT Solusi Industri Energi",
    type: "Waste Gas Recovery Project (PT Indo-Bharat Rayon)",
    period: "Agu 2024 – Des 2024",
    location: "Purwakarta, Jawa Barat, Indonesia",
    responsibilities: [
      "Menyusun Bar Bending Schedule (BBS) untuk pemotongan dan pembengkokan baja tulangan.",
      "Menghitung volume pekerjaan terpasang (Backup Volume) sebagai dokumen pendukung penagihan progres pekerjaan (Progress Billing).",
      "Menghitung volume pekerjaan serta dampak biaya akibat adanya pekerjaan ulang (QTO Rework).",
      "Melaksanakan inspeksi pengendalian mutu (Quality Control) di lapangan: pengujian Slump Test beton segar, pengecekan pemasangan tulangan sebelum pengecoran, serta pengisian checklist pekerjaan.",
      "Melakukan pemetaan lapangan (Site Mapping) dan menyusun daftar perbaikan pekerjaan (Punch List) sebelum dan sesudah serah terima area kerja.",
      "Menyusun laporan progres proyek harian (Daily), mingguan (Weekly), dan bulanan (Monthly Report)."
    ],
    keyImpacts: [
      "Mengurangi sisa potongan baja tulangan (scrap waste) berkat penyusunan BBS yang optimal.",
      "Seluruh batch beton yang dicor terverifikasi nilai slump dan workability-nya sesuai spesifikasi teknis ketat pabrik kimia.",
      "Menyediakan dokumen Backup Volume audit-ready sehingga penagihan termin Progress Billing disetujui tanpa penundaan."
    ],
    toolsUsed: ["Bar Bending Schedule (BBS)", "Slump Testing", "AutoCAD", "Punch List Resolution", "Progress Billing Backup", "Site Mapping"],
    mediaPreview: [
      { title: "Slump Test Lapangan", url: "/portfolio/magang-sie/slump-test.jpg" },
      { title: "Punch List Serah Terima", url: "/portfolio/magang-sie/punch-list.png" }
    ],
    documents: [
      { name: "Sertifikat Magang PT Solusi Industri Energi (PDF)", url: "/portfolio/certificates/sertifikat-magang-sie.pdf" }
    ]
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
      "Program studi lanjutan terapan yang mendalami manajemen proyek konstruksi tingkat lanjut, tata kelola pengadaan barang/jasa pemerintah, analisis risiko rekayasa, dan implementasi BIM multidimensi."
    ]
  },
  {
    institution: "Politeknik Negeri Padang",
    degree: "Diploma III (D3)",
    field: "Teknik Sipil",
    period: "Sep 2022 – Jul 2025",
    location: "Padang, Indonesia",
    gpa: "3.72 / 4.00",
    details: [
      "Tugas Akhir: Merancang estimasi Rencana Anggaran Biaya (RAB) dan penjadwalan proyek (Time Schedule & Kurva S) pada studi kasus 'Rencana Pelaksanaan Pembangunan Gedung DPRD Kabupaten Pasaman'.",
      "Kompetisi Tender Nasional 'Fondasi Days 2025' di Universitas Sebelas Maret (UNS): Dokumen tender, pemodelan 3D SketchUp, metode pelaksanaan, dan RAB.",
      "Pekan Kreativitas Mahasiswa – Artikel Ilmiah (PKM-AI) Kemendikbudristek: Penulis utama karya ilmiah 'Analisa Biaya Scaffolding pada Proyek Waste Gas Recovery IBR Purwakarta'.",
      "Pra-Proyek Perancangan Gedung: Pemodelan struktur 3D dan analisis respons spektrum beban gempa dinamik gedung bertingkat menggunakan SAP2000."
    ],
    transcriptUrl: "/portfolio/certificates/transkrip-nilai.pdf"
  },
  {
    institution: "SMA Negeri 1 Padang",
    degree: "Pendidikan Menengah Atas",
    field: "Jurusan Matematika & Ilmu Pengetahuan Alam (MIPA)",
    period: "2019 – 2022",
    location: "Padang, Indonesia"
  }
];

export const certifications: Certification[] = [
  {
    name: "Sertifikat Kompetensi Kerja (SKK) Pelaksana Lapangan Pekerjaan Gedung Madya",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP) & Kementerian PU Balai Jasa Konstruksi Wilayah I Banda Aceh",
    levelOrScore: "Jenjang 5 KKNI (Pelaksana Lapangan Madya)",
    year: "Tersertifikasi Resmi BNSP",
    verificationFile: "/portfolio/certificates/skk-bnsp-jenjang5.pdf",
    description: "Kompetensi terakreditasi negara untuk supervisi teknis pekerjaan bangunan gedung bertingkat, pengendalian mutu lapangan, keselamatan konstruksi, dan koordinasi subkontraktor."
  },
  {
    name: "Certificate of Completion: Revit Masterclass for Beginners (BIM)",
    issuer: "Arsisten Academy",
    levelOrScore: "Building Information Modeling (BIM)",
    year: "Tersertifikasi BIM",
    verificationFile: "/portfolio/certificates/sertifikat-revit.pdf",
    description: "Pelatihan pemodelan informasi bangunan (BIM) Autodesk Revit mencakup pemodelan parametrik struktur portal, arsitektur, scheduling material, dan integrasi gambar kerja."
  },
  {
    name: "Specified Skilled Worker (SSW) Evaluation Exam for Construction Industry",
    issuer: "Japan Association for Construction Human Resources (JAC) — Jepang",
    levelOrScore: "Kualifikasi Standar Konstruksi Jepang",
    year: "Tersertifikasi Internasional",
    verificationFile: "/portfolio/certificates/ssw-japan.pdf",
    description: "Ujian evaluasi keahlian pekerja konstruksi berstandar industri Jepang (Tokutei Ginou) untuk kesiapan kerja di sektor konstruksi Jepang."
  },
  {
    name: "Japan Foundation Test for Basic Japanese (JFT-Basic) & JLPT N4",
    issuer: "The Japan Foundation",
    levelOrScore: "JFT-Basic Skor: 250 / 250 | JLPT N4 Skor: 165 / 180",
    year: "Kemampuan Bahasa Jepang Menengah",
    verificationFile: "/portfolio/certificates/jft-basic.pdf",
    description: "Sertifikasi resmi kemahiran bahasa Jepang lisan dan tulisan untuk komunikasi teknis dan operasional lingkungan kerja profesional."
  },
  {
    name: "Test of English for International Communication (TOEIC)",
    issuer: "Educational Testing Service (ETS) / Politeknik Negeri Padang",
    levelOrScore: "Skor: 640",
    year: "Bahasa Inggris Profesional",
    verificationFile: "/portfolio/certificates/toeic-640.pdf",
    description: "Kemampuan bahasa Inggris tingkat kerja operasional untuk komunikasi teknis, penyusunan proposal tender internasional, dan kolaborasi tim global."
  },
  {
    name: "Sertifikat Praktek Kerja Lapangan (PKL)",
    issuer: "PT Solusi Industri Energi",
    levelOrScore: "Waste Gas Recovery Project (PT Indo-Bharat Rayon)",
    year: "Sertifikasi Pengalaman Industri",
    verificationFile: "/portfolio/certificates/sertifikat-magang-sie.pdf",
    description: "Surat keterangan resmi pelaksanaan magang industri penuh waktu sebagai Quality Control & Quantity Surveyor."
  },
  {
    name: "Transkrip Nilai Akademik Resmi D3 Teknik Sipil (IPK 3,72)",
    issuer: "Politeknik Negeri Padang",
    levelOrScore: "IPK 3.72 / 4.00 (Dengan Pujian)",
    year: "Transkrip Nilai Resmi",
    verificationFile: "/portfolio/certificates/transkrip-nilai.pdf",
    description: "Dokumen resmi nilai akademik kelulusan Program Studi Teknik Sipil Politeknik Negeri Padang."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Hard Skills & Engineering Practice",
    description: "Kompetensi inti perhitungan kuantitas, estimasi biaya konstruksi, administrasi kontrak, dan kendali mutu.",
    items: [
      { name: "Quantity Take-Off (QTO)", level: "Advanced", categoryTag: "Estimasi" },
      { name: "Cost Estimation & BoQ/RAB", level: "Advanced", categoryTag: "Analisis Biaya" },
      { name: "Rencana Kerja & Syarat (RKS)", level: "Advanced", categoryTag: "Spesifikasi Teknis" },
      { name: "Time Schedule & Kurva S", level: "Advanced", categoryTag: "Penjadwalan" },
      { name: "Bar Bending Schedule (BBS)", level: "Advanced", categoryTag: "Detailing Rebar" },
      { name: "Detailed Engineering Design (DED)", level: "Advanced", categoryTag: "Gambar Kerja" },
      { name: "Contract Change Orders (CCO)", level: "Proficient", categoryTag: "Kontrak & Variasi" },
      { name: "Field Quality Control (Slump & Rebar)", level: "Proficient", categoryTag: "Kendali Mutu Lapangan" }
    ]
  },
  {
    category: "Software & BIM / CAD Suite",
    description: "Perangkat lunak standar industri untuk pemodelan informasi bangunan, analisis struktur elemen hingga, dan simulasi jadwal.",
    items: [
      { name: "Autodesk Revit (BIM)", level: "Certified", details: "Certified BIM Modeler Arsisten Academy (Struktur & Arsitektur)", categoryTag: "BIM" },
      { name: "AutoCAD", level: "Advanced", details: "DED 2D, detail penulangan, shop drawing, layout viewports to PDF", categoryTag: "CAD" },
      { name: "SketchUp", level: "Advanced", details: "Visualisasi 3D pentahapan konstruksi & site logistics tender", categoryTag: "3D Modeling" },
      { name: "SAP2000", level: "Proficient", details: "Analisis elemen hingga & respons spektrum beban gempa dinamik SNI", categoryTag: "Struktur Dinamis" },
      { name: "Microsoft Project", level: "Advanced", details: "Critical Path Method (CPM), alokasi sumber daya & bobot Kurva S", categoryTag: "Project Scheduling" },
      { name: "Microsoft Excel", level: "Expert", details: "Pemodelan perhitungan QTO, AHSP, formula BoQ/RAB, dan backup volume", categoryTag: "Kalkulasi Data" }
    ]
  },
  {
    category: "Bahasa & Komunikasi Global",
    description: "Kemampuan komunikasi tersertifikasi untuk koordinasi lokal maupun tim ekspatriat/internasional.",
    items: [
      { name: "Bahasa Indonesia", level: "Native", details: "Komunikasi profesional, pelaporan resmi dinas, dan koordinasi lapangan", categoryTag: "Native" },
      { name: "Bahasa Jepang (日本語)", level: "Menengah (Bilingual)", details: "JFT-Basic Skor 250 & JLPT N4 Skor 165 (Tersertifikasi JAC SSW Jepang)", categoryTag: "Tersertifikasi" },
      { name: "Bahasa Inggris", level: "Working Proficiency", details: "TOEIC Skor 640 — Dokumentasi teknis, proposal tender, dan kolaborasi tim global", categoryTag: "Tersertifikasi" }
    ]
  },
  {
    category: "Karakter Profesional & Kepemimpinan Lapangan",
    description: "Karakter kerja, ketelitian, dan disiplin lapangan yang terasah langsung di tapak proyek.",
    items: [
      { name: "Adaptabilitas & Pemecahan Masalah Lapangan", details: "Cepat merespons perbedaan kondisi aktual tanah atau perubahan desain dengan solusi teknis tepat", categoryTag: "Mindset" },
      { name: "Ketelitian & Presisi Tinggi", details: "Nol toleransi terhadap kekeliruan hitung kuantitas dan potongan rebar hingga milimeter", categoryTag: "Presisi" },
      { name: "Integritas & Akuntabilitas Teknis", details: "Kepatuhan penuh pada checklist mutu, standar SNI, dan prosedur K3/HSE di tapak proyek", categoryTag: "Integritas" },
      { name: "Kerja Sama Tim Multidisiplin", details: "Komunikator lugas yang menyatukan mandor/pekerja lapangan, konsultan, dan pihak pemilik proyek", categoryTag: "Kolaborasi" }
    ]
  }
];
