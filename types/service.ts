export interface Service {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  deliverables: string[];
  faqs: { question: string; answer: string }[];
  technologies: string[];
}
