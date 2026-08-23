import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProposalsSection } from './components/ProposalsSection';
import { UrnaSimulator } from './components/UrnaSimulator';
import { SantinhoGenerator } from './components/SantinhoGenerator';
import { CitizenIdeasSection } from './components/CitizenIdeasSection';
import { AgendaSection } from './components/AgendaSection';
import { JinglePlayer } from './components/JinglePlayer';
import { MaterialsDownloadSection } from './components/MaterialsDownloadSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { VolunteerSection } from './components/VolunteerSection';
import { Footer } from './components/Footer';
import { QuickFloatCTA } from './components/QuickFloatCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1C2B45] flex flex-col selection:bg-[#1E9BD7] selection:text-white">
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Campaign Sections */}
      <main className="flex-1">
        {/* High-Impact Hero Banner with Candidate Portrait, 36181 & Slogan */}
        <HeroSection />

        {/* Candidate Story, Values & Connection with ES */}
        <AboutSection />

        {/* 6 Flagship Pillars & Detailed Propostas */}
        <ProposalsSection />

        {/* Interactive Urna Eletrônica Simulator */}
        <UrnaSimulator />

        {/* Digital Santinho & Virtual Sticker Generator */}
        <SantinhoGenerator />

        {/* Volunteer & Supporter Registration ("Tropa do 36181") */}
        <VolunteerSection />

        {/* Citizen Ideas & Proposals for ES Cities */}
        <CitizenIdeasSection />

        {/* Campaign Jingle Player & Sing-Along */}
        <JinglePlayer />

        {/* Events Calendar & City Walk Agenda */}
        <AgendaSection />

        {/* Testimonials & Voices of Capixabas */}
        <TestimonialsSection />

        {/* Download Hub for Official Materials & Stickers */}
        <MaterialsDownloadSection />
      </main>

      {/* Official Campaign Footer with Legal Disclosure */}
      <Footer />

      {/* Floating Action CTA */}
      <QuickFloatCTA />
    </div>
  );
}
