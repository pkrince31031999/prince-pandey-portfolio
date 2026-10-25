import type { ReactNode } from "react";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { profile, profiles } from "@/data/resume";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { isHttpUrl } from "@/lib/utils";

const profileLinks = [
  isHttpUrl(profiles.linkedin) ? { href: profiles.linkedin, label: "LinkedIn" } : null,
  isHttpUrl(profiles.github) ? { href: profiles.github, label: "GitHub" } : null,
].filter((item): item is { href: string; label: string } => item !== null);

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-[#0c0d11] py-24 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <SectionHeading
            id="contact-heading"
            index="07"
            title="Have a challenging problem to solve?"
            description="Let’s connect and discuss backend engineering, scalable systems, API integrations, or cloud infrastructure."
          />

          <ul className="mt-8 space-y-3">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 px-4 py-4 transition-colors hover:border-white/20 hover:bg-white/[0.03]"
              >
                <IconWrap>
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </IconWrap>
                <span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-[#b7b1a6]">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-sm text-[#f3efe6]">{profile.email}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={profile.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-white/10 px-4 py-4 transition-colors hover:border-white/20 hover:bg-white/[0.03]"
              >
                <IconWrap>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </IconWrap>
                <span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-[#b7b1a6]">
                    Phone
                  </span>
                  <span className="mt-1 block text-sm text-[#f3efe6]">{profile.phone}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={profile.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 px-4 py-4 transition-colors hover:border-white/20 hover:bg-white/[0.03]"
              >
                <IconWrap>
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </IconWrap>
                <span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-[#b7b1a6]">
                    Location
                  </span>
                  <span className="mt-1 block text-sm text-[#f3efe6]">{profile.locationFull}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={profile.resumePath}
                download={profile.resumeFileName}
                className="flex items-center gap-4 rounded-2xl border border-white/10 px-4 py-4 transition-colors hover:border-white/20 hover:bg-white/[0.03]"
              >
                <IconWrap>
                  <Download className="h-4 w-4" aria-hidden="true" />
                </IconWrap>
                <span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-[#b7b1a6]">
                    Resume
                  </span>
                  <span className="mt-1 block text-sm text-[#f3efe6]">Download PDF</span>
                </span>
              </a>
            </li>
          </ul>

          {profileLinks.length > 0 ? (
            <ul className="mt-5 flex flex-wrap gap-4">
              {profileLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#d7d1c6] underline decoration-white/20 underline-offset-4 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}

function IconWrap({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-[#a9b6ff]">
      {children}
    </span>
  );
}
