'use client';

import React from 'react';
import { getProfileUseCase } from '../../../../infrastructure/di/container';
import { Mail, Phone, MapPin, Linkedin, FileText, ArrowUpRight, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const profileData = getProfileUseCase.execute();

  return (
    <section id="contact" className="py-16 sm:py-20 border-b-2 border-[#0A0A0A] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-overline text-[#EF4444] font-bold block mb-1">
              // DIRECT INITIATIVE &amp; CONSULTATION
            </span>
            <h2 className="text-headline text-[#0A0A0A]">
              LET&apos;S BUILD TOGETHER
            </h2>
          </div>

          <p className="text-sm text-[#404040] max-w-lg font-body leading-relaxed">
            Available for full-time civil engineering positions, DED &amp; BoQ quantity surveying consultancies, Revit/AutoCAD BIM modeling, and on-site field supervision.
          </p>
        </div>

        {/* Symmetrical, Proportional 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Column 1: Direct Communication Channels */}
          <div className="card-editorial border-2 border-[#0A0A0A] bg-[#FFFFFF] p-6 sm:p-7 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-overline text-[#EF4444] font-bold block mb-4">
                // DIRECT COMMUNICATION
              </span>
              <h3 className="font-display text-lg sm:text-xl text-[#0A0A0A] mb-6">
                OFFICIAL CHANNELS
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#0A0A0A] text-[#FAFAFA] flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#EF4444]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-[#525252] uppercase block font-bold">
                      ELECTRONIC MAIL
                    </span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="font-display text-sm text-[#0A0A0A] hover:text-[#EF4444] transition-colors break-all font-bold block mt-0.5"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp / Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#0A0A0A] text-[#FAFAFA] flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#EF4444]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-[#525252] uppercase block font-bold">
                      PHONE &amp; WHATSAPP
                    </span>
                    <div className="flex flex-wrap items-center gap-2 mt-0.5">
                      <a
                        href="https://wa.me/6289644590915"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-sm text-[#0A0A0A] hover:text-[#EF4444] transition-colors font-bold"
                      >
                        {profileData.phone}
                      </a>
                      <a
                        href="https://wa.me/6289644590915"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-mono bg-[#16A34A] text-white px-2 py-0.5 font-bold hover:bg-[#15803d] transition-colors flex items-center gap-1"
                      >
                        <MessageSquare className="w-3 h-3" />
                        CHAT ON WA
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#0A0A0A] text-[#FAFAFA] flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#EF4444]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#525252] uppercase block font-bold">
                      LOCATION &amp; RELOCATION
                    </span>
                    <p className="font-display text-sm text-[#0A0A0A] font-bold mt-0.5">
                      {profileData.location}
                    </p>
                    <span className="text-xs font-mono text-[#525252] mt-0.5 block">
                      Open to domestic &amp; international site deployment (including Japan)
                    </span>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#0A0A0A] text-[#FAFAFA] flex-shrink-0">
                    <Linkedin className="w-4 h-4 text-[#EF4444]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#525252] uppercase block font-bold">
                      PROFESSIONAL NETWORK
                    </span>
                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-sm text-[#0A0A0A] hover:text-[#EF4444] transition-colors inline-flex items-center gap-1 font-bold mt-0.5"
                    >
                      linkedin.com/in/rezasepdide
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#EF4444]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E5E5] text-[11px] font-mono text-[#525252] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#16A34A] rounded-full inline-block animate-pulse" />
              <span>Available for full-time roles &amp; technical consultancies</span>
            </div>
          </div>

          {/* Column 2: Scope of Technical Engagement */}
          <div className="card-editorial border-2 border-[#0A0A0A] bg-[#FFFFFF] p-6 sm:p-7 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-overline text-[#EF4444] font-bold block mb-4">
                // TECHNICAL CAPABILITIES
              </span>
              <h3 className="font-display text-lg sm:text-xl text-[#0A0A0A] mb-6">
                SCOPE OF ENGAGEMENT
              </h3>

              <div className="space-y-4">
                <div className="p-3 bg-[#FAFAFA] border border-[#E5E5E5]">
                  <span className="text-[10px] font-mono font-bold text-[#EF4444] uppercase block">
                    01 // SITE SUPERVISION &amp; QUALITY CONTROL
                  </span>
                  <p className="text-xs text-[#0A0A0A] font-body mt-1 leading-relaxed">
                    BNSP Level 5 certified field leadership: concrete slump tests, rebar clearance checklists, structural inspection, and HSE compliance.
                  </p>
                </div>

                <div className="p-3 bg-[#FAFAFA] border border-[#E5E5E5]">
                  <span className="text-[10px] font-mono font-bold text-[#EF4444] uppercase block">
                    02 // QUANTITY SURVEYING &amp; COST ESTIMATION
                  </span>
                  <p className="text-xs text-[#0A0A0A] font-body mt-1 leading-relaxed">
                    Quantity Take-Off (QTO), Bill of Quantities (BoQ/RAB), regional AHSP unit rate modeling, and Contract Change Order (CCO) addenda.
                  </p>
                </div>

                <div className="p-3 bg-[#FAFAFA] border border-[#E5E5E5]">
                  <span className="text-[10px] font-mono font-bold text-[#EF4444] uppercase block">
                    03 // DIGITAL BIM &amp; CAD MODELING
                  </span>
                  <p className="text-xs text-[#0A0A0A] font-body mt-1 leading-relaxed">
                    Autodesk Revit parametric 3D structural &amp; architectural modeling, clash avoidance, and standardized AutoCAD DED layout viewports to PDF.
                  </p>
                </div>

                <div className="p-3 bg-[#FAFAFA] border border-[#E5E5E5]">
                  <span className="text-[10px] font-mono font-bold text-[#EF4444] uppercase block">
                    04 // CPM SCHEDULING &amp; TIME CONTROL
                  </span>
                  <p className="text-xs text-[#0A0A0A] font-body mt-1 leading-relaxed">
                    Critical Path Method (CPM) networks in Microsoft Project and weekly progress S-Curves for time and cash-flow deviation monitoring.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E5E5] text-[11px] font-mono text-[#525252] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>Full compliance with Indonesian SNI &amp; Japanese JAC standards</span>
            </div>
          </div>

          {/* Column 3: Official Curriculum Vitae Downloads */}
          <div className="card-editorial border-2 border-[#0A0A0A] bg-[#FFFFFF] p-6 sm:p-7 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-overline text-[#EF4444] font-bold block mb-4">
                // OFFICIAL RESUME DOSSIER
              </span>
              <h3 className="font-display text-lg sm:text-xl text-[#0A0A0A] mb-6">
                CURRICULUM VITAE
              </h3>

              <p className="text-xs sm:text-sm text-[#404040] font-body leading-relaxed mb-6">
                Official authenticated curriculum vitae files detailing comprehensive academic honors, state licensing numbers, project histories, and verified credentials.
              </p>

              <div className="space-y-3">
                <a
                  href="/CV_Reza_Sepdide_English.docx"
                  download
                  className="btn-primary w-full text-center flex items-center justify-center gap-2 py-3"
                  title="Download Complete CV in English (.docx)"
                >
                  <FileText className="w-4 h-4 text-[#FAFAFA]" />
                  <span>COMPLETE CV (ENGLISH .DOCX)</span>
                </a>

                <a
                  href="/CV_Reza_Sepdide_Profesional.docx"
                  download
                  className="btn-secondary w-full text-center flex items-center justify-center gap-2 py-3"
                  title="Download Professional CV in Indonesian (.docx)"
                >
                  <FileText className="w-4 h-4 text-[#0A0A0A]" />
                  <span>PROFESSIONAL CV (INDONESIAN .DOCX)</span>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E5E5] space-y-1.5 text-xs font-mono text-[#525252]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] flex-shrink-0" />
                <span>BNSP KKNI Level 5 Site Supervisor</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] flex-shrink-0" />
                <span>D3 Civil Engineering PNP (GPA 3.72 Magna Cum Laude)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#EF4444] flex-shrink-0" />
                <span>D4 Construction Engineering Management (In Progress)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
