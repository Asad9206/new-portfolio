import React from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArchitectureFlow } from './components/ArchitectureFlow';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { LeetCodeSection } from './components/LeetCodeSection';
import { SalesforceSection } from './components/SalesforceSection';
import { Certifications } from './components/Certifications';
import { ResearchSection } from './components/ResearchSection';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#040711] text-slate-100 overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Floating Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Hero Scroll Transition: Request Pipeline Conduit */}
        <ArchitectureFlow />

        {/* 3. About Me Section */}
        <About />

        {/* 4. Education Timeline */}
        <Education />

        {/* 5. Technical Skills Clusters */}
        <Skills />

        {/* 6. Experience & AI Model Annotation */}
        <Experience />

        {/* 7. Selected Projects & Interactive Architecture Workflows */}
        <Projects />

        {/* 8. Major Achievements Highlight */}
        <Achievements />

        {/* 9. Dedicated LeetCode Consistency Showcase */}
        <LeetCodeSection />

        {/* 10. Dedicated Salesforce Ecosystem Showcase */}
        <SalesforceSection />

        {/* 11. Certifications & Credentials */}
        <Certifications />

        {/* 12. Research & Innovation (RAICCIT 2025) */}
        <ResearchSection />

        {/* 13. GitHub Repositories */}
        <GitHubSection />

        {/* 14. Contact & Direct Reach Out */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
