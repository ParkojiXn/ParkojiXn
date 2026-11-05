'use client';

import React from 'react';
import { ArrowUp, Mail, Phone, ExternalLink } from 'lucide-react';
import { profileData } from '../data/cv-data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 border-b border-slate-800">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <span className="font-display text-2xl font-bold text-white tracking-tight block">
              {profileData.name}
            </span>
            <p className="text-xs font-mono text-slate-400 mt-1">
              CIVIL ENGINEER • QUANTITY SURVEYOR • BIM &amp; CAD MODELER
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={scrollToTop}
              className="border border-slate-700 text-slate-200 hover:text-white hover:border-slate-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 rounded-lg cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Colophon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-slate-400 leading-relaxed font-normal">
          <div>
            <span className="text-white font-semibold font-display text-sm block mb-2">
              Engineering Disciplines
            </span>
            <p>
              Quantity Surveying (BoQ/RAB), Detailed Engineering Design (DED in AutoCAD layout viewports), Autodesk Revit BIM modeling, Bar Bending Schedules (BBS), and S-Curve scheduling.
            </p>
          </div>

          <div>
            <span className="text-white font-semibold font-display text-sm block mb-2">
              Licensing &amp; Qualifications
            </span>
            <p>
              BNSP Certified Level 5 Intermediate Building Construction Supervisor (Kementerian PUPR BJKW I Banda Aceh), JAC Specified Skilled Worker (SSW) Japan Certified, and JLPT N4 / JFT-Basic bilingual.
            </p>
          </div>

          <div>
            <span className="text-white font-semibold font-display text-sm block mb-2">
              Portfolio Credentials
            </span>
            <p>
              &copy; {new Date().getFullYear()} Reza Sepdide. All rights reserved. Graduated with High Honors (GPA 3.72/4.00) from Politeknik Negeri Padang.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
