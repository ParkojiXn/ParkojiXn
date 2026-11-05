'use client';

import React from 'react';
import { HardHat, FileSpreadsheet, ShieldCheck, GraduationCap } from 'lucide-react';
import { profileData } from '../data/cv-data';

export const CorePrinciples: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <HardHat className="w-5 h-5 text-blue-600" />;
      case 1:
        return <FileSpreadsheet className="w-5 h-5 text-emerald-600" />;
      case 2:
        return <ShieldCheck className="w-5 h-5 text-indigo-600" />;
      default:
        return <GraduationCap className="w-5 h-5 text-amber-600" />;
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
    <section id="principles" className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-6 gap-6">
          <div>
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-1">
              Methodology &amp; Standards
            </span>
            <h2 className="text-headline text-slate-900">
              ENGINEERING APPROACH &amp; WORK ETHIC
            </h2>
          </div>

          <p className="text-sm text-slate-600 max-w-lg leading-relaxed">
            Sound civil engineering balances mathematical precision with practical field feasibility. Every assignment is executed under four foundational principles.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {profileData.coreValues?.map((pillar, idx) => (
            <div
              key={idx}
              className="card-pro bg-white p-7 flex flex-col justify-between group rounded-xl border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all"
            >
              <div>
                {/* Pillar Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-0.5 bg-slate-900 text-white text-[11px] font-mono font-bold tracking-wider rounded-md">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                      {getPillarTag(idx)}
                    </span>
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg group-hover:scale-105 transition-transform">
                    {getIcon(idx)}
                  </div>
                </div>

                {/* Pillar Title & Subtitle */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors leading-snug">
                  {pillar.title}
                </h3>
                <span className="text-xs font-mono text-blue-600 font-semibold block mb-3">
                  {pillar.subtitle}
                </span>

                {/* Pillar Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Pillar Footer */}
              <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="font-medium">BENCHMARK</span>
                <span className="text-slate-900 font-semibold bg-slate-50 px-2.5 py-0.5 rounded-md border border-slate-200/60">
                  {getBenchmarkBadge(idx)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
