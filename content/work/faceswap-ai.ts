import { Project } from "@/types/project";

export const project: Project = {
  slug: "faceswap-ai",
  name: "FaceSwap AI",
  category: "AI & MULTIMEDIA",
  description: "AI-powered mobile application for real-time face swapping across images and videos with optimized backend processing, media handling pipelines, and scalable API architecture.",
  problem: "Deep learning face swap pipelines require high-bandwidth image uploads and slow, compute-heavy GPU processing, causing client timeouts.",
  approach: "Engineered an asynchronous task queuing pipeline using Node.js, Express, and Redis to process requests out-of-band and notify clients via webhooks.",
  stack: ["Node.js", "Express.js", "Redis", "MongoDB"],
  outcome: "Handled up to 10,000 daily AI media processing tasks without API degradation.",
  liveUrl: "https://play.google.com/store/apps/details?id=com.app.faceswap_ai",
  image: {
    src: "/FS.webp",
    alt: "Screenshot of FaceSwap AI mobile store page showing face swapped photos examples"
  },
  featured: false
};
