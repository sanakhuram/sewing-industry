import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#42598b]/40 bg-[#051535]">
      <div className="gold-divider" />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 lg:px-10">
        {/* Company */}

        <div>
          <div className="flex flex-col items-start">
            <Image
              src="/logo.png"
              alt="M. A. Engineering Logo"
              width={85}
              height={85}
              priority
              className="mb-5"
            />

            <h2 className="text-2xl font-bold text-white">
              M. A. Engineering
            </h2>

            <p className="mt-1 font-medium text-[#cab557]">
              Okara, Pakistan
            </p>
          </div>

          <p className="mt-5 max-w-sm leading-7 text-slate-400">
            Manufacturing high-quality sewing machine components with
            precision engineering, dependable workmanship and years of
            manufacturing experience.
          </p>
        </div>

        {/* Navigation */}

        <div>
          <h3 className="font-bold uppercase tracking-wider text-[#cab557]">
            Navigation
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-slate-400">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <Link href="/about" className="transition hover:text-white">
              About Us
            </Link>

            <Link href="/production" className="transition hover:text-white">
              Production
            </Link>

            <Link href="/products" className="transition hover:text-white">
              Products
            </Link>

            <Link href="/gallery" className="transition hover:text-white">
              Gallery
            </Link>

            <Link href="/history" className="transition hover:text-white">
              History
            </Link>

            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        {/* Location */}

        <div>
          <h3 className="font-bold uppercase tracking-wider text-[#cab557]">
            Location
          </h3>

          <div className="mt-5 space-y-3 text-slate-400">
            <p>
              <span className="font-semibold text-white">Address</span>
              <br />
              Okara, Punjab
              <br />
              Pakistan
            </p>

            <p>
              <span className="font-semibold text-white">Industry</span>
              <br />
              Sewing Machine Components
            </p>

            <p>
              <span className="font-semibold text-white">Established</span>
              <br />
              Manufacturing Excellence
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-[#42598b]/30 px-6 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} M. A. Engineering. All rights reserved.
      </div>
    </footer>
  );
}