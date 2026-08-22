"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { FormInput } from "@/components/ui/form-input";
import { FormTextarea } from "@/components/ui/form-textarea";
import { Button } from "@/components/ui/button";
import { submitContactForm } from "@/app/(marketing)/contact/actions";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("idle");
    setServerError(null);

    const response = await submitContactForm(data);

    if (response.success) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
      setServerError(
        response.error || "Something went wrong. Please try again later."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col gap-6 bg-accent-soft/40 border border-hairline rounded-card p-8 text-ink-900 animate-fade-in">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-success/15 text-success flex items-center justify-center font-bold text-sm">
            ✓
          </span>
          <h3 className="font-display text-xl font-bold">Message sent successfully</h3>
        </div>
        <p className="text-[15px] text-ink-600 leading-relaxed">
          Thank you for reaching out. Your project details have been received, and I will get back to you within 24 hours.
        </p>
        <div>
          <Button
            type="button"
            variant="secondary"
            onClick={() => setStatus("idle")}
          >
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {status === "error" && serverError && (
        <div className="p-4 rounded-card bg-error/10 border border-error text-error text-[14px]">
          {serverError}
        </div>
      )}

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

      <Button
        type="submit"
        variant="primary"
        className="self-start mt-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
