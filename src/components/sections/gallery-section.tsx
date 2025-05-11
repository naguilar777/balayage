
"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { GALLERY_IMAGES, type GalleryTransformation } from '@/lib/constants';
import { Expand } from 'lucide-react';

// Define the type for the selected image in the modal
type SelectedModalImage = {
  src: string;
  alt: string;
  description: string;
  aiHint: string;
};

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<SelectedModalImage | null>(null);

  return (
    <section id="gallery" className="bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Transformaciones: Antes y Después
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Observa el poder de un balayage bien hecho y cómo podemos realzar tu belleza.
          </p>
        </div>
        
        <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
          <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
            {GALLERY_IMAGES.map((transformation: GalleryTransformation) => (
              <div 
                key={transformation.id} 
                className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-3 md:p-4"
              >
                <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch">
                  {/* Before Image Column */}
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-[3/4] rounded-md overflow-hidden group shadow-md">
                      <Image
                        src={transformation.before.src}
                        alt={transformation.before.alt}
                        data-ai-hint={transformation.before.aiHint}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-2 left-2 bg-black/70 text-white text-xs font-semibold px-2.5 py-1.5 rounded-md shadow">
                        Antes
                      </div>
                    </div>
                  </div>

                  {/* After Image Column (Clickable) */}
                  <div className="w-full md:w-1/2">
                    <DialogTrigger
                      asChild
                      onClick={() => setSelectedImage({
                        src: transformation.after.src,
                        alt: transformation.after.alt,
                        description: transformation.description,
                        aiHint: transformation.after.aiHint,
                      })}
                    >
                      <div className="relative aspect-[3/4] rounded-md overflow-hidden cursor-pointer group shadow-md">
                        <Image
                          src={transformation.after.src}
                          alt={transformation.after.alt}
                          data-ai-hint={transformation.after.aiHint}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute top-2 left-2 bg-black/70 text-white text-xs font-semibold px-2.5 py-1.5 rounded-md shadow">
                          Después
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                          <Expand className="h-10 w-10 text-primary-foreground opacity-80 group-hover:opacity-100 mb-2 filter drop-shadow-sm" />
                          <p className="text-primary-foreground text-base font-semibold drop-shadow-sm">Ver Detalle</p>
                        </div>
                      </div>
                    </DialogTrigger>
                  </div>
                </div>
                <p className="mt-4 text-sm text-foreground/80 text-center px-1">
                  {transformation.description}
                </p>
              </div>
            ))}
          </div>

          {selectedImage && (
            <DialogContent className="sm:max-w-[calc(100vw-2rem)] md:max-w-[600px] lg:max-w-[700px] p-0 bg-card rounded-lg overflow-hidden">
              <DialogHeader className="sr-only">
                <DialogTitle>{selectedImage.alt}</DialogTitle>
                <DialogDescription>{selectedImage.description}</DialogDescription>
              </DialogHeader>
              <div className="w-full aspect-[3/4] relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  data-ai-hint={selectedImage.aiHint}
                  fill
                  className="object-contain"
                  sizes=" (max-width: 768px) 90vw, 600px"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-base font-semibold text-foreground mb-1">{selectedImage.alt}</p>
                <p className="text-sm text-muted-foreground">{selectedImage.description}</p>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
