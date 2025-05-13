
import type { LucideIcon } from 'lucide-react';
import { Leaf, Sparkles, Award, CalendarCheck, Star, Instagram, Facebook, Check, ShieldCheck } from 'lucide-react';
import { TiktokIcon } from '@/components/icons/tiktok-icon';
import type React from 'react';

export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: '#testimonials', label: 'Testimonios' },
  { href: '#gallery', label: 'Galería' },
  { href: '#team', label: 'Equipo' },
  { href: '#strand-test', label: 'Prueba de Mechón' },
];

export type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const BENEFITS_DATA: Benefit[] = [
  {
    icon: Leaf,
    title: 'Productos Orgánicos',
    description: 'Utilizamos productos de alta calidad, respetuosos con tu cabello y el medio ambiente.',
  },
  {
    icon: Sparkles,
    title: 'Coloración Personalizada',
    description: 'Diseñamos cada coloración para realzar tu belleza natural y estilo único.',
  },
  {
    icon: Award,
    title: 'Expertos Certificados',
    description: 'Nuestro equipo está formado por coloristas con amplia experiencia y certificación.',
  },
  {
    icon: CalendarCheck,
    title: 'Resultados Duraderos',
    description: 'Disfruta de un balayage radiante por más tiempo gracias a nuestras técnicas avanzadas.',
  },
];

export type GalleryImageDetail = {
  src: string;
  alt: string;
  aiHint: string;
};

export type GalleryTransformation = {
  id: string;
  before: GalleryImageDetail;
  after: GalleryImageDetail;
  description: string; // General description for the transformation
};


export const GALLERY_IMAGES: GalleryTransformation[] = [
  {
    id: 'transform1',
    before: { src: 'https://lh3.googleusercontent.com/d/1mBaNqsP9Sjd2i1cZvy4NSaGKbbFKlF62=w600-h800', alt: 'Antes del balayage - Cabello oscuro y largo', aiHint: 'dark hair' },
    after: { src: 'https://lh3.googleusercontent.com/d/1tk3U1k6LpsQ-BCTuYbHpXLgBwpzBJEtO=w600-h800', alt: 'Después del balayage - Rubio sutil caramelo espectacular', aiHint: 'blonde balayage' },
    description: 'Transformación a un balayage sutil caramelo que aporta luminosidad y un estilo moderno.'
  },
  {
    id: 'transform2',
    before: { src: 'https://lh3.googleusercontent.com/d/1Bj-dmH3CxA-DkQWJp7iN-jYsAMhgY0Sq=w600-h800', alt: 'Antes del balayage - Cabello castaño medio', aiHint: 'brown hair' },
    after: { src: 'https://lh3.googleusercontent.com/d/14qaD5Gu2mG0PRyZiBbSrz6Xbdf3-03RI=w600-h800', alt: 'Después del balayage - Tonos caramelo cálidos', aiHint: 'caramel balayage' },
    description: 'De castaño medio a unos preciosos tonos caramelo que iluminan el rostro.'
  },
  {
    id: 'transform3',
    before: { src: 'https://lh3.googleusercontent.com/d/1znfcqJwOw6mO2ILK1GO6jM2ngqaH4RLS=w600-h800', alt: 'Antes del balayage - Base oscura', aiHint: 'dark base' },
    after: { src: 'https://lh3.googleusercontent.com/d/1EJi3YRShpcKOyS_we6II54qD6bHgEMWp=w600-h800', alt: 'Después del balayage - Reflejos caramelo vibrantes', aiHint: 'caramel highlights' },
    description: 'Intensos reflejos caramelo que añaden dimensión y vitalidad a una base oscura.'
  },
  {
    id: 'transform4',
    before: { src: 'https://lh3.googleusercontent.com/d/11IXCeEgJL6yOkBOyWM8gm1tUTJQPnsjD=w600-h800', alt: 'Antes del balayage - Base oscura', aiHint: 'dark base' },
    after: { src: 'https://lh3.googleusercontent.com/d/1SLeXA-Ag6olamMQWmxldqPxfoNFJZTIf=w600-h800', alt: 'Después del balayage - Reflejos caramelo vibrantes', aiHint: 'caramel highlights' },
    description: 'Intensos reflejos caramelo que añaden dimensión y vitalidad a una base oscura.'
  },
  {
    id: 'transform5',
    before: { src: 'https://lh3.googleusercontent.com/d/14saFs4OzNJf-vttcr9-Vk3RyQtnna9ec=w600-h800', alt: 'Antes del balayage - Base oscura', aiHint: 'dark base' },
    after: { src: 'https://lh3.googleusercontent.com/d/1qN0TLU6dAxmnGzXhxpK7myeuwYY6F3F7=w600-h800', alt: 'Después del balayage - Reflejos caramelo vibrantes', aiHint: 'caramel highlights' },
    description: 'Intensos reflejos caramelo que añaden dimensión y vitalidad a una base oscura.'
  },
  {
    id: 'transform6',
    before: { src: 'https://lh3.googleusercontent.com/d/1io7vaxLUT5qdYCPWYelm34_5nkcw7lRK=w600-h800', alt: 'Antes del balayage - Base oscura', aiHint: 'dark base' },
    after: { src: 'https://lh3.googleusercontent.com/d/1BAMEmoPGZ0XL7Bl58DxoY1_Au4ss6f39=w600-h800', alt: 'Después del balayage - Reflejos caramelo vibrantes', aiHint: 'caramel highlights' },
    description: 'Intensos reflejos caramelo que añaden dimensión y vitalidad a una base oscura.'
  },
  {
    id: 'transform7',
    before: { src: 'https://lh3.googleusercontent.com/d/15gaUZ-Yly2PCC9SNeXOnEd5Z_VM-rSxR=w600-h800', alt: 'Antes del balayage - Base oscura', aiHint: 'dark base' },
    after: { src: 'https://lh3.googleusercontent.com/d/1pT3T_ZIxy1wyEvvh-WDEDN8q29e5AWiP=w600-h800', alt: 'Después del balayage - Reflejos caramelo vibrantes', aiHint: 'caramel highlights' },
    description: 'Intensos reflejos caramelo que añaden dimensión y vitalidad a una base oscura.'
  },
  
];


