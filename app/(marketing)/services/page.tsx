import type { Metadata } from 'next';
import { services } from '@/content/services';
import { SectionHeader } from '@/components/ui/section-header';
import { CTABand } from '@/components/ui/cta-band';
import { buildMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata: Metadata = buildMetadata(
  'Services',
  'MERN stack development, AI & automation integration, and SaaS MVP development services.',
  '/services'
);

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full py-16 md:py-24 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 flex flex-col gap-12">
        <SectionHeader
          eyebrow="SERVICES"
          title="What we build"
          description="Focused technical services for businesses that need reliable, production-grade software."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col justify-between bg-canvas border border-hairline rounded-card p-8 gap-6 hover:shadow-md transition-all duration-200"
            >
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[10px] font-bold text-accent tracking-[0.1em] uppercase">
                  {service.eyebrow}
                </span>
                <h3 className="font-display text-xl md:text-card font-bold text-ink-900 leading-tight group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-[14px] text-ink-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-hairline">
                {service.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="inline-flex items-center h-7 px-3 rounded-pill bg-accent-soft border border-hairline text-ink-600 font-mono text-[11px]">
                    {tech}
                  </span>
                ))}
              </div>
              <span className="font-mono text-[12px] font-bold text-accent">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 py-16 w-full">
        <CTABand title="Ready to build something serious?" />
      </div>
    </div>
  );
}
