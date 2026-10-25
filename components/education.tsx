import { education } from "@/data/resume";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function Education() {
  const [primary, ...earlier] = education;

  return (
    <section id="education" className="pb-24 sm:pb-28" aria-labelledby="education-heading">
      <Container>
        <SectionHeading id="education-heading" index="06" title="Education" />

        <article className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#a9b6ff]">
            {primary.period}
          </p>
          <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[#f3efe6]">
            {primary.credential}
          </h3>
          <p className="mt-2 text-base text-[#d7d1c6]">{primary.detail}</p>
          <p className="mt-4 text-sm text-[#b7b1a6]">
            {primary.school}
            {primary.location ? `, ${primary.location}` : ""}
          </p>
        </article>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {earlier.map((item) => (
            <li key={item.id} className="rounded-2xl border border-white/10 px-5 py-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#b7b1a6]">
                {item.period}
              </p>
              <h3 className="mt-2 text-base font-medium text-[#f3efe6]">{item.credential}</h3>
              <p className="mt-1 text-sm text-[#b7b1a6]">{item.school}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
