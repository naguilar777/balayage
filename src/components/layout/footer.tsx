
"use client";

import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { SOCIAL_LINKS, type SocialLink } from '@/lib/constants';
import React from 'react';


export function Footer() {
  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('#')) {
      event.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // For external links or full page navigations, let default behavior apply
    // If the link is not an anchor link, it might be an external link or a different page.
    // In such cases, we don't prevent default to allow normal navigation.
    // However, if it's an internal page link (e.g., /privacy-policy) and not an anchor,
    // smooth scrolling isn't applicable, but we shouldn't prevent default either.
  };

  return (
    <footer className="bg-secondary/50 text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Logo isFooter={true} className="mb-2"/> {/* Added margin for spacing */}
            <p className="mt-2 text-sm text-secondary-foreground/80"> {/* Adjusted margin-top */}
              Transformando tu cabello, realzando tu belleza.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contacto</h3>
            <address className="mt-4 space-y-2 text-sm not-italic text-secondary-foreground/80">
              <p>Calle Falsa 123, Ciudad Ejemplo, CP 08000</p>
              <p>Email: <a href="mailto:info@balayagestudio.com" className="hover:text-primary">info@balayagestudio.com</a></p>
              <p>Teléfono: <a href="tel:+504000000000" className="hover:text-primary">(+504) 900 000 000</a></p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Síguenos</h3>
            <div className="mt-4 flex space-x-4">
              {SOCIAL_LINKS.map((link: SocialLink) => (
                <Button key={link.label} variant="ghost" size="icon" asChild className="text-secondary-foreground/80 hover:text-primary hover:bg-primary/10">
                  <Link href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-6 w-6" />
                    <span className="sr-only">{link.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-secondary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Balayage Studio by KYNSTUDIO. Todos los derechos reservados.</p>
          <p className="mt-1">
            <Link href="/privacy-policy" onClick={(e) => handleSmoothScroll(e, "/privacy-policy")} className="hover:text-primary">Política de Privacidad</Link>
            {' | '}
            <Link href="/terms-of-service" onClick={(e) => handleSmoothScroll(e, "/terms-of-service")} className="hover:text-primary">Términos de Servicio</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

