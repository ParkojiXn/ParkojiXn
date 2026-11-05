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
    <section id="skills" className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-slate-200 pb-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-1">
              Core Capabilities
            </span>
            <h2 className="text-headline text-slate-900">
              TECHNICAL COMPETENCY MATRIX
            </h2>
          </div>

          <p className="text-sm text-slate-600 max-w-md leading-relaxed">
            Quantitative civil calculations, contemporary BIM/CAD modeling, and certified multilingual communication.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 print:hidden">
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`p-4 text-left border rounded-xl transition-all duration-150 flex flex-col justify-between h-24 ${
                activeTab === idx
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-slate-50 hover:bg-white text-slate-800 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-bold ${activeTab === idx ? 'text-blue-400' : 'text-slate-400'}`}>
                  0{idx + 1}
                </span>
                <span className={activeTab === idx ? 'text-blue-400' : 'text-slate-400'}>
                  {getCategoryIcon(idx)}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-tight leading-snug">
                {cat.category}
              </span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="card-pro bg-slate-50/50 border border-slate-200 rounded-2xl p-6 sm:p-8">
          {/* Header of Active Tab */}
          <div className="border-b border-slate-200 pb-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                {skillCategories[activeTab]?.category}
              </h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                {skillCategories[activeTab]?.description}
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-3.5 py-1.5 border border-blue-200 self-start sm:self-auto rounded-full whitespace-nowrap">
              {skillCategories[activeTab]?.items.length} Verified Competencies
            </span>
          </div>

          {/* Grid of Skills in Current Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories[activeTab]?.items.map((item, idx) => (
              <div
                key={idx}
                className="p-5 border border-slate-200/90 hover:border-blue-500 bg-white rounded-xl flex flex-col justify-between transition-all group shadow-2xs hover:shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md font-semibold">
                      {item.categoryTag}
                    </span>
                    {item.level && (
                      <span className="text-xs font-mono font-bold text-blue-600">
                        {item.level}
                      </span>
                    )}
                  </div>

                  <h4 className="font-display text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {item.name}
                  </h4>

                  {item.details && (
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                      {item.details}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>STATE / INDUSTRY VERIFIED</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
