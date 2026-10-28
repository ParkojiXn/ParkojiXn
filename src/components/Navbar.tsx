'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/cv-data';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'proyek', 'pengalaman', 'keahlian', 'edukasi', 'kontak'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'PROFIL', href: '#hero', id: 'hero' },
    { label: 'PROYEK', href: '#proyek', id: 'proyek' },
    { label: 'PENGALAMAN', href: '#pengalaman', id: 'pengalaman' },
    { label: 'KEAHLIAN', href: '#keahlian', id: 'keahlian' },
    { label: 'EDUKASI & SKK', href: '#edukasi', id: 'edukasi' },
    { label: 'KONTAK', href: '#kontak', id: 'kontak' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-[#FAFAFA] transition-all duration-200 border-b-2 ${
        isScrolled ? 'border-[#0A0A0A]' : 'border-[#E5E5E5]'
      }`}
    >
      {/* Top micro-bar for editorial feel */}
      <div className="bg-[#0A0A0A] text-[#FAFAFA] text-[11px] font-mono py-1 px-4 flex justify-between items-center tracking-wider">
        <div className="flex items-center gap-3">
          <span className="text-[#EF4444] font-bold">● LIVE</span>
          <span>CIVIL ENG // QUANTITY SURVEYOR // BIM MODELER</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[#A3A3A3]">
          <span>BNSP JENJANG 5</span>
          <span>•</span>
          <span>SUMATERA BARAT, ID</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Masthead */}
          <a href="#hero" className="flex flex-col group">
            <span className="font-display text-xl sm:text-2xl text-[#0A0A0A] tracking-tighter group-hover:text-[#EF4444] transition-colors">
              {profileData.name}
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#525252] uppercase">
              PORTFOLIO // EDISI 2026
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

          {/* Right Action & Status */}
          <div className="hidden sm:flex items-center space-x-3">
            <div className="status-chip-success">
              <span className="w-2 h-2 bg-[#16A34A] inline-block animate-pulse" />
              <span>SIAP BEKERJA</span>
            </div>

            <a
              href="#kontak"
              className="btn-primary !py-2 !px-4 text-xs"
            >
              <span>HUBUNGI</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors"
              aria-label="Toggle Menu"
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

          <div className="pt-4 flex flex-col gap-2">
            <div className="status-chip-success self-start">
              <span className="w-2 h-2 bg-[#16A34A] inline-block" />
              <span>TERBUKA UNTUK PELUANG KERJA</span>
            </div>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary text-center mt-2"
            >
              HUBUNGI REZA SEPDIDE
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
