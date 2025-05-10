
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BENEFITS_DATA, type Benefit } from '@/lib/constants';

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            ¿Por Qué Elegir Nuestro Balayage?
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Descubre las ventajas que nos hacen tu mejor opción para un cambio de look espectacular.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS_DATA.map((benefit: Benefit, index: number) => (
            <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                  <benefit.icon className="h-10 w-10" />
                </div>
                <CardTitle className="text-xl font-semibold">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-foreground/70 flex-grow">
                <p>{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
