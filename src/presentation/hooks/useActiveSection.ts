'use client';

import { useState, useEffect } from 'react';

export function useActiveSection(
  sectionIds: string[] = ['hero', 'principles', 'projects', 'experience', 'skills', 'education', 'contact'],
  offset: number = 200
) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || 'hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + offset;

      for (const section of sectionIds) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return { activeSection, isScrolled, setActiveSection };
}
