'use client';

import React from 'react';
import { HardHat, FileSpreadsheet, ShieldCheck, GraduationCap } from 'lucide-react';
import { profileData } from '../data/cv-data';

export const CorePrinciples: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <HardHat className="w-5 h-5 text-[#DC2626]" />;
      case 1:
        return <FileSpreadsheet className="w-5 h-5 text-[#DC2626]" />;
      case 2:
        return <ShieldCheck className="w-5 h-5 text-[#DC2626]" />;
      default:
        return <GraduationCap className="w-5 h-5 text-[#DC2626]" />;
    }
  };

  const getPillarTag = (index: number) => {
    switch (index) {
      case 0:
        return 'CONSTRUCTABILITY';
      case 1:
        return 'COST CONTROL';
      case 2:
        return 'AUDIT INTEGRITY';
      default:
        return 'GLOBAL STANDARDS';
    }
  };

  const getBenchmarkBadge = (index: number) => {
    switch (index) {
      case 0:
        return 'Field Constructability Verified';
      case 1:
        return 'Zero Unaccounted Variance';
      case 2:
        return 'PUPR & SNI Standard Compliant';
      default:
        return 'SSW Japan & D4 Competency';
    }
  };

  return (
    <section id="principles" className="py-14 sm:py-16 border-b border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#0A0A0A] pb-5 gap-4">
          <div>
            <span className="text-overline text-[#DC2626] font-bold block mb-1">
              Methodology &amp; Standards
            </span>
            <h2 className="text-headline text-[#0A0A0A]">
              ENGINEERING APPROACH &amp; WORK ETHIC
            </h2>
          </div>

          <p className="text-sm text-[#525252] max-w-lg font-body leading-relaxed">
            Sound civil engineering balances mathematical precision with practical field feasibility. Every project is approached through four disciplined principles.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {profileData.coreValues?.map((pillar, idx) => (
            <div
              key={idx}
              className="card-editorial bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#0A0A0A] p-6 sm:p-7 flex flex-col justify-between group transition-all duration-150 shadow-xs rounded-xs"
            >
              <div>
                {/* Pillar Header */}
                <div className="flex items-center justify-between border-b border-[#F0F0F0] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#0A0A0A] text-[#FAFAFA] text-[10px] font-mono font-bold tracking-wider rounded-xs">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#525252] uppercase tracking-wider">
                      {getPillarTag(idx)}
                    </span>
                  </div>
                  <div className="p-2 bg-[#FAFAFA] border border-[#E5E5E5] group-hover:border-[#0A0A0A] transition-colors rounded-xs">
                    {getIcon(idx)}
                  </div>
                </div>

                {/* Pillar Title & Subtitle */}
                <h3 className="font-display text-lg sm:text-xl text-[#0A0A0A] mb-1 group-hover:text-[#DC2626] transition-colors leading-snug">
                  {pillar.title}
                </h3>
                <span className="text-xs font-mono text-[#DC2626] font-bold block mb-3">
                  {pillar.subtitle}
                </span>

                {/* Pillar Description */}
                <p className="text-sm text-[#525252] font-body leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Pillar Footer */}
              <div className="mt-6 pt-3 border-t border-[#F0F0F0] flex items-center justify-between text-[11px] font-mono text-[#737373]">
                <span>BENCHMARK</span>
                <span className="text-[#0A0A0A] font-semibold">{getBenchmarkBadge(idx)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
