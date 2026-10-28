'use client';

import React, { useState } from 'react';
import { workExperiences } from '../data/cv-data';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(workExperiences[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 border-b-2 border-[#0A0A0A] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-overline text-[#EF4444] font-bold block mb-1">
              // ON-SITE REPUTATION & PROFESSIONAL MILESTONES
            </span>
            <h2 className="text-headline text-[#0A0A0A]">
              PROFESSIONAL WORK EXPERIENCE
            </h2>
          </div>

          <p className="text-sm text-[#525252] max-w-md font-body">
            Battle-tested engineering experience spanning educational revitalizations, ministry program auditing, industrial plant quality control, and freelance quantity surveying.
          </p>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="relative border-l-2 border-[#0A0A0A] ml-4 md:ml-32 pl-6 md:pl-10 space-y-12">
          {workExperiences.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline Square Marker */}
                <div className="absolute -left-[31px] md:-left-[47px] top-0.5 w-4 h-4 bg-[#FAFAFA] border-2 border-[#0A0A0A] group-hover:bg-[#EF4444] group-hover:border-[#EF4444] transition-colors" />

                {/* Timeline Date Label on Left for Desktop */}
                <div className="hidden md:block absolute -left-36 top-0 w-28 text-right font-mono text-xs font-bold text-[#0A0A0A]">
                  {exp.period}
                </div>

                {/* Card Container */}
                <div className="card-editorial transition-all duration-200 hover:border-[#0A0A0A]">
                  {/* Header */}
                  <div
                    className="cursor-pointer select-none"
                    onClick={() => toggleExpand(exp.id)}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="md:hidden text-xs font-mono font-bold text-[#EF4444] bg-[#F5F5F5] px-2 py-0.5 border border-[#E5E5E5]">
                        {exp.period}
                      </span>
                      <span className="text-xs font-mono text-[#525252] flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-lg sm:text-xl text-[#0A0A0A] group-hover:text-[#EF4444] transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-[#525252] font-body mt-0.5">
                          {exp.company} <span className="text-[#0A0A0A] font-mono">({exp.type})</span>
                        </p>
                      </div>

                      <button
                        className="p-1 border border-[#D4D4D4] hover:border-[#0A0A0A] transition-colors"
                        aria-label="Toggle Experience Details"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-[#0A0A0A]" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#0A0A0A]" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Collapsible Content */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t-2 border-[#E5E5E5] space-y-6">
                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-3">
                          CORE RESPONSIBILITIES & SCOPE OF WORK
                        </h4>
                        <ul className="space-y-2 text-sm text-[#0A0A0A]">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="text-[#EF4444] font-bold mt-1 text-xs">■</span>
                              <span className="leading-relaxed font-body">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Measured Impacts */}
                      <div className="bg-[#F5F5F5] border-l-4 border-[#0A0A0A] p-4">
                        <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#16A34A]" />
                          MEASURABLE IMPACT & DELIVERED VALUE
                        </h4>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-[#525252]">
                          {exp.keyImpacts.map((impact, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#0A0A0A] font-bold">✓</span>
                              <span className="font-body">{impact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tools Used */}
                      <div>
                        <h4 className="text-[11px] font-bold uppercase font-mono tracking-wider text-[#525252] mb-2">
                          SOFTWARE & METHODOLOGIES DEPLOYED
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.toolsUsed.map((tool, idx) => (
                            <span
                              key={idx}
                              className="bg-[#FAFAFA] border border-[#D4D4D4] px-2.5 py-1 text-xs font-mono text-[#0A0A0A]"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
