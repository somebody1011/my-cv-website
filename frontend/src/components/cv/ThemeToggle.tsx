import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="group relative inline-flex h-9 w-16 items-center rounded-full border border-border bg-surface-2 px-1 transition-colors hover:border-primary"
    >
      <span
        className={`inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 ${
          isDark ? "translate-x-0" : "translate-x-7"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
      >
        {isDark ? <Moon size={14} /> : <Sun size={14} />}
      </span>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
