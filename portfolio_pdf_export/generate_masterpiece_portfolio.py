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
      \fontsize{6.5pt}{7.5pt}\selectfont\bfseries\color{pmuted}%
      REZA SEPDIDE, A.Md.T. \quad\textbar\quad PELAKSANA LAPANGAN GEDUNG MADYA (BNSP 5) \quad\textbar\quad D4 MRK PNP%
    };
    \node[anchor=south east, inner sep=0pt, xshift=-10mm, yshift=4mm] at (current page.south east) {%
      \fontsize{6.5pt}{7.5pt}\selectfont\bfseries\color{pnavy}%
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
  \vspace{2.5mm}

  \noindent
  \begin{minipage}[t]{0.68\linewidth}
    \vspace{0pt}
    {\fontsize{21pt}{25pt}\selectfont\bfseries\color{pnavy}PORTOFOLIO REKAYASA TEKNIK SIPIL}\\[1.5mm]
    {\fontsize{11.5pt}{14.5pt}\selectfont\bfseries\color{pred}QUANTITY SURVEYING, ESTIMASI BIAYA \& MANAJEMEN KONSTRUKSI}\\[2mm]
    {\fontsize{8.2pt}{11pt}\selectfont\color{psteel}Kompilasi Portofolio Proyek Terverifikasi, Bukti Lisensi Negara BNSP Jenjang 5, Gambar DED AutoCAD Multi-Viewport, Dokumen RKS, Perhitungan BoQ/RAB, Kurva S, Bar Bending Schedule, dan Pengendalian Mutu Lapangan.}\\[3mm]

    \noindent\textcolor{pred}{\rule{50mm}{2pt}}\\[3mm]

    {\fontsize{12.5pt}{14.5pt}\selectfont\bfseries\color{pnavy}REZA SEPDIDE, A.Md.T.}\\[1mm]
    {\fontsize{8.5pt}{10.5pt}\selectfont\bfseries\color{pmuted}Civil Engineer \textbar\ Quantity Surveyor \textbar\ Construction Planner}\\[3mm]

    % 4 Stat Boxes
    \begin{tabularx}{\linewidth}{@{}XXXX@{}}
      \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pborder, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
        {\fontsize{13pt}{15pt}\selectfont\bfseries\color{pnavy}3.72}\\[0.5mm]
        {\fontsize{6.5pt}{7.5pt}\selectfont\bfseries\color{pred}IPK / 4.00}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\color{pmuted}D3 TEKNIK SIPIL PNP\\DENGAN PUJIAN}
      \end{tcolorbox} &
      \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pborder, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
        {\fontsize{13pt}{15pt}\selectfont\bfseries\color{pnavy}LEVEL 5}\\[0.5mm]
        {\fontsize{6.5pt}{7.5pt}\selectfont\bfseries\color{pred}SKK BNSP}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\color{pmuted}PELAKSANA LAPANGAN\\PEKERJAAN GEDUNG}
      \end{tcolorbox} &
      \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pborder, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
        {\fontsize{13pt}{15pt}\selectfont\bfseries\color{pnavy}PROYEK}\\[0.5mm]
        {\fontsize{6.5pt}{7.5pt}\selectfont\bfseries\color{pred}PENGALAMAN}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\color{pmuted}REVITALISASI, EPC\\QS, DED \& KURVA S}
      \end{tcolorbox} &
      \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pborder, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
        {\fontsize{13pt}{15pt}\selectfont\bfseries\color{pnavy}3 BAHASA}\\[0.5mm]
        {\fontsize{6.5pt}{7.5pt}\selectfont\bfseries\color{pred}TERSERTIFIKASI}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\color{pmuted}INDONESIA, JEPANG\\(SSW/JLPT), INGGRIS}
      \end{tcolorbox}
    \end{tabularx}
    \vspace{2.5mm}

    % Metadata Summary Box
    \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm]
      \begin{tabularx}{\linewidth}{@{}p{32mm} X@{}}
        {\fontsize{7.2pt}{9.2pt}\selectfont\bfseries\color{pnavy}STATUS PENDIDIKAN:} & {\fontsize{7.2pt}{9.2pt}\selectfont\color{psteel}Diploma IV (D4) Manajemen Rekayasa Konstruksi PNP (Aktif / Ongoing)} \\[1mm]
        {\fontsize{7.2pt}{9.2pt}\selectfont\bfseries\color{pnavy}LULUSAN AKADEMIK:} & {\fontsize{7.2pt}{9.2pt}\selectfont\color{psteel}D3 Teknik Sipil Politeknik Negeri Padang (Lulus Predikat Dengan Pujian, IPK 3.72)} \\[1mm]
        {\fontsize{7.2pt}{9.2pt}\selectfont\bfseries\color{pnavy}LISENSI PROFESI:} & {\fontsize{7.2pt}{9.2pt}\selectfont\color{psteel}BNSP Jenjang 5 Balai Jasa Konstruksi Wilayah I Banda Aceh, Kementerian PUPR} \\[1mm]
        {\fontsize{7.2pt}{9.2pt}\selectfont\bfseries\color{pnavy}EMAIL \& KONTAK:} & {\fontsize{7.2pt}{9.2pt}\selectfont\fontfamily{cmtt}\selectfont rezasepdide@gmail.com \textbar\ +62 896-4459-0915 \textbar\ linkedin.com/in/rezasepdide}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{2mm}

    % Bottom Verification Box (Eliminating bottom blank space)
    \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=3mm, right=3mm, top=2mm, bottom=2mm]
      {\fontsize{6.8pt}{8pt}\selectfont\bfseries\color{pnavy}INTEGRITAS DOSIR \& BUKTI VERIFIKASI DIGITAL:}\\[0.5mm]
      {\fontsize{6.2pt}{7.5pt}\selectfont\color{psteel}Seluruh portofolio ini menyajikan dokumentasi rekayasa otentik mencakup gambar DED AutoCAD resmi, perhitungan backup volume \& BoQ/RAB berdasarkan AHSP PUPR, simulasi Kurva S \& MS Project, Bar Bending Schedule (BBS), serta lembar sertifikasi negara dan bahasa internasional.}
    \end{tcolorbox}
  \end{minipage}%
  \hfill
  \begin{minipage}[t]{0.30\linewidth}
    \vspace{0pt}
    \begin{tcolorbox}[sharp corners, boxrule=1pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2.5mm, bottom=2.5mm]
      \centering
      \includegraphics[width=\linewidth,height=94mm,keepaspectratio]{{{""" + p("FOTO DIRI/Professional-photo.jpeg") + r"""}}}\\[2mm]
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
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3.5mm, right=3.5mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ RINGKASAN EKSEKUTIF PROFESIONAL\ \ }\\[1.5mm]
    {\fontsize{7.2pt}{9.6pt}\selectfont\color{psteel}Lulusan Diploma III Teknik Sipil Politeknik Negeri Padang dengan predikat Dengan Pujian (\textit{With Honors}, IPK 3.72/4.00) dan saat ini melanjutkan Diploma IV (D4) Manajemen Rekayasa Konstruksi. Pemegang lisensi resmi negara BNSP KKNI Jenjang 5 Pelaksana Lapangan Pekerjaan Gedung Madya.}\\[1.5mm]
    {\fontsize{7.2pt}{9.6pt}\selectfont\color{psteel}Berpengalaman praktis dalam perhitungan Quantity Surveying (BoQ/RAB, AHSP), Bar Bending Schedule (BBS), penjadwalan Kurva S / MS Project, pemodelan AutoCAD DED Multi-Viewport layout ke PDF, Autodesk Revit BIM parametrik, hingga analisis struktur SAP2000. Tersertifikasi dwibahasa Jepang (SSW JAC, JFT-Basic 250, JLPT N4 165) dan Inggris (TOEIC 640).}\\[2mm]

    \noindent\textcolor{pborder}{\rule{\linewidth}{0.5pt}}\\[1.5mm]

    \colorbox{pnavy}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ RIWAYAT PENDIDIKAN FORMAL\ \ }\\[1.5mm]

    {\fontsize{7.8pt}{9.2pt}\selectfont\bfseries\color{pnavy}1. Diploma IV (D4) Manajemen Rekayasa Konstruksi} \hfill {\fontsize{6.8pt}{8pt}\selectfont\color{pred}\textbf{Aktif / Ongoing}}\\[0.3mm]
    {\fontsize{6.8pt}{8pt}\selectfont\color{psteel}Politeknik Negeri Padang (Agustus 2026 --- Sekarang). Fokus: Manajemen proyek terpadu, pengendalian biaya/mutu, hukum kontrak, dan integrasi digital BIM.}\\[1.2mm]

    {\fontsize{7.8pt}{9.2pt}\selectfont\bfseries\color{pnavy}2. Diploma III (D3) Teknik Sipil} \hfill {\fontsize{6.8pt}{8pt}\selectfont\color{pred}\textbf{Dengan Pujian (IPK 3.72)}}\\[0.3mm]
    {\fontsize{6.8pt}{8pt}\selectfont\color{psteel}Politeknik Negeri Padang (2022 --- 2025). Tugas Akhir: Estimasi RAB \& Time Schedule Gedung DPRD Pasaman.}\\[1.2mm]

    {\fontsize{7.8pt}{9.2pt}\selectfont\bfseries\color{pnavy}3. SMA Negeri 1 Padang} \hfill {\fontsize{6.8pt}{8pt}\selectfont\color{pmuted}Jurusan MIPA (2019 --- 2022)}
  \end{tcolorbox}
  \vspace{2mm}

  % Bottom Card
  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=3.5mm, right=3.5mm, top=2.5mm, bottom=2.5mm, height=52mm]
    {\fontsize{7.2pt}{8.5pt}\selectfont\bfseries\color{pnavy}KOMPETENSI INTI REKAYASA \& CAPAIAN TUGAS AKHIR:}\\[1.5mm]
    {\fontsize{6.8pt}{8.8pt}\selectfont\color{psteel}
    $\bullet$ \textbf{Quantity Take-Off Presisi:} Mampu menghitung volume pekerjaan tanah, pondasi, struktur beton bertulang, hingga arsitektur dan MEP dengan akurasi matematis tinggi.\\
    $\bullet$ \textbf{Pengendalian Jadwal \& Biaya:} Memetakan WBS ke diagram lintasan kritis (CPM) dan mendistribusikan bobot fisik ke grafik Kurva S untuk simulasi pengendalian deviasi.\\
    $\bullet$ \textbf{Kepatuhan Spesifikasi Teknis:} Berpengalaman merumuskan RKS, metode pelaksanaan kerja aman, dan checklist uji mutu material lapangan.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.40\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=3.5mm, right=3.5mm, top=2.5mm, bottom=2.5mm, height=154mm]
    \colorbox{pnavy}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ 4 PILAR PRINSIP REKAYASA \& ETIKA KERJA\ \ }\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      {\fontsize{7.2pt}{8.5pt}\selectfont\bfseries\color{pred}01. INTEGRITAS STRUKTURAL \& MUTU}\\[0.8mm]
      {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}Mengutamakan kepatuhan spesifikasi DED dan RKS teknis. Pengujian slump test beton segar (SNI 1972:2008), uji kuat tekan silinder $f'_c$ 25--30 MPa, toleransi selimut beton, dan pembesian tanpa kompromi.}
    \end{tcolorbox}
    \vspace{1.5mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      {\fontsize{7.2pt}{8.5pt}\selectfont\bfseries\color{pred}02. AKURASI KUANTITAS \& BBS}\\[0.8mm]
      {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}Penyusunan Bar Bending Schedule (BBS) teroptimasi guna meminimalkan sisa potongan besi (\textit{scrap waste} $< 3\%$). Menghasilkan BoQ/RAB yang transparan, presisi, dan akuntabel sesuai AHSP PUPR.}
    \end{tcolorbox}
    \vspace{1.5mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      {\fontsize{7.2pt}{8.5pt}\selectfont\bfseries\color{pred}03. TERTIB ADMINISTRASI \& CCO}\\[0.8mm]
      {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}Setiap progress billing wajib didukung perhitungan backup volume terverifikasi, justifikasi teknis addendum Contract Change Order (CCO) yang akurat, pengarsipan Berita Acara (BA), dan log opname fisik.}
    \end{tcolorbox}
    \vspace{1.5mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      {\fontsize{7.2pt}{8.5pt}\selectfont\bfseries\color{pred}04. STANDAR GLOBAL \& DEDIKASI}\\[0.8mm]
      {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}Komitmen meningkatkan keahlian melalui kelanjutan D4 MRK, adopsi Revit BIM parametrik, pemodelan SAP2000, serta sertifikasi resmi standar Jepang (SSW, JFT-Basic, JLPT) dan Inggris (TOEIC).}
    \end{tcolorbox}
  \end{tcolorbox}
