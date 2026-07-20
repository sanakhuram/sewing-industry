import Image from "next/image";

const values = [
  "Quality",
  "Precision",
  "Integrity",
  "Reliability",
  "Customer satisfaction",
  "Continuous improvement",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#112752] text-white">
      {/* Hero image */}
      <section className="relative min-h-115 overflow-hidden">
        <Image
          src="/about/about-hero.png"
          alt="Engineering team reviewing manufacturing plans"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#07142f] via-[#07142f]/30 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 px-6 pb-10">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-sm font-bold tracking-[0.22em] text-[#cab557] uppercase">
              M. A. Engineering
            </p>

            <h1 className="mt-3 text-4xl font-bold text-[#f5e495] sm:text-6xl">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Company introduction */}
      <section className="px-5 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-tl-[42px] rounded-br-[42px] border border-[#cab557]/45 bg-[#7a670f]/85 px-7 py-10 text-center shadow-xl sm:px-12">
          <p className="mx-auto max-w-4xl leading-8 text-[#fff8d3]">
            M. A. Engineering (Private) Limited is a manufacturing company
            based in Okara, Pakistan. We produce sewing-machine components,
            precision metal parts and custom-engineered products using practical
            experience, traditional machining knowledge and careful quality
            control.
          </p>
        </div>
      </section>

      {/* Story and mission */}
      <section className="px-5 py-10 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <article className="flex flex-col justify-center rounded-tl-[38px] rounded-br-[38px] border border-[#42598b]/50 bg-[#1b3565] p-8 sm:p-10">
            <p className="text-sm font-bold tracking-[0.2em] text-[#cab557] uppercase">
              Our story
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#f5e495]">
              Built on practical engineering experience
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              The company developed around the manufacture of sewing-machine
              components and related mechanical parts. Over time, its workshop
              capabilities expanded through machining, grinding, fitting,
              assembly and custom production.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Our work is based on consistency, dependable workmanship and a
              long-term commitment to customer requirements.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-tl-[38px] rounded-br-[38px] border border-[#786ead]/70 bg-[#54468b] p-8 shadow-xl sm:p-10">
            <div className="absolute inset-4 rounded-tl-[28px] rounded-br-[28px] border border-white/35" />

            <div className="relative z-10">
              <p className="text-sm font-bold tracking-[0.2em] text-[#f5e495] uppercase">
                Our mission
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white">
                To provide dependable engineering products
              </h2>

              <p className="mt-6 leading-8 text-purple-100">
                Our mission is to manufacture reliable sewing-machine
                components and custom metal parts through disciplined
                production, careful inspection and continuous improvement.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Vision */}
      <section className="px-5 py-10 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="relative overflow-hidden rounded-tl-[48px] rounded-br-[48px] border border-[#cab557]/55 bg-[#7a670f] p-8 shadow-xl sm:p-10">
            <div className="absolute inset-5 rounded-tl-[36px] rounded-br-[36px] border border-[#f5e495]/45 bg-[#946300]/45" />

            <div className="relative z-10">
              <p className="text-sm font-bold tracking-[0.2em] text-[#f5e495] uppercase">
                Our vision
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white">
                To become a trusted name in sewing-machine component
                manufacturing
              </h2>

              <p className="mt-6 leading-8 text-[#fff8d3]">
                We aim to grow through better production methods, stronger
                quality systems and dependable service while preserving the
                practical engineering knowledge on which the company was built.
              </p>
            </div>
          </article>

          <article className="flex items-center rounded-tl-[48px] rounded-br-[48px] border border-[#42598b]/50 bg-[#112752] p-8 sm:p-10">
            <blockquote className="text-xl leading-9 text-slate-200">
              “Original and honest engineering work creates trust. Our goal is
              to provide products that customers can rely on.”
            </blockquote>
          </article>
        </div>
      </section>

      {/* Values */}
      <section className="px-5 py-10 sm:px-6">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-tl-[48px] rounded-br-[48px] border border-[#786ead]/65 bg-[#54468b] px-7 py-12 shadow-xl sm:px-12">
          <div className="absolute inset-4 rounded-tl-[36px] rounded-br-[36px] border border-white/30" />

          <div className="relative z-10 text-center">
            <p className="text-sm font-bold tracking-[0.2em] text-[#f5e495] uppercase">
              Our values
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Principles that guide our work
            </h2>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value}
                  className="border border-white/20 bg-[#392a71]/55 px-5 py-4 font-semibold text-purple-50"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chairman message */}
      <section className="px-5 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <article className="relative overflow-hidden rounded-tl-[110px] rounded-br-[110px] border border-[#cab557]/55 bg-[#6a7fa7] px-7 py-14 shadow-xl sm:px-14">
            <div className="absolute inset-4 rounded-tl-[95px] rounded-br-[95px] border border-white/30" />

            <div className="relative z-10 text-center">
              <p className="text-sm font-bold tracking-[0.2em] text-[#f5e495] uppercase">
                Message from Chairman
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white">
                Building trust through quality and commitment
              </h2>

              <div className="mx-auto mt-7 max-w-4xl space-y-5 leading-8 text-slate-100">
                <p>
                  Our highest priority is to understand the needs of our
                  customers and build long-term relationships based on reliable
                  products, honest communication and practical engineering
                  support.
                </p>

                <p>
                  We value our workforce and aim to provide a safe, respectful
                  and productive environment in which people can develop their
                  skills and contribute to the company’s future.
                </p>

                <p>
                  Through continuous improvement and responsible manufacturing,
                  we intend to strengthen M. A. Engineering as a dependable
                  industrial partner.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Quality commitment */}
      <section className="px-5 pb-20 pt-8 sm:px-6">
        <div className="mx-auto max-w-6xl border-t border-[#42598b]/50 pt-10">
          <p className="text-sm font-bold tracking-[0.2em] text-[#cab557] uppercase">
            Quality commitment
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Careful production and continuous improvement
          </h2>

          <p className="mt-6 max-w-5xl leading-8 text-slate-300">
            We are committed to maintaining dependable workmanship, checking
            product quality and improving our production methods. Our objective
            is to reduce defects, use resources responsibly and provide
            customers with components that meet agreed requirements.
          </p>
        </div>
      </section>
    </main>
  );
}