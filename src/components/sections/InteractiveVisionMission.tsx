"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  BarChart3,
  Users,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Quote,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface MissionData {
  number: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  points: string[];
  linkText: string;
  linkHref: string;
  icon: React.ElementType;
  accentColorHex: string;
  iconGradient: string;
}

const MISSIONS: MissionData[] = [
  {
    number: "01",
    title: "Pendidikan Inklusif & Kesetaraan",
    shortTitle: "Pendidikan & PKBM",
    subtitle: "Akses Ijazah & Nalar Kritis",
    description:
      "Menyelenggarakan pendidikan nonformal kesetaraan (PKBM Paket A, B, & C) gratis berijazah resmi negara, dikombinasikan dengan kelas filsafat logika dan literasi masa depan.",
    points: [
      "Ijazah Resmi Paket A, B, & C",
      "Sekolah Pemikiran & Logika Kritis",
      "Beasiswa Pendidikan Keluarga Duafa"
    ],
    linkText: "Kunjungi Akademi Progresif",
    linkHref: "/program/akademi-progresif",
    icon: GraduationCap,
    accentColorHex: "#38BDF8",
    iconGradient: "linear-gradient(135deg, #0284C7, #38BDF8)"
  },
  {
    number: "02",
    title: "Riset Kebijakan Berbasis Bukti",
    shortTitle: "Riset Kebijakan",
    subtitle: "Advokasi Data Objektif",
    description:
      "Memproduksi riset sosial terapan dan policy brief kuartalan berbasis data empiris teruji guna mengadvokasi pemangku kebijakan publik dalam menuntaskan persoalan mendasar masyarakat.",
    points: [
      "Policy Brief Kuartalan Terverifikasi",
      "Kajian Empiris Isu Kepemudaan",
      "Action Lab Pemecahan Masalah Sosial"
    ],
    linkText: "Eksplorasi Unit Riset",
    linkHref: "/program/akademi-progresif",
    icon: BarChart3,
    accentColorHex: "#0B72E7",
    iconGradient: "linear-gradient(135deg, #1D4ED8, #0B72E7)"
  },
  {
    number: "03",
    title: "Kaderisasi Pemuda Berintegritas",
    shortTitle: "Kaderisasi Publik",
    subtitle: "Etika & Jiwa Negarawan",
    description:
      "Mencetak calon pemimpin muda berintegritas tinggi dengan wawasan kebangsaan kokoh, etika tata kelola publik yang bersih, dan solidaritas pergerakan lintas daerah.",
    points: [
      "Leadership Fellowship Terpadu",
      "Forum Dialektika Publik Bulanan",
      "Jejaring Relawan Penggerak Daerah"
    ],
    linkText: "Lihat Forum & Kaderisasi",
    linkHref: "/program/akademi-progresif",
    icon: Users,
    accentColorHex: "#FF5500",
    iconGradient: "linear-gradient(135deg, #E04B00, #FF5500)"
  },
  {
    number: "04",
    title: "Vokasi Mandiri & Kemanusiaan",
    shortTitle: "Vokasi & Kemanusiaan",
    subtitle: "Kemandirian & Tanggap Bencana",
    description:
      "Membangun kemandirian ekonomi keluarga melalui pelatihan vokasi kerja, sertifikasi profesi industri, layanan pos kesehatan preventif, dan kesiapsiagaan korps relawan bencana.",
    points: [
      "Pelatihan Vokasi & Sertifikasi Kerja",
      "Inkubasi UMKM Mandiri Pemuda",
      "Pos Kesehatan & Siaga Bencana"
    ],
    linkText: "Kunjungi Vokasi & Care",
    linkHref: "/program/vokasi-progresif",
    icon: HeartHandshake,
    accentColorHex: "#A855F7",
    iconGradient: "linear-gradient(135deg, #9333EA, #FF5500)"
  }
];

