
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0 bg-gradient-to-br from-background to-secondary/30">
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/hero-balayage/1920/1080"
          alt="Modelo con espectacular balayage"
          data-ai-hint="balayage hair model"
          fill
          quality={85}
          className="object-cover opacity-30"
          priority
        />
         <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center md:px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Descubre Tu Mejor Look con Nuestro <span className="text-primary">Balayage</span> Personalizado
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 sm:text-xl md:text-2xl">
          Técnicas avanzadas, resultados naturales y exclusivos para ti. Resalta tu belleza con un color que hable de ti.
        </p>
        <div className="mt-10">
          <Button size="lg" asChild className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <Link href="#contact">Reserva ahora</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
