import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ProofStrip } from "@/components/sections/proof-strip";
import { ServicesPreview } from "@/components/sections/services-preview";
import { FeaturedWork } from "@/components/sections/featured-work";
import { ProcessDiagram } from "@/components/sections/process-diagram";
import { AboutPreview } from "@/components/sections/about-preview";
import { Testimonial } from "@/components/ui/testimonial";
import { CTABand } from "@/components/ui/cta-band";
import { testimonials } from "@/content/testimonials";
import { buildMetadata } from "@/lib/metadata";
import { SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = buildMetadata(
  "Premium Software Development Studio",
  SITE_DESCRIPTION,
  "/"
);

export default function HomePage() {
  const homeTestimonial = testimonials[0];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="scroll-reveal">
        <Hero />
      </div>

      {/* Proof Strip Logos */}
      <div className="scroll-reveal" style={{ animationDelay: "100ms" }}>
        <ProofStrip />
      </div>

      {/* Services Preview Grid */}
      <div className="scroll-reveal py-12 lg:py-20">
        <ServicesPreview />
      </div>

      {/* Featured Work Grid */}
      <div className="scroll-reveal py-12 lg:py-20 bg-canvas/30 border-y border-hairline">
        <FeaturedWork />
      </div>

      {/* Process Methodology Diagram */}
      <div className="scroll-reveal py-12 lg:py-20">
        <ProcessDiagram />
      </div>

      {/* Testimonial Block: proof adjacent to action */}
      {homeTestimonial && (
        <div className="scroll-reveal max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 py-12 lg:py-20 w-full">
          <Testimonial testimonial={homeTestimonial} />
        </div>
      )}

      {/* About Biography Preview */}
      <div className="scroll-reveal py-12 lg:py-20 border-t border-hairline bg-canvas/30">
        <AboutPreview />
      </div>

      {/* Bottom CTA Band */}
      <div className="scroll-reveal max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 py-16 lg:py-24 w-full">
        <CTABand title="Have a product worth building?" />
      </div>
    </div>
  );
}
