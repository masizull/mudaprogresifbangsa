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
    <section className="relative -mt-20 pt-36 sm:pt-40 lg:pt-44 pb-14 sm:pb-16 lg:pb-20 overflow-hidden bg-[#0A1838] text-white">
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

        {/* Kolom Kanan: Interactive Physical Sliding Stacked Cards (Proporsional & Bebas Tabrakan) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative w-full max-w-[540px] h-[375px] sm:h-[395px] flex items-center justify-center select-none"
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
                        className="mt-3 block w-full py-2 sm:py-2.5 rounded-xl bg-[#2454BE] hover:bg-[#1D469E] text-white text-center font-bold text-xs sm:text-[13px] shadow transition-colors"
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

          {/* Tombol Navigasi Bulat & Indikator Titik dengan Jarak Bersih (Anti-Tertimpa) */}
          <div className="mt-6 sm:mt-7 flex items-center gap-3.5 relative z-40">
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
                    i === active ? "w-6 bg-amber-400" : "w-2.5 bg-white/40 hover:bg-white/70"
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