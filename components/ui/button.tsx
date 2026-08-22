import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
}

export function Button({ variant = 'primary', href, className, children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center h-12 px-6 rounded-pill text-[15px] font-semibold tracking-wide transition-all duration-150 active:scale-95";
  const variantStyles = variant === 'primary' 
    ? "bg-accent text-accent-ink hover:bg-accent-deep"
    : "bg-accent-soft text-ink-900 hover:bg-opacity-80 border border-hairline";

  const content = (
    <>
      <span>{children}</span>
      {variant === 'primary' && <ArrowRight className="w-4 h-4 ml-2" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, variantStyles, className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, variantStyles, className)} {...props}>
      {content}
    </button>
  );
}
