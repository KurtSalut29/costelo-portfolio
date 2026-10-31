import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Code2,
  FileText,
  GraduationCap,
  HeartHandshake,
  Mail,
  MonitorSmartphone,
  Phone,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { CertificateGrid } from "@/components/certificate-grid";
import { CopyButton } from "@/components/copy-button";
import { Navbar } from "@/components/navbar";
import { ScreenGallery } from "@/components/screen-gallery";
import { TabBar } from "@/components/tab-bar";
import { ViewfinderPortrait } from "@/components/viewfinder-portrait";
import { camoteLens, certificates, profile, skillGroups, sliceAndSip } from "@/lib/content";

const emailParts = profile.email.split("@");

const container = "mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12";

const delay = (i: number) => ({ "--i": i }) as CSSProperties;
const stagger = (ms: number) => ({ "--d": ms }) as CSSProperties;

/** Small mono label; its viewfinder brackets close in when the heading is revealed. */
function Eyebrow({ children, onRoyal = false }: { children: ReactNode; onRoyal?: boolean }) {
  return (
    <p
      className={`relative ml-2.5 inline-block font-mono text-xs font-medium tracking-[0.16em] uppercase ${
        onRoyal ? "text-[#c9d5ff]" : "text-accent"
      }`}
    >
      <span
        aria-hidden="true"
        className={`brackets eyebrow-frame absolute [--arm:6px] [--bw:1.5px] ${onRoyal ? "[--bc:#9db2f7]" : ""}`}
      />
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  id: string;
}) {
  return (
    <div data-reveal="up" className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="mt-5 text-[1.75rem] leading-[1.15] font-semibold tracking-[-0.02em] sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base leading-relaxed sm:text-lg">{intro}</p>}
    </div>
  );
}

/** Rose highlighter stroke behind a phrase. */
function Mark({ children }: { children: ReactNode }) {
  return (
    <span className="bg-[linear-gradient(transparent_54%,var(--c-rose)_54%,var(--c-rose)_92%,transparent_92%)] [box-decoration-break:clone] text-ink">
      {children}
    </span>
  );
}

function Tags({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Built with">
      {items.map((tag) => (
        <li key={tag} className="rounded-full bg-lavender px-3 py-1 text-[13px] font-medium text-ink">
          {tag}
        </li>
      ))}
    </ul>
  );
}

const values: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Code2, title: "Solve problems with code", text: "Breaking problems down and working them out in code." },
  { icon: HeartHandshake, title: "Build for people", text: "Practical, user-friendly apps and websites." },
  { icon: GraduationCap, title: "Learn every day", text: "Picking up new technologies and sharpening my skills." },
];

