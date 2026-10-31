'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { getProfileUseCase } from '../../../infrastructure/di/container';

export const Footer: React.FC = () => {
  const profile = getProfileUseCase.execute();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#FAFAFA] border-t-4 border-[#EF4444]">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[#262626]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <span className="font-display text-2xl sm:text-3xl tracking-tight block">
              {profile.name}
            </span>
            <p className="text-sm font-mono text-[#A3A3A3] mt-1">
              CIVIL ENGINEER // QUANTITY SURVEYOR // BIM &amp; CAD MODELER
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToTop}
              className="border-2 border-[#FAFAFA] text-[#FAFAFA] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#EF4444] hover:border-[#EF4444] transition-colors flex items-center gap-2"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Editorial Colophon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono text-[#A3A3A3]">
          <div>
            <span className="text-[#FAFAFA] font-bold block mb-2">// DESIGN FOUNDATION</span>
            <p className="leading-relaxed">
              Crafted in strict accordance with the VoiceBox Editorial Design System. Sharp flat architecture, 2px borders, Archivo Black headlines, and Work Sans typography.
            </p>
          </div>

          <div>
            <span className="text-[#FAFAFA] font-bold block mb-2">// LICENSING &amp; ETHICS</span>
            <p className="leading-relaxed">
              Government-certified Level 5 BNSP Building Construction Site Supervisor administered by the Ministry of Public Works (BJKW I Banda Aceh) and accredited under JAC Japan construction standards.
            </p>
          </div>

          <div>
            <span className="text-[#FAFAFA] font-bold block mb-2">// COPYRIGHT &amp; AUTHENTICITY</span>
            <p className="leading-relaxed">
              &copy; {new Date().getFullYear()} Reza Sepdide. All rights reserved. Every project, metric, and certification is authenticated from official curriculum vitae records.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
