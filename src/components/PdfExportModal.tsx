'use client';

import React, { useEffect } from 'react';
import { X, Printer, FileText, CheckCircle2, ShieldCheck, Download, ExternalLink } from 'lucide-react';
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
      className="fixed inset-0 z-[110] bg-[#0A0A0A]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 print:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Export Portfolio to PDF"
      onClick={closeExportModal}
    >
      <div
        className="bg-[#FAFAFA] border border-[#0A0A0A] w-full max-w-2xl flex flex-col shadow-2xl relative overflow-hidden max-h-[92vh] rounded-xs"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#0A0A0A] text-[#FAFAFA] px-5 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="p-1.5 bg-[#DC2626] text-[#FAFAFA] text-xs font-mono font-bold rounded-xs">
              PDF
            </span>
            <div>
              <span className="text-[10px] font-mono text-[#DC2626] tracking-wider uppercase block font-bold">
                Download &amp; Export
              </span>
              <h3 className="font-display text-base sm:text-lg text-[#FAFAFA]">
                REZA SEPDIDE — PORTFOLIO DOCUMENTS
              </h3>
            </div>
          </div>

          <button
            onClick={closeExportModal}
            className="p-1.5 bg-[#262626] hover:bg-[#DC2626] text-[#FAFAFA] transition-colors rounded-xs"
            aria-label="Close Export Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-6 overflow-y-auto">
          {/* Summary Box */}
          <div className="bg-[#FFFFFF] border border-[#E5E5E5] p-4 sm:p-5 rounded-xs">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-sm sm:text-base text-[#0A0A0A]">
                  OFFICIAL ENGINEERING PORTFOLIO PACKAGES
                </h4>
                <p className="text-xs text-[#525252] font-body mt-1 leading-relaxed">
                  High-resolution comprehensive dossiers formatted for contractor pre-qualification, consultant tenders, and employment applications.
                </p>
              </div>
            </div>
          </div>

          {/* Download Options */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0A]">
              Full 28-Page Landscape Portfolios
            </h4>

            {/* Option 1: English Edition */}
            <div className="p-4 bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#0A0A0A] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xs">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold font-mono text-[#0A0A0A]">
                    Portfolio (English Edition)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-[#F3F4F6] text-[#404040] rounded-xs font-semibold">
                    28 Pages • 38 MB
                  </span>
                </div>
                <p className="text-xs text-[#525252] font-body mt-1">
                  Full landscape engineering dossier with DED blueprints, BoQ calculations, and project photos in English.
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
                  className="px-3 py-1.5 border border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] text-xs font-mono font-bold transition-colors rounded-xs"
                >
                  Preview
                </button>
                <a
                  href="/Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf"
                  download
                  className="px-3 py-1.5 bg-[#0A0A0A] hover:bg-[#DC2626] text-[#FAFAFA] text-xs font-mono font-bold flex items-center gap-1.5 transition-colors rounded-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>

            {/* Option 2: Indonesian Edition */}
            <div className="p-4 bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#0A0A0A] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xs">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold font-mono text-[#0A0A0A]">
                    Portofolio (Edisi Indonesia)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-[#F3F4F6] text-[#404040] rounded-xs font-semibold">
                    28 Halaman • 38 MB
                  </span>
                </div>
                <p className="text-xs text-[#525252] font-body mt-1">
                  Dossier lengkap berbahasa Indonesia memuat gambar kerja DED, RAB/Kurva S, dan dokumentasi lapangan.
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
                  className="px-3 py-1.5 border border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] text-xs font-mono font-bold transition-colors rounded-xs"
                >
                  Lihat
                </button>
                <a
                  href="/Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf"
                  download
                  className="px-3 py-1.5 bg-[#0A0A0A] hover:bg-[#DC2626] text-[#FAFAFA] text-xs font-mono font-bold flex items-center gap-1.5 transition-colors rounded-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh</span>
                </a>
              </div>
            </div>
          </div>

          {/* CV Word Downloads & Browser Print */}
          <div className="pt-2 border-t border-[#E5E5E5] space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0A]">
              Curriculum Vitae &amp; Web Summary
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="/CV_Reza_Sepdide_English.docx"
                download
                className="p-3 bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#0A0A0A] flex items-center justify-between text-xs font-mono text-[#0A0A0A] transition-colors rounded-xs group"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#DC2626]" />
                  <span className="font-bold group-hover:text-[#DC2626] transition-colors">CV English (.docx)</span>
                </div>
                <Download className="w-3.5 h-3.5 text-[#737373]" />
              </a>

              <a
                href="/CV_Reza_Sepdide_Profesional.docx"
                download
                className="p-3 bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#0A0A0A] flex items-center justify-between text-xs font-mono text-[#0A0A0A] transition-colors rounded-xs group"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#DC2626]" />
                  <span className="font-bold group-hover:text-[#DC2626] transition-colors">CV Indonesia (.docx)</span>
                </div>
                <Download className="w-3.5 h-3.5 text-[#737373]" />
              </a>
            </div>

            <button
              type="button"
              onClick={triggerExportPdf}
              className="w-full mt-2 p-3 bg-[#F3F4F6] hover:bg-[#0A0A0A] text-[#0A0A0A] hover:text-[#FAFAFA] border border-[#D4D4D4] hover:border-[#0A0A0A] transition-colors text-xs font-mono font-bold flex items-center justify-center gap-2 rounded-xs cursor-pointer"
            >
              <Printer className="w-4 h-4 text-[#DC2626]" />
              <span>Print or Save Web Summary as A4 PDF</span>
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#FFFFFF] border-t border-[#E5E5E5] px-6 py-3 flex items-center justify-between">
          <span className="text-[11px] font-mono text-[#737373]">
            Reza Sepdide • {profileData.email}
          </span>
          <button
            onClick={closeExportModal}
            className="text-xs font-mono font-bold text-[#525252] hover:text-[#0A0A0A] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
