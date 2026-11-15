"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  History,
  Target,
  Sparkles,
  ShieldCheck,
  Calendar,
  MapPin,
  Award,
  Users,
  BookOpen,
  Briefcase,
  HeartHandshake,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Quote,
  Building2,
  FileCheck2,
  TrendingUp,
  Compass,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { FOUNDATION_INFO } from "@/data/foundation-data";

interface TimelineEvent {
  year: string;
  badge: string;
  phaseTitle: string;
  headline: string;
  story: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  keyQuote: string;
  theme: {
    accent: string;
    border: string;
    badgeBg: string;
    badgeText: string;
  };
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "2024",
    badge: "FASE 01 // INISIASI & RISET",
    phaseTitle: "Gagasan Awal & Riset Lapangan",
    headline: "Kegelisahan Kolektif atas Kesenjangan Pendidikan Urban",
    story:
      "Gerakan ini bermula dari keprihatinan mendalam para aktivis kepemudaan, sarjana, dan praktisi pendidikan di kawasan Bekasi dan Jabodetabek. Menemukan fakta ribuan pemuda usia produktif terhenti pendidikannya karena kendala biaya ijazah formal dan ketiadaan bekal keahlian kerja nyata, sekelompok pemuda menggagas kelas belajar mandiri perdana dan melakukan pemetaan empiris di tiga kantong permukiman padat.",
    image: "/images/milestone-fase1.jpg",
    imageAlt: "Diskusi nalar kritis dan pemetaan lapangan awal pendirian yayasan",
    highlights: [
      "Penyelenggaraan kelas belajar alternatif perdana bagi 35 anak putus sekolah.",
      "Penyusunan naskah akademik 'Pendidikan Nalar Kritis & Pengentasan Kemiskinan Urban'.",
      "Konsolidasi relawan lintas disiplin (pendidik, analis kebijakan, dan wirausahawan muda)."
    ],
    keyQuote: "“Pendidikan bukan hak istimewa segelintir orang berpunya; ia adalah fondasi kedaulatan nurani setiap anak bangsa.”",
    theme: {
      accent: "#2454BE",
      border: "border-blue-400",
      badgeBg: "bg-blue-50 text-[#2454BE] border-blue-200",
      badgeText: "text-[#2454BE]"
    }
  },
  {
    year: "2025",
    badge: "FASE 02 // LEGALITAS NEGARA",
    phaseTitle: "Pelembagaan Resmi & SK Kemenkumham RI",
    headline: "Memformalkan Amanah Menjadi Lembaga Berbadan Hukum Sah",
    story:
      "Untuk memastikan akuntabilitas publik, perlindungan hukum penerima manfaat, dan tata kelola berstandar nasional, gerakan akar rumput dilembagakan secara resmi menjadi Yayasan Muda Progresif Bangsa melalui Akta Notaris No. 14 tanggal 17 Desember 2025 di hadapan Notaris Karina Kahayanti, S.H., M.Kn., dan disahkan oleh Menteri Hukum dan HAM RI melalui SK No. AHU-0031979.AH.01.04.Tahun 2025.",
    image: "/images/pilar-akademi.jpg",
    imageAlt: "Pemberian fasilitas belajar dan pengesahan SK Kemenkumham Yayasan",
    highlights: [
      "Pengesahan SK Kemenkumham RI: AHU-0031979.AH.01.04.Tahun 2025.",
      "Penerbitan NPWP resmi lembaga (1000 0000 0842 6981) di KPP Pratama Bekasi Utara.",
      "Peresmian Pusat Kegiatan Belajar Masyarakat (PKBM) Paket A, B, & C bebas biaya SPP.",
      "Pembentukan Dewan Pembina, Pengawas, dan Pengurus Eksekutif yang independen."
    ],
    keyQuote: "“Legalitas bukan sekadar lembaran formalitas, melainkan janji keterbukaan kami kepada publik dan bangsa.”",
    theme: {
      accent: "#0B72E7",
      border: "border-sky-400",
      badgeBg: "bg-sky-50 text-sky-700 border-sky-200",
      badgeText: "text-sky-700"
    }
  },
  {
    year: "2026",
    badge: "FASE 03 // SAAT INI",
    phaseTitle: "Konsolidasi Ekosistem & Kemitraan Strategis",
    headline: "Integrasi 4 Pilar Pemberdayaan & Insentif Fiskal Nasional",
    story:
      "Memasuki tahun 2026, yayasan memperluas daya jangkaunya dengan meluncurkan Ekosistem 4 Pilar Terpadu: Akademi Progresif (PKBM & logika), Vokasi Progresif (keahlian industri bersertifikasi BNSP), Progresif Care (posko kesehatan & gizi balita), dan Tanggap Progresif (korps relawan bencana). Di tahun ini pula, skema insentif pajak Super Tax Deduction 200% (PP No. 45/2019) dibuka untuk kemitraan korporasi.",
    image: "/images/pilar-vokasi.jpg",
    imageAlt: "Pelatihan vokasi praktis industri dan kemitraan CSR bersama yayasan",
    highlights: [
      "Menjangkau 1.200+ penerima manfaat terdaftar dan 120+ relawan pemuda tersertifikasi.",
      "Peluncuran Portal Kemitraan Multi-Pihak (BUMN, Perguruan Tinggi/MBKM, Pemda, & CSR).",
      "Pengintegrasian kurikulum nalar kritis, filsafat kebangsaan, dan kecerdasan buatan (AI).",
      "Penerbitan policy brief riset kebijakan ketenagakerjaan pemuda berkala."
    ],
    keyQuote: "“Mengubah pengetahuan menjadi gagasan berani, dan mengubah gagasan menjadi aksi nyata yang berdampak terukur.”",
    theme: {
      accent: "#FF5500",
      border: "border-orange-500",
      badgeBg: "bg-orange-50 text-orange-700 border-orange-200",
      badgeText: "text-orange-700"
    }
  },
  {
    year: "2027–2028",
    badge: "FASE 04 // EKSPANSI REGIONAL",
    phaseTitle: "Sentra Vokasi Terpadu & Perluasan Wilayah",
    headline: "Replikasi Model PKBM & Sentra Kejuruan Mandiri",
    story:
      "Rencana strategis tahap menengah difokuskan pada pendirian Sentra Vokasi Digital mandiri di Jawa Barat, pendampingan inkubasi 500 unit usaha mikro pemuda binaan, dan perluasan jangkauan sekolah kesetaraan ke 5 kabupaten/kota dengan angka putus sekolah tertinggi.",
    image: "/images/dampak-vokasi.jpg",
    imageAlt: "Ekspansi lab komputer vokasi dan inkubasi wirausaha mandiri",
    highlights: [
      "Pembangunan Sentra Pelatihan Vokasi & Lab Digital mandiri berkapasitas 1.000 siswa/tahun.",
      "Kemitraan penyaluran tenaga kerja langsung dengan 50+ perusahaan industri terkemuka.",
      "Kolaborasi Tridharma Perguruan Tinggi untuk hilirisasi riset kebijakan publik."
    ],
    keyQuote: "“Kemandirian ekonomi adalah benteng pertahanan martabat keluarga dan kedaulatan generasi masa depan.”",
    theme: {
      accent: "#10B981",
      border: "border-emerald-500",
      badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
      badgeText: "text-emerald-800"
    }
  },
  {
    year: "2030",
    badge: "FASE 05 // VISI EMAS",
    phaseTitle: "Transformasi Skala Nasional Menuju Indonesia Emas",
    headline: "Menjadi Think-Tank & Ekosistem Kepemudaan Rujukan Nasional",
    story:
      "Menjelang dekade baru, Yayasan Muda Progresif Bangsa menargetkan terciptanya 10.000 pemuda mandiri yang berpendidikan utuh, berkarakter negarawan, dan berdaya saing global, serta menjadikan MPB Foundation sebagai lembaga think-tank kebijakan alternatif kepemudaan terdepan yang independen di Indonesia.",
    image: "/images/milestone-fase3.jpg",
    imageAlt: "Visi masa depan kepemudaan mandiri dan riset kebijakan nasional",
    highlights: [
      "Target pencapaian 10.000+ lulusan berdaya mandiri berpenghasilan layak.",
      "Advokasi regulasi pendidikan nonformal nasional berbasis data presisi.",
      "Jejaring alumni pemuda progresif di 38 provinsi di seluruh Nusantara."
    ],
    keyQuote: "“Saat pemuda tercerahkan, mandiri, dan berani beraksi, masa depan bangsa tidak lagi sekadar angan-angan.”",
    theme: {
      accent: "#8B5CF6",
      border: "border-purple-500",
      badgeBg: "bg-purple-50 text-purple-800 border-purple-200",
      badgeText: "text-purple-800"
    }
  }
];