const groupIcons: Record<(typeof skillGroups)[number]["key"], LucideIcon> = {
  ml: BrainCircuit,
  web: MonitorSmartphone,
  work: Users,
};

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] rounded-md bg-royal px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        {/* ───────────── Hero ───────────── */}
        <section
          id="top"
          aria-label="Introduction"
          className={`${container} flex flex-col items-center gap-16 pt-14 pb-20 sm:pt-20 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:pt-36 lg:pb-28`}
        >
          <div className="order-last text-center lg:order-first lg:text-left">
            <p className="load font-mono text-xs tracking-[0.12em] text-muted uppercase sm:text-[13px]" style={delay(0)}>
              {profile.degree}
              <span className="hidden sm:inline"> · </span>
              <span className="block sm:inline">{profile.school}</span>
            </p>
            <h1
              className="load mt-5 text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.035em] sm:text-6xl lg:text-[4.4rem]"
              style={delay(1)}
            >
              {profile.name}
            </h1>
            <p
              className="load mx-auto mt-6 max-w-xl text-lg leading-relaxed sm:text-xl lg:mx-0"
              style={delay(2)}
            >
              I like solving problems through code and turning ideas into <Mark>working apps and websites</Mark>.
            </p>

            <div
              className="load mx-auto mt-9 grid max-w-sm grid-cols-2 gap-3 sm:flex sm:max-w-none sm:justify-center lg:justify-start"
              style={delay(3)}
            >
              <a
                href="#projects"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-btn px-4 font-semibold whitespace-nowrap text-btn-text transition-colors duration-300 hover:bg-btn-hover sm:px-6"
              >
                See my work
                <ArrowRight
                  aria-hidden="true"
                  className="hidden size-4 transition-transform duration-300 ease-lens group-hover:translate-x-1 min-[400px]:block"
                />
              </a>
              <Link
                href="/resume"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-surface px-4 font-semibold whitespace-nowrap text-ink sm:px-6 transition-colors duration-300 hover:border-peri/50 hover:bg-lavender"
              >
                <FileText aria-hidden="true" className="size-4" />
                Résumé
              </Link>
            </div>

            <ul
              className="load mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm lg:justify-start"
              style={delay(4)}
            >
              <li>
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-ink">
                  <Mail aria-hidden="true" className="size-4 text-peri" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-ink">
                  <Phone aria-hidden="true" className="size-4 text-peri" />
                  {profile.phone}
                </a>
              </li>
            </ul>
          </div>

          <ViewfinderPortrait className="load w-[min(64vw,270px)] sm:w-[300px] lg:ml-auto lg:w-full lg:max-w-[400px]" />
        </section>

        {/* ───────────── About ───────────── */}
        <section id="about" aria-labelledby="about-title" className={`${container} py-20 lg:py-28`}>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading id="about-title" eyebrow="About me" title="Turning ideas into working apps" />
              <p data-reveal="up" className="mt-7 text-[1.0625rem] leading-[1.75] sm:text-lg lg:text-xl lg:leading-[1.7]">
                I want to become a Software Developer because I like <Mark>solving problems through code</Mark> and
                turning ideas into working apps and websites. I aim to build{" "}
                <Mark>practical, user-friendly solutions</Mark> while learning new technologies and improving my
                skills every day.
              </p>

              <ul className="mt-10 grid gap-3 sm:grid-cols-3">
                {values.map(({ icon: Icon, title, text }, i) => (
                  <li
                    key={title}
                    data-reveal="up"
                    style={stagger(i * 110)}
                    className="flex gap-4 rounded-[22px] border border-line bg-surface p-4 sm:flex-col sm:gap-3 sm:p-5"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-lavender text-accent">
                      <Icon aria-hidden="true" className="size-5" strokeWidth={2} />
                    </span>
                    <span>
                      <span className="block font-display text-[0.98rem] font-semibold text-ink">{title}</span>
                      <span className="mt-1 block text-sm leading-relaxed">{text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <aside data-reveal="up" style={stagger(150)} aria-label="Profile" className="lg:col-span-5 lg:pt-4">
              <div className="rounded-[30px] bg-rose p-2">
                <div className="flex items-center justify-between px-4 pt-3 pb-4">
                  <p className="font-display font-semibold text-ink">Profile</p>
                  <Sparkles aria-hidden="true" className="size-4 text-accent" />
                </div>
                <dl className="divide-y divide-line rounded-[24px] bg-surface px-5">
                  {[
                    ["Name", profile.fullName],
                    ["Preferred role", profile.role],
                    ["Course", profile.degree],
                    ["School", profile.school],
                  ].map(([term, value]) => (
                    <div key={term} className="grid gap-1 py-3.5">
                      <dt className="font-mono text-[11px] tracking-wide text-muted uppercase">{term}</dt>
                      <dd className="font-medium text-ink">{value}</dd>
                    </div>
                  ))}
                  <div className="grid gap-1 py-3.5">
                    <dt className="font-mono text-[11px] tracking-wide text-muted uppercase">Email</dt>
                    <dd>
                      <a
                        href={`mailto:${profile.email}`}
                        className="font-medium text-accent [overflow-wrap:anywhere] underline-offset-4 hover:underline"
                      >
                        {emailParts[0]}@<wbr />{emailParts[1]}
                      </a>
                    </dd>
                  </div>
                  <div className="grid gap-1 py-3.5">
                    <dt className="font-mono text-[11px] tracking-wide text-muted uppercase">Phone</dt>
                    <dd>
                      <a href={profile.phoneHref} className="font-medium text-accent underline-offset-4 hover:underline">
                        {profile.phone}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </section>

        {/* ───────────── Projects ───────────── */}
        <section id="projects" aria-labelledby="projects-title" className="bg-lavender py-20 lg:py-28">
          <div className={container}>
            <SectionHeading
              id="projects-title"
              eyebrow="Projects"
              title="Things I've built"
              intro="A machine learning app that recognizes sweet potato varieties, and a website for a pizza house. Tap any screen to see it full size."
            />

            <article
              id={camoteLens.id}
              aria-labelledby="camotelens-title"
              className="mt-12 grid scroll-mt-6 grid-cols-1 gap-10 overflow-hidden rounded-[32px] bg-surface p-5 sm:p-8 lg:mt-16 lg:scroll-mt-24 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-14 lg:overflow-visible lg:rounded-[40px] lg:p-12 dark:ring-1 dark:ring-line"
            >
              <div data-reveal="up">
                <p className="font-mono text-xs tracking-[0.12em] text-muted uppercase">{camoteLens.kind}</p>
                <h3 id="camotelens-title" className="mt-3 text-3xl font-semibold tracking-[-0.02em] lg:text-4xl">
                  {camoteLens.name}
                </h3>
                <p className="mt-2 font-medium text-accent">{camoteLens.subtitle}</p>
                <p className="mt-4 leading-relaxed">{camoteLens.summary}</p>

                <ul className="mt-6 flex flex-col gap-2 text-[0.95rem]" aria-label="Also includes">
                  {camoteLens.extras.map((extra) => (
                    <li key={extra} className="flex items-center gap-2.5">
                      <Check aria-hidden="true" className="size-4 shrink-0 text-peri" strokeWidth={2.6} />
                      {extra}
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <Tags items={camoteLens.tags} />
                </div>
              </div>

              <div data-reveal="up" style={stagger(120)} className="order-last lg:order-none">
                <h4 className="font-mono text-xs font-medium tracking-[0.12em] text-muted uppercase">How it works</h4>
                <ol className="mt-5 space-y-3">
                  {camoteLens.steps.map((step, i) => (
                    <li key={step.title} className="flex gap-4 rounded-[20px] bg-lavender/55 p-4 dark:bg-lavender">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-rose font-mono text-sm font-medium text-ink">
                        {i + 1}
                      </span>
                      <span>
                        <span className="block font-semibold text-ink">{step.title}</span>
                        <span className="mt-0.5 block text-[0.95rem] leading-relaxed">{step.text}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="min-w-0 lg:col-span-2">
                <ScreenGallery screens={camoteLens.screens} variant="phone" project={camoteLens.name} />
              </div>
            </article>

            <article
              id={sliceAndSip.id}
              aria-labelledby="sliceandsip-title"
              className="mt-6 grid scroll-mt-6 grid-cols-1 gap-10 overflow-hidden rounded-[32px] bg-surface p-5 sm:p-8 lg:mt-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:gap-12 lg:overflow-visible lg:rounded-[40px] lg:p-12 lg:scroll-mt-24 dark:ring-1 dark:ring-line"
            >
              <div data-reveal="up" className="lg:order-last">
                <p className="font-mono text-xs tracking-[0.12em] text-muted uppercase">{sliceAndSip.kind}</p>
                <h3 id="sliceandsip-title" className="mt-3 text-3xl font-semibold tracking-[-0.02em] lg:text-4xl">
                  {sliceAndSip.name}
                </h3>
                <p className="mt-2 font-medium text-accent">{sliceAndSip.subtitle}</p>
                <p className="mt-4 leading-relaxed">{sliceAndSip.summary}</p>

                <h4 className="mt-8 font-mono text-xs font-medium tracking-[0.12em] text-muted uppercase">Features</h4>
                <ul className="mt-4 space-y-3">
                  {sliceAndSip.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-peri" strokeWidth={2.6} />
                      <span className="text-ink">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Tags items={sliceAndSip.tags} />
                </div>
              </div>

              <ScreenGallery screens={sliceAndSip.screens} variant="tablet" project={sliceAndSip.name} />
            </article>
          </div>
        </section>

        {/* ───────────── Skills ───────────── */}
        <section id="skills" aria-labelledby="skills-title" className={`${container} py-20 lg:py-28`}>
          <SectionHeading
            id="skills-title"
            eyebrow="Skills"
            title="What I work with"
            intro="Nine skills, grouped by the kind of work they're for."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {skillGroups.map((group, i) => {
              const Icon = groupIcons[group.key];
              return (
                <div key={group.key} data-reveal="up" style={stagger(i * 120)}>
                  <article className="group relative flex h-full flex-col rounded-[28px] border border-line bg-surface p-6 transition-[border-color,box-shadow,translate] duration-500 ease-lens hover:-translate-y-1 hover:border-peri/40 hover:shadow-[0_26px_50px_-30px_rgba(35,59,120,0.5)] lg:p-7">
                    <span
                      aria-hidden="true"
                      className="brackets absolute inset-4 opacity-0 transition-[inset,opacity] duration-500 ease-lens [--arm:12px] group-hover:inset-2.5 group-hover:opacity-100"
                    />
                    <div className="flex items-center justify-between">
                      <span className="grid size-11 place-items-center rounded-2xl bg-rose text-ink">
                        <Icon aria-hidden="true" className="size-5" strokeWidth={2} />
                      </span>
                      <span className="font-mono text-xs text-muted">
                        {group.skills.length} skills
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{group.title}</h3>
                    <ul className="mt-4 divide-y divide-line">
                      {group.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-3 py-3 font-medium text-ink">
                          <span aria-hidden="true" className="size-1.5 shrink-0 rounded-[2px] bg-peri" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-5">
                      {group.usedIn ? (
                        <a
                          href={group.usedIn.href}
                          className="group/link inline-flex items-center gap-1.5 rounded-full bg-lavender px-3.5 py-1.5 text-[13px] font-semibold text-ink transition-colors hover:bg-rose"
                        >
                          Used in {group.usedIn.label}
                          <ArrowRight
                            aria-hidden="true"
                            className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5"
                          />
                        </a>
                      ) : (
                        <p className="text-[13px] font-medium text-muted">Part of every project</p>
                      )}
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </section>

        {/* ───────────── Certificates ───────────── */}
        <section id="certificates" aria-labelledby="certificates-title" className="bg-lavender py-20 lg:py-28">
          <div className={container}>
            <SectionHeading
              id="certificates-title"
              eyebrow="Certificates"
              title="Courses and training"
              intro="Tap a certificate to see it full size, or open the original PDF."
            />
            <div className="mt-12">
              <CertificateGrid items={certificates} />
            </div>
          </div>
        </section>

        {/* ───────────── Contact ───────────── */}
        <section id="contact" aria-labelledby="contact-title" className={`${container} py-20 lg:py-28`}>
          <div
            data-reveal="up"
            className="relative overflow-hidden rounded-[32px] bg-royal px-6 py-14 text-center sm:px-12 lg:rounded-[40px] lg:py-20"
          >
            <span
              aria-hidden="true"
              className="brackets absolute inset-4 [--arm:26px] [--bc:rgba(157,178,247,0.55)] sm:inset-6"
            />
            <span
              aria-hidden="true"
              className="absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-[#6485e8] opacity-35 blur-3xl"
            />

            <div className="relative">
              <Eyebrow onRoyal>Contact</Eyebrow>
              <h2
                id="contact-title"
                className="mt-5 text-[1.75rem] leading-[1.15] font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl"
              >
                Have a role or project in mind?
              </h2>
              <p className="mx-auto mt-4 max-w-lg leading-relaxed text-white/75 sm:text-lg">
                I&apos;m looking for opportunities to grow as a software developer. Send me an email or give me a call.
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="mt-9 inline-block font-display text-[clamp(1.2rem,5.4vw,2.5rem)] font-semibold text-white [overflow-wrap:anywhere] decoration-[#9db2f7] decoration-2 underline-offset-8 hover:underline"
              >
                {emailParts[0]}@<wbr />
                {emailParts[1]}
              </a>

              <div className="mx-auto mt-9 grid max-w-sm gap-3 min-[400px]:grid-cols-2 sm:flex sm:max-w-none sm:justify-center">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#f6dde5] px-5 text-sm font-semibold text-[#233b78] transition-colors hover:bg-white"
                >
                  <Mail aria-hidden="true" className="size-4" />
                  Send an email
                </a>
                <CopyButton value={profile.email} label="Copy email" variant="onRoyal" />
                <a
                  href={profile.phoneHref}
                  className="inline-flex h-11 min-[400px]:col-span-2 items-center justify-center gap-2 rounded-full border border-white/30 px-5 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
                >
                  <Phone aria-hidden="true" className="size-4" />
                  Call {profile.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={`${container} pb-[calc(env(safe-area-inset-bottom)+6.5rem)] lg:pb-10`}>
        <div className="flex flex-col items-center gap-5 border-t border-line pt-8 text-sm sm:flex-row sm:justify-between">
          <p className="flex items-center gap-2.5">
            <span className="relative grid size-7 place-items-center">
              <span aria-hidden="true" className="brackets absolute inset-0 [--arm:6px] [--bw:1.5px]" />
              <span className="font-mono text-[10px] font-medium text-ink">CC</span>
            </span>
            © 2026 {profile.fullName}
          </p>
          <div className="flex items-center gap-5">
            <Link href="/resume" className="inline-flex items-center gap-1 font-medium text-ink hover:text-accent">
              Résumé
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </Link>
            <a href="#top" className="group inline-flex items-center gap-2 font-medium text-ink hover:text-accent">
              Back to top
              <span className="grid size-8 place-items-center rounded-full border border-line transition-[translate,border-color] duration-300 ease-lens group-hover:-translate-y-0.5 group-hover:border-peri/50">
                <ArrowUp aria-hidden="true" className="size-4" />
              </span>
            </a>
          </div>
        </div>
      </footer>

      <TabBar />
    </>
  );
}
