"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  BarChart3,
  Users,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Layers,
  Network,
  Sparkles,
  Compass
} from "lucide-react";

interface MissionItem {
  id: string;
  code: string;
  title: string;
  category: string;
  summary: string;
  deliverables: string[];
  pillarTitle: string;
  pillarHref: string;
  metric: string;
  icon: React.ElementType;
}

const STRATEGIC_MISSIONS: MissionItem[] = [
  {
    id: "misi-1",
    code: "01",
    title: "Pendidikan Alternatif & Kesetaraan",
    category: "Literasi & Inklusi",
    summary:
      "Menyelenggarakan ekosistem pendidikan nonformal (PKBM) yang inklusif, kelas logika kebangsaan, dan sekolah pemikiran terbuka bagi pemuda dari berbagai latar belakang sosial.",
    deliverables: [
      "Penyelenggaraan kelas belajar PKBM Paket A, B, dan C resmi berijazah negara",
      "Kurikulum logika kritis, filsafat kebangsaan, dan kecakapan digital masa depan",
      "Beasiswa pendidikan penuh bagi santri, anak putus sekolah, dan keluarga prasejahtera"
    ],
    pillarTitle: "Pilar Penggerak: Akademi Progresif",
    pillarHref: "/program/akademi-progresif",
    metric: "Akses Pendidikan Setara",
    icon: GraduationCap
  },
  {
    id: "misi-2",
    code: "02",
    title: "Riset Terapan Berbasis Bukti",
    category: "Advokasi & Kebijakan",
    summary:
      "Memproduksi riset kebijakan sosial independen, kajian strategis isu kepemudaan, dan policy brief kuartalan berbasis data presisi untuk mengadvokasi pemangku kebijakan publik.",
    deliverables: [
      "Penerbitan Policy Brief kuartalan yang didistribusikan ke kementerian dan lembaga negara",
      "Action lab terapan untuk menguji solusi permasalahan riil di tingkat akar rumput",
      "Survei persepsi publik dan diseminasi data terbuka tentang dinamika kepemudaan"
    ],
    pillarTitle: "Pilar Penggerak: Progresif Research",
    pillarHref: "/program/progresif-care",
    metric: "Riset & Solusi Publik",
    icon: BarChart3
  },
  {
    id: "misi-3",
    code: "03",
    title: "Kaderisasi Kepemimpinan Beretika",
    category: "Etika Publik & Integritas",
    summary:
      "Menempa kader pemuda berintegritas tinggi dengan wawasan kenegaraan kokoh, etika kepemimpinan publik, dan komitmen memperjuangkan keadilan sosial.",
    deliverables: [
      "Penyelenggaraan Progresif Leadership Fellowship berkala untuk talenta muda terpilih",
      "Forum dialektika publik bulanan mengupas isu strategis bangsa secara multidisipliner",
      "Pendampingan jejaring alumni pemimpin komunitas di tingkat daerah dan nasional"
    ],
    pillarTitle: "Pilar Penggerak: Progresif Forum",
    pillarHref: "/program/akademi-progresif",
    metric: "Kader Kepemimpinan",
    icon: Users
  },
  {
    id: "misi-4",
    code: "04",
    title: "Kemandirian Ekonomi & Aksi Kemanusiaan",
    category: "Vokasi & Jaring Sosial",
    summary:
      "Mendorong kemandirian ekonomi melalui pelatihan kejuruan vokasi, inkubasi wirausaha mandiri, layanan pos kesehatan preventif, dan respon cepat tanggap bencana.",
    deliverables: [
      "Pelatihan vokasi kerja terapan berbasis kebutuhan industri dan sertifikasi profesi",
      "Inkubasi bisnis UMKM muda keluarga dengan akses bimbingan dan fasilitasi modal",
      "Layanan pos kesehatan keliling keluarga rentan dan tim relawan tanggap bencana"
    ],
    pillarTitle: "Pilar Penggerak: Vokasi Progresif & Progresif Care",
    pillarHref: "/program/vokasi-progresif",
    metric: "Kemandirian Berkelanjutan",
    icon: HeartHandshake
  }
];

