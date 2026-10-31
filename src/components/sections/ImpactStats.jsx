'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, Download } from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export default function ImpactStats() {
  const { openPartner } = useModals();
  const [counts, setCounts] = useState({ youth: 0, projects: 0, cities: 0 });

  useEffect(() => {
    const duration = 1200;
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        youth: Math.floor(14200 * progress),
        projects: Math.floor(128 * progress),
        cities: Math.floor(34 * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({ youth: 14200, projects: 128, cities: 34 });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="dampak" className="py-24 sm:py-32 bg-brand-navy text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Label & Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-orange font-mono mb-3 block">
            Akuntabilitas Dampak // 04
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Bukan Sekadar Narasi, Diukur Lewat Kontribusi
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Setiap angka merepresentasikan kehidupan pemuda yang dibekali ruang belajar, komunitas yang terdampingi, dan inisiatif riil yang hidup berkelanjutan di lapangan.
          </p>
        </div>

        {/* 3 Massive Typography Numbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 pt-6 border-t border-white/10">
          
          <div className="flex flex-col">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none mb-4">
              {counts.youth.toLocaleString('id-ID')}<span className="text-brand-orange">+</span>
            </div>
            <h3 className="text-lg font-bold text-slate-100 tracking-tight mb-2">
              Pemuda Terbina & Terkoneksi
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Menyelesaikan rangkaian kurikulum karakter, pelatihan kepemimpinan diri, dan pembekalan vokasi di sekolah maupun gelanggang publik.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#3385FF] leading-none mb-4">
              {counts.projects}<span className="text-white">+</span>
            </div>
            <h3 className="text-lg font-bold text-slate-100 tracking-tight mb-2">
              Inisiatif Komunitas Mandiri
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Proyek sosial, sanggar belajar mandiri, dan unit usaha mikro yang diinisiasi langsung oleh para alumni kelas Penggerak Progresif.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-orange leading-none mb-4">
              {counts.cities}
            </div>
            <h3 className="text-lg font-bold text-slate-100 tracking-tight mb-2">
              Kota & Kabupaten Terjangkau
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Jaringan relawan dan alumni yang aktif terkoordinasi di wilayah Jabodetabek, Jawa Barat, hingga simpul gerakan pemuda di luar Jawa.
            </p>
          </div>

        </div>

        {/* Transparency & Footnote */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>DATA DIAUDIT BERKALA OLEH DEWAN PENGAWAS YAYASAN</span>
          </div>
          <button 
            onClick={openPartner}
            className="text-white hover:text-brand-orange transition-colors font-semibold inline-flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>MINTA SALINAN AUDIT DAMPAK 2025/2026</span>
          </button>
        </div>

      </div>
    </section>
  );
}
