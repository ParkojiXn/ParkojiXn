import React from 'react';
import {
  Navbar,
  Footer,
  HeroSection,
  CorePrinciples,
  FeaturedProjects,
  ExperienceTimeline,
  SkillsMatrix,
  EducationCertifications,
  ContactSection,
  PdfViewerModal,
  PdfExportModal,
} from '../components';
import { PdfModalProvider } from '../context/PdfModalContext';

export default function HomePage() {
  return (
    <PdfModalProvider>
      <main className="min-h-screen flex flex-col bg-[#FAFAFA]">
        <Navbar />
        <HeroSection />
        <CorePrinciples />
        <FeaturedProjects />
        <ExperienceTimeline />
        <SkillsMatrix />
        <EducationCertifications />
        <ContactSection />
        <Footer />
        <PdfViewerModal />
        <PdfExportModal />
      </main>
    </PdfModalProvider>
  );
}
