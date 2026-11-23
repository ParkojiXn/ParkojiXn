'use client';

import React from 'react';
import { profileData } from '../data/cv-data';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-[#F3EEE3] border-t-4 border-[#D9541E]">
      {/* Top Banner */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 py-12 border-b-2 border-[#262626]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <span className="font-display text-2xl sm:text-3xl text-[#F3EEE3] uppercase tracking-tight block">
              {profileData.name}
            </span>
            <p className="text-xs font-mono font-bold text-[#D9541E] uppercase tracking-wider mt-1.5">
              CIVIL ENGINEER • QUANTITY SURVEYOR • BIM &amp; CAD MODELER
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#171717] border border-[#333333] text-xs font-mono text-[#DDD6C7] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
              BNSP Reg. F7472118 • KKNI Jenjang 5
            </span>
          </div>
        </div>
      </div>

      {/* Footer Colophon */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-sans text-[#DDD6C7] leading-relaxed">
          <div>
            <span className="text-[#F3EEE3] font-display text-sm uppercase tracking-tight block mb-2.5">
              Engineering Disciplines
            </span>
            <p>
              Quantity Surveying (BoQ/RAB), Detailed Engineering Design (DED in standardized AutoCAD viewports), Autodesk Revit BIM modeling, Bar Bending Schedules (BBS), and CPM/S-Curve construction scheduling.
            </p>
          </div>

          <div>
            <span className="text-[#F3EEE3] font-display text-sm uppercase tracking-tight block mb-2.5">
              Licensing &amp; Qualifications
            </span>
            <p>
              BNSP Level 5 Certified: Pelaksana Lapangan Pekerjaan Gedung Madya / Implementing Intermediate Building Works (Reg. F7472118), JAC Specified Skilled Worker (SSW Civil Engineering i), JLPT N4 / JFT-Basic 250, and TOEIC® Prediction 640.
            </p>
          </div>

          <div>
            <span className="text-[#F3EEE3] font-display text-sm uppercase tracking-tight block mb-2.5">
              Portfolio Integrity
            </span>
            <p className="font-mono text-[11px] text-[#C8C0B0]">
              &copy; {new Date().getFullYear()} Reza Sepdide. Authenticated civil engineering credentials, drawings, and verified state certificates.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
