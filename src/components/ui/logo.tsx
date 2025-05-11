
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  isFooter?: boolean;
}

export function Logo({ className, isFooter = false }: LogoProps) {
  // Main title: "Balayage"
  // - Elegant, modern, readable (using existing font-sans: Inter).
  // - white-space: nowrap ensures it's always on a single line.
  // - color: text-primary (Dorado Champagne).
  // - font-bold and tracking-tight for style.
  const mainTitleBaseClasses = "block font-bold tracking-tight text-primary group-hover:opacity-80 transition-opacity whitespace-nowrap";
  // - Responsive font size. Adjusted to be slightly smaller than original "Balayage Studio" to fit "Balayage" comfortably.
  const mainTitleSizeClass = isFooter ? "text-lg" : "text-xl md:text-2xl"; // Example: Footer: 1.125rem, Header Mobile: 1.25rem, Header Desktop: 1.5rem

  // Subtitle: "by KYNSTUDIO"
  // - display: block is inherent due to <strong> being a block-level element inside the div structure.
  // - font-bold is applied.
  // - Smaller than main title.
  // - color: text-foreground/70 (muted deep black).
  const subTitleBaseClasses = "block font-bold text-foreground/70 group-hover:opacity-80 transition-opacity";
  const subTitleSizeClass = isFooter ? "text-[0.6rem]" : "text-[0.65rem] md:text-xs"; // Example: Footer: ~9.6px, Header Mobile: ~10.4px, Header Desktop: 12px
  
  // Harmonious vertical spacing using negative margin.
  // Adjusted based on new font sizes and to bring subtitle slightly closer.
  const subTitleMarginClass = isFooter ? "-mt-1.5" : "-mt-1.5 md:-mt-2"; // Tailwind values: -0.375rem / -0.5rem

  return (
    <Link href="/" className={cn("inline-block group", className)}>
      {/* div ensures h1 and strong stack correctly and Link wraps them as a single clickable unit */}
      <div>
        {/* Semantic H1 for "Balayage" as requested */}
        <h1 className={cn(mainTitleBaseClasses, mainTitleSizeClass)}>
          Balayage Studio
        </h1>
        {/* Semantic strong for "by KYNSTUDIO" as requested, styled to be bold */}
        <strong className={cn(subTitleBaseClasses, subTitleSizeClass, subTitleMarginClass)}>
          by KYNSTUDIO
        </strong>
      </div>
    </Link>
  );
}
