import os
import subprocess
import shutil
import pypdfium2 as pdfium
from pypdf import PdfReader

# Sourcing knowledge directly from Knowledge_Portofolio
base_dir = "D:/whateverapp/laragon/www/ParkojiXn/Knowledge_Portofolio"
export_dir = "D:/whateverapp/laragon/www/ParkojiXn/portfolio_pdf_export"
tex_path = os.path.join(export_dir, "portofolio_reza_sepdide.tex").replace("\\", "/")
pdf_path = os.path.join(export_dir, "Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf").replace("\\", "/")

def p(rel):
    full = os.path.join(base_dir, rel).replace("\\", "/")
    return full

tex = []

# --- PREAMBLE ---
tex.append(r"""\documentclass[10pt,a4paper,landscape]{article}
\usepackage[landscape, a4paper, left=10mm, right=10mm, top=8mm, bottom=10mm, footskip=0mm, headheight=0mm]{geometry}
\usepackage{graphicx}
\usepackage{xcolor}
\usepackage{tabularx}
\usepackage{helvet}
\usepackage{enumitem}
\usepackage{tikz}
\usepackage[most]{tcolorbox}
\renewcommand{\familydefault}{\sfdefault}

% Professional Civil Engineering Palette
\definecolor{pnavy}{HTML}{0F172A}      % Slate 900
\definecolor{pcharcoal}{HTML}{1E293B}  % Slate 800
\definecolor{psteel}{HTML}{334155}     % Slate 700
\definecolor{pmuted}{HTML}{64748B}     % Slate 500
\definecolor{pborder}{HTML}{CBD5E1}    % Slate 300
\definecolor{pbglight}{HTML}{F8FAFC}   % Slate 50
\definecolor{pcardbg}{HTML}{FFFFFF}    % Pure White
\definecolor{pred}{HTML}{DC2626}       % Cadmium Crimson Red
\definecolor{predlight}{HTML}{FEF2F2}  % Soft Red Accent Fill
\definecolor{pgold}{HTML}{D97706}      % Amber Accent

\pagestyle{empty}

% Header Macro (Fixed 13mm height)
\newcommand{\makeheader}[3]{%
  \begin{tcolorbox}[sharp corners, boxrule=0pt, colframe=pnavy, colback=pnavy, coltext=white, left=4mm, right=4mm, top=2mm, bottom=2mm, boxsep=0pt, height=13mm, valign=center]
    \begin{tabularx}{\linewidth}{@{}l >{\raggedleft\arraybackslash}X@{}}
      {\fontsize{7pt}{8pt}\selectfont\bfseries\color{pred}#1} & {\fontsize{7pt}{8pt}\selectfont\color{pmuted}DOSIR RESMI REKAYASA TEKNIK SIPIL \textbar\ 2026} \\
      {\fontsize{11pt}{13pt}\selectfont\bfseries\color{white}#2} & {\fontsize{8pt}{9pt}\selectfont\bfseries\color{pbglight}#3}
    \end{tabularx}
  \end{tcolorbox}
  \vspace{2mm}
}

% Running Footer Macro (Zero collisions, strictly positioned)
\newcommand{\makefooter}[2]{%
  \begin{tikzpicture}[remember picture, overlay]
    \draw[line width=0.6pt, color=pborder] ([xshift=10mm, yshift=8mm]current page.south west) -- ([xshift=-10mm, yshift=8mm]current page.south east);
    \node[anchor=south west, inner sep=0pt, xshift=10mm, yshift=4mm] at (current page.south west) {%
      \fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pmuted}%
      REZA SEPDIDE, A.Md.T. \quad\textbar\quad PELAKSANA LAPANGAN GEDUNG MADYA (BNSP JENJANG 5) \quad\textbar\quad D4 MANAJEMEN REKAYASA KONSTRUKSI (ONGOING)%
    };
    \node[anchor=south east, inner sep=0pt, xshift=-10mm, yshift=4mm] at (current page.south east) {%
      \fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}%
      #1 \quad\textbar\quad HALAMAN #2 DARI 28%
    };
  \end{tikzpicture}
}

\begin{document}
""")

# ==============================================================================
# HALAMAN 1: COVER PAGE
# ==============================================================================
tex.append(r"""% --- HALAMAN 1: COVER PAGE ---
\noindent
\begin{tcolorbox}[sharp corners, boxrule=1.5pt, colframe=pnavy, colback=white, left=6mm, right=6mm, top=5mm, bottom=5mm, height=188mm]
  % Top Header Row
  \begin{tabularx}{\linewidth}{@{}l >{\raggedleft\arraybackslash}X@{}}
    \colorbox{pred}{\fontsize{7.5pt}{8.5pt}\selectfont\bfseries\color{white}\ \ KUALIFIKASI RESMI TEKNIK SIPIL \& MANAJEMEN KONSTRUKSI\ \ } &
    {\fontsize{7.5pt}{8.5pt}\selectfont\bfseries\color{pmuted}DOSIR PORTOFOLIO REKAYASA TEKNIK SIPIL \textbar\ EDISI RESMI 2026 \textbar\ PADANG, INDONESIA}
  \end{tabularx}
  \vspace{2mm}
  \noindent\textcolor{pnavy}{\rule{\linewidth}{1.5pt}}
  \vspace{3mm}

  \noindent
  \begin{minipage}[t]{0.68\linewidth}
    \vspace{0pt}
    {\fontsize{22pt}{26pt}\selectfont\bfseries\color{pnavy}PORTOFOLIO REKAYASA TEKNIK SIPIL}\\[1.5mm]
    {\fontsize{12pt}{15pt}\selectfont\bfseries\color{pred}QUANTITY SURVEYING, ESTIMASI BIAYA \& MANAJEMEN KONSTRUKSI}\\[2.5mm]
    {\fontsize{8.5pt}{11.5pt}\selectfont\color{psteel}Kompilasi Portofolio Proyek Terverifikasi, Bukti Lisensi Negara BNSP Jenjang 5, Gambar DED AutoCAD, Dokumen RKS, Perhitungan BoQ/RAB, Kurva S, Bar Bending Schedule, dan Pengendalian Mutu Lapangan.}\\[3.5mm]

    \noindent\textcolor{pred}{\rule{50mm}{2pt}}\\[3.5mm]

    {\fontsize{13pt}{15pt}\selectfont\bfseries\color{pnavy}REZA SEPDIDE, A.Md.T.}\\[1mm]
    {\fontsize{8.5pt}{10.5pt}\selectfont\bfseries\color{pmuted}Civil Engineer \textbar\ Quantity Surveyor \textbar\ Construction Planner}\\[3.5mm]

    % 4 Stat Boxes
    \begin{tabularx}{\linewidth}{@{}XXXX@{}}
      \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pborder, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
        {\fontsize{14pt}{16pt}\selectfont\bfseries\color{pnavy}3.72}\\[0.5mm]
        {\fontsize{6.5pt}{7.5pt}\selectfont\bfseries\color{pred}IPK / 4.00}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\color{pmuted}D3 TEKNIK SIPIL PNP\\DENGAN PUJIAN}
      \end{tcolorbox} &
      \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pborder, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
        {\fontsize{14pt}{16pt}\selectfont\bfseries\color{pnavy}LEVEL 5}\\[0.5mm]
        {\fontsize{6.5pt}{7.5pt}\selectfont\bfseries\color{pred}SKK BNSP}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\color{pmuted}PELAKSANA LAPANGAN\\PEKERJAAN GEDUNG}
      \end{tcolorbox} &
      \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pborder, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
        {\fontsize{14pt}{16pt}\selectfont\bfseries\color{pnavy}PROYEK}\\[0.5mm]
        {\fontsize{6.5pt}{7.5pt}\selectfont\bfseries\color{pred}PENGALAMAN}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\color{pmuted}REVITALISASI, EPC\\QS, DED \& KURVA S}
      \end{tcolorbox} &
      \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pborder, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
        {\fontsize{14pt}{16pt}\selectfont\bfseries\color{pnavy}3 BAHASA}\\[0.5mm]
        {\fontsize{6.5pt}{7.5pt}\selectfont\bfseries\color{pred}TERSERTIFIKASI}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\color{pmuted}INDONESIA, JEPANG\\(SSW/JLPT), INGGRIS}
      \end{tcolorbox}
    \end{tabularx}
    \vspace{3mm}

    % Metadata Summary Box
    \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm]
      \begin{tabularx}{\linewidth}{@{}p{32mm} X@{}}
        {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pnavy}STATUS PENDIDIKAN:} & {\fontsize{7.5pt}{9.5pt}\selectfont\color{psteel}Diploma IV (D4) Manajemen Rekayasa Konstruksi PNP (Aktif / Ongoing)} \\[1mm]
        {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pnavy}LULUSAN AKADEMIK:} & {\fontsize{7.5pt}{9.5pt}\selectfont\color{psteel}D3 Teknik Sipil Politeknik Negeri Padang (Lulus Predikat Dengan Pujian, IPK 3.72)} \\[1mm]
        {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pnavy}LISENSI PROFESI:} & {\fontsize{7.5pt}{9.5pt}\selectfont\color{psteel}BNSP Jenjang 5 Balai Jasa Konstruksi Wilayah I Banda Aceh, Kementerian PUPR} \\[1mm]
        {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pnavy}EMAIL \& KONTAK:} & {\fontsize{7.5pt}{9.5pt}\selectfont\fontfamily{cmtt}\selectfont rezasepdide@gmail.com \textbar\ +62 896-4459-0915 \textbar\ linkedin.com/in/rezasepdide}
      \end{tabularx}
    \end{tcolorbox}
  \end{minipage}%
  \hfill
  \begin{minipage}[t]{0.30\linewidth}
    \vspace{0pt}
    \begin{tcolorbox}[sharp corners, boxrule=1pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2.5mm, bottom=2.5mm]
      \centering
      \includegraphics[width=\linewidth,height=96mm,keepaspectratio]{{{""" + p("FOTO DIRI/Professional-photo.jpeg") + r"""}}}\\[2mm]
      {\fontsize{9.5pt}{11pt}\selectfont\bfseries\color{pnavy}REZA SEPDIDE, A.Md.T.}\\[0.5mm]
      {\fontsize{7pt}{8.5pt}\selectfont\color{pred}\textbf{Pelaksana Lapangan Gedung Madya}}\\[0.5mm]
      {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}Reg. BNSP: F7472118 \textbar\ KKNI Jenjang 5}
    \end{tcolorbox}
    \vspace{2mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pborder, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      {\fontsize{6.5pt}{8pt}\selectfont\bfseries\color{pnavy}FOKUS KOMPETENSI REKAYASA:}\\[1mm]
      {\fontsize{6.2pt}{7.6pt}\selectfont\color{psteel}
      $\bullet$ Estimasi Biaya \& BoQ/RAB AHSP PUPR\\
      $\bullet$ Bar Bending Schedule (BBS) Pembesian\\
      $\bullet$ Pengendalian Mutu Cor \& Slump Test\\
      $\bullet$ Kurva S \& Penjadwalan Waktu Proyek\\
      $\bullet$ DED AutoCAD Multi-Viewport ke PDF\\
      $\bullet$ Pemodelan Revit BIM \& Analisis SAP2000
      }
    \end{tcolorbox}
  \end{minipage}
\end{tcolorbox}
""")

