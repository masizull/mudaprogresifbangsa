"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, TrendingUp, Rocket, ArrowRight, BookOpen } from "lucide-react";

const STAGES = [
  {
    id: 0,
    step: "Tahap 01 • Api Pengetahuan",
    title: "Pendidikan Kebangsaan & Kepemudaan",
    desc: "Menyalakan obor intelektualitas, kesadaran sejarah, dan kepemimpinan beretika agar generasi muda siap menjawab tantangan zaman.",
    spotlightTitle: "Menyalakan Kesadaran Kritis Lewat Sekolah Pemikiran & Forum",
    spotlightOutput: "Output Nyata: Penyelenggaraan kelas logika, filsafat, sejarah kebangsaan, literasi AI, serta diskusi publik bulanan Progresif Forum.",
    pillarLink: "Fondasi Akademi Progresif",
    pillarHref: "/program/akademi-progresif",
    offsetClass: "md:translate-y-6",
    accentGrad: "from-amber-400 via-orange-500 to-blue-600",
    badgeColor: "text-amber-600",
    visualType: "torch"
  },
  {
    id: 1,
    step: "Tahap 02 • Tangga Kemandirian",
    title: "Pengentasan Kemiskinan Berkelanjutan",
    desc: "Membangun anak tangga mobilitas sosial-ekonomi melalui pendidikan kesetaraan (PKBM), pelatihan vokasi kerja, dan inkubasi UMKM.",
    spotlightTitle: "Menaiki Tangga Mobilitas Ekonomi Lewat PKBM & Sekolah Vokasi",
    spotlightOutput: "Output Nyata: Layanan ijazah pendidikan kesetaraan (PKBM), pelatihan kejuruan berbasis proyek, dan inkubasi usaha keluarga.",
    pillarLink: "Tangga Vokasi & Care",
    pillarHref: "/program/vokasi-progresif",
    offsetClass: "md:translate-y-0",
    accentGrad: "from-blue-500 via-indigo-500 to-amber-400",
    badgeColor: "text-[#2454BE]",
    visualType: "stairs"
  },
  {
    id: 2,
    step: "Tahap 03 • Roket Akselerasi",
    title: "Riset Kebijakan & Sinergi Kolaboratif",
    desc: "Meluncurkan perubahan sosial berkelanjutan berbasis data advokasi yang presisi serta kolaborasi multipihak di seluruh Indonesia.",
    spotlightTitle: "Meluncurkan Dampak Sosial Berbasis Bukti & Kolaborasi Nasional",
    spotlightOutput: "Output Nyata: Penerbitan Policy Brief kuartalan, pos kesehatan keliling Progresif Care, serta unit reaksi cepat Tanggap Progresif.",
    pillarLink: "Akselerasi Riset & Tanggap",
    pillarHref: "/program/progresif-care",
    offsetClass: "md:-translate-y-6",
    accentGrad: "from-emerald-400 via-cyan-500 to-blue-600",
    badgeColor: "text-emerald-600",
    visualType: "rocket"
  }
];

function StageVisual({ type }: { type: string }) {
  if (type === "torch") {
    return (
      <div className="relative w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-[#0A1938] via-[#132B59] to-[#1E3F7A] p-3 shadow-lg border border-amber-400/40 flex items-center justify-center overflow-hidden">
        <div className="absolute -top-4 w-16 h-16 bg-amber-400/30 rounded-full blur-xl animate-pulse" />
        <div className="relative flex flex-col items-center">
          <Flame className="w-10 h-10 text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
          <BookOpen className="w-5 h-5 text-amber-200/90 -mt-1" />
        </div>
      </div>
    );
  }
  if (type === "stairs") {
    return (
      <div className="relative w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-[#0A1938] via-[#132B59] to-[#1E3F7A] p-3 shadow-lg border border-sky-400/40 flex items-center justify-center overflow-hidden">
        <div className="absolute -bottom-4 w-16 h-16 bg-sky-400/30 rounded-full blur-xl animate-pulse" />
        <TrendingUp className="w-11 h-11 text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
      </div>
    );
  }
  return (
    <div className="relative w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-[#0A1938] via-[#132B59] to-[#1E3F7A] p-3 shadow-lg border border-emerald-400/40 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl animate-pulse" />
      <Rocket className="w-11 h-11 text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
    </div>
  );
}

export default function InteractiveAboutJourney() {
  const [activeStage, setActiveStage] = useState(0);
  const current = STAGES[activeStage];

  return (
    <motion.section
      id="tentang-kami"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
      className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6"
    >
      {/* 1. Centered Header (Wajib Rata Tengah & Tanpa Pill Badge AI) */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#2454BE]">
          TENTANG YAYASAN
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mt-1.5 tracking-tight leading-snug">
          Membangun Karakter Bangsa Lewat Gerakan Intelektual & Aksi Nyata
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
          Yayasan Muda Progresif Bangsa didirikan pada tahun 2025 sebagai ikhtiar
          kolektif pemuda Indonesia melalui tiga tahapan pergerakan yang saling
          terhubung: menyalakan api pengetahuan, membangun tangga kemandirian,
          dan meluncurkan dampak sosial berbasis riset.
        </p>
      </div>

      {/* 2. Panggung Analogi 3 Tahap Berjenjang (Anak Tangga Naik dengan Animated SVG Line) */}
      <div className="relative pt-4 pb-6">
        <svg
          className="hidden md:block absolute top-1/2 left-8 right-8 -translate-y-12 w-[calc(100%-4rem)] h-28 pointer-events-none z-0"
          viewBox="0 0 900 120"
          fill="none"
        >
          <path
            d="M 80 95 C 260 95, 300 55, 450 55 C 600 55, 640 15, 820 15"
            stroke="#CBD5E1"
            strokeWidth="3"
            strokeDasharray="8 6"
            className="animate-pulse opacity-70"
          />
        </svg>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {STAGES.map((item, idx) => {
            const isSelected = activeStage === idx;
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setActiveStage(idx)}
                onMouseEnter={() => setActiveStage(idx)}
                className={`cursor-pointer ${item.offsetClass}`}
              >
                <div
                  className={`rounded-3xl p-5 sm:p-6 text-center transition-all duration-300 ${
                    isSelected
                      ? "bg-white border-2 border-[#2454BE] shadow-2xl ring-4 ring-[#2454BE]/10"
                      : "bg-white/95 hover:bg-white border border-slate-200/90 shadow-md"
                  }`}
                >
                  <StageVisual type={item.visualType} />
                  
                  <p className={`text-[11px] font-mono font-bold uppercase tracking-wider mt-4 ${item.badgeColor}`}>
                    {item.step}
                  </p>
                  
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mt-1 leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                  
                  <Link
                    href={item.pillarHref}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] font-bold text-[#2454BE] hover:text-[#1D469E] transition-colors"
                  >
                    <span>{item.pillarLink}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 3. Interactive Bottom Spotlight Bar (Memperbarui Output Nyata Secara Realtime) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
          className="mt-6 bg-gradient-to-r from-[#0A1938] via-[#102654] to-[#17377A] text-white rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left border border-white/10"
        >
          <div className="space-y-1">
            <p className="text-[11px] font-mono font-bold text-amber-300 uppercase tracking-wider">
              {current.step}
            </p>
            <h4 className="text-sm sm:text-base font-extrabold text-white">
              {current.spotlightTitle}
            </h4>
            <p className="text-xs text-blue-100/90 max-w-2xl leading-relaxed">
              {current.spotlightOutput}
            </p>
          </div>
          <Link
            href={current.pillarHref}
            className="shrink-0 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <span>Buka Pilar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}