export default function InteractiveVisionMission() {
  const [selectedMission, setSelectedMission] = useState(0);
  const [viewMode, setViewMode] = useState<"matrix" | "flow">("matrix");
  const current = STRATEGIC_MISSIONS[selectedMission];
  const CurrentIcon = current.icon;

  return (
    <section id="visi-misi" className="py-12 sm:py-16 bg-[#081426] text-white relative overflow-hidden">
      {/* Ambient Radial Lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* 1. Centered Header (Clean, Direct, Symmetrical, No Orange Text) */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-sky-400">
            VISI & MISI STRATEGIS
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mt-1.5 tracking-tight leading-snug">
            Peta Jalan & Transformasi Pergerakan
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            Menghubungkan gagasan nalar kritis pemuda menjadi solusi nyata
            melalui ekosistem empat pilar misi yang saling terintegrasi.
          </p>
        </div>

        {/* 2. Glassmorphic Grand Vision Card (Centerpiece Tanpa Akta Notaris) */}
        <div className="mb-10 rounded-3xl bg-gradient-to-br from-[#0F2342]/90 via-[#132D59]/75 to-[#0A1B36]/90 p-6 sm:p-8 lg:p-9 border border-blue-400/25 shadow-2xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-300 bg-sky-950/60 px-3 py-1 rounded-full border border-sky-400/30 inline-block mb-3">
              VISI UTAMA GERAKAN
            </span>
            <blockquote className="text-base sm:text-lg lg:text-xl font-bold text-white leading-relaxed">
              “Membangun ekosistem intelektual, pendidikan berkualitas, dan
              kepemimpinan yang mendorong generasi muda memahami persoalan bangsa,
              menghasilkan pengetahuan, merumuskan solusi, dan menggerakkan perubahan
              sosial yang berkelanjutan.”
            </blockquote>

            <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-blue-200">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-semibold">
                01 Intelektualitas Kritis
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-semibold">
                02 Kemandirian Finansial
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-semibold">
                03 Dampak Sosial Presisi
              </span>
            </div>
          </div>
        </div>

        {/* 3. Interactive View Mode Switcher (Matriks vs Diagram Alur) */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          <h3 className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
            <Compass className="w-4 h-4 text-sky-400" />
            <span>Eksplorasi Empat Misi Utama</span>
          </h3>

          <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/10 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setViewMode("matrix")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                viewMode === "matrix"
                  ? "bg-[#2454BE] text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Kartu Matriks</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("flow")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                viewMode === "flow"
                  ? "bg-[#2454BE] text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              <span>Diagram Alur</span>
            </button>
          </div>
        </div>

        {/* 4. Display Content Berdasarkan View Mode */}
        {viewMode === "matrix" ? (
          <>
            {/* Symmetrical 4-Column Mission Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6">
              {STRATEGIC_MISSIONS.map((m, idx) => {
                const isSelected = selectedMission === idx;
                const Icon = m.icon;

                return (
                  <motion.div
                    key={m.id}
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedMission(idx)}
                    className={`cursor-pointer rounded-2xl p-4 sm:p-5 text-left transition-all duration-200 border flex flex-col justify-between ${
                      isSelected
                        ? "bg-gradient-to-b from-[#1E3F78] to-[#122850] border-sky-400/80 shadow-lg shadow-blue-500/20 ring-2 ring-sky-400/30"
                        : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs ${
                            isSelected
                              ? "bg-sky-400 text-slate-950 shadow-md"
                              : "bg-white/10 text-white"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-xs font-bold text-sky-300">
                          Misi {m.code}
                        </span>
                      </div>

                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        {m.category}
                      </span>
                      <h4 className="text-sm font-extrabold text-white leading-snug">
                        {m.title}
                      </h4>
                      <p className="text-xs text-slate-300/85 mt-2 line-clamp-3 leading-relaxed">
                        {m.summary}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold">
                      <span className={isSelected ? "text-sky-300" : "text-slate-400"}>
                        {isSelected ? "Sedang Aktif" : "Buka Detail"}
                      </span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "text-sky-300 translate-x-1" : "text-slate-400"}`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Dynamic Mission Blueprint Projection (Bawah Grid) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28 }}
                className="bg-[#0C1E3C] rounded-2xl p-5 sm:p-6 border border-sky-400/30 shadow-xl"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300 shrink-0">
                      <CurrentIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-sky-300">
                          MISI {current.code}
                        </span>
                        <span className="text-[11px] text-slate-400 font-semibold">
                          • {current.category}
                        </span>
                      </div>
                      <h4 className="text-base font-extrabold text-white">
                        {current.title}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-blue-200 bg-blue-950/70 px-3 py-1.5 rounded-xl border border-blue-400/30 font-semibold">
                      {current.pillarTitle}
                    </span>
                    <Link
                      href={current.pillarHref}
                      className="px-4 py-1.5 rounded-xl bg-[#2454BE] hover:bg-[#1D469E] text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 shrink-0"
                    >
                      <span>Kunjungi Pilar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="pt-4">
                  <p className="text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                    Peta Implementasi Nyata:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {current.deliverables.map((d, dIdx) => (
                      <div
                        key={dIdx}
                        className="bg-white/5 rounded-xl p-3 border border-white/10 flex items-start gap-2 text-xs text-slate-200 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          /* Interactive Flowchart View (Diagram Alur Transformasi) */
          <div className="bg-[#0C1E3C] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-950/60 px-3 py-1 rounded-full border border-sky-400/30 inline-block mb-2">
                EKOSISTEM BERKESINAMBUNGAN
              </span>
              <h4 className="text-base sm:text-lg font-extrabold text-white">
                Siklus Transformasi Gerakan Muda Progresif
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Empat misi bekerja sebagai satu ekosistem terpadu dari penguatan nalar hingga aksi terukur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {STRATEGIC_MISSIONS.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.id}
                    className="bg-white/5 rounded-2xl p-4 border border-white/10 flex flex-col justify-between text-center relative"
                  >
                    <div>
                      <div className="w-10 h-10 mx-auto rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-sky-300 mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-sky-300">
                        Langkah {m.code}
                      </span>
                      <h5 className="text-xs sm:text-sm font-extrabold text-white mt-1">
                        {m.title}
                      </h5>
                      <p className="text-[11px] text-slate-300 mt-2 line-clamp-3">
                        {m.summary}
                      </p>
                    </div>

                    <Link
                      href={m.pillarHref}
                      className="mt-4 pt-2 border-t border-white/10 text-[11px] font-bold text-sky-300 hover:text-white flex items-center justify-center gap-1 transition-colors"
                    >
                      <span>Lihat Program</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