# ==============================================================================
# HALAMAN 2: PROFIL EKSEKUTIF & RIWAYAT PENDIDIKAN
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 2: PROFIL EKSEKUTIF & PENDIDIKAN ---
\makeheader{// PROFIL PROFESIONAL // PENDIDIKAN \& NILAI REKAYASA}{PROFIL EKSEKUTIF, RIWAYAT PENDIDIKAN \& ETIKA KERJA}{POLITEKNIK NEGERI PADANG \textbar\ KEMENTERIAN PUPR / BNSP}

\noindent
\begin{minipage}[t]{0.58\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3.5mm, right=3.5mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ RINGKASAN EKSEKUTIF PROFESIONAL\ \ }\\[2.5mm]
    {\fontsize{7.8pt}{10.8pt}\selectfont\color{psteel}Lulusan Diploma III Teknik Sipil Politeknik Negeri Padang dengan predikat kelulusan Dengan Pujian (\textit{With Honors}, IPK 3.72/4.00) dan saat ini melanjutkan pendidikan pada jenjang Diploma IV (D4) Manajemen Rekayasa Konstruksi. Pemegang lisensi resmi negara BNSP KKNI Jenjang 5 Pelaksana Lapangan Pekerjaan Gedung Madya.}\\[2.5mm]
    {\fontsize{7.8pt}{10.8pt}\selectfont\color{psteel}Berpengalaman praktis dalam perhitungan teknis Quantity Surveying (BoQ/RAB, AHSP), penyusunan Bar Bending Schedule (BBS) penulangan beton bertulang, penjadwalan Kurva S / MS Project, pemodelan AutoCAD DED Multi-Viewport layout ke PDF, pemodelan dasar Autodesk Revit BIM parametrik, hingga analisis struktur pembebanan gempa SAP2000 (SNI). Memiliki kompetensi komunikasi dwibahasa bersertifikat Jepang (SSW JAC, JFT-Basic skor 250, JLPT N4 skor 165) dan Inggris (Prediction Test TOEIC Politeknik Negeri Padang skor 640).}\\[3mm]

    \noindent\textcolor{pborder}{\rule{\linewidth}{0.6pt}}\\[2.5mm]

    \colorbox{pnavy}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ RIWAYAT PENDIDIKAN FORMAL\ \ }\\[2.5mm]

    {\fontsize{8.5pt}{10pt}\selectfont\bfseries\color{pnavy}1. Diploma IV (D4) Manajemen Rekayasa Konstruksi}\\[0.5mm]
    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pred}Politeknik Negeri Padang}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\color{pmuted}Periode: Agustus 2026 --- Sekarang \quad\textbar\quad Status: \textbf{Aktif / Sedang Menempuh Pendidikan}}\\[1mm]
    {\fontsize{7pt}{9.2pt}\selectfont\color{psteel}Fokus pendalaman: Manajemen proyek konstruksi terpadu, pengendalian biaya dan mutu proyek bertingkat, hukum kontrak konstruksi, serta integrasi teknologi digital rekayasa.}\\[2.5mm]

    {\fontsize{8.5pt}{10pt}\selectfont\bfseries\color{pnavy}2. Diploma III (D3) Teknik Sipil}\\[0.5mm]
    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pred}Politeknik Negeri Padang}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\color{pmuted}Periode: September 2022 --- Juli 2025 \quad\textbar\quad Status: \textbf{Lulus dengan Predikat Dengan Pujian}}\\[1mm]
    {\fontsize{7pt}{9.2pt}\selectfont\color{psteel}\textbf{Capaian Akademik:} IPK 3.72 dari 4.00 (Predikat Kelulusan: Dengan Pujian / With Honors).\\
    \textbf{Tugas Akhir:} Merancang estimasi Rencana Anggaran Biaya (RAB) dan penjadwalan proyek (Time Schedule) pada studi kasus Pembangunan Gedung DPRD Kabupaten Pasaman.}\\[2.5mm]

    {\fontsize{8.5pt}{10pt}\selectfont\bfseries\color{pnavy}3. Sekolah Menengah Atas (SMA)}\\[0.5mm]
    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pred}SMA Negeri 1 Padang}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\color{pmuted}Periode: 2019 --- 2022 \quad\textbar\quad Jurusan: Matematika dan Ilmu Pengetahuan Alam (MIPA)}
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.40\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=3.5mm, right=3.5mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pnavy}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ 4 PILAR PRINSIP REKAYASA \& ETIKA KERJA\ \ }\\[2.5mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pred}01. INTEGRITAS STRUKTURAL \& KESELAMATAN}\\[0.5mm]
      {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}Mengutamakan kepatuhan terhadap standar teknis dan keselamatan kerja konstruksi. Setiap detail penulangan beton, mutu slump cor, dan spesifikasi material harus memenuhi standar pengujian tanpa kompromi.}
    \end{tcolorbox}
    \vspace{1.5mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pred}02. AKURASI KUANTITAS \& EFISIENSI BIAYA}\\[0.5mm]
      {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}Penyusunan Bar Bending Schedule (BBS) teroptimasi guna meminimalkan sisa potongan besi (\textit{scrap waste}). Menghasilkan BoQ/RAB yang transparan, dapat dipertanggungjawabkan, dan bebas dari selisih liar.}
    \end{tcolorbox}
    \vspace{1.5mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pred}03. TERTIB ADMINISTRASI \& DATA TERVERIFIKASI}\\[0.5mm]
      {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}Setiap penagihan progres (\textit{progress billing}) wajib didukung perhitungan backup volume yang sah, justifikasi teknis addendum kontrak CCO yang jelas, dan pengarsipan berita acara yang rapi.}
    \end{tcolorbox}
    \vspace{1.5mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pred}04. DEDIKASI BELAJAR \& STANDAR GLOBAL}\\[0.5mm]
      {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}Komitmen mengembangkan keahlian rekayasa melalui kelanjutan studi D4, penguasaan perangkat lunak terkini, serta kualifikasi standar internasional (SSW Jepang, JFT-Basic, dan TOEIC).}
    \end{tcolorbox}
  \end{tcolorbox}
\end{minipage}

\makefooter{PROFIL PROFESIONAL \& PENDIDIKAN}{02}
""")

# ==============================================================================
# HALAMAN 3: MATRIKS KEAHLIAN & SOFTWARE
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 3: MATRIKS KEAHLIAN TEKNIS & SOFTWARE ---
\makeheader{// KOMPETENSI TEKNIK // ALAT BANTU REKAYASA}{MATRIKS KEAHLIAN TEKNIS, PERANGKAT LUNAK \& KEMAMPUAN BAHASA}{STANDAR KKNI JENJANG 5 \textbar\ BIM, CAD, QS, QC \& BILINGUAL}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ KEAHLIAN REKAYASA TEKNIS\ \ }\\[2mm]

    {\fontsize{7.2pt}{9.2pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3.5mm, itemsep=1.2mm, topsep=0mm]
      \item \textbf{Quantity Take-Off (QTO) \& RAB:} Perhitungan kuantitas volume pekerjaan berdasarkan DED dan penyusunan RAB sesuai AHSP PUPR.
      \item \textbf{Penyusunan RKS Teknis:} Perumusan Rencana Kerja dan Syarat-Syarat teknis mutu material, metode pelaksanaan, dan toleransi uji lapangan.
      \item \textbf{Penjadwalan Proyek (Kurva S):} Penyusunan jadwal pelaksanaan (Time Schedule), distribusi bobot pekerjaan, dan Kurva S monitoring deviasi.
      \item \textbf{Bar Bending Schedule (BBS):} Perhitungan daftar pemotongan dan pembengkokan tulangan beton struktural guna meminimalkan sisa besi (\textit{waste}).
      \item \textbf{Gambar Kerja DED AutoCAD:} Penggambaran denah, tampak, potongan, dan detail struktur menggunakan layout viewport untuk penerbitan dokumen PDF yang rapi.
      \item \textbf{Pengendalian Mutu (QC):} Pengujian slump test beton segar di lapangan, checklist pembesian sebelum cor, dan penyusunan punch list.
      \item \textbf{Mutual Check \& CCO:} Perhitungan ulang volume terpasang aktual (MC-100) dan administrasi addendum Contract Change Order (CCO).
    \end{itemize}
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.35\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pnavy}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PENGUASAAN SOFTWARE REKAYASA\ \ }\\[2mm]

    {\fontsize{7.2pt}{9.2pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3.5mm, itemsep=1.2mm, topsep=0mm]
      \item \textbf{AutoCAD (2D DED):} Tingkat Mahir. Menguasai penggambaran 2D, konfigurasi paper layout viewports, etiket skala standar gambar teknik ke PDF.
      \item \textbf{Microsoft Excel:} Tingkat Mahir. Pengolahan formula matematis backup volume, matriks BoQ, pembobotan Kurva S, dan rekapitulasi biaya proyek.
      \item \textbf{Microsoft Project:} Tingkat Menengah. Penyusunan Work Breakdown Structure (WBS), penjadwalan durasi, hubungan ketergantungan logika, dan Kurva S.
      \item \textbf{SAP2000:} Tingkat Menengah. Pemodelan struktur portal 3D gedung bertingkat, input beban mati, hidup, dan beban gempa SNI respons spektrum.
      \item \textbf{SketchUp:} Tingkat Menengah. Pemodelan 3D visual metode kerja konstruksi untuk presentasi dokumen penawaran tender.
      \item \textbf{Autodesk Revit (BIM):} Tingkat Dasar/Menengah. Telah menyelesaikan pelatihan Revit Masterclass for Beginners di Arsisten Academy, mempraktikkan pemodelan 3D struktur dan arsitektur gedung.
    \end{itemize}
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ KEMAMPUAN KOMUNIKASI BAHASA\ \ }\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}1. Bahasa Indonesia (Bahasa Utama)}\\[0.5mm]
      {\fontsize{6.8pt}{8.5pt}\selectfont\color{psteel}Penutur asli (Native). Kemampuan komunikasi lisan dan penulisan dokumen teknis resmi rekayasa secara tertib dan profesional.}
    \end{tcolorbox}
    \vspace{1.5mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}2. Bahasa Jepang (Tingkat Menengah)}\\[0.5mm]
      {\fontsize{6.8pt}{8.5pt}\selectfont\color{psteel}
      $\bullet$ \textbf{SSW Konstruksi (JAC):} Lulus ujian kompetensi konstruksi Jepang.\\
      $\bullet$ \textbf{JFT-Basic:} Skor 250 (The Japan Foundation).\\
      $\bullet$ \textbf{JLPT N4:} Skor 165 (The Japan Foundation).
      }
    \end{tcolorbox}
    \vspace{1.5mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}3. Bahasa Inggris (Tingkat Menengah)}\\[0.5mm]
      {\fontsize{6.8pt}{8.5pt}\selectfont\color{psteel}
      $\bullet$ \textbf{TOEIC Prediction Test:} Skor total 640 dari UPT Bahasa Politeknik Negeri Padang (Listening: 400, Reading: 240).\\
      $\bullet$ Mampu memahami literatur teknik, manual software rekayasa, dan korespondensi profesional.
      }
    \end{tcolorbox}
  \end{tcolorbox}
\end{minipage}

\makefooter{MATRIKS KEAHLIAN \& PERANGKAT LUNAK}{03}
""")

