"use client";

import { useState } from "react";
import {
  Activity,
  Cloud,
  Code2,
  Container as ContainerIcon,
  Database,
  Layers,
  Server,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/data/resume";
import type { SkillIcon } from "@/types/portfolio";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { SkillMark, skillColor } from "@/components/skill-mark";
import { cn } from "@/lib/utils";

const icons: Record<SkillIcon, LucideIcon> = {
  languages: Code2,
  frameworks: Layers,
  backend: Server,
  databases: Database,
  cloud: Cloud,
  devops: ContainerIcon,
  monitoring: Activity,
  tools: Wrench,
  ai: Sparkles,
};

const accents: Record<SkillIcon, string> = {
  languages: "#a9b6ff",
  frameworks: "#a9b6ff",
  backend: "#a9b6ff",
  databases: "#a9b6ff",
  cloud: "#a9b6ff",
  devops: "#a9b6ff",
  monitoring: "#a9b6ff",
  tools: "#a9b6ff",
  ai: "#a9b6ff",
};

const featured = [
  "Cursor",
  "Claude",
  "Generative AI",
  "Google ADK",
  "APIs",
  "PHP",
  "Python",
  "Go",
  "Laravel",
  "Flask",
  "AWS",
  "Docker",
  "Kubernetes",
  "MySQL",
  "Redis",
  "Terraform",
  "Grafana",
] as const;

export function Skills() {
  const [active, setActive] = useState<string | null>(null);

  function toggle(name: string) {
    setActive((current) => (current === name ? null : name));
  }

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-white/10 bg-[#0c0d11] py-24 sm:py-28"
      aria-labelledby="skills-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(169,182,255,0.12),transparent_42%)]"
        aria-hidden="true"
      />
      <Container className="relative">
        <SectionHeading
          id="skills-heading"
          index="03"
          title="Technical skills"
          description="Languages, frameworks, APIs, data, and cloud, plus the AI tools I use while building: Cursor, Claude, generative AI, and Google ADK."
        />

        <div className="mt-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#b7b1a6]">
            Featured stack
          </p>
          <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {featured.map((name) => {
              const selected = active === name;
              const color = skillColor(name);

              return (
                <li key={name}>
                  <button
                    type="button"
                    aria-pressed={selected}
                    onClick={() => toggle(name)}
                    className={cn(
                      "group flex w-full flex-col items-center gap-3 rounded-2xl border border-white/10 bg-[#101217]/80 px-2 py-4 text-sm text-[#d7d1c6] transition duration-200 hover:text-[#f3efe6] motion-safe:hover:-translate-y-1",
                      selected && "text-[#f3efe6]",
                    )}
                    style={{
                      borderColor: selected ? color : undefined,
                      boxShadow: selected
                        ? `0 18px 40px -24px ${color}`
                        : undefined,
                    }}
                  >
                    <SkillMark
                      name={name}
                      size="lg"
                      className="transition duration-200 motion-safe:group-hover:scale-110"
                    />
                    <span className="text-center leading-5">{name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = icons[group.icon];
            const accent = accents[group.icon];

            return (
              <li
                key={group.id}
                className="rounded-3xl border border-white/10 bg-[#090a0d]/75 p-6 sm:p-7"
                style={{ boxShadow: `inset 3px 0 0 ${accent}` }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10"
                    style={{ color: accent, backgroundColor: `${accent}18` }}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-medium tracking-[-0.02em] text-[#f3efe6]">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const selected = active === item;
                    const color = skillColor(item);

                    return (
                      <li key={item}>
                        <button
                          type="button"
                          aria-pressed={selected}
                          onClick={() => toggle(item)}
                          className={cn(
                            "group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1 pl-1 pr-3 text-sm text-[#d7d1c6] transition duration-200 hover:text-[#f3efe6] motion-safe:hover:-translate-y-0.5",
                            selected && "text-[#f3efe6]",
                          )}
                          style={{
                            borderColor: selected ? color : undefined,
                            boxShadow: selected
                              ? `0 10px 24px -16px ${color}`
                              : undefined,
                          }}
                        >
                          <SkillMark
                            name={item}
                            className="transition duration-200 motion-safe:group-hover:scale-110"
                          />
                          {item}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
