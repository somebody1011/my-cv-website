import { useReveal } from "@/hooks/use-reveal";
import { SectionHeader } from "./About";

const groups = [
  {
    label: "languages",
    items: ["TypeScript", "JavaScript", "Go", "Rust", "Python", "SQL", "Bash"],
  },
  {
    label: "frameworks",
    items: ["React", "Next.js", "TanStack", "Node.js", "Bun", "Deno", "Fastify", "tRPC"],
  },
  {
    label: "infra & data",
    items: ["PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "Cloudflare", "Terraform", "Kafka"],
  },
  {
    label: "tooling",
    items: ["Vite", "Vitest", "Playwright", "GitHub Actions", "Sentry", "Linear", "Figma", "Neovim"],
  },
];


export function Stack() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="stack" ref={ref} className="relative bg-surface-2/40 px-4 py-28 md:px-8 md:py-36">
      <div aria-hidden className="absolute inset-0 bg-dots opacity-50" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader index="02" title="tech_stack" file="~/ada/stack.json" />

        <div className="reveal mb-10">
          <pre className="overflow-x-auto rounded-md border border-border bg-surface p-5 font-mono text-[13px] leading-relaxed">
            <code>
              <span className="kw">const</span> <span className="prop">stack</span> <span className="pun">=</span> <span className="pun">{"{"}</span>{"\n"}
              {"  "}<span className="prop">primary</span><span className="pun">:</span> <span className="pun">[</span><span className="str">"TypeScript"</span><span className="pun">,</span> <span className="str">"React"</span><span className="pun">,</span> <span className="str">"Go"</span><span className="pun">],</span>{"\n"}
              {"  "}<span className="prop">database</span><span className="pun">:</span> <span className="str">"PostgreSQL"</span><span className="pun">,</span>{"\n"}
              {"  "}<span className="prop">deploy</span><span className="pun">:</span> <span className="pun">[</span><span className="str">"Cloudflare"</span><span className="pun">,</span> <span className="str">"AWS"</span><span className="pun">],</span>{"\n"}
              {"  "}<span className="prop">editor</span><span className="pun">:</span> <span className="str">"Neovim"</span> <span className="cm">// don't @ me</span>{"\n"}
              <span className="pun">{"}"}</span><span className="pun">;</span>
            </code>
          </pre>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {groups.map((g, gi) => (
            <div
              key={g.label}
              className="reveal rounded-md border border-border bg-surface p-6"
              style={{ transitionDelay: `${gi * 60}ms` }}
            >
              <div className="mb-4 flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>
                  <span className="cm">#</span> {g.label}
                </span>
                <span>{String(g.items.length).padStart(2, "0")} items</span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <li
                    key={t}
                    className="tech-chip cursor-default rounded-md border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}