# ==============================================================================
# HALAMAN 4: SKK BNSP JENJANG 5 (HALAMAN DEPAN)
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 4: SKK BNSP JENJANG 5 (HALAMAN DEPAN) ---
\makeheader{// LISENSI NEGARA RESMI // KKNI JENJANG 5}{SERTIFIKAT KOMPETENSI KERJA (SKK) PELAKSANA LAPANGAN PEKERJAAN GEDUNG MADYA}{BADAN NASIONAL SERTIFIKASI PROFESI (BNSP) \textbar\ KEMENTERIAN PUPR}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ LISENSI PROFESI BNSP JENJANG 5\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}Pelaksana Lapangan Pekerjaan Gedung Madya}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Kualifikasi: Teknisi / Analis (Jenjang 5)}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Badan Penerbit:} & {\fontsize{7pt}{8.5pt}\selectfont Badan Nasional Sertifikasi Profesi (BNSP)} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Penyelenggara:} & {\fontsize{7pt}{8.5pt}\selectfont Balai Jasa Konstruksi Wilayah I Banda Aceh (PUPR)} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Lembaga LSP:} & {\fontsize{7pt}{8.5pt}\selectfont LSP Tenaga Konstruksi Nasional} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries No. Registrasi:} & {\fontsize{7pt}{8.5pt}\selectfont\fontfamily{cmtt}\selectfont F7472118} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Masa Berlaku:} & {\fontsize{7pt}{8.5pt}\selectfont 5 Tahun (Hingga Juli 2030)}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{2mm}

    {\fontsize{8pt}{10pt}\selectfont\bfseries\color{pnavy}DESKRIPSI WEWENANG TEKNIS}\\[1.5mm]
    {\fontsize{6.8pt}{8.8pt}\selectfont\color{psteel}Lisensi negara yang membuktikan kompetensi teknis dalam memimpin dan mengawasi pelaksanaan pekerjaan konstruksi bangunan gedung bertingkat di lapangan, mencakup:}\\[2mm]

    {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3.5mm, itemsep=0.8mm, topsep=0mm]
      \item Pengawasan metode pelaksanaan konstruksi sesuai gambar kerja DED dan spesifikasi RKS.
      \item Pengendalian mutu pekerjaan pembesian, bekisting, pengecoran beton, dan pekerjaan arsitektural.
      \item Penerapan Sistem Manajemen Keselamatan Konstruksi (SMKK) dan pengendalian bahaya di lokasi proyek.
      \item Koordinasi pekerjaan mandor, subkontraktor, dan verifikasi opname volume lapangan.
    \end{itemize}
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.66\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \centering
    \includegraphics[height=144mm,page=1,keepaspectratio]{{{""" + p("Lisensi Sertifikasi/Sertifikat SKK REZA SEPDIDE hide.pdf") + r"""}}}\\[1mm]
    {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}\textbf{Dokumen Asli:} Sertifikat Kompetensi Kerja (SKK) BNSP Jenjang 5 --- Lembar Depan}
  \end{tcolorbox}
\end{minipage}

\makefooter{LISENSI NEGARA BNSP JENJANG 5}{04}
""")

# ==============================================================================
# HALAMAN 5: SKK BNSP JENJANG 5 (HALAMAN BELAKANG / UNIT KOMPETENSI)
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 5: SKK BNSP JENJANG 5 (HALAMAN BELAKANG) ---
\makeheader{// LISENSI NEGARA RESMI // DAFTAR UNIT KOMPETENSI}{SKK PELAKSANA LAPANGAN PEKERJAAN GEDUNG MADYA (LEMBAR II)}{LEMBAGA PENGEMBANGAN JASA KONSTRUKSI (LPJK) \textbar\ BNSP}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ UNIT KOMPETENSI RESMI SKKNI\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}Klasifikasi Bidang Sipil}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Subklasifikasi: Bangunan Gedung}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Klasifikasi:} & {\fontsize{7pt}{8.5pt}\selectfont Sipil} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Subklasifikasi:} & {\fontsize{7pt}{8.5pt}\selectfont Gedung} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Kualifikasi:} & {\fontsize{7pt}{8.5pt}\selectfont Teknisi / Analis} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Jenjang KKNI:} & {\fontsize{7pt}{8.5pt}\selectfont Jenjang 5 (Lima)} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Penetapan:} & {\fontsize{7pt}{8.5pt}\selectfont Jakarta, 04 Juli 2025}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{2mm}

    {\fontsize{8pt}{10pt}\selectfont\bfseries\color{pnavy}RUANG LINGKUP KOMPETENSI}\\[1.5mm]
    {\fontsize{6.8pt}{8.8pt}\selectfont\color{psteel}Standar kompetensi kerja yang telah terverifikasi dan lulus uji mencakup pemahaman menyeluruh terhadap:}\\[2mm]

    {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3.5mm, itemsep=0.8mm, topsep=0mm]
      \item Komunikasi dan koordinasi teknis di lingkungan proyek konstruksi.
      \item Pengawasan pekerjaan struktur bawah (pondasi) dan struktur atas (kolom, balok, pelat).
      \item Pengawasan pekerjaan arsitektur dan finishing bangunan gedung.
      \item Pengendalian jadwal waktu pelaksanaan dan pengendalian biaya lapangan.
      \item Penegakan prosedur K3 dan pengelolaan lingkungan kerja konstruksi.
    \end{itemize}
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.66\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \centering
    \includegraphics[height=144mm,page=2,keepaspectratio]{{{""" + p("Lisensi Sertifikasi/Sertifikat SKK REZA SEPDIDE hide.pdf") + r"""}}}\\[1mm]
    {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}\textbf{Dokumen Asli:} Sertifikat Kompetensi Kerja (SKK) BNSP Jenjang 5 --- Lembar Belakang (Unit Kompetensi)}
  \end{tcolorbox}
\end{minipage}

\makefooter{LISENSI NEGARA BNSP JENJANG 5}{05}
""")

# ==============================================================================
# HALAMAN 6: SERTIFIKAT REVIT ARSISTEN ACADEMY
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 6: PELATIHAN REVIT ARSISTEN ACADEMY ---
\makeheader{// PELATIHAN PEMODELAN DIGITAL // BIM}{CERTIFICATE OF COMPLETION: REVIT MASTERCLASS FOR BEGINNERS}{ARSISTEN ACADEMY \textbar\ BUILDING INFORMATION MODELING}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ SERTIFIKAT PELATIHAN BIM\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}Revit Masterclass for Beginners}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Penyelenggara: Arsisten Academy}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Lembaga:} & {\fontsize{7pt}{8.5pt}\selectfont Arsisten Academy} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Program:} & {\fontsize{7pt}{8.5pt}\selectfont Revit Masterclass for Beginners} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Bidang:} & {\fontsize{7pt}{8.5pt}\selectfont Building Information Modeling} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Output:} & {\fontsize{7pt}{8.5pt}\selectfont Pemodelan Struktur \& Arsitektur}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{2mm}

    {\fontsize{8pt}{10pt}\selectfont\bfseries\color{pnavy}DESKRIPSI NYATA \& HASIL BELAJAR}\\[1.5mm]
    {\fontsize{6.8pt}{8.8pt}\selectfont\color{psteel}Telah menyelesaikan seluruh rangkaian pembelajaran pemodelan Building Information Modeling (BIM) menggunakan Autodesk Revit tingkat pemula di Arsisten Academy:}\\[2mm]

    {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3.5mm, itemsep=0.8mm, topsep=0mm]
      \item Mempelajari prinsip dasar dan alur kerja pemodelan parametrik 3D Building Information Modeling.
      \item Memahami teknik permodelan elemen struktur (kolom, balok, pelat beton) dan komponen arsitektur.
      \item Mempraktikkan penggambaran ulang (\textit{re-modeling}) elemen bangunan dari dokumen rencana ke model digital 3D.
      \item Menjadi fondasi kompetensi digital modeling untuk terus dikembangkan menuju tingkat mahir.
    \end{itemize}
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.66\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \centering
    \includegraphics[width=0.98\linewidth,height=144mm,keepaspectratio]{{{""" + p("Lisensi Sertifikasi/Sertifikat revit.pdf") + r"""}}}\\[1mm]
    {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}\textbf{Dokumen Asli:} Certificate of Completion --- Revit Masterclass for Beginners (Arsisten Academy)}
  \end{tcolorbox}
\end{minipage}

\makefooter{SERTIFIKASI PEMODELAN BIM}{06}
""")

# ==============================================================================
# HALAMAN 7: SSW JAPAN (TOKUTEI GINOU)
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 7: SSW JAPAN CIVIL ENGINEERING ---
\makeheader{// KUALIFIKASI STANDAR INTERNASIONAL // JEPANG}{SPECIFIED SKILLED WORKER (SSW) EVALUATION EXAM}{JAPAN ASSOCIATION FOR CONSTRUCTION HUMAN RESOURCES (JAC)}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ STANDAR KONSTRUKSI JEPANG\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}SSW Construction Industry}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Civil Engineering (i) (Japanese)}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Lembaga Uji:} & {\fontsize{7pt}{8.5pt}\selectfont JAC (Japan)} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Bidang Ujian:} & {\fontsize{7pt}{8.5pt}\selectfont Civil Engineering (i)} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Hasil Evaluasi:} & {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred} Pass / Lulus} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries No. Registrasi:} & {\fontsize{7pt}{8.5pt}\selectfont\fontfamily{cmtt}\selectfont 40563425} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Tanggal Ujian:} & {\fontsize{7pt}{8.5pt}\selectfont 11 Juli 2026}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{2mm}

    {\fontsize{8pt}{10pt}\selectfont\bfseries\color{pnavy}SIGNIFIKANSI KUALIFIKASI}\\[1.5mm]
    {\fontsize{6.8pt}{8.8pt}\selectfont\color{psteel}Ujian resmi Tenaga Kerja Terampil Tertentu (\textit{Tokutei Ginou}) yang diselenggarakan oleh JAC di bawah pengawasan Kementerian Pertanahan, Infrastruktur, Transportasi, dan Pariwisata Jepang (MLIT):}\\[2mm]

    {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3.5mm, itemsep=0.8mm, topsep=0mm]
      \item Memvalidasi kesiapan teknis bekerja di industri konstruksi sipil Jepang.
      \item Menguasai terminologi konstruksi dan keselamatan kerja standar Jepang.
      \item Bukti kemampuan beradaptasi tinggi dalam proyek konstruksi multinasional.
    \end{itemize}
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.66\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \centering
    \includegraphics[height=144mm,page=1,keepaspectratio]{{{""" + p("Lisensi Sertifikasi/SSW CIVIL ENGINEER.pdf") + r"""}}}\\[1mm]
    {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}\textbf{Dokumen Asli:} Hasil Ujian Evaluasi Tenaga Terampil Tertentu Bidang Konstruksi (JAC Japan)}
  \end{tcolorbox}
\end{minipage}

\makefooter{KUALIFIKASI STANDAR JEPANG (SSW)}{07}
""")

# ==============================================================================
# HALAMAN 8: JFT-BASIC & JLPT N4 (DUA DOKUMEN BERDAMPINGAN)
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 8: JFT-BASIC & JLPT N4 ---
\makeheader{// KOMPETENSI BAHASA INTERNASIONAL // JEPANG}{SERTIFIKAT KEMAMPUAN BAHASA JEPANG: JFT-BASIC \& JLPT N4}{THE JAPAN FOUNDATION \textbar\ BILINGUAL ENGINEERING COMMUNICATION}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ KEMAHIRAN BAHASA JEPANG\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}The Japan Foundation}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}JFT-Basic Skor 250 \& JLPT N4 Skor 165}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm]
      {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}1. JFT-BASIC (A2 STANDARD)}\\[0.5mm]
      {\fontsize{6.8pt}{8.2pt}\selectfont
      Lembaga: The Japan Foundation\\
      Total Skor: \textbf{\color{pred}250 Poin} (Standar Lulus: 200)\\
      Hasil: Kompeten dalam percakapan dan instruksi kerja sehari-hari.
      }
    \end{tcolorbox}
    \vspace{2mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm]
      {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}2. JLPT LEVEL N4}\\[0.5mm]
      {\fontsize{6.8pt}{8.2pt}\selectfont
      Lembaga: The Japan Foundation \& JEES\\
      Total Skor: \textbf{\color{pred}165 Poin} (Passing Score: 90)\\
      Hasil: \textbf{Lulus / Passed}
      }
    \end{tcolorbox}
    \vspace{2mm}

    {\fontsize{8pt}{10pt}\selectfont\bfseries\color{pnavy}NILAI TAMBAH PROFESIONAL}\\[1mm]
    {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}Kombinasi kelulusan SSW Konstruksi dan penguasaan bahasa Jepang resmi memposisikan Reza siap bekerja dalam lingkungan tim konstruksi multinasional atau perusahaan kontraktor Jepang (\textit{joint venture}).}
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.66\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=148mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=138mm,keepaspectratio]{{{""" + p("Lisensi Sertifikasi/JFT.pdf") + r"""}}}\\[1mm]
        {\fontsize{6pt}{7pt}\selectfont\color{pmuted}\textbf{Dokumen 1:} Hasil Resmi JFT-Basic (Skor 250)}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=148mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=138mm,keepaspectratio]{{{""" + p("Lisensi Sertifikasi/Sertifikat JLPT N4.pdf") + r"""}}}\\[1mm]
        {\fontsize{6pt}{7pt}\selectfont\color{pmuted}\textbf{Dokumen 2:} Sertifikat JLPT N4 (Skor 165)}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{SERTIFIKASI BAHASA JEPANG}{08}
