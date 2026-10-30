import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Manifesto from './components/Manifesto.jsx';
import BentoVisiMisi from './components/BentoVisiMisi.jsx';
import ProgramPillars from './components/ProgramPillars.jsx';
import ImpactStats from './components/ImpactStats.jsx';
import Testimonials from './components/Testimonials.jsx';
import FaqSection from './components/FaqSection.jsx';
import PartnersMarquee from './components/PartnersMarquee.jsx';
import CtaSection from './components/CtaSection.jsx';
import Footer from './components/Footer.jsx';
import RegisterModal from './components/RegisterModal.jsx';
import PartnerModal from './components/PartnerModal.jsx';
import CurriculumModal from './components/CurriculumModal.jsx';
import FloatingActions from './components/FloatingActions.jsx';

export default function App() {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);
  const [curriculumOpen, setCurriculumOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-slate-bg text-brand-navy flex flex-col antialiased selection:bg-brand-orange selection:text-white">
      {/* Sticky Interactive Navbar */}
      <Navbar 
        onOpenRegister={() => setRegisterOpen(true)}
        onOpenPartner={() => setPartnerOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenRegister={() => setRegisterOpen(true)}
          onOpenCurriculum={() => setCurriculumOpen(true)}
        />

        {/* Manifesto Section */}
        <Manifesto />

        {/* Visi & Misi Bento Grid */}
        <BentoVisiMisi />

        {/* Pilar Program (Education, Economy, Environment) */}
        <ProgramPillars 
          onOpenRegister={() => setRegisterOpen(true)}
          onOpenCurriculum={() => setCurriculumOpen(true)}
        />

        {/* Impact Stats (Clean Dark Theme) */}
        <ImpactStats 
          onOpenPartner={() => setPartnerOpen(true)}
        />

        {/* Real Stories / Testimonials */}
        <Testimonials />

        {/* Interactive FAQ */}
        <FaqSection 
          onOpenRegister={() => setRegisterOpen(true)}
          onOpenPartner={() => setPartnerOpen(true)}
        />

        {/* Mitra Strategis Grayscale Marquee */}
        <PartnersMarquee />

        {/* Final CTA */}
        <CtaSection 
          onOpenRegister={() => setRegisterOpen(true)}
          onOpenPartner={() => setPartnerOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenRegister={() => setRegisterOpen(true)}
        onOpenPartner={() => setPartnerOpen(true)}
        onOpenCurriculum={() => setCurriculumOpen(true)}
      />

      {/* Interactive Modals */}
      <RegisterModal 
        isOpen={registerOpen} 
        onClose={() => setRegisterOpen(false)} 
      />

      <PartnerModal 
        isOpen={partnerOpen} 
        onClose={() => setPartnerOpen(false)} 
      />

      <CurriculumModal 
        isOpen={curriculumOpen} 
        onClose={() => setCurriculumOpen(false)} 
      />

      {/* Floating Action Controls */}
      <FloatingActions 
        onOpenRegister={() => setRegisterOpen(true)} 
      />
    </div>
  );
}
