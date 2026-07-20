import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#112752] text-white">
      {/* Page heading */}
      <section className="border-b border-[#42598b]/40 px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold tracking-[0.25em] text-[#cab557] uppercase">
            Get in touch
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Contact M. A. Engineering for sewing-machine components,
            industrial tools, production services and custom engineering
            enquiries.
          </p>
        </div>
      </section>

      {/* Contact details and form */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact information */}
          <aside className="border border-[#42598b]/50 bg-[#07142f] p-7 sm:p-9">
            <h2 className="text-2xl font-bold text-[#f5e495]">
              M. A. Engineering
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Send us your product requirements, drawings, specifications or
              samples. Our team will review your enquiry and contact you.
            </p>

            <div className="mt-9 space-y-7">
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#7a670f] text-[#f5e495]">
                  <MapPin size={22} />
                </span>

                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="mt-1 text-slate-300">
                    Okara, Punjab, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#7a670f] text-[#f5e495]">
                  <Phone size={22} />
                </span>

                <div>
                  <h3 className="font-semibold text-white">Telephone</h3>
                  <p className="mt-1 text-slate-300">
                    Add company phone number
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#7a670f] text-[#f5e495]">
                  <Mail size={22} />
                </span>

                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="mt-1 text-slate-300">
                    Add company email address
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Contact form */}
          <div className="border border-[#cab557]/40 bg-[#1b3565] p-7 sm:p-9">
            <h2 className="text-2xl font-bold">Send an enquiry</h2>

            <form className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-[#f5e495]"
                  >
                    Full name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border border-[#42598b] bg-[#07142f] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#cab557]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-semibold text-[#f5e495]"
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full border border-[#42598b] bg-[#07142f] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#cab557]"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#f5e495]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-[#42598b] bg-[#07142f] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#cab557]"
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-[#f5e495]"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full border border-[#42598b] bg-[#07142f] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#cab557]"
                    placeholder="+92..."
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-[#f5e495]"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full border border-[#42598b] bg-[#07142f] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#cab557]"
                  placeholder="Product or service enquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#f5e495]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full resize-none border border-[#42598b] bg-[#07142f] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#cab557]"
                  placeholder="Write your requirements..."
                />
              </div>

              <button
                type="submit"
                className="bg-[#a6862f] px-8 py-4 font-bold text-[#07142f] transition hover:bg-[#f5e495]"
              >
                Submit enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Single location */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5 bg-[#7a670f] py-2 text-center">
            <h2 className="font-semibold text-[#f5e495]">
              Find Us
            </h2>
          </div>

          <div className="overflow-hidden border border-[#42598b]/50">
            <iframe
              title="M. A. Engineering location in Okara"
              src="https://www.google.com/maps?q=Okara%2C%20Punjab%2C%20Pakistan&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              className="block w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Centred logo */}
      <section className="border-t border-[#42598b]/40 bg-[#07142f] px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <Image
            src="/logo.png"
            alt="M. A. Engineering logo"
            width={110}
            height={110}
            className="h-27.5 w-27.5 object-contain"
          />

          <h2 className="mt-5 text-xl font-semibold">
            M. A. Engineering (Private) Limited
          </h2>

          <p className="mt-2 text-sm text-[#cab557]">
            Okara, Punjab, Pakistan
          </p>
        </div>
      </section>
    </main>
  );
}