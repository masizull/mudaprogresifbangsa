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
  CheckCircle2
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
    icon: GraduationCap
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
    icon: BarChart3
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
    icon: Users
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
    icon: HeartHandshake
  }
];

export default function InteractiveVisionMission() {
  return (
    <section id="visi-misi" className="py-12 sm:py-16 bg-[#081426] text-white relative overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* 1. Header Section Rata Tengah (Bersih & Mudah Dibaca) */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
            VISI & MISI YAYASAN
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mt-2 tracking-tight leading-snug">
            Komitmen & Arah Pergerakan
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
            Menghubungkan gagasan nalar kritis generasi muda menjadi aksi sosial nyata
            melalui empat pilar misi terintegrasi.
          </p>
        </div>

        {/* 2. Panggung Visi Utama (Sederhana, Megah & Tanpa Shape Kapsul) */}
        <div className="mb-10 rounded-3xl bg-gradient-to-br from-[#0F2342] via-[#132D59] to-[#0A1B36] p-6 sm:p-8 lg:p-10 border border-blue-400/20 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-300 block mb-3">
            Visi Utama Gerakan
          </span>
          <blockquote className="text-base sm:text-lg lg:text-xl font-bold text-white leading-relaxed max-w-3xl mx-auto">
            “Membangun ekosistem intelektual, pendidikan berkualitas, dan
            kepemimpinan yang mendorong generasi muda memahami persoalan bangsa,
            menghasilkan pengetahuan, merumuskan solusi, dan menggerakkan perubahan
            sosial yang berkelanjutan.”
          </blockquote>
        </div>

        {/* 3. Grid 4 Kartu Misi (User Friendly, Langsung Terbaca, Bebas Mode Membingungkan) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {MISSIONS.map((m) => {
            const Icon = m.icon;

            return (
              <motion.div
                key={m.number}
                whileHover={{ y: -4 }}
                className="bg-white/5 hover:bg-white/10 rounded-2xl p-5 border border-white/10 hover:border-sky-400/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Top Bar: Icon & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-sky-300 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      Misi {m.number}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-white leading-snug">
                    {m.title}
                  </h3>
                  <p className="text-xs font-semibold text-sky-300 mt-1">
                    {m.subtitle}
                  </p>

                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    {m.description}
                  </p>

                  {/* Focus Points List */}
                  <div className="pt-3 mt-3 border-t border-white/10 space-y-1.5">
                    {m.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-4 mt-4 border-t border-white/10">
                  <Link
                    href={m.linkHref}
                    className="text-xs font-bold text-sky-300 hover:text-white flex items-center justify-between group transition-colors"
                  >
                    <span>{m.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
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
