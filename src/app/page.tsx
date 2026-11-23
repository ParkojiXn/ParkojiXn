import React from 'react';
import {
  Navbar,
  Footer,
  MasterSidebar,
  OverviewSection,
  FeaturedProjects,
  ExperienceTimeline,
  SkillsMatrix,
  EducationCertifications,
  ContactSection,
  PdfViewerModal,
  PdfExportModal,
  BackToTop,
} from '../components';
import { PdfModalProvider } from '../context/PdfModalContext';

export default function HomePage() {
  return (
    <PdfModalProvider>
      <main className="min-h-screen flex flex-col cad-grid-bg text-[#111111]">
        {/* Mobile-only Navigation Header */}
        <div className="lg:hidden">
          <Navbar />
        </div>

        {/* Split Architectural Shell Container */}
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6 sm:py-8 lg:py-10 flex-1">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12 items-start">
            {/* Left Column: Sticky Master Sidebar */}
            <MasterSidebar className="w-full lg:w-[380px] xl:w-[420px] 2xl:w-[450px] lg:shrink-0 lg:sticky lg:top-8 lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto" />

            {/* Right Column: Dynamic Content Canvas */}
            <div className="flex-1 min-w-0 space-y-14 lg:space-y-16">
              <OverviewSection />
              <FeaturedProjects />
              <ExperienceTimeline />
              <EducationCertifications />
              <SkillsMatrix />
              <ContactSection />
            </div>
          </div>
        </div>

        {/* Universal Engineering Footer */}
        <Footer />

        {/* Global Interactive Modals */}
        <PdfViewerModal />
        <PdfExportModal />
        <BackToTop />
      </main>
    </PdfModalProvider>
  );
}
