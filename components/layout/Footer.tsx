import Link  from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#42598b]/40 bg-[#051535]">
      <div className="gold-divider" />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 lg:px-10">
        <div>
          <h2 className="text-xl font-bold text-white">
            MA Engineering Okara
          </h2>

          <p className="mt-4 max-w-sm leading-7 text-slate-400">
            Manufacturing sewing-machine components, industrial tools and
            precision-engineered products.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-[#cab557]">Navigation</h3>

          <div className="mt-4 flex flex-col gap-3 text-slate-400">
            <Link href="/about" className="hover:text-white">
              About us
            </Link>

            <Link href="/production" className="hover:text-white">
              Production
            </Link>

            <Link href="/products" className="hover:text-white">
              Products
            </Link>

            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-[#cab557]">Location</h3>

          <p className="mt-4 leading-7 text-slate-400">
            Okara, Punjab
            <br />
            Pakistan
          </p>
        </div>
      </div>

      <div className="border-t border-[#42598b]/30 px-6 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} MA Engineering Okara. All rights
        reserved.
      </div>
    </footer>
  );
}