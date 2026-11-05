'use client';

import React from 'react';
import { ArrowDown, ArrowUpRight, FileText, MapPin, CheckCircle2, Clock, MessageSquare, Download, ShieldCheck, ExternalLink } from 'lucide-react';
import { profileData } from '../data/cv-data';

export const HeroSection: React.FC = () => {
  const officialPhoto = '/portfolio/profile/professional-photo.jpeg';

  return (
    <section id="hero" className="relative border-b-2 border-[#0A0A0A] bg-[#FAFAFA] pt-8 pb-14 lg:pt-12 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#0A0A0A] pb-3.5 mb-8 lg:mb-10 print:hidden">
          <div className="flex items-center gap-3">
            <span className="text-overline text-[#EF4444] font-bold">PROFESSIONAL DOSSIER</span>
            <span className="text-[#A3A3A3]">•</span>
            <span className="text-xs font-mono text-[#525252] flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#0A0A0A]" />
              {profileData.location}
            </span>
            <span className="hidden sm:inline text-[#A3A3A3]">•</span>
            <span className="hidden sm:flex text-xs font-mono text-[#525252] items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#0A0A0A]" />
              {profileData.timezone}
            </span>
          </div>

          <div className="status-chip-success">
            <span className="w-2 h-2 bg-[#16A34A] inline-block animate-pulse" />
            <span>{profileData.status}</span>
          </div>
        </div>

        {/* Main Grid: Headline & Profile Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-8 flex flex-col space-y-5">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#0A0A0A] text-[#FAFAFA] text-[11px] font-mono font-bold uppercase tracking-wider rounded-none">
                <ShieldCheck className="w-3.5 h-3.5 text-[#EF4444]" />
                <span>CIVIL ENGINEER &amp; CONSTRUCTION PLANNER</span>
              </div>
              <h1 className="text-display text-[#0A0A0A] tracking-tight">
                ENGINEERING RIGOR, <br className="hidden sm:inline" />
                <span className="underline decoration-[#EF4444] decoration-[6px]">REALISTIC COST CONTROL</span>, &amp; JOBSITE INTEGRITY.
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl font-body font-semibold text-[#262626] leading-snug">
              {profileData.headline}
            </p>

            {/* Editorial Executive Summary Box */}
            <div className="border-l-4 border-[#EF4444] bg-[#FFFFFF] border-y-2 border-r-2 border-[#E5E5E5] p-5 sm:p-6 rounded-none">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#EF4444] font-bold block mb-2">
                // EXECUTIVE SUMMARY &amp; QUALIFICATION PROFILE
              </span>
              <p className="text-sm sm:text-base text-[#171717] font-body leading-relaxed">
                Diploma III Civil Engineering graduate from <strong className="text-[#0A0A0A] font-bold">Politeknik Negeri Padang (GPA 3.72/4.00, Magna Cum Laude)</strong>, certified as <strong className="text-[#0A0A0A] font-bold">BNSP Level 5 Intermediate Building Construction Supervisor</strong> and currently pursuing a D4 in Construction Engineering Management. Proven jobsite track record in technical planning, Quantity Surveying (BoQ/RAB &amp; Backup Volume registers), on-site Quality Control, and S-Curve construction scheduling. Proficient in <strong className="text-[#0A0A0A] font-bold">Autodesk Revit BIM</strong>, <strong className="text-[#0A0A0A] font-bold">AutoCAD DED</strong>, <strong className="text-[#0A0A0A] font-bold">SAP2000 seismic analysis</strong>, and <strong className="text-[#0A0A0A] font-bold">Microsoft Project CPM</strong>, backed by certified bilingual proficiency in <strong className="text-[#0A0A0A] font-bold">Japanese (JLPT N4 &amp; JFT-Basic)</strong> and <strong className="text-[#0A0A0A] font-bold">English (TOEIC 640)</strong>.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-3 print:hidden">
              <div className="flex flex-wrap items-center gap-3">
                <a href="#projects" className="btn-primary">
                  <span>EXPLORE BLUEPRINTS &amp; PROJECTS</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <a href="#contact" className="btn-secondary !bg-[#FFFFFF] hover:!bg-[#0A0A0A] hover:!text-[#FAFAFA]">
                  <span>GET IN TOUCH</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* CV Downloads */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-[#525252]">
                <span className="font-bold text-[#0A0A0A] uppercase tracking-wider mr-1">
                  OFFICIAL CV:
                </span>
                <a
                  href="/CV_Reza_Sepdide_English.docx"
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-[#0A0A0A] bg-[#FFFFFF] hover:bg-[#0A0A0A] text-[#0A0A0A] hover:text-[#FAFAFA] font-bold transition-colors rounded-none"
                  title="Download Latest CV in English (.docx)"
                >
                  <Download className="w-3.5 h-3.5 text-[#EF4444]" />
                  <span>ENGLISH (.DOCX)</span>
                </a>

                <a
                  href="/CV_Reza_Sepdide_Profesional.docx"
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-[#D4D4D4] bg-[#FFFFFF] hover:border-[#0A0A0A] hover:text-[#0A0A0A] font-bold transition-colors rounded-none"
                  title="Download Professional CV in Indonesian (.docx)"
                >
                  <FileText className="w-3.5 h-3.5 text-[#525252]" />
                  <span>INDONESIAN (.DOCX)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait & Accreditation */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {/* Portrait Frame */}
            <div className="border-2 border-[#0A0A0A] bg-[#FFFFFF] p-3 rounded-none">
              <div className="overflow-hidden border border-[#D4D4D4] bg-[#F5F5F5] aspect-square relative rounded-none">
                <img
                  src={officialPhoto}
                  alt="Reza Sepdide - Civil Engineer & Construction Planner"
                  className="w-full h-full object-cover object-center contrast-105"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-[#0A0A0A]/95 text-[#FAFAFA] py-1.5 px-2 text-center text-xs font-mono tracking-wider font-bold">
                  REZA SEPDIDE // D3 CIVIL ENGINEERING PNP
                </div>
              </div>

              {/* Verified badge tag */}
              <div className="mt-3 pt-2.5 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-mono">
                <span className="text-[#525252] font-semibold">STATE ACCREDITATION:</span>
                <span className="font-bold text-[#0A0A0A] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                  BNSP LEVEL 5
                </span>
              </div>
            </div>

            {/* Quick Contact Micro-Card */}
            <div className="card-editorial p-4 space-y-2 text-xs font-mono bg-[#FFFFFF]">
              <div className="flex justify-between items-center border-b border-[#E5E5E5] pb-2">
                <span className="text-[#525252] uppercase font-bold">EMAIL:</span>
                <a href={`mailto:${profileData.email}`} className="text-[#0A0A0A] font-bold hover:text-[#EF4444] truncate max-w-[210px]">
                  {profileData.email}
                </a>
              </div>
              <div className="flex justify-between items-center border-b border-[#E5E5E5] pb-2">
                <span className="text-[#525252] uppercase font-bold">WHATSAPP:</span>
                <a
                  href="https://wa.me/6289644590915"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#16A34A] font-bold hover:underline flex items-center gap-1"
                >
                  <MessageSquare className="w-3 h-3" />
                  +62 896-4459-0915
                </a>
              </div>
              <div className="flex justify-between items-center border-b border-[#E5E5E5] pb-2">
                <span className="text-[#525252] uppercase font-bold">LINKEDIN:</span>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A0A0A] font-bold underline hover:text-[#EF4444] inline-flex items-center gap-1"
                >
                  in/rezasepdide
                  <ExternalLink className="w-3 h-3 text-[#A3A3A3]" />
                </a>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#525252] uppercase font-bold">LOCATION:</span>
                <span className="text-[#0A0A0A] font-bold">Padang • Open to Relocation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Metrics Ribbon */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-[#0A0A0A] bg-[#FFFFFF] rounded-none">
          {profileData.keyStats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-5 sm:p-6 flex flex-col justify-between ${
                idx !== 0 ? 'border-t-2 lg:border-t-0 lg:border-l-2 border-[#0A0A0A]' : ''
              } hover:bg-[#FAFAFA] transition-colors`}
            >
              <div>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-display text-[#0A0A0A] block leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="text-overline text-[#EF4444] font-bold block mt-2.5">
                  {stat.label}
                </span>
              </div>

              <p className="text-xs text-[#333333] mt-3 font-body leading-relaxed font-medium">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
