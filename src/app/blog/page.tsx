import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing — Flowing Coherence",
  description: "Writing by Sarah McManus on inner alignment, coaching, and coherent living.",
};

export default function BlogPage() {
  return (
    <section className="bg-[#FAF7F2] px-6 pt-16 pb-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl sm:text-5xl text-[#2C2416] mb-2">
          Writing
        </h1>
        <p className="font-heading italic text-xl text-[#8B4A1A] mb-10">
          On inner alignment, coaching, and the practice of coherent living.
        </p>

        <p className="text-[#6B5744] italic mb-8">
          Posts coming soon.
        </p>

        <p className="text-sm text-[#6B5744]">
          In the meantime, you can find Sarah&apos;s public notes at{" "}
          <a
            href="https://roamresearch.com/#/app/HowToHuman/page/BSFuobcvJ"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#C4830A] transition-colors"
          >
            her public Roam notebook
          </a>
          , or sign up for the newsletter on the{" "}
          <Link href="/" className="underline hover:text-[#C4830A] transition-colors">
            home page
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
