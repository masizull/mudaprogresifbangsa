"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  HeartHandshake,
  ShieldAlert,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  CheckCircle2,
  TrendingUp,
  Award
} from "lucide-react";
import { PILLARS_DATA, PillarItem } from "@/data/foundation-data";

const PILLAR_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "akademi-progresif": BookOpen,
  "vokasi-progresif": Briefcase,
  "progresif-care": HeartHandshake,
  "tanggap-progresif": ShieldAlert
};

const PILLAR_COLOR_THEMES = {
  sky: {
    accent: "#38BDF8",
    glow: "rgba(56, 189, 248, 0.35)",
    border: "border-sky-400/40",
    bgActive: "bg-sky-500/10",
    badge: "bg-sky-500/20 text-sky-300 border-sky-400/30",
    pill: "from-sky-500 to-blue-600",
    lightAccent: "text-sky-400"
  },
  amber: {
    accent: "#FBBF24",
    glow: "rgba(251, 191, 36, 0.35)",
    border: "border-amber-400/40",
    bgActive: "bg-amber-500/10",
    badge: "bg-amber-500/20 text-amber-300 border-amber-400/30",
    pill: "from-amber-500 to-orange-600",
    lightAccent: "text-amber-400"
  },
  emerald: {
    accent: "#34D399",
    glow: "rgba(52, 211, 153, 0.35)",
    border: "border-emerald-400/40",
    bgActive: "bg-emerald-500/10",
    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    pill: "from-emerald-500 to-teal-600",
    lightAccent: "text-emerald-400"
  },
  orange: {
    accent: "#FB923C",
    glow: "rgba(251, 146, 60, 0.35)",
    border: "border-orange-400/40",
    bgActive: "bg-orange-500/10",
    badge: "bg-orange-500/20 text-orange-300 border-orange-400/30",
    pill: "from-orange-500 to-red-600",
    lightAccent: "text-orange-400"
  }
};

