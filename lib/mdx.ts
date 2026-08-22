import fs from 'fs';
import path from 'path';
import { BlogPost } from '@/types/post';

export interface ParseMDXResult {
  frontmatter: BlogPost;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export function parseMDXFile(filePath: string): ParseMDXResult {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  const match = rawContent.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/);

  if (!match) {
    const slug = path.basename(filePath).replace(/\.mdx?$/, '');
    return {
      frontmatter: {
        slug,
        title: slug,
        excerpt: '',
        publishedAt: new Date().toISOString().split('T')[0],
        category: 'Engineering',
        readingTime: '5 min',
        image: { src: '/placeholder.png', alt: slug },
        author: { name: 'Vaidik Ghelani', role: 'Software Engineer' },
      },
      content: rawContent,
    };
  }

  const [, yamlStr, content] = match;
  const data: Record<string, string> = {};

  yamlStr.split('\n').forEach((line) => {
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine.startsWith('#')) return;

    const colonIndex = trimmedLine.indexOf(':');
    if (colonIndex > 0) {
      const key = trimmedLine.substring(0, colonIndex).trim();
      let value = trimmedLine.substring(colonIndex + 1).trim();

      // Clean outer quotes
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.substring(1, value.length - 1);
      }

      data[key] = value;
    }
  });

  const slug = path.basename(filePath).replace(/\.mdx?$/, '');

  const frontmatter: BlogPost = {
    slug: data.slug || slug,
    title: data.title || slug,
    excerpt: data.excerpt || '',
    publishedAt: data.publishedAt || new Date().toISOString().split('T')[0],
    updatedAt: data.updatedAt,
    category: data.category || 'Engineering',
    readingTime: data.readingTime || '5 min',
    image: {
      src: data.imageSrc || '/placeholder.png',
      alt: data.imageAlt || data.title || slug,
    },
    author: {
      name: data.authorName || 'Vaidik Ghelani',
      role: data.authorRole || 'Software Engineer',
    },
  };

  return { frontmatter, content: content.trim() };
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR);
  const posts = files
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file);
      return parseMDXFile(filePath).frontmatter;
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return posts;
}

export function getBlogPostBySlug(slug: string): ParseMDXResult | null {
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);

  let targetPath: string | null = null;
  if (fs.existsSync(mdxPath)) {
    targetPath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    targetPath = mdPath;
  }

  if (!targetPath) {
    return null;
  }

  return parseMDXFile(targetPath);
}
