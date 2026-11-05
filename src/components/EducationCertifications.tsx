'use client';

import React from 'react';
import { educationHistory, certifications } from '../data/cv-data';
import { GraduationCap, Award, CheckCircle2, Calendar, MapPin, FileText, ExternalLink, ShieldCheck } from 'lucide-react';
import { usePdfModal } from '../context/PdfModalContext';

export const EducationCertifications: React.FC = () => {
  const { openPdf } = usePdfModal();

  const flagshipCert = certifications[0];
  const remainingCerts = certifications.slice(1);

  const getCertCategoryBadge = (name: string) => {
    if (name.includes('Revit')) return 'BIM & CAD';
    if (name.includes('SSW') || name.includes('Specified')) return 'INTERNATIONAL SPECIFICATION';
    if (name.includes('JFT') || name.includes('JLPT')) return 'JAPANESE BILINGUAL';
    if (name.includes('PKL') || name.includes('Internship')) return 'INDUSTRIAL EPC';
    if (name.includes('TOEIC')) return 'ENGLISH (TOEIC)';
    if (name.includes('Transcript') || name.includes('Transkrip')) return 'ACADEMIC RECORD';
    return 'CERTIFICATION';
  };

  return (
    <section id="education" className="py-20 lg:py-24 border-b-2 border-[#0A0A0A] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="border-b-2 border-[#E5E5E5] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[11px] font-mono font-bold text-[#EF4444] uppercase tracking-widest block mb-2">
              Credentials &amp; Institutional Record
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#0A0A0A] uppercase tracking-tight">
              EDUCATION &amp; LICENSING
            </h2>
            <div className="h-1 w-16 bg-[#EF4444] mt-3" />
          </div>

          <p className="text-sm font-sans text-[#525252] max-w-lg leading-relaxed">
            Rigorous civil engineering foundations from Politeknik Negeri Padang (GPA 3.72 Magna Cum Laude), backed by national BNSP Level 5 site supervisor licensing, BIM Revit certification, and Japanese construction industry qualifications.
          </p>
        </div>

        {/* 1. Flagship State License Showcase (VoiceBox Elevated Card: 4px Red Top Border) */}
        {flagshipCert && (
          <div>
            <div className="flex items-center gap-3 border-b-2 border-[#0A0A0A] pb-3 mb-6">
              <ShieldCheck className="w-5 h-5 text-[#EF4444]" />
              <h3 className="font-display text-lg sm:text-xl text-[#0A0A0A] uppercase tracking-tight">
                PRIMARY STATE COMPETENCY LICENSE
              </h3>
            </div>

            <div className="border-t-4 border-[#EF4444] border-2 border-[#0A0A0A] bg-[#FAFAFA] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#E5E5E5] pb-4 mb-6">
                <span className="px-3 py-1 bg-[#0A0A0A] text-[#FAFAFA] text-xs font-mono font-bold uppercase tracking-wider">
                  KKNI LEVEL 5
                </span>
                <span className="text-xs font-mono font-bold text-[#16A34A] bg-[#F0FDF4] border-2 border-[#16A34A] px-3.5 py-1 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  BNSP &amp; KEMENTERIAN PUPR ACCREDITED
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <h4 className="font-display text-xl sm:text-2xl text-[#0A0A0A] uppercase tracking-tight leading-snug">
                    {flagshipCert.name}
                  </h4>
                  <p className="text-xs font-mono font-bold text-[#EF4444] uppercase tracking-wider">
                    {flagshipCert.levelOrScore} • {flagshipCert.issuer}
                  </p>
                  <p className="text-sm font-sans text-[#525252] leading-relaxed">
                    {flagshipCert.description}
                  </p>
                </div>

                {flagshipCert.verificationFile && (
                  <button
                    type="button"
                    onClick={() => openPdf(flagshipCert.verificationFile!, flagshipCert.name)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0A0A0A] text-[#FAFAFA] border-2 border-[#0A0A0A] hover:bg-[#EF4444] hover:border-[#EF4444] text-xs font-mono font-bold uppercase tracking-wider transition-colors flex-shrink-0 cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View BNSP Certificate</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 2. Formal Higher Education */}
        <div>
          <div className="flex items-center gap-3 border-b-2 border-[#0A0A0A] pb-3 mb-6">
            <GraduationCap className="w-5 h-5 text-[#EF4444]" />
            <h3 className="font-display text-lg sm:text-xl text-[#0A0A0A] uppercase tracking-tight">
              FORMAL HIGHER EDUCATION
            </h3>
          </div>

          <div className="space-y-8">
            {educationHistory.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-[#FAFAFA] border-2 border-[#E5E5E5] hover:border-[#0A0A0A] transition-colors"
              >
                {/* Top Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b-2 border-[#E5E5E5] pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 font-bold text-[#0A0A0A]">
                      <Calendar className="w-3.5 h-3.5 text-[#EF4444]" />
                      {edu.period}
                    </span>
                    <span className="text-[#D4D4D4]">•</span>
                    <span className="flex items-center gap-1.5 text-[#525252]">
                      <MapPin className="w-3.5 h-3.5 text-[#0A0A0A]" />
                      {edu.location}
                    </span>
                  </div>

                  {edu.isOngoing ? (
                    <span className="text-xs font-bold font-mono text-[#0A0A0A] bg-[#F5F5F5] px-3 py-1 border-2 border-[#0A0A0A] uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-[#EF4444] inline-block" />
                      STATUS: IN PROGRESS
                    </span>
                  ) : (
                    <span className="text-xs font-bold font-mono text-[#16A34A] bg-[#F0FDF4] px-3 py-1 border-2 border-[#16A34A] uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                      {edu.status || 'STATUS: GRADUATED'}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Program & Honors */}
                  <div className="lg:col-span-7 space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#EF4444] font-bold block">
                      {edu.isOngoing
                        ? 'ADVANCED VOCATIONAL DEGREE (D4 / APPLIED S1)'
                        : 'COMPLETED HIGHER EDUCATION IN CIVIL ENGINEERING'}
                    </span>
                    <h4 className="font-display text-xl sm:text-2xl text-[#0A0A0A] uppercase tracking-tight leading-tight">
                      {edu.degree} — {edu.field}
                    </h4>
                    <p className="text-sm font-sans font-semibold text-[#525252]">
                      {edu.institution}
                    </p>

                    {edu.gpa && (
                      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#0A0A0A] text-[#FAFAFA] text-xs font-mono font-bold uppercase tracking-wider mt-2">
                        <span>CUMULATIVE GPA: {edu.gpa}</span>
                        <span className="text-[#EF4444]">•</span>
                        <span>MAGNA CUM LAUDE</span>
                      </div>
                    )}
                  </div>

                  {/* Right: Key Milestones / Thesis */}
                  <div className="lg:col-span-5 bg-[#F5F5F5] border-2 border-[#E5E5E5] p-5 text-xs font-sans text-[#0A0A0A] space-y-3">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0A0A0A] block border-b-2 border-[#E5E5E5] pb-2">
                      Academic Focus &amp; Capstone
                    </span>
                    {edu.details && edu.details.length > 0 ? (
                      <ul className="space-y-2">
                        {edu.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-[#EF4444] font-bold mt-0.5">■</span>
                            <span className="text-[#525252]">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="leading-relaxed text-[#525252]">
                        Foundational study in engineering mathematics, structural mechanics, soil mechanics, and hydrology.
                      </p>
                    )}

                    {edu.transcriptUrl && (
                      <div className="pt-3 border-t-2 border-[#E5E5E5]">
                        <button
                          type="button"
                          onClick={() => openPdf(edu.transcriptUrl!, 'Academic Transcript - Politeknik Negeri Padang')}
                          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0A] hover:text-[#EF4444] transition-colors cursor-pointer"
                        >
                          <FileText className="w-4 h-4 text-[#EF4444]" />
                          <span>View Official Transcript (PDF)</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Professional Certifications Grid */}
        <div>
          <div className="flex items-center gap-3 border-b-2 border-[#0A0A0A] pb-3 mb-6">
            <Award className="w-5 h-5 text-[#EF4444]" />
            <h3 className="font-display text-lg sm:text-xl text-[#0A0A0A] uppercase tracking-tight">
              PROFESSIONAL CREDENTIALS &amp; CERTIFICATIONS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {remainingCerts.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#FAFAFA] border-2 border-[#E5E5E5] hover:border-[#0A0A0A] flex flex-col justify-between transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between border-b-2 border-[#E5E5E5] pb-3 mb-3">
                    <span className="text-[10px] font-mono font-bold text-[#0A0A0A] uppercase bg-[#F5F5F5] px-2 py-0.5 border border-[#D4D4D4]">
                      {getCertCategoryBadge(cert.name)}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#EF4444]">
                      {cert.year}
                    </span>
                  </div>

                  <h5 className="font-display text-sm sm:text-base text-[#0A0A0A] group-hover:text-[#EF4444] transition-colors leading-snug uppercase tracking-tight mb-2">
                    {cert.name}
                  </h5>

                  <p className="text-xs font-mono font-bold text-[#525252] uppercase mb-2">
                    {cert.levelOrScore}
                  </p>

                  <p className="text-xs font-sans text-[#525252] leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t-2 border-[#E5E5E5]">
                  {cert.files && cert.files.length > 0 ? (
                    <div className="space-y-2">
                      {cert.files.map((f, fIdx) => (
                        <button
                          key={fIdx}
                          type="button"
                          onClick={() => openPdf(f.url, f.name)}
                          className="w-full text-left py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0A] hover:text-[#EF4444] transition-colors flex items-center justify-between group/btn cursor-pointer"
                        >
                          <span className="truncate">{f.name}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#525252] group-hover/btn:text-[#EF4444] flex-shrink-0" />
                        </button>
                      ))}
                    </div>
                  ) : cert.verificationFile ? (
                    <button
                      type="button"
                      onClick={() => openPdf(cert.verificationFile!, cert.name)}
                      className="w-full text-left py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0A] hover:text-[#EF4444] transition-colors flex items-center justify-between group/btn cursor-pointer"
                    >
                      <span>View Credential (PDF)</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#525252] group-hover/btn:text-[#EF4444]" />
                    </button>
                  ) : (
                    <span className="text-[11px] font-mono text-[#525252] uppercase font-semibold">Verified Credential</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
