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
  const exportDropdownRef = useRef<HTMLDivElement>(null);

  const { openPdf, openExportModal } = usePdfModal();

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
    { label: 'CREDENTIALS', href: '#education', id: 'education' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
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
              {profileData.name}
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#525252] uppercase font-semibold">
              CIVIL ENGINEER // QUANTITY SURVEYOR
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
                    : 'text-[#525252] hover:text-[#0A0A0A]'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-[#EF4444]" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action: Export Portfolio & Contact */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Export PDF Dropdown */}
            <div className="relative" ref={exportDropdownRef}>
              <button
                type="button"
                onClick={() => setExportDropdownOpen((prev) => !prev)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#FFFFFF] hover:bg-[#0A0A0A] text-[#0A0A0A] hover:text-[#FAFAFA] border-2 border-[#0A0A0A] text-xs font-mono font-bold tracking-wider transition-colors cursor-pointer rounded-none"
                aria-expanded={exportDropdownOpen}
                aria-haspopup="true"
              >
                <Download className="w-3.5 h-3.5 text-[#EF4444]" />
                <span>EXPORT PDF</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${exportDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {exportDropdownOpen && (
                <div className="absolute right-0 mt-2 w-76 bg-[#FFFFFF] border-2 border-[#0A0A0A] shadow-none py-2 z-50 rounded-none">
                  <div className="px-3.5 py-1.5 border-b border-[#E5E5E5] text-[10px] font-mono text-[#525252] uppercase tracking-wider font-bold">
                    Official Publications
                  </div>

                  {/* English Dossier */}
                  <button
                    type="button"
                    onClick={() => {
                      setExportDropdownOpen(false);
                      openPdf(
                        '/Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf',
                        'Reza Sepdide - English Dossier (28 Pages)'
                      );
                    }}
                    className="w-full text-left px-3.5 py-2.5 hover:bg-[#F5F5F5] transition-colors flex items-start gap-2.5 group"
                  >
                    <FileText className="w-4 h-4 text-[#EF4444] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-bold font-mono text-[#0A0A0A] group-hover:text-[#EF4444] transition-colors block">
                        Portfolio (English Edition)
                      </span>
                      <span className="text-[11px] text-[#525252] block mt-0.5 font-body">
                        28-Page Landscape Dossier (38 MB)
                      </span>
                    </div>
                  </button>

                  {/* Indonesian Dossier */}
                  <button
                    type="button"
                    onClick={() => {
                      setExportDropdownOpen(false);
                      openPdf(
                        '/Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf',
                        'Reza Sepdide - Portofolio Indonesia (28 Halaman)'
                      );
                    }}
                    className="w-full text-left px-3.5 py-2.5 hover:bg-[#F5F5F5] transition-colors flex items-start gap-2.5 group"
                  >
                    <FileText className="w-4 h-4 text-[#EF4444] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-bold font-mono text-[#0A0A0A] group-hover:text-[#EF4444] transition-colors block">
                        Portofolio (Edisi Indonesia)
                      </span>
                      <span className="text-[11px] text-[#525252] block mt-0.5 font-body">
                        Dossier Lengkap 28 Halaman (38 MB)
                      </span>
                    </div>
                  </button>

                  <div className="my-1 border-t border-[#E5E5E5]" />

                  {/* Quick Export Modal */}
                  <button
                    type="button"
                    onClick={() => {
                      setExportDropdownOpen(false);
                      openExportModal();
                    }}
                    className="w-full text-left px-3.5 py-2 hover:bg-[#F5F5F5] text-xs font-mono font-bold text-[#0A0A0A] flex items-center justify-between"
                  >
                    <span>More Options (CV Word / Print)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#525252]" />
                  </button>
                </div>
              )}
            </div>

            {/* Direct Connect CTA */}
            <a
              href="#contact"
              className="btn-primary text-xs py-2 px-4"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => openExportModal()}
              className="p-2 border-2 border-[#0A0A0A] bg-[#FFFFFF] text-[#0A0A0A]"
              aria-label="Export PDF"
            >
              <Download className="w-4 h-4 text-[#EF4444]" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 border-2 border-[#0A0A0A] bg-[#FFFFFF] text-[#0A0A0A]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-[#0A0A0A] bg-[#FAFAFA] px-4 pt-4 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-bold uppercase font-body tracking-wider ${
                  activeSection === link.id
                    ? 'bg-[#0A0A0A] text-[#FAFAFA]'
                    : 'text-[#0A0A0A] hover:bg-[#F5F5F5]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t-2 border-[#E5E5E5] space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openExportModal();
              }}
              className="w-full btn-secondary text-xs flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#EF4444]" />
              <span>EXPORT DOSSIER / CV</span>
            </button>

            <a
              href="https://wa.me/6289644590915"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-primary text-xs flex items-center justify-center gap-2"
            >
              <span>CHAT ON WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
