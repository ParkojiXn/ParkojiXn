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
              OFFICIAL
            </span>
            <div>
              <span className="text-[10px] font-mono text-[#D9541E] tracking-widest uppercase block font-bold">
                Dokumen Portofolio &amp; CV Resmi
              </span>
              <h3 className="font-display text-sm sm:text-base text-[#F3EEE3] uppercase tracking-tight">
                REZA SEPDIDE — ENGINEERING DOSSIER &amp; CV
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
          <div className="bg-[#FAF7F0] border-2 border-[#DDD6C7] p-5 border-l-4 border-l-[#D9541E]">
            <div className="flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-[#D9541E] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-sm sm:text-base text-[#111111] uppercase tracking-tight">
                  DOKUMEN KUALIFIKASI RESMI TEKNIK SIPIL
                </h4>
                <p className="text-xs font-sans text-[#3E3E3E] mt-1 leading-relaxed">
                  Pilih berkas resmi portofolio teknis (A4 Landscape) atau berkas Curriculum Vitae (.docx) dalam pilihan Bahasa Indonesia atau Bahasa Inggris.
                </p>
              </div>
            </div>
          </div>

          {/* Download Options: 2 PDF Options */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111]">
              1. Portofolio PDF Resmi (2 Opsi Bahasa)
            </h4>

            {/* PDF Option 1: Indonesian Edition */}
            <div className="p-4 bg-[#FAF7F0] border-2 border-[#111111] hover:border-[#D9541E] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-xs sm:text-sm text-[#111111] font-bold uppercase tracking-tight">
                    Portofolio (Bahasa Indonesia)
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#111111] text-[#F3EEE3]">
                    A4 LANDSCAPE • 11 HALAMAN (16.6 MB)
                  </span>
                </div>
                <p className="text-xs font-sans text-[#3E3E3E] mt-1">
                  Edisi resmi A4 Landscape: Tentang Saya, Pendidikan PNP (Logo Resmi, Tugas Praproyek SAP2000 &amp; Tugas Akhir DPRD Pasaman), Lisensi BNSP 5, Pengawasan CV. SIFA, dan Galeri DED.
                </p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    closeExportModal();
                    openPdf(
                      '/Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf',
                      'Reza Sepdide - Portofolio Indonesia (Landscape)'
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

            {/* PDF Option 2: English Edition */}
            <div className="p-4 bg-[#FAF7F0] border-2 border-[#DDD6C7] hover:border-[#111111] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-xs sm:text-sm text-[#111111] font-bold uppercase tracking-tight">
                    Portfolio (English Edition)
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#EAE4D7] text-[#111111]">
                    A4 LANDSCAPE • TECHNICAL DOSSIER
                  </span>
                </div>
                <p className="text-xs font-sans text-[#3E3E3E] mt-1">
                  Comprehensive civil engineering dossier with technical blueprints, BoQ calculations, and field photos in English.
                </p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    closeExportModal();
                    openPdf(
                      '/Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf',
                      'Reza Sepdide - Portfolio English (Landscape)'
                    );
                  }}
                  className="px-3 py-1.5 border-2 border-[#111111] bg-transparent text-[#111111] hover:bg-[#111111] hover:text-[#F3EEE3] text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  View
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
          </div>

          {/* Download Options: 2 CV Options */}
          <div className="pt-2 border-t-2 border-[#DDD6C7] space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111]">
              2. Curriculum Vitae (.docx - 2 Opsi Bahasa)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="/CV_Reza_Sepdide_Profesional.docx"
                download
                className="p-3 bg-[#FAF7F0] border-2 border-[#DDD6C7] hover:border-[#111111] flex items-center justify-between text-xs text-[#111111] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-[#D9541E]" />
                  <span className="font-mono font-bold uppercase tracking-wider group-hover:text-[#D9541E] transition-colors">
                    CV Indonesia (.docx)
                  </span>
                </div>
                <Download className="w-3.5 h-3.5 text-[#3E3E3E]" />
              </a>

              <a
                href="/CV_Reza_Sepdide_English.docx"
                download
                className="p-3 bg-[#FAF7F0] border-2 border-[#DDD6C7] hover:border-[#111111] flex items-center justify-between text-xs text-[#111111] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-[#D9541E]" />
                  <span className="font-mono font-bold uppercase tracking-wider group-hover:text-[#D9541E] transition-colors">
                    CV English (.docx)
                  </span>
                </div>
                <Download className="w-3.5 h-3.5 text-[#3E3E3E]" />
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
          <span className="text-xs font-mono text-[#3E3E3E]">
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
