import type { Metadata } from "next";
import Link from "next/link";
import WaveDivider from "@/components/WaveDivider";
import CalEmbed from "@/components/CalEmbed";

export const metadata: Metadata = {
  title: "Coaching — Flowing Coherence",
  description:
    "Somatic IFS coaching with Sarah McManus. Book a free 30-minute consultation.",
};

export default function CoachingPage() {
  return (
    <>
      {/* ── INTRO ────────────────────────────────────────────── */}
      <section className="bg-[#FAF7F2] px-6 pt-16 pb-0">
        <div className="max-w-3xl mx-auto pb-16">
          <h1 className="font-heading text-4xl sm:text-5xl text-[#2C2416] mb-6">
            Work with Sarah
          </h1>
          <p className="text-lg text-[#6B5744] mb-4 max-w-2xl">
            Most of us have something we&apos;d like to change — a pattern of
            thought, feeling, or behavior that doesn&apos;t make sense to us,
            or that we keep bumping into despite our best intentions.
          </p>
          <p className="text-lg text-[#6B5744] mb-4 max-w-2xl">
            Sometimes there&apos;s low-hanging fruit: a simple environmental or
            pragmatic fix that&apos;s been overlooked. More often, what&apos;s
            needed is a different kind of attention — one that can actually meet
            the parts of you that are tangled up, rather than trying to push
            past them.
          </p>
          <p className="text-lg text-[#6B5744] max-w-2xl">
            That&apos;s what we do in sessions. Drawing on IFS (Internal Family
            Systems), Coherence Therapy, Core Transformation, and somatic
            practices, we work toward something specific: similar situations in
            the future no longer produce the confusing response — not through
            ongoing willpower, but because something has actually shifted.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(160deg, #3D2468 0%, #7A2E1A 50%, #C4561E 100%)",
        }}
      >
        <WaveDivider fill="#FAF7F2" flip />
        <div className="max-w-3xl mx-auto px-6 pt-6 pb-16">
          <h2 className="font-heading text-3xl sm:text-4xl text-[#FAF0DC] mb-2">
            How it works
          </h2>
          <p className="text-[#F5C98A] mb-8 italic font-heading">
            The core gameplay loop.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-2xl p-5">
              <h3 className="font-heading text-lg mb-2 text-[#F5C98A]">Untangling</h3>
              <p className="text-sm leading-relaxed text-white/80">
                Identifying the different parts, voices, and pulls that are
                active — so we&apos;re working with the actual landscape, not a
                simplified version of it.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <h3 className="font-heading text-lg mb-2 text-[#F5C98A]">Turning towards</h3>
              <p className="text-sm leading-relaxed text-white/80">
                Bringing curious, spacious attention to a part rather than
                trying to argue with it, override it, or make it go away.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <h3 className="font-heading text-lg mb-2 text-[#F5C98A]">Sensing</h3>
              <p className="text-sm leading-relaxed text-white/80">
                Feeling into what a part actually wants, needs, or fears — in
                the body, not just conceptually.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <h3 className="font-heading text-lg mb-2 text-[#F5C98A]">Noticing shifts</h3>
              <p className="text-sm leading-relaxed text-white/80">
                When a part feels genuinely understood, something changes. More
                space opens up. That&apos;s the moment we&apos;re working
                toward.
              </p>
            </div>
          </div>
          <p className="mt-8 text-white/70 text-sm leading-relaxed max-w-2xl">
            With practice, this becomes something you carry — a more natural
            capacity for compassionate self-attunement. The goal is always to
            make yourself less dependent on me, not more.
          </p>
        </div>
        <WaveDivider fill="#FAF7F2" />
      </section>

      {/* ── BOOKING ──────────────────────────────────────────── */}
      <section id="book" className="bg-[#FAF7F2] px-6 pt-12 pb-0">
        <div className="max-w-3xl mx-auto pb-6">
          <h2 className="font-heading text-3xl sm:text-4xl text-[#2C2416] mb-2">
            Book a session
          </h2>
          <p className="text-[#6B5744] mb-8">
            Start with a free 30-minute consultation — no commitment, just a
            chance to see if we&apos;re a good fit.
          </p>

          {/* Pricing overview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { label: "Free consult", duration: "30 min", price: "Free" },
              { label: "Session", duration: "1 hour", price: "$120" },
              { label: "Session", duration: "90 min", price: "$180" },
              { label: "Session", duration: "2 hours", price: "$240" },
            ].map(({ label, duration, price }) => (
              <div
                key={duration}
                className="rounded-2xl p-4 text-center"
                style={{
                  background: "linear-gradient(135deg, #FDF0E4 0%, #F0EDF8 100%)",
                  border: "1px solid #C4830A33",
                }}
              >
                <p className="text-xs text-[#C4830A] font-medium uppercase tracking-wider mb-1">
                  {label}
                </p>
                <p className="font-heading text-[#2C2416] text-lg">{duration}</p>
                <p className="text-[#6B5744] font-medium">{price}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-[#6B5744] mb-8">
            Sliding scale available — reach out via{" "}
            <Link href="/contact" className="underline hover:text-[#C4830A] transition-colors">
              contact
            </Link>{" "}
            if pricing is a barrier.
          </p>

          <CalEmbed calLink="sarahmcmanus" />
        </div>
      </section>

      {/* ── FLEXIBLE PAYMENT ─────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(160deg, #C4561E 0%, #C4830A 60%, #D4A017 100%)",
        }}
      >
        <WaveDivider fill="#FAF7F2" flip />
        <div id="pay" className="max-w-xl mx-auto px-6 pt-6 pb-16">
          <h2 className="font-heading text-3xl text-white mb-2">
            Pay for a session
          </h2>
          <p className="text-white/80 mb-6">
            For session top-ups, extensions, or any other payment — pay
            securely via Stripe.
          </p>
          <a
            href="https://buy.stripe.com/8x2fZi5Q0adi8Xmgkdd3i00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FAF7F2] hover:bg-white text-[#2C2416] font-medium px-7 py-3 rounded-full transition-colors"
          >
            Pay via Stripe
          </a>
        </div>
        <WaveDivider fill="#FAF7F2" />
      </section>
    </>
  );
}
