import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { CorePrinciples } from '../components/CorePrinciples';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { SkillsMatrix } from '../components/SkillsMatrix';
import { EducationCertifications } from '../components/EducationCertifications';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
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
    </main>
  );
}
