
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { BenefitsSection } from '@/components/sections/benefits-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { TeamSection } from '@/components/sections/team-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CtaSection } from '@/components/sections/cta-section';
import { StrandTestSection } from '@/components/sections/strand-test-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pb-24 md:pb-0"> {/* Added pb-24 for mobile, md:pb-0 for desktop */}
        <HeroSection />
        <BenefitsSection />
        <GallerySection />
        <TeamSection />
        <TestimonialsSection />
        <CtaSection />
        <StrandTestSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