export type Testimonial = {
  id: string;
  avatarSrc: string;
  name: string;
  stars: number;
  text: string;
  aiHint: string;
};

export const TESTIMONIALS_DATA: Testimonial[] = [
  { id: '1', avatarSrc: 'https://lh3.googleusercontent.com/d/1ORgwBRG6O24PbJce_YfB_0D84sqebcZj', name: 'Bessy', stars: 5, text: '¡Absolutamente enamorada de mi nuevo look! El equipo es súper profesional y amable. ¡Recomendadísimo!', aiHint: 'woman smiling' },
  { id: '2', avatarSrc: 'https://lh3.googleusercontent.com/d/15xwvD8fK9a1j11vQXks_mMSLibl_wfbM', name: 'Andrea', stars: 5, text: 'La mejor experiencia de balayage que he tenido. Entendieron perfectamente lo que quería y el resultado superó mis expectativas.', aiHint: 'happy customer' },
  { id: '3', avatarSrc: 'https://lh3.googleusercontent.com/d/1N9tVGP09WFUV_GaevzOD0O1cZLqxHZPv', name: 'Julissa', stars: 5, text: 'Muy contenta con el color y la atención. El salón es precioso y te hacen sentir muy cómoda. Volveré seguro.', aiHint: 'satisfied client' },
];

export type SocialLink = {
  href: string;
  icon: React.ElementType; // Use React.ElementType for broader compatibility with Lucide and custom icons
  label: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://www.instagram.com/kynstudio_hn', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.facebook.com/kynstudiohn', icon: Facebook, label: 'Facebook' },
  { href: 'https://www.tiktok.com/@fernandabermudez03', icon: TiktokIcon, label: 'TikTok' },
];

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  description: string;
  avatarSrc: string;
  aiHint: string;
};

export const TEAM_MEMBERS_DATA: TeamMember[] = [
  {
    id: '1',
    name: 'Keyrol Fernanda Bermudez',
    role: 'Estilista Master',
    description: 'Especialista en técnicas avanzadas de color y corte, reconocida por transformar estilos de manera personalizada.',
    avatarSrc: 'https://lh3.googleusercontent.com/d/1DDS4Ed1yFqZn2KtfMrJCyyRjWjzPHsa5=w300-h300',
    aiHint: 'woman professional'
  },
  {
    id: '2',
    name: 'Yesenia Elizabeth Navarro',
    role: 'Estilista Senior',
    description: 'Experta en tendencias, con atención al detalle y un trato excepcional al cliente.',
    avatarSrc: 'https://lh3.googleusercontent.com/d/1DfWzlNrEK5gu6z3YJmB569V6M5KYT5kE=w300-h300',
    aiHint: 'woman stylist'
  },
  {
    id: '3',
    name: 'Nestor Josue Aguilar',
    role: 'Diseñador de Balayage',
    description: 'Creativo en coloración Balayage, innovando looks que realzan la belleza única de cada cliente.',
    avatarSrc: 'https://lh3.googleusercontent.com/d/1F_iwpy6QWKS-MJrjh50GCiYWf0OPHjkO=w300-h300',
    aiHint: 'man designer'
  },
];

export type StrandTestBenefitItem = {
  icon: LucideIcon;
  text: string;
};

export const STRAND_TEST_BENEFITS: StrandTestBenefitItem[] = [
  {
    icon: Check, 
    text: 'Atención totalmente personalizada.',
  },
  {
    icon: Star, 
    text: 'Transparencia y honestidad en el diagnóstico.',
  },
  {
    icon: ShieldCheck, 
    text: 'Seguridad, confianza y respaldo profesional.',
  },
];


// Replace with your actual WhatsApp number (country code + number, no '+' or leading zeros unless part of the number itself)
// Example for Spain (+504): 89137344
export const WHATSAPP_PHONE_NUMBER = '50489137344'; // TODO: Replace with actual WhatsApp business number