export default function InteractiveVisionMission() {
  const [activeMisiIdx, setActiveMisiIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const totalMissions = MISSIONS.length;
  const currentMisi = MISSIONS[activeMisiIdx] || MISSIONS[0];
  const CurrentIcon = currentMisi.icon;

  // Auto-cycle through missions every 6 seconds unless paused by mouse hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveMisiIdx((prev) => (prev + 1) % totalMissions);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, totalMissions]);

  const handlePrev = () => {
    setActiveMisiIdx((prev) => (prev - 1 + totalMissions) % totalMissions);
  };

  const handleNext = () => {
    setActiveMisiIdx((prev) => (prev + 1) % totalMissions);
  };

  return (
    <section
      id="visi-misi"
      className="py-12 sm:py-16 bg-[#081426] text-white relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Ambient Background Glows */}
      <div
        className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-[120px] pointer-events-none transition-colors duration-700 opacity-20"
        style={{ backgroundColor: currentMisi.accentColorHex }}
      />
      <div className="absolute -bottom-10 right-10 w-80 h-80 rounded-full bg-blue-600/15 blur-[100px] pointer-events-none" />

      {/* 2. Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "28px 28px"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-6 sm:space-y-8">
        
        {/* ======================================================== */}
        {/* HEADER SECTION (RINGKAS & RATA TENGAH)                   */}
        {/* ======================================================== */}
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono font-bold tracking-widest text-sky-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
            <span>VISI &amp; MISI STRATEGIS</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            Komitmen &amp; Arah <span className="text-[#FF5500]">Pergerakan Bangsa</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
            Menghubungkan gagasan nalar kritis pemuda menjadi aksi sosial nyata yang terukur dan berkeadilan.
          </p>
        </div>

        {/* ======================================================== */}
        {/* UNIFIED COMPACT 2-COLUMN HUB (VISI KIRI, MISI KANAN)     */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* ---------------------------------------------------- */}
          {/* KOLOM KIRI: SPOTLIGHT VISI UTAMA (lg:col-span-5)     */}
          {/* ---------------------------------------------------- */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#0F2342] via-[#112749] to-[#0A1830] p-6 sm:p-7 border border-blue-400/25 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Top Identity Stripe: Biru, Putih & Oren */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2454BE] via-white to-[#FF5500]" />

            <div>
              {/* Header Visi */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#2454BE] via-blue-500 to-[#FF5500] text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-wider text-sky-300 uppercase">
                    Visi Utama Gerakan
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/10">
                  Yayasan MPB
                </span>
              </div>

              {/* Teks Visi Padat & Bermakna */}
              <blockquote className="text-sm sm:text-base font-bold text-white leading-relaxed">
                “Membangun ekosistem intelektual, pendidikan berkualitas, dan kepemimpinan yang mendorong generasi muda memahami persoalan bangsa, menghasilkan pengetahuan, merumuskan solusi, dan menggerakkan perubahan sosial berkelanjutan.”
              </blockquote>
            </div>

            {/* 3 Pilar Filosofis & Tautan Dokumen */}
            <div className="pt-4 mt-5 border-t border-white/10 space-y-3">
              <div className="flex flex-wrap gap-1.5 text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-[#2454BE]/20 text-sky-300 border border-sky-400/30 text-[11px] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  Intelektualitas Kritis
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/10 text-slate-200 border border-white/20 text-[11px] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  Kemandirian Berdaya
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#FF5500]/20 text-orange-300 border border-orange-400/30 text-[11px] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                  Dampak Nyata
                </span>
              </div>

              <Link
                href="/tentang-kami/visi-misi"
                className="text-[11px] font-bold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors group/link pt-1"
              >
                <span>Pelajari Dokumen Visi &amp; Misi Lengkap</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform text-[#FF5500]" />
              </Link>
            </div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* KOLOM KANAN: STUDIO 4 MISI STRATEGIS (lg:col-span-7) */}
          {/* ---------------------------------------------------- */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0C1A33] border border-white/10 p-5 sm:p-6 shadow-xl flex flex-col justify-between">
            
            {/* Top Switcher: 4 Misi Selector Pills */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold tracking-wider text-slate-300 uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" style={{ color: currentMisi.accentColorHex }} />
                  <span>4 Misi Strategis (Pilih Misi):</span>
                </span>
                
                {/* Arrow Controls */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Misi Sebelumnya"
                    className="p-1 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Misi Selanjutnya"
                    className="p-1 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 4 Segmented Interactive Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-black/30 rounded-xl border border-white/10">
                {MISSIONS.map((m, idx) => {
                  const isSelected = activeMisiIdx === idx;
                  return (
                    <button
                      key={m.number}
                      type="button"
                      onClick={() => setActiveMisiIdx(idx)}
                      className={`px-2.5 py-2 rounded-lg text-left transition-all duration-200 relative ${
                        isSelected
                          ? "bg-white/15 text-white shadow-sm border border-white/20"
                          : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span
                          className="font-mono text-[10px] font-extrabold"
                          style={{ color: isSelected ? m.accentColorHex : "#64748B" }}
                        >
                          {m.number}
                        </span>
                        <span className="text-xs font-bold truncate">{m.shortTitle}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Active Misi Card with Smooth Motion */}
            <div className="my-auto py-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMisi.number}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22 }}
                  className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden"
                >
                  {/* Subtle Background Watermark Number */}
                  <span className="absolute -bottom-3 -right-2 text-7xl font-mono font-black text-white/[0.04] select-none pointer-events-none">
                    {currentMisi.number}
                  </span>

                  <div className="flex items-start gap-3.5">
                    <div
                      className="w-10 h-10 rounded-xl text-white flex items-center justify-center shrink-0 shadow-md"
                      style={{ background: currentMisi.iconGradient }}
                    >
                      <CurrentIcon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span
                        className="text-[10px] font-mono font-extrabold uppercase tracking-wider block"
                        style={{ color: currentMisi.accentColorHex }}
                      >
                        MISI {currentMisi.number} • {currentMisi.subtitle}
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-white mt-0.5 leading-snug">
                        {currentMisi.title}
                      </h3>
                      <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                        {currentMisi.description}
                      </p>
                    </div>
                  </div>

                  {/* 3 Focus Action Points */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3.5 pt-3 border-t border-white/10">
                    {currentMisi.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-2 rounded-lg bg-black/20 border border-white/5 flex items-center gap-2 text-xs text-slate-200"
                      >
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0"
                          style={{ color: currentMisi.accentColorHex }}
                        />
                        <span className="text-[11px] font-medium leading-tight">{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Footer Misi & CTA Link */}
            <div className="pt-2 flex items-center justify-between gap-3 border-t border-white/10 mt-1">
              <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                Fokus Aksi: <strong className="text-white">{currentMisi.subtitle}</strong>
              </span>
              <Link
                href={currentMisi.linkHref}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 shadow-md border border-white/20 ml-auto"
                style={{
                  background: `linear-gradient(135deg, ${currentMisi.accentColorHex}, #2454BE)`
                }}
              >
                <span>{currentMisi.linkText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
