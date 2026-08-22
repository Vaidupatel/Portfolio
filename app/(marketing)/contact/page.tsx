"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { FormInput } from "@/components/ui/form-input";
import { FormTextarea } from "@/components/ui/form-textarea";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CONTACT_EMAIL, LINKEDIN_URL, GITHUB_URL, OFFICE_LOCATION, OFFICE_AVAILABILITY } from "@/lib/constants";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    // TODO: wire up to API route or email service
    console.log("Contact form submitted:", data);
    alert("Thanks for reaching out! I'll get back to you soon.");
  }

  return (
    <div className="flex flex-col w-full">
      <section className="w-full py-16 md:py-24 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact form */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Eyebrow>GET IN TOUCH</Eyebrow>
              <h1 className="font-display text-3xl md:text-section font-bold text-ink-900 leading-display tracking-tight">
                Let&apos;s build something together
              </h1>
              <p className="text-[15px] text-ink-600 leading-relaxed max-w-[480px]">
                Have a project, a product idea, or a technical challenge? Tell me about it. I typically respond within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormInput
                  label="Name"
                  placeholder="Your name"
                  error={errors.name?.message}
                  {...register("name")}
                />
                <FormInput
                  label="Email"
                  type="email"
                  placeholder="you@company.com"
                  error={errors.email?.message}
                  {...register("email")}
                />
              </div>
              <FormInput
                label="Company (optional)"
                placeholder="Your company"
                {...register("company")}
              />
              <FormTextarea
                label="Message"
                placeholder="Tell me about your project, timeline, and budget range..."
                error={errors.message?.message}
                {...register("message")}
              />
              <Button type="submit" variant="primary" className="self-start mt-2" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>

          {/* Sidebar info */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:pt-16">
            <div className="flex flex-col gap-4 bg-accent-soft/40 border border-hairline rounded-card p-8">
              <h3 className="font-mono text-[11px] font-bold text-ink-400 tracking-[0.15em] uppercase">
                CONTACT INFO
              </h3>
              <div className="flex flex-col gap-3 text-[14px]">
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink-900 hover:text-accent font-medium transition-colors">
                  {CONTACT_EMAIL}
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-ink-600 hover:text-accent transition-colors">
                  LinkedIn →
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-ink-600 hover:text-accent transition-colors">
                  GitHub →
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 bg-canvas border border-hairline rounded-card p-8">
              <h3 className="font-mono text-[11px] font-bold text-ink-400 tracking-[0.15em] uppercase">
                AVAILABILITY
              </h3>
              <div className="flex flex-col gap-3 text-[14px] text-ink-600">
                <p className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-success inline-block animate-pulse" />
                  <span>{OFFICE_AVAILABILITY}</span>
                </p>
                <p>{OFFICE_LOCATION}</p>
                <p className="font-mono text-[12px] text-ink-400">
                  UTC+5:30 · Typically responds within 24h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
