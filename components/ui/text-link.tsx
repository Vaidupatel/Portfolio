import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TextLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={cn("inline-flex items-center gap-1.5 text-ink-900 font-semibold text-[14px] hover:text-accent transition-colors duration-150 group", className)}>
      <span>{children}</span>
      <ArrowRight className="w-3.5 h-3.5 text-accent transform group-hover:translate-x-0.5 transition-transform duration-150" />
    </Link>
  );
}