\end{minipage}

\makefooter{PROFIL PROFESIONAL \& PENDIDIKAN}{02}
""")

# ==============================================================================
# HALAMAN 3: MATRIKS KEAHLIAN & SOFTWARE (UNIFIED 2-BOX ARCHITECTURE)
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 3: MATRIKS KEAHLIAN TEKNIS & SOFTWARE ---
\makeheader{// KOMPETENSI TEKNIK // ALAT BANTU REKAYASA}{MATRIKS KEAHLIAN TEKNIS, PERANGKAT LUNAK \& KEMAMPUAN BAHASA}{STANDAR KKNI JENJANG 5 \textbar\ BIM, CAD, QS, QC \& BILINGUAL}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ KEAHLIAN REKAYASA TEKNIS\ \ }\\[1.5mm]

    {\fontsize{6.7pt}{8.4pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3mm, itemsep=0.6mm, topsep=0mm]
      \item \textbf{Quantity Take-Off (QTO) \& RAB:} Perhitungan kuantitas volume DED dan RAB sesuai AHSP PUPR.
      \item \textbf{Penyusunan RKS Teknis:} Perumusan Rencana Kerja dan Syarat mutu material dan metode kerja.
      \item \textbf{Penjadwalan Kurva S:} Time Schedule, WBS, distribusi bobot, dan Kurva S deviasi.
      \item \textbf{Bar Bending Schedule (BBS):} Optimasi pemotongan penulangan beton guna scrap waste $< 3\%$.
      \item \textbf{DED Layout AutoCAD:} Penggambaran denah, tampak, potongan multi-viewport ke PDF.
      \item \textbf{Pengendalian Mutu (QC):} Slump test cor, checklist pembesian, dan punch list serah terima.
      \item \textbf{Mutual Check \& CCO:} Perhitungan MC-100 dan addendum Contract Change Order.
    \end{itemize}
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}METODOLOGI \& STANDAR MUTU:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Verifikasi elevasi, dimensi struktural, pembesian, dan mutu beton sesuai spesifikasi teknis SNI.\\
    $\bullet$ Pemeriksaan ketebalan selimut beton, spasi sengkang, dan pengikatan kawat bendrat sebelum izin cor.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pnavy}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PENGUASAAN SOFTWARE REKAYASA\ \ }\\[1.5mm]

    {\fontsize{6.7pt}{8.4pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3mm, itemsep=0.6mm, topsep=0mm]
      \item \textbf{AutoCAD (2D DED):} Mahir. Penggambaran 2D, konfigurasi paper layout viewports, etiket skala ke PDF.
      \item \textbf{Microsoft Excel:} Mahir. Formula matematis backup volume, matriks BoQ, pembobotan Kurva S.
      \item \textbf{Microsoft Project:} Menengah. WBS, lintasan kritis CPM, baseline durasi, dan Kurva S.
      \item \textbf{SAP2000:} Menengah. Portal struktur 3D gedung beton bertulang, beban gempa SNI dinamik.
      \item \textbf{Autodesk Revit (BIM):} Menengah. Pemodelan 3D parametrik kolom, balok, pelat, dan arsitektur.
      \item \textbf{SketchUp:} Menengah. Visualisasi 3D metode kerja untuk materi presentasi tender.
    \end{itemize}
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}DIGITALISASI \& INTEGRASI BIM:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Integrasi pemodelan 3D dan kalkulasi kuantitas matematis guna meminimalkan kesalahan fabrikasi.\\
    $\bullet$ Penerapan teknologi BIM Level 2 untuk koordinasi gambar kerja dan deteksi benturan antar elemen.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ KEMAMPUAN KOMUNIKASI BAHASA\ \ }\\[1.5mm]

    {\fontsize{6.7pt}{8.4pt}\selectfont\color{psteel}
    $\bullet$ \textbf{Bahasa Indonesia:} Penutur asli (Native). Korespondensi teknis resmi, Berita Acara, dan laporan proyek.\\
    $\bullet$ \textbf{Bahasa Jepang:}\\
    -- \textbf{SSW Konstruksi (JAC):} Lulus ujian kerja Jepang.\\
    -- \textbf{JFT-Basic:} Skor 250 (The Japan Foundation).\\
    -- \textbf{JLPT N4:} Skor 165 (The Japan Foundation).\\
    $\bullet$ \textbf{Bahasa Inggris:}\\
    -- \textbf{TOEIC Prediction Test:} Skor 640 (Listening: 400, Reading: 240) UPT Bahasa PNP.\\
    -- Memahami standar internasional (ASTM, ACI, BS).
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}STANDAR KERJA MULTINASIONAL:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Siap bertugas pada tim proyek Joint Venture kontraktor Jepang atau manajemen multinasional.\\
    $\bullet$ Penguasaan terminologi teknis konstruksi Jepang dan etika keselamatan Kiken Yochi (KYT).
    }
  \end{tcolorbox}
\end{minipage}

\makefooter{MATRIKS KEAHLIAN \& PERANGKAT LUNAK}{03}
""")

