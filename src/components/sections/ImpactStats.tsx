"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, type MotionValue } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  HeartHandshake,
  BookOpen,
  Award,
  Layers,
  Sparkles,
  ExternalLink,
  Flame
} from "lucide-react";

interface ImpactShowcase {
  id: string;
  number: string;
  category: string;
  phaseBadge: string;
  title: string;
  tagline: string;
  quote: string;
  desc: string;
  image: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  metrics: {
    value: string;
    label: string;
  }[];
  link: string;
  actionText: string;
}

const IMPACT_PROJECTS: ImpactShowcase[] = [
  {
    id: "pkbm",
    number: "01",
    category: "PENDIDIKAN KESETARAAN",
    phaseBadge: "FASE 01 • LITERASI & LOGIKA",
    title: "Akademi & PKBM Berdikari",
    tagline: "Akses Ijazah Formal & Nalar Kritis Bagi Pemuda Putus Sekolah",
    quote: "Pendidikan adalah hak dasar peradaban, bukan hak istimewa segelintir orang.",
    desc: "Menyelenggarakan sekolah nonformal Paket A, B, dan C cuma-cuma berizin resmi Kemendikbudristek, dibekali kurikulum logika, filsafat kebangsaan, dan literasi kecerdasan buatan (AI).",
    image: "/images/dampak-pkbm.jpg",
    accentColor: "#2454BE",
    badgeBg: "bg-blue-50 text-[#2454BE] border-blue-200",
    badgeText: "text-[#2454BE]",
    metrics: [
      { value: "1.200+", label: "Lulusan Berijazah" },
      { value: "100%", label: "Bebas Biaya SPP" },
      { value: "A", label: "Akreditasi Resmi" }
    ],
    link: "/program/akademi-progresif",
    actionText: "JELAJAHI AKADEMI PROGRESIF"
  },
  {
    id: "vokasi",
    number: "02",
    category: "KEMANDIRIAN EKONOMI",
    phaseBadge: "FASE 02 • MOBILITAS SOSIAL",
    title: "Inkubasi Vokasi & UMKM Mandiri",
    tagline: "Menaiki Tangga Mobilitas Finansial Lewat Keterampilan Terapan",
    quote: "Menolak ketergantungan semu; kami melatih pemuda mandiri berdiri di atas kaki sendiri.",
    desc: "Pelatihan kerja berbasis proyek riil: digital craft, barista & kuliner modern, tata busana, serta pendampingan akses permodalan bergulir bagi keluarga binaan untuk memutus rantai kemiskinan.",
    image: "/images/dampak-vokasi.jpg",
    accentColor: "#FF5500",
    badgeBg: "bg-orange-50 text-[#FF5500] border-orange-200",
    badgeText: "text-[#FF5500]",
    metrics: [
      { value: "85+", label: "UMKM Binaan Mandiri" },
      { value: "350+", label: "Tenaga Kerja Terserap" },
      { value: "Rp 1,4M", label: "Omzet Komunitas" }
    ],
    link: "/program/vokasi-progresif",
    actionText: "JELAJAHI VOKASI PROGRESIF"
  },
  {
    id: "care",
    number: "03",
    category: "JARING SOSIAL & KESEHATAN",
    phaseBadge: "FASE 03 • KESEJAHTERAAN",
    title: "Progresif Care & Medis Keliling",
    tagline: "Kesehatan Prima Sebagai Fondasi Utama Produktivitas Generasi Muda",
    quote: "Raga yang sehat dan gizi cukup adalah syarat mutlak untuk berpikir jernih dan berdaya saing.",
    desc: "Layanan pemeriksaan medis gratis berkala, posyandu lansia & balita, distribusi vitamin dan paket nutrisi seimbang, serta penyuluhan sanitasi di kantong permukiman padat pra-sejahtera.",
    image: "/images/dampak-care.jpg",
    accentColor: "#0B72E7",
    badgeBg: "bg-sky-50 text-[#0B72E7] border-sky-200",
    badgeText: "text-[#0B72E7]",
    metrics: [
      { value: "3.400+", label: "Warga Terlayani" },
      { value: "48", label: "Titik Pos Keliling" },
      { value: "100%", label: "Layanan Gratis" }
    ],
    link: "/program/progresif-care",
    actionText: "JELAJAHI PROGRESIF CARE"
  },
  {
    id: "tanggap",
    number: "04",
    category: "AKSI DARURAT KEMANUSIAAN",
    phaseBadge: "MITIGASI & REAKSI CEPAT",
    title: "Unit Reaksi Cepat Tanggap",
    tagline: "Hadir di Detik Pertama Bencana, Bertahan Hingga Pemulihan Tuntas",
    quote: "Kepedulian diuji ketika musibah melanda; relawan kami bergerak cepat tanpa birokrasi berbelit.",
    desc: "Pasukan reaksi cepat relawan kemanusiaan untuk mitigasi dan respons bencana: penyaluran paket logistik darurat, tenda evakuasi ramah anak, dapur umum, dan pendampingan trauma healing.",
    image: "/images/pilar-tanggap.jpg",
    accentColor: "#10B981",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    badgeText: "text-emerald-700",
    metrics: [
      { value: "14+", label: "Misi Kemanusiaan" },
      { value: "< 12 Jam", label: "Kecepatan Respons" },
      { value: "2.800+", label: "Paket Logistik" }
    ],
    link: "/program/tanggap-progresif",
    actionText: "JELAJAHI TANGGAP PROGRESIF"
  },
  {
    id: "audit",
    number: "05",
    category: "TATA KELOLA & LEGALITAS",
    phaseBadge: "AKTA NOTARIS NO. 14 TAHUN 2025",
    title: "Audit Dana & Transparansi SK Menkumham",
    tagline: "Kepatuhan Hukum Total & Akuntabilitas Terverifikasi Kepada Publik",
    quote: "Kejujuran nurani dan pembukuan terbuka adalah nyawa kredibilitas yayasan.",
    desc: "Beroperasi dengan legalitas resmi SK Menkumham RI dan NPWP Yayasan terverifikasi, diaudit berkala oleh Dewan Pengawas dan akuntan publik demi memastikan setiap rupiah donasi tepat sasaran.",
    image: "/images/pilar-akademi.jpg",
    accentColor: "#081426",
    badgeBg: "bg-slate-100 text-slate-800 border-slate-300",
    badgeText: "text-slate-800",
    metrics: [
      { value: "100%", label: "Kepatuhan Hukum" },
      { value: "WTP", label: "Opini Akuntabilitas" },
      { value: "Rp 0", label: "Selisih Alokasi" }
    ],
    link: "/tentang-kami/legalitas",
    actionText: "LIHAT STRUKTUR LEGALITAS"
  }
];

