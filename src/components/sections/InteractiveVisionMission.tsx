"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BarChart3,
  Users,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Quote
} from "lucide-react";

interface MissionCardData {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  linkText: string;
  linkHref: string;
  icon: React.ElementType;
  topBarColor: string;
  iconBg: string;
  accentColor: string;
  checkColor: string;
  hoverBorder: string;
}

const MISSIONS: MissionCardData[] = [
  {
    number: "01",
    title: "Pendidikan & Kesetaraan",
    subtitle: "Akses PKBM & Nalar Kritis",
    description:
      "Menyelenggarakan ekosistem pendidikan nonformal (PKBM) berijazah resmi negara, kelas pemikiran kebangsaan, serta kurikulum logika dan kecakapan digital masa depan.",
    points: [
      "Ijazah resmi PKBM Paket A, B, & C",
      "Sekolah Pemikiran & Logika Kritis",
      "Beasiswa pendidikan keluarga rentan"
    ],
    linkText: "Buka Akademi Progresif",
    linkHref: "/program/akademi-progresif",
    icon: GraduationCap,
    topBarColor: "bg-[#2454BE]",
    iconBg: "bg-gradient-to-br from-[#2454BE] to-[#1D4ED8] shadow-blue-500/30",
    accentColor: "text-[#2454BE]",
    checkColor: "text-[#2454BE]",
    hoverBorder: "hover:border-[#2454BE]/60"
  },
  {
    number: "02",
    title: "Riset Kebijakan Publik",
    subtitle: "Advokasi Berbasis Bukti",
    description:
      "Memproduksi riset terapan kuartalan dan policy brief berbasis data presisi untuk mengadvokasi pembuat kebijakan nasional dalam menyelesaikan persoalan riil masyarakat.",
    points: [
      "Penerbitan Policy Brief kuartalan",
      "Kajian strategis isu kepemudaan",
      "Action lab pemecahan masalah sosial"
    ],
    linkText: "Buka Progresif Research",
    linkHref: "/program/progresif-care",
    icon: BarChart3,
    topBarColor: "bg-[#0B72E7]",
    iconBg: "bg-gradient-to-br from-[#0B72E7] to-[#0284C7] shadow-sky-500/30",
    accentColor: "text-[#0B72E7]",
    checkColor: "text-[#0B72E7]",
    hoverBorder: "hover:border-[#0B72E7]/60"
  },
  {
    number: "03",
    title: "Kaderisasi Kepemimpinan",
    subtitle: "Etika & Integritas Publik",
    description:
      "Menempa kader pemuda berintegritas tinggi dengan wawasan kenegaraan kokoh, etika kepemimpinan publik, dan jejaring penggerak di seluruh Indonesia.",
    points: [
      "Leadership fellowship berkala",
      "Forum dialektika publik bulanan",
      "Pendampingan pemimpin komunitas"
    ],
    linkText: "Buka Progresif Forum",
    linkHref: "/program/akademi-progresif",
    icon: Users,
    topBarColor: "bg-[#FF5500]",
    iconBg: "bg-gradient-to-br from-[#FF5500] to-[#E04B00] shadow-orange-500/30",
    accentColor: "text-[#FF5500]",
    checkColor: "text-[#FF5500]",
    hoverBorder: "hover:border-[#FF5500]/60"
  },
  {
    number: "04",
    title: "Vokasi & Kemanusiaan",
    subtitle: "Kemandirian & Tanggap Bencana",
    description:
      "Mendorong kemandirian ekonomi keluarga melalui pelatihan vokasi industri, inkubasi UMKM, layanan pos kesehatan preventif, dan relawan tanggap darurat bencana.",
    points: [
      "Pelatihan kerja & sertifikasi profesi",
      "Inkubasi usaha mikro & modal terarah",
      "Pos kesehatan & relawan siaga bencana"
    ],
    linkText: "Buka Vokasi & Care",
    linkHref: "/program/vokasi-progresif",
    icon: HeartHandshake,
    topBarColor: "bg-gradient-to-r from-[#2454BE] via-purple-600 to-[#FF5500]",
    iconBg: "bg-gradient-to-br from-[#2454BE] to-[#FF5500] shadow-orange-500/30",
    accentColor: "text-[#FF5500]",
    checkColor: "text-[#FF5500]",
    hoverBorder: "hover:border-[#FF5500]/60"
  }
];

