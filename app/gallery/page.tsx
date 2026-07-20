import Image from "next/image";
import Link from "next/link";
import {
  Cog,
  Factory,
  Gauge,
  ScanSearch,
  Settings,
} from "lucide-react";

const galleryItems = [
  {
    number: "01",
    title: "Lathe Machining",
    description:
      "Conventional lathe machinery used for turning, facing and producing cylindrical metal components.",
    icon: Cog,
  },
  {
    number: "02",
    title: "Milling Operations",
    description:
      "Machining processes used for creating slots, profiles, surfaces and accurately shaped components.",
    icon: Settings,
  },
  {
    number: "03",
    title: "Finished Components",
    description:
      "Machined metal parts prepared for fitting, assembly and final product inspection.",
    icon: Factory,
  },
  {
    number: "04",
    title: "Grinding and Finishing",
    description:
      "Surface preparation and finishing processes used to achieve accurate dimensions and smooth results.",
    icon: Gauge,
  },
  {
    number: "05",
    title: "Quality Inspection",
    description:
      "Dimensional inspection of manufactured components using precision measuring equipment.",
    icon: ScanSearch,
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#112752] text-white">
      {/* Page heading */}

      <section className="border-b border-[#cab557]/40 bg-[#07142f] px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold tracking-[0.25em] text-[#cab557] uppercase">
            M. A. Engineering
          </p>

          <h1 className="mt-4 text-4xl font-bold text-[#f5e495] sm:text-6xl">
            Production Gallery
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A closer look at our machinery, manufacturing processes, finished
            components and quality-control activities.
          </p>
        </div>
      </section>

      {/* Main machinery collage */}

      <section className="px-5 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold tracking-[0.22em] text-[#cab557] uppercase">
                Inside our workshop
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-5xl">
                Machinery and production
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-slate-300">
              Our manufacturing capability includes established metalworking
              processes for producing sewing-machine and custom mechanical
              components.
            </p>
          </div>

          <figure className="overflow-hidden rounded-tl-[50px] rounded-br-[50px] border border-[#cab557]/70 bg-[#07142f] p-3 shadow-[0_25px_65px_rgba(0,0,0,0.35)] sm:p-5">
            <div className="relative aspect-3/2 overflow-hidden rounded-tl-[38px] rounded-br-[38px]">
              <Image
                src="/gallery/production-machinery-grid.png"
                alt="M. A. Engineering machinery and production gallery"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>

            <figcaption className="px-4 py-6 text-center leading-7 text-slate-300">
              Lathe machining, milling, grinding, finished metal components and
              dimensional inspection.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Gallery descriptions */}

      <section className="border-y border-[#42598b]/40 bg-[#07142f]/55 px-5 py-16 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-tl-[34px] rounded-br-[34px] border border-[#42598b]/60 bg-[#112752] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#cab557]"
              >
                <span className="absolute top-0 right-0 bg-[#7a670f] px-5 py-3 font-bold text-[#f5e495]">
                  {item.number}
                </span>

                <div className="flex h-14 w-14 items-center justify-center border border-[#cab557]/60 bg-[#07142f] text-[#f5e495]">
                  <Icon size={27} />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-[#f5e495]">
                  {item.title}
                </h2>

                <div className="mt-4 h-px w-16 bg-[#cab557]" />

                <p className="mt-5 leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Workshop image */}

      <section className="px-5 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-tl-[48px] rounded-br-[48px] border border-[#cab557]/60 bg-[#07142f] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-90 lg:min-h-130">
            <Image
              src="/about/about-hero.png"
              alt="M. A. Engineering industrial workshop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />

            <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#07142f]/30" />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="text-sm font-bold tracking-[0.22em] text-[#cab557] uppercase">
              Production environment
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Proven machinery supported by practical manufacturing experience
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Our production environment brings together traditional
              metalworking machinery, workshop knowledge and careful inspection
              to manufacture dependable industrial components.
            </p>

            <Link
              href="/production"
              className="mt-8 inline-flex w-fit border-b-2 border-[#cab557] pb-2 font-bold text-white transition hover:text-[#f5e495]"
            >
              View our production process
            </Link>
          </div>
        </div>
      </section>

      {/* Call to action */}

      <section className="border-t border-[#42598b]/40 bg-[#07142f] px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold tracking-[0.22em] text-[#cab557] uppercase">
            Product enquiries
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
            Need a component manufactured?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Contact us with your sample, drawing or technical requirements to
            discuss the manufacturing possibilities.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex bg-[#a6862f] px-8 py-4 font-bold text-[#07142f] transition hover:bg-[#f5e495]"
          >
            Contact M. A. Engineering
          </Link>
        </div>
      </section>
    </main>
  );
}