import React from 'react';
import HeroCarousel from '@/components/sections/HeroCarousel';
import AboutAndVision from '@/components/sections/AboutAndVision';
import CultureValues from '@/components/sections/CultureValues';
import PillarEcosystem from '@/components/sections/PillarEcosystem';
import ImpactStats from '@/components/sections/ImpactStats';
import GovernanceLegal from '@/components/sections/GovernanceLegal';
import CollaborationPortal from '@/components/sections/CollaborationPortal';
import PartnersMarquee from '@/components/sections/PartnersMarquee';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with 2-column layout & Auto-slider */}
      <HeroCarousel />

      {/* 2. 3 Fokus Tentang Kami, Kartu Gradien Visi Utama & 4 Misi */}
      <AboutAndVision />

      {/* 3. 3 Prinsip Gerakan & 4 Nilai Inti (Integrity, Progressive Thinking, Evidence-Based, Social Impact) */}
      <CultureValues />

      {/* 4. Interactive 4-Pillar Deep-Dive Explorer (Akademi, Vokasi, Care, Tanggap) */}
      <PillarEcosystem />

      {/* 5. Dampak Terukur & Akuntabilitas Angka */}
      <ImpactStats />

      {/* 6. Struktur Organisasi SK Menkumham RI & 3 Kartu Legalitas One-Click Copy */}
      <GovernanceLegal />

      {/* 7. Portal Kemitraan 4 Jalur & Modal Formulir Sinergi Langsung */}
      <CollaborationPortal />

      {/* 8. Logo Marquee Kemitraan Strategis */}
      <PartnersMarquee />
    </>
  );
}
