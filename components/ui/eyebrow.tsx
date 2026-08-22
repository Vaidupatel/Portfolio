import { cn } from '@/lib/utils';

export function Eyebrow({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("inline-flex items-center gap-2 text-accent font-mono text-[11px] font-semibold tracking-[0.12em] uppercase", className)}>
      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
      <span>{children}</span>
    </div>
  );
}
