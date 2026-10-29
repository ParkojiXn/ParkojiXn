'use client';

import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, ShieldCheck } from 'lucide-react';
import { usePdfModal } from '../context/PdfModalContext';

export const PdfViewerModal: React.FC = () => {
  const { isOpen, pdfUrl, pdfTitle, closePdf } = usePdfModal();

  // Handle ESC key & scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePdf();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closePdf]);

  if (!isOpen || !pdfUrl) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#0A0A0A]/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={pdfTitle || 'PDF Document Viewer'}
      onClick={closePdf}
    >
      <div
        className="bg-[#FAFAFA] border-4 border-[#0A0A0A] w-full max-w-6xl h-[92vh] flex flex-col shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-[#0A0A0A] text-[#FAFAFA] px-4 py-3 border-b-2 border-[#0A0A0A] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0 pr-2">
            <span className="p-1.5 bg-[#EF4444] text-[#FAFAFA] text-xs font-mono font-bold flex-shrink-0">
              PDF
            </span>
            <div className="min-w-0">
              <span className="text-[10px] font-mono text-[#EF4444] tracking-widest uppercase block">
                // OFFICIAL TECHNICAL DOSSIER &amp; CERTIFICATIONS
              </span>
              <h3 className="font-display text-sm sm:text-base text-[#FAFAFA] truncate">
                {pdfTitle || 'Technical PDF Document'}
              </h3>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Open in new tab fallback */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-[#262626] hover:bg-[#333333] text-[#FAFAFA] border border-[#525252] text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
              title="Open Document in Full Tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#EF4444]" />
              <span className="hidden sm:inline">FULL TAB</span>
            </a>

            {/* Direct download */}
            <a
              href={pdfUrl}
              download
              className="px-3 py-1.5 bg-[#EF4444] hover:bg-[#DC2626] text-[#FAFAFA] text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
              title="Download Original PDF File"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD FILE</span>
            </a>

            {/* Close Button */}
            <button
              onClick={closePdf}
              className="p-1.5 bg-[#FAFAFA] text-[#0A0A0A] hover:bg-[#EF4444] hover:text-[#FAFAFA] border border-[#0A0A0A] transition-colors ml-1"
              aria-label="Close Document Viewer"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer Iframe */}
        <div className="flex-1 w-full bg-[#262626] relative overflow-hidden flex flex-col">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            className="w-full h-full border-none bg-white flex-1"
            title={pdfTitle || 'PDF Preview'}
          />

          {/* Fallback bar in case embedded iframe requires direct link on restricted devices */}
          <div className="bg-[#171717] text-[#A3A3A3] px-4 py-2 border-t border-[#333333] flex flex-wrap items-center justify-between text-xs font-mono gap-2">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>VERIFIED OFFICIAL RECORD // CIVIL ENGINEERING PORTFOLIO</span>
            </span>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="text-[#737373]">Use native PDF controls to zoom or print</span>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EF4444] underline hover:text-white"
              >
                Direct File Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
