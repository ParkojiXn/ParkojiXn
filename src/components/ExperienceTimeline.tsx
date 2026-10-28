'use client';

import React, { useState } from 'react';
import { workExperiences } from '../data/cv-data';
import { Calendar, MapPin, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(workExperiences[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-16 lg:py-20 border-b-2 border-[#0A0A0A] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-overline text-[#EF4444] font-bold block mb-1">
              // ON-SITE REPUTATION &amp; PROFESSIONAL MILESTONES
            </span>
            <h2 className="text-headline text-[#0A0A0A]">
              PROFESSIONAL WORK EXPERIENCE
            </h2>
          </div>

          <p className="text-sm text-[#525252] max-w-md font-body">
            Demonstrated engineering competency across school revitalizations, ministerial auditing, industrial EPC quality control, and quantity surveying.
          </p>
        </div>

        {/* Clean, Proportional Vertical Timeline */}
        <div className="relative border-l-2 border-[#0A0A0A] ml-2 sm:ml-4 pl-6 sm:pl-8 space-y-8">
          {workExperiences.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline Square Node Marker */}
                <div className="absolute -left-[33px] sm:-left-[41px] top-5 w-4 h-4 bg-[#FAFAFA] border-2 border-[#0A0A0A] group-hover:bg-[#EF4444] group-hover:border-[#EF4444] transition-colors" />

                {/* Card Container */}
                <div className="card-editorial transition-all duration-200 hover:border-[#0A0A0A]">
                  {/* Top Bar: Date Badge, Location, and Expand Button */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E5E5] pb-3 mb-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      {/* Period Badge - Always clearly visible & perfectly proportioned */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0A0A0A] text-[#FAFAFA] text-xs font-mono font-bold tracking-wider">
                        <Calendar className="w-3.5 h-3.5 text-[#EF4444]" />
                        <span>{exp.period}</span>
                      </span>

                      {/* Location */}
                      <span className="text-xs font-mono text-[#525252] flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#A3A3A3]" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Dedicated Toggle Button */}
                    <button
                      type="button"
                      onClick={() => toggleExpand(exp.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold uppercase border-2 border-[#0A0A0A] bg-[#FAFAFA] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors"
                      aria-expanded={isExpanded}
                      aria-label={`${isExpanded ? 'Hide' : 'View'} details for ${exp.role}`}
                    >
                      <span>{isExpanded ? 'HIDE DETAILS' : 'VIEW DETAILS'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Role & Company Header */}
                  <div
                    className="cursor-pointer select-none"
                    onClick={() => toggleExpand(exp.id)}
                  >
                    <h3 className="font-display text-lg sm:text-xl text-[#0A0A0A] group-hover:text-[#EF4444] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-[#525252] font-body mt-1">
                      {exp.company} <span className="text-[#0A0A0A] font-mono font-normal">({exp.type})</span>
                    </p>
                  </div>

                  {/* Collapsible Content */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t-2 border-[#E5E5E5] space-y-6">
                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-3">
                          CORE RESPONSIBILITIES &amp; SCOPE OF WORK
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
                          MEASURABLE IMPACT &amp; DELIVERED VALUE
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
                          SOFTWARE &amp; METHODOLOGIES DEPLOYED
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
