"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const basePath = process.env.NODE_ENV === "production" ? "/mudaprogresifbangsa" : "";

  // Check if current route is homepage
  const isHome = pathname === "/" || pathname === "";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Transparent when at top of page
  const isTransparent = !scrolled;
  // If on homepage and at top, use white text and white logo over the dark hero gradient
  const isDarkNav = isHome && isTransparent;

  return (
    <header className="sticky top-0 z-50 pt-3 sm:pt-4 px-4 sm:px-6 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto h-16 sm:h-20 px-4 sm:px-6 flex items-center justify-between gap-4 transition-all duration-300 ${
          isTransparent
            ? "bg-transparent border-transparent shadow-none"
            : "bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_12px_36px_rgba(8,20,38,0.12)] border border-slate-200/90"
        }`}
      >
        {/* Logo Horizontal Resmi - Tightly cropped & optically sized to be bold & readable */}
        <Link href="/" className="flex items-center shrink-0 py-1 group">
          <Image
            src={`${basePath}/images/${isDarkNav ? "logo_horizontal_mpb_white.png" : "logo_horizontal_mpb.png"}`}
            alt="Muda Progresif Bangsa Foundation"
            width={240}
            height={55}
            priority
            className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden lg:flex items-center gap-6 text-[13px] font-semibold h-full transition-colors duration-200 ${
            isDarkNav ? "text-white/90" : "text-slate-700"
          }`}
        >
          <Link
            href="/"
            className={`h-full flex items-center transition-colors ${
              isDarkNav
                ? isHome
                  ? "border-b-2 border-amber-400 text-white font-bold"
                  : "hover:text-white"
                : isHome
                ? "border-b-2 border-[#2454BE] text-[#2454BE] font-bold"
                : "hover:text-[#2454BE]"
            }`}
          >
            Beranda
          </Link>

          {/* Dropdown Tentang Kami */}
          <div className="relative group h-full flex items-center">
            <button
              type="button"
              className={`h-full flex items-center gap-1.5 transition-colors ${
                isDarkNav ? "hover:text-white" : "hover:text-[#2454BE]"
              }`}
            >
              <span>Tentang Kami</span>
              <span
                className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
                  isDarkNav ? "bg-white/15 text-white" : "bg-blue-50 text-[#2454BE]"
                }`}
              >
                <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
              </span>
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute top-[62px] left-0 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50">
              <Link href="/tentang-kami/profil" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 border-b border-slate-100 transition-colors">Muda Progresif Bangsa</Link>
              <Link href="/tentang-kami/visi-misi" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 border-b border-slate-100 transition-colors">Visi, Misi & Nilai</Link>
              <Link href="/tentang-kami/legalitas" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 border-b border-slate-100 transition-colors">Legalitas Resmi</Link>
              <Link href="/tentang-kami/pengurus" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 border-b border-slate-100 transition-colors">Dewan Pembina & Pengurus</Link>
              <Link href="/tentang-kami/sekretariat" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 transition-colors">Kantor Sekretariat</Link>
            </div>
          </div>

          {/* Dropdown Program */}
          <div className="relative group h-full flex items-center">
            <button
              type="button"
              className={`h-full flex items-center gap-1.5 transition-colors ${
                isDarkNav ? "hover:text-white" : "hover:text-[#2454BE]"
              }`}
            >
              <span>Program</span>
              <span
                className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
                  isDarkNav ? "bg-white/15 text-white" : "bg-blue-50 text-[#2454BE]"
                }`}
              >
                <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
              </span>
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute top-[62px] left-0 w-60 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50">
              <Link href="/program/akademi-progresif" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 border-b border-slate-100 font-semibold transition-colors">Akademi Progresif</Link>
              <Link href="/program/vokasi-progresif" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 border-b border-slate-100 font-semibold transition-colors">Vokasi Progresif</Link>
              <Link href="/program/progresif-care" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 border-b border-slate-100 font-semibold transition-colors">Progresif Care</Link>
              <Link href="/program/tanggap-progresif" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 font-semibold transition-colors">Tanggap Progresif</Link>
            </div>
          </div>

          {/* Dropdown Kolaborasi */}
          <div className="relative group h-full flex items-center">
            <button
              type="button"
              className={`h-full flex items-center gap-1.5 transition-colors ${
                isDarkNav ? "hover:text-white" : "hover:text-[#2454BE]"
              }`}
            >
              <span>Kolaborasi</span>
              <span
                className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
                  isDarkNav ? "bg-white/15 text-white" : "bg-blue-50 text-[#2454BE]"
                }`}
              >
                <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
              </span>
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute top-[62px] left-0 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50">
              <Link href="/kolaborasi?mitra=pemerintah" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 border-b border-slate-100 transition-colors">Pemerintah & Kementerian</Link>
              <Link href="/kolaborasi?mitra=kampus" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 border-b border-slate-100 transition-colors">Perguruan Tinggi & Riset</Link>
              <Link href="/kolaborasi?mitra=csr" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 border-b border-slate-100 transition-colors">Sektor Swasta & CSR</Link>
              <Link href="/kolaborasi?mitra=komunitas" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 transition-colors">Komunitas & Ormas</Link>
            </div>
          </div>

          <Link
            href="/insight"
            className={`h-full flex items-center transition-colors ${
              isDarkNav ? "hover:text-white" : "hover:text-[#2454BE]"
            }`}
          >
            Insight & Berita
          </Link>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/kolaborasi"
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-extrabold bg-[#2454BE] hover:bg-[#1D469E] text-white shadow-[0_0_15px_rgba(36,84,190,0.5)] hover:shadow-[0_0_24px_rgba(36,84,190,0.8)] border border-blue-400/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Bermitra
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isDarkNav ? "text-white hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"
            }`}
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="lg:hidden max-w-6xl mx-auto mt-2 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 space-y-3 text-xs">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block py-1.5 font-bold text-[#2454BE]">Beranda</Link>
          <div className="pt-2 border-t border-slate-100 space-y-1">
            <span className="font-bold text-[11px] text-slate-400 uppercase tracking-wider">Tentang Kami</span>
            <Link href="/tentang-kami/profil" onClick={() => setMobileOpen(false)} className="block py-1 pl-2 text-slate-700 hover:text-[#2454BE]">Muda Progresif Bangsa</Link>
            <Link href="/tentang-kami/visi-misi" onClick={() => setMobileOpen(false)} className="block py-1 pl-2 text-slate-700 hover:text-[#2454BE]">Visi, Misi & Nilai</Link>
            <Link href="/tentang-kami/legalitas" onClick={() => setMobileOpen(false)} className="block py-1 pl-2 text-slate-700 hover:text-[#2454BE]">Legalitas Resmi</Link>
            <Link href="/tentang-kami/pengurus" onClick={() => setMobileOpen(false)} className="block py-1 pl-2 text-slate-700 hover:text-[#2454BE]">Dewan Pembina & Pengurus</Link>
            <Link href="/tentang-kami/sekretariat" onClick={() => setMobileOpen(false)} className="block py-1 pl-2 text-slate-700 hover:text-[#2454BE]">Kantor Sekretariat</Link>
          </div>
          <div className="pt-2 border-t border-slate-100 space-y-1">
            <span className="font-bold text-[11px] text-slate-400 uppercase tracking-wider">Program</span>
            <Link href="/program/akademi-progresif" onClick={() => setMobileOpen(false)} className="block py-1 pl-2 font-semibold text-slate-700 hover:text-[#2454BE]">Akademi Progresif</Link>
            <Link href="/program/vokasi-progresif" onClick={() => setMobileOpen(false)} className="block py-1 pl-2 font-semibold text-slate-700 hover:text-[#2454BE]">Vokasi Progresif</Link>
            <Link href="/program/progresif-care" onClick={() => setMobileOpen(false)} className="block py-1 pl-2 font-semibold text-slate-700 hover:text-[#2454BE]">Progresif Care</Link>
            <Link href="/program/tanggap-progresif" onClick={() => setMobileOpen(false)} className="block py-1 pl-2 font-semibold text-slate-700 hover:text-[#2454BE]">Tanggap Progresif</Link>
          </div>
          <div className="pt-2 border-t border-slate-100 space-y-1">
            <span className="font-bold text-[11px] text-slate-400 uppercase tracking-wider">Kolaborasi</span>
            <Link href="/kolaborasi?mitra=pemerintah" onClick={() => setMobileOpen(false)} className="block py-1 pl-2 text-slate-700 hover:text-[#2454BE]">Pemerintah & Kementerian</Link>
            <Link href="/kolaborasi?mitra=kampus" onClick={() => setMobileOpen(false)} className="block py-1 pl-2 text-slate-700 hover:text-[#2454BE]">Perguruan Tinggi & Riset</Link>
            <Link href="/kolaborasi?mitra=csr" onClick={() => setMobileOpen(false)} className="block py-1 pl-2 text-slate-700 hover:text-[#2454BE]">Sektor Swasta & CSR</Link>
            <Link href="/kolaborasi?mitra=komunitas" onClick={() => setMobileOpen(false)} className="block py-1 pl-2 text-slate-700 hover:text-[#2454BE]">Komunitas & Ormas</Link>
          </div>
          <div className="pt-2 border-t border-slate-100">
            <Link href="/insight" onClick={() => setMobileOpen(false)} className="block py-1.5 font-bold text-slate-700 hover:text-[#2454BE]">Insight & Berita</Link>
          </div>
        </div>
      )}
    </header>
  );
}
