"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  GraduationCap,
  Landmark,
  Users2,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  FileText,
  ShieldCheck,
  BadgePercent,
  BarChart3,
  FileCheck,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  MessageSquare,
  Briefcase
} from "lucide-react";
import {
  COLLABORATION_DATA,
  PARTNERSHIP_WORKFLOW_STEPS,
  PARTNERSHIP_VALUE_PROPS,
  CollaborationTrack,
  WorkflowStep
} from "@/data/foundation-data";
import SynergyModal from "@/components/modals/SynergyModal";

const SECTOR_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  swasta: Building2,
  kampus: GraduationCap,
  pemerintah: Landmark,
  komunitas: Users2
};

const SECTOR_THEMES: Record<string, {
  tabActive: string;
  badge: string;
  cardBorder: string;
  accentBg: string;
  glow: string;
}> = {
  amber: {
    tabActive: "bg-[#0F2342] text-white border-amber-400 shadow-md",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    cardBorder: "border-amber-300",
    accentBg: "bg-amber-500",
    glow: "rgba(245, 158, 11, 0.2)"
  },
  blue: {
    tabActive: "bg-[#0F2342] text-white border-blue-400 shadow-md",
    badge: "bg-blue-50 text-[#2454BE] border-blue-200",
    cardBorder: "border-blue-300",
    accentBg: "bg-[#2454BE]",
    glow: "rgba(36, 84, 190, 0.2)"
  },
  sky: {
    tabActive: "bg-[#0F2342] text-white border-sky-400 shadow-md",
    badge: "bg-sky-50 text-sky-700 border-sky-200",
    cardBorder: "border-sky-300",
    accentBg: "bg-sky-500",
    glow: "rgba(14, 165, 233, 0.2)"
  },
  orange: {
    tabActive: "bg-[#0F2342] text-white border-orange-400 shadow-md",
    badge: "bg-orange-50 text-orange-700 border-orange-200",
    cardBorder: "border-orange-300",
    accentBg: "bg-[#FF5500]",
    glow: "rgba(255, 85, 0, 0.2)"
  }
};

