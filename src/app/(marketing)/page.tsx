import React from 'react';
import HeroProgramStack from '@/components/sections/HeroProgramStack';
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
      {/* 1. Hero Stacked Program Cards (Referensi Sedia Berbagi / segi.id) */}
      <HeroProgramStack />

      {/* 2. 3 Fokus Tentang Kami, Visi & Misi Yayasan */}
      <AboutAndVision />

      {/* 3. 3 Prinsip Gerakan & 4 Nilai Inti */}
      <CultureValues />

      {/* 4. Ekosistem 4 Pilar Pemberdayaan */}
      <PillarEcosystem />

      {/* 5. Akuntabilitas Dampak Nyata */}
      <ImpactStats />

      {/* 6. Struktur Organisasi SK Menkumham RI & Legalitas */}
      <GovernanceLegal />

      {/* 7. Portal Kemitraan & Sinergi Multi-Pihak */}
      <CollaborationPortal />

      {/* 8. Logo Marquee Ekosistem Kolaborasi */}
      <PartnersMarquee />
    </>
  );
}
