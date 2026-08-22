import { Project } from "@/types/project";

export const project: Project = {
  slug: "10daile",
  name: "10Daile",
  category: "SERVICE MARKETPLACE",
  description: "On-demand home services platform similar to Urban Company with booking management, customer/vendor workflows, admin dashboard, payments, and mobile-first service coordination.",
  problem: "Connecting local home service providers with household customers was plagued by delayed scheduling, manual booking dispatch, and lack of secure payment gateways.",
  approach: "Implemented a responsive customer booking web interface and a comprehensive vendor dispatch dashboard, powered by a scalable Node.js backend and Stripe payments.",
  stack: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "Stripe"],
  outcome: "Launched a fully functional service booking marketplace with automated scheduling and payment settlement.",
  liveUrl: "https://10daile.com/",
  image: {
    src: "/10D.png",
    alt: "Screenshot of 10Daile platform homepage showing home service options and service bookings"
  },
  featured: false
};
