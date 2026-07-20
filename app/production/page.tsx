import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Cog,
  Factory,
  Gauge,
  Hammer,
  PackageCheck,
  Ruler,
  ScanSearch,
} from "lucide-react";

const productionSteps = [
  {
    number: "01",
    title: "Material Preparation",
    description:
      "Raw metal is selected, measured, marked and prepared according to the required dimensions for each product component.",
    image: "/production/production-material.png",
    icon: Ruler,
  },
  {
    number: "02",
    title: "Machining and Forming",
    description:
      "Turning, drilling, milling, shaping and forming operations are carried out using established workshop machinery.",
    image: "/production/production-machining.png",
    icon: Cog,
  },
  {
    number: "03",
    title: "Grinding and Finishing",
    description:
      "Components are ground, deburred, polished and prepared for fitting to achieve the required dimensions and surface finish.",
    image: "/production/production-finishing.png",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Inspection and Packing",
    description:
      "Finished parts are checked for dimensions, appearance and fit before being prepared for packing and delivery.",
    image: "/production/production-inspection.png",
    icon: PackageCheck,
  },
];

const capabilities = [
  {
    title: "Lathe Machining",
    description:
      "Turning, facing, threading and producing cylindrical metal components.",
    icon: Cog,
  },
  {
    title: "Milling and Drilling",
    description:
      "Creating slots, holes, profiles and accurately shaped component surfaces.",
    icon: Factory,
  },
  {
    title: "Grinding and Finishing",
    description:
      "Improving component dimensions, surface condition and final appearance.",
    icon: Gauge,
  },
  {
    title: "Press and Forming Work",
    description:
      "Shaping selected metal components through practical press and forming operations.",
    icon: Hammer,
  },
];

const qualityChecks = [
  "Dimensional measurement",
  "Visual surface inspection",
  "Product specification checking",
  "Fit and movement checking",
  "Final product review",
  "Packing inspection",
];