# ==============================================================================
# HALAMAN 4: SKK BNSP JENJANG 5 (HALAMAN DEPAN)
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 4: SKK BNSP HALAMAN DEPAN ---
\makeheader{// LISENSI NEGARA RESMI // KKNI JENJANG 5}{SERTIFIKAT KOMPETENSI KERJA (SKK) PELAKSANA LAPANGAN GEDUNG MADYA}{BADAN NASIONAL SERTIFIKASI PROFESI (BNSP) \textbar\ KEMENTERIAN PUPR}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ LISENSI PROFESI BNSP JENJANG 5\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Pelaksana Lapangan Gedung Madya}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Kualifikasi: Teknisi / Analis (Jenjang 5)}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Badan Penerbit:} & {\fontsize{6.8pt}{8pt}\selectfont BNSP RI} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Penyelenggara:} & {\fontsize{6.8pt}{8pt}\selectfont BJKW I Banda Aceh (PUPR)} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries LSP:} & {\fontsize{6.8pt}{8pt}\selectfont LSP Tenaga Konstruksi} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries No. Registrasi:} & {\fontsize{6.8pt}{8pt}\selectfont\fontfamily{cmtt}\selectfont F7472118} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Masa Berlaku:} & {\fontsize{6.8pt}{8pt}\selectfont Hingga Juli 2030 (5 Thn)}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}DESKRIPSI WEWENANG TEKNIS}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Memvalidasi kewenangan memimpin dan mengawasi pekerjaan struktur gedung bertingkat, kepatuhan gambar DED, RKS, SMKK, dan mutu cor.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}DASAR HUKUM \& KUALIFIKASI NEGARA:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Diterbitkan berdasarkan UU No. 2/2017 tentang Jasa Konstruksi.\\
    $\bullet$ Menjadi syarat legal formal penanggung jawab teknis pekerjaan gedung bertingkat pada tender pemerintah maupun swasta.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    \centering
    \includegraphics[width=0.98\linewidth,height=142mm,page=1,keepaspectratio]{{{""" + p("Lisensi Sertifikasi/Sertifikat SKK REZA SEPDIDE hide.pdf") + r"""}}}\\[1mm]
    {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}\textbf{Dokumen Asli:} Sertifikat Kompetensi Kerja (SKK) BNSP Jenjang 5 --- Lembar Depan}
  \end{tcolorbox}
\end{minipage}

\makefooter{LISENSI NEGARA BNSP JENJANG 5}{04}
""")

# ==============================================================================
# HALAMAN 5: SKK BNSP JENJANG 5 (HALAMAN BELAKANG / UNIT KOMPETENSI)
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 5: SKK BNSP UNIT KOMPETENSI BELAKANG ---
\makeheader{// LISENSI NEGARA RESMI // DAFTAR UNIT KOMPETENSI}{UNIT KOMPETENSI KERJA PELAKSANA LAPANGAN GEDUNG MADYA}{STANDAR KOMPETENSI KERJA NASIONAL INDONESIA (SKKNI)}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ STANDAR UNIT KOMPETENSI SKKNI\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Daftar Unit Kompetensi}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Pelaksana Lapangan Gedung Madya}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Skema Uji:} & {\fontsize{6.8pt}{8pt}\selectfont Pelaksana Gedung Madya} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Jenjang KKNI:} & {\fontsize{6.8pt}{8pt}\selectfont Jenjang 5 (Teknisi/Analis)} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Status Uji:} & {\fontsize{6.8pt}{8pt}\selectfont\bfseries\color{pred} Seluruh Unit Kompeten (K)} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries TUK:} & {\fontsize{6.8pt}{8pt}\selectfont BJKW I Banda Aceh}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}CAKUPAN UNIT KOMPETENSI}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Penguasaan K3, pekerjaan tanah/pondasi, struktur beton bertulang (pembesian, bekisting, cor), dinding/finishing, serta administrasi laporan.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}AKUNTABILITAS UJI ASESOR BNSP:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Seluruh 10 unit kompetensi telah diuji melalui observasi praktik lapangan, tes tulis, dan wawancara portofolio oleh Asesor BNSP.\\
    $\bullet$ Membuktikan kesiapan memimpin tim lapangan secara mandiri.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    \centering
    \includegraphics[width=0.98\linewidth,height=142mm,page=2,keepaspectratio]{{{""" + p("Lisensi Sertifikasi/Sertifikat SKK REZA SEPDIDE hide.pdf") + r"""}}}\\[1mm]
    {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}\textbf{Dokumen Asli:} Sertifikat Kompetensi Kerja (SKK) BNSP Jenjang 5 --- Lembar Unit Kompetensi}
  \end{tcolorbox}
\end{minipage}

\makefooter{DAFTAR UNIT KOMPETENSI SKK BNSP}{05}
""")

# ==============================================================================
# HALAMAN 6: SERTIFIKAT REVIT ARSISTEN ACADEMY
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 6: SERTIFIKAT REVIT ---
\makeheader{// PELATIHAN PEMODELAN DIGITAL // BIM}{SERTIFIKAT KELULUSAN REVIT MASTERCLASS FOR BEGINNERS}{ARSISTEN ACADEMY \textbar\ BUILDING INFORMATION MODELING (BIM)}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PELATIHAN DIGITAL REKAYASA BIM\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Revit Masterclass}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Arsisten Academy (BIM 3D)}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Lembaga:} & {\fontsize{6.8pt}{8pt}\selectfont Arsisten Academy} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Program:} & {\fontsize{6.8pt}{8pt}\selectfont Revit Masterclass} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Status:} & {\fontsize{6.8pt}{8pt}\selectfont\bfseries\color{pred} Lulus / Completed} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Verifikasi ID:} & {\fontsize{6.8pt}{8pt}\selectfont\fontfamily{cmtt}\selectfont eYfV8Gq3oA}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}KURIKULUM \& KOMPETENSI}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Pemodelan elemen struktur (kolom, balok, pelat), arsitektur, view template, pemotongan otomatis denah-tampak, dan MTO material.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}FONDASI BIM LEVEL 2:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Menguasai alur kerja pemodelan parametrik 3D terkoordinasi.\\
    $\bullet$ Mampu mengekstraksi jadwal kuantitas material otomatis guna meminimalkan deviasi volume pada tender dan pelaksanaan.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    \centering
    \includegraphics[width=0.98\linewidth,height=142mm,page=1,keepaspectratio]{{{""" + p("Lisensi Sertifikasi/Sertifikat revit.pdf") + r"""}}}\\[1mm]
    {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}\textbf{Dokumen Asli:} Sertifikat Kelulusan Revit Masterclass for Beginners (Arsisten Academy)}
  \end{tcolorbox}
\end{minipage}

