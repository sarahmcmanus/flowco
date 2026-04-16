import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flowing Coherence — Coaching with Sarah McManus",
  description:
    "From inner tangle to coherent flow. Somatic IFS coaching with Sarah McManus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="bg-[#1E2152] text-white/80 text-sm py-8 px-6 text-center">
          <p>© {new Date().getFullYear()} Sarah McManus · Flowing Coherence</p>
          <p className="mt-1">
            <a
              href="https://twitter.com/SarahAMcManus"
              className="underline hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              @SarahAMcManus
            </a>
            {" · "}
            <a
              href="https://roamresearch.com/#/app/HowToHuman/page/BSFuobcvJ"
              className="underline hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Public notes
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
