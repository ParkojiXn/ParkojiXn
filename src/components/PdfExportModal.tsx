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
      className="fixed inset-0 z-[110] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 print:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Export Portfolio to PDF"
      onClick={closeExportModal}
    >
      <div
        className="bg-white border border-slate-200 w-full max-w-2xl flex flex-col shadow-2xl relative overflow-hidden max-h-[92vh] rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="p-1.5 bg-blue-600 text-white text-xs font-mono font-bold rounded-md">
              PDF
            </span>
            <div>
              <span className="text-[10px] font-mono text-blue-400 tracking-wider uppercase block font-semibold">
                Download &amp; Export
              </span>
              <h3 className="font-display text-base sm:text-lg font-bold text-white">
                REZA SEPDIDE — PORTFOLIO DOSSIERS
              </h3>
            </div>
          </div>

          <button
            onClick={closeExportModal}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-white transition-colors rounded-full"
            aria-label="Close Export Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-6 overflow-y-auto">
          {/* Summary Box */}
          <div className="bg-slate-50 border border-slate-200/80 p-4 sm:p-5 rounded-xl">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-sm sm:text-base font-bold text-slate-900">
                  OFFICIAL ENGINEERING PORTFOLIO PACKAGES
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  High-resolution comprehensive dossiers formatted for contractor pre-qualification, consultant tenders, and formal job applications.
                </p>
              </div>
            </div>
          </div>

          {/* Download Options */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
              Complete 28-Page Landscape Dossiers
            </h4>

            {/* Option 1: English Edition */}
            <div className="p-4 bg-white border border-slate-200 hover:border-blue-500 rounded-xl transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-900">
                    Portfolio (English Edition)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-blue-50 text-blue-700 rounded-md font-semibold">
                    28 Pages • 38 MB
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
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
                  className="px-3 py-1.5 border border-slate-300 hover:bg-slate-50 text-xs font-semibold rounded-lg transition-colors"
                >
                  Preview
                </button>
                <a
                  href="/Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf"
                  download
                  className="px-3 py-1.5 bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>

            {/* Option 2: Indonesian Edition */}
            <div className="p-4 bg-white border border-slate-200 hover:border-emerald-500 rounded-xl transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-900">
                    Portofolio (Edisi Indonesia)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-md font-semibold">
                    28 Halaman • 38 MB
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
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
                  className="px-3 py-1.5 border border-slate-300 hover:bg-slate-50 text-xs font-semibold rounded-lg transition-colors"
                >
                  Lihat
                </button>
                <a
                  href="/Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf"
                  download
                  className="px-3 py-1.5 bg-slate-900 hover:bg-emerald-600 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh</span>
                </a>
              </div>
            </div>
          </div>

          {/* CV Word Downloads & Browser Print */}
          <div className="pt-2 border-t border-slate-100 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
              Curriculum Vitae &amp; Web Summary
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="/CV_Reza_Sepdide_English.docx"
                download
                className="p-3 bg-white border border-slate-200 hover:border-slate-300 rounded-xl flex items-center justify-between text-xs text-slate-800 transition-colors group shadow-2xs"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold group-hover:text-blue-600 transition-colors">CV English (.docx)</span>
                </div>
                <Download className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="/CV_Reza_Sepdide_Profesional.docx"
                download
                className="p-3 bg-white border border-slate-200 hover:border-slate-300 rounded-xl flex items-center justify-between text-xs text-slate-800 transition-colors group shadow-2xs"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold group-hover:text-emerald-600 transition-colors">CV Indonesia (.docx)</span>
                </div>
                <Download className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            <button
              type="button"
              onClick={triggerExportPdf}
              className="w-full mt-2 p-3 bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors text-xs font-semibold flex items-center justify-center gap-2 rounded-xl cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>Print or Save Web Summary as A4 PDF</span>
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-100 px-6 py-3.5 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            Reza Sepdide • {profileData.email}
          </span>
          <button
            onClick={closeExportModal}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
