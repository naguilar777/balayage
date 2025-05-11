"use client"; // Required for onClick handlers and hooks if any were needed here

import Link from 'next/link';
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
import { Button } from '@/components/ui/button';
import { smoothScrollToId } from '@/lib/utils';
import type React from 'react';


export default function Home() {
  // Event handler for the fixed mobile CTA button
  const handleMobileCtaScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    smoothScrollToId(event, href);
  };

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

      {/* Fixed "Reserva tu cita" button for mobile, shown at bottom */}
      {/* Moved from Header.tsx to ensure it's not a child of a sticky element with backdrop-filter */}
      <div className="md:hidden fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-md z-40 py-4">
         <Button asChild size="lg" className="w-full shadow-xl hover:shadow-2xl transition-shadow">
            <Link href="#contact" onClick={(e) => handleMobileCtaScroll(e, "#contact")}>Reserva tu cita</Link>
          </Button>
      </div>
    </div>
  );
}
