import os
import subprocess
import shutil
import pypdfium2 as pdfium
from pypdf import PdfReader
from PIL import Image
import numpy as np

# Sourcing knowledge directly from Knowledge_Portofolio
base_dir = "D:/whateverapp/laragon/www/ParkojiXn/Knowledge_Portofolio"
export_dir = "D:/whateverapp/laragon/www/ParkojiXn/portfolio_pdf_export"
tex_path = os.path.join(export_dir, "portofolio_reza_sepdide_en.tex").replace("\\", "/")
pdf_path = os.path.join(export_dir, "Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf").replace("\\", "/")

def p(rel):
    full = os.path.join(base_dir, rel).replace("\\", "/")
    return full

def export_p(rel):
    full = os.path.join(export_dir, rel).replace("\\", "/")
    return full

def crop_im(im, thresh=240, pad=10):
    im_rgb = im.convert("RGB")
    arr = np.array(im_rgb)
    mask = np.any(arr < thresh, axis=2)
    if not np.any(mask):
        return im
    rmin, rmax = np.where(np.any(mask, axis=1))[0][[0, -1]]
    cmin, cmax = np.where(np.any(mask, axis=0))[0][[0, -1]]
    w, h = im.size
    rmin = max(0, rmin - pad)
    rmax = min(h, rmax + pad)
    cmin = max(0, cmin - pad)
    cmax = min(w, cmax + pad)
    return im.crop((cmin, rmin, cmax, rmax))

def prepare_clean_assets():
    # 1. Kuamang Kurva S
    pdf_ks = os.path.join(base_dir, "SDN 19 Kuamang revitalisasi proyek/5. Kurva S SDN 19 KUAMANG.pdf")
    doc = pdfium.PdfDocument(pdf_ks)
    im_ks = doc[0].render(scale=3).to_pil()
    im_ks_c = crop_im(im_ks, pad=15)
    im_ks_c.save(os.path.join(export_dir, "kuamang_kurva_s_cropped.png"))

    # 2. Kuamang RKS & Backup Volume
    im_rks = Image.open(os.path.join(base_dir, "SDN 19 Kuamang revitalisasi proyek/RKS.png"))
    im_rks_c = crop_im(im_rks, pad=10)
    im_rks_c.save(os.path.join(export_dir, "kuamang_rks_cropped.png"))

    im_bv = Image.open(os.path.join(base_dir, "SDN 19 Kuamang revitalisasi proyek/BACKUP VOLUME.png"))
    im_bv_c = crop_im(im_bv, pad=10)
    im_bv_c.save(os.path.join(export_dir, "kuamang_bv_cropped.png"))

    # 3. Pariaman CCO, 5, BV
    cco_path = os.path.join(base_dir, "SLBN 2 PARIAMAN Revitalisasi Proyek", "CCO'.png")
    im_cco = Image.open(cco_path)
    im_cco_c = crop_im(im_cco, pad=10)
    im_cco_c.save(os.path.join(export_dir, "slbn_cco_cropped.png"))

    im_slbn_5 = Image.open(os.path.join(base_dir, "SLBN 2 PARIAMAN Revitalisasi Proyek/5.png"))
    im_slbn_5_c = crop_im(im_slbn_5, pad=10)
    im_slbn_5_c.save(os.path.join(export_dir, "slbn_5_cropped.png"))

    im_slbn_bv = Image.open(os.path.join(base_dir, "SLBN 2 PARIAMAN Revitalisasi Proyek/BACKUP VOLUME.png"))
    im_slbn_bv_c = crop_im(im_slbn_bv, pad=10)
    im_slbn_bv_c.save(os.path.join(export_dir, "slbn_bv_cropped.png"))

    # 4. Final Project
    im_msp = Image.open(os.path.join(base_dir, "Final Project/SChedule ms project.png"))
    im_msp_c = crop_im(im_msp, pad=5)
    im_msp_c.save(os.path.join(export_dir, "final_project_msp_cropped.png"))

    im_fp_ks = Image.open(os.path.join(base_dir, "Final Project/Kurva s.png"))
    im_fp_ks_c = crop_im(im_fp_ks, pad=5)
    im_fp_ks_c.save(os.path.join(export_dir, "final_project_kurvas_cropped.png"))

    im_fp_rab = Image.open(os.path.join(base_dir, "Final Project/RAB.png"))
    im_fp_rab_c = crop_im(im_fp_rab, pad=5)
    im_fp_rab_c.save(os.path.join(export_dir, "final_project_rab_cropped.png"))

    # 5. Magang
    im_m_dp = Image.open(os.path.join(base_dir, "Magang/DAILY PROGGRES.png"))
    im_m_dp_c = crop_im(im_m_dp, pad=5)
    im_m_dp_c.save(os.path.join(export_dir, "magang_daily_progress_cropped.png"))

    im_m_wr = Image.open(os.path.join(base_dir, "Magang/WEEKLY REPORT.png"))
    im_m_wr_c = crop_im(im_m_wr, pad=5)
    im_m_wr_c.save(os.path.join(export_dir, "magang_weekly_report_cropped.png"))

prepare_clean_assets()

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

