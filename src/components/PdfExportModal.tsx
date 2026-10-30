'use client';

import React, { useEffect } from 'react';
import { X, Printer, FileText, CheckCircle2, ShieldCheck, Download, Sparkles, AlertCircle, ExternalLink } from 'lucide-react';
import { usePdfModal } from '../context/PdfModalContext';
import { profileData, certifications, featuredProjects, workExperiences } from '../data/cv-data';

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
      className="fixed inset-0 z-[110] bg-[#0A0A0A]/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 print:hidden animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Export Portfolio to PDF"
      onClick={closeExportModal}
    >
      <div
        className="bg-[#FAFAFA] border-4 border-[#0A0A0A] w-full max-w-2xl flex flex-col shadow-2xl relative overflow-hidden max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#0A0A0A] text-[#FAFAFA] px-5 py-4 border-b-2 border-[#0A0A0A] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="p-1.5 bg-[#EF4444] text-[#FAFAFA] text-xs font-mono font-bold">
              PDF
            </span>
            <div>
              <span className="text-[10px] font-mono text-[#EF4444] tracking-widest uppercase block">
                // EXECUTIVE COMPILATION ENGINE
              </span>
              <h3 className="font-display text-base sm:text-lg text-[#FAFAFA]">
                EXPORT COMPLETE PORTFOLIO TO PDF
              </h3>
            </div>
          </div>

          <button
            onClick={closeExportModal}
            className="p-1.5 border border-[#525252] text-[#A3A3A3] hover:text-[#FAFAFA] hover:border-[#FAFAFA] transition-colors"
            aria-label="Close export modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          {/* Direct Masterpiece PDF Downloads (English & Bahasa) */}
          <div className="bg-[#FFFFFF] border-2 border-[#0A0A0A] p-4 sm:p-5 shadow-sm space-y-3">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#EF4444] flex-shrink-0 mt-0.5" />
              <div className="space-y-1 w-full">
                <h4 className="font-display text-sm sm:text-base text-[#0A0A0A]">
                  MASTER ENGINEERING DOSSIER // 28 PAGES LANDSCAPE A4
                </h4>
                <p className="text-xs text-[#525252] font-body leading-relaxed mb-3">
                  Publication-grade civil engineering dossier compiled with LaTeX. Includes complete AutoCAD multi-viewport DED sheets, BoQ/RAB cost estimations, S-Curve scheduling, BBS, and certified licenses.
                </p>

                {/* 2 Language Download Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {/* Option 1: Bahasa Indonesia */}
                  <div className="border-2 border-[#0A0A0A] bg-[#F8FAFC] p-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="px-1.5 py-0.5 bg-[#EF4444] text-white text-[9px] font-mono font-bold">ID</span>
                        <span className="text-[10px] font-mono text-[#737373]">28 Halaman</span>
                      </div>
                      <h5 className="font-display text-xs text-[#0A0A0A] font-bold">
                        Bahasa Indonesia
                      </h5>
                      <p className="text-[10px] font-mono text-[#525252] mt-0.5 mb-3">
                        Edisi resmi Bahasa Indonesia (Landscape A4)
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          closeExportModal();
                          openPdf('/Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf', 'Portofolio Teknik Sipil Reza Sepdide (Bahasa Indonesia)');
                        }}
                        className="flex-1 py-1.5 px-2 bg-[#0A0A0A] text-white hover:bg-[#EF4444] text-[10px] font-mono font-bold flex items-center justify-center gap-1 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>PREVIEW</span>
                      </button>
                      <a
                        href="/Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf"
                        download="Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf"
                        className="py-1.5 px-2.5 border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white text-[10px] font-mono font-bold transition-colors"
                        title="Download Bahasa Indonesia PDF"
                      >
                        <Download className="w-3 h-3 text-[#EF4444]" />
                      </a>
                    </div>
                  </div>

                  {/* Option 2: English Version */}
                  <div className="border-2 border-[#0A0A0A] bg-[#F8FAFC] p-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="px-1.5 py-0.5 bg-[#0F172A] text-white text-[9px] font-mono font-bold">EN</span>
                        <span className="text-[10px] font-mono text-[#737373]">28 Pages</span>
                      </div>
                      <h5 className="font-display text-xs text-[#0A0A0A] font-bold">
                        English Edition
                      </h5>
                      <p className="text-[10px] font-mono text-[#525252] mt-0.5 mb-3">
                        International English Publication (Landscape A4)
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          closeExportModal();
                          openPdf('/Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf', 'Civil Engineering Portfolio - Reza Sepdide (English)');
                        }}
                        className="flex-1 py-1.5 px-2 bg-[#0A0A0A] text-white hover:bg-[#EF4444] text-[10px] font-mono font-bold flex items-center justify-center gap-1 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>PREVIEW</span>
                      </button>
                      <a
                        href="/Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf"
                        download="Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf"
                        className="py-1.5 px-2.5 border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white text-[10px] font-mono font-bold transition-colors"
                        title="Download English Edition PDF"
                      >
                        <Download className="w-3 h-3 text-[#EF4444]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dossier Checklist Summary */}
          <div className="border border-[#E5E5E5] bg-[#F5F5F5] p-4 sm:p-5 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#0A0A0A] block border-b border-[#E5E5E5] pb-2">
              SECTIONS PREPARED FOR PDF EXPORT:
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono text-[#0A0A0A]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                <span>Executive Bio &amp; Official Headshot</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                <span>4 Core Engineering Ethics</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                <span>{featuredProjects.length} Detailed Projects (DED, BoQ, BIM)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                <span>{workExperiences.length} Industrial Experience Records</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                <span>Full Skills Matrix (All 4 Domains)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                <span>{certifications.length} State &amp; Global Licenses</span>
              </li>
            </ul>
          </div>

          {/* Print Configuration Guide / Best Results */}
          <div className="border-l-4 border-[#EF4444] bg-[#FFFFFF] p-4 text-xs font-mono space-y-2 border border-y-[#E5E5E5] border-r-[#E5E5E5]">
            <div className="flex items-center gap-2 text-[#EF4444] font-bold">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>OR PRINT THIS WEBPAGE DIRECTLY:</span>
            </div>
            <ol className="list-decimal list-inside text-[#525252] space-y-1 pl-1">
              <li>Destination: Select <strong className="text-[#0A0A0A]">&quot;Save as PDF&quot;</strong></li>
              <li>Under &quot;More Settings&quot;: <strong>Check &quot;Background graphics&quot;</strong></li>
              <li>Paper size: <strong>A4</strong> | Margins: <strong>Default</strong></li>
            </ol>
          </div>
        </div>

        {/* Modal Footer Action Buttons */}
        <div className="bg-[#FAFAFA] border-t-2 border-[#0A0A0A] px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={closeExportModal}
            className="w-full sm:w-auto px-5 py-2.5 border-2 border-[#D4D4D4] hover:border-[#0A0A0A] text-xs font-mono font-bold uppercase transition-colors"
          >
            CANCEL
          </button>

          <button
            type="button"
            onClick={triggerExportPdf}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#0A0A0A] text-[#FAFAFA] hover:bg-[#EF4444] text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4 text-[#EF4444] group-hover:text-white" />
            <span>PRINT / SAVE WEBPAGE (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
