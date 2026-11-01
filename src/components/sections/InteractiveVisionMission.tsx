"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Flame, TrendingUp, Rocket, CheckCircle2 } from "lucide-react";

const MISSIONS = [
  {
    code: "01",
    tag: "Tangga Intelektual",
    shortTitle: "Pendidikan Alternatif & Kesetaraan",
    pillar: "Pilar Penggerak: Akademi & Vokasi Progresif",
    fullTitle: "Membangun Intelektualitas & Akses Pendidikan Setara",
    desc: "Menyelenggarakan ekosistem pendidikan nonformal (PKBM), sekolah pemikiran, dan kelas vokasi yang inklusif serta dapat diakses setara oleh seluruh lapisan masyarakat.",
    indicator: "Target Output: Kelas PKBM, Kurikulum Logika & AI",
    progress: "88%",
    icon: TrendingUp
  },
  {
    code: "02",
    tag: "Kompas Pengetahuan",
    shortTitle: "Riset Terapan & Rekomendasi Kebijakan",
    pillar: "Pilar Penggerak: Progresif Research & Action Lab",
    fullTitle: "Memproduksi Pengetahuan & Advokasi Berbasis Bukti",
    desc: "Menghasilkan riset sosial terapan kuartalan, kajian strategis, dan policy brief berbasis data valid yang membantu masyarakat menyelesaikan persoalan nyata.",
    indicator: "Target Output: Policy Brief Kuartalan & Jurnal Populer",
    progress: "92%",
    icon: Compass
  },
  {
    code: "03",
    tag: "Obor Kepemimpinan",
    shortTitle: "Kaderisasi Kepemimpinan Berintegritas",
    pillar: "Pilar Penggerak: Progresif Forum & Inkubator Kader",
    fullTitle: "Menyiapkan Kepemimpinan Muda yang Berintegritas",
    desc: "Mengembangkan kader pemuda yang memiliki etika publik, tanggung jawab sosial, dan keberanian memperjuangkan kemajuan bangsa.",
    indicator: "Target Output: Forum Diskusi Bulanan & Kaderisasi",
    progress: "85%",
    icon: Flame
  },
  {
    code: "04",
    tag: "Roket Aksi Sosial",
    shortTitle: "Kemandirian Ekonomi, Kesehatan & Tanggap",
    pillar: "Pilar Penggerak: Progresif Care & Tanggap Progresif",
    fullTitle: "Menggerakkan Perubahan Sosial & Pengentasan Kemiskinan",
    desc: "Mendorong gagasan menjadi pemberdayaan UMKM, layanan kesehatan preventif keluarga, beasiswa pendidikan, dan aksi tanggap bencana.",
    indicator: "Target Output: Pos Kesehatan, Beasiswa & Relawan Siaga",
    progress: "95%",
    icon: Rocket
  }
];

export default function InteractiveVisionMission() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = MISSIONS[activeIdx];

  return (
    <motion.section
      id="visi-misi"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
      className="py-12 sm:py-16 bg-[#081426] text-white relative overflow-hidden"
    >
      {/* Background Lighting Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* 1. Header Wajib Rata Tengah */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-400">
            KOMITMEN STRATEGIS
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mt-1.5 tracking-tight leading-snug">
            Visi & Peta Jalan Interaktif Yayasan
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            Klik setiap titik misi pada command hub strategis di bawah untuk melihat
            bagaimana visi besar diterjemahkan menjadi terobosan aksi terukur.
          </p>
        </div>

        {/* 2. Interactive Command Hub (12 Kolom) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Kolom Kiri: 4 Tombol Node Misi Interaktif (5 Kolom) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2.5">
            {MISSIONS.map((m, idx) => {
              const active = activeIdx === idx;
              const Icon = m.icon;
              return (
                <motion.button
                  key={m.code}
                  type="button"
                  whileHover={{ x: 4 }}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-200 flex items-center gap-3.5 border ${
                    active
                      ? "bg-gradient-to-r from-[#2454BE] to-[#1D469E] border-amber-400/70 shadow-lg ring-2 ring-amber-400/20"
                      : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl font-mono font-extrabold text-xs flex items-center justify-center shrink-0 shadow-inner ${
                      active ? "bg-amber-400 text-slate-950" : "bg-white/10 text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-bold">
                        MISI {m.code} • {m.tag}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-[13px] font-extrabold text-white truncate mt-0.5">
                      {m.shortTitle}
                    </h3>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Kolom Kanan: Panggung Utama Visi & Dynamic Mission Spotlight (7 Kolom) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#0A1938] via-[#102654] to-[#17377A] rounded-3xl p-6 sm:p-7 border border-white/15 shadow-2xl flex flex-col justify-between gap-5">
            {/* Bagian Atas: Kutipan Visi Utama Resmi */}
            <div className="pb-5 border-b border-white/15 text-center">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-sky-300 block">
                VISI UTAMA • AKTA NOTARIS NO. 14 TAHUN 2025
              </span>
              <blockquote className="text-xs sm:text-[14px] font-semibold text-white mt-2.5 leading-relaxed italic max-w-xl mx-auto">
                “Membangun ekosistem intelektual, pendidikan berkualitas, dan
                kepemimpinan yang mendorong generasi muda memahami persoalan
                bangsa, menghasilkan pengetahuan, merumuskan solusi, dan
                menggerakkan perubahan sosial yang berkelanjutan.”
              </blockquote>
            </div>

            {/* Bagian Bawah: Panggung Spotlight Misi Aktif dengan Framer Motion */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.code}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
                className="bg-black/25 rounded-2xl p-5 border border-white/10 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-amber-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    MISI {current.code} • {current.tag.toUpperCase()}
                  </span>
                  <span className="text-[11px] font-semibold text-sky-300 bg-sky-950/60 px-2.5 py-0.5 rounded-full border border-sky-400/30">
                    {current.pillar}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-extrabold text-white leading-snug">
                  {current.fullTitle}
                </h3>
                
                <p className="text-xs text-blue-100/90 leading-relaxed">
                  {current.desc}
                </p>

                {/* Progress Bar & Indikator Capaian */}
                <div className="pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between text-[11px] text-slate-300 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      {current.indicator}
                    </span>
                    <span className="font-mono font-bold text-amber-300">
                      {current.progress}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: current.progress }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-sky-400 via-blue-500 to-amber-400"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}