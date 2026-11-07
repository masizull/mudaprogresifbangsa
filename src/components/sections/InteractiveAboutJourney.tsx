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
  CheckCircle2
} from "lucide-react";

interface MilestoneData {
  id: number;
  number: string;
  phaseLabel: string;
  title: string;
  subtitle: string;
  desc: string;
  outputs: string[];
  pillarName: string;
  pillarHref: string;
  icon: React.ElementType;
  image: string;
  nodeColor: string;
  nodeActiveRing: string;
  ctaBg: string;
  accentColor: string;
  checkColor: string;
}

const MILESTONES: MilestoneData[] = [
  {
    id: 0,
    number: "01",
    phaseLabel: "Literasi & Karakter",
    title: "Fondasi Intelektual & PKBM",
    subtitle: "Pendidikan Nalar Kritis & Ijazah Formal Kesetaraan",
    desc: "Membangun kesadaran kritis generasi muda melalui dialektika kebangsaan, literasi teknologi AI, serta membuka akses ijazah kesetaraan resmi (PKBM Paket A, B, C) bagi yang membutuhkan.",
    outputs: [
      "Sekolah Pemikiran Progresif & Dialog Publik Terjadwal",
      "Pendidikan Kesetaraan PKBM Berizin Resmi Terakreditasi",
      "Modul Nalar Logika Kritis, Literasi Data & Etika Digital"
    ],
    pillarName: "Jelajahi Akademi Progresif",
    pillarHref: "/program/akademi-progresif",
    icon: BookOpen,
    image: "/images/milestone-fase1.jpg",
    nodeColor: "bg-[#2454BE]",
    nodeActiveRing: "ring-blue-500/30 shadow-blue-500/40",
    ctaBg: "bg-[#2454BE] hover:bg-[#1D469E] shadow-blue-500/30",
    accentColor: "text-[#2454BE]",
    checkColor: "text-[#2454BE]"
  },
  {
    id: 1,
    number: "02",
    phaseLabel: "Kemandirian Ekonomi",
    title: "Inkubasi Vokasi & Wirausaha",
    subtitle: "Keahlian Terapan Siap Kerja & Sertifikasi Industri",
    desc: "Menghubungkan nalar kritis ke kemandirian ekonomi riil. Menginkubasi pemuda rentan dengan keterampilan vokasi praktis, sertifikasi industri, dan pendampingan UMKM.",
    outputs: [
      "Pelatihan Vokasi Praktis (Digital, Coding & Kreatif)",
      "Sertifikasi Kompetensi Industri & Penyaluran Kerja",
      "Inkubasi Usaha Mikro & Dukungan Alat Produksi Mandiri"
    ],
    pillarName: "Jelajahi Vokasi Progresif",
    pillarHref: "/program/vokasi-progresif",
    icon: Briefcase,
    image: "/images/milestone-fase2.jpg",
    nodeColor: "bg-[#0B72E7]",
    nodeActiveRing: "ring-sky-500/30 shadow-sky-500/40",
    ctaBg: "bg-[#0B72E7] hover:bg-[#095ec0] shadow-sky-500/30",
    accentColor: "text-[#0B72E7]",
    checkColor: "text-[#0B72E7]"
  },
  {
    id: 2,
    number: "03",
    phaseLabel: "Dampak & Advokasi",
    title: "Riset Kebijakan & Respon Sosial",
    subtitle: "Advokasi Berbasis Data & Aksi Kemanusiaan Nyata",
    desc: "Melipatgandakan dampak gerakan lewat produksi riset kebijakan berbasis bukti untuk advokasi publik, dipadukan unit siaga respon kemanusiaan dan pos kesehatan keliling.",
    outputs: [
      "Penerbitan Policy Brief Kuartalan & Jurnal Riset Terapan",
      "Pos Kesehatan Keliling & Pemenuhan Gizi Anak Rentan",
      "Unit Reaksi Tanggap Bencana & Relawan Kemanusiaan"
    ],
    pillarName: "Jelajahi Care & Tanggap",
    pillarHref: "/program/progresif-care",
    icon: BarChart3,
    image: "/images/milestone-fase3.jpg",
    nodeColor: "bg-[#FF5500]",
    nodeActiveRing: "ring-orange-500/30 shadow-orange-500/40",
    ctaBg: "bg-gradient-to-r from-[#FF5500] to-[#E04B00] hover:from-[#E04B00] hover:to-[#C74000] shadow-orange-500/35",
    accentColor: "text-[#FF5500]",
    checkColor: "text-[#FF5500]"
  }
];

