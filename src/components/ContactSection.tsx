'use client';

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/cv-data';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="border-b-2 border-[#111111] pb-16 sm:pb-20 pt-2">
      <div className="w-full space-y-12">
        {/* Section Header */}
        <div className="border-b-2 border-[#111111] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-overline text-[#D9541E] font-bold">
                // SECTION 06 &bull; INQUIRIES &amp; ENGAGEMENT
              </span>
              <span className="text-[#A3A3A3]">•</span>
              <span className="text-[10px] font-mono font-bold bg-[#111111] text-[#F3EEE3] px-2 py-0.5">
                AVAILABLE FOR HIRING
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight">
              GET IN TOUCH
            </h3>
          </div>

          <p className="text-xs sm:text-sm font-sans text-[#525252] max-w-md leading-relaxed">
            Available for full-time civil engineering positions, Quantity Surveying consultancies, Revit/AutoCAD BIM modeling, and on-site field engineering supervision.
          </p>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Column 1: Direct Communication Channels */}
          <div className="bg-[#F3EEE3] border-2 border-[#DDD6C7] hover:border-[#111111] transition-colors p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold text-[#D9541E] uppercase tracking-wider block mb-2">
                01 / DIRECT CONTACT
              </span>
              <h3 className="font-display text-lg sm:text-xl text-[#111111] uppercase tracking-tight mb-6">
                COMMUNICATION CHANNELS
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#EAE4D7] border-2 border-[#DDD6C7] text-[#111111] flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#D9541E]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-[#525252] uppercase block font-bold">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="font-mono text-xs font-bold text-[#111111] hover:text-[#D9541E] transition-colors break-all block mt-1"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp / Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#EAE4D7] border-2 border-[#DDD6C7] text-[#111111] flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#16A34A]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-[#525252] uppercase block font-bold">
                      Phone &amp; WhatsApp
                    </span>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <a
                        href="https://wa.me/6289644590915"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs font-bold text-[#111111] hover:text-[#D9541E] transition-colors"
                      >
                        {profileData.phone}
                      </a>
                      <a
                        href="https://wa.me/6289644590915"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-mono font-bold bg-[#16A34A] text-[#F3EEE3] px-2 py-0.5 hover:bg-[#15803D] transition-colors flex items-center gap-1 uppercase"
                      >
                        <MessageSquare className="w-3 h-3" />
                        Chat WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#EAE4D7] border-2 border-[#DDD6C7] text-[#111111] flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#111111]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#525252] uppercase block font-bold">
                      Location &amp; Relocation
                    </span>
                    <p className="font-mono text-xs font-bold text-[#111111] mt-1">
                      Padang, West Sumatra, Indonesia
                    </p>
                    <span className="text-xs text-[#525252] font-sans block mt-1">
                      Fully open to relocation across Indonesia &amp; Japan.
                    </span>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#EAE4D7] border-2 border-[#DDD6C7] text-[#111111] flex-shrink-0">
                    <Linkedin className="w-4 h-4 text-[#111111]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#525252] uppercase block font-bold">
                      Professional Network
                    </span>
                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs font-bold text-[#111111] hover:text-[#D9541E] transition-colors block mt-1 flex items-center gap-1"
                    >
                      <span>linkedin.com/in/rezasepdide</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#525252]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t-2 border-[#DDD6C7] text-xs font-mono font-bold text-[#525252] flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#16A34A] inline-block" />
              <span className="uppercase">AVAILABLE FOR IMMEDIATE ENGAGEMENT</span>
            </div>
          </div>

          {/* Column 2: Scope of Engagement & Capabilities */}
          <div className="bg-[#F3EEE3] border-2 border-[#DDD6C7] hover:border-[#111111] transition-colors p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold text-[#D9541E] uppercase tracking-wider block mb-2">
                02 / TECHNICAL SCOPE
              </span>
              <h3 className="font-display text-lg sm:text-xl text-[#111111] uppercase tracking-tight mb-6">
                KEY CAPABILITIES
              </h3>

              <div className="space-y-4 text-xs">
                <div className="p-4 bg-[#EAE4D7] border-2 border-[#DDD6C7]">
                  <span className="font-mono font-bold text-[#111111] uppercase block mb-1">
                    01 • Quantity Surveying &amp; BoQ / RAB
                  </span>
                  <p className="font-sans text-[#525252] leading-relaxed">
                    Precise geometric volume take-off, regional unit price analysis (AHSP PUPR), and transparent cost estimations for competitive bids or progress claims.
                  </p>
                </div>

                <div className="p-4 bg-[#EAE4D7] border-2 border-[#DDD6C7]">
                  <span className="font-mono font-bold text-[#111111] uppercase block mb-1">
                    02 • BIM &amp; CAD Modeling (Revit / AutoCAD)
                  </span>
                  <p className="font-sans text-[#525252] leading-relaxed">
                    Complete Detailed Engineering Design (DED) blueprints, standardized multi-sheet layout viewports, and coordinated 3D architectural &amp; structural BIM models.
                  </p>
                </div>

                <div className="p-4 bg-[#EAE4D7] border-2 border-[#DDD6C7]">
                  <span className="font-mono font-bold text-[#111111] uppercase block mb-1">
                    03 • Site QC &amp; Construction Scheduling
                  </span>
                  <p className="font-sans text-[#525252] leading-relaxed">
                    Time Schedule CPM, weighted S-Curve tracking, Bar Bending Schedules (BBS), and field QC inspections (slump testing, rebar verification).
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t-2 border-[#DDD6C7]">
              <a
                href="https://wa.me/6289644590915?text=Hello%20Reza,%20I%20would%20like%20to%20discuss%20a%20project%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#111111] text-[#F3EEE3] border-2 border-[#111111] hover:bg-[#D9541E] hover:border-[#D9541E] text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Discuss Project Opportunity</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Professional Accreditation Summary */}
          <div className="bg-[#F3EEE3] border-2 border-[#DDD6C7] hover:border-[#111111] transition-colors p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold text-[#D9541E] uppercase tracking-wider block mb-2">
                03 / CREDENTIALS
              </span>
              <h3 className="font-display text-lg sm:text-xl text-[#111111] uppercase tracking-tight mb-6">
                OFFICIAL QUALIFICATIONS
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-[#F0FDF4] border-2 border-[#16A34A]">
                  <ShieldCheck className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-mono font-bold text-[#16A34A] uppercase block">
                      BNSP Level 5: Implementing Intermediate Building Works (Reg. F7472118)
                    </span>
                    <p className="font-sans text-[#111111] mt-1 leading-relaxed">
                      Nationally certified for multi-story building supervision and quality assurance under Kementerian PUPR standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#EAE4D7] border-2 border-[#DDD6C7]">
                  <CheckCircle2 className="w-5 h-5 text-[#111111] flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-mono font-bold text-[#111111] uppercase block">
                      Japanese SSW Certified (JAC)
                    </span>
                    <p className="font-sans text-[#525252] mt-1 leading-relaxed">
                      Passed Specified Skilled Worker exam for Japan&apos;s construction industry; bilingual Japanese (JFT-Basic 250, JLPT N4 165).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#EAE4D7] border-2 border-[#DDD6C7]">
                  <CheckCircle2 className="w-5 h-5 text-[#111111] flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-mono font-bold text-[#111111] uppercase block">
                      Cum Laude Academic Record (115 SKS)
                    </span>
                    <p className="font-sans text-[#525252] mt-1 leading-relaxed">
                      Graduated with 3.72/4.00 GPA from Politeknik Negeri Padang; advancing in D4 Construction Engineering Management.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t-2 border-[#DDD6C7]">
              <a
                href={`mailto:${profileData.email}?subject=Job%20Opportunity%20/%20Engineering%20Consultancy`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-transparent text-[#111111] border-2 border-[#111111] hover:bg-[#111111] hover:text-[#F3EEE3] text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Send Direct Email Inquiry</span>
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
