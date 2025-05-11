
import Link from 'next/link';

interface LogoProps {
  className?: string;
  isFooter?: boolean;
}

export function Logo({ className, isFooter = false }: LogoProps) {
  const mainSizeClass = isFooter ? "text-xl" : "text-2xl md:text-3xl";
  // Adjusted subtitle size to be smaller relative to the new main title size
  const subSizeClass = isFooter ? "text-[0.65rem]" : "text-xs";

  return (
    // Changed to flex-row and items-baseline for single-line layout
    // Added ml-1.5 to the subtitle for spacing
    <Link href="/" className={`flex flex-row items-baseline group ${className}`}>
      <span className={`font-bold tracking-tight text-primary group-hover:opacity-80 transition-opacity ${mainSizeClass}`}>
        Balayage Studio
      </span>
      {/* Added font-bold and updated size for "by KYNSTUDIO" */}
      <span className={`ml-1.5 font-bold text-foreground/70 group-hover:opacity-80 transition-opacity ${subSizeClass}`}>
        by KYNSTUDIO
      </span>
    </Link>
  );
}
