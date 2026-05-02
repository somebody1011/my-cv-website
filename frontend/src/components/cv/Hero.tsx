import { useEffect, useState } from "react";
import { ArrowDown,  Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import devPortrait from "@/assets/dev-portrait.jpg";

const roles = ["Full-Stack Developer", "TypeScript Native", "Open-Source Contributor", "Indie Builder"];

export function Hero() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1400);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setIdx((i) => (i + 1) % roles.length);
        return;
      }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx]);
     return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 md:px-8"
    >
      <div aria-hidden className="absolute inset-0 bg-grid opacity-70" />
      <div
        aria-hidden
        className="absolute -right-32 top-1/3 h-[480px] w-[480px] rounded-full opacity-20 blur-3xl animate-float-slow"
        style={{ background: "radial-gradient(closest-side, var(--primary), transparent)" }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs animate-fade-in">
            <span className="inline-flex h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
            <span className="text-muted-foreground">status:</span>
            <span className="text-primary">available_for_hire</span>
          </div>

          <p className="mb-4 font-mono text-sm text-muted-foreground animate-fade-up">
            <span className="cm">// hello, world. my name is</span>
          </p>

          <h1 className="font-mono text-[clamp(2.5rem,9vw,6rem)] font-bold leading-[1] tracking-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Elisha</span>{" "}
            <span className="text-primary">Gerson</span>
            <span className="text-muted-foreground">.</span>
          </h1>

          <p className="mt-6 font-mono text-xl text-muted-foreground md:text-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="kw">const</span> <span className="prop">role</span> <span className="pun">=</span>{" "}
            <span className="str">"</span>
            <span className="str">{text}</span>
            <span
              className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-primary animate-blink"
              aria-hidden
            />
            <span className="str">"</span>
            <span className="pun">;</span>
          </p>
          <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-muted-foreground animate-fade-up" style={{ animationDelay: "0.3s", fontFamily: "var(--font-sans)" }}>
            I build fast, reliable web products with a focus on developer
            experience and design polish. Currently i am developing a finconect
            SDK which helps developers to integrate easily with fintech api's during
            development also contributing to open source on the side.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }}
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <span className="cm" style={{ color: "color-mix(in oklch, var(--primary-foreground) 70%, transparent)" }}>$</span>
              ./view-projects
              <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm transition-colors hover:border-primary hover:text-primary"
            >
              <Mail size={14} /> contact_me()
            </a>
            <div className="ml-2 flex items-center gap-1">
              {[
                { Icon: FaGithub, label: "GitHub" },
                { Icon:  FaLinkedin , label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
         {/* geenral Terminal preview */}
        <div className="lg:col-span-5 lg:pt-12 space-y-5">
          {/* //portait image */}
          {/* <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div
              aria-hidden
              className="absolute -inset-2 rounded-xl opacity-50 blur-xl"
              style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
            />
            <div className="relative overflow-hidden rounded-xl border border-border bg-surface">
              <img
                src={devPortrait}
                alt="Portrait of Ada Okafor, software engineer"
                width={768}
                height={896}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-border bg-surface-2/90 px-3 py-2 font-mono text-[11px] backdrop-blur">
                <span className="text-muted-foreground">~/portrait.jpg</span>
                <span className="flex items-center gap-1.5 text-primary">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
                  online
                </span>
              </div>
            </div>
          </div> */}
              {/* // Terminal preview */}
          <div className="terminal-window animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="terminal-header">
              <span className="terminal-dot" style={{ backgroundColor: "oklch(0.65 0.22 25)" }} />
              <span className="terminal-dot" style={{ backgroundColor: "oklch(0.78 0.16 80)" }} />
              <span className="terminal-dot" style={{ backgroundColor: "oklch(0.78 0.16 155)" }} />
              <span className="ml-2 font-mono text-xs text-muted-foreground">~/elisha — zsh</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
              <code>
                <span className="cm">$</span> <span className="fn">whoami</span>{"\n"}
                <span className="prop">elisha.dev</span>{"\n\n"}
                <span className="cm">$</span> <span className="fn">cat</span> profile.json{"\n"}
                <span className="pun">{"{"}</span>{"\n"}
                {"  "}<span className="prop">"name"</span><span className="pun">:</span> <span className="str">"Elisha Gerson"</span><span className="pun">,</span>{"\n"}
                {"  "}<span className="prop">"role"</span><span className="pun">:</span> <span className="str">"Full-Stack Developer"</span><span className="pun">,</span>{"\n"}
                {"  "}<span className="prop">"location"</span><span className="pun">:</span> <span className="str">"Mbeya, TZ"</span><span className="pun">,</span>{"\n"}
                {"  "}<span className="prop">"experience"</span><span className="pun">:</span> <span className="num">3</span><span className="pun">,</span>{"\n"}
                {"  "}<span className="prop">"languages"</span><span className="pun">:</span> <span className="pun">[</span>{"\n"}
                {"    "}<span className="str">"TypeScript"</span><span className="pun">,</span> <span className="str">"Python"</span><span className="pun">,</span> <span className="str">"Go"</span><span className="pun">,</span> <span className="str">"C"</span>{"\n"}
                {"  "}<span className="pun">],</span>{"\n"}
                {"  "}<span className="prop">"open_to_work"</span><span className="pun">:</span> <span className="kw">true</span>{"\n"}
                <span className="pun">{"}"}</span>{"\n\n"}
                <span className="cm">$</span> <span className="fn">echo</span> <span className="str">"let's build something"</span>{"\n"}
                <span className="prop">let's build something</span>{"\n\n"}
                <span className="cm">$</span>{" "}
                <span className="inline-block h-[1em] w-[8px] translate-y-[0.15em] bg-primary animate-blink" aria-hidden />
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
