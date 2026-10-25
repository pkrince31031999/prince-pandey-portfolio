"use client";

import { ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";
import { experience } from "@/data/resume";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

export function Experience() {
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(experience.map((job, index) => [job.id, index === 0])),
  );

  return (
    <section id="experience" className="py-24 sm:py-28" aria-labelledby="experience-heading">
      <Container>
        <SectionHeading
          id="experience-heading"
          index="04"
          title="Experience"
            description="Four roles across cloud products, logistics, and healthcare."
        />

        <ol className="relative mt-12 space-y-4 border-l border-white/10 pl-5 sm:pl-8">
          {experience.map((job) => {
            const expanded = open[job.id] ?? false;
            const panelId = `role-${job.id}`;

            return (
              <li key={job.id} className="relative">
                <span
                  className={cn(
                    "absolute -left-[1.45rem] top-8 h-2.5 w-2.5 rounded-full border sm:-left-[2.2rem]",
                    job.current
                      ? "border-[#a9b6ff] bg-[#a9b6ff] shadow-[0_0_12px_rgba(169,182,255,0.85)]"
                      : "border-white/30 bg-[#090a0d]",
                  )}
                  aria-hidden="true"
                />
                <article className="rounded-3xl border border-white/10 bg-white/[0.02]">
                  <button
                    type="button"
                    className="flex w-full items-start gap-4 px-5 py-5 text-left sm:px-6"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpen((current) => ({ ...current, [job.id]: !current[job.id] }))
                    }
                  >
                    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 font-mono text-[11px] text-[#f3efe6]">
                      {job.monogram}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span className="text-lg font-medium tracking-[-0.02em] text-[#f3efe6]">
                          {job.role}
                        </span>
                        {job.current ? (
                          <span className="rounded-full border border-[#a9b6ff]/30 bg-[#a9b6ff]/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#c5ceff]">
                            Current
                          </span>
                        ) : null}
                      </span>
                      <span className="mt-1 block text-sm text-[#f3efe6]">{job.company}</span>
                      <span className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#b7b1a6]">
                        {"organization" in job && job.organization ? (
                          <span>{job.organization}</span>
                        ) : null}
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                          {job.location}
                        </span>
                        <span className="font-mono text-xs">
                          {job.start} – {job.end}
                        </span>
                      </span>
                    </span>
                    <ChevronDown
                      className={cn(
                        "mt-1 h-5 w-5 shrink-0 text-[#b7b1a6] transition-transform duration-200",
                        expanded && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  <div className="px-5 pb-1 sm:px-6 sm:pl-[4.75rem]">
                    <ul className="flex flex-wrap gap-2 pb-4" aria-label="Technologies">
                      {job.technologies.map((tech) => (
                        <li key={tech}>
                          <span className="inline-flex rounded-full border border-white/10 px-2.5 py-1 text-xs text-[#d7d1c6]">
                            {tech}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {expanded ? null : (
                      <p className="pb-5 text-sm leading-6 text-[#d5d0c6]">{job.highlights[0]}</p>
                    )}
                  </div>

                  <div
                    id={panelId}
                    role="region"
                    aria-hidden={!expanded}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-3 px-5 pb-6 sm:px-6 sm:pl-[4.75rem]">
                        {job.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 text-sm leading-6 text-[#c9c3b8]"
                          >
                            <span
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#a9b6ff]"
                              aria-hidden="true"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