% Header Macro (Fixed 13mm height, High-Clarity Executive Banner)
\newcommand{\makeheader}[3]{%
  \begin{tcolorbox}[sharp corners, boxrule=0pt, colframe=pnavy, colback=pnavy, coltext=white, left=4mm, right=4mm, top=2mm, bottom=2mm, boxsep=0pt, height=13mm, valign=center, borderline west={3.5pt}{0pt}{pred}]
    \begin{tabularx}{\linewidth}{@{}X >{\raggedleft\arraybackslash}p{100mm}@{}}
      {\fontsize{11pt}{13.5pt}\selectfont\bfseries\color{white}#2} &
      {\fontsize{8pt}{10pt}\selectfont\bfseries\color{pbglight}#3}
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
      REZA SEPDIDE, A.Md.T. \quad\textbar\quad INTERMEDIATE BUILDING CONSTRUCTION SUPERVISOR (BNSP 5) \quad\textbar\quad D4 CEM PNP%
    };
    \node[anchor=south east, inner sep=0pt, xshift=-10mm, yshift=4mm] at (current page.south east) {%
      \fontsize{6.5pt}{7.5pt}\selectfont\bfseries\color{pnavy}%
      #1 \quad\textbar\quad PAGE #2 OF 28%
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
    \colorbox{pred}{\fontsize{7.5pt}{8.5pt}\selectfont\bfseries\color{white}\ \ OFFICIAL CIVIL ENGINEERING \& CONSTRUCTION MANAGEMENT CREDENTIALS\ \ } &
    {\fontsize{7.5pt}{8.5pt}\selectfont\bfseries\color{pmuted}CIVIL ENGINEERING PORTFOLIO \textbar\ OFFICIAL 2026 EDITION \textbar\ PADANG, INDONESIA}
  \end{tabularx}
  \vspace{2mm}
  \noindent\textcolor{pnavy}{\rule{\linewidth}{1.5pt}}
  \vspace{2.5mm}

  \noindent
  \begin{minipage}[t]{0.68\linewidth}
    \vspace{0pt}
    {\fontsize{21pt}{25pt}\selectfont\bfseries\color{pnavy}CIVIL ENGINEERING PORTFOLIO}\\[1.5mm]
    {\fontsize{11.5pt}{14.5pt}\selectfont\bfseries\color{pred}QUANTITY SURVEYING, COST ESTIMATION \& CONSTRUCTION MANAGEMENT}\\[2mm]
    {\fontsize{8.2pt}{11pt}\selectfont\color{psteel}Comprehensive Compilation of Verified Engineering Deliverables, BNSP Level 5 State License, AutoCAD Multi-Viewport DED Drawings, Technical Specifications (RKS), BoQ/RAB Cost Estimations, S-Curve Scheduling, Bar Bending Schedules (BBS), and On-Site Quality Control.}\\[3mm]

    \noindent\textcolor{pred}{\rule{50mm}{2pt}}\\[3mm]

    {\fontsize{12.5pt}{14.5pt}\selectfont\bfseries\color{pnavy}REZA SEPDIDE, A.Md.T.}\\[1mm]
    {\fontsize{8.5pt}{10.5pt}\selectfont\bfseries\color{pmuted}Civil Engineer \textbar\ Quantity Surveyor \textbar\ Construction Planner}\\[3mm]

    % 4 Stat Boxes
    \begin{tabularx}{\linewidth}{@{}XXXX@{}}
      \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pborder, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
        {\fontsize{13pt}{15pt}\selectfont\bfseries\color{pnavy}3.72}\\[0.5mm]
        {\fontsize{6.5pt}{7.5pt}\selectfont\bfseries\color{pred}GPA / 4.00}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\color{pmuted}D3 CIVIL ENG. PNP\\WITH HONORS}
      \end{tcolorbox} &
      \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pborder, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
        {\fontsize{13pt}{15pt}\selectfont\bfseries\color{pnavy}LEVEL 5}\\[0.5mm]
        {\fontsize{6.5pt}{7.5pt}\selectfont\bfseries\color{pred}SKK BNSP}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\color{pmuted}INTERMEDIATE BUILDING\\FIELD SUPERVISOR}
      \end{tcolorbox} &
      \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pborder, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
        {\fontsize{13pt}{15pt}\selectfont\bfseries\color{pnavy}10+}\\[0.5mm]
        {\fontsize{6.5pt}{7.5pt}\selectfont\bfseries\color{pred}PROJECTS}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\color{pmuted}REVITALIZATION, EPC\\QS, DED \& S-CURVE}
      \end{tcolorbox} &
      \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pborder, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
        {\fontsize{13pt}{15pt}\selectfont\bfseries\color{pnavy}3 LANG.}\\[0.5mm]
        {\fontsize{6.5pt}{7.5pt}\selectfont\bfseries\color{pred}CERTIFIED}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\color{pmuted}INDONESIAN, JAPANESE\\(SSW/JLPT), ENGLISH}
      \end{tcolorbox}
    \end{tabularx}
    \vspace{2.5mm}

    % Metadata Summary Box
    \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm]
      \begin{tabularx}{\linewidth}{@{}p{32mm} X@{}}
        {\fontsize{7.2pt}{9.2pt}\selectfont\bfseries\color{pnavy}CURRENT EDUCATION:} & {\fontsize{7.2pt}{9.2pt}\selectfont\color{psteel}Diploma IV (D4) Construction Engineering Management, PNP (Active / Ongoing)} \\[1mm]
        {\fontsize{7.2pt}{9.2pt}\selectfont\bfseries\color{pnavy}ACADEMIC DEGREE:} & {\fontsize{7.2pt}{9.2pt}\selectfont\color{psteel}Diploma III (D3) Civil Engineering, Padang State Polytechnic (Graduated With Honors, GPA 3.72)} \\[1mm]
        {\fontsize{7.2pt}{9.2pt}\selectfont\bfseries\color{pnavy}STATE LICENSE:} & {\fontsize{7.2pt}{9.2pt}\selectfont\color{psteel}BNSP Level 5 Construction Services Center Region I Banda Aceh, Ministry of Public Works} \\[1mm]
        {\fontsize{7.2pt}{9.2pt}\selectfont\bfseries\color{pnavy}EMAIL \& CONTACT:} & {\fontsize{7.2pt}{9.2pt}\selectfont\fontfamily{cmtt}\selectfont rezasepdide@gmail.com \textbar\ +62 896-4459-0915 \textbar\ linkedin.com/in/rezasepdide}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{2mm}

    % Bottom Verification Box (Eliminating bottom blank space)
    \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=3mm, right=3mm, top=2mm, bottom=2mm]
      {\fontsize{6.8pt}{8pt}\selectfont\bfseries\color{pnavy}DOCUMENT INTEGRITY \& DIGITAL VERIFICATION:}\\[0.5mm]
      {\fontsize{6.2pt}{7.5pt}\selectfont\color{psteel}This portfolio presents verified engineering deliverables including authentic AutoCAD DED sheets, BoQ/RAB cost estimations conforming to PUPR AHSP standards, S-Curve \& MS Project baselines, Bar Bending Schedules (BBS), and state licenses and international language certifications.}
    \end{tcolorbox}
  \end{minipage}%
  \hfill
  \begin{minipage}[t]{0.30\linewidth}
    \vspace{0pt}
    \begin{tcolorbox}[sharp corners, boxrule=1pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2.5mm, bottom=2.5mm]
      \centering
      \includegraphics[width=\linewidth,height=94mm,keepaspectratio]{{{""" + p("FOTO DIRI/Professional-photo.jpeg") + r"""}}}\\[2mm]
      {\fontsize{9.5pt}{11pt}\selectfont\bfseries\color{pnavy}REZA SEPDIDE, A.Md.T.}\\[0.5mm]
      {\fontsize{7pt}{8.5pt}\selectfont\color{pred}\textbf{Intermediate Building Field Supervisor}}\\[0.5mm]
      {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}Reg. BNSP: F7472118 \textbar\ KKNI Jenjang 5}
    \end{tcolorbox}
    \vspace{2mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pborder, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      {\fontsize{6.5pt}{8pt}\selectfont\bfseries\color{pnavy}CORE ENGINEERING COMPETENCIES:}\\[1mm]
      {\fontsize{6.2pt}{7.6pt}\selectfont\color{psteel}
      $\bullet$ Cost Estimation \& BoQ/RAB PUPR AHSP Standards\\
      $\bullet$ Bar Bending Schedule (BBS) Detailing\\
      $\bullet$ Concrete Quality Control \& Slump Testing\\
      $\bullet$ S-Curve \& Project Scheduling (CPM)\\
      $\bullet$ AutoCAD Multi-Viewport DED Drawings to PDF\\
      $\bullet$ Autodesk Revit BIM \& SAP2000 Structural Modeling
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
\makeheader{// PROFIL PROFESIONAL // PENDIDIKAN \& NILAI REKAYASA}{EXECUTIVE PROFILE, FORMAL EDUCATION \& ENGINEERING ETHICS}{PADANG STATE POLYTECHNIC \textbar\ MINISTRY OF PUBLIC WORKS / BNSP}

\noindent
\begin{minipage}[t]{0.58\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3.5mm, right=3.5mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ EXECUTIVE PROFESSIONAL SUMMARY\ \ }\\[1.5mm]
    {\fontsize{7.2pt}{9.6pt}\selectfont\color{psteel}Civil Engineering graduate from Padang State Polytechnic with honors (\textit{With Honors}, GPA 3.72/4.00), currently pursuing a Bachelor of Applied Science (D4) in Construction Engineering Management. Certified with the Indonesian National Professional Certification Board (BNSP) Level 5 license as an Intermediate Building Construction Field Supervisor.}\\[1.5mm]
    {\fontsize{7.2pt}{9.6pt}\selectfont\color{psteel}Demonstrates rigorous practical competence across Quantity Surveying (BoQ/RAB, AHSP), Bar Bending Schedule (BBS) detailing, S-Curve / MS Project schedule control, AutoCAD Multi-Viewport DED layouts to PDF, Autodesk Revit BIM 3D modeling, and SAP2000 structural analysis. Internationally certified bilingual in Japanese (SSW JAC, JFT-Basic 250, JLPT N4 165) and Professional English (TOEIC 640).}\\[2mm]

    \noindent\textcolor{pborder}{\rule{\linewidth}{0.5pt}}\\[1.5mm]

    \colorbox{pnavy}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ FORMAL EDUCATION TIMELINE\ \ }\\[1.5mm]

    {\fontsize{7.8pt}{9.2pt}\selectfont\bfseries\color{pnavy}1. Diploma IV (D4) Construction Engineering Management} \hfill {\fontsize{6.8pt}{8pt}\selectfont\color{pred}\textbf{Active / Ongoing}}\\[0.3mm]
    {\fontsize{6.8pt}{8pt}\selectfont\color{psteel}Padang State Polytechnic (Aug 2026 --- Present). Focus: Integrated Project Management, Cost/Quality Control, Construction Law, and Digital BIM.}\\[1.2mm]

    {\fontsize{7.8pt}{9.2pt}\selectfont\bfseries\color{pnavy}2. Diploma III (D3) Civil Engineering} \hfill {\fontsize{6.8pt}{8pt}\selectfont\color{pred}\textbf{With Honors (GPA 3.72)}}\\[0.3mm]
    {\fontsize{6.8pt}{8pt}\selectfont\color{psteel}Padang State Polytechnic (2022 --- 2025). Final Project: BoQ/RAB Cost Estimation \& Time Scheduling for DPRD Pasaman Building.}\\[1.2mm]

    {\fontsize{7.8pt}{9.2pt}\selectfont\bfseries\color{pnavy}3. SMAN 1 Padang (State Senior High School 1)} \hfill {\fontsize{6.8pt}{8pt}\selectfont\color{pmuted}Natural Sciences (2019 --- 2022)}
  \end{tcolorbox}
  \vspace{2mm}

  % Bottom Card
  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=3.5mm, right=3.5mm, top=2.5mm, bottom=2.5mm, height=52mm]
    {\fontsize{7.2pt}{8.5pt}\selectfont\bfseries\color{pnavy}CORE ENGINEERING COMPETENCIES \& THESIS HIGHLIGHTS:}\\[1.5mm]
    {\fontsize{6.8pt}{8.8pt}\selectfont\color{psteel}
    $\bullet$ \textbf{Precision Quantity Take-Off (QTO):} Mathematical precision in calculating earthworks, deep/shallow foundations, reinforced concrete superstructure, finishes, and MEP.\\
    $\bullet$ \textbf{Schedule \& Cost Control:} Translating WBS into Critical Path Method (CPM) networks and distributing weight percentages to cumulative S-Curves for variance control.\\
    $\bullet$ \textbf{Specification Compliance:} Formulating RKS clauses, job safety protocols (SMKK), and site material testing checklists.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.40\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=3.5mm, right=3.5mm, top=2.5mm, bottom=2.5mm, height=154mm]
    \colorbox{pnavy}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ 4 PILLARS OF ENGINEERING PRINCIPLES \& ETHICS\ \ }\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      {\fontsize{7.2pt}{8.5pt}\selectfont\bfseries\color{pred}01. STRUCTURAL INTEGRITY \& QUALITY}\\[0.8mm]
      {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}Strict adherence to DED drawings and technical specifications. Fresh concrete slump testing (SNI 1972:2008), cylindrical compressive strength tests $f'_c$ 25--30 MPa, concrete cover tolerances, and rebar lap splicing without compromise.}
    \end{tcolorbox}
    \vspace{1.5mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      {\fontsize{7.2pt}{8.5pt}\selectfont\bfseries\color{pred}02. QUANTITY ACCURACY \& BBS OPTIMIZATION}\\[0.8mm]
      {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}Bar Bending Schedule (BBS) optimization minimizing scrap waste ($< 3\%$). Producing transparent, auditable BoQ/RAB adhering to PUPR AHSP guidelines.}
    \end{tcolorbox}
    \vspace{1.5mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      {\fontsize{7.2pt}{8.5pt}\selectfont\bfseries\color{pred}03. ADMINISTRATIVE COMPLIANCE \& CCO RIGOR}\\[0.8mm]
      {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}Every progress billing is backed by verified backup volume calculations, accurate technical justifications for Contract Change Orders (CCO), and structured joint survey field logs.}
    \end{tcolorbox}
    \vspace{1.5mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm]
      {\fontsize{7.2pt}{8.5pt}\selectfont\bfseries\color{pred}04. GLOBAL STANDARDS \& DEDICATION}\\[0.8mm]
      {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}Commitment to continuous development through D4 CEM studies, parametric Revit BIM adoption, SAP2000 structural modeling, and verified Japanese (SSW, JLPT) and English (TOEIC) certifications.}
    \end{tcolorbox}
  \end{tcolorbox}
