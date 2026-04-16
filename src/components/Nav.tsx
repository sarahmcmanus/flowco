import Image from "next/image";
import Link from "next/link";

function TwitterBird() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="w-5 h-5 fill-current"
    >
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-sm border-b border-[#2C2416]/10">
      <nav className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo + name */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Flowing Coherence logo"
            width={40}
            height={40}
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
          <li>
            <a
              href="https://twitter.com/SarahAMcManus"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-[#6B5744] hover:text-[#1DA1F2] transition-colors"
            >
              <TwitterBird />
            </a>
          </li>
        </ul>

        {/* CTA */}
        <Link
          href="/coaching#book"
          className="hidden md:inline-block shrink-0 bg-[#C4830A] hover:bg-[#a36d08] text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
        >
          Book a free consult
        </Link>
      </nav>
    </header>
  );
}
