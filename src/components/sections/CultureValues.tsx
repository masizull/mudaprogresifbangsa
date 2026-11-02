"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Lightbulb,
  Sparkles,
  ShieldCheck,
  Zap,
  Database,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Sliders,
  ChevronRight,
  Flame,
  Binary,
  Compass
} from "lucide-react";

interface PrincipleItem {
  id: number;
  step: string;
  title: string;
  subtitle: string;
  desc: string;
  manifesto: string;
  metric: string;
  color: string;
  badgeColor: string;
  borderColor: string;
  glowColor: string;
  icon: React.ElementType;
}

const PRINCIPLES: PrincipleItem[] = [
  {
    id: 0,
    step: "01",
    title: "Dari Pengetahuan",
    subtitle: "Riset Empiris & Nalar Kritis",
    desc: "Setiap langkah dan program berakar kuat pada riset ilmiah, data empiris yang terverifikasi, dan pemikiran kritis yang mencerahkan agar solusi tidak dibangun di atas asumsi semu.",
    manifesto: "Verifikasi data lapangan sebelum intervensi & kurikulum nalar kritis.",
    metric: "100% Berbasis Riset",
    color: "#2454BE",
    badgeColor: "bg-blue-50 text-[#2454BE] border-blue-200",
    borderColor: "hover:border-[#2454BE]",
    glowColor: "rgba(36, 84, 190, 0.25)",
    icon: BookOpen
  },
  {
    id: 1,
    step: "02",
    title: "Menjadi Gagasan",
    subtitle: "Solusi Konseptual & Model Teruji",
    desc: "Menerjemahkan wawasan intelektual ke dalam formulasi kebijakan solutif, konsep gerakan terarah, dan model kerja teruji yang relevan dengan dinamika pemuda zaman sekarang.",
    manifesto: "Penerbitan Policy Brief kuartalan & desain kurikulum vokasi adaptif.",
    metric: "Formula Aksi Teruji",
    color: "#0B72E7",
    badgeColor: "bg-sky-50 text-[#0B72E7] border-sky-200",
    borderColor: "hover:border-[#0B72E7]",
    glowColor: "rgba(11, 114, 231, 0.25)",
    icon: Lightbulb
  },
  {
    id: 2,
    step: "03",
    title: "Berdampak Pada Aksi",
    subtitle: "Eksekusi Nyata & Transformasi",
    desc: "Bermuara pada tindakan konkret di tengah masyarakat demi memutus mata rantai kemiskinan, memfasilitasi kemandirian ekonomi, dan mengangkat martabat kemanusiaan.",
    manifesto: "Inkubasi UMKM keluarga, pos kesehatan keliling & beasiswa PKBM.",
    metric: "Dampak Sosial Riil",
    color: "#FF5500",
    badgeColor: "bg-orange-50 text-[#FF5500] border-orange-200",
    borderColor: "hover:border-[#FF5500]",
    glowColor: "rgba(255, 85, 0, 0.25)",
    icon: Sparkles
  }
];

interface CoreValueItem {
  id: string;
  name: string;
  title: string;
  tagline: string;
  desc: string;
  implementation: string;
  techCode: string;
  color: string;
  topBar: string;
  iconBg: string;
  textColor: string;
  icon: React.ElementType;
}