export default function ImpactStats() {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [counts, setCounts] = useState({ youth: 0, projects: 0, cities: 0 });

  const basePath = process.env.NODE_ENV === "production" ? "/mudaprogresifbangsa" : "";

  // Cumulative number counter animation
  useEffect(() => {
    const duration = 1200;
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        youth: Math.floor(14200 * progress),
        projects: Math.floor(128 * progress),
        cities: Math.floor(34 * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({ youth: 14200, projects: 128, cities: 34 });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Calculate dynamic pixel distance for horizontal translation
  useEffect(() => {
    const updateDistance = () => {
      if (trackRef.current) {
        const totalTrackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const extraPadding = viewportWidth > 768 ? 80 : 40;
        setScrollDistance(Math.max(0, totalTrackWidth - viewportWidth + extraPadding));
      }
    };

    updateDistance();
    window.addEventListener("resize", updateDistance);
    return () => window.removeEventListener("resize", updateDistance);
  }, []);

  // Framer Motion scroll hook tied to tall container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Silky-smooth spring physics interpolation (eliminates stepped mouse-wheel jerkiness)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.5,
    restDelta: 0.0001
  });

  // Smooth horizontal translation derived from smoothProgress
  const x = useTransform(smoothProgress, (pos) => -pos * scrollDistance);

  // Track active card index based on smooth scroll position
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      const idx = Math.min(
        IMPACT_PROJECTS.length,
        Math.floor(latest * (IMPACT_PROJECTS.length + 1))
      );
      setActiveCardIndex(idx);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Smooth glide navigation by clicking next/prev buttons
  const scrollOneCard = (direction: "prev" | "next") => {
    if (!targetRef.current) return;
    const totalHeight = targetRef.current.offsetHeight - window.innerHeight;
    const step = totalHeight / (IMPACT_PROJECTS.length + 1);
    const delta = direction === "next" ? step : -step;
    window.scrollBy({
      top: delta,
      behavior: "smooth"
    });
  };

  return (
    <section
      ref={targetRef}
      id="dampak"
      className="relative h-[420vh] bg-[#F7F8FA] text-slate-900 border-t border-slate-200 select-none"
    >
      {/* Pinned Viewport Container (Sticky to top of screen) */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden py-4 sm:py-6">
        
        {/* Top Control Bar: Title Brand & Live Progress Indicator */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between shrink-0 mb-2">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] animate-pulse" />
            <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#2454BE]">
              AKUNTABILITAS DAMPAK NYATA
            </span>
          </div>

          {/* Progress Tracker Pill & Smooth Controls */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-3 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm">
              <span className="text-[11px] font-mono font-bold text-slate-500">
                Jejak Dampak
              </span>
              <div className="w-24 h-1.5 rounded-full bg-slate-200 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#2454BE] via-[#0B72E7] to-[#FF5500]"
                  style={{
                    width: useTransform(smoothProgress, [0, 1], ["8%", "100%"])
                  }}
                />
              </div>
              <span className="text-[11px] font-mono font-extrabold text-[#2454BE]">
                0{Math.min(IMPACT_PROJECTS.length, activeCardIndex + 1)} / 0{IMPACT_PROJECTS.length}
              </span>
            </div>

            {/* Quick Glide Navigation Buttons */}
            <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md p-1 rounded-full border border-slate-200 shadow-sm">
              <button
                type="button"
                onClick={() => scrollOneCard("prev")}
                aria-label="Geser ke kiri"
                className="w-7 h-7 rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollOneCard("next")}
                aria-label="Geser ke kanan"
                className="w-7 h-7 rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* HORIZONTAL SCROLL TRACK (Pinned Horizontal Movement)     */}
        {/* ======================================================== */}
        <div className="my-auto w-full overflow-hidden flex items-center">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-center gap-6 sm:gap-8 px-4 sm:px-8 md:px-12 will-change-transform"
          >
            {/* ---------------------------------------------------- */}
            {/* PANEL 1: EDITORIAL INTRO (Trionn "Selected work" style) */}
            {/* ---------------------------------------------------- */}
            <div className="w-[340px] sm:w-[420px] md:w-[480px] lg:w-[520px] shrink-0 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-xl flex flex-col justify-between h-[480px] sm:h-[520px]">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF5500] block mb-2">
                  // REKAM JEJAK TERVERIFIKASI
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.08] uppercase">
                  Jejak Nyata <br />
                  <span className="text-[#2454BE]">&amp; Akuntabilitas</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
                  Bukan sekadar narasi; setiap rupiah dan program diuji secara empiris, diaudit terbuka, dan berorientasi pada kemandirian sosial-ekonomi pemuda antargenerasi.
                </p>

                {/* 3 Live Cumulative Metrics Counters */}
                <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-100">
                  <div>
                    <span className="font-mono text-xl sm:text-2xl font-black text-slate-900 block">
                      {counts.youth.toLocaleString("id-ID")}+
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase leading-tight block mt-0.5">
                      Pemuda Terbina
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-xl sm:text-2xl font-black text-[#2454BE] block">
                      {counts.projects}+
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase leading-tight block mt-0.5">
                      Inisiatif Mandiri
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-xl sm:text-2xl font-black text-[#FF5500] block">
                      {counts.cities}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase leading-tight block mt-0.5">
                      Kota &amp; Kab
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Scroll Hint Indicator */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-2">
                  <span>Scroll ke bawah untuk melihat</span>
                  <ArrowRight className="w-4 h-4 text-[#FF5500] animate-bounce" />
                </span>
                <Link
                  href="/tentang-kami/legalitas"
                  className="text-xs font-bold text-[#2454BE] hover:underline flex items-center gap-1"
                >
                  <span>Legalitas SK</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* PANELS 2 - 6: FIVE SHOWCASE IMPACT CARDS (Trionn-style)*/}
            {/* Emerging from bottom-right corner as you scroll      */}
            {/* ---------------------------------------------------- */}
            {IMPACT_PROJECTS.map((item, index) => (
              <AnimatedImpactCard
                key={item.id}
                item={item}
                index={index}
                smoothProgress={smoothProgress}
                scrollDistance={scrollDistance}
                basePath={basePath}
              />
            ))}

            {/* ---------------------------------------------------- */}
            {/* PANEL 7: FINAL CALL TO ACTION & REPORT DOWNLOAD     */}
            {/* ---------------------------------------------------- */}
            <AnimatedOutroPanel
              smoothProgress={smoothProgress}
              scrollDistance={scrollDistance}
            />
          </motion.div>
        </div>

        {/* Bottom Status Bar: Footnote and Navigation Dots */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 pt-2 border-t border-slate-200/80 text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>DATA DIAUDIT BERKALA OLEH DEWAN PENGAWAS YAYASAN &amp; AKUNTAN PUBLIK</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-400">Navigasi Jejak:</span>
            {IMPACT_PROJECTS.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeCardIndex
                    ? "w-5 bg-[#2454BE]"
                    : "w-1.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/**
 * AnimatedImpactCard: Card that dynamically emerges from the bottom-right corner
 * as the user scrolls, rising smoothly to focal elevation as it approaches center.
 * Repeats seamlessly whether scrolling forwards or backwards.
 */
function AnimatedImpactCard({
  item,
  index,
  smoothProgress,
  scrollDistance,
  basePath,
}: {
  item: ImpactShowcase;
  index: number;
  smoothProgress: MotionValue<number>;
  scrollDistance: number;
  basePath: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [offsetLeft, setOffsetLeft] = useState<number | null>(null);

  useEffect(() => {
    const measure = () => {
      if (cardRef.current) {
        setOffsetLeft(cardRef.current.offsetLeft);
      }
    };
    measure();
    const t = setTimeout(measure, 150);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Dynamic Y translation: starts shifted down at +150px (bottom-right) when entering,
  // then rises gracefully to 0px as it glides toward the left-center focal area.
  const cardY = useTransform(smoothProgress, (p) => {
    if (offsetLeft === null) return 0;
    const currentTrackX = -p * scrollDistance;
    const cardScreenX = offsetLeft + currentTrackX;
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;

    // Offscreen to the right
    if (cardScreenX >= screenWidth) {
      return 150;
    }
    // Arrived at focal reading position (left/center 28% of screen)
    if (cardScreenX <= screenWidth * 0.28) {
      return 0;
    }
    // Smooth Hermite cubic interpolation from bottom-right (150px) to top (0px)
    const t = (cardScreenX - screenWidth * 0.28) / (screenWidth * 0.72);
    const eased = t * t * (3 - 2 * t);
    return eased * 150;
  });

  // Dynamic subtle 3D tilt: slanted up from bottom-right, leveling off to 0deg at center
  const cardRotate = useTransform(smoothProgress, (p) => {
    if (offsetLeft === null) return 0;
    const currentTrackX = -p * scrollDistance;
    const cardScreenX = offsetLeft + currentTrackX;
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;

    if (cardScreenX >= screenWidth) return 2.8;
    if (cardScreenX <= screenWidth * 0.28) return 0;
    const t = (cardScreenX - screenWidth * 0.28) / (screenWidth * 0.72);
    return t * 2.8;
  });

  // Scale: 0.92 when in bottom-right corner, expanding to full 1.0 at center
  const cardScale = useTransform(smoothProgress, (p) => {
    if (offsetLeft === null) return 1;
    const currentTrackX = -p * scrollDistance;
    const cardScreenX = offsetLeft + currentTrackX;
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;

    if (cardScreenX >= screenWidth) return 0.92;
    if (cardScreenX <= screenWidth * 0.28) return 1.0;
    const t = (cardScreenX - screenWidth * 0.28) / (screenWidth * 0.72);
    return 1.0 - t * 0.08;
  });

  // Opacity: fades in cleanly as it enters viewport
  const cardOpacity = useTransform(smoothProgress, (p) => {
    if (offsetLeft === null) return 1;
    const currentTrackX = -p * scrollDistance;
    const cardScreenX = offsetLeft + currentTrackX;
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;

    if (cardScreenX >= screenWidth + 100) return 0.35;
    if (cardScreenX <= screenWidth * 0.35) return 1.0;
    const t = (cardScreenX - screenWidth * 0.35) / (screenWidth * 0.65);
    return 1.0 - t * 0.45;
  });

  return (
    <motion.div
      ref={cardRef}
      style={{
        y: cardY,
        rotate: cardRotate,
        scale: cardScale,
        opacity: cardOpacity,
        transformOrigin: "bottom right",
        willChange: "transform, opacity",
      }}
      className="w-[360px] sm:w-[480px] md:w-[560px] lg:w-[620px] shrink-0 bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-xl flex flex-col justify-between h-[480px] sm:h-[520px] group transition-shadow hover:shadow-2xl hover:border-slate-300"
    >
      {/* 1. Large Cinematic Architectural Image Frame */}
      <div className="relative w-full h-[220px] sm:h-[250px] rounded-2xl overflow-hidden shadow-inner border border-slate-100 bg-slate-900 group-hover:scale-[1.01] transition-transform duration-500">
        <Image
          src={`${basePath}${item.image}`}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 400px, 640px"
        />
        {/* Dark subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#081426]/90 via-[#081426]/30 to-transparent" />

        {/* Top Floating Badge */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 text-slate-900 backdrop-blur-md shadow-sm">
            {item.phaseBadge}
          </span>
          <span className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md text-white font-mono text-xs font-bold flex items-center justify-center border border-white/20">
            0{index + 1}
          </span>
        </div>

        {/* Bottom Text Overlay inside Image (like Trionn "Hi, I'm Alex") */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <blockquote className="text-xs sm:text-sm font-semibold italic text-slate-200 leading-snug drop-shadow-md">
            &ldquo;{item.quote}&rdquo;
          </blockquote>
        </div>
      </div>

      {/* 2. Content Section: Title, Subtitle, Metric Pills */}
      <div className="my-auto pt-3">
        <div className="flex items-center justify-between mb-1">
          <span
            className="font-mono text-[11px] font-bold uppercase tracking-wider"
            style={{ color: item.accentColor }}
          >
            {item.category}
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
          {item.title}
        </h3>
        <p className="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2">
          {item.desc}
        </p>

        {/* Impact Metric Pills Row */}
        <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-100">
          {item.metrics.map((m, mIdx) => (
            <div
              key={mIdx}
              className="bg-slate-50 border border-slate-100 rounded-xl p-2 text-center"
            >
              <span
                className="font-mono text-sm sm:text-base font-black block"
                style={{ color: item.accentColor }}
              >
                {m.value}
              </span>
              <span className="text-[10px] font-bold text-slate-500 uppercase block truncate">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Bottom Action Link */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={item.link}
          className="font-mono text-xs font-extrabold flex items-center gap-1.5 transition-colors group-hover:translate-x-1"
          style={{ color: item.accentColor }}
        >
          <span>{item.actionText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform"
          style={{ backgroundColor: item.accentColor }}
        >
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}

/**
 * AnimatedOutroPanel: Final CTA panel that also emerges from bottom-right
 */
function AnimatedOutroPanel({
  smoothProgress,
  scrollDistance,
}: {
  smoothProgress: MotionValue<number>;
  scrollDistance: number;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [offsetLeft, setOffsetLeft] = useState<number | null>(null);

  useEffect(() => {
    const measure = () => {
      if (panelRef.current) {
        setOffsetLeft(panelRef.current.offsetLeft);
      }
    };
    measure();
    const t = setTimeout(measure, 150);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const panelY = useTransform(smoothProgress, (p) => {
    if (offsetLeft === null) return 0;
    const currentTrackX = -p * scrollDistance;
    const screenX = offsetLeft + currentTrackX;
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;

    if (screenX >= screenWidth) return 150;
    if (screenX <= screenWidth * 0.4) return 0;
    const t = (screenX - screenWidth * 0.4) / (screenWidth * 0.6);
    return t * t * (3 - 2 * t) * 150;
  });

  const panelRotate = useTransform(smoothProgress, (p) => {
    if (offsetLeft === null) return 0;
    const currentTrackX = -p * scrollDistance;
    const screenX = offsetLeft + currentTrackX;
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;

    if (screenX >= screenWidth) return 2.5;
    if (screenX <= screenWidth * 0.4) return 0;
    const t = (screenX - screenWidth * 0.4) / (screenWidth * 0.6);
    return t * 2.5;
  });

  const panelScale = useTransform(smoothProgress, (p) => {
    if (offsetLeft === null) return 1;
    const currentTrackX = -p * scrollDistance;
    const screenX = offsetLeft + currentTrackX;
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;

    if (screenX >= screenWidth) return 0.92;
    if (screenX <= screenWidth * 0.4) return 1.0;
    const t = (screenX - screenWidth * 0.4) / (screenWidth * 0.6);
    return 1.0 - t * 0.08;
  });

  return (
    <motion.div
      ref={panelRef}
      style={{
        y: panelY,
        rotate: panelRotate,
        scale: panelScale,
        transformOrigin: "bottom right",
        willChange: "transform, opacity",
      }}
      className="w-[320px] sm:w-[380px] md:w-[420px] shrink-0 bg-gradient-to-br from-[#081426] via-[#0F2342] to-[#1E3F7A] text-white rounded-3xl p-7 sm:p-8 border border-white/10 shadow-2xl flex flex-col justify-between h-[480px] sm:h-[520px]"
    >
      <div>
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-amber-400 block mb-2">
          // AKUNTABILITAS PUBLIK
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
          Mari Bergerak <br />
          <span className="text-sky-300">Bersama MPB</span>
        </h3>
        <p className="text-xs text-slate-300 mt-3 leading-relaxed">
          Laporan pertanggungjawaban program dan audit legalitas diperbarui secara berkala sebagai komitmen transparansi kepada seluruh mitra dan donatur.
        </p>

        <div className="mt-6 space-y-2.5">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-xs font-bold block text-white">
                Legalitas Terdaftar Resmi
              </span>
              <span className="text-[10px] text-slate-300 block">
                SK Kemenkumham RI &amp; NPWP Yayasan
              </span>
            </div>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-xs font-bold block text-white">
                Penyaluran 100% Terverifikasi
              </span>
              <span className="text-[10px] text-slate-300 block">
                Bebas Biaya Bagi Warga Binaan
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-white/10 space-y-2">
        <Link
          href="/kolaborasi"
          className="w-full py-3 px-4 rounded-xl bg-[#FF5500] hover:bg-[#e04b00] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition-all"
        >
          <span>Ajukan Sinergi Kolaborasi</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/tentang-kami/legalitas"
          className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all border border-white/10"
        >
          <span>Unduh Dokumen Legalitas</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}
