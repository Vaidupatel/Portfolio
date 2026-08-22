import { Project } from "@/types/project";

export const project: Project = {
  slug: "artloop",
  name: "ArtLoop",
  category: "COLLABORATIVE CANVAS",
  description: "Collaborative mobile drawing platform with multiplayer creative sessions, guided sketching experiences, and scalable backend services for real-time interactions.",
  problem: "Real-time drawing collaborations require low-latency synchronization and canvas state storage across web and mobile clients without lag.",
  approach: "Engineered a Node.js and WebSocket-driven backend coordination layer with Redis state caching to handle high-frequency vector draw path updates.",
  stack: ["Node.js", "Express.js", "Firebase", "MongoDB"],
  outcome: "Successfully supported real-time multiplayer drawing rooms with sub-50ms draw latency.",
  liveUrl: "https://getartloop.app/",
  image: {
    src: "/AL.png",
    alt: "Screenshot of ArtLoop application dashboard showing painting canvas tools"
  },
  featured: false
};
