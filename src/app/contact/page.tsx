import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Flowing Coherence",
  description: "Get in touch with Sarah McManus.",
};

export default function ContactPage() {
  return (
    <section className="bg-[#FAF7F2] px-6 pt-16 pb-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-heading text-4xl sm:text-5xl text-[#2C2416] mb-3">
          Get in touch
        </h1>
        <p className="text-lg text-[#6B5744] mb-10">
          If you have questions about coaching, want to talk before booking, or
          anything else, I&apos;d love to hear from you.
        </p>

        <ContactForm />

        <p className="text-sm text-[#6B5744]/70 mt-8">
          Ready to book?{" "}
          <Link href="/coaching#book" className="underline hover:text-[#C4830A] transition-colors">
            Go straight to scheduling →
          </Link>
        </p>
      </div>
    </section>
  );
}
