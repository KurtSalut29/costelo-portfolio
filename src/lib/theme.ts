import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

// The theme lives on <html data-theme>, set before paint by the script in layout.tsx.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

/** True while the dark theme is on. Re-renders when any control changes the theme. */
export function useIsDark() {
  return useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.theme === "dark",
    () => false,
  );
}

/**
 * Switches theme with a "rack focus": the old look blurs away while the new one
 * sharpens in. Falls back to a color crossfade, or an instant swap for reduced motion.
 */
export function toggleTheme() {
  const root = document.documentElement;
  const next: Theme = root.dataset.theme === "dark" ? "light" : "dark";
  const apply = () => {
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked; the theme still applies for this visit.
    }
  };

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    apply();
    return;
  }

  if (!document.startViewTransition) {
    root.classList.add("theme-fade");
    apply();
    window.setTimeout(() => root.classList.remove("theme-fade"), 500);
    return;
  }

  const transition = document.startViewTransition(apply);
  transition.ready
    .then(() => {
      const timing = { duration: 600, easing: "cubic-bezier(0.22, 1, 0.36, 1)" };
      root.animate(
        { opacity: [1, 0], filter: ["blur(0px)", "blur(10px)"] },
        { ...timing, pseudoElement: "::view-transition-old(root)" },
      );
      root.animate(
        { opacity: [0, 1], filter: ["blur(12px)", "blur(0px)"], scale: [1.015, 1] },
        { ...timing, pseudoElement: "::view-transition-new(root)" },
      );
    })
    .catch(() => {});
}
