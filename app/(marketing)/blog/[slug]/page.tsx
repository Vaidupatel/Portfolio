import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/mdx";
import { MarkdownRenderer } from "@/components/ui/markdown-renderer";
import { BlogCard } from "@/components/ui/blog-card";
import { CTABand } from "@/components/ui/cta-band";
import { buildMetadata, buildBlogJsonLd } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const result = getBlogPostBySlug(slug);
  if (!result) return {};

  const { frontmatter } = result;
  return buildMetadata(
    frontmatter.title,
    frontmatter.excerpt,
    `/blog/${slug}`,
    "article",
    frontmatter.publishedAt,
    frontmatter.updatedAt
  );
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = getBlogPostBySlug(slug);

  if (!result) {
    notFound();
  }

  const { frontmatter: post, content } = result;
  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* Article JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBlogJsonLd(
              post.title,
              post.excerpt,
              post.publishedAt,
              post.updatedAt,
              `${SITE_URL}${post.image.src}`,
              post.slug
            )
          ),
        }}
      />

      <article className="w-full py-16 md:py-24 max-w-[800px] mx-auto px-5 md:px-10 lg:px-0 flex flex-col gap-10">
        {/* Breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-[12px] text-ink-400">
          <Link href="/blog" className="hover:text-accent transition-colors">
            Journal
          </Link>
          <span>/</span>
          <span className="text-ink-900 font-medium">{post.category}</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="font-display text-3xl md:text-display font-bold text-ink-900 leading-display tracking-tight">
            {post.title}
          </h1>

          {/* Meta byline */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-[13px] text-ink-400 pt-2 border-b border-hairline pb-4">
            <span className="text-ink-900 font-semibold">{post.author.name}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
            <span>·</span>
            <span>{post.category}</span>
          </div>

          {/* Lead paragraph */}
          {post.excerpt && (
            <p className="font-display text-lg md:text-xl text-ink-900 leading-snug font-medium pt-2">
              {post.excerpt}
            </p>
          )}
        </div>

        {/* Featured Editorial Illustration Slot */}
        <div className="w-full aspect-[16/9] rounded-card border border-hairline bg-accent-soft flex items-center justify-center p-8 text-center overflow-hidden">
          <div className="flex flex-col items-center gap-2 max-w-[480px]">
            <span className="font-mono text-[11px] font-bold text-accent tracking-widest uppercase">
              EDITORIAL VISUAL
            </span>
            <p className="font-display text-lg md:text-xl font-bold text-accent-deep">
              {post.title}
            </p>
          </div>
        </div>

        {/* Article Body Content */}
        <MarkdownRenderer content={content} />

        {/* Author Bio Box */}
        <div className="flex items-center gap-5 p-6 bg-accent-soft/40 border border-hairline rounded-card mt-6">
          <div className="w-14 h-14 rounded-full bg-accent text-accent-ink font-display font-bold text-xl flex items-center justify-center flex-shrink-0">
            VG
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-display text-base font-bold text-ink-900">
              {post.author.name}
            </h3>
            <p className="text-[13px] text-ink-600 leading-relaxed">
              Software engineer. Builds production web platforms, AI systems, and SaaS MVPs from India, remotely.
            </p>
          </div>
        </div>
      </article>

      {/* Related Reading / Further Reading */}
      {relatedPosts.length > 0 && (
        <section className="w-full py-16 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 border-t border-hairline flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[11px] font-bold text-ink-400 tracking-[0.15em] uppercase">
              FURTHER READING
            </span>
            <h2 className="font-display text-2xl font-bold text-ink-900">
              Related articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <BlogCard key={related.slug} post={related} />
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA Band */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 py-16 w-full">
        <CTABand title="Ready to build something serious?" />
      </div>
    </div>
  );
}
