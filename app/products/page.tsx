import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Hathi Sewing Machine Component",
    description:
      "The primary product manufactured by M. A. Engineering, designed for strength, smooth mechanical operation and dependable long-term use.",
    image: "/products/hathi.png",
    featured: true,
  },
  {
    name: "Precision Sewing Machine Part",
    description:
      "A precision-manufactured metal component for industrial sewing-machine applications.",
    image: "/products/product-02.png",
    featured: false,
  },
  {
    name: "Custom Metal Assembly",
    description:
      "Made-to-order engineering components manufactured from approved drawings, measurements or physical samples.",
    image: "/products/product-03.png",
    featured: false,
  },
  {
    name: "Industrial Machine Accessory",
    description:
      "Supporting component manufactured for sewing-machine assembly, maintenance and reliable operation.",
    image: "/products/product-04.png",
    featured: false,
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#112752] text-white">
      {/* Page heading */}
      <section className="border-b border-[#cab557]/40 bg-[#07142f] px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold tracking-[0.25em] text-[#cab557] uppercase">
            M. A. Engineering
          </p>

          <h1 className="mt-4 text-4xl font-bold text-[#f5e495] sm:text-6xl">
            Our Products
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Sewing-machine components and custom-engineered metal products
            manufactured with practical experience, careful fitting and
            dependable workmanship.
          </p>
        </div>
      </section>

      {/* Featured product */}
      <section className="px-5 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <article className="grid overflow-hidden rounded-tl-[48px] rounded-br-[48px] border border-[#cab557]/80 bg-[#07142f] shadow-[0_24px_55px_rgba(0,0,0,0.3)] lg:grid-cols-2">
            <div className="relative min-h-85 bg-white sm:min-h-107.5">
              <Image
                src={products[0].image}
                alt={products[0].name}
                fill
                priority
                className="object-contain p-6 sm:p-10"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="text-sm font-bold tracking-[0.22em] text-[#cab557] uppercase">
                Featured product
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#f5e495] sm:text-5xl">
                {products[0].name}
              </h2>

              <div className="mt-6 h-px w-24 bg-[#cab557]" />

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                {products[0].description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="border border-[#42598b]/60 bg-[#112752] p-4">
                  <p className="text-xs tracking-[0.18em] text-[#cab557] uppercase">
                    Application
                  </p>
                  <p className="mt-2 font-semibold text-white">
                    Industrial sewing machines
                  </p>
                </div>

                <div className="border border-[#42598b]/60 bg-[#112752] p-4">
                  <p className="text-xs tracking-[0.18em] text-[#cab557] uppercase">
                    Production
                  </p>
                  <p className="mt-2 font-semibold text-white">
                    Manufactured in Okara
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-9 inline-flex w-fit items-center justify-center bg-[#a6862f] px-7 py-4 font-bold text-[#07142f] transition hover:bg-[#f5e495]"
              >
                Enquire about this product
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Product cards */}
      <section className="px-5 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold tracking-[0.22em] text-[#cab557] uppercase">
              Additional products
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Product range
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
              These product names and images can be replaced once the confirmed
              company product list is available.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {products.slice(1).map((product, index) => (
              <article
                key={product.name}
                className="overflow-hidden rounded-tl-[36px] rounded-br-[36px] border border-[#cab557]/65 bg-[#07142f] shadow-xl"
              >
                <div className="relative min-h-70 bg-[#0a0f18]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  <div className="absolute top-0 right-0 bg-[#a6862f] px-5 py-3 font-bold text-[#07142f]">
                    0{index + 2}
                  </div>
                </div>

                <div className="p-7 sm:p-8">
                  <h3 className="text-2xl font-bold text-[#f5e495]">
                    {product.name}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-300">
                    {product.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex border-b-2 border-[#cab557] pb-1 font-semibold text-white transition hover:text-[#f5e495]"
                  >
                    Product enquiry
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom product CTA */}
      <section className="border-t border-[#42598b]/40 bg-[#07142f] px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold tracking-[0.22em] text-[#cab557] uppercase">
            Custom production
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
            Have a part sample or drawing?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Contact M. A. Engineering to discuss whether a component can be
            manufactured from an approved sample, drawing or technical
            specification.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex bg-[#a6862f] px-8 py-4 font-bold text-[#07142f] transition hover:bg-[#f5e495]"
          >
            Send product requirements
          </Link>
        </div>
      </section>
    </main>
  );
}