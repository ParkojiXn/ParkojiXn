'use client';

import React from 'react';
import { 
  ShieldCheck, 
  HardHat, 
  FileSpreadsheet, 
  GraduationCap, 
  CheckCircle2, 
  ArrowDown, 
  MapPin, 
  Clock, 
  Download, 
  Layers
} from 'lucide-react';
import { profileData } from '../data/cv-data';

export const OverviewSection: React.FC = () => {
  const principles = [
    {
      icon: <HardHat className="w-5 h-5 text-[#D9541E]" />,
      tag: 'CONSTRUCTABILITY',
      title: 'Field Constructability & Practicality',
      subtitle: 'Bridging Blueprint Design with Jobsite Execution',
      desc: 'Drawings and schedules deliver real value only when they can be built safely, realistically, and accurately on site. Every estimate and timeline is reconciled with actual ground conditions and practical constructability.',
      badge: 'Field Constructability Verified'
    },
    {
      icon: <FileSpreadsheet className="w-5 h-5 text-[#D9541E]" />,
      tag: 'COST CONTROL',
      title: 'Accurate Cost Control & Zero-Waste Detailing',
      subtitle: 'Precision Take-Off & Bar Bending Schedules',
      desc: 'Developing detailed Bar Bending Schedules (BBS) to optimize rebar cutting patterns and minimize scrap, paired with transparent, audit-ready Bills of Quantities (BoQ) with zero unaccounted variances.',
      badge: 'Zero Unaccounted Variance'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#D9541E]" />,
      tag: 'AUDIT INTEGRITY',
      title: 'Audit-Ready Technical Documentation',
      subtitle: 'Transparent, Reliable & Standard-Compliant Records',
      desc: 'Every Progress Billing milestone is verified with authentic Backup Volume calculations, well-documented Contract Change Orders (CCO), and technical specifications meeting national SNI/PUPR standards.',
      badge: 'PUPR & SNI Standard Compliant'
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-[#D9541E]" />,
      tag: 'GLOBAL STANDARDS',
      title: 'Continuous Professional Mastery',
      subtitle: 'Advanced Education & International Standards',
      desc: 'Currently pursuing a D4 in Construction Engineering Management, mastering integrated multi-disciplinary BIM Revit workflows, and certified under Japanese industrial construction standards (SSW Tokutei Ginou).',
      badge: 'SSW Japan & D4 Competency'
    }
  ];

  return (
    <section id="overview" className="border-b-2 border-[#111111] pb-14 sm:pb-16 pt-2">
      <div className="space-y-10">
        {/* Top Header / Meta Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#111111] pb-3">
          <div className="flex items-center gap-2">
            <span className="text-overline text-[#D9541E] font-bold">
              // SECTION 01 &bull; EXECUTIVE OVERVIEW
            </span>
            <span className="text-[#A3A3A3]">•</span>
            <span className="text-xs font-mono text-[#525252]">
              CIVIL ENGINEERING DOSSIER
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#525252]">
            <MapPin className="w-3.5 h-3.5 text-[#111111]" />
            <span>{profileData.location}</span>
          </div>
        </div>

        {/* Hero Headline & Lead Statement */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#111111] text-[#F3EEE3] text-[11px] font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D9541E]" />
            <span>CERTIFIED CIVIL ENGINEER &amp; CONSTRUCTION PLANNER</span>
          </div>

          <h2 className="text-display text-[#111111] tracking-tight">
            ENGINEERING RIGOR, <br className="hidden sm:inline" />
            <span className="underline decoration-[#D9541E] decoration-[6px]">REALISTIC COST CONTROL</span>, &amp; JOBSITE INTEGRITY.
          </h2>

          <p className="text-base sm:text-lg font-body font-semibold text-[#111111] leading-relaxed max-w-4xl">
            {profileData.headline}
          </p>
        </div>

        {/* Editorial Executive Summary Box */}
        <div className="border-l-4 border-[#D9541E] bg-[#FAF7F0] border-y-2 border-r-2 border-[#DDD6C7] p-5 sm:p-6 shadow-sm">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#D9541E] font-bold block mb-2">
            // EXECUTIVE SUMMARY &amp; QUALIFICATION PROFILE
          </span>
          <p className="text-sm sm:text-base text-[#111111] font-body leading-relaxed">
            Diploma III Civil Engineering graduate from <strong className="text-[#111111] font-bold">Politeknik Negeri Padang (GPA 3.72/4.00, Cum Laude)</strong>, certified under <strong className="text-[#111111] font-bold">BNSP KKNI Level 5: Implementing Intermediate Building Works (Pelaksana Lapangan Pekerjaan Gedung Madya, Reg. F7472118)</strong> and currently pursuing a D4 in Construction Engineering Management. Proven jobsite track record in technical planning, Quantity Surveying (BoQ/RAB &amp; Backup Volume registers), on-site Quality Control, and S-Curve construction scheduling. Proficient in <strong className="text-[#111111] font-bold">Autodesk Revit</strong>, <strong className="text-[#111111] font-bold">AutoCAD DED</strong>, <strong className="text-[#111111] font-bold">SAP2000 seismic analysis</strong>, and <strong className="text-[#111111] font-bold">Microsoft Project CPM</strong>, backed by certified proficiency in <strong className="text-[#111111] font-bold">Japanese (JLPT N4 &amp; JFT-Basic 250)</strong> and <strong className="text-[#111111] font-bold">English (TOEIC® Prediction 640)</strong>.
          </p>

          <div className="mt-4 pt-3 border-t border-[#DDD6C7] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#525252]">
            <span>SNI 2847 (Concrete) &bull; SNI 1726 (Seismic) &bull; PUPR AHSP Standards</span>
            <a
              href="#projects"
              className="text-[#D9541E] font-bold hover:underline flex items-center gap-1"
            >
              <span>Explore 13+ Verified Case Studies</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Quantified Metrics Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {profileData.keyStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F0] border-2 border-[#111111] p-4 flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl sm:text-3xl font-display text-[#111111] block">
                  {stat.value}
                </span>
                <span className="text-[10px] font-mono font-bold text-[#D9541E] uppercase tracking-wider block mt-1">
                  {stat.label}
                </span>
              </div>
              <p className="text-[11px] font-body text-[#525252] mt-2 line-clamp-2">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Core Engineering Principles */}
        <div className="space-y-6 pt-4">
          <div className="border-b-2 border-[#111111] pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#D9541E] uppercase tracking-widest block mb-1">
                // METHODOLOGY &amp; WORK ETHIC
              </span>
              <h3 className="font-display text-xl sm:text-2xl text-[#111111] uppercase tracking-tight">
                FOUR CORE ENGINEERING PRINCIPLES
              </h3>
            </div>
            <span className="text-xs font-mono text-[#525252]">
              Strict SNI / PUPR compliance, zero-waste detailing &amp; continuous mastery
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {principles.map((item, index) => (
              <div
                key={index}
                className="bg-[#FAF7F0] border-2 border-[#111111] p-5 sm:p-6 flex flex-col justify-between hover:border-[#D9541E] transition-colors relative"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#DDD6C7] pb-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-[#EAE4D7] border border-[#DDD6C7]">
                        {item.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-[#111111] tracking-wider uppercase">
                        {item.tag}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#737373]">
                      0{index + 1}
                    </span>
                  </div>

                  <h4 className="font-display text-base sm:text-lg text-[#111111] uppercase mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs font-mono text-[#D9541E] font-medium mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm font-body text-[#3E3E3E] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#DDD6C7] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#2D5A27] font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5A27]" />
                    {item.badge}
                  </span>
                  <span className="text-[#737373] text-[10px]">SNI / PUPR</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
