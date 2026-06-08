"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    label: "Mobile",
    skills: ["React Native", "Expo SDK", "CodePush / OTA", "App Store", "Play Store"],
    accent: "#8b78f8",
  },
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "HTML5 / CSS3"],
    accent: "#2dd4bf",
  },
  {
    label: "AI & ML",
    skills: ["OpenAI API", "Google Gemini API"],
    accent: "#f59e0b",
  },
  {
    label: "State & Data",
    skills: ["Redux Toolkit", "TanStack Query", "Context API"],
    accent: "#a3e635",
  },
  {
    label: "Backend & API",
    skills: ["Node.js", "Laravel", "REST APIs", "GraphQL", "JWT", "Firebase"],
    accent: "#f87171",
  },
  {
    label: "Real-time & Payments",
    skills: ["Stream Chat SDK", "Stream Video SDK", "Stripe", "Paystack"],
    accent: "#34d399",
  },
  {
    label: "Auth & Storage",
    skills: ["Firebase Auth", "Biometrics (Face ID / Touch ID)", "Realm", "AsyncStorage", "SQLite"],
    accent: "#e879f9",
  },
  {
    label: "Maps & Infra",
    skills: ["Google Maps SDK", "GPS Mapping", "GitHub Actions", "Mixpanel", "Sentry"],
    accent: "#60a5fa",
  },
];

export default function Stack() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stack" className="py-32 md:py-40 px-4 md:px-8 max-w-7xl mx-auto">
      <div ref={ref}>
        {/* Header */}
        <div className="mb-16">
          <motion.span
            className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold mb-6"
            style={{
              background: "rgba(139,120,248,0.1)",
              border: "1px solid rgba(139,120,248,0.18)",
              color: "var(--accent)",
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Tech Stack
          </motion.span>

          <motion.h2
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[0.95]"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          >
            Tools that ship
            <br />
            <span style={{ color: "var(--text-muted)" }}>real products.</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              className="rounded-[1.75rem] p-6"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.15 + i * 0.05 }}
              whileHover={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              {/* Category dot + label */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ background: cat.accent }} />
                <span
                  className="text-[11px] uppercase tracking-[0.15em] font-semibold"
                  style={{ color: cat.accent }}
                >
                  {cat.label}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-2.5">
                {cat.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div
                      className="w-px h-3 rounded-full flex-shrink-0"
                      style={{ background: "var(--border-hover)" }}
                    />
                    <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
