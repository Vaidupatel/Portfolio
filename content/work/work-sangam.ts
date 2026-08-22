import { Project } from "@/types/project";

export const project: Project = {
  slug: "work-sangam",
  name: "Work Sangam",
  category: "AI RECRUITMENT",
  description: "AI-powered recruitment platform with intelligent candidate search, resume uploads, role matching, and real-time communication features.",
  problem: "Recruiters faced immense manual overhead vetting resumes and matching candidate profiles to highly specific technical jobs.",
  approach: "Built resume parsing and extraction pipelines using Next.js, mapping metadata arrays to a structural matching vector index.",
  stack: ["Next.js", "Tailwind CSS", "Node.js", "Express.js"],
  outcome: "Streamlined search indexing and resume categorization for corporate recruiters.",
  liveUrl: "https://www.worksangam.com/",
  image: {
    src: "/WS.png",
    alt: "Screenshot of Work Sangam portal showing candidates list and matching job roles"
  },
  featured: false
};
