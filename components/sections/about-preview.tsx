import Link from 'next/link';
import { SectionHeader } from '../ui/section-header';
import { Tag } from '../ui/tag';
import { Button } from '../ui/button';

export function AboutPreview() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "UNIKWORK",
      period: "2023 - Present",
      description: "Designed and developed modern web applications using React.js, Next.js, Node.js, Express.js, MongoDB, SQL, and cloud-based services."
    },
    {
      role: "Full Stack Developer",
      company: "Aarya SoftEx",
      period: "2021 - 2023",
      description: "Built and maintained web platforms, admin panels, and business applications using React.js, Next.js, Node.js, Express.js, MongoDB, and REST APIs."
    },
    {
      role: "Independent Builder / Freelancer",
      company: "Self-Employed",
      period: "2020 - 2021",
      description: "Delivered full-stack web and mobile solutions for startups and businesses, handling UI/UX, backend API design, and stripe integrations."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Left Column: Bio Details */}
      <div className="lg:col-span-5 flex flex-col gap-6 text-left">
        <SectionHeader 
          eyebrow="FOUNDER"
          title="Vaidik Ghelani"
        />
        <p className="text-[15px] md:text-body text-ink-600 leading-body">
          I am a senior full-stack developer based in Ahmedabad, Gujarat, India. Over the last 5+ years, I have engineered custom B2B ecommerce systems, operations management panels, and AI chat integrations for businesses worldwide.
        </p>
        <p className="text-[15px] md:text-body text-ink-600 leading-body">
          My approach is rooted in technical pragmatism: choosing stable frameworks, keeping bundle sizes light, ensuring strict schema designs, and prioritizing site speed and indexability.
        </p>
        <div className="flex gap-4 mt-2">
          <Button variant="secondary" href="/about">Read my story</Button>
        </div>
      </div>

      {/* Right Column: Experience Timeline */}
      <div className="lg:col-span-7 flex flex-col gap-8">
        <h3 className="font-mono text-[11px] font-bold text-ink-400 tracking-[0.15em] uppercase border-b border-hairline pb-3">
          SELECTED EXPERIENCE
        </h3>
        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-start gap-4 border-b border-hairline pb-6 last:border-0 last:pb-0">
              <div className="flex flex-col gap-1 text-left">
                <h4 className="text-[16px] font-bold text-ink-900 leading-snug">
                  {exp.role} <span className="font-normal text-ink-600">at {exp.company}</span>
                </h4>
                <p className="text-[14px] text-ink-600 leading-relaxed max-w-[480px]">
                  {exp.description}
                </p>
              </div>
              <span className="font-mono text-[12px] text-ink-400 font-medium whitespace-nowrap">
                {exp.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
