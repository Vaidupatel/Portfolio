export interface Project {
  slug: string;
  name: string;
  category: string;              // "B2B COMMERCE", "AI / AUTOMATION", etc.
  description: string;
  problem: string;
  approach: string;
  stack: string[];
  outcome?: string;               // specific, quantified where real data exists
  liveUrl?: string;
  image: { src: string; alt: string };
  featured: boolean;
}
