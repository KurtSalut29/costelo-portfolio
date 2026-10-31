"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

const styles = {
  default:
    "border-line bg-surface text-ink hover:border-peri/50 hover:bg-lavender",
  onRoyal: "border-white/30 text-white hover:border-white/60 hover:bg-white/10",
};

export function CopyButton({
  value,
  label,
  variant = "default",
  className = "",
}: {
  value: string;
  label: string;
  variant?: keyof typeof styles;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
        } catch {
          window.location.href = `mailto:${value}`;
        }
      }}
      className={`inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      {copied ? (
        <Check aria-hidden="true" className="size-4" />
      ) : (
        <Copy aria-hidden="true" className="size-4" />
      )}
      <span aria-live="polite">{copied ? "Copied" : label}</span>
    </button>
  );
}
