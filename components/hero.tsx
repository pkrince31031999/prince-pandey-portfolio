import { Download } from "lucide-react";
import type { CSSProperties } from "react";
import { heroStack, aiStack, profile } from "@/data/resume";
import { ArchitecturePanel } from "@/components/architecture-panel";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { MovingWords } from "@/components/moving-words";
import { SkillMark, skillColor } from "@/components/skill-mark";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(169,182,255,0.18),transparent_48%)]"
        aria-hidden="true"
      />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-16">
        <div>
          <p className="text-sm text-[#b7b1a6]">
            {profile.location}
            <span className="px-2 text-white/25" aria-hidden="true">
              /
            </span>
            {profile.experienceLabel}
          </p>

          <h1 className="mt-6 text-2xl font-medium tracking-[-0.03em] text-[#f3efe6] sm:text-3xl">
            {profile.name}
          </h1>
          <p className="mt-2 flex max-w-xl flex-wrap gap-x-3 gap-y-1 text-sm leading-6 text-[#d7d1c6] sm:text-base">
            {["Software Engineer", "Backend Developer", "DevOps Engineer"].map((part) => (
              <span key={part} className="whitespace-nowrap">
                {part}
              </span>
            ))}
          </p>

          <h2 className="mt-5 max-w-xl text-[clamp(2.15rem,4.6vw,3.35rem)] font-medium leading-[1.08] tracking-[-0.035em] text-[#f3efe6]">
            <span className="sr-only">
              {profile.headlineLead} {profile.headlineAccent} {profile.headlineTail}
            </span>
            <span aria-hidden="true" className="block">
              {profile.headlineLead}
              <MovingWords />
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-[#d5d0c6]">
            {profile.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#projects">Explore My Work</ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Let&apos;s Connect
            </ButtonLink>
            <ButtonLink
              href={profile.resumePath}
              download={profile.resumeFileName}
              variant="secondary"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </ButtonLink>
          </div>

          <div className="mt-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#b7b1a6]">
              Core stack
            </p>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Core technologies">
              {heroStack.map((item) => (
                <li key={item}>
                  <a
                    href="#skills"
                    className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1 pl-1 pr-3 text-sm text-[#d7d1c6] transition duration-200 hover:border-[var(--mark)] hover:text-[#f3efe6] motion-safe:hover:-translate-y-0.5"
                    style={{ "--mark": skillColor(item) } as CSSProperties}
                  >
                    <SkillMark
                      name={item}
                      className="transition duration-200 motion-safe:group-hover:scale-110"
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#b7b1a6]">
              AI & APIs
            </p>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="AI tools and APIs">
              {aiStack.map((item) => (
                <li key={item}>
                  <a
                    href="#skills"
                    className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1 pl-1 pr-3 text-sm text-[#d7d1c6] transition duration-200 hover:border-[var(--mark)] hover:text-[#f3efe6] motion-safe:hover:-translate-y-0.5"
                    style={{ "--mark": skillColor(item) } as CSSProperties}
                  >
                    <SkillMark
                      name={item}
                      className="transition duration-200 motion-safe:group-hover:scale-110"
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ArchitecturePanel />
      </Container>
    </section>
  );
}
