'use client';

import React, { useState } from 'react';
import { featuredProjects } from '../data/cv-data';
import { Project } from '../types';
import { Layers, CheckSquare, Calendar, MapPin, Building, ArrowRight, X, FileText, Image as ImageIcon, Download, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { usePdfModal } from '../context/PdfModalContext';

export const FeaturedProjects: React.FC = () => {
  const { openPdf } = usePdfModal();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const categories = [
    'ALL',
    'Planning & QS',
    'BIM & CAD',
    'Industrial & QC',
    'Government & Supervision',
    'Tender & Research'
  ];

  const filteredProjects = selectedCategory === 'ALL'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === selectedCategory);

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
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#0A0A0A] pb-6 mb-10 gap-6">
          <div>
            <span className="text-overline text-[#EF4444] font-bold block mb-1">
              // REKAM JEJAK &amp; PORTOFOLIO TEKNIS
            </span>
            <h2 className="text-headline text-[#0A0A0A]">
              PROYEK &amp; STUDI REKAYASA TEKNIS
            </h2>
          </div>

          <p className="text-sm text-[#525252] max-w-md font-body">
            Dokumentasi nyata gambar kerja Detailed Engineering Design (DED), Rencana Anggaran Biaya (RAB), pemodelan BIM Revit, pengawasan mutu lapangan, dan Kurva S.
          </p>
        </div>

        {/* Filter Chips Bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-editorial-elevated flex flex-col justify-between group cursor-pointer overflow-hidden p-0"
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
                        {project.mediaGallery.length} LAMPIRAN
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-[#E5E5E5]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#EF4444]" />
                      {project.period}
                    </span>
                    <span className="flex items-center gap-1 truncate max-w-[55%]">
                      <MapPin className="w-3.5 h-3.5 text-[#A3A3A3] flex-shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5">
                  {/* Title */}
                  <h3 className="font-display text-lg text-[#0A0A0A] leading-tight mb-2 group-hover:text-[#EF4444] transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Role & Client */}
                  <div className="text-xs font-mono text-[#525252] mb-3 space-y-1">
                    <div className="flex items-center gap-1.5 text-[#0A0A0A] font-bold">
                      <Building className="w-3.5 h-3.5 text-[#EF4444] flex-shrink-0" />
                      <span className="truncate">{project.role}</span>
                    </div>
                    <div className="text-[11px] text-[#737373] truncate">
                      Instansi/Klien: {project.clientOrInstitution}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-[#525252] mb-4 font-body line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Key Metrics / Highlights */}
                  <div className="bg-[#F5F5F5] border border-[#E5E5E5] p-3 mb-4 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#0A0A0A] font-bold block border-b border-[#E5E5E5] pb-1">
                      INDIKATOR KINERJA TEKNIS
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx}>
                          <span className="text-[10px] text-[#737373] block font-mono leading-tight">{m.label}:</span>
                          <span className="font-bold text-[#0A0A0A] font-mono block truncate">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-[#FAFAFA] border border-[#D4D4D4] px-2 py-0.5 text-[10px] font-mono text-[#0A0A0A]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="bg-[#E5E5E5] px-1.5 py-0.5 text-[10px] font-mono text-[#525252]">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-5 pb-5">
                <button
                  type="button"
                  className="w-full border-t-2 border-[#0A0A0A] pt-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#EF4444] transition-colors"
                >
                  <span>LIHAT DETAIL &amp; DOKUMEN TEKNIS</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for In-depth Project Details & Real Blueprints/Photos */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 bg-[#0A0A0A]/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <div className="bg-[#FAFAFA] border-4 border-[#0A0A0A] max-w-4xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 relative shadow-2xl my-auto">
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 bg-[#0A0A0A] text-[#FAFAFA] hover:bg-[#EF4444] transition-colors z-10"
                aria-label="Tutup Detail Proyek"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="border-b-2 border-[#0A0A0A] pb-4 mb-6 pr-12">
                <span className="text-overline text-[#EF4444] font-bold block">
                  {activeModalProject.category} // DOSSIER TEKNIS PROYEK
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-[#0A0A0A] mt-1">
                  {activeModalProject.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#525252] mt-2">
                  <span>Peran: <strong className="text-[#0A0A0A]">{activeModalProject.role}</strong></span>
                  <span>•</span>
                  <span>Klien / Instansi: <strong className="text-[#0A0A0A]">{activeModalProject.clientOrInstitution}</strong></span>
                  <span>•</span>
                  <span>Periode: <strong className="text-[#0A0A0A]">{activeModalProject.period}</strong></span>
                  <span>•</span>
                  <span>Lokasi: <strong className="text-[#0A0A0A]">{activeModalProject.location}</strong></span>
                </div>
              </div>

              {/* Gallery & Real Blueprints Showcase */}
              {activeModalProject.mediaGallery && activeModalProject.mediaGallery.length > 0 && (
                <div className="mb-8 border-2 border-[#0A0A0A] bg-[#121212] p-4 text-[#FAFAFA]">
                  <div className="flex items-center justify-between border-b border-[#333333] pb-2 mb-3">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#EF4444] flex items-center gap-1.5 uppercase">
                      <ImageIcon className="w-4 h-4" />
                      LAMPIRAN GAMBAR KERJA, DED &amp; BUKTI LAPANGAN ({activeImageIndex + 1} / {activeModalProject.mediaGallery.length})
                    </span>
                    <a
                      href={activeModalProject.mediaGallery[activeImageIndex].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-[#A3A3A3] hover:text-[#FAFAFA] flex items-center gap-1 underline"
                    >
                      Buka Gambar Asli <ExternalLink className="w-3 h-3" />
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
                          aria-label="Gambar Sebelumnya"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#0A0A0A]/80 hover:bg-[#EF4444] text-[#FAFAFA] transition-colors"
                          aria-label="Gambar Berikutnya"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Caption */}
                  <div className="mt-3">
                    <h5 className="font-mono text-sm font-bold text-[#FAFAFA]">
                      {activeModalProject.mediaGallery[activeImageIndex].title}
                    </h5>
                    {activeModalProject.mediaGallery[activeImageIndex].caption && (
                      <p className="text-xs text-[#A3A3A3] font-body mt-1 leading-relaxed">
                        {activeModalProject.mediaGallery[activeImageIndex].caption}
                      </p>
                    )}
                  </div>

                  {/* Thumbnail Strip */}
                  {activeModalProject.mediaGallery.length > 1 && (
                    <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-thin">
                      {activeModalProject.mediaGallery.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative flex-shrink-0 w-20 h-14 border-2 overflow-hidden transition-all ${
                            activeImageIndex === idx ? 'border-[#EF4444] scale-105' : 'border-[#333333] opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={img.url}
                            alt={img.title}
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
                    ARSIP DOKUMEN &amp; INSTRUMEN RESMI PROYEK (PDF)
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
                        title="Buka Dokumen di Modal PDF"
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
                                Ukuran Berkas: {doc.size}
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
                    RINGKASAN EKSEKUTIF &amp; TUJUAN PROYEK
                  </h4>
                  <p className="text-sm font-body text-[#0A0A0A] leading-relaxed bg-[#F5F5F5] p-4 border border-[#E5E5E5]">
                    {activeModalProject.summary}
                  </p>
                </div>

                {/* Technical Solutions & Methodology */}
                <div>
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-2">
                    METODOLOGI TEKNIS &amp; PENANGANAN DI LAPANGAN
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
                    TOLOK UKUR KINERJA &amp; METRIK KUALITAS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeModalProject.metrics.map((m, idx) => (
                      <div key={idx} className="border-2 border-[#0A0A0A] p-3 bg-[#FAFAFA]">
                        <span className="text-[10px] text-[#525252] font-mono block uppercase">{m.label}</span>
                        <span className="text-sm font-bold text-[#0A0A0A] font-mono mt-1 block">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables & Tech Stack */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-2">
                      PRODUK LUARAN &amp; DOKUMEN DISERAHKAN
                    </h4>
                    <ul className="space-y-1.5 text-xs font-mono text-[#525252]">
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
                      PERANGKAT LUNAK &amp; METODE REKAYASA
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
                  TUTUP DOSSIER
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