export default function InteractiveVisionMission() {
  return (
    <section id="visi-misi" className="py-12 sm:py-16 bg-[#081426] text-white relative overflow-hidden">
      {/* Ambient Radial Lights (Biru & Oren) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* 1. Header Section Rata Tengah dengan Sentuhan Biru & Oren */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
            VISI &amp; MISI STRATEGIS
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mt-2 tracking-tight leading-snug">
            Komitmen &amp; Arah <span className="text-[#FF5500]">Pergerakan Bangsa</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
            Menghubungkan gagasan nalar kritis generasi muda menjadi aksi sosial nyata
            melalui empat pilar misi terintegrasi.
          </p>
        </div>

        {/* 2. Panggung Visi Utama (Centerpiece Megah dengan Shapes & Aksen Warna Identitas) */}
        <div className="mb-10 rounded-3xl bg-gradient-to-br from-[#0F2342] via-[#132D59] to-[#0A1B36] p-6 sm:p-8 lg:p-10 border border-blue-400/25 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto">
          {/* Top Geometric Stripe 3 Warna: Biru, Putih & Oren */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2454BE] via-white to-[#FF5500]" />

          {/* Geometric Watermark Accent in Background */}
          <div className="absolute -top-8 -right-8 w-36 h-36 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-orange-500/10 rounded-full blur-xl pointer-events-none" />

          {/* Quote Icon Badge with Dual Gradient */}
          <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#2454BE] via-blue-500 to-[#FF5500] text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Quote className="w-6 h-6" />
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-sky-300 block mb-3">
            Visi Utama Gerakan
          </span>
          <blockquote className="text-base sm:text-lg lg:text-xl font-bold text-white leading-relaxed max-w-3xl mx-auto">
            “Membangun ekosistem intelektual, pendidikan berkualitas, dan
            kepemimpinan yang mendorong generasi muda memahami persoalan bangsa,
            menghasilkan pengetahuan, merumuskan solusi, dan menggerakkan perubahan
            sosial yang berkelanjutan.”
          </blockquote>

          {/* 3 Indikator Visi dengan Geometri Shapes Berwarna */}
          <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#2454BE] shadow-sm shadow-blue-400/50" />
              <span className="font-semibold">Intelektualitas Kritis</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-white shadow-sm shadow-white/50" />
              <span className="font-semibold">Kemandirian Berdaya</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#FF5500] shadow-sm shadow-orange-400/50" />
              <span className="font-semibold">Dampak Sosial Nyata</span>
            </div>
          </div>
        </div>

        {/* 3. Grid 4 Kartu Misi: Kartu Putih Bersih dengan Shapes Berwarna (Biru, Oren, Putih) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {MISSIONS.map((m) => {
            const Icon = m.icon;

            return (
              <motion.div
                key={m.number}
                whileHover={{ y: -6 }}
                className={`bg-white text-slate-900 rounded-2xl p-6 border-2 border-transparent ${m.hoverBorder} transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden`}
              >
                {/* Geometric Top Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${m.topBarColor}`} />

                <div>
                  {/* Top Bar: Geometric Icon Shape & Number */}
                  <div className="flex items-center justify-between mb-4 mt-1">
                    <div className={`w-12 h-12 rounded-2xl ${m.iconBg} text-white flex items-center justify-center font-bold shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-extrabold text-slate-400">
                      Misi {m.number}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                    {m.title}
                  </h3>
                  <p className={`text-xs font-bold mt-1 ${m.accentColor}`}>
                    {m.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {m.description}
                  </p>

                  {/* Focus Points List with Colored Checkmarks */}
                  <div className="pt-3 mt-3 border-t border-slate-100 space-y-2">
                    {m.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${m.checkColor}`} />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link with Color Accent */}
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    href={m.linkHref}
                    className={`text-xs font-bold flex items-center justify-between group transition-colors ${m.accentColor}`}
                  >
                    <span>{m.linkText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
