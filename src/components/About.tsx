"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experience = [
  {
    role: "Mobile / Product Engineer",
    company: "Interswitch Group",
    period: "Jul 2025 – Present",
    note: "SmartHealth telemedicine platform",
    accent: "#8b78f8",
  },
  {
    role: "Mobile / Product Engineer",
    company: "Geinny App (SCDHelper)",
    period: "Jan 2025 – Jun 2025",
    note: "Sickle Cell Disease health tracker with Google Gemini AI",
    accent: "#f87171",
  },
  {
    role: "Lead Product / Mobile Engineer",
    company: "SenjuLabs Technologies",
    period: "Dec 2023 – Aug 2024",
    note: "CampusGenie — offline-first AI exam prep for 63+ subjects",
    accent: "#2dd4bf",
  },
  {
    role: "Mobile Engineer",
    company: "Farmsmarter LTD",
    period: "Apr 2024 – Jul 2025",
    note: "GPS farm mapping for smallholder farmers in rural Nigeria",
    accent: "#a3e635",
  },
  {
    role: "Mobile Software Engineer",
    company: "Vant App Africa",
    period: "Jan 2023 – Feb 2024",
    note: "Fintech + AI-driven financial planning tool",
    accent: "#f59e0b",
  },
  {
    role: "Mobile Developer",
    company: "Flashride Nigeria",
    period: "Nov 2021 – Sep 2022",
    note: "FlashRide + FlashDriver ride-sharing from zero to production",
    accent: "#34d399",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 md:py-40 px-4 md:px-8 max-w-7xl mx-auto">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left — bio */}
        <div>
          {/* Avatar */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          >
            <div
              className="p-[2px] rounded-full w-max"
              style={{ background: "linear-gradient(135deg, rgba(139,120,248,0.5) 0%, rgba(45,212,191,0.3) 100%)" }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center relative overflow-hidden"
                style={{ background: "var(--surface-2)" }}
              >
                {/* Subtle radial glow inside */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ background: "radial-gradient(circle at 35% 35%, rgba(139,120,248,0.25) 0%, transparent 65%)" }}
                />
                <span
                  className="relative z-10 text-lg font-extrabold tracking-tight"
                  style={{ color: "var(--accent)" }}
                >
                  JA
                </span>
              </div>
            </div>
          </motion.div>

          <motion.span
            className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold mb-8"
            style={{
              background: "rgba(45,212,191,0.1)",
              border: "1px solid rgba(45,212,191,0.18)",
              color: "var(--accent-2)",
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            About
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-8"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          >
            I build the apps
            <br />
            <span style={{ color: "var(--text-muted)" }}>people actually use.</span>
          </motion.h2>

          <motion.div
            className="space-y-4 text-base leading-relaxed"
            style={{ color: "var(--text-muted)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
          >
            <p>
              I&apos;m <strong style={{ color: "var(--text)" }}>Jeffery Adolor</strong> — known as Kizarmie. A full-stack engineer
              who loves building mobile apps and structuring systems. 4+ years shipping production
              software across fintech, healthcare, agriculture, and education in Africa.
            </p>
            <p>
              On the mobile side I specialise in{" "}
              <strong style={{ color: "var(--text)" }}>React Native</strong> and{" "}
              <strong style={{ color: "var(--text)" }}>offline-first architectures</strong> — rare, hard-won on
              low-bandwidth hardware. On the backend I write{" "}
              <strong style={{ color: "var(--text)" }}>Node.js</strong> and handle the full API and auth layer myself.
            </p>
            <p>
              My second discipline is{" "}
              <strong style={{ color: "var(--text)" }}>embedded AI engineering</strong>: I build production
              multi-agent systems that sit inside existing SaaS platforms and let users act on complex
              data through natural language — not chatbots, not demos. Shipped in healthcare and fintech.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 mt-10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="mailto:jefferyadolor18@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold group transition-all duration-300"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              Get in touch
              <span
                className="flex items-center justify-center w-5 h-5 rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <a
              href="https://linkedin.com/in/jeffery-adolor"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "var(--text-muted)",
              }}
            >
              LinkedIn ↗
            </a>
          </motion.div>
        </div>

        {/* Right — experience timeline */}
        <div>
          <motion.p
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-8"
            style={{ color: "var(--text-subtle)" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Experience
          </motion.p>

          <div className="space-y-0">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="flex gap-4 pb-7 relative"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1], delay: 0.2 + i * 0.07 }}
              >
                {/* Timeline line */}
                <div className="flex flex-col items-center gap-1 pt-1.5">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: exp.accent }}
                  />
                  {i < experience.length - 1 && (
                    <div
                      className="w-px flex-1 min-h-[40px]"
                      style={{ background: "var(--border)" }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pb-2">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                      {exp.company}
                    </span>
                    <span className="text-[11px]" style={{ color: "var(--text-subtle)" }}>
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs font-medium mb-1" style={{ color: exp.accent }}>
                    {exp.role}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {exp.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
