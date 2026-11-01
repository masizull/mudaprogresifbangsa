'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { FOUNDATION_INFO } from '@/data/foundation-data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
      setScrolled(currentScroll > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-sky-400 via-royal-500 to-[#FF5500] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled 
          ? 'bg-[#F4F7FB]/95 backdrop-blur-md border-b border-slate-200 shadow-ambient' 
          : 'bg-[#F4F7FB] border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo & Identity */}
          <Link href="#hero" className="flex items-center gap-3.5 group focus:outline-none rounded-lg p-1">
            <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
              <img 
                src={`${process.env.NODE_ENV === 'production' ? '/mudaprogresifbangsa' : ''}/logo/LOGO MPB - WARNA.png`} 
                alt="Logo Muda Progresif Bangsa" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.nextElementSibling) {
                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                  }
                }}
              />
              <div className="hidden w-10 h-10 rounded-lg bg-[#0F2342] items-center justify-center text-white font-bold text-base tracking-tight shadow-sm">
                <span className="text-[#FF5500]">M</span>PB
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#081426] leading-none group-hover:text-royal-600 transition-colors duration-200">
                Muda Progresif Bangsa
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-500 mt-1 flex items-center gap-1">
                <span>Yayasan Resmi</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-emerald-700 font-mono text-[10px]">AHU-2025</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-semibold text-slate-700">
            <Link href="#tentang" className="hover:text-royal-600 transition-colors duration-200">Tentang</Link>
            <Link href="#visi-misi" className="hover:text-royal-600 transition-colors duration-200">Visi & Misi</Link>
            <Link href="#nilai-budaya" className="hover:text-royal-600 transition-colors duration-200">Prinsip & Nilai</Link>
            <Link href="#ekosistem-pilar" className="hover:text-royal-600 transition-colors duration-200">4 Pilar Program</Link>
            <Link href="#struktur-legalitas" className="hover:text-royal-600 transition-colors duration-200">Legalitas & Tim</Link>
            <Link href="#kemitraan" className="hover:text-royal-600 transition-colors duration-200">Kemitraan</Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link 
              href="#struktur-legalitas"
              className="text-xs font-bold text-slate-700 hover:text-royal-600 transition-colors duration-200 px-3 py-2 flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>SK Kemenkumham</span>
            </Link>
            <Link 
              href="#kemitraan"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white px-5 py-2.5 text-xs font-bold shadow-cta-orange transition-all duration-200 ease-in-out hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Ajukan Sinergi</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center">
            <button 
              type="button" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#081426] hover:bg-slate-200 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white px-5 pt-3 pb-6 space-y-3 shadow-lg">
            <Link href="#tentang" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#FF5500]">Tentang Yayasan</Link>
            <Link href="#visi-misi" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#FF5500]">Visi & Misi</Link>
            <Link href="#nilai-budaya" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#FF5500]">Prinsip Gerakan & Nilai Inti</Link>
            <Link href="#ekosistem-pilar" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#FF5500]">Ekosistem 4 Pilar</Link>
            <Link href="#struktur-legalitas" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#FF5500]">Legalitas & Pengurus</Link>
            <Link href="#kemitraan" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#FF5500]">Portal Kemitraan</Link>
            
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <Link 
                href="#kemitraan"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 text-sm font-bold bg-[#FF5500] text-white rounded-full shadow-cta-orange"
              >
                Ajukan Sinergi Kemitraan
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
