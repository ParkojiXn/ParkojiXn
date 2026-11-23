'use client';

import React from 'react';
import { ArrowDown, ArrowUpRight, FileText, MapPin, CheckCircle2, Clock, MessageSquare, Download, ShieldCheck, ExternalLink } from 'lucide-react';
import { profileData } from '../data/cv-data';

export const HeroSection: React.FC = () => {
  const officialPhoto = '/portfolio/profile/professional-photo.jpeg';

  return (
    <section id="hero" className="relative border-b-2 border-[#111111] bg-[#F3EEE3] pt-8 pb-14 lg:pt-12 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#111111] pb-3.5 mb-8 lg:mb-10 print:hidden">
          <div className="flex items-center gap-3">
            <span className="text-overline text-[#D9541E] font-bold">PROFESSIONAL DOSSIER</span>
            <span className="text-[#A3A3A3]">•</span>
            <span className="text-xs font-mono text-[#525252] flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#111111]" />
              {profileData.location}
            </span>
            <span className="hidden sm:inline text-[#A3A3A3]">•</span>
            <span className="hidden sm:flex text-xs font-mono text-[#525252] items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#111111]" />
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
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#111111] text-[#F3EEE3] text-[11px] font-mono font-bold uppercase tracking-wider rounded-none">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D9541E]" />
                <span>CIVIL ENGINEER &amp; CONSTRUCTION PLANNER</span>
              </div>
              <h1 className="text-display text-[#111111] tracking-tight">
                ENGINEERING RIGOR, <br className="hidden sm:inline" />
                <span className="underline decoration-[#D9541E] decoration-[6px]">REALISTIC COST CONTROL</span>, &amp; JOBSITE INTEGRITY.
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl font-body font-semibold text-[#111111] leading-snug">
              {profileData.headline}
            </p>

            {/* Editorial Executive Summary Box */}
            <div className="border-l-4 border-[#D9541E] bg-[#FAF7F0] border-y-2 border-r-2 border-[#DDD6C7] p-5 sm:p-6 rounded-none">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#D9541E] font-bold block mb-2">
                // EXECUTIVE SUMMARY &amp; QUALIFICATION PROFILE
              </span>
              <p className="text-sm sm:text-base text-[#111111] font-body leading-relaxed">
                Diploma III Civil Engineering graduate from <strong className="text-[#111111] font-bold">Politeknik Negeri Padang (GPA 3.72/4.00, Cum Laude)</strong>, certified under <strong className="text-[#111111] font-bold">BNSP KKNI Level 5: Implementing Intermediate Building Works (Pelaksana Lapangan Pekerjaan Gedung Madya, Reg. F7472118)</strong> and currently pursuing a D4 in Construction Engineering Management. Proven jobsite track record in technical planning, Quantity Surveying (BoQ/RAB &amp; Backup Volume registers), on-site Quality Control, and S-Curve construction scheduling. Proficient in <strong className="text-[#111111] font-bold">Autodesk Revit</strong>, <strong className="text-[#111111] font-bold">AutoCAD DED</strong>, <strong className="text-[#111111] font-bold">SAP2000 seismic analysis</strong>, and <strong className="text-[#111111] font-bold">Microsoft Project CPM</strong>, backed by certified proficiency in <strong className="text-[#111111] font-bold">Japanese (JLPT N4 &amp; JFT-Basic 250)</strong> and <strong className="text-[#111111] font-bold">English (TOEIC® Prediction 640)</strong>.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-3 print:hidden">
              <div className="flex flex-wrap items-center gap-3">
                <a href="#projects" className="btn-primary">
                  <span>EXPLORE BLUEPRINTS &amp; PROJECTS</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <a href="#contact" className="btn-secondary !bg-[#FAF7F0] hover:!bg-[#111111] hover:!text-[#F3EEE3]">
                  <span>GET IN TOUCH</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* CV Downloads */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-[#3E3E3E]">
                <span className="font-bold text-[#111111] uppercase tracking-wider mr-1">
                  OFFICIAL CV:
                </span>
                <a
                  href="/CV_Reza_Sepdide_English.docx"
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-[#111111] bg-[#FAF7F0] hover:bg-[#111111] text-[#111111] hover:text-[#F3EEE3] font-bold transition-colors rounded-none"
                  title="Download Latest CV in English (.docx)"
                >
                  <Download className="w-3.5 h-3.5 text-[#D9541E]" />
                  <span>ENGLISH (.DOCX)</span>
                </a>

                <a
                  href="/CV_Reza_Sepdide_Profesional.docx"
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-[#C8C0B0] bg-[#FAF7F0] hover:border-[#111111] hover:text-[#111111] font-bold transition-colors rounded-none"
                  title="Download Professional CV in Indonesian (.docx)"
                >
                  <FileText className="w-3.5 h-3.5 text-[#3E3E3E]" />
                  <span>INDONESIAN (.DOCX)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait & Accreditation */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {/* Portrait Frame */}
            <div className="border-2 border-[#111111] bg-[#FFFFFF] p-3 rounded-none">
              <div className="overflow-hidden border border-[#C8C0B0] bg-[#EAE4D7] aspect-square relative rounded-none">
                <img
                  src={officialPhoto}
                  alt="Reza Sepdide - Civil Engineer & Construction Planner"
                  className="w-full h-full object-cover object-center contrast-105"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-[#111111]/95 text-[#F3EEE3] py-1.5 px-2 text-center text-xs font-mono tracking-wider font-bold">
                  REZA SEPDIDE // D3 CIVIL ENGINEERING PNP
                </div>
              </div>

              {/* Verified badge tag */}
              <div className="mt-3 pt-2.5 border-t border-[#DDD6C7] flex items-center justify-between text-xs font-mono">
                <span className="text-[#525252] font-semibold">STATE ACCREDITATION:</span>
                <span className="font-bold text-[#111111] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                  BNSP LEVEL 5
                </span>
              </div>
            </div>

            {/* Quick Contact Micro-Card */}
            <div className="card-editorial p-4 space-y-2 text-xs font-mono bg-[#FFFFFF]">
              <div className="flex justify-between items-center border-b border-[#DDD6C7] pb-2">
                <span className="text-[#525252] uppercase font-bold">EMAIL:</span>
                <a href={`mailto:${profileData.email}`} className="text-[#111111] font-bold hover:text-[#D9541E] truncate max-w-[210px]">
                  {profileData.email}
                </a>
              </div>
              <div className="flex justify-between items-center border-b border-[#DDD6C7] pb-2">
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
              <div className="flex justify-between items-center border-b border-[#DDD6C7] pb-2">
                <span className="text-[#525252] uppercase font-bold">LINKEDIN:</span>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111111] font-bold underline hover:text-[#D9541E] inline-flex items-center gap-1"
                >
                  in/rezasepdide
                  <ExternalLink className="w-3 h-3 text-[#A3A3A3]" />
                </a>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#525252] uppercase font-bold">LOCATION:</span>
                <span className="text-[#111111] font-bold">Padang • Open to Relocation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Metrics Ribbon */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-[#111111] bg-[#FFFFFF] rounded-none">
          {profileData.keyStats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-5 sm:p-6 flex flex-col justify-between ${
                idx !== 0 ? 'border-t-2 lg:border-t-0 lg:border-l-2 border-[#111111]' : ''
              } hover:bg-[#F3EEE3] transition-colors`}
            >
              <div>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-display text-[#111111] block leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="text-overline text-[#D9541E] font-bold block mt-2.5">
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