export default function CollaborationPortal() {
  const [activeSectorId, setActiveSectorId] = useState<string>("swasta");
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Sektor Swasta & CSR");

  const activeSector =
    COLLABORATION_DATA.find((c) => c.id === activeSectorId) || COLLABORATION_DATA[0];
  const activeStep = PARTNERSHIP_WORKFLOW_STEPS[activeStepIndex] || PARTNERSHIP_WORKFLOW_STEPS[0];
  const totalSteps = PARTNERSHIP_WORKFLOW_STEPS.length;

  const handleOpenSinergi = (category: string) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handlePrevStep = () => {
    setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : totalSteps - 1));
  };

  const handleNextStep = () => {
    setActiveStepIndex((prev) => (prev < totalSteps - 1 ? prev + 1 : 0));
  };

  const handleWhatsAppConsultation = () => {
    const text = encodeURIComponent(
      `Halo Tim Kemitraan Yayasan Muda Progresif Bangsa,\n\nSaya ingin berkonsultasi mengenai peluang kerja sama strategis untuk kategori: ${activeSector.category}.\n\nMohon info mengenai jadwal audiensi dan pengiriman profil lembaga. Terima kasih.`
    );
    window.open(`https://wa.me/6281288882025?text=${text}`, "_blank");
  };

  return (
    <section id="kemitraan" className="py-12 sm:py-16 bg-[#F8FAFC] text-[#081426] border-t border-slate-200 select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        
        {/* ============================================================ */}
        {/* SECTION HEADER: Institusional & Kredibel                    */}
        {/* ============================================================ */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#2454BE]">
            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
            <span>ARSITEKTUR KEMITRAAN &amp; INVESTASI SOSIAL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Portal Sinergi &amp;{" "}
            <span className="text-[#FF5500]">Kolaborasi Strategis</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Membangun ekosistem dampak sosial berkelanjutan melalui prinsip penciptaan nilai bersama (*Shared Value*). Bersinergi bersama korporasi CSR, perguruan tinggi, instansi pemerintah, dan gerakan masyarakat sipil.
          </p>

          {/* Trust Indicators Pill Row */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs text-slate-600">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>SK Kemenkumham Resmi</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm font-medium">
              <BadgePercent className="w-3.5 h-3.5 text-amber-600" />
              <span>Super Tax Deduction 200%</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm font-medium">
              <FileCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Audit LPJ &amp; BAST Transparan</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm font-medium">
              <Clock className="w-3.5 h-3.5 text-sky-600" />
              <span>SLA Respon 1x24 Jam</span>
            </span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* BAGIAN 1: KATALOG 4 MODEL KEMITRAAN MULTI-SEKTOR             */}
        {/* ============================================================ */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 pb-3">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-wider text-[#2454BE] uppercase block">
                KATALOG SKEMA KERJA SAMA
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">
                Pilih Arketipe Mitra Sektor Anda
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right">
              Setiap model dirancang terstruktur dengan manfaat timbal balik yang jelas bagi institusi Anda.
            </p>
          </div>

          {/* Interactive Sector Tab Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5">
            {COLLABORATION_DATA.map((item) => {
              const Icon = SECTOR_ICONS[item.id] || Building2;
              const isCurrent = item.id === activeSectorId;
              const theme = SECTOR_THEMES[item.accent] || SECTOR_THEMES.blue;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveSectorId(item.id)}
                  className={`p-3 sm:p-3.5 rounded-2xl border text-left transition-all duration-200 flex items-center gap-2.5 sm:gap-3 group ${
                    isCurrent
                      ? "bg-[#0A1838] text-white border-transparent shadow-lg scale-[1.01]"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform ${
                      isCurrent
                        ? "bg-white/10 text-amber-400"
                        : "bg-slate-100 text-slate-600 group-hover:scale-105"
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-mono uppercase font-bold tracking-wider opacity-60">
                      TRACK {item.id === "swasta" ? "01" : item.id === "kampus" ? "02" : item.id === "pemerintah" ? "03" : "04"}
                    </span>
                    <span className="block text-xs sm:text-[13px] font-extrabold truncate">
                      {item.shortLabel}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Sector Showcase Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSector.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-md space-y-6"
            >
              {/* Header Box of Selected Track */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-[#0A1838] text-white">
                      {activeSector.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      Sasaran: {activeSector.partnerTypes}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-2xl font-extrabold text-slate-900 leading-snug">
                    {activeSector.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#FF5500] font-semibold">
                    {activeSector.tagline}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {activeSector.desc}
                  </p>
                </div>

                <div className="flex flex-row lg:flex-col gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleOpenSinergi(activeSector.category)}
                    className="flex-1 lg:flex-none px-5 py-2.5 rounded-xl bg-[#2454BE] hover:bg-[#1D469E] active:scale-95 text-white font-bold text-xs shadow-md transition-all inline-flex items-center justify-center gap-2"
                  >
                    <span>Ajukan Kemitraan Ini</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppConsultation}
                    className="flex-1 lg:flex-none px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-800 font-bold text-xs border border-slate-200 transition-all inline-flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Konsultasi WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Grid 2 Kolom: 4 Skema Konkret (Kiri) vs Manfaat Timbal Balik & Pilar (Kanan) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Kolom Kiri: 4 Pilihan Skema Program (7 Kolom) */}
                <div className="lg:col-span-7 space-y-3">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    BENTUK / SKEMA IMPLEMENTASI TERSEDIA:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeSector.schemes.map((scheme, idx) => (
                      <div
                        key={scheme.name}
                        className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-blue-300 hover:shadow-sm transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="w-6 h-6 rounded-lg bg-blue-100 text-[#2454BE] font-mono text-[10px] font-bold flex items-center justify-center">
                              0{idx + 1}
                            </span>
                            <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                              {scheme.targetPillar}
                            </span>
                          </div>
                          <h5 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug mb-1">
                            {scheme.name}
                          </h5>
                          <p className="text-[11px] text-slate-600 leading-relaxed">
                            {scheme.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Badges Kata Kunci */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold text-slate-400 mr-1">Fokus Area:</span>
                    {activeSector.badges.map((b) => (
                      <span
                        key={b}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-medium"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Kolom Kanan: Nilai Tambah & Manfaat Timbal Balik (5 Kolom) */}
                <div className="lg:col-span-5 bg-[#0F2342] text-white rounded-2xl p-4 sm:p-5 border border-white/10 space-y-4 shadow-md">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-300">
                        NILAI TAMBAH MITRA (SHARED VALUE)
                      </span>
                    </div>
                    <h5 className="text-sm font-bold text-white">
                      Apa yang Diperoleh Lembaga / Korporasi Anda?
                    </h5>
                  </div>

                  <ul className="space-y-2.5 text-xs">
                    {activeSector.mutualBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-200 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-white/10 text-[11px] text-slate-300 flex items-center justify-between">
                    <span className="font-mono text-amber-400">Transparansi Laporan 100%</span>
                    <span className="text-slate-400">Legalitas SK Terdaftar</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ============================================================ */}
        {/* BAGIAN 2: ROADMAP ALUR KERJA SAMA 5 TAHAP (LIFECYCLE)        */}
        {/* ============================================================ */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 pb-3">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-wider text-[#FF5500] uppercase block">
                SOP &amp; TIMELINE KERJA SAMA
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">
                Alur Kerja Sama Terstruktur 5 Tahap
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right">
              Dari inisiasi hingga evaluasi dampak akhir, seluruh proses transparan dan memiliki kepastian waktu (SLA).
            </p>
          </div>

          {/* Step Timeline Header Navigator (Clickable 5 Steps) */}
          <div className="relative">
            {/* Connecting progress bar track */}
            <div className="hidden md:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 bg-slate-200 rounded-full z-0" />
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 relative z-10">
              {PARTNERSHIP_WORKFLOW_STEPS.map((wStep, idx) => {
                const isCurrent = idx === activeStepIndex;
                const isPassed = idx < activeStepIndex;

                return (
                  <button
                    key={wStep.step}
                    type="button"
                    onClick={() => setActiveStepIndex(idx)}
                    className={`p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                      isCurrent
                        ? "bg-[#081426] text-white border-[#2454BE] shadow-lg ring-2 ring-blue-500/30"
                        : isPassed
                        ? "bg-white text-slate-700 border-emerald-300 hover:border-emerald-400"
                        : "bg-white text-slate-500 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`w-6 h-6 rounded-full font-mono text-[11px] font-black flex items-center justify-center ${
                          isCurrent
                            ? "bg-[#FF5500] text-white"
                            : isPassed
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {wStep.step}
                      </span>
                      <span
                        className={`text-[9px] font-mono uppercase font-bold px-1.5 py-0.5 rounded ${
                          isCurrent
                            ? "bg-white/10 text-amber-300"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {wStep.duration}
                      </span>
                    </div>

                    <div>
                      <span className="block text-[10px] font-mono uppercase opacity-60">
                        {wStep.phase}
                      </span>
                      <span className="block text-xs font-bold leading-tight line-clamp-1 mt-0.5">
                        {wStep.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Showcase Card with Actions & Deliverables */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.step}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-md space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#081426] text-white font-mono font-black text-xl flex items-center justify-center shrink-0 shadow-md">
                    {activeStep.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold uppercase text-[#2454BE]">
                        {activeStep.phase} • SLA: {activeStep.duration}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-50 text-amber-700 border border-amber-200">
                        {activeStep.slaTag}
                      </span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                      {activeStep.title}
                    </h4>
                  </div>
                </div>

                {/* Step Switcher Buttons */}
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    aria-label="Tahap Sebelumnya"
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {activeStepIndex + 1} / {totalSteps}
                  </span>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    aria-label="Tahap Selanjutnya"
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeStep.description}
              </p>

              {/* Grid: Aktivitas Pelaksanaan vs Dokumen Luaran (Deliverables) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-1">
                
                {/* Kolom Aktivitas Utama (7 Kolom) */}
                <div className="md:col-span-7 space-y-2.5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    AKTIVITAS &amp; LANGKAH OPERASIONAL:
                  </span>
                  <ul className="space-y-2 text-xs">
                    {activeStep.actions.map((act, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 text-slate-800 leading-relaxed"
                      >
                        <div className="w-5 h-5 rounded-md bg-blue-100 text-[#2454BE] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Kolom Dokumen Resmi / Deliverables (5 Kolom) */}
                <div className="md:col-span-5 bg-gradient-to-br from-[#0F2342] to-[#0A1838] text-white rounded-2xl p-5 border border-white/10 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 block mb-1">
                      DOKUMEN RESMI KELUARAN (DELIVERABLE):
                    </span>
                    <div className="flex items-start gap-3 mt-2">
                      <div className="w-9 h-9 rounded-xl bg-white/10 text-sky-300 flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="text-xs sm:text-sm font-bold text-white leading-snug">
                          {activeStep.deliverable}
                        </h5>
                        <p className="text-[11px] text-slate-300 mt-1">
                          Terdokumentasi resmi, bermeterai sah, dan siap diaudit untuk kebutuhan kepatuhan hukum dan perpajakan mitra.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-mono">Kepastian SLA Terjamin</span>
                    <button
                      type="button"
                      onClick={() => handleOpenSinergi("Konsultasi Langsung")}
                      className="text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Mulai Langkah 01</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ============================================================ */}
        {/* BAGIAN 3: 4 PILAR TATA KELOLA & NILAI TAMBAH LEMBAGA          */}
        {/* ============================================================ */}
        <div className="space-y-4">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[11px] font-mono font-bold tracking-wider text-[#2454BE] uppercase block">
              AKUNTABILITAS &amp; INTEGRITAS
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">
              Standar Tata Kelola Kemitraan MPB
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PARTNERSHIP_VALUE_PROPS.map((vp) => (
              <div
                key={vp.title}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-[#2454BE] border border-blue-200">
                      {vp.badge}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {vp.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {vp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* BAGIAN 4: CALLOUT BANNER FAST-TRACK AUDIENSI                 */}
        {/* ============================================================ */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0F2342] via-[#081426] to-[#0F2342] text-white p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-1.5 text-center md:text-left relative z-10 max-w-xl">
            <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-widest block">
              // AUDIENSI &amp; KONSULTASI RESMI
            </span>
            <h3 className="text-lg sm:text-2xl font-extrabold text-white leading-tight">
              Siap Membangun Sinergi Berkelanjutan Bersama Kami?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Sekretariat Yayasan Muda Progresif Bangsa terbuka untuk diskusi daring maupun penjadwalan audiensi tatap muka di kantor yayasan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => handleOpenSinergi("Konsultasi Langsung")}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#FF5500] hover:bg-[#E04B00] active:scale-95 text-white text-xs font-bold shadow-lg transition-all inline-flex items-center justify-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              <span>Buka Form Pengajuan Sinergi</span>
            </button>
            <button
              type="button"
              onClick={handleWhatsAppConsultation}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white text-xs font-bold border border-white/20 transition-all inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Tim Kemitraan</span>
            </button>
          </div>
        </div>

      </div>

      <SynergyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCategory={selectedCategory}
      />
    </section>
  );
}
