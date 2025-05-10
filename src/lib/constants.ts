
import type { LucideIcon } from 'lucide-react';
import { Leaf, Sparkles, Award, CalendarCheck, Star, Instagram, Facebook, ClipboardCheck, ThumbsUp, ShieldCheck } from 'lucide-react';
import { TiktokIcon } from '@/components/icons/tiktok-icon';
import type React from 'react';

export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: '#testimonials', label: 'Testimonios' },
  { href: '#gallery', label: 'Galería' },
  { href: '#team', label: 'Equipo' }, // Added team link
  { href: '#contact', label: 'Contacto' },
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

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  description: string;
  aiHint: string;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', src: 'https://picsum.photos/seed/balayage1/600/800', alt: 'Balayage rubio en cabello largo', description: 'Balayage rubio ceniza en cabello largo y ondulado.', aiHint: 'balayage blonde' },
  { id: '2', src: 'https://picsum.photos/seed/balayage2/600/800', alt: 'Balayage caramelo en cabello medio', description: 'Tonos caramelo cálidos para un look natural.', aiHint: 'caramel balayage' },
  { id: '3', src: 'https://picsum.photos/seed/balayage3/600/800', alt: 'Balayage cobrizo vibrante', description: 'Reflejos cobrizos intensos sobre base oscura.', aiHint: 'copper balayage' },
  { id: '4', src: 'https://picsum.photos/seed/balayage4/600/800', alt: 'Balayage platino moderno', description: 'Un estilo audaz con balayage platino.', aiHint: 'platinum balayage' },
  { id: '5', src: 'https://picsum.photos/seed/balayage5/600/800', alt: 'Transformación balayage antes y después', description: 'Impactante transformación de color.', aiHint: 'balayage transformation' },
  { id: '6', src: 'https://picsum.photos/seed/balayage6/600/800', alt: 'Balayage sutil en cabello castaño', description: 'Luces sutiles para iluminar el cabello castaño.', aiHint: 'brunette balayage' },
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
  { id: '1', avatarSrc: 'https://picsum.photos/seed/avatar1/100/100', name: 'Ana Pérez', stars: 5, text: '¡Absolutamente enamorada de mi nuevo look! El equipo es súper profesional y amable. ¡Recomendadísimo!', aiHint: 'woman smiling' },
  { id: '2', avatarSrc: 'https://picsum.photos/seed/avatar2/100/100', name: 'Laura Gómez', stars: 5, text: 'La mejor experiencia de balayage que he tenido. Entendieron perfectamente lo que quería y el resultado superó mis expectativas.', aiHint: 'happy customer' },
  { id: '3', avatarSrc: 'https://picsum.photos/seed/avatar3/100/100', name: 'Sofía Rodríguez', stars: 4, text: 'Muy contenta con el color y la atención. El salón es precioso y te hacen sentir muy cómoda. Volveré seguro.', aiHint: 'satisfied client' },
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
    avatarSrc: 'https://picsum.photos/seed/keyrol/300/300',
    aiHint: 'woman professional'
  },
  {
    id: '2',
    name: 'Yesenia Elizabeth Navarro',
    role: 'Estilista Senior',
    description: 'Experta en tendencias y colorimetría, con atención al detalle y un trato excepcional al cliente.',
    avatarSrc: 'https://picsum.photos/seed/yesenia/300/300',
    aiHint: 'woman stylist'
  },
  {
    id: '3',
    name: 'Nestor Josue Aguilar',
    role: 'Diseñador de Balayage',
    description: 'Creativo en coloración Balayage, innovando looks que realzan la belleza única de cada cliente.',
    avatarSrc: 'https://picsum.photos/seed/nestor/300/300',
    aiHint: 'man designer'
  },
];

export type StrandTestBenefitItem = {
  icon: LucideIcon;
  text: string;
};

export const STRAND_TEST_BENEFITS: StrandTestBenefitItem[] = [
  {
    icon: ClipboardCheck,
    text: 'Un diagnóstico preciso de la condición de tu cabello.',
  },
  {
    icon: ThumbsUp,
    text: 'Resultados óptimos y personalizados en tu tratamiento de decoloración.',
  },
  {
    icon: ShieldCheck,
    text: 'Tranquilidad y confianza en el proceso.',
  },
];


// Replace with your actual WhatsApp number (country code + number, no '+' or leading zeros unless part of the number itself)
// Example for Spain (+504): 89137344
export const WHATSAPP_PHONE_NUMBER = '50489137344'; // TODO: Replace with actual WhatsApp business number

