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
  // Combine before and after images into a single array for the gallery display
  const galleryImages = GALLERY_IMAGES.flatMap(item => [
    { ...item.before, description: `Antes: ${item.description || 'Imagen sin descripción'}` },
    { ...item.after, description: `Después: ${item.description || 'Imagen sin descripción'}` }
  ]);
  const [selectedImage, setSelectedImage] = useState<SelectedModalImage | null>(null);

  return (
    // The background color `bg-secondary/30` is kept as is, assuming it fits the "blush suave" or white palette.
    <section id="gallery" className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          {/* Updated Section Title */}
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nuestro Arte en KYNSTUDIO
          </h2>
          {/* Added Subtitle */}
          <p className="mt-4 text-xl text-foreground max-w-2xl mx-auto">
            Descubre la esencia y el proceso detrás de cada Balayage
          </p>
          {/* Added Introduction */}
          <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">
            En KYNSTUDIO, cada Balayage es una obra personalizada. Nuestro proceso comienza con una consulta detallada, donde entendemos tus expectativas y evaluamos la salud de tu cabello. Creamos resultados únicos—mezclando técnica, creatividad y productos premium—para realzar tu belleza natural y lograr un acabado moderno y sofisticado.
          </p>
        </div>

        <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
          {/* Adjusted grid columns based on screen size */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <DialogTrigger asChild key={index}>
                <div
                  key={`gallery-image-${index}`}
                  // Added rounded corners, subtle shadow, and hover effect (scale and subtle ring/outline)
                  className="relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-primary/50"
                  onClick={() => setSelectedImage({
                    src: image.src,
                    alt: image.alt,
                    description: image.description, // Using the description from the image object
                    aiHint: image.aiHint,
                  })}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    data-ai-hint={image.aiHint}
                    fill
                    // Added w-full and h-full here
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 25vw"
                  />
                  {/* Overlay for hover effect - slightly adjusted opacity and content */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <Expand className="h-8 w-8 text-white opacity-90 group-hover:opacity-100" />
                  </div>
                  {/* Removed text overlay on hover to keep it cleaner */}
                </div>
              </DialogTrigger>
            ))}
          </div>

          {selectedImage && (
            // Modal Content - Kept largely the same, adjusted padding and added description below image
            <DialogContent className="sm:max-w-[calc(100vw-2rem)] md:max-w-[80vw] lg:max-w-[900px] p-4 md:p-6 bg-card rounded-lg overflow-hidden">
              <DialogHeader className="sr-only">
                <DialogTitle>{selectedImage.alt}</DialogTitle>
                {/* DialogDescription is typically for accessibility, the visual description is below */}
                <DialogDescription>{selectedImage.description}</DialogDescription>
              </DialogHeader>
              {/* Image container in modal */}
              <div className="w-full aspect-[3/4] relative mb-4">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  data-ai-hint={selectedImage.aiHint}
                  fill
                   // Added w-full and h-full here
                  className="object-contain w-full h-full rounded-md"
                  sizes=" (max-width: 768px) 90vw, 80vw"
                />
              </div>
              {/* Description below image in modal */}
              <div className="text-center">
                 {/* Optional: Display alt text as a title */}
                 {/* <p className="text-lg font-semibold text-foreground mb-1">{selectedImage.alt}</p> */}
                <p className="text-sm text-muted-foreground">{selectedImage.description}</p>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
