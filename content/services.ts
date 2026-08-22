import { Service } from "@/types/service";

export const services: Service[] = [
  {
    slug: "mern-stack-development",
    title: "MERN Stack Development",
    eyebrow: "FULL-STACK ENGINEERING",
    description: "Custom high-performance web applications and dashboards built with MongoDB, Express.js, React, and Node.js.",
    longDescription: "I build robust, scalable, and secure web applications tailored to your exact business requirements. By leveraging the MERN stack (MongoDB, Express, React, Node.js), I ensure a seamless full-stack solution from intuitive user interfaces to optimized database queries and secure REST/GraphQL APIs.",
    deliverables: [
      "Custom React and Next.js frontend interfaces",
      "Robust Node.js and Express backend API servers",
      "Secure MongoDB database schemas and indexing",
      "Third-party Stripe, FedEx, and CRM integrations",
      "Role-Based Access Control (RBAC) authentication systems"
    ],
    technologies: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "Tailwind CSS"],
    faqs: [
      {
        question: "Why choose the MERN stack for web development?",
        answer: "MERN uses JavaScript across the entire stack (React for UI, Node/Express for server, MongoDB for database), ensuring faster development, clean codebase integration, and highly scalable non-blocking I/O operations."
      },
      {
        question: "Do you build single-page apps or server-rendered apps?",
        answer: "Depending on your SEO and performance needs, I build client-rendered single-page apps (SPAs) or server-side rendered (SSR) / static static generation applications using Next.js."
      },
      {
        question: "How do you ensure application security?",
        answer: "I implement secure JWT authentication flows, sanitize all input fields, enforce CORS policies, encrypt passwords with bcrypt, and set up strict API rate limits to prevent brute-force attacks."
      }
    ]
  },
  {
    slug: "ai-automation-integration",
    title: "AI & Automation Integration",
    eyebrow: "AI & WORKFLOWS",
    description: "Conversational AI chatbots, voice calling agents, and automated workflow pipelines.",
    longDescription: "Supercharge your business processes by automating repetitive operations and customer service. I build custom AI systems, including OpenAI-powered chatbots, voice agent integrations, and automation loops using tools like make.com, Zapier, and native Node.js schedulers.",
    deliverables: [
      "AI chatbots trained on your custom company knowledge base",
      "Voice calling agents integrated with Twilio and AI speech models",
      "Automated lead routing and CRM synchronization pipelines",
      "Real-time WhatsApp campaign marketing automation boards",
      "Custom vector database integration for semantic search"
    ],
    technologies: ["OpenAI API", "Twilio", "Make.com", "Zapier", "Pinecone", "Node.js", "Python"],
    faqs: [
      {
        question: "What is an AI calling agent?",
        answer: "An AI calling agent is a virtual assistant that can handle customer support calls or outbound sales pitches using natural language processing (NLP), speech-to-text, and generative AI models to converse in real-time."
      },
      {
        question: "How do you prevent AI chatbots from hallucinating wrong info?",
        answer: "I use Retrieval-Augmented Generation (RAG). By embedding your verified documentation in a vector database, the AI is forced to answer strictly based on your source files rather than making up answers."
      },
      {
        question: "Can these automations connect with my existing CRM?",
        answer: "Yes, I integrate custom API connectors and automation pipelines that sync lead details, chats, and calls directly with HubSpot, Salesforce, or your own proprietary CRM platform."
      }
    ]
  },
  {
    slug: "saas-mvp-development",
    title: "SaaS MVP Development",
    eyebrow: "RAPID VALIDATION",
    description: "Rapid, validation-focused product development to get your SaaS MVP to market in weeks.",
    longDescription: "Don't spend months building features your customers might not want. I help startups and founders design, build, and launch high-fidelity Minimal Viable Products (MVPs) focused on validating core hypotheses quickly using pre-built UI libraries and production-ready codebases.",
    deliverables: [
      "Interactive high-fidelity SaaS web application layouts",
      "Subscription billing flows (Stripe customer portals)",
      "Database schema creation and user workspace structures",
      "Core features development (e.g. dashboards, file uploads)",
      "Production deployment to Vercel, AWS, or DigitalOcean"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Stripe", "PostgreSQL", "MongoDB"],
    faqs: [
      {
        question: "How long does it take to build a SaaS MVP?",
        answer: "A standard MVP takes between 4 to 8 weeks depending on the complexity of your core features. I focus strictly on scope chunking to hit validation milestones quickly."
      },
      {
        question: "What happens to the code after the MVP launches?",
        answer: "You own 100% of the code. The stack (TypeScript, Next.js, Node.js) is designed to scale modularly, making it easy to hand over to an in-house engineering team later."
      },
      {
        question: "How much does a SaaS MVP cost to build?",
        answer: "Pricing depends on the scope of work and features. I provide structured phase-based quotes starting from a clear baseline, rather than open-ended hourly billing."
      }
    ]
  }
];
