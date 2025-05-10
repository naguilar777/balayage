
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import React from 'react';

export function CtaSection() {
  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('#')) {
      event.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <section id="cta" className="bg-primary">
      <div className="container mx-auto px-4 py-16 text-center md:px-6 md:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
          ¿Lista Para Transformar Tu Cabello?
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-lg text-primary-foreground/90">
          No esperes más para lucir el balayage de tus sueños. Nuestro equipo de expertos está listo para asesorarte.
        </p>
        <div className="mt-10">
          <Button
            size="lg"
            variant="secondary" 
            asChild
            className="bg-background text-primary hover:bg-background/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Link href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")}>Reserva tu cita ahora</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