\makefooter{SERTIFIKAT REVIT BIM (ARSISTEN ACADEMY)}{06}
""")

# ==============================================================================
# HALAMAN 7: SSW JAPAN (TOKUTEI GINOU)
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 7: SSW JAPAN CIVIL ENGINEERING ---
\makeheader{// KUALIFIKASI STANDAR INTERNASIONAL // JEPANG}{SPECIFIED SKILLED WORKER (SSW) EVALUATION EXAM}{JAPAN ASSOCIATION FOR CONSTRUCTION HUMAN RESOURCES (JAC)}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ STANDAR KONSTRUKSI JEPANG\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}SSW Construction Industry}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Civil Engineering (i) (Japanese)}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Lembaga Uji:} & {\fontsize{6.8pt}{8pt}\selectfont JAC (Japan)} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Bidang:} & {\fontsize{6.8pt}{8pt}\selectfont Civil Engineering (i)} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Hasil Evaluasi:} & {\fontsize{6.8pt}{8pt}\selectfont\bfseries\color{pred} Pass / Lulus} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries No. Registrasi:} & {\fontsize{6.8pt}{8pt}\selectfont\fontfamily{cmtt}\selectfont 40563425}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}SIGNIFIKANSI KUALIFIKASI}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Ujian resmi Tenaga Kerja Terampil Tertentu (\textit{Tokutei Ginou}) di bawah pengawasan Kementerian MLIT Jepang, memvalidasi kesiapan kerja standar Jepang.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}STANDAR KERJA KONSTRUKSI JEPANG:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Pemahaman budaya keselamatan Kiken Yochi Training (KYT) dan 5S lapangan.\\
    $\bullet$ Menguasai terminologi konstruksi sipil Jepang dan kesiapan penugasan pada proyek Joint Venture Jepang.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    \centering
    \includegraphics[width=0.98\linewidth,height=142mm,page=1,keepaspectratio]{{{""" + p("Lisensi Sertifikasi/SSW CIVIL ENGINEER.pdf") + r"""}}}\\[1mm]
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
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ KEMAHIRAN BAHASA JEPANG\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}The Japan Foundation}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}JFT-Basic Skor 250 \& JLPT N4 Skor 165}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      {\fontsize{6.8pt}{8pt}\selectfont\bfseries\color{pnavy}1. JFT-BASIC (A2 STANDARD)}\\[0.3mm]
      {\fontsize{6.5pt}{7.8pt}\selectfont
      Skor: \textbf{\color{pred}250 Poin} (Standar: 200). Kompeten percakapan dan instruksi kerja kerja lapangan.
      }
    \end{tcolorbox}
    \vspace{1.2mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      {\fontsize{6.8pt}{8pt}\selectfont\bfseries\color{pnavy}2. JLPT LEVEL N4}\\[0.3mm]
      {\fontsize{6.5pt}{7.8pt}\selectfont
      Skor: \textbf{\color{pred}165 Poin} (Passing Score: 90). Hasil: \textbf{Lulus / Passed}.
      }
    \end{tcolorbox}
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}APLIKASI DWILINGUAL LAPANGAN:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Komunikasi kerja harian dengan supervisor \& engineer Jepang.\\
    $\bullet$ Mampu memahami instruksi lisan/tertulis dan membaca dokumen kerja serta gambar teknik berbahasa Jepang.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=144mm]
        \centering
        \includegraphics[width=0.96\linewidth,height=134mm,page=1,keepaspectratio]{{{""" + p("Lisensi Sertifikasi/JFT.pdf") + r"""}}}\\[1mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries Dokumen 1: Hasil Resmi JFT-Basic (Skor 250)}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=144mm]
        \centering
        \includegraphics[width=0.96\linewidth,height=134mm,page=1,keepaspectratio]{{{""" + p("Lisensi Sertifikasi/Sertifikat JLPT N4.pdf") + r"""}}}\\[1mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries Dokumen 2: Sertifikat JLPT N4 (Skor 165)}
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
% --- HALAMAN 9: SERTIFIKAT PKL MAGANG INDUSTRI ---
\makeheader{// PENGALAMAN KERJA INDUSTRI // MAGANG}{SERTIFIKAT PRAKTIK KERJA LAPANGAN (PKL) INDUSTRI}{PT SOLUSI INDUSTRI ENERGI \textbar\ PROYEK PT INDO-BHARAT RAYON PURWAKARTA}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PENGALAMAN MAGANG LAPANGAN RESMI\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}PT Solusi Industri Energi}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Proyek Waste Gas Recovery (WGR)}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Perusahaan:} & {\fontsize{6.8pt}{8pt}\selectfont PT Solusi Industri Energi} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Klien:} & {\fontsize{6.8pt}{8pt}\selectfont PT Indo-Bharat Rayon} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Lokasi:} & {\fontsize{6.8pt}{8pt}\selectfont Purwakarta, Jawa Barat} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Penilaian:} & {\fontsize{6.8pt}{8pt}\selectfont\bfseries\color{pred} Sangat Baik (A)}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}KONTRIBUSI NYATA PROYEK}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    BBS penulangan pondasi mesin, BoQ rework, uji slump test beton segar, laporan progres harian-mingguan-bulanan, dan punch list serah terima.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}PENGAKUAN KINERJA INDUSTRI:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Diberikan predikat Sangat Baik (A) atas dedikasi dan akurasi teknis dalam fabrikasi pembesian dan administrasi progress billing.\\
    $\bullet$ Terbukti mampu bekerja dalam lingkungan pabrik industri berisiko tinggi.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    \centering
    \includegraphics[width=0.98\linewidth,height=142mm,page=1,keepaspectratio]{{{""" + p("Lisensi Sertifikasi/SERTIFIKAT PKL REZA SEPDIDE.pdf") + r"""}}}\\[1mm]
    {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}\textbf{Dokumen Asli:} Sertifikat Praktik Kerja Lapangan (PKL) PT Solusi Industri Energi}
  \end{tcolorbox}
\end{minipage}

\makefooter{PENGALAMAN KERJA LAPANGAN (PKL)}{09}
""")

# ==============================================================================
# HALAMAN 10: TOEIC SCORE 640
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 10: TOEIC SCORE 640 ---
\makeheader{// KOMPETENSI BAHASA INTERNASIONAL // INGGRIS}{PREDICTION TEST SCORE FOR TOEIC TEST (SKOR: 640)}{UPT BAHASA POLITEKNIK NEGERI PADANG \textbar\ PROFESIONAL ENGLISH}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ KEMAHIRAN BAHASA INGGRIS TEKNIK\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}TOEIC Prediction Test}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Skor Total: 640 Poin}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Lembaga Uji:} & {\fontsize{6.8pt}{8pt}\selectfont UPT Bahasa PNP} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Listening:} & {\fontsize{6.8pt}{8pt}\selectfont\bfseries 400 Poin} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Reading:} & {\fontsize{6.8pt}{8pt}\selectfont\bfseries 240 Poin} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Total Score:} & {\fontsize{6.8pt}{8pt}\selectfont\bfseries\color{pred} 640 Poin}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}PEMANFAATAN PADA DUNIA REKAYASA}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Memahami manual teknis, literatur internasional, pengoperasian software berbahasa Inggris (Revit, SAP2000), dan korespondensi profesional.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}PENGUASAAN BAHASA INGGRIS TEKNIS:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Setara dengan CEFR B1/B2 Working Proficiency untuk membaca standar konstruksi internasional (ASTM, ACI, BS).\\
    $\bullet$ Mampu berkomunikasi efektif dalam tim manajemen proyek multinasional.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    \centering
    \includegraphics[width=0.98\linewidth,height=142mm,page=1,keepaspectratio]{{{""" + p("Lisensi Sertifikasi/TOEIC PNP.pdf") + r"""}}}\\[1mm]
    {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}\textbf{Dokumen Asli:} Notification Letter Prediction Test Score for TOEIC Test (UPT Bahasa PNP)}
  \end{tcolorbox}
\end{minipage}

\makefooter{HASIL PREDICTION TEST TOEIC}{10}
""")

# ==============================================================================
# HALAMAN 11: TRANSKRIP AKADEMIK D3 (IPK 3.72)
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 11: TRANSKRIP AKADEMIK D3 ---
\makeheader{// KELULUSAN DENGAN PREDIKAT DENGAN PUJIAN // IPK 3.72}{TRANSKRIP AKADEMIK RESMI DIPLOMA III TEKNIK SIPIL}{POLITEKNIK NEGERI PADANG \textbar\ PREDIKAT: DENGAN PUJIAN (WITH HONORS)}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ CAPAIAN PRESTASI AKADEMIK RESMI\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}D3 Teknik Sipil PNP}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}IPK: 3.72 dari 4.00 (Dengan Pujian)}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Institusi:} & {\fontsize{6.8pt}{8pt}\selectfont Politeknik Negeri Padang} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries IPK Kumulatif:} & {\fontsize{6.8pt}{8pt}\selectfont\bfseries\color{pred} 3.72 / 4.00} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Predikat:} & {\fontsize{6.8pt}{8pt}\selectfont\bfseries Dengan Pujian} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Beban SKS:} & {\fontsize{6.8pt}{8pt}\selectfont 112 SKS Lengkap}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}MATA KULIAH UNGGULAN}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Struktur Beton Bertulang, Estimasi Biaya/RAB, Manajemen Konstruksi \& Kurva S, Gambar Teknik CAD, Mekanika Tanah, dan Geoteknik.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}NILAI MATA KULIAH INTI REKAYASA:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Meraih nilai A pada mata kuliah kunci: Konstruksi Beton Bertulang, Rencana Anggaran Biaya, Manajemen Proyek, dan Mekanika Rekayasa.\\
    $\bullet$ Membuktikan pemahaman teoritis dan kalkulasi teknik yang solid.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=144mm]
        \centering
        \includegraphics[width=0.96\linewidth,height=134mm,page=1,keepaspectratio]{{{""" + p("Lisensi Sertifikasi/TRANSKIP NILAI REZA SEPDIDE.pdf") + r"""}}}\\[1mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries Transkrip Akademik Resmi --- Halaman 1}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=144mm]
        \centering
        \includegraphics[width=0.96\linewidth,height=134mm,page=2,keepaspectratio]{{{""" + p("Lisensi Sertifikasi/TRANSKIP NILAI REZA SEPDIDE.pdf") + r"""}}}\\[1mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries Transkrip Akademik Resmi --- Halaman 2}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{TRANSKRIP AKADEMIK D3 (IPK 3.72)}{11}
""")

