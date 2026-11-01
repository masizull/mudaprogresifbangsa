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
}

const MILESTONES: MilestoneData[] = [
  {
    id: 0,
    number: "01",
    phaseLabel: "Literasi & Karakter",
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
    icon: BookOpen,
    image: "/images/milestone-fase1.jpg"
  },
  {
    id: 1,
    number: "02",
    phaseLabel: "Kemandirian Ekonomi",
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
    icon: Briefcase,
    image: "/images/milestone-fase2.jpg"
  },
  {
    id: 2,
    number: "03",
    phaseLabel: "Dampak & Advokasi",
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
    icon: BarChart3,
    image: "/images/milestone-fase3.jpg"
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
    <section id="tentang-kami" className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6">
      {/* 1. Header Section Rata Tengah (Bersih & Elegan Tanpa Kapsul Shape) */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-[#2454BE]">
          TENTANG YAYASAN
        </span>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight leading-snug">
          Membangun Karakter Bangsa Lewat Gerakan Intelektual & Aksi Nyata
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
          Yayasan Muda Progresif Bangsa didirikan pada tahun 2025 sebagai ikhtiar
          kolektif pemuda Indonesia melalui tiga tahapan pergerakan terintegrasi:
          pendidikan nalar kritis, kemandirian ekonomi terapan, dan transformasi
          sosial berbasis riset kebijakan presisi.
        </p>
      </div>

      {/* 2. Symmetrical Interactive Milestone Progress Bar */}
      <div className="max-w-3xl mx-auto mb-10 px-2 select-none">
        <div className="relative flex items-center justify-between">
          {/* Garis Dasar Track Simetris */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 bg-slate-200 rounded-full z-0" />
          
          {/* Garis Progres Aktif */}
          <motion.div
            className="absolute top-1/2 left-0 -translate-y-1/2 h-1 bg-gradient-to-r from-[#2454BE] via-blue-600 to-[#1D4ED8] rounded-full z-0 transition-all duration-500 ease-out"
            animate={{
              width: activeStep === 0 ? "0%" : activeStep === 1 ? "50%" : "100%"
            }}
          />

          {/* Milestone Step Nodes */}
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
                  aria-label={`Pilih Fase ${m.number}`}
                >
                  <StepIcon className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`text-xs font-bold mt-2 tracking-wide transition-colors ${
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

      {/* 3. Showcase Stage: Clean 3D Visual & Uncluttered Content (Bebas Shape Pill) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Kolom Kiri: 3D Artwork Murni (Besar, Jelas, Tanpa Shape Badge yang Menutupi) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-square rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-950">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={`${basePath}${current.image}`}
                    alt={current.title}
                    fill
                    priority
                    sizes="(max-width: 640px) 340px, 360px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigasi Stepper yang Bersih */}
            <div className="flex items-center gap-3 mt-4">
              <button
                type="button"
                onClick={prevStep}
                className="px-3.5 py-1.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-all"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Sebelumnya</span>
              </button>
              <span className="text-xs font-semibold text-slate-500">
                Fase {current.number} dari {MILESTONES.length}
              </span>
              <button
                type="button"
                onClick={nextStep}
                className="px-3.5 py-1.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-all"
              >
                <span>Selanjutnya</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Kolom Kanan: Teks & Informasi Terstruktur (Tanpa Shape Pill) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -14 }}
                transition={{ duration: 0.28 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                    {current.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#2454BE] mt-1.5 leading-relaxed">
                    {current.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {current.desc}
                </p>

                {/* Target Aksi Terukur (List Bersih Tanpa Shape Aneh) */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Fokus & Target Aksi:
                  </p>
                  <ul className="space-y-2">
                    {current.outputs.map((out, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#2454BE] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tombol Aksi */}
                <div className="pt-2">
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
    </section>
  );
}
