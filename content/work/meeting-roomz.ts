import { Project } from "@/types/project";

export const project: Project = {
  slug: "meeting-roomz",
  name: "Meeting Roomz",
  category: "WORKSPACE BOOKING",
  description: "Unified virtual conferencing + physical-space booking platform with scheduling, workspace management, and integrated payment flows.",
  problem: "Managing physical office workspace bookings and connecting them to virtual calendar invitations was disjointed, requiring manual email coordination and tracking.",
  approach: "Built a calendar-centric booking application using React and integrated Stripe for physical room deposits alongside custom scheduling engines.",
  stack: ["React", "Tailwind CSS", "Node.js", "Express.js", "Stripe"],
  outcome: "Streamlined corporate meeting room bookings and physical workspace reservation workflows.",
  liveUrl: "https://meetingroomz.com/",
  image: {
    src: "/MR.png",
    alt: "Screenshot of Meeting Roomz landing page displaying meeting room reservations grid"
  },
  featured: false
};