# ==============================================================================
# HALAMAN 12: SDN 19 KUAMANG (1/3) - DED MULTI VIEWPORT
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 12: SDN 19 KUAMANG (1/3) ---
\makeheader{// KELOMPOK 1: PERENCANAAN \& QUANTITY SURVEYING // PROYEK 01}{PROYEK REVITALISASI FASILITAS GEDUNG SDN 19 KUAMANG}{PERENCANA TEKNIS \textbar\ PASAMAN, SUMATERA BARAT \textbar\ SEPTEMBER 2026}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PROYEK PERENCANAAN TEKNIS 01\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Revitalisasi SDN 19 Kuamang}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Perencana Teknis (Konsultan)}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Peran:} & {\fontsize{6.8pt}{8pt}\selectfont Perencana Teknis} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Lokasi:} & {\fontsize{6.8pt}{8pt}\selectfont Pasaman, Sumbar} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Waktu:} & {\fontsize{6.8pt}{8pt}\selectfont September 2026} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Output:} & {\fontsize{6.8pt}{8pt}\selectfont DED, RAB, RKS, Kurva S}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}PENERAPAN LAYOUT AUTOCAD}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Pengaturan viewport multi-skala (1:100, 1:20), etiket standar PUPR, standarisasi ketebalan garis (plot style CTB), dan penerbitan PDF tajam bebas distorsi.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}STANDAR DED MULTI-VIEWPORT:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Pemisahan Model Space 1:1 dan Paper Space berskala presisi menjamin konsistensi etiket PUPR.\\
    $\bullet$ Memastikan seluruh notasi dimensi dan ketajaman cetak PDF siap digunakan kontraktor di lapangan.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    \centering
    \includegraphics[width=0.98\linewidth,height=140mm,keepaspectratio]{{{""" + p("SDN 19 Kuamang revitalisasi proyek/MENGGUNAKAN LAYOUT AUTOCAD.png") + r"""}}}\\[1mm]
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
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ LEMBAR DED ARSITEKTUR \& STRUKTUR\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Gambar Kerja AutoCAD}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Rehabilitasi Ruang Kelas}\\[2mm]

    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Rangkaian gambar kerja DED untuk acuan fisik kontraktor di lapangan:
    \begin{itemize}[leftmargin=3mm, itemsep=0.6mm, topsep=0mm]
      \item \textbf{1. Denah Ruang:} Penataan kelas, ruang guru, ventilasi alami.
      \item \textbf{2. Tampak Bangunan:} Elevasi depan \& samping bangunan.
      \item \textbf{3. Rangka Atap:} Kuda-kuda kayu kelas II penahan beban atap.
      \item \textbf{4. Detail Plafon:} Pola rangka hollow dan instalasi sanitasi.
    \end{itemize}
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}SPESIFIKASI REHABILITASI GEDUNG:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Penggantian kuda-kuda kayu kelas II, penataan plafon gypsum hollow galvanis.\\
    $\bullet$ Perkuatan kolom praktis, peremajaan keramik lantai, dan sanitasi bersih.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
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
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ DOKUMEN TEKNIS PENDUKUNG\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}RKS, Volume \& Kurva S}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Pengendalian Biaya \& Mutu}\\[2mm]

    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Dokumen kelengkapan teknis untuk tertib mutu, biaya, dan waktu:
    \begin{itemize}[leftmargin=3mm, itemsep=0.6mm, topsep=0mm]
      \item \textbf{1. Dokumen RKS Teknis:} Syarat mutu material, tata cara pemasangan, dan standar pengujian lapangan.
      \item \textbf{2. Backup Volume Excel:} Kalkulasi matematis kuantitas pekerjaan dasar BoQ/RAB presisi.
      \item \textbf{3. Kurva S Schedule:} Pemetaan bobot fisik mingguan untuk monitoring progres lapangan.
    \end{itemize}
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}PENGENDALIAN MUTU \& BIAYA:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Integrasi spesifikasi RKS dengan kalkulasi kuantitas backup volume dan distribusi Kurva S.\\
    $\bullet$ Menjamin ketepatan mutu pelaksanaan tanpa pembengkakan anggaran biaya proyek.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    % Top Landscape: Kurva S Full Width
    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=68mm]
      \centering
      \includegraphics[width=0.98\linewidth,height=58mm,keepaspectratio]{{{""" + p("SDN 19 Kuamang revitalisasi proyek/5.png") + r"""}}}\\[0.5mm]
      {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Jadwal Kurva S \& Distribusi Bobot Pelaksanaan Mingguan (SDN 19 Kuamang)}
    \end{tcolorbox}
    \vspace{2mm}

    % Bottom 2 Columns: RKS and Backup Volume
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=74mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=64mm,keepaspectratio]{{{""" + p("SDN 19 Kuamang revitalisasi proyek/RKS.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Rencana Kerja \& Syarat Teknis (RKS)}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=74mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=64mm,keepaspectratio]{{{""" + p("SDN 19 Kuamang revitalisasi proyek/BACKUP VOLUME.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 3. Perhitungan Backup Volume Kuantitas}
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
\makeheader{// KELOMPOK 1: PERENCANAAN \& QUANTITY SURVEYING // PROYEK 02}{REVITALISASI GEDUNG SLBN 2 PARIAMAN (FASILITAS INKLUSIF)}{PERENCANA TEKNIS \textbar\ KOTA PARIAMAN, SUMATERA BARAT \textbar\ OKTOBER 2026}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PROYEK PERENCANAAN TEKNIS 02\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Revitalisasi SLBN 2 Pariaman}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Gedung Pendidikan Inklusif}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Peran:} & {\fontsize{6.8pt}{8pt}\selectfont Perencana Teknis} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Lokasi:} & {\fontsize{6.8pt}{8pt}\selectfont Kota Pariaman, Sumbar} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Fasilitas:} & {\fontsize{6.8pt}{8pt}\selectfont Belajar Ramah Difabel} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Output:} & {\fontsize{6.8pt}{8pt}\selectfont DED, CCO, Volume, RAB}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}TANTANGAN DESAIN INKLUSIF}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Ramp aksesibilitas kursi roda kemiringan aman ($< 1:12$), bukaan pintu lebar, sanitasi khusus difabel, dan layout multi-viewport AutoCAD.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}STANDAR AKSESIBILITAS DIFABEL:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Kepatuhan Permen PUPR No. 14/PRT/M/2017 tentang kemudahan bangunan gedung inklusif.\\
    $\bullet$ Ramp kursi roda bertekstur anti-slip, handrail ganda, dan pintu toilet geser ramah difabel.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    \centering
    \includegraphics[width=0.98\linewidth,height=140mm,keepaspectratio]{{{""" + p("SLBN 2 PARIAMAN Revitalisasi Proyek/LAYOUT AUTOCAD.png") + r"""}}}\\[1mm]
    {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}\textbf{Bukti Gambar Kerja:} Penggunaan Layout AutoCAD Multi-Viewport (SLBN 2 Pariaman)}
  \end{tcolorbox}
\end{minipage}

\makefooter{PERENCANAAN REVITALISASI SLBN 2 PARIAMAN (1/3)}{15}
""")

# ==============================================================================
# HALAMAN 16: SLBN 2 PARIAMAN (2/3) - DETAIL STRUKTUR (4 GAMBAR)
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 16: SLBN 2 PARIAMAN (2/3) ---
\makeheader{// KELOMPOK 1: PERENCANAAN \& QUANTITY SURVEYING // PROYEK 02}{GAMBAR KERJA DED ARSITEKTUR \& DETAIL STRUKTUR INKLUSIF}{POLITEKNIK NEGERI PADANG \textbar\ KOTA PARIAMAN, SUMATERA BARAT}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ LEMBAR DETAIL DED ARSITEKTUR \& STRUKTUR\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Gambar Kerja DED}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}SLBN 2 Pariaman}\\[2mm]

    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Rincian gambar kerja DED pelaksanaan konstruksi lapangan:
    \begin{itemize}[leftmargin=3mm, itemsep=0.6mm, topsep=0mm]
      \item \textbf{1. Denah Zonasi:} Kondisi awal \& kelas baru difabel.
      \item \textbf{2. Tampak Elevasi:} Fasad depan \& samping revitalisasi.
      \item \textbf{3. Rangka Plafon:} Pola hollow galvanis \& penutup.
      \item \textbf{4. Detail Struktur:} Kolom praktis, balok latai, sanitasi.
    \end{itemize}
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}DETAIL STRUKTUR PERKUATAN:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Detail pembesian balok latai di atas bukaan pintu difabel.\\
    $\bullet$ Kolom praktis pengaku dinding bata penahan gempa digambar dengan skala pembesaran 1:20 jelas.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("SLBN 2 PARIAMAN Revitalisasi Proyek/1.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Denah Eksisting \& Rencana Zonasi Kelas}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("SLBN 2 PARIAMAN Revitalisasi Proyek/2.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Tampak Elevasi Arsitektural}
      \end{tcolorbox}
    \end{minipage}
    \vspace{2mm}

    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("SLBN 2 PARIAMAN Revitalisasi Proyek/3.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 3. Rangka Plafon \& Pola Penutup}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("SLBN 2 PARIAMAN Revitalisasi Proyek/4.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 4. Detail Sanitasi \& Struktur Praktis}
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
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ DOKUMEN STRUKTUR \& CCO\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}CCO \& Backup Volume}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Penyesuaian Lapangan}\\[2mm]

    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Dokumen teknis pengendalian struktur dan penyesuaian rancangan awal:
    \begin{itemize}[leftmargin=3mm, itemsep=0.6mm, topsep=0mm]
      \item \textbf{1. Dokumen Addendum CCO:} Perubahan rancangan awal (\textit{Contract Change Order}) terhadap elevasi eksisting tapak.
      \item \textbf{2. Detail Pembesian:} Kolom praktis, balok latai, sloof, dan pondasi batu kali.
      \item \textbf{3. Backup Volume:} Kalkulasi rincian volume tambah kurang sebagai dasar justifikasi biaya.
    \end{itemize}
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}AKUNTABILITAS PERUBAHAN CCO:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Penyesuaian gambar dan volume akibat elevasi tapak eksisting didokumentasikan dalam berkas CCO resmi.\\
    $\bullet$ Dilengkapi justifikasi teknis dan Berita Acara Mutual Check terverifikasi.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    % Top Landscape: CCO Spreadsheet Full Width
    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=66mm]
      \centering
      \includegraphics[width=0.98\linewidth,height=56mm,keepaspectratio]{{{""" + p("SLBN 2 PARIAMAN Revitalisasi Proyek/CCO'.png") + r"""}}}\\[0.5mm]
      {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Berkas Addendum Contract Change Order (CCO) \& Rekapitulasi Perubahan Nilai Kontrak}
    \end{tcolorbox}
    \vspace{2mm}

    % Bottom 2 Columns: Structural Detail and Backup Volume
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=76mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=66mm,keepaspectratio]{{{""" + p("SLBN 2 PARIAMAN Revitalisasi Proyek/5.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Detail Struktur Beton Bertulang \& Pembesian}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=76mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=66mm,keepaspectratio]{{{""" + p("SLBN 2 PARIAMAN Revitalisasi Proyek/BACKUP VOLUME.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 3. Perhitungan Backup Volume Tambah Kurang CCO}
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
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ QUANTITY SURVEYING FREELANCE 03\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}PT Mulia Djasmine Sentosa}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Proyek PT Perfetti Van Melle}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Peran:} & {\fontsize{6.8pt}{8pt}\selectfont QS (Freelance)} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Perusahaan:} & {\fontsize{6.8pt}{8pt}\selectfont PT Mulia Djasmine} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Klien:} & {\fontsize{6.8pt}{8pt}\selectfont PT Perfetti Van Melle} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Output:} & {\fontsize{6.8pt}{8pt}\selectfont MC-100, Rekap, CCO, BBS}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}TANGGUNG JAWAB QS REALISTIS}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Perhitungan ulang volume aktual (MC-100), rekapitulasi biaya dasar klaim subkon, administrasi CCO, dan BBS pembesian terpasang.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}PERAN QS PROFESIONAL DI LAPANGAN:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Mengendalikan arus kas subkontraktor melalui opname fisik bersama main contractor.\\
    $\bullet$ Memastikan klaim pembayaran sesuai volume nyata terpasang tanpa deviasi liar.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
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
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ TUGAS AKHIR D3 TEKNIK SIPIL 04\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Pembangunan Gedung DPRD}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Kabupaten Pasaman, Sumbar}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Institusi:} & {\fontsize{6.8pt}{8pt}\selectfont Politeknik Negeri Padang} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Objek Studi:} & {\fontsize{6.8pt}{8pt}\selectfont Gedung DPRD Pasaman} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Fokus Kajian:} & {\fontsize{6.8pt}{8pt}\selectfont Estimasi RAB \& Schedule} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Alat Bantu:} & {\fontsize{6.8pt}{8pt}\selectfont MS Project \& MS Excel}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}RUANG LINGKUP PERANCANGAN}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Kuantifikasi volume struktur beton bertulang, dinding, atap, RAB berbasis AHSP PUPR, WBS \& lintasan kritis CPM MS Project, dan simulasi Kurva S.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}INTEGRASI JADWAL \& BIAYA:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Simulasi penjadwalan membuktikan keahlian memetakan dependensi aktivitas WBS.\\
    $\bullet$ Mengendalikan bobot biaya guna mencegah deviasi fisik pekerjaan struktur gedung bertingkat.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    % Top Landscape: MS Project Schedule Full Width
    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=68mm]
      \centering
      \includegraphics[width=0.98\linewidth,height=58mm,keepaspectratio]{{{""" + p("Final Project/SChedule ms project.png") + r"""}}}\\[0.5mm]
      {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Work Breakdown Structure (WBS) \& Jadwal Pelaksanaan Gantt Chart Microsoft Project}
    \end{tcolorbox}
    \vspace{2mm}

    % Bottom 2 Columns: Kurva S and RAB
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=74mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=64mm,keepaspectratio]{{{""" + p("Final Project/Kurva s.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Kurva S Distribusi Bobot Kumulatif Fisik}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=74mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=64mm,keepaspectratio]{{{""" + p("Final Project/RAB.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 3. Rekapitulasi Rencana Anggaran Biaya (RAB)}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{TUGAS AKHIR: GEDUNG DPRD PASAMAN}{19}
""")

# ==============================================================================
# HALAMAN 20: EPC WASTE GAS RECOVERY (1/3) - BBS PEMBESIAN & DOKUMENTASI
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 20: MAGANG INDUSTRI PT SOLUSI INDUSTRI ENERGI (1/3) ---
\makeheader{// KELOMPOK 2: MANAJEMEN PELAKSANAAN \& PENGAWASAN // PROYEK 05}{SUPERVISI MAGANG: PROYEK WASTE GAS RECOVERY PT INDO-BHARAT RAYON}{PT SOLUSI INDUSTRI ENERGI \textbar\ PURWAKARTA, JAWA BARAT \textbar\ AGU --- DES 2024}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PENGALAMAN MAGANG INDUSTRI 05\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Proyek Waste Gas Recovery}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}PT Indo-Bharat Rayon Purwakarta}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Kontraktor:} & {\fontsize{6.8pt}{8pt}\selectfont PT Solusi Industri Energi} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Klien:} & {\fontsize{6.8pt}{8pt}\selectfont PT Indo-Bharat Rayon} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Lokasi Proyek:} & {\fontsize{6.8pt}{8pt}\selectfont Purwakarta, Jawa Barat} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Fokus Lembar:} & {\fontsize{6.8pt}{8pt}\selectfont Bar Bending Schedule}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}PENYUSUNAN BBS PEMBESIAN}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    BBS pondasi mesin reaktor, optimasi pemotongan tulangan scrap waste $< 3\%$, pengarsipan gambar teknis, dan monitoring log harian fabrikasi pembesian.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}STANDAR PEMBESIAN INDUSTRI:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Perakitan tulangan pondasi mesin berat menuntut presisi sudut kait gempa $135^\circ$ dan panjang penyaluran SNI 2847.\\
    $\bullet$ Memastikan pengikatan kawat bendrat kokoh terhadap getaran mesin.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    % Row 1: BBS and Dokumen Foto Proyek
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Magang/BBS.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Bar Bending Schedule (BBS) Tulangan Beton}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Magang/DOKUMEN.jpeg") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Dokumentasi Tim Proyek \& Pengelolaan Berkas}
      \end{tcolorbox}
    \end{minipage}
    \vspace{2mm}

    % Row 2: Daily Log and Daily Progress
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Magang/DAILY.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 3. Form Log Harian Pekerjaan Pembesian Lapangan}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Magang/DAILY PROGGRES.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 4. Monitoring Progres Harian Fabrikasi Pembesian}
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
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PERHITUNGAN BIAYA \& PROGRES\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}QTO Rework \& Pelaporan}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Pengendalian Lapangan}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Aktivitas 1:} & {\fontsize{6.8pt}{8pt}\selectfont Kalkulasi Volume \& Rework} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Aktivitas 2:} & {\fontsize{6.8pt}{8pt}\selectfont Backup Progress Billing} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Laporan:} & {\fontsize{6.8pt}{8pt}\selectfont Harian, Mingguan, Bulanan} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Dampak:} & {\fontsize{6.8pt}{8pt}\selectfont Rekonsiliasi Biaya Akurat}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}TANGGUNG JAWAB PENGENDALIAN}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Kalkulasi volume rework, backup volume penagihan termin (progress billing), laporan kemajuan pekerjaan, dan opname bersama konsultan/klien.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}AKUNTABILITAS PELAPORAN:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Laporan harian dikompilasi berjenjang menjadi mingguan dan bulanan sebagai dokumen legal verifikasi prestasi fisik.\\
    $\bullet$ Rekonsiliasi tepat mencegah terjadinya sengketa nilai tambah-kurang.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    % Row 1: BoQ Rework and QTO Rework
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Magang/Bill of quantity rework.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Perhitungan Kuantitas \& BoQ Rework}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Magang/QTO REWORK (1).png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Lembar Kalkulasi QTO Backup Volume Rework}
      \end{tcolorbox}
    \end{minipage}
    \vspace{2mm}

    % Row 2: Weekly Report and Monthly Report
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Magang/WEEKLY REPORT.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 3. Dokumen Laporan Progres Mingguan Lapangan}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Magang/MONTHLY REPORT.png") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 4. Dokumen Laporan Bulanan (Monthly Progress Report)}
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
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PENGENDALIAN MUTU LAPANGAN\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Inspeksi QC \& Serah Terima}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Pabrik PT Indo-Bharat Rayon}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Uji Beton:} & {\fontsize{6.8pt}{8pt}\selectfont Slump Test Beton Segar} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Pembesian:} & {\fontsize{6.8pt}{8pt}\selectfont Pre-Pour Checklist Lapangan} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Pemetaan:} & {\fontsize{6.8pt}{8pt}\selectfont Mapping Work Lapangan} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Serah Terima:} & {\fontsize{6.8pt}{8pt}\selectfont Daftar Catatan Punch List}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}AKTIVITAS QC NYATA}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Pengujian Slump Test pada setiap truk mixer, inspeksi pembesian, selimut beton, bekisting pre-pour, pemetaan area, dan verifikasi punch list.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}INTEGRITAS QUALITY CONTROL (QC):}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Tidak ada pengecoran dilakukan sebelum pengujian slump lolos toleransi ($12 \pm 2$ cm).\\
    $\bullet$ Checklist pembesian dan kebersihan bekisting wajib ditandatangani QC sebelum batching dibuka.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
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
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PROGRAM REVITALISASI KEMENDIKDASMEN\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Fasilitator Teknis Lapangan}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Kemendikdasmen RI}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Instansi:} & {\fontsize{6.8pt}{8pt}\selectfont Kemendikdasmen RI} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Penugasan:} & {\fontsize{6.8pt}{8pt}\selectfont Fasilitator Teknis SD} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Periode:} & {\fontsize{6.8pt}{8pt}\selectfont Juni --- Des 2025} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Wilayah:} & {\fontsize{6.8pt}{8pt}\selectfont SD Penerima Bantuan}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}TANGGUNG JAWAB NYATA}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Reviu kelayakan teknis DED, RAB, RKS penerima bantuan, monitoring berkala progres fisik, verifikasi berkas pencairan termin, dan bimtek swakelola.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}PENGAWALAN PROGRAM STRATEGIS:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Menjamin penggunaan dana bantuan pemerintah tepat sasaran, tepat mutu, dan tepat waktu.\\
    $\bullet$ Memastikan tertib Berita Acara (BA) untuk akuntabilitas audit keuangan negara.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
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

\makefooter{FASILITATOR BANTUAN REVITALISASI KEMENDIKDASMEN}{23}
""")

# ==============================================================================
# HALAMAN 24: REVIT BIM MODELING
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 24: AUTODESK REVIT BIM MODELING ---
\makeheader{// KELOMPOK 3: PEMODELAN DIGITAL \& RISET REKAYASA // PROYEK 07}{PEMODELAN ELEMEN STRUKTUR \& ARSITEKTUR AUTODESK REVIT}{ARSISTEN ACADEMY \textbar\ PRAKTIK PEMODELAN DIGITAL 3D PARAMETRIK}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PRAKTIK PEMODELAN REVIT BIM 07\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Pemodelan Digital 3D}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Revit Masterclass Academy}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Software:} & {\fontsize{6.8pt}{8pt}\selectfont Autodesk Revit} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Pelatihan:} & {\fontsize{6.8pt}{8pt}\selectfont Revit Masterclass} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Lembaga:} & {\fontsize{6.8pt}{8pt}\selectfont Arsisten Academy} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Objek:} & {\fontsize{6.8pt}{8pt}\selectfont Struktur \& Arsitektur}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}DESKRIPSI PROSES \& HASIL}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Pemodelan 3D komponen struktural (kolom, balok, pelat) dan arsitektural, re-modeling dari DED, view template terpadu, dan ekstraksi jadwal kuantitas material.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}PRINSIP DIGITALISASI BIM 3D:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Pemahaman keterkaitan data parametrik 3D dengan penjadwalan dan estimasi kuantitas.\\
    $\bullet$ Mampu menyusun denah, tampak, potongan secara terintegrasi otomatis.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
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
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ ANALISIS REKAYASA STRUKTUR 08\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Pemodelan SAP2000}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Gedung Bertingkat Beton}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Software:} & {\fontsize{6.8pt}{8pt}\selectfont CSI SAP2000} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Program:} & {\fontsize{6.8pt}{8pt}\selectfont Pra-Proyek Gedung} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Institusi:} & {\fontsize{6.8pt}{8pt}\selectfont Politeknik Negeri Padang} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Tipe Analisis:} & {\fontsize{6.8pt}{8pt}\selectfont Gaya Dalam \& Gempa SNI}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}LINGKUP ANALISIS REKAYASA}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Geometri 3D portal beton, input beban mati (DL), beban hidup (LL), respons spektrum gempa SNI 1726, diagram momen BMD, gaya geser SFD, dan gaya aksial.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}STANDAR PERANCANGAN SEISMIK:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Analisis kapasitas struktur beton bertulang terhadap gempa sesuai SNI 1726:2019.\\
    $\bullet$ Menerapkan kombinasi pembebanan 1.2D + 1.6L + 1.0E sistem SRPMK penahan lateral gempa.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
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
% --- HALAMAN 26: KOMPETISI TENDER NASIONAL UNS ---
\makeheader{// KELOMPOK 3: PEMODELAN DIGITAL \& RISET REKAYASA // PROYEK 09}{KOMPETISI TENDER NASIONAL FONDASI DAYS 2025}{UNIVERSITAS SEBELAS MARET (UNS) \textbar\ TIM JAYA JAYA TEAM}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ KOMPETISI TENDER NASIONAL 09\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Fondasi Days 2025}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Universitas Sebelas Maret (UNS)}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Penyelenggara:} & {\fontsize{6.8pt}{8pt}\selectfont Univ. Sebelas Maret} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Tim Delegasi:} & {\fontsize{6.8pt}{8pt}\selectfont Jaya Jaya Team (PNP)} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Bidang Lomba:} & {\fontsize{6.8pt}{8pt}\selectfont Estimasi Biaya \& Tender} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Output:} & {\fontsize{6.8pt}{8pt}\selectfont Penawaran, RAB, Kurva S}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}KONTRIBUSI NYATA TIM}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Dokumen teknis tender gedung 4 lantai FKIP UNS, perhitungan volume \& RAB kompetitif, 3D SketchUp metode pelaksanaan, Kurva S, dan materi paparan tender.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}STRATEGI PENAWARAN TENDER:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Penyusunan penawaran kompetitif melalui efisiensi metode kerja dan kepatuhan administrasi lelang.\\
    $\bullet$ Optimasi jadwal lintasan kritis guna menekan biaya overhead kontraktor.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Tender universitas sebelas maret/POSTER JAYA JAYA TEAM.jpg") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Poster Teknis Jaya-Jaya Team}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=71mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=60mm,keepaspectratio]{{{""" + p("Tender universitas sebelas maret/RENDER UNS 2.jpg") + r"""}}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Visualisasi 3D Rancang Bangun Tahapan Kerja}
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
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ KARYA TULIS ILMIAH REKAYASA 10\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Analisis Biaya Scaffolding}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Skema Pembelian vs Sewa}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Program:} & {\fontsize{6.8pt}{8pt}\selectfont PKM-AI Dikti} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Judul:} & {\fontsize{6.8pt}{8pt}\selectfont Biaya Scaffolding WGR} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Objek:} & {\fontsize{6.8pt}{8pt}\selectfont PT IBR Purwakarta} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Metodologi:} & {\fontsize{6.8pt}{8pt}\selectfont Komparasi Capex vs Opex}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}KESIMPULAN STUDI OBJEKTIF}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Mengevaluasi efisiensi biaya antara skema pembelian (\textit{purchasing}) dan skema penyewaan (\textit{rental}) scaffolding proyek industri berat berdasarkan variabel durasi.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}IMPLIKASI MANAJERIAL BIAYA:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Titik impas (Break-Even Point) tercapai pada durasi kritis $\approx$ 1,75 bulan pemakaian.\\
    $\bullet$ Pada proyek berdurasi $> 2$ bulan, skema pembelian menghemat biaya ratusan juta rupiah dibanding sewa.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    % Top Box: Abstract Screenshot
    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm, height=76mm]
      \centering
      \includegraphics[width=0.98\linewidth,height=66mm,keepaspectratio]{{{""" + p("ARTIKEL ILMIAH/Screenshot 2026-10-29 120442.png") + r"""}}}\\[0.5mm]
      {\fontsize{6pt}{7pt}\selectfont\bfseries Bukti Naskah Artikel Ilmiah: Analisa Biaya Scaffolding pada Proyek Waste Gas Recovery (PKM-AI)}
    \end{tcolorbox}
    \vspace{2mm}

    % Bottom Box: Comparative Economic Engineering Card
    \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=white, left=3mm, right=3mm, top=2mm, bottom=2mm, height=70mm]
      \colorbox{pred}{\fontsize{6.5pt}{7.5pt}\selectfont\bfseries\color{white}\ \ HASIL KOMPARASI EKONOMI REKAYASA (STUDI KASUS PROYEK IBR)\ \ }\\[1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{38mm} X@{}}
        {\fontsize{6.8pt}{8.2pt}\selectfont\bfseries Skema Pembelian (Capex):} & {\fontsize{6.8pt}{8.2pt}\selectfont Total investasi Rp 1.194.173.631,- (Aset dimiliki penuh, terdapat nilai sisa / residu pasca proyek).} \\[1.2mm]
        {\fontsize{6.8pt}{8.2pt}\selectfont\bfseries Skema Penyewaan (Opex):} & {\fontsize{6.8pt}{8.2pt}\selectfont Biaya sewa berjalan Rp 682.719.175,- per periode operasional tanpa kepemilikan aset.} \\[1.2mm]
        {\fontsize{6.8pt}{8.2pt}\selectfont\bfseries Titik Impas (Break-Even):} & {\fontsize{6.8pt}{8.2pt}\selectfont\bfseries\color{pred} Durasi Kritis: $\approx$ 1,75 Bulan Pemakaian} \\[1.2mm]
        {\fontsize{6.8pt}{8.2pt}\selectfont\bfseries Kesimpulan \& Rekomendasi:} & {\fontsize{6.8pt}{8.2pt}\selectfont Pada proyek berdurasi lebih dari 2 bulan, skema pembelian terbukti \textbf{jauh lebih efisien \& hemat ratusan juta rupiah} dibanding sewa berkala.}
      \end{tabularx}
    \end{tcolorbox}
  \end{tcolorbox}
\end{minipage}

\makefooter{KARYA ILMIAH ANALISIS BIAYA SCAFFOLDING}{27}
""")

