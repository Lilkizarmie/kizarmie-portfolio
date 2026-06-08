"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: (index % 2) * 0.1 }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group relative rounded-[2rem] overflow-hidden block transition-transform duration-500 hover:-translate-y-1"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accent}60, transparent)` }}
        />

        <div className="p-7 md:p-9">
          {/* Top row */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono tracking-widest" style={{ color: "var(--text-subtle)" }}>
                {project.index}
              </span>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: project.accent }} />
              <span className="text-[11px] uppercase tracking-[0.15em] font-medium" style={{ color: "var(--text-subtle)" }}>
                {project.year}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {project.live && (
                <span
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                  style={{ background: "rgba(34,197,94,0.1)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.15)" }}
                >
                  <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                  Live
                </span>
              )}
              {/* Arrow icon */}
              <div
                className="flex items-center justify-center w-7 h-7 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid var(--border)" }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--text-muted)" }} />
                </svg>
              </div>
            </div>
          </div>

          <p className="text-xs uppercase tracking-[0.15em] font-medium mb-3" style={{ color: project.accent }}>
            {project.category}
          </p>

          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4" style={{ color: "var(--text)" }}>
            {project.name}
          </h3>

          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full text-[11px] font-medium"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "var(--text-muted)" }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-[2rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at 20% 80%, ${project.accent}07 0%, transparent 60%)` }}
        />
      </Link>
    </motion.div>
  );
}

export default function Work() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="work" className="py-32 md:py-40 px-4 md:px-8 max-w-7xl mx-auto">
      <div ref={headRef} className="mb-16 md:mb-20">
        <motion.span
          className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold mb-6"
          style={{ background: "rgba(139,120,248,0.1)", border: "1px solid rgba(139,120,248,0.18)", color: "var(--accent)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        >
          Selected Work
        </motion.span>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[0.95]"
            initial={{ opacity: 0, y: 24 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          >
            Apps shipped.
            <br />
            <span style={{ color: "var(--text-muted)" }}>Not demos.</span>
          </motion.h2>

          <motion.p
            className="text-sm max-w-xs leading-relaxed"
            style={{ color: "var(--text-muted)" }}
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Every project here is live on the App Store or Google Play, used by real people across Africa.
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
