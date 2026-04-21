import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Flowing Coherence",
  description: "Get in touch with Sarah McManus.",
};

export default function ContactPage() {
  return (
    <section className="bg-[#FAF7F2] px-6 pt-16 pb-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-heading text-4xl sm:text-5xl text-[#2C2416] mb-6">
          Get in touch
        </h1>
        <p className="text-lg text-[#6B5744] mb-8">
          Whether you have questions about coaching, want to talk before
          booking, or just want to say hello — I&apos;m glad you&apos;re here.
        </p>

        <div className="space-y-6">
          <div>
            <p className="text-xs font-medium text-[#C4830A] uppercase tracking-wider mb-1">
              Email
            </p>
            <a
              href="mailto:sarah@flowingcoherence.com"
              className="font-heading text-xl text-[#2C2416] hover:text-[#C4830A] transition-colors"
            >
              sarah@flowingcoherence.com
            </a>
          </div>

          <div>
            <p className="text-xs font-medium text-[#C4830A] uppercase tracking-wider mb-1">
              Twitter / X
            </p>
            <a
              href="https://twitter.com/SarahAMcManus"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-xl text-[#2C2416] hover:text-[#C4830A] transition-colors"
            >
              @SarahAMcManus
            </a>
          </div>

          <div>
            <p className="text-xs font-medium text-[#C4830A] uppercase tracking-wider mb-1">
              Book a session
            </p>
            <Link
              href="/coaching#book"
              className="font-heading text-xl text-[#2C2416] hover:text-[#C4830A] transition-colors"
            >
              flowingcoherence.com/coaching
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