\end{minipage}

\makefooter{EXECUTIVE PROFILE \& EDUCATION}{02}
""")

# ==============================================================================
# HALAMAN 3: MATRIKS KEAHLIAN & SOFTWARE (UNIFIED 2-BOX ARCHITECTURE)
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 3: MATRIKS KEAHLIAN TEKNIS & SOFTWARE ---
\makeheader{// KOMPETENSI TEKNIK // ALAT BANTU REKAYASA}{TECHNICAL SKILLS MATRIX, SOFTWARE \& LANGUAGE QUALIFICATIONS}{KKNI LEVEL 5 STANDARD \textbar\ BIM, CAD, QS, QC \& BILINGUAL}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ TECHNICAL ENGINEERING SKILLS\ \ }\\[1.5mm]

    {\fontsize{6.7pt}{8.4pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3mm, itemsep=0.6mm, topsep=0mm]
      \item \textbf{Quantity Take-Off (QTO) \& BoQ:} Detailed volume calculations from DED sheets conforming to PUPR AHSP standards.
      \item \textbf{RKS Technical Specifications:} Drafting project work requirements, material quality criteria, and execution methods.
      \item \textbf{S-Curve Scheduling:} Work Breakdown Structure (WBS), weight distribution, CPM critical path, and EVM deviation control.
      \item \textbf{Bar Bending Schedule (BBS):} Rebar cutting optimization ensuring scrap waste $< 3\%$.
      \item \textbf{AutoCAD DED Drafting:} 2D architectural \& structural drafting across multi-viewports scaled to PDF.
      \item \textbf{Quality Control (QC):} Fresh concrete slump tests, rebar placement checklists, and punch list administration.
      \item \textbf{Mutual Check \& CCO:} MC-100 certification and Contract Change Order (CCO) variance management.
    \end{itemize}
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}METHODOLOGY \& QUALITY ASSURANCE:}\\[1.5mm]
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
    \colorbox{pnavy}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ ENGINEERING SOFTWARE PROFICIENCY\ \ }\\[1.5mm]

    {\fontsize{6.7pt}{8.4pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3mm, itemsep=0.6mm, topsep=0mm]
      \item \textbf{AutoCAD (2D DED):} Advanced. Full 2D drafting, multi-viewport paper layout configuration, standard title blocks to PDF.
      \item \textbf{Microsoft Excel:} Advanced. Mathematical backup volume models, BoQ matrices, S-Curve scheduling algorithms.
      \item \textbf{Microsoft Project:} Intermediate. WBS hierarchy, CPM critical path, duration baselines, and tracking.
      \item \textbf{SAP2000:} Intermediate. 3D reinforced concrete space frames, dynamic response spectrum seismic loading (SNI).
      \item \textbf{Autodesk Revit (BIM):} Intermediate. 3D parametric building modeling of columns, beams, slabs, and architecture.
      \item \textbf{SketchUp:} Intermediate. 3D construction sequencing visualization for technical tender presentations.
    \end{itemize}
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}DIGITALIZATION \& BIM INTEGRATION:}\\[1.5mm]
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
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ CERTIFIED LANGUAGE CAPABILITIES\ \ }\\[1.5mm]

    {\fontsize{6.7pt}{8.4pt}\selectfont\color{psteel}
    $\bullet$ \textbf{Indonesian:} Native fluency. Technical contractual correspondence, formal Minutes of Meeting (BA), and project dossiers.\\
    $\bullet$ \textbf{Japanese:}\\
    -- \textbf{SSW Construction (JAC):} Passed official Japanese evaluation exam.\\
    -- \textbf{JFT-Basic:} Score 250 (Full Score, The Japan Foundation).\\
    -- \textbf{JLPT N4:} Score 165 (High Honors, The Japan Foundation).\\
    $\bullet$ \textbf{English:}\\
    -- \textbf{TOEIC Score: 640 / 990:} Score 640 (Listening: 400, Reading: 240) UPT Bahasa PNP Padang.\\
    -- Fluent comprehension of international engineering standards (ASTM, ACI, BS).
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}MULTINATIONAL WORK READINESS:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ Siap bertugas pada tim proyek Joint Venture kontraktor Jepang atau manajemen multinasional.\\
    $\bullet$ Penguasaan terminologi teknis konstruksi Jepang dan etika keselamatan Kiken Yochi (KYT).
    }
  \end{tcolorbox}
\end{minipage}

\makefooter{TECHNICAL SKILLS MATRIX}{03}
""")

# ==============================================================================
# HALAMAN 4: SKK BNSP JENJANG 5 (HALAMAN DEPAN)
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 4: SKK BNSP HALAMAN DEPAN ---
\makeheader{// LISENSI NEGARA RESMI // KKNI JENJANG 5}{STATE WORK COMPETENCY CERTIFICATE (SKK): INTERMEDIATE BUILDING SUPERVISOR}{NATIONAL PROFESSIONAL CERTIFICATION BOARD (BNSP) \textbar\ MINISTRY OF PUBLIC WORKS}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ BNSP LEVEL 5 STATE LICENSE\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Intermediate Building Field Supervisor}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Qualification: Technician / Analyst (Level 5)}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Issuing Body:} & {\fontsize{6.8pt}{8pt}\selectfont BNSP RI} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Implementing Agency:} & {\fontsize{6.8pt}{8pt}\selectfont BJKW I Banda Aceh (PUPR)} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries LSP Agency:} & {\fontsize{6.8pt}{8pt}\selectfont LSP Tenaga Konstruksi} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Reg. Number:} & {\fontsize{6.8pt}{8pt}\selectfont\fontfamily{cmtt}\selectfont F7472118} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Validity Period:} & {\fontsize{6.8pt}{8pt}\selectfont Valid Thru July 2030 (5 Yrs)}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}TECHNICAL AUTHORITY SCOPE}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Validates legal competence to direct and supervise multi-story building construction, oversee DED compliance, enforce SMKK safety, and conduct structural concrete QC.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}LEGAL BASIS \& STATE QUALIFICATION:}\\[1.5mm]
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
    {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}\textbf{Official Document:} SKK BNSP Level 5 Certificate of Competence --- Front Page}
  \end{tcolorbox}
\end{minipage}

\makefooter{BNSP LEVEL 5 STATE LICENSE}{04}
""")

# ==============================================================================
# HALAMAN 5: SKK BNSP JENJANG 5 (HALAMAN BELAKANG / UNIT KOMPETENSI)
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 5: SKK BNSP UNIT KOMPETENSI BELAKANG ---
\makeheader{// LISENSI NEGARA RESMI // DAFTAR UNIT KOMPETENSI}{ASSESSED UNITS OF COMPETENCY: INTERMEDIATE BUILDING SUPERVISOR}{INDONESIAN NATIONAL WORK COMPETENCY STANDARDS (SKKNI)}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ STANDAR UNIT KOMPETENSI SKKNI\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Daftar Unit Kompetensi}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Intermediate Building Field Supervisor}\\[2mm]

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
    {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}\textbf{Official Document:} SKK BNSP Level 5 Certificate of Competence --- Units of Competency}
  \end{tcolorbox}
\end{minipage}

\makefooter{DAFTAR UNIT KOMPETENSI SKK BNSP}{05}
""")

