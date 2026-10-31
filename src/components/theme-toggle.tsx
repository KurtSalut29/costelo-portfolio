"use client";

import { Moon, Sun } from "lucide-react";
import { toggleTheme, useIsDark } from "@/lib/theme";

/**
 * Desktop: a two-position track with a sun and a moon. A rose thumb (periwinkle at
 * night) slides under the active one. Knob position comes from CSS, so the server
 * render never needs to know the theme.
 */
export function ThemeToggle() {
  const isDark = useIsDark();

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className="group relative grid h-10 w-[4.75rem] shrink-0 grid-cols-2 items-center rounded-full border border-line bg-surface p-1 transition-colors duration-300 hover:border-peri/50"
    >
      <span
        aria-hidden="true"
        className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-rose shadow-[0_2px_8px_-3px_rgba(35,59,120,0.45)] transition-[translate,background-color] duration-500 ease-lens dark:translate-x-full dark:bg-peri"
      />
      <Sun
        aria-hidden="true"
        className="relative mx-auto size-4 text-ink transition-[color,rotate] duration-500 group-hover:rotate-45 dark:text-muted dark:group-hover:rotate-0"
        strokeWidth={2.2}
      />
      <Moon
        aria-hidden="true"
        className="relative mx-auto size-4 text-muted transition-[color,rotate] duration-500 dark:text-[#0c1124] dark:group-hover:-rotate-12"
        strokeWidth={2.2}
      />
    </button>
  );
}

/** Phones: a single round button in the tab bar; the icon turns as the theme flips. */
export function ThemeButton() {
  const isDark = useIsDark();

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      onClick={toggleTheme}
      className="relative grid size-10 place-items-center rounded-full bg-rose text-ink transition-colors duration-300 dark:bg-peri dark:text-[#0c1124]"
    >
      <Sun
        aria-hidden="true"
        className="absolute size-[18px] transition-[opacity,rotate,scale] duration-500 ease-lens dark:scale-50 dark:rotate-90 dark:opacity-0"
        strokeWidth={2.2}
      />
      <Moon
        aria-hidden="true"
        className="absolute size-[18px] scale-50 -rotate-90 opacity-0 transition-[opacity,rotate,scale] duration-500 ease-lens dark:scale-100 dark:rotate-0 dark:opacity-100"
        strokeWidth={2.2}
      />
    </button>
  );
}
