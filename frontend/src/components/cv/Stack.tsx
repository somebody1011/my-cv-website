import { useReveal } from "@/hooks/use-reveal";
import { SectionHeader } from "./About";

const groups = [
  {
    label: "languages",
    items: ["TypeScript", "JavaScript", "Go", "C", "Python", "SQL", "Bash"],
  },
  {
    label: "frameworks",
    items: ["React", "Next.js", "TanStack", "Node.js", "Npm","Express", "Tailwindcss", "Bootstrap","Shadcn-ui"],
  },
  {
    label: "infra & data",
    items: ["PostgreSQL", "Redis", "Docker","mySQL", "MongoDB","Firestore" ], //, "Kubernetes", "AWS", "Cloudflare", "Terraform", "Kafka"
  },
  {
    label: "tooling",
    items: ["Vite", "Jest", "GitHub Actions", "Vscode","Pycharm","Linux"],
  },
];


export function Stack() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="stack" ref={ref} className="relative bg-surface-2/40 px-4 py-28 md:px-8 md:py-36">
      <div aria-hidden className="absolute inset-0 bg-dots opacity-50" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader index="02" title="tech_stack" file="~/elisha/stack.json" />

        <div className="reveal mb-10">
          <pre className="overflow-x-auto rounded-md border border-border bg-surface p-5 font-mono text-[13px] leading-relaxed">
            <code>
              <span className="kw">const</span> <span className="prop">stack</span> <span className="pun">=</span> <span className="pun">{"{"}</span>{"\n"}
              {"  "}<span className="prop">primary</span><span className="pun">:</span> <span className="pun">[</span><span className="str">"TypeScript"</span><span className="pun">,</span> <span className="str">"React"</span><span className="pun">,</span> <span className="str">"Python"</span><span className="pun">],</span>{"\n"}
              {"  "}<span className="prop">database</span><span className="pun">:</span> <span className="str">"PostgreSQL"</span><span className="pun">,</span>{"\n"}
              {"  "}<span className="prop">deploy</span><span className="pun">:</span> <span className="pun">[</span><span className="str">"Vercel"</span><span className="pun">,</span> <span className="str">"Render"</span><span className="pun">],</span>{"\n"} 
              {"  "}<span className="prop">editor</span><span className="pun">:</span> <span className="str">"Vscode"</span> <span className="cm">// sometimes vim when i am hyped </span>{"\n"}
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