# ==============================================================================
# HALAMAN 6: SERTIFIKAT REVIT ARSISTEN ACADEMY
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 6: SERTIFIKAT REVIT ---
\makeheader{// PELATIHAN PEMODELAN DIGITAL // BIM}{AUTODESK REVIT MASTERCLASS FOR BEGINNERS: CERTIFICATE OF COMPLETION}{ARSISTEN ACADEMY \textbar\ BUILDING INFORMATION MODELING (BIM)}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PELATIHAN DIGITAL REKAYASA BIM\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Revit Masterclass}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Arsisten Academy (BIM 3D)}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Academy:} & {\fontsize{6.8pt}{8pt}\selectfont Arsisten Academy} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Scheme:} & {\fontsize{6.8pt}{8pt}\selectfont Revit Masterclass} \\[0.8mm]
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
\makeheader{// KUALIFIKASI STANDAR INTERNASIONAL // JEPANG}{SPECIFIED SKILLED WORKER (SSW) EVALUATION EXAM: CONSTRUCTION}{JAPAN ASSOCIATION FOR CONSTRUCTION HUMAN RESOURCES (JAC)}

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
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Scope:} & {\fontsize{6.8pt}{8pt}\selectfont Civil Engineering (i)} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Hasil Evaluasi:} & {\fontsize{6.8pt}{8pt}\selectfont\bfseries\color{pred} Pass / Lulus} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Reg. Number:} & {\fontsize{6.8pt}{8pt}\selectfont\fontfamily{cmtt}\selectfont 40563425}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}SIGNIFIKANSI KUALIFIKASI}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Ujian resmi Tenaga Kerja Terampil Tertentu (\textit{Tokutei Ginou}) di bawah pengawasan MLIT Japan, memvalidasi kesiapan kerja standar Jepang.
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
\makeheader{// KOMPETENSI BAHASA INTERNASIONAL // JEPANG}{JAPANESE LANGUAGE PROFICIENCY CERTIFICATES: JFT-BASIC \& JLPT N4}{THE JAPAN FOUNDATION \textbar\ BILINGUAL ENGINEERING COMMUNICATION}

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
      Skor: \textbf{\color{pred}250 Poin} (CEFR Level: 200). Kompeten percakapan dan instruksi kerja kerja lapangan.
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
\makeheader{// PROJECTS KERJA INDUSTRI // MAGANG}{INDUSTRIAL INTERNSHIP CERTIFICATE: PT SOLUSI INDUSTRI ENERGI}{WASTE GAS RECOVERY PROJECT \textbar\ PT INDO-BHARAT RAYON PURWAKARTA}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PROJECTS MAGANG LAPANGAN RESMI\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}PT Solusi Industri Energi}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Waste Gas Recovery Project (WGR)}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Contractor:} & {\fontsize{6.8pt}{8pt}\selectfont PT Solusi Industri Energi} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Client:} & {\fontsize{6.8pt}{8pt}\selectfont PT Indo-Bharat Rayon} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Location:} & {\fontsize{6.8pt}{8pt}\selectfont Purwakarta, West Java} \\[0.8mm]
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

\makefooter{PROJECTS KERJA LAPANGAN (PKL)}{09}
""")

# ==============================================================================
# HALAMAN 10: TOEIC SCORE 640
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 10: TOEIC SCORE 640 ---
\makeheader{// KOMPETENSI BAHASA INTERNASIONAL // INGGRIS}{OFFICIAL TOEIC PREDICTION TEST SCORE: 640 / 990}{UPT BAHASA PADANG STATE POLYTECHNIC \textbar\ PROFESSIONAL WORKING ENGLISH}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ KEMAHIRAN BAHASA INGGRIS TEKNIK\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}TOEIC Score: 640 / 990}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Skor Total: 640 Poin}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Lembaga Uji:} & {\fontsize{6.8pt}{8pt}\selectfont UPT Bahasa PNP Padang} \\[0.8mm]
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
    {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}\textbf{Dokumen Asli:} Notification Letter Prediction Test Score for TOEIC Test (UPT Bahasa PNP Padang)}
  \end{tcolorbox}
\end{minipage}

\makefooter{HASIL PREDICTION TEST TOEIC}{10}
""")

# ==============================================================================
# HALAMAN 11: TRANSKRIP AKADEMIK D3 (IPK 3.72)
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 11: TRANSKRIP AKADEMIK D3 ---
\makeheader{// KELULUSAN DENGAN PREDIKAT DENGAN PUJIAN // IPK 3.72}{OFFICIAL ACADEMIC TRANSCRIPT: DIPLOMA III CIVIL ENGINEERING}{PADANG STATE POLYTECHNIC \textbar\ GRADUATED WITH HONORS (IPK 3.72 / 4.00)}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ CAPAIAN PRESTASI AKADEMIK RESMI\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}D3 Teknik Sipil PNP}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}IPK: 3.72 dari 4.00 (Dengan Pujian)}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Institution:} & {\fontsize{6.8pt}{8pt}\selectfont Padang State Polytechnic} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries IPK Kumulatif:} & {\fontsize{6.8pt}{8pt}\selectfont\bfseries\color{pred} 3.72 / 4.00} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Assessment:} & {\fontsize{6.8pt}{8pt}\selectfont\bfseries Dengan Pujian} \\[0.8mm]
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
\makeheader{// KELOMPOK 1: PERENCANAAN \& QUANTITY SURVEYING // PROYEK 01}{PROJECT 01: SDN 19 KUAMANG BUILDING REVITALIZATION}{TECHNICAL PLANNER \textbar\ PASAMAN, WEST SUMATRA \textbar\ SEPTEMBER 2026}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PROYEK PERENCANAAN TEKNIS 01\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}SDN 19 Kuamang Revitalization}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Perencana Teknis (Konsultan)}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Role:} & {\fontsize{6.8pt}{8pt}\selectfont Perencana Teknis} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Location:} & {\fontsize{6.8pt}{8pt}\selectfont Pasaman, Sumbar} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Waktu:} & {\fontsize{6.8pt}{8pt}\selectfont September 2026} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Deliverables:} & {\fontsize{6.8pt}{8pt}\selectfont DED, RAB, RKS, Kurva S}
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
\makeheader{// KELOMPOK 1: PERENCANAAN \& QUANTITY SURVEYING // PROYEK 01}{PROJECT 01: DETAIL ENGINEERING DESIGN (DED) SHEETS}{ARCHITECTURAL PLANS, ELEVATIONS, ROOF TRUSS \& UTILITIES}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ LEMBAR DED ARSITEKTUR \& STRUKTUR\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}AutoCAD DED Sheets}\\[0.5mm]
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
\makeheader{// KELOMPOK 1: PERENCANAAN \& QUANTITY SURVEYING // PROYEK 01}{PROJECT 01: RKS SPECIFICATIONS, BOQ VOLUME BACKUP \& S-CURVE}{QUALITY CONTROL, MATERIAL SPECIFICATIONS \& PROGRESS WEIGHTS}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=98mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ TECHNICAL SPECIFICATIONS \& QS\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}RKS, Volume \& S-Curve}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}SDN 19 Kuamang, Pasaman}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Scheme:} & {\fontsize{6.8pt}{8pt}\selectfont School Revitalization 2026} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Total Budget:} & {\fontsize{6.8pt}{8pt}\selectfont Rp 967,660,000,00} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Physical Cost:} & {\fontsize{6.8pt}{8pt}\selectfont Rp 867,282,138,81} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Planned Time:} & {\fontsize{6.8pt}{8pt}\selectfont 90 Days (13 Weeks)}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}QUALITY CONTROL INSTRUMENTS}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ \textbf{RKS Specs:} Establishing SNI mortar mixes, Class II timber trusses, and site testing standards.\\
    $\bullet$ \textbf{Backup Volume:} Mathematical calculation per room, toilet, and paving block as basis for BoQ.\\
    $\bullet$ \textbf{S-Curve:} Cumulative physical progress mapping for early variance detection.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=54mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}BUDGET \& SCHEDULE INTEGRITY:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ \textbf{Validasi Silang DED \& BoQ:} Sinkronisasi kuantitas backup volume dengan gambar kerja DED guna mengeliminasi selisih volume.\\
    $\bullet$ \textbf{Distribusi Bobot Realistis:} Penataan dependensi aktivitas pekerjaan struktur dan arsitektur demi kepatuhan target 90 hari kalender.\\
    $\bullet$ \textbf{Legalitas Document:} Disahkan oleh Ketua Panitia P2SP, Kepala Sekolah, dan Reza Sepdide (Perencana Teknis).
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    % Top Landscape: Kurva S Full Width (Authentic S-Curve)
    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=73mm]
      \centering
      \includegraphics[width=0.99\linewidth,height=64mm,keepaspectratio]{{D:/whateverapp/laragon/www/ParkojiXn/portfolio_pdf_export/kuamang_kurva_s_cropped.png}}\\[0.5mm]
      {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Jadwal Kurva S \& Distribusi Bobot Pelaksanaan Mingguan (Total: Rp 867,282,138,81 --- Durasi 13 Minggu)}
    \end{tcolorbox}
    \vspace{2mm}

    % Bottom 2 Columns: RKS and Backup Volume (Enlarged)
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=75mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=66mm,keepaspectratio]{{D:/whateverapp/laragon/www/ParkojiXn/portfolio_pdf_export/kuamang_rks_cropped.png}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Rencana Kerja \& Syarat Teknis (RKS) Spesifikasi Material}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=75mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=66mm,keepaspectratio]{{D:/whateverapp/laragon/www/ParkojiXn/portfolio_pdf_export/kuamang_bv_cropped.png}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 3. Perhitungan Backup Volume Kuantitas Pekerjaan BoQ}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{SDN 19 KUAMANG (3/3) (3/3)}{14}
""")

# ==============================================================================
# HALAMAN 15: SLBN 2 PARIAMAN (1/3) - DED MULTI VIEWPORT
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 15: SLBN 2 PARIAMAN (1/3) ---
\makeheader{// KELOMPOK 1: PERENCANAAN \& QUANTITY SURVEYING // PROYEK 02}{PROJECT 02: SLBN 2 PARIAMAN INCLUSIVE SCHOOL REVITALIZATION}{TECHNICAL PLANNER \textbar\ PARIAMAN CITY, WEST SUMATRA \textbar\ OCTOBER 2026}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PROYEK PERENCANAAN TEKNIS 02\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}SLBN 2 Pariaman Revitalization}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Gedung Pendidikan Inklusif}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Role:} & {\fontsize{6.8pt}{8pt}\selectfont Perencana Teknis} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Location:} & {\fontsize{6.8pt}{8pt}\selectfont Pariaman City, West Sumatra} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Fasilitas:} & {\fontsize{6.8pt}{8pt}\selectfont Belajar Ramah Difabel} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Deliverables:} & {\fontsize{6.8pt}{8pt}\selectfont DED, CCO, Volume, RAB}
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
\makeheader{// KELOMPOK 1: PERENCANAAN \& QUANTITY SURVEYING // PROYEK 02}{PROJECT 02: DED ARCHITECTURAL \& INCLUSIVE STRUCTURAL DRAWINGS}{PADANG STATE POLYTECHNIC \textbar\ PARIAMAN CITY, WEST SUMATRA}

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
\makeheader{// KELOMPOK 1: PERENCANAAN \& QUANTITY SURVEYING // PROYEK 02}{PROJECT 02: STRUCTURAL DETAILS, CCO ADDENDUM \& VOLUME BACKUP}{DESIGN MODIFICATION, REBAR BACKUP \& CONTRACT CHANGE ORDER}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=98mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ STRUCTURAL DOCUMENTATION \& CCO 02\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}CCO \& Backup Volume}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}SLBN 2 Pariaman, West Sumatra}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Scheme:} & {\fontsize{6.8pt}{8pt}\selectfont Bantuan Revitalisasi 2026} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Document:} & {\fontsize{6.8pt}{8pt}\selectfont CCO Addendum \& BoQ} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Adjustment:} & {\fontsize{6.8pt}{8pt}\selectfont Site Ground Elevation} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Total BoQ:} & {\fontsize{6.8pt}{8pt}\selectfont Rp 1,046,960,116,8}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}FIELD JUSTIFICATION}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ \textbf{CCO Addendum:} Re-balancing quantity additions and deductions due to natural site ground contours.\\
    $\bullet$ \textbf{Revised Elevation:} Modifying wall heights, practical columns, and wheelchair ramp access.\\
    $\bullet$ \textbf{Backup Volume:} Mathematical calculation for plaster, screed, tiling, and painting.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=54mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}CCO ACCOUNTABILITY:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ \textbf{Kesesuaian Recognition:} Format Addendum mengacu kaidah penyesuaian kontrak konstruksi resmi dan Berita Acara Mutual Check.\\
    $\bullet$ \textbf{Keseimbangan Biaya:} Rekapitulasi deviasi tambah-kurang diimbangi efisiensi item finishing agar total anggaran terkendali.\\
    $\bullet$ \textbf{Verifikasi Formal:} Disahkan oleh Kepala Sekolah SLBN 2 Pariaman, Tim P2S, dan Perencana Teknis.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    % Top Landscape: CCO Spreadsheet Full Width (Enlarged)
    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=70mm]
      \centering
      \includegraphics[width=0.99\linewidth,height=61mm,keepaspectratio]{{D:/whateverapp/laragon/www/ParkojiXn/portfolio_pdf_export/slbn_cco_cropped.png}}\\[0.5mm]
      {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Berkas Addendum Contract Change Order (CCO) \& Rekapitulasi Perubahan Nilai Kontrak}
    \end{tcolorbox}
    \vspace{2mm}

    % Bottom 2 Columns: Structural Detail and Backup Volume (Enlarged)
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=78mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=69mm,keepaspectratio]{{D:/whateverapp/laragon/www/ParkojiXn/portfolio_pdf_export/slbn_5_cropped.png}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Gambar Kerja Revisi Elevasi Bangunan (Tampak Depan \& Belakang)}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=78mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=69mm,keepaspectratio]{{D:/whateverapp/laragon/www/ParkojiXn/portfolio_pdf_export/slbn_bv_cropped.png}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 3. Perhitungan Backup Volume Tambah-Kurang CCO}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{SLBN 2 PARIAMAN (3/3) (3/3)}{17}
""")

