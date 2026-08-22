import Image from 'next/image';

export function ProofStrip() {
  const companies = [
    { name: "Cloudinary", logo: "/cloud.svg" },
    { name: "Appwrite", logo: "/app.svg" },
    { name: "Hostinger", logo: "/host.svg" },
    { name: "Stream", logo: "/s.svg" },
    { name: "Docker", logo: "/dock.svg" },
  ];

  return (
    <section className="w-full py-8 border-y border-hairline bg-canvas/30 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 flex flex-wrap items-center justify-between gap-8 md:gap-12">
        <span className="font-mono text-[10px] font-bold text-ink-400 uppercase tracking-[0.15em] w-full md:w-auto text-center md:text-left mb-2 md:mb-0">
          TRUSTED ON PAST ENGAGEMENTS
        </span>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 flex-grow md:flex-grow-0">
          {companies.map((company) => (
            <div key={company.name} className="relative h-6 w-24 grayscale opacity-40 hover:opacity-75 transition-all duration-200">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
