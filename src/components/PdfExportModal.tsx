'use client';

import React, { useEffect } from 'react';
import { X, Printer, FileText, ShieldCheck, Download } from 'lucide-react';
import { usePdfModal } from '../context/PdfModalContext';
import { profileData } from '../data/cv-data';

export const PdfExportModal: React.FC = () => {
  const { isExportOpen, closeExportModal, triggerExportPdf, openPdf } = usePdfModal();

  useEffect(() => {
    if (!isExportOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeExportModal();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExportOpen, closeExportModal]);

  if (!isExportOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[110] bg-[#111111]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 print:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Export Portfolio to PDF"
      onClick={closeExportModal}
    >
      <div
        className="bg-[#F3EEE3] border-4 border-[#111111] w-full max-w-2xl flex flex-col shadow-none relative overflow-hidden max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#111111] text-[#F3EEE3] px-6 py-4 flex items-center justify-between gap-4 border-b-2 border-[#111111]">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-[#D9541E] text-[#F3EEE3] text-xs font-mono font-bold">
              PDF
            </span>
            <div>
              <span className="text-[10px] font-mono text-[#D9541E] tracking-widest uppercase block font-bold">
                Dossier Downloads &amp; Export
              </span>
              <h3 className="font-display text-sm sm:text-base text-[#F3EEE3] uppercase tracking-tight">
                REZA SEPDIDE — ENGINEERING PORTFOLIO PACKAGES
              </h3>
            </div>
          </div>

          <button
            onClick={closeExportModal}
            className="p-1.5 text-[#F3EEE3] hover:text-[#D9541E] transition-colors cursor-pointer"
            aria-label="Close Export Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-6 overflow-y-auto">
          {/* Summary Box */}
          <div className="bg-[#EAE4D7] border-2 border-[#DDD6C7] p-5">
            <div className="flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-[#D9541E] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-sm sm:text-base text-[#111111] uppercase tracking-tight">
                  OFFICIAL ENGINEERING PORTFOLIO PACKAGES
                </h4>
                <p className="text-xs font-sans text-[#525252] mt-1 leading-relaxed">
                  High-resolution comprehensive dossiers formatted for contractor pre-qualification, consultant tenders, and formal technical job applications.
                </p>
              </div>
            </div>
          </div>

          {/* Download Options */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111]">
              Pilihan Dokumen Portofolio PDF Resmi
            </h4>

            {/* Option 1: Landscape Edition (Featured) */}
            <div className="p-4 bg-[#FAF7F0] border-2 border-[#111111] hover:border-[#D9541E] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-xs sm:text-sm text-[#111111] font-bold uppercase tracking-tight">
                    Portofolio Edisi Landscape (Resmi 2026)
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#111111] text-[#F3EEE3]">
                    11 HALAMAN • A4 LANDSCAPE • 16.6 MB
                  </span>
                </div>
                <p className="text-xs font-sans text-[#3E3E3E] mt-1">
                  Edisi resmi A4 Landscape dengan palet Cream (#F3EEE3), Ink Black (#111111), dan Burnt Orange (#D9541E). Memuat Tentang Saya, Pendidikan PNP (Logo Resmi, Tugas Praproyek SAP2000 &amp; Tugas Akhir DPRD Pasaman), Lisensi BNSP 5, Pengawasan CV. SIFA, dan Galeri DED.
                </p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    closeExportModal();
                    openPdf(
                      '/Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf',
                      'Reza Sepdide - Portofolio Teknik Sipil Landscape (11 Halaman)'
                    );
                  }}
                  className="px-3 py-1.5 border-2 border-[#111111] bg-transparent text-[#111111] hover:bg-[#111111] hover:text-[#F3EEE3] text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Lihat
                </button>
                <a
                  href="/Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf"
                  download
                  className="px-3.5 py-1.5 bg-[#111111] hover:bg-[#D9541E] border-2 border-[#111111] hover:border-[#D9541E] text-[#F3EEE3] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh</span>
                </a>
              </div>
            </div>

            {/* Option 2: Portrait Edition */}
            <div className="p-4 bg-[#FAF7F0] border-2 border-[#DDD6C7] hover:border-[#111111] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-xs sm:text-sm text-[#111111] uppercase tracking-tight">
                    Portofolio Edisi Portrait (Vertical)
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#EAE4D7] text-[#111111]">
                    11 HALAMAN • A4 PORTRAIT • 16 MB
                  </span>
                </div>
                <p className="text-xs font-sans text-[#3E3E3E] mt-1">
                  Edisi portofolio vertikal format A4 Portrait untuk tampilan mobile dan dokumen seleksi resmi.
                </p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    closeExportModal();
                    openPdf(
                      '/Portofolio_Teknik_Sipil_Reza_Sepdide_Portrait.pdf',
                      'Reza Sepdide - Portofolio Teknik Sipil Portrait (11 Halaman)'
                    );
                  }}
                  className="px-3 py-1.5 border-2 border-[#111111] bg-transparent text-[#111111] hover:bg-[#111111] hover:text-[#F3EEE3] text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Lihat
                </button>
                <a
                  href="/Portofolio_Teknik_Sipil_Reza_Sepdide_Portrait.pdf"
                  download
                  className="px-3.5 py-1.5 bg-[#111111] hover:bg-[#D9541E] border-2 border-[#111111] hover:border-[#D9541E] text-[#F3EEE3] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh</span>
                </a>
              </div>
            </div>

            {/* Option 3: English Edition (Landscape) */}
            <div className="p-4 bg-[#F3EEE3] border-2 border-[#DDD6C7] hover:border-[#111111] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-xs sm:text-sm text-[#111111] uppercase tracking-tight">
                    Portfolio (English Edition)
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#111111] text-[#F3EEE3]">
                    28 PAGES • 38 MB
                  </span>
                </div>
                <p className="text-xs font-sans text-[#525252] mt-1">
                  Full landscape engineering dossier with DED blueprints, BoQ calculations, and project field photos in English.
                </p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    closeExportModal();
                    openPdf(
                      '/Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf',
                      'Reza Sepdide - English Portfolio (28 Pages)'
                    );
                  }}
                  className="px-3 py-1.5 border-2 border-[#111111] bg-transparent text-[#111111] hover:bg-[#111111] hover:text-[#F3EEE3] text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Preview
                </button>
                <a
                  href="/Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf"
                  download
                  className="px-3.5 py-1.5 bg-[#111111] hover:bg-[#D9541E] border-2 border-[#111111] hover:border-[#D9541E] text-[#F3EEE3] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>

            {/* Option 2: Indonesian Edition */}
            <div className="p-4 bg-[#F3EEE3] border-2 border-[#DDD6C7] hover:border-[#111111] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-xs sm:text-sm text-[#111111] uppercase tracking-tight">
                    Portofolio (Edisi Indonesia)
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#111111] text-[#F3EEE3]">
                    28 HALAMAN • 38 MB
                  </span>
                </div>
                <p className="text-xs font-sans text-[#525252] mt-1">
                  Dossier lengkap berbahasa Indonesia memuat gambar kerja DED, RAB/Kurva S, dan dokumentasi teknis lapangan.
                </p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    closeExportModal();
                    openPdf(
                      '/Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf',
                      'Reza Sepdide - Portofolio Indonesia (28 Halaman)'
                    );
                  }}
                  className="px-3 py-1.5 border-2 border-[#111111] bg-transparent text-[#111111] hover:bg-[#111111] hover:text-[#F3EEE3] text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Lihat
                </button>
                <a
                  href="/Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf"
                  download
                  className="px-3.5 py-1.5 bg-[#111111] hover:bg-[#D9541E] border-2 border-[#111111] hover:border-[#D9541E] text-[#F3EEE3] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh</span>
                </a>
              </div>
            </div>
          </div>

          {/* CV Word Downloads & Browser Print */}
          <div className="pt-2 border-t-2 border-[#DDD6C7] space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111]">
              Curriculum Vitae &amp; Web Summary
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="/CV_Reza_Sepdide_English.docx"
                download
                className="p-3 bg-[#F3EEE3] border-2 border-[#DDD6C7] hover:border-[#111111] flex items-center justify-between text-xs text-[#111111] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-[#D9541E]" />
                  <span className="font-mono font-bold uppercase tracking-wider group-hover:text-[#D9541E] transition-colors">CV English (.docx)</span>
                </div>
                <Download className="w-3.5 h-3.5 text-[#525252]" />
              </a>

              <a
                href="/CV_Reza_Sepdide_Profesional.docx"
                download
                className="p-3 bg-[#F3EEE3] border-2 border-[#DDD6C7] hover:border-[#111111] flex items-center justify-between text-xs text-[#111111] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-[#D9541E]" />
                  <span className="font-mono font-bold uppercase tracking-wider group-hover:text-[#D9541E] transition-colors">CV Indonesia (.docx)</span>
                </div>
                <Download className="w-3.5 h-3.5 text-[#525252]" />
              </a>
            </div>

            <button
              type="button"
              onClick={triggerExportPdf}
              className="w-full mt-2 p-3 bg-[#EAE4D7] border-2 border-[#111111] hover:bg-[#111111] hover:text-[#F3EEE3] transition-colors text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print or Save Web Summary as A4 PDF</span>
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#EAE4D7] border-t-2 border-[#DDD6C7] px-6 py-3 flex items-center justify-between">
          <span className="text-xs font-mono text-[#525252]">
            Reza Sepdide • {profileData.email}
          </span>
          <button
            onClick={closeExportModal}
            className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] hover:text-[#D9541E] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
