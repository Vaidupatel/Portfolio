import { Project } from "@/types/project";

export const project: Project = {
  slug: "bizcivitas",
  name: "BizCivitas",
  category: "COMMUNITY PLATFORM",
  description: "Business engagement and networking ecosystem combining community management, event discovery, collaboration tools, admin operations, and scalable backend infrastructure.",
  problem: "Local business communities lacked a central portal for events, directory management, and real-time networking, forcing them to use multiple siloed social media groups.",
  approach: "Built a consolidated React/Next.js dashboard with a Node.js/MongoDB REST API, integrating role-based community directories, event booking tools, and automated communication.",
  stack: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
  outcome: "A community dashboard used by regional networking circles to manage and automate community meetups and event discovery.",
  liveUrl: "https://bizcivitas.com/",
  image: {
    src: "/BC.png",
    alt: "Screenshot of BizCivitas dashboard showing community event management interface"
  },
  featured: false
};
