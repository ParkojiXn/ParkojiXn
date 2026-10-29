import os
import re
import subprocess

export_dir = "D:/whateverapp/laragon/www/ParkojiXn/portfolio_pdf_export"
tex_path = os.path.join(export_dir, "portofolio_reza_sepdide.tex")

with open(tex_path, "r", encoding="utf-8") as f:
    text = f.read()

# Replace any unescaped '&' that is NOT a table delimiter
# A table delimiter in our tex file is preceded by `\end{center} &` or `\end{tabularx}` or in `{@{}lX@{}}` lines
# Specifically, we can replace words like ' & ' with ' \& ' if they are inside text captions/descriptions

def fix_ampersands(line):
    # If the line ends with ' &', that's a column delimiter!
    # If '&' is used as a word in text (e.g. 'mutu & biaya', 'pengecoran & pasangan', 'balok & kolom', 'BoQ & S-Curve')
    # we replace '&' with '\&'
    # First, let's protect intentional table separators:
    # Pattern: \end{center} &
    line = re.sub(r'\\end\{center\}\s*&', r'\\end{center} __COL_SEP__', line)
    line = re.sub(r'\\end\{minipage\}\s*&', r'\\end{minipage} __COL_SEP__', line)
    line = re.sub(r'\}\\s*&', r'} __COL_SEP__', line)
    
    # Replace unescaped & with \&
    line = re.sub(r'(?<!\\)&', r'\&', line)
    
    # Restore column separators
    line = line.replace('__COL_SEP__', '&')
    return line

lines = text.splitlines()
fixed_lines = []
for line in lines:
    # Skip preamble table specs like \begin{tabularx}{\textwidth}{@{}l >{\raggedleft\arraybackslash}X@{}}
    if r'\begin{tabularx}' in line or r'\begin{tabular}' in line:
        fixed_lines.append(line)
    elif r'\end{center} &' in line or r'\end{center} &' in line or r'\framebox' in line:
        # Split on deliberate table separator
        parts = line.split(r'\end{center} &')
        fixed_parts = []
        for p in parts:
            # Replace unescaped & with \&
            fixed_parts.append(re.sub(r'(?<!\\)&', r'\&', p))
        fixed_lines.append(r'\end{center} &'.join(fixed_parts))
    else:
        # Replace unescaped & with \&
        fixed_lines.append(re.sub(r'(?<!\\)&', r'\&', line))

fixed_text = "\n".join(fixed_lines)

with open(tex_path, "w", encoding="utf-8") as f:
    f.write(fixed_text)

print("Fixed ampersands. Now compiling with pdflatex...")
res = subprocess.run(
    ["pdflatex", "-interaction=nonstopmode", "-output-directory=" + export_dir, tex_path],
    capture_output=True,
    text=True
)

print("Return code:", res.returncode)
with open(os.path.join(export_dir, "compile_output.log"), "w", encoding="utf-8") as f:
    f.write(res.stdout)

pdf_file = os.path.join(export_dir, "portofolio_reza_sepdide.pdf")
if os.path.exists(pdf_file):
    print(f"SUCCESS! Output PDF size: {os.path.getsize(pdf_file) / (1024*1024):.2f} MB")
else:
    print("FAILED. Showing last 50 lines of log:")
    print("\n".join(res.stdout.splitlines()[-50:]))
