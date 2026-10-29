'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface PdfModalContextType {
  isOpen: boolean;
  pdfUrl: string;
  pdfTitle: string;
  openPdf: (url: string, title?: string) => void;
  closePdf: () => void;
}

const PdfModalContext = createContext<PdfModalContextType | undefined>(undefined);

export const PdfModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [pdfTitle, setPdfTitle] = useState('');

  const openPdf = useCallback((url: string, title: string = 'Dokumen Teknis (PDF)') => {
    setPdfUrl(url);
    setPdfTitle(title);
    setIsOpen(true);
  }, []);

  const closePdf = useCallback(() => {
    setIsOpen(false);
    setPdfUrl('');
    setPdfTitle('');
  }, []);

  return (
    <PdfModalContext.Provider value={{ isOpen, pdfUrl, pdfTitle, openPdf, closePdf }}>
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
