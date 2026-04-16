import Image from "next/image";
import Link from "next/link";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-[#FAF7F2] pt-16 pb-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-10 sm:gap-16">

          {/* Logo + text */}
          <div className="flex-1">
            {/* Logo floated left; title text wraps around its shape */}
            <div style={{ display: "flow-root" }}>
              <Image
                src="/images/logo2.png"
                alt="Flowing Coherence logo"
                width={183}
                height={160}
                priority
                style={{
                  float: "left",
                  width: "183px",
                  height: "160px",
                  shapeOutside: "url(/images/logo2.png)",
                  shapeImageThreshold: "0.05",
                  shapeMargin: "6px",
                }}
              />
              <h1
                className="font-heading text-[3.25rem] sm:text-[4rem] text-[#2C2416] leading-[0.96]"
                style={{ paddingTop: "16px" }}
              >
                <span style={{ paddingLeft: "5px" }}>Flowing</span><br /><span style={{ paddingLeft: "10px" }}>Coherence</span>
              </h1>
            </div>
            {/* Tagline left edge flush with logo artwork (logo2.png has no transparent left margin) */}
            <div style={{ marginTop: "1.25rem" }}>
              <p className="font-heading italic text-xl text-[#8B4A1A] mb-2">
                From inner tangle to coherent flow.
              </p>
              <p className="text-base text-[#6B5744] mb-8 max-w-md">
                Somatic IFS coaching with Sarah McManus — for when you know
                what you want, but can&apos;t quite get there.
              </p>
              <Link
                href="/coaching#book"
                className="inline-block bg-[#C4830A] hover:bg-[#a36d08] text-white font-medium px-7 py-3 rounded-full transition-colors"
              >
                Book a free consultation
              </Link>
            </div>
          </div>

          {/* Circular portrait */}
          <div className="shrink-0 w-52 h-52 sm:w-64 sm:h-64 drop-shadow-lg">
            <Image
              src="/images/portrait-circle.png"
              alt="Sarah McManus"
              width={256}
              height={256}
              className="w-full h-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── WHAT I OFFER ─────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(160deg, #3D2468 0%, #7A2E1A 50%, #C4561E 100%)",
        }}
      >
        <WaveDivider fill="#FAF7F2" flip />
        <div className="max-w-3xl mx-auto px-6 pt-6 pb-16">
          <h2 className="font-heading text-3xl sm:text-4xl text-[#FAF0DC] mb-2">
            What we work on together
          </h2>
          <p className="text-[#F5C98A] mb-8 italic font-heading">
            The things that are hardest to do alone.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-2xl p-5">
              <h3 className="font-heading text-xl mb-2 text-[#F5C98A]">Grounding</h3>
              <p className="text-sm leading-relaxed text-white/80">
                Staying present with difficult material instead of bouncing off
                it — the foundation that makes everything else possible.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <h3 className="font-heading text-xl mb-2 text-[#F5C98A]">Tracking</h3>
              <p className="text-sm leading-relaxed text-white/80">
                Distinguishing the different parts, wants, and body sensations
                at play — so you can work with them rather than being tangled
                in them.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <h3 className="font-heading text-xl mb-2 text-[#F5C98A]">
                Attuned presence
              </h3>
              <p className="text-sm leading-relaxed text-white/80">
                The combination of the two — a spacious, curious attention that
                invites parts of you to be understood and to shift.
              </p>
            </div>
          </div>
          <p className="mt-8 text-white/70 max-w-2xl text-sm leading-relaxed">
            With practice in sessions, these become more natural — something
            you carry with you. The goal is always to make yourself less
            dependent on me, not more.
          </p>
        </div>
        <WaveDivider fill="#FAF7F2" />
      </section>

      {/* ── FEATURED EVENT ───────────────────────────────────── */}
      <section className="bg-[#FAF7F2] px-6 pt-12 pb-0">
        <div className="max-w-3xl mx-auto pb-16">
          <h2 className="font-heading text-3xl sm:text-4xl text-[#2C2416] mb-2">
            Upcoming event
          </h2>
          <p className="text-[#6B5744] mb-8">
            Workshops and events on inner alignment and agency.
          </p>

          <div
            className="rounded-2xl p-6 max-w-lg"
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
            <p className="text-sm text-[#6B5744] mb-4">
              Wednesday, April 22 · 6–9pm
            </p>
            <Link
              href="/events"
              className="text-sm font-medium text-[#3D2468] hover:text-[#C4830A] transition-colors"
            >
              See all events →
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(160deg, #C4561E 0%, #C4830A 60%, #D4A017 100%)",
        }}
      >
        <WaveDivider fill="#FAF7F2" flip />
        <div className="max-w-xl mx-auto px-6 text-center pt-6 pb-16">
          <h2 className="font-heading text-3xl text-white mb-3">
            Stay in the loop
          </h2>
          <p className="text-white/80 mb-6">
            Occasional writing on inner alignment, coaching, and the practice
            of coherent living. No spam, unsubscribe anytime.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-full border border-white/30 bg-white/20 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/30"
            />
            <button
              type="submit"
              className="bg-[#2C2416] hover:bg-[#1a1510] text-white font-medium px-6 py-3 rounded-full transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
        <WaveDivider fill="#FAF7F2" />
      </section>

      {/* ── BLOG TEASERS ─────────────────────────────────────── */}
      <section className="bg-[#FAF7F2] px-6 pt-12 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl text-[#2C2416] mb-8">
            Writing
          </h2>
          <p className="text-[#6B5744] italic">
            Blog posts coming soon.
          </p>
        </div>
      </section>
    </>
  );
}
