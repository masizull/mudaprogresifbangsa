"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  ArrowRight,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Layers,
  LayoutGrid,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Database,
  Flame,
  TrendingUp,
  Cpu,
  BookOpen,
  Scale
} from "lucide-react";

interface PhilosophyCard {
  id: string;
  number: string;
  phase: string;
  category: "PRINSIP GERAKAN" | "NILAI ETIKA";
  title: string;
  shortTitle: string;
  tagline: string;
  tag: string;
  quote: string;
  desc: string;
  manifesto: string;
  actions: string[];
  metric: string;
  metricLabel: string;
  theme: "orange" | "slate" | "navy" | "white" | "retro" | "purple";
  image: string;
  bgGradient: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  code: string;
  linkSection: string;
}

const PHILOSOPHY_CARDS: PhilosophyCard[] = [
  {
    id: "pengetahuan",
    number: "01",
    phase: "FASE 01",
    category: "PRINSIP GERAKAN",
    title: "Dari Pengetahuan",
    shortTitle: "PENGETAHUAN",
    tagline: "Riset Empiris & Nalar Kritis",
    tag: "LOGIKA & RISET",
    quote: "Setiap langkah dan intervensi kebijakan wajib berakar pada data empiris, bukan asumsi semu.",
    desc: "Membangun kesadaran kritis generasi muda melalui dialektika pemikiran kebangsaan, kelas logika, filsafat publik, dan riset sosial objektif sebelum merancang program.",
    manifesto: "Pemberdayaan sosial tanpa fondasi riset hanya melahirkan ketergantungan semu. Kami membedah akar kemiskinan dan ketimpangan dengan metodologi ilmiah yang terverifikasi.",
    actions: [
      "Penyelenggaraan Sekolah Pemikiran Progresif & diskusi publik berkala",
      "Kajian empiris data pemuda putus sekolah & pemetaan kantong kemiskinan",
      "Penyusunan kurikulum literasi kritis, etika digital, dan pemanfaatan AI"
    ],
    metric: "100%",
    metricLabel: "Berbasis Data Riset",
    theme: "orange",
    image: "/images/milestone-fase1.jpg",
    bgGradient: "from-white via-[#FFF5ED] to-[#FFE8D6]",
    accentColor: "#FF5500",
    badgeBg: "bg-[#FF5500]/10",
    badgeText: "text-[#FF5500]",
    code: "FOUNDATION-01",
    linkSection: "#program"
  },
  {
    id: "gagasan",
    number: "02",
    phase: "FASE 02",
    category: "PRINSIP GERAKAN",
    title: "Menjadi Gagasan",
    shortTitle: "GAGASAN",
    tagline: "Solusi Konseptual & Model Teruji",
    tag: "POLICY & BLUEPRINT",
    quote: "Menerjemahkan wawasan intelektual ke dalam formulasi kebijakan solutif dan model kerja teruji.",
    desc: "Mengubah temuan riset menjadi rekomendasi kebijakan publik, kurikulum pelatihan vokasi aplikatif, dan blueprint intervensi sosial yang relevan dengan zaman modern.",
    manifesto: "Gagasan yang hebat adalah gagasan yang dapat diuji dan direplikasi. Kami merumuskan strategi pemberdayaan yang terukur agar setiap ikhtiar memiliki dampak nyata.",
    actions: [
      "Penerbitan Policy Brief kuartalan untuk advokasi pemangku kebijakan",
      "Desain silabus pendidikan kesetaraan PKBM adaptif pasar kerja",
      "Penyusunan modul pelatihan vokasi digital & manajemen usaha mikro"
    ],
    metric: "4x",
    metricLabel: "Policy Brief / Tahun",
    theme: "slate",
    image: "/images/milestone-fase2.jpg",
    bgGradient: "from-[#F8FAFC] via-[#EEF2F6] to-[#E2E8F0]",
    accentColor: "#2454BE",
    badgeBg: "bg-[#2454BE]/10",
    badgeText: "text-[#2454BE]",
    code: "BLUEPRINT-02",
    linkSection: "#program"
  },
  {
    id: "aksi",
    number: "03",
    phase: "FASE 03",
    category: "PRINSIP GERAKAN",
    title: "Berdampak Pada Aksi",
    shortTitle: "AKSI NYATA",
    tagline: "Eksekusi Nyata & Transformasi",
    tag: "DIRECT IMPACT",
    quote: "Bermuara pada tindakan konkret di lapangan untuk memutus mata rantai kemiskinan antargenerasi.",
    desc: "Mengeksekusi program di tengah kantong masyarakat: membuka akses ijazah resmi lewat PKBM, melatih keterampilan kerja vokasi, hingga layanan kesehatan dan tanggap bencana.",
    manifesto: "Intelektualitas diuji oleh keberpihakannya pada mereka yang terpinggirkan. Gerakan kami hadir langsung di kampung-kampung dan komunitas masyarakat yang membutuhkan.",
    actions: [
      "Kelas belajar pendidikan kesetaraan Paket A, B, & C gratis bersertifikat",
      "Pelatihan kerja kejuruan & inkubasi wirausaha mandiri pemuda binaan",
      "Layanan pemeriksaan kesehatan jemput bola Progresif Care di pelosok"
    ],
    metric: "1.200+",
    metricLabel: "Warga Binaan Aktif",
    theme: "navy",
    image: "/images/milestone-fase3.jpg",
    bgGradient: "from-[#081426] via-[#0D203D] to-[#142F5B]",
    accentColor: "#FF5500",
    badgeBg: "bg-white/10",
    badgeText: "text-white",
    code: "EXECUTION-03",
    linkSection: "#program"
  },
  {
    id: "integritas",
    number: "04",
    phase: "ETH-01",
    category: "NILAI ETIKA",
    title: "Integritas & Akuntabilitas",
    shortTitle: "INTEGRITY",
    tagline: "Kepatuhan Hukum & Tata Kelola Bersih",
    tag: "LEGAL & COMPLIANCE",
    quote: "Kredibilitas publik adalah nyawa yayasan. Seluruh operasional berpijak pada kepatuhan hukum total.",
    desc: "Beroperasi dengan legalitas resmi SK Kemenkumham RI, NPWP terverifikasi, serta sistem pembukuan keuangan transparan yang dapat dipertanggungjawabkan kepada publik dan mitra.",
    manifesto: "Kejujuran nurani dan kepatuhan regulasi adalah harga mati. Kami menjamin setiap rupiah donasi dan dukungan mitra tersalurkan 100% tepat sasaran dan terverifikasi.",
    actions: [
      "Kepatuhan regulasi Akta Notaris No. 14/2025 & SK Kemenkumham RI",
      "Penerbitan laporan pertanggungjawaban program berkala secara transparan",
      "Audit internal dan eksternal demi menjamin tata kelola yang bersih"
    ],
    metric: "100%",
    metricLabel: "Kepatuhan Regulasi",
    theme: "white",
    image: "/images/pilar-akademi.jpg",
    bgGradient: "from-white via-[#F8FAFC] to-[#EEF2F6]",
    accentColor: "#081426",
    badgeBg: "bg-slate-100",
    badgeText: "text-slate-800",
    code: "CODE: ETH-01",
    linkSection: "/tentang-kami/legalitas"
  },
  {
    id: "progressive",
    number: "05",
    phase: "PRG-02",
    category: "NILAI ETIKA",
    title: "Pikiran Berkemajuan",
    shortTitle: "PROGRESSIVE",
    tagline: "Inovasi Visioner & Adopsi AI",
    tag: "AI & FUTURE VISION",
    quote: "Menolak stagnasi berpikir; mengadopsi kemajuan sains dan kecerdasan buatan demi percepatan dampak.",
    desc: "Mengintegrasikan literasi kecerdasan buatan (AI), otomasi digital, dan metodologi kontemporer ke dalam seluruh lini pendidikan vokasi dan manajemen sosial yayasan.",
    manifesto: "Teknologi canggih tidak boleh hanya dinikmati segelintir elit. Kami mendemokratisasi akses literasi kecerdasan buatan agar anak-anak kurang mampu memiliki daya saing tinggi.",
    actions: [
      "Integrasi modul logika pemrograman dan kecerdasan buatan di PKBM",
      "Pemanfaatan sistem analitik data untuk melacak perkembangan siswa",
      "Eksplorasi inovasi solusi sosial berbasis teknologi tepat guna"
    ],
    metric: "2026",
    metricLabel: "Visi Digital Maju",
    theme: "retro",
    image: "/images/pilar-vokasi.jpg",
    bgGradient: "from-[#FFFDF5] via-[#FFF8E7] to-[#FEEDD3]",
    accentColor: "#FF5500",
    badgeBg: "bg-[#FF5500]/10",
    badgeText: "text-[#FF5500]",
    code: "CODE: PRG-02",
    linkSection: "#program"
  },
  {
    id: "evidence",
    number: "06",
    phase: "DAT-03",
    category: "NILAI ETIKA",
    title: "Berbasis Data & Riset",
    shortTitle: "EVIDENCE",
    tagline: "Presisi & Terukur Secara Empiris",
    tag: "DATA PRECISION",
    quote: "Menyandarkan setiap kebijakan intervensi pada pemetaan kebutuhan riil masyarakat tanpa spekulasi.",
    desc: "Menolak langkah coba-coba; setiap penempatan pos bantuan, pembukaan kelas vokasi, dan modul PKBM dirancang berdasarkan indikator demografis dan survei lapangan nyata.",
    manifesto: "Empati tanpa data berisiko salah sasaran. Kami memadukan kepedulian sosial dengan ketajaman analisis statistik untuk memastikan solusi yang tepat guna dan berkelanjutan.",
    actions: [
      "Survei kebutuhan tenaga kerja lokal sebelum membuka jurusan vokasi",
      "Pelacakan rekam jejak lulusan hingga mandiri berpenghasilan",
      "Peta geospatial kerentanan kesehatan warga untuk pos Progresif Care"
    ],
    metric: "94.2%",
    metricLabel: "Ketepatan Sasaran",
    theme: "purple",
    image: "/images/pilar-tanggap.jpg",
    bgGradient: "from-[#102654] via-[#1A3875] to-[#2454BE]",
    accentColor: "#38BDF8",
    badgeBg: "bg-white/10",
    badgeText: "text-white",
    code: "CODE: DAT-03",
    linkSection: "#program"
  }
];

