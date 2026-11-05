'use client';

import React, { useState } from 'react';
import { skillCategories } from '../data/cv-data';
import { Wrench, Monitor, Globe, Sparkles, Check } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Wrench className="w-4 h-4" />;
      case 1:
        return <Monitor className="w-4 h-4" />;
      case 2:
        return <Globe className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-[#0A0A0A] pb-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-overline text-[#DC2626] font-bold block mb-1">
              Technical Competencies
            </span>
            <h2 className="text-headline text-[#0A0A0A]">
              SKILLS MATRIX &amp; TOOLKIT
            </h2>
          </div>

          <p className="text-sm text-[#525252] max-w-md font-body">
            Quantitative civil calculations, contemporary BIM/CAD modeling, and certified multilingual communication.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 print:hidden">
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`p-4 text-left border transition-all flex flex-col justify-between h-24 rounded-xs ${
                activeTab === idx
                  ? 'bg-[#0A0A0A] text-[#FAFAFA] border-[#0A0A0A] shadow-xs'
                  : 'bg-[#FFFFFF] text-[#0A0A0A] border-[#D4D4D4] hover:border-[#0A0A0A]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-bold ${activeTab === idx ? 'text-[#DC2626]' : 'text-[#737373]'}`}>
                  0{idx + 1}
                </span>
                {getCategoryIcon(idx)}
              </div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider font-body leading-tight">
                {cat.category}
              </span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="card-editorial bg-[#FFFFFF] border border-[#0A0A0A] shadow-xs rounded-xs">
          {/* Header of Active Tab */}
          <div className="border-b border-[#F0F0F0] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-display text-xl sm:text-2xl text-[#0A0A0A] tracking-tight">
                {skillCategories[activeTab]?.category}
              </h3>
              <p className="text-sm text-[#525252] font-body mt-1 leading-relaxed">
                {skillCategories[activeTab]?.description}
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-[#DC2626] bg-[#FEF2F2] px-3.5 py-1.5 border border-[#FECACA] self-start sm:self-auto whitespace-nowrap rounded-xs">
              {skillCategories[activeTab]?.items.length} Competencies
            </span>
          </div>

          {/* Grid of Skills in Current Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories[activeTab]?.items.map((item, idx) => (
              <div
                key={idx}
                className="p-5 border border-[#E5E5E5] hover:border-[#0A0A0A] bg-[#FAFAFA] hover:bg-[#FFFFFF] flex flex-col justify-between transition-all group shadow-2xs rounded-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#525252] bg-[#F3F4F6] px-2 py-0.5 border border-[#E5E5E5] font-semibold rounded-xs">
                      {item.categoryTag}
                    </span>
                    {item.level && (
                      <span className="text-[11px] font-mono font-bold text-[#DC2626]">
                        {item.level}
                      </span>
                    )}
                  </div>

                  <h4 className="font-display text-base text-[#0A0A0A] group-hover:text-[#DC2626] transition-colors leading-snug">
                    {item.name}
                  </h4>

                  {item.details && (
                    <p className="text-xs text-[#525252] font-body mt-2 leading-relaxed">
                      {item.details}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-2 border-t border-[#F0F0F0] flex items-center justify-between text-[11px] font-mono text-[#737373]">
                  <span>VERIFIED</span>
                  <Check className="w-3.5 h-3.5 text-[#16A34A]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
