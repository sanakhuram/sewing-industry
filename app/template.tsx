"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const elements = page.querySelectorAll<HTMLElement>(
      "main > section, main > .gold-divider",
    );

    elements.forEach((element, index) => {
      element.classList.remove("page-item-enter");

      element.style.setProperty(
        "--animation-delay",
        `${index * 140}ms`,
      );

      void element.offsetWidth;

      element.classList.add("page-item-enter");
    });

    return () => {
      elements.forEach((element) => {
        element.classList.remove("page-item-enter");
        element.style.removeProperty("--animation-delay");
      });
    };
  }, [pathname]);

  return (
    <div ref={pageRef} key={pathname}>
      {children}
    </div>
  );
}