""")

# ==============================================================================
# HALAMAN 9: SERTIFIKAT PKL MAGANG (PT SOLUSI INDUSTRI ENERGI)
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 9: SERTIFIKAT PKL MAGANG PT SOLUSI INDUSTRI ENERGI ---
\makeheader{// PENGALAMAN KERJA INDUSTRI // MAGANG}{SERTIFIKAT PRAKTIK KERJA LAPANGAN (PKL)}{PT SOLUSI INDUSTRI ENERGI \textbar\ PROYEK WASTE GAS RECOVERY PURWAKARTA}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ MAGANG INDUSTRI TEKNIK SIPIL\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}PT Solusi Industri Energi}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Waste Gas Recovery Project (PT Indo-Bharat Rayon)}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Perusahaan:} & {\fontsize{7pt}{8.5pt}\selectfont PT Solusi Industri Energi} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Proyek:} & {\fontsize{7pt}{8.5pt}\selectfont Waste Gas Recovery Project} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Klien Utama:} & {\fontsize{7pt}{8.5pt}\selectfont PT Indo-Bharat Rayon} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Lokasi:} & {\fontsize{7pt}{8.5pt}\selectfont Purwakarta, Jawa Barat} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Periode:} & {\fontsize{7pt}{8.5pt}\selectfont Agustus 2024 --- Desember 2024}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{2mm}

    {\fontsize{8pt}{10pt}\selectfont\bfseries\color{pnavy}LINGKUP TUGAS \& TANGGUNG JAWAB}\\[1.5mm]
    {\fontsize{6.8pt}{8.8pt}\selectfont\color{psteel}Terlibat penuh dalam operasional lapangan proyek industri manufaktur kimia:}\\[2mm]

    {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3.5mm, itemsep=0.8mm, topsep=0mm]
      \item Menyusun Bar Bending Schedule (BBS) penulangan beton pondasi dan struktur.
      \item Menghitung volume pekerjaan terpasang (Backup Volume) untuk dokumen penagihan progres (\textit{Progress Billing}).
      \item Menghitung volume dan estimasi biaya pekerjaan tambah akibat rework di lapangan.
      \item Melaksanakan inspeksi Quality Control (slump test beton segar, checklist pembesian).
      \item Pemetaan area kerja (\textit{mapping}) dan penyusunan daftar catatan perbaikan (\textit{Punch List}).
      \item Menyusun laporan progres harian, mingguan, dan bulanan.
    \end{itemize}
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.66\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \centering
    \includegraphics[height=144mm,page=1,keepaspectratio]{{{""" + p("Lisensi Sertifikasi/SERTIFIKAT PKL REZA SEPDIDE.pdf") + r"""}}}\\[1mm]
    {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}\textbf{Dokumen Asli:} Sertifikat Praktik Kerja Lapangan (PKL) --- PT Solusi Industri Energi}
  \end{tcolorbox}
\end{minipage}

\makefooter{SERTIFIKAT MAGANG INDUSTRI (PT SIE)}{09}
""")

# ==============================================================================
# HALAMAN 10: TOEIC SCORE 640
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 10: PREDICTION TEST TOEIC POLITEKNIK NEGERI PADANG ---
\makeheader{// KOMPETENSI BAHASA INTERNASIONAL // INGGRIS}{PREDICTION TEST SCORE FOR TOEIC TEST (SKOR: 640)}{UPT BAHASA POLITEKNIK NEGERI PADANG \textbar\ PROFESIONAL ENGLISH}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ KEMAHIRAN BAHASA INGGRIS TEKNIK\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}TOEIC Prediction Test: 640}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}UPT Bahasa Politeknik Negeri Padang}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Lembaga Uji:} & {\fontsize{7pt}{8.5pt}\selectfont UPT Bahasa PNP} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Listening Score:} & {\fontsize{7pt}{8.5pt}\selectfont\bfseries 400 Poin} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Reading Score:} & {\fontsize{7pt}{8.5pt}\selectfont\bfseries 240 Poin} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Total Score:} & {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred} 640 Poin} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Status:} & {\fontsize{7pt}{8.5pt}\selectfont Notification Letter Resmi}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{2mm}

    {\fontsize{8pt}{10pt}\selectfont\bfseries\color{pnavy}PEMANFAATAN PADA DUNIA REKAYASA}\\[1.5mm]
    {\fontsize{6.8pt}{8.8pt}\selectfont\color{psteel}Kemampuan bahasa Inggris teknik tingkat kerja ini diaplikasikan secara aktif untuk:}\\[2mm]

    {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3.5mm, itemsep=0.8mm, topsep=0mm]
      \item Mempelajari manual teknis, standar internasional konstruksi, dan literatur rekayasa.
      \item Mengoperasikan perangkat lunak rekayasa terkini berbasis bahasa Inggris (Autodesk Revit, SAP2000, AutoCAD).
      \item Melakukan korespondensi profesional dan penyusunan laporan teknis.
      \item Menunjang komunikasi kerja dengan tim, konsultan, atau manajemen multinasional.
    \end{itemize}
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.66\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \centering
    \includegraphics[width=0.98\linewidth,height=144mm,keepaspectratio]{{{""" + p("Lisensi Sertifikasi/TOEIC PNP.pdf") + r"""}}}\\[1mm]
    {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}\textbf{Dokumen Asli:} Notification Letter Prediction Test Score for TOEIC Test (UPT Bahasa Politeknik Negeri Padang)}
  \end{tcolorbox}
\end{minipage}

\makefooter{HASIL PREDICTION TEST TOEIC}{10}
""")

# ==============================================================================
# HALAMAN 11: TRANSKRIP AKADEMIK D3 (IPK 3.72)
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 11: TRANSKRIP AKADEMIK D3 TEKNIK SIPIL ---
\makeheader{// KELULUSAN DENGAN PREDIKAT DENGAN PUJIAN // IPK 3.72}{TRANSKRIP AKADEMIK D3 TEKNIK SIPIL POLITEKNIK NEGERI PADANG}{IPK: 3.72 / 4.00 \textbar\ PREDIKAT: DENGAN PUJIAN (WITH HONORS)}

\noindent
\begin{minipage}[t]{0.28\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ CAPAIAN PRESTASI AKADEMIK\ \ }\\[2mm]
    {\fontsize{10pt}{12pt}\selectfont\bfseries\color{pnavy}D3 Teknik Sipil}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}IPK 3.72 / 4.00 (Dengan Pujian)}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Perguruan Tinggi:} & {\fontsize{7pt}{8.5pt}\selectfont Politeknik Negeri Padang} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Jurusan:} & {\fontsize{7pt}{8.5pt}\selectfont Teknik Sipil} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Program Studi:} & {\fontsize{7pt}{8.5pt}\selectfont D3 Teknik Sipil} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Total SKS Lulus:} & {\fontsize{7pt}{8.5pt}\selectfont 114 SKS Selesai} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Predikat Kelulusan:} & {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred} Dengan Pujian}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{2mm}

    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pnavy}KETUNTASAN MATAKULIAH INTI}\\[1mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Mekanika Rekayasa I--IV\\
    $\bullet$ Struktur Beton Bertulang I--II\\
    $\bullet$ Struktur Baja \& Kayu\\
    $\bullet$ Rencana Anggaran Biaya (RAB)\\
    $\bullet$ Manajemen Konstruksi \& Penjadwalan\\
    $\bullet$ Gambar Teknik \& CAD Pemodelan\\
    $\bullet$ Rekayasa Pondasi \& Geoteknik
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.70\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=148mm]
        \centering
        \includegraphics[height=138mm,page=1,keepaspectratio]{{{""" + p("Lisensi Sertifikasi/TRANSKIP NILAI REZA SEPDIDE.pdf") + r"""}}}\\[1mm]
        {\fontsize{6pt}{7pt}\selectfont\color{pmuted}\textbf{Transkrip Lembar 1:} Nilai Semester 1--3}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=148mm]
        \centering
        \includegraphics[height=138mm,page=2,keepaspectratio]{{{""" + p("Lisensi Sertifikasi/TRANSKIP NILAI REZA SEPDIDE.pdf") + r"""}}}\\[1mm]
        {\fontsize{6pt}{7pt}\selectfont\color{pmuted}\textbf{Transkrip Lembar 2:} Nilai Semester 4--6 \& Kelulusan}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{BUKTI TRANSKRIP AKADEMIK}{11}
""")

# ==============================================================================
# HALAMAN 12: SDN 19 KUAMANG (1/3) - DED MULTI VIEWPORT
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 12: SDN 19 KUAMANG (1/3) ---
\makeheader{// KELOMPOK 1: PERENCANAAN \& QUANTITY SURVEYING // PROYEK 01}{PROYEK REVITALISASI FASILITAS GEDUNG SDN 19 KUAMANG}{PERENCANA TEKNIS \textbar\ PASAMAN, SUMATERA BARAT \textbar\ SEPTEMBER 2026}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PROYEK PERENCANAAN TEKNIS 01\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}Revitalisasi SDN 19 Kuamang}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Perencana Teknis (Konsultan Perencana)}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Peran:} & {\fontsize{7pt}{8.5pt}\selectfont Perencana Teknis} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Lokasi Proyek:} & {\fontsize{7pt}{8.5pt}\selectfont Pasaman, Sumatera Barat} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Waktu:} & {\fontsize{7pt}{8.5pt}\selectfont September 2026} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Lingkup Output:} & {\fontsize{7pt}{8.5pt}\selectfont DED, RAB, RKS, Kurva S}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{2mm}

    {\fontsize{8pt}{10pt}\selectfont\bfseries\color{pnavy}PENERAPAN FITUR LAYOUT AUTOCAD}\\[1.5mm]
    {\fontsize{6.8pt}{8.8pt}\selectfont\color{psteel}Pemanfaatan fitur \textit{paper space layout viewports} pada AutoCAD untuk penerbitan dokumen gambar kerja teknis format PDF:}\\[2mm]

    {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3.5mm, itemsep=0.8mm, topsep=0mm]
      \item Pengaturan skala gambar presisi (1:100, 1:20, detail pembesian) dalam satu lembar cetak etiket standar.
      \item Standardisasi ketebalan garis (\textit{plot style / CTB}), dimensi, dan notasi teks teknik.
      \item Penerbitan berkas PDF beresolusi tajam, siap lelang, dan bebas dari distorsi skala visual.
    \end{itemize}
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.66\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \centering
    \includegraphics[width=0.99\linewidth,height=142mm,keepaspectratio]{{{""" + p("SDN 19 Kuamang revitalisasi proyek/MENGGUNAKAN LAYOUT AUTOCAD.png") + r"""}}}\\[2mm]
    {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}\textbf{Bukti Gambar Kerja:} Penggunaan Layout AutoCAD untuk Penerbitan Dokumen DED Menuju PDF (SDN 19 Kuamang)}
  \end{tcolorbox}
\end{minipage}

