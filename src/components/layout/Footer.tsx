'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, MapPin, Mail, Phone, ArrowUp, ArrowRight } from 'lucide-react';
import { FOUNDATION_INFO, PILLARS_DATA } from '@/data/foundation-data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#081426] text-slate-400 border-t border-white/10 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Col 1: Foundation Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={`${process.env.NODE_ENV === 'production' ? '/mudaprogresifbangsa' : ''}/logo/LOGO MPB - PUTIH.png`} 
                alt="Logo MPB Putih" 
                className="h-9 w-auto object-contain"
                onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
              />
              <span className="text-xl font-extrabold tracking-tight text-white">
                Muda Progresif Bangsa
              </span>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              {FOUNDATION_INFO.legalName} adalah yayasan nirlaba independen yang mengkatalisasi pendidikan berkualitas, riset kebijakan berbasis bukti, dan aksi kemanusiaan berkelanjutan untuk memutus mata rantai kemiskinan.
            </p>

            <div className="p-3.5 rounded-xl bg-[#0F2342] border border-white/10 text-xs text-slate-300 space-y-2 max-w-md">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{FOUNDATION_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 pt-1 border-t border-white/10">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-mono text-[11px] text-sky-300">
                  SK Kemenkumham RI: {FOUNDATION_INFO.legal.kemenkumhamSk}
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: 4 Pilar Program (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Ekosistem 4 Pilar
            </h4>
            <ul className="space-y-2 text-sm">
              {PILLARS_DATA.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`#pilar-${p.id}`}
                    className="hover:text-amber-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{p.title}</span>
                    <span className="font-mono text-[11px] text-slate-500 group-hover:text-amber-300">0{p.number}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <h5 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                Legalitas & Pajak
              </h5>
              <div className="font-mono text-xs text-slate-300">
                NPWP: {FOUNDATION_INFO.legal.npwp}
              </div>
            </div>
          </div>

          {/* Col 3: Navigasi & Tata Kelola (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#tentang" className="hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link href="#visi-misi" className="hover:text-white transition-colors">Visi & Misi</Link></li>
              <li><Link href="#nilai-budaya" className="hover:text-white transition-colors">Nilai & Etika</Link></li>
              <li><Link href="#struktur-legalitas" className="hover:text-white transition-colors">Struktur Pengurus</Link></li>
              <li><Link href="#kemitraan" className="hover:text-white transition-colors">Sinergi Kemitraan</Link></li>
            </ul>
          </div>

          {/* Col 4: Kontak & Komunikasi (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Sekretariat
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${FOUNDATION_INFO.email}`} className="hover:text-white transition-colors text-xs truncate">
                  {FOUNDATION_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/6281288882025" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-xs">
                  WhatsApp Hotline
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="#kemitraan"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Formulir Kerjasama</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2025–2026 {FOUNDATION_INFO.legalName}. Hak Cipta Dilindungi Undang-Undang Republik Indonesia.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors font-semibold"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
