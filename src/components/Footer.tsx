'use client';

import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/cv-data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#FAFAFA] border-t-4 border-[#EF4444]">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[#262626]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <span className="font-display text-2xl sm:text-3xl tracking-tight block">
              {profileData.name}
            </span>
            <p className="text-sm font-mono text-[#A3A3A3] mt-1">
              CIVIL ENGINEERING GRADUATE // QUANTITY SURVEYOR // BIM MODELER
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToTop}
              className="border-2 border-[#FAFAFA] text-[#FAFAFA] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#EF4444] hover:border-[#EF4444] transition-colors flex items-center gap-2"
            >
              <span>KEMBALI KE ATAS</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Editorial Colophon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono text-[#A3A3A3]">
          <div>
            <span className="text-[#FAFAFA] font-bold block mb-2">// SISTEM DESAIN</span>
            <p className="leading-relaxed">
              Dibangun dengan kepatuhan penuh pada VoiceBox Design System — Editorial Magazine Aesthetic. Flat architecture, 2px borders, typography Archivo Black & Work Sans.
            </p>
          </div>

          <div>
            <span className="text-[#FAFAFA] font-bold block mb-2">// STANDAR KUALIFIKASI</span>
            <p className="leading-relaxed">
              Sertifikasi Kompetensi Kerja (SKK) Jenjang 5 BNSP No. Registrasi Pelaksana Lapangan Gedung Madya, diselenggarakan oleh Kementerian PU BJKW I Banda Aceh.
            </p>
          </div>

          <div>
            <span className="text-[#FAFAFA] font-bold block mb-2">// HAK CIPTA & LISENSI</span>
            <p className="leading-relaxed">
              © {new Date().getFullYear()} Reza Sepdide. Seluruh hak cipta dilindungi undang-undang. Dokumen teknis dan data diverifikasi dari berkas resmi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
