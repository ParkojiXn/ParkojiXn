import os
import subprocess
from pypdf import PdfReader

export_dir = "D:/whateverapp/laragon/www/ParkojiXn/portfolio_pdf_export"
tex_path = os.path.join(export_dir, "portofolio_reza_sepdide.tex")

with open(tex_path, "r", encoding="utf-8") as f:
    text = f.read()

# 1. Reduce top/bottom margins slightly to give 188mm printable height:
# top=9mm, bottom=9mm
text = text.replace(
    r"\usepackage[landscape, a4paper, left=12mm, right=12mm, top=11mm, bottom=12mm, footskip=7mm, headheight=0mm]{geometry}",
    r"\usepackage[landscape, a4paper, left=10mm, right=10mm, top=8mm, bottom=9mm, footskip=6mm, headheight=0mm]{geometry}"
)

# 2. In \pagehead, reduce \vspace to 1.5mm
text = text.replace(
    r"\end{minipage}\vspace{2.5mm}",
    r"\end{minipage}\vspace{1.5mm}"
)
text = text.replace(
    r"\end{minipage}\vspace{3mm}",
    r"\end{minipage}\vspace{1.5mm}"
)

# 3. For all certificate images with height=148mm, scale to height=130mm
text = text.replace("height=148mm", "height=130mm")

# 4. On cover page, adjust spacing
text = text.replace(r"\vspace{5mm}", r"\vspace{2mm}")
text = text.replace(r"\vspace{4mm}", r"\vspace{2mm}")
text = text.replace(r"\vspace{3mm}", r"\vspace{1.5mm}")
text = text.replace(r"\fontsize{28pt}{32pt}", r"\fontsize{24pt}{28pt}")

# 5. On page 2 (Profil & Pendidikan), reduce vspaces
text = text.replace(r"\item \textbf{Politeknik", r"\setlength{\itemsep}{0.2mm}\item \textbf{Politeknik")

with open(tex_path, "w", encoding="utf-8") as f:
    f.write(text)

print("Compiling with updated geometry & image scaling...")
res = subprocess.run(
    ["pdflatex", "-interaction=nonstopmode", "-output-directory=" + export_dir, tex_path],
    capture_output=True,
    text=True
)

pdf_file = os.path.join(export_dir, "portofolio_reza_sepdide.pdf")
if os.path.exists(pdf_file):
    reader = PdfReader(pdf_file)
    print(f"NEW TOTAL PAGES: {len(reader.pages)}")
    for i, p in enumerate(reader.pages):
        txt = p.extract_text()
        first = txt.splitlines()[0] if txt.splitlines() else "(Blank)"
        print(f"Page {i+1}: {first[:60]}")
