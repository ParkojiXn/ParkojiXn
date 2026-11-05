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
      className="fixed inset-0 z-[100] bg-slate-900/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={pdfTitle || 'PDF Document Viewer'}
      onClick={closePdf}
    >
      <div
        className="bg-white border border-slate-200 w-full max-w-6xl h-[92vh] flex flex-col shadow-2xl relative rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-slate-900 text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0 pr-2">
            <span className="p-1.5 bg-blue-600 text-white text-xs font-mono font-bold flex-shrink-0 rounded-md">
              PDF
            </span>
            <div className="min-w-0">
              <span className="text-[10px] font-mono text-blue-400 tracking-wider uppercase block font-semibold">
                Official Engineering Document
              </span>
              <h3 className="font-display text-sm sm:text-base font-bold text-white truncate">
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
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium flex items-center gap-1.5 transition-colors rounded-lg"
              title="Open Document in New Tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            {/* Direct download */}
            <a
              href={pdfUrl}
              download
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium flex items-center gap-1.5 transition-colors rounded-lg shadow-xs"
              title="Download Original File"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            {/* Close Button */}
            <button
              onClick={closePdf}
              className="p-1.5 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors ml-1 rounded-full cursor-pointer"
              aria-label="Close Document Viewer"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer Iframe */}
        <div className="flex-1 w-full bg-slate-950 relative overflow-hidden flex flex-col">
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
