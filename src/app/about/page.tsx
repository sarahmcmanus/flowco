import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "About — Flowing Coherence",
  description: "Sarah McManus — somatic IFS coach based in Victoria, BC.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── INTRO ────────────────────────────────────────────── */}
      <section className="bg-[#FAF7F2] px-6 pt-16 pb-0">
        <div className="max-w-4xl mx-auto pb-16 flex flex-col md:flex-row md:items-start gap-10 md:gap-16">

          {/* Photo */}
          <div className="shrink-0 w-64 md:w-72 self-center md:self-start rounded-2xl overflow-hidden shadow-lg"
            style={{ boxShadow: "0 0 0 4px rgba(122,36,104,0.35), 0 10px 25px -5px rgba(122,36,104,0.25)" }}
          >
            <Image
              src="/images/cosmovitral.jpg"
              alt="Sarah McManus"
              width={2448}
              height={3030}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Bio */}
          <div className="flex-1 min-w-0">
            <h1 className="font-heading text-4xl sm:text-5xl text-[#2C2416] mb-6">
              About me
            </h1>
            <p className="text-lg text-[#6B5744] mb-4">
              I&apos;m a somatic IFS coach based in Victoria, BC — working with
              people one-on-one and in workshops, mostly online.
            </p>
            <p className="text-lg text-[#6B5744] mb-4">
              [More about Sarah — coming soon. She&apos;ll update this with her
              own words.]
            </p>
            <p className="text-lg text-[#6B5744] mb-8">
              I also co-facilitate workshops on inner alignment and agency
              through{" "}
              <a
                href="https://gobeyondgoals.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#C4830A] transition-colors"
              >
                Beyond Goals
              </a>
              .
            </p>
            <Link
              href="/coaching#book"
              className="inline-block bg-[#C4830A] hover:bg-[#a36d08] text-white font-medium px-7 py-3 rounded-full transition-colors"
            >
              Work with me
            </Link>
          </div>
        </div>
      </section>

      {/* ── BACKGROUND ───────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(160deg, #3D2468 0%, #7A2E1A 50%, #C4561E 100%)",
        }}
      >
        <WaveDivider fill="#FAF7F2" flip />
        <div className="max-w-3xl mx-auto px-6 pt-6 pb-16">
          <h2 className="font-heading text-3xl sm:text-4xl text-[#FAF0DC] mb-2">
            Training &amp; approach
          </h2>
          <p className="text-[#F5C98A] mb-8 italic font-heading">
            [Sarah will fill this in — modalities, training, background.]
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Internal Family Systems (IFS)",
              "Coherence Therapy",
              "Core Transformation",
              "Feeding Your Demons",
              "Somatic practices",
              "Psychedelic integration",
            ].map((m) => (
              <div key={m} className="bg-white/10 rounded-xl px-4 py-3 text-white/90 text-sm">
                {m}
              </div>
            ))}
          </div>
        </div>
        <WaveDivider fill="#FAF7F2" />
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-[#FAF7F2] px-6 pt-12 pb-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#6B5744] mb-6 max-w-xl">
            If anything here resonates, the best next step is a free
            30-minute conversation.
          </p>
          <Link
            href="/coaching#book"
            className="inline-block bg-[#C4830A] hover:bg-[#a36d08] text-white font-medium px-7 py-3 rounded-full transition-colors"
          >
            Book a free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
