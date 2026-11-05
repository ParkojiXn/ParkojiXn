'use client';

import React, { useState } from 'react';
import { workExperiences } from '../data/cv-data';
import { Calendar, MapPin, CheckCircle, ChevronDown, ChevronUp, FileText, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { usePdfModal } from '../context/PdfModalContext';

export const ExperienceTimeline: React.FC = () => {
  const { openPdf } = usePdfModal();
  const [expandedId, setExpandedId] = useState<string | null>(workExperiences[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-16 lg:py-20 border-b border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-[#0A0A0A] pb-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-overline text-[#DC2626] font-bold block mb-1">
              Field &amp; Office Progression
            </span>
            <h2 className="text-headline text-[#0A0A0A]">
              PROFESSIONAL WORK EXPERIENCE
            </h2>
          </div>

          <p className="text-sm text-[#525252] max-w-md font-body leading-relaxed">
            Hands-on engineering experience across municipal school revitalizations, ministry technical facilitation, industrial chemical plant QC, and subcontractor quantity surveying.
          </p>
        </div>

        {/* Clean Vertical Timeline */}
        <div className="relative border-l-2 border-[#0A0A0A] ml-2 sm:ml-4 pl-6 sm:pl-8 space-y-8">
          {workExperiences.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline Square Node Marker */}
                <div className="absolute -left-[33px] sm:-left-[41px] top-5 w-4 h-4 bg-[#FAFAFA] border-2 border-[#0A0A0A] group-hover:bg-[#DC2626] group-hover:border-[#DC2626] transition-colors rounded-xs" />

                {/* Card Container */}
                <div className="card-editorial transition-all duration-200 hover:border-[#0A0A0A] page-break-avoid rounded-xs">
                  {/* Top Bar: Date Badge, Location, and Expand Button */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F0F0F0] pb-3 mb-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      {/* Period Badge */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0A0A0A] text-[#FAFAFA] text-xs font-mono font-bold tracking-wider rounded-xs">
                        <Calendar className="w-3.5 h-3.5 text-[#DC2626]" />
                        <span>{exp.period}</span>
                      </span>

                      {/* Location */}
                      <span className="text-xs font-mono text-[#525252] flex items-center gap-1 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#A3A3A3]" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Toggle Button */}
                    <button
                      type="button"
                      onClick={() => toggleExpand(exp.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold uppercase border border-[#0A0A0A] bg-[#FFFFFF] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors print:hidden cursor-pointer rounded-xs"
                      aria-expanded={isExpanded}
                      aria-label={`${isExpanded ? 'Collapse' : 'Expand'} details for ${exp.role}`}
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
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
                    <h3 className="font-display text-lg sm:text-xl text-[#0A0A0A] group-hover:text-[#DC2626] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-[#374151] font-body mt-1">
                      {exp.company} <span className="text-[#0A0A0A] font-mono font-normal">({exp.type})</span>
                    </p>
                  </div>

                  {/* Collapsible Content */}
                  <div className={`mt-6 pt-6 border-t border-[#F0F0F0] space-y-6 ${isExpanded ? 'block' : 'hidden print:block'}`}>
                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-3">
                        Key Responsibilities &amp; Scope of Work
                      </h4>
                      <ul className="space-y-2 text-sm text-[#374151]">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-[#DC2626] font-bold mt-1 text-xs">▪</span>
                            <span className="font-body leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Impacts & Engineering Outcomes */}
                    <div>
                      <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-3">
                        Engineering Outcomes &amp; Impact
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {exp.keyImpacts.map((impact, idx) => (
                          <div
                            key={idx}
                            className="bg-[#F9FAFB] border border-[#E5E5E5] p-3 text-xs text-[#1F2937] flex items-start gap-2 rounded-xs"
                          >
                            <CheckCircle className="w-4 h-4 text-[#16A34A] flex-shrink-0 mt-0.5" />
                            <span className="font-body leading-relaxed">{impact}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Media Previews & Documents if available */}
                    {(exp.mediaPreview || exp.documents) && (
                      <div className="pt-2 border-t border-[#F0F0F0] space-y-4">
                        {/* Media Thumbnails */}
                        {exp.mediaPreview && exp.mediaPreview.length > 0 && (
                          <div>
                            <span className="text-[11px] font-mono font-bold text-[#525252] uppercase block mb-2">
                              Field Records &amp; Deliverables:
                            </span>
                            <div className="flex flex-wrap gap-3">
                              {exp.mediaPreview.map((m, idx) => (
                                <a
                                  key={idx}
                                  href={m.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFFFFF] border border-[#D4D4D4] hover:border-[#0A0A0A] text-xs font-mono text-[#0A0A0A] hover:text-[#DC2626] transition-colors rounded-xs"
                                >
                                  <ImageIcon className="w-3.5 h-3.5 text-[#525252]" />
                                  <span>{m.title}</span>
                                  <ExternalLink className="w-3 h-3 text-[#A3A3A3]" />
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
                            <div className="flex flex-wrap gap-3">
                              {exp.documents.map((doc, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => openPdf(doc.url, `${doc.name} - ${exp.role}`)}
                                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFFFFF] border border-[#D4D4D4] hover:border-[#0A0A0A] text-xs font-mono text-[#0A0A0A] hover:text-[#DC2626] transition-colors cursor-pointer rounded-xs"
                                >
                                  <FileText className="w-3.5 h-3.5 text-[#DC2626]" />
                                  <span>{doc.name}</span>
                                  <ExternalLink className="w-3 h-3 text-[#A3A3A3]" />
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tools Applied */}
                    <div className="pt-2 flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-mono font-bold text-[#737373] uppercase mr-1">
                        Tools:
                      </span>
                      {exp.toolsUsed.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-[#F3F4F6] text-[#374151] border border-[#E5E5E5] text-[10px] font-mono rounded-xs"
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
