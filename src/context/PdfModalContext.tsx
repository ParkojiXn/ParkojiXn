'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface PdfModalContextType {
  isOpen: boolean;
  pdfUrl: string;
  pdfTitle: string;
  openPdf: (url: string, title?: string) => void;
  closePdf: () => void;
  isExportOpen: boolean;
  openExportModal: () => void;
  closeExportModal: () => void;
  triggerExportPdf: () => void;
}

const PdfModalContext = createContext<PdfModalContextType | undefined>(undefined);

export const PdfModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [pdfTitle, setPdfTitle] = useState('');
  const [isExportOpen, setIsExportOpen] = useState(false);

  const openPdf = useCallback((url: string, title: string = 'Official Technical Document (PDF)') => {
    setPdfUrl(url);
    setPdfTitle(title);
    setIsOpen(true);
  }, []);

  const closePdf = useCallback(() => {
    setIsOpen(false);
    setPdfUrl('');
    setPdfTitle('');
  }, []);

  const openExportModal = useCallback(() => {
    setIsExportOpen(true);
  }, []);

  const closeExportModal = useCallback(() => {
    setIsExportOpen(false);
  }, []);

  const triggerExportPdf = useCallback(() => {
    setIsExportOpen(false);
    // Small timeout to allow modal animation to unmount before browser takes screenshot for print
    setTimeout(() => {
      window.print();
    }, 200);
  }, []);

  return (
    <PdfModalContext.Provider
      value={{
        isOpen,
        pdfUrl,
        pdfTitle,
        openPdf,
        closePdf,
        isExportOpen,
        openExportModal,
        closeExportModal,
        triggerExportPdf,
      }}
    >
      {children}
    </PdfModalContext.Provider>
  );
};

export const usePdfModal = (): PdfModalContextType => {
  const context = useContext(PdfModalContext);
  if (!context) {
    throw new Error('usePdfModal must be used within a PdfModalProvider');
  }
  return context;
};
