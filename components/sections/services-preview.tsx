import { services } from '@/content/services';
import { SectionHeader } from '../ui/section-header';
import { Button } from '../ui/button';
import Link from 'next/link';

export function ServicesPreview() {
  return (
    <section className="w-full py-16 md:py-24 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 flex flex-col gap-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <SectionHeader 
          eyebrow="SERVICES" 
          title="What I build"
          description="High-fidelity software engineering and AI systems built for validation, commerce, and operations."
        />
        <Button variant="secondary" href="/services">View all services</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div 
            key={service.slug} 
            className="flex flex-col justify-between bg-canvas border border-hairline rounded-card p-8 gap-6 hover:shadow-sm transition-all duration-200"
          >
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] font-bold text-accent tracking-[0.1em] uppercase">
                {service.eyebrow}
              </span>
              <h3 className="font-display text-xl md:text-card font-bold text-ink-900 leading-tight">
                {service.title}
              </h3>
              <p className="text-[14px] text-ink-600 leading-relaxed">
                {service.description}
              </p>
            </div>

            <Link 
              href={`/services/${service.slug}`} 
              className="font-mono text-[12px] font-bold text-accent hover:text-accent-deep transition-colors inline-flex items-center gap-1.5 self-start mt-2"
            >
              Learn more &rarr;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
