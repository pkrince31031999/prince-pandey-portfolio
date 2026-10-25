import { footerLinks, profile } from "@/data/resume";
import { Container } from "@/components/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div
        aria-hidden="true"
        className="h-px bg-[linear-gradient(90deg,transparent,#a9b6ff,transparent)]"
      />
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p className="text-base font-medium tracking-[-0.02em] text-[#f3efe6]">{profile.name}</p>
            <p className="mt-2 text-sm text-[#b7b1a6]">{profile.shortTitle}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-[#b7b1a6] transition-colors hover:text-[#f3efe6]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <a
              href={`mailto:${profile.email}`}
              className="break-all text-sm text-[#d7d1c6] underline decoration-white/15 underline-offset-4 hover:text-white"
            >
              {profile.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-[#b7b1a6] sm:flex-row sm:items-center sm:justify-between">
          <p suppressHydrationWarning>© {year} {profile.name}</p>
          <p>Designed & built with care</p>
        </div>
      </Container>
    </footer>
  );
}
