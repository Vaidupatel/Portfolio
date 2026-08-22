"use server";

import { Resend } from "resend";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { CONTACT_EMAIL } from "@/lib/constants";

export type ContactActionResponse = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  rawData: ContactFormData
): Promise<ContactActionResponse> {
  const result = contactSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      error: "Invalid form data. Please review the highlighted fields.",
    };
  }

  const { name, email, company, message } = result.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn(
      "RESEND_API_KEY is not set. Submission acknowledged for local development."
    );
    return { success: true };
  }

  try {
    const resend = new Resend(apiKey);
    const fromAddress =
      process.env.RESEND_FROM_EMAIL || "Vaidik Ghelani Studio <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` (${company})` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${
        company || "Not specified"
      }\n\nMessage:\n${message}`,
    });

    if (error) {
      return {
        success: false,
        error: error.message || "Failed to deliver email message.",
      };
    }

    return { success: true };
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "An unexpected error occurred.";
    return {
      success: false,
      error: errorMessage,
    };
  }
}
