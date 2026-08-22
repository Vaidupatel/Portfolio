import { Project } from "@/types/project";

export const project: Project = {
  slug: "novel",
  name: "Novel",
  category: "MEDIA & CONTENT",
  description: "Token-based reading application with admin dashboard, secure authentication, content moderation, and scalable GridFS media storage.",
  problem: "High media-bandwidth reading platforms struggle with content fragmentation, slow asset load times, and insecure author paywalls.",
  approach: "Implemented a Node.js API with custom MongoDB GridFS adapters to store and stream large publications and cover graphics securely.",
  stack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
  outcome: "A robust token-based reader backend with responsive reading interfaces.",
  image: {
    src: "/p2.svg",
    alt: "Illustration of Novel platform book covers and user interface views"
  },
  featured: false
};
