import Image from "next/image";
import { profile } from "@/lib/content";

/**
 * The portrait seen through a camera viewfinder, a nod to CamoteLens: brackets lock
 * onto the photo, one scan line sweeps down it, then a label is pinned to the frame.
 */
export function ViewfinderPortrait({ className = "" }: { className?: string }) {
  return (
    <div className={`group relative ${className}`}>
      {/* Soft rose and lavender planes behind the photo. */}
      <div
        aria-hidden="true"
        className="absolute -inset-x-6 top-10 -bottom-6 rounded-[40px] bg-rose transition-[rotate] duration-700 ease-lens [rotate:-4deg] group-hover:[rotate:-2deg]"
      />
      <div aria-hidden="true" className="absolute -top-6 -right-8 size-28 rounded-[28px] bg-lavender" />

      <div className="relative">
        <span
          aria-hidden="true"
          className="brackets lock-on absolute z-10 [--arm:30px] [--bw:3px] [transition:inset_0.6s_var(--ease-lens)] group-hover:!-inset-2.5"
        />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-white shadow-[0_34px_70px_-34px_rgba(35,59,120,0.6)]">
          <Image
            src={profile.photo}
            alt="Portrait of Charmae Costelo in a black blazer."
            fill
            preload
            quality={90}
            sizes="(min-width: 1024px) 420px, 280px"
            className="object-cover object-[50%_30%]"
          />
          <span
            aria-hidden="true"
            className="scan-line absolute inset-x-0 h-16 -translate-y-1/2 bg-[linear-gradient(180deg,transparent,rgba(100,133,232,0.28)_50%,transparent)] after:absolute after:inset-x-0 after:top-1/2 after:h-[2px] after:bg-peri after:shadow-[0_0_14px_2px_rgba(100,133,232,0.75)]"
          />
        </div>

        {/* Positioned with flex, not translate: the entrance animation owns `translate`. */}
        <div className="absolute inset-x-0 -bottom-5 z-20 flex justify-center lg:-right-10 lg:left-auto lg:justify-end">
          <div className="tag-in flex items-center gap-2.5 rounded-full bg-royal py-2 pr-4 pl-2.5 whitespace-nowrap text-white shadow-[0_14px_30px_-14px_rgba(35,59,120,0.8)]">
            <span className="relative grid size-6 place-items-center">
              <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-peri/50 [animation-duration:2.4s]" />
              <span aria-hidden="true" className="size-2.5 rounded-full bg-[#9db2f7]" />
            </span>
            <span className="text-[13px] font-semibold">{profile.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
