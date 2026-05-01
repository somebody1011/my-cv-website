import { useReveal } from "@/hooks/use-reveal";
import { SectionHeader } from "./About";

const roles = [
  {
    period: "2024 — now",
    company: "Vercel",
    role: "Senior Software Engineer",
    location: "Remote",
    bullets: [
      "Lead engineer on the build pipeline team — reduced cold-build times by 38%.",
      "Designed and shipped a streaming log infrastructure handling 2B events/day.",
    ],
    stack: ["TypeScript", "Go", "Rust", "Kafka"],
  },
  {
    period: "2021 — 2024",
    company: "Linear",
    role: "Full-Stack Engineer",
    location: "Amsterdam",
    bullets: [
      "Owned realtime sync engine — under 80ms p95 across continents.",
      "Built the cycles & projects feature used by 30k+ engineering teams.",
    ],
    stack: ["TypeScript", "React", "Postgres", "GraphQL"],
  },
  {
    period: "2019 — 2021",
    company: "Paystack (Stripe)",
    role: "Backend Engineer",
    location: "Lagos",
    bullets: [
      "Scaled the payments API from 1k to 50k tps with zero-downtime migrations.",
      "Wrote the internal idempotency framework still in use today.",
    ],
    stack: ["Node.js", "Go", "Redis", "AWS"],
  },
  {
    period: "2017 — 2019",
    company: "Andela",
    role: "Software Engineer",
    location: "Lagos",
    bullets: [
      "Built internal tooling for matching engineers to global partner companies.",
    ],
    stack: ["Python", "Django", "React"],
  },
];

const skills = ["TypeScript", "React", "Go", "Rust", "Postgres", "Docker", "Kubernetes", "AWS", "Cloudflare", "Vite", "Bun", "Linux"];


export function Experience() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="experience" ref={ref} className="relative bg-surface-2/40 px-4 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeader index="04" title="career_log" file="~/ada/career.log" />

        <ol className="relative space-y-6 border-l border-dashed border-border pl-6 md:pl-10">
          {roles.map((r, i) => (
            <li key={r.company} className="reveal relative" style={{ transitionDelay: `${i * 60}ms` }}>
              <span className="absolute -left-[31px] top-1.5 flex h-3 w-3 md:-left-[45px]">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-50 animate-pulse-dot" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
              </span>

              <article className="rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary/50">
                <header className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-mono text-lg">
                    <span className="text-foreground font-semibold">{r.role}</span>{" "}
                    <span className="text-muted-foreground">@</span>{" "}
                    <span className="text-primary">{r.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {r.period} · {r.location}
                  </span>
                </header>
                <ul className="mb-4 space-y-1.5 text-sm text-muted-foreground" style={{ fontFamily: "var(--font-sans)" }}>
                  {r.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      {b}
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-wrap gap-1.5">
                  {r.stack.map((s) => (
                    <li key={s} className="rounded-sm border border-border bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>

        {/* Skills marquee */}
        <div className="reveal relative mt-16 overflow-hidden border-y border-border bg-surface py-4">
          <div className="flex w-max animate-marquee gap-8 font-mono text-sm text-muted-foreground">
            {[...skills, ...skills, ...skills].map((s, i) => (
              <span key={i} className="flex shrink-0 items-center gap-8">
                <span className="text-primary">{"<"}</span>
                {s}
                <span className="text-primary">{"/>"}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
