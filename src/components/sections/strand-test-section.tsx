
"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { STRAND_TEST_BENEFITS, type StrandTestBenefitItem } from '@/lib/constants';
import { Gift, Clock, Shield, ClipboardList, Check, Star, ShieldCheck } from 'lucide-react'; 

export function StrandTestSection() {
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

  const whyChooseBenefits = [
    { icon: Gift, text: "Servicio completamente gratuito y sin compromiso." },
    { icon: Clock, text: "Dura solo una hora, viviendo el ambiente de nuestro salón premium." },
    { icon: ClipboardList, text: "Analizamos tu cabello y te asesoramos sobre el tono y tratamiento ideal para ti." },
    { icon: Shield, text: "Evitas sorpresas desagradables y cuidas la integridad de tu melena." },
  ];

  return (
    <section id="strand-test" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            ✨ Prueba de Mechón: El Primer Paso Hacia tu Transformación Sofisticada
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">
            La seguridad y belleza de tu cabello, en manos expertas, sin costo alguno.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-8 text-center">
            <div>
              <p className="text-foreground/80 mb-6 leading-relaxed max-w-xl mx-auto">
                Imagina descubrir tu mejor look de la mano de verdaderos especialistas en color:
                Antes de cualquier proceso de decoloración, te invitamos a nuestra exclusiva Prueba de Mechón. Un diagnóstico personalizado donde evaluamos la salud, resistencia y reacción de tu cabello, asegurando resultados impecables y a la medida de tus expectativas.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">¿Por qué elegir nuestra Prueba de Mechón?</h3>
              <ul className="space-y-3 text-foreground/80 inline-block text-left max-w-md mx-auto">
                {whyChooseBenefits.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <item.icon className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">¿En qué consiste la experiencia?</h3>
              <p className="text-foreground/80 leading-relaxed max-w-xl mx-auto">
                Seleccionamos delicadamente un mechón de tu cabello, aplicamos la técnica profesional de decoloración y evaluamos juntos el resultado. Te acompañamos en cada paso, resolviendo tus dudas y construyendo la base para un cambio espectacular.
              </p>
            </div>
          </div>

          {/* Image column - now a flex container for multiple images */}
          <div className="flex flex-col gap-8 mt-8 md:mt-0">
            {/* First Image */}
            <div className="relative aspect-[4/3] md:aspect-square rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://lh3.googleusercontent.com/d/1Iau4bba8U5XDeP7vu_cvecBZr8s-lbyC=w800-h600"
                alt="Proceso de prueba de mechón en un salón de belleza"
                data-ai-hint="hair strand test salon"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Second Image */}
            <div className="relative aspect-[4/3] md:aspect-square rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://lh3.googleusercontent.com/d/1t-YFk2OP1pFYxapKqqmQGWW2MzdkarMW=w800-h600"
                alt="Resultado detallado de una prueba de mechón"
                data-ai-hint="hair test close-up"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Beneficios que solo un salón exclusivo puede brindarte:
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {STRAND_TEST_BENEFITS.map((benefit: StrandTestBenefitItem, index: number) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <benefit.icon className="h-10 w-10 text-primary" />
                </div>
                <p className="text-foreground/80">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
           <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-6">
            Déjate asesorar por las manos más expertas.
            Haz clic y agenda hoy tu Prueba de Mechón gratuita. Da el primer paso hacia el cabello que siempre soñaste.
          </p>
          <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
            <Link href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")}>
              Agenda tu Prueba de Mechón Gratis
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

