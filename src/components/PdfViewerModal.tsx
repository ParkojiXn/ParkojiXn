'use client';

import React, { useEffect } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import { usePdfModal } from '../context/PdfModalContext';

export const PdfViewerModal: React.FC = () => {
  const { isOpen, pdfUrl, pdfTitle, closePdf } = usePdfModal();

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
      className="fixed inset-0 z-[100] bg-[#111111]/85 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={pdfTitle || 'PDF Document Viewer'}
      onClick={closePdf}
    >
      <div
        className="bg-[#F3EEE3] border-4 border-[#111111] w-[96vw] max-w-none h-[95vh] flex flex-col shadow-none relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-[#111111] text-[#F3EEE3] px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#111111]">
          <div className="flex items-center gap-3 min-w-0 pr-2">
            <span className="px-2 py-0.5 bg-[#D9541E] text-[#F3EEE3] text-xs font-mono font-bold flex-shrink-0">
              PDF
            </span>
            <div className="min-w-0">
              <span className="text-[10px] font-mono text-[#D9541E] tracking-widest uppercase block font-bold">
                Official Engineering Document
              </span>
              <h3 className="font-display text-sm sm:text-base text-[#F3EEE3] uppercase tracking-tight truncate">
                {pdfTitle || 'Technical PDF Document'}
              </h3>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Open in new tab */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border-2 border-[#F3EEE3] bg-transparent hover:bg-[#F3EEE3] hover:text-[#111111] text-[#F3EEE3] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              title="Open Document in New Tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#D9541E]" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            {/* Direct download */}
            <a
              href={pdfUrl}
              download
              className="px-3.5 py-1.5 bg-[#D9541E] hover:bg-[#BA4214] border-2 border-[#D9541E] hover:border-[#BA4214] text-[#F3EEE3] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              title="Download Original File"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            {/* Close Button */}
            <button
              onClick={closePdf}
              className="p-1.5 text-[#F3EEE3] hover:text-[#D9541E] transition-colors ml-1 cursor-pointer"
              aria-label="Close Document Viewer"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer Iframe */}
        <div className="flex-1 w-full bg-[#111111] relative overflow-hidden flex flex-col">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            title={pdfTitle || 'PDF Document Viewer'}
            className="w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
};
