import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/content/work';
import { Tag } from '@/components/ui/tag';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Button } from '@/components/ui/button';
import { CTABand } from '@/components/ui/cta-band';
import { buildMetadata, buildCaseStudyJsonLd } from '@/lib/metadata';
import { SITE_URL } from '@/lib/constants';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return buildMetadata(project.name, project.description, `/work/${slug}`);
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildCaseStudyJsonLd(
              project.name,
              project.description,
              project.stack,
              `${SITE_URL}${project.image.src}`,
              project.slug
            )
          ),
        }}
      />

      <section className="w-full py-16 md:py-24 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-[720px]">
          <Eyebrow>{project.category}</Eyebrow>
          <h1 className="font-display text-3xl md:text-section font-bold text-ink-900 leading-display tracking-tight">
            {project.name}
          </h1>
          <p className="text-body text-ink-600 leading-body">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div className="relative w-full aspect-[16/9] rounded-card overflow-hidden border border-hairline bg-accent-soft">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
            priority
          />
        </div>

        {/* Detail grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="flex flex-col gap-3">
            <h2 className="font-mono text-[11px] font-bold text-ink-400 tracking-[0.15em] uppercase border-b border-hairline pb-3">
              THE PROBLEM
            </h2>
            <p className="text-[15px] text-ink-600 leading-relaxed">{project.problem}</p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-mono text-[11px] font-bold text-ink-400 tracking-[0.15em] uppercase border-b border-hairline pb-3">
              THE APPROACH
            </h2>
            <p className="text-[15px] text-ink-600 leading-relaxed">{project.approach}</p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-mono text-[11px] font-bold text-ink-400 tracking-[0.15em] uppercase border-b border-hairline pb-3">
              THE OUTCOME
            </h2>
            <p className="text-[15px] text-ink-600 leading-relaxed">
              {project.outcome || 'Results documented upon project completion.'}
            </p>
          </div>
        </div>

        {/* Live URL */}
        {project.liveUrl && (
          <div className="flex items-center gap-4 pt-4 border-t border-hairline">
            <span className="font-mono text-[11px] font-bold text-ink-400 tracking-wider uppercase">
              LIVE SITE
            </span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold text-[15px] hover:text-accent-deep underline underline-offset-4 transition-colors"
            >
              {project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </a>
          </div>
        )}
      </section>

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 py-16 w-full">
        <CTABand title="Want something like this built?" />
      </div>
    </div>
  );
}
