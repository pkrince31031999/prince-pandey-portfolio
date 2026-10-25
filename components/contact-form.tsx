"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { buttonClasses } from "@/components/button-link";
import {
  contactSchema,
  type ContactResponse,
  type ContactValues,
} from "@/lib/validation";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base text-[#f3efe6] outline-none transition placeholder:text-[#8f897f] focus:border-[#a9b6ff]/60 disabled:opacity-60";

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [state, setState] = useState<ContactResponse | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      botcheck: "",
    },
  });

  async function onSubmit(values: ContactValues) {
    setPending(true);
    setState(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      const data: unknown = await response.json();
      if (!isContactResponse(data)) {
        setState({
          status: "error",
          message: "Unexpected response. Please email me directly.",
        });
        return;
      }

      if (data.status === "invalid" && data.fieldErrors) {
        (Object.keys(data.fieldErrors) as Array<keyof ContactValues>).forEach((key) => {
          const message = data.fieldErrors?.[key as keyof typeof data.fieldErrors]?.[0];
          if (message && key !== "botcheck") {
            setError(key, { message });
          }
        });
      }

      if (data.status === "sent") {
        reset();
      }

      setState(data);
    } catch {
      setState({
        status: "error",
        message: "Something went wrong. Please email me directly.",
      });
    } finally {
      setPending(false);
    }
  }

  if (state?.status === "sent") {
    return (
      <div className="rounded-3xl border border-white/10 bg-[#101217] p-6 sm:p-8" role="status">
        <h3 className="text-xl font-medium tracking-[-0.03em] text-[#f3efe6]">Message sent</h3>
        <p className="mt-3 text-sm leading-6 text-[#b7b1a6]">{state.message}</p>
        <button
          type="button"
          className={buttonClasses("secondary", "mt-6")}
          onClick={() => setState(null)}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-busy={pending}
      className="relative rounded-3xl border border-white/10 bg-[#101217] p-6 sm:p-8"
    >
      <h3 className="text-lg font-medium tracking-[-0.02em] text-[#f3efe6]">Send a message</h3>
      <p className="mt-2 text-sm leading-6 text-[#b7b1a6]">
        Name, email, subject, and a short note. If automatic delivery isn’t available, you’ll get an
        email draft instead of a false confirmation.
      </p>

      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true" hidden>
        <label htmlFor="botcheck">Leave this blank</label>
        <input
          id="botcheck"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("botcheck")}
        />
      </div>

      <div className="mt-6 space-y-5">
        <Field id="name" label="Name" error={errors.name?.message}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(inputClass, errors.name && "border-[#f0b4b4]/70")}
            {...register("name")}
          />
        </Field>

        <Field id="email" label="Email" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(inputClass, errors.email && "border-[#f0b4b4]/70")}
            {...register("email")}
          />
        </Field>

        <Field id="subject" label="Subject" error={errors.subject?.message}>
          <input
            id="subject"
            type="text"
            autoComplete="off"
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={cn(inputClass, errors.subject && "border-[#f0b4b4]/70")}
            {...register("subject")}
          />
        </Field>

        <Field id="message" label="Message" error={errors.message?.message}>
          <textarea
            id="message"
            rows={6}
            autoComplete="off"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={cn(inputClass, "resize-y", errors.message && "border-[#f0b4b4]/70")}
            {...register("message")}
          />
        </Field>
      </div>

      {state ? (
        <div
          role="status"
          className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-[#d7d1c6]"
        >
          <p>{state.message}</p>
          {state.status === "fallback" ? (
            <a href={state.mailto} className={buttonClasses("primary", "mt-4")}>
              Open email draft
            </a>
          ) : null}
        </div>
      ) : null}

      <button
        type="submit"
        className={buttonClasses("primary", "mt-6 w-full sm:w-auto")}
        disabled={pending}
      >
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-[#d7d1c6]">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#f0b4b4]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function isContactResponse(value: unknown): value is ContactResponse {
  if (!value || typeof value !== "object" || !("status" in value) || !("message" in value)) {
    return false;
  }

  const status = (value as { status?: unknown }).status;
  return status === "sent" || status === "fallback" || status === "invalid" || status === "error";
}
