"use client";

import { FileText } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { navLinks, profile } from "@/lib/content";
import { useActiveSection } from "@/lib/use-active-section";
import { ThemeToggle } from "./theme-toggle";

const hrefs = ["#top", ...navLinks.map((link) => link.href)];

/**
 * Large screens: a floating glass pill pinned near the top. Viewfinder brackets glide to whichever
 * section you're reading, as if the camera were refocusing. Phones use the tab bar.
 */
export function Navbar() {
  const active = useActiveSection(hrefs);
  const [scrolled, setScrolled] = useState(false);
  const trackRef = useRef<HTMLUListElement>(null);
  const frameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 16);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Moves the brackets onto the active link, straight from the DOM so they follow
  // width changes (fonts loading, resizes) without extra renders.
  useEffect(() => {
    const track = trackRef.current;
    const frame = frameRef.current;
    if (!track || !frame) return;

    const place = () => {
      const link = track.querySelector<HTMLElement>(`a[href="${active}"]`);
      if (!link) {
        frame.style.opacity = "0";
        return;
      }
      // Coming back from hidden: appear in place instead of sliding in from afar.
      const wasHidden = frame.style.opacity !== "1";
      if (wasHidden) frame.style.transitionProperty = "opacity";
      frame.style.translate = `${link.offsetLeft}px 0`;
      frame.style.width = `${link.offsetWidth}px`;
      if (wasHidden) {
        void frame.offsetWidth;
        frame.style.transitionProperty = "";
      }
      frame.style.opacity = "1";
    };

    place();
    const observer = new ResizeObserver(place);
    observer.observe(track);
    return () => observer.disconnect();
  }, [active]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 hidden px-8 pt-4 lg:block">
      <nav
        aria-label="Main"
        data-scrolled={scrolled}
        className="glass mx-auto flex h-16 max-w-[1120px] items-center justify-between gap-6 rounded-full pr-2.5 pl-5 transition-[box-shadow,background-color] duration-500"
      >
        <a href="#top" className="load group flex shrink-0 items-center gap-3">
          <span className="relative grid size-10 place-items-center">
            <span
              aria-hidden="true"
              className="brackets absolute inset-0 transition-[inset] duration-500 ease-lens [--arm:9px] group-hover:-inset-1"
            />
            <span className="font-mono text-[13px] font-medium text-ink">CC</span>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[1.02rem] font-semibold text-ink">{profile.name}</span>
            <span className="block text-[12.5px] text-muted">{profile.role}</span>
          </span>
        </a>

        <ul ref={trackRef} className="load relative flex items-center gap-1" style={{ "--i": 1 } as CSSProperties}>
          <span
            ref={frameRef}
            aria-hidden="true"
            className="brackets absolute top-0 bottom-0 left-0 opacity-0 transition-[translate,width,opacity] duration-500 ease-lens [--arm:8px]"
          />
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative block px-4 py-2.5 text-[0.92rem] font-medium transition-colors duration-300 ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="load flex shrink-0 items-center gap-3" style={{ "--i": 2 } as CSSProperties}>
          <ThemeToggle />
          <Link
            href="/resume"
            className="group inline-flex h-10 items-center gap-2 rounded-full bg-btn px-5 text-sm font-semibold text-btn-text transition-colors duration-300 hover:bg-btn-hover"
          >
            <FileText aria-hidden="true" className="size-4" strokeWidth={2.2} />
            Résumé
          </Link>
        </div>
      </nav>
    </header>
  );
}
