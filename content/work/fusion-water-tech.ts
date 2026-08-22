import { Project } from "@/types/project";

export const project: Project = {
  slug: "fusion-water-tech",
  name: "Fusion Water Tech",
  category: "OPERATIONS & TELEMETRY",
  description: "Corporate website and admin management system for a water purification company featuring product showcases, inquiry management, responsive UI, and operational admin controls.",
  problem: "Water treatment plants had manual tracking of purification metrics, leading to compliance lags and paper-based auditing errors.",
  approach: "Focus on the operator's field dashboard. Ensure offline capability for remote metrics logging and clean telemetry charts for quick auditing.",
  stack: ["React", "Node.js", "Express.js", "MongoDB"],
  outcome: "A live telemetry dashboard at fusionwatertech.com that automated compliance reporting and eliminated manual logging friction for operators.",
  liveUrl: "https://www.fusionwatertech.com/",
  image: {
    src: "/FWT.png",
    alt: "Screenshot of Fusion Water Tech live dashboard displaying automated reports status and water quality charts"
  },
  featured: true
};
