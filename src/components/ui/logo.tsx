
import Link from 'next/link';

interface LogoProps {
  className?: string;
  isFooter?: boolean;
}

export function Logo({ className, isFooter = false }: LogoProps) {
  const sizeClass = isFooter ? "text-2xl" : "text-3xl md:text-4xl";
  return (
    <Link href="/" className={`font-bold tracking-tight text-primary hover:opacity-80 transition-opacity ${sizeClass} ${className}`}>
      Balayage Studio
    </Link>
  );
}
