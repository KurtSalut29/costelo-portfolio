import type { Metadata, Viewport } from "next";
import { DM_Mono, Onest, Sora } from "next/font/google";
import { RevealObserver } from "@/components/reveal-observer";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Charmae Costelo · Software Developer",
  description:
    "Portfolio of Charmae Costelo, a BS Computer Science student at Biliran Province State University who builds machine learning apps and websites.",
  authors: [{ name: "Charmae M. Costelo" }],
  openGraph: {
    title: "Charmae Costelo · Software Developer",
    description: "Projects, skills, and certificates of Charmae Costelo, aspiring software developer.",
    type: "website",
  },
};

export const viewport: Viewport = {
  // Lets the tab bar sit above the iPhone home indicator via env(safe-area-inset-bottom).
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffdf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1124" },
  ],
};

// Runs before first paint: use the saved theme, otherwise the system preference.
// Also marks JS as available so scroll-reveal elements may start hidden.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}document.documentElement.classList.add("js")})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${sora.variable} ${onest.variable} ${dmMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh">
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
