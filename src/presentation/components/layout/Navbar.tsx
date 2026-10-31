'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Download, ChevronDown, ExternalLink } from 'lucide-react';
import { getProfileUseCase } from '../../../infrastructure/di/container';
import { usePdfModal } from '../../context/PdfModalContext';
import { useActiveSection } from '../../hooks/useActiveSection';

export const Navbar: React.FC = () => {
  const profile = getProfileUseCase.execute();
  const { activeSection, isScrolled } = useActiveSection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exportDropdownOpen, setExportDropdownOpen] = useState(false);
  const exportDropdownRef = useRef<HTMLDivElement>(null);

  const { openPdf } = usePdfModal();

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (exportDropdownRef.current && !exportDropdownRef.current.contains(event.target as Node)) {
        setExportDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExportDropdownOpen(false);
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
    { label: 'ABOUT', href: '#hero', id: 'hero' },
    { label: 'ETHIC', href: '#principles', id: 'principles' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'EDUCATION', href: '#education', id: 'education' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-[#FAFAFA] transition-all duration-200 border-b-2 ${
        isScrolled ? 'border-[#0A0A0A]' : 'border-[#E5E5E5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Masthead */}
          <a href="#hero" className="flex flex-col group">
            <span className="font-display text-xl sm:text-2xl text-[#0A0A0A] tracking-tight group-hover:text-[#EF4444] transition-colors">
              {profile.name}
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#404040] uppercase font-semibold">
              ENGINEERING PORTFOLIO // 2026 EDITION
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-2 text-xs font-bold tracking-wider transition-colors relative uppercase font-body ${
                  activeSection === link.id
                    ? 'text-[#0A0A0A]'
                    : 'text-[#404040] hover:text-[#0A0A0A]'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-[#EF4444]" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action: Export PDF Button & Contact */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Export PDF Dropdown Button */}
            <div className="relative" ref={exportDropdownRef}>
              <button
                type="button"
                onClick={() => setExportDropdownOpen((prev) => !prev)}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#FFFFFF] hover:bg-[#0A0A0A] text-[#0A0A0A] hover:text-[#FAFAFA] border-2 border-[#0A0A0A] text-xs font-mono font-bold tracking-wider transition-colors cursor-pointer shadow-sm"
                aria-expanded={exportDropdownOpen}
                aria-haspopup="true"
              >
                <Download className="w-3.5 h-3.5 text-[#EF4444]" />
                <span>EXPORT PDF</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${exportDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {exportDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-[#FFFFFF] border-2 border-[#0A0A0A] shadow-2xl z-50 p-2 font-mono text-xs animate-fadeIn">
                  <div className="px-2 py-1.5 border-b border-[#E5E5E5] mb-1.5">
                    <span className="text-[10px] text-[#EF4444] font-bold tracking-widest uppercase block">
                      // MASTER DOSSIER (28 PAGES)
                    </span>
                    <span className="text-xs font-bold text-[#0A0A0A]">
                      SELECT PORTFOLIO LANGUAGE:
                    </span>
                  </div>

                  {/* Option 1: Bahasa Indonesia */}
                  <div className="p-2 hover:bg-[#F5F5F5] border border-transparent hover:border-[#E5E5E5] transition-colors mb-1.5">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5">
                        <span className="px-1.5 py-0.5 bg-[#EF4444] text-[#FAFAFA] text-[9px] font-bold">ID</span>
                        <span className="font-bold text-[#0A0A0A] text-xs">Bahasa Indonesia</span>
                      </div>
                      <span className="text-[10px] text-[#737373]">28 Halaman</span>
                    </div>
                    <p className="text-[10px] text-[#525252] leading-tight mb-2">
                      Edisi resmi Bahasa Indonesia (Landscape A4, DED, Kurva S, BoQ &amp; SKK BNSP).
                    </p>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          openPdf('/Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf', 'Portofolio Teknik Sipil Reza Sepdide (Bahasa Indonesia)');
                          setExportDropdownOpen(false);
                        }}
                        className="flex-1 px-2 py-1 bg-[#0A0A0A] text-[#FAFAFA] hover:bg-[#EF4444] text-[10px] font-bold flex items-center justify-center gap-1 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>PREVIEW</span>
                      </button>
                      <a
                        href="/Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf"
                        download="Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf"
                        onClick={() => setExportDropdownOpen(false)}
                        className="flex-1 px-2 py-1 border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] text-[10px] font-bold flex items-center justify-center gap-1 transition-colors"
                      >
                        <Download className="w-3 h-3 text-[#EF4444]" />
                        <span>DOWNLOAD</span>
                      </a>
                    </div>
                  </div>

                  {/* Option 2: English Version */}
                  <div className="p-2 hover:bg-[#F5F5F5] border border-transparent hover:border-[#E5E5E5] transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5">
                        <span className="px-1.5 py-0.5 bg-[#0F172A] text-[#FAFAFA] text-[9px] font-bold">EN</span>
                        <span className="font-bold text-[#0A0A0A] text-xs">English Edition</span>
                      </div>
                      <span className="text-[10px] text-[#737373]">28 Pages</span>
                    </div>
                    <p className="text-[10px] text-[#525252] leading-tight mb-2">
                      International English publication (Landscape A4, DED, S-Curve, BoQ &amp; Credentials).
                    </p>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          openPdf('/Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf', 'Civil Engineering Portfolio - Reza Sepdide (English)');
                          setExportDropdownOpen(false);
                        }}
                        className="flex-1 px-2 py-1 bg-[#0A0A0A] text-[#FAFAFA] hover:bg-[#EF4444] text-[10px] font-bold flex items-center justify-center gap-1 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>PREVIEW</span>
                      </button>
                      <a
                        href="/Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf"
                        download="Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf"
                        onClick={() => setExportDropdownOpen(false)}
                        className="flex-1 px-2 py-1 border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] text-[10px] font-bold flex items-center justify-center gap-1 transition-colors"
                      >
                        <Download className="w-3 h-3 text-[#EF4444]" />
                        <span>DOWNLOAD</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="btn-primary !py-2 !px-4 text-xs"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-[#0A0A0A] bg-[#FAFAFA] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm font-bold tracking-wider border-b border-[#E5E5E5] uppercase font-body ${
                activeSection === link.id
                  ? 'text-[#EF4444] bg-[#F5F5F5] font-extrabold'
                  : 'text-[#0A0A0A] hover:bg-[#F5F5F5]'
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="pt-4 flex flex-col gap-2.5 border-t border-[#E5E5E5]">
            <span className="text-[10px] font-mono font-bold text-[#737373] uppercase tracking-wider">
              EXPORT MASTER PORTFOLIO (PDF):
            </span>

            {/* Mobile Option 1: Bahasa Indonesia */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openPdf('/Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf', 'Portofolio Teknik Sipil Reza Sepdide (Bahasa Indonesia)');
                }}
                className="flex-1 py-2 px-2.5 bg-[#0A0A0A] text-[#FAFAFA] text-xs font-mono font-bold flex items-center justify-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#EF4444]" />
                <span>PORTO (BAHASA)</span>
              </button>
              <a
                href="/Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf"
                download="Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf"
                className="py-2 px-3 border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] text-xs font-mono font-bold"
                title="Download Bahasa Indonesia PDF"
              >
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Option 2: English Version */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openPdf('/Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf', 'Civil Engineering Portfolio - Reza Sepdide (English)');
                }}
                className="flex-1 py-2 px-2.5 bg-[#0A0A0A] text-[#FAFAFA] text-xs font-mono font-bold flex items-center justify-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#EF4444]" />
                <span>PORTO (ENGLISH)</span>
              </button>
              <a
                href="/Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf"
                download="Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf"
                className="py-2 px-3 border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] text-xs font-mono font-bold"
                title="Download English PDF"
              >
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary text-center mt-2 flex items-center justify-center gap-1.5"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
