"use client";

import { ArrowUpRight, Expand } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { Certificate } from "@/lib/content";
import { useImageViewer } from "./image-viewer";

/** Certificates as framed prints: three across on desktop, a swipe row on phones. */
export function CertificateGrid({ items }: { items: Certificate[] }) {
  const { open, viewer } = useImageViewer();

  const view = (cert: Certificate) =>
    open({
      src: cert.image,
      alt: `${cert.title} certificate awarded to Charmae Costelo by ${cert.issuer}.`,
      title: cert.title,
      subtitle: `${cert.issuer} · ${cert.date}`,
      width: cert.width,
      height: cert.height,
      pdf: cert.pdf,
    });

  return (
    <>
      <ul className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:p-0">
        {items.map((cert, i) => (
          <li
            key={cert.title}
            data-reveal="up"
            style={{ "--d": i * 120 } as CSSProperties}
            className="w-[82vw] max-w-[360px] shrink-0 snap-start lg:w-auto lg:max-w-none"
          >
            <article className="group flex h-full flex-col rounded-[26px] border border-line bg-surface p-3 transition-[border-color,box-shadow,translate] duration-500 ease-lens hover:-translate-y-1 hover:border-peri/40 hover:shadow-[0_26px_50px_-30px_rgba(35,59,120,0.55)]">
              <button
                type="button"
                onClick={() => view(cert)}
                aria-label={`View ${cert.title} certificate`}
                className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-[18px] bg-rose/70 p-5"
              >
                <span
                  aria-hidden="true"
                  className="brackets absolute inset-3 opacity-0 transition-[inset,opacity] duration-500 ease-lens [--arm:14px] group-hover:inset-2 group-hover:opacity-100"
                />
                <span className="relative block w-full" style={{ aspectRatio: `${cert.width} / ${cert.height}` }}>
                  <Image
                    src={cert.image}
                    alt=""
                    fill
                    quality={90}
                    sizes="(min-width: 1024px) 340px, 80vw"
                    className="rounded-[4px] object-contain shadow-[0_14px_28px_-14px_rgba(35,59,120,0.55)] transition-transform duration-700 ease-lens group-hover:scale-[1.04]"
                  />
                </span>
                <span className="absolute right-3 bottom-3 grid size-8 place-items-center rounded-full bg-surface/90 text-ink opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 [@media(hover:none)]:opacity-100">
                  <Expand aria-hidden="true" className="size-4" />
                </span>
              </button>

              <div className="flex flex-1 flex-col px-2 pt-4 pb-2">
                <p className="font-mono text-xs tracking-wide text-muted">
                  {cert.type} · <time dateTime={cert.dateTime}>{cert.date}</time>
                </p>
                <h3 className="mt-2 text-[1.05rem] leading-snug font-semibold">{cert.title}</h3>
                <p className="mt-1 text-sm">{cert.issuer}</p>
                <div className="mt-auto flex gap-2 pt-5">
                  <button
                    type="button"
                    onClick={() => view(cert)}
                    className="inline-flex h-10 flex-1 items-center justify-center rounded-full bg-lavender px-4 text-sm font-semibold text-ink transition-colors hover:bg-rose"
                  >
                    View certificate
                  </button>
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${cert.title} PDF`}
                    className="inline-flex h-10 items-center gap-1 rounded-full border border-line px-4 text-sm font-semibold text-ink transition-colors hover:border-peri/50"
                  >
                    PDF
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
      {viewer}
    </>
  );
}
