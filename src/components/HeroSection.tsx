'use client';

import React from 'react';
import { ArrowDown, FileText, Mail, MapPin, CheckCircle2, Clock, MessageSquare } from 'lucide-react';
import { profileData } from '../data/cv-data';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative border-b-2 border-[#0A0A0A] bg-[#FAFAFA] pt-12 pb-16 lg:pt-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#0A0A0A] pb-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="text-overline text-[#EF4444] font-bold">PROFESSIONAL DOSSIER</span>
            <span className="text-[#A3A3A3]">•</span>
            <span className="text-xs font-mono text-[#525252] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {profileData.location}
            </span>
            <span className="hidden sm:inline text-[#A3A3A3]">•</span>
            <span className="hidden sm:flex text-xs font-mono text-[#525252] items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {profileData.timezone}
            </span>
          </div>

          <div className="status-chip-success">
            <span className="w-2 h-2 bg-[#16A34A] inline-block animate-pulse" />
            <span>{profileData.status}</span>
          </div>
        </div>

        {/* Main Grid: Headline & Profile Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-8 flex flex-col space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-[#525252] uppercase block">
                // CIVIL ENGINEER &amp; CONSTRUCTION PLANNER
              </span>
              <h1 className="text-display text-[#0A0A0A]">
                PRECISION ENGINEERING, <br className="hidden sm:inline" />
                <span className="text-[#0A0A0A] underline decoration-[#EF4444] decoration-[6px]">REALISTIC BUDGETING</span>, &amp; SITE-TESTED RIGOR.
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl font-body font-medium text-[#0A0A0A] leading-snug">
              {profileData.headline}
            </p>

            {/* Editorial Bio Statement */}
            <div className="pull-quote my-2">
              <p className="text-base text-[#0A0A0A] font-body italic leading-relaxed">
                &ldquo;{profileData.bioSummary}&rdquo;
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="btn-primary"
              >
                <span>EXPLORE FEATURED PROJECTS</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="btn-secondary"
              >
                <span>GET IN TOUCH</span>
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="/CV_Reza_Sepdide_Profesional.docx"
                download
                className="btn-secondary !border-[#525252] !text-[#525252] hover:!border-[#0A0A0A] hover:!text-[#0A0A0A]"
                title="Download Reza's Official Resume (.docx)"
              >
                <FileText className="w-4 h-4" />
                <span>DOWNLOAD RESUME (.DOCX)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Card & Direct Channels */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            {/* Portrait Frame */}
            <div className="border-2 border-[#0A0A0A] bg-[#FAFAFA] p-3 relative group">
              <div className="overflow-hidden border border-[#D4D4D4] bg-[#F5F5F5] aspect-[4/5] relative">
                <img
                  src="/profile.jpg"
                  alt="Reza Sepdide - Civil Engineer & Construction Planner"
                  className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A0A0A] text-[#FAFAFA] p-2 text-center text-xs font-mono">
                  REZA SEPDIDE // D3 CIVIL ENGINEERING
                </div>
              </div>

              {/* Verified badge tag */}
              <div className="mt-3 pt-3 border-t-2 border-[#E5E5E5] flex items-center justify-between text-xs font-mono">
                <span className="text-[#525252]">ACCREDITATION:</span>
                <span className="font-bold text-[#0A0A0A] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                  BNSP LEVEL 5 (JENJANG 5)
                </span>
              </div>
            </div>

            {/* Quick Contact Micro-Card */}
            <div className="card-editorial space-y-2.5 text-xs font-mono">
              <div className="flex justify-between items-center border-b border-[#E5E5E5] pb-2">
                <span className="text-[#525252]">EMAIL:</span>
                <a href={`mailto:${profileData.email}`} className="text-[#0A0A0A] font-bold hover:text-[#EF4444] truncate max-w-[190px]">
                  {profileData.email}
                </a>
              </div>
              <div className="flex justify-between items-center border-b border-[#E5E5E5] pb-2">
                <span className="text-[#525252]">WHATSAPP:</span>
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
                <span className="text-[#525252]">LINKEDIN:</span>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A0A0A] font-bold underline hover:text-[#EF4444]"
                >
                  linkedin.com/in/rezasepdide
                </a>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#525252]">LOCATION:</span>
                <span className="text-[#0A0A0A] font-bold">Sumatra &amp; Open to Relocate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Metrics Ribbon */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-[#0A0A0A] bg-[#FAFAFA]">
          {profileData.keyStats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-5 sm:p-6 flex flex-col justify-between ${
                idx !== 0 ? 'border-t-2 md:border-t-0 md:border-l-2 border-[#0A0A0A]' : ''
              } hover:bg-[#F5F5F5] transition-colors`}
            >
              <div>
                <span className="text-display font-display text-[#0A0A0A] block leading-none">
                  {stat.value}
                </span>
                <span className="text-overline text-[#EF4444] block mt-2">
                  {stat.label}
                </span>
              </div>
              <p className="text-xs text-[#525252] mt-3 font-body">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
