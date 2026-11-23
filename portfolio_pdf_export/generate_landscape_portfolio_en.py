#!/usr/bin/env python3
"""
generate_landscape_portfolio.py
Generates the publication-grade A4 LANDSCAPE Portfolio PDF for Reza Sepdide, A.Md.T.
Strictly configured to:
- Dimensions: A4 Landscape (297mm x 210mm)
- Color Scheme: 75% Cream (#F3EEE3), 20% Ink Black (#111111), 5% Burnt Orange (#D9541E)
- Official High-Res PNP Logo (from user's upload)
- Full references incorporated:
  - Page 1: Cover (CIVIL ENGINEERING PORTFOLIO)
  - Page 2: Tentang Saya (Arch-framed photo + Ink Black summary card + 4 pillars)
  - Page 3: Latar Belakang Pendidikan (PNP official logo, IPK 3.72, Pre-Project Capstone SAP2000 & Tugas Akhir DPRD Pasaman)
  - Pages 4-11: Full technical engineering dossier
"""

import os
import sys
import base64
import subprocess
import shutil

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EXPORT_DIR = os.path.join(ROOT_DIR, "portfolio_pdf_export")
HTML_PATH = os.path.join(EXPORT_DIR, "portofolio_reza_sepdide_landscape_en.html")
PDF_PATH = os.path.join(EXPORT_DIR, "Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf")

def to_b64(rel_path):
    full_path = os.path.join(ROOT_DIR, rel_path)
    if not os.path.exists(full_path):
        full_path = os.path.join(EXPORT_DIR, rel_path)
    if not os.path.exists(full_path):
        return ""
    ext = os.path.splitext(full_path)[1].lower().replace(".", "")
    if ext == "jpg":
        ext = "jpeg"
    with open(full_path, "rb") as f:
        data = base64.b64encode(f.read()).decode("utf-8")
    return f"data:image/{ext};base64,{data}"

