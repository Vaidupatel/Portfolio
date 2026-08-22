import { Project } from "@/types/project";

export const project: Project = {
  slug: "parcel-diamonds",
  name: "Parcel Diamonds",
  category: "B2B COMMERCE",
  description: "Enterprise-grade B2B diamond ecommerce platform with RBAC, multi-role admin panel, FedEx shipping integration, Stripe payments, inventory workflows, customer inquiry chat, and analytics dashboards.",
  problem: "High-value diamond transactions were managed via manual invoices and legacy messaging groups, resulting in security vulnerabilities, payment delays, and shipping friction.",
  approach: "Developed a secure, multi-role B2B ecommerce platform with end-to-end encryption, automated FedEx tracking integrations, and a custom Stripe payment flow.",
  stack: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Stripe"],
  outcome: "A secure end-to-end B2B trading portal with automated shipping label generation and protected payment settlement.",
  liveUrl: "https://parceldiamonds.com/",
  image: {
    src: "/PD.png",
    alt: "Screenshot of Parcel Diamonds admin dashboard showing order management"
  },
  featured: true
};
