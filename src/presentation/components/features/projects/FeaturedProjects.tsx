'use client';

import React, { useState } from 'react';
import { Project } from '../../../../core/entities/Project';
import { getProjectsUseCase } from '../../../../infrastructure/di/container';
import { CheckSquare, Calendar, MapPin, ArrowRight, X, FileText, Image as ImageIcon, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { usePdfModal } from '../../../context/PdfModalContext';

export const FeaturedProjects: React.FC = () => {
  const { openPdf } = usePdfModal();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const categories = getProjectsUseCase.getCategories();
  const allProjects = getProjectsUseCase.execute();

  const getCategoryCount = (cat: string) => {
    return getProjectsUseCase.getCategoryCount(cat);
  };

  const filteredProjects = selectedCategory === 'ALL'
    ? allProjects
    : allProjects.filter((p) => p.category === selectedCategory);

  const openProjectModal = (project: Project) => {
    setActiveModalProject(project);
    setActiveImageIndex(0);
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
    <section id="projects" className="py-20 border-b-2 border-[#0A0A0A] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#0A0A0A] pb-6 mb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-overline text-[#EF4444] font-bold">
                // VERIFIED ENGINEERING PORTFOLIO
              </span>
              <span className="text-[#A3A3A3]">•</span>
              <span className="text-[10px] font-mono font-bold bg-[#0A0A0A] text-[#FAFAFA] px-2 py-0.5">
                {allProjects.length} CASE STUDIES
              </span>
            </div>
            <h2 className="text-headline text-[#0A0A0A]">
              FEATURED ENGINEERING PROJECTS
            </h2>
          </div>

          <p className="text-sm text-[#525252] max-w-md font-body leading-relaxed">
            Authentic field documentation across Detailed Engineering Design (DED), Bills of Quantities (BoQ), BIM Revit modeling, on-site quality control, and S-Curve scheduling.
          </p>
        </div>

        {/* Filter Chips Bar (Hidden in Print) */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-editorial-elevated flex flex-col justify-between group cursor-pointer overflow-hidden p-0 page-break-avoid"
              onClick={() => openProjectModal(project)}
            >
              <div>
                {/* Visual Thumbnail / Preview Header */}
                <div className="relative aspect-[16/10] bg-[#171717] overflow-hidden border-b-2 border-[#0A0A0A]">
                  {project.coverImage ? (
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 contrast-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#262626] text-[#A3A3A3]">
                      <FileText className="w-12 h-12 stroke-[1.5]" />
                    </div>
                  )}

                  {/* Dark gradient overlay & Category Badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className="bg-[#0A0A0A] text-[#FAFAFA] border border-[#525252] px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {project.mediaGallery && project.mediaGallery.length > 0 && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-[#EF4444] text-[#FAFAFA] px-2 py-0.5 text-[10px] font-mono font-bold flex items-center gap-1 shadow-sm">
                        <ImageIcon className="w-3 h-3" />
                        {project.mediaGallery.length} ATTACHMENTS
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-[#FAFAFA]">
                    <span className="flex items-center gap-1 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-[#EF4444]" />
                      {project.period}
                    </span>
                    <span className="flex items-center gap-1 text-[#E5E5E5] truncate max-w-[150px]">
                      <MapPin className="w-3.5 h-3.5 text-[#EF4444]" />
                      {project.location}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-[10px] font-mono tracking-wider text-[#525252] uppercase block mb-1 font-semibold">
                    ROLE: {project.role}
                  </span>

                  <h3 className="font-display text-lg text-[#0A0A0A] group-hover:text-[#EF4444] transition-colors leading-snug line-clamp-2 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#404040] font-body line-clamp-3 mb-4 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tech stack mini tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E5E5E5]">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-[#FAFAFA] border border-[#D4D4D4] px-2 py-0.5 text-[10px] font-mono text-[#0A0A0A]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="bg-[#E5E5E5] px-1.5 py-0.5 text-[10px] font-mono text-[#525252] font-semibold">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Button (Hidden in Print) */}
              <div className="px-5 pb-5 print:hidden">
                <button
                  type="button"
                  className="w-full border-t-2 border-[#0A0A0A] pt-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#EF4444] transition-colors"
                >
                  <span>VIEW TECHNICAL DOSSIER &amp; DRAWINGS</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#EF4444]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for In-depth Project Details & Real Blueprints/Photos (Hidden in Print) */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 bg-[#0A0A0A]/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:hidden">
            <div className="bg-[#FAFAFA] border-4 border-[#0A0A0A] max-w-4xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 relative shadow-2xl my-auto">
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 bg-[#0A0A0A] text-[#FAFAFA] hover:bg-[#EF4444] transition-colors z-10"
                aria-label="Close Project Details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="border-b-2 border-[#0A0A0A] pb-4 mb-6 pr-12">
                <span className="text-overline text-[#EF4444] font-bold block">
                  {activeModalProject.category} // TECHNICAL PROJECT DOSSIER
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-[#0A0A0A] mt-1">
                  {activeModalProject.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#404040] mt-2">
                  <span>Role: <strong className="text-[#0A0A0A]">{activeModalProject.role}</strong></span>
                  <span>•</span>
                  <span>Client / Institution: <strong className="text-[#0A0A0A]">{activeModalProject.clientOrInstitution}</strong></span>
                  <span>•</span>
                  <span>Period: <strong className="text-[#0A0A0A]">{activeModalProject.period}</strong></span>
                  <span>•</span>
                  <span>Location: <strong className="text-[#0A0A0A]">{activeModalProject.location}</strong></span>
                </div>
              </div>

              {/* Gallery & Real Blueprints Showcase */}
              {activeModalProject.mediaGallery && activeModalProject.mediaGallery.length > 0 && (
                <div className="mb-8 border-2 border-[#0A0A0A] bg-[#121212] p-4 text-[#FAFAFA]">
                  <div className="flex items-center justify-between border-b border-[#333333] pb-2 mb-3">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#EF4444] flex items-center gap-1.5 uppercase">
                      <ImageIcon className="w-4 h-4" />
                      ATTACHED BLUEPRINTS, DED &amp; FIELD EVIDENCE ({activeImageIndex + 1} / {activeModalProject.mediaGallery.length})
                    </span>
                    <a
                      href={activeModalProject.mediaGallery[activeImageIndex].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-[#A3A3A3] hover:text-[#FAFAFA] flex items-center gap-1 underline"
                    >
                      View Full Image <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Main Active Viewer */}
                  <div className="relative bg-[#000000] border border-[#262626] aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center overflow-hidden">
                    <img
                      src={activeModalProject.mediaGallery[activeImageIndex].url}
                      alt={activeModalProject.mediaGallery[activeImageIndex].title}
                      className="max-h-full max-w-full object-contain"
                    />

                    {/* Left/Right Navigation */}
                    {activeModalProject.mediaGallery.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-[#0A0A0A]/80 hover:bg-[#EF4444] text-[#FAFAFA] transition-colors"
                          aria-label="Previous Image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#0A0A0A]/80 hover:bg-[#EF4444] text-[#FAFAFA] transition-colors"
                          aria-label="Next Image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Caption & Title */}
                  <div className="mt-3">
                    <h4 className="font-mono text-sm font-bold text-[#FAFAFA]">
                      {activeModalProject.mediaGallery[activeImageIndex].title}
                    </h4>
                    <p className="text-xs text-[#A3A3A3] font-body mt-1">
                      {activeModalProject.mediaGallery[activeImageIndex].caption}
                    </p>
                  </div>

                  {/* Thumbnails strip */}
                  {activeModalProject.mediaGallery.length > 1 && (
                    <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
                      {activeModalProject.mediaGallery.map((media, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative w-16 h-12 flex-shrink-0 border-2 overflow-hidden ${
                            activeImageIndex === idx ? 'border-[#EF4444]' : 'border-[#333333] opacity-60'
                          }`}
                        >
                          <img
                            src={media.url}
                            alt={media.title}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Official Downloadable Documents Section */}
              {activeModalProject.documents && activeModalProject.documents.length > 0 && (
                <div className="mb-8 border-2 border-[#0A0A0A] bg-[#F5F5F5] p-4">
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-3 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#EF4444]" />
                    OFFICIAL PROJECT DOCUMENTS &amp; ARCHIVES
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
                        className="p-3 bg-[#FAFAFA] border border-[#D4D4D4] hover:border-[#0A0A0A] hover:shadow transition-all flex items-center justify-between group text-left cursor-pointer"
                        title="Open Document in PDF Modal"
                      >
                        <div className="flex items-center gap-2.5 min-w-0 pr-2">
                          <span className="p-1.5 bg-[#0A0A0A] text-[#FAFAFA] text-[10px] font-mono font-bold flex-shrink-0">
                            {doc.format}
                          </span>
                          <div className="min-w-0">
                            <span className="text-xs font-bold font-mono text-[#0A0A0A] block truncate group-hover:text-[#EF4444] transition-colors">
                              {doc.name}
                            </span>
                            {doc.size && (
                              <span className="text-[10px] text-[#737373] font-mono block">
                                File Size: {doc.size}
                              </span>
                            )}
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-[#737373] group-hover:text-[#0A0A0A] flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Summary */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-2">
                    EXECUTIVE SUMMARY &amp; PROJECT SCOPE
                  </h4>
                  <p className="text-sm font-body text-[#0A0A0A] leading-relaxed bg-[#F5F5F5] p-4 border border-[#E5E5E5]">
                    {activeModalProject.summary}
                  </p>
                </div>

                {/* Technical Solutions & Methodology */}
                <div>
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-2">
                    TECHNICAL METHODOLOGY &amp; SITE EXECUTION
                  </h4>
                  <ul className="space-y-2.5 text-sm text-[#0A0A0A]">
                    {activeModalProject.architectureAndSolution.map((sol, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 border-b border-[#E5E5E5] pb-2">
                        <CheckSquare className="w-4 h-4 text-[#EF4444] mt-0.5 flex-shrink-0" />
                        <span className="font-body leading-relaxed">{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Measured Metrics */}
                <div>
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-2">
                    PERFORMANCE BENCHMARKS &amp; QUALITY METRICS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeModalProject.metrics.map((m, idx) => (
                      <div key={idx} className="border-2 border-[#0A0A0A] p-3 bg-[#FAFAFA]">
                        <span className="text-[10px] text-[#404040] font-mono block uppercase font-bold">{m.label}</span>
                        <span className="text-sm font-bold text-[#0A0A0A] font-mono mt-1 block">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables & Tech Stack */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-2">
                      KEY DELIVERABLES &amp; SUBMITTALS
                    </h4>
                    <ul className="space-y-1.5 text-xs font-mono text-[#404040]">
                      {activeModalProject.deliverables.map((d, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="text-[#EF4444] font-bold">▪</span>
                          <span className="text-[#0A0A0A]">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-2">
                      ENGINEERING SOFTWARE &amp; METHODS APPLIED
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeModalProject.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-[#0A0A0A] text-[#FAFAFA] px-2.5 py-1 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Close Button Footer */}
              <div className="mt-8 pt-4 border-t-2 border-[#0A0A0A] flex justify-end">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="btn-primary"
                >
                  CLOSE DOSSIER
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
