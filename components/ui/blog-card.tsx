import Link from 'next/link';
import { BlogPost } from '@/types/post';

function formatDate(dateStr: string) {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col bg-canvas border border-hairline rounded-card overflow-hidden transition-all duration-200 hover:shadow-md h-full">
      {/* Visual Cover Slot: saffron soft block per design specs */}
      <div className="aspect-[16/10] w-full bg-accent-soft flex items-center justify-center p-6 border-b border-hairline">
        <span className="font-display text-xl font-bold text-accent-deep text-center line-clamp-3 leading-snug">
          {post.title}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col p-6 gap-3 flex-grow justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-[11px] font-mono text-ink-400">
            <span>{post.readingTime}</span>
            <span>·</span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <h3 className="font-display text-lg md:text-xl font-bold text-ink-900 group-hover:text-accent transition-colors duration-150 leading-tight line-clamp-2">
            {post.title}
          </h3>
          <p className="text-[14px] text-ink-600 leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
}
