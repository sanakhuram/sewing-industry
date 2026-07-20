"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cog, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[#07142f]">
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8 lg:pt-4">
        {/* Branding area */}

        <div className="flex min-h-20 items-center justify-between gap-4 bg-[#07142f] sm:min-h-24">
          <Link
            href="/"
            aria-label="Go to homepage"
            className="flex min-w-0 items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="M. A. Engineering logo"
              width={82}
              height={82}
              priority
              className="h-14 w-14 shrink-0 object-contain sm:h-18 sm:w-18 lg:h-20 lg:w-20"
            />

            {/* Mobile company name */}

            <div className="min-w-0 lg:hidden">
              <p className="truncate text-base font-bold tracking-wide text-white sm:text-lg">
                M. A. Engineering
              </p>

              <p className="mt-1 text-[9px] font-medium tracking-[0.27em] text-[#cab557] uppercase sm:text-[10px]">
                Private Limited
              </p>
            </div>
          </Link>

          {/* Desktop company name */}

          <Link href="/" className="hidden flex-1 text-center lg:block">
            <h1 className="text-2xl font-semibold tracking-wide text-white xl:text-3xl">
              M. A. Engineering
            </h1>

            <p className="mt-1 text-xs tracking-[0.3em] text-[#cab557] uppercase xl:text-sm">
              Private Limited
            </p>
          </Link>

          {/* Mobile menu button */}

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className={`flex h-11 w-11 shrink-0 items-center justify-center border transition lg:hidden ${
              open
                ? "border-[#f5e495] bg-[#f5e495] text-[#5c4c08]"
                : "border-[#cab557]/70 bg-transparent text-[#f5e495] hover:bg-[#112752]"
            }`}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop spacing balance */}

          <div className="hidden w-20 lg:block" />
        </div>

        {/* Desktop navigation */}

        <nav className="hidden overflow-hidden border-b-4 border-[#d7c178] bg-[#7a670f] lg:block">
          <div className="mx-auto flex max-w-6xl">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex min-h-14 flex-1 items-center justify-center border-r border-[#4f4308] px-4 text-center font-medium transition last:border-r-0 ${
                    active
                      ? "bg-[#f5e495] text-[#5c4c08]"
                      : "bg-[#7a670f] text-[#f6e8ae] hover:bg-[#946f18] hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Mobile block navigation */}

      {open && (
        <div className="border-t border-[#42598b]/40 bg-[#07142f] px-4 pt-3 pb-5 lg:hidden">
          <div className="mx-auto max-w-xl overflow-hidden border border-[#cab557]/45 bg-[#0b2048] shadow-[0_18px_50px_rgba(0,0,0,0.4)]">
            <nav className="grid grid-cols-2">
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`group relative flex min-h-24 flex-col justify-between border-r border-b p-4 transition ${
                      active
                        ? "border-[#d7c178] bg-[#f5e495] text-[#5c4c08]"
                        : "border-[#273f6d] bg-[#112752] text-[#f6e8ae] hover:bg-[#7a670f]"
                    }`}
                  >
                    {/* Gear icon */}

                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${
                          active
                            ? "border-[#5c4c08] bg-white/40"
                            : "border-[#cab557]/70 bg-[#091a3b] group-hover:border-[#f5e495] group-hover:bg-[#946f18]"
                        }`}
                      >
                        <Cog
                          size={20}
                          className={
                            active
                              ? "text-[#5c4c08]"
                              : "text-[#cab557] group-hover:text-white"
                          }
                        />
                      </div>

                      {active && (
                        <span className="h-2.5 w-2.5 rounded-full bg-[#5c4c08]" />
                      )}
                    </div>

                    {/* Menu title */}

                    <div className="mt-5">
                      <span className="text-sm font-semibold sm:text-base">
                        {item.name}
                      </span>
                    </div>

                    {/* Active bottom line */}

                    {active && (
                      <span className="absolute bottom-0 left-0 h-1 w-full bg-[#a6862f]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-[#cab557]/30 bg-[#091a3b] px-5 py-3 text-center">
              <p className="text-[10px] tracking-[0.18em] text-slate-500 uppercase">
                M. A. Engineering · Okara, Pakistan
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Desktop blue strip */}

      <div className="hidden h-8 border-t border-[#42598b]/40 bg-[#112752] lg:block" />
    </header>
  );
}