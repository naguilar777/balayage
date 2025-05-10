
"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Logo } from '@/components/ui/logo';
import { NAV_LINKS, type NavLink } from '@/lib/constants';
import { cn } from '@/lib/utils';
import React from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('#')) {
      event.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // For mobile, ensure menu closes
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo className="py-2" /> {/* Added padding for better vertical alignment */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link: NavLink) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-3">
           <Button asChild className="hidden md:inline-flex shadow-md hover:shadow-lg transition-shadow">
            <Link href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")}>Reserva tu cita</Link>
          </Button>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-6">
                <div className="flex flex-col space-y-6">
                  <div className="flex justify-between items-center">
                    <Logo className="py-2"/> {/* Added padding for better vertical alignment */}
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Cerrar menú</span>
                      </Button>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {NAV_LINKS.map((link: NavLink) => (
                      <SheetClose key={link.label} asChild>
                        <Link
                          href={link.href}
                          className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                           onClick={(e) => handleSmoothScroll(e, link.href)}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <SheetClose asChild>
                    <Button asChild size="lg" className="w-full">
                      <Link href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")}>Reserva tu cita</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      {/* Fixed "Reserva tu cita" button for mobile, shown at bottom */}
      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-md z-40">
         <Button asChild size="lg" className="w-full shadow-xl hover:shadow-2xl transition-shadow">
            <Link href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")}>Reserva tu cita</Link>
          </Button>
      </div>
    </header>
  );
}

