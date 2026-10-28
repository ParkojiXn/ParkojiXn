'use client';

import React from 'react';
import { Compass, ShieldCheck, Users, Sparkles, HardHat, FileSpreadsheet } from 'lucide-react';
import { profileData } from '../data/cv-data';

export const CorePrinciples: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <HardHat className="w-5 h-5 text-[#EF4444]" />;
      case 1:
        return <FileSpreadsheet className="w-5 h-5 text-[#EF4444]" />;
      case 2:
        return <Users className="w-5 h-5 text-[#EF4444]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#EF4444]" />;
    }
  };

  return (
    <section id="principles" className="py-20 border-b-2 border-[#0A0A0A] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#0A0A0A] pb-6 mb-12 gap-6">
          <div>
            <span className="text-overline text-[#EF4444] font-bold block mb-1">
              // HOW I WORK & PERSONAL ETHIC
            </span>
            <h2 className="text-headline text-[#0A0A0A]">
              ENGINEERING PRINCIPLES & MINDSET
            </h2>
          </div>

          <p className="text-sm text-[#525252] max-w-md font-body">
            Engineering isn&apos;t just calculation spreadsheets; it is human collaboration, site safety, and a personal obligation to turn public and private investments into enduring structures.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profileData.coreValues?.map((pillar, idx) => (
            <div
              key={idx}
              className="card-editorial-elevated p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#F5F5F5] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-3 mb-4">
                  <span className="text-xs font-mono font-bold text-[#525252]">
                    PRINCIPLE // 0{idx + 1}
                  </span>
                  <div className="p-2 bg-[#FAFAFA] border border-[#D4D4D4] group-hover:border-[#0A0A0A] transition-colors">
                    {getIcon(idx)}
                  </div>
                </div>

                <h3 className="font-display text-xl text-[#0A0A0A] mb-1 group-hover:text-[#EF4444] transition-colors">
                  {pillar.title}
                </h3>
                <span className="text-xs font-mono text-[#EF4444] font-bold uppercase tracking-wider block mb-3">
                  {pillar.subtitle}
                </span>

                <p className="text-sm text-[#525252] font-body leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] font-mono text-[#A3A3A3]">
                <span>CORE STANDARD</span>
                <span className="text-[#0A0A0A] font-bold">NON-NEGOTIABLE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Human Story Callout Banner */}
        <div className="mt-12 bg-[#0A0A0A] text-[#FAFAFA] p-8 border-2 border-[#0A0A0A] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono text-[#EF4444] uppercase tracking-widest font-bold">
              // BEHIND THE BLUEPRINTS
            </span>
            <h3 className="font-display text-xl sm:text-2xl text-[#FAFAFA]">
              THE PERSON BEHIND THE QUANTITIES
            </h3>
            <p className="text-sm text-[#A3A3A3] font-body leading-relaxed">
              When I&apos;m not running structural simulations or auditing unit prices, I dedicate time to mastering the Japanese language (JLPT N4 / SSW certified for Japanese construction) and advancing into D4 Construction Engineering Management. I thrive on connecting with builders from different backgrounds and continually raising the bar of what careful engineering can achieve.
            </p>
          </div>

          <a
            href="#contact"
            className="btn-primary !bg-[#FAFAFA] !text-[#0A0A0A] hover:!bg-[#EF4444] hover:!text-[#FAFAFA] whitespace-nowrap self-start lg:self-center"
          >
            LET&apos;S CONNECT DIRECTLY
          </a>
        </div>
      </div>
    </section>
  );
};