const CORE_VALUES: CoreValueItem[] = [
  {
    id: "integrity",
    name: "Integrity",
    title: "Integritas & Akuntabilitas",
    tagline: "Tata Kelola Bersih & Terbuka",
    desc: "Beroperasi dengan kepatuhan hukum total (SK Menkumham RI & NPWP Resmi), tata kelola transparan, dan kejujuran nurani demi menjaga amanah publik dan mitra kolaborasi.",
    implementation: "Audit kepatuhan legal berkala & laporan pertanggungjawaban terbuka.",
    techCode: "CODE: ETH-01",
    color: "#2454BE",
    topBar: "bg-[#2454BE]",
    iconBg: "bg-[#2454BE]/15 text-[#2454BE]",
    textColor: "text-[#2454BE]",
    icon: ShieldCheck
  },
  {
    id: "progressive",
    name: "Progressive",
    title: "Pikiran Berkemajuan",
    tagline: "Terbuka Inovasi & AI Masa Depan",
    desc: "Menolak kejumudan berpikir; senantiasa terbuka pada gagasan visioner, adopsi teknologi kecerdasan buatan (AI), dan metodologi modern yang melipatgandakan kecepatan gerak yayasan.",
    implementation: "Integrasi literasi AI dalam modul PKBM & digitalisasi manajemen program.",
    techCode: "CODE: PRG-02",
    color: "#0B72E7",
    topBar: "bg-[#0B72E7]",
    iconBg: "bg-[#0B72E7]/15 text-[#0B72E7]",
    textColor: "text-[#0B72E7]",
    icon: Zap
  },
  {
    id: "evidence",
    name: "Evidence-Based",
    title: "Berbasis Data & Riset",
    tagline: "Presisi & Terukur Secara Empiris",
    desc: "Menyandarkan setiap kebijakan intervensi pada fakta lapangan, pemetaan kebutuhan riil masyarakat, serta metodologi evaluasi dampak yang terukur tanpa spekulasi liar.",
    implementation: "Kajian kuantitatif kuartalan & pelacakan indikator capaian warga binaan.",
    techCode: "CODE: DAT-03",
    color: "#0284C7",
    topBar: "bg-[#0284C7]",
    iconBg: "bg-[#0284C7]/15 text-[#0284C7]",
    textColor: "text-[#0284C7]",
    icon: Database
  },
  {
    id: "impact",
    name: "Social Impact",
    title: "Dampak Berkelanjutan",
    tagline: "Transformasi Sistemik Jangka Panjang",
    desc: "Bukan sekadar kegiatan seremonial sesaat, namun berorientasi pada transformasi sistemik jangka panjang: memutus rantai kemiskinan struktural lewat kemandirian finansial pemuda.",
    implementation: "Pendampingan pasca-pelatihan vokasi hingga wirausaha mandiri stabil.",
    techCode: "CODE: IMP-04",
    color: "#FF5500",
    topBar: "bg-[#FF5500]",
    iconBg: "bg-[#FF5500]/15 text-[#FF5500]",
    textColor: "text-[#FF5500]",
    icon: HeartHandshake
  }
];

