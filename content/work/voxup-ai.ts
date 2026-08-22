import { Project } from "@/types/project";

export const project: Project = {
  slug: "voxup-ai",
  name: "Voxup.ai",
  category: "AI & AUTOMATION",
  description: "WhatsApp business marketing and automation platform with AI-driven workflows, campaign management, conversational automation, analytics, and customer engagement tools.",
  problem: "Businesses struggled to engage customers on messaging channels in real-time, resulting in high churn, delayed customer service, and manual campaign tracking.",
  approach: "Built a conversational chatbot builder with Node.js and AI APIs, integrated directly with WhatsApp Business API, and created a visual analytics dashboard for campaigns.",
  stack: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "OpenAI"],
  outcome: "Helped customers automate over 50,000 conversations, boosting lead conversion by 35% and reducing customer support response time by 90%.",
  liveUrl: "https://voxup.ai/",
  image: {
    src: "/VOX.png",
    alt: "Screenshot of Voxup.ai analytics console displaying WhatsApp campaign stats"
  },
  featured: true
};
