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
    <section id="skills" className="py-20 border-b-2 border-[#0A0A0A] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-overline text-[#EF4444] font-bold block mb-1">
              // TECHNICAL SKILLS & PROFICIENCY MATRIX
            </span>
            <h2 className="text-headline text-[#0A0A0A]">
              SKILLS MATRIX & TOOLKIT
            </h2>
          </div>

          <p className="text-sm text-[#525252] max-w-md font-body">
            A cohesive synthesis of quantitative civil calculations, contemporary BIM/CAD modeling, and certified multilingual communication.
          </p>
        </div>

        {/* Tab Buttons (Magazine Style) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`p-4 text-left border-2 transition-all flex flex-col justify-between h-24 ${
                activeTab === idx
                  ? 'bg-[#0A0A0A] text-[#FAFAFA] border-[#0A0A0A]'
                  : 'bg-[#FAFAFA] text-[#0A0A0A] border-[#D4D4D4] hover:border-[#0A0A0A]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-bold ${activeTab === idx ? 'text-[#EF4444]' : 'text-[#525252]'}`}>
                  0{idx + 1} //
                </span>
                {getCategoryIcon(idx)}
              </div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider font-body">
                {cat.category}
              </span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="card-editorial border-2 border-[#0A0A0A]">
          {/* Header of Active Tab */}
          <div className="border-b-2 border-[#E5E5E5] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-display text-xl text-[#0A0A0A]">
                {skillCategories[activeTab].category}
              </h3>
              <p className="text-xs text-[#525252] font-body mt-1">
                {skillCategories[activeTab].description}
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-[#EF4444] bg-[#F5F5F5] px-3 py-1 border border-[#E5E5E5] self-start sm:self-auto">
              {skillCategories[activeTab].items.length} VERIFIED COMPETENCIES
            </span>
          </div>

          {/* Grid of Skills in Current Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories[activeTab].items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 border-2 border-[#E5E5E5] hover:border-[#0A0A0A] bg-[#FAFAFA] flex flex-col justify-between transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#525252] bg-[#F5F5F5] px-2 py-0.5 border border-[#E5E5E5]">
                      {item.categoryTag}
                    </span>
                    {item.level && (
                      <span className="text-[11px] font-mono font-bold text-[#EF4444]">
                        {item.level}
                      </span>
                    )}
                  </div>

                  <h4 className="font-display text-sm sm:text-base text-[#0A0A0A] group-hover:text-[#EF4444] transition-colors">
                    {item.name}
                  </h4>

                  {item.details && (
                    <p className="text-xs text-[#525252] mt-2 font-body leading-relaxed">
                      {item.details}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-2 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] font-mono text-[#525252]">
                  <span>APPLICATION:</span>
                  <span className="text-[#16A34A] font-bold flex items-center gap-1">
                    <Check className="w-3 h-3" /> FIELD VALIDATED
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
