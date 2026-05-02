import { useReveal } from "@/hooks/use-reveal";
import { SectionHeader } from "./About";

const roles = [
  {
    period: "2026 — now",
    company: "(solo development)",
    role: " Software Developer",
    location: "Full-time",
    bullets: [
      "Creating an SDK to streamline integration with East African fintech APIs.",
      "Learning Python and Go on the fly, contributing to open source, and building small side projects while I figure out what to do next.",
      "Learning more about systemsdesign,security, and distributed systems by reading a lot and building small tools and libraries.",
    ],
    stack: ["TypeScript", "Go", "Python", "Postgressql"],
  },
  {
    period: "2025",
    company: "Makasini enterprises",
    role: "Full-Stack Developer",
    location: "Mbeya, TZ",
    bullets: [
      "Developed an inventory management and point-of-sale system for local store owners, improving their operational efficiency and sales tracking.",
      "Deployed the application on Vercel, ensuring high availability and performance for users and contiously iterated based on user feedback to enhance features and usability.",
    ],
    stack: ["TypeScript", "React", "Firebase", "Express", "Tailwindcss"],
  },
  {
    period: "July 2023 - Sept 2023",
    company: "Buibui technologies",
    role: "Field Student",
    location: "Dar es salaam, TZ",
    bullets: [
      "Performed Data entry activities and provided support in the development.",
      "Ensured data accuracy and completeness.",
    ],
    stack: ["Agiza app"],
  },
  
];

const skills = ["TypeScript", "React", "Go", "Python", "Postgres", "Docker", "Kubernetes", "AWS", "Cloudflare", "Vite", "Bun", "Linux"];


export function Experience() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="experience" ref={ref} className="relative bg-surface-2/40 px-4 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeader index="04" title="career_log" file="~/elisha/career.log" />

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
