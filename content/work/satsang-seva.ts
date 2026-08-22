import { Project } from "@/types/project";

export const project: Project = {
  slug: "satsang-seva",
  name: "Satsang Seva",
  category: "EVENT MANAGEMENT",
  description: "Religious event booking and management platform with Firebase integration, Google Maps support, admin tools, and seamless user coordination.",
  problem: "Community organizations struggled to coordinate large-scale events, leading to booking schedule conflicts and manual registration overhead.",
  approach: "Built a calendar-centric booking interface with automated emails and integrated Google Maps for location verification.",
  stack: ["React", "Tailwind CSS", "Node.js", "Express.js", "Firebase"],
  outcome: "Successfully automated registration and location routing for regional gatherings.",
  liveUrl: "https://www.satsangseva.com/",
  image: {
    src: "/SS.png",
    alt: "Screenshot of Satsang Seva platform booking interface showing calendar and location maps"
  },
  featured: false
};
