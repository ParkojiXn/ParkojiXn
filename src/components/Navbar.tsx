'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Download, ChevronDown, FileText } from 'lucide-react';
import { profileData } from '../data/cv-data';
import { usePdfModal } from '../context/PdfModalContext';
import { useActiveSection } from '../hooks/useActiveSection';

export const Navbar: React.FC = () => {
  const { activeSection, isScrolled } = useActiveSection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exportDropdownOpen, setExportDropdownOpen] = useState(false);
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);

  const exportDropdownRef = useRef<HTMLDivElement>(null);
  const cvDropdownRef = useRef<HTMLDivElement>(null);

  const { openPdf, openExportModal } = usePdfModal();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (exportDropdownRef.current && !exportDropdownRef.current.contains(target)) {
        setExportDropdownOpen(false);
      }
      if (cvDropdownRef.current && !cvDropdownRef.current.contains(target)) {
        setCvDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExportDropdownOpen(false);
        setCvDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { label: 'OVERVIEW', href: '#overview', id: 'overview' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'CREDENTIALS', href: '#education', id: 'education' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-[#F3EEE3] transition-all duration-200 border-b-2 ${
        isScrolled ? 'border-[#111111]' : 'border-[#DDD6C7]'
      }`}
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Masthead */}
          <a href="#overview" className="flex flex-col group">
            <span className="font-display text-xl sm:text-2xl text-[#111111] tracking-tight group-hover:text-[#D9541E] transition-colors">
              {profileData.name}
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#3E3E3E] uppercase hidden sm:block">
              // CIVIL ENGINEER &bull; BNSP 5 PELAKSANA GEDUNG MADYA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-mono font-bold tracking-wider uppercase transition-colors relative ${
                    isActive
                      ? 'text-[#111111]'
                      : 'text-[#3E3E3E] hover:text-[#111111] hover:bg-[#EAE4D7]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-[#D9541E]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Export Portfolio, Download CV & Connect */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* Export PDF Dropdown (Only 2 options: Bahasa Indonesia & English) */}
            <div className="relative" ref={exportDropdownRef}>
              <button
                type="button"
                onClick={() => {
                  setExportDropdownOpen((prev) => !prev);
                  setCvDropdownOpen(false);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#FAF7F0] hover:bg-[#111111] text-[#111111] hover:text-[#F3EEE3] border-2 border-[#111111] text-xs font-mono font-bold tracking-wider transition-colors cursor-pointer rounded-none"
                aria-expanded={exportDropdownOpen}
                aria-haspopup="true"
                title="Pilih Format Portofolio PDF"
              >
                <Download className="w-3.5 h-3.5 text-[#D9541E]" />
                <span>EXPORT PDF</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-150 ${
                    exportDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* PDF Dropdown Menu */}
              {exportDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-[#FAF7F0] border-2 border-[#111111] py-1.5 z-50 rounded-none shadow-none">
                  <div className="px-3.5 py-1 border-b border-[#DDD6C7] text-[10px] font-mono text-[#737373] uppercase tracking-wider font-bold">
                    Portofolio PDF (2 Opsi)
                  </div>

                  {/* 1. Indonesian */}
                  <button
                    type="button"
                    onClick={() => {
                      setExportDropdownOpen(false);
                      openPdf(
                        '/Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf',
                        'Reza Sepdide - Portofolio Indonesia (Landscape)'
                      );
                    }}
                    className="w-full text-left px-3.5 py-2 hover:bg-[#EAE4D7] transition-colors flex items-center gap-2.5 group border-b border-[#DDD6C7]"
                  >
                    <FileText className="w-4 h-4 text-[#D9541E] flex-shrink-0" />
                    <div>
                      <span className="text-xs font-bold font-mono text-[#111111] group-hover:text-[#D9541E] transition-colors block">
                        Portofolio (Indonesia)
                      </span>
                      <span className="text-[10px] text-[#3E3E3E] block font-body">
                        A4 Landscape &bull; Edisi Resmi 2026
                      </span>
                    </div>
                  </button>

                  {/* 2. English */}
                  <button
                    type="button"
                    onClick={() => {
                      setExportDropdownOpen(false);
                      openPdf(
                        '/Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf',
                        'Reza Sepdide - Portfolio English (Landscape)'
                      );
                    }}
                    className="w-full text-left px-3.5 py-2 hover:bg-[#EAE4D7] transition-colors flex items-center gap-2.5 group"
                  >
                    <FileText className="w-4 h-4 text-[#D9541E] flex-shrink-0" />
                    <div>
                      <span className="text-xs font-bold font-mono text-[#111111] group-hover:text-[#D9541E] transition-colors block">
                        Portfolio (English)
                      </span>
                      <span className="text-[10px] text-[#3E3E3E] block font-body">
                        A4 Landscape &bull; Technical Dossier
                      </span>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Download CV Dropdown (Replaces CONNECT button - strictly 2 options: ID & EN) */}
            <div className="relative" ref={cvDropdownRef}>
              <button
                type="button"
                onClick={() => {
                  setCvDropdownOpen((prev) => !prev);
                  setExportDropdownOpen(false);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#111111] hover:bg-[#D9541E] text-[#F3EEE3] border-2 border-[#111111] hover:border-[#D9541E] text-xs font-mono font-bold tracking-wider transition-colors cursor-pointer rounded-none"
                aria-expanded={cvDropdownOpen}
                aria-haspopup="true"
                title="Unduh CV Resmi (.docx)"
              >
                <FileText className="w-3.5 h-3.5 text-[#D9541E]" />
                <span>DOWNLOAD CV</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-150 ${
                    cvDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* CV Dropdown Menu */}
              {cvDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-[#FAF7F0] border-2 border-[#111111] py-1.5 z-50 rounded-none shadow-none">
                  <div className="px-3.5 py-1 border-b border-[#DDD6C7] text-[10px] font-mono text-[#737373] uppercase tracking-wider font-bold">
                    Curriculum Vitae (2 Opsi)
                  </div>

                  {/* 1. Indonesian */}
                  <a
                    href="/CV_Reza_Sepdide_Profesional.docx"
                    download
                    onClick={() => setCvDropdownOpen(false)}
                    className="w-full text-left px-3.5 py-2 hover:bg-[#EAE4D7] transition-colors flex items-center gap-2.5 group border-b border-[#DDD6C7]"
                  >
                    <Download className="w-4 h-4 text-[#D9541E] flex-shrink-0" />
                    <div>
                      <span className="text-xs font-bold font-mono text-[#111111] group-hover:text-[#D9541E] transition-colors block">
                        CV (Bahasa Indonesia)
                      </span>
                      <span className="text-[10px] text-[#3E3E3E] block font-body">
                        Format Resmi Pelaksana Lapangan (.docx)
                      </span>
                    </div>
                  </a>

                  {/* 2. English */}
                  <a
                    href="/CV_Reza_Sepdide_English.docx"
                    download
                    onClick={() => setCvDropdownOpen(false)}
                    className="w-full text-left px-3.5 py-2 hover:bg-[#EAE4D7] transition-colors flex items-center gap-2.5 group"
                  >
                    <Download className="w-4 h-4 text-[#D9541E] flex-shrink-0" />
                    <div>
                      <span className="text-xs font-bold font-mono text-[#111111] group-hover:text-[#D9541E] transition-colors block">
                        CV (English Edition)
                      </span>
                      <span className="text-[10px] text-[#3E3E3E] block font-body">
                        Standard International Format (.docx)
                      </span>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => openExportModal()}
              className="p-2 border-2 border-[#111111] bg-[#FAF7F0] text-[#111111]"
              aria-label="Export PDF & CV"
            >
              <Download className="w-4 h-4 text-[#D9541E]" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 border-2 border-[#111111] bg-[#FAF7F0] text-[#111111]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-[#111111] bg-[#F3EEE3] px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-bold uppercase font-body tracking-wider ${
                  activeSection === link.id
                    ? 'bg-[#111111] text-[#F3EEE3]'
                    : 'text-[#111111] hover:bg-[#EAE4D7]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile 2 PDF & 2 CV Options */}
          <div className="pt-3 border-t-2 border-[#DDD6C7] space-y-3">
            <div>
              <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider font-bold block mb-1.5">
                Portofolio PDF (2 Opsi)
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openPdf(
                      '/Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf',
                      'Reza Sepdide - Portofolio Indonesia (Landscape)'
                    );
                  }}
                  className="p-2.5 bg-[#FAF7F0] border-2 border-[#111111] text-left text-xs font-mono font-bold text-[#111111] flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#D9541E] flex-shrink-0" />
                  <span>INDONESIA</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openPdf(
                      '/Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf',
                      'Reza Sepdide - Portfolio English (Landscape)'
                    );
                  }}
                  className="p-2.5 bg-[#FAF7F0] border-2 border-[#111111] text-left text-xs font-mono font-bold text-[#111111] flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#D9541E] flex-shrink-0" />
                  <span>ENGLISH</span>
                </button>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider font-bold block mb-1.5">
                Curriculum Vitae (.docx - 2 Opsi)
              </span>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="/CV_Reza_Sepdide_Profesional.docx"
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 bg-[#FAF7F0] border-2 border-[#DDD6C7] hover:border-[#111111] text-left text-xs font-mono font-bold text-[#111111] flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#D9541E] flex-shrink-0" />
                  <span>CV INDO</span>
                </a>
                <a
                  href="/CV_Reza_Sepdide_English.docx"
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 bg-[#FAF7F0] border-2 border-[#DDD6C7] hover:border-[#111111] text-left text-xs font-mono font-bold text-[#111111] flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#D9541E] flex-shrink-0" />
                  <span>CV ENG</span>
                </a>
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-primary text-xs py-2.5 flex items-center justify-center gap-2 mt-2"
            >
              <span>CONNECT / GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
