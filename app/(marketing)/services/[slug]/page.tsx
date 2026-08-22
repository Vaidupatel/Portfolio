import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/content/services';
import { Tag } from '@/components/ui/tag';
import { Eyebrow } from '@/components/ui/eyebrow';
import { CTABand } from '@/components/ui/cta-band';
import { buildMetadata, buildServiceJsonLd, buildFaqJsonLd } from '@/lib/metadata';

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return buildMetadata(service.title, service.description, `/services/${slug}`);
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div className="flex flex-col w-full">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildServiceJsonLd(service.title, service.longDescription)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqJsonLd(service.faqs)),
        }}
      />

      <section className="w-full py-16 md:py-24 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-[720px]">
          <Eyebrow>{service.eyebrow}</Eyebrow>
          <h1 className="font-display text-3xl md:text-section font-bold text-ink-900 leading-display tracking-tight">
            {service.title}
          </h1>
          <p className="text-body text-ink-600 leading-body">
            {service.longDescription}
          </p>
        </div>

        {/* Two-column detail grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Deliverables */}
          <div className="flex flex-col gap-4">
            <h2 className="font-mono text-[11px] font-bold text-ink-400 tracking-[0.15em] uppercase border-b border-hairline pb-3">
              DELIVERABLES
            </h2>
            <ul className="flex flex-col gap-3">
              {service.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-ink-600 leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-col gap-4">
            <h2 className="font-mono text-[11px] font-bold text-ink-400 tracking-[0.15em] uppercase border-b border-hairline pb-3">
              TECHNOLOGIES
            </h2>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="flex flex-col gap-6 max-w-[720px]">
          <h2 className="font-mono text-[11px] font-bold text-ink-400 tracking-[0.15em] uppercase border-b border-hairline pb-3">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <dl className="flex flex-col gap-6">
            {service.faqs.map((faq, i) => (
              <div key={i} className="flex flex-col gap-2">
                <dt className="text-[16px] font-bold text-ink-900">{faq.question}</dt>
                <dd className="text-[15px] text-ink-600 leading-relaxed">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 py-16 w-full">
        <CTABand title={`Need ${service.title.toLowerCase()}?`} />
      </div>
    </div>
  );
}
