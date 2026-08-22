import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/section-header';
import { Tag } from '@/components/ui/tag';
import { CTABand } from '@/components/ui/cta-band';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata(
  'About',
  'Vaidik Ghelani — senior full-stack MERN developer based in Ahmedabad, India. 5+ years building B2B commerce, AI integrations, and SaaS platforms.',
  '/about'
);

export default function AboutPage() {
  const skills = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
    'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL',
    'Redis', 'Firebase', 'Stripe', 'OpenAI API',
    'Docker', 'Vercel', 'AWS', 'Git',
  ];

  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'UNIKWORK',
      period: '2023 – Present',
      description: 'Designed and developed modern web applications using React.js, Next.js, Node.js, Express.js, MongoDB, SQL, and cloud-based services.',
    },
    {
      role: 'Full Stack Developer',
      company: 'Aarya SoftEx',
      period: '2021 – 2023',
      description: 'Built and maintained web platforms, admin panels, and business applications using React.js, Next.js, Node.js, Express.js, MongoDB, and REST APIs.',
    },
    {
      role: 'Independent Builder / Freelancer',
      company: 'Self-Employed',
      period: '2020 – 2021',
      description: 'Delivered full-stack web and mobile solutions for startups and businesses, handling UI/UX, backend API design, and Stripe integrations.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="w-full py-16 md:py-24 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 flex flex-col gap-16">
        {/* Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionHeader eyebrow="ABOUT" title="Vaidik Ghelani" />
            <div className="prose">
              <p>
                I am a senior full-stack developer based in Ahmedabad, Gujarat, India. Over the last 5+ years, I have engineered custom B2B ecommerce systems, operations management dashboards, and AI chatbot integrations for businesses across India and internationally.
              </p>
              <p>
                My approach is rooted in technical pragmatism: choosing stable frameworks, keeping bundle sizes light, ensuring strict schema designs, and prioritizing site speed and indexability. I treat every project as production software, not a prototype.
              </p>
              <p>
                When I am not building software, I study system design patterns, read about distributed architectures, and experiment with new AI model APIs.
              </p>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="lg:col-span-5 flex items-start justify-center">
            <div className="w-full max-w-[360px] aspect-[3/4] bg-accent-soft border border-hairline rounded-card flex items-center justify-center">
              <span className="font-mono text-[12px] text-ink-400 text-center px-4">
                Photo: professional headshot
              </span>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="flex flex-col gap-6">
          <h2 className="font-mono text-[11px] font-bold text-ink-400 tracking-[0.15em] uppercase border-b border-hairline pb-3">
            EXPERIENCE
          </h2>
          <div className="flex flex-col gap-6">
            {experiences.map((exp, i) => (
              <div key={i} className="flex flex-col md:flex-row justify-between items-start gap-3 border-b border-hairline pb-6 last:border-0 last:pb-0">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[16px] font-bold text-ink-900">
                    {exp.role} <span className="font-normal text-ink-600">at {exp.company}</span>
                  </h3>
                  <p className="text-[14px] text-ink-600 leading-relaxed max-w-[520px]">
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

        {/* Skills */}
        <div className="flex flex-col gap-4">
          <h2 className="font-mono text-[11px] font-bold text-ink-400 tracking-[0.15em] uppercase border-b border-hairline pb-3">
            TECHNOLOGIES & TOOLS
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 py-16 w-full">
        <CTABand title="Want to work together?" />
      </div>
    </div>
  );
}
