import Image from 'next/image';
import { Button } from './button';
import { Testimonial as TestimonialType } from '@/types/testimonial';

export function Testimonial({ 
  testimonial,
  ctaHref = "/contact" 
}: { 
  testimonial: TestimonialType; 
  ctaHref?: string;
}) {
  return (
    <div className="w-full bg-accent-soft rounded-card p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 border border-hairline">
      {/* Visual slot: matching BizCivitas event dashboard */}
      <div className="relative w-full md:w-[300px] aspect-[4/3] rounded-card overflow-hidden bg-canvas-white border border-hairline flex-shrink-0">
        <Image 
          src={testimonial.image.src} 
          alt={testimonial.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover"
        />
      </div>
      
      {/* Quote details */}
      <div className="flex-grow flex flex-col gap-4 text-left">
        <span className="font-mono text-[11px] font-bold text-accent-deep tracking-[0.15em] uppercase">
          CLIENT TESTIMONIAL
        </span>
        <blockquote className="font-display text-[20px] md:text-[24px] font-medium italic text-ink-900 leading-relaxed">
          {testimonial.quote}
        </blockquote>
        <cite className="font-mono text-[13px] font-semibold text-ink-600 not-italic">
          {testimonial.author} · {testimonial.company}
        </cite>
      </div>
      
      {/* CTA action */}
      <div className="w-full md:w-auto flex-shrink-0 flex justify-end">
        <Button variant="primary" href={ctaHref}>Let's build</Button>
      </div>
    </div>
  );
}
