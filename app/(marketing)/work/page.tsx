import type { Metadata } from 'next';
import { projects } from '@/content/work';
import { SectionHeader } from '@/components/ui/section-header';
import { CaseStudyCard } from '@/components/ui/case-study-card';
import { CTABand } from '@/components/ui/cta-band';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata(
  'Work',
  'Case studies from shipped products — B2B commerce, AI integrations, SaaS platforms, and operational dashboards.',
  '/work'
);

export default function WorkPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full py-16 md:py-24 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 flex flex-col gap-12">
        <SectionHeader
          eyebrow="PORTFOLIO"
          title="Selected work"
          description="Real products shipped for real businesses. Each project listed here is live in production."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <CaseStudyCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 py-16 w-full">
        <CTABand title="Have a project in mind?" />
      </div>
    </div>
  );
}
