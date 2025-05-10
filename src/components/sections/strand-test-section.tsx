
"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { STRAND_TEST_BENEFITS, type StrandTestBenefitItem } from '@/lib/constants';

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

  return (
    <section id="strand-test" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Prueba de Mechón Gratuita para Decoloración
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">
            Asegura la salud y belleza de tu cabello antes de cualquier tratamiento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">¿Qué es y por qué es importante?</h3>
              <p className="text-foreground/80 mb-3">
                Antes de realizar cualquier proceso de decoloración, es fundamental evaluar cómo reaccionará tu cabello. La prueba de mechón nos permite:
              </p>
              <ul className="list-disc list-inside space-y-1 text-foreground/80">
                <li>Determinar la resistencia y salud de tu cabello.</li>
                <li>Prever el resultado del color deseado.</li>
                <li>Evitar posibles reacciones adversas o daños.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Detalles del Servicio</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>
                  <strong className="text-foreground/90">Duración:</strong> Aproximadamente 1 hora.
                </li>
                <li>
                  <strong className="text-foreground/90">Costo:</strong> Sin costo alguno.
                </li>
                <li>
                  <strong className="text-foreground/90">Proceso:</strong>
                  <ul className="list-disc list-inside ml-5 mt-1 space-y-0.5">
                    <li>Selección de un pequeño mechón de cabello en una zona discreta.</li>
                    <li>Aplicación del producto de decoloración.</li>
                    <li>Evaluación de la reacción del cabello y resultado del color.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative aspect-[4/3] md:aspect-square rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://picsum.photos/seed/strand-test-process/800/600"
              alt="Proceso de prueba de mechón en un salón de belleza"
              data-ai-hint="hair strand test salon"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Beneficios de la Prueba
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
