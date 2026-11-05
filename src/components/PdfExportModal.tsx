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
      className="fixed inset-0 z-[110] bg-[#0A0A0A]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 print:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Export Portfolio to PDF"
      onClick={closeExportModal}
    >
      <div
        className="bg-[#FAFAFA] border-4 border-[#0A0A0A] w-full max-w-2xl flex flex-col shadow-none relative overflow-hidden max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#0A0A0A] text-[#FAFAFA] px-6 py-4 flex items-center justify-between gap-4 border-b-2 border-[#0A0A0A]">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-[#EF4444] text-[#FAFAFA] text-xs font-mono font-bold">
              PDF
            </span>
            <div>
              <span className="text-[10px] font-mono text-[#EF4444] tracking-widest uppercase block font-bold">
                Dossier Downloads &amp; Export
              </span>
              <h3 className="font-display text-sm sm:text-base text-[#FAFAFA] uppercase tracking-tight">
                REZA SEPDIDE — ENGINEERING PORTFOLIO PACKAGES
              </h3>
            </div>
          </div>

          <button
            onClick={closeExportModal}
            className="p-1.5 text-[#FAFAFA] hover:text-[#EF4444] transition-colors cursor-pointer"
            aria-label="Close Export Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-6 overflow-y-auto">
          {/* Summary Box */}
          <div className="bg-[#F5F5F5] border-2 border-[#E5E5E5] p-5">
            <div className="flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-[#EF4444] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-sm sm:text-base text-[#0A0A0A] uppercase tracking-tight">
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
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0A]">
              Complete 28-Page Landscape Dossiers
            </h4>

            {/* Option 1: English Edition */}
            <div className="p-4 bg-[#FAFAFA] border-2 border-[#E5E5E5] hover:border-[#0A0A0A] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-xs sm:text-sm text-[#0A0A0A] uppercase tracking-tight">
                    Portfolio (English Edition)
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#0A0A0A] text-[#FAFAFA]">
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
                  className="px-3 py-1.5 border-2 border-[#0A0A0A] bg-transparent text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Preview
                </button>
                <a
                  href="/Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf"
                  download
                  className="px-3.5 py-1.5 bg-[#0A0A0A] hover:bg-[#EF4444] border-2 border-[#0A0A0A] hover:border-[#EF4444] text-[#FAFAFA] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>

            {/* Option 2: Indonesian Edition */}
            <div className="p-4 bg-[#FAFAFA] border-2 border-[#E5E5E5] hover:border-[#0A0A0A] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-xs sm:text-sm text-[#0A0A0A] uppercase tracking-tight">
                    Portofolio (Edisi Indonesia)
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#0A0A0A] text-[#FAFAFA]">
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
                  className="px-3 py-1.5 border-2 border-[#0A0A0A] bg-transparent text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Lihat
                </button>
                <a
                  href="/Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf"
                  download
                  className="px-3.5 py-1.5 bg-[#0A0A0A] hover:bg-[#EF4444] border-2 border-[#0A0A0A] hover:border-[#EF4444] text-[#FAFAFA] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh</span>
                </a>
              </div>
            </div>
          </div>

          {/* CV Word Downloads & Browser Print */}
          <div className="pt-2 border-t-2 border-[#E5E5E5] space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0A]">
              Curriculum Vitae &amp; Web Summary
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="/CV_Reza_Sepdide_English.docx"
                download
                className="p-3 bg-[#FAFAFA] border-2 border-[#E5E5E5] hover:border-[#0A0A0A] flex items-center justify-between text-xs text-[#0A0A0A] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-[#EF4444]" />
                  <span className="font-mono font-bold uppercase tracking-wider group-hover:text-[#EF4444] transition-colors">CV English (.docx)</span>
                </div>
                <Download className="w-3.5 h-3.5 text-[#525252]" />
              </a>

              <a
                href="/CV_Reza_Sepdide_Profesional.docx"
                download
                className="p-3 bg-[#FAFAFA] border-2 border-[#E5E5E5] hover:border-[#0A0A0A] flex items-center justify-between text-xs text-[#0A0A0A] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-[#EF4444]" />
                  <span className="font-mono font-bold uppercase tracking-wider group-hover:text-[#EF4444] transition-colors">CV Indonesia (.docx)</span>
                </div>
                <Download className="w-3.5 h-3.5 text-[#525252]" />
              </a>
            </div>

            <button
              type="button"
              onClick={triggerExportPdf}
              className="w-full mt-2 p-3 bg-[#F5F5F5] border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print or Save Web Summary as A4 PDF</span>
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#F5F5F5] border-t-2 border-[#E5E5E5] px-6 py-3 flex items-center justify-between">
          <span className="text-xs font-mono text-[#525252]">
            Reza Sepdide • {profileData.email}
          </span>
          <button
            onClick={closeExportModal}
            className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0A] hover:text-[#EF4444] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