export default function InteractiveFoundationProfile() {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState<number>(2); // Default to current 2026
  const activeEvent = TIMELINE_EVENTS[activeTimelineIndex];
  const basePath = process.env.NODE_ENV === "production" ? "/mudaprogresifbangsa" : "";

  return (
    <div className="space-y-12 sm:space-y-16">
      
      {/* ============================================================ */}
      {/* 1. HERO IDENTITY CARD: Narasi Filosofis & Mandat Pergerakan   */}
      {/* ============================================================ */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md relative overflow-hidden">
        {/* Subtle Brand Accent Stripe di Puncak */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2454BE] via-[#0B72E7] to-[#FF5500]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Kolom Teks Profil Mendalam (7 Kolom) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-mono font-bold text-[#2454BE]">
              <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
              <span>PROFIL RESMI LEMBAGA // SEJAK 2025</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Yayasan Muda Progresif Bangsa
            </h1>

            <p className="text-xs sm:text-sm text-[#FF5500] font-mono font-bold tracking-wide uppercase">
              Muda Progresif Bangsa Foundation • Akta Notaris No. 14 / SK Kemenkumham RI 2025
            </p>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
              <strong>Yayasan Muda Progresif Bangsa (MPB Foundation)</strong> adalah lembaga nirlaba independen yang didirikan atas dasar ikhtiar kolektif generasi muda Indonesia. Kami hadir untuk menjawab kegelisahan struktural: tingginya angka pemuda rentan putus sekolah, minimnya ruang asah nalar kritis, dan rapuhnya kemandirian ekonomi keluarga pra-sejahtera di kawasan urban dan sub-urban.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify sm:text-left">
              Berpijak pada prinsip <em>evidence-based intervention</em>, kami mengintegrasikan tiga matra transformasi: penyelenggaraan sekolah kesetaraan formal cuma-cuma (PKBM), pembekalan keterampilan vokasi praktis berstandar industri, serta advokasi kebijakan publik yang bertumpu pada kajian riset empiris.
            </p>

            {/* Quote Card Tagline Resmi */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 shadow-inner">
              <Quote className="w-5 h-5 text-[#2454BE] shrink-0 mt-0.5 opacity-80" />
              <div>
                <p className="text-xs sm:text-sm font-extrabold text-slate-900 italic leading-snug">
                  “Dari Pengetahuan, Menjadi Gagasan, Berdampak Pada Aksi.”
                </p>
                <span className="text-[11px] font-mono font-medium text-slate-500 mt-0.5 block">
                  — Kompas Moral &amp; Slogan Gerakan Yayasan Muda Progresif Bangsa
                </span>
              </div>
            </div>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 text-[11px]">
              <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                <span className="text-slate-400 font-mono block text-[10px]">TAHUN BERDIRI</span>
                <span className="font-bold text-slate-800">2025 (Inisiasi 2024)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                <span className="text-slate-400 font-mono block text-[10px]">STATUS HUKUM</span>
                <span className="font-bold text-slate-800 truncate block">Yayasan Resmi SK Kemenkumham</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 col-span-2 sm:col-span-1">
                <span className="text-slate-400 font-mono block text-[10px]">WILAYAH KERJA</span>
                <span className="font-bold text-slate-800">Bekasi, Jabar &amp; Nasional</span>
              </div>
            </div>
          </div>

          {/* Kolom Visual Foto Dokumentasi Bersejarah (5 Kolom) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950 group">
              <Image
                src={`${basePath}/images/pilar-akademi.jpg`}
                alt="Aktivitas pendidikan dan pembinaan peserta didik PKBM Yayasan Muda Progresif Bangsa"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#FF5500] text-white inline-block mb-1">
                  DOKUMENTASI PROGRAM
                </span>
                <p className="text-xs font-semibold leading-snug text-slate-100">
                  Suasana kelas pembelajaran nalar kritis dan literasi digital di Sentra Belajar PKBM MPB.
                </p>
              </div>
            </div>

            {/* Sub-Card: Nilai Integritas Kelembagaan */}
            <div className="p-4 rounded-2xl bg-[#081426] text-white border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-sky-300 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>TATA KELOLA NIRLABA</span>
                </span>
                <span className="text-slate-400">100% Bebas Komersialisasi</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Seluruh dana donatur, hibah CSR, dan titipan ZISWAF dialokasikan langsung bagi biaya operasional sekolah bebas SPP dan pembiayaan vokasi mustahik.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. BENTO ARSITEKTUR FILOSOFI NAMA & 3 PILAR PEMIKIRAN        */}
      {/* ============================================================ */}
      <div className="space-y-4">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-[11px] font-mono font-bold tracking-wider text-[#2454BE] uppercase block">
            GENETIKA &amp; KOMPAS MORAL GERAKAN
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Membedah Makna <span className="text-[#FF5500]">“Muda Progresif Bangsa”</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {/* Bento 1: MUDA */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between space-y-4 group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2454BE] flex items-center justify-center font-black font-mono text-lg group-hover:bg-[#2454BE] group-hover:text-white transition-colors">
                M
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#2454BE] uppercase">PILAR 01 // SPIRIT</span>
                <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
                  Muda (Keberanian &amp; Energi)
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bukan sebatas hitungan usia biologis, melainkan <strong>keberanian merombak kejumudan</strong>, daya tahan menghadapi kegagalan, serta kebaruan gagasan yang tidak terbelenggu pola pikir lama yang melanggengkan ketimpangan.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500 font-semibold">
              // Daya Tolak Terhadap Stagnasi
            </div>
          </div>

          {/* Bento 2: PROGRESIF */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-orange-400 transition-all flex flex-col justify-between space-y-4 group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF5500] flex items-center justify-center font-black font-mono text-lg group-hover:bg-[#FF5500] group-hover:text-white transition-colors">
                P
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#FF5500] uppercase">PILAR 02 // METODOLOGI</span>
                <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
                  Progresif (Kemajuan Terukur)
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Senantiasa bergerak maju secara sistematis dan berakar pada <strong>nalar kritis ilmiah</strong>. Setiap program diuji kelayakannya secara empiris, berorientasi hasil jangka panjang, dan bebas dari sekadar seremonial sesaat.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500 font-semibold">
              // Berpijak Riset Bukti Riil
            </div>
          </div>

          {/* Bento 3: BANGSA */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-between space-y-4 group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-black font-mono text-lg group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                B
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase">PILAR 03 // TUJUAN AKHIR</span>
                <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
                  Bangsa (Kedaulatan &amp; Empati)
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Muara dari seluruh ikhtiar intelektual dan aksi adalah <strong>terwujudnya kedaulatan martabat rakyat Indonesia</strong>. Memperjuangkan keadilan sosial bagi mereka yang paling rentan agar setara dalam memajukan peradaban bangsa.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500 font-semibold">
              // Kepedulian Akar Rumput
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. INTERACTIVE ROADMAP TIMELINE (Sejarah, Masa Kini & Depan) */}
      {/* ============================================================ */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-mono font-bold tracking-wider text-[#2454BE] uppercase block">
              PERJALANAN SEJARAH &amp; PETA JALAN
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
              Timeline Pergerakan Yayasan (2024–2030)
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-sm sm:text-right">
            Klik pada setiap fase tahun untuk meninjau dinamika sejarah, pencapaian kunci, serta foto dokumentasi.
          </p>
        </div>

        {/* Stepper Selector Bar Interaktif */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {TIMELINE_EVENTS.map((evt, idx) => {
            const isSelected = idx === activeTimelineIndex;
            return (
              <button
                key={evt.year}
                type="button"
                onClick={() => setActiveTimelineIndex(idx)}
                className={`p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#0A1838] text-white border-transparent shadow-lg scale-[1.02]"
                    : "bg-[#F8FAFC] text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono font-black text-sm sm:text-base ${
                      isSelected ? "text-amber-400" : "text-[#2454BE]"
                    }`}
                  >
                    {evt.year}
                  </span>
                  <span
                    className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      isSelected ? "bg-white/10 text-slate-200" : "bg-white border border-slate-200 text-slate-500"
                    }`}
                  >
                    Fase 0{idx + 1}
                  </span>
                </div>
                <span className="text-[11px] font-bold leading-tight line-clamp-1 mt-2">
                  {evt.phaseTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Timeline Showcase Stage with Smooth Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEvent.year}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28 }}
            className="p-5 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 space-y-6"
          >
            {/* Header Stage */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${activeEvent.theme.badgeBg}`}>
                    {activeEvent.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    Tahun {activeEvent.year}
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-extrabold text-slate-900 mt-1 leading-snug">
                  {activeEvent.headline}
                </h3>
              </div>

              {/* Prev / Next Quick Arrows */}
              <div className="flex items-center gap-1.5 self-end sm:self-auto shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setActiveTimelineIndex((prev) =>
                      prev > 0 ? prev - 1 : TIMELINE_EVENTS.length - 1
                    )
                  }
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 active:scale-95 transition-all shadow-sm"
                  aria-label="Fase Sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-mono text-xs font-bold text-slate-500 px-2">
                  0{activeTimelineIndex + 1} / 0{TIMELINE_EVENTS.length}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setActiveTimelineIndex((prev) =>
                      prev < TIMELINE_EVENTS.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 active:scale-95 transition-all shadow-sm"
                  aria-label="Fase Selanjutnya"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Grid 2 Kolom: Narasi & Milestone (Kiri) vs Foto Sejarah & Kutipan (Kanan) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Kolom Kiri: Cerita Detail & Highlight Kunci (7 Kolom) */}
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                  {activeEvent.story}
                </p>

                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                    CAPAIAN &amp; TONGGAK UTAMA (KEY MILESTONES):
                  </span>
                  <ul className="space-y-2 text-xs">
                    {activeEvent.highlights.map((hl, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/90 text-slate-800 leading-snug shadow-sm"
                      >
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: activeEvent.theme.accent }}
                        />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Kolom Kanan: Foto Dokumentasi & Kutipan (5 Kolom) */}
              <div className="lg:col-span-5 space-y-3">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 group">
                  <Image
                    src={`${basePath}${activeEvent.image}`}
                    alt={activeEvent.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-3 right-3 text-[11px] text-white font-medium truncate">
                    {activeEvent.imageAlt}
                  </div>
                </div>

                {/* Quote Box */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-1">
                  <Quote className="w-4 h-4 text-slate-400" />
                  <p className="text-xs font-bold text-slate-800 italic leading-snug">
                    {activeEvent.keyQuote}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ============================================================ */}
      {/* 4. STATEMENT DEWAN PEMBINA & INTEGRITAS TATA KELOLA           */}
      {/* ============================================================ */}
      <div className="bg-gradient-to-br from-[#081426] via-[#0F2342] to-[#0A1838] text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-1 max-w-xl">
            <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-widest block">
              // KONSISTENSI MORAL PENGURUS
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              Pernyataan Sikap &amp; Integritas Lembaga
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Yayasan ini didirikan bukan untuk mencari keuntungan materi, melainkan sebagai wadah pengabdian sosial murni. Kami berkomitmen menjaga kedaulatan sikap, keterbukaan laporan, dan pemanfaatan sumber daya hanya untuk kepentingan masyarakat.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0">
            <Link
              href="/tentang-kami/pengurus"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all inline-flex items-center gap-1.5"
            >
              <Users className="w-4 h-4 text-sky-400" />
              <span>Susunan Pengurus</span>
            </Link>
            <Link
              href="/tentang-kami/legalitas"
              className="px-4 py-2.5 rounded-xl bg-[#2454BE] hover:bg-blue-600 text-white text-xs font-bold shadow transition-all inline-flex items-center gap-1.5"
            >
              <FileCheck2 className="w-4 h-4 text-white" />
              <span>Dokumen Legalitas</span>
            </Link>
          </div>
        </div>

        {/* 4 Pillars of Institutional Trust */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono font-bold text-amber-400 block mb-1">01 / LEGALITAS RESMI</span>
            <div className="text-xs font-bold text-white">SK Kemenkumham Terdaftar</div>
            <p className="text-[11px] text-slate-300 mt-1 leading-snug">
              Nomor AHU-0031979.AH.01.04.Tahun 2025 dengan Akta Notaris No. 14.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono font-bold text-sky-400 block mb-1">02 / AKUNTANSI NIRLABA</span>
            <div className="text-xs font-bold text-white">Rekening Giro Lembaga</div>
            <p className="text-[11px] text-slate-300 mt-1 leading-snug">
              Pengelolaan dana transparan atas nama yayasan resmi, bebas rekening pribadi.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono font-bold text-emerald-400 block mb-1">03 / BEBAS BIAYA 100%</span>
            <div className="text-xs font-bold text-white">Siswa SPP Cuma-Cuma</div>
            <p className="text-[11px] text-slate-300 mt-1 leading-snug">
              Seluruh peserta didik paket kesetaraan dari keluarga pra-sejahtera dibebaskan biaya.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono font-bold text-orange-400 block mb-1">04 / KEMITRAAN FISKAL</span>
            <div className="text-xs font-bold text-white">Super Tax Deduction 200%</div>
            <p className="text-[11px] text-slate-300 mt-1 leading-snug">
              Mendukung fasilitas pengurang pajak korporasi sesuai ketentuan PP No. 45/2019.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