# ==============================================================================
# HALAMAN 18: QS PT MULIA DJASMINE SENTOSA
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 18: QS PT MULIA DJASMINE SENTOSA ---
\makeheader{// KELOMPOK 1: PERENCANAAN \& QUANTITY SURVEYING // PROYEK 03}{PROJECT 03: QUANTITY SURVEYOR (FREELANCE) --- PT MULIA DJASMINE SENTOSA}{FACILITY SUB-PROJECT: PT PERFETTI VAN MELLE INDONESIA \textbar\ SEPTEMBER 2025}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ FREELANCE QUANTITY SURVEYOR 03\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}PT Mulia Djasmine Sentosa}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}PT Perfetti Van Melle Project}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Role:} & {\fontsize{6.8pt}{8pt}\selectfont QS (Freelance)} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Contractor:} & {\fontsize{6.8pt}{8pt}\selectfont PT Mulia Djasmine} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Client:} & {\fontsize{6.8pt}{8pt}\selectfont PT Perfetti Van Melle} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Deliverables:} & {\fontsize{6.8pt}{8pt}\selectfont MC-100, BBS, CCO}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}QUANTITY SURVEYING SCOPE}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Subcontractor volume recalculation for MC-100, cost variance reconciliation, CCO management, and installed rebar BBS.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}PROFESSIONAL FIELD QS ROLE:}\\[1.5mm]
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
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Bar Bending Schedule (BBS) Detailing}
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
\makeheader{// KELOMPOK 1: PERENCANAAN \& QUANTITY SURVEYING // PROYEK 04}{PROJECT 04: FINAL D3 THESIS: COST ESTIMATION \& SCHEDULING OF DPRD PASAMAN}{PADANG STATE POLYTECHNIC \textbar\ MS PROJECT, S-CURVE \& COMPREHENSIVE BOQ}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=98mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ D3 CIVIL ENGINEERING FINAL THESIS 04\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}DPRD Pasaman Building}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}District of Pasaman, West Sumatra}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Institution:} & {\fontsize{6.8pt}{8pt}\selectfont Padang State Polytechnic} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Study Object:} & {\fontsize{6.8pt}{8pt}\selectfont DPRD Pasaman Building} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Total Budget:} & {\fontsize{6.8pt}{8pt}\selectfont Rp 16,042,000,000,00} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Duration:} & {\fontsize{6.8pt}{8pt}\selectfont 240 Calendar Days} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Software:} & {\fontsize{6.8pt}{8pt}\selectfont MS Project \& MS Excel}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}PLANNING SCOPE}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ \textbf{Work Breakdown Structure (WBS):} Penguraian item pekerjaan struktur pondasi sumuran, kolom, balok latai, pelat, baja atap, hingga arsitektur.\\
    $\bullet$ \textbf{Estimasi Biaya (RAB):} Analisa Harga Satuan Pekerjaan (AHSP) PUPR berbasis survei pasar upah dan bahan.\\
    $\bullet$ \textbf{Simulasi Kurva S:} Pemodelan akumulasi bobot biaya per minggu.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=54mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}SCHEDULE \& COST INTEGRATION:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ \textbf{Analisis Lintasan Kritis (CPM):} Penataan dependensi aktivitas logika hubungan kerja (\textit{Finish-to-Start}) untuk mencegah deviasi negatif jadwal.\\
    $\bullet$ \textbf{Pengendalian Bobot Biaya:} Kurva S sebagai instrumen monitoring progres fisik berkala terhadap deviasi aktual.\\
    $\bullet$ \textbf{Ketepatan Nilai Kontrak:} Anggaran Rp 16,04 Miliar dikunci melalui rekapitulasi BoQ terperinci per divisi pekerjaan.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    % Top Landscape: MS Project Schedule Full Width (Enlarged)
    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=75mm]
      \centering
      \includegraphics[width=0.99\linewidth,height=66mm,keepaspectratio]{{D:/whateverapp/laragon/www/ParkojiXn/portfolio_pdf_export/final_project_msp_cropped.png}}\\[0.5mm]
      {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Work Breakdown Structure (WBS) \& Jadwal Pelaksanaan Gantt Chart Microsoft Project (Durasi 240 Hari)}
    \end{tcolorbox}
    \vspace{2mm}

    % Bottom 2 Columns: Kurva S and RAB (Enlarged)
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=73mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=64mm,keepaspectratio]{{D:/whateverapp/laragon/www/ParkojiXn/portfolio_pdf_export/final_project_kurvas_cropped.png}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Kurva S Distribusi Bobot Kumulatif Fisik Mingguan}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=73mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=64mm,keepaspectratio]{{D:/whateverapp/laragon/www/ParkojiXn/portfolio_pdf_export/final_project_rab_cropped.png}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 3. Rekapitulasi Rencana Anggaran Biaya (RAB Total: Rp 16,04 M)}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{FINAL THESIS: DPRD PASAMAN}{19}
""")

# ==============================================================================
# HALAMAN 20: EPC WASTE GAS RECOVERY (1/3) - BBS PEMBESIAN & DOKUMENTASI
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 20: MAGANG INDUSTRI PT SOLUSI INDUSTRI ENERGI (1/3) ---
\makeheader{// KELOMPOK 2: MANAJEMEN PELAKSANAAN \& PENGAWASAN // PROYEK 05}{PROJECT 05: SUPERVISORY INTERNSHIP: WASTE GAS RECOVERY PROJECT}{PT SOLUSI INDUSTRI ENERGI \textbar\ PURWAKARTA, WEST JAVA \textbar\ AUG --- DEC 2024}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=98mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PROJECTS MAGANG INDUSTRI 05\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Waste Gas Recovery Project}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}PT Indo-Bharat Rayon Purwakarta}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Contractor:} & {\fontsize{6.8pt}{8pt}\selectfont PT Solusi Industri Energi} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Main Client:} & {\fontsize{6.8pt}{8pt}\selectfont PT Indo-Bharat Rayon} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Lokasi Proyek:} & {\fontsize{6.8pt}{8pt}\selectfont Purwakarta, West Java} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Activity Focus:} & {\fontsize{6.8pt}{8pt}\selectfont Rebar BBS \& Site Logistics}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}BBS DRAFTING \& FIELD SUPERVISION}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ \textbf{Bar Bending Schedule (BBS):} Perhitungan daftar pemotongan dan pembengkokan baja tulangan pondasi mesin berat WGR.\\
    $\bullet$ \textbf{Efisiensi Scrap Waste:} Optimasi pemotongan tulangan hingga batas limbah baja terkendali $< 3\%$.\\
    $\bullet$ \textbf{Daily Progress Log:} Pencatatan log harian fabrikasi, perakitan tulangan, dan verifikasi progres lapangan.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=54mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}INDUSTRIAL REBAR STANDARDS:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ \textbf{Presisi Pembengkokan:} Perakitan pondasi mesin getar menuntut sudut kait gempa $135^\circ$ dan panjang penyaluran SNI 2847.\\
    $\bullet$ \textbf{Kekokohan Tulangan:} Pengikatan kawat bendrat ganda memastikan kerangka tidak bergeser saat pengecoran beton cair.\\
    $\bullet$ \textbf{K3 Lapangan:} Pelaksanaan supervisi harian mematuhi regulasi ketat HSE pabrik kimia aktif.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    % Row 1: The Two Wide Tables Side-by-Side (Height 54mm - tight fit, zero dead space!)
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=54mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=45mm,keepaspectratio]{{D:/whateverapp/laragon/www/ParkojiXn/Knowledge_Portofolio/Magang/BBS.png}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Bar Bending Schedule (BBS) Tulangan Beton}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=54mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=45mm,keepaspectratio]{{D:/whateverapp/laragon/www/ParkojiXn/portfolio_pdf_export/magang_daily_progress_cropped.png}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Monitoring Progres Harian Fabrikasi Pembesian}
      \end{tcolorbox}
    \end{minipage}
    \vspace{2mm}

    % Row 2: Tall Form + Photo Side-by-Side (Height 94mm - Form is ENLARGED to 84mm!)
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=94mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=84mm,keepaspectratio]{{D:/whateverapp/laragon/www/ParkojiXn/Knowledge_Portofolio/Magang/DAILY.png}}\\[0.8mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 3. Form Log Harian Pekerjaan Pembesian Lapangan}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=94mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=68mm,keepaspectratio]{{D:/whateverapp/laragon/www/ParkojiXn/Knowledge_Portofolio/Magang/DOKUMEN.jpeg}}\\[1.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 4. Dokumentasi Tim Proyek \& Pengelolaan Berkas Lapangan}\\[0.5mm]
        {\fontsize{5.5pt}{6.5pt}\selectfont\color{pmuted}Field coordination of PT Solusi Industri Energi engineering team on WGR plant site}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{WASTE GAS RECOVERY --- REBAR BBS (1/3) (1/3)}{20}
""")

