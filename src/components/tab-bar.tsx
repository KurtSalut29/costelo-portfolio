"use client";

import { Award, Code2, FolderOpen, Mail, User, type LucideIcon } from "lucide-react";
import { useActiveSection } from "@/lib/use-active-section";
import { ThemeButton } from "./theme-toggle";

// Short labels so five tabs plus the theme button fit a 320px screen.
const tabs: { href: string; label: string; name: string; icon: LucideIcon }[] = [
  { href: "#about", label: "About", name: "About", icon: User },
  { href: "#projects", label: "Work", name: "Projects", icon: FolderOpen },
  { href: "#skills", label: "Skills", name: "Skills", icon: Code2 },
  { href: "#certificates", label: "Certs", name: "Certificates", icon: Award },
  { href: "#contact", label: "Contact", name: "Contact", icon: Mail },
];

const hrefs = ["#top", ...tabs.map((tab) => tab.href)];

/**
 * Phones and tablets: a floating bar at the bottom, in thumb reach. The active tab's
 * icon lifts, its label appears, and viewfinder brackets frame it.
 */
export function TabBar() {
  const active = useActiveSection(hrefs);

  return (
    <nav
      aria-label="Sections"
      className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] lg:hidden"
    >
      <div data-scrolled="true" className="glass mx-auto flex h-16 max-w-md items-center gap-1 rounded-full pr-2 pl-3">
        <ul className="flex flex-1 items-center">
          {tabs.map(({ href, label, name, icon: Icon }) => {
            const isActive = active === href;
            return (
              <li key={href} className="flex-1">
                <a
                  href={href}
                  aria-label={name}
                  aria-current={isActive ? "true" : undefined}
                  className="group relative mx-auto flex h-12 max-w-[60px] flex-col items-center justify-center"
                >
                  <span
                    aria-hidden="true"
                    className={`brackets absolute transition-[inset,opacity] duration-500 ease-lens [--arm:7px] ${
                      isActive ? "inset-0 opacity-100" : "-inset-1.5 opacity-0"
                    }`}
                  />
                  <Icon
                    aria-hidden="true"
                    className={`size-5 transition-[translate,color] duration-500 ease-lens ${
                      isActive ? "-translate-y-[7px] text-accent" : "text-muted"
                    }`}
                    strokeWidth={2}
                  />
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-[5px] text-[10.5px] font-semibold text-ink transition-[opacity,translate] duration-500 ease-lens ${
                      isActive ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                    }`}
                  >
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <span aria-hidden="true" className="h-8 w-px bg-line" />
        <div className="px-1.5">
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
}
