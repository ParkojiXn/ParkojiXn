'use client';

import React, { useState } from 'react';
import { skillCategories } from '../data/cv-data';
import { Wrench, Monitor, Globe, Sparkles, CheckCircle2 } from 'lucide-react';

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
    <section id="skills" className="py-20 lg:py-24 border-b-2 border-[#0A0A0A] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b-2 border-[#E5E5E5] pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[11px] font-mono font-bold text-[#EF4444] uppercase tracking-widest block mb-2">
              Capabilities &amp; Qualifications
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#0A0A0A] uppercase tracking-tight">
              TECHNICAL COMPETENCIES
            </h2>
            <div className="h-1 w-16 bg-[#EF4444] mt-3" />
          </div>

          <p className="text-sm font-sans text-[#525252] max-w-lg leading-relaxed">
            Quantitative engineering, structural volume calculations, contemporary BIM/CAD modeling, and certified multilingual professional communication.
          </p>
        </div>

        {/* Tab Buttons (VoiceBox Sharp Border Architecture) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 print:hidden">
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`p-5 text-left border-2 transition-colors flex flex-col justify-between h-28 cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#0A0A0A] text-[#FAFAFA] border-[#0A0A0A]'
                  : 'bg-[#FAFAFA] text-[#0A0A0A] border-[#D4D4D4] hover:border-[#0A0A0A]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-bold ${activeTab === idx ? 'text-[#EF4444]' : 'text-[#525252]'}`}>
                  0{idx + 1}
                </span>
                <span className={activeTab === idx ? 'text-[#EF4444]' : 'text-[#0A0A0A]'}>
                  {getCategoryIcon(idx)}
                </span>
              </div>
              <span className="font-display text-xs sm:text-sm uppercase tracking-tight leading-snug">
                {cat.category}
              </span>
            </button>
          ))}
        </div>

        {/* Active Category Display Container */}
        <div className="bg-[#FAFAFA] border-2 border-[#0A0A0A] p-6 sm:p-8">
          {/* Header of Active Tab */}
          <div className="border-b-2 border-[#E5E5E5] pb-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-xl sm:text-2xl text-[#0A0A0A] uppercase tracking-tight">
                {skillCategories[activeTab]?.category}
              </h3>
              <p className="text-sm font-sans text-[#525252] mt-1.5 leading-relaxed">
                {skillCategories[activeTab]?.description}
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-[#0A0A0A] bg-[#F5F5F5] px-3.5 py-1.5 border-2 border-[#0A0A0A] self-start sm:self-auto uppercase tracking-wider">
              {skillCategories[activeTab]?.items.length} Verified Competencies
            </span>
          </div>

          {/* Grid of Skills in Current Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories[activeTab]?.items.map((item, idx) => (
              <div
                key={idx}
                className="p-5 border-2 border-[#E5E5E5] hover:border-[#0A0A0A] bg-[#FAFAFA] flex flex-col justify-between transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#0A0A0A] bg-[#F5F5F5] px-2 py-0.5 border border-[#D4D4D4] font-bold">
                      {item.categoryTag}
                    </span>
                    {item.level && (
                      <span className="text-xs font-mono font-bold text-[#EF4444]">
                        {item.level}
                      </span>
                    )}
                  </div>

                  <h4 className="font-display text-base text-[#0A0A0A] group-hover:text-[#EF4444] transition-colors leading-snug uppercase tracking-tight">
                    {item.name}
                  </h4>

                  {item.details && (
                    <p className="text-xs font-sans text-[#525252] mt-2.5 leading-relaxed">
                      {item.details}
                    </p>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] font-mono text-[#525252]">
                  <span className="uppercase font-semibold">VERIFIED SPECIFICATION</span>
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
