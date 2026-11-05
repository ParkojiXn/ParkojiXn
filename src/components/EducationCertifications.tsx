'use client';

import React from 'react';
import { educationHistory, certifications } from '../data/cv-data';
import { GraduationCap, Award, CheckCircle2, Calendar, MapPin, FileText, ExternalLink } from 'lucide-react';
import { usePdfModal } from '../context/PdfModalContext';

export const EducationCertifications: React.FC = () => {
  const { openPdf } = usePdfModal();

  const flagshipCert = certifications[0];
  const remainingCerts = certifications.slice(1);

  const getCertCategoryBadge = (name: string) => {
    if (name.includes('Revit')) return 'BIM & CAD';
    if (name.includes('SSW') || name.includes('Specified')) return 'INTERNATIONAL';
    if (name.includes('JFT') || name.includes('JLPT')) return 'JAPANESE BILINGUAL';
    if (name.includes('PKL') || name.includes('Internship')) return 'INDUSTRIAL EPC';
    if (name.includes('TOEIC')) return 'ENGLISH (TOEIC)';
    if (name.includes('Transcript') || name.includes('Transkrip')) return 'ACADEMIC';
    return 'CERTIFICATION';
  };

  return (
    <section id="education" className="py-16 sm:py-20 border-b border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="border-b border-[#0A0A0A] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-overline text-[#DC2626] font-bold block mb-1">
              Academic Degrees &amp; Professional Licensing
            </span>
            <h2 className="text-headline text-[#0A0A0A]">
              EDUCATION &amp; CERTIFICATIONS
            </h2>
          </div>

          <p className="text-sm text-[#525252] max-w-lg font-body leading-relaxed">
            Civil engineering academic foundations from Politeknik Negeri Padang (GPA 3.72), reinforced by national BNSP Level 5 site supervisor licensing, BIM Revit certification, and Japanese construction industry qualifications.
          </p>
        </div>

        {/* 1. Formal Higher Education */}
        <div>
          <div className="flex items-center gap-2 border-b border-[#0A0A0A] pb-3 mb-6">
            <GraduationCap className="w-5 h-5 text-[#DC2626]" />
            <h3 className="font-display text-lg sm:text-xl text-[#0A0A0A]">
              FORMAL HIGHER EDUCATION
            </h3>
          </div>

          <div className="space-y-6">
            {educationHistory.map((edu, idx) => (
              <div
                key={idx}
                className="card-editorial p-6 sm:p-8 bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#0A0A0A] shadow-xs relative overflow-hidden page-break-avoid rounded-xs"
              >
                {/* Top Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-[#F0F0F0] pb-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 font-bold text-[#0A0A0A]">
                      <Calendar className="w-3.5 h-3.5 text-[#DC2626]" />
                      {edu.period}
                    </span>
                    <span className="text-[#D4D4D4]">•</span>
                    <span className="flex items-center gap-1 text-[#525252]">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>

                  {edu.isOngoing ? (
                    <span className="text-[11px] font-bold font-mono text-[#DC2626] bg-[#FEF2F2] px-2.5 py-1 border border-[#FECACA] flex items-center gap-1.5 rounded-xs">
                      <span className="w-2 h-2 bg-[#DC2626] rounded-full inline-block animate-pulse" />
                      STATUS: IN PROGRESS
                    </span>
                  ) : (
                    <span className="text-[11px] font-bold font-mono text-[#16A34A] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {edu.status || 'STATUS: GRADUATED'}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Program & Honors */}
                  <div className="lg:col-span-7 space-y-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#DC2626] font-bold">
                      {edu.isOngoing
                        ? 'ADVANCED VOCATIONAL DEGREE'
                        : 'COMPLETED HIGHER EDUCATION IN CIVIL ENGINEERING'}
                    </span>
                    <h4 className="font-display text-xl sm:text-2xl text-[#0A0A0A] leading-tight">
                      {edu.degree} — {edu.field}
                    </h4>
                    <p className="text-base font-semibold text-[#374151] font-body">
                      {edu.institution}
                    </p>

                    {edu.gpa && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A0A0A] text-[#FAFAFA] text-xs font-mono font-bold rounded-xs">
                        <span>CUMULATIVE GPA: {edu.gpa}</span>
                        <span className="text-[#DC2626]">•</span>
                        <span>WITH HONORS</span>
                      </div>
                    )}
                  </div>

                  {/* Right: Key Milestones / Thesis */}
                  <div className="lg:col-span-5 bg-[#F9FAFB] border border-[#E5E5E5] p-4 text-xs font-body text-[#374151] space-y-2 rounded-xs">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#0A0A0A] block border-b border-[#E5E5E5] pb-1.5">
                      Academic Focus &amp; Competitions
                    </span>
                    {edu.details && edu.details.length > 0 ? (
                      <ul className="space-y-1.5">
                        {edu.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-1.5 leading-relaxed">
                            <span className="text-[#DC2626] font-bold mt-0.5">▪</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="leading-relaxed text-[#737373]">
                        Foundational study in mathematics, physics, and basic engineering sciences.
                      </p>
                    )}

                    {edu.transcriptUrl && (
                      <div className="pt-2 border-t border-[#E5E5E5] mt-2">
                        <button
                          type="button"
                          onClick={() => openPdf(edu.transcriptUrl!, 'Academic Transcript - Politeknik Negeri Padang')}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0A0A0A] hover:text-[#DC2626] transition-colors"
                        >
                          <FileText className="w-3.5 h-3.5 text-[#DC2626]" />
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

        {/* 2. Professional Certifications & State Licenses */}
        <div>
          <div className="flex items-center gap-2 border-b border-[#0A0A0A] pb-3 mb-6">
            <Award className="w-5 h-5 text-[#DC2626]" />
            <h3 className="font-display text-lg sm:text-xl text-[#0A0A0A]">
              PROFESSIONAL CERTIFICATIONS &amp; LICENSES
            </h3>
          </div>

          {/* Flagship BNSP License Card */}
          {flagshipCert && (
            <div className="mb-6 card-editorial-elevated p-6 sm:p-8 bg-[#FFFFFF] border border-[#0A0A0A] border-t-4 border-t-[#DC2626] rounded-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F0F0F0] pb-3 mb-4">
                <span className="px-2.5 py-1 bg-[#0A0A0A] text-[#FAFAFA] text-[10px] font-mono font-bold uppercase tracking-wider rounded-xs">
                  FLAGSHIP STATE LICENSE
                </span>
                <span className="text-xs font-mono font-bold text-[#16A34A] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  BNSP &amp; KEMENTERIAN PUPR CERTIFIED
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <h4 className="font-display text-xl sm:text-2xl text-[#0A0A0A] leading-tight">
                    {flagshipCert.name}
                  </h4>
                  <p className="text-sm font-semibold text-[#DC2626] font-mono">
                    {flagshipCert.levelOrScore} • {flagshipCert.issuer}
                  </p>
                  <p className="text-xs sm:text-sm text-[#525252] font-body leading-relaxed">
                    {flagshipCert.description}
                  </p>
                </div>

                {flagshipCert.verificationFile && (
                  <button
                    type="button"
                    onClick={() => openPdf(flagshipCert.verificationFile!, flagshipCert.name)}
                    className="btn-primary text-xs flex-shrink-0"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View BNSP Certificate</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Remaining Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {remainingCerts.map((cert, idx) => (
              <div
                key={idx}
                className="card-editorial p-5 bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#0A0A0A] flex flex-col justify-between transition-all group rounded-xs shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#F0F0F0] pb-2.5 mb-3">
                    <span className="text-[10px] font-mono font-bold text-[#525252] uppercase bg-[#F3F4F6] px-2 py-0.5 border border-[#E5E5E5] rounded-xs">
                      {getCertCategoryBadge(cert.name)}
                    </span>
                    <span className="text-[10px] font-mono text-[#737373]">
                      {cert.year}
                    </span>
                  </div>

                  <h5 className="font-display text-sm sm:text-base text-[#0A0A0A] group-hover:text-[#DC2626] transition-colors leading-snug mb-1">
                    {cert.name}
                  </h5>

                  <p className="text-xs font-mono font-bold text-[#DC2626] mb-2">
                    {cert.levelOrScore}
                  </p>

                  <p className="text-xs text-[#525252] font-body leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0F0F0]">
                  {cert.files && cert.files.length > 0 ? (
                    <div className="space-y-1.5">
                      {cert.files.map((f, fIdx) => (
                        <button
                          key={fIdx}
                          type="button"
                          onClick={() => openPdf(f.url, f.name)}
                          className="w-full text-left py-1 text-xs font-mono font-bold text-[#0A0A0A] hover:text-[#DC2626] transition-colors flex items-center justify-between group/btn cursor-pointer"
                        >
                          <span className="truncate">{f.name}</span>
                          <ExternalLink className="w-3 h-3 text-[#737373] group-hover/btn:text-[#DC2626] flex-shrink-0" />
                        </button>
                      ))}
                    </div>
                  ) : cert.verificationFile ? (
                    <button
                      type="button"
                      onClick={() => openPdf(cert.verificationFile!, cert.name)}
                      className="w-full text-left py-1 text-xs font-mono font-bold text-[#0A0A0A] hover:text-[#DC2626] transition-colors flex items-center justify-between group/btn cursor-pointer"
                    >
                      <span>View Credential (PDF)</span>
                      <ExternalLink className="w-3 h-3 text-[#737373] group-hover/btn:text-[#DC2626]" />
                    </button>
                  ) : (
                    <span className="text-[11px] font-mono text-[#737373]">Verified</span>
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
