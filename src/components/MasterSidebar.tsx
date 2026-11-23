'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  FileText, 
  Download, 
  ChevronDown, 
  ExternalLink, 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { profileData } from '../data/cv-data';
import { usePdfModal } from '../context/PdfModalContext';
import { useActiveSection } from '../hooks/useActiveSection';

const SECTION_IDS = ['overview', 'projects', 'experience', 'education', 'skills', 'contact'];

export const MasterSidebar: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { activeSection, setActiveSection } = useActiveSection(SECTION_IDS, 180);
  const { openPdf, openExportModal } = usePdfModal();

  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);
  const [pdfDropdownOpen, setPdfDropdownOpen] = useState(false);

  const cvDropdownRef = useRef<HTMLDivElement>(null);
  const pdfDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (cvDropdownRef.current && !cvDropdownRef.current.contains(target)) {
        setCvDropdownOpen(false);
      }
      if (pdfDropdownRef.current && !pdfDropdownRef.current.contains(target)) {
        setPdfDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setCvDropdownOpen(false);
        setPdfDropdownOpen(false);
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
    { num: '01', label: 'OVERVIEW & ETHIC', id: 'overview' },
    { num: '02', label: 'ENGINEERING PROJECTS', id: 'projects' },
    { num: '03', label: 'WORK EXPERIENCE', id: 'experience' },
    { num: '04', label: 'CREDENTIALS & LICENSES', id: 'education' },
    { num: '05', label: 'SKILLS & CAPABILITIES', id: 'skills' },
    { num: '06', label: 'CONTACT & INQUIRIES', id: 'contact' },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      className={`bg-[#FAF7F0] border-2 border-[#111111] p-5 sm:p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_#111111] ${className}`}
    >
      <div className="space-y-6">
        {/* Top Header: Institution & Availability Status */}
        <div className="border-b-2 border-[#111111] pb-4">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2.5">
              {/* PNP Official Logo */}
              <div className="w-9 h-9 bg-white border border-[#111111] p-1 flex items-center justify-center shrink-0">
                <img
                  src="/portfolio/profile/pnp-logo.png"
                  alt="Politeknik Negeri Padang"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="leading-tight">
                <span className="text-[10px] font-mono font-bold text-[#111111] block tracking-wider uppercase">
                  POLITEKNIK NEGERI PADANG
                </span>
                <span className="text-[9px] font-mono text-[#525252] block">
                  D3 TEKNIK SIPIL // KELAS D4 MANAJEMEN REKAYASA
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between bg-[#EAE4D7] border border-[#DDD6C7] px-2.5 py-1 text-[10px] font-mono font-bold">
            <span className="flex items-center gap-1.5 text-[#2D5A27]">
              <span className="w-2 h-2 bg-[#16A34A] rounded-full inline-block animate-pulse" />
              STATUS: OPEN FOR ROLES
            </span>
            <span className="text-[#525252]">UTC+7 (PADANG)</span>
          </div>
        </div>

        {/* Profile Card & Technical Crosshair Frame */}
        <div className="relative border-2 border-[#111111] bg-[#F3EEE3] p-4">
          {/* Subtle CAD Crosshair Corner Markers */}
          <span className="absolute -top-1.5 -left-1.5 text-xs font-mono font-bold text-[#D9541E] leading-none select-none">+</span>
          <span className="absolute -top-1.5 -right-1.5 text-xs font-mono font-bold text-[#D9541E] leading-none select-none">+</span>
          <span className="absolute -bottom-1.5 -left-1.5 text-xs font-mono font-bold text-[#D9541E] leading-none select-none">+</span>
          <span className="absolute -bottom-1.5 -right-1.5 text-xs font-mono font-bold text-[#D9541E] leading-none select-none">+</span>

          <div className="flex items-center gap-4">
            {/* Photo */}
            <div className="relative w-20 h-24 sm:w-22 sm:h-26 shrink-0 border-2 border-[#111111] overflow-hidden bg-[#111111]">
              <img
                src="/portfolio/profile/professional-photo.jpeg"
                alt="Reza Sepdide"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 bg-[#111111]/80 text-[#F3EEE3] text-[8px] font-mono text-center py-0.5 uppercase tracking-widest">
                VERIFIED
              </div>
            </div>

            {/* Name & Title Block */}
            <div className="min-w-0">
              <span className="text-[10px] font-mono font-bold text-[#D9541E] uppercase tracking-wider block">
                CIVIL ENGINEER &bull; PLANNER
              </span>
              <h1 className="font-display text-xl sm:text-2xl text-[#111111] tracking-tight leading-tight uppercase">
                {profileData.name}
              </h1>
              <p className="text-xs font-mono text-[#525252] mt-1 leading-snug line-clamp-2">
                Quantity Surveyor &bull; BIM / CAD Modeler &bull; QA/QC
              </p>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#737373] mt-2">
                <MapPin className="w-3 h-3 text-[#D9541E]" />
                <span>Padang, West Sumatra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Telemetry Badge Grid */}
        <div className="grid grid-cols-2 gap-2 text-left">
          <div className="border border-[#111111] bg-[#FAF7F0] p-2.5">
            <span className="text-[9px] font-mono text-[#737373] block uppercase">State License</span>
            <span className="text-xs font-mono font-bold text-[#111111] block mt-0.5">BNSP LEVEL 5</span>
            <span className="text-[9px] font-mono text-[#D9541E] block">Pelaksana Gedung Madya</span>
          </div>

          <div className="border border-[#111111] bg-[#FAF7F0] p-2.5">
            <span className="text-[9px] font-mono text-[#737373] block uppercase">Graduation GPA</span>
            <span className="text-xs font-mono font-bold text-[#111111] block mt-0.5">3.72 / 4.00</span>
            <span className="text-[9px] font-mono text-[#D9541E] block">Cum Laude (PNP)</span>
          </div>

          <div className="border border-[#111111] bg-[#FAF7F0] p-2.5">
            <span className="text-[9px] font-mono text-[#737373] block uppercase">Japan Standard</span>
            <span className="text-xs font-mono font-bold text-[#111111] block mt-0.5">SSW JAC JAPAN</span>
            <span className="text-[9px] font-mono text-[#D9541E] block">Tokutei Ginou (JLPT N4)</span>
          </div>

          <div className="border border-[#111111] bg-[#FAF7F0] p-2.5">
            <span className="text-[9px] font-mono text-[#737373] block uppercase">English Proficiency</span>
            <span className="text-xs font-mono font-bold text-[#111111] block mt-0.5">TOEIC 640</span>
            <span className="text-[9px] font-mono text-[#D9541E] block">PNP Language Center</span>
          </div>
        </div>

        {/* Live Scrollspy Engineering Index */}
        <div className="border-t-2 border-b-2 border-[#111111] py-4">
          <span className="text-[10px] font-mono font-bold text-[#D9541E] uppercase tracking-widest block mb-2">
            // LIVE SCROLLSPY INDEX
          </span>
          <nav className="space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(link.id, e)}
                  className={`flex items-center justify-between px-3 py-2 text-xs font-mono transition-all border ${
                    isActive
                      ? 'bg-[#111111] text-[#F3EEE3] border-[#111111] font-bold shadow-none'
                      : 'border-transparent text-[#3E3E3E] hover:bg-[#EAE4D7] hover:text-[#111111]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={isActive ? 'text-[#D9541E]' : 'text-[#737373]'}>
                      {link.num}
                    </span>
                    <span>{link.label}</span>
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 bg-[#D9541E] shrink-0" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Action Station: Download CV & View PDF Dropdowns */}
        <div className="space-y-2.5 pt-1">
          <span className="text-[10px] font-mono font-bold text-[#737373] uppercase tracking-wider block">
            DOCUMENTATION &amp; EXPORT
          </span>

          <div className="grid grid-cols-2 gap-2">
            {/* View / Export PDF Dropdown */}
            <div className="relative" ref={pdfDropdownRef}>
              <button
                type="button"
                onClick={() => {
                  setPdfDropdownOpen(!pdfDropdownOpen);
                  setCvDropdownOpen(false);
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 bg-[#111111] text-[#F3EEE3] hover:bg-[#D9541E] transition-colors text-xs font-mono font-bold border border-[#111111]"
              >
                <span className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>PDF A4</span>
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${pdfDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {pdfDropdownOpen && (
                <div className="absolute left-0 right-0 bottom-full mb-1 bg-[#FAF7F0] border-2 border-[#111111] shadow-[3px_3px_0px_0px_#111111] z-50 py-1">
                  <button
                    type="button"
                    onClick={() => {
                      setPdfDropdownOpen(false);
                      openPdf('/Portofolio_Teknik_Sipil_Reza_Sepdide_Landscape.pdf', 'Portofolio Teknik Sipil - Reza Sepdide (Indonesia)');
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-mono text-[#111111] hover:bg-[#111111] hover:text-[#F3EEE3] flex items-center justify-between"
                  >
                    <span>ID Lanskap (30 Hal)</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPdfDropdownOpen(false);
                      openPdf('/Portofolio_Civil_Engineering_Reza_Sepdide_Landscape.pdf', 'Civil Engineering Portfolio - Reza Sepdide (English)');
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-mono text-[#111111] hover:bg-[#111111] hover:text-[#F3EEE3] flex items-center justify-between border-t border-[#DDD6C7]"
                  >
                    <span>EN Landscape (30 Pgs)</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPdfDropdownOpen(false);
                      openExportModal();
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-mono text-[#D9541E] font-bold hover:bg-[#111111] hover:text-[#F3EEE3] flex items-center justify-between border-t border-[#DDD6C7]"
                  >
                    <span>Export Center</span>
                    <Download className="w-3 h-3 ml-1" />
                  </button>
                </div>
              )}
            </div>

            {/* Download CV .docx Dropdown */}
            <div className="relative" ref={cvDropdownRef}>
              <button
                type="button"
                onClick={() => {
                  setCvDropdownOpen(!cvDropdownOpen);
                  setPdfDropdownOpen(false);
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 bg-[#FAF7F0] text-[#111111] hover:bg-[#EAE4D7] transition-colors text-xs font-mono font-bold border-2 border-[#111111]"
              >
                <span className="flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5 text-[#D9541E]" />
                  <span>CV (.DOCX)</span>
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${cvDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {cvDropdownOpen && (
                <div className="absolute left-0 right-0 bottom-full mb-1 bg-[#FAF7F0] border-2 border-[#111111] shadow-[3px_3px_0px_0px_#111111] z-50 py-1">
                  <a
                    href="/CV_Reza_Sepdide_Profesional.docx"
                    download
                    onClick={() => setCvDropdownOpen(false)}
                    className="w-full text-left px-3 py-2 text-xs font-mono text-[#111111] hover:bg-[#111111] hover:text-[#F3EEE3] flex items-center justify-between"
                  >
                    <span>CV Bahasa Indonesia</span>
                    <Download className="w-3 h-3 ml-1" />
                  </a>
                  <a
                    href="/CV_Reza_Sepdide_English.docx"
                    download
                    onClick={() => setCvDropdownOpen(false)}
                    className="w-full text-left px-3 py-2 text-xs font-mono text-[#111111] hover:bg-[#111111] hover:text-[#F3EEE3] flex items-center justify-between border-t border-[#DDD6C7]"
                  >
                    <span>CV English Version</span>
                    <Download className="w-3 h-3 ml-1" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Contact Icons */}
        <div className="flex items-center justify-between pt-1 border-t border-[#DDD6C7]">
          <span className="text-[10px] font-mono text-[#737373] uppercase font-bold">Direct Channels:</span>
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/6289644590915"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Reza Sepdide"
              className="p-1.5 bg-[#EAE4D7] border border-[#111111] hover:bg-[#111111] hover:text-[#F3EEE3] transition-colors text-[#111111]"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:rezasepdide@gmail.com"
              aria-label="Email Reza Sepdide"
              className="p-1.5 bg-[#EAE4D7] border border-[#111111] hover:bg-[#111111] hover:text-[#F3EEE3] transition-colors text-[#111111]"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Reza Sepdide"
              className="p-1.5 bg-[#EAE4D7] border border-[#111111] hover:bg-[#111111] hover:text-[#F3EEE3] transition-colors text-[#111111]"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Technical HUD Footer */}
      <div className="border-t-2 border-[#111111] pt-3 mt-6 text-[9px] font-mono text-[#737373] flex items-center justify-between">
        <span>UCS: WCS // GRID: 40mm</span>
        <span className="text-[#111111] font-bold">AUTOCAD &bull; REVIT &bull; SAP2000</span>
      </div>
    </aside>
  );
};
