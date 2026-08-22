import { cn } from '@/lib/utils';

export function Tag({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span className={cn("inline-flex items-center justify-center h-7 px-3 rounded-pill bg-accent-soft border border-hairline text-ink-600 font-mono text-[11px] font-medium tracking-wide", className)}>
      {children}
    </span>
  );
}
