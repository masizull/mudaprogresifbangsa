"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  Landmark,
  HeartHandshake,
  ArrowRight,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  FileCheck2,
  Clock,
  BadgePercent,
  CheckCircle2,
} from "lucide-react";

interface PartnerCategory {
  id: string;
  trackNum: string;
  name: string;
  tagline: string;
  highlightBadge: string;
  perks: string[];
  icon: React.ElementType;
  theme: {
    accent: string;
    stripe: string;
    iconBg: string;
    iconColor: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    hoverBorder: string;
    glowShadow: string;
  };
}

const PARTNER_CATEGORIES: PartnerCategory[] = [
  {
    id: "swasta-csr",
    trackNum: "TRACK 01 // KORPORASI",
    name: "Swasta & CSR",
    tagline: "ESG, Vokasi & Inkubasi UMKM",
    highlightBadge: "Super Tax Deduction 200%",
    perks: ["Co-Funding Kelas Vokasi Industri", "Laporan Standar GRI 413 & BAST"],
    icon: Building2,
    theme: {
      accent: "#F59E0B",
      stripe: "from-amber-400 via-amber-500 to-amber-600",
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
      iconColor: "text-white",
      badgeBg: "bg-amber-50/90",
      badgeText: "text-amber-800",
      badgeBorder: "border-amber-200",
      hoverBorder: "hover:border-amber-400/80",
      glowShadow: "hover:shadow-[0_20px_45px_-15px_rgba(245,158,11,0.22)]",
    },
  },
  {
    id: "kampus-akademia",
    trackNum: "TRACK 02 // AKADEMIA",
    name: "Kampus & Akademia",
    tagline: "MBKM, Riset & Pengabdian",
    highlightBadge: "Pemenuhan IKU 2 & IKU 7",
    perks: ["Magang Berdampak (Konversi 20 SKS)", "Joint Policy Brief & Jurnal Riset"],
    icon: GraduationCap,
    theme: {
      accent: "#2454BE",
      stripe: "from-blue-500 via-indigo-600 to-blue-700",
      iconBg: "bg-gradient-to-br from-[#2454BE] to-[#1D4ED8]",
      iconColor: "text-white",
      badgeBg: "bg-blue-50/90",
      badgeText: "text-[#2454BE]",
      badgeBorder: "border-blue-200",
      hoverBorder: "hover:border-blue-400/80",
      glowShadow: "hover:shadow-[0_20px_45px_-15px_rgba(36,84,190,0.22)]",
    },
  },
  {
    id: "pemerintah-dinas",
    trackNum: "TRACK 03 // PEMERINTAH",
    name: "Pemerintah & Dinas",
    tagline: "Swakelola Tipe III & Daerah",
    highlightBadge: "Penuntasan Anak Putus Sekolah",
    perks: ["Integrasi Dapodik Kemendikbud", "Penguatan Indeks Pembangunan (IPM)"],
    icon: Landmark,
    theme: {
      accent: "#0284C7",
      stripe: "from-sky-400 via-sky-500 to-cyan-600",
      iconBg: "bg-gradient-to-br from-sky-500 to-cyan-600",
      iconColor: "text-white",
      badgeBg: "bg-sky-50/90",
      badgeText: "text-sky-800",
      badgeBorder: "border-sky-200",
      hoverBorder: "hover:border-sky-400/80",
      glowShadow: "hover:shadow-[0_20px_45px_-15px_rgba(2,132,199,0.22)]",
    },
  },
  {
    id: "komunitas-filantropi",
    trackNum: "TRACK 04 // FILANTROPI",
    name: "Komunitas & ZISWAF",
    tagline: "Penyaluran & Aksi Sosial",
    highlightBadge: "ZISWAF 100% Bebas Biaya SPP",
    perks: ["Posko Layanan Kesehatan Keliling", "Respon Cepat Bencana < 24 Jam"],
    icon: HeartHandshake,
    theme: {
      accent: "#FF5500",
      stripe: "from-orange-500 via-[#FF5500] to-red-500",
      iconBg: "bg-gradient-to-br from-[#FF5500] to-[#E04B00]",
      iconColor: "text-white",
      badgeBg: "bg-orange-50/90",
      badgeText: "text-orange-800",
      badgeBorder: "border-orange-200",
      hoverBorder: "hover:border-orange-400/80",
      glowShadow: "hover:shadow-[0_20px_45px_-15px_rgba(255,85,0,0.22)]",
    },
  },
];

