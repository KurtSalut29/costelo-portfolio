"use client";

import { Expand } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { Screen } from "@/lib/content";
import { useImageViewer } from "./image-viewer";

type Variant = "phone" | "tablet";

// Desktop: a staggered row. Phones: a swipe row where the next device peeks in.
const layout: Record<Variant, { row: string; item: string; offsets: string[]; sizes: string }> = {
  phone: {
    row: "lg:grid lg:grid-cols-4 lg:gap-8 lg:items-start lg:px-6",
    item: "w-[52vw] max-w-[220px] lg:w-auto lg:max-w-none",
    offsets: ["lg:mt-14", "lg:mt-0", "lg:mt-8", "lg:mt-20"],
    sizes: "(min-width: 1024px) 240px, 52vw",
  },
  tablet: {
    row: "lg:grid lg:grid-cols-[1.12fr_1fr] lg:gap-5 lg:items-start",
    item: "w-[74vw] max-w-[380px] lg:w-auto lg:max-w-none",
    offsets: ["lg:mt-0", "lg:mt-14"],
    sizes: "(min-width: 1024px) 420px, 74vw",
  },
};

/** Project screenshots inside device frames; each opens full size in the viewer. */
export function ScreenGallery({
  screens,
  variant,
  project,
}: {
  screens: Screen[];
  variant: Variant;
  project: string;
}) {
  const { open, viewer } = useImageViewer();
  const l = layout[variant];
  const isPhone = variant === "phone";

  return (
    <>
      <ul
        className={`no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pt-4 pb-2 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:overflow-visible lg:p-0 ${l.row}`}
      >
        {screens.map((screen, i) => (
          <li
            key={screen.src}
            data-reveal="up"
            style={{ "--d": i * 110 } as CSSProperties}
            className={`shrink-0 snap-start ${l.item} ${l.offsets[i]}`}
          >
            <button
              type="button"
              onClick={() =>
                open({ ...screen, title: `${project}: ${screen.caption}`, subtitle: screen.alt })
              }
              aria-label={`View ${screen.caption} screenshot full size`}
              className="group relative block w-full text-left"
            >
              <span
                aria-hidden="true"
                className="brackets absolute -inset-1 opacity-0 transition-[inset,opacity] duration-500 ease-lens [--arm:14px] group-hover:-inset-3 group-hover:opacity-100 group-focus-visible:opacity-100"
              />
              <span
                className={`relative block bg-bezel shadow-[0_28px_50px_-28px_rgba(20,26,51,0.75)] transition-[translate] duration-500 ease-lens group-hover:-translate-y-1.5 ${
                  isPhone ? "rounded-[26px] p-[5px]" : "rounded-[20px] p-2"
                }`}
              >
                <span
                  className={`relative block overflow-hidden bg-white ${
                    isPhone ? "aspect-[9/19.5] rounded-[21px]" : "rounded-[13px]"
                  }`}
                  style={isPhone ? undefined : { aspectRatio: `${screen.width} / ${screen.height}` }}
                >
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    quality={90}
                    sizes={l.sizes}
                    className="object-cover object-top"
                  />
                </span>
                <span className="absolute right-3 bottom-3 grid size-8 place-items-center rounded-full bg-surface/90 text-ink opacity-0 shadow-md backdrop-blur transition-opacity duration-300 group-hover:opacity-100 [@media(hover:none)]:opacity-100">
                  <Expand aria-hidden="true" className="size-4" />
                </span>
              </span>
              <span className="mt-3 block text-center font-mono text-xs tracking-wide text-muted">
                {screen.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>
      {viewer}
    </>
  );
}
