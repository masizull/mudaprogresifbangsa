"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play, ArrowRight, BookOpen, Briefcase, HeartHandshake, ShieldAlert } from "lucide-react";
import { PILLARS_DATA, FOUNDATION_INFO } from "@/data/foundation-data";

const PILLAR_ICONS = [BookOpen, Briefcase, HeartHandshake, ShieldAlert];

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAutoPlaying || isHovered) return;
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveSlide((curr) => (curr + 1) % PILLARS_DATA.length);
          return 0;
        }
        return prev + 100 / (4500 / 50);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered]);

  const handleSelectSlide = (index: number) => {
    setActiveSlide(index);
    setProgress(0);
  };

  const handlePrev = () => {
    setProgress(0);
    setActiveSlide((prev) => (prev - 1 + PILLARS_DATA.length) % PILLARS_DATA.length);
  };

  const handleNext = () => {
    setProgress(0);
    setActiveSlide((prev) => (prev + 1) % PILLARS_DATA.length);
  };

  const currentPillar = PILLARS_DATA[activeSlide];

  return (
    <section id="hero" className="relative overflow-hidden bg-[#0F2342] text-white py-14 lg:py-20 border-b border-white/10">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-royal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Foundation Identity (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            Lembaga Pendidikan, Riset & Pemberdayaan Sosial
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.12]">
            <span className="block text-white">Muda Progresif</span>
            <span className="text-sky-400">Bangsa </span>
            <span className="text-amber-400">Foundation</span>
          </h1>

          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            Menyambung pendidikan kebangsaan dan kepemudaan, serta memutus mata
            rantai kemiskinan melalui pendidikan berkualitas, riset kebijakan berbasis bukti, dan aksi sosial
            berkelanjutan.
          </p>

          <div className="p-4 rounded-2xl bg-[#081426]/90 border border-white/15 backdrop-blur-sm space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Semboyan Gerakan
            </div>
            <p className="text-sm font-medium italic text-slate-100">
              “{FOUNDATION_INFO.tagline}”
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#ekosistem-pilar"
              className="px-6 py-3.5 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white text-sm font-bold shadow-cta-orange transition-all duration-200 inline-flex items-center gap-2"
            >
              <span>Jelajahi 4 Pilar Program</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#kemitraan"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 transition-all duration-200 inline-flex items-center gap-2"
            >
              Sinergi Kolaborasi
            </a>
          </div>
        </div>

        {/* Right Column: Auto-Sliding Photo Frame + Glassmorphic Text Overlay (7 cols) */}
        <div className="lg:col-span-7">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl bg-[#081426]"
          >
            {/* Animated Progress Bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-white/15 z-30">
              <div
                className="h-full bg-gradient-to-r from-sky-400 via-royal-400 to-amber-400 transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Top Floating Controls (Clean - No Pill Badge Title) */}
            <div className="absolute top-4 inset-x-4 z-30 flex items-center justify-end gap-2">
              <div className="flex items-center gap-1 bg-[#081426]/85 backdrop-blur-md border border-white/20 rounded-full p-1 shadow-lg">
                <button
                  type="button"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="px-2.5 py-1 rounded-full text-xs font-semibold text-slate-200 hover:bg-white/15 flex items-center gap-1 transition-colors"
                  aria-label={isAutoPlaying ? "Pause auto-slide" : "Start auto-slide"}
                >
                  {isAutoPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-sky-400" />}
                  <span className="hidden sm:inline">{isAutoPlaying ? "Auto" : "Paused"}</span>
                </button>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-1.5 rounded-full text-slate-200 hover:bg-white/15 transition-colors"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-1.5 rounded-full text-slate-200 hover:bg-white/15 transition-colors"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Image Container with Priority LCP Loading and Aspect Ratio Lock */}
            <div className="relative w-full aspect-[16/11] overflow-hidden">
              {PILLARS_DATA.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081426] via-[#081426]/60 to-transparent" />
                </div>
              ))}

              {/* Glassmorphic Overlay Text */}
              <div className="absolute bottom-0 inset-x-0 z-20 p-4 sm:p-6">
                <div className="bg-[#081426]/85 backdrop-blur-md border border-white/15 rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-semibold text-amber-400">
                      {currentPillar.basisLabel} {currentPillar.basisValue}
                    </span>
                    <span className="font-mono text-xs text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-400/30">
                      0{activeSlide + 1} / 04
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                    {currentPillar.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">
                    {currentPillar.heroDesc}
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {currentPillar.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/10 text-[11px] text-slate-200 border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`#pilar-${currentPillar.id}`}
                      className="text-xs font-bold text-amber-300 hover:text-amber-200 inline-flex items-center gap-1 transition-colors group"
                    >
                      <span>Buka Pilar Ini</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Pilar Selector Tabs Under Frame */}
            <div className="grid grid-cols-2 sm:grid-cols-4 bg-[#081426] border-t border-white/10 divide-x divide-y sm:divide-y-0 divide-white/10">
              {PILLARS_DATA.map((pilar, idx) => {
                const IconComponent = PILLAR_ICONS[idx];
                const isActive = idx === activeSlide;
                return (
                  <button
                    key={pilar.id}
                    type="button"
                    onClick={() => handleSelectSlide(idx)}
                    className={`p-3 text-left transition-all duration-200 flex items-center gap-2.5 ${
                      isActive
                        ? "bg-white/15 text-white font-bold"
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 shrink-0 ${isActive ? "text-amber-400" : "text-slate-400"}`} />
                    <div className="min-w-0">
                      <div className="text-[10px] tracking-wider uppercase opacity-75 font-mono">Pilar 0{idx + 1}</div>
                      <div className="text-xs truncate font-medium">{pilar.title.split(" ")[0]}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
