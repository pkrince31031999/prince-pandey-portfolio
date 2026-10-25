import { projects } from "@/data/resume";
import { Container } from "@/components/container";
import { ProjectArt } from "@/components/project-art";
import { SectionHeading } from "@/components/section-heading";

export function Projects() {
  return (
    <section id="projects" className="pb-24 sm:pb-28" aria-labelledby="projects-heading">
      <Container>
        <SectionHeading
          id="projects-heading"
          index="05"
          title="Selected engineering work"
          description="Experience summaries from professional roles. These are not separately launched products, and the visuals are motifs rather than product screenshots."
        />

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <li key={project.id} className={index === 0 ? "md:col-span-2" : undefined}>
              <article
              className={
                index === 0
                  ? "grid overflow-hidden rounded-3xl border border-white/10 transition duration-300 hover:border-white/20 hover:shadow-[0_28px_70px_-42px_rgba(142,197,255,0.55)] md:grid-cols-2"
                  : "flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 transition duration-300 hover:border-white/20 hover:shadow-[0_28px_70px_-42px_rgba(142,197,255,0.55)]"
              }
              >
                <ProjectArt
                  kind={project.art}
                  label={project.motif}
                  className={index === 0 ? "min-h-56 border-b md:border-b-0 md:border-r" : "border-b"}
                />
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a9b6ff]">
                    Experience summary
                  </p>
                  <h3 className="mt-3 text-xl font-medium tracking-[-0.03em] text-[#f3efe6]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#b7b1a6]">{project.context}</p>
                  <p className="mt-4 text-sm leading-6 text-[#c9c3b8]">{project.overview}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technical stack">
                    {project.stack.map((item) => (
                      <li key={item}>
                        <span className="inline-flex rounded-full border border-white/10 px-2.5 py-1 text-xs text-[#d7d1c6]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 space-y-2.5">
                    {project.responsibilities.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-[#c9c3b8]">
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#a9b6ff]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