\makefooter{PERENCANAAN REVITALISASI SDN 19 KUAMANG (1/3)}{12}
""")

# ==============================================================================
# HALAMAN 13: SDN 19 KUAMANG (2/3) - GAMBAR KERJA DETAIL (4 GAMBAR)
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 13: SDN 19 KUAMANG (2/3) ---
\makeheader{// KELOMPOK 1: PERENCANAAN \& QUANTITY SURVEYING // PROYEK 01}{LEMBAR GAMBAR KERJA DETAIL (DED) GEDUNG SDN 19 KUAMANG}{DENAH ARSITEKTUR, TAMPAK ELEVASI, RANGKA ATAP \& DETAIL PLAFON/UTILITAS}

\noindent
\begin{minipage}[t]{0.28\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ LEMBAR DED ARSITEKTUR \& STRUKTUR\ \ }\\[2mm]
    {\fontsize{10pt}{12pt}\selectfont\bfseries\color{pnavy}Gambar Kerja AutoCAD}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Rehabilitasi Ruang Kelas}\\[3mm]

    {\fontsize{6.8pt}{8.8pt}\selectfont\color{psteel}
    Rangkaian gambar kerja perencanaan Detailed Engineering Design (DED) yang diproduksi menggunakan AutoCAD untuk acuan fisik kontraktor di lapangan:\\[2mm]

    \textbf{1. Denah Tata Ruang:}\\
    Penataan ulang ruang kelas, ruang guru, bukaan ventilasi alami, dan sirkulasi murid.\\[1.5mm]

    \textbf{2. Tampak Bangunan:}\\
    Elevasi tampak depan, samping, dan belakang bangunan pasca revitalisasi.\\[1.5mm]

    \textbf{3. Rencana Kuda-Kuda Atap:}\\
    Struktur rangka atap penahan beban genteng dan angin sesuai bentang ruang.\\[1.5mm]

    \textbf{4. Detail Plafon \& Sanitasi:}\\
    Pemasangan rangka plafon, instalasi sanitasi air bersih dan kotor.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.70\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("SDN 19 Kuamang revitalisasi proyek/1.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Denah Tata Ruang \& Layout Kelas}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("SDN 19 Kuamang revitalisasi proyek/2.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Tampak Depan \& Samping Bangunan}
      \end{tcolorbox}
    \end{minipage}
    \vspace{2mm}

    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("SDN 19 Kuamang revitalisasi proyek/3.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 3. Rencana Rangka Atap / Kuda-Kuda}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("SDN 19 Kuamang revitalisasi proyek/4.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 4. Detail Plafon \& Sanitasi}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{DETAIL GAMBAR KERJA DED SDN 19 KUAMANG (2/3)}{13}
""")

# ==============================================================================
# HALAMAN 14: SDN 19 KUAMANG (3/3) - RKS, BACKUP VOLUME & KURVA S
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 14: SDN 19 KUAMANG (3/3) ---
\makeheader{// KELOMPOK 1: PERENCANAAN \& QUANTITY SURVEYING // PROYEK 01}{DOKUMEN RKS, BACKUP VOLUME KUANTITAS \& PENJADWALAN KURVA S}{PENGENDALIAN MUTU, SPESIFIKASI MATERIAL \& BOBOT PEKERJAAN}

\noindent
\begin{minipage}[t]{0.28\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ DOKUMEN TEKNIS PENDUKUNG\ \ }\\[2mm]
    {\fontsize{10pt}{12pt}\selectfont\bfseries\color{pnavy}RKS, Volume \& Kurva S}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Pengendalian Biaya \& Mutu}\\[3mm]

    {\fontsize{6.8pt}{8.8pt}\selectfont\color{psteel}
    Dokumen kelengkapan teknis yang disusun untuk memastikan tertib mutu dan waktu:\\[2mm]

    \textbf{1. Dokumen RKS:}\\
    Rencana Kerja dan Syarat-Syarat teknis mutu material, tata cara pemasangan, dan standar pengujian di lapangan.\\[1.5mm]

    \textbf{2. Backup Volume Excel:}\\
    Perhitungan matematis kuantitas pekerjaan (panjang, luas, volume) sebagai dasar penyusunan RAB yang presisi.\\[1.5mm]

    \textbf{3. Kurva S \& Time Schedule:}\\
    Pemetaan bobot pekerjaan ke dalam grafik Kurva S untuk pedoman monitoring progres mingguan di lapangan.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.70\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \begin{minipage}[t]{0.32\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=148mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=136mm,keepaspectratio]{{{""" + p("SDN 19 Kuamang revitalisasi proyek/RKS.png") + r"""}}}\\[1mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Dokumen Teknis RKS}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.32\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=148mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=136mm,keepaspectratio]{{{""" + p("SDN 19 Kuamang revitalisasi proyek/BACKUP VOLUME.png") + r"""}}}\\[1mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Backup Volume Kuantitas}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.32\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=148mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=136mm,keepaspectratio]{{{""" + p("SDN 19 Kuamang revitalisasi proyek/5.png") + r"""}}}\\[1mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 3. Jadwal Kurva S}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{DOKUMEN RKS, VOLUME \& KURVA S SDN 19 KUAMANG (3/3)}{14}
""")

# ==============================================================================
# HALAMAN 15: SLBN 2 PARIAMAN (1/3) - DED MULTI VIEWPORT
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 15: SLBN 2 PARIAMAN (1/3) ---
\makeheader{// KELOMPOK 1: PERENCANAAN \& QUANTITY SURVEYING // PROYEK 02}{PROYEK REVITALISASI FASILITAS SLBN 2 PARIAMAN}{PERENCANA TEKNIS \textbar\ PARIAMAN, SUMATERA BARAT \textbar\ JULI 2026}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PROYEK PERENCANAAN TEKNIS 02\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}Revitalisasi SLBN 2 Pariaman}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Perencana Teknis (Konsultan Perencana)}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Peran:} & {\fontsize{7pt}{8.5pt}\selectfont Perencana Teknis} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Lokasi Proyek:} & {\fontsize{7pt}{8.5pt}\selectfont Pariaman, Sumatera Barat} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Waktu:} & {\fontsize{7pt}{8.5pt}\selectfont Juli 2026} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Lingkup Output:} & {\fontsize{7pt}{8.5pt}\selectfont DED, RAB, RKS, Kurva S, CCO}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{2mm}

    {\fontsize{8pt}{10pt}\selectfont\bfseries\color{pnavy}STANDAR PUBLIKASI AUTOCAD KE PDF}\\[1.5mm]
    {\fontsize{6.8pt}{8.8pt}\selectfont\color{psteel}Penggunaan fitur layout paper space AutoCAD untuk proyek revitalisasi sekolah luar biasa:}\\[2mm]

    {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3.5mm, itemsep=0.8mm, topsep=0mm]
      \item Menyusun gambar kerja fasilitas ramah disabilitas (kemiringan ramp, sanitasi khusus).
      \item Memanfaatkan multi-viewport layout AutoCAD untuk memadukan gambar skala makro dan mikro dalam satu kop standar.
      \item Mempublikasikan berkas gambar kerja PDF yang tertib etiket dan siap lelang.
    \end{itemize}
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.66\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \centering
    \includegraphics[width=0.99\linewidth,height=142mm,keepaspectratio]{{{""" + p("SLBN 2 PARIAMAN Revitalisasi Proyek/LAYOUT AUTOCAD.png") + r"""}}}\\[2mm]
    {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}\textbf{Bukti Gambar Kerja:} Penggunaan Layout AutoCAD untuk Penerbitan Dokumen DED Menuju PDF (SLBN 2 Pariaman)}
  \end{tcolorbox}
\end{minipage}

\makefooter{PERENCANAAN REVITALISASI SLBN 2 PARIAMAN (1/3)}{15}
""")

# ==============================================================================
# HALAMAN 16: SLBN 2 PARIAMAN (2/3) - DETAIL STRUKTUR (4 GAMBAR)
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 16: SLBN 2 PARIAMAN (2/3) ---
\makeheader{// KELOMPOK 1: PERENCANAAN \& QUANTITY SURVEYING // PROYEK 02}{LEMBAR GAMBAR KERJA DETAIL (DED) SLBN 2 PARIAMAN}{DENAH AKSESIBILITAS, ELEVASI, POTONGAN MELINTANG \& FASILITAS KHUSUS}

\noindent
\begin{minipage}[t]{0.28\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ DED SEKOLAH LUAR BIASA\ \ }\\[2mm]
    {\fontsize{10pt}{12pt}\selectfont\bfseries\color{pnavy}Gambar Kerja AutoCAD}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Fasilitas Ramah Disabilitas}\\[3mm]

    {\fontsize{6.8pt}{8.8pt}\selectfont\color{psteel}
    Gambar kerja perencanaan detail yang mengakomodasi kebutuhan aksesibilitas siswa berkebutuhan khusus:\\[2mm]

    \textbf{1. Denah Ruang Khusus:}\\
    Perencanaan tata letak ruang kelas inklusif dan koridor bebas rintangan.\\[1.5mm]

    \textbf{2. Tampak Bangunan:}\\
    Elevasi tampak bangunan dengan bukaan jendela dan pencahayaan optimal.\\[1.5mm]

    \textbf{3. Potongan Melintang:}\\
    Ketinggian lantai, hubungan pondasi, dinding, dan kuda-kuda.\\[1.5mm]

    \textbf{4. Detail Aksesibilitas:}\\
    Kemiringan ramp, pegangan tangan (\textit{handrail}), dan toilet khusus difabel.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.70\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("SLBN 2 PARIAMAN Revitalisasi Proyek/1.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Denah Ruang Kelas \& Koridor}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("SLBN 2 PARIAMAN Revitalisasi Proyek/2.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Tampak Bangunan}
      \end{tcolorbox}
    \end{minipage}
    \vspace{2mm}

    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("SLBN 2 PARIAMAN Revitalisasi Proyek/3.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 3. Potongan Melintang Struktur}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("SLBN 2 PARIAMAN Revitalisasi Proyek/4.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 4. Detail Ramp \& Sanitasi Ramah Difabel}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{DETAIL GAMBAR KERJA DED SLBN 2 PARIAMAN (2/3)}{16}
""")

# ==============================================================================
# HALAMAN 17: SLBN 2 PARIAMAN (3/3) - BBS, CCO & BACKUP VOLUME
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 17: SLBN 2 PARIAMAN (3/3) ---
\makeheader{// KELOMPOK 1: PERENCANAAN \& QUANTITY SURVEYING // PROYEK 02}{DETAIL STRUKTUR, DOKUMEN CCO \& BACKUP VOLUME KUANTITAS}{PERUBAHAN RANCANGAN AWAL, PERHITUNGAN VOLUME \& PEMBESIAN}

\noindent
\begin{minipage}[t]{0.28\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ DOKUMEN STRUKTUR \& CCO\ \ }\\[2mm]
    {\fontsize{10pt}{12pt}\selectfont\bfseries\color{pnavy}CCO \& Backup Volume}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Penyesuaian Lapangan}\\[3mm]

    {\fontsize{6.8pt}{8.8pt}\selectfont\color{psteel}
    Dokumen teknis pengendalian struktur dan penyesuaian rancangan awal:\\[2mm]

    \textbf{1. Detail Struktur Pembesian:}\\
    Detail penulangan kolom praktis, balok latai, dan pondasi telapak/batu kali.\\[1.5mm]

    \textbf{2. Dokumen Addendum CCO:}\\
    Penyusunan berkas perubahan rancangan awal (\textit{Contract Change Order}) terhadap kondisi eksisting tapak sekolah.\\[1.5mm]

    \textbf{3. Backup Volume Perhitungan:}\\
    Tabel kalkulasi matematis rincian volume setiap item pekerjaan sebagai dasar justifikasi CCO dan RAB.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.70\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \begin{minipage}[t]{0.32\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=148mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=136mm,keepaspectratio]{{{""" + p("SLBN 2 PARIAMAN Revitalisasi Proyek/5.png") + r"""}}}\\[1mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Detail Struktur Beton}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.32\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=148mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=136mm,keepaspectratio]{{{""" + p("SLBN 2 PARIAMAN Revitalisasi Proyek/CCO'.png") + r"""}}}\\[1mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Dokumen Addendum CCO}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.32\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=148mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=136mm,keepaspectratio]{{{""" + p("SLBN 2 PARIAMAN Revitalisasi Proyek/BACKUP VOLUME.png") + r"""}}}\\[1mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 3. Backup Volume Perhitungan}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{STRUKTUR, CCO \& VOLUME SLBN 2 PARIAMAN (3/3)}{17}
""")