export default function CultureValues() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"ribbon" | "grid">("ribbon");
  const [selectedCard, setSelectedCard] = useState<PhilosophyCard | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [dragStartX, setDragStartX] = useState<number>(0);

  const totalCards = PHILOSOPHY_CARDS.length;
  const basePath = process.env.NODE_ENV === "production" ? "/mudaprogresifbangsa" : "";

  // Auto-drift ribbon gently when not paused by modal or hover (every 3 seconds)
  useEffect(() => {
    if (!isAutoPlay || selectedCard || viewMode !== "ribbon") return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalCards);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlay, selectedCard, viewMode, totalCards]);

  // Keyboard navigation for modal & ribbon
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCard(null);
      } else if (e.key === "ArrowRight") {
        if (selectedCard) {
          const curr = PHILOSOPHY_CARDS.findIndex((c) => c.id === selectedCard.id);
          setSelectedCard(PHILOSOPHY_CARDS[(curr + 1) % totalCards]);
        } else {
          setActiveIndex((prev) => (prev + 1) % totalCards);
        }
      } else if (e.key === "ArrowLeft") {
        if (selectedCard) {
          const curr = PHILOSOPHY_CARDS.findIndex((c) => c.id === selectedCard.id);
          setSelectedCard(PHILOSOPHY_CARDS[(curr - 1 + totalCards) % totalCards]);
        } else {
          setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCard, totalCards]);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % totalCards);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);

  return (
    <section
      id="nilai-budaya"
      className="py-16 md:py-24 bg-[#EBECEF] text-slate-900 relative overflow-hidden select-none transition-colors duration-500"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* 1. Subtle Background Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #081426 1px, transparent 0)`,
          backgroundSize: "28px 28px"
        }}
      />

      {/* 2. Trionn-style Massive Watermark Background Typography */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none overflow-hidden select-none z-0">
        <span
          className="font-black text-6xl sm:text-8xl md:text-9xl lg:text-[140px] leading-none tracking-tighter text-slate-300/40 uppercase whitespace-nowrap drop-shadow-sm"
          style={{
            WebkitTextStroke: "1px rgba(148, 163, 184, 0.4)",
            color: "transparent"
          }}
        >
          FILOSOFI DALAM
        </span>
        <span
          className="font-black text-6xl sm:text-8xl md:text-9xl lg:text-[150px] leading-none tracking-tighter text-slate-300/50 uppercase whitespace-nowrap -mt-3 sm:-mt-6"
          style={{
            WebkitTextStroke: "1px rgba(148, 163, 184, 0.4)",
            color: "transparent"
          }}
        >
          GERAKAN
        </span>
      </div>

      {/* 3. Ambient 3D Curved Vector Spline behind Cards */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-25"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100 620 C 300 700, 500 200, 850 340 C 1150 460, 1300 220, 1600 280"
          stroke="#2454BE"
          strokeWidth="2.5"
          strokeDasharray="6 8"
        />
        <path
          d="M-50 480 C 350 400, 650 650, 950 450 C 1200 300, 1400 520, 1550 480"
          stroke="#FF5500"
          strokeWidth="2"
          strokeDasharray="4 6"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header: Clean Center Title with Trionn Editorial Sensitivity */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 md:mb-14">
          <div className="text-center md:text-left max-w-xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#2454BE] flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
              FILOSOFI &amp; ETIKA GERAKAN
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Prinsip Pergerakan &amp;{" "}
              <span className="text-[#FF5500]">Nilai Inti</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Arsitektur pemikiran dan kompas moral yang memandu seluruh relawan, pengurus, serta mitra Yayasan Muda Progresif Bangsa.
            </p>
          </div>

          {/* Interactive Switcher: 3D Ribbon vs Grid Showcase (Matching User Screenshots) */}
          <div className="flex items-center gap-2 p-1.5 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-300 shadow-md">
            <button
              type="button"
              onClick={() => setViewMode("ribbon")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                viewMode === "ribbon"
                  ? "bg-[#081426] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>3D Motion Ribbon</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                viewMode === "grid"
                  ? "bg-[#2454BE] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid Showcase</span>
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* VIEW 1: TRIONN 3D CURVED RIBBON CAROUSEL (Screenshot 1)       */}
        {/* ============================================================ */}
        {viewMode === "ribbon" && (
          <div className="relative py-6 sm:py-10">
            {/* 3D Perspective Stage */}
            <div
              className="relative h-[480px] sm:h-[530px] md:h-[560px] flex items-center justify-center overflow-visible"
              style={{
                perspective: "1400px",
                transformStyle: "preserve-3d"
              }}
              onTouchStart={(e) => setDragStartX(e.touches[0].clientX)}
              onTouchEnd={(e) => {
                const diff = e.changedTouches[0].clientX - dragStartX;
                if (diff > 50) handlePrev();
                if (diff < -50) handleNext();
              }}
            >
              {PHILOSOPHY_CARDS.map((card, idx) => {
                // Calculate circular offset relative to active card
                let offset = idx - activeIndex;
                if (offset < -Math.floor(totalCards / 2)) offset += totalCards;
                if (offset > Math.floor(totalCards / 2)) offset -= totalCards;

                const isCenter = offset === 0;
                const isImmediateNeighbor = Math.abs(offset) === 1;
                const isVisible = Math.abs(offset) <= 2;

                // 3D curved cylinder ribbon transformation parameters
                const translateX = offset * 280;
                const translateY = Math.abs(offset) * 12 + offset * -10;
                const translateZ = -Math.abs(offset) * 140;
                const rotateY = offset * -18;
                const rotateZ = offset * 2.8;
                const scale = isCenter ? 1.05 : isImmediateNeighbor ? 0.9 : 0.76;
                const opacity = isVisible ? (isCenter ? 1 : isImmediateNeighbor ? 0.88 : 0.45) : 0;
                const zIndex = 20 - Math.abs(offset) * 4;

                return (
                  <motion.div
                    key={card.id}
                    animate={{
                      x: translateX,
                      y: translateY,
                      z: translateZ,
                      rotateY: rotateY,
                      rotateZ: rotateZ,
                      scale: scale,
                      opacity: opacity
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 28
                    }}
                    style={{
                      zIndex: zIndex,
                      transformStyle: "preserve-3d",
                      pointerEvents: isVisible ? "auto" : "none"
                    }}
                    onClick={() => {
                      if (isCenter) {
                        setSelectedCard(card);
                      } else {
                        setActiveIndex(idx);
                      }
                    }}
                    className={`absolute w-[290px] sm:w-[320px] md:w-[340px] h-[430px] sm:h-[460px] rounded-3xl p-6 shadow-2xl cursor-pointer transition-shadow border border-white/60 select-none overflow-hidden flex flex-col justify-between group ${
                      isCenter
                        ? "ring-4 ring-[#2454BE]/30 shadow-[0_25px_60px_-15px_rgba(36,84,190,0.35)]"
                        : "hover:ring-2 hover:ring-slate-400 shadow-xl"
                    }`}
                  >
                    {/* Render Poster Style Card */}
                    <PosterCardInner
                      card={card}
                      isCenter={isCenter}
                      basePath={basePath}
                      onExpand={() => setSelectedCard(card)}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Left & Right Floating Navigation Controls */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Kartu Sebelumnya"
              className="absolute left-1 sm:left-3 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border border-slate-200/90 backdrop-blur-md group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Kartu Selanjutnya"
              className="absolute right-1 sm:right-3 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border border-slate-200/90 backdrop-blur-md group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Centered Pagination Indicator Dots & Counter at Bottom */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-md">
                <span className="font-mono text-xs font-extrabold text-[#2454BE]">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-1.5">
                  {PHILOSOPHY_CARDS.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      aria-label={`Buka kartu ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        i === activeIndex
                          ? "w-6 bg-[#2454BE]"
                          : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-mono text-xs font-bold text-slate-400">
                  {String(totalCards).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* VIEW 2: TRIONN GRID SHOWCASE (Screenshot 2: 2x3 Matrix)      */}
        {/* ============================================================ */}
        {viewMode === "grid" && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
          >
            {PHILOSOPHY_CARDS.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ y: -8, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCard(card)}
                className="h-[440px] sm:h-[460px] rounded-3xl p-6 shadow-xl hover:shadow-2xl cursor-pointer transition-all border border-white/70 select-none overflow-hidden flex flex-col justify-between relative group"
              >
                <PosterCardInner
                  card={card}
                  isCenter={true}
                  basePath={basePath}
                  onExpand={() => setSelectedCard(card)}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Bottom Editorial Bar (Matching Trionn Footer Concept) */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-slate-300/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p className="text-center sm:text-left max-w-lg">
            Gagasan, riset ilmiah, dan etika gerakan dipublikasikan secara terbuka sebagai wujud pertanggungjawaban publik dan komitmen transparansi yayasan.
          </p>
          <a
            href="#program"
            className="font-bold text-[#2454BE] hover:text-[#FF5500] transition-colors flex items-center gap-1.5 group shrink-0"
          >
            <span>LIHAT PROGRAM NYATA LAPANGAN</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4. EXPANSIVE DETAIL MODAL / LIGHTBOX (Click-to-Open Feature)  */}
      {/* ============================================================ */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="absolute inset-0 bg-[#081426]/75 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col z-10"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#F8FAFC]">
                <div className="flex items-center gap-3">
                  <span
                    className={`text-[11px] font-mono font-extrabold uppercase px-2.5 py-1 rounded-lg ${selectedCard.badgeBg} ${selectedCard.badgeText}`}
                  >
                    {selectedCard.category} • {selectedCard.phase}
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {selectedCard.code}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      const curr = PHILOSOPHY_CARDS.findIndex((c) => c.id === selectedCard.id);
                      setSelectedCard(PHILOSOPHY_CARDS[(curr - 1 + totalCards) % totalCards]);
                    }}
                    aria-label="Sebelumnya"
                    className="p-1.5 rounded-xl hover:bg-slate-200 text-slate-600 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const curr = PHILOSOPHY_CARDS.findIndex((c) => c.id === selectedCard.id);
                      setSelectedCard(PHILOSOPHY_CARDS[(curr + 1) % totalCards]);
                    }}
                    aria-label="Selanjutnya"
                    className="p-1.5 rounded-xl hover:bg-slate-200 text-slate-600 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedCard(null)}
                    aria-label="Tutup"
                    className="p-1.5 rounded-xl hover:bg-red-50 hover:text-red-600 text-slate-500 transition-colors ml-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body: Two-Column Responsive Layout */}
              <div className="overflow-y-auto p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
                {/* Left Column: Visual Artwork Poster */}
                <div className="md:col-span-5 flex flex-col justify-between">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                    <Image
                      src={`${basePath}${selectedCard.image}`}
                      alt={selectedCard.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081426]/90 via-[#081426]/30 to-transparent flex flex-col justify-end p-5 text-white">
                      <span className="font-mono text-xs font-extrabold tracking-widest text-[#FF5500]">
                        {selectedCard.number} • {selectedCard.shortTitle}
                      </span>
                      <h4 className="text-lg font-extrabold mt-1 leading-snug">
                        {selectedCard.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                        {selectedCard.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Impact Metric Banner */}
                  <div className="mt-4 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                        Indikator Capaian
                      </span>
                      <span className="text-xs font-bold text-slate-700">
                        {selectedCard.metricLabel}
                      </span>
                    </div>
                    <span
                      className="text-2xl font-black font-mono tracking-tight"
                      style={{ color: selectedCard.accentColor }}
                    >
                      {selectedCard.metric}
                    </span>
                  </div>
                </div>

                {/* Right Column: Deep Philosophical Manifesto & Concrete Field Actions */}
                <div className="md:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                      {selectedCard.title}
                    </h3>
                    <p
                      className="text-sm font-bold mt-1"
                      style={{ color: selectedCard.accentColor }}
                    >
                      {selectedCard.tagline}
                    </p>

                    {/* Editorial Quote Callout */}
                    <blockquote className="mt-4 p-4 rounded-2xl bg-slate-50 border-l-4 border-slate-400 text-xs sm:text-sm font-medium italic text-slate-700 leading-relaxed">
                      &ldquo;{selectedCard.quote}&rdquo;
                    </blockquote>

                    {/* Deep Manifesto */}
                    <div className="mt-5 space-y-2">
                      <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                        Manifesto Filosofis &amp; Urgensi
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {selectedCard.manifesto}
                      </p>
                    </div>

                    {/* Concrete Actions List */}
                    <div className="mt-5 space-y-2.5">
                      <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                        Implementasi Nyata di Lapangan
                      </h5>
                      <ul className="space-y-2">
                        {selectedCard.actions.map((act, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                          >
                            <CheckCircle2
                              className="w-4 h-4 shrink-0 mt-0.5"
                              style={{ color: selectedCard.accentColor }}
                            />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Modal Action CTA */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <span className="text-[11px] text-slate-400 hidden sm:inline">
                      Tekan tombol panah atau geser untuk berpindah kartu
                    </span>
                    <a
                      href={selectedCard.linkSection}
                      onClick={() => setSelectedCard(null)}
                      className="px-5 py-2.5 rounded-xl font-bold text-xs text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 ml-auto"
                      style={{ backgroundColor: selectedCard.accentColor }}
                    >
                      <span>Jelajahi Pilar Terkait</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

/**
 * High-End Poster Card Layout Component (Inspired by Trionn.com Editorial Design)
 */
function PosterCardInner({
  card,
  isCenter,
  basePath,
  onExpand
}: {
  card: PhilosophyCard;
  isCenter: boolean;
  basePath: string;
  onExpand: () => void;
}) {
  // Theme styling for the 6 cards matching Trionn's eclectic high-contrast design
  if (card.theme === "orange") {
    // Card 1: Crisp editorial with orange block + quote + photography
    return (
      <div className="w-full h-full flex flex-col justify-between relative bg-white rounded-2xl p-5 border border-slate-100">
        {/* Top bar: AI / Tag + Number */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-xs font-black tracking-widest text-slate-900">
              {card.tag}
            </span>
            <span className="text-slate-300 font-mono">/</span>
            <span className="font-mono text-[10px] text-slate-400">{card.phase}</span>
          </div>
          <span className="font-mono text-xs font-bold text-slate-400">© 25-26</span>
        </div>

        {/* Center: Framed Photography + Editorial Quote */}
        <div className="my-auto space-y-3">
          <div className="relative w-full h-36 rounded-xl overflow-hidden shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
            <Image
              src={`${basePath}${card.image}`}
              alt={card.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 300px, 400px"
            />
            <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#FF5500] text-white font-mono text-[9px] font-bold">
              FASE {card.number}
            </div>
          </div>

          <div className="font-mono text-xs font-bold text-[#FF5500] tracking-wider">
            // METODOLOGI ILMIAH
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight uppercase tracking-tight">
            {card.shortTitle}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {card.desc}
          </p>
        </div>

        {/* Bottom Bar: Action link with corner arrow */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="font-mono text-[11px] font-bold text-slate-400">
            KLIK DETAIL
          </span>
          <div className="w-8 h-8 rounded-full bg-[#FF5500] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    );
  }

  if (card.theme === "slate") {
    // Card 2: Minimalist Warm Grey Editorial + Royal Blue typography
    return (
      <div className="w-full h-full flex flex-col justify-between relative bg-[#F1F3F5] rounded-2xl p-5 border border-slate-200">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-black text-slate-800">
            § {card.number}
          </span>
          <span className="text-[10px] font-mono tracking-widest text-[#2454BE] font-bold">
            {card.tag}
          </span>
        </div>

        <div className="my-auto space-y-3">
          <div className="relative w-full h-36 rounded-xl overflow-hidden shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
            <Image
              src={`${basePath}${card.image}`}
              alt={card.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 300px, 400px"
            />
            <div className="absolute inset-0 bg-[#2454BE]/15" />
          </div>

          <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase block">
            FORMULASI SOLUTIF
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight uppercase tracking-tight">
            {card.shortTitle}
          </h3>
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {card.quote}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-300/80 flex items-center justify-between">
          <span className="font-mono text-[11px] font-bold text-[#2454BE]">
            EXPLORE BLUEPRINT
          </span>
          <div className="w-8 h-8 rounded-full bg-[#2454BE] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    );
  }

  if (card.theme === "navy") {
    // Card 3: Deep Pitch Navy + Brutalist White & Orange typography (Like Swank card)
    return (
      <div className="w-full h-full flex flex-col justify-between relative bg-[#081426] text-white rounded-2xl p-5 border border-[#142F5B]">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-extrabold text-[#FF5500]">
            FASE {card.number}
          </span>
          <span className="font-mono text-[10px] text-slate-400">IMPACT®</span>
        </div>

        <div className="my-auto space-y-3">
          <div className="relative w-full h-36 rounded-xl overflow-hidden shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
            <Image
              src={`${basePath}${card.image}`}
              alt={card.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 300px, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081426] via-transparent to-transparent" />
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight">
            {card.shortTitle}
          </h3>
          <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
            {card.desc}
          </p>
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
          <span className="font-mono text-[11px] font-bold text-slate-300">
            AKSI NYATA
          </span>
          <div className="w-8 h-8 rounded-full bg-white text-[#081426] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    );
  }

  if (card.theme === "white") {
    // Card 4: Clean White Editorial + Legal Audit Code (Monochrome product feel)
    return (
      <div className="w-full h-full flex flex-col justify-between relative bg-white rounded-2xl p-5 border border-slate-200">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold text-slate-500">
            {card.code}
          </span>
          <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            TERVERIFIKASI
          </span>
        </div>

        <div className="my-auto space-y-3">
          <div className="relative w-full h-36 rounded-xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center p-4">
            <div className="text-center space-y-1">
              <ShieldCheck className="w-10 h-10 text-[#2454BE] mx-auto drop-shadow-sm" />
              <span className="font-mono text-[10px] font-bold text-slate-500 block uppercase">
                SK KEMENKUMHAM RI
              </span>
              <span className="font-mono text-[9px] text-slate-400 block">
                AKTA NOTARIS NO. 14 / 2025
              </span>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight uppercase tracking-tight">
            {card.shortTitle}
          </h3>
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {card.tagline}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="font-mono text-[11px] font-bold text-slate-400">
            TATA KELOLA
          </span>
          <div className="w-8 h-8 rounded-full bg-[#081426] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    );
  }

  if (card.theme === "retro") {
    // Card 5: Giant "2026" typography alongside AI & Progressive Thinking (matching screenshot 2)
    return (
      <div className="w-full h-full flex flex-col justify-between relative bg-[#FFFDF7] rounded-2xl p-5 border border-amber-200/80">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold text-[#FF5500]">
            {card.code}
          </span>
          <span className="font-mono text-[10px] font-bold text-slate-400">
            VISION LAB
          </span>
        </div>

        <div className="my-auto space-y-3">
          {/* Giant Pixel/Grotesque 2026 Typography */}
          <div className="w-full h-36 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 flex flex-col justify-center items-center relative overflow-hidden">
            <span className="font-mono text-5xl sm:text-6xl font-black tracking-tighter text-slate-900/90 select-none">
              2026
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF5500] font-bold -mt-1">
              AI &amp; LOGIC INITIATIVE
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight uppercase tracking-tight">
            {card.shortTitle}
          </h3>
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {card.quote}
          </p>
        </div>

        <div className="pt-3 border-t border-amber-200/60 flex items-center justify-between">
          <span className="font-mono text-[11px] font-bold text-[#FF5500]">
            FUTURE ETHICS
          </span>
          <div className="w-8 h-8 rounded-full bg-[#FF5500] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    );
  }

  // Card 6: Purple/Indigo Electric Glow with diagonal arrows ↖ ↗ (matching Novaglam card in screenshot 2)
  return (
    <div className="w-full h-full flex flex-col justify-between relative bg-gradient-to-br from-[#102654] via-[#1A3875] to-[#2454BE] text-white rounded-2xl p-5 border border-sky-400/30">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs font-extrabold text-sky-300">
          ↖ {card.code}
        </span>
        <span className="font-mono text-xs font-extrabold text-sky-300">
          ↗
        </span>
      </div>

      <div className="my-auto space-y-3">
        <div className="relative w-full h-36 rounded-xl overflow-hidden shadow-inner group-hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center bg-black/20">
          <Image
            src={`${basePath}${card.image}`}
            alt={card.title}
            fill
            className="object-cover opacity-80"
            sizes="(max-width: 768px) 300px, 400px"
          />
          <div className="absolute inset-0 bg-blue-900/40" />
          <div className="relative z-10 text-center">
            <Database className="w-8 h-8 text-sky-300 mx-auto drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]" />
            <span className="font-mono text-[10px] font-bold tracking-widest text-sky-200 uppercase mt-1 block">
              DATA DRIVEN
            </span>
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight">
          {card.shortTitle}
        </h3>
        <p className="text-xs text-sky-100 line-clamp-2 leading-relaxed">
          {card.desc}
        </p>
      </div>

      <div className="pt-3 border-t border-white/15 flex items-center justify-between">
        <span className="font-mono text-[11px] font-bold text-sky-200">
          PRESISI DATA
        </span>
        <div className="w-8 h-8 rounded-full bg-white text-[#102654] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
