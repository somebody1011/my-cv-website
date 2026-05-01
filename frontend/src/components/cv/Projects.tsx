import { ArrowUpRight, Star, GitFork } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeader } from "./About";

const projects = [
  {
    name: "edge-cache",
    description:
      "Distributed cache layer for the edge with sub-ms reads. Powers ~40M req/day for a SaaS dashboard.",
    tech: ["Rust", "Cloudflare Workers", "WASM"],
    stars: "2.1k",
    forks: "186",
    status: "production",
  },
  {
    name: "pulse-ui",
    description:
      "Headless React component library with built-in motion primitives. Used across 5 internal products.",
    tech: ["TypeScript", "React", "Framer Motion"],
    stars: "843",
    forks: "52",
    status: "active",
  },
  {
    name: "ledger-cli",
    description:
      "Tiny terminal-first finance tracker that syncs to a local SQLite file. ~12kb compiled.",
    tech: ["Go", "SQLite", "Cobra"],
    stars: "612",
    forks: "31",
    status: "stable",
  },
  {
    name: "promptlab",
    description:
      "Prompt engineering playground with versioning, evals, and a clean diff UI for LLM responses.",
    tech: ["Next.js", "tRPC", "Postgres"],
    stars: "1.4k",
    forks: "94",
    status: "beta",
  },
];

const statusColor: Record<string, string> = {
  production: "bg-primary/15 text-primary border-primary/30",
  active: "bg-accent/15 text-accent border-accent/30",
  stable: "bg-foreground/10 text-foreground border-border",
  beta: "bg-syntax-num/15 text-syntax-num border-syntax-num/30",
};

export function Projects() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="work" ref={ref} className="relative px-4 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeader index="03" title="projects" file="~/ada/projects/" />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href="#"
              className="project-card reveal group flex flex-col rounded-lg p-6"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex items-center gap-2 font-mono text-base">
                  <span className="text-muted-foreground">~/</span>
                  <span className="font-semibold text-foreground group-hover:text-primary">
                    {p.name}
                  </span>
                </div>
                <ArrowUpRight size={18} className="arrow text-muted-foreground group-hover:text-primary" />
              </div>

              <p
                className="mb-5 text-sm leading-relaxed text-muted-foreground"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {p.description}
              </p>

              <div className="mt-auto space-y-4">
                <ul className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-sm border border-border bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between border-t border-border pt-4 font-mono text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-1.5">
                      <Star size={12} /> {p.stars}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <GitFork size={12} /> {p.forks}
                    </span>
                  </div>
                  <span className={`rounded-sm border px-2 py-0.5 text-[10px] uppercase tracking-wider ${statusColor[p.status]}`}>
                    {p.status}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <a href="#" className="story-link inline-flex items-center gap-2 font-mono text-sm text-primary">
            <span className="cm">$</span> ls --all-projects →
          </a>
        </div>
      </div>
    </section>
  );
}