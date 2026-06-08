"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAndNav = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* Floating pill nav */}
      <motion.nav
        className="fixed top-6 left-1/2 z-50"
        style={{ x: "-50%" }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
      >
        <div
          className="flex items-center gap-1 px-2 py-2 rounded-full transition-all"
          style={{
            background: scrolled ? "rgba(16,16,16,0.85)" : "rgba(16,16,16,0.6)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)"
              : "0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Logo mark */}
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 rounded-full mr-1 text-xs font-bold tracking-tight"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            K
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="mailto:jefferyadolor18@gmail.com"
            className="hidden md:flex items-center gap-2 pl-4 pr-2 py-1.5 rounded-full text-sm font-semibold ml-1 group transition-all duration-300"
            style={{
              background: "var(--accent)",
              color: "#fff",
            }}
          >
            Hire me
            <span
              className="flex items-center justify-center w-5 h-5 rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ background: "rgba(255,255,255,0.2)" }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5 ml-1"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="block w-4 h-px rounded-full"
              style={{ background: "var(--text)", transformOrigin: "center" }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="block w-4 h-px rounded-full"
              style={{ background: "var(--text)", transformOrigin: "center" }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
            style={{ background: "rgba(8,8,8,0.97)", backdropFilter: "blur(24px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((l, i) => (
                <motion.button
                  key={l.label}
                  onClick={() => closeAndNav(l.href)}
                  className="text-4xl font-bold tracking-tight"
                  style={{ color: "var(--text)" }}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 24, opacity: 0 }}
                  transition={{ delay: i * 0.06 + 0.05, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.a
                href="mailto:jefferyadolor18@gmail.com"
                className="mt-4 px-8 py-3 rounded-full text-base font-semibold"
                style={{ background: "var(--accent)", color: "#fff" }}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 24, opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              >
                Say hello →
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
