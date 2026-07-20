"use client";

import Image from "next/image";
import { Cog } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";

export default function IntroSplash() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [opening, setOpening] = useState(false);

  const openingTimerRef = useRef<number | null>(null);
  const closingTimerRef = useRef<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    openingTimerRef.current = window.setTimeout(() => {
      setOpening(true);
    }, 2400);

    closingTimerRef.current = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = previousOverflow;
    }, 3400);

    return () => {
      if (openingTimerRef.current) {
        window.clearTimeout(openingTimerRef.current);
      }

      if (closingTimerRef.current) {
        window.clearTimeout(closingTimerRef.current);
      }

      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const enterWebsite = () => {
    if (opening) return;

    setOpening(true);

    if (openingTimerRef.current) {
      window.clearTimeout(openingTimerRef.current);
    }

    if (closingTimerRef.current) {
      window.clearTimeout(closingTimerRef.current);
    }

    closingTimerRef.current = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 900);
  };

  if (!mounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.25,
            },
          }}
          className="fixed inset-0 isolate overflow-hidden bg-[#051535]"
          style={{
            zIndex: 2147483647,
          }}
        >
          {/* Left factory door */}

          <motion.div
            aria-hidden="true"
            initial={{ x: "0%" }}
            animate={{
              x: opening ? "-100%" : "0%",
            }}
            transition={{
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute inset-y-0 left-0 z-20 w-1/2 border-r border-[#cab557]/30 bg-[#07142f]"
          >
            <div className="intro-grid absolute inset-0 opacity-60" />

            <div className="absolute top-0 right-0 h-full w-px bg-[#cab557]/25" />

            <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full border border-[#42598b]/35" />

            <div className="absolute -bottom-14 -left-14 h-52 w-52 rounded-full border border-[#cab557]/15" />
          </motion.div>

          {/* Right factory door */}

          <motion.div
            aria-hidden="true"
            initial={{ x: "0%" }}
            animate={{
              x: opening ? "100%" : "0%",
            }}
            transition={{
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute inset-y-0 right-0 z-20 w-1/2 border-l border-[#cab557]/30 bg-[#07142f]"
          >
            <div className="intro-grid absolute inset-0 opacity-60" />

            <div className="absolute top-0 left-0 h-full w-px bg-[#cab557]/25" />

            <div className="absolute -right-40 -bottom-40 h-107.5 w-107.5 rounded-full border border-[#42598b]/35" />

            <div className="absolute -right-20 -bottom-20 h-75 w-75 rounded-full border border-[#cab557]/15" />
          </motion.div>

          {/* Intro content */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: opening ? 0 : 1,
              scale: opening ? 1.08 : 1,
            }}
            transition={{
              duration: opening ? 0.35 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 z-30 flex items-center justify-center px-6"
          >
            <div className="flex flex-col items-center text-center">
              {/* Logo */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.75,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-8 rounded-full border border-dashed border-[#cab557]/30"
                />

                <div className="absolute -inset-4 rounded-full border border-[#cab557]/30" />

                <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-[#cab557]/50 bg-[#0b2048] shadow-[0_0_80px_rgba(202,181,87,0.18)] sm:h-44 sm:w-44">
                  <Image
                    src="/logo.png"
                    alt="M. A. Engineering logo"
                    width={150}
                    height={150}
                    priority
                    className="h-28 w-28 object-contain sm:h-36 sm:w-36"
                  />
                </div>
              </motion.div>

              {/* Company name */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 22,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-9"
              >
                <p className="text-[10px] font-bold tracking-[0.35em] text-[#cab557] uppercase sm:text-xs">
                  Precision manufacturing
                </p>

                <h1 className="mt-4 text-3xl font-black tracking-wide text-white sm:text-5xl">
                  M. A. Engineering
                </h1>

                <p className="mt-3 text-[10px] font-semibold tracking-[0.4em] text-[#cab557] uppercase sm:text-xs">
                  Private Limited
                </p>
              </motion.div>

              {/* Rotating gear */}

              <motion.button
                type="button"
                onClick={enterWebsite}
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: 1.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className="group mt-10 flex flex-col items-center gap-3"
                aria-label="Enter M. A. Engineering website"
              >
                <span className="relative flex h-17 w-17 items-center justify-center rounded-full border border-[#cab557]/70 bg-[#112752] shadow-[0_0_35px_rgba(202,181,87,0.2)] transition duration-300 group-hover:border-[#f5e495] group-hover:bg-[#7a670f]">
                  <motion.span
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Cog
                      size={38}
                      strokeWidth={1.7}
                      className="text-[#cab557] transition duration-300 group-hover:text-white"
                    />
                  </motion.span>
                </span>

                <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase transition group-hover:text-[#f5e495]">
                  Enter website
                </span>
              </motion.button>

              {/* Loading line */}

              <div className="mt-9 h-px w-56 overflow-hidden bg-[#42598b]/45">
                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 2.2,
                    delay: 0.35,
                    ease: "easeInOut",
                  }}
                  className="h-full origin-left bg-[#cab557]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}