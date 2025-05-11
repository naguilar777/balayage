
import Link from 'next/link';

interface LogoProps {
  className?: string;
  isFooter?: boolean;
}

export function Logo({ className, isFooter = false }: LogoProps) {
  const mainSizeClass = isFooter ? "text-xl" : "text-2xl md:text-3xl";
  const subSizeClass = isFooter ? "text-[0.65rem]" : "text-xs";
  
  // Adjusting negative margin based on visual target from the image
  // The subtitle "by KYNSTUDIO" should tuck under and align to the right of "Balayage Studio"
  // Values like -mt-2 (for footer) and -mt-3 (for header) correspond to -0.5rem and -0.75rem
  const negativeMarginClass = isFooter ? "-mt-2" : "-mt-3"; 

  return (
    <Link href="/" className={`inline-block group ${className}`}>
      {/* The div ensures the spans are stacked and text-right on subtitle works correctly.
          The width of this div will be determined by the "Balayage Studio" span. */}
      <div> 
        <span className={`block font-bold tracking-tight text-primary group-hover:opacity-80 transition-opacity ${mainSizeClass}`}>
          Balayage Studio
        </span>
        <span 
          className={`block text-foreground/70 group-hover:opacity-80 transition-opacity ${subSizeClass} text-right ${negativeMarginClass}`}
        >
          by <span className="font-bold">KYNSTUDIO</span>
        </span>
      </div>
    </Link>
  );
}
