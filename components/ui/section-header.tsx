import { Eyebrow } from './eyebrow';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-4 max-w-[560px] text-left", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-h2 md:text-large font-bold tracking-tight text-ink-900 leading-display">
        {title}
      </h2>
      {description && (
        <p className="text-[15px] md:text-body text-ink-600 leading-body">
          {description}
        </p>
      )}
    </div>
  );
}
