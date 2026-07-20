"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 bg-[#07142f]">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        {/* Top branding area */}
        <div className="flex min-h-24 items-center justify-between bg-[#07142f] px-3 sm:px-5">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Go to homepage"
          >
            <Image
              src="/logo.png"
              alt="M. A. Engineering logo"
              width={82}
              height={82}
              priority
              className="h-18 w-18 object-contain sm:h-20.5 sm:w-20.5"
            />
          </Link>

          <Link
            href="/"
            className="hidden flex-1 text-center sm:block"
          >
            <h1 className="text-2xl font-semibold tracking-wide text-white lg:text-3xl">
              M. A. Engineering
            </h1>

            <p className="mt-1 text-xs tracking-[0.3em] text-[#cab557] uppercase lg:text-sm">
              Private Limited
            </p>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center border border-[#cab557]/50 text-[#f5e495] transition hover:bg-[#112752] lg:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile company title */}
        <div className="pb-4 text-center sm:hidden">
          <h1 className="text-lg font-semibold tracking-wide text-white">
            M. A. Engineering
          </h1>

          <p className="mt-1 text-[10px] tracking-[0.25em] text-[#cab557] uppercase">
            Private Limited
          </p>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden border-b-4 border-[#d7c178] bg-[#7a670f] lg:block">
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
                      : "bg-[#7a670f] text-[#f6e8ae] hover:bg-[#946300]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Mobile navigation */}
        {open && (
          <nav className="border-t border-[#42598b] bg-[#112752] lg:hidden">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-[#273f6d] px-6 py-4 text-center font-medium transition ${
                    active
                      ? "bg-[#f5e495] text-[#5c4c08]"
                      : "text-[#f6e8ae] hover:bg-[#1b3565]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        )}
      </div>

      {/* Blue strip under navigation */}
      <div className="h-10 border-t border-[#42598b]/40 bg-[#112752]" />
    </header>
  );
}