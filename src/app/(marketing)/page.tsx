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
import SectionTransition from '@/components/layout/SectionTransition';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Stacked Program Cards (Referensi Sedia Berbagi / segi.id) */}
      <HeroProgramStack />

      {/* 2. Section Tentang Kami: Panggung Analogi 3 Tahap Berjenjang */}
      <SectionTransition>
        <InteractiveAboutJourney />
      </SectionTransition>

      {/* 3. Section Visi & Misi: Interactive Hub */}
      <SectionTransition>
        <InteractiveVisionMission />
      </SectionTransition>

      {/* 4. 3 Prinsip Gerakan & 4 Nilai Inti */}
      <SectionTransition>
        <CultureValues />
      </SectionTransition>

      {/* 5. Ekosistem 4 Pilar Pemberdayaan */}
      <SectionTransition>
        <PillarEcosystem />
      </SectionTransition>

      {/* 6. Akuntabilitas Dampak Nyata */}
      <SectionTransition>
        <ImpactStats />
      </SectionTransition>

      {/* 7. Struktur Organisasi SK Menkumham RI & Legalitas */}
      <SectionTransition>
        <GovernanceLegal />
      </SectionTransition>

      {/* 8. Portal Kemitraan & Sinergi Multi-Pihak */}
      <SectionTransition>
        <CollaborationPortal />
      </SectionTransition>

      {/* 9. Logo Marquee Ekosistem Kolaborasi */}
      <SectionTransition>
        <PartnersMarquee />
      </SectionTransition>
    </>
  );
}