# ==============================================================================
# HALAMAN 18: QS PT MULIA DJASMINE SENTOSA
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 18: QS PT MULIA DJASMINE SENTOSA ---
\makeheader{// KELOMPOK 1: PERENCANAAN \& QUANTITY SURVEYING // PROYEK 03}{QUANTITY SURVEYOR (FREELANCE) --- PT MULIA DJASMINE SENTOSA}{SUBKONTRAKTOR PROYEK FASILITAS PT PERFETTI VAN MELLE INDONESIA \textbar\ SEPTEMBER 2025}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ QUANTITY SURVEYING FREELANCE 03\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}PT Mulia Djasmine Sentosa}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Proyek PT Perfetti Van Melle Indonesia}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Peran:} & {\fontsize{7pt}{8.5pt}\selectfont Quantity Surveyor (Freelance)} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Perusahaan:} & {\fontsize{7pt}{8.5pt}\selectfont PT Mulia Djasmine Sentosa} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Proyek Klien:} & {\fontsize{7pt}{8.5pt}\selectfont PT Perfetti Van Melle Indonesia} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Waktu:} & {\fontsize{7pt}{8.5pt}\selectfont September 2025} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Lingkup Output:} & {\fontsize{7pt}{8.5pt}\selectfont MC-100, Rekap Biaya, CCO, BBS}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{2mm}

    {\fontsize{8pt}{10pt}\selectfont\bfseries\color{pnavy}TANGGUNG JAWAB QS REALISTIS}\\[1.5mm]
    {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3.5mm, itemsep=0.8mm, topsep=0mm]
      \item Melaksanakan perhitungan ulang volume pekerjaan terpasang berdasarkan kondisi aktual lapangan (\textit{Mutual Check 100\%} / MC-100).
      \item Menyusun rekapitulasi biaya dan valuasi harga pekerjaan berdasarkan kuantitas aktual terverifikasi sebagai dasar pengajuan klaim pembayaran subkontraktor.
      \item Menyusun administrasi pergantian dan penyesuaian item pekerjaan dari kontrak awal (\textit{Contract Change Order} / CCO).
      \item Menyusun Bar Bending Schedule (BBS) penulangan beton untuk acuan fabrikasi besi subkontraktor.
    \end{itemize}
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.66\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("qs PT mulia Djasmine/backup vol.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Backup Volume Opname Aktual MC-100}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("qs PT mulia Djasmine/bbs.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Bar Bending Schedule (BBS) Pembesian}
      \end{tcolorbox}
    \end{minipage}
    \vspace{2mm}

    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("qs PT mulia Djasmine/cco.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 3. Rekapitulasi Pergantian Item CCO}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("qs PT mulia Djasmine/meeting.jpeg") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 4. Dokumentasi Rapat Koordinasi \& Opname}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{QUANTITY SURVEYOR PT MULIA DJASMINE SENTOSA}{18}
""")

# ==============================================================================
# HALAMAN 19: TUGAS AKHIR D3: GEDUNG DPRD PASAMAN
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 19: TUGAS AKHIR AKADEMIK D3 ---
\makeheader{// KELOMPOK 1: PERENCANAAN \& QUANTITY SURVEYING // PROYEK 04}{TUGAS AKHIR: ESTIMASI RAB \& PENJADWALAN GEDUNG DPRD PASAMAN}{POLITEKNIK NEGERI PADANG \textbar\ MS PROJECT, KURVA S \& RENCANA ANGGARAN BIAYA}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ TUGAS AKHIR D3 TEKNIK SIPIL 04\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}Pembangunan Gedung DPRD}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Kabupaten Pasaman, Sumatera Barat}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Institusi:} & {\fontsize{7pt}{8.5pt}\selectfont Politeknik Negeri Padang} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Objek Studi:} & {\fontsize{7pt}{8.5pt}\selectfont Gedung DPRD Kab. Pasaman} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Fokus Kajian:} & {\fontsize{7pt}{8.5pt}\selectfont Estimasi RAB \& Time Schedule} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Alat Bantu:} & {\fontsize{7pt}{8.5pt}\selectfont MS Project \& MS Excel}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{2mm}

    {\fontsize{8pt}{10pt}\selectfont\bfseries\color{pnavy}RUANG LINGKUP PERANCANGAN}\\[1.5mm]
    {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3.5mm, itemsep=0.8mm, topsep=0mm]
      \item Menghitung volume seluruh pekerjaan struktur beton bertulang, pasangan dinding, dan atap.
      \item Menyusun Rencana Anggaran Biaya (RAB) berdasarkan analisa harga satuan pekerjaan (AHSP).
      \item Menyusun Work Breakdown Structure (WBS) dan jadwal pelaksanaan menggunakan Microsoft Project.
      \item Memetakan distribusi bobot pekerjaan ke dalam grafik Kurva S untuk simulasi pengendalian waktu proyek.
    \end{itemize}
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.66\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \begin{minipage}[t]{0.32\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=148mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=136mm,keepaspectratio]{{{""" + p("Final Project/SChedule ms project.png") + r"""}}}\\[1mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Jadwal MS Project}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.32\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=148mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=136mm,keepaspectratio]{{{""" + p("Final Project/Kurva s.png") + r"""}}}\\[1mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Kurva S Pelaksanaan}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.32\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=148mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=136mm,keepaspectratio]{{{""" + p("Final Project/RAB.png") + r"""}}}\\[1mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 3. Rekapitulasi RAB}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{TUGAS AKHIR: GEDUNG DPRD PASAMAN}{19}
""")

# ==============================================================================
# HALAMAN 20: EPC WASTE GAS RECOVERY (1/3) - BBS PEMBESIAN
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 20: MAGANG INDUSTRI PT SOLUSI INDUSTRI ENERGI (1/3) ---
\makeheader{// KELOMPOK 2: MANAJEMEN PELAKSANAAN \& PENGAWASAN // PROYEK 05}{SUPERVISI MAGANG: PROYEK WASTE GAS RECOVERY PT INDO-BHARAT RAYON}{PT SOLUSI INDUSTRI ENERGI \textbar\ PURWAKARTA, JAWA BARAT \textbar\ AGU --- DES 2024}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PENGALAMAN MAGANG INDUSTRI 05\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}Proyek Waste Gas Recovery}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}PT Indo-Bharat Rayon Purwakarta}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Kontraktor:} & {\fontsize{7pt}{8.5pt}\selectfont PT Solusi Industri Energi} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Klien:} & {\fontsize{7pt}{8.5pt}\selectfont PT Indo-Bharat Rayon} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Lokasi Proyek:} & {\fontsize{7pt}{8.5pt}\selectfont Purwakarta, Jawa Barat} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Periode Magang:} & {\fontsize{7pt}{8.5pt}\selectfont Agustus --- Desember 2024} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Fokus Lembar:} & {\fontsize{7pt}{8.5pt}\selectfont Bar Bending Schedule (BBS)}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{2mm}

    {\fontsize{8pt}{10pt}\selectfont\bfseries\color{pnavy}PENYUSUNAN BBS PEMBESIAN}\\[1.5mm]
    {\fontsize{6.8pt}{8.8pt}\selectfont\color{psteel}Tanggung jawab nyata dalam perancangan pemotongan dan pembengkokan tulangan beton bertulang di lokasi pabrik kimia:}\\[2mm]

    {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3.5mm, itemsep=0.8mm, topsep=0mm]
      \item Menyusun lembar Bar Bending Schedule (BBS) pondasi mesin dan struktur penyangga.
      \item Mengoptimalkan kombinasi panjang potong tulangan guna meminimalkan sisa potongan besi (\textit{scrap waste}).
      \item Mengarsipkan dokumen gambar teknis dan administrasi proyek di lapangan secara tertib.
    \end{itemize}
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.66\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=148mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=136mm,keepaspectratio]{{{""" + p("Magang/BBS.png") + r"""}}}\\[1mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Bar Bending Schedule (BBS) Tulangan Beton}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=148mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=136mm,keepaspectratio]{{{""" + p("Magang/DOKUMEN.jpeg") + r"""}}}\\[1mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Dokumentasi Pengelolaan Dokumen Proyek}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{MAGANG WASTE GAS RECOVERY --- BBS PEMBESIAN (1/3)}{20}
""")

# ==============================================================================
# HALAMAN 21: EPC WASTE GAS RECOVERY (2/3) - BOQ REWORK & LAPORAN PROGRES
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 21: MAGANG INDUSTRI PT SOLUSI INDUSTRI ENERGI (2/3) ---
\makeheader{// KELOMPOK 2: MANAJEMEN PELAKSANAAN \& PENGAWASAN // PROYEK 05}{PERHITUNGAN BIAYA REWORK \& PENYUSUNAN LAPORAN PROGRES}{PT SOLUSI INDUSTRI ENERGI \textbar\ KOORDINASI MANAJEMEN PROYEK LAPANGAN}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PERHITUNGAN BIAYA \& PROGRES\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}QTO Rework \& Pelaporan}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Pengendalian Lapangan}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Aktivitas 1:} & {\fontsize{7pt}{8.5pt}\selectfont Kalkulasi Volume \& Biaya Rework} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Aktivitas 2:} & {\fontsize{7pt}{8.5pt}\selectfont Backup Volume Progress Billing} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Laporan Rutin:} & {\fontsize{7pt}{8.5pt}\selectfont Harian, Mingguan, Bulanan} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Dampak:} & {\fontsize{7pt}{8.5pt}\selectfont Rekonsiliasi Biaya \& Waktu Akurat}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{2mm}

    {\fontsize{8pt}{10pt}\selectfont\bfseries\color{pnavy}TANGGUNG JAWAB PENGENDALIAN}\\[1.5mm]
    {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3.5mm, itemsep=0.8mm, topsep=0mm]
      \item Menghitung volume pekerjaan serta estimasi biaya tambahan akibat adanya pekerjaan penyesuaian/perbaikan (\textit{rework}) di lapangan.
      \item Menghitung volume pekerjaan terpasang (Backup Volume) sebagai dasar pendukung penagihan progres (\textit{progress billing}).
      \item Menyusun laporan progres proyek harian, mingguan, dan bulanan secara konsisten untuk koordinasi manajemen proyek.
    \end{itemize}
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.66\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=148mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=136mm,keepaspectratio]{{{""" + p("Magang/Bill of quantity rework.png") + r"""}}}\\[1mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Perhitungan Kuantitas \& BoQ Rework}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=148mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=136mm,keepaspectratio]{{{""" + p("Magang/MONTHLY REPORT.png") + r"""}}}\\[1mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Dokumen Laporan Bulanan (Monthly Progress Report)}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{MAGANG WASTE GAS RECOVERY --- BIAYA REWORK \& PROGRES (2/3)}{21}
""")

# ==============================================================================
# HALAMAN 22: EPC WASTE GAS RECOVERY (3/3) - INSPEKSI LAPANGAN & PUNCH LIST
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 22: MAGANG INDUSTRI PT SOLUSI INDUSTRI ENERGI (3/3) ---
\makeheader{// KELOMPOK 2: MANAJEMEN PELAKSANAAN \& PENGAWASAN // PROYEK 05}{PENGENDALIAN MUTU (QC), SLUMP TEST \& PENYUSUNAN PUNCH LIST}{PT SOLUSI INDUSTRI ENERGI \textbar\ INSPEKSI LAPANGAN \& PEMETAAN AREA KERJA}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PENGENDALIAN MUTU LAPANGAN\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}Inspeksi QC \& Serah Terima}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Pabrik PT Indo-Bharat Rayon}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Pengujian Beton:} & {\fontsize{7pt}{8.5pt}\selectfont Slump Test Beton Segar} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Cek Pembesian:} & {\fontsize{7pt}{8.5pt}\selectfont Pre-Pour Checklist Lapangan} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Pemetaan Area:} & {\fontsize{7pt}{8.5pt}\selectfont Mapping Work Lapangan} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Serah Terima:} & {\fontsize{7pt}{8.5pt}\selectfont Daftar Catatan Punch List}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{2mm}

    {\fontsize{8pt}{10pt}\selectfont\bfseries\color{pnavy}AKTIVITAS QC NYATA}\\[1.5mm]
    {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3.5mm, itemsep=0.8mm, topsep=0mm]
      \item Melakukan pengujian Slump Test pada setiap kedatangan truk mixer beton segar sebelum pengecoran pondasi.
      \item Melakukan inspeksi pemasangan pembesian, selimut beton, dan kebersihan bekisting sebelum pengecoran.
      \item Melakukan pemetaan lapangan (\textit{mapping work}) area kerja proyek.
      \item Menyusun daftar perbaikan pekerjaan (\textit{Punch List}) sebelum dan sesudah serah terima area kerja.
    \end{itemize}
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.66\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Magang/SLUMP TEST.jpg") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Pengujian Slump Test Beton Segar}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Magang/PUNCH LIST.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Formulir Catatan Perbaikan (Punch List)}
      \end{tcolorbox}
    \end{minipage}
    \vspace{2mm}

    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Magang/MAPPING WORK.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 3. Peta Pemetaan Area Kerja (Mapping Work)}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Magang/DOKUMEN 2.jpeg") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 4. Pemeriksaan Dokumen \& Checklist Lapangan}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{MAGANG WASTE GAS RECOVERY --- PENGENDALIAN MUTU QC (3/3)}{22}
