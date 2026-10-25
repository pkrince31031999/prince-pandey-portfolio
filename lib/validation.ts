import { z } from "zod";
import { profile } from "@/data/resume";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "Name should be 80 characters or fewer."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(120, "Email should be 120 characters or fewer."),
  subject: z
    .string()
    .trim()
    .min(3, "Add a short subject.")
    .max(140, "Subject should be 140 characters or fewer."),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters.")
    .max(3000, "Message should be 3000 characters or fewer."),
  botcheck: z.string().optional(),
});

export type ContactValues = z.infer<typeof contactSchema>;

export type ContactFieldErrors = Partial<
  Record<"name" | "email" | "subject" | "message", string[]>
>;

export type ContactResponse =
  | { status: "sent"; message: string }
  | { status: "fallback"; message: string; mailto: string }
  | { status: "invalid"; message: string; fieldErrors?: ContactFieldErrors }
  | { status: "error"; message: string };

export function createMailto(input: Pick<ContactValues, "name" | "email" | "subject" | "message">) {
  const body = `Name: ${input.name}\nEmail: ${input.email}\n\n${input.message}`;

  return `mailto:${profile.email}?subject=${encodeURIComponent(input.subject)}&body=${encodeURIComponent(body)}`;
}

export function cleanHeaderValue(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}
