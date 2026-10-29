import os
import subprocess
import sys

base_dir = "D:/whateverapp/laragon/www/ParkojiXn/public/portfolio"
export_dir = "D:/whateverapp/laragon/www/ParkojiXn/portfolio_pdf_export"
tex_file = os.path.join(export_dir, "portofolio_reza_sepdide.tex")

def get_img(rel_path):
    # Ensure forward slashes and absolute path
    p = os.path.join(base_dir, rel_path).replace("\\", "/")
    if not os.path.exists(p):
        print(f"WARNING: Image not found: {p}")
    return p

content = []

# --- PREAMBLE ---
content.append(r"""\documentclass[10pt,a4paper,landscape]{article}
\usepackage[landscape, a4paper, left=12mm, right=12mm, top=12mm, bottom=12mm, footskip=7mm, headheight=0mm]{geometry}
\usepackage{graphicx}
\usepackage{xcolor}
\usepackage{tikz}
\usepackage{tabularx}
\usepackage{array}
\usepackage{multicol}
\usepackage{fancyhdr}
\usepackage{helvet}
\usepackage{lastpage}
\renewcommand{\familydefault}{\sfdefault}

% --- COLOR PALETTE (VoiceBox Editorial Architectural) ---
\definecolor{primaryblack}{HTML}{0A0A0A}
\definecolor{darkgray}{HTML}{262626}
\definecolor{midgray}{HTML}{525252}
\definecolor{bordergray}{HTML}{D4D4D4}
\definecolor{boxbg}{HTML}{F8F9FA}
\definecolor{cardbg}{HTML}{FFFFFF}
\definecolor{accentred}{HTML}{EF4444}
\definecolor{darkred}{HTML}{B91C1C}
\definecolor{taggreen}{HTML}{16A34A}
\definecolor{softred}{HTML}{FEF2F2}

% --- RUNNING HEADERS & FOOTERS ---
\pagestyle{fancy}
\fancyhf{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

\fancyfoot[L]{%
  \begin{tikzpicture}[remember picture, overlay]
    \node[anchor=south west, inner sep=0pt, xshift=12mm, yshift=4mm] at (current page.south west) {%
      \footnotesize\sffamily\bfseries\color{midgray}%
      REZA SEPDIDE, A.Md.T. \quad \textbar \quad LISENSI BNSP KKNI JENJANG 5 \quad \textbar \quad D4 MANAJEMEN REKAYASA KONSTRUKSI (ON GOING)%
    };
    \node[anchor=south east, inner sep=0pt, xshift=-12mm, yshift=4mm] at (current page.south east) {%
      \footnotesize\sffamily\bfseries\color{primaryblack}%
      DOSIR PORTOFOLIO TEKNIK SIPIL \quad \textbar \quad HALAMAN \thepage\ DARI \pageref{LastPage}%
    };
    \draw[line width=1pt, color=bordergray] ([xshift=12mm, yshift=9mm]current page.south west) -- ([xshift=-12mm, yshift=9mm]current page.south east);
  \end{tikzpicture}%
}

% Macro for Header Banner on each Content Page
\newcommand{\pageheader}[2]{%
  \noindent
  \begin{minipage}{\textwidth}
    \begin{tikzpicture}
      \node[inner sep=0pt, text width=\textwidth] {%
        \begin{tabularx}{\textwidth}{@{}l >{\raggedleft\arraybackslash}X@{}}
          {\small\bfseries\color{accentred}// #1} & {\scriptsize\bfseries\color{midgray}AUTHENTICATED ENGINEERING DOSSIER \textbar\ 2026} \\
          {\Large\bfseries\color{primaryblack}#2} & {\scriptsize\fontfamily{cmtt}\selectfont\bfseries\color{primaryblack}PADANG, SUMATERA BARAT, INDONESIA} \\
        \end{tabularx}%
      };
      \draw[line width=1.8pt, color=primaryblack] (0,-0.6) -- (\textwidth,-0.6);
      \draw[line width=3pt, color=accentred] (0,-0.6) -- (4cm,-0.6);
    \end{tikzpicture}
  \end{minipage}\vspace{3mm}
}

\begin{document}
""")

print("Preamble written successfully.")