""")

# ==============================================================================
# HALAMAN 23: FASILITATOR BANTUAN FASILITAS KEMENDIKDASMEN
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 23: FASILITATOR TEKNIS KEMENDIKDASMEN ---
\makeheader{// KELOMPOK 2: MANAJEMEN PELAKSANAAN \& PENGAWASAN // PROYEK 06}{FASILITATOR TEKNIS PROGRAM REVITALISASI SEKOLAH DASAR}{KEMENTERIAN PENDIDIKAN DASAR DAN MENENGAH (KEMENDIKDASMEN) \textbar\ JUNI --- DESEMBER 2025}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PROGRAM REVITALISASI KEMENDIKDASMEN\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}Fasilitator Teknis Lapangan}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Kemendikdasmen RI}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Instansi:} & {\fontsize{7pt}{8.5pt}\selectfont Kemendikdasmen RI} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Penugasan:} & {\fontsize{7pt}{8.5pt}\selectfont Fasilitator Teknis Revitalisasi SD} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Periode:} & {\fontsize{7pt}{8.5pt}\selectfont Juni 2025 --- Desember 2025} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Wilayah:} & {\fontsize{7pt}{8.5pt}\selectfont Sekolah Dasar Penerima Bantuan}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{2mm}

    {\fontsize{8pt}{10pt}\selectfont\bfseries\color{pnavy}TANGGUNG JAWAB NYATA}\\[1.5mm]
    {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3.5mm, itemsep=0.8mm, topsep=0mm]
      \item Melakukan reviu dan evaluasi kelayakan dokumen administrasi serta dokumen teknis perencanaan (DED, RAB, dan RKS) sekolah penerima bantuan.
      \item Melaksanakan pemantauan (\textit{monitoring}) dan evaluasi berkala terhadap progres fisik pelaksanaan di lapangan agar sesuai dengan jadwal dan standar mutu.
      \item Memverifikasi kelengkapan dan keabsahan dokumen laporan kemajuan pekerjaan sebagai syarat pencairan dana termin bantuan pemerintah.
    \end{itemize}
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.66\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \begin{minipage}[t]{0.32\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("FASILITATOR/SITE MONITORING.jpeg") + r"""}}}\\[0.5mm]
        {\fontsize{5.5pt}{6.5pt}\selectfont\bfseries 1. Monitoring Lapangan I}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.32\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("FASILITATOR/BIMTEK.jpeg") + r"""}}}\\[0.5mm]
        {\fontsize{5.5pt}{6.5pt}\selectfont\bfseries 2. Bimbingan Teknis Fasilitator}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.32\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("FASILITATOR/FORM REVIEW.png") + r"""}}}\\[0.5mm]
        {\fontsize{5.5pt}{6.5pt}\selectfont\bfseries 3. Form Review Dokumen}
      \end{tcolorbox}
    \end{minipage}
    \vspace{2mm}

    \begin{minipage}[t]{0.32\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("FASILITATOR/LAPORAN FASILITATOR.png") + r"""}}}\\[0.5mm]
        {\fontsize{5.5pt}{6.5pt}\selectfont\bfseries 4. Laporan Progres Fasilitator}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.32\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("FASILITATOR/REVIEWER.jpeg") + r"""}}}\\[0.5mm]
        {\fontsize{5.5pt}{6.5pt}\selectfont\bfseries 5. Rapat Koordinasi Reviewer}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.32\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("FASILITATOR/SITE MONITORING 2.jpeg") + r"""}}}\\[0.5mm]
        {\fontsize{5.5pt}{6.5pt}\selectfont\bfseries 6. Monitoring Lapangan II}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{FASILITATOR TEKNIS KEMENDIKDASMEN}{23}
""")

# ==============================================================================
# HALAMAN 24: REVIT BIM MODELING
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 24: REVIT BIM MODELING ---
\makeheader{// KELOMPOK 3: PEMODELAN DIGITAL \& RISET REKAYASA // PROYEK 07}{PEMODELAN ELEMEN STRUKTUR \& ARSITEKTUR AUTODESK REVIT}{ARSISTEN ACADEMY \textbar\ PRAKTIK PEMODELAN DIGITAL 3D PARAMETRIK}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PRAKTIK PEMODELAN REVIT BIM 07\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}Pemodelan Digital 3D}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Revit Masterclass Arsisten Academy}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Software:} & {\fontsize{7pt}{8.5pt}\selectfont Autodesk Revit} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Pelatihan:} & {\fontsize{7pt}{8.5pt}\selectfont Revit Masterclass for Beginners} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Lembaga:} & {\fontsize{7pt}{8.5pt}\selectfont Arsisten Academy} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Objek Latihan:} & {\fontsize{7pt}{8.5pt}\selectfont Struktur \& Arsitektur Gedung}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{2mm}

    {\fontsize{8pt}{10pt}\selectfont\bfseries\color{pnavy}DESKRIPSI PROSES \& HASIL}\\[1.5mm]
    {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3.5mm, itemsep=0.8mm, topsep=0mm]
      \item Menyelesaikan pembelajaran pemodelan BIM tingkat dasar di Arsisten Academy.
      \item Mempelajari teknik pembuatan model digital 3D untuk komponen struktural (kolom, balok, pelat) dan arsitektural.
      \item Walaupun masih terus mengasah dan menyempurnakan kemampuan, telah berhasil mempraktikkan penggambaran ulang (\textit{re-modeling}) elemen bangunan dari denah rencana ke model Revit.
      \item Memahami keterkaitan antara permodelan 3D dengan pembentukan denah lantai, potongan, dan tampak secara terpadu.
    \end{itemize}
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.66\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("REVIT/Screenshot 2026-10-29 123739.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Model Isometrik 3D Struktur Rangka}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("REVIT/Screenshot 2026-10-29 123810.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Tampak Depan \& Bukaan Arsitektur}
      \end{tcolorbox}
    \end{minipage}
    \vspace{2mm}

    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("REVIT/Screenshot 2026-10-29 123825.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 3. Potongan Melintang \& Hubungan Balok-Kolom}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("REVIT/Screenshot 2026-10-29 123933.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 4. Perspektif Isometrik Elemen Bangunan}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{PRAKTIK PEMODELAN AUTODESK REVIT}{24}
""")

# ==============================================================================
# HALAMAN 25: ANALISIS SEISMIK SAP2000
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 25: ANALISIS STRUKTUR SAP2000 ---
\makeheader{// KELOMPOK 3: PEMODELAN DIGITAL \& RISET REKAYASA // PROYEK 08}{PEMODELAN STRUKTUR 3D \& ANALISIS PEMBEBANAN SAP2000}{PRA-PROYEK PERANCANGAN GEDUNG BERTINGKAT \textbar\ POLITEKNIK NEGERI PADANG}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ ANALISIS REKAYASA STRUKTUR 08\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}Pemodelan SAP2000}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Gedung Bertingkat Beton}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Software:} & {\fontsize{7pt}{8.5pt}\selectfont Computers \& Structures SAP2000} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Program:} & {\fontsize{7pt}{8.5pt}\selectfont Pra-Proyek Perancangan Gedung} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Institusi:} & {\fontsize{7pt}{8.5pt}\selectfont Politeknik Negeri Padang} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Tipe Analisis:} & {\fontsize{7pt}{8.5pt}\selectfont Gaya Dalam \& Gempa Dinamik}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{2mm}

    {\fontsize{8pt}{10pt}\selectfont\bfseries\color{pnavy}LINGKUP ANALISIS REKAYASA}\\[1.5mm]
    {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3.5mm, itemsep=0.8mm, topsep=0mm]
      \item Pemodelan geometri 3D portal struktur beton bertulang (\textit{3D Frame Modeling}).
      \item Input pembebanan sesuai standar SNI: beban mati (\textit{Dead Load}), beban hidup (\textit{Live Load}), dan parameter respons spektrum gempa.
      \item Ekstraksi diagram gaya dalam: momen lentur (\textit{BMD}), gaya geser (\textit{SFD}), dan gaya aksial pada kolom dan balok.
      \item Mempelajari respons perilaku rangka struktur terhadap beban lateral gempa.
    \end{itemize}
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.66\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Pra proyek/PRIMERY DESIGN.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Geometri Portal Struktur 3D}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Pra proyek/SAP2000.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Antarmuka Pemodelan SAP2000}
      \end{tcolorbox}
    \end{minipage}
    \vspace{2mm}

    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Pra proyek/MOMEN, GESER.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 3. Diagram Momen \& Gaya Geser (BMD/SFD)}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Pra proyek/BEBAN GEMPA.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 4. Input Parameter Beban Gempa SNI}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{ANALISIS STRUKTUR \& GEMPA SAP2000}{25}
""")

# ==============================================================================
# HALAMAN 26: TENDER NASIONAL FONDASI DAYS UNS
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 26: KOMPETISI TENDER NASIONAL FONDASI DAYS UNS ---
\makeheader{// KELOMPOK 3: PEMODELAN DIGITAL \& RISET REKAYASA // PROYEK 09}{KOMPETISI TENDER NASIONAL FONDASI DAYS 2025}{UNIVERSITAS SEBELAS MARET (UNS) \textbar\ TIM JAYA JAYA TEAM}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ KOMPETISI TENDER NASIONAL 09\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}Fondasi Days 2025}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Universitas Sebelas Maret (UNS)}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Penyelenggara:} & {\fontsize{7pt}{8.5pt}\selectfont Universitas Sebelas Maret} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Tim Delegasi:} & {\fontsize{7pt}{8.5pt}\selectfont Jaya Jaya Team (PNP)} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Bidang Lomba:} & {\fontsize{7pt}{8.5pt}\selectfont Estimasi Biaya \& Tender Proyek} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Output:} & {\fontsize{7pt}{8.5pt}\selectfont Dokumen Penawaran, RAB, Kurva S, 3D}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{2mm}

    {\fontsize{8pt}{10pt}\selectfont\bfseries\color{pnavy}KONTRIBUSI NYATA DALAM TIM}\\[1.5mm]
    {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3.5mm, itemsep=0.8mm, topsep=0mm]
      \item Berpartisipasi dalam penyusunan dokumen teknis penawaran tender konstruksi.
      \item Melaksanakan perhitungan volume pekerjaan dan estimasi Rencana Anggaran Biaya (RAB).
      \item Pemodelan konstruksi 3D tahapan pelaksanaan menggunakan Google SketchUp.
      \item Menyusun jadwal pelaksanaan Kurva S menggunakan Microsoft Project.
      \item Menyusun materi presentasi penawaran tender (\textit{PPT Penawaran}).
    \end{itemize}
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.66\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Tender universitas sebelas maret/POSTER JAYA JAYA TEAM.jpg") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Poster Teknis Jaya Jaya Team}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Tender universitas sebelas maret/RENDER UNS 2.jpg") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Visualisasi 3D SketchUp Tahapan Kerja}
      \end{tcolorbox}
    \end{minipage}
    \vspace{2mm}

    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Tender universitas sebelas maret/Rab.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 3. Estimasi Rencana Anggaran Biaya (RAB)}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Tender universitas sebelas maret/MS Project.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 4. Jadwal Kurva S \& MS Project}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{KOMPETISI TENDER NASIONAL FONDASI DAYS UNS}{26}
