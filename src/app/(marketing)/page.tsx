import React from 'react';
import HeroProgramStack from '@/components/sections/HeroProgramStack';
import InteractiveAboutJourney from '@/components/sections/InteractiveAboutJourney';
import InteractiveVisionMission from '@/components/sections/InteractiveVisionMission';
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

      {/* 2. Section Tentang Kami: Panggung Analogi 3 Tahap Berjenjang */}
      <InteractiveAboutJourney />

      {/* 3. Section Visi & Misi: Interactive 12-Column Command Hub */}
      <InteractiveVisionMission />

      {/* 4. 3 Prinsip Gerakan & 4 Nilai Inti */}
      <CultureValues />

      {/* 5. Ekosistem 4 Pilar Pemberdayaan */}
      <PillarEcosystem />

      {/* 6. Akuntabilitas Dampak Nyata */}
      <ImpactStats />

      {/* 7. Struktur Organisasi SK Menkumham RI & Legalitas */}
      <GovernanceLegal />

      {/* 8. Portal Kemitraan & Sinergi Multi-Pihak */}
      <CollaborationPortal />

      {/* 9. Logo Marquee Ekosistem Kolaborasi */}
      <PartnersMarquee />
    </>
  );
}