export default function InteractiveAboutJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const current = MILESTONES[activeStep];
  const basePath = process.env.NODE_ENV === "production" ? "/mudaprogresifbangsa" : "";

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % MILESTONES.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + MILESTONES.length) % MILESTONES.length);
  };

  return (
    <section id="tentang-kami" className="py-8 sm:py-10 bg-[#F8FAFC] border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 1. Header Section: Ringkas & Kontras Maksimal */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-7">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#2454BE] block mb-1">
            TENTANG YAYASAN
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Membangun Karakter Bangsa Lewat Gerakan Intelektual &amp;{" "}
            <span className="text-[#FF5500]">Aksi Nyata</span>
          </h2>
          <p className="text-xs sm:text-[13px] text-slate-600 mt-1.5 leading-relaxed">
            Yayasan Muda Progresif Bangsa (MPB) berikhtiar mengintegrasikan tiga tahapan pergerakan: pendidikan nalar kritis berkesetaraan, kemandirian ekonomi vokasi, dan aksi kemanusiaan berbasis riset presisi.
          </p>
        </div>

        {/* 2. Interactive Milestone Stepper (Ringkas & Proporsional) */}
        <div className="max-w-xl mx-auto mb-6 px-2 select-none">
          <div className="relative flex items-center justify-between">
            {/* Garis Dasar Track */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 bg-slate-200 rounded-full z-0" />
            
            {/* Garis Progres Aktif */}
            <motion.div
              className="absolute top-1/2 left-0 -translate-y-1/2 h-1 bg-gradient-to-r from-[#2454BE] via-[#0B72E7] to-[#FF5500] rounded-full z-0 transition-all duration-500 ease-out"
              animate={{
                width: activeStep === 0 ? "0%" : activeStep === 1 ? "50%" : "100%"
              }}
            />

            {/* Step Nodes */}
            {MILESTONES.map((m, idx) => {
              const isActive = activeStep === idx;
              const isCompleted = activeStep >= idx;
              const StepIcon = m.icon;

              return (
                <div key={m.id} className="relative z-10 flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold text-xs transition-all duration-300 shadow-sm ${
                      isActive
                        ? `${m.nodeColor} text-white ring-4 ${m.nodeActiveRing} scale-105`
                        : isCompleted
                        ? "bg-blue-50 text-[#2454BE] hover:bg-blue-100 hover:scale-105 border border-blue-200"
                        : "bg-white text-slate-400 border border-slate-200 hover:border-slate-300 hover:text-slate-600 hover:scale-105"
                    }`}
                    aria-label={`Pilih Fase ${m.number}`}
                  >
                    <StepIcon className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`text-[11px] sm:text-xs font-bold mt-1 tracking-wide transition-colors ${
                      isActive ? m.accentColor : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    Fase {m.number}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Showcase Stage: Clean White Card Compact */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-md relative overflow-hidden">
          {/* Subtle Brand Accent Line di Puncak Card */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2454BE] via-[#0B72E7] to-[#FF5500]" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
            {/* Kolom Kiri: 3D Artwork Compact & Stepper */}
            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[220px] sm:max-w-[260px] aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden shadow-md border border-slate-200 bg-slate-950">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={`${basePath}${current.image}`}
                      alt={current.title}
                      fill
                      priority
                      sizes="(max-width: 640px) 220px, 260px"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Stepper Navigasi Compact */}
              <div className="flex items-center gap-2.5 mt-3">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-2.5 py-1 rounded-lg border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 text-[11px] font-bold flex items-center gap-1 transition-all shadow-xs"
                >
                  <ChevronLeft className="w-3 h-3" />
                  <span>Sebelumnya</span>
                </button>
                <span className="text-[11px] font-semibold text-slate-500">
                  {current.number} / {MILESTONES.length}
                </span>
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-2.5 py-1 rounded-lg border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 text-[11px] font-bold flex items-center gap-1 transition-all shadow-xs"
                >
                  <span>Selanjutnya</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Kolom Kanan: Detail & Target Aksi */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                      {current.title}
                    </h3>
                    <p className={`text-xs font-semibold mt-1 leading-snug ${current.accentColor}`}>
                      {current.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {current.desc}
                  </p>

                  {/* Target Aksi Terukur (List Compact) */}
                  <div className="pt-2.5 border-t border-slate-100 space-y-1.5">
                    <p className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                      Fokus &amp; Target Aksi:
                    </p>
                    <ul className="space-y-1.5">
                      {current.outputs.map((out, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${current.checkColor}`} />
                          <span className="leading-snug">{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tombol Aksi */}
                  <div className="pt-1.5">
                    <Link
                      href={current.pillarHref}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-white text-xs font-bold shadow-sm hover:shadow-md transition-all ${current.ctaBg}`}
                    >
                      <span>{current.pillarName}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
