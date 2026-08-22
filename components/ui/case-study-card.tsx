import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/project';
import { Tag } from './tag';

export function CaseStudyCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group flex flex-col bg-canvas border border-hairline rounded-card overflow-hidden transition-all duration-200 hover:shadow-md h-full">
      {/* Image slot */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-accent-soft border-b border-hairline">
        <Image 
          src={project.image.src} 
          alt={project.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
      
      {/* Content slot */}
      <div className="flex flex-col p-6 gap-3 flex-grow justify-between">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[11px] font-bold text-accent tracking-[0.1em] uppercase">
            {project.category}
          </span>
          <h3 className="font-display text-xl md:text-card font-bold text-ink-900 group-hover:text-accent transition-colors duration-150 leading-tight">
            {project.name}
          </h3>
          <p className="text-[14px] text-ink-600 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-hairline">
          {project.stack.slice(0, 3).map(tech => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}
