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
    <section id="experience" className="py-16 lg:py-20 border-b border-slate-200/80 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-slate-200 pb-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-1">
              Field &amp; Office Experience
            </span>
            <h2 className="text-headline text-slate-900">
              PROFESSIONAL WORK EXPERIENCE
            </h2>
          </div>

          <p className="text-sm text-slate-600 max-w-md leading-relaxed">
            Hands-on engineering experience across municipal school revitalizations, ministry technical facilitation, industrial chemical plant QC, and subcontractor quantity surveying.
          </p>
        </div>

        {/* Clean Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8">
          {workExperiences.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline Node Marker */}
                <div className="absolute -left-[33px] sm:-left-[41px] top-6 w-4 h-4 rounded-full bg-white border-2 border-blue-600 group-hover:scale-125 transition-transform shadow-xs" />

                {/* Card Container */}
                <div className="card-pro bg-white border border-slate-200 hover:border-slate-300 rounded-xl shadow-xs hover:shadow-md transition-all p-6 sm:p-7">
                  {/* Top Bar: Date, Location, and Expand Button */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      {/* Period Badge */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 text-white text-xs font-mono font-semibold rounded-md">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        <span>{exp.period}</span>
                      </span>

                      {/* Location */}
                      <span className="text-xs font-mono text-slate-500 flex items-center gap-1 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Toggle Button */}
                    <button
                      type="button"
                      onClick={() => toggleExpand(exp.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 rounded-lg shadow-2xs transition-colors print:hidden cursor-pointer"
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
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-slate-700 mt-1 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-slate-400" />
                      <span>{exp.company}</span>
                      <span className="text-xs font-mono font-normal text-slate-500">({exp.type})</span>
                    </p>
                  </div>

                  {/* Collapsible Content */}
                  <div className={`mt-6 pt-6 border-t border-slate-100 space-y-6 ${isExpanded ? 'block' : 'hidden print:block'}`}>
                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-slate-900 mb-3">
                        Key Responsibilities &amp; Engineering Scope
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-blue-600 font-bold mt-1 text-xs">•</span>
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Impacts */}
                    <div>
                      <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-slate-900 mb-3">
                        Measurable Engineering Outcomes
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {exp.keyImpacts.map((impact, idx) => (
                          <div
                            key={idx}
                            className="bg-slate-50 border border-slate-200/80 p-3.5 text-xs text-slate-700 flex items-start gap-2.5 rounded-lg"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{impact}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Media Previews & Documents if available */}
                    {(exp.mediaPreview || exp.documents) && (
                      <div className="pt-2 border-t border-slate-100 space-y-4">
                        {/* Media Thumbnails */}
                        {exp.mediaPreview && exp.mediaPreview.length > 0 && (
                          <div>
                            <span className="text-[11px] font-mono font-bold text-slate-500 uppercase block mb-2">
                              Field Records &amp; Blueprint Previews:
                            </span>
                            <div className="flex flex-wrap gap-2.5">
                              {exp.mediaPreview.map((m, idx) => (
                                <a
                                  key={idx}
                                  href={m.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 hover:border-blue-600 text-xs font-medium text-slate-800 hover:text-blue-600 transition-colors rounded-lg shadow-2xs"
                                >
                                  <ImageIcon className="w-3.5 h-3.5 text-slate-400" />
                                  <span>{m.title}</span>
                                  <ExternalLink className="w-3 h-3 text-slate-400" />
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Associated Documents */}
                        {exp.documents && exp.documents.length > 0 && (
                          <div>
                            <span className="text-[11px] font-mono font-bold text-slate-500 uppercase block mb-2">
                              Verified Documents:
                            </span>
                            <div className="flex flex-wrap gap-2.5">
                              {exp.documents.map((doc, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => openPdf(doc.url, `${doc.name} - ${exp.role}`)}
                                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 hover:border-blue-600 text-xs font-medium text-slate-800 hover:text-blue-600 transition-colors cursor-pointer rounded-lg shadow-2xs"
                                >
                                  <FileText className="w-3.5 h-3.5 text-blue-600" />
                                  <span>{doc.name}</span>
                                  <ExternalLink className="w-3 h-3 text-slate-400" />
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tools Applied */}
                    <div className="pt-2 flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-mono font-bold text-slate-400 uppercase mr-1">
                        Tools:
                      </span>
                      {exp.toolsUsed.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 bg-slate-100 text-slate-700 border border-slate-200/60 text-[11px] font-mono rounded-md"
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
