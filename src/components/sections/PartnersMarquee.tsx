"use client";

import React from "react";
import Image from "next/image";

interface PartnerItem {
  id: string;
  name: string;
  tagline: string;
  logo: string;
  alt: string;
  // Specific optical sizing adjustment so perceived visual weight is perfectly balanced
  imgClass: string;
}

const basePath = process.env.NODE_ENV === "production" ? "/mudaprogresifbangsa" : "";

const PARTNERS: PartnerItem[] = [
  {
    id: "unj",
    name: "Universitas Negeri Jakarta",
    tagline: "Perguruan Tinggi Negeri",
    logo: `${basePath}/images/partners/unj.png`,
    alt: "Logo Universitas Negeri Jakarta (UNJ)",
    imgClass: "max-h-12 max-w-[46px] w-auto h-auto object-contain"
  },
  {
    id: "wgp",
    name: "World Gate Project",
    tagline: "Mitra Kreatif & Media",
    logo: `${basePath}/images/partners/world-gate-project.png`,
    alt: "Logo World Gate Project (WGP)",
    imgClass: "max-h-11 max-w-[44px] w-auto h-auto object-contain"
  },
  {
    id: "lazismu",
    name: "LAZISMU",
    tagline: "Lembaga Amil Zakat Nasional",
    logo: `${basePath}/images/partners/lazismu.png`,
    alt: "Logo LAZISMU",
    imgClass: "max-h-9 max-w-[110px] w-auto h-auto object-contain"
  },
  {
    id: "laz-mrbj",
    name: "LAZ-MRBJ",
    tagline: "Zakat Peduli Umat",
    logo: `${basePath}/images/partners/laz-mrbj.png`,
    alt: "Logo LAZ-MRBJ Zakat Peduli Umat",
    imgClass: "max-h-10 max-w-[110px] w-auto h-auto object-contain"
  },
  {
    id: "mui",
    name: "Majelis Ulama Indonesia",
    tagline: "Lembaga Keagamaan Nasional",
    logo: `${basePath}/images/partners/mui.png`,
    alt: "Logo Majelis Ulama Indonesia (MUI)",
    imgClass: "max-h-12 max-w-[46px] w-auto h-auto object-contain"
  }
];

export default function PartnersMarquee() {
  // Repeat 4x for a rich continuous looping track
  const marqueeItems = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section id="mitra" className="py-10 sm:py-14 bg-[#F8FAFC] border-y border-slate-200/80 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#2454BE] block mb-1">
          MITRA KERJASAMA &amp; KOLABORASI STRATEGIS
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#081426] tracking-tight">
          Bersinergi Bersama Ekosistem Lembaga Terpercaya
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl mx-auto">
          Membangun kolaborasi berdampak dengan perguruan tinggi, lembaga filantropi, ormas, dan platform sosial.
        </p>
      </div>

      {/* Infinite Looping Logo Track */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Edge Gradients for Smooth In/Out Fading */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-20 sm:w-32 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-20 sm:w-32 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10" />

        <div className="marquee-track flex items-center gap-4 sm:gap-6 w-max animate-marquee py-2 px-4">
          {marqueeItems.map((p, idx) => (
            <div
              key={`${p.id}-${idx}`}
              className="h-20 sm:h-22 w-56 sm:w-64 px-4 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#2454BE]/40 flex items-center gap-3.5 transition-all duration-200 shrink-0 group cursor-default"
            >
              {/* Dedicated Logo Container with Equalized Optical Size */}
              <div className="w-14 sm:w-16 h-12 flex items-center justify-center shrink-0">
                <img
                  src={p.logo}
                  alt={p.alt}
                  className={`${p.imgClass} transition-transform duration-200 group-hover:scale-105`}
                  loading="lazy"
                />
              </div>

              {/* Text Info */}
              <div className="min-w-0 flex-1 text-left">
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 truncate leading-snug group-hover:text-[#2454BE] transition-colors">
                  {p.name}
                </h4>
                <p className="text-[10px] font-mono text-slate-400 truncate mt-0.5">
                  {p.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
