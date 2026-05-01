import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "01" },
  { id: "about", label: "02" },
  { id: "work", label: "03" },
  { id: "experience", label: "04" },
  { id: "contact", label: "05" },
];

export function SideNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + window.innerHeight / 3;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (y >= top && y < bottom) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col gap-5">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="group flex items-center gap-3 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <span
                className={`h-px transition-all duration-500 ${
                  active === s.id
                    ? "w-10 bg-foreground"
                    : "w-4 bg-muted-foreground group-hover:w-8 group-hover:bg-foreground"
                }`}
              />
              <span
                className={`transition-opacity ${
                  active === s.id ? "text-foreground opacity-100" : "opacity-60"
                }`}
              >
                {s.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}