"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/lib/projects";
import Nav from "@/components/Nav";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
};

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="relative min-h-[100dvh]">
      {/* Grain */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          pointerEvents: "none",
          opacity: 0.025,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <Nav />

      {/* Hero band */}
      <section
        className="relative pt-36 pb-20 px-4 md:px-8 overflow-hidden"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        {/* Accent orb */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 600,
            height: 600,
            top: "-10%",
            right: "-5%",
            background: `radial-gradient(circle, ${project.accent}14 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Back link */}
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.05 }}>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm mb-10 transition-colors duration-200 group"
              style={{ color: "var(--text-muted)" }}
            >
              <span
                className="flex items-center justify-center w-7 h-7 rounded-full transition-transform duration-300 group-hover:-translate-x-0.5"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid var(--border)" }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M8 2L2 8M2 8H7M2 8V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              All projects
            </Link>
          </motion.div>

          {/* Meta row */}
          <motion.div
            className="flex flex-wrap items-center gap-3 mb-6"
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span
              className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold"
              style={{
                background: `${project.accent}14`,
                border: `1px solid ${project.accent}28`,
                color: project.accent,
              }}
            >
              {project.category}
            </span>
            <span className="text-xs font-mono" style={{ color: "var(--text-subtle)" }}>
              {project.year}
            </span>
            {project.live && (
              <span
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                style={{
                  background: "rgba(34,197,94,0.1)",
                  color: "#22c55e",
                  border: "1px solid rgba(34,197,94,0.15)",
                }}
              >
                <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                Live
              </span>
            )}
          </motion.div>

          {/* Title */}
          <motion.h1
            className="font-extrabold tracking-tight leading-[0.92] mb-6"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
            {...fadeUp}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.15 }}
          >
            {project.name}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{ color: "var(--text-muted)" }}
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {project.tagline}
          </motion.p>

          {/* Role / company strip */}
          <motion.div
            className="flex flex-wrap gap-6 mt-10 pt-10"
            style={{ borderTop: "1px solid var(--border)" }}
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {[
              { label: "Role", value: project.role },
              { label: "Company", value: project.company },
              { label: "Year", value: project.year },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-1" style={{ color: "var(--text-subtle)" }}>
                  {item.label}
                </p>
                <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Body content */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-20 space-y-20">

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <SectionLabel>Overview</SectionLabel>
          <p className="text-base md:text-lg leading-relaxed max-w-3xl" style={{ color: "var(--text-muted)" }}>
            {project.description}
          </p>
        </motion.section>

        {/* Challenge + Solution side by side */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <div
            className="rounded-[1.75rem] p-7 md:p-9"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <SectionLabel>The Challenge</SectionLabel>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {project.challenge}
            </p>
          </div>
          <div
            className="rounded-[1.75rem] p-7 md:p-9"
            style={{
              background: `${project.accent}08`,
              border: `1px solid ${project.accent}18`,
            }}
          >
            <SectionLabel color={project.accent}>The Solution</SectionLabel>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {project.solution}
            </p>
          </div>
        </motion.section>

        {/* Impact */}
        <motion.section
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <SectionLabel>Impact & Contributions</SectionLabel>
          <div className="space-y-3">
            {project.impact.map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-4 items-start p-5 rounded-2xl"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${project.accent}18` }}
                >
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke={project.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stack */}
        <motion.section
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <SectionLabel>Tech Stack</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "var(--text-muted)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </motion.section>

        {/* App Store links */}
        {(project.appStore || project.playStore) && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Download</SectionLabel>
            <div className="flex flex-wrap gap-3">
              {project.appStore && (
                <a
                  href={project.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl text-sm font-semibold group transition-all duration-200"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  {/* Apple icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--text-muted)" }}>
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.12em] font-medium" style={{ color: "var(--text-subtle)" }}>Download on the</p>
                    <p className="font-bold leading-tight">App Store</p>
                  </div>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
              {project.playStore && (
                <a
                  href={project.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl text-sm font-semibold group transition-all duration-200"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  {/* Play Store icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--text-muted)" }}>
                    <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8zM5 6.8v10.4l8-5.2-8-5.2z"/>
                  </svg>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.12em] font-medium" style={{ color: "var(--text-subtle)" }}>Get it on</p>
                    <p className="font-bold leading-tight">Google Play</p>
                  </div>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          </motion.section>
        )}

        {/* Next / prev navigation */}
        <motion.div
          className="pt-10"
          style={{ borderTop: "1px solid var(--border)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium group transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
          >
            <span
              className="flex items-center justify-center w-7 h-7 rounded-full transition-transform duration-300 group-hover:-translate-x-0.5"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid var(--border)" }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M8 2L2 8M2 8H7M2 8V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Back to all projects
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

function SectionLabel({ children, color }: { children: string; color?: string }) {
  return (
    <p
      className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-5"
      style={{ color: color ?? "var(--text-subtle)" }}
    >
      {children}
    </p>
  );
}