export default function PillarEcosystem() {
  const [activeId, setActiveId] = useState<string>(PILLARS_DATA[0].id);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [activeSubProgramIdx, setActiveSubProgramIdx] = useState<number>(0);

  const activeIndex = PILLARS_DATA.findIndex((p) => p.id === activeId);
  const activePillar = PILLARS_DATA[activeIndex] || PILLARS_DATA[0];
  const totalPillars = PILLARS_DATA.length;

  const currentTheme =
    PILLAR_COLOR_THEMES[activePillar.accentColor as keyof typeof PILLAR_COLOR_THEMES] ||
    PILLAR_COLOR_THEMES.sky;

  // Auto-cycle through pillars gently every 5 seconds unless paused by hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveId((prev) => {
        const idx = PILLARS_DATA.findIndex((p) => p.id === prev);
        const nextIdx = (idx + 1) % totalPillars;
        return PILLARS_DATA[nextIdx].id;
      });
      setActiveSubProgramIdx(0);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, totalPillars]);

  // Reset active subprogram when pillar changes
  useEffect(() => {
    setActiveSubProgramIdx(0);
  }, [activeId]);

  const handlePrev = () => {
    const nextIdx = (activeIndex - 1 + totalPillars) % totalPillars;
    setActiveId(PILLARS_DATA[nextIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % totalPillars;
    setActiveId(PILLARS_DATA[nextIdx].id);
  };

  return (
    <section
      id="ekosistem-pilar"
      className="py-16 sm:py-20 bg-[#060D1A] text-white relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Ambient Background Glows */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-colors duration-700 opacity-20"
        style={{ backgroundColor: currentTheme.accent }}
      />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-[#1A3875]/25 blur-[120px] pointer-events-none" />

      {/* 2. Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10">
        
        {/* ======================================================== */}
        {/* SECTION HEADER + DYNAMIC INTERACTIVE CONTROLS            */}
        {/* ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold tracking-wider text-sky-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>ARSITEKTUR GERAKAN BERKELANJUTAN</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Ekosistem 4 Pilar{" "}
              <span
                className="transition-colors duration-500 bg-clip-text text-transparent bg-gradient-to-r"
                style={{
                  backgroundImage: `linear-gradient(to right, ${currentTheme.accent}, #FFFFFF)`
                }}
              >
                Pemberdayaan
              </span>
            </h2>
            <p className="mt-2 text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
              Model intervensi terstruktur dari riset nalar kritis, pembekalan vokasi industri, jaring kesehatan preventif, hingga kesiapsiagaan aksi tanggap kemanusiaan.
            </p>
          </div>

          {/* Interactive Navigation Control Bar */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            {/* Auto-Cycle Progress Indicator Pill */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[11px] font-mono">
              <span className="text-slate-400">Pilar Aktif:</span>
              <span className="font-bold text-white">
                0{activeIndex + 1} / 0{totalPillars}
              </span>
              <span
                className={`w-2 h-2 rounded-full ${
                  isPaused ? "bg-amber-400" : "bg-emerald-400 animate-ping"
                }`}
                title={isPaused ? "Otomatisasi dijeda saat mouse aktif" : "Berjalan otomatis"}
              />
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Pilar Sebelumnya"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center border border-white/10 transition-all hover:border-white/30"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Pilar Selanjutnya"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center border border-white/10 transition-all hover:border-white/30"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP: KINETIC EXPANDING HORIZONTAL PILLARS (lg and up) */}
        {/* ======================================================== */}
        <div className="hidden lg:flex gap-3 h-[580px] w-full">
          {PILLARS_DATA.map((pilar, idx) => {
            const isCurrent = pilar.id === activeId;
            const Icon = PILLAR_ICONS[pilar.id] || BookOpen;
            const theme =
              PILLAR_COLOR_THEMES[pilar.accentColor as keyof typeof PILLAR_COLOR_THEMES] ||
              PILLAR_COLOR_THEMES.sky;

            return (
              <motion.div
                key={pilar.id}
                layout
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                onClick={() => {
                  if (!isCurrent) setActiveId(pilar.id);
                }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                  isCurrent
                    ? `flex-[3.6] border-white/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] ring-1 ${theme.border}`
                    : `flex-1 border-white/10 bg-[#0C182E]/80 hover:bg-[#122240] hover:border-white/20`
                }`}
                style={{
                  boxShadow: isCurrent ? `0 0 35px ${theme.glow}` : "none"
                }}
              >
                {/* Background Photography with Smooth Crossfade & Zoom */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={pilar.image}
                    alt={pilar.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 750px"
                    className={`object-cover transition-all duration-700 ${
                      isCurrent
                        ? "scale-105 filter brightness-[0.4] contrast-105"
                        : "scale-100 filter brightness-[0.2] grayscale contrast-125 group-hover:brightness-[0.3]"
                    }`}
                  />
                  {/* Deep Gradient Overlays for Readability */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isCurrent
                        ? "bg-gradient-to-t from-[#060D1A] via-[#09152B]/85 to-[#060D1A]/50"
                        : "bg-gradient-to-t from-[#060D1A] via-[#081326]/90 to-[#081326]/80"
                    }`}
                  />
                </div>

                {/* ---------------------------------------------------- */}
                {/* ACTIVE PILLAR STATE (EXPANDED CONTENT)               */}
                {/* ---------------------------------------------------- */}
                {isCurrent && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="relative z-10 p-7 sm:p-8 flex flex-col justify-between h-full overflow-hidden"
                  >
                    {/* Top Header: Badge, Code & Metric Badges */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-10 h-10 rounded-2xl flex items-center justify-center text-white border shadow-md backdrop-blur-md"
                            style={{
                              backgroundColor: `${theme.accent}20`,
                              borderColor: `${theme.accent}50`
                            }}
                          >
                            <Icon className="w-5 h-5" style={{ color: theme.accent }} />
                          </span>
                          <div>
                            <span
                              className="text-[11px] font-mono font-extrabold uppercase tracking-widest block"
                              style={{ color: theme.accent }}
                            >
                              PILAR {pilar.number} • {pilar.basisValue}
                            </span>
                            <span className="text-xs text-slate-300 font-mono">
                              Arsitektur Program Terpadu
                            </span>
                          </div>
                        </div>

                        {/* Tag Pills */}
                        <div className="hidden xl:flex items-center gap-1.5">
                          {pilar.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/10 text-slate-200 border border-white/10 backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Title & Narrative */}
                      <div className="max-w-2xl pt-1">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {pilar.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
                          {pilar.heroDesc}
                        </p>
                      </div>
                    </div>

                    {/* Middle: Interactive Sub-Programs Showcase */}
                    <div className="my-auto py-3 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" style={{ color: theme.accent }} />
                          <span>Pilih Sub-Program Operasional:</span>
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {pilar.programs.length} Divisi Aktif
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2.5">
                        {pilar.programs.slice(0, 3).map((prog, pIdx) => {
                          const isSubActive = activeSubProgramIdx === pIdx;
                          return (
                            <button
                              key={prog.title}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveSubProgramIdx(pIdx);
                              }}
                              className={`p-3 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between ${
                                isSubActive
                                  ? "bg-white/15 border-white/40 shadow-lg ring-1"
                                  : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                              }`}
                              style={{
                                borderColor: isSubActive ? theme.accent : undefined
                              }}
                            >
                              <div>
                                <span
                                  className="text-[9px] font-mono font-extrabold px-2 py-0.5 rounded-full inline-block mb-1.5 uppercase"
                                  style={{
                                    backgroundColor: isSubActive ? `${theme.accent}30` : "rgba(255,255,255,0.08)",
                                    color: isSubActive ? theme.accent : "#E2E8F0"
                                  }}
                                >
                                  {prog.highlight || `Unit 0${pIdx + 1}`}
                                </span>
                                <h4 className="text-xs font-bold text-white line-clamp-1 leading-snug">
                                  {prog.title}
                                </h4>
                              </div>
                              <p className="text-[11px] text-slate-300 mt-1.5 line-clamp-2 leading-relaxed">
                                {prog.desc}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bottom: Impact Metrics Bar + Direct CTA Button */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                      {/* Metric Badges */}
                      <div className="grid grid-cols-3 gap-3 flex-1">
                        {pilar.impactMetrics.map((m) => (
                          <div
                            key={m.label}
                            className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
                          >
                            <div
                              className="text-lg sm:text-xl font-mono font-black tracking-tight"
                              style={{ color: theme.accent }}
                            >
                              {m.value}
                            </div>
                            <div className="text-[10px] text-slate-300 font-medium truncate mt-0.5">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Direct Page Link */}
                      <Link
                        href={`/program/${pilar.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="px-5 py-3 rounded-xl font-bold text-xs text-white shadow-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shrink-0 border border-white/20"
                        style={{
                          background: `linear-gradient(135deg, ${theme.accent}, #2454BE)`
                        }}
                      >
                        <span>Eksplorasi Program</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}

                {/* ---------------------------------------------------- */}
                {/* INACTIVE PILLAR STATE (COMPACT VERTICAL BAR)         */}
                {/* ---------------------------------------------------- */}
                {!isCurrent && (
                  <div className="relative z-10 p-5 flex flex-col justify-between h-full items-center text-center">
                    {/* Top Pillar Number & Icon */}
                    <div className="space-y-3 flex flex-col items-center">
                      <span className="font-mono text-xs font-extrabold text-slate-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                        0{idx + 1}
                      </span>
                      <div
                        className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-slate-300 border border-white/10 transition-transform group-hover:scale-110"
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Vertical / Rotated Pillar Name */}
                    <div className="my-auto flex items-center justify-center py-6">
                      <span
                        className="font-extrabold text-sm sm:text-base tracking-wider text-slate-300 uppercase whitespace-nowrap rotate-180"
                        style={{
                          writingMode: "vertical-rl"
                        }}
                      >
                        {pilar.nameOnly}
                      </span>
                    </div>

                    {/* Bottom Indicator Pill */}
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-white/20 transition-all">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* MOBILE / TABLET: ACCORDION CARD STACK (< lg)             */}
        {/* ======================================================== */}
        <div className="lg:hidden space-y-3.5">
          {PILLARS_DATA.map((pilar, idx) => {
            const isCurrent = pilar.id === activeId;
            const Icon = PILLAR_ICONS[pilar.id] || BookOpen;
            const theme =
              PILLAR_COLOR_THEMES[pilar.accentColor as keyof typeof PILLAR_COLOR_THEMES] ||
              PILLAR_COLOR_THEMES.sky;

            return (
              <div
                key={pilar.id}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isCurrent
                    ? `bg-[#0B172E] border-white/30 shadow-xl ring-1 ${theme.border}`
                    : "bg-[#091326]/80 border-white/10 hover:border-white/20"
                }`}
              >
                {/* Clickable Header Accordion Bar */}
                <button
                  type="button"
                  onClick={() => setActiveId(isCurrent ? "" : pilar.id)}
                  className="w-full p-4 flex items-center justify-between text-left transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white border"
                      style={{
                        backgroundColor: isCurrent ? `${theme.accent}25` : "rgba(255,255,255,0.06)",
                        borderColor: isCurrent ? `${theme.accent}60` : "rgba(255,255,255,0.1)"
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: isCurrent ? theme.accent : "#94A3B8" }} />
                    </span>
                    <div>
                      <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                        PILAR 0{idx + 1} • {pilar.basisValue}
                      </div>
                      <div className="text-base font-bold text-white">
                        {pilar.title}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white transition-transform duration-300 ${
                      isCurrent ? "rotate-90 bg-white/20" : ""
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>

                {/* Expanded Drawer Content for Mobile */}
                <AnimatePresence>
                  {isCurrent && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-5 pt-1 space-y-4 border-t border-white/10"
                    >
                      {/* Image Preview with Overlay */}
                      <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10 mt-2">
                        <Image
                          src={pilar.image}
                          alt={pilar.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 450px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B172E] via-transparent to-transparent" />
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {pilar.heroDesc}
                      </p>

                      {/* Sub-Programs Grid */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">
                          Sub-Program Utama:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {pilar.programs.map((prog) => (
                            <div
                              key={prog.title}
                              className="p-3 rounded-xl bg-white/5 border border-white/10"
                            >
                              <span
                                className="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded inline-block mb-1"
                                style={{
                                  backgroundColor: `${theme.accent}20`,
                                  color: theme.accent
                                }}
                              >
                                {prog.highlight || "Program"}
                              </span>
                              <div className="text-xs font-bold text-white">
                                {prog.title}
                              </div>
                              <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                                {prog.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Impact Metrics */}
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        {pilar.impactMetrics.map((m) => (
                          <div
                            key={m.label}
                            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center"
                          >
                            <div
                              className="text-base font-mono font-bold"
                              style={{ color: theme.accent }}
                            >
                              {m.value}
                            </div>
                            <div className="text-[9px] text-slate-300 mt-0.5 leading-tight">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Link
                        href={`/program/${pilar.slug}`}
                        className="w-full py-2.5 rounded-xl text-center text-xs font-bold text-white flex items-center justify-center gap-1.5 shadow-lg border border-white/20 mt-2"
                        style={{
                          background: `linear-gradient(135deg, ${theme.accent}, #2454BE)`
                        }}
                      >
                        <span>Kunjungi Detail {pilar.nameOnly}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* BOTTOM PILLAR SELECTOR PILLS (INTERACTIVE TAB STRIP)     */}
        {/* ======================================================== */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {PILLARS_DATA.map((pilar, idx) => {
            const isCurrent = pilar.id === activeId;
            const Icon = PILLAR_ICONS[pilar.id] || BookOpen;
            const theme =
              PILLAR_COLOR_THEMES[pilar.accentColor as keyof typeof PILLAR_COLOR_THEMES] ||
              PILLAR_COLOR_THEMES.sky;

            return (
              <button
                key={pilar.id}
                type="button"
                onClick={() => setActiveId(pilar.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-2 border ${
                  isCurrent
                    ? "bg-white text-slate-900 border-white shadow-lg scale-105"
                    : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: theme.accent }}
                />
                <span className="font-mono text-[10px] opacity-70">0{idx + 1}</span>
                <span>{pilar.nameOnly}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
