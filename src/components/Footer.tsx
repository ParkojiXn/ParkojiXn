'use client';

import React from 'react';
import { ArrowUp, Mail, Phone, ExternalLink } from 'lucide-react';
import { profileData } from '../data/cv-data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#FAFAFA] border-t-2 border-[#DC2626]">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 border-b border-[#262626]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <span className="font-display text-2xl sm:text-3xl tracking-tight block">
              {profileData.name}
            </span>
            <p className="text-sm font-mono text-[#A3A3A3] mt-1">
              CIVIL ENGINEER // QUANTITY SURVEYOR // BIM &amp; CAD MODELER
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToTop}
              className="border border-[#FAFAFA] text-[#FAFAFA] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#DC2626] hover:border-[#DC2626] transition-colors flex items-center gap-2 rounded-xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Colophon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono text-[#A3A3A3]">
          <div>
            <span className="text-[#FAFAFA] font-bold block mb-2">Core Competencies</span>
            <p className="leading-relaxed">
              Quantity Surveying (BoQ/RAB), Detailed Engineering Design (DED in AutoCAD), Autodesk Revit BIM modeling, Bar Bending Schedules (BBS), and S-Curve scheduling.
            </p>
          </div>

          <div>
            <span className="text-[#FAFAFA] font-bold block mb-2">Licensing &amp; Qualifications</span>
            <p className="leading-relaxed">
              BNSP Certified Level 5 Site Supervisor (Kementerian PUPR BJKW I Banda Aceh), JAC Specified Skilled Worker (SSW) Japan Certified, and JLPT N4 / JFT-Basic bilingual.
            </p>
          </div>

          <div>
            <span className="text-[#FAFAFA] font-bold block mb-2">Copyright &amp; Portfolio</span>
            <p className="leading-relaxed">
              &copy; {new Date().getFullYear()} Reza Sepdide. All rights reserved. Built with Next.js, TypeScript &amp; Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
