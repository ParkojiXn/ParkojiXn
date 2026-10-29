import os
from pypdf import PdfReader

pdf_path = "D:/whateverapp/laragon/www/ParkojiXn/portfolio_pdf_export/portofolio_reza_sepdide.pdf"
reader = PdfReader(pdf_path)
print(f"Total Pages: {len(reader.pages)}")
for i, page in enumerate(reader.pages):
    box = page.mediabox
    w, h = float(box.width), float(box.height)
    orient = "Landscape" if w > h else "Portrait"
    print(f"Page {i+1}: {w:.1f} x {h:.1f} pt ({orient})")
