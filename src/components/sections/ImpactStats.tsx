"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, type MotionValue } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink
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
    accentColor: "#38BDF8",
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
    accentColor: "#38BDF8",
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
        const extraPadding = viewportWidth > 768 ? 60 : 32;
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

  // Silky-smooth spring physics interpolation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.5,
    restDelta: 0.0001
  });

  // Smooth horizontal translation derived from smoothProgress
  const x = useTransform(smoothProgress, (pos) => -pos * scrollDistance);

  return (
    <section
      ref={targetRef}
      id="dampak"
      className="relative h-[420vh] bg-[#F7F8FA] text-slate-900 border-t border-slate-200 select-none"
    >
      {/* Pinned Viewport Container (Sticky to top of screen, calibrated padding) */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden pt-14 pb-4 sm:pt-16 sm:pb-6">
        
        {/* Top Header: Simple Clean Brand Label */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 shrink-0 mb-2.5 sm:mb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] animate-pulse" />
            <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#2454BE]">
              AKUNTABILITAS DAMPAK NYATA
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* HORIZONTAL SCROLL TRACK (Pinned Horizontal Movement)     */}
        {/* ======================================================== */}
        <div className="w-full overflow-hidden flex items-center">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-center gap-5 sm:gap-7 px-4 sm:px-8 md:px-12 will-change-transform"
          >
            {/* ---------------------------------------------------- */}
            {/* PANEL 1: EDITORIAL INTRO (Compact Calibrated Size)   */}
            {/* ---------------------------------------------------- */}
            <div className="w-[290px] sm:w-[380px] md:w-[430px] lg:w-[450px] h-[380px] sm:h-[415px] shrink-0 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#FF5500] block mb-1">
                  // REKAM JEJAK TERVERIFIKASI
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-[1.1] uppercase">
                  Jejak Nyata <br />
                  <span className="text-[#2454BE]">&amp; Akuntabilitas</span>
                </h2>
                <p className="text-xs sm:text-[13px] text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                  Bukan sekadar narasi; setiap rupiah dan program diuji secara empiris, diaudit terbuka, dan berorientasi pada kemandirian sosial-ekonomi pemuda antargenerasi.
                </p>

                {/* 3 Live Cumulative Metrics Counters */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-3.5 border-t border-slate-100">
                  <div>
                    <span className="font-mono text-lg sm:text-xl font-black text-slate-900 block">
                      {counts.youth.toLocaleString("id-ID")}+
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase leading-tight block mt-0.5">
                      Pemuda Terbina
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-lg sm:text-xl font-black text-[#2454BE] block">
                      {counts.projects}+
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase leading-tight block mt-0.5">
                      Inisiatif Mandiri
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-lg sm:text-xl font-black text-[#FF5500] block">
                      {counts.cities}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase leading-tight block mt-0.5">
                      Kota &amp; Kab
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Info Link */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
                <Link
                  href="/tentang-kami/legalitas"
                  className="text-xs font-bold text-[#2454BE] hover:underline flex items-center gap-1"
                >
                  <span>Legalitas SK Menkumham</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* PANELS 2 - 6: FIVE SHOWCASE IMPACT CARDS             */}
            {/* Calibrated Card Dimensions (No Cutoff!)              */}
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
            {/* PANEL 7: FINAL CALL TO ACTION (Compact Size)         */}
            {/* ---------------------------------------------------- */}
            <AnimatedOutroPanel
              smoothProgress={smoothProgress}
              scrollDistance={scrollDistance}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

/**
 * AnimatedImpactCard: Calibrated compact dimensions (h-[380px] sm:h-[415px])
 * Full image with black gradient overlay, never cut off!
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

  // Gentle emergence Y translation: 55px offset when offscreen right,
  // gliding gracefully to 0px at reading center (never pushes card off bottom)
  const cardY = useTransform(smoothProgress, (p) => {
    if (offsetLeft === null) return 0;
    const currentTrackX = -p * scrollDistance;
    const cardScreenX = offsetLeft + currentTrackX;
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;

    if (cardScreenX >= screenWidth) {
      return 55;
    }
    if (cardScreenX <= screenWidth * 0.28) {
      return 0;
    }
    const t = (cardScreenX - screenWidth * 0.28) / (screenWidth * 0.72);
    const eased = t * t * (3 - 2 * t);
    return eased * 55;
  });

  const cardRotate = useTransform(smoothProgress, (p) => {
    if (offsetLeft === null) return 0;
    const currentTrackX = -p * scrollDistance;
    const cardScreenX = offsetLeft + currentTrackX;
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;

    if (cardScreenX >= screenWidth) return 2.2;
    if (cardScreenX <= screenWidth * 0.28) return 0;
    const t = (cardScreenX - screenWidth * 0.28) / (screenWidth * 0.72);
    return t * 2.2;
  });

  const cardScale = useTransform(smoothProgress, (p) => {
    if (offsetLeft === null) return 1;
    const currentTrackX = -p * scrollDistance;
    const cardScreenX = offsetLeft + currentTrackX;
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;

    if (cardScreenX >= screenWidth) return 0.94;
    if (cardScreenX <= screenWidth * 0.28) return 1.0;
    const t = (cardScreenX - screenWidth * 0.28) / (screenWidth * 0.72);
    return 1.0 - t * 0.06;
  });

  const cardOpacity = useTransform(smoothProgress, (p) => {
    if (offsetLeft === null) return 1;
    const currentTrackX = -p * scrollDistance;
    const cardScreenX = offsetLeft + currentTrackX;
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;

    if (cardScreenX >= screenWidth + 80) return 0.4;
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
      className="relative w-[300px] sm:w-[380px] md:w-[460px] lg:w-[490px] h-[380px] sm:h-[415px] shrink-0 rounded-3xl overflow-hidden shadow-2xl border border-white/20 select-none group transition-shadow hover:shadow-[0_20px_50px_rgba(8,20,38,0.4)]"
    >
      {/* 1. FULL BACKGROUND IMAGE */}
      <Image
        src={`${basePath}${item.image}`}
        alt={item.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        sizes="(max-width: 768px) 380px, 500px"
      />

      {/* 2. OVERLAY GRADASI HITAM */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-[#081426]/85 to-black/25 pointer-events-none" />

      {/* 3. CONTENT OVERLAY (Calibrated compact paddings & text) */}
      <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6 text-white">
        {/* Category tag */}
        <span
          className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-widest drop-shadow-sm mb-1"
          style={{ color: item.accentColor }}
        >
          {item.category}
        </span>

        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight leading-snug drop-shadow-md">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-200 mt-1.5 leading-relaxed line-clamp-2 drop-shadow-sm font-medium">
          {item.desc}
        </p>

        {/* 3 Metrics Pills in dark translucent glass */}
        <div className="grid grid-cols-3 gap-2 mt-3 pt-2.5 border-t border-white/15">
          {item.metrics.map((m, mIdx) => (
            <div
              key={mIdx}
              className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-1.5 sm:p-2 text-center"
            >
              <span
                className="font-mono text-xs sm:text-sm md:text-base font-black block text-white drop-shadow-sm"
                style={{ color: item.accentColor }}
              >
                {m.value}
              </span>
              <span className="text-[8px] sm:text-[9px] font-bold text-slate-300 uppercase block truncate mt-0.5">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Action Link & Arrow Button */}
        <div className="pt-2.5 mt-2.5 border-t border-white/15 flex items-center justify-between">
          <Link
            href={item.link}
            className="font-mono text-[11px] sm:text-xs font-bold text-white hover:text-amber-300 flex items-center gap-1.5 transition-colors group-hover:translate-x-1"
          >
            <span>{item.actionText}</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </Link>

          <Link
            href={item.link}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all shadow-md group-hover:scale-110"
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * AnimatedOutroPanel: Calibrated compact dimensions (h-[380px] sm:h-[415px])
 * Never cut off!
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

    if (screenX >= screenWidth) return 55;
    if (screenX <= screenWidth * 0.4) return 0;
    const t = (screenX - screenWidth * 0.4) / (screenWidth * 0.6);
    return t * t * (3 - 2 * t) * 55;
  });

  const panelRotate = useTransform(smoothProgress, (p) => {
    if (offsetLeft === null) return 0;
    const currentTrackX = -p * scrollDistance;
    const screenX = offsetLeft + currentTrackX;
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;

    if (screenX >= screenWidth) return 2.2;
    if (screenX <= screenWidth * 0.4) return 0;
    const t = (screenX - screenWidth * 0.4) / (screenWidth * 0.6);
    return t * 2.2;
  });

  const panelScale = useTransform(smoothProgress, (p) => {
    if (offsetLeft === null) return 1;
    const currentTrackX = -p * scrollDistance;
    const screenX = offsetLeft + currentTrackX;
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;

    if (screenX >= screenWidth) return 0.94;
    if (screenX <= screenWidth * 0.4) return 1.0;
    const t = (screenX - screenWidth * 0.4) / (screenWidth * 0.6);
    return 1.0 - t * 0.06;
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
      className="w-[290px] sm:w-[330px] md:w-[360px] h-[380px] sm:h-[415px] shrink-0 bg-gradient-to-br from-[#081426] via-[#0F2342] to-[#1E3F7A] text-white rounded-3xl p-5 sm:p-6 border border-white/10 shadow-2xl flex flex-col justify-between"
    >
      <div>
        <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase text-amber-400 block mb-1">
          // AKUNTABILITAS PUBLIK
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
          Mari Bergerak <br />
          <span className="text-sky-300">Bersama MPB</span>
        </h3>
        <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-2">
          Laporan pertanggungjawaban program dan audit legalitas diperbarui berkala untuk transparansi publik.
        </p>

        <div className="mt-3.5 space-y-2">
          <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <div className="truncate">
              <span className="text-xs font-bold block text-white truncate">
                Legalitas SK Resmi
              </span>
              <span className="text-[10px] text-slate-300 block truncate">
                SK Kemenkumham RI &amp; NPWP
              </span>
            </div>
          </div>
          <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <div className="truncate">
              <span className="text-xs font-bold block text-white truncate">
                Penyaluran 100% Terverifikasi
              </span>
              <span className="text-[10px] text-slate-300 block truncate">
                Cuma-cuma Bagi Warga Binaan
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-white/10 space-y-2">
        <Link
          href="/kolaborasi"
          className="w-full py-2.5 px-3 rounded-xl bg-[#FF5500] hover:bg-[#e04b00] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition-all"
        >
          <span>Ajukan Sinergi Kolaborasi</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link
          href="/tentang-kami/legalitas"
          className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[11px] sm:text-xs font-bold flex items-center justify-center gap-2 transition-all border border-white/10"
        >
          <span>Unduh Dokumen Legalitas</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}
