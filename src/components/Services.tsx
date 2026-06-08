"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const agentFlow = [
  { label: "Guard", desc: "Safety & auth", color: "#f87171" },
  { label: "Classify", desc: "Intent routing", color: "#f59e0b" },
  { label: "Specialist Agents", desc: "Domain experts", color: "#8b78f8" },
  { label: "Your API", desc: "Existing platform", color: "#2dd4bf" },
];

const mobileFeatures = [
  "Offline-first architecture (Realm, SQLite)",
  "Real-time video & audio (Stream SDK)",
  "GPS + maps integration",
  "App Store & Play Store deployment",
  "Biometric auth, push notifications",
  "CI/CD with GitHub Actions",
];

const aiFeatures = [
  "Multi-agent orchestration on your existing API",
  "Natural language over your platform's data",
  "Guard + classify + specialist agent pattern",
  "Tool use, function calling, RAG pipelines",
  "Embedded in your existing auth & UI",
  "Shipped in healthcare and fintech — reference implementations",
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-32 md:py-40 px-4 md:px-8 max-w-7xl mx-auto">
      <div ref={ref}>
        {/* Header */}
        <div className="mb-16 md:mb-20">
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
            What I Build
          </motion.span>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[0.95]"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
            >
              Two disciplines.
              <br />
              <span style={{ color: "var(--text-muted)" }}>One engineer.</span>
            </motion.h2>
            <motion.p
              className="text-sm max-w-xs leading-relaxed"
              style={{ color: "var(--text-muted)" }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I write the mobile app, the backend, and the AI layer. No hand-offs between specialisms.
            </motion.p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">

          {/* Card 1 — Mobile */}
          <motion.div
            className="rounded-[2rem] p-8 md:p-10 relative overflow-hidden"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
          >
            {/* Accent orb */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: 400,
                height: 400,
                top: "-20%",
                right: "-10%",
                background: "radial-gradient(circle, rgba(139,120,248,0.1) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            <div className="relative z-10">
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-8"
                style={{ background: "rgba(139,120,248,0.12)", border: "1px solid rgba(139,120,248,0.2)" }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="6" y="1" width="10" height="20" rx="2" stroke="#8b78f8" strokeWidth="1.4" />
                  <circle cx="11" cy="18" r="1" fill="#8b78f8" />
                </svg>
              </div>

              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-3" style={{ color: "var(--accent)" }}>
                Service 01
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                Mobile Product Engineering
              </h3>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                End-to-end React Native apps for real users — offline-first, production-grade, deployed to
                both stores. I own architecture through App Store review.
              </p>

              <ul className="space-y-2.5">
                {mobileFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(139,120,248,0.15)" }}
                    >
                      <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4L3.5 6L6.5 2" stroke="#8b78f8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm" style={{ color: "var(--text-muted)" }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 2 — AI Integration */}
          <motion.div
            className="rounded-[2rem] p-8 md:p-10 relative overflow-hidden"
            style={{
              background: "rgba(245,158,11,0.04)",
              border: "1px solid rgba(245,158,11,0.14)",
            }}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.3 }}
          >
            <div
              className="absolute pointer-events-none"
              style={{
                width: 400,
                height: 400,
                bottom: "-20%",
                left: "-10%",
                background: "radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            <div className="relative z-10">
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-8"
                style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.22)" }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="3" stroke="#f59e0b" strokeWidth="1.4" />
                  <path d="M11 2v3M11 17v3M2 11h3M17 11h3M4.22 4.22l2.12 2.12M15.66 15.66l2.12 2.12M4.22 17.78l2.12-2.12M15.66 6.34l2.12-2.12" stroke="#f59e0b" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>

              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-3" style={{ color: "#f59e0b" }}>
                Service 02
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                Embedded AI Engineering
              </h3>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                I add a conversational intelligence layer to your existing SaaS — your APIs, your auth,
                your stack. Users act on your platform&apos;s data through natural language. Not a chatbot. Not
                a demo. Production multi-agent systems.
              </p>

              <ul className="space-y-2.5 mb-8">
                {aiFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(245,158,11,0.15)" }}
                    >
                      <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4L3.5 6L6.5 2" stroke="#f59e0b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm" style={{ color: "var(--text-muted)" }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Agent flow diagram */}
              <div
                className="rounded-2xl p-5"
                style={{ background: "rgba(0,0,0,0.25)", border: "1px solid rgba(245,158,11,0.1)" }}
              >
                <p className="text-[9px] uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: "var(--text-subtle)" }}>
                  The architecture pattern
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  {agentFlow.map((node, i) => (
                    <div key={node.label} className="flex items-center gap-2">
                      <div
                        className="px-3 py-1.5 rounded-xl"
                        style={{
                          background: `${node.color}12`,
                          border: `1px solid ${node.color}28`,
                        }}
                      >
                        <p className="text-[10px] font-semibold" style={{ color: node.color }}>
                          {node.label}
                        </p>
                        <p className="text-[9px]" style={{ color: "var(--text-subtle)" }}>
                          {node.desc}
                        </p>
                      </div>
                      {i < agentFlow.length - 1 && (
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                          <path d="M1 5h9M7 1l4 4-4 4" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom pitch strip */}
        <motion.div
          className="rounded-[2rem] p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.45 }}
        >
          <div>
            <p className="text-sm font-semibold mb-1" style={{ color: "var(--text)" }}>
              Already shipped in production. Not learning on your budget.
            </p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Reference implementations in healthcare and fintech. The skeleton is proven — I adapt it to your domain.
            </p>
          </div>
          <a
            href="mailto:jefferyadolor18@gmail.com"
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm group transition-all duration-300"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            Let&apos;s talk
            <span
              className="flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ background: "rgba(255,255,255,0.2)" }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
