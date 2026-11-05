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
    <section id="projects" className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-6 mb-8 gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                Field Works &amp; Consultancies
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-mono font-bold bg-slate-900 text-white px-2.5 py-0.5 rounded-full">
                {featuredProjects.length} Case Studies
              </span>
            </div>
            <h2 className="text-headline text-slate-900">
              FEATURED ENGINEERING PROJECTS
            </h2>
          </div>

          <p className="text-sm text-slate-600 max-w-md leading-relaxed">
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
              <span className="ml-1.5 opacity-70 text-xs font-mono">({getCategoryCount(cat)})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-pro-elevated flex flex-col justify-between group cursor-pointer overflow-hidden p-0 rounded-xl border border-slate-200 hover:border-slate-300 bg-white shadow-xs hover:shadow-lg transition-all"
              onClick={() => openProjectModal(project)}
            >
              <div>
                {/* Visual Thumbnail Header */}
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  {project.coverImage ? (
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 font-mono text-xs">
                      [Engineering Blueprint]
                    </div>
                  )}

                  <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md backdrop-blur-xs shadow-xs">
                    {project.category}
                  </div>

                  <div className="absolute top-3 right-3 bg-white/95 text-slate-900 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md backdrop-blur-xs shadow-xs">
                    {project.period}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  <div>
                    <span className="text-[11px] font-mono text-blue-600 uppercase font-bold tracking-wider block mb-1">
                      {project.role}
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
                    {project.summary}
                  </p>

                  {/* Highlights Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md border border-slate-200/60 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[11px] font-mono text-slate-400 py-0.5 font-medium">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs font-mono group-hover:bg-slate-50 transition-colors">
                <span className="text-slate-500 flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {project.location.split(',')[0]}
                </span>
                <span className="font-bold text-slate-900 group-hover:text-blue-600 flex items-center gap-1 transition-colors">
                  Case Details <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 print:hidden"
            role="dialog"
            aria-modal="true"
            aria-label={activeModalProject.title}
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className="bg-white border border-slate-200 w-full max-w-4xl max-h-[92vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors rounded-full"
                aria-label="Close Project Details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="border-b border-slate-100 pb-5 mb-6 pr-10">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-mono font-bold rounded-md border border-blue-100 mb-2">
                  <span>{activeModalProject.category}</span>
                  <span>•</span>
                  <span>CASE STUDY</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {activeModalProject.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 mt-3">
                  <span>Role: <strong className="text-slate-900 font-semibold">{activeModalProject.role}</strong></span>
                  <span>•</span>
                  <span>Client / Institution: <strong className="text-slate-900 font-semibold">{activeModalProject.clientOrInstitution}</strong></span>
                  <span>•</span>
                  <span>Period: <strong className="text-slate-900 font-semibold">{activeModalProject.period}</strong></span>
                  <span>•</span>
                  <span>Location: <strong className="text-slate-900 font-semibold">{activeModalProject.location}</strong></span>
                </div>
              </div>

              {/* Gallery & Real Blueprints Showcase */}
              {activeModalProject.mediaGallery && activeModalProject.mediaGallery.length > 0 && (
                <div className="mb-8 border border-slate-800 bg-slate-950 p-4 text-white rounded-xl shadow-inner">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3">
                    <span className="text-xs font-mono font-semibold tracking-wider text-blue-400 flex items-center gap-2 uppercase">
                      <ImageIcon className="w-4 h-4 text-blue-400" />
                      Engineering Drawings &amp; Field Records ({activeImageIndex + 1} / {activeModalProject.mediaGallery.length})
                    </span>
                    <a
                      href={activeModalProject.mediaGallery[activeImageIndex].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 underline"
                    >
                      View Original <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Main Active Viewer */}
                  <div className="relative bg-black rounded-lg aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center overflow-hidden">
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
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 hover:bg-blue-600 text-white rounded-full transition-colors shadow-md"
                          aria-label="Previous Image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 hover:bg-blue-600 text-white rounded-full transition-colors shadow-md"
                          aria-label="Next Image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Caption & Title */}
                  <div className="mt-3.5">
                    <h4 className="font-display text-sm font-bold text-white">
                      {activeModalProject.mediaGallery[activeImageIndex].title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
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
                          className={`relative w-16 h-12 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                            activeImageIndex === idx ? 'border-blue-500 scale-105' : 'border-slate-800 opacity-60 hover:opacity-100'
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
                <div className="mb-8 border border-slate-200 bg-slate-50/70 p-5 rounded-xl">
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    Verified Project Documents &amp; Blueprints
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
                        className="p-3.5 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xs rounded-lg transition-all flex items-center justify-between group text-left cursor-pointer"
                        title="Open Document in PDF Modal"
                      >
                        <div className="flex items-center gap-3 min-w-0 pr-2">
                          <span className="p-1.5 bg-slate-900 text-white text-[10px] font-mono font-bold rounded flex-shrink-0">
                            {doc.format}
                          </span>
                          <div className="min-w-0">
                            <span className="text-xs font-semibold text-slate-900 block truncate group-hover:text-blue-600 transition-colors">
                              {doc.name}
                            </span>
                            {doc.size && (
                              <span className="text-[11px] text-slate-500 font-mono block">
                                Size: {doc.size}
                              </span>
                            )}
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900 flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Scope & Methodology */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-slate-900 mb-2">
                    Project Overview &amp; Scope
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 border border-slate-200/80 rounded-xl">
                    {activeModalProject.summary}
                  </p>
                </div>

                {/* Technical Solutions & Methodology */}
                <div>
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-slate-900 mb-2.5">
                    Engineering Methodology &amp; Execution
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {activeModalProject.architectureAndSolution.map((sol, idx) => (
                      <li key={idx} className="flex items-start gap-3 border-b border-slate-100 pb-2.5">
                        <CheckSquare className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Performance Metrics */}
                <div>
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-slate-900 mb-2.5">
                    Key Deliverables &amp; Technical Metrics
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeModalProject.metrics.map((m, idx) => (
                      <div key={idx} className="border border-slate-200 p-3.5 bg-slate-50/50 rounded-xl">
                        <span className="text-[11px] text-slate-500 font-mono block uppercase font-medium">{m.label}</span>
                        <span className="text-sm font-bold text-slate-900 font-mono mt-1 block">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables & Tech Stack */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-slate-900 mb-2">
                      Key Deliverables
                    </h4>
                    <ul className="space-y-1.5 text-xs font-mono text-slate-600">
                      {activeModalProject.deliverables.map((d, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-blue-600 font-bold">•</span>
                          <span className="text-slate-800">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-slate-900 mb-2">
                      Software &amp; Tools Used
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeModalProject.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100 text-slate-800 px-2.5 py-1 text-xs font-mono rounded-md border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Close Button Footer */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="btn-primary"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
