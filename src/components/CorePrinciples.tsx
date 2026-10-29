'use client';

import React from 'react';
import { HardHat, FileSpreadsheet, ShieldCheck, GraduationCap, ArrowRight } from 'lucide-react';
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
    <section id="principles" className="py-16 sm:py-20 border-b-2 border-[#0A0A0A] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#0A0A0A] pb-6 mb-10 gap-6">
          <div>
            <span className="text-overline text-[#EF4444] font-bold block mb-1">
              // ENGINEERING METHODOLOGY &amp; WORK ETHIC
            </span>
            <h2 className="text-headline text-[#0A0A0A]">
              HOW I WORK &amp; PERSONAL ETHIC
            </h2>
          </div>

          <p className="text-sm text-[#525252] max-w-lg font-body leading-relaxed">
            Civil engineering is far more than numbers on a calculation spreadsheet; it is an uncompromising obligation toward human safety, capital efficiency, and long-term structural durability.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {profileData.coreValues?.map((pillar, idx) => (
            <div
              key={idx}
              className="card-editorial hover:border-[#0A0A0A] p-6 sm:p-7 flex flex-col justify-between group transition-all duration-150"
            >
              <div>
                {/* Pillar Header */}
                <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 bg-[#0A0A0A] text-[#FAFAFA] text-[10px] font-mono font-bold">
                      0{idx + 1}
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
                <h3 className="font-display text-lg sm:text-xl text-[#0A0A0A] mb-1 group-hover:text-[#EF4444] transition-colors">
                  {pillar.title}
                </h3>
                <span className="text-xs font-mono text-[#EF4444] font-bold block mb-3">
                  {pillar.subtitle}
                </span>

                {/* Pillar Description */}
                <p className="text-sm text-[#525252] font-body leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Pillar Footer */}
              <div className="mt-6 pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] font-mono text-[#737373]">
                <span>CORE BENCHMARK</span>
                <span className="text-[#0A0A0A] font-bold">NON-NEGOTIABLE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Human Touch Callout Banner */}
        <div className="mt-10 bg-[#0A0A0A] text-[#FAFAFA] p-6 sm:p-8 border-2 border-[#0A0A0A] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono text-[#EF4444] uppercase tracking-widest font-bold">
              // BEHIND THE BLUEPRINTS
            </span>
            <h3 className="font-display text-xl sm:text-2xl text-[#FAFAFA]">
              JOBSITE INTEGRITY &amp; CROSS-CULTURAL COLLABORATION
            </h3>
            <p className="text-sm text-[#A3A3A3] font-body leading-relaxed">
              Beyond BIM Revit modeling and mathematical BoQ audits, I prioritize transparent, direct communication with foremen, specialty subcontractors, and project owners. Certified fluency in Japanese (JLPT N4 / SSW Japan Construction) and English (TOEIC 640) enables seamless collaboration across international and multicultural engineering environments.
            </p>
          </div>

          <a
            href="#contact"
            className="btn-primary !bg-[#FAFAFA] !text-[#0A0A0A] hover:!bg-[#EF4444] hover:!text-[#FAFAFA] whitespace-nowrap flex items-center gap-2 self-start lg:self-center"
          >
            <span>GET IN TOUCH DIRECTLY</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
