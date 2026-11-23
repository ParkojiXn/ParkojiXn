'use client';

import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { featuredProjects } from '../data/cv-data';
import { CheckSquare, Calendar, MapPin, ArrowRight, X, FileText, Image as ImageIcon, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { usePdfModal } from '../context/PdfModalContext';

export const FeaturedProjects: React.FC = () => {
  const { openPdf } = usePdfModal();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const categories = ['ALL', 'Planning & QS', 'BIM & CAD', 'Industrial & QC', 'Tender & Research', 'Government & Supervision'];

  const getCategoryCount = (cat: string) => {
    if (cat === 'ALL') return featuredProjects.length;
    return featuredProjects.filter((p) => p.category === cat).length;
  };

  const filteredProjects = selectedCategory === 'ALL'
    ? featuredProjects
    : featuredProjects.filter((p) => p.category === selectedCategory);

  const openProjectModal = (project: Project, initialIdx = 0) => {
    setActiveModalProject(project);
    setActiveImageIndex(initialIdx);
  };

  const handleNextImage = () => {
    if (!activeModalProject?.mediaGallery) return;
    setActiveImageIndex((prev) => (prev + 1) % activeModalProject.mediaGallery!.length);
  };

  const handlePrevImage = () => {
    if (!activeModalProject?.mediaGallery) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? activeModalProject.mediaGallery!.length - 1 : prev - 1
    );
  };

  return (
    <section id="projects" className="py-20 border-b-2 border-[#111111] bg-[#F3EEE3]">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#111111] pb-6 mb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-overline text-[#D9541E] font-bold">
                // VERIFIED ENGINEERING PORTFOLIO
              </span>
              <span className="text-[#A3A3A3]">•</span>
              <span className="text-[10px] font-mono font-bold bg-[#111111] text-[#F3EEE3] px-2 py-0.5 rounded-none">
                {featuredProjects.length} CASE STUDIES
              </span>
            </div>
            <h2 className="text-headline text-[#111111]">
              FEATURED ENGINEERING PROJECTS
            </h2>
          </div>

          <p className="text-sm text-[#525252] max-w-md font-body leading-relaxed">
            Detailed engineering design (DED), Bills of Quantities (BoQ/RAB), BIM Revit modeling, on-site quality control, and S-Curve scheduling.
          </p>
        </div>

        {/* Filter Chips Bar */}
        <div className="flex flex-wrap gap-2 mb-8 print:hidden">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
            >
              <span>{cat}</span>
              <span className="ml-1 opacity-70 text-[10px]">({getCategoryCount(cat)})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const gallery =
              project.mediaGallery && project.mediaGallery.length > 0
                ? project.mediaGallery
                : project.coverImage
                ? [{ title: project.title, url: project.coverImage, caption: '' }]
                : [];
            const displayImg = project.coverImage || gallery[0]?.url;
            const hasMultiple = gallery.length > 1;

            return (
              <div
                key={project.id}
                className="card-editorial-elevated flex flex-col justify-between group cursor-pointer overflow-hidden p-0 rounded-none page-break-avoid"
                onClick={() => openProjectModal(project, 0)}
              >
                <div>
                  {/* Visual Thumbnail Header (Clean Display - Details & Images accessed on Click) */}
                  <div className="relative aspect-[16/10] bg-[#111111] overflow-hidden border-b-2 border-[#111111] select-none">
                    {displayImg ? (
                      <img
                        src={displayImg}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300 contrast-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#737373] font-mono text-xs">
                        [Engineering Blueprint]
                      </div>
                    )}

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 bg-[#111111] text-[#F3EEE3] text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider rounded-none z-10 border border-[#DDD6C7]/30">
                      {project.category}
                    </div>

                    <div className="absolute top-2.5 right-2.5 bg-[#FAF7F0] text-[#111111] border-2 border-[#111111] text-[10px] font-mono font-bold px-2 py-0.5 rounded-none z-10">
                      {project.period}
                    </div>

                    {/* Multiple Blueprints Indicator Badge */}
                    {hasMultiple && (
                      <div className="absolute bottom-2.5 right-2.5 bg-[#111111]/90 text-[#F3EEE3] border border-[#DDD6C7]/30 text-[10px] font-mono font-bold px-2 py-0.5 rounded-none flex items-center gap-1.5 z-10 pointer-events-none shadow-sm">
                        <ImageIcon className="w-3 h-3 text-[#D9541E]" />
                        <span>{gallery.length} BLUEPRINTS</span>
                      </div>
                    )}
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6 space-y-3.5">
                  <div>
                    <span className="text-[10px] font-mono text-[#D9541E] uppercase font-bold tracking-wider block mb-1">
                      {project.role}
                    </span>
                    <h3 className="font-display text-base sm:text-lg text-[#111111] group-hover:text-[#D9541E] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#404040] font-body line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Highlights Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono bg-[#EAE4D7] text-[#404040] border border-[#DDD6C7] px-2 py-0.5 rounded-none font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[10px] font-mono text-[#737373] py-0.5 font-bold">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 py-3.5 bg-[#F3EEE3] border-t-2 border-[#DDD6C7] flex items-center justify-between text-xs font-mono group-hover:bg-[#FFFFFF] transition-colors">
                <span className="text-[#525252] flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#A3A3A3]" />
                  {project.location.split(',')[0]}
                </span>
                <span className="font-bold text-[#111111] group-hover:text-[#D9541E] flex items-center gap-1 transition-colors">
                  VIEW DETAILS <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
        </div>

        {/* Project Detail Modal */}
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 bg-[#111111]/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 print:hidden"
            role="dialog"
            aria-modal="true"
            aria-label={activeModalProject.title}
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className="bg-[#F3EEE3] border-4 border-[#111111] w-full max-w-5xl lg:max-w-6xl max-h-[92vh] overflow-y-auto p-6 sm:p-8 relative shadow-none rounded-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 bg-[#111111] text-[#F3EEE3] hover:bg-[#D9541E] transition-colors rounded-none cursor-pointer"
                aria-label="Close Project Details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="border-b-2 border-[#DDD6C7] pb-5 mb-6 pr-10">
                <span className="text-overline text-[#D9541E] font-bold block mb-1">
                  {activeModalProject.category} // CASE STUDY
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-[#111111] mt-1 leading-snug">
                  {activeModalProject.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#404040] mt-2.5">
                  <span>Role: <strong className="text-[#111111]">{activeModalProject.role}</strong></span>
                  <span>•</span>
                  <span>Client / Institution: <strong className="text-[#111111]">{activeModalProject.clientOrInstitution}</strong></span>
                  <span>•</span>
                  <span>Period: <strong className="text-[#111111]">{activeModalProject.period}</strong></span>
                  <span>•</span>
                  <span>Location: <strong className="text-[#111111]">{activeModalProject.location}</strong></span>
                </div>
              </div>

              {/* Gallery & Real Blueprints Showcase */}
              {activeModalProject.mediaGallery && activeModalProject.mediaGallery.length > 0 && (
                <div className="mb-8 border-2 border-[#111111] bg-[#121212] p-4 text-[#F3EEE3] rounded-none">
                  <div className="flex items-center justify-between border-b border-[#333333] pb-2 mb-3">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#D9541E] flex items-center gap-1.5 uppercase">
                      <ImageIcon className="w-4 h-4 text-[#D9541E]" />
                      ATTACHED BLUEPRINTS, DED &amp; FIELD EVIDENCE ({activeImageIndex + 1} / {activeModalProject.mediaGallery.length})
                    </span>
                    <a
                      href={activeModalProject.mediaGallery[activeImageIndex].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-[#C8C0B0] hover:text-[#F3EEE3] flex items-center gap-1 underline"
                    >
                      View Full Size <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Main Active Viewer */}
                  <div className="relative bg-[#000000] border border-[#262626] aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center overflow-hidden rounded-none">
                    <img
                      src={activeModalProject.mediaGallery[activeImageIndex].url}
                      alt={activeModalProject.mediaGallery[activeImageIndex].title}
                      className="max-h-full max-w-full object-contain"
                    />

                    {/* Navigation Buttons */}
                    {activeModalProject.mediaGallery.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-[#111111]/80 hover:bg-[#D9541E] text-[#F3EEE3] transition-colors rounded-none"
                          aria-label="Previous Image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#111111]/80 hover:bg-[#D9541E] text-[#F3EEE3] transition-colors rounded-none"
                          aria-label="Next Image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Caption & Title */}
                  <div className="mt-3">
                    <h4 className="font-mono text-sm font-bold text-[#F3EEE3]">
                      {activeModalProject.mediaGallery[activeImageIndex].title}
                    </h4>
                    <p className="text-xs text-[#DDD6C7] font-body mt-1 leading-relaxed">
                      {activeModalProject.mediaGallery[activeImageIndex].caption}
                    </p>
                  </div>

                  {/* Interactive Display Selector (Pilih Display Blueprint Saat Modal Terbuka) */}
                  {activeModalProject.mediaGallery.length > 1 && (
                    <div className="mt-4 pt-3.5 border-t border-[#262626]">
                      <div className="text-[10px] font-mono text-[#DDD6C7] uppercase font-bold tracking-wider mb-2.5 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-[#D9541E]">
                          <ImageIcon className="w-3.5 h-3.5" />
                          PILIH DISPLAY GAMBAR ({activeModalProject.mediaGallery.length} LAMPIRAN TERSEDIA):
                        </span>
                        <span className="text-[#A3A3A3] font-mono hidden sm:inline">
                          KLIK GAMBAR DI BAWAH UNTUK MENGGANTI TAMPILAN
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {activeModalProject.mediaGallery.map((media, idx) => {
                          const isSelected = activeImageIndex === idx;
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setActiveImageIndex(idx)}
                              className={`relative p-1.5 border-2 transition-all flex flex-col gap-1 text-left cursor-pointer bg-[#1A1A1A] ${
                                isSelected
                                  ? 'border-[#D9541E] bg-[#222222] ring-2 ring-[#D9541E]/40'
                                  : 'border-[#333333] hover:border-[#DDD6C7] opacity-70 hover:opacity-100'
                              }`}
                            >
                              <div className="aspect-[16/10] bg-[#000000] overflow-hidden relative">
                                <img
                                  src={media.url}
                                  alt={media.title}
                                  className="w-full h-full object-cover"
                                />
                                {isSelected && (
                                  <span className="absolute top-1 right-1 bg-[#D9541E] text-[#F3EEE3] text-[9px] font-mono font-bold px-1.5 py-0.5">
                                    ACTIVE
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] font-mono font-bold text-[#F3EEE3] truncate block">
                                {idx + 1}. {media.title}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Official Downloadable Documents Section */}
              {activeModalProject.documents && activeModalProject.documents.length > 0 && (
                <div className="mb-8 border-2 border-[#111111] bg-[#EAE4D7] p-4 rounded-none">
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#111111] mb-3 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#D9541E]" />
                    OFFICIAL PROJECT DOCUMENTS &amp; BLUEPRINTS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModalProject.documents.map((doc, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          if (doc.url.toLowerCase().endsWith('.pdf') || doc.format.toUpperCase() === 'PDF') {
                            openPdf(doc.url, `${doc.name} - ${activeModalProject.title}`);
                          } else {
                            window.open(doc.url, '_blank');
                          }
                        }}
                        className="p-3 bg-[#F3EEE3] border-2 border-[#C8C0B0] hover:border-[#111111] transition-all flex items-center justify-between group text-left cursor-pointer rounded-none"
                        title="Open Document in PDF Modal"
                      >
                        <div className="flex items-center gap-2.5 min-w-0 pr-2">
                          <span className="p-1.5 bg-[#111111] text-[#F3EEE3] text-[10px] font-mono font-bold flex-shrink-0 rounded-none">
                            {doc.format}
                          </span>
                          <div className="min-w-0">
                            <span className="text-xs font-bold font-mono text-[#111111] block truncate group-hover:text-[#D9541E] transition-colors">
                              {doc.name}
                            </span>
                            {doc.size && (
                              <span className="text-[10px] text-[#737373] font-mono block">
                                File Size: {doc.size}
                              </span>
                            )}
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-[#737373] group-hover:text-[#111111] flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Scope & Methodology */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#111111] mb-2">
                    EXECUTIVE SUMMARY &amp; PROJECT SCOPE
                  </h4>
                  <p className="text-sm font-body text-[#111111] leading-relaxed bg-[#EAE4D7] p-4 border border-[#DDD6C7] rounded-none">
                    {activeModalProject.summary}
                  </p>
                </div>

                {/* Technical Solutions & Methodology */}
                <div>
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#111111] mb-2">
                    TECHNICAL METHODOLOGY &amp; SITE EXECUTION
                  </h4>
                  <ul className="space-y-2.5 text-sm text-[#111111]">
                    {activeModalProject.architectureAndSolution.map((sol, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 border-b border-[#DDD6C7] pb-2">
                        <CheckSquare className="w-4 h-4 text-[#D9541E] mt-0.5 flex-shrink-0" />
                        <span className="font-body leading-relaxed">{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Performance Metrics */}
                <div>
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#111111] mb-2">
                    PERFORMANCE BENCHMARKS &amp; QUALITY METRICS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeModalProject.metrics.map((m, idx) => (
                      <div key={idx} className="border-2 border-[#111111] p-3 bg-[#F3EEE3] rounded-none">
                        <span className="text-[10px] text-[#404040] font-mono block uppercase font-bold">{m.label}</span>
                        <span className="text-sm font-bold text-[#111111] font-mono mt-1 block">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables & Tech Stack */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#111111] mb-2">
                      KEY DELIVERABLES &amp; SUBMITTALS
                    </h4>
                    <ul className="space-y-1.5 text-xs font-mono text-[#404040]">
                      {activeModalProject.deliverables.map((d, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="text-[#D9541E] font-bold">▪</span>
                          <span className="text-[#111111]">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#111111] mb-2">
                      ENGINEERING SOFTWARE &amp; METHODS APPLIED
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeModalProject.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-[#111111] text-[#F3EEE3] px-2.5 py-1 text-xs font-mono rounded-none"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Close Button Footer */}
              <div className="mt-8 pt-4 border-t-2 border-[#111111] flex justify-end">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="btn-primary"
                >
                  CLOSE CASE STUDY
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
