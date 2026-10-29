import os
from pypdf import PdfReader

pdf_path = "D:/whateverapp/laragon/www/ParkojiXn/portfolio_pdf_export/portofolio_reza_sepdide.pdf"
reader = PdfReader(pdf_path)

for i, page in enumerate(reader.pages):
    txt = page.extract_text()
    first_line = txt.splitlines()[0] if txt.splitlines() else "(Blank / Image only)"
    second_line = txt.splitlines()[1] if len(txt.splitlines()) > 1 else ""
    print(f"Page {i+1}: {first_line[:70]} | {second_line[:50]}")
