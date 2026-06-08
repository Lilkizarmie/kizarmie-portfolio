"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const links = [
  { label: "Email", value: "jefferyadolor18@gmail.com", href: "mailto:jefferyadolor18@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/jeffery-adolor", href: "https://linkedin.com/in/jeffery-adolor" },
  { label: "Phone", value: "+234 814 953 4681", href: "tel:+2348149534681" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 md:py-40 px-4 md:px-8 max-w-7xl mx-auto">
      <div
        ref={ref}
        className="rounded-[2.5rem] overflow-hidden relative"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        {/* Inner glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(139,120,248,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 p-10 md:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.span
              className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold mb-8"
              style={{
                background: "rgba(139,120,248,0.1)",
                border: "1px solid rgba(139,120,248,0.18)",
                color: "var(--accent)",
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Get in touch
            </motion.span>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[0.95] mb-6"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
            >
              Let&apos;s build
              <br />
              <span style={{ color: "var(--text-muted)" }}>something real.</span>
            </motion.h2>

            <motion.p
              className="text-base leading-relaxed max-w-sm"
              style={{ color: "var(--text-muted)" }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Open to product engineering roles, React Native contracts, and interesting builds. Based in Lagos — remote-first.
            </motion.p>
          </div>

          {/* Right — links */}
          <div className="space-y-4">
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between p-5 rounded-2xl group transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--border)",
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1], delay: 0.2 + i * 0.08 }}
                whileHover={{ borderColor: "rgba(255,255,255,0.12)", backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-1" style={{ color: "var(--text-subtle)" }}>
                    {l.label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                    {l.value}
                  </p>
                </div>
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <svg width="11" height="11" viewBox="0 0 10 10" fill="none">
                    <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--text-muted)" }} />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 px-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="text-xs" style={{ color: "var(--text-subtle)" }}>
          © 2026 Jeffery Adolor (Kizarmie) · Lagos, Nigeria
        </p>
        <p className="text-xs" style={{ color: "var(--text-subtle)" }}>
          Built with Next.js & Framer Motion
        </p>
      </motion.div>
    </section>
  );
}