export default function CultureValues() {
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [activeValueFilter, setActiveValueFilter] = useState<string>("all");
  const [expandedValue, setExpandedValue] = useState<string | null>(null);

  const filteredValues =
    activeValueFilter === "all"
      ? CORE_VALUES
      : CORE_VALUES.filter((v) => v.id === activeValueFilter);

  return (
    <section id="nilai-budaya" className="py-12 sm:py-16 bg-[#F8FAFC] text-[#081426] relative overflow-hidden">
      {/* Background Subtle Tech Matrix Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #081426 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
      />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        {/* 1. Header Section: Harmoni Tipografi IT & Rata Tengah */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2454BE]">
            FILOSOFI &amp; ETIKA GERAKAN
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight leading-snug">
            Prinsip Pergerakan &amp;{" "}
            <span className="text-[#FF5500]">Nilai Inti Yayasan</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
            Landasan etis dan metodologis yang memandu relawan, pengurus, serta mitra
            dalam merumuskan gagasan ilmiah hingga mengeksekusi program nyata di lapangan.
          </p>
        </div>

        {/* 2. PANGGUNG 1: TRITUNGGAL GERAKAN (Interactive 3-Step Flow Engine) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2454BE]">
                TRITUNGGAL GERAKAN
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5 flex flex-wrap items-center gap-1.5">
                <span>Siklus Transformasi:</span>
                <span className="text-[#2454BE]">Pengetahuan</span>
                <span className="text-slate-400">→</span>
                <span className="text-[#0B72E7]">Gagasan</span>
                <span className="text-slate-400">→</span>
                <span className="text-[#FF5500]">Aksi</span>
              </h3>
            </div>
            <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-3 py-1 rounded-full w-fit">
              Klik kartu untuk melihat fokus simulasi
            </span>
          </div>

          {/* 3 Interactive Cards with Spring Physics & Dynamic Elevation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PRINCIPLES.map((item, idx) => {
              const isSelected = activePrinciple === idx;
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -6, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActivePrinciple(idx)}
                  className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 border-2 flex flex-col justify-between relative overflow-hidden select-none ${
                    isSelected
                      ? "bg-white shadow-2xl border-transparent ring-2"
                      : "bg-[#F8FAFC] hover:bg-white border-slate-200/80 shadow-sm"
                  }`}
                  style={{
                    borderColor: isSelected ? item.color : undefined,
                    boxShadow: isSelected ? `0 14px 30px ${item.glowColor}` : undefined
                  }}
                >
                  {/* Top Bar: Icon + Step Counter */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-white shadow-md transition-transform duration-300"
                        style={{ backgroundColor: item.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-extrabold text-slate-400">
                        FASE {item.step}
                      </span>
                    </div>

                    <h4 className="text-base font-extrabold text-slate-900 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs font-bold mt-1" style={{ color: item.color }}>
                      {item.subtitle}
                    </p>

                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Active Indicator & Interactive Metric */}
                  <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                      <CheckCircle2
                        className="w-3.5 h-3.5"
                        style={{ color: item.color }}
                      />
                      <span>{item.metric}</span>
                    </span>
                    <span
                      className={`text-[11px] font-extrabold ${
                        isSelected ? "opacity-100" : "opacity-40"
                      }`}
                      style={{ color: item.color }}
                    >
                      {isSelected ? "Sedang Aktif" : "Pilih"}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dynamic Spotlight Output Drawer */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePrinciple}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border"
              style={{
                backgroundColor: `${PRINCIPLES[activePrinciple].color}08`,
                borderColor: `${PRINCIPLES[activePrinciple].color}30`
              }}
            >
              <div className="flex items-start sm:items-center gap-3">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm"
                  style={{ backgroundColor: PRINCIPLES[activePrinciple].color }}
                >
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <span
                    className="text-[10px] font-mono font-bold uppercase tracking-wider block"
                    style={{ color: PRINCIPLES[activePrinciple].color }}
                  >
                    Implementasi Konkret Fase {PRINCIPLES[activePrinciple].step}
                  </span>
                  <p className="text-xs sm:text-[13px] font-semibold text-slate-800 mt-0.5">
                    {PRINCIPLES[activePrinciple].manifesto}
                  </p>
                </div>
              </div>

              <span
                className="text-xs font-bold shrink-0 self-end sm:self-center px-3 py-1 rounded-xl bg-white shadow-sm border border-slate-200"
                style={{ color: PRINCIPLES[activePrinciple].color }}
              >
                Fase Terintegrasi
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3. PANGGUNG 2: CORE VALUES BENTO MATRIX (Interactive Playful Console) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF5500]">
                STANDAR PERILAKU GERAKAN
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">
                4 Nilai Inti (Core Values)
              </h3>
            </div>

            {/* Playful Filter Segmented Controls */}
            <div className="flex items-center gap-1.5 p-1 bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-x-auto select-none">
              <button
                type="button"
                onClick={() => setActiveValueFilter("all")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeValueFilter === "all"
                    ? "bg-[#081426] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                Semua
              </button>
              {CORE_VALUES.map((cv) => (
                <button
                  key={cv.id}
                  type="button"
                  onClick={() => setActiveValueFilter(cv.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    activeValueFilter === cv.id
                      ? "bg-[#2454BE] text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {cv.name}
                </button>
              ))}
            </div>
          </div>

          {/* Bento Grid 4 Cards */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {filteredValues.map((val) => {
              const Icon = val.icon;
              const isExpanded = expandedValue === val.id;

              return (
                <motion.div
                  layout
                  key={val.id}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
                >
                  {/* Top Geometric Accent Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${val.topBar}`} />

                  <div>
                    {/* Header: Icon + Tech Code */}
                    <div className="flex items-center justify-between mb-4 mt-1">
                      <div className={`w-11 h-11 rounded-2xl ${val.iconBg} flex items-center justify-center font-bold shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-slate-400">
                        {val.techCode}
                      </span>
                    </div>

                    <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                      {val.name}
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900 mt-0.5 leading-snug">
                      {val.title}
                    </h4>
                    <p className={`text-xs font-bold mt-1 ${val.textColor}`}>
                      {val.tagline}
                    </p>

                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      {val.desc}
                    </p>

                    {/* Expandable Field Implementation Drawer */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl leading-relaxed"
                      >
                        <span className="font-bold text-slate-900 block mb-0.5">
                          Bukti Nyata Lapangan:
                        </span>
                        {val.implementation}
                      </motion.div>
                    )}
                  </div>

                  {/* Interactive Toggle Button */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setExpandedValue(isExpanded ? null : val.id)}
                      className={`text-xs font-bold flex items-center gap-1 transition-colors ${val.textColor} hover:opacity-80`}
                    >
                      <span>{isExpanded ? "Tutup Bukti" : "Lihat Bukti Nyata"}</span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isExpanded ? "rotate-90" : "group-hover:translate-x-1"
                        }`}
                      />
                    </button>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: val.color }} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
