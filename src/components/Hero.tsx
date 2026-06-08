"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const roles = ["React Native", "Product Engineer", "App Builder", "AI Integrator"];

const stats = [
  { value: "4+", label: "Years shipping" },
  { value: "8+", label: "Live apps" },
  { value: "5", label: "Industries" },
];

function AnimatedWord({ word, delay }: { word: string; delay: number }) {
  return (
    <span className="inline-block overflow-hidden leading-none">
      <motion.span
        className="inline-block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1], delay }}
      >
        {word}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  // Orb mouse parallax
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(${x * -0.6}px, ${y * -0.6}px)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-[100dvh] px-4 overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          ref={orb1Ref}
          className="absolute rounded-full"
          style={{
            width: 700,
            height: 700,
            top: "10%",
            left: "30%",
            background: "radial-gradient(circle, rgba(139,120,248,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
            transition: "transform 0.8s cubic-bezier(0.32,0.72,0,1)",
          }}
        />
        <div
          ref={orb2Ref}
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            bottom: "20%",
            right: "20%",
            background: "radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
            transition: "transform 0.8s cubic-bezier(0.32,0.72,0,1)",
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 100%)",
          }}
        />
      </div>

      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          className="flex items-center gap-2 mb-8"
        >
          <span
            className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold"
            style={{
              background: "rgba(139,120,248,0.12)",
              border: "1px solid rgba(139,120,248,0.2)",
              color: "var(--accent)",
            }}
          >
            Open to opportunities
          </span>
          <span
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium"
            style={{ color: "var(--text-muted)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#22c55e" }}
            />
            Lagos, Nigeria
          </span>
        </motion.div>

        {/* Main headline */}
        <h1
          className="font-extrabold tracking-tight mb-6 leading-[0.92]"
          style={{ fontSize: "clamp(3.2rem, 9vw, 8.5rem)" }}
        >
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {["Building", "apps"].map((w, i) => (
              <AnimatedWord key={w} word={w} delay={0.3 + i * 0.08} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 mt-1">
            {["that", "reach"].map((w, i) => (
              <AnimatedWord
                key={w}
                word={w}
                delay={0.46 + i * 0.08}
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 mt-1">
            <AnimatedWord word="millions" delay={0.62} />
            <span className="inline-block overflow-hidden leading-none">
              <motion.span
                className="inline-block italic font-light"
                style={{ color: "var(--accent)" }}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1], delay: 0.7 }}
              >
                across
              </motion.span>
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 mt-1">
            <AnimatedWord word="Africa." delay={0.78} />
          </div>
        </h1>

        {/* Sub */}
        <motion.p
          className="text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.85 }}
        >
          Full-stack engineer. I build React Native products people actually use{" "}
          <em>and</em> embed production AI agent systems inside existing SaaS platforms —
          4+ years across fintech, health, agritech, and edtech.
        </motion.p>

        {/* CTA row */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3 mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.95 }}
        >
          {/* Primary CTA — double bezel */}
          <div
            className="p-[2px] rounded-full"
            style={{ background: "linear-gradient(135deg, var(--accent) 0%, rgba(139,120,248,0.4) 100%)" }}
          >
            <a
              href="#work"
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm group transition-transform duration-200 active:scale-95"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              See my work
              <span
                className="flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>

          {/* Download CV */}
          <a
            href="/Jeffery_Adolor_CV.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "var(--text)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1v7.5M3.5 6l3 3 3-3M1.5 11.5h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download CV
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex items-center gap-8 md:gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>
                {s.value}
              </span>
              <span className="text-xs tracking-wide mt-0.5" style={{ color: "var(--text-subtle)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--text-subtle)" }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 rounded-full"
          style={{ background: "linear-gradient(to bottom, var(--text-subtle), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
