
"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { GALLERY_IMAGES, type GalleryImage } from '@/lib/constants';
import { Expand } from 'lucide-react';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Resultados Que Hablan Por Sí Mismos
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Inspírate con algunas de nuestras transformaciones de balayage.
          </p>
        </div>
        
        <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {GALLERY_IMAGES.map((image) => (
              <DialogTrigger key={image.id} asChild onClick={() => setSelectedImage(image)}>
                <Card className="overflow-hidden group relative cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <CardContent className="p-0 aspect-[3/4]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      data-ai-hint={image.aiHint}
                      width={600}
                      height={800}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <p className="text-primary-foreground text-sm font-medium">{image.description}</p>
                       <Expand className="absolute top-4 right-4 h-6 w-6 text-primary-foreground opacity-70 group-hover:opacity-100" />
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
            ))}
          </div>

          {selectedImage && (
            <DialogContent className="sm:max-w-[600px] p-0 bg-card">
              <DialogHeader className="sr-only">
                <DialogTitle>{selectedImage.alt}</DialogTitle>
                <DialogDescription>{selectedImage.description}</DialogDescription>
              </DialogHeader>
              <div className="aspect-[3/4] relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  data-ai-hint={selectedImage.aiHint}
                  fill
                  className="object-contain rounded-t-lg"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-sm text-muted-foreground">{selectedImage.description}</p>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
