import { about, focusAreas } from "@/data/resume";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-28" aria-labelledby="about-heading">
      <Container>
        <SectionHeading
          id="about-heading"
          index="02"
          title="About"
          description="Backend engineering for products that depend on APIs, data, and infrastructure that holds up after launch."
        />
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-[#c9c3b8]">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-6 text-sm leading-6 text-[#b7b1a6]">
          <a
            href="#education"
            className="text-[#f3efe6] underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-[#a9b6ff]"
          >
            B.Tech, Computer Science Engineering
          </a>{" "}
          — Sharda University, Greater Noida.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <li key={area.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <h3 className="text-base font-medium tracking-[-0.02em] text-[#f3efe6]">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#d5d0c6]">{area.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
