import { Project } from "@/types/project";

export const project: Project = {
  slug: "infotech-realms",
  name: "Infotech Realms",
  category: "CORPORATE PORTAL",
  description: "Modern corporate platform built with React and TypeScript featuring CMS-driven content, reusable UI systems, SEO optimization, and responsive architecture.",
  problem: "Static company websites frequently face visual layout shifts, sluggish load times, and poor search engine crawlability.",
  approach: "Migrated the codebase to TypeScript, optimizing component structures and structuring semantic layout headings for indexation.",
  stack: ["React", "TypeScript", "Tailwind CSS"],
  outcome: "Improved responsive load times and verified search optimization scores.",
  liveUrl: "https://infotechsrealm.com/",
  image: {
    src: "/IR.png",
    alt: "Screenshot of Infotech Realms corporate homepage showing software services and technologies grids"
  },
  featured: false
};
