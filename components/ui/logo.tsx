import Link from 'next/link';

export function Logo({ variant = 'dark', className }: { variant?: 'light' | 'dark'; className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 font-body ${className}`}>
      {/* Logo Mark: matching saffron outline box */}
      <div className="w-6 h-6 flex items-center justify-center bg-accent rounded-[4px]">
        <div className="w-3 h-3 bg-canvas" />
      </div>
      {/* Logo Wordmark: VG / STUDIO */}
      <span className={`text-[15px] font-bold tracking-wider ${variant === 'light' ? 'text-canvas' : 'text-ink-900'}`}>
        VG <span className="font-mono text-[11px] font-normal text-ink-600">/ STUDIO</span>
      </span>
    </Link>
  );
}
