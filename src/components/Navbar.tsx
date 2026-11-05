'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Download, ChevronDown, FileText, CheckCircle2 } from 'lucide-react';
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
    { label: 'About', href: '#hero', id: 'hero' },
    { label: 'Methodology', href: '#principles', id: 'principles' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Credentials', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-display font-bold text-base group-hover:bg-blue-600 transition-colors shadow-xs">
              RS
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                {profileData.name}
              </span>
              <span className="text-[11px] font-mono text-slate-500 font-medium">
                Civil Engineer • Quantity Surveyor
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-100/70 p-1 rounded-full border border-slate-200/60">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-150 ${
                  activeSection === link.id
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Export PDF Dropdown */}
            <div className="relative" ref={exportDropdownRef}>
              <button
                type="button"
                onClick={() => setExportDropdownOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-300 text-xs font-semibold rounded-lg shadow-2xs transition-colors cursor-pointer"
                aria-expanded={exportDropdownOpen}
                aria-haspopup="true"
              >
                <Download className="w-3.5 h-3.5 text-blue-600" />
                <span>Export Dossier</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-150 ${exportDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {exportDropdownOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 shadow-xl rounded-xl p-2 z-50">
                  <div className="px-3 py-1.5 text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                    Full Portfolio Publications
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
                    className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3 group"
                  >
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-md group-hover:bg-blue-600 group-hover:text-white transition-colors mt-0.5">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors block">
                        Portfolio (English Edition)
                      </span>
                      <span className="text-[11px] text-slate-500 block font-normal">
                        28-Page Landscape Engineering Dossier (38 MB)
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
                    className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3 group"
                  >
                    <div className="p-2 bg-emerald-50 text-emerald-600 rounded-md group-hover:bg-emerald-600 group-hover:text-white transition-colors mt-0.5">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition-colors block">
                        Portofolio (Edisi Indonesia)
                      </span>
                      <span className="text-[11px] text-slate-500 block font-normal">
                        Dossier Lengkap 28 Halaman Landscape (38 MB)
                      </span>
                    </div>
                  </button>

                  <div className="my-1 border-t border-slate-100" />

                  {/* Quick Export Modal */}
                  <button
                    type="button"
                    onClick={() => {
                      setExportDropdownOpen(false);
                      openExportModal();
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-xs font-medium text-slate-700 flex items-center justify-between"
                  >
                    <span>More Download Options (CV Word / Print)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>
              )}
            </div>

            {/* Direct Connect CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => openExportModal()}
              className="p-2 border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
              aria-label="Export Dossier"
            >
              <Download className="w-4 h-4 text-blue-600" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-lg ${
                  activeSection === link.id
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openExportModal();
              }}
              className="w-full btn-secondary text-xs flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-blue-600" />
              <span>Export Dossier / CV</span>
            </button>

            <a
              href="https://wa.me/6289644590915"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-primary text-xs flex items-center justify-center gap-2"
            >
              <span>Connect on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
