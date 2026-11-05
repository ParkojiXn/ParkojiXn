'use client';

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/cv-data';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-1">
              Direct Inquiries
            </span>
            <h2 className="text-headline text-slate-900">
              GET IN TOUCH
            </h2>
          </div>

          <p className="text-sm text-slate-600 max-w-lg leading-relaxed">
            Available for full-time civil engineering positions, Quantity Surveying consultancies, Revit/AutoCAD BIM modeling, and on-site field supervision.
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Column 1: Direct Communication Channels */}
          <div className="card-pro bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-2">
                Communication
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-6">
                OFFICIAL CONTACT
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-slate-100 text-slate-700 rounded-lg flex-shrink-0">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-slate-400 uppercase block font-semibold">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="font-display text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors break-all block mt-0.5"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp / Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-slate-100 text-slate-700 rounded-lg flex-shrink-0">
                    <Phone className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-slate-400 uppercase block font-semibold">
                      Phone &amp; WhatsApp
                    </span>
                    <div className="flex flex-wrap items-center gap-2 mt-0.5">
                      <a
                        href="https://wa.me/6289644590915"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                      >
                        {profileData.phone}
                      </a>
                      <a
                        href="https://wa.me/6289644590915"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono bg-emerald-600 text-white px-2.5 py-0.5 font-semibold hover:bg-emerald-700 transition-colors flex items-center gap-1 rounded-md"
                      >
                        <MessageSquare className="w-3 h-3" />
                        Chat on WA
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-slate-100 text-slate-700 rounded-lg flex-shrink-0">
                    <MapPin className="w-4 h-4 text-slate-600" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block font-semibold">
                      Location &amp; Relocation
                    </span>
                    <p className="font-display text-sm font-bold text-slate-900 mt-0.5">
                      Padang, West Sumatra
                    </p>
                    <span className="text-xs text-slate-500 font-mono block mt-0.5">
                      Open to relocation across Indonesia &amp; Japan
                    </span>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-slate-100 text-slate-700 rounded-lg flex-shrink-0">
                    <Linkedin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block font-semibold">
                      LinkedIn Network
                    </span>
                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors block mt-0.5 flex items-center gap-1"
                    >
                      <span>linkedin.com/in/rezasepdide</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block animate-pulse" />
              <span>Available for immediate response</span>
            </div>
          </div>

          {/* Column 2: Scope of Engagement & Capabilities */}
          <div className="card-pro bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-2">
                Services
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-4">
                TECHNICAL CAPABILITIES
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl">
                  <span className="font-bold text-slate-900 font-mono uppercase block mb-1">
                    01 • Quantity Surveying &amp; BoQ / RAB
                  </span>
                  <p className="text-slate-600 leading-relaxed font-normal">
                    Precise geometric volume take-off, regional unit price analysis (AHSP PUPR), and transparent cost estimations for bids or progress billing claims.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl">
                  <span className="font-bold text-slate-900 font-mono uppercase block mb-1">
                    02 • BIM &amp; CAD Modeling (Revit / AutoCAD)
                  </span>
                  <p className="text-slate-600 leading-relaxed font-normal">
                    Complete Detailed Engineering Design (DED) blueprints, standardized multi-sheet layout viewports, and 3D architectural &amp; structural BIM models.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl">
                  <span className="font-bold text-slate-900 font-mono uppercase block mb-1">
                    03 • Site QC &amp; Construction Scheduling
                  </span>
                  <p className="text-slate-600 leading-relaxed font-normal">
                    Time Schedule CPM, weighted S-Curve tracking, Bar Bending Schedules (BBS), and field QC inspections (slump testing, rebar verification).
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href="https://wa.me/6289644590915?text=Hello%20Reza,%20I%20would%20like%20to%20discuss%20a%20project%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary text-xs flex items-center justify-center gap-2"
              >
                <span>Discuss a Project Opportunity</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Professional Accreditation Summary */}
          <div className="card-pro bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-2">
                Accreditations
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-4">
                VERIFIED CREDENTIALS
              </h3>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3 p-3.5 bg-emerald-50/70 border border-emerald-100 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold font-mono text-emerald-800 uppercase block">
                      BNSP Level 5 Site Supervisor
                    </span>
                    <p className="text-emerald-700 mt-1 leading-relaxed">
                      Nationally certified for multi-story building supervision and quality assurance under Kementerian PUPR standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-100 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold font-mono text-slate-900 uppercase block">
                      Japanese SSW Certified (JAC)
                    </span>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      Passed Specified Skilled Worker (SSW) exam for Japan&apos;s construction industry; bilingual in Japanese (JFT-Basic 250, JLPT N4 165).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-100 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold font-mono text-slate-900 uppercase block">
                      High Honors Academic Record
                    </span>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      Graduated with 3.72/4.00 GPA from Politeknik Negeri Padang; currently advancing in D4 Construction Engineering Management.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={`mailto:${profileData.email}?subject=Job%20Opportunity%20/%20Engineering%20Consultancy`}
                className="w-full btn-secondary text-xs flex items-center justify-center gap-2"
              >
                <span>Send Direct Email Inquiry</span>
                <Mail className="w-4 h-4 text-slate-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
