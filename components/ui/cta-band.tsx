import { Button } from './button';
import { cn } from '@/lib/utils';
import { CONTACT_EMAIL } from '@/lib/constants';

interface CTABandProps {
  eyebrow?: string;
  title: string;
  ctaLabel?: string;
  ctaHref?: string;
  email?: string;
  className?: string;
}

export function CTABand({ 
  eyebrow = "NEXT STEP", 
  title, 
  ctaLabel = "Let's talk", 
  ctaHref = "/contact", 
  email = CONTACT_EMAIL,
  className 
}: CTABandProps) {
  return (
    <section className={cn("w-full bg-canvas-dark text-canvas-white rounded-card overflow-hidden p-8 md:p-16 relative flex flex-col gap-6", className)}>
      <span className="font-mono text-[11px] font-bold text-accent tracking-[0.15em] uppercase">
        {eyebrow}
      </span>
      <h2 className="font-display text-h2 md:text-large font-bold tracking-tight max-w-[600px] leading-display">
        {title}
      </h2>
      <div className="flex flex-wrap items-center gap-6 mt-4">
        <Button variant="primary" href={ctaHref} className="bg-accent text-white hover:bg-accent-deep border-none">
          {ctaLabel}
        </Button>
        <a href={`mailto:${email}`} className="font-mono text-[14px] hover:text-accent transition-colors duration-150">
          {email}
        </a>
      </div>
      
      {/* Saffron accent visual mark block */}
      <div className="absolute right-0 bottom-0 w-24 h-1 bg-accent" />
    </section>
  );
}
