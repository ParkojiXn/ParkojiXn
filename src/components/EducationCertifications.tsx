'use client';

import React, { useState } from 'react';
import { educationHistory, certifications } from '../data/cv-data';
import { Certification } from '../types';
import { GraduationCap, Award, CheckCircle2, Calendar, MapPin, FileText, ExternalLink, X } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  const [activePdfPreview, setActivePdfPreview] = useState<string | null>(null);
  const [activePdfTitle, setActivePdfTitle] = useState<string>('');

  const openPdfViewer = (url: string, title: string) => {
    setActivePdfPreview(url);
    setActivePdfTitle(title);
  };

  return (
    <section id="education" className="py-20 border-b-2 border-[#0A0A0A] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-overline text-[#EF4444] font-bold block mb-1">
              // KREDENSIAL AKADEMIK &amp; LISENSI RESMI
            </span>
            <h2 className="text-headline text-[#0A0A0A]">
              PENDIDIKAN &amp; LISENSI SERTIFIKASI
            </h2>
          </div>

          <p className="text-sm text-[#525252] max-w-md font-body">
            Fondasi akademik teknik sipil berpredikat Dengan Pujian (IPK 3,72) yang diperkuat sertifikasi kompetensi negara BNSP Jenjang 5 serta sertifikasi berstandar Jepang.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Education */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 border-b-2 border-[#0A0A0A] pb-3">
              <GraduationCap className="w-5 h-5 text-[#EF4444]" />
              <h3 className="font-display text-lg text-[#0A0A0A]">
                RIWAYAT PENDIDIKAN FORMAL
              </h3>
            </div>

            <div className="space-y-6">
              {educationHistory.map((edu, idx) => (
                <div key={idx} className="card-editorial relative">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#525252] mb-2 border-b border-[#E5E5E5] pb-2">
                    <span className="flex items-center gap-1 font-bold text-[#0A0A0A]">
                      <Calendar className="w-3.5 h-3.5 text-[#EF4444]" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>

                  <h4 className="font-display text-lg text-[#0A0A0A]">
                    {edu.degree} — {edu.field}
                  </h4>
                  <p className="text-sm font-semibold text-[#525252] font-body mt-0.5">
                    {edu.institution}
                  </p>

                  {edu.gpa && (
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <div className="bg-[#0A0A0A] text-[#FAFAFA] px-3 py-1 text-xs font-mono font-bold">
                        IPK: {edu.gpa} (Dengan Pujian / High Honors)
                      </div>
                      {edu.transcriptUrl && (
                        <a
                          href={edu.transcriptUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-[#EF4444] text-[#FAFAFA] hover:bg-[#DC2626] px-2.5 py-1 text-xs font-mono font-bold transition-colors"
                        >
                          <FileText className="w-3 h-3" />
                          <span>LIHAT TRANSKRIP (PDF)</span>
                        </a>
                      )}
                    </div>
                  )}

                  {edu.details && (
                    <ul className="mt-4 pt-3 border-t border-[#E5E5E5] space-y-2 text-xs font-body text-[#525252]">
                      {edu.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="text-[#EF4444] font-bold">▪</span>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between border-b-2 border-[#0A0A0A] pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#EF4444]" />
                <h3 className="font-display text-lg text-[#0A0A0A]">
                  LISENSI SERTIFIKASI PROFESIONAL ({certifications.length})
                </h3>
              </div>
              <span className="text-xs font-mono text-[#525252]">
                DOKUMEN ASLI DAPAT DIUNDUH
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="card-editorial hover:border-[#0A0A0A] transition-all p-4 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Status */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono font-bold text-[#16A34A] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{cert.year}</span>
                      </span>
                      {cert.levelOrScore && (
                        <span className="text-[10px] font-mono bg-[#0A0A0A] text-[#FAFAFA] px-2 py-0.5 whitespace-nowrap">
                          {cert.levelOrScore}
                        </span>
                      )}
                    </div>

                    {/* Certificate Name */}
                    <h4 className="font-display text-sm sm:text-base text-[#0A0A0A] leading-snug group-hover:text-[#EF4444] transition-colors">
                      {cert.name}
                    </h4>

                    {/* Issuer */}
                    <p className="text-xs text-[#525252] font-body mt-2 leading-relaxed">
                      Penerbit: <strong className="text-[#0A0A0A]">{cert.issuer}</strong>
                    </p>

                    {/* Description */}
                    {cert.description && (
                      <p className="text-xs text-[#737373] font-body mt-2 border-t border-[#E5E5E5] pt-2 line-clamp-2">
                        {cert.description}
                      </p>
                    )}
                  </div>

                  {/* PDF Download / View Button */}
                  {cert.verificationFile && (
                    <div className="mt-4 pt-3 border-t border-[#E5E5E5]">
                      <a
                        href={cert.verificationFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-3 border border-[#0A0A0A] bg-[#FAFAFA] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] text-xs font-mono font-bold flex items-center justify-between transition-colors group-hover:border-[#EF4444]"
                      >
                        <span className="flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-[#EF4444]" />
                          <span>BUKA SERTIFIKAT (PDF)</span>
                        </span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
