"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BookOpen, Briefcase, HeartHandshake, ShieldAlert, ArrowRight, CheckCircle2, Sparkles, Layers } from "lucide-react";
import { PILLARS_DATA, PillarItem } from "@/data/foundation-data";

const PILLAR_ICONS = [BookOpen, Briefcase, HeartHandshake, ShieldAlert];

export default function PillarEcosystem() {
  const [selectedPillarId, setSelectedPillarId] = useState<string>(PILLARS_DATA[0].id);

  const activePillar = PILLARS_DATA.find((p) => p.id === selectedPillarId) || PILLARS_DATA[0];
  const activeIndex = PILLARS_DATA.findIndex((p) => p.id === activePillar.id);
  const ActiveIcon = PILLAR_ICONS[activeIndex];

  return (
    <section id="ekosistem-pilar" className="py-20 bg-[#081426] text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-royal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            Arsitektur Gerakan Berkelanjutan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Ekosistem 4 Pilar Pemberdayaan
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Empat pilar program terintegrasi yang dirancang untuk memutus rantai kemiskinan dan mencetak generasi pemuda yang mandiri, sehat, serta berdaya saing global.
          </p>
        </div>

        {/* 4 Pilar Interactive Tabs Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-[#0F2342]/80 p-2 rounded-2xl border border-white/15">
          {PILLARS_DATA.map((pilar, idx) => {
            const Icon = PILLAR_ICONS[idx];
            const isSelected = pilar.id === activePillar.id;
            return (
              <button
                key={pilar.id}
                type="button"
                onClick={() => setSelectedPillarId(pilar.id)}
                className={`p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 flex flex-col justify-between relative ${
                  isSelected
                    ? "bg-white/15 text-white shadow-lg border border-white/25"
                    : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isSelected ? "text-amber-400" : "text-slate-400"}`}>
                    PILAR {pilar.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? "text-amber-400" : "text-slate-400"}`} />
                </div>
                <div className="text-xs sm:text-sm font-bold truncate">
                  {pilar.title}
                </div>
                {isSelected && (
                  <div className="absolute bottom-1 inset-x-4 h-0.5 bg-gradient-to-r from-sky-400 to-amber-400 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Pillar Explorer Card (Bento Style with Top Border Accent) */}
        <div
          id={`pilar-${activePillar.id}`}
          className={`rounded-3xl bg-[#0F2342] border-t-4 border-2 border-white/15 shadow-2xl p-6 sm:p-10 transition-all duration-300 ${activePillar.themeBorder}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Photo & Basis Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-white/15 shadow-lg">
                <Image
                  src={activePillar.image}
                  alt={activePillar.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081426] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#081426]/90 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-300 font-semibold">
                    {activePillar.basisLabel} {activePillar.basisValue}
                  </span>
                  <span className="text-[11px] text-slate-300 font-medium">Dokumentasi Program</span>
                </div>
              </div>

              {/* Impact Metrics Bento */}
              <div className="grid grid-cols-3 gap-3">
                {activePillar.impactMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center"
                  >
                    <div className="text-lg sm:text-xl font-extrabold text-amber-400 font-mono">
                      {metric.value}
                    </div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pillar Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activePillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Narrative & Detailed Sub-programs (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold border ${activePillar.themeBadge}`}>
                    PILAR {activePillar.number}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {activePillar.subtitle}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activePillar.title}
                </h3>
                <p className="mt-3 text-slate-200 text-sm sm:text-base leading-relaxed">
                  {activePillar.heroDesc}
                </p>
              </div>

              {/* Sub-Programs Grid */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-sky-400">
                  Sub-Program & Inisiatif Lapangan:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {activePillar.programs.map((prog, pIdx) => (
                    <div
                      key={prog.title}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h5 className="text-sm font-bold text-white">
                            {prog.title}
                          </h5>
                          {prog.highlight && (
                            <span className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                              {prog.highlight}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {prog.desc}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Inisiatif Aktif</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link for Pillar */}
              <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-white/10">
                <a
                  href="#kemitraan"
                  className="px-5 py-2.5 rounded-full bg-royal-500 hover:bg-royal-600 text-white text-xs font-bold shadow-cta-blue transition-all duration-200 inline-flex items-center gap-2"
                >
                  <span>Ajukan Sinergi di {activePillar.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-xs text-slate-400">
                  Terbuka untuk kemitraan relawan, lembaga riset & sponsor sosial.
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
