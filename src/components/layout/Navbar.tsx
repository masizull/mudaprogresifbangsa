"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const basePath = process.env.NODE_ENV === "production" ? "/mudaprogresifbangsa" : "";

  return (
    <header className="sticky top-0 z-40 pt-3 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-md border border-slate-200/80 px-4 sm:px-5 h-16 flex items-center justify-between gap-4">
        {/* Logo Horizontal Resmi */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={`${basePath}/images/logo_horizontal_mpb.png`}
            alt="Muda Progresif Bangsa Foundation"
            width={195}
            height={40}
            priority
            className="h-9 sm:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-semibold text-slate-700 h-full">
          <Link href="/" className="h-full flex items-center border-b-2 border-[#2454BE] text-[#2454BE]">
            Beranda
          </Link>

          {/* Dropdown Tentang Kami */}
          <div className="relative group h-full flex items-center">
            <button type="button" className="h-full flex items-center gap-1.5 hover:text-[#2454BE] transition-colors">
              <span>Tentang Kami</span>
              <span className="w-4 h-4 rounded-full bg-blue-50 text-[#2454BE] flex items-center justify-center">
                <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
              </span>
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute top-[58px] left-0 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50">
              <Link href="/tentang-kami/profil" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 border-b border-slate-100 transition-colors">Muda Progresif Bangsa</Link>
              <Link href="/tentang-kami/visi-misi" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 border-b border-slate-100 transition-colors">Visi, Misi & Nilai</Link>
              <Link href="/tentang-kami/legalitas" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 border-b border-slate-100 transition-colors">Legalitas Resmi</Link>
              <Link href="/tentang-kami/pengurus" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 border-b border-slate-100 transition-colors">Dewan Pembina & Pengurus</Link>
              <Link href="/tentang-kami/sekretariat" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 transition-colors">Kantor Sekretariat</Link>
            </div>
          </div>

          {/* Dropdown Program (Satu per Satu) */}
          <div className="relative group h-full flex items-center">
            <button type="button" className="h-full flex items-center gap-1.5 hover:text-[#2454BE] transition-colors">
              <span>Program</span>
              <span className="w-4 h-4 rounded-full bg-blue-50 text-[#2454BE] flex items-center justify-center">
                <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
              </span>
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute top-[58px] left-0 w-60 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50">
              <Link href="/program/akademi-progresif" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 border-b border-slate-100 font-semibold transition-colors">Akademi Progresif</Link>
              <Link href="/program/vokasi-progresif" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 border-b border-slate-100 font-semibold transition-colors">Vokasi Progresif</Link>
              <Link href="/program/progresif-care" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 border-b border-slate-100 font-semibold transition-colors">Progresif Care</Link>
              <Link href="/program/tanggap-progresif" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 font-semibold transition-colors">Tanggap Progresif</Link>
            </div>
          </div>

          {/* Dropdown Kolaborasi */}
          <div className="relative group h-full flex items-center">
            <button type="button" className="h-full flex items-center gap-1.5 hover:text-[#2454BE] transition-colors">
              <span>Kolaborasi</span>
              <span className="w-4 h-4 rounded-full bg-blue-50 text-[#2454BE] flex items-center justify-center">
                <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
              </span>
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute top-[58px] left-0 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50">
              <Link href="/kolaborasi?mitra=pemerintah" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 border-b border-slate-100 transition-colors">Pemerintah & Kementerian</Link>
              <Link href="/kolaborasi?mitra=kampus" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 border-b border-slate-100 transition-colors">Perguruan Tinggi & Riset</Link>
              <Link href="/kolaborasi?mitra=csr" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 border-b border-slate-100 transition-colors">Sektor Swasta & CSR</Link>
              <Link href="/kolaborasi?mitra=komunitas" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#2454BE] hover:bg-slate-50 transition-colors">Komunitas & Ormas</Link>
            </div>
          </div>

          <Link href="/insight" className="h-full flex items-center hover:text-[#2454BE] transition-colors">
            Insight & Berita
          </Link>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <Link
            href="/kolaborasi"
            className="px-4 py-2 rounded-xl text-xs font-extrabold bg-[#2454BE] hover:bg-[#1D469E] text-white shadow-[0_0_15px_rgba(36,84,190,0.5)] hover:shadow-[0_0_24px_rgba(36,84,190,0.8)] border border-blue-400/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Bermitra
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
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
