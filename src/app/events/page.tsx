import type { Metadata } from "next";
import Link from "next/link";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Events — Flowing Coherence",
  description: "Workshops and events with Sarah McManus on inner alignment and agency.",
};

export default function EventsPage() {
  return (
    <>
      {/* ── UPCOMING ─────────────────────────────────────────── */}
      <section className="bg-[#FAF7F2] px-6 pt-16 pb-0">
        <div className="max-w-3xl mx-auto pb-16">
          <h1 className="font-heading text-4xl sm:text-5xl text-[#2C2416] mb-2">
            Events
          </h1>
          <p className="text-[#6B5744] mb-10">
            Workshops and events on inner alignment and agency — solo and with
            the{" "}
            <a
              href="https://gobeyondgoals.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#C4830A] transition-colors"
            >
              Beyond Goals
            </a>
            {" "}team.
          </p>

          <h2 className="font-heading text-2xl text-[#2C2416] mb-6">
            Upcoming
          </h2>

          {/* Featured event */}
          <div
            className="rounded-2xl p-6 mb-4"
            style={{
              background: "linear-gradient(135deg, #FDF0E4 0%, #F0EDF8 100%)",
              border: "1px solid #C4830A33",
            }}
          >
            <p className="text-xs font-medium text-[#C4830A] uppercase tracking-wider mb-1">
              Beyond Goals · San Francisco
            </p>
            <h3 className="font-heading text-xl text-[#2C2416] mb-1">
              Core Gameplay Loop for Inner Alignment
            </h3>
            <p className="text-sm text-[#6B5744] mb-3">
              Wednesday, April 22 · 6–9pm
            </p>
            <p className="text-sm text-[#6B5744]">
              An in-person workshop on the practical loop we use to move from
              inner tangle to coherent flow — untangling, turning towards,
              sensing, and noticing shifts.
            </p>
          </div>

          <p className="text-sm text-[#6B5744] italic">
            More events to be announced. Follow{" "}
            <a
              href="https://twitter.com/SarahAMcManus"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#C4830A] transition-colors"
            >
              @SarahAMcManus
            </a>
            {" "}or sign up for the newsletter on the{" "}
            <Link href="/#newsletter" className="underline hover:text-[#C4830A] transition-colors">
              home page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── BEYOND GOALS ─────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(160deg, #3D2468 0%, #7A2E1A 50%, #C4561E 100%)",
        }}
      >
        <WaveDivider fill="#FAF7F2" flip />
        <div className="max-w-3xl mx-auto px-6 pt-6 pb-16">
          <h2 className="font-heading text-3xl text-[#FAF0DC] mb-2">
            Beyond Goals
          </h2>
          <p className="text-[#F5C98A] italic font-heading mb-6">
            Workshops on inner alignment and agency.
          </p>
          <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-2xl">
            I co-facilitate the Beyond Goals workshop series alongside Benjamin
            and Teresa — a long-running program focused on helping people move
            from internal conflict to coherent action. We run at least one
            series each January, with other events throughout the year.
          </p>
          <a
            href="https://gobeyondgoals.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white/15 hover:bg-white/25 text-white font-medium px-6 py-3 rounded-full transition-colors"
          >
            gobeyondgoals.com →
          </a>
        </div>
        <WaveDivider fill="#FAF7F2" />
      </section>

      {/* ── WORK TOGETHER ────────────────────────────────────── */}
      <section className="bg-[#FAF7F2] px-6 pt-12 pb-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#6B5744] mb-6">
            Interested in having me facilitate something for your team or
            community?{" "}
            <Link href="/contact" className="underline hover:text-[#C4830A] transition-colors">
              Get in touch.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
