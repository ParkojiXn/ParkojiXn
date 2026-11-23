'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Muncul setelah 1 kali scroll ke bawah (melewati 100px)
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Inisialisasi awal saat pertama kali dimuat
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      title="Kembali ke atas"
      className={`fixed bottom-6 right-6 z-40 print:hidden flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#111111] text-[#F3EEE3] border-2 border-[#F3EEE3] shadow-2xl hover:bg-[#D9541E] hover:border-[#D9541E] transition-all duration-300 ease-in-out cursor-pointer group ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#F3EEE3] transition-transform duration-200 group-hover:-translate-y-1" />
    </button>
  );
};