export default function ProductionPage() {
  return (
    <main className="min-h-screen bg-[#112752] text-white">
      {/* Hero */}

      <section className="relative min-h-155rflow-hidden">
        <Image
          src="/about/about-hero.png"
          alt="M. A. Engineering production workshop"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-linear-to-r from-[#07142f]/95 via-[#07142f]/75 to-[#07142f]/35" />

        <div className="relative z-10 mx-auto flex min-h-155 max-w-7xl items-center px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold tracking-[0.24em] text-[#cab557] uppercase">
              M. A. Engineering
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Our Production Process
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              From raw material preparation to machining, finishing and final
              inspection, every component is produced with practical
              engineering experience and careful workmanship.
            </p>

            <Link
              href="/products"
              className="mt-9 inline-flex bg-[#a6862f] px-8 py-4 font-bold text-[#07142f] transition hover:bg-[#f5e495]"
            >
              View our products
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}

      <section className="px-5 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl rounded-tl-[48px] rounded-br-[48px] border border-[#cab557]/45 bg-[#07142f] px-7 py-12 text-center shadow-xl sm:px-12">
          <p className="text-sm font-bold tracking-[0.22em] text-[#cab557] uppercase">
            How we manufacture
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold text-white sm:text-5xl">
            A clear process from material selection to finished product
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-300">
            Our production process combines traditional workshop machinery,
            practical manufacturing knowledge and careful inspection to produce
            dependable sewing-machine components.
          </p>
        </div>
      </section>

      {/* Production stages */}

      <section className="px-5 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl space-y-9">
          {productionSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="grid overflow-hidden rounded-tl-[44px] rounded-br-[44px] border border-[#cab557]/70 bg-[#07142f] shadow-[0_22px_55px_rgba(0,0,0,0.3)] md:grid-cols-2"
              >
                <div
                  className={`relative min-h-75 sm:min-h-92.5 ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#07142f]/35 to-transparent" />
                </div>

                <div className="flex min-h-75 flex-col justify-center p-8 sm:min-h-92.5 sm:p-12">
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center border border-[#cab557]/60 bg-[#112752] text-[#f5e495]">
                      <Icon size={27} />
                    </span>

                    <span className="text-2xl font-bold text-[#cab557]">
                      {step.number}
                    </span>
                  </div>

                  <h2 className="mt-6 text-3xl font-bold text-[#f5e495] sm:text-4xl">
                    {step.title}
                  </h2>

                  <div className="mt-5 h-px w-20 bg-[#cab557]" />

                  <p className="mt-6 max-w-lg leading-8 text-slate-300">
                    {step.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Machinery capability */}

      <section className="border-y border-[#42598b]/40 bg-[#07142f]/55 px-5 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold tracking-[0.22em] text-[#cab557] uppercase">
              Workshop capability
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
              Machinery supporting our production
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-300">
              Our workshop uses proven metalworking processes to produce parts
              with dependable dimensions, shape and finish.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="rounded-tl-[34px] rounded-br-[34px] border border-[#42598b]/60 bg-[#112752] p-7 transition hover:-translate-y-1 hover:border-[#cab557]"
                >
                  <div className="flex h-14 w-14 items-center justify-center border border-[#cab557]/60 bg-[#07142f] text-[#f5e495]">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#f5e495]">
                    {capability.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-300">
                    {capability.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manufacturing expertise */}

      <section className="px-5 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-tl-[48px] rounded-br-[48px] border border-[#cab557]/60 bg-[#07142f] lg:grid-cols-2">
          <div className="relative min-h-90">
            <Image
              src="/gallery/production-machinery-grid.png"
              alt="M. A. Engineering manufacturing workshop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#07142f]/25" />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="text-sm font-bold tracking-[0.22em] text-[#cab557] uppercase">
              Manufacturing expertise
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Experienced production with dependable workmanship
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Our production is focused on manufacturing sewing-machine
              components through established machining, forming, grinding and
              finishing processes.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Every production stage follows practical engineering methods
              developed through years of manufacturing experience. Our
              machinery and workshop processes are maintained to support
              consistent production quality.
            </p>

            <Link
              href="/gallery"
              className="mt-8 inline-flex w-fit border-b-2 border-[#cab557] pb-2 font-bold text-white transition hover:text-[#f5e495]"
            >
              Explore our gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Quality control */}

      <section className="px-5 pb-20 sm:px-6">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-tl-[52px] rounded-br-[52px] border border-[#786ead]/70 bg-[#54468b] px-7 py-14 shadow-xl sm:px-12">
          <div className="absolute inset-4 rounded-tl-[40px] rounded-br-[40px] border border-white/25" />

          <div className="relative z-10">
            <div className="text-center">
              <p className="text-sm font-bold tracking-[0.22em] text-[#f5e495] uppercase">
                Quality control
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
                Every product is reviewed before packing
              </h2>

              <p className="mx-auto mt-5 max-w-3xl leading-8 text-purple-100">
                Inspection is carried out to confirm that manufactured
                components meet the required product specifications before
                packing and delivery.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {qualityChecks.map((check) => (
                <div
                  key={check}
                  className="flex items-center gap-4 border border-white/20 bg-[#392a71]/55 p-5"
                >
                  <CheckCircle2
                    className="shrink-0 text-[#f5e495]"
                    size={22}
                  />

                  <span className="font-semibold text-white">{check}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="border-t border-[#42598b]/40 bg-[#07142f] px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <ScanSearch className="mx-auto text-[#cab557]" size={42} />

          <p className="mt-5 text-sm font-bold tracking-[0.22em] text-[#cab557] uppercase">
            Product information
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
            Interested in our products?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Contact our team for information about product availability,
            specifications and ordering.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex bg-[#a6862f] px-8 py-4 font-bold text-[#07142f] transition hover:bg-[#f5e495]"
            >
              View our products
            </Link>

            <Link
              href="/contact"
              className="inline-flex border border-[#cab557] px-8 py-4 font-bold text-white transition hover:bg-[#cab557] hover:text-[#07142f]"
            >
              Contact our team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}