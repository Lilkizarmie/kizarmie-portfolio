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

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 1v1.5M7 11.5V13M1 7h1.5M11.5 7H13M2.93 2.93l1.06 1.06M10.01 10.01l1.06 1.06M2.93 11.07l1.06-1.06M10.01 3.99l1.06-1.06" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M12 8.5A5.5 5.5 0 015.5 2a5.5 5.5 0 100 10A5.5 5.5 0 0012 8.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);

  // Initialise theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark =
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(prefersDark);
    document.documentElement.classList.toggle("light", !prefersDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("light", !next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

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
        className="fixed top-5 left-1/2 z-50"
        style={{ x: "-50%" }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
      >
        <div
          className="flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-300"
          style={{
            background: scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid var(--nav-border)",
            boxShadow: "var(--nav-shadow)",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 rounded-full mr-1 text-xs font-bold tracking-tight flex-shrink-0"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            K
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-full ml-1 transition-all duration-200"
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
            }}
            aria-label="Toggle theme"
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Hire me CTA */}
          <a
            href="mailto:jefferyadolor18@gmail.com"
            className="hidden md:flex items-center gap-2 pl-4 pr-2 py-1.5 rounded-full text-sm font-semibold ml-1 group transition-all duration-200 whitespace-nowrap flex-shrink-0"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            Hire me
            <span
              className="flex items-center justify-center w-5 h-5 rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ background: "rgba(255,255,255,0.2)" }}
            >
              <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

          {/* Mobile: theme + hamburger */}
          <div className="md:hidden flex items-center gap-1 ml-1">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
              }}
              aria-label="Toggle theme"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="flex flex-col items-center justify-center w-8 h-8 gap-1.5"
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
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
            style={{
              background: "var(--bg)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col items-center gap-7">
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
