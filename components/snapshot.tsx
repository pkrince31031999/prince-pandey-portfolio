import { snapshot } from "@/data/resume";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function Snapshot() {
  return (
    <section id="snapshot" className="pb-8 sm:pb-12" aria-labelledby="snapshot-heading">
      <Container>
        <SectionHeading id="snapshot-heading" index="01" title="Professional snapshot" />
        <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {snapshot.map((item, index) => (
            <li key={item.title} className="bg-[#090a0d] px-6 py-8 transition-colors duration-300 hover:bg-[#101218] sm:px-7 sm:py-10">
              <p className="font-mono text-[11px] tracking-[0.16em] text-[#a9b6ff]">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-lg font-medium tracking-[-0.02em] text-[#f3efe6]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#d5d0c6]">{item.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
