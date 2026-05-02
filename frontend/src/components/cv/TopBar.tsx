import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { id: "home", label: "~/home" },
  { id: "about", label: "about.md" },
  { id: "stack", label: "stack.json" },
  { id: "work", label: "projects/" },
  { id: "experience", label: "career.log" },
  { id: "contact", label: "contact()" },
];


export function TopBar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + window.innerHeight / 3;
      for (const s of links) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        if (y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const onNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <a href="#home" onClick={(e) => onNav(e, "home")} className="flex items-center gap-2 font-mono text-sm">
          <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary font-bold text-primary-foreground">
            $
          </span>
          <span className="hidden sm:inline">
            <span className="text-muted-foreground">~/</span>
            <span className="text-foreground">elisha</span>
            <span className="cm">.dev</span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => onNav(e, l.id)}
              className={`group relative rounded-sm px-3 py-1.5 font-mono text-xs transition-colors ${
                active === l.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="cm mr-1">{active === l.id ? "▸" : " "}</span>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
            aria-label="Toggle menu"
          >
            <span className="font-mono text-xs">{open ? "✕" : "≡"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-surface md:hidden" aria-label="Mobile">
          <div className="flex flex-col py-2">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => onNav(e, l.id)}
                className={`px-5 py-3 font-mono text-sm ${
                  active === l.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <span className="cm mr-2">›</span>
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
