'use client';

import React from 'react';
import { educationHistory, certifications } from '../data/cv-data';
import { GraduationCap, Award, CheckCircle2, Calendar, MapPin } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="edukasi" className="py-20 border-b-2 border-[#0A0A0A] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-overline text-[#EF4444] font-bold block mb-1">
              // KREDENSIAL AKADEMIK & LISENSI RESMI
            </span>
            <h2 className="text-headline text-[#0A0A0A]">
              EDUKASI & SERTIFIKASI PROFESIONAL
            </h2>
          </div>

          <p className="text-sm text-[#525252] max-w-md font-body">
            Landasan teoretis teknik sipil yang kokoh didukung sertifikasi resmi BNSP jenjang 5 serta kualifikasi konstruksi internasional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Education */}
          <div className="lg:col-span-6 space-y-6">
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
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>

                  <h4 className="font-display text-lg text-[#0A0A0A]">
                    {edu.degree} {edu.field}
                  </h4>
                  <p className="text-sm font-semibold text-[#525252] font-body mt-0.5">
                    {edu.institution}
                  </p>

                  {edu.gpa && (
                    <div className="mt-3 inline-block bg-[#0A0A0A] text-[#FAFAFA] px-3 py-1 text-xs font-mono font-bold">
                      IPK: {edu.gpa} (Predikat Sangat Memuaskan)
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
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 border-b-2 border-[#0A0A0A] pb-3">
              <Award className="w-5 h-5 text-[#EF4444]" />
              <h3 className="font-display text-lg text-[#0A0A0A]">
                SERTIFIKASI & LISENSI KOMPETENSI
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="card-editorial hover:border-[#0A0A0A] transition-colors p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono font-bold text-[#16A34A] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {cert.year}
                      </span>
                      {cert.levelOrScore && (
                        <span className="text-[10px] font-mono bg-[#0A0A0A] text-[#FAFAFA] px-2 py-0.5">
                          {cert.levelOrScore}
                        </span>
                      )}
                    </div>

                    <h4 className="font-display text-sm sm:text-base text-[#0A0A0A] leading-snug">
                      {cert.name}
                    </h4>

                    <p className="text-xs text-[#525252] font-body mt-2">
                      Penerbit: <strong className="text-[#0A0A0A]">{cert.issuer}</strong>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
