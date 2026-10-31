'use client';

import React, { useEffect } from 'react';
import { X, Printer, FileText, CheckCircle2, ShieldCheck, Download, Sparkles, AlertCircle, ExternalLink } from 'lucide-react';
import { usePdfModal } from '../../../context/PdfModalContext';
import {
  getProfileUseCase,
  getCertificationsUseCase,
  getProjectsUseCase,
  getExperiencesUseCase,
} from '../../../../infrastructure/di/container';

export const PdfExportModal: React.FC = () => {
  const { isExportOpen, closeExportModal, triggerExportPdf, openPdf } = usePdfModal();
  const profileData = getProfileUseCase.execute();
  const certifications = getCertificationsUseCase.execute();
  const featuredProjects = getProjectsUseCase.execute();
  const workExperiences = getExperiencesUseCase.execute();

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
              <span className="text-[10px] font-mono text-[#EF4444] tracking-widest uppercase block font-bold">
                // OFFICIAL ENGINEERING DOSSIER EXPORT
              </span>
              <h3 className="font-display text-base sm:text-lg text-[#FAFAFA]">
                EXPORT REZA SEPDIDE PORTFOLIO
              </h3>
            </div>
          </div>

          <button
            onClick={closeExportModal}
            className="p-1.5 bg-[#262626] hover:bg-[#EF4444] text-[#FAFAFA] transition-colors border border-[#404040]"
            aria-label="Close Export Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-6 overflow-y-auto">
          {/* Executive Summary of the Export */}
          <div className="bg-[#FFFFFF] border-2 border-[#0A0A0A] p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-sm sm:text-base text-[#0A0A0A]">
                  AUDIT-READY ENGINEERING DOSSIER
                </h4>
                <p className="text-xs text-[#525252] font-body mt-1 leading-relaxed">
                  Formatted specifically for contractor pre-qualification, ministry technical audits, consultant tenders, and formal job applications.
                </p>
              </div>
            </div>

            {/* Included Content Checklist */}
            <div className="mt-4 pt-3 border-t border-[#E5E5E5] grid grid-cols-2 gap-2 text-xs font-mono text-[#0A0A0A]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>Executive Letterhead &amp; Bio</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>{featuredProjects.length} Verified Case Studies</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>{workExperiences.length} Jobsite Milestones</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>{certifications.length} State Licenses &amp; SKK</span>
              </div>
            </div>
          </div>

          {/* Export Options Grid */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono text-[#0A0A0A] font-bold uppercase tracking-wider block">
              CHOOSE EXPORT FORMAT / METHOD:
            </span>

            {/* Option 1: Native Print to PDF */}
            <div className="border-2 border-[#0A0A0A] bg-[#FFFFFF] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#EF4444] transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#EF4444] text-[#FAFAFA] text-[10px] font-mono font-bold">
                    RECOMMENDED
                  </span>
                  <h5 className="font-display text-sm text-[#0A0A0A]">
                    PRINT-OPTIMIZED EDITORIAL PDF
                  </h5>
                </div>
                <p className="text-xs text-[#525252] font-body">
                  Generates an executive dossier complete with custom letterhead, all milestones expanded, and interactive links.
                </p>
              </div>

              <button
                type="button"
                onClick={triggerExportPdf}
                className="w-full sm:w-auto px-4 py-2.5 bg-[#0A0A0A] text-[#FAFAFA] hover:bg-[#EF4444] text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors flex-shrink-0 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>PRINT / SAVE PDF</span>
              </button>
            </div>

            {/* Option 2: Pre-compiled Master Dossier PDF */}
            <div className="border-2 border-[#0A0A0A] bg-[#FFFFFF] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#EF4444] transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#0A0A0A] text-[#FAFAFA] text-[10px] font-mono font-bold">
                    PRE-COMPILED
                  </span>
                  <h5 className="font-display text-sm text-[#0A0A0A]">
                    LANDSCAPE MASTER DOSSIER (28 PAGES)
                  </h5>
                </div>
                <p className="text-xs text-[#525252] font-body">
                  High-resolution publication featuring authentic AutoCAD paper space layouts, S-Curves, BoQ/RAB, and BNSP Level 5 licenses.
                </p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto flex-shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    closeExportModal();
                    openPdf('/Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf', 'Portofolio Teknik Sipil Reza Sepdide (28 Halaman Landscape)');
                  }}
                  className="flex-1 sm:flex-none px-3 py-2.5 bg-[#F5F5F5] hover:bg-[#0A0A0A] text-[#0A0A0A] hover:text-[#FAFAFA] border border-[#0A0A0A] text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  title="Preview in PDF Modal"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>PREVIEW</span>
                </button>

                <a
                  href="/Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf"
                  download="Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf"
                  className="flex-1 sm:flex-none px-4 py-2.5 bg-[#EF4444] text-[#FAFAFA] hover:bg-[#DC2626] text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors"
                  title="Download 28-Page Landscape PDF"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD</span>
                </a>
              </div>
            </div>

            {/* Option 3: Official DOCX CVs */}
            <div className="border border-[#D4D4D4] bg-[#F5F5F5] p-3.5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-[#525252]">
                Need editable Curriculum Vitae (.docx)?
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="/CV_Reza_Sepdide_English.docx"
                  download
                  className="px-2.5 py-1 bg-[#FFFFFF] border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] font-bold transition-colors inline-flex items-center gap-1"
                >
                  <Download className="w-3 h-3 text-[#EF4444]" />
                  <span>ENGLISH (.DOCX)</span>
                </a>
                <a
                  href="/CV_Reza_Sepdide_Profesional.docx"
                  download
                  className="px-2.5 py-1 bg-[#FFFFFF] border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] font-bold transition-colors inline-flex items-center gap-1"
                >
                  <Download className="w-3 h-3 text-[#EF4444]" />
                  <span>INDONESIAN (.DOCX)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Print Tip */}
          <div className="bg-[#FEF2F2] border border-[#EF4444] p-3.5 flex items-start gap-2.5 text-xs font-mono text-[#7F1D1D]">
            <AlertCircle className="w-4 h-4 text-[#EF4444] flex-shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>PRINT TIP:</strong> In your browser print dialog, select <strong>&quot;Save as PDF&quot;</strong>, set margins to <strong>&quot;Minimum&quot;</strong> or <strong>&quot;None&quot;</strong>, and ensure <strong>&quot;Background Graphics&quot;</strong> is checked for maximum visual accuracy.
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAFAFA] border-t-2 border-[#0A0A0A] px-6 py-4 flex items-center justify-between text-xs font-mono">
          <span className="text-[#737373]">
            {profileData.name} // OFFICIAL ENGINEERING DOSSIER
          </span>
          <button
            type="button"
            onClick={closeExportModal}
            className="px-4 py-2 border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] font-bold transition-colors cursor-pointer"
          >
            DISMISS
          </button>
        </div>
      </div>
    </div>
  );
};
