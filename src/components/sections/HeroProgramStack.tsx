"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { PILLARS_DATA } from "@/data/foundation-data";

export default function HeroProgramStack() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = PILLARS_DATA.length;
  const basePath = process.env.NODE_ENV === "production" ? "/mudaprogresifbangsa" : "";

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActive((c) => (c + 1) % total);
    }, 4500);
    return () => clearInterval(t);
  }, [paused, total]);

  const prevSlide = () => setActive((c) => (c - 1 + total) % total);
  const nextSlide = () => setActive((c) => (c + 1) % total);

  return (
    <section className="relative -mt-20 pt-28 sm:pt-32 lg:pt-32 pb-14 sm:pb-16 lg:pb-20 overflow-hidden bg-[#0A1838] text-white">
      {/* 1. Independent Clean Background (TIDAK menyambung dengan gambar slides pilar) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#091738] via-[#102A63] to-[#173B8A]" />
      
      {/* Pola Geometric Halus & Ambient Glows */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(6,16,38,0.45)_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Kolom Kiri: Teks Narasi & Kutipan Minimal */}
        <div className="lg:col-span-5 space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-white p-2.5 shadow-md flex items-center justify-center">
            <Image
              src={`${basePath}/images/logo_mpb.png`}
              alt="MPB"
              width={42}
              height={42}
              className="object-contain"
            />
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight leading-[1.2]">
            <span className="text-amber-400">Dari Pengetahuan,</span>
            <br />
            Berdampak Pada Aksi
          </h1>
          
          <p className="text-blue-100/85 text-xs sm:text-sm leading-relaxed max-w-md">
            Menyambung pendidikan kebangsaan melalui Muda Progresif Bangsa Foundation untuk membuka akses pendidikan berkualitas dan memutus rantai kemiskinan.
          </p>

          {/* CTA Buttons dengan Efek Neon Glow Berkilau */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <Link
              href="/program/akademi-progresif"
              className="group relative px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:via-orange-400 hover:to-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm border border-amber-300/80 shadow-[0_0_20px_rgba(249,115,22,0.7),0_0_40px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.95),0_0_60px_rgba(245,158,11,0.65)] transition-all duration-300 flex items-center gap-2 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="tracking-wide">Jelajahi Program</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              href="/kolaborasi"
              className="px-5 py-2.5 rounded-xl bg-sky-950/40 hover:bg-sky-900/60 text-sky-200 hover:text-white font-extrabold text-xs sm:text-sm border-2 border-sky-400/70 hover:border-sky-300 shadow-[0_0_18px_rgba(56,189,248,0.45),inset_0_0_12px_rgba(56,189,248,0.2)] hover:shadow-[0_0_28px_rgba(56,189,248,0.8),inset_0_0_16px_rgba(56,189,248,0.35)] backdrop-blur-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              Ajukan Sinergi
            </Link>
          </div>
        </div>

        {/* Kolom Kanan: Interactive Physical Sliding Stacked Cards (Proporsional & Bebas Tabrakan) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative w-full max-w-[540px] h-[365px] sm:h-[375px] flex items-center justify-center select-none"
            style={{ perspective: "1000px" }}
          >
            {PILLARS_DATA.map((pillar, i) => {
              // Hitung posisi relatif terhadap slide aktif
              let diff = (i - active) % total;
              if (diff > total / 2) diff -= total;
              if (diff < -total / 2) diff += total;

              const isCenter = diff === 0;
              const isLeft = diff === -1;
              const isRight = diff === 1;

              // Animate transform & opacity untuk efek bergeser fisik
              let xPos = 0;
              let scaleVal = 1;
              let opacityVal = 1;
              let zIndexVal = 30;
              let rotY = 0;

              if (isCenter) {
                xPos = 0;
                scaleVal = 1;
                opacityVal = 1;
                zIndexVal = 30;
                rotY = 0;
              } else if (isLeft) {
                xPos = -175;
                scaleVal = 0.88;
                opacityVal = 0.65;
                zIndexVal = 20;
                rotY = 6;
              } else if (isRight) {
                xPos = 175;
                scaleVal = 0.88;
                opacityVal = 0.65;
                zIndexVal = 20;
                rotY = -6;
              } else {
                xPos = 0;
                scaleVal = 0.72;
                opacityVal = 0;
                zIndexVal = 10;
                rotY = 0;
              }

              return (
                <motion.div
                  key={pillar.id}
                  animate={{
                    x: xPos,
                    scale: scaleVal,
                    opacity: opacityVal,
                    rotateY: rotY,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 26,
                  }}
                  style={{ zIndex: zIndexVal }}
                  onClick={() => {
                    if (!isCenter) setActive(i);
                  }}
                  className={`absolute w-[310px] sm:w-[340px] lg:w-[350px] bg-white text-slate-900 rounded-2xl p-3 sm:p-3.5 shadow-2xl ${
                    !isCenter ? "cursor-pointer hover:opacity-85" : ""
                  }`}
                >
                  {/* Foto Program Landscape Proporsional */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100">
                    <Image
                      src={pillar.image}
                      alt={pillar.nameOnly}
                      fill
                      priority={isCenter}
                      className="object-cover pointer-events-none"
                    />
                  </div>

                  {/* Body Kartu (Teks & Tombol Aksi) */}
                  <div className="pt-2.5 px-1 pb-1">
                    <div className="flex items-center justify-between text-slate-500 mb-0.5">
                      <span className="text-[11px] sm:text-xs font-semibold text-sky-700 tracking-wide">
                        {pillar.basisValue}
                      </span>
                      {isCenter && <ArrowUpRight className="w-4 h-4 text-slate-400" />}
                    </div>

                    <h2 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                      {pillar.nameOnly}
                    </h2>

                    <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                      {pillar.heroDesc}
                    </p>

                    {isCenter ? (
                      <Link
                        href={`/program/${pillar.slug}`}
                        className="mt-3 block w-full py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] hover:from-[#1E40AF] hover:to-[#1D4ED8] text-white text-center font-extrabold text-xs sm:text-[13px] border border-blue-400/40 shadow-[0_0_18px_rgba(37,99,235,0.6),0_0_35px_rgba(59,130,246,0.35)] hover:shadow-[0_0_26px_rgba(37,99,235,0.9),0_0_50px_rgba(59,130,246,0.6)] transition-all duration-300 hover:scale-[1.01]"
                      >
                        Lihat Program
                      </Link>
                    ) : (
                      <div className="mt-3 w-full py-2 rounded-xl bg-slate-100 text-slate-500 text-center font-semibold text-xs">
                        Klik untuk Membuka
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Tombol Navigasi Bulat & Indikator Titik (Dinaikkan sedikit agar pas & dekat tanpa bertabrakan) */}
          <div className="mt-4 sm:mt-5 flex items-center gap-3.5 relative z-40">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Program"
              className="w-8 h-8 rounded-full bg-white text-[#1D469E] hover:bg-slate-100 shadow-md flex items-center justify-center transition-all"
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
                    i === active ? "w-6 bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.7)]" : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Program"
              className="w-8 h-8 rounded-full bg-white text-[#1D469E] hover:bg-slate-100 shadow-md flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}