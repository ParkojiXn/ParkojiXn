'use client';

import React, { useState } from 'react';
import { featuredProjects } from '../data/cv-data';
import { Project } from '../types';
import { Layers, CheckSquare, Calendar, MapPin, Building, ArrowRight, X } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('SEMUA');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['SEMUA', 'Planning & QS', 'BIM & CAD', 'Industrial & QC', 'Tender & Research'];

  const filteredProjects = selectedCategory === 'SEMUA'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="proyek" className="py-20 border-b-2 border-[#0A0A0A] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#0A0A0A] pb-6 mb-10 gap-6">
          <div>
            <span className="text-overline text-[#EF4444] font-bold block mb-1">
              // REKAM JEJAK TEKNIS & HASIL KARYA
            </span>
            <h2 className="text-headline text-[#0A0A0A]">
              PROYEK & STUDI PERENCANAAN
            </h2>
          </div>

          <p className="text-sm text-[#525252] max-w-md font-body">
            Dokumentasi rekayasa konstruksi, Detailed Engineering Design (DED), kalkulasi Rencana Anggaran Biaya (RAB), dan pemodelan struktur berdasarkan data riil.
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
              className="card-editorial-elevated flex flex-col justify-between group cursor-pointer"
              onClick={() => setActiveModalProject(project)}
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-mono text-[#525252] mb-3 border-b border-[#E5E5E5] pb-2">
                  <span className="uppercase text-[#0A0A0A] font-bold tracking-wider">
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg text-[#0A0A0A] leading-tight mb-2 group-hover:text-[#EF4444] transition-colors">
                  {project.title}
                </h3>

                {/* Role & Client */}
                <div className="text-xs font-mono text-[#525252] mb-4 space-y-1">
                  <div className="flex items-center gap-1.5 text-[#0A0A0A] font-bold">
                    <Building className="w-3.5 h-3.5 text-[#EF4444]" />
                    <span>{project.role}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-[#525252] mb-5 font-body line-clamp-3">
                  {project.summary}
                </p>

                {/* Key Metrics / Highlights */}
                <div className="bg-[#F5F5F5] border border-[#E5E5E5] p-3 mb-5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#0A0A0A] font-bold block border-b border-[#E5E5E5] pb-1">
                    METRIK UTAMA PROYEK
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx}>
                        <span className="text-[10px] text-[#525252] block">{m.label}:</span>
                        <span className="font-bold text-[#0A0A0A] font-mono block">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#FAFAFA] border border-[#D4D4D4] px-2 py-0.5 text-[11px] font-mono text-[#0A0A0A]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Read Detail Action */}
                <button
                  type="button"
                  className="w-full border-t-2 border-[#0A0A0A] pt-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0A0A0A] group-hover:text-[#EF4444] transition-colors"
                >
                  <span>LIHAT RINCIAN TEKNIS</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for In-depth Project Details */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#FAFAFA] border-4 border-[#0A0A0A] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 bg-[#0A0A0A] text-[#FAFAFA] hover:bg-[#EF4444] transition-colors"
                aria-label="Tutup Rincian"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="border-b-2 border-[#0A0A0A] pb-4 mb-6 pr-12">
                <span className="text-overline text-[#EF4444] font-bold block">
                  {activeModalProject.category} // DOKUMEN PROYEK
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-[#0A0A0A] mt-1">
                  {activeModalProject.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#525252] mt-2">
                  <span>Peran: <strong className="text-[#0A0A0A]">{activeModalProject.role}</strong></span>
                  <span>•</span>
                  <span>Institusi: <strong className="text-[#0A0A0A]">{activeModalProject.clientOrInstitution}</strong></span>
                  <span>•</span>
                  <span>Periode: <strong className="text-[#0A0A0A]">{activeModalProject.period}</strong></span>
                </div>
              </div>

              {/* Ringkasan */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-2">
                    RINGKASAN EKSEKUTIF
                  </h4>
                  <p className="text-sm font-body text-[#0A0A0A] leading-relaxed bg-[#F5F5F5] p-4 border border-[#E5E5E5]">
                    {activeModalProject.summary}
                  </p>
                </div>

                {/* Arsitektur Solusi & Metodologi */}
                <div>
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-2">
                    SOLUSI TEKNIS & METODE PELAKSANAAN
                  </h4>
                  <ul className="space-y-2 text-sm text-[#0A0A0A]">
                    {activeModalProject.architectureAndSolution.map((sol, idx) => (
                      <li key={idx} className="flex items-start gap-2 border-b border-[#E5E5E5] pb-2">
                        <CheckSquare className="w-4 h-4 text-[#EF4444] mt-0.5 flex-shrink-0" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrik Terukur */}
                <div>
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-2">
                    PENCAPAIAN & METRIK KUALITAS
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
                      PRODUK DOKUMEN / OUTPUT
                    </h4>
                    <ul className="space-y-1 text-xs font-mono text-[#525252]">
                      {activeModalProject.deliverables.map((d, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="text-[#EF4444]">▪</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#0A0A0A] mb-2">
                      PERANGKAT LUNAK & INSTRUMEN
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
                  TUTUP RINCIAN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