""")

# ==============================================================================
# HALAMAN 27: RISET PKM-AI ANALISIS BIAYA SCAFFOLDING
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 27: KARYA TULIS ILMIAH PKM-AI ---
\makeheader{// KELOMPOK 3: PEMODELAN DIGITAL \& RISET REKAYASA // PROYEK 10}{KARYA TULIS ILMIAH: ANALISIS BIAYA SCAFFOLDING}{PKM-AI KEMENDIKBUDRISTEK \textbar\ STUDI KASUS PROYEK WASTE GAS RECOVERY PURWAKARTA}

\noindent
\begin{minipage}[t]{0.35\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3.5mm, right=3.5mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ KARYA TULIS ILMIAH REKAYASA 10\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}Analisis Biaya Scaffolding}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Skema Pembelian vs Penyewaan}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      \begin{tabularx}{\linewidth}{@{}p{24mm} X@{}}
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Program:} & {\fontsize{7pt}{8.5pt}\selectfont PKM-AI Kemendikbudristek} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Judul Artikel:} & {\fontsize{7pt}{8.5pt}\selectfont\textit{Analisa Biaya Scaffolding pada Proyek Waste Gas Recovery IBR Purwakarta}} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Objek Kajian:} & {\fontsize{7pt}{8.5pt}\selectfont Proyek Waste Gas Recovery Purwakarta} \\[1mm]
        {\fontsize{7pt}{8.5pt}\selectfont\bfseries Metodologi:} & {\fontsize{7pt}{8.5pt}\selectfont Komparasi Biaya vs Durasi Pemakaian}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{2mm}

    {\fontsize{8pt}{10pt}\selectfont\bfseries\color{pnavy}KESIMPULAN STUDI OBJEKTIF}\\[1.5mm]
    {\fontsize{6.8pt}{8.8pt}\selectfont\color{psteel}
    Karya tulis ini mengevaluasi efisiensi biaya antara skema pembelian (\textit{purchasing}) dan skema penyewaan (\textit{rental}) scaffolding perancah kerja pada pelaksanaan proyek industri.\\[2mm]

    \textbf{Hasil Kesimpulan Rekayasa:}\\
    Efisiensi biaya scaffolding sangat bergantung pada lama (\textit{durasi}) pemakaian di lokasi proyek:
    \begin{itemize}[leftmargin=3.5mm, itemsep=0.8mm, topsep=1mm]
      \item Apabila proyek berdurasi panjang, maka skema \textbf{membeli} scaffolding akan jauh lebih efisien dan ekonomis secara total pengeluaran biaya investasi.
      \item Sebaliknya, apabila pemakaian scaffolding hanya berlangsung dalam jangka pendek, maka skema \textbf{menyewa} menjadi pilihan yang lebih menguntungkan.
    \end{itemize}
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.63\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=156mm]
    \centering
    \includegraphics[width=0.98\linewidth,height=142mm,keepaspectratio]{{{""" + p("ARTIKEL ILMIAH/Screenshot 2026-10-29 120442.png") + r"""}}}\\[2mm]
    {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}\textbf{Dokumen Naskah Ilmiah:} Bukti Karya Tulis Ilmiah Analisa Biaya Scaffolding (PKM-AI Kemendikbudristek)}
  \end{tcolorbox}
\end{minipage}

\makefooter{KARYA ILMIAH ANALISIS BIAYA SCAFFOLDING}{27}
""")

# ==============================================================================
# HALAMAN 28: LEMBAR PENUTUP & SALURAN KOMUNIKASI
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 28: LEMBAR PENUTUP & SALURAN KOMUNIKASI RESMI ---
\makeheader{// LEMBAR PENUTUP // INTEGRITAS DATA}{PERNYATAAN KEABSAHAN DATA \& SALURAN KOMUNIKASI PROFESIONAL}{REZA SEPDIDE, A.Md.T. \textbar\ PELAKSANA LAPANGAN GEDUNG MADYA BNSP JENJANG 5}

\noindent
\begin{minipage}[t]{0.34\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3.5mm, right=3.5mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PERNYATAAN KEOTENTIKAN DATA\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}Pernyataan Resmi}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Integritas \& Akuntabilitas Rekayasa}\\[3mm]

    {\fontsize{7.2pt}{9.8pt}\selectfont\color{psteel}
    Dengan ini saya menyatakan bahwa seluruh informasi kualifikasi, riwayat pendidikan, bukti sertifikat kompetensi negara BNSP, sertifikasi dwibahasa internasional, dokumen gambar DED AutoCAD, dokumen RKS, perhitungan kuantitas volume, jadwal Kurva S, dan dokumentasi lapangan yang tersaji di dalam dokumen dosir ini adalah \textbf{otentik, sah, dan dapat dipertanggungjawabkan keabsahannya} sesuai bukti fisik yang ada.\\[3mm]

    Portofolio ini disusun secara mandiri sebagai representasi objektif atas dedikasi dan kesiapan profesional saya untuk berkontribusi secara nyata pada proyek konstruksi gedung dan infrastruktur nasional maupun internasional.\\[4mm]
    }

    {\fontsize{7.5pt}{9.5pt}\selectfont\color{psteel}Padang, Sumatera Barat, 2026\\[1.5mm]
    \textbf{REZA SEPDIDE, A.Md.T.}\\
    \textit{Pelaksana Lapangan Gedung Madya (BNSP Jenjang 5)}}
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3.5mm, right=3.5mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pnavy}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ SALURAN KOMUNIKASI LANGSUNG\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}Kontak Resmi \& Kesiapan Kerja}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pred}Saluran Langsung Reza Sepdide}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2.5mm, right=2.5mm, top=2.5mm, bottom=2.5mm]
      {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}EMAIL PROFESIONAL:}\\[0.5mm]
      {\fontsize{8pt}{10pt}\selectfont\fontfamily{cmtt}\selectfont rezasepdide@gmail.com}\\[2mm]

      {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}WHATSAPP / TELEPON LANGSUNG:}\\[0.5mm]
      {\fontsize{8pt}{10pt}\selectfont\fontfamily{cmtt}\selectfont +62 896-4459-0915}\\[2mm]

      {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}LINKEDIN PROFILE:}\\[0.5mm]
      {\fontsize{7.5pt}{9.5pt}\selectfont\fontfamily{cmtt}\selectfont linkedin.com/in/rezasepdide}\\[2mm]

      {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}DOMISILI UTAMA:}\\[0.5mm]
      {\fontsize{7.5pt}{9.5pt}\selectfont Padang, Sumatera Barat, Indonesia}
    \end{tcolorbox}
    \vspace{2mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}KESIAPAN MOBILISASI:}\\[1mm]
    {\fontsize{6.8pt}{8.6pt}\selectfont\color{psteel}Siap ditugaskan secara penuh (\textit{full-time placement}) pada proyek di seluruh wilayah Republik Indonesia maupun penugasan internasional (Jepang / Asia).}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pred, colback=predlight, left=2mm, right=2mm, top=2mm, bottom=2mm]
      \centering{\fontsize{6.5pt}{8pt}\selectfont\bfseries\color{pred}Status Ketersediaan: TERBUKA UNTUK PENUGASAN PROYEK}
    \end{tcolorbox}
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=3.5mm, right=3.5mm, top=3mm, bottom=3mm, height=156mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ IKHTISAR KUALIFIKASI\ \ }\\[2mm]
    {\fontsize{10.5pt}{12.5pt}\selectfont\bfseries\color{pnavy}Spesialisasi Rekayasa}\\[1mm]
    {\fontsize{7.5pt}{9.5pt}\selectfont\bfseries\color{pmuted}Quantity Surveyor \& Pelaksana Gedung}\\[3mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}1. Quantity Surveying \& Estimasi}\\[0.5mm]
      {\fontsize{6.5pt}{8pt}\selectfont\color{psteel}QTO presisi, BoQ, RAB AHSP PUPR, BBS pembesian \& pengendalian deviasi biaya CCO.}
    \end{tcolorbox}
    \vspace{1.5mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}2. Pengawasan Lapangan \& K3}\\[0.5mm]
      {\fontsize{6.5pt}{8pt}\selectfont\color{psteel}Lisensi Pelaksana Lapangan Gedung Madya BNSP KKNI Jenjang 5, SMKK \& QC mutu beton.}
    \end{tcolorbox}
    \vspace{1.5mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}3. Digital BIM \& CAD Modeler}\\[0.5mm]
      {\fontsize{6.5pt}{8pt}\selectfont\color{psteel}Revit Masterclass Arsisten Academy, AutoCAD DED Multi-Viewport \& Analisis SAP2000.}
    \end{tcolorbox}
    \vspace{1.5mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}4. Standar Bilingual Internasional}\\[0.5mm]
      {\fontsize{6.5pt}{8pt}\selectfont\color{psteel}Jepang (SSW JAC, JFT-Basic 250, JLPT N4 165) \& Inggris (TOEIC Prediction 640).}
    \end{tcolorbox}
  \end{tcolorbox}
\end{minipage}

\makefooter{LEMBAR PENUTUP \& KONTAK}{28}
""")

# --- END DOCUMENT ---
tex.append(r"""\end{document}
""")

# Write full TeX source code
full_tex = "\n".join(tex)
with open(tex_path, "w", encoding="utf-8") as f:
    f.write(full_tex)

print(f"Wrote full LaTeX file to: {tex_path}")
print(f"Total lines: {len(full_tex.splitlines())}")

# Run pdflatex twice for reference resolution
print("Compiling Pass 1 with pdflatex...")
res1 = subprocess.run(
    ["pdflatex", "-interaction=nonstopmode", "-output-directory=" + export_dir, tex_path],
    capture_output=True,
    text=True
)
print("Pass 1 exit code:", res1.returncode)

if res1.returncode != 0:
    print("Pass 1 errors:")
    with open(os.path.join(export_dir, "portofolio_reza_sepdide.log"), "r", encoding="utf-8", errors="ignore") as lf:
        for line in lf:
            if line.startswith("! "):
                print(line.strip())
else:
    print("Compiling Pass 2 with pdflatex...")
    res2 = subprocess.run(
        ["pdflatex", "-interaction=nonstopmode", "-output-directory=" + export_dir, tex_path],
        capture_output=True,
        text=True
    )
    print("Pass 2 exit code:", res2.returncode)

# Check compiled PDF
built_pdf = os.path.join(export_dir, "portofolio_reza_sepdide.pdf")
if os.path.exists(built_pdf):
    reader = PdfReader(built_pdf)
    print(f"\n==========================================")
    print(f"SUCCESS! GENERATED EXACTLY {len(reader.pages)} PAGES!")
    print(f"File size: {os.path.getsize(built_pdf) / (1024*1024):.2f} MB")
    print(f"==========================================")
    
    # Copy to target landscape PDF
    shutil.copyfile(built_pdf, pdf_path)
    print(f"Copied to: {pdf_path}")
    
    # Copy also to public folder if wanted
    public_target = "D:/whateverapp/laragon/www/ParkojiXn/public/Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf"
    shutil.copyfile(built_pdf, public_target)
    print(f"Copied to: {public_target}")

    # Render all 28 pages to images for visual review
    review_dir = "D:/whateverapp/laragon/www/ParkojiXn/scratch/pdf_review_master"
    os.makedirs(review_dir, exist_ok=True)
    pdf_doc = pdfium.PdfDocument(built_pdf)
    for idx, page in enumerate(pdf_doc):
        img = page.render(scale=1.5).to_pil()
        img_out = os.path.join(review_dir, f"page_{idx+1:02d}.png")
        img.save(img_out)
    print("All 28 pages rendered to PNG in scratch/pdf_review_master for visual inspection!")
else:
    print("PDF build failed.")
