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
  Quote
} from "lucide-react";

interface MissionItem {
  number: string;
  title: string;
  desc: string;
  href: string;
  icon: React.ElementType;
  accent: string;
  borderHover: string;
  glowHover: string;
  iconBg: string;
}

const MISSIONS: MissionItem[] = [
  {
    number: "01",
    title: "Pendidikan & PKBM",
    desc: "Sekolah kesetaraan ijazah resmi negara (Paket A, B, & C) dan kelas nalar kritis.",
    href: "/program/akademi-progresif",
    icon: GraduationCap,
    accent: "#38BDF8",
    borderHover: "hover:border-sky-400/50",
    glowHover: "hover:shadow-[0_0_24px_rgba(56,189,248,0.2)]",
    iconBg: "bg-sky-500/15 text-sky-400"
  },
  {
    number: "02",
    title: "Riset Kebijakan",
    desc: "Kajian empiris & policy brief kuartalan untuk advokasi solusi sosial berbasis data.",
    href: "/program/akademi-progresif",
    icon: BarChart3,
    accent: "#60A5FA",
    borderHover: "hover:border-blue-400/50",
    glowHover: "hover:shadow-[0_0_24px_rgba(96,165,250,0.2)]",
    iconBg: "bg-blue-500/15 text-blue-400"
  },
  {
    number: "03",
    title: "Kaderisasi Pemuda",
    desc: "Menempa kepemimpinan berintegritas, etika publik, dan jejaring penggerak bangsa.",
    href: "/program/akademi-progresif",
    icon: Users,
    accent: "#FF5500",
    borderHover: "hover:border-orange-500/50",
    glowHover: "hover:shadow-[0_0_24px_rgba(255,85,0,0.2)]",
    iconBg: "bg-orange-500/15 text-[#FF5500]"
  },
  {
    number: "04",
    title: "Vokasi & Kemanusiaan",
    desc: "Pelatihan kerja industri, inkubasi wirausaha mandiri, dan relawan siaga bencana.",
    href: "/program/vokasi-progresif",
    icon: HeartHandshake,
    accent: "#34D399",
    borderHover: "hover:border-emerald-400/50",
    glowHover: "hover:shadow-[0_0_24px_rgba(52,211,153,0.2)]",
    iconBg: "bg-emerald-500/15 text-emerald-400"
  }
];

export default function InteractiveVisionMission() {
  return (
    <section id="visi-misi" className="py-10 sm:py-14 bg-[#081426] text-white relative overflow-hidden">
      {/* Ambient Radial Lights */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
        
        {/* Section Header Ringkas */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 border-b border-white/10">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-sky-400 block mb-1">
              VISI &amp; MISI STRATEGIS
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Komitmen &amp; Arah <span className="text-[#FF5500]">Pergerakan Bangsa</span>
            </h2>
          </div>
          <p className="text-xs text-slate-300 max-w-md leading-relaxed sm:text-right">
            Menghubungkan nalar kritis generasi muda menjadi aksi sosial nyata yang terukur.
          </p>
        </div>

        {/* 2-Column Balanced Bento: Visi Utama (Kiri) + 4 Misi (Kanan 2x2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          {/* KOLOM KIRI: Visi Utama (lg:col-span-5) */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#0F2342] via-[#122A50] to-[#0A1830] p-6 border border-blue-400/20 shadow-lg flex flex-col justify-between relative overflow-hidden">
            {/* Top Identity Stripe: Biru, Putih & Oren */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2454BE] via-white to-[#FF5500]" />

            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#2454BE] to-[#FF5500] text-white flex items-center justify-center shadow-sm">
                  <Quote className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-mono font-bold tracking-wider text-sky-300 uppercase">
                  Visi Utama
                </span>
              </div>

              <blockquote className="text-sm sm:text-[15px] font-bold text-white leading-relaxed">
                “Membangun ekosistem intelektual, pendidikan berkualitas, dan kepemimpinan pemuda untuk memahami persoalan bangsa, merumuskan solusi berbasis data, dan menggerakkan transformasi sosial berkelanjutan.”
              </blockquote>
            </div>

            {/* 3 Indikator Nilai */}
            <div className="pt-4 mt-4 border-t border-white/10 flex flex-wrap gap-1.5 text-[11px]">
              <span className="px-2.5 py-1 rounded-md bg-[#2454BE]/20 text-sky-300 font-semibold border border-sky-400/20">
                Intelektual
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/10 text-slate-200 font-semibold border border-white/15">
                Kemandirian
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#FF5500]/20 text-orange-300 font-semibold border border-orange-400/20">
                Dampak Nyata
              </span>
            </div>
          </div>

          {/* KOLOM KANAN: 4 Misi Strategis Langsung Terbaca 2x2 (lg:col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {MISSIONS.map((m) => {
              const Icon = m.icon;
              return (
                <Link
                  key={m.number}
                  href={m.href}
                  className={`group rounded-2xl bg-[#0D1C36] p-4 border border-white/10 ${m.borderHover} ${m.glowHover} transition-all duration-200 flex flex-col justify-between relative overflow-hidden`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className={`w-8 h-8 rounded-lg ${m.iconBg} flex items-center justify-center transition-transform group-hover:scale-110`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs font-extrabold text-slate-500 group-hover:text-white transition-colors">
                        Misi {m.number}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                      {m.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-white transition-colors">
                    <span>Lihat Program</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" style={{ color: m.accent }} />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
