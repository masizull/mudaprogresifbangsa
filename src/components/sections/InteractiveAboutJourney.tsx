"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  BarChart3,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";

interface MilestoneData {
  id: number;
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  desc: string;
  outputs: string[];
  pillarName: string;
  pillarHref: string;
  stats: { label: string; value: string };
  icon: React.ElementType;
  image: string;
  glowColor: string;
  badgeBg: string;
}

const MILESTONES: MilestoneData[] = [
  {
    id: 0,
    number: "01",
    badge: "Fase Literasi & Karakter",
    title: "Fondasi Intelektual & Pendidikan Kesetaraan",
    subtitle: "Membuka Ruang Berpikir Kritis, Sejarah Kebangsaan & Akses Ijazah Formal",
    desc: "Membangun kesadaran nalar kritis generasi muda melalui dialektika pemikiran kebangsaan, kelas filsafat dan etika publik, literasi teknologi AI, serta membuka akses ijazah kesetaraan (PKBM Paket A, B, dan C) bagi mereka yang terputus dari jalur sekolah formal.",
    outputs: [
      "Penyelenggaraan Sekolah Pemikiran Progresif & Dialog Publik Bulanan",
      "Layanan Pendidikan Kesetaraan PKBM Berizin Resmi & Terakreditasi",
      "Modul Pembelajaran Logika Kritis, Literasi Data, dan Etika Digital"
    ],
    pillarName: "Jelajahi Akademi Progresif",
    pillarHref: "/program/akademi-progresif",
    stats: { label: "Fokus Gerakan", value: "Pendidikan & Karakter" },
    icon: BookOpen,
    image: "/images/milestone-fase1.jpg",
    glowColor: "rgba(37, 99, 235, 0.4)",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    id: 1,
    number: "02",
    badge: "Fase Kemandirian Ekonomi",
    title: "Inkubasi Vokasi & Pemberdayaan Ekonomi",
    subtitle: "Keahlian Terapan Siap Kerja, Sertifikasi Kompetensi & Pengembangan Usaha",
    desc: "Menghubungkan kapasitas intelektual ke dalam kemandirian ekonomi keluarga. Menginkubasi pemuda dan keluarga rentan dengan keterampilan teknis terapan, sertifikasi kompetensi industri, pembinaan UMKM, dan permodalan bergulir demi memutus mata rantai kemiskinan struktural.",
    outputs: [
      "Pelatihan Vokasi Kejuruan (Digital Marketing, Coding, Manufaktur & Kreatif)",
      "Sertifikasi Kompetensi Terstandarisasi Industri & Pendampingan Magang",
      "Inkubasi Usaha Mikro Keluarga & Bantuan Alat Produksi Terarah"
    ],
    pillarName: "Jelajahi Vokasi Progresif",
    pillarHref: "/program/vokasi-progresif",
    stats: { label: "Fokus Gerakan", value: "Keahlian & Usaha Mandiri" },
    icon: Briefcase,
    image: "/images/milestone-fase2.jpg",
    glowColor: "rgba(2, 132, 199, 0.4)",
    badgeBg: "bg-sky-50 text-sky-700 border-sky-200"
  },
  {
    id: 2,
    number: "03",
    badge: "Fase Dampak & Advokasi",
    title: "Riset Kebijakan & Respon Sosial Nyata",
    subtitle: "Advokasi Kebijakan Publik Berbasis Data Presisi & Kesiapsiagaan Aksi Kemanusiaan",
    desc: "Melipatgandakan dampak gerakan melalui produksi riset kebijakan berbasis bukti untuk advokasi pembuat kebijakan nasional, dipadukan dengan jejaring respon cepat kemanusiaan, pos kesehatan keliling, serta bantuan darurat di daerah rentan dan terdampak bencana.",
    outputs: [
      "Penerbitan Policy Brief Kuartalan & Jurnal Riset Kebijakan Terapan",
      "Pos Kesehatan Keliling & Layanan Pemenuhan Gizi Anak Sekolah",
      "Unit Reaksi Cepat Tanggap Bencana & Mobilisasi Relawan Pemuda"
    ],
    pillarName: "Jelajahi Care & Tanggap",
    pillarHref: "/program/progresif-care",
    stats: { label: "Fokus Gerakan", value: "Riset & Aksi Sosial" },
    icon: BarChart3,
    image: "/images/milestone-fase3.jpg",
    glowColor: "rgba(79, 70, 229, 0.4)",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200"
  }
];