# ==============================================================================
# HALAMAN 21: EPC WASTE GAS RECOVERY (2/3) - BOQ REWORK & LAPORAN PROGRES
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 21: MAGANG INDUSTRI PT SOLUSI INDUSTRI ENERGI (2/3) ---
\makeheader{// KELOMPOK 2: MANAJEMEN PELAKSANAAN \& PENGAWASAN // PROYEK 05}{PROJECT 05: REWORK COST CALCULATION \& PROJECT PROGRESS REPORTING}{PT SOLUSI INDUSTRI ENERGI \textbar\ SITE PROJECT MANAGEMENT COORDINATION}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=98mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ REWORK CALCULATION \& REPORTING 05\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}QTO Rework \& Reporting}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Field Operation Control}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Activity 1:} & {\fontsize{6.8pt}{8pt}\selectfont Volume \& Rework Calculation} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Activity 2:} & {\fontsize{6.8pt}{8pt}\selectfont Progress Billing Backup} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Reporting:} & {\fontsize{6.8pt}{8pt}\selectfont Daily, Weekly, Monthly} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Technical Impact:} & {\fontsize{6.8pt}{8pt}\selectfont Accurate Cost Reconciliation}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}FIELD CONTROL RESPONSIBILITY}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ \textbf{Kalkulasi Volume Rework:} Perhitungan ulang kuantitas pekerjaan perbaikan/modifikasi pondasi mesin di lapangan.\\
    $\bullet$ \textbf{Backup Volume Penagihan:} Penyusunan bukti perhitungan volume pendukung sertifikat pembayaran bulanan (progress billing).\\
    $\bullet$ \textbf{Opname Bersama:} Verifikasi berkala fisik lapangan bersama manajemen konstruksi konsultan dan owner.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=54mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}REPORTING ACCOUNTABILITY:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ \textbf{Kompilasi Berjenjang:} Laporan harian dikompilasi secara runut menjadi mingguan dan bulanan sebagai dokumen legal fisik.\\
    $\bullet$ \textbf{Rekonsiliasi Nilai Tambah-Kurang:} Data backup yang tertib mencegah sengketa nilai klaim antara subkontraktor dan maincon.\\
    $\bullet$ \textbf{Transparansi Manpower:} Rekapitulasi jumlah pekerja harian (Peak 254 tenaga kerja) guna kendali produktivitas dan K3.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.68\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=2mm, bottom=2mm, height=154mm]
    % Row 1: The Two Very Wide Tables (Height 48mm - tight fit across columns!)
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=48mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=39mm,keepaspectratio]{{D:/whateverapp/laragon/www/ParkojiXn/Knowledge_Portofolio/Magang/Bill of quantity rework.png}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 1. Perhitungan Kuantitas \& BoQ Rework}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=48mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=39mm,keepaspectratio]{{D:/whateverapp/laragon/www/ParkojiXn/Knowledge_Portofolio/Magang/QTO REWORK (1).png}}\\[0.5mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 2. Lembar Kalkulasi QTO Backup Volume Rework}
      \end{tcolorbox}
    \end{minipage}
    \vspace{2mm}

    % Row 2: Weekly Report (ENLARGED PORTRAIT) + Monthly Report with Summary Box (Height 100mm)
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=100mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=90mm,keepaspectratio]{{D:/whateverapp/laragon/www/ParkojiXn/portfolio_pdf_export/magang_weekly_report_cropped.png}}\\[0.8mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 3. Dokumen Laporan Progres Mingguan Lapangan}
      \end{tcolorbox}
    \end{minipage}%
    \hfill
    \begin{minipage}[t]{0.49\linewidth}
      \vspace{0pt}
      \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=1mm, right=1mm, top=1mm, bottom=1mm, height=100mm]
        \centering
        \includegraphics[width=0.98\linewidth,height=58mm,keepaspectratio]{{D:/whateverapp/laragon/www/ParkojiXn/Knowledge_Portofolio/Magang/MONTHLY REPORT.png}}\\[0.8mm]
        {\fontsize{6pt}{7pt}\selectfont\bfseries 4. Dokumen Laporan Bulanan (Monthly Progress Report)}\\[1.2mm]
        \begin{tcolorbox}[sharp corners, boxrule=0.4pt, colframe=pborder, colback=pbglight, left=1.5mm, right=1.5mm, top=1mm, bottom=1mm]
          {\fontsize{5.8pt}{7.2pt}\selectfont\color{pnavy}
          \textbf{Monthly Manpower \& Progress Recapitulation:}\\
          $\bullet$ Peak manpower: 254 coordinated site personnel.\\
          $\bullet$ Monthly verification supporting progress billing certificates.\\
          $\bullet$ Field safety performance achieving Zero LTI status.
          }
        \end{tcolorbox}
      \end{tcolorbox}
    \end{minipage}
  \end{tcolorbox}