export default function CollaborationTeaser() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      id="portal-kerjasama"
      className="relative py-16 sm:py-20 bg-gradient-to-b from-[#F4F7FB] via-white to-[#F8FAFC] border-t border-slate-200/80 overflow-hidden select-none"
    >
      {/* Ambient background glows matching Hero & Culture sections */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Dot Mesh Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #081426 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-10">
        
        {/* ============================================================ */}
        {/* Clean, Elevated Editorial Heading                            */}
        {/* ============================================================ */}
        <div className="max-w-2xl mx-auto text-center space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-mono font-bold text-[#2454BE]">
            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
            <span>SINERGI &amp; INVESTASI SOSIAL</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Sinergi &amp;{" "}
            <span className="text-[#FF5500]">Kolaborasi Strategis</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Jembatan kemitraan formal terstruktur lintas sektor untuk melipatgandakan dampak nyata bagi generasi muda dan masyarakat Indonesia.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 4 Interactive Kinetic Cards (Trionn Bento Aesthetic)         */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PARTNER_CATEGORIES.map((item) => {
            const IconComponent = item.icon;
            const isHovered = hoveredCard === item.id;

            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{
                  y: -6,
                  scale: 1.015,
                  transition: { duration: 0.22, ease: "easeOut" },
                }}
                className="h-full"
              >
                <Link
                  href={`/kolaborasi?sektor=${item.id}`}
                  className={`group relative h-full bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-sm ${item.theme.hoverBorder} ${item.theme.glowShadow} transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer`}
                >
                  {/* Top Animated Identity Accent Stripe */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.theme.stripe} transition-transform duration-300 group-hover:scale-x-105`}
                  />

                  {/* Card Content Top */}
                  <div className="space-y-4">
                    {/* Header Row: Sector Icon + Monospace Tag */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-11 h-11 rounded-2xl ${item.theme.iconBg} ${item.theme.iconColor} shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-slate-400 tracking-wider">
                        {item.trackNum}
                      </span>
                    </div>

                    {/* Sector Title & Tagline */}
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#2454BE] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {item.tagline}
                      </p>
                    </div>

                    {/* Distinctive Value Highlight Pill */}
                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-[11px] font-mono font-bold ${item.theme.badgeBg} ${item.theme.badgeText} border ${item.theme.badgeBorder}`}
                    >
                      <Sparkles className="w-3 h-3 shrink-0" />
                      <span className="truncate">{item.highlightBadge}</span>
                    </div>

                    {/* Program Perks Micro-List */}
                    <ul className="space-y-1.5 pt-1 text-[11px] text-slate-600">
                      {item.perks.map((perk, i) => (
                        <li key={i} className="flex items-start gap-1.5 leading-snug">
                          <CheckCircle2
                            className="w-3.5 h-3.5 shrink-0 mt-0.5"
                            style={{ color: item.theme.accent }}
                          />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom CTA Link with Sliding Arrow */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#2454BE] group-hover:text-[#FF5500] transition-colors">
                    <span>Eksplorasi Skema</span>
                    <div className="w-6 h-6 rounded-full bg-slate-50 group-hover:bg-orange-50 flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* Trust Indicators Micro-Bar                                   */}
        {/* ============================================================ */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-slate-600">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 shadow-sm font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>SK Kemenkumham Resmi</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 shadow-sm font-medium">
            <BadgePercent className="w-3.5 h-3.5 text-amber-600" />
            <span>Insentif Fiskal s.d. 200%</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 shadow-sm font-medium">
            <FileCheck2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Audit BAST &amp; LPJ Transparan</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 shadow-sm font-medium">
            <Clock className="w-3.5 h-3.5 text-sky-600" />
            <span>SLA Respon 1x24 Jam</span>
          </span>
        </div>

        {/* ============================================================ */}
        {/* 2 Clean & Elevated Action Buttons                            */}
        {/* ============================================================ */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          <Link
            href="/kolaborasi"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#0F2342] via-[#0A1838] to-[#122A50] hover:from-[#1A3868] hover:to-[#0F2342] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-blue-950/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all border border-blue-400/20 group"
          >
            <span>Buka Portal Kolaborasi Lengkap</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="https://wa.me/6281389020269?text=Halo%20Tim%20Kemitraan%20Muda%20Progresif%20Bangsa%20Foundation%2C%20saya%20ingin%20berdiskusi%20mengenai%20peluang%20kerjasama."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-300/80 hover:border-slate-400 text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all group"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
            <span>Hubungi Tim Kemitraan (WhatsApp)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
