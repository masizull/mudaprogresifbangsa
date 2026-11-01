"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Briefcase, HeartHandshake, ShieldAlert, ArrowRight, CheckCircle2 } from "lucide-react";
import { PILLARS_DATA } from "@/data/foundation-data";

const PILLAR_ICONS = [BookOpen, Briefcase, HeartHandshake, ShieldAlert];

export default function PillarEcosystem() {
  const [selectedPillarId, setSelectedPillarId] = useState<string>(PILLARS_DATA[0].id);

  const activePillar = PILLARS_DATA.find((p) => p.id === selectedPillarId) || PILLARS_DATA[0];
  const activeIndex = PILLARS_DATA.findIndex((p) => p.id === activePillar.id);

  return (
    <section id="ekosistem-pilar" className="py-10 sm:py-12 bg-[#081426] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header without pill badges */}
        <div>
          <div className="text-[11px] font-mono font-bold tracking-widest text-sky-400 uppercase mb-1">
            Arsitektur Gerakan Berkelanjutan
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
            Ekosistem 4 Pilar Pemberdayaan
          </h2>
          <p className="mt-1 text-slate-300 text-xs sm:text-sm max-w-2xl">
            Empat pilar terintegrasi yang dirancang untuk memutus rantai kemiskinan dan mencetak pemuda yang mandiri, sehat, serta berdaya saing.
          </p>
        </div>

        {/* 4 Pilar Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 bg-[#0F2342]/90 p-1.5 rounded-xl border border-white/10">
          {PILLARS_DATA.map((pilar, idx) => {
            const Icon = PILLAR_ICONS[idx];
            const isSelected = pilar.id === activePillar.id;
            return (
              <button
                key={pilar.id}
                type="button"
                onClick={() => setSelectedPillarId(pilar.id)}
                className={`p-2.5 sm:p-3 rounded-lg text-left transition-all duration-150 flex items-center gap-2.5 ${
                  isSelected
                    ? "bg-white/15 text-white font-bold border border-white/20 shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-amber-400" : "text-slate-400"}`} />
                <div className="min-w-0">
                  <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Pilar 0{idx + 1}</div>
                  <div className="text-xs truncate">{pilar.nameOnly}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detail Active Pillar */}
        <div className="rounded-2xl bg-[#0F2342] border border-white/15 p-4 sm:p-6 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left: Photo & Metrics */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10">
                <Image
                  src={activePillar.image}
                  alt={activePillar.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                />
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2">
                {activePillar.impactMetrics.map((metric) => (
                  <div key={metric.label} className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-center">
                    <div className="text-sm sm:text-base font-extrabold text-amber-400 font-mono">
                      {metric.value}
                    </div>
                    <div className="text-[10px] text-slate-300 mt-0.5 leading-tight">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Narrative & Subprograms */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">
                  {activePillar.basisLabel} {activePillar.basisValue}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-white mt-0.5">
                  {activePillar.title}
                </h3>
                <p className="mt-1 text-slate-200 text-xs sm:text-sm leading-relaxed">
                  {activePillar.heroDesc}
                </p>
              </div>

              {/* Sub-Programs */}
              <div className="space-y-2 pt-1">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400">
                  Sub-Program Utama:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activePillar.programs.map((prog) => (
                    <div key={prog.title} className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="text-xs font-bold text-white truncate">{prog.title}</h5>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-2">{prog.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex items-center gap-3">
                <Link
                  href={`/program/${activePillar.slug}`}
                  className="px-4 py-2 rounded-lg bg-[#2454BE] hover:bg-[#1D469E] text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Buka Halaman {activePillar.nameOnly}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
