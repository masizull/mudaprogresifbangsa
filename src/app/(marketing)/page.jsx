import Hero from '@/components/sections/Hero';
import Manifesto from '@/components/sections/Manifesto';
import BentoVisiMisi from '@/components/sections/BentoVisiMisi';
import ProgramPillars from '@/components/sections/ProgramPillars';
import ImpactStats from '@/components/sections/ImpactStats';
import Testimonials from '@/components/sections/Testimonials';
import FaqSection from '@/components/sections/FaqSection';
import PartnersMarquee from '@/components/sections/PartnersMarquee';
import CtaSection from '@/components/sections/CtaSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <BentoVisiMisi />
      <ProgramPillars />
      <ImpactStats />
      <Testimonials />
      <FaqSection />
      <PartnersMarquee />
      <CtaSection />
    </>
  );
}