def build_html():
    # Asset Base64 Data URIs
    b64_photo = to_b64("portfolio_pdf_export/professional_photo_shifted.jpeg")
    # Official PNP Logo provided by user
    b64_pnp_logo = to_b64("portfolio_pdf_export/extracted_assets/pnp_logo_600.png")
    b64_qr = to_b64("portfolio_pdf_export/qr_portfolio_vercel.png")

    # Site Inspector
    b64_si_penulangan = to_b64("portfolio/site-inspector/pengerjaan-penulangan.jpeg")
    b64_si_sengkang = to_b64("portfolio/site-inspector/pengukuran-jarak-sengkang.jpeg")
    b64_si_card = to_b64("portfolio/site-inspector/si.jpeg")
    b64_si_laporan = to_b64("portfolio/site-inspector/laporan-mingguan-1.png")

    # Fasilitator
    b64_fas_monitoring = to_b64("portfolio/fasilitator/site-monitoring.jpeg")
    b64_fas_bimtek = to_b64("portfolio/fasilitator/bimtek.jpeg")

    # Magang SIE
    b64_mag_slump = to_b64("portfolio/magang-sie/slump-test.jpg")
    b64_mag_pembesian = to_b64("portfolio/magang-sie/mapping-work.png")
    b64_mag_daily = to_b64("portfolio_pdf_export/magang_daily_progress_cropped.png")
    b64_mag_punch = to_b64("portfolio/magang-sie/punch-list.png")

    # KB Ar-Rahma
    b64_kb_ded = to_b64("portfolio/kb-ar-rahma/gambar.png")
    b64_kb_rab = to_b64("portfolio/kb-ar-rahma/rab.png")
    b64_kb_ks = to_b64("portfolio/kb-ar-rahma/kurva-s.png")

    # TK Pembina
    b64_tk_ded = to_b64("portfolio/tk-pembina/ded.png")
    b64_tk_rab = to_b64("portfolio/tk-pembina/rab.png")
    b64_tk_ks = to_b64("portfolio/tk-pembina/kurva-s.png")

    # SDN 19 Kuamang
    b64_kua_ded = to_b64("portfolio/sdn-19-kuamang/menggunakan-layout-autocad.png")
    b64_kua_ks = to_b64("portfolio_pdf_export/kuamang_kurva_s_cropped.png")
    b64_kua_rks = to_b64("portfolio_pdf_export/kuamang_rks_cropped.png")

    # SLBN 2 Pariaman
    b64_slb_ded = to_b64("portfolio/slbn-2-pariaman/1.png")
    b64_slb_cco = to_b64("portfolio_pdf_export/slbn_cco_cropped.png")

    # WWTP & Revit
    b64_wwtp_bbs = to_b64("portfolio/wwtp-perfetti/bbs.png")
    b64_wwtp_bv = to_b64("portfolio/wwtp-perfetti/backup-vol.png")
    b64_revit_portal = to_b64("portfolio/revit/screenshot-2026-10-29-123825.png")

    # Final Project & Pra Proyek
    b64_fp_msp = to_b64("portfolio_pdf_export/final_project_msp_cropped.png")
    b64_fp_ks = to_b64("portfolio_pdf_export/final_project_kurvas_cropped.png")
    b64_sap = to_b64("portfolio/pra-proyek/sap2000.png")
    b64_sap_gempa = to_b64("portfolio/pra-proyek/beban-gempa.png")

    # Tender UNS & PKM-AI
    b64_uns_poster = to_b64("portfolio/tender-uns/poster-jaya-jaya-team.jpg")
    b64_uns_render = to_b64("portfolio/tender-uns/render-uns-2.jpg")
    b64_pkm = to_b64("portfolio/artikel-ilmiah/screenshot-2026-10-29-120442.png")
    # Certificates & Licensing Evidence
    b64_cert_bnsp = to_b64("portfolio_pdf_export/extracted_assets/cert_bnsp.png")
    b64_cert_revit = to_b64("portfolio_pdf_export/extracted_assets/cert_revit.png")
    b64_cert_ssw = to_b64("portfolio_pdf_export/extracted_assets/cert_ssw.png")
    b64_cert_jlpt = to_b64("portfolio_pdf_export/extracted_assets/cert_jlpt.png")
    b64_cert_toeic = to_b64("portfolio_pdf_export/extracted_assets/cert_toeic.png")
    b64_cert_transkrip = to_b64("portfolio_pdf_export/extracted_assets/cert_transkrip.png")


    # SVG Icons
    svg_phone = """<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>"""
    svg_mail = """<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>"""
    svg_linkedin = """<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>"""
    svg_globe = """<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>"""

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Civil Engineering Portfolio Landscape — Reza Sepdide, A.Md.T.</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,500;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

    @page {{
      size: 297mm 210mm;
      margin: 0;
    }}

    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }}

    body {{
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: #F3EEE3;
      color: #111111;
      font-size: 9pt;
      line-height: 1.45;
    }}

    .page {{
      width: 297mm;
      height: 210mm;
      position: relative;
      overflow: hidden;
      page-break-after: always;
      background-color: #F3EEE3;
      display: flex;
      flex-direction: column;
    }}

    /* Typography Classes */
    .font-serif {{
      font-family: 'Playfair Display', 'Cormorant Garamond', Georgia, serif;
    }}

    /* Page Running Header & Footer */
    .page-header-bar {{
      background-color: #111111;
      color: #F3EEE3;
      padding: 4mm 14mm;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2.5px solid #D9541E;
    }}
    .page-header-title {{
      font-family: 'Playfair Display', serif;
      font-size: 13pt;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #F3EEE3;
      display: flex;
      align-items: center;
      gap: 3mm;
    }}
    .page-header-tag {{
      background-color: #D9541E;
      color: #F3EEE3;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 6.8pt;
      font-weight: 700;
      padding: 0.8mm 2.2mm;
      border-radius: 2px;
      letter-spacing: 0.05em;
    }}
    .page-header-sub {{
      font-size: 7.2pt;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #DDD6C7;
    }}

    .page-body {{
      flex: 1;
      padding: 6mm 14mm;
      display: flex;
      flex-direction: column;
      gap: 4mm;
      background-color: #F3EEE3;
      position: relative;
    }}

    .page-footer {{
      height: 8mm;
      padding: 0 14mm;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #DDD6C7;
      background-color: #F3EEE3;
      font-size: 6.5pt;
      font-weight: 600;
      color: #737373;
      letter-spacing: 0.05em;
    }}

    /* =========================================================================
       PAGE 1: COVER (LANDSCAPE)
       ========================================================================= */
    .cover-container {{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      background-color: #F3EEE3;
      padding: 12mm 16mm;
      gap: 14mm;
      justify-content: space-between;
      align-items: stretch;
    }}
    .cover-left {{
      flex: 1.35;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }}
    .cover-title-area {{
      display: flex;
      flex-direction: column;
    }}
    .cover-top-label {{
      font-family: 'Playfair Display', serif;
      font-size: 22pt;
      font-weight: 500;
      letter-spacing: 0.08em;
      color: #111111;
      line-height: 1.1;
    }}
    .cover-main-title {{
      font-family: 'Playfair Display', serif;
      font-size: 32pt;
      font-weight: 700;
      letter-spacing: 0.08em;
      color: #111111;
      line-height: 1.05;
      margin-top: 1mm;
    }}
    .cover-line {{
      width: 48mm;
      height: 3px;
      background-color: #D9541E;
      margin-top: 3.5mm;
      margin-bottom: 3.5mm;
    }}
    .cover-desc {{
      font-size: 8.5pt;
      color: #3E3E3E;
      line-height: 1.45;
      max-width: 90%;
    }}

    .cover-name-area {{
      margin-top: 5mm;
      margin-bottom: 5mm;
    }}
    .cover-name {{
      font-family: 'Playfair Display', serif;
      font-size: 20pt;
      font-weight: 700;
      color: #111111;
      letter-spacing: 0.05em;
    }}
    .cover-role {{
      font-size: 8.5pt;
      font-weight: 700;
      color: #D9541E;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-top: 1mm;
    }}
    .cover-badges-row {{
      display: flex;
      flex-wrap: wrap;
      gap: 2mm;
      margin-top: 3mm;
    }}
    .cover-badge {{
      background: #FAF7F0;
      border: 1px solid #DDD6C7;
      border-left: 3px solid #111111;
      padding: 1.2mm 2.8mm;
      font-size: 6.8pt;
      font-weight: 700;
      color: #111111;
      letter-spacing: 0.03em;
    }}

    .cover-contacts-grid {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2mm 4mm;
      padding-top: 4mm;
      border-top: 1.5px solid #DDD6C7;
    }}
    .cover-contact-item {{
      display: flex;
      align-items: center;
      gap: 2.2mm;
      font-size: 7.8pt;
      color: #111111;
      font-weight: 500;
    }}
    .cover-contact-item svg {{
      color: #D9541E;
      flex-shrink: 0;
    }}

    .cover-right {{
      flex: 0.95;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
    }}
    .cover-photo-card {{
      width: 102mm;
      height: 168mm;
      background: #FAF7F0;
      padding: 3.5mm;
      border: 2px solid #111111;
      box-shadow: 6px 6px 0 #D9541E;
      display: flex;
      flex-direction: column;
    }}
    .cover-photo-card img {{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
    }}
    .cover-photo-tag {{
      text-align: center;
      margin-top: 3mm;
      font-size: 7.2pt;
      font-weight: 700;
      color: #111111;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }}

    /* =========================================================================
       PAGE 2: TENTANG SAYA (LANDSCAPE)
       ========================================================================= */
    .about-landscape-grid {{
      display: flex;
      gap: 8mm;
      align-items: stretch;
      flex: 1;
    }}
    .about-left-arch {{
      flex: 0.75;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }}
    .about-arch-frame {{
      width: 95mm;
      height: 168mm;
      border-radius: 47.5mm 47.5mm 4px 4px;
      overflow: hidden;
      background: #FAF7F0;
      padding: 3mm 3mm 0 3mm;
      border: 2px solid #111111;
      box-shadow: 5px 5px 0 #D9541E;
    }}
    .about-arch-frame img {{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
      border-radius: 44.5mm 44.5mm 2px 2px;
    }}

    .about-right-content {{
      flex: 1.55;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }}
    .about-header-row {{
      display: flex;
      align-items: baseline;
      gap: 3mm;
      margin-bottom: 2.5mm;
    }}
    .about-main-title {{
      font-family: 'Playfair Display', serif;
      font-size: 21pt;
      font-weight: 700;
      color: #111111;
    }}
    .about-tag {{
      font-size: 7.2pt;
      font-weight: 700;
      color: #D9541E;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }}

    .about-ink-card {{
      background-color: #111111;
      color: #F3EEE3;
      border-radius: 4px;
      padding: 4.5mm 6mm;
      display: flex;
      flex-direction: column;
      gap: 2mm;
      border-left: 4px solid #D9541E;
    }}
    .about-ink-card p {{
      font-size: 8.1pt;
      line-height: 1.55;
      color: #F3EEE3;
      text-align: justify;
    }}
    .about-ink-card strong {{
      color: #FFFFFF;
    }}

    .about-pillars-row {{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2.5mm;
      margin-top: 3mm;
    }}
    .pillar-box {{
      background: #FAF7F0;
      border: 1px solid #DDD6C7;
      border-top: 3px solid #111111;
      padding: 2.8mm 3mm;
      display: flex;
      flex-direction: column;
    }}
    .pillar-num {{
      font-family: 'Playfair Display', serif;
      font-size: 11pt;
      font-weight: 700;
      color: #D9541E;
    }}
    .pillar-heading {{
      font-size: 7.5pt;
      font-weight: 700;
      color: #111111;
      margin-top: 0.8mm;
      line-height: 1.25;
    }}
    .pillar-detail {{
      font-size: 6.6pt;
      color: #3E3E3E;
      margin-top: 1mm;
      line-height: 1.35;
    }}

    /* =========================================================================
       PAGE 3: EDUCATION &amp; ACADEMICS (LANDSCAPE DUAL-COLUMN)
       ========================================================================= */
    .edu-header-landscape {{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5mm;
      background: #FAF7F0;
      border: 1.5px solid #DDD6C7;
      padding: 2.5mm 6mm;
      border-left: 4px solid #D9541E;
    }}
    .edu-pnp-logo-landscape {{
      width: 14mm;
      height: 14mm;
      object-fit: contain;
    }}
    .edu-header-text {{
      display: flex;
      flex-direction: column;
    }}
    .edu-inst-name {{
      font-family: 'Playfair Display', serif;
      font-size: 12pt;
      font-weight: 700;
      color: #111111;
      letter-spacing: 0.05em;
    }}
    .edu-meta-row {{
      font-size: 7.8pt;
      font-weight: 600;
      color: #3E3E3E;
      display: flex;
      gap: 3mm;
      align-items: center;
    }}
    .edu-gpa-badge {{
      color: #D9541E;
      font-weight: 700;
    }}

    .edu-dual-grid {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4.5mm;
      flex: 1;
      align-items: stretch;
    }}
    .edu-col-box {{
      background: #FAF7F0;
      border: 1.5px solid #DDD6C7;
      border-top: 3.5px solid #111111;
      padding: 3.5mm 4.5mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }}
    .edu-col-title-bar {{
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      border-bottom: 1px solid #DDD6C7;
      padding-bottom: 1.5mm;
    }}
    .edu-col-main-title {{
      font-family: 'Playfair Display', serif;
      font-size: 11pt;
      font-weight: 700;
      color: #111111;
    }}
    .edu-col-badge {{
      font-size: 6.5pt;
      font-weight: 700;
      color: #D9541E;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }}
    .edu-col-subtitle {{
      font-size: 7.8pt;
      font-weight: 700;
      font-style: italic;
      color: #3E3E3E;
      margin-top: 1.5mm;
      margin-bottom: 1.5mm;
      line-height: 1.3;
    }}
    .edu-list {{
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1.2mm;
    }}
    .edu-item {{
      font-size: 7.1pt;
      color: #222222;
      line-height: 1.35;
      display: flex;
      align-items: flex-start;
      gap: 1.8mm;
    }}
    .edu-dot {{
      width: 3.5px;
      height: 3.5px;
      background: #D9541E;
      border-radius: 50%;
      margin-top: 1.6mm;
      flex-shrink: 0;
    }}
    .edu-preview-landscape {{
      width: 100%;
      height: 85mm;
      object-fit: contain;
      background: #FFFFFF;
      border: 1px solid #DDD6C7;
      margin-top: 2.5mm;
      padding: 1.5mm;
    }}

    /* =========================================================================
       PAGE 4: LISENSI & SERTIFIKASI (LANDSCAPE 6-GRID)
       ========================================================================= */
    .cert-landscape-grid {{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3.5mm;
      flex: 1;
    }}

    .cert-thumb-box {{
      height: 48mm;
      background: #FFFFFF;
      border: 1px solid #DDD6C7;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      margin-top: 2mm;
    }}
    .cert-thumb-box img {{
      width: 100%;
      height: 100%;
      object-fit: contain;
      background: #FFFFFF;
    }}
    .cert-thumb-tag {{
      font-size: 5.6pt;
      font-weight: 700;
      color: #111111;
      text-align: center;
      padding: 0.6mm;
      background: #EAE4D7;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      letter-spacing: 0.03em;
    }}
    .cert-box {{
      background: #FAF7F0;
      border: 1.2px solid #DDD6C7;
      border-left: 3.5px solid #111111;
      padding: 3mm 3.5mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }}
    .cert-badge-tag {{
      display: inline-block;
      font-size: 6.2pt;
      font-weight: 700;
      color: #D9541E;
      background: #EAE4D7;
      border: 0.5px solid #DDD6C7;
      padding: 0.6mm 1.8mm;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      width: fit-content;
    }}
    .cert-heading {{
      font-family: 'Playfair Display', serif;
      font-size: 9.2pt;
      font-weight: 700;
      color: #111111;
      margin-top: 1.2mm;
      line-height: 1.2;
    }}
    .cert-sub {{
      font-size: 7pt;
      font-weight: 600;
      color: #3E3E3E;
      margin-top: 0.8mm;
    }}
    .cert-paragraph {{
      font-size: 6.7pt;
      color: #222222;
      line-height: 1.35;
      margin-top: 1.2mm;
    }}

    /* =========================================================================
       PROJECT & EXPERIENCE CARDS (LANDSCAPE)
       ========================================================================= */
    .section-split-2 {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4.5mm;
      flex: 1;
    }}
    .exp-landscape-card {{
      background: #FAF7F0;
      border: 1.5px solid #DDD6C7;
      border-top: 3.5px solid #111111;
      padding: 3.5mm 4.5mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }}
    .exp-title-row {{
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      border-bottom: 1px solid #DDD6C7;
      padding-bottom: 1.5mm;
    }}
    .exp-role-title {{
      font-family: 'Playfair Display', serif;
      font-size: 10.5pt;
      font-weight: 700;
      color: #111111;
    }}
    .exp-time-badge {{
      font-size: 7pt;
      font-weight: 700;
      color: #D9541E;
      background: #EAE4D7;
      padding: 0.6mm 2mm;
    }}
    .exp-company-sub {{
      font-size: 7.6pt;
      font-weight: 700;
      color: #3E3E3E;
      margin-top: 0.8mm;
      letter-spacing: 0.02em;
    }}
    .exp-tasks-list {{
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1.2mm;
      margin-top: 1.5mm;
    }}
    .exp-task-item {{
      font-size: 6.9pt;
      color: #222222;
      line-height: 1.35;
      display: flex;
      align-items: flex-start;
      gap: 1.8mm;
    }}

    .exp-gallery-2x2 {{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2mm;
      margin-top: 2.5mm;
    }}
    .exp-thumb-box-p6 {{
      height: 98mm;
      background: #FFFFFF;
      border: 1px solid #DDD6C7;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }}
    .exp-thumb-box-p6 img {{
      width: 100%;
      height: 100%;
      object-fit: contain;
      background: #FFFFFF;
    }}
    .exp-gallery-row {{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2mm;
      margin-top: 2.5mm;
    }}
    .exp-thumb-box {{
      height: 52mm;
      background: #FFFFFF;
      border: 1px solid #DDD6C7;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }}
    .exp-thumb-box img {{
      width: 100%;
      height: 100%;
      object-fit: contain;
      background: #FFFFFF;
    }}
    .exp-thumb-tag {{
      font-size: 5.8pt;
      font-weight: 600;
      color: #111111;
      text-align: center;
      padding: 0.6mm;
      background: #EAE4D7;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }}

    .proj-landscape-card {{
      background: #FAF7F0;
      border: 1.5px solid #DDD6C7;
      border-top: 3.5px solid #111111;
      padding: 3.5mm 4.5mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }}
    .proj-title-landscape {{
      font-family: 'Playfair Display', serif;
      font-size: 10.5pt;
      font-weight: 700;
      color: #111111;
    }}
    .proj-val-landscape {{
      font-size: 7.2pt;
      font-weight: 700;
      color: #D9541E;
    }}
    .proj-desc-landscape {{
      font-size: 6.9pt;
      color: #222222;
      line-height: 1.35;
      margin-top: 1.2mm;
    }}
    .proj-gallery-3 {{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2.2mm;
      margin-top: 2.5mm;
    }}
    .proj-thumb-3 {{
      height: 105mm;
      background: #FFFFFF;
      border: 1px solid #DDD6C7;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }}
    .proj-thumb-3 img {{
      width: 100%;
      height: 100%;
      object-fit: contain;
      background: #FFFFFF;
    }}

    /* =========================================================================
       PAGE 11: SOFTWARE, BAHASA & CLOSING (LANDSCAPE)
       ========================================================================= */
    .p11-landscape-grid {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5mm;
      flex: 1;
    }}
    .software-landscape-box {{
      background: #FAF7F0;
      border: 1.5px solid #DDD6C7;
      border-top: 3.5px solid #111111;
      padding: 4mm 5mm;
      display: flex;
      flex-direction: column;
      gap: 2mm;
    }}
    .box-heading-p11 {{
      font-family: 'Playfair Display', serif;
      font-size: 10.5pt;
      font-weight: 700;
      color: #111111;
      padding-bottom: 1.5mm;
      border-bottom: 1px solid #DDD6C7;
      margin-bottom: 1mm;
    }}
    .sw-row {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 7.3pt;
    }}
    .sw-bar-bg {{
      width: 45mm;
      height: 3.2mm;
      background: #DDD6C7;
      overflow: hidden;
    }}
    .sw-bar-fill {{
      height: 100%;
      background: #111111;
    }}

    .closing-landscape-box {{
      grid-column: span 2;
      background: #111111;
      color: #F3EEE3;
      border-left: 5px solid #D9541E;
      padding: 4.5mm 6mm;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6mm;
      margin-top: 2mm;
    }}
    .closing-left-col {{
      flex: 1;
    }}
    .closing-title-h {{
      font-family: 'Playfair Display', serif;
      font-size: 11pt;
      font-weight: 700;
      color: #F3EEE3;
    }}
    .closing-text-p {{
      font-size: 7.2pt;
      color: #DDD6C7;
      line-height: 1.4;
      margin-top: 1mm;
    }}
    .closing-qr-box {{
      width: 25mm;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #FAF7F0;
      padding: 2mm;
      border: 1px solid #D9541E;
    }}
    .closing-qr-box img {{
      width: 20mm;
      height: 20mm;
    }}
    .closing-qr-txt {{
      font-size: 5.5pt;
      font-weight: 700;
      color: #111111;
      margin-top: 1mm;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }}
  </style>
</head>
<body>

  <!-- =======================================================================
       PAGE 1: COVER (LANDSCAPE)
       ======================================================================= -->
  <div class="page">
    <div class="cover-container">
      <div class="cover-left">
        <div class="cover-title-area">
          <div class="cover-top-label font-serif">CIVIL ENGINEERING</div>
          <div class="cover-main-title font-serif">PORTFOLIO</div>
          <div class="cover-line"></div>
          <div class="cover-desc">
            Technical Dossier in Civil Engineering, Quantity Surveying (QS), Structural DED & BoQ Cost Estimating, On-Site Quality Control, BNSP Level 5 State License, and BIM Revit Modeling.
          </div>
        </div>

        <div class="cover-name-area">
          <div class="cover-name font-serif">REZA SEPDIDE, A.Md.T.</div>
          <div class="cover-role">Civil Engineer &bull; Quantity Surveyor &bull; Construction Planner</div>
          <div class="cover-badges-row">
            <div class="cover-badge">IPK 3.72 / 4.00 PNP &bull; CUM LAUDE</div>
            <div class="cover-badge">BNSP 5 PELAKSANA GEDUNG MADYA</div>
            <div class="cover-badge">13+ ENGINEERING PROJECTS</div>
            <div class="cover-badge">BILINGUAL JP &amp; EN CERTIFIED</div>
          </div>
        </div>

        <div class="cover-contacts-grid">
          <div class="cover-contact-item">
            {svg_phone}
            <span>+62 896-4459-0915</span>
          </div>
          <div class="cover-contact-item">
            {svg_mail}
            <span>rezasepdide@gmail.com</span>
          </div>
          <div class="cover-contact-item">
            {svg_linkedin}
            <span>linkedin.com/in/rezasepdide</span>
          </div>
          <div class="cover-contact-item">
            {svg_globe}
            <span>professionalwebsiteportofolio.vercel.app</span>
          </div>
        </div>
      </div>

      <div class="cover-right">
        <div class="cover-photo-card">
          <img src="{b64_photo}" alt="Reza Sepdide, A.Md.T.">
        </div>
        <div class="cover-photo-tag">Padang, Sumatera Barat, Indonesia</div>
      </div>
    </div>
  </div>

  <!-- =======================================================================
       HALAMAN 2: TENTANG SAYA (LANDSCAPE)
       ======================================================================= -->
  <div class="page">
    <div class="page-header-bar">
      <div class="page-header-title">
        <span>PROFESSIONAL PROFILE</span>
        <span class="page-header-tag">EXECUTIVE SUMMARY</span>
      </div>
      <div class="page-header-sub">REZA SEPDIDE, A.Md.T. &bull; CIVIL ENGINEERING PNP</div>
    </div>

    <div class="page-body">
      <div class="about-landscape-grid">
        <div class="about-left-arch">
          <div class="about-arch-frame">
            <img src="{b64_photo}" alt="Foto Profil Reza Sepdide">
          </div>
        </div>

        <div class="about-right-content">
          <div>
            <div class="about-header-row">
              <div class="about-main-title font-serif">About me</div>
              <div class="about-tag">// Technical Rigor &amp; Engineering Integrity</div>
            </div>

            <div class="about-ink-card">
              <p>
                Diploma III Civil Engineering graduate from Politeknik Negeri Padang (GPA 3.72/4.00, Cum Laude) and current D4 Construction Engineering Management student, certified under <strong>BNSP KKNI Level 5: Implementing Intermediate Building Works (Pelaksana Gedung Madya, Reg. F7472118)</strong>.
              </p>
              <p>
                Proven professional record as <strong>Site Inspector at CV. SIFA DESIGN CONSULTANT</strong> and <strong>Technical Facilitator at the Ministry of Primary &amp; Secondary Education</strong>, supervising multi-story school revitalizations, evaluating structural DEDs, and verifying weekly physical progress.
              </p>
              <p>
                Core technical proficiencies include <em>Detailed Engineering Design (DED)</em> compilation in AutoCAD, <em>Bill of Quantities (BoQ)</em> volume takeoffs, PUPR cost estimation, S-Curve scheduling, Bar Bending Schedules (BBS), and 3D digital modeling via Autodesk Revit (BIM) and SAP2000 seismic analysis. Committed to mathematical precision and safety integrity.
              </p>
            </div>
          </div>

          <div class="about-pillars-row">
            <div class="pillar-box">
              <div class="pillar-num">01</div>
              <div class="pillar-heading">Site Inspection &amp; QC</div>
              <div class="pillar-detail">Inspeksi kesesuaian DED, slump test beton, pengawasan penulangan, penerbitan SI, dan punch list.</div>
            </div>
            <div class="pillar-box">
              <div class="pillar-num">02</div>
              <div class="pillar-heading">Quantity Surveying</div>
              <div class="pillar-detail">Perhitungan backup volume terpasang, RAB AHSP PUPR, valuasi MC-100, dan Addendum CCO.</div>
            </div>
            <div class="pillar-box">
              <div class="pillar-num">03</div>
              <div class="pillar-heading">BIM &amp; CAD Modeling</div>
              <div class="pillar-detail">Pemodelan 3D Revit struktur/arsitektur, drafting multi-viewport AutoCAD, dan analisis dinamis SAP2000.</div>
            </div>
            <div class="pillar-box">
              <div class="pillar-num">04</div>
              <div class="pillar-heading">Project Scheduling</div>
              <div class="pillar-detail">Penyusunan jadwal Time Schedule, pemetaan bobot Kurva S di Excel, dan lintasan kritis CPM MS Project.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>REZA SEPDIDE, A.Md.T. &bull; CIVIL ENGINEERING PORTFOLIO</span>
      <span>PAGE 02 OF 11</span>
    </div>
  </div>

  <!-- =======================================================================
       HALAMAN 3: EDUCATION &amp; ACADEMICS (LANDSCAPE)
       ======================================================================= -->
  <div class="page">
    <div class="page-header-bar">
      <div class="page-header-title">
        <span>EDUCATION &amp; ACADEMICS</span>
        <span class="page-header-tag">ACADEMIC RECORD</span>
      </div>
      <div class="page-header-sub">POLITEKNIK NEGERI PADANG</div>
    </div>

    <div class="page-body">
      <!-- Centered Official PNP Header -->
      <div class="edu-header-landscape">
        <img class="edu-pnp-logo-landscape" src="{b64_pnp_logo}" alt="Logo Resmi PNP">
        <div class="edu-header-text">
          <div class="edu-inst-name font-serif">POLITEKNIK NEGERI PADANG</div>
          <div class="edu-meta-row">
            <span>D3 CIVIL ENGINEERING (2022 &ndash; 2025)</span>
            <span>&bull;</span>
            <span class="edu-gpa-badge">IPK : 3,72 / 4.00 (HONORS: CUM LAUDE (GPA 3.72 / 4.00))</span>
            <span>&bull;</span>
            <span>Bachelor of Applied Science (D4) Construction Engineering Management (2026 &ndash; Present)</span>
          </div>
        </div>
      </div>

      <!-- Dual Column: Praproyek & Tugas Akhir -->
      <div class="edu-dual-grid">
        <!-- Pre-Project Capstone -->
        <div class="edu-col-box">
          <div>
            <div class="edu-col-title-bar">
              <div class="edu-col-main-title font-serif">Pre-Project Capstone</div>
              <div class="edu-col-badge">3D STRUCTURAL MODELING &bull; SAP2000</div>
            </div>
            <div class="edu-col-subtitle">&ldquo;3D Structural Modeling &amp; Seismic Analysis of Multi-Story Buildings&rdquo;</div>
            <ul class="edu-list">
              <li class="edu-item">
                <span class="edu-dot"></span>
                <span>Merancang konstruksi gedung bertingkat sesuai SNI 2847:2019 (Beton Struktural) dan SNI 1727:2020 (Beban Desain).</span>
              </li>
              <li class="edu-item">
                <span class="edu-dot"></span>
                <span>Menganalisis respon spektrum dinamis gempa rencana SNI 1726:2019 menggunakan software <strong>SAP2000</strong>.</span>
              </li>
              <li class="edu-item">
                <span class="edu-dot"></span>
                <span>Mengevaluasi diagram momen lentur, gaya geser, gaya aksial, dan simpangan antar lantai (drift) portal struktur.</span>
              </li>
              <li class="edu-item">
                <span class="edu-dot"></span>
                <span>Penyusunan gambar teknik penulangan balok dan kolom menggunakan Autodesk Revit dan AutoCAD.</span>
              </li>
            </ul>
          </div>
          <img class="edu-preview-landscape" src="{b64_sap}" alt="SAP2000 Model">
        </div>

        <!-- Tugas Akhir -->
        <div class="edu-col-box">
          <div>
            <div class="edu-col-title-bar">
              <div class="edu-col-main-title font-serif">Final Degree Project</div>
              <div class="edu-col-badge">COST ESTIMATION &amp; S-CURVE &bull; MS PROJECT</div>
            </div>
            <div class="edu-col-subtitle">&ldquo;Construction Implementation Planning of Pasaman Regency DPRD Building&rdquo;</div>
            <ul class="edu-list">
              <li class="edu-item">
                <span class="edu-dot"></span>
                <span>Menghitung volume pekerjaan (Bill of Quantities / BoQ) struktur, arsitektur, dan utilitas MEP.</span>
              </li>
              <li class="edu-item">
                <span class="edu-dot"></span>
                <span>Menyusun Analisa Harga Satuan Pekerjaan (AHSP) dan Rencana Anggaran Biaya (RAB) standar Permen PUPR.</span>
              </li>
              <li class="edu-item">
                <span class="edu-dot"></span>
                <span>Merancang jadwal pelaksanaan (Time Schedule) dan plotting bobot pekerjaan ke Kurva S di Microsoft Excel.</span>
              </li>
              <li class="edu-item">
                <span class="edu-dot"></span>
                <span>Menganalisis durasi lintasan kritis (Critical Path Method / CPM) menggunakan Microsoft Project.</span>
              </li>
            </ul>
          </div>
          <img class="edu-preview-landscape" src="{b64_fp_ks}" alt="Kurva S Tugas Akhir">
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>REZA SEPDIDE, A.Md.T. &bull; CIVIL ENGINEERING PORTFOLIO</span>
      <span>PAGE 03 OF 11</span>
    </div>
  </div>

  <!-- =======================================================================
       HALAMAN 4: LISENSI & SERTIFIKASI PROFESIONAL (LANDSCAPE)
       ======================================================================= -->
  <div class="page">
    <div class="page-header-bar">
      <div class="page-header-title">
        <span>PROFESSIONAL LICENSES &amp; CERTIFICATIONS</span>
        <span class="page-header-tag">STATE &amp; GLOBAL STANDARDS</span>
      </div>
      <div class="page-header-sub">VERIFIED CREDENTIALS &bull; AUTHENTIC DOCUMENT PROOF</div>
    </div>

    <div class="page-body">
      <div class="cert-landscape-grid">
        <!-- 1. BNSP SKK Jenjang 5 -->
        <div class="cert-box">
          <div>
            <div class="cert-badge-tag">BNSP JENJANG 5 &bull; REG. F7472118</div>
            <div class="cert-heading">Pelaksana Lapangan Pekerjaan Gedung Madya</div>
            <div class="cert-sub">BNSP &bull; LPJK Kementerian PUPR RI</div>
            <div class="cert-paragraph">11 unit kompetensi kerja nasional: K3 konstruksi, telaah gambar DED, pengawasan struktur beton/baja, kontrol mutu, dan administrasi laporan lapangan.</div>
          </div>
          <div class="cert-thumb-box">
            <img src="{b64_cert_bnsp}" alt="Bukti Lisensi BNSP Jenjang 5">
            <div class="cert-thumb-tag">Official State License &bull; BNSP LPJK PUPR</div>
          </div>
        </div>

        <!-- 2. Revit BIM Masterclass -->
        <div class="cert-box">
          <div>
            <div class="cert-badge-tag">BIM MASTERCLASS &bull; ARSISTEN ACADEMY</div>
            <div class="cert-heading">Revit Masterclass for Beginners (BIM)</div>
            <div class="cert-sub">Arsisten Academy &bull; Building Information Modeling</div>
            <div class="cert-paragraph">Pemodelan 3D parametrik, balok-kolom beton bertulang, penulangan rebar 3D interaktif, dan integrasi schedule kuantitas material otomatis.</div>
          </div>
          <div class="cert-thumb-box">
            <img src="{b64_cert_revit}" alt="Bukti Sertifikat Autodesk Revit BIM">
            <div class="cert-thumb-tag">Revit Masterclass BIM Completion Certificate</div>
          </div>
        </div>

        <!-- 3. SSW Civil Engineering Japan -->
        <div class="cert-box">
          <div>
            <div class="cert-badge-tag">SSW EVALUATION EXAM &bull; JEPANG</div>
            <div class="cert-heading">Specified Skilled Worker (Civil Engineering)</div>
            <div class="cert-sub">Japan Association for Construction Human Resources (JAC)</div>
            <div class="cert-paragraph">Kualifikasi teknis teknik sipil standar industri Jepang, pengendalian mutu material, keselamatan kerja tinggi, dan manajemen lapangan.</div>
          </div>
          <div class="cert-thumb-box">
            <img src="{b64_cert_ssw}" alt="Bukti Sertifikat SSW Jepang">
            <div class="cert-thumb-tag">Official JAC Japan Construction SSW Evaluation</div>
          </div>
        </div>

        <!-- 4. JLPT N4 & JFT-Basic -->
        <div class="cert-box">
          <div>
            <div class="cert-badge-tag">BAHASA JEPANG &bull; SKOR 250 &amp; 165</div>
            <div class="cert-heading">JFT-Basic &amp; JLPT Level N4</div>
            <div class="cert-issuer cert-sub">The Japan Foundation &bull; Japan Educational Exchanges</div>
            <div class="cert-paragraph">Sertifikasi kemampuan komunikasi bahasa Jepang tingkat menengah dalam konteks kerja profesional, pembacaan gambar teknik, dan koordinasi tim.</div>
          </div>
          <div class="cert-thumb-box">
            <img src="{b64_cert_jlpt}" alt="Bukti Sertifikat JLPT N4">
            <div class="cert-thumb-tag">Official JLPT N4 / JFT-Basic Certificate</div>
          </div>
        </div>

        <!-- 5. Prediction TOEIC 640 -->
        <div class="cert-box">
          <div>
            <div class="cert-badge-tag">PROFICIENCY TEST &bull; SKOR 640</div>
            <div class="cert-heading">Prediction Test for TOEIC</div>
            <div class="cert-sub">UPT Bahasa Politeknik Negeri Padang</div>
            <div class="cert-paragraph">Kemampuan bahasa Inggris tingkat menengah untuk korespondensi proyek internasional, penelaahan standar ASTM/ACI, dan koordinasi dokumen tender.</div>
          </div>
          <div class="cert-thumb-box">
            <img src="{b64_cert_toeic}" alt="Bukti Sertifikat TOEIC">
            <div class="cert-thumb-tag">Official TOEIC Prediction 640 Certificate</div>
          </div>
        </div>

        <!-- 6. Transkrip Akademik PNP -->
        <div class="cert-box">
          <div>
            <div class="cert-badge-tag">AKADEMIK &bull; IPK 3.72 / 4.00</div>
            <div class="cert-heading">Transkrip Nilai Akademik Resmi PNP</div>
            <div class="cert-sub">Politeknik Negeri Padang &bull; Jurusan Teknik Sipil</div>
            <div class="cert-paragraph">Lulus 115 SKS predikat Cum Laude. Nilai istimewa pada Rekayasa Gempa, Manajemen Konstruksi, Estimasi Biaya, Struktur Beton Bertulang, dan AutoCAD.</div>
          </div>
          <div class="cert-thumb-box">
            <img src="{b64_cert_transkrip}" alt="Bukti Transkrip Akademik PNP">
            <div class="cert-thumb-tag">Official Academic Transcript &bull; Civil Eng. PNP</div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>REZA SEPDIDE, A.Md.T. &bull; CIVIL ENGINEERING PORTFOLIO</span>
      <span>PAGE 04 OF 11</span>
    </div>
  </div>

  <!-- =======================================================================
       HALAMAN 5: PENGAWASAN LAPANGAN (LANDSCAPE)
       ======================================================================= -->
  <div class="page">
    <div class="page-header-bar">
      <div class="page-header-title">
        <span>PENGALAMAN LAPANGAN &amp; SUPERVISI</span>
        <span class="page-header-tag">PENGAWASAN DED &amp; MONEV</span>
      </div>
      <div class="page-header-sub">KONSULTAN PENGAWAS &amp; PROGRAM KEMENTERIAN</div>
    </div>

    <div class="page-body">
      <div class="section-split-2">
        <!-- Site Inspector CV SIFA -->
        <div class="exp-landscape-card">
          <div>
            <div class="exp-title-row">
              <div class="exp-role-title">Site Inspector (Pengawas Lapangan)</div>
              <div class="exp-time-badge">Sep 2026 &ndash; Sekarang</div>
            </div>
            <div class="exp-company-sub">CV. SIFA DESIGN CONSULTANT &bull; Padang Pariaman, Indonesia</div>
            <ul class="exp-tasks-list">
              <li class="exp-task-item">
                <span class="edu-dot"></span>
                <span>Inspeksi berkala struktur dan arsitektur memastikan kepatuhan penuh terhadap gambar Detailed Engineering Design (DED) dan RKS.</span>
              </li>
              <li class="exp-task-item">
                <span class="edu-dot"></span>
                <span>Mengarahkan tindakan perbaikan segera (corrective action) saat ditemukan deviasi jarak sengkang guna meminimalkan pekerjaan ulang (rework).</span>
              </li>
              <li class="exp-task-item">
                <span class="edu-dot"></span>
                <span>Menyusun laporan fisik mingguan berbasis kuantitas terverifikasi dan menerbitkan Site Instruction (SI) resmi.</span>
              </li>
            </ul>
          </div>
          <div class="exp-gallery-2x2">
            <div class="exp-thumb-box">
              <img src="{b64_si_penulangan}" alt="Penulangan">
              <div class="exp-thumb-tag">Pengecekan Rebar</div>
            </div>
            <div class="exp-thumb-box">
              <img src="{b64_si_sengkang}" alt="Sengkang">
              <div class="exp-thumb-tag">Jarak Sengkang</div>
            </div>
            <div class="exp-thumb-box">
              <img src="{b64_si_card}" alt="SI">
              <div class="exp-thumb-tag">Site Instruction</div>
            </div>
            <div class="exp-thumb-box">
              <img src="{b64_si_laporan}" alt="Laporan">
              <div class="exp-thumb-tag">Laporan Mingguan</div>
            </div>
          </div>
        </div>

        <!-- Fasilitator Kemendikdasmen -->
        <div class="exp-landscape-card">
          <div>
            <div class="exp-title-row">
              <div class="exp-role-title">Fasilitator Teknis Revitalisasi SD</div>
              <div class="exp-time-badge">Jun 2025 &ndash; Des 2025</div>
            </div>
            <div class="exp-company-sub">Kementerian Pendidikan Dasar dan Menengah &bull; Pasaman, Indonesia</div>
            <ul class="exp-tasks-list">
              <li class="exp-task-item">
                <span class="edu-dot"></span>
                <span>Reviu dan evaluasi teknis kelayakan dokumen perencanaan (DED, RAB, dan RKS) pada 6 sekolah penerima bantuan revitalisasi.</span>
              </li>
              <li class="exp-task-item">
                <span class="edu-dot"></span>
                <span>Monitoring dan evaluasi (Monev) berkala terhadap mutu pelaksanaan fisik dan ketepatan kurva S di lapangan.</span>
              </li>
              <li class="exp-task-item">
                <span class="edu-dot"></span>
                <span>Memverifikasi kelengkapan dan keabsahan dokumen laporan progres pekerjaan sebagai syarat pencairan dana termin hibah pemerintah.</span>
              </li>
            </ul>
          </div>
          <div class="exp-gallery-2x2">
            <div class="exp-thumb-box" style="grid-column: span 2; height: 52mm;">
              <img src="{b64_fas_monitoring}" alt="Site Monitoring">
              <div class="exp-thumb-tag">Monitoring &amp; Evaluasi Lapangan</div>
            </div>
            <div class="exp-thumb-box" style="grid-column: span 2; height: 52mm;">
              <img src="{b64_fas_bimtek}" alt="Bimtek Fasilitator">
              <div class="exp-thumb-tag">Bimbingan Teknis Fasilitator</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>REZA SEPDIDE, A.Md.T. &bull; CIVIL ENGINEERING PORTFOLIO</span>
      <span>PAGE 05 OF 11</span>
    </div>
  </div>

  <!-- =======================================================================
       HALAMAN 6: PRAKTIK KERJA LAPANGAN: KONTRAKTOR EPC INDUSTRI (LANDSCAPE)
       ======================================================================= -->
  <div class="page">
    <div class="page-header-bar">
      <div class="page-header-title">
        <span>PRAKTIK KERJA LAPANGAN: KONTRAKTOR EPC INDUSTRI</span>
        <span class="page-header-tag">QC BETON &amp; BAR BENDING SCHEDULE</span>
      </div>
      <div class="page-header-sub">PT SOLUSI INDUSTRI ENERGI &bull; PURWAKARTA</div>
    </div>

    <div class="page-body">
      <div class="exp-landscape-card" style="flex: 1;">
        <div>
          <div class="exp-title-row">
            <div class="exp-role-title">Civil Engineering Field Intern (QC &amp; QS Field)</div>
            <div class="exp-time-badge">Agu 2024 &ndash; Des 2024</div>
          </div>
          <div class="exp-company-sub">PT Solusi Industri Energi &bull; Waste Gas Recovery EPC Project (PT Indo-Bharat Rayon, Purwakarta)</div>
          <ul class="exp-tasks-list" style="margin-top: 2mm;">
            <li class="exp-task-item">
              <span class="edu-dot"></span>
              <span>Menyusun <strong>Bar Bending Schedule (BBS)</strong> pembesian pondasi mesin, tie beam, dan struktur penahan pipa transmisi gas industri.</span>
            </li>
            <li class="exp-task-item">
              <span class="edu-dot"></span>
              <span>Menghitung kuantitas volume terpasang (Backup Volume) sebagai dasar penagihan sertifikat bulanan kontraktor (Progress Billing).</span>
            </li>
            <li class="exp-task-item">
              <span class="edu-dot"></span>
              <span>Melaksanakan inspeksi Quality Control (QC) harian, meliputi pengujian Slump Test beton cor segar, verifikasi bekisting, dan checklist rebar pra-pengecoran.</span>
            </li>
            <li class="exp-task-item">
              <span class="edu-dot"></span>
              <span>Melakukan site mapping area kerja dan menyusun daftar cacat mutu (Punch List) sebelum dan setelah serah terima pekerjaan.</span>
            </li>
          </ul>
        </div>
        <div class="exp-gallery-row" style="margin-top: 3.5mm;">
          <div class="exp-thumb-box-p6">
            <img src="{b64_mag_slump}" alt="Slump Test">
            <div class="exp-thumb-tag">Pengujian Slump Test Beton</div>
          </div>
          <div class="exp-thumb-box-p6">
            <img src="{b64_mag_pembesian}" alt="Mapping Work">
            <div class="exp-thumb-tag">Mapping Area Pembesian</div>
          </div>
          <div class="exp-thumb-box-p6">
            <img src="{b64_mag_daily}" alt="Daily Report">
            <div class="exp-thumb-tag">Laporan Harian Progres</div>
          </div>
          <div class="exp-thumb-box-p6">
            <img src="{b64_mag_punch}" alt="Punch List">
            <div class="exp-thumb-tag">Penyusunan Punch List Cacat</div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>REZA SEPDIDE, A.Md.T. &bull; CIVIL ENGINEERING PORTFOLIO</span>
      <span>PAGE 06 OF 11</span>
    </div>
  </div>

  <!-- =======================================================================
       HALAMAN 7: PROYEK REVITALISASI: KB AR-RAHMA & TK PEMBINA (LANDSCAPE)
       ======================================================================= -->
  <div class="page">
    <div class="page-header-bar">
      <div class="page-header-title">
        <span>PORTFOLIO PROYEK: REVITALISASI PENDIDIKAN (1)</span>
        <span class="page-header-tag">DED AUTOCAD &bull; RAB &bull; KURVA S</span>
      </div>
      <div class="page-header-sub">KONSULTAN PERENCANA TEKNIS &amp; QUANTITY SURVEYOR</div>
    </div>

    <div class="page-body">
      <div class="section-split-2">
        <!-- KB Ar-Rahma -->
        <div class="proj-landscape-card">
          <div>
            <div class="proj-title-bar">
              <div class="proj-title-landscape font-serif">Revitalisasi Gedung KB Ar-Rahma</div>
              <div class="proj-val-landscape">RAB: Rp 101.442.000</div>
            </div>
            <div class="proj-desc-landscape">
              Perencana Teknis Mandiri (Sep 2026 &ndash; Sekarang). Menyusun paket DED AutoCAD (5.5 MB), perhitungan volume take-off, RAB AHSP PUPR, dokumen RKS teknis, dan penjadwalan Kurva S terinci.
            </div>
          </div>
          <div class="proj-gallery-3">
            <div class="proj-thumb-3">
              <img src="{b64_kb_ded}" alt="DED KB Ar-Rahma">
              <div class="exp-thumb-tag">Gambar Kerja DED CAD</div>
            </div>
            <div class="proj-thumb-3">
              <img src="{b64_kb_rab}" alt="RAB KB Ar-Rahma">
              <div class="exp-thumb-tag">Rencana Anggaran Biaya</div>
            </div>
            <div class="proj-thumb-3">
              <img src="{b64_kb_ks}" alt="Kurva S KB Ar-Rahma">
              <div class="exp-thumb-tag">Jadwal Kurva S</div>
            </div>
          </div>
        </div>

        <!-- TK Negeri Pembina -->
        <div class="proj-landscape-card">
          <div>
            <div class="proj-title-bar">
              <div class="proj-title-landscape font-serif">Revitalisasi Gedung TK Negeri Pembina</div>
              <div class="proj-val-landscape">RAB: Rp 205.890.000</div>
            </div>
            <div class="proj-desc-landscape">
              Perencana Teknis Mandiri (Sep 2026 &ndash; Sekarang). Menyusun Detailed Engineering Design (6.0 MB) rehabilitasi ruang kelas ramah anak, struktur atap baja ringan, RKS material, dan Kurva S mingguan.
            </div>
          </div>
          <div class="proj-gallery-3">
            <div class="proj-thumb-3">
              <img src="{b64_tk_ded}" alt="DED TK Pembina">
              <div class="exp-thumb-tag">Gambar Kerja DED CAD</div>
            </div>
            <div class="proj-thumb-3">
              <img src="{b64_tk_rab}" alt="RAB TK Pembina">
              <div class="exp-thumb-tag">Rekapitulasi RAB</div>
            </div>
            <div class="proj-thumb-3">
              <img src="{b64_tk_ks}" alt="Kurva S TK Pembina">
              <div class="exp-thumb-tag">Jadwal Kurva S</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>REZA SEPDIDE, A.Md.T. &bull; CIVIL ENGINEERING PORTFOLIO</span>
      <span>PAGE 07 OF 11</span>
    </div>
  </div>

  <!-- =======================================================================
       HALAMAN 8: PROYEK REVITALISASI: SDN 19 KUAMANG & SLBN 2 PARIAMAN (LANDSCAPE)
       ======================================================================= -->
  <div class="page">
    <div class="page-header-bar">
      <div class="page-header-title">
        <span>PORTFOLIO PROYEK: REVITALISASI PENDIDIKAN (2)</span>
        <span class="page-header-tag">MULTI-VIEWPORT &bull; CCO &bull; MC-100</span>
      </div>
      <div class="page-header-sub">KONSULTAN PERENCANA TEKNIS &amp; QS</div>
    </div>

    <div class="page-body">
      <div class="section-split-2">
        <!-- SDN 19 Kuamang -->
        <div class="proj-landscape-card">
          <div>
            <div class="proj-title-bar">
              <div class="proj-title-landscape font-serif">Revitalisasi Fasilitas SDN 19 Kuamang</div>
              <div class="proj-val-landscape">TERVERIFIKASI RESMI</div>
            </div>
            <div class="proj-desc-landscape">
              Perencana Teknis &amp; QS (Sep 2026, Pasaman). Drafting DED multi-viewport layout AutoCAD ke PDF beresolusi tinggi, perhitungan BoQ struktur atap, formulir identifikasi kerusakan, dan dokumen RKS.
            </div>
          </div>
          <div class="proj-gallery-3">
            <div class="proj-thumb-3">
              <img src="{b64_kua_ded}" alt="DED Kuamang">
              <div class="exp-thumb-tag">Layout Multi-Viewport</div>
            </div>
            <div class="proj-thumb-3">
              <img src="{b64_kua_rks}" alt="RKS Kuamang">
              <div class="exp-thumb-tag">Spesifikasi Teknis (RKS)</div>
            </div>
            <div class="proj-thumb-3">
              <img src="{b64_kua_ks}" alt="Kurva S Kuamang">
              <div class="exp-thumb-tag">Kurva S Jadwal Waktu</div>
            </div>
          </div>
        </div>

        <!-- SLBN 2 Pariaman -->
        <div class="proj-landscape-card">
          <div>
            <div class="proj-title-bar">
              <div class="proj-title-landscape font-serif">Revitalisasi SLBN 2 Pariaman (Ram Inklusif)</div>
              <div class="proj-val-landscape">ADDENDUM CCO &bull; MC-100</div>
            </div>
            <div class="proj-desc-landscape">
              Perencana Teknis &amp; QS (Jul 2026, Kota Pariaman). Perancangan aksesibilitas ram ramah disabilitas (kemiringan 1:12), perhitungan backup volume terpasang, dan penerbitan addendum <em>Contract Change Order (CCO)</em>.
            </div>
          </div>
          <div class="proj-gallery-3">
            <div class="proj-thumb-3">
              <img src="{b64_slb_ded}" alt="DED SLBN 2">
              <div class="exp-thumb-tag">DED Struktur Ram</div>
            </div>
            <div class="proj-thumb-3">
              <img src="{b64_slb_cco}" alt="CCO SLBN 2">
              <div class="exp-thumb-tag">Contract Change Order</div>
            </div>
            <div class="proj-thumb-3">
              <img src="{b64_slb_ded}" alt="Denah SLBN">
              <div class="exp-thumb-tag">Denah &amp; Tampak Elevasi</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>REZA SEPDIDE, A.Md.T. &bull; CIVIL ENGINEERING PORTFOLIO</span>
      <span>PAGE 08 OF 11</span>
    </div>
  </div>

  <!-- =======================================================================
       HALAMAN 9: PROYEK INDUSTRI WWTP & BIM REVIT (LANDSCAPE)
       ======================================================================= -->
  <div class="page">
    <div class="page-header-bar">
      <div class="page-header-title">
        <span>PROYEK INDUSTRI WWTP &amp; PEMODELAN BIM REVIT</span>
        <span class="page-header-tag">RE-MEASUREMENT MC-100 &bull; 3D REBAR</span>
      </div>
      <div class="page-header-sub">QUANTITY SURVEYOR &amp; BIM MODELER</div>
    </div>

    <div class="page-body">
      <div class="section-split-2">
        <!-- WWTP Perfetti -->
        <div class="proj-landscape-card">
          <div>
            <div class="proj-title-bar">
              <div class="proj-title-landscape font-serif">WWTP 168 CMD PT Perfetti Van Melle Indonesia</div>
              <div class="proj-val-landscape">KAPASITAS: 168 M&sup3;/HARI</div>
            </div>
            <div class="proj-desc-landscape">
              Freelance Quantity Surveyor (Sep 2025, Subkon PT Mulia Djasmine Sentosa). Re-measurement aktual MC-100 di lapangan, Bar Bending Schedule (BBS) bak aerasi, rekapitulasi valuasi klaim pembayaran subkon, dan CCO.
            </div>
          </div>
          <div class="proj-gallery-3">
            <div class="proj-thumb-3">
              <img src="{b64_wwtp_bbs}" alt="BBS WWTP">
              <div class="exp-thumb-tag">BBS Bak Aerasi</div>
            </div>
            <div class="proj-thumb-3">
              <img src="{b64_wwtp_bv}" alt="Backup Volume WWTP">
              <div class="exp-thumb-tag">Backup Volume MC-100</div>
            </div>
            <div class="proj-thumb-3">
              <img src="{b64_wwtp_bbs}" alt="CCO WWTP">
              <div class="exp-thumb-tag">Valuasi Pembayaran</div>
            </div>
          </div>
        </div>

        <!-- Revit BIM -->
        <div class="proj-landscape-card">
          <div>
            <div class="proj-title-bar">
              <div class="proj-title-landscape font-serif">Pemodelan Struktur &amp; Arsitektur BIM Revit</div>
              <div class="proj-val-landscape">LOD 300 PARAMETRIK</div>
            </div>
            <div class="proj-desc-landscape">
              BIM Modeler (Arsisten Academy). Pemodelan portal 3D beton bertulang, pemodelan tulangan lentur dan sengkang secara tiga dimensi (3D Rebar), potongan analitis, dan integrasi schedule quantity otomatis.
            </div>
          </div>
          <div class="proj-gallery-3">
            <div class="proj-thumb-3">
              <img src="{b64_revit_portal}" alt="Revit Portal">
              <div class="exp-thumb-tag">Portal 3D Revit</div>
            </div>
            <div class="proj-thumb-3">
              <img src="{b64_revit_portal}" alt="Revit Rebar">
              <div class="exp-thumb-tag">Detail Tulangan 3D</div>
            </div>
            <div class="proj-thumb-3">
              <img src="{b64_revit_portal}" alt="Revit Schedule">
              <div class="exp-thumb-tag">Schedule Take-Off</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>REZA SEPDIDE, A.Md.T. &bull; CIVIL ENGINEERING PORTFOLIO</span>
      <span>PAGE 09 OF 11</span>
    </div>
  </div>

  <!-- =======================================================================
       PAGE 10: KOMPETISI TENDER NASIONAL & RISET ILMIAH (LANDSCAPE)
       ======================================================================= -->
  <div class="page">
    <div class="page-header-bar">
      <div class="page-header-title">
        <span>KOMPETISI TENDER NASIONAL &amp; RISET ILMIAH</span>
        <span class="page-header-tag">FONDASI DAYS UNS 2025 &bull; PKM-AI</span>
      </div>
      <div class="page-header-sub">ESTIMATOR, 3D MODELER &amp; PENELITI UTAMA</div>
    </div>

    <div class="page-body">
      <div class="section-split-2">
        <!-- Tender UNS -->
        <div class="proj-landscape-card">
          <div>
            <div class="proj-title-bar">
              <div class="proj-title-landscape font-serif">Kompetisi Tender Fondasi Days UNS 2025</div>
              <div class="proj-val-landscape">TIM JAYA JAYA TEAM</div>
            </div>
            <div class="proj-desc-landscape">
              Estimator &amp; Modeler 3D tender proyek gedung di Universitas Sebelas Maret (UNS). Menyusun estimasi penawaran harga, pemodelan 3D tahapan metode kerja konstruksi (SketchUp), dan poster infografis teknis.
            </div>
          </div>
          <div class="proj-gallery-3" style="grid-template-columns: 1fr 1fr;">
            <div class="proj-thumb-3" style="height: 105mm;">
              <img src="{b64_uns_poster}" alt="Poster Tender UNS" style="object-fit: contain;">
              <div class="exp-thumb-tag">Poster Infografis Tender</div>
            </div>
            <div class="proj-thumb-3" style="height: 105mm;">
              <img src="{b64_uns_render}" alt="Render Metode Kerja 3D" style="object-fit: contain; background: #FFFFFF;">
              <div class="exp-thumb-tag">Simulasi Metode 3D SketchUp</div>
            </div>
          </div>
        </div>

        <!-- PKM-AI -->
        <div class="proj-landscape-card">
          <div>
            <div class="proj-title-bar">
              <div class="proj-title-landscape font-serif">Pekan Kreativitas Mahasiswa (PKM-AI)</div>
              <div class="proj-val-landscape">KEMENDIKBUDRISTEK RI</div>
            </div>
            <div class="proj-desc-landscape">
              Penulis Utama Artikel Ilmiah: <em>&ldquo;Analisa Biaya Scaffolding pada Proyek Waste Gas Recovery IBR Purwakarta&rdquo;</em>. Evaluasi efisiensi biaya Life Cycle Cost antara skema beli dan sewa scaffolding.
            </div>
          </div>
          <div class="proj-gallery-3" style="grid-template-columns: 1fr;">
            <div class="proj-thumb-3" style="height: 105mm;">
              <img src="{b64_pkm}" alt="Manuskrip PKM-AI" style="object-fit: contain;">
              <div class="exp-thumb-tag">Manuskrip Artikel Ilmiah Analisa Biaya Perancah</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>REZA SEPDIDE, A.Md.T. &bull; CIVIL ENGINEERING PORTFOLIO</span>
      <span>PAGE 10 OF 11</span>
    </div>
  </div>

  <!-- =======================================================================
       PAGE 11: MATRIKS KOMPETENSI, BAHASA & PENUTUP (LANDSCAPE)
       ======================================================================= -->
  <div class="page">
    <div class="page-header-bar">
      <div class="page-header-title">
        <span>MATRIKS KOMPETENSI &amp; SALURAN KOMUNIKASI</span>
        <span class="page-header-tag">SOFTWARE, BAHASA &amp; VERIFIKASI</span>
      </div>
      <div class="page-header-sub">REZA SEPDIDE, A.Md.T. &bull; PORTFOLIO RESMI</div>
    </div>

    <div class="page-body">
      <div class="p11-landscape-grid">
        <!-- Software Skills -->
        <div class="software-landscape-box">
          <div class="box-heading-p11">Kemampuan Perangkat Lunak (Software)</div>
          <div class="sw-row">
            <span style="font-weight: 700;">Autodesk Revit (BIM)</span>
            <div class="sw-bar-bg"><div class="sw-bar-fill" style="width: 88%;"></div></div>
          </div>
          <div class="sw-row">
            <span style="font-weight: 700;">AutoCAD (2D Drafting &amp; Viewports)</span>
            <div class="sw-bar-bg"><div class="sw-bar-fill" style="width: 95%;"></div></div>
          </div>
          <div class="sw-row">
            <span style="font-weight: 700;">SketchUp (3D Method Modeling)</span>
            <div class="sw-bar-bg"><div class="sw-bar-fill" style="width: 85%;"></div></div>
          </div>
          <div class="sw-row">
            <span style="font-weight: 700;">SAP2000 (Earthquake Dynamic Analysis)</span>
            <div class="sw-bar-bg"><div class="sw-bar-fill" style="width: 82%;"></div></div>
          </div>
          <div class="sw-row">
            <span style="font-weight: 700;">Microsoft Project (CPM Scheduling)</span>
            <div class="sw-bar-bg"><div class="sw-bar-fill" style="width: 86%;"></div></div>
          </div>
          <div class="sw-row">
            <span style="font-weight: 700;">Microsoft Excel (RAB &amp; Kurva S)</span>
            <div class="sw-bar-bg"><div class="sw-bar-fill" style="width: 96%;"></div></div>
          </div>
        </div>

        <!-- Language & Core Skills -->
        <div class="software-landscape-box">
          <div class="box-heading-p11">Kualifikasi Bahasa &amp; Keahlian Rekayasa</div>
          <div style="font-size: 7.2pt; color: #111111; line-height: 1.5; display: flex; flex-direction: column; gap: 1.5mm;">
            <div><strong>Bahasa Indonesia:</strong> Penutur Asli (Native Proficiency)</div>
            <div><strong>Bahasa Jepang:</strong> Tingkat Menengah &bull; JFT-Basic Skor 250 &amp; JLPT N4 Skor 165 (The Japan Foundation)</div>
            <div><strong>Bahasa Inggris:</strong> Tingkat Menengah &bull; TOEIC Skor 640 (UPT Bahasa Politeknik Negeri Padang)</div>
            <div style="margin-top: 1mm; padding-top: 1.5mm; border-top: 1px solid #DDD6C7;">
              <strong>Keahlian Inti Rekayasa Konstruksi:</strong>
              <div style="margin-top: 1mm; font-size: 6.8pt; color: #3E3E3E;">
                Quantity Take-Off (QTO) &bull; Estimasi RAB AHSP PUPR &bull; Penyusunan RKS &bull; Bar Bending Schedule (BBS) &bull; Inspeksi QC Lapangan &bull; Re-Measurement MC-100 &bull; Kurva S &bull; Slump Test Beton &bull; CCO Addendum
              </div>
            </div>
          </div>
        </div>

        <!-- Closing Box -->
        <div class="closing-landscape-box">
          <div class="closing-left-col">
            <div class="closing-title-h">Pernyataan Integritas &amp; Keabsahan Data Portofolio</div>
            <p class="closing-text-p">
              Seluruh data riwayat akademik, lisensi profesi BNSP, pengalaman lapangan pengawasan, lembar gambar kerja DED, dan dokumen estimasi biaya RAB yang tercantum dalam portofolio ini adalah dokumen resmi yang dapat dipertanggungjawabkan keabsahan dan integritas teknisnya.
            </p>
            <div style="margin-top: 2mm; font-size: 7pt; color: #FAF7F0;">
              <strong>Kontak Langsung:</strong> rezasepdide@gmail.com &bull; +62 896-4459-0915 &bull; Padang, Sumatera Barat
            </div>
          </div>
          <div class="closing-qr-box">
            <img src="{b64_qr}" alt="QR Web Portofolio">
            <div class="closing-qr-txt">Scan Website Portofolio</div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>REZA SEPDIDE, A.Md.T. &bull; CIVIL ENGINEERING PORTFOLIO</span>
      <span>PAGE 11 OF 11</span>
    </div>
  </div>

</body>
</html>
"""
    with open(HTML_PATH, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Generated Landscape HTML at: {HTML_PATH}")
    return HTML_PATH

def render_pdf(html_path):
    print("Compiling Landscape PDF via Headless Brave Browser (via /tmp sandbox)...")
    tmp_html = "/tmp/portofolio_landscape.html"
    tmp_pdf = "/tmp/portofolio_landscape.pdf"
    
    shutil.copyfile(html_path, tmp_html)
    
    cmd = [
        "brave-browser",
        "--headless",
        "--disable-gpu",
        "--no-sandbox",
        "--print-to-pdf-no-header",
        f"--print-to-pdf={tmp_pdf}",
        f"file://{tmp_html}"
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0 or not os.path.exists(tmp_pdf):
        print("Fallback without --print-to-pdf-no-header...")
        cmd = [
            "brave-browser",
            "--headless",
            "--disable-gpu",
            "--no-sandbox",
            f"--print-to-pdf={tmp_pdf}",
            f"file://{tmp_html}"
        ]
        res = subprocess.run(cmd, capture_output=True, text=True)

    if os.path.exists(tmp_pdf):
        shutil.copyfile(tmp_pdf, PDF_PATH)
        size_mb = os.path.getsize(PDF_PATH) / (1024 * 1024)
        print(f"SUCCESS! Rendered Landscape PDF ({size_mb:.2f} MB): {PDF_PATH}")

        # Copy to public folder and root
        public_dest = os.path.join(ROOT_DIR, "public", "Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf")
        shutil.copyfile(PDF_PATH, public_dest)
        print(f"Copied to: {public_dest}")

        public_dest_short = os.path.join(ROOT_DIR, "public", "portofolio_reza_sepdide_en.pdf")
        shutil.copyfile(PDF_PATH, public_dest_short)
        print(f"Copied to: {public_dest_short}")

        root_dest = os.path.join(ROOT_DIR, "Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf")
        shutil.copyfile(PDF_PATH, root_dest)
        print(f"Copied to: {root_dest}")

        # Render page previews for inspection
        review_dir = os.path.join(EXPORT_DIR, "landscape_review")
        os.makedirs(review_dir, exist_ok=True)
        ppm_cmd = ["pdftoppm", "-png", "-r", "150", PDF_PATH, os.path.join(review_dir, "page")]
        subprocess.run(ppm_cmd, capture_output=True)
        print(f"Rendered PNG page previews in: {review_dir}")
    else:
        print("Failed to generate Landscape PDF:", res.stderr)
        sys.exit(1)

if __name__ == "__main__":
    html_file = build_html()
    render_pdf(html_file)