export default function InteractiveAboutJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const current = MILESTONES[activeStep];
  const IconComponent = current.icon;
  const basePath = process.env.NODE_ENV === "production" ? "/mudaprogresifbangsa" : "";

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % MILESTONES.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + MILESTONES.length) % MILESTONES.length);
  };

  return (
    <section id="tentang-kami" className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6">
      {/* 1. Centered Section Header (Symmetrical, Clean, No Yellow/Orange Metaphors) */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#2454BE]">
          TENTANG YAYASAN
        </span>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mt-1.5 tracking-tight leading-snug">
          Membangun Karakter Bangsa Lewat Gerakan Intelektual & Aksi Nyata
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
          Yayasan Muda Progresif Bangsa didirikan pada tahun 2025 sebagai ikhtiar
          kolektif pemuda Indonesia melalui tiga tahapan pergerakan terintegrasi:
          pendidikan nalar kritis, kemandirian ekonomi terapan, dan transformasi
          sosial berbasis riset kebijakan presisi.
        </p>
      </div>

      {/* 2. Symmetrical Interactive Milestone Progress Bar (100% Simetris & Adjustable) */}
      <div className="max-w-3xl mx-auto mb-8 sm:mb-10 px-2 select-none">
        <div className="relative flex items-center justify-between">
          {/* Background Track Line (Simetris Sempurna) */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 bg-slate-200 rounded-full z-0" />
          
          {/* Animated Active Progress Fill Line */}
          <motion.div
            className="absolute top-1/2 left-0 -translate-y-1/2 h-1 bg-gradient-to-r from-[#2454BE] via-blue-600 to-[#1D4ED8] rounded-full z-0 transition-all duration-500 ease-out"
            animate={{
              width: activeStep === 0 ? "0%" : activeStep === 1 ? "50%" : "100%"
            }}
          />

          {/* Symmetrical Milestone Step Nodes */}
          {MILESTONES.map((m, idx) => {
            const isActive = activeStep === idx;
            const isCompleted = activeStep >= idx;
            const StepIcon = m.icon;

            return (
              <div key={m.id} className="relative z-10 flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 shadow-md ${
                    isActive
                      ? "bg-[#2454BE] text-white ring-4 ring-blue-500/25 scale-110 shadow-blue-500/30"
                      : isCompleted
                      ? "bg-blue-100 text-[#2454BE] hover:bg-blue-200 hover:scale-105"
                      : "bg-white text-slate-400 border border-slate-200 hover:border-slate-300 hover:text-slate-600 hover:scale-105"
                  }`}
                  aria-label={`Pilih Milestone ${m.number}`}
                >
                  <StepIcon className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`text-[11px] font-bold mt-2 tracking-wide transition-colors ${
                    isActive ? "text-[#2454BE]" : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  Fase {m.number}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Interactive Stage: Dynamic Milestone Display (Symmetrical 2-Column Showcase) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-9 border border-slate-200/90 shadow-xl relative overflow-hidden mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Kolom Kiri: 3D Visual Milestone Model Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.94, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative w-full max-w-[320px] aspect-[4/3] sm:aspect-square rounded-3xl bg-gradient-to-br from-[#081426] via-[#0F2342] to-[#162F56] p-6 text-white flex flex-col justify-between shadow-2xl border border-blue-500/20 overflow-hidden"
              >
                {/* Ambient Radial Lights */}
                <div
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-2xl pointer-events-none opacity-60"
                  style={{ background: current.glowColor }}
                />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-blue-600/20 rounded-full blur-2xl pointer-events-none" />

                {/* Top Telemetry / Status Pill */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-200 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                    {current.badge}
                  </span>
                  <span className="font-mono text-sm font-extrabold text-blue-300">
                    Fase {current.number}
                  </span>
                </div>

                {/* Center 3D Model Image Showcase */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto py-2">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.6)] border border-blue-400/40 group bg-slate-950"
                  >
                    <Image
                      src={`${basePath}${current.image}`}
                      alt={current.title}
                      fill
                      priority
                      sizes="(max-width: 640px) 150px, 180px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081426]/70 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </div>

                {/* Bottom Impact Telemetry Card */}
                <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-blue-200 font-medium">
                      {current.stats.label}
                    </p>
                    <p className="text-xs font-bold text-white">
                      {current.stats.value}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-blue-500/30 border border-blue-400/40 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-sky-300" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Step Controls (Sebelumnya / Selanjutnya) */}
            <div className="flex items-center gap-3 mt-4">
              <button
                type="button"
                onClick={prevStep}
                className="px-3 py-1.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1 transition-all"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Sebelumnya</span>
              </button>
              <span className="text-xs font-mono text-slate-400">
                {activeStep + 1} / {MILESTONES.length}
              </span>
              <button
                type="button"
                onClick={nextStep}
                className="px-3 py-1.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1 transition-all"
              >
                <span>Selanjutnya</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Kolom Kanan: Narrative Content & Action Outcomes */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <span className={`inline-block text-[11px] font-bold px-3 py-1 rounded-full border mb-2 ${current.badgeBg}`}>
                    {current.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                    {current.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] font-semibold text-[#2454BE] mt-1">
                    {current.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {current.desc}
                </p>

                {/* 3 Output Konkret */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                    Target Aksi Terukur:
                  </p>
                  <ul className="space-y-1.5">
                    {current.outputs.map((out, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#2454BE] shrink-0 mt-0.5" />
                        <span className="leading-snug">{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA Link */}
                <div className="pt-3">
                  <Link
                    href={current.pillarHref}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2454BE] hover:bg-[#1D469E] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    <span>{current.pillarName}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 4. Symmetrical 3 Quick-Glance Milestone Cards (Selaras, Simetris & Responsif) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {MILESTONES.map((item, idx) => {
          const isSelected = activeStep === idx;
          const CardIcon = item.icon;

          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer rounded-2xl p-5 text-left transition-all duration-200 border flex flex-col justify-between ${
                isSelected
                  ? "bg-blue-50/60 border-2 border-[#2454BE] shadow-md ring-2 ring-[#2454BE]/10"
                  : "bg-white hover:bg-slate-50 border-slate-200/80 shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                      isSelected ? "bg-[#2454BE] text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <CardIcon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    Fase {item.number}
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-slate-900 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <span className={isSelected ? "text-[#2454BE]" : "text-slate-500"}>
                  {isSelected ? "Aktif Ditampilkan" : "Lihat Detail"}
                </span>
                <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "text-[#2454BE] translate-x-1" : "text-slate-400"}`} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