# ==============================================================================
# HALAMAN 28: LEMBAR PENUTUP & SALURAN KOMUNIKASI (UNIFIED 2-BOX ARCHITECTURE)
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 28: LEMBAR PENUTUP & KONTAK ---
\makeheader{// LEMBAR PENUTUP // INTEGRITAS DATA}{PERNYATAAN KEABSAHAN DATA \& SALURAN KOMUNIKASI PROFESIONAL}{REZA SEPDIDE, A.Md.T. \textbar\ PELAKSANA LAPANGAN GEDUNG MADYA BNSP JENJANG 5}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3.5mm, right=3.5mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PERNYATAAN KEOTENTIKAN DATA\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Pernyataan Resmi}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Integritas \& Akuntabilitas Rekayasa}\\[2mm]

    {\fontsize{6.7pt}{8.6pt}\selectfont\color{psteel}
    Dengan ini saya menyatakan bahwa seluruh informasi kualifikasi, riwayat pendidikan, bukti sertifikat negara BNSP, dokumen gambar DED AutoCAD, dokumen RKS, perhitungan kuantitas volume, jadwal Kurva S, dan dokumentasi lapangan yang tersaji adalah \textbf{otentik, sah, dan dapat dipertanggungjawabkan keabsahannya}.\\[2mm]

    Padang, Sumatera Barat, 2026\\[1mm]
    \textbf{\color{pnavy}REZA SEPDIDE, A.Md.T.}\\
    {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}Pelaksana Lapangan Gedung Madya (BNSP Jenjang 5)}
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}KOMITMEN PROFESIONAL:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Seluruh dokumen pendukung, ijazah, transkrip, SKK BNSP, dan sertifikat bahasa siap diverifikasi keabsahannya secara fisik.\\
    $\bullet$ Menjunjung tinggi kode etik profesi insinyur dan integritas data konstruksi.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3.5mm, right=3.5mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pnavy}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ SALURAN KOMUNIKASI LANGSUNG\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Kontak Resmi Reza}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Saluran Komunikasi Langsung}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      {\fontsize{6.8pt}{8pt}\selectfont\bfseries\color{pnavy}EMAIL:}\\[0.2mm]
      {\fontsize{7.2pt}{9pt}\selectfont\fontfamily{cmtt}\selectfont rezasepdide@gmail.com}\\[1.2mm]

      {\fontsize{6.8pt}{8pt}\selectfont\bfseries\color{pnavy}WHATSAPP / TELEPON:}\\[0.2mm]
      {\fontsize{7.2pt}{9pt}\selectfont\fontfamily{cmtt}\selectfont +62 896-4459-0915}\\[1.2mm]

      {\fontsize{6.8pt}{8pt}\selectfont\bfseries\color{pnavy}LINKEDIN:}\\[0.2mm]
      {\fontsize{7pt}{8.5pt}\selectfont\fontfamily{cmtt}\selectfont linkedin.com/in/rezasepdide}\\[1.2mm]

      {\fontsize{6.8pt}{8pt}\selectfont\bfseries\color{pnavy}DOMISILI:}\\[0.2mm]
      {\fontsize{7pt}{8.5pt}\selectfont Padang, Sumatera Barat, Indonesia}
    \end{tcolorbox}
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}KESIAPAN MOBILISASI:}\\[1mm]
    {\fontsize{6.3pt}{7.8pt}\selectfont\color{psteel}
    Siap penempatan kerja penuh (\textit{full-time placement}) di seluruh wilayah Indonesia maupun penugasan internasional (Jepang / Asia).\\[1.5mm]
    \textbf{Berkas Siap Kirim:} CV, Portofolio DED PDF, Ijazah D3, SKK BNSP, SSW Jepang, JLPT, TOEIC.
    }
    \vspace{1mm}
    \begin{tcolorbox}[sharp corners, boxrule=0.4pt, colframe=pred, colback=predlight, left=1mm, right=1mm, top=1mm, bottom=1mm]
      \centering{\fontsize{6pt}{7pt}\selectfont\bfseries\color{pred}Status: TERBUKA UNTUK PENUGASAN PROYEK}
    \end{tcolorbox}
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=154mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ IKHTISAR KUALIFIKASI\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Spesialisasi Rekayasa}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pmuted}Quantity Surveyor \& Pelaksana Gedung}\\[2.5mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2mm, right=2mm, top=1.8mm, bottom=1.8mm]
      {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}1. Quantity Surveying \& Estimasi}\\[0.3mm]
      {\fontsize{6.3pt}{7.8pt}\selectfont\color{psteel}QTO presisi, BoQ, RAB AHSP PUPR, BBS pembesian \& pengendalian deviasi biaya CCO.}
    \end{tcolorbox}
    \vspace{1.5mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2mm, right=2mm, top=1.8mm, bottom=1.8mm]
      {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}2. Pengawasan Lapangan \& K3}\\[0.3mm]
      {\fontsize{6.3pt}{7.8pt}\selectfont\color{psteel}Lisensi Pelaksana Lapangan Gedung Madya BNSP KKNI Jenjang 5, SMKK \& QC mutu beton.}
    \end{tcolorbox}
    \vspace{1.5mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2mm, right=2mm, top=1.8mm, bottom=1.8mm]
      {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}3. Digital BIM \& CAD Modeler}\\[0.3mm]
      {\fontsize{6.3pt}{7.8pt}\selectfont\color{psteel}Revit Masterclass Arsisten Academy, AutoCAD DED Multi-Viewport \& Analisis SAP2000.}
    \end{tcolorbox}
    \vspace{1.5mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2mm, right=2mm, top=1.8mm, bottom=1.8mm]
      {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}4. Standar Bilingual Internasional}\\[0.3mm]
      {\fontsize{6.3pt}{7.8pt}\selectfont\color{psteel}Jepang (SSW JAC, JFT-Basic 250, JLPT N4 165) \& Inggris (TOEIC Prediction 640).}
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
