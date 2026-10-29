'use client';

import React from 'react';
import { HardHat, FileSpreadsheet, ShieldCheck, GraduationCap } from 'lucide-react';
import { profileData } from '../data/cv-data';

export const CorePrinciples: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <HardHat className="w-5 h-5 text-[#EF4444]" />;
      case 1:
        return <FileSpreadsheet className="w-5 h-5 text-[#EF4444]" />;
      case 2:
        return <ShieldCheck className="w-5 h-5 text-[#EF4444]" />;
      default:
        return <GraduationCap className="w-5 h-5 text-[#EF4444]" />;
    }
  };

  const getPillarTag = (index: number) => {
    switch (index) {
      case 0:
        return 'CONSTRUCTABILITY';
      case 1:
        return 'COST GOVERNANCE';
      case 2:
        return 'AUDIT INTEGRITY';
      default:
        return 'GLOBAL STANDARDS';
    }
  };

  return (
    <section id="principles" className="py-14 sm:py-16 border-b-2 border-[#0A0A0A] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#0A0A0A] pb-5 gap-4">
          <div>
            <span className="text-overline text-[#EF4444] font-bold block mb-1">
              // ENGINEERING METHODOLOGY &amp; WORK ETHIC
            </span>
            <h2 className="text-headline text-[#0A0A0A] tracking-tight">
              HOW I WORK &amp; PERSONAL ETHIC
            </h2>
          </div>

          <p className="text-sm text-[#525252] max-w-lg font-body leading-relaxed">
            Civil engineering is an uncompromising obligation toward human safety, capital efficiency, and structural durability. Every project is executed under four foundational principles.
          </p>
        </div>

        {/* 4 Pillars Grid (Symmetrical 2-Column / 4-Card Proportional Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {profileData.coreValues?.map((pillar, idx) => (
            <div
              key={idx}
              className="card-editorial bg-[#FFFFFF] border-2 border-[#E5E5E5] hover:border-[#0A0A0A] p-6 sm:p-7 flex flex-col justify-between group transition-all duration-150 shadow-sm"
            >
              <div>
                {/* Pillar Header */}
                <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#0A0A0A] text-[#FAFAFA] text-[10px] font-mono font-bold tracking-wider">
                      0{idx + 1} //
                    </span>
                    <span className="text-xs font-mono font-bold text-[#525252] uppercase tracking-wider">
                      {getPillarTag(idx)}
                    </span>
                  </div>
                  <div className="p-2 bg-[#FAFAFA] border border-[#D4D4D4] group-hover:border-[#0A0A0A] transition-colors">
                    {getIcon(idx)}
                  </div>
                </div>

                {/* Pillar Title & Subtitle */}
                <h3 className="font-display text-lg sm:text-xl text-[#0A0A0A] mb-1 group-hover:text-[#EF4444] transition-colors leading-snug">
                  {pillar.title}
                </h3>
                <span className="text-xs font-mono text-[#EF4444] font-bold block mb-3">
                  {pillar.subtitle}
                </span>

                {/* Pillar Description */}
                <p className="text-sm text-[#404040] font-body leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Pillar Footer */}
              <div className="mt-6 pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] font-mono text-[#737373]">
                <span className="font-semibold">ENGINEERING BENCHMARK</span>
                <span className="text-[#0A0A0A] font-bold">NON-NEGOTIABLE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
