import os
import subprocess
import sys

base_dir = "D:/whateverapp/laragon/www/ParkojiXn/public/portfolio"
export_dir = "D:/whateverapp/laragon/www/ParkojiXn/portfolio_pdf_export"
tex_file = os.path.join(export_dir, "portofolio_reza_sepdide.tex").replace("\\", "/")

def get_p(rel_path):
    p = os.path.join(base_dir, rel_path).replace("\\", "/")
    if not os.path.exists(p):
        print(f"WARNING: Asset not found on disk: {p}")
    return p

# Check key assets first
profile_img = get_p("profile/professional-photo.jpeg")
cert_skk = get_p("certificates/skk-bnsp-jenjang5.pdf")
cert_revit = get_p("certificates/sertifikat-revit.pdf")
cert_ssw = get_p("certificates/ssw-japan.pdf")
cert_jft = get_p("certificates/jft-basic.pdf")
cert_jlpt = get_p("certificates/jlpt-n4.pdf")
cert_magang = get_p("certificates/sertifikat-magang-sie.pdf")
cert_toeic = get_p("certificates/toeic-640.pdf")
cert_transkrip = get_p("certificates/transkrip-nilai.pdf")

print("All primary certificate assets checked.")
