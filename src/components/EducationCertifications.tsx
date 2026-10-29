'use client';

import React from 'react';
import { educationHistory, certifications } from '../data/cv-data';
import { GraduationCap, Award, CheckCircle2, Calendar, MapPin, FileText, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { usePdfModal } from '../context/PdfModalContext';

export const EducationCertifications: React.FC = () => {
  const { openPdf } = usePdfModal();

  // Primary flagship license (SKK BNSP Level 5)
  const flagshipCert = certifications[0];
  // Remaining professional and academic certifications (7 items)
  const remainingCerts = certifications.slice(1);

  const getCertCategoryBadge = (name: string) => {
    if (name.includes('Revit')) return 'BIM & CAD';
    if (name.includes('SSW') || name.includes('Specified')) return 'INTERNATIONAL';
    if (name.includes('JFT')) return 'JAPANESE (JFT)';
    if (name.includes('JLPT')) return 'JAPANESE (JLPT)';
    if (name.includes('PKL') || name.includes('Internship')) return 'INDUSTRIAL EPC';
    if (name.includes('TOEIC')) return 'ENGLISH (TOEIC)';
    if (name.includes('Transcript') || name.includes('Transkrip')) return 'ACADEMIC';
    return 'CERTIFICATION';
  };

  return (
    <section id="education" className="py-16 sm:py-20 border-b-2 border-[#0A0A0A] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-overline text-[#EF4444] font-bold block mb-1">
              // ACADEMIC CREDENTIALS &amp; OFFICIAL LICENSING
            </span>
            <h2 className="text-headline text-[#0A0A0A]">
              EDUCATION &amp; PROFESSIONAL LICENSING
            </h2>
          </div>

          <p className="text-sm text-[#525252] max-w-lg font-body leading-relaxed">
            Foundational civil engineering education graduated with High Honors (GPA 3.72), reinforced by national BNSP Level 5 site supervisor licensing, BIM Revit mastery, and Japanese construction industry qualifications.
          </p>
        </div>

        {/* 1. Formal Higher Education (Featured Academic Dossier) */}
        <div>
          <div className="flex items-center gap-2 border-b-2 border-[#0A0A0A] pb-3 mb-6">
            <GraduationCap className="w-5 h-5 text-[#EF4444]" />
            <h3 className="font-display text-lg sm:text-xl text-[#0A0A0A]">
              FORMAL HIGHER EDUCATION
            </h3>
          </div>

          <div className="space-y-6">
            {educationHistory.map((edu, idx) => (
              <div
                key={idx}
                className="card-editorial p-6 sm:p-8 bg-[#FAFAFA] border-2 border-[#0A0A0A] shadow-sm relative overflow-hidden"
              >
                {/* Top Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-[#E5E5E5] pb-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 font-bold text-[#0A0A0A]">
                      <Calendar className="w-3.5 h-3.5 text-[#EF4444]" />
                      {edu.period}
                    </span>
                    <span className="text-[#A3A3A3]">•</span>
                    <span className="flex items-center gap-1 text-[#525252]">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>

                  {edu.isOngoing ? (
                    <span className="text-[11px] font-bold font-mono text-[#EF4444] bg-[#FEF2F2] px-2.5 py-1 border border-[#EF4444] flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-[#EF4444] inline-block animate-pulse" />
                      STATUS: CURRENTLY ACTIVE / ONGOING (IN PROGRESS)
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
                  <div className="lg:col-span-7 space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#EF4444] font-bold">
                      {edu.isOngoing
                        ? '// ADVANCED VOCATIONAL DEGREE (IN PROGRESS)'
                        : '// COMPLETED HIGHER EDUCATION IN CIVIL ENGINEERING'}
                    </span>
                    <h4 className="font-display text-xl sm:text-2xl text-[#0A0A0A] leading-tight">
                      {edu.degree} — {edu.field}
                    </h4>
                    <p className="text-base font-semibold text-[#525252] font-body">
                      {edu.institution}
                    </p>

                    {edu.gpa && (
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <div className="bg-[#0A0A0A] text-[#FAFAFA] px-3.5 py-1.5 text-xs font-mono font-bold">
                          GRADUATION GPA: {edu.gpa} (HIGH HONORS)
                        </div>
                        {edu.transcriptUrl && (
                          <button
                            type="button"
                            onClick={() =>
                              openPdf(
                                edu.transcriptUrl!,
                                `Official Academic Transcript - ${edu.institution} (${edu.degree} ${edu.field})`
                              )
                            }
                            className="inline-flex items-center gap-1.5 bg-[#EF4444] text-[#FAFAFA] hover:bg-[#DC2626] px-3.5 py-1.5 text-xs font-mono font-bold transition-colors cursor-pointer"
                            title="View Official Academic Transcript"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span>VIEW OFFICIAL TRANSCRIPT (PDF)</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Right: Key Academic Focus Areas */}
                  <div className="lg:col-span-5 bg-[#F5F5F5] border border-[#E5E5E5] p-4 sm:p-5">
                    <span className="text-[11px] font-bold uppercase font-mono tracking-wider text-[#0A0A0A] block mb-2.5">
                      {edu.isOngoing
                        ? 'ADVANCED CONCENTRATION & RESEARCH FOCUS:'
                        : 'CORE CURRICULUM & ENGINEERING COMPETENCIES:'}
                    </span>
                    {edu.details && (
                      <ul className="space-y-2 text-xs font-body text-[#525252]">
                        {edu.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="text-[#EF4444] font-bold">▪</span>
                            <span className="leading-relaxed text-[#0A0A0A]">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Professional Licensing & Certifications (7 Total) */}
        <div>
          {/* Subheader */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#0A0A0A] pb-3 mb-6 gap-2">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#EF4444]" />
              <h3 className="font-display text-lg sm:text-xl text-[#0A0A0A]">
                PROFESSIONAL LICENSES &amp; CERTIFICATIONS ({certifications.length})
              </h3>
            </div>
            <span className="text-xs font-mono text-[#525252]">
              ORIGINAL CREDENTIALS VIEWABLE IN SECURE PDF MODAL
            </span>
          </div>

          <div className="space-y-6">
            {/* Flagship Card: SKK BNSP Level 5 (Full Width Highlight) */}
            {flagshipCert && (
              <div className="card-editorial p-6 sm:p-7 border-2 border-[#0A0A0A] bg-[#FFFFFF] shadow-sm relative overflow-hidden group">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E5E5] pb-3 mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-1 bg-[#EF4444] text-[#FAFAFA] text-[11px] font-mono font-bold tracking-wider uppercase flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      PRIMARY STATE LICENSE
                    </span>
                    <span className="px-2.5 py-1 bg-[#0A0A0A] text-[#FAFAFA] text-[11px] font-mono font-bold tracking-wider uppercase">
                      BNSP LEVEL 5
                    </span>
                  </div>

                  <span className="text-[11px] font-mono font-bold text-[#16A34A] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{flagshipCert.year}</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8 space-y-2">
                    <h4 className="font-display text-lg sm:text-xl text-[#0A0A0A] group-hover:text-[#EF4444] transition-colors break-words">
                      {flagshipCert.name}
                    </h4>
                    <p className="text-xs text-[#525252] font-body break-words">
                      Official Issuer:{' '}
                      <strong className="text-[#0A0A0A]">{flagshipCert.issuer}</strong>
                    </p>
                    <p className="text-xs text-[#737373] font-body leading-relaxed pt-1 break-words">
                      {flagshipCert.description}
                    </p>
                  </div>

                  <div className="lg:col-span-4 flex flex-col justify-center">
                    <button
                      type="button"
                      onClick={() =>
                        openPdf(
                          flagshipCert.verificationFile!,
                          `${flagshipCert.name} - ${flagshipCert.issuer}`
                        )
                      }
                      className="w-full py-3 px-4 border-2 border-[#0A0A0A] bg-[#0A0A0A] text-[#FAFAFA] hover:bg-[#EF4444] hover:border-[#EF4444] text-xs font-mono font-bold flex items-center justify-between transition-colors shadow cursor-pointer"
                      title="View Official BNSP Certificate in PDF"
                    >
                      <span className="flex items-center gap-2 truncate">
                        <FileText className="w-4 h-4 text-[#FAFAFA]" />
                        <span className="truncate">VIEW BNSP CERTIFICATE (PDF)</span>
                      </span>
                      <ExternalLink className="w-4 h-4 flex-shrink-0" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Remaining 6 Certifications (Clean 3-Column Grid on Desktop, 2 on Tablet, 1 on Mobile) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingCerts.map((cert, idx) => (
                <div
                  key={idx}
                  className="card-editorial p-5 sm:p-6 border-2 border-[#0A0A0A] bg-[#FAFAFA] hover:bg-[#FFFFFF] transition-all flex flex-col justify-between group overflow-hidden shadow-sm"
                >
                  <div className="space-y-3">
                    {/* Top Row: Category Tag & Status */}
                    <div className="flex items-center justify-between gap-2 border-b border-[#E5E5E5] pb-2.5">
                      <span className="px-2 py-0.5 text-[10px] font-mono bg-[#0A0A0A] text-[#FAFAFA] font-bold tracking-wider">
                        {getCertCategoryBadge(cert.name)}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-[#16A34A] flex items-center gap-1 flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>VERIFIED</span>
                      </span>
                    </div>

                    {/* Certificate Name */}
                    <h4 className="font-display text-base text-[#0A0A0A] leading-snug group-hover:text-[#EF4444] transition-colors break-words">
                      {cert.name}
                    </h4>

                    {/* Issuer */}
                    <p className="text-xs text-[#525252] font-body leading-relaxed break-words">
                      Issuer: <strong className="text-[#0A0A0A]">{cert.issuer}</strong>
                    </p>

                    {/* Score / Level Highlight Panel (With natural wrapping, never overflows) */}
                    {cert.levelOrScore && (
                      <div className="p-2.5 bg-[#F5F5F5] border-l-2 border-[#EF4444] text-xs font-mono text-[#0A0A0A] break-words">
                        <span className="text-[10px] text-[#737373] block uppercase tracking-wider mb-0.5">
                          QUALIFICATION / SCORE:
                        </span>
                        <span className="font-bold block break-words leading-tight">
                          {cert.levelOrScore}
                        </span>
                      </div>
                    )}

                    {/* Description */}
                    {cert.description && (
                      <p className="text-xs text-[#737373] font-body leading-relaxed line-clamp-3 break-words">
                        {cert.description}
                      </p>
                    )}
                  </div>

                  {/* PDF Trigger Button */}
                  {cert.verificationFile && (
                    <div className="mt-5 pt-3 border-t border-[#E5E5E5]">
                      <button
                        type="button"
                        onClick={() =>
                          openPdf(
                            cert.verificationFile!,
                            `${cert.name} - ${cert.issuer} (${cert.year})`
                          )
                        }
                        className="w-full py-2.5 px-3 border border-[#0A0A0A] bg-[#FAFAFA] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] text-xs font-mono font-bold flex items-center justify-between gap-2 transition-colors group-hover:border-[#EF4444] cursor-pointer"
                        title="View Document in PDF Modal"
                      >
                        <span className="flex items-center gap-1.5 min-w-0 truncate">
                          <FileText className="w-3.5 h-3.5 text-[#EF4444] flex-shrink-0" />
                          <span className="truncate">VIEW DOCUMENT (PDF)</span>
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                      </button>
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
