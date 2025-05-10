
import Link from 'next/link';

interface LogoProps {
  className?: string;
  isFooter?: boolean;
}

export function Logo({ className, isFooter = false }: LogoProps) {
  const mainSizeClass = isFooter ? "text-2xl" : "text-3xl md:text-4xl";
  const subSizeClass = isFooter ? "text-xs" : "text-sm";

  return (
    <Link href="/" className={`flex flex-col items-start group ${className}`}>
      <span className={`font-bold tracking-tight text-primary group-hover:opacity-80 transition-opacity ${mainSizeClass}`}>
        Balayage Studio
      </span>
      <span className={`font-normal text-foreground/70 group-hover:opacity-80 transition-opacity -mt-1 ${subSizeClass}`}>
        by KYNSTUDIO
      </span>
    </Link>
  );
}

