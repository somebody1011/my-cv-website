import { useReveal } from "@/hooks/use-reveal";

export function SectionHeader({ index, title, file }: { index: string; title: string; file: string }) {
  return (
    <div className="reveal mb-12 flex items-end justify-between gap-4 border-b border-border pb-4">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-primary">{index}.</span>
        <h2 className="font-mono text-2xl font-semibold md:text-3xl">
          <span className="cm">// </span>
          {title}
        </h2>
      </div>
      <span className="hidden font-mono text-xs text-muted-foreground sm:inline">{file}</span>
    </div>
  );
}
export function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" ref={ref} className="relative px-4 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeader index="01" title="about" file="~/ada/about.md" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-7" style={{ fontFamily: "var(--font-sans)" }}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Hey, I'm Ada — a software engineer with{" "}
                <span className="font-mono text-foreground">7+ years</span> of experience
                building web applications, APIs, and developer tools that scale.
                I started out tinkering with WordPress themes at 14 and never
                really stopped writing code since.
              </p>
              <p>
                Today I work primarily with{" "}
                <span className="font-mono text-primary">TypeScript</span>,{" "}
                <span className="font-mono text-primary">React</span>, and{" "}
                <span className="font-mono text-primary">Go</span>, with a soft
                spot for Rust and well-designed CLIs. I care deeply about
                performance, accessibility, and shipping things that don't break
                at 3am.
              </p>
              <p>
                Outside of work I maintain a couple of small open-source
                libraries, write a low-traffic newsletter about systems design,
                and lose at chess on lichess under the name{" "}
                <span className="font-mono text-accent">@ada_pawns</span>.
              </p>
            </div>
          </div>

          <div className="reveal lg:col-span-5">
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-dot" style={{ backgroundColor: "oklch(0.65 0.22 25)" }} />
                <span className="terminal-dot" style={{ backgroundColor: "oklch(0.78 0.16 80)" }} />
                <span className="terminal-dot" style={{ backgroundColor: "oklch(0.78 0.16 155)" }} />
                <span className="ml-2 font-mono text-xs text-muted-foreground">stats.sh</span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-line">
                {[
                  ["7+", "years_shipped"],
                  ["120k", "lines_of_code"],
                  ["48", "projects_done"],
                  ["1.4k", "github_stars"],
                ].map(([n, l]) => (
                  <div key={l} className="bg-surface p-5">
                    <div className="font-mono text-3xl font-bold text-primary">{n}</div>
                    <div className="mt-1 font-mono text-[11px] text-muted-foreground">
                      <span className="cm">// </span>
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}