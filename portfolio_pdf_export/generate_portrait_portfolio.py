#!/usr/bin/env python3
"""
generate_portrait_portfolio.py
Generates the publication-grade Portrait Portfolio PDF for Reza Sepdide, A.Md.T.
Strictly calibrated to the reference design:
- Muted sage-green palette (#E2E7DC, #CED0C2)
- High-contrast charcoal card (#383E40)
- Arch-framed portrait photo
- Centered Politeknik Negeri Padang branding with Dual-Column Praproyek & Tugas Akhir
- 11 comprehensive engineering & technical pages
"""

import os
import sys
import base64
import subprocess
import shutil

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EXPORT_DIR = os.path.join(ROOT_DIR, "portfolio_pdf_export")
HTML_PATH = os.path.join(EXPORT_DIR, "portofolio_reza_sepdide_portrait.html")
PDF_PATH = os.path.join(EXPORT_DIR, "Portofolio_Teknik_Sipil_Reza_Sepdide_Portrait.pdf")

def to_b64(rel_path):
    full_path = os.path.join(ROOT_DIR, rel_path)
    if not os.path.exists(full_path):
        # try export dir
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
    b64_pnp_logo = to_b64("portfolio_pdf_export/extracted_assets/pnp_logo_clean.png")
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

    # SVG Icons
    svg_phone = """<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>"""
    svg_mail = """<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>"""
    svg_linkedin = """<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>"""
    svg_globe = """<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>"""
    svg_check = """<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>"""

    html = f"""<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Portofolio Teknik Sipil — Reza Sepdide, A.Md.T.</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,500;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

    @page {{
      size: 210mm 297mm;
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
      background-color: #E2E7DC;
      color: #242927;
      font-size: 10pt;
      line-height: 1.5;
    }}

    .page {{
      width: 210mm;
      height: 297mm;
      position: relative;
      overflow: hidden;
      page-break-after: always;
      background-color: #FFFFFF;
      display: flex;
      flex-direction: column;
    }}

    /* Typography Classes */
    .font-serif {{
      font-family: 'Playfair Display', 'Cormorant Garamond', Georgia, serif;
    }}
    .font-cormorant {{
      font-family: 'Cormorant Garamond', Georgia, serif;
    }}

    /* Page Running Header & Footer */
    .page-header-bar {{
      background-color: #CED0C2;
      color: #222825;
      padding: 12mm 16mm 10mm 16mm;
      text-align: center;
      border-bottom: 1.5px solid #BAC0AF;
    }}
    .page-header-title {{
      font-family: 'Playfair Display', serif;
      font-size: 17pt;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #1E2320;
    }}
    .page-header-sub {{
      font-size: 7.5pt;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #555E57;
      margin-top: 1.5mm;
    }}

    .page-body {{
      flex: 1;
      padding: 10mm 16mm;
      display: flex;
      flex-direction: column;
      gap: 5mm;
      background-color: #FAFBF9;
      position: relative;
    }}

    .page-footer {{
      height: 10mm;
      padding: 0 16mm;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #E1E5DC;
      background-color: #FAFBF9;
      font-size: 6.8pt;
      font-weight: 600;
      color: #7A847C;
      letter-spacing: 0.05em;
    }}

    /* =========================================================================
       PAGE 1: COVER
       ========================================================================= */
    .page-cover {{
      background-color: #E2E7DC;
      padding: 24mm 18mm 20mm 20mm;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: stretch;
      gap: 12mm;
    }}

    .cover-left {{
      flex: 1.15;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 2;
    }}

    .cover-titles {{
      margin-top: 6mm;
    }}
    .cover-top-label {{
      font-family: 'Playfair Display', serif;
      font-size: 21pt;
      font-weight: 500;
      letter-spacing: 0.08em;
      color: #232725;
      line-height: 1.15;
    }}
    .cover-main-title {{
      font-family: 'Playfair Display', serif;
      font-size: 27pt;
      font-weight: 700;
      letter-spacing: 0.09em;
      color: #181C1A;
      line-height: 1.1;
      margin-top: 1.5mm;
    }}
    .cover-tagline {{
      font-size: 8.5pt;
      color: #525C54;
      font-weight: 500;
      margin-top: 3.5mm;
      line-height: 1.45;
      max-width: 95%;
    }}

    .cover-name-block {{
      margin-top: 12mm;
      margin-bottom: 8mm;
    }}
    .cover-name {{
      font-family: 'Playfair Display', serif;
      font-size: 19pt;
      font-weight: 700;
      letter-spacing: 0.06em;
      color: #1E2320;
    }}
    .cover-credential {{
      font-size: 8.5pt;
      font-weight: 700;
      color: #435246;
      letter-spacing: 0.05em;
      margin-top: 2mm;
      text-transform: uppercase;
    }}
    .cover-badge-row {{
      display: flex;
      flex-wrap: wrap;
      gap: 2mm;
      margin-top: 3.5mm;
    }}
    .cover-pill {{
      display: inline-flex;
      align-items: center;
      padding: 1.5mm 3.2mm;
      background: #FFFFFF;
      border: 1px solid #BAC3B4;
      border-radius: 4px;
      font-size: 7pt;
      font-weight: 700;
      color: #2F3832;
      letter-spacing: 0.03em;
    }}

    .cover-contacts {{
      display: flex;
      flex-direction: column;
      gap: 2.2mm;
      margin-top: auto;
      padding-top: 6mm;
      border-top: 1px solid #BAC3B4;
    }}
    .cover-contact-item {{
      display: flex;
      align-items: center;
      gap: 3mm;
      font-size: 8.2pt;
      color: #2E3631;
      font-weight: 500;
    }}
    .cover-contact-item svg {{
      color: #38423B;
      flex-shrink: 0;
    }}
    .cover-contact-item a {{
      color: inherit;
      text-decoration: none;
    }}

    .cover-right {{
      flex: 0.95;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
    }}
    .cover-photo-frame {{
      width: 82mm;
      height: 122mm;
      background: #FFFFFF;
      padding: 3.5mm;
      border-radius: 6px;
      box-shadow: 0 14px 30px rgba(35, 45, 38, 0.14);
      border: 1px solid #BAC3B4;
      display: flex;
      flex-direction: column;
    }}
    .cover-photo-frame img {{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
      border-radius: 3px;
    }}
    .cover-photo-caption {{
      text-align: center;
      margin-top: 3mm;
      font-size: 7.5pt;
      font-weight: 700;
      color: #4F5A51;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }}

    /* =========================================================================
       PAGE 2: TENTANG SAYA
       ========================================================================= */
    .about-top-title {{
      font-family: 'Playfair Display', serif;
      font-size: 26pt;
      font-weight: 700;
      color: #1F2421;
      margin-bottom: 2mm;
      text-align: left;
    }}
    .about-main-grid {{
      display: flex;
      gap: 8mm;
      align-items: stretch;
      margin-top: 2mm;
    }}
    .about-arch-box {{
      flex: 0.85;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }}
    .about-arch-frame {{
      width: 68mm;
      height: 100mm;
      border-radius: 34mm 34mm 6px 6px;
      overflow: hidden;
      background: #FFFFFF;
      padding: 3mm 3mm 0 3mm;
      box-shadow: 0 12px 28px rgba(30, 40, 33, 0.12);
      border: 1.5px solid #CCD2C6;
    }}
    .about-arch-frame img {{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
      border-radius: 31mm 31mm 4px 4px;
    }}

    .about-card {{
      flex: 1.25;
      background-color: #383E40;
      color: #FFFFFF;
      border-radius: 8px;
      padding: 7mm 7mm;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-shadow: 0 10px 24px rgba(0,0,0,0.15);
    }}
    .about-card-text {{
      font-size: 8.8pt;
      line-height: 1.62;
      color: #F1F4F2;
      text-align: justify;
      margin-bottom: 3.5mm;
    }}
    .about-card-text:last-child {{
      margin-bottom: 0;
    }}

    .about-pillars-grid {{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3mm;
      margin-top: 6mm;
    }}
    .pillar-card {{
      background: #FFFFFF;
      border: 1px solid #D5DBD0;
      border-radius: 6px;
      padding: 3.5mm;
      border-top: 3px solid #4D5E51;
    }}
    .pillar-num {{
      font-family: 'Playfair Display', serif;
      font-size: 11pt;
      font-weight: 700;
      color: #4D5E51;
    }}
    .pillar-title {{
      font-size: 8pt;
      font-weight: 700;
      color: #1E2420;
      margin-top: 1mm;
      line-height: 1.25;
    }}
    .pillar-desc {{
      font-size: 7pt;
      color: #58635B;
      margin-top: 1.5mm;
      line-height: 1.35;
    }}

    /* =========================================================================
       PAGE 3: LATAR BELAKANG PENDIDIKAN
       ========================================================================= */
    .edu-pnp-header {{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 4mm;
    }}
    .edu-pnp-logo {{
      width: 20mm;
      height: 20mm;
      margin-bottom: 2mm;
    }}
    .edu-pnp-title {{
      font-family: 'Playfair Display', serif;
      font-size: 13pt;
      font-weight: 700;
      color: #1B211E;
      letter-spacing: 0.05em;
    }}
    .edu-pnp-gpa {{
      font-size: 9.5pt;
      font-weight: 700;
      color: #38453B;
      margin-top: 0.8mm;
    }}
    .edu-pnp-degree {{
      font-size: 8.5pt;
      font-weight: 600;
      color: #5E6961;
      letter-spacing: 0.04em;
      margin-top: 0.5mm;
    }}
    .edu-pnp-ongoing {{
      font-size: 7.8pt;
      font-weight: 500;
      color: #6C776F;
      margin-top: 1mm;
      background: #EAEEDA;
      padding: 1mm 3.5mm;
      border-radius: 12px;
      border: 1px solid #CED3C4;
    }}

    .edu-columns-grid {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5mm;
      align-items: stretch;
      margin-top: 2mm;
    }}
    .edu-col-card {{
      background: #FFFFFF;
      border: 1.2px solid #D5DBD0;
      border-radius: 6px;
      padding: 4.5mm 5mm;
      display: flex;
      flex-direction: column;
    }}
    .edu-col-heading {{
      font-family: 'Playfair Display', serif;
      font-size: 12.5pt;
      font-weight: 700;
      color: #1F2621;
      padding-bottom: 2mm;
      border-bottom: 1.5px solid #E2E7DC;
    }}
    .edu-col-sub {{
      font-size: 8.2pt;
      font-weight: 700;
      font-style: italic;
      color: #48544B;
      margin-top: 2.5mm;
      margin-bottom: 2.5mm;
      line-height: 1.35;
    }}
    .edu-bullet-list {{
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1.8mm;
      margin-top: 1mm;
    }}
    .edu-bullet-item {{
      font-size: 7.6pt;
      color: #38423B;
      line-height: 1.45;
      display: flex;
      align-items: flex-start;
      gap: 1.8mm;
    }}
    .edu-bullet-dot {{
      width: 4px;
      height: 4px;
      background: #383E40;
      border-radius: 50%;
      margin-top: 1.8mm;
      flex-shrink: 0;
    }}
    .edu-img-preview {{
      width: 100%;
      height: 38mm;
      object-fit: contain;
      background: #F4F6F2;
      border: 1px solid #E1E6DC;
      border-radius: 4px;
      margin-top: auto;
      padding: 1.5mm;
    }}

    /* =========================================================================
       PAGE 4: LISENSI & SERTIFIKASI
       ========================================================================= */
    .cert-grid {{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 4mm;
    }}
    .cert-card {{
      background: #FFFFFF;
      border: 1.2px solid #D7DED2;
      border-radius: 6px;
      padding: 3.5mm 4mm;
      display: flex;
      flex-direction: column;
      border-left: 3.5px solid #383E40;
    }}
    .cert-badge {{
      display: inline-block;
      font-size: 6.5pt;
      font-weight: 700;
      color: #2D5A27;
      background: #E8F2E6;
      border: 0.8px solid #BDD6BA;
      border-radius: 3px;
      padding: 0.8mm 2mm;
      width: fit-content;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }}
    .cert-title {{
      font-family: 'Playfair Display', serif;
      font-size: 9.8pt;
      font-weight: 700;
      color: #1A201C;
      margin-top: 1.5mm;
      line-height: 1.25;
    }}
    .cert-issuer {{
      font-size: 7.5pt;
      font-weight: 600;
      color: #556157;
      margin-top: 1mm;
    }}
    .cert-desc {{
      font-size: 7pt;
      color: #444E46;
      margin-top: 1.5mm;
      line-height: 1.35;
    }}

    /* =========================================================================
       PAGE 5 & 6: PENGALAMAN KERJA (SITE INSPECTOR & MAGANG)
       ========================================================================= */
    .exp-section {{
      background: #FFFFFF;
      border: 1.2px solid #D5DBD0;
      border-radius: 6px;
      padding: 4mm 5mm;
      display: flex;
      flex-direction: column;
      gap: 2.5mm;
    }}
    .exp-header-row {{
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      border-bottom: 1px solid #E8ECE4;
      padding-bottom: 2mm;
    }}
    .exp-role {{
      font-family: 'Playfair Display', serif;
      font-size: 11.5pt;
      font-weight: 700;
      color: #1D231F;
    }}
    .exp-period {{
      font-size: 7.8pt;
      font-weight: 700;
      color: #383E40;
      background: #EAEEDA;
      padding: 0.8mm 2.5mm;
      border-radius: 3px;
    }}
    .exp-company {{
      font-size: 8.2pt;
      font-weight: 700;
      color: #48544B;
      letter-spacing: 0.03em;
    }}
    .exp-desc-list {{
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1.5mm;
      margin-top: 1mm;
    }}
    .exp-desc-item {{
      font-size: 7.5pt;
      color: #333D36;
      line-height: 1.4;
      display: flex;
      align-items: flex-start;
      gap: 2mm;
    }}
    .exp-photos-row {{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2.5mm;
      margin-top: 2.5mm;
    }}
    .exp-photo-box {{
      height: 25mm;
      background: #F1F4EE;
      border: 1px solid #D2D9CC;
      border-radius: 4px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }}
    .exp-photo-box img {{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }}
    .exp-photo-label {{
      font-size: 6.2pt;
      font-weight: 600;
      color: #556057;
      text-align: center;
      padding: 0.8mm;
      background: #FFFFFF;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }}

    /* =========================================================================
       PROJECT CARDS (PAGES 7, 8, 9)
       ========================================================================= */
    .proj-card {{
      background: #FFFFFF;
      border: 1.2px solid #D5DBD0;
      border-radius: 6px;
      padding: 4mm 5mm;
      display: flex;
      flex-direction: column;
      gap: 2mm;
    }}
    .proj-title-bar {{
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      border-bottom: 1px solid #E5E9E0;
      padding-bottom: 1.8mm;
    }}
    .proj-name {{
      font-family: 'Playfair Display', serif;
      font-size: 11pt;
      font-weight: 700;
      color: #1A201C;
    }}
    .proj-val {{
      font-size: 7.8pt;
      font-weight: 700;
      color: #2F3832;
    }}
    .proj-meta {{
      font-size: 7.5pt;
      font-weight: 600;
      color: #556257;
    }}
    .proj-scope {{
      font-size: 7.3pt;
      color: #38423B;
      line-height: 1.4;
    }}
    .proj-img-grid-3 {{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3mm;
      margin-top: 1.5mm;
    }}
    .proj-img-box {{
      height: 33mm;
      background: #F4F6F2;
      border: 1px solid #D5DBD0;
      border-radius: 4px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }}
    .proj-img-box img {{
      width: 100%;
      height: 100%;
      object-fit: contain;
      background: #FFFFFF;
    }}
    .proj-img-tag {{
      font-size: 6.2pt;
      font-weight: 700;
      color: #49544C;
      text-align: center;
      padding: 0.8mm;
      background: #F1F4EE;
      border-top: 0.5px solid #D5DBD0;
    }}

    /* =========================================================================
       PAGE 11: SOFTWARE, BAHASA & CLOSING
       ========================================================================= */
    .skills-grid {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4.5mm;
    }}
    .skill-block {{
      background: #FFFFFF;
      border: 1.2px solid #D5DBD0;
      border-radius: 6px;
      padding: 4mm 4.5mm;
    }}
    .skill-block-title {{
      font-family: 'Playfair Display', serif;
      font-size: 10pt;
      font-weight: 700;
      color: #1F2521;
      padding-bottom: 1.5mm;
      border-bottom: 1px solid #E8ECE4;
      margin-bottom: 2.5mm;
    }}
    .software-item {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.8mm;
      font-size: 7.5pt;
    }}
    .software-name {{
      font-weight: 600;
      color: #2F3631;
    }}
    .software-bar-bg {{
      width: 38mm;
      height: 3mm;
      background: #E8ECE4;
      border-radius: 2px;
      overflow: hidden;
    }}
    .software-bar-fill {{
      height: 100%;
      background: #383E40;
      border-radius: 2px;
    }}

    .closing-box {{
      background: #383E40;
      color: #FFFFFF;
      border-radius: 6px;
      padding: 5mm 6mm;
      display: flex;
      gap: 6mm;
      align-items: center;
      margin-top: auto;
    }}
    .closing-text-col {{
      flex: 1;
    }}
    .closing-title {{
      font-family: 'Playfair Display', serif;
      font-size: 12pt;
      font-weight: 700;
      margin-bottom: 1.5mm;
    }}
    .closing-desc {{
      font-size: 7.5pt;
      color: #E2E7E4;
      line-height: 1.45;
    }}
    .closing-qr-col {{
      width: 25mm;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #FFFFFF;
      padding: 2mm;
      border-radius: 4px;
    }}
    .closing-qr-col img {{
      width: 21mm;
      height: 21mm;
    }}
    .closing-qr-label {{
      font-size: 5.5pt;
      font-weight: 700;
      color: #1F2521;
      margin-top: 1mm;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }}
  </style>
</head>
<body>

  <!-- =======================================================================
       HALAMAN 1: COVER PAGE
       ======================================================================= -->
  <div class="page page-cover">
    <div class="cover-left">
      <div class="cover-titles">
        <div class="cover-top-label font-serif">CIVIL ENGINEERING</div>
        <div class="cover-main-title font-serif">PORTOFOLIO</div>
        <div class="cover-tagline">
          Kompilasi Rekayasa Teknik Sipil, Quantity Surveying (QS), Perencanaan Teknis (DED/RAB/RKS/Kurva S), Supervisi Mutu Lapangan, Lisensi BNSP Jenjang 5, dan Pemodelan BIM Revit.
        </div>
      </div>

      <div class="cover-name-block">
        <div class="cover-name font-serif">REZA SEPDIDE, A.Md.T.</div>
        <div class="cover-credential">Civil Engineer &bull; Quantity Surveyor &bull; Construction Planner</div>
        <div class="cover-badge-row">
          <div class="cover-pill">IPK 3.72 / 4.00 PNP</div>
          <div class="cover-pill">BNSP 5 PELAKSANA GEDUNG MADYA</div>
          <div class="cover-pill">13+ PROYEK TEKNIS</div>
          <div class="cover-pill">BILINGUAL JEPANG & INGGRIS</div>
        </div>
      </div>

      <div class="cover-contacts">
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
          <a href="https://linkedin.com/in/rezasepdide" target="_blank">linkedin.com/in/rezasepdide</a>
        </div>
        <div class="cover-contact-item">
          {svg_globe}
          <a href="https://professionalwebsiteportofolio.vercel.app/" target="_blank">professionalwebsiteportofolio.vercel.app</a>
        </div>
      </div>
    </div>

    <div class="cover-right">
      <div class="cover-photo-frame">
        <img src="{b64_photo}" alt="Reza Sepdide, A.Md.T.">
      </div>
      <div class="cover-photo-caption">Padang, Sumatera Barat, Indonesia</div>
    </div>
  </div>

  <!-- =======================================================================
       HALAMAN 2: TENTANG SAYA
       ======================================================================= -->
  <div class="page">
    <div class="page-body">
      <div class="about-top-title font-serif">Tentang saya</div>

      <div class="about-main-grid">
        <div class="about-arch-box">
          <div class="about-arch-frame">
            <img src="{b64_photo}" alt="Foto Profil Reza Sepdide">
          </div>
        </div>

        <div class="about-card">
          <p class="about-card-text">
            Saya adalah Lulusan D3 Teknik Sipil Politeknik Negeri Padang (IPK 3,72/4,00) dengan predikat <em>Dengan Pujian / Cum Laude</em> dan mahasiswa Sarjana Terapan (D4) Manajemen Rekayasa Konstruksi yang memegang sertifikasi kompetensi kerja <strong>BNSP Pelaksana Lapangan Pekerjaan Gedung Madya (Jenjang 5)</strong>.
          </p>
          <p class="about-card-text">
            Memiliki pengalaman lapangan dan manajerial sebagai <strong>Site Inspector di CV. SIFA DESIGN CONSULTANT</strong> serta <strong>Fasilitator Teknis Kemendikdasmen</strong> dalam pengawasan proyek konstruksi gedung, reviu kelayakan dokumen teknis, dan verifikasi progres fisik mingguan.
          </p>
          <p class="about-card-text">
            Keahlian teknis saya mencakup kompilasi <em>Detailed Engineering Design (DED)</em> menggunakan AutoCAD, estimasi <em>Bill of Quantities (BoQ)</em> dan Rencana Anggaran Biaya (RAB), penyusunan RKS, penjadwalan Kurva S, Bar Bending Schedule (BBS), serta pemodelan digital 3D melalui Autodesk Revit (BIM) dan SAP2000. Berkomitmen tinggi terhadap akurasi perhitungan, kepatuhan standar mutu SNI/PUPR, dan efisiensi pelaksanaan konstruksi.
          </p>
        </div>
      </div>

      <div class="about-pillars-grid">
        <div class="pillar-card">
          <div class="pillar-num">01</div>
          <div class="pillar-title">Site Inspection &amp; QC</div>
          <div class="pillar-desc">Verifikasi kesesuaian lapangan terhadap DED, slump test beton, pengawasan penulangan, penerbitan SI, dan penyusunan punch list.</div>
        </div>
        <div class="pillar-card">
          <div class="pillar-num">02</div>
          <div class="pillar-title">Quantity Surveying</div>
          <div class="pillar-desc">Perhitungan volume terpasang (backup volume), penyusunan RAB standar AHSP PUPR, valuasi MC-100, dan Contract Change Order (CCO).</div>
        </div>
        <div class="pillar-card">
          <div class="pillar-num">03</div>
          <div class="pillar-title">BIM &amp; CAD Modeling</div>
          <div class="pillar-desc">Pemodelan 3D arsitektur/struktur Autodesk Revit, drafting kerja multi-viewport AutoCAD, dan analisis beban respon spektrum SAP2000.</div>
        </div>
        <div class="pillar-card">
          <div class="pillar-num">04</div>
          <div class="pillar-title">Project Scheduling</div>
          <div class="pillar-desc">Penyusunan jadwal pelaksanaan (Time Schedule), pemetaan bobot Kurva S dinamis di Excel, dan pengendalian CPM di Microsoft Project.</div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>REZA SEPDIDE, A.Md.T. &bull; PORTOFOLIO TEKNIK SIPIL</span>
      <span>HALAMAN 02 DARI 11</span>
    </div>
  </div>

  <!-- =======================================================================
       HALAMAN 3: LATAR BELAKANG PENDIDIKAN
       ======================================================================= -->
  <div class="page">
    <div class="page-header-bar">
      <div class="page-header-title">LATAR BELAKANG PENDIDIKAN</div>
      <div class="page-header-sub">REKAM JEJAK AKADEMIK POLITEKNIK NEGERI PADANG</div>
    </div>

    <div class="page-body">
      <div class="edu-pnp-header">
        <img class="edu-pnp-logo" src="{b64_pnp_logo}" alt="Logo PNP">
        <div class="edu-pnp-title">POLITEKNIK NEGERI PADANG</div>
        <div class="edu-pnp-gpa">IPK : 3,72 / 4.00 &bull; DENGAN PUJIAN (CUM LAUDE)</div>
        <div class="edu-pnp-degree">D3 TEKNIK SIPIL &nbsp;(2022 &ndash; 2025)</div>
        <div class="edu-pnp-ongoing">Sedang Menempuh: Sarjana Terapan (D4) Manajemen Rekayasa Konstruksi PNP (2026 &ndash; Sekarang)</div>
      </div>

      <div class="edu-columns-grid">
        <!-- Kolom Kiri: Tugas Praproyek -->
        <div class="edu-col-card">
          <div class="edu-col-heading">Tugas Praproyek</div>
          <div class="edu-col-sub">&ldquo;Pemodelan Struktur 3D &amp; Analisis Beban Gempa Gedung Bertingkat&rdquo;</div>
          <ul class="edu-bullet-list">
            <li class="edu-bullet-item">
              <span class="edu-bullet-dot"></span>
              <span>Merancang pemodelan dan struktur beton bertulang bangunan gedung bertingkat sesuai standar SNI 2847:2019 dan SNI 1727:2020.</span>
            </li>
            <li class="edu-bullet-item">
              <span class="edu-bullet-dot"></span>
              <span>Menganalisis beban gempa respons spektrum dinamis menggunakan software <strong>SAP2000</strong>.</span>
            </li>
            <li class="edu-bullet-item">
              <span class="edu-bullet-dot"></span>
              <span>Mengevaluasi diagram momen lentur, gaya geser, gaya aksial, dan simpangan antar lantai (drift) untuk keamanan struktur portal.</span>
            </li>
            <li class="edu-bullet-item">
              <span class="edu-bullet-dot"></span>
              <span>Penyusunan gambar kerja teknis layout penulangan balok dan kolom menggunakan Autodesk Revit dan AutoCAD.</span>
            </li>
          </ul>
          <img class="edu-img-preview" src="{b64_sap}" alt="SAP2000 Model">
        </div>

        <!-- Kolom Kanan: Tugas Akhir -->
        <div class="edu-col-card">
          <div class="edu-col-heading">Tugas akhir</div>
          <div class="edu-col-sub">&ldquo;Rencana Pelaksanaan Pembangunan Gedung DPRD Kabupaten Pasaman&rdquo;</div>
          <ul class="edu-bullet-list">
            <li class="edu-bullet-item">
              <span class="edu-bullet-dot"></span>
              <span>Membuat perhitungan volume pekerjaan (Bill of Quantities / BoQ) struktur, arsitektur, dan MEP.</span>
            </li>
            <li class="edu-bullet-item">
              <span class="edu-bullet-dot"></span>
              <span>Menyusun Analisa Harga Satuan Pekerjaan (AHSP) dan Rencana Anggaran Biaya (RAB) berbasis Permen PUPR.</span>
            </li>
            <li class="edu-bullet-item">
              <span class="edu-bullet-dot"></span>
              <span>Merancang Time Schedule dan memetakan bobot pekerjaan ke dalam Kurva S menggunakan Microsoft Excel.</span>
            </li>
            <li class="edu-bullet-item">
              <span class="edu-bullet-dot"></span>
              <span>Menyusun jaringan kerja Precedence Diagram Method (PDM) dan lintasan kritis (CPM) di Microsoft Project.</span>
            </li>
          </ul>
          <img class="edu-img-preview" src="{b64_fp_ks}" alt="Kurva S Tugas Akhir">
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>REZA SEPDIDE, A.Md.T. &bull; PORTOFOLIO TEKNIK SIPIL</span>
      <span>HALAMAN 03 DARI 11</span>
    </div>
  </div>

  <!-- =======================================================================
       HALAMAN 4: LISENSI & SERTIFIKASI PROFESIONAL
       ======================================================================= -->
  <div class="page">
    <div class="page-header-bar">
      <div class="page-header-title">LISENSI &amp; SERTIFIKASI PROFESIONAL</div>
      <div class="page-header-sub">STANDAR KOMPETENSI RESMI BNSP, BIM, DAN KUALIFIKASI GLOBAL</div>
    </div>

    <div class="page-body">
      <div class="cert-grid">
        <div class="cert-card">
          <div class="cert-badge">BNSP JENJANG 5 &bull; REG. F7472118</div>
          <div class="cert-title">Pelaksana Lapangan Pekerjaan Gedung Madya</div>
          <div class="cert-issuer">Badan Nasional Sertifikasi Profesi (BNSP) &bull; LPJK PUPR</div>
          <div class="cert-desc">Menguasai 11 unit kompetensi kerja nasional mencakup penerapan K3, telaah gambar kerja DED, pengawasan pekerjaan struktur beton/baja, pengendalian mutu, dan administrasi laporan lapangan.</div>
        </div>

        <div class="cert-card">
          <div class="cert-badge">BIM MASTERCLASS &bull; ARSISTEN ACADEMY</div>
          <div class="cert-title">Revit Masterclass for Beginners (BIM)</div>
          <div class="cert-issuer">Arsisten Academy &bull; Building Information Modeling</div>
          <div class="cert-desc">Kompetensi pemodelan informasi bangunan 3D, pembuatan komponen balok-kolom parametrik, detail penulangan rebar 3D, serta integrasi jadwal kuantitas material otomatis (Schedule Take-off).</div>
        </div>

        <div class="cert-card">
          <div class="cert-badge">SSW EVALUATION EXAM &bull; JEPANG</div>
          <div class="cert-title">Specified Skilled Worker (Civil Engineering)</div>
          <div class="cert-issuer">Japan Association for Construction Human Resources (JAC)</div>
          <div class="cert-desc">Kualifikasi teknis keahlian konstruksi standar industri Jepang untuk kategori teknik sipil, pengendalian kualitas material, keselamatan kerja (HSE), dan manajemen operasional lapangan.</div>
        </div>

        <div class="cert-card">
          <div class="cert-badge">KEMAMPUAN BAHASA JEPANG &bull; SCORE 250 &amp; 165</div>
          <div class="cert-title">JFT-Basic &amp; JLPT Level N4</div>
          <div class="cert-issuer">The Japan Foundation &bull; Japan Educational Exchanges</div>
          <div class="cert-desc">Sertifikasi kemahiran komunikasi bahasa Jepang tingkat menengah dalam konteks profesional, pembacaan gambar kerja, instruksi teknis, dan komunikasi kerja harian.</div>
        </div>

        <div class="cert-card">
          <div class="cert-badge">PROFICIENCY TEST &bull; SKOR 640</div>
          <div class="cert-title">Prediction Test for TOEIC</div>
          <div class="cert-issuer">UPT Bahasa Politeknik Negeri Padang</div>
          <div class="cert-desc">Kemampuan komunikasi bahasa Inggris profesional tingkat menengah untuk korespondensi proyek internasional, pembacaan standar teknis ASTM/ACI, dan koordinasi dokumen tender.</div>
        </div>

        <div class="cert-card">
          <div class="cert-badge">AKADEMIK &bull; IPK 3.72 / 4.00</div>
          <div class="cert-title">Transkrip Nilai Akademik Resmi PNP</div>
          <div class="cert-issuer">Politeknik Negeri Padang &bull; Jurusan Teknik Sipil</div>
          <div class="cert-desc">Menyelesaikan 115 SKS dengan nilai luar biasa pada mata kuliah inti Rekayasa Gempa, Manajemen Konstruksi, Estimasi Biaya, Mekanika Tanah, Beton Bertulang, dan AutoCAD/BIM.</div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>REZA SEPDIDE, A.Md.T. &bull; PORTOFOLIO TEKNIK SIPIL</span>
      <span>HALAMAN 04 DARI 11</span>
    </div>
  </div>

  <!-- =======================================================================
       HALAMAN 5: PENGALAMAN LAPANGAN (SITE INSPECTOR & FASILITATOR)
       ======================================================================= -->
  <div class="page">
    <div class="page-header-bar">
      <div class="page-header-title">PENGALAMAN LAPANGAN &amp; SUPERVISI</div>
      <div class="page-header-sub">PENGAWASAN MUTU STRUKTUR, DED &amp; MONITORING FISIK PEMERINTAH</div>
    </div>

    <div class="page-body">
      <!-- Section 1: Site Inspector CV SIFA -->
      <div class="exp-section">
        <div class="exp-header-row">
          <div>
            <div class="exp-role">Site Inspector (Pengawas Lapangan)</div>
            <div class="exp-company">CV. SIFA DESIGN CONSULTANT &bull; Padang Pariaman, Indonesia</div>
          </div>
          <div class="exp-period">Sep 2026 &ndash; Sekarang</div>
        </div>
        <ul class="exp-desc-list">
          <li class="exp-desc-item">
            <span class="edu-bullet-dot"></span>
            <span>Melakukan inspeksi berkala di lapangan guna memastikan pelaksanaan pekerjaan struktur beton dan arsitektur sesuai gambar Detailed Engineering Design (DED) serta spesifikasi teknis.</span>
          </li>
          <li class="exp-desc-item">
            <span class="edu-bullet-dot"></span>
            <span>Mengarahkan mandor dan pekerja untuk tindakan perbaikan segera (corrective action) saat ditemukan deviasi jarak sengkang atau dimensi tulangan guna meminimalkan pekerjaan ulang (rework).</span>
          </li>
          <li class="exp-desc-item">
            <span class="edu-bullet-dot"></span>
            <span>Menyusun laporan progres fisik mingguan berbasis kuantitas terverifikasi dan menerbitkan Site Instruction (SI) resmi sebagai arsip administrasi proyek.</span>
          </li>
        </ul>
        <div class="exp-photos-row">
          <div class="exp-photo-box">
            <img src="{b64_si_penulangan}" alt="Penulangan">
            <div class="exp-photo-label">Pengecekan Pembesian Balok</div>
          </div>
          <div class="exp-photo-box">
            <img src="{b64_si_sengkang}" alt="Sengkang">
            <div class="exp-photo-label">Pengukuran Jarak Sengkang</div>
          </div>
          <div class="exp-photo-box">
            <img src="{b64_si_card}" alt="SI">
            <div class="exp-photo-label">Buku Instruksi Lapangan (SI)</div>
          </div>
          <div class="exp-photo-box">
            <img src="{b64_si_laporan}" alt="Laporan Mingguan">
            <div class="exp-photo-label">Laporan Progres Fisik</div>
          </div>
        </div>
      </div>

      <!-- Section 2: Fasilitator Kemendikdasmen -->
      <div class="exp-section">
        <div class="exp-header-row">
          <div>
            <div class="exp-role">Fasilitator Teknis &mdash; Program Revitalisasi Sekolah Dasar</div>
            <div class="exp-company">Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen) &bull; Pasaman, Indonesia</div>
          </div>
          <div class="exp-period">Jun 2025 &ndash; Des 2025</div>
        </div>
        <ul class="exp-desc-list">
          <li class="exp-desc-item">
            <span class="edu-bullet-dot"></span>
            <span>Melakukan reviu dan evaluasi teknis dokumen perencanaan (DED, RAB, dan RKS) pada 6 sekolah penerima dana bantuan pemerintah.</span>
          </li>
          <li class="exp-desc-item">
            <span class="edu-bullet-dot"></span>
            <span>Melaksanakan monitoring dan evaluasi (Monev) berkala terhadap mutu pelaksanaan fisik dan ketepatan kurva S di lapangan.</span>
          </li>
          <li class="exp-desc-item">
            <span class="edu-bullet-dot"></span>
            <span>Memverifikasi keabsahan laporan kemajuan pekerjaan sebagai syarat rekomendasi pencairan dana termin grant pemerintah.</span>
          </li>
        </ul>
        <div class="exp-photos-row">
          <div class="exp-photo-box" style="grid-column: span 2;">
            <img src="{b64_fas_monitoring}" alt="Site Monitoring">
            <div class="exp-photo-label">Inspeksi Monitoring &amp; Evaluasi Lapangan</div>
          </div>
          <div class="exp-photo-box" style="grid-column: span 2;">
            <img src="{b64_fas_bimtek}" alt="Bimtek Fasilitator">
            <div class="exp-photo-label">Bimbingan Teknis Fasilitator Kemendikdasmen</div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>REZA SEPDIDE, A.Md.T. &bull; PORTOFOLIO TEKNIK SIPIL</span>
      <span>HALAMAN 05 DARI 11</span>
    </div>
  </div>

  <!-- =======================================================================
       HALAMAN 6: PRAKTIK KERJA LAPANGAN (KONTRAKTOR EPC INDUSTRI)
       ======================================================================= -->
  <div class="page">
    <div class="page-header-bar">
      <div class="page-header-title">PRAKTIK KERJA LAPANGAN: KONTRAKTOR INDUSTRI</div>
      <div class="page-header-sub">QC BETON, BAR BENDING SCHEDULE &amp; PUNCH LIST PADA PROYEK EPC</div>
    </div>

    <div class="page-body">
      <div class="exp-section" style="flex: 1;">
        <div class="exp-header-row">
          <div>
            <div class="exp-role">Civil Engineering Field Intern (QC &amp; QS Field)</div>
            <div class="exp-company">PT Solusi Industri Energi &bull; Waste Gas Recovery Project (PT Indo-Bharat Rayon, Purwakarta)</div>
          </div>
          <div class="exp-period">Agu 2024 &ndash; Des 2024</div>
        </div>
        <ul class="exp-desc-list">
          <li class="exp-desc-item">
            <span class="edu-bullet-dot"></span>
            <span>Menyusun <strong>Bar Bending Schedule (BBS)</strong> penulangan pondasi mesin dan struktur penahan pipa transmisi gas.</span>
          </li>
          <li class="exp-desc-item">
            <span class="edu-bullet-dot"></span>
            <span>Menghitung kuantitas pekerjaan terpasang (Backup Volume) sebagai dasar penagihan sertifikat bulanan (Progress Billing).</span>
          </li>
          <li class="exp-desc-item">
            <span class="edu-bullet-dot"></span>
            <span>Melaksanakan inspeksi Quality Control (QC) harian, meliputi pengujian Slump Test beton cor segar, verifikasi elevasi bekisting, dan checklist rebar pra-pengecoran.</span>
          </li>
          <li class="exp-desc-item">
            <span class="edu-bullet-dot"></span>
            <span>Melakukan site mapping dan menyusun daftar cacat mutu (Punch List) sebelum dan setelah serah terima area kerja.</span>
          </li>
          <li class="exp-desc-item">
            <span class="edu-bullet-dot"></span>
            <span>Menyusun laporan harian (Daily Progress) dan mingguan untuk koordinasi rapat mingguan kontraktor dengan konsultan pengawas.</span>
          </li>
        </ul>
        <div class="exp-photos-row" style="margin-top: 4mm;">
          <div class="exp-photo-box" style="height: 48mm;">
            <img src="{b64_mag_slump}" alt="Slump Test">
            <div class="exp-photo-label">Uji Slump Test Beton Segar</div>
          </div>
          <div class="exp-photo-box" style="height: 48mm;">
            <img src="{b64_mag_pembesian}" alt="Mapping Work">
            <div class="exp-photo-label">Mapping Area Pembesian Pondasi</div>
          </div>
          <div class="exp-photo-box" style="height: 48mm;">
            <img src="{b64_mag_daily}" alt="Daily Report">
            <div class="exp-photo-label">Laporan Harian Progres Lapangan</div>
          </div>
          <div class="exp-photo-box" style="height: 48mm;">
            <img src="{b64_mag_punch}" alt="Punch List">
            <div class="exp-photo-label">Penyusunan Punch List Pekerjaan</div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>REZA SEPDIDE, A.Md.T. &bull; PORTOFOLIO TEKNIK SIPIL</span>
      <span>HALAMAN 06 DARI 11</span>
    </div>
  </div>

  <!-- =======================================================================
       HALAMAN 7: PROYEK REVITALISASI: KB AR-RAHMA & TK NEG NEG PEMBINA
       ======================================================================= -->
  <div class="page">
    <div class="page-header-bar">
      <div class="page-header-title">PORTOFOLIO PROYEK: REVITALISASI PENDIDIKAN (1)</div>
      <div class="page-header-sub">PERENCANA TEKNIS, DED AUTOCAD, ESTIMASI RAB &amp; KURVA S</div>
    </div>

    <div class="page-body">
      <!-- Project 1: KB Ar-Rahma -->
      <div class="proj-card">
        <div class="proj-title-bar">
          <div>
            <div class="proj-name">Proyek Revitalisasi Fasilitas Gedung KB Ar-Rahma</div>
            <div class="proj-meta">Perencana Teknis &amp; Quantity Surveyor &bull; Mandiri &bull; Sep 2026 &ndash; Sekarang</div>
          </div>
          <div class="proj-val">NILAI RAB: Rp 101.442.000</div>
        </div>
        <div class="proj-scope">
          Menyusun paket perencanaan lengkap mencakup berkas DED AutoCAD (5.5 MB) denah arsitektur dan struktur, Rencana Anggaran Biaya (RAB) berbasis AHSP PUPR, dokumen RKS teknis, dan penjadwalan Kurva S terinci.
        </div>
        <div class="proj-img-grid-3">
          <div class="proj-img-box">
            <img src="{b64_kb_ded}" alt="DED KB Ar-Rahma">
            <div class="proj-img-tag">Gambar Kerja DED AutoCAD</div>
          </div>
          <div class="proj-img-box">
            <img src="{b64_kb_rab}" alt="RAB KB Ar-Rahma">
            <div class="proj-img-tag">Rencana Anggaran Biaya (RAB)</div>
          </div>
          <div class="proj-img-box">
            <img src="{b64_kb_ks}" alt="Kurva S KB Ar-Rahma">
            <div class="proj-img-tag">Jadwal Pelaksanaan Kurva S</div>
          </div>
        </div>
      </div>

      <!-- Project 2: TK Negeri Pembina -->
      <div class="proj-card">
        <div class="proj-title-bar">
          <div>
            <div class="proj-name">Proyek Revitalisasi Gedung TK Negeri Pembina</div>
            <div class="proj-meta">Perencana Teknis &amp; Quantity Surveyor &bull; Mandiri &bull; Sep 2026 &ndash; Sekarang</div>
          </div>
          <div class="proj-val">NILAI RAB: Rp 205.890.000</div>
        </div>
        <div class="proj-scope">
          Menyusun Detailed Engineering Design (6.0 MB) rehabilitasi ruang kelas dan area bermain ramah anak, perhitungan volume take-off struktur baja ringan, RKS material, serta plotting Kurva S mingguan.
        </div>
        <div class="proj-img-grid-3">
          <div class="proj-img-box">
            <img src="{b64_tk_ded}" alt="DED TK Pembina">
            <div class="proj-img-tag">Gambar Kerja DED AutoCAD</div>
          </div>
          <div class="proj-img-box">
            <img src="{b64_tk_rab}" alt="RAB TK Pembina">
            <div class="proj-img-tag">Lembar Rekapitulasi RAB</div>
          </div>
          <div class="proj-img-box">
            <img src="{b64_tk_ks}" alt="Kurva S TK Pembina">
            <div class="proj-img-tag">Jadwal Pelaksanaan Kurva S</div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>REZA SEPDIDE, A.Md.T. &bull; PORTOFOLIO TEKNIK SIPIL</span>
      <span>HALAMAN 07 DARI 11</span>
    </div>
  </div>

  <!-- =======================================================================
       HALAMAN 8: PROYEK REVITALISASI: SDN 19 KUAMANG & SLBN 2 PARIAMAN
       ======================================================================= -->
  <div class="page">
    <div class="page-header-bar">
      <div class="page-header-title">PORTOFOLIO PROYEK: REVITALISASI PENDIDIKAN (2)</div>
      <div class="page-header-sub">MULTI-VIEWPORT CAD, BACKUP VOLUME &amp; ADDENDUM CCO</div>
    </div>

    <div class="page-body">
      <!-- Project 1: SDN 19 Kuamang -->
      <div class="proj-card">
        <div class="proj-title-bar">
          <div>
            <div class="proj-name">Revitalisasi Fasilitas Gedung SDN 19 Kuamang</div>
            <div class="proj-meta">Perencana Teknis &amp; Quantity Surveyor &bull; Pasaman &bull; Sep 2026</div>
          </div>
          <div class="proj-val">STATUS: TERVERIFIKASI KEMENDIKDASMEN</div>
        </div>
        <div class="proj-scope">
          Drafting DED multi-viewport layout AutoCAD ke PDF beresolusi tinggi, perhitungan BoQ pembongkaran &amp; renovasi struktur atap, formulir identifikasi kerusakan, dan RKS spesifikasi material genteng metal.
        </div>
        <div class="proj-img-grid-3">
          <div class="proj-img-box">
            <img src="{b64_kua_ded}" alt="DED Kuamang">
            <div class="proj-img-tag">Layout Viewports AutoCAD</div>
          </div>
          <div class="proj-img-box">
            <img src="{b64_kua_rks}" alt="RKS Kuamang">
            <div class="proj-img-tag">Spesifikasi Teknis (RKS)</div>
          </div>
          <div class="proj-img-box">
            <img src="{b64_kua_ks}" alt="Kurva S Kuamang">
            <div class="proj-img-tag">Time Schedule Kurva S</div>
          </div>
        </div>
      </div>

      <!-- Project 2: SLBN 2 Pariaman -->
      <div class="proj-card">
        <div class="proj-title-bar">
          <div>
            <div class="proj-name">Revitalisasi Fasilitas SLBN 2 Pariaman (Akses Ram Inklusif)</div>
            <div class="proj-meta">Perencana Teknis &amp; Quantity Surveyor &bull; Kota Pariaman &bull; Jul 2026</div>
          </div>
          <div class="proj-val">ADDENDUM CCO + MC-100</div>
        </div>
        <div class="proj-scope">
          Perancangan teknis aksesibilitas ram ramah disabilitas (kemiringan 1:12), perhitungan backup volume terpasang, dan penerbitan addendum <em>Contract Change Order (CCO)</em> penyesuaian lapangan.
        </div>
        <div class="proj-img-grid-3">
          <div class="proj-img-box">
            <img src="{b64_slb_ded}" alt="DED SLBN 2">
            <div class="proj-img-tag">DED Detail Struktur Ram Inklusif</div>
          </div>
          <div class="proj-img-box">
            <img src="{b64_slb_cco}" alt="CCO SLBN 2">
            <div class="proj-img-tag">Dokumen Contract Change Order</div>
          </div>
          <div class="proj-img-box">
            <img src="{b64_slb_ded}" alt="SLBN DED">
            <div class="proj-img-tag">Denah &amp; Elevasi Arsitektur</div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>REZA SEPDIDE, A.Md.T. &bull; PORTOFOLIO TEKNIK SIPIL</span>
      <span>HALAMAN 08 DARI 11</span>
    </div>
  </div>

  <!-- =======================================================================
       HALAMAN 9: PROYEK INDUSTRI WWTP & PEMODELAN BIM REVIT
       ======================================================================= -->
  <div class="page">
    <div class="page-header-bar">
      <div class="page-header-title">PROYEK INDUSTRI WWTP &amp; PEMODELAN BIM REVIT</div>
      <div class="page-header-sub">RE-MEASUREMENT MC-100 &amp; PEMODELAN STRUKTUR DIGITAL 3D</div>
    </div>

    <div class="page-body">
      <!-- Project 1: WWTP Perfetti -->
      <div class="proj-card">
        <div class="proj-title-bar">
          <div>
            <div class="proj-name">WWTP 168 CMD PT Perfetti Van Melle Indonesia</div>
            <div class="proj-meta">Freelance Quantity Surveyor &bull; Subkontraktor PT Mulia Djasmine &bull; Sep 2025</div>
          </div>
          <div class="proj-val">KAPASITAS: 168 M&sup3;/HARI</div>
        </div>
        <div class="proj-scope">
          Melaksanakan re-measurement volume aktual di lokasi proyek (MC-100), menyusun Bar Bending Schedule (BBS) bak aerasi, rekapitulasi valuasi pekerjaan untuk dasar pengajuan klaim pembayaran termin, dan verifikasi CCO.
        </div>
        <div class="proj-img-grid-3">
          <div class="proj-img-box">
            <img src="{b64_wwtp_bbs}" alt="BBS WWTP">
            <div class="proj-img-tag">BBS Pembesian Bak Aerasi</div>
          </div>
          <div class="proj-img-box">
            <img src="{b64_wwtp_bv}" alt="Backup Volume WWTP">
            <div class="proj-img-tag">Backup Volume Re-Measurement</div>
          </div>
          <div class="proj-img-box">
            <img src="{b64_wwtp_bbs}" alt="CCO WWTP">
            <div class="proj-img-tag">Rekapitulasi Klaim Subkon</div>
          </div>
        </div>
      </div>

      <!-- Project 2: Revit BIM Modeling -->
      <div class="proj-card">
        <div class="proj-title-bar">
          <div>
            <div class="proj-name">Pemodelan Struktur &amp; Arsitektur 3D Autodesk Revit (BIM)</div>
            <div class="proj-meta">BIM Modeler &bull; Arsisten Academy &bull; Proyek Pelatihan Profesional</div>
          </div>
          <div class="proj-val">LEVEL OF DETAIL: LOD 300</div>
        </div>
        <div class="proj-scope">
          Pemodelan parametrik portal 3D beton bertulang, pemodelan tulangan lentur dan sengkang secara tiga dimensi (3D Rebar), visualisasi render potongan analitis, dan integrasi schedule quantity otomatis.
        </div>
        <div class="proj-img-grid-3">
          <div class="proj-img-box">
            <img src="{b64_revit_portal}" alt="Revit Portal">
            <div class="proj-img-tag">Portal Struktur 3D Revit</div>
          </div>
          <div class="proj-img-box">
            <img src="{b64_revit_portal}" alt="Revit Rebar">
            <div class="proj-img-tag">Detail Tulangan Balok-Kolom</div>
          </div>
          <div class="proj-img-box">
            <img src="{b64_revit_portal}" alt="Revit Schedule">
            <div class="proj-img-tag">Quantity Take-Off Otomatis</div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>REZA SEPDIDE, A.Md.T. &bull; PORTOFOLIO TEKNIK SIPIL</span>
      <span>HALAMAN 09 DARI 11</span>
    </div>
  </div>

  <!-- =======================================================================
       HALAMAN 10: KOMPETISI TENDER NASIONAL & RISET ILMIAH
       ======================================================================= -->
  <div class="page">
    <div class="page-header-bar">
      <div class="page-header-title">KOMPETISI TENDER NASIONAL &amp; RISET ILMIAH</div>
      <div class="page-header-sub">ESTIMASI TENDER UNS 2025 &amp; PUBLIKASI PKM-AI KEMENDIKBUDRISTEK</div>
    </div>

    <div class="page-body">
      <!-- Section 1: Fondasi Days UNS -->
      <div class="exp-section">
        <div class="exp-header-row">
          <div>
            <div class="exp-role">Kompetisi Tender Nasional &ldquo;Fondasi Days 2025&rdquo;</div>
            <div class="exp-company">Universitas Sebelas Maret (UNS) &bull; Tim Jaya Jaya Team</div>
          </div>
          <div class="exp-period">Tahun 2025</div>
        </div>
        <ul class="exp-desc-list">
          <li class="exp-desc-item">
            <span class="edu-bullet-dot"></span>
            <span>Berperan sebagai Estimator &amp; Modeler 3D dalam penyusunan dokumen penawaran teknis dan harga tender proyek gedung.</span>
          </li>
          <li class="exp-desc-item">
            <span class="edu-bullet-dot"></span>
            <span>Membuat pemodelan 3D tahapan metode kerja pelaksanaan konstruksi (Site Erection &amp; Logistics) menggunakan SketchUp.</span>
          </li>
          <li class="exp-desc-item">
            <span class="edu-bullet-dot"></span>
            <span>Merancang poster infografis penawaran teknis, estimasi BoQ kompetitif, dan integrasi lintasan kritis Microsoft Project.</span>
          </li>
        </ul>
        <div class="exp-photos-row" style="margin-top: 3mm;">
          <div class="exp-photo-box" style="height: 38mm; grid-column: span 2;">
            <img src="{b64_uns_poster}" alt="Poster Tender UNS" style="object-fit: contain; background: #FFFFFF;">
            <div class="exp-photo-label">Poster Infografis Tender Nasional UNS</div>
          </div>
          <div class="exp-photo-box" style="height: 38mm; grid-column: span 2;">
            <img src="{b64_uns_render}" alt="Render Metode Kerja 3D" style="object-fit: cover;">
            <div class="exp-photo-label">Simulasi 3D Tahapan Metode Konstruksi</div>
          </div>
        </div>
      </div>

      <!-- Section 2: PKM-AI -->
      <div class="exp-section">
        <div class="exp-header-row">
          <div>
            <div class="exp-role">Pekan Kreativitas Mahasiswa &mdash; Artikel Ilmiah (PKM-AI)</div>
            <div class="exp-company">Kemendikbudristek RI &bull; Studi Kasus Proyek Waste Gas Recovery IBR Purwakarta</div>
          </div>
          <div class="exp-period">Tahun 2025</div>
        </div>
        <ul class="exp-desc-list">
          <li class="exp-desc-item">
            <span class="edu-bullet-dot"></span>
            <span>Menulis karya ilmiah bertajuk <em>&ldquo;Analisa Biaya Scaffolding pada Proyek Waste Gas Recovery IBR Purwakarta&rdquo;</em>.</span>
          </li>
          <li class="exp-desc-item">
            <span class="edu-bullet-dot"></span>
            <span>Menganalisis perbandingan efisiensi biaya siklus hidup (Life Cycle Cost) antara skema pembelian aset scaffolding dengan skema rental pada proyek industri berskala besar.</span>
          </li>
        </ul>
        <div class="exp-photos-row" style="margin-top: 2.5mm;">
          <div class="exp-photo-box" style="height: 28mm; grid-column: span 4;">
            <img src="{b64_pkm}" alt="Manuskrip PKM-AI" style="object-fit: contain; background: #FFFFFF;">
            <div class="exp-photo-label">Manuskrip Artikel Ilmiah Analisa Biaya Perancah</div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>REZA SEPDIDE, A.Md.T. &bull; PORTOFOLIO TEKNIK SIPIL</span>
      <span>HALAMAN 10 DARI 11</span>
    </div>
  </div>

  <!-- =======================================================================
       HALAMAN 11: MATRIKS KOMPETENSI, BAHASA & PENUTUP
       ======================================================================= -->
  <div class="page">
    <div class="page-header-bar">
      <div class="page-header-title">MATRIKS KOMPETENSI &amp; SALURAN KOMUNIKASI</div>
      <div class="page-header-sub">KEMAMPUAN PERANGKAT LUNAK, BAHASA &amp; VERIFIKASI RESMI</div>
    </div>

    <div class="page-body">
      <div class="skills-grid">
        <!-- Software Skills -->
        <div class="skill-block">
          <div class="skill-block-title">Kemampuan Perangkat Lunak (Software)</div>
          <div class="software-item">
            <span class="software-name">Autodesk Revit (BIM)</span>
            <div class="software-bar-bg"><div class="software-bar-fill" style="width: 88%;"></div></div>
          </div>
          <div class="software-item">
            <span class="software-name">AutoCAD (2D Drafting &amp; Viewports)</span>
            <div class="software-bar-bg"><div class="software-bar-fill" style="width: 95%;"></div></div>
          </div>
          <div class="software-item">
            <span class="software-name">SketchUp (3D Method Modeling)</span>
            <div class="software-bar-bg"><div class="software-bar-fill" style="width: 85%;"></div></div>
          </div>
          <div class="software-item">
            <span class="software-name">SAP2000 (Dynamic Earthquake Analysis)</span>
            <div class="software-bar-bg"><div class="software-bar-fill" style="width: 82%;"></div></div>
          </div>
          <div class="software-item">
            <span class="software-name">Microsoft Project (CPM Scheduling)</span>
            <div class="software-bar-bg"><div class="software-bar-fill" style="width: 86%;"></div></div>
          </div>
          <div class="software-item">
            <span class="software-name">Microsoft Excel (RAB &amp; S-Curve)</span>
            <div class="software-bar-bg"><div class="software-bar-fill" style="width: 96%;"></div></div>
          </div>
        </div>

        <!-- Language & Hard Skills -->
        <div class="skill-block">
          <div class="skill-block-title">Kualifikasi Bahasa &amp; Keahlian Inti</div>
          <div style="font-size: 7.5pt; color: #38423B; line-height: 1.5; display: flex; flex-direction: column; gap: 1.8mm;">
            <div><strong>Bahasa Indonesia:</strong> Penutur Asli (Native Proficiency)</div>
            <div><strong>Bahasa Jepang:</strong> Tingkat Menengah &bull; JFT-Basic Skor 250 &amp; JLPT N4 Skor 165 (Tersertifikasi The Japan Foundation)</div>
            <div><strong>Bahasa Inggris:</strong> Tingkat Menengah &bull; TOEIC Skor 640 (UPT Bahasa Politeknik Negeri Padang)</div>
            <div style="margin-top: 1.5mm; padding-top: 1.5mm; border-top: 1px solid #E8ECE4;">
              <strong>Keahlian Teknis Rekayasa:</strong>
              <div style="margin-top: 1mm; font-size: 7pt; color: #525E55;">
                Quantity Take-Off (QTO) &bull; Estimasi RAB AHSP PUPR &bull; Penyusunan RKS &bull; Bar Bending Schedule (BBS) &bull; Inspeksi QC Lapangan &bull; Re-Measurement MC-100 &bull; Kurva S &bull; Slump Test Beton &bull; CCO Addendum
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pernyataan Keabsahan & QR Code Box -->
      <div class="closing-box">
        <div class="closing-text-col">
          <div class="closing-title">Pernyataan Integritas &amp; Keabsahan Portofolio</div>
          <p class="closing-desc">
            Seluruh data riwayat akademik, lisensi profesi BNSP, pengalaman lapangan, dan lembar gambar kerja DED serta perhitungan RAB yang tercantum dalam portofolio ini adalah dokumen resmi yang dapat dipertanggungjawabkan keabsahan dan integritas teknisnya.
          </p>
          <div style="margin-top: 3mm; font-size: 7.5pt; color: #CCD6CF;">
            <strong>Kontak Langsung:</strong> rezasepdide@gmail.com &bull; +62 896-4459-0915 &bull; Padang, Sumatera Barat
          </div>
        </div>
        <div class="closing-qr-col">
          <img src="{b64_qr}" alt="QR Web Portofolio">
          <div class="closing-qr-label">Scan Web Portofolio</div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>REZA SEPDIDE, A.Md.T. &bull; PORTOFOLIO TEKNIK SIPIL</span>
      <span>HALAMAN 11 DARI 11</span>
    </div>
  </div>

</body>
</html>
"""
    with open(HTML_PATH, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Generated HTML template at: {HTML_PATH}")
    return HTML_PATH

def render_pdf(html_path):
    print("Compiling PDF via Headless Brave Browser (via /tmp sandbox)...")
    tmp_html = "/tmp/portofolio_portrait.html"
    tmp_pdf = "/tmp/portofolio_portrait.pdf"
    
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
        print(f"SUCCESS! Rendered PDF ({size_mb:.2f} MB): {PDF_PATH}")

        # Copy to public folder and root
        public_dest = os.path.join(ROOT_DIR, "public", "Portofolio_Teknik_Sipil_Reza_Sepdide_Portrait.pdf")
        shutil.copyfile(PDF_PATH, public_dest)
        print(f"Copied to: {public_dest}")

        public_dest_short = os.path.join(ROOT_DIR, "public", "portofolio_reza_sepdide_portrait.pdf")
        shutil.copyfile(PDF_PATH, public_dest_short)
        print(f"Copied to: {public_dest_short}")

        root_dest = os.path.join(ROOT_DIR, "Portofolio_Teknik_Sipil_Reza_Sepdide_Portrait.pdf")
        shutil.copyfile(PDF_PATH, root_dest)
        print(f"Copied to: {root_dest}")

        # Render page previews for inspection
        review_dir = os.path.join(EXPORT_DIR, "portrait_review")
        os.makedirs(review_dir, exist_ok=True)
        ppm_cmd = ["pdftoppm", "-png", "-r", "150", PDF_PATH, os.path.join(review_dir, "page")]
        subprocess.run(ppm_cmd, capture_output=True)
        print(f"Rendered PNG page previews in: {review_dir}")
    else:
        print("Failed to generate PDF:", res.stderr)
        sys.exit(1)

if __name__ == "__main__":
    html_file = build_html()
    render_pdf(html_file)
