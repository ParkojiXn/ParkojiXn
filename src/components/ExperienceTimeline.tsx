'use client';

import React, { useState } from 'react';
import { workExperiences } from '../data/cv-data';
import { Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, FileText, Image as ImageIcon, ExternalLink, Briefcase } from 'lucide-react';
import { usePdfModal } from '../context/PdfModalContext';

export const ExperienceTimeline: React.FC = () => {
  const { openPdf } = usePdfModal();
  const [expandedId, setExpandedId] = useState<string | null>(workExperiences[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 lg:py-24 border-b-2 border-[#0A0A0A] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b-2 border-[#E5E5E5] pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[11px] font-mono font-bold text-[#EF4444] uppercase tracking-widest block mb-2">
              Career History &amp; Field Record
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#0A0A0A] uppercase tracking-tight">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="h-1 w-16 bg-[#EF4444] mt-3" />
          </div>

          <p className="text-sm font-sans text-[#525252] max-w-lg leading-relaxed">
            Hands-on engineering record covering municipal school revitalizations, ministry technical facilitation, industrial chemical plant QC, and subcontractor quantity surveying.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-[#0A0A0A] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {workExperiences.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline Square Node Marker (VoiceBox angular identity) */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 bg-[#FAFAFA] border-2 border-[#0A0A0A] group-hover:bg-[#EF4444] group-hover:border-[#EF4444] transition-colors" />

                {/* Card Container */}
                <div className="bg-[#FAFAFA] border-2 border-[#E5E5E5] hover:border-[#0A0A0A] transition-colors p-6 sm:p-8">
                  {/* Top Bar: Date, Location, and Expand Button */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#E5E5E5] pb-4 mb-5">
                    <div className="flex flex-wrap items-center gap-3">
                      {/* Period Badge */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0A0A0A] text-[#FAFAFA] text-xs font-mono font-bold uppercase tracking-wider">
                        <Calendar className="w-3.5 h-3.5 text-[#EF4444]" />
                        <span>{exp.period}</span>
                      </span>

                      {/* Location */}
                      <span className="text-xs font-mono text-[#525252] flex items-center gap-1.5 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#0A0A0A]" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Toggle Button */}
                    <button
                      type="button"
                      onClick={() => toggleExpand(exp.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold border-2 border-[#0A0A0A] bg-transparent text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors uppercase tracking-wider print:hidden cursor-pointer"
                      aria-expanded={isExpanded}
                      aria-label={`${isExpanded ? 'Hide' : 'View'} details for ${exp.role}`}
                    >
                      <span>{isExpanded ? 'Collapse' : 'Expand Details'}</span>
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
                    <h3 className="font-display text-xl sm:text-2xl text-[#0A0A0A] group-hover:text-[#EF4444] transition-colors uppercase tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-sans font-semibold text-[#525252] mt-2 flex flex-wrap items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#0A0A0A]" />
                      <span className="text-[#0A0A0A]">{exp.company}</span>
                      <span className="text-xs font-mono font-bold text-[#EF4444]">/ {exp.type}</span>
                    </p>
                  </div>

                  {/* Collapsible Content */}
                  <div className={`mt-6 pt-6 border-t-2 border-[#E5E5E5] space-y-6 ${isExpanded ? 'block' : 'hidden print:block'}`}>
                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0A] mb-3">
                        Key Responsibilities &amp; Engineering Scope
                      </h4>
                      <ul className="space-y-2.5 text-sm font-sans text-[#0A0A0A]">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-[#EF4444] font-bold mt-1 text-xs">■</span>
                            <span className="leading-relaxed text-[#525252]">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Measurable Engineering Outcomes */}
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0A] mb-3">
                        Measurable Engineering Outcomes
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {exp.keyImpacts.map((impact, idx) => (
                          <div
                            key={idx}
                            className="bg-[#F5F5F5] border-2 border-[#E5E5E5] p-3.5 text-xs font-sans text-[#0A0A0A] flex items-start gap-2.5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#16A34A] flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed font-medium">{impact}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Media Previews & Documents */}
                    {(exp.mediaPreview || exp.documents) && (
                      <div className="pt-2 border-t-2 border-[#E5E5E5] space-y-4">
                        {/* Media Thumbnails */}
                        {exp.mediaPreview && exp.mediaPreview.length > 0 && (
                          <div>
                            <span className="text-[11px] font-mono font-bold text-[#525252] uppercase block mb-2">
                              Field Records &amp; Blueprint Previews:
                            </span>
                            <div className="flex flex-wrap gap-2.5">
                              {exp.mediaPreview.map((m, idx) => (
                                <a
                                  key={idx}
                                  href={m.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FAFAFA] border-2 border-[#0A0A0A] text-xs font-mono font-bold text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors uppercase tracking-wider"
                                >
                                  <ImageIcon className="w-3.5 h-3.5 text-[#EF4444]" />
                                  <span>{m.title}</span>
                                  <ExternalLink className="w-3 h-3 text-[#525252]" />
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Associated Documents */}
                        {exp.documents && exp.documents.length > 0 && (
                          <div>
                            <span className="text-[11px] font-mono font-bold text-[#525252] uppercase block mb-2">
                              Verified Documents:
                            </span>
                            <div className="flex flex-wrap gap-2.5">
                              {exp.documents.map((doc, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => openPdf(doc.url, `${doc.name} - ${exp.role}`)}
                                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FAFAFA] border-2 border-[#0A0A0A] text-xs font-mono font-bold text-[#0A0A0A] hover:bg-[#EF4444] hover:text-[#FAFAFA] hover:border-[#EF4444] transition-colors uppercase tracking-wider cursor-pointer"
                                >
                                  <FileText className="w-3.5 h-3.5 text-[#EF4444]" />
                                  <span>{doc.name}</span>
                                  <ExternalLink className="w-3 h-3 text-[#525252]" />
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tools Applied */}
                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-[#525252] uppercase mr-1">
                        Tools:
                      </span>
                      {exp.toolsUsed.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 bg-[#F5F5F5] text-[#0A0A0A] border border-[#D4D4D4] text-[11px] font-mono font-semibold"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