\end{minipage}

\makefooter{WASTE GAS RECOVERY --- REWORK \& PROGRESS (2/3) (2/3)}{21}
""")

# ==============================================================================
# HALAMAN 22: EPC WASTE GAS RECOVERY (3/3) - INSPEKSI LAPANGAN & PUNCH LIST
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 22: MAGANG INDUSTRI PT SOLUSI INDUSTRI ENERGI (3/3) ---
\makeheader{// KELOMPOK 2: MANAJEMEN PELAKSANAAN \& PENGAWASAN // PROYEK 05}{PROJECT 05: QUALITY CONTROL (QC), SLUMP TESTING \& PUNCH LIST MANAGEMENT}{PT SOLUSI INDUSTRI ENERGI \textbar\ FIELD INSPECTION \& WORK AREA MAPPING}

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

\makefooter{WASTE GAS RECOVERY --- QC \& PUNCH LIST (3/3) QC (3/3)}{22}
""")

# ==============================================================================
# HALAMAN 23: FASILITATOR BANTUAN FASILITAS KEMENDIKDASMEN
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 23: FASILITATOR TEKNIS KEMENDIKDASMEN ---
\makeheader{// KELOMPOK 2: MANAJEMEN PELAKSANAAN \& PENGAWASAN // PROYEK 06}{PROJECT 06: TECHNICAL FACILITATOR --- PRIMARY SCHOOL REVITALIZATION}{MINISTRY OF PRIMARY AND SECONDARY EDUCATION (KEMENDIKDASMEN) \textbar\ JUN --- DEC 2025}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ GOVERNMENT GRANT FACILITATOR 06\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Field Technical Facilitator}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Kemendikdasmen RI Program}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Agency:} & {\fontsize{6.8pt}{8pt}\selectfont Kemendikdasmen RI Program} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Assignment:} & {\fontsize{6.8pt}{8pt}\selectfont Technical School Facilitator} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Period:} & {\fontsize{6.8pt}{8pt}\selectfont June --- December 2025} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Scope:} & {\fontsize{6.8pt}{8pt}\selectfont Beneficiary Schools}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}FACILITATION RESPONSIBILITIES}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Feasibility reviews of DED drawings, BoQ/RAB verification for beneficiary schools, monitoring physical milestones, disbursement verification, and technical bimtek guidance.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}PROGRAM STRATEGIC OVERSIGHT:}\\[1.5mm]
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

\makefooter{TECHNICAL FACILITATOR KEMENDIKDASMEN}{23}
""")

# ==============================================================================
# HALAMAN 24: REVIT BIM MODELING
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 24: AUTODESK REVIT BIM MODELING ---
\makeheader{// KELOMPOK 3: PEMODELAN DIGITAL \& RISET REKAYASA // PROYEK 07}{PROJECT 07: AUTODESK REVIT 3D PARAMETRIC \& STRUCTURAL MODELING}{ARSISTEN ACADEMY \textbar\ PRACTICAL DIGITAL 3D BIM MODELING}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ PRAKTIK PEMODELAN REVIT BIM 07\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Pemodelan Digital 3D}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Revit Masterclass Academy}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Platform:} & {\fontsize{6.8pt}{8pt}\selectfont Autodesk Revit} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Pelatihan:} & {\fontsize{6.8pt}{8pt}\selectfont Revit Masterclass} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Academy:} & {\fontsize{6.8pt}{8pt}\selectfont Arsisten Academy} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Empirical Site:} & {\fontsize{6.8pt}{8pt}\selectfont Struktur \& Arsitektur}
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
\makeheader{// KELOMPOK 3: PEMODELAN DIGITAL \& RISET REKAYASA // PROYEK 08}{PROJECT 08: SAP2000 3D STRUCTURAL ANALYSIS \& SEISMIC LOADING}{MULTI-STORY BUILDING DESIGN PRE-PROJECT \textbar\ PADANG STATE POLYTECHNIC}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ ANALISIS REKAYASA STRUKTUR 08\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Pemodelan SAP2000}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Gedung Bertingkat Beton}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Platform:} & {\fontsize{6.8pt}{8pt}\selectfont CSI SAP2000} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Scheme:} & {\fontsize{6.8pt}{8pt}\selectfont Pra-Proyek Gedung} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Institution:} & {\fontsize{6.8pt}{8pt}\selectfont Padang State Polytechnic} \\[0.8mm]
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
\makeheader{// KELOMPOK 3: PEMODELAN DIGITAL \& RISET REKAYASA // PROYEK 09}{PROJECT 09: FONDASI DAYS 2025 NATIONAL TENDER COMPETITION}{SEBELAS MARET UNIVERSITY (UNS) \textbar\ TEAM JAYA JAYA TEAM}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ NATIONAL COMPETITION 09\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Fondasi Days 2025}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Universitas Sebelas Maret (UNS)}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Implementing Agency:} & {\fontsize{6.8pt}{8pt}\selectfont Univ. Sebelas Maret} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Tim Delegasi:} & {\fontsize{6.8pt}{8pt}\selectfont Jaya Jaya Team (PNP)} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Bidang Lomba:} & {\fontsize{6.8pt}{8pt}\selectfont Estimasi Biaya \& Tender} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Deliverables:} & {\fontsize{6.8pt}{8pt}\selectfont Penawaran, RAB, Kurva S}
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

\makefooter{NATIONAL TENDER COMPETITION UNS}{26}
""")

