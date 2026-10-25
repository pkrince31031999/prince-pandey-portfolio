import { NextResponse } from "next/server";
import { profile } from "@/data/resume";
import {
  cleanHeaderValue,
  contactSchema,
  createMailto,
  type ContactFieldErrors,
  type ContactResponse,
} from "@/lib/validation";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  if (hits.size > 1000) hits.clear();

  const recent = (hits.get(ip) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    hits.set(ip, recent);
    return true;
  }

  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function json(body: ContactResponse, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");

  if (!origin || !host) {
    return json({ status: "error", message: "Request was rejected." }, 403);
  }

  try {
    if (new URL(origin).host !== host) {
      return json({ status: "error", message: "Request was rejected." }, 403);
    }
  } catch {
    return json({ status: "error", message: "Request was rejected." }, 403);
  }

  const ip = (
    request.headers.get("x-forwarded-for") ??
    request.headers.get("x-real-ip") ??
    "unknown"
  )
    .split(",")[0]
    .trim();

  if (isRateLimited(ip)) {
    return json(
      {
        status: "error",
        message: "Too many messages were sent just now. Please email directly, or try again shortly.",
      },
      429,
    );
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return json({ status: "invalid", message: "The form could not be read." }, 400);
  }

  let text = "";
  try {
    text = await request.text();
  } catch {
    return json({ status: "invalid", message: "The form could not be read." }, 400);
  }

  if (text.length > 20_000) {
    return json({ status: "invalid", message: "Message is too large." }, 413);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(text);
  } catch {
    return json({ status: "invalid", message: "The form could not be read." }, 400);
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    const flat = parsed.error.flatten().fieldErrors;
    const fieldErrors: ContactFieldErrors = {
      name: flat.name,
      email: flat.email,
      subject: flat.subject,
      message: flat.message,
    };

    return json(
      {
        status: "invalid",
        message: "Please check the highlighted fields.",
        fieldErrors,
      },
      400,
    );
  }

  const name = cleanHeaderValue(parsed.data.name);
  const email = cleanHeaderValue(parsed.data.email);
  const subject = cleanHeaderValue(parsed.data.subject);
  const message = parsed.data.message.trim();
  const mailto = createMailto({ name, email, subject, message });

  if (parsed.data.botcheck && parsed.data.botcheck.trim().length > 0) {
    return json({
      status: "sent",
      message: "Message sent. I’ll get back to you.",
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || profile.email;

  if (!apiKey || !from) {
    return json({
      status: "fallback",
      message:
        "Automatic delivery isn’t configured on this server yet. Open the email draft, or write directly using the address above.",
      mailto,
    });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      console.error("Contact email failed", response.status);
      return json({
        status: "fallback",
        message:
          "The message could not be sent automatically. Use the email draft instead, or write directly.",
        mailto,
      });
    }
  } catch (error) {
    console.error("Contact email request failed", error instanceof Error ? error.name : "unknown");
    return json({
      status: "fallback",
      message:
        "The message could not be sent automatically. Use the email draft instead, or write directly.",
      mailto,
    });
  }

  return json({
    status: "sent",
    message: "Message sent. I’ll get back to you.",
  });
}
