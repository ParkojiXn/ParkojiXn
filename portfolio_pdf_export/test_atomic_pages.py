import os
import re
import subprocess
from pypdf import PdfReader

export_dir = "D:/whateverapp/laragon/www/ParkojiXn/portfolio_pdf_export"
tex_path = os.path.join(export_dir, "portofolio_reza_sepdide.tex")

with open(tex_path, "r", encoding="utf-8") as f:
    text = f.read()

# Let's inspect pages that split:
# Split the file by `\newpage`
pages = text.split(r"\newpage")
print(f"Total logical pages separated by \\newpage in source: {len(pages)}")

new_pages = []
for i, page_str in enumerate(pages):
    page_str = page_str.strip()
    if not page_str:
        continue
    
    # If it's the preamble/first page or end document:
    if r"\begin{document}" in page_str:
        # Separate preamble from page 1 content
        parts = page_str.split(r"\begin{document}")
        preamble = parts[0] + r"\begin{document}"
        p1 = parts[1].strip()
        # Wrap p1 in minipage
        wrapped_p1 = (
            r"\noindent\begin{minipage}[t][186mm][t]{\textwidth}" + "\n"
            + p1 + "\n"
            + r"\end{minipage}"
        )
        new_pages.append(preamble + "\n" + wrapped_p1)
    elif r"\end{document}" in page_str:
        p_last = page_str.replace(r"\end{document}", "").strip()
        wrapped_last = (
            r"\noindent\begin{minipage}[t][186mm][t]{\textwidth}" + "\n"
            + p_last + "\n"
            + r"\end{minipage}" + "\n" + r"\label{LastPage}" + "\n" + r"\end{document}"
        )
        new_pages.append(wrapped_last)
    else:
        # Wrap the whole page in a single unbreakable minipage!
        wrapped = (
            r"\noindent\begin{minipage}[t][186mm][t]{\textwidth}" + "\n"
            + page_str + "\n"
            + r"\end{minipage}"
        )
        new_pages.append(wrapped)

fixed_tex = ("\n\\newpage\n").join(new_pages)

with open(tex_path, "w", encoding="utf-8") as f:
    f.write(fixed_tex)

print("Compiling with atomic unbreakable minipages...")
res = subprocess.run(
    ["pdflatex", "-interaction=nonstopmode", "-output-directory=" + export_dir, tex_path],
    capture_output=True,
    text=True
)

pdf_file = os.path.join(export_dir, "portofolio_reza_sepdide.pdf")
if os.path.exists(pdf_file):
    reader = PdfReader(pdf_file)
    print(f"\n==========================================")
    print(f"RESULT: EXACTLY {len(reader.pages)} PAGES GENERATED!")
    print(f"==========================================")
    for i, p in enumerate(reader.pages):
        txt = p.extract_text()
        first = txt.splitlines()[0] if txt.splitlines() else "(Blank)"
        print(f"Page {i+1:02d}: {first[:65]}")
else:
    print("FAILED. Showing errors:")
    print("\n".join(res.stdout.splitlines()[-40:]))
