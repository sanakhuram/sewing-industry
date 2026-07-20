import Link from "next/link";
import IntroSplash from "@/components/IntroSplash";
import {
  ArrowRight,
  Cog,
  Factory,
  Gauge,
  Hammer,
  PackageCheck,
  Settings,
} from "lucide-react";

const services = [
  {
    title: "Precision Machining",
    description:
      "Accurate turning, milling, grinding and shaping of industrial machine components.",
    icon: Cog,
  },
  {
    title: "Sewing Machine Parts",
    description:
      "Manufacturing durable components and replacement parts for industrial sewing machines.",
    icon: Settings,
  },
  {
    title: "Tools and Dies",
    description:
      "Tools, fixtures and dies developed for reliable and repeatable production.",
    icon: Hammer,
  },
  {
    title: "Production Services",
    description:
      "From raw material preparation to machining, finishing and final product inspection.",
    icon: Factory,
  },
];

const capabilities = [
  "Lathe machining",
  "Surface grinding",
  "Milling operations",
  "Power press production",
  "Wire-forming components",
  "Industrial component production",
];

const statistics = [
  {
    value: "40+",
    label: "Years of experience",
  },
  {
    value: "100+",
    label: "Industrial components",
  },
  {
    value: "06",
    label: "Core production areas",
  },
  {
    value: "100%",
    label: "Quality focused",
  },
];

export default function HomePage() {
  return (
    <main className="industrial-background min-h-screen">
      <IntroSplash />

      {/* Hero */}

      <section className="hero-background relative min-h-190">
        <div className="relative z-10 mx-auto grid min-h-190 max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 border border-[#cab557]/40 bg-[#112752]/75 px-4 py-2 text-sm font-semibold tracking-[0.2em] text-[#f5e495] uppercase">
              <Gauge size={17} />
              Industrial manufacturing
            </p>

            <h1 className="max-w-4xl text-5xl leading-[1.08] font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Precision engineering built on{" "}
              <span className="text-[#cab557]">
                generations of experience.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              MA Engineering Okara manufactures sewing-machine components,
              industrial tools and precision-engineered parts using traditional
              craftsmanship and dependable production methods.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-3 bg-[#a6862f] px-7 py-4 font-bold text-[#051535] transition hover:bg-[#cab557]"
              >
                Explore products
                <ArrowRight size={20} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-[#cab557]/65 px-7 py-4 font-bold text-white transition hover:bg-[#cab557] hover:text-[#051535]"
              >
                Contact our team
              </Link>
            </div>
          </div>

          {/* Hero visual */}

          <div className="relative hidden lg:block">
            <div className="absolute -inset-6 rounded-[48px] border border-[#42598b]/30" />

            <div className="relative overflow-hidden rounded-tl-[90px] rounded-br-[90px] border border-[#cab557]/45 bg-[#112752]/80 p-8 shadow-2xl">
              <div className="mb-7 flex items-center justify-between">
                <span className="text-sm tracking-[0.18em] text-[#cab557] uppercase">
                  MA Engineering Okara
                </span>

                <Factory className="text-[#f5e495]" size={34} />
              </div>

              <div className="grid min-h-97.5 place-items-center border border-[#42598b]/40 bg-[linear-gradient(145deg,#1b3565,#051535)] p-10 text-center">
                <div>
                  <div className="mx-auto flex h-32 w-32 items-center justify-center border-2 border-[#cab557] bg-[#112752] [clip-path:polygon(50%_0%,100%_100%,0%_100%)]">
                    <span className="mt-9 text-3xl font-black tracking-tight text-white">
                      MA
                    </span>
                  </div>

                  <h2 className="mt-8 text-3xl font-bold text-white">
                    Engineering excellence
                  </h2>

                  <p className="mx-auto mt-4 max-w-sm leading-7 text-slate-300">
                    Manufacturing sewing-machine spare parts with dependable
                    workmanship, practical machinery and careful inspection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Introduction panel */}

      <section className="px-6 py-20 lg:px-10">
        <div className="purple-panel mx-auto max-w-6xl rounded-tl-[55px] rounded-br-[55px] border border-[#cab557]/30 px-7 py-12 text-center sm:px-12">
          <p className="text-sm font-bold tracking-[0.18em] text-[#f5e495] uppercase">
            About MA Engineering
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold text-white sm:text-4xl">
            Traditional manufacturing knowledge combined with a modern
            commitment to quality.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-purple-100">
            Our workshop produces dependable sewing-machine components,
            industrial tools and precision-manufactured parts for businesses
            that require strength, accuracy and consistency.
          </p>
        </div>
      </section>

      {/* Statistics */}

      <section className="px-6 pb-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden border border-[#42598b]/40 bg-[#42598b]/40 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item) => (
            <article
              key={item.label}
              className="bg-[#112752]/95 px-7 py-9 text-center"
            >
              <p className="text-4xl font-black text-[#cab557]">
                {item.value}
              </p>

              <p className="mt-2 text-sm tracking-wide text-slate-300 uppercase">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}

      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold tracking-[0.2em] text-[#cab557] uppercase">
                What we manufacture
              </p>

              <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
                Our core services
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-slate-300">
              Production capabilities developed around practical engineering,
              industrial durability and reliable workmanship.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="industrial-card group relative overflow-hidden rounded-tl-[42px] rounded-br-[42px] p-8 transition duration-300"
                >
                  <div className="absolute top-0 right-0 flex h-14 w-16 items-center justify-center bg-[#a6862f] font-black text-[#051535]">
                    0{index + 1}
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center border border-[#cab557]/50 bg-[#1b3565] text-[#f5e495]">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-slate-300">
                    {service.description}
                  </p>

                  <Link
                    href="/production"
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-[#cab557] transition group-hover:text-[#f5e495]"
                  >
                    Learn more
                    <ArrowRight size={18} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}

      <section className="border-y border-[#42598b]/30 bg-[#051535]/65 px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-[#cab557] uppercase">
              Workshop capability
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              Production supported by practical machinery and skilled hands.
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-slate-300">
              MA Engineering Okara combines established machining methods with
              careful inspection to manufacture components for industrial
              sewing machines and related mechanical equipment.
            </p>

            <Link
              href="/machinery"
              className="mt-8 inline-flex items-center gap-3 border-b-2 border-[#cab557] pb-2 font-bold text-white"
            >
              View our machinery
              <ArrowRight size={19} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-center gap-4 border border-[#42598b]/45 bg-[#112752]/85 p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#a6862f] text-[#051535]">
                  <PackageCheck size={21} />
                </span>

                <span className="font-semibold text-white">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-tl-[65px] rounded-br-[65px] border border-[#cab557]/35 bg-[linear-gradient(110deg,#7a670f,#a6862f,#54468b)] px-7 py-14 text-center shadow-2xl sm:px-12">
          <h2 className="text-3xl font-black text-white sm:text-5xl">
            Explore our sewing-machine spare parts.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/85">
            View our manufactured components or contact our team for more
            information about product availability.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-3 bg-[#051535] px-8 py-4 font-bold text-white transition hover:bg-[#112752]"
            >
              View products
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/50 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#051535]"
            >
              Contact our team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}