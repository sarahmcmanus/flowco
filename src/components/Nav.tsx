import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-sm border-b border-[#2C2416]/10">
      <nav className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo + name */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Flowing Coherence logo"
            width={44}
            height={44}
            className="rounded-full"
          />
          <span className="font-heading text-lg text-[#2C2416] leading-tight hidden sm:block">
            Flowing Coherence
          </span>
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-5 text-sm text-[#6B5744] font-medium">
          <li>
            <Link href="/about" className="hover:text-[#2C2416] transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/coaching" className="hover:text-[#2C2416] transition-colors">
              Coaching
            </Link>
          </li>
          <li>
            <Link href="/events" className="hover:text-[#2C2416] transition-colors">
              Events
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-[#2C2416] transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#2C2416] transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <Link
          href="/coaching#book"
          className="shrink-0 bg-[#C4830A] hover:bg-[#a36d08] text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
        >
          Book a free consult
        </Link>
      </nav>
    </header>
  );
}
