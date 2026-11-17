"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, personal } from "@/constants";
import { Magnetic } from "@/components/motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] layout-pad transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <Magnetic strength={0.25}>
            <a
              href="#"
              className="font-display text-sm tracking-[0.12em] text-foreground sm:text-base"
              style={{ fontWeight: 800 }}
            >
              ABDULLAH
            </a>
          </Magnetic>

          <div className="flex items-center gap-2 sm:gap-3">
            <Magnetic strength={0.4}>
              <a
                href={`mailto:${personal.email}`}
                className="pill border border-foreground/20 bg-white px-4 py-2.5 text-foreground hover:bg-foreground hover:text-background"
              >
                Get in touch
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <button
                type="button"
                aria-expanded={open}
                aria-controls="site-menu"
                onClick={() => setOpen((v) => !v)}
                className="pill bg-foreground px-4 py-2.5 text-background hover:bg-foreground/85"
              >
                {open ? "Close" : "Menu"}
              </button>
            </Magnetic>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="site-menu"
            className="fixed inset-0 z-[55] bg-foreground text-background"
            initial={{ clipPath: "circle(0% at calc(100% - 4rem) 2.5rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 4rem) 2.5rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 4rem) 2.5rem)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="layout-pad flex h-full flex-col justify-between py-28">
              <nav className="mx-auto w-full max-w-[1400px]">
                <p className="mb-8 text-xs uppercase tracking-[0.2em] text-background/50">
                  Menu
                </p>
                <ul className="space-y-2">
                  {navLinks?.map?.((link, i) => (
                    <li key={link.href} className="overflow-hidden">
                      <motion.a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        initial={{ y: "110%" }}
                        animate={{ y: "0%" }}
                        transition={{
                          delay: 0.18 + i * 0.07,
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="font-display block text-4xl tracking-tight transition-opacity hover:opacity-70 sm:text-6xl md:text-7xl"
                        style={{ fontWeight: 700 }}
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mx-auto flex w-full max-w-[1400px] flex-wrap gap-6 text-sm text-background/60">
                <a href={personal.github} target="_blank" rel="noreferrer" className="hover:text-background">
                  GitHub
                </a>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-background">
                  LinkedIn
                </a>
                <a href={`mailto:${personal.email}`} className="hover:text-background">
                  {personal.email}
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
