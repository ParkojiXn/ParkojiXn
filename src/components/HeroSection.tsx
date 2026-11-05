'use client';

import React from 'react';
import { ArrowDown, ArrowUpRight, FileText, MapPin, CheckCircle2, Clock, MessageSquare, Download, ShieldCheck, Award, ExternalLink } from 'lucide-react';
import { profileData } from '../data/cv-data';
import { usePdfModal } from '../context/PdfModalContext';

export const HeroSection: React.FC = () => {
  const officialPhoto = '/portfolio/profile/professional-photo.jpeg';
  const { openPdf } = usePdfModal();

  return (
    <section id="hero" className="relative border-b border-slate-200/80 bg-white pt-10 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
      {/* Subtle Background Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-8 lg:mb-12 print:hidden">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
              CIVIL ENGINEERING DOSSIER
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {profileData.location}
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="hidden sm:flex text-xs font-mono text-slate-500 items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {profileData.timezone}
            </span>
          </div>

          <div className="status-chip-success">
            <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block animate-pulse" />
            <span className="text-xs font-medium">{profileData.status}</span>
          </div>
        </div>

        {/* Main Grid: Headline & Profile Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-8 flex flex-col space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white text-xs font-mono font-semibold rounded-md shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>BNSP Certified Intermediate Building Construction Supervisor</span>
              </div>

              <h1 className="text-display text-slate-900">
                Precision in Planning, <br />
                <span className="text-blue-600">Accuracy in Cost</span>, &amp; Jobsite Excellence.
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl font-medium text-slate-600 leading-relaxed max-w-2xl">
              Civil Engineer specializing in <strong className="text-slate-900 font-semibold">Quantity Surveying (BoQ/RAB)</strong>, <strong className="text-slate-900 font-semibold">BIM &amp; CAD Modeling</strong>, and on-site <strong className="text-slate-900 font-semibold">Quality Control &amp; Scheduling</strong>.
            </p>

            {/* Professional Profile Statement */}
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-6 relative shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span>Executive Summary &amp; Background</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Diploma III Civil Engineering graduate from <strong className="text-slate-900 font-semibold">Politeknik Negeri Padang (GPA 3.72/4.00, Magna Cum Laude)</strong>, certified as a <strong className="text-slate-900 font-semibold">BNSP Level 5 Site Supervisor</strong> and currently pursuing a D4 in Construction Engineering Management. Proven jobsite track record in Detailed Engineering Design (DED in AutoCAD), transparent Quantity Take-Off &amp; Backup Volume formulation, Bar Bending Schedule (BBS) optimization, and S-Curve timeline governance. Proficient in <strong className="text-slate-900 font-semibold">Autodesk Revit BIM</strong>, <strong className="text-slate-900 font-semibold">AutoCAD</strong>, <strong className="text-slate-900 font-semibold">SAP2000</strong>, and <strong className="text-slate-900 font-semibold">MS Project</strong>, with certified bilingual capabilities in <strong className="text-slate-900 font-semibold">Japanese (JLPT N4 &amp; JFT-Basic)</strong> and <strong className="text-slate-900 font-semibold">English (TOEIC 640)</strong>.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3.5 print:hidden">
              <a href="#projects" className="btn-primary">
                <span>View Engineering Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="btn-secondary"
              >
                <span>Inquire for Roles &amp; Consultancies</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>

              <div className="flex items-center gap-2 sm:ml-auto">
                <a
                  href="/CV_Reza_Sepdide_English.docx"
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-700 rounded-lg shadow-2xs transition-colors"
                  title="Download English CV (.docx)"
                >
                  <Download className="w-3.5 h-3.5 text-blue-600" />
                  <span>CV (EN)</span>
                </a>

                <a
                  href="/CV_Reza_Sepdide_Profesional.docx"
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-700 rounded-lg shadow-2xs transition-colors"
                  title="Download Indonesian CV (.docx)"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>CV (ID)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Portrait & Credentials Card */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="card-pro p-4 bg-white border border-slate-200 shadow-md rounded-2xl relative">
              {/* Photo Frame */}
              <div className="overflow-hidden rounded-xl aspect-[4/5] bg-slate-100 relative shadow-inner">
                <img
                  src={officialPhoto}
                  alt="Reza Sepdide - Civil Engineer & Construction Planner"
                  className="w-full h-full object-cover object-top"
                />

                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/85 backdrop-blur-md text-white p-2.5 rounded-lg text-center shadow-lg">
                  <span className="font-display text-sm font-bold block leading-tight">
                    REZA SEPDIDE
                  </span>
                  <span className="text-[10px] font-mono text-slate-300 block mt-0.5 font-medium">
                    Politeknik Negeri Padang (D3 &amp; D4)
                  </span>
                </div>
              </div>

              {/* Accreditations summary below photo */}
              <div className="mt-4 pt-3 border-t border-slate-100 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 font-medium">STATE LICENSE:</span>
                  <span className="font-bold text-slate-900 flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    BNSP Level 5
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 font-medium">ACADEMIC RECORD:</span>
                  <span className="font-bold text-slate-900">
                    GPA 3.72 / 4.00 (High Honors)
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 font-medium">LANGUAGES:</span>
                  <span className="font-bold text-slate-900">
                    ID • JP (JLPT N4/SSW) • EN (TOEIC 640)
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Contact Pill */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70 text-xs font-mono text-slate-600 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <a
                  href="https://wa.me/6289644590915"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-slate-900 hover:text-blue-600 hover:underline"
                >
                  +62 896-4459-0915
                </a>
              </span>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-600 hover:underline flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Quantified Key Metrics Ribbon */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {profileData.keyStats.map((stat, idx) => (
            <div
              key={idx}
              className="card-pro p-5 sm:p-6 bg-white border border-slate-200 rounded-xl hover:shadow-md hover:border-slate-300 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 leading-none tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider mt-2.5">
                {stat.label}
              </div>
              <p className="text-xs text-slate-500 mt-2 font-normal leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
