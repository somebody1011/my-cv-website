import {  Mail,  FileText } from "lucide-react";
import { FaGithub, FaLinkedin,FaTwitter } from "react-icons/fa";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeader } from "./About";

const socials = [
  { Icon: FaGithub, label: "github", value: "@ada-okafor" },
  { Icon: FaTwitter, label: "twitter", value: "@ada_codes" },
  { Icon: FaLinkedin, label: "linkedin", value: "/in/ada-okafor" },
  { Icon: FileText, label: "resume", value: "download.pdf" },
];

export function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden px-4 py-28 md:px-8 md:py-36">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-20 blur-3xl animate-float-slow"
        style={{ background: "radial-gradient(closest-side, var(--primary), transparent)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader index="05" title="contact" file="~/ada/contact.sh" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="reveal lg:col-span-7">
            <p className="mb-3 font-mono text-sm text-muted-foreground">
              <span className="cm">$</span> ./say-hello
              or just want to{" "}
              <span className="text-accent">chat shop?</span>
            </p>
            <p
              className="mt-6 max-w-xl text-base text-muted-foreground"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              I read every message. Best for full-time roles, contract work,
              open-source collabs, or thoughtful technical questions.
            </p>

            <a
              href="mailto:hello@ada.dev"
              className="group mt-8 inline-flex items-center gap-3 rounded-md border border-border bg-surface px-5 py-4 font-mono text-base transition-colors hover:border-primary"
            >
              <Mail size={18} className="text-primary" />
              <span className="text-foreground">hello</span>
              <span className="pun">@</span>
              <span className="text-foreground">ada.dev</span>
              <span className="ml-2 text-muted-foreground transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <div className="reveal lg:col-span-5">
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-dot" style={{ backgroundColor: "oklch(0.65 0.22 25)" }} />
                <span className="terminal-dot" style={{ backgroundColor: "oklch(0.78 0.16 80)" }} />
                <span className="terminal-dot" style={{ backgroundColor: "oklch(0.78 0.16 155)" }} />
                <span className="ml-2 font-mono text-xs text-muted-foreground">links.json</span>
              </div>
              <ul>
                {socials.map(({ Icon, label, value }) => (
                  <li key={label} className="border-b border-border last:border-b-0">
                    <a
                      href="#"
                      className="group flex items-center justify-between gap-4 px-5 py-4 font-mono text-sm transition-colors hover:bg-surface-2"
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={16} className="text-muted-foreground group-hover:text-primary" />
                        <span className="prop">"{label}"</span>
                        <span className="pun">:</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="str">"{value}"</span>
                        <span className="text-muted-foreground transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <footer className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
          <span>
            <span className="cm">// </span>built with care · TanStack + Tailwind ·{" "}
            <span className="text-primary">v2.6.0</span>
          </span>
          <span>© 2026 ada.okafor — all rights reserved</span>
        </footer>
      </div>
    </section>
  );
}