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
    if (name.includes('SSW') || name.includes('Specified')) return 'INTERNATIONAL';
    if (name.includes('JFT') || name.includes('JLPT')) return 'JAPANESE BILINGUAL';
    if (name.includes('PKL') || name.includes('Internship')) return 'INDUSTRIAL EPC';
    if (name.includes('TOEIC')) return 'ENGLISH (TOEIC)';
    if (name.includes('Transcript') || name.includes('Transkrip')) return 'ACADEMIC';
    return 'CERTIFICATION';
  };

  return (
    <section id="education" className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-1">
              Qualifications &amp; Accreditations
            </span>
            <h2 className="text-headline text-slate-900">
              EDUCATION &amp; LICENSING
            </h2>
          </div>

          <p className="text-sm text-slate-600 max-w-lg leading-relaxed">
            Civil engineering academic foundations from Politeknik Negeri Padang (GPA 3.72), reinforced by national BNSP Level 5 site supervisor licensing, BIM Revit certification, and Japanese construction industry qualifications.
          </p>
        </div>

        {/* 1. Flagship State License Showcase */}
        {flagshipCert && (
          <div>
            <div className="flex items-center gap-2.5 border-b border-slate-200 pb-3 mb-6">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                FLAGSHIP STATE COMPETENCY LICENSE
              </h3>
            </div>

            <div className="card-pro p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-5">
                <span className="px-3 py-1 bg-slate-900 text-white text-xs font-mono font-semibold rounded-md">
                  KKNI LEVEL 5
                </span>
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  BNSP &amp; KEMENTERIAN PUPR ACCREDITED
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2.5 max-w-2xl">
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    {flagshipCert.name}
                  </h4>
                  <p className="text-sm font-semibold text-blue-600 font-mono">
                    {flagshipCert.levelOrScore} • {flagshipCert.issuer}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
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
          </div>
        )}

        {/* 2. Formal Higher Education */}
        <div>
          <div className="flex items-center gap-2.5 border-b border-slate-200 pb-3 mb-6">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
              FORMAL HIGHER EDUCATION
            </h3>
          </div>

          <div className="space-y-6">
            {educationHistory.map((edu, idx) => (
              <div
                key={idx}
                className="card-pro p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-md transition-all relative overflow-hidden"
              >
                {/* Top Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 font-bold text-slate-900">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      {edu.period}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>

                  {edu.isOngoing ? (
                    <span className="text-xs font-semibold font-mono text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-blue-600 rounded-full inline-block animate-pulse" />
                      STATUS: IN PROGRESS
                    </span>
                  ) : (
                    <span className="text-xs font-semibold font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {edu.status || 'STATUS: GRADUATED'}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Program & Honors */}
                  <div className="lg:col-span-7 space-y-2.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-bold">
                      {edu.isOngoing
                        ? 'ADVANCED VOCATIONAL DEGREE'
                        : 'COMPLETED HIGHER EDUCATION IN CIVIL ENGINEERING'}
                    </span>
                    <h4 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                      {edu.degree} — {edu.field}
                    </h4>
                    <p className="text-base font-semibold text-slate-700">
                      {edu.institution}
                    </p>

                    {edu.gpa && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 text-white text-xs font-mono font-semibold rounded-lg shadow-2xs">
                        <span>CUMULATIVE GPA: {edu.gpa}</span>
                        <span className="text-blue-400">•</span>
                        <span>MAGNA CUM LAUDE</span>
                      </div>
                    )}
                  </div>

                  {/* Right: Key Milestones / Thesis */}
                  <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 p-4 text-xs text-slate-700 space-y-2 rounded-xl">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-900 block border-b border-slate-200/80 pb-1.5">
                      Academic Focus &amp; Capstone
                    </span>
                    {edu.details && edu.details.length > 0 ? (
                      <ul className="space-y-1.5">
                        {edu.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-blue-600 font-bold mt-0.5">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="leading-relaxed text-slate-500">
                        Foundational study in mathematics, physics, and basic engineering sciences.
                      </p>
                    )}

                    {edu.transcriptUrl && (
                      <div className="pt-2 border-t border-slate-200/80 mt-2">
                        <button
                          type="button"
                          onClick={() => openPdf(edu.transcriptUrl!, 'Academic Transcript - Politeknik Negeri Padang')}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <FileText className="w-3.5 h-3.5" />
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
          <div className="flex items-center gap-2.5 border-b border-slate-200 pb-3 mb-6">
            <Award className="w-5 h-5 text-blue-600" />
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
              PROFESSIONAL CREDENTIALS &amp; CERTIFICATIONS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {remainingCerts.map((cert, idx) => (
              <div
                key={idx}
                className="card-pro p-5 bg-white border border-slate-200 hover:border-slate-300 rounded-xl flex flex-col justify-between transition-all group shadow-2xs hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                    <span className="text-[10px] font-mono font-semibold text-slate-600 uppercase bg-slate-100 px-2 py-0.5 rounded-md">
                      {getCertCategoryBadge(cert.name)}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {cert.year}
                    </span>
                  </div>

                  <h5 className="font-display text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-1">
                    {cert.name}
                  </h5>

                  <p className="text-xs font-mono font-semibold text-blue-600 mb-2">
                    {cert.levelOrScore}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-normal">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  {cert.files && cert.files.length > 0 ? (
                    <div className="space-y-1.5">
                      {cert.files.map((f, fIdx) => (
                        <button
                          key={fIdx}
                          type="button"
                          onClick={() => openPdf(f.url, f.name)}
                          className="w-full text-left py-1 text-xs font-mono font-semibold text-slate-800 hover:text-blue-600 transition-colors flex items-center justify-between group/btn cursor-pointer"
                        >
                          <span className="truncate">{f.name}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-blue-600 flex-shrink-0" />
                        </button>
                      ))}
                    </div>
                  ) : cert.verificationFile ? (
                    <button
                      type="button"
                      onClick={() => openPdf(cert.verificationFile!, cert.name)}
                      className="w-full text-left py-1 text-xs font-mono font-semibold text-slate-800 hover:text-blue-600 transition-colors flex items-center justify-between group/btn cursor-pointer"
                    >
                      <span>View Credential (PDF)</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-blue-600" />
                    </button>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-400">Verified Credential</span>
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
