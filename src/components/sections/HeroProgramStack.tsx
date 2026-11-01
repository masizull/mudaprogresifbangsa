"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight, ArrowRight } from "lucide-react";
import { PILLARS_DATA } from "@/data/foundation-data";

export default function HeroProgramStack() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = PILLARS_DATA.length;
  const basePath = process.env.NODE_ENV === "production" ? "/mudaprogresifbangsa" : "";

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((c) => (c + 1) % total), 4500);
    return () => clearInterval(t);
  }, [paused, total]);

  const prevIdx = (active - 1 + total) % total;
  const nextIdx = (active + 1) % total;
  const cur = PILLARS_DATA[active];
  const prev = PILLARS_DATA[prevIdx];
  const next = PILLARS_DATA[nextIdx];

  return (
    <section className="relative -mt-20 pt-28 pb-12 sm:pb-14 overflow-hidden bg-[#17377A] text-white">
      {/* Background Image & Blue Overlay */}
      <Image
        src={cur.image}
        alt=""
        fill
        priority
        className="object-cover opacity-20 scale-105 pointer-events-none transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#122C6F]/95 via-[#183B94]/90 to-[#1E48B0]/85" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Minimal Headline */}
        <div className="lg:col-span-5 space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-white p-2 shadow-lg flex items-center justify-center">
            <Image
              src={`${basePath}/images/logo_mpb.png`}
              alt="MPB"
              width={44}
              height={44}
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold tracking-tight leading-[1.18]">
            <span className="text-amber-400">Dari Pengetahuan,</span>
            <br />
            Berdampak Pada Aksi
          </h1>
          <p className="text-blue-100 text-xs sm:text-sm leading-relaxed max-w-md">
            Menyambung pendidikan kebangsaan melalui Muda Progresif Bangsa Foundation untuk membuka akses pendidikan berkualitas dan memutus rantai kemiskinan.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/program/akademi-progresif"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>Jelajahi Program</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/kolaborasi"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all"
            >
              Ajukan Sinergi
            </Link>
          </div>
        </div>

        {/* Right Stacked Landscape Program Cards */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative w-full max-w-[560px] h-[350px] flex items-center justify-center"
          >
            {/* Left Peek Card */}
            <div
              onClick={() => setActive(prevIdx)}
              className="hidden sm:block absolute left-0 w-[270px] bg-white/90 rounded-2xl p-2.5 shadow-lg cursor-pointer opacity-55 scale-90 -translate-x-4 z-10 transition-all duration-300 hover:opacity-75"
            >
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100">
                <Image src={prev.image} alt={prev.nameOnly} fill className="object-cover" />
              </div>
              <div className="p-2 text-slate-800">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">{prev.basisValue}</span>
                <h3 className="text-xs font-extrabold truncate text-slate-900">{prev.nameOnly}</h3>
              </div>
            </div>

            {/* Center Active Landscape Card */}
            <div className="relative w-full max-w-[375px] bg-white text-slate-900 rounded-2xl p-3 sm:p-3.5 shadow-2xl z-20 transition-all duration-300">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100">
                <Image src={cur.image} alt={cur.nameOnly} fill priority className="object-cover" />
              </div>
              <div className="pt-3 px-1.5 pb-1">
                <div className="flex items-center justify-between text-slate-500 mb-1">
                  <span className="text-[11px] font-semibold text-sky-700">{cur.basisValue}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <h2 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">{cur.nameOnly}</h2>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">{cur.heroDesc}</p>
                <Link
                  href={`/program/${cur.slug}`}
                  className="mt-3 block w-full py-2.5 rounded-xl bg-[#2454BE] hover:bg-[#1D469E] text-white text-center font-bold text-xs shadow transition-colors"
                >
                  Lihat Program
                </Link>
              </div>
            </div>

            {/* Right Peek Card */}
            <div
              onClick={() => setActive(nextIdx)}
              className="hidden sm:block absolute right-0 w-[270px] bg-white/90 rounded-2xl p-2.5 shadow-lg cursor-pointer opacity-55 scale-90 translate-x-4 z-10 transition-all duration-300 hover:opacity-75"
            >
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100">
                <Image src={next.image} alt={next.nameOnly} fill className="object-cover" />
              </div>
              <div className="p-2 text-slate-800">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">{next.basisValue}</span>
                <h3 className="text-xs font-extrabold truncate text-slate-900">{next.nameOnly}</h3>
              </div>
            </div>
          </div>

          {/* Bottom Circle Controls & Dots */}
          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setActive(prevIdx)}
              aria-label="Previous Program"
              className="w-8 h-8 rounded-full bg-white text-[#1D469E] hover:bg-slate-100 shadow flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1.5">
              {PILLARS_DATA.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-6 bg-amber-400" : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setActive(nextIdx)}
              aria-label="Next Program"
              className="w-8 h-8 rounded-full bg-white text-[#1D469E] hover:bg-slate-100 shadow flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
