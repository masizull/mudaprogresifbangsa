'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, MapPin, Mail, Phone, ArrowUp, ArrowRight } from 'lucide-react';
import { FOUNDATION_INFO, PILLARS_DATA } from '@/data/foundation-data';

export default function Footer() {
  const basePath = process.env.NODE_ENV === 'production' ? '/mudaprogresifbangsa' : '';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#081426] text-slate-400 border-t border-white/10 pt-10 pb-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          
          {/* Col 1: Foundation Info (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center">
                <Image
                  src={`${basePath}/images/logo_mpb.png`}
                  alt="MPB Logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="text-base font-extrabold tracking-tight text-white">
                Muda Progresif Bangsa Foundation
              </span>
            </div>
            
            <p className="text-slate-300 text-xs leading-relaxed max-w-md">
              {FOUNDATION_INFO.legalName} adalah yayasan nirlaba independen yang mengkatalisasi pendidikan berkualitas, riset kebijakan berbasis bukti, dan aksi kemanusiaan berkelanjutan untuk memutus mata rantai kemiskinan.
            </p>

            <div className="p-3 rounded-lg bg-[#0F2342] border border-white/10 text-xs text-slate-300 space-y-1.5 max-w-md">
              <div className="flex items-start gap-2 text-[11px]">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{FOUNDATION_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 pt-1 border-t border-white/10 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span className="font-mono text-sky-300">
                  SK Kemenkumham: {FOUNDATION_INFO.legal.kemenkumhamSk}
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: 4 Pilar Program (3 cols) */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-white">
              Program Unggulan
            </h4>
            <ul className="space-y-1.5 text-xs">
              {PILLARS_DATA.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/program/${p.slug}`}
                    className="hover:text-amber-400 transition-colors flex items-center justify-between"
                  >
                    <span>{p.nameOnly}</span>
                    <span className="font-mono text-[10px] text-slate-500">0{p.number}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2 text-[11px]">
              <div className="font-mono text-slate-400">
                NPWP: {FOUNDATION_INFO.legal.npwp}
              </div>
            </div>
          </div>

          {/* Col 3: Navigasi (2 cols) */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-white">
              Tentang Kami
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><Link href="/tentang-kami/profil" className="hover:text-white transition-colors">Profil Lembaga</Link></li>
              <li><Link href="/tentang-kami/visi-misi" className="hover:text-white transition-colors">Visi, Misi & Nilai</Link></li>
              <li><Link href="/tentang-kami/legalitas" className="hover:text-white transition-colors">Legalitas Resmi</Link></li>
              <li><Link href="/tentang-kami/pengurus" className="hover:text-white transition-colors">Struktur Pengurus</Link></li>
              <li><Link href="/kolaborasi" className="hover:text-white transition-colors">Portal Sinergi</Link></li>
              <li><Link href="/admin" className="text-amber-400 hover:text-amber-300 transition-colors font-semibold">CMS Panel (Admin)</Link></li>
            </ul>
          </div>

          {/* Col 4: Kontak (2 cols) */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-white">
              Sekretariat
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href={`mailto:${FOUNDATION_INFO.email}`} className="hover:text-white transition-colors truncate">
                  {FOUNDATION_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="https://wa.me/6281288882025" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp Hotline
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>&copy; 2025–2026 {FOUNDATION_INFO.legalName}. Hak Cipta Dilindungi Undang-Undang.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
