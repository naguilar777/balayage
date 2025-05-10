
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TESTIMONIALS_DATA, type Testimonial } from '@/lib/constants';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Lo Que Opinan Nuestras Clientas
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Estamos orgullosas de las sonrisas que ayudamos a crear.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS_DATA.map((testimonial: Testimonial) => (
            <Card key={testimonial.id} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <Image
                  src={testimonial.avatarSrc}
                  alt={`Avatar de ${testimonial.name}`}
                  data-ai-hint={testimonial.aiHint}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                  <div className="flex mt-1">
                    {Array(5).fill(0).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.stars ? 'text-primary fill-primary' : 'text-muted-foreground/50'}`}
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-foreground/80 flex-grow">
                <p className="italic">&quot;{testimonial.text}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
