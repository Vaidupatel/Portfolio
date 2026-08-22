import { SectionHeader } from '../ui/section-header';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export function ProcessDiagram() {
  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "Discover",
      description: "We map product requirements, evaluate system integrations, and define the technical roadmap before writing any code."
    },
    {
      number: "02",
      title: "Design",
      description: "We structure the information architecture, plan database schemas, and align on interactive visual prototypes."
    },
    {
      number: "03",
      title: "Build",
      description: "We engineer the platform using clean, strict TypeScript, React, and modular backend API services."
    },
    {
      number: "04",
      title: "Ship",
      description: "We run page speed audits, optimize image compression, establish search indices, and deploy to stable cloud infrastructure."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 flex flex-col gap-12">
      <SectionHeader 
        eyebrow="METHODOLOGY"
        title="How a product gets built"
        description="A structured, transparent engineering process focused on shipping reliable software on schedule."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 relative">
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col gap-4 relative group">
            {/* Step Number */}
            <div className="font-mono text-xs font-bold text-accent tracking-wider flex items-center gap-3">
              <span>{step.number}</span>
              <span className="h-px bg-hairline flex-grow group-hover:bg-accent transition-colors duration-200" />
            </div>
            
            {/* Step Copy */}
            <h3 className="font-display text-xl font-bold text-ink-900 leading-tight">
              {step.title}
            </h3>
            <p className="text-[14px] text-ink-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
