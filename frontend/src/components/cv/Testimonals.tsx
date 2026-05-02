import { useReveal } from "@/hooks/use-reveal";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Elisha is a phenomenal developer and collaborator. He consistently delivers high-quality work on time, communicates clearly, and elevates the entire team with his positive attitude and growth mindset.",
    name: "Joseph Angelo",
    role: "staff member",
    company: "Makasini enterprises",
    initials: "JA",
  },
//   {
//     quote:
//       "Rare combination of taste, speed, and rigor. Code reviews from Ada made our entire team better.",
//     name: "Tomás Rivera",
//     role: "Staff Engineer",
//     company: "Helix",
//     initials: "TR",
//   },
//   {
//     quote:
//       "Took a vague spec and delivered a polished product. Communicates clearly, ships reliably — a true 10x collaborator.",
//     name: "Priya Anand",
//     role: "Product Lead",
//     company: "Mercato",
//     initials: "PA",
//   },
//   {
//     quote:
//       "We hired Ada for a 4‑week sprint and ended up extending three times. Pure signal, zero noise.",
//     name: "Lukas Berg",
//     role: "Founder",
//     company: "Outpost",
//     initials: "LB",
//   },
];

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="testimonials" className="relative px-4 py-28 md:px-8">
      <div ref={ref} className="relative mx-auto max-w-7xl">
        <div className="reveal mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-muted-foreground">
              <span className="cm">// section</span>
            </p>
            <h2 className="mt-1 font-mono text-3xl font-bold md:text-5xl">
              <span className="kw">const</span>{" "}
              <span className="prop">testimonials</span>{" "}
              <span className="pun">=</span> <span className="pun">[</span>
            </h2>
          </div>
          <span className="hidden font-mono text-xs text-muted-foreground md:inline">
            {testimonials.length} entries
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className="reveal project-card group relative flex flex-col gap-5 rounded-lg p-6"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-center justify-between">
                <Quote
                  size={28}
                  className="text-primary opacity-70 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]"
                />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={12}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
              </div>
              <p className="font-sans text-base leading-relaxed text-foreground/90" style={{ fontFamily: "var(--font-sans)" }}>
                "{t.quote}"
              </p>

              <div className="mt-auto flex items-center gap-3 border-t border-border pt-4">
                <div
                  aria-hidden
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-2 font-mono text-xs text-primary"
                >
                  {t.initials}
                </div>
                <div className="font-mono text-xs">
                  <div className="text-foreground">{t.name}</div>
                  <div className="text-muted-foreground">
                    <span className="cm">// </span>
                    {t.role} @ {t.company}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
         <p className="reveal mt-10 font-mono text-3xl font-bold md:text-5xl">
          <span className="pun">];</span>
        </p>
      </div>
    </section>
  );
}