# ==============================================================================
# HALAMAN 27: RISET PKM-AI ANALISIS BIAYA SCAFFOLDING
# ==============================================================================
tex.append(r"""\newpage
% --- HALAMAN 27: SCIENTIFIC RESEARCH PAPER ---
\makeheader{// KELOMPOK 3: PEMODELAN DIGITAL \& RISET REKAYASA // PROYEK 10}{PROJECT 10: SCIENTIFIC RESEARCH PAPER: SCAFFOLDING SYSTEM COST ANALYSIS}{PKM-AI KEMENDIKBUDRISTEK \textbar\ CASE STUDY: WASTE GAS RECOVERY PURWAKARTA}

\noindent
\begin{minipage}[t]{0.30\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ SCIENTIFIC PUBLICATION 10\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Scaffolding Cost Analysis}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}PKM-AI Kemendikbudristek}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{22mm} X@{}}
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Scheme:} & {\fontsize{6.8pt}{8pt}\selectfont PKM-AI Scientific Article} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Focus:} & {\fontsize{6.8pt}{8pt}\selectfont Scaffolding Economics} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Empirical Site:} & {\fontsize{6.8pt}{8pt}\selectfont PT Solusi Industri Energi} \\[0.8mm]
        {\fontsize{6.8pt}{8pt}\selectfont\bfseries Methodology:} & {\fontsize{6.8pt}{8pt}\selectfont Capex vs Opex Comparison}
      \end{tabularx}
    \end{tcolorbox}
    \vspace{1.5mm}

    {\fontsize{7.5pt}{9pt}\selectfont\bfseries\color{pnavy}SCIENTIFIC RESEARCH FOCUS}\\[0.8mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    Comparative economic and safety analysis between rental versus purchasing schemes and modular versus tubular scaffolding systems on industrial chemical jobsites.
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}ENGINEERING ECONOMIC FINDINGS:}\\[1.5mm]
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
      {\fontsize{6pt}{7pt}\selectfont\bfseries Bukti Naskah Artikel Ilmiah: Analisa Biaya Scaffolding pada Waste Gas Recovery Project (PKM-AI)}
    \end{tcolorbox}
    \vspace{2mm}

    % Bottom Box: Comparative Economic Engineering Card
    \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=white, left=3mm, right=3mm, top=2mm, bottom=2mm, height=70mm]
      \colorbox{pred}{\fontsize{6.5pt}{7.5pt}\selectfont\bfseries\color{white}\ \ ENGINEERING ECONOMIC COMPARISON RESULTS (IBR PROJECT CASE STUDY)\ \ }\\[1.5mm]
      \begin{tabularx}{\linewidth}{@{}p{38mm} X@{}}
        {\fontsize{6.8pt}{8.2pt}\selectfont\bfseries Purchasing Scheme (Capex):} & {\fontsize{6.8pt}{8.2pt}\selectfont Total capital investment Rp 1,194,173,631 (Full asset ownership, residual salvage value retained).} \\[1.2mm]
        {\fontsize{6.8pt}{8.2pt}\selectfont\bfseries Rental Scheme (Opex):} & {\fontsize{6.8pt}{8.2pt}\selectfont Operational rental cost Rp 682,719,175 per operational cycle with zero equity recovery.} \\[1.2mm]
        {\fontsize{6.8pt}{8.2pt}\selectfont\bfseries Break-Even Threshold:} & {\fontsize{6.8pt}{8.2pt}\selectfont\bfseries\color{pred} Critical Duration: $\approx$ 1.75 Months of Utilization} \\[1.2mm]
        {\fontsize{6.8pt}{8.2pt}\selectfont\bfseries Strategic Conclusion:} & {\fontsize{6.8pt}{8.2pt}\selectfont For project durations exceeding 2 months, purchasing proves \textbf{significantly more cost-effective, saving hundreds of millions of rupiah} over recurrent rentals.}
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
\makeheader{// LEMBAR PENUTUP // INTEGRITAS DATA}{DATA AUTHENTICITY DECLARATION \& PROFESSIONAL CONTACT CHANNELS}{REZA SEPDIDE, A.Md.T. \textbar\ BNSP LEVEL 5 INTERMEDIATE BUILDING SUPERVISOR}

\noindent
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3.5mm, right=3.5mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ DATA AUTHENTICITY STATEMENT\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Formal Declaration}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Engineering Integrity \& Accountability}\\[2mm]

    {\fontsize{6.7pt}{8.6pt}\selectfont\color{psteel}
    I hereby declare under professional oath that all qualification records, educational transcripts, BNSP certification credentials, AutoCAD DED sheets, RKS specifications, BoQ/RAB cost models, S-Curve schedules, and field documentation presented herein are \textbf{authentic, legally valid, and directly verifiable}.\\[2mm]

    Padang, Sumatera Barat, 2026\\[1mm]
    \textbf{\color{pnavy}REZA SEPDIDE, A.Md.T.}\\
    {\fontsize{6.5pt}{7.5pt}\selectfont\color{pmuted}Intermediate Building Field Supervisor (BNSP Jenjang 5)}
    }
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}PROFESSIONAL COMMITMENT:}\\[1.5mm]
    {\fontsize{6.5pt}{8.2pt}\selectfont\color{psteel}
    $\bullet$ All supporting diplomas, academic transcripts, BNSP licenses, and language credentials are ready for physical verification.\\
    $\bullet$ Committed to the highest standards of the engineering professional code of ethics and construction data integrity.
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=white, left=3.5mm, right=3.5mm, top=2.5mm, bottom=2.5mm, height=100mm]
    \colorbox{pnavy}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ DIRECT COMMUNICATION CHANNELS\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Official Contact Details}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pred}Direct Inquiry Channels}\\[2mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=pbglight, left=2mm, right=2mm, top=1.5mm, bottom=1.5mm]
      {\fontsize{6.8pt}{8pt}\selectfont\bfseries\color{pnavy}EMAIL:}\\[0.2mm]
      {\fontsize{7.2pt}{9pt}\selectfont\fontfamily{cmtt}\selectfont rezasepdide@gmail.com}\\[1.2mm]

      {\fontsize{6.8pt}{8pt}\selectfont\bfseries\color{pnavy}WHATSAPP / MOBILE:}\\[0.2mm]
      {\fontsize{7.2pt}{9pt}\selectfont\fontfamily{cmtt}\selectfont +62 896-4459-0915}\\[1.2mm]

      {\fontsize{6.8pt}{8pt}\selectfont\bfseries\color{pnavy}LINKEDIN:}\\[0.2mm]
      {\fontsize{7pt}{8.5pt}\selectfont\fontfamily{cmtt}\selectfont linkedin.com/in/rezasepdide}\\[1.2mm]

      {\fontsize{6.8pt}{8pt}\selectfont\bfseries\color{pnavy}RESIDENCE:}\\[0.2mm]
      {\fontsize{7pt}{8.5pt}\selectfont Padang, Sumatera Barat, Indonesia}
    \end{tcolorbox}
  \end{tcolorbox}
  \vspace{2mm}

  \begin{tcolorbox}[sharp corners, boxrule=0.6pt, colframe=pnavy, colback=pbglight, left=2.5mm, right=2.5mm, top=2mm, bottom=2mm, height=52mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}MOBILIZATION READINESS:}\\[1.5mm]
    {\fontsize{6.3pt}{8.2pt}\selectfont\color{psteel}
    \begin{itemize}[leftmargin=3.5mm, itemsep=1.2mm, topsep=0mm, parsep=0mm]
      \item \textbf{Work Placement:} Available for immediate full-time employment across Indonesia or overseas assignment (Japan / Asia).
      \item \textbf{Field Flexibility:} Ready for on-site jobsite deployment or central technical planning office roles.
      \item \textbf{Dossier Package:} Formal legal credentials, BNSP Level 5 SKK, DED CAD Portfolio, D3 Diploma, and certified language scores ready for dispatch.
    \end{itemize}
    }
  \end{tcolorbox}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.32\linewidth}
  \vspace{0pt}
  \begin{tcolorbox}[sharp corners, boxrule=0.8pt, colframe=pborder, colback=pbglight, left=3mm, right=3mm, top=2.5mm, bottom=2.5mm, height=154mm]
    \colorbox{pred}{\fontsize{7pt}{8pt}\selectfont\bfseries\color{white}\ \ QUALIFICATION SUMMARY\ \ }\\[1.5mm]
    {\fontsize{9.5pt}{11.5pt}\selectfont\bfseries\color{pnavy}Engineering Specialization}\\[0.5mm]
    {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pmuted}Quantity Surveyor \& Field Supervisor}\\[2.5mm]

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2mm, right=2mm, top=1.8mm, bottom=1.8mm]
      {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}1. Quantity Surveying \& Estimation}\\[0.3mm]
      {\fontsize{6.3pt}{7.8pt}\selectfont\color{psteel}Precision QTO, BoQ, PUPR AHSP unit rates, rebar BBS detailing, and CCO addendum cost variance control.}
    \end{tcolorbox}
    \vspace{1.5mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2mm, right=2mm, top=1.8mm, bottom=1.8mm]
      {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}2. Site Supervision \& K3 Safety}\\[0.3mm]
      {\fontsize{6.3pt}{7.8pt}\selectfont\color{psteel}Lisensi Intermediate Building Field Supervisor BNSP KKNI Jenjang 5, SMKK \& QC mutu beton.}
    \end{tcolorbox}
    \vspace{1.5mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2mm, right=2mm, top=1.8mm, bottom=1.8mm]
      {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}3. Digital BIM \& CAD Modeling}\\[0.3mm]
      {\fontsize{6.3pt}{7.8pt}\selectfont\color{psteel}Autodesk Revit Masterclass, multi-viewport AutoCAD DED paper space layouts, and SAP2000 3D seismic analysis.}
    \end{tcolorbox}
    \vspace{1.5mm}

    \begin{tcolorbox}[sharp corners, boxrule=0.5pt, colframe=pborder, colback=white, left=2mm, right=2mm, top=1.8mm, bottom=1.8mm]
      {\fontsize{7pt}{8.5pt}\selectfont\bfseries\color{pnavy}4. Certified Bilingual Communication}\\[0.3mm]
      {\fontsize{6.3pt}{7.8pt}\selectfont\color{psteel}Japanese (SSW JAC, JFT-Basic 250, JLPT N4 165) and Professional Working English (TOEIC Prediction 640).}
    \end{tcolorbox}
  \end{tcolorbox}
\end{minipage}

\makefooter{CLOSING DOSSIER \& CONTACT}{28}
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
built_pdf = os.path.join(export_dir, "portofolio_reza_sepdide_en.pdf")
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
    public_target = "D:/whateverapp/laragon/www/ParkojiXn/public/Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf"
    shutil.copyfile(built_pdf, public_target)
    print(f"Copied to: {public_target}")

    root_target = "D:/whateverapp/laragon/www/ParkojiXn/Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf"
    shutil.copyfile(built_pdf, root_target)
    print(f"Copied to: {root_target}")

    # Render all 28 pages to images for visual review
    review_dir = "D:/whateverapp/laragon/www/ParkojiXn/scratch/pdf_review_en"
    os.makedirs(review_dir, exist_ok=True)
    pdf_doc = pdfium.PdfDocument(built_pdf)
    for idx, page in enumerate(pdf_doc):
        img = page.render(scale=1.5).to_pil()
        img_out = os.path.join(review_dir, f"page_{idx+1:02d}.png")
        img.save(img_out)
    print("All 28 pages rendered to PNG in scratch/pdf_review_en for visual inspection!")
else:
    print("PDF build failed.")
