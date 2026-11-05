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
    <section id="projects" className="py-16 sm:py-20 border-b border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#0A0A0A] pb-6 mb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-overline text-[#DC2626] font-bold">
                Field Works &amp; Consultancies
              </span>
              <span className="text-[#A3A3A3]">•</span>
              <span className="text-[10px] font-mono font-bold bg-[#0A0A0A] text-[#FAFAFA] px-2 py-0.5 rounded-xs">
                {featuredProjects.length} Case Studies
              </span>
            </div>
            <h2 className="text-headline text-[#0A0A0A]">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-editorial-elevated flex flex-col justify-between group cursor-pointer overflow-hidden p-0 page-break-avoid rounded-xs"
              onClick={() => openProjectModal(project)}
            >
              <div>
                {/* Visual Thumbnail Header */}
                <div className="relative aspect-[16/10] bg-[#171717] overflow-hidden border-b border-[#E5E5E5]">
                  {project.coverImage ? (
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#737373] font-mono text-xs">
                      [Engineering Blueprint]
                    </div>
                  )}

                  <div className="absolute top-2.5 left-2.5 bg-[#0A0A0A]/90 text-[#FAFAFA] text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider backdrop-blur-xs rounded-xs">
                    {project.category}
                  </div>

                  <div className="absolute top-2.5 right-2.5 bg-[#FFFFFF]/90 text-[#0A0A0A] text-[10px] font-mono font-bold px-2 py-0.5 backdrop-blur-xs rounded-xs">
                    {project.period}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#DC2626] uppercase font-bold tracking-wider block mb-1">
                      {project.role}
                    </span>
                    <h3 className="font-display text-base sm:text-lg text-[#0A0A0A] group-hover:text-[#DC2626] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#525252] font-body line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Highlights Pill Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono bg-[#F5F5F5] text-[#404040] border border-[#E5E5E5] px-2 py-0.5 rounded-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[10px] font-mono text-[#737373] py-0.5">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 py-3.5 bg-[#FAFAFA] border-t border-[#E5E5E5] flex items-center justify-between text-xs font-mono group-hover:bg-[#FFFFFF] transition-colors">
                <span className="text-[#525252] flex items-center gap-1 font-medium">
                  <MapPin className="w-3 h-3 text-[#A3A3A3]" />
                  {project.location.split(',')[0]}
                </span>
                <span className="font-bold text-[#0A0A0A] group-hover:text-[#DC2626] flex items-center gap-1 transition-colors">
                  View Details <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 print:hidden"
            role="dialog"
            aria-modal="true"
            aria-label={activeModalProject.title}
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className="bg-[#FAFAFA] border border-[#0A0A0A] w-full max-w-4xl max-h-[92vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl rounded-xs"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 bg-[#0A0A0A] text-[#FAFAFA] hover:bg-[#DC2626] transition-colors rounded-xs"
                aria-label="Close Project Details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="border-b border-[#E5E5E5] pb-5 mb-6 pr-10">
                <span className="text-overline text-[#DC2626] font-bold block mb-1">
                  {activeModalProject.category} // CASE STUDY
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-[#0A0A0A] mt-1 leading-snug">
                  {activeModalProject.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#525252] mt-2.5">
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
                <div className="mb-8 border border-[#0A0A0A] bg-[#121212] p-4 text-[#FAFAFA] rounded-xs">
                  <div className="flex items-center justify-between border-b border-[#333333] pb-2 mb-3">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#DC2626] flex items-center gap-1.5 uppercase">
                      <ImageIcon className="w-4 h-4" />
                      Attached Drawings &amp; Field Records ({activeImageIndex + 1} / {activeModalProject.mediaGallery.length})
                    </span>
                    <a
                      href={activeModalProject.mediaGallery[activeImageIndex].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-[#A3A3A3] hover:text-[#FAFAFA] flex items-center gap-1 underline"
                    >
                      Full Size <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Main Active Viewer */}
                  <div className="relative bg-[#000000] border border-[#262626] aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center overflow-hidden rounded-xs">
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
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-[#0A0A0A]/80 hover:bg-[#DC2626] text-[#FAFAFA] transition-colors rounded-xs"
                          aria-label="Previous Image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#0A0A0A]/80 hover:bg-[#DC2626] text-[#FAFAFA] transition-colors rounded-xs"
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
                          className={`relative w-16 h-12 flex-shrink-0 border-2 overflow-hidden rounded-xs ${
                            activeImageIndex === idx ? 'border-[#DC2626]' : 'border-[#333333] opacity-60'
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
                <div className="mb-8 border border-[#E5E5E5] bg-[#F5F5F5] p-4 rounded-xs">
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-3 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#DC2626]" />
                    Project Documents &amp; Blueprints
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
                        className="p-3 bg-[#FFFFFF] border border-[#D4D4D4] hover:border-[#0A0A0A] hover:shadow-xs transition-all flex items-center justify-between group text-left cursor-pointer rounded-xs"
                        title="Open Document in PDF Modal"
                      >
                        <div className="flex items-center gap-2.5 min-w-0 pr-2">
                          <span className="p-1.5 bg-[#0A0A0A] text-[#FAFAFA] text-[10px] font-mono font-bold flex-shrink-0 rounded-xs">
                            {doc.format}
                          </span>
                          <div className="min-w-0">
                            <span className="text-xs font-bold font-mono text-[#0A0A0A] block truncate group-hover:text-[#DC2626] transition-colors">
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

              {/* Scope & Methodology */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-2">
                    Project Overview &amp; Scope
                  </h4>
                  <p className="text-sm font-body text-[#1F2937] leading-relaxed bg-[#FFFFFF] p-4 border border-[#E5E5E5] rounded-xs">
                    {activeModalProject.summary}
                  </p>
                </div>

                {/* Technical Solutions & Methodology */}
                <div>
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-2">
                    Engineering Methodology &amp; Execution
                  </h4>
                  <ul className="space-y-2.5 text-sm text-[#1F2937]">
                    {activeModalProject.architectureAndSolution.map((sol, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 border-b border-[#F0F0F0] pb-2">
                        <CheckSquare className="w-4 h-4 text-[#DC2626] mt-0.5 flex-shrink-0" />
                        <span className="font-body leading-relaxed">{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Performance Metrics */}
                <div>
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-2">
                    Key Deliverables &amp; Metrics
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeModalProject.metrics.map((m, idx) => (
                      <div key={idx} className="border border-[#E5E5E5] p-3 bg-[#FFFFFF] rounded-xs">
                        <span className="text-[10px] text-[#525252] font-mono block uppercase font-bold">{m.label}</span>
                        <span className="text-sm font-bold text-[#0A0A0A] font-mono mt-1 block">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables & Tech Stack */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-2">
                      Key Deliverables
                    </h4>
                    <ul className="space-y-1.5 text-xs font-mono text-[#525252]">
                      {activeModalProject.deliverables.map((d, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="text-[#DC2626] font-bold">▪</span>
                          <span className="text-[#0A0A0A]">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-2">
                      Software &amp; Tools Used
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeModalProject.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-[#0A0A0A] text-[#FAFAFA] px-2.5 py-1 text-xs font-mono rounded-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Close Button Footer */}
              <div className="mt-8 pt-4 border-t border-[#E5E5E5] flex justify-end">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="btn-primary"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
