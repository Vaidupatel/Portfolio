import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/section-header';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata(
  'Blog',
  'Insights on MERN stack development, AI integration patterns, and building serious digital products.',
  '/blog'
);

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full py-16 md:py-24 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 flex flex-col gap-12">
        <SectionHeader
          eyebrow="BLOG"
          title="Insights & articles"
          description="Technical writing on MERN stack engineering, AI integration patterns, and building production-grade digital products."
        />

        {/* Placeholder state */}
        <div className="flex flex-col items-center justify-center py-24 gap-6 bg-accent-soft/30 border border-hairline rounded-card">
          <div className="w-16 h-16 rounded-full bg-accent-soft flex items-center justify-center">
            <span className="text-accent text-2xl font-display font-bold">✎</span>
          </div>
          <h3 className="font-display text-xl font-bold text-ink-900">
            Articles coming soon
          </h3>
          <p className="text-[15px] text-ink-600 text-center max-w-[420px] leading-relaxed">
            Check back for insights on MERN development, AI integration, SaaS architecture, and building serious digital products.
          </p>
        </div>
      </section>
    </div>
  );
}
