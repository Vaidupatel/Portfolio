export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;                // used for meta description + card preview
  publishedAt: string;            // ISO date
  updatedAt?: string;
  category: string;
  readingTime: string;
  image: { src: string; alt: string };
  author: { name: string; role: string };
}
