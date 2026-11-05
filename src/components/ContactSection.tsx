'use client';

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/cv-data';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 border-b border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="border-b border-[#0A0A0A] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-overline text-[#DC2626] font-bold block mb-1">
              Connect &amp; Collaborate
            </span>
            <h2 className="text-headline text-[#0A0A0A]">
              GET IN TOUCH
            </h2>
          </div>

          <p className="text-sm text-[#525252] max-w-lg font-body leading-relaxed">
            Available for full-time civil engineering positions, Quantity Surveying consultancies, Revit/AutoCAD BIM modeling, and on-site field supervision.
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Column 1: Direct Communication Channels */}
          <div className="card-editorial border border-[#0A0A0A] bg-[#FFFFFF] p-6 sm:p-7 flex flex-col justify-between shadow-xs rounded-xs">
            <div>
              <span className="text-overline text-[#DC2626] font-bold block mb-4">
                Direct Channels
              </span>
              <h3 className="font-display text-lg sm:text-xl text-[#0A0A0A] mb-6">
                CONTACT DETAILS
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#0A0A0A] text-[#FAFAFA] flex-shrink-0 rounded-xs">
                    <Mail className="w-4 h-4 text-[#DC2626]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-[#737373] uppercase block font-bold">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="font-display text-sm text-[#0A0A0A] hover:text-[#DC2626] transition-colors break-all font-bold block mt-0.5"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp / Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#0A0A0A] text-[#FAFAFA] flex-shrink-0 rounded-xs">
                    <Phone className="w-4 h-4 text-[#DC2626]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-[#737373] uppercase block font-bold">
                      Phone &amp; WhatsApp
                    </span>
                    <div className="flex flex-wrap items-center gap-2 mt-0.5">
                      <a
                        href="https://wa.me/6289644590915"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-sm text-[#0A0A0A] hover:text-[#DC2626] transition-colors font-bold"
                      >
                        {profileData.phone}
                      </a>
                      <a
                        href="https://wa.me/6289644590915"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-mono bg-[#16A34A] text-white px-2 py-0.5 font-bold hover:bg-[#15803d] transition-colors flex items-center gap-1 rounded-xs"
                      >
                        <MessageSquare className="w-3 h-3" />
                        Chat on WA
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#0A0A0A] text-[#FAFAFA] flex-shrink-0 rounded-xs">
                    <MapPin className="w-4 h-4 text-[#DC2626]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#737373] uppercase block font-bold">
                      Location &amp; Relocation
                    </span>
                    <p className="font-display text-sm text-[#0A0A0A] font-bold mt-0.5">
                      Padang, West Sumatra
                    </p>
                    <span className="text-xs text-[#525252] font-mono block mt-0.5">
                      Available for relocation across Indonesia &amp; Japan
                    </span>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#0A0A0A] text-[#FAFAFA] flex-shrink-0 rounded-xs">
                    <Linkedin className="w-4 h-4 text-[#DC2626]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#737373] uppercase block font-bold">
                      LinkedIn Network
                    </span>
                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-sm text-[#0A0A0A] hover:text-[#DC2626] transition-colors font-bold block mt-0.5 flex items-center gap-1"
                    >
                      <span>linkedin.com/in/rezasepdide</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#737373]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F0F0F0] text-xs font-mono text-[#525252] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#16A34A] rounded-full inline-block animate-pulse" />
              <span>Available for immediate response</span>
            </div>
          </div>

          {/* Column 2: Scope of Engagement & Services */}
          <div className="card-editorial bg-[#FFFFFF] border border-[#E5E5E5] p-6 sm:p-7 flex flex-col justify-between shadow-xs rounded-xs">
            <div>
              <span className="text-overline text-[#DC2626] font-bold block mb-4">
                Services &amp; Expertise
              </span>
              <h3 className="font-display text-lg sm:text-xl text-[#0A0A0A] mb-4">
                CAPABILITIES OFFERED
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <div className="p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xs">
                  <span className="font-bold text-[#0A0A0A] uppercase block">
                    01 // Quantity Surveying &amp; BoQ / RAB
                  </span>
                  <p className="text-[#525252] font-body mt-1 leading-relaxed">
                    Precise geometric volume take-off, unit price analysis (AHSP PUPR), and verifiable cost estimations for tenders or progress billing claims.
                  </p>
                </div>

                <div className="p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xs">
                  <span className="font-bold text-[#0A0A0A] uppercase block">
                    02 // BIM &amp; CAD Modeling (Revit / AutoCAD)
                  </span>
                  <p className="text-[#525252] font-body mt-1 leading-relaxed">
                    Complete Detailed Engineering Design (DED) blueprints, standardized multi-sheet layout viewports, and 3D architectural &amp; structural BIM models.
                  </p>
                </div>

                <div className="p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xs">
                  <span className="font-bold text-[#0A0A0A] uppercase block">
                    03 // Site QC &amp; Construction Scheduling
                  </span>
                  <p className="text-[#525252] font-body mt-1 leading-relaxed">
                    Time Schedule CPM, weighted S-Curve tracking, Bar Bending Schedules (BBS), and field QC inspections (slump testing, rebar verification).
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0F0F0]">
              <a
                href="https://wa.me/6289644590915?text=Hello%20Reza,%20I%20would%20like%20to%20discuss%20a%20project%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary text-xs flex items-center justify-center gap-2"
              >
                <span>Discuss a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Professional Accreditation Summary */}
          <div className="card-editorial bg-[#FFFFFF] border border-[#E5E5E5] p-6 sm:p-7 flex flex-col justify-between shadow-xs rounded-xs">
            <div>
              <span className="text-overline text-[#DC2626] font-bold block mb-4">
                Verified Credentials
              </span>
              <h3 className="font-display text-lg sm:text-xl text-[#0A0A0A] mb-4">
                PROFESSIONAL STANDARDS
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xs">
                  <ShieldCheck className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold font-mono text-[#16A34A] uppercase block">
                      BNSP Level 5 Site Supervisor
                    </span>
                    <p className="text-[#374151] font-body mt-0.5 leading-relaxed">
                      Nationally certified for multi-story building supervision and quality assurance under Kementerian PUPR standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xs">
                  <CheckCircle2 className="w-5 h-5 text-[#0A0A0A] flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold font-mono text-[#0A0A0A] uppercase block">
                      Japanese SSW Certified (JAC)
                    </span>
                    <p className="text-[#525252] font-body mt-0.5 leading-relaxed">
                      Passed Specified Skilled Worker (SSW) exam for Japan&apos;s construction industry; bilingual in Japanese (JFT-Basic 250, JLPT N4 165).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xs">
                  <CheckCircle2 className="w-5 h-5 text-[#0A0A0A] flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold font-mono text-[#0A0A0A] uppercase block">
                      High Honors Academic Record
                    </span>
                    <p className="text-[#525252] font-body mt-0.5 leading-relaxed">
                      Graduated with 3.72/4.00 GPA from Politeknik Negeri Padang; currently advancing in D4 Construction Engineering Management.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0F0F0]">
              <a
                href={`mailto:${profileData.email}?subject=Job%20Opportunity%20/%20Engineering%20Consultancy`}
                className="w-full btn-secondary text-xs flex items-center justify-center gap-2"
              >
                <span>Send Direct Email</span>
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
