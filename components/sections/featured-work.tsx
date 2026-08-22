import { projects } from '@/content/work';
import { SectionHeader } from '../ui/section-header';
import { CaseStudyCard } from '../ui/case-study-card';
import { Button } from '../ui/button';

export function FeaturedWork() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="w-full py-16 md:py-24 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 flex flex-col gap-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <SectionHeader 
          eyebrow="PORTFOLIO"
          title="Featured work"
          description="Shipped products for real businesses — B2B commerce, AI chatbot workflows, and remote telemetry tracking systems."
        />
        <Button variant="secondary" href="/work">View all work</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <CaseStudyCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
