'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profileData } from '../data/cv-data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#FAFAFA] border-t-4 border-[#EF4444]">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b-2 border-[#262626]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <span className="font-display text-2xl sm:text-3xl text-[#FAFAFA] uppercase tracking-tight block">
              {profileData.name}
            </span>
            <p className="text-xs font-mono font-bold text-[#EF4444] uppercase tracking-wider mt-1.5">
              CIVIL ENGINEER • QUANTITY SURVEYOR • BIM &amp; CAD MODELER
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={scrollToTop}
              className="border-2 border-[#FAFAFA] text-[#FAFAFA] hover:bg-[#EF4444] hover:border-[#EF4444] px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-[#FAFAFA]" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Colophon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-sans text-[#A3A3A3] leading-relaxed">
          <div>
            <span className="text-[#FAFAFA] font-display text-sm uppercase tracking-tight block mb-2.5">
              Engineering Disciplines
            </span>
            <p>
              Quantity Surveying (BoQ/RAB), Detailed Engineering Design (DED in standardized AutoCAD viewports), Autodesk Revit BIM modeling, Bar Bending Schedules (BBS), and CPM/S-Curve construction scheduling.
            </p>
          </div>

          <div>
            <span className="text-[#FAFAFA] font-display text-sm uppercase tracking-tight block mb-2.5">
              Licensing &amp; Qualifications
            </span>
            <p>
              BNSP Certified Level 5 Intermediate Building Construction Supervisor (Kementerian PUPR BJKW I Banda Aceh), JAC Specified Skilled Worker (SSW) Japan Certified, and JLPT N4 / JFT-Basic bilingual Japanese.
            </p>
          </div>

          <div>
            <span className="text-[#FAFAFA] font-display text-sm uppercase tracking-tight block mb-2.5">
              Portfolio Integrity
            </span>
            <p className="font-mono text-[11px] text-[#A3A3A3]">
              &copy; {new Date().getFullYear()} Reza Sepdide. Authenticated civil engineering credentials, drawings, and verified state certificates.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
