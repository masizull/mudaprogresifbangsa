'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

export default function ImpactStats() {
  const [counts, setCounts] = useState({ youth: 0, projects: 0, cities: 0 });

  useEffect(() => {
    const duration = 1000;
    const steps = 25;
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
    <section id="dampak" className="py-10 sm:py-12 bg-[#081426] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Title without pill badge */}
        <div>
          <div className="text-[11px] font-mono font-bold tracking-widest text-amber-400 uppercase mb-1">
            Akuntabilitas Dampak
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
            Bukan Sekadar Narasi, Diukur Lewat Kontribusi
          </h2>
          <p className="mt-1 text-slate-300 text-xs sm:text-sm max-w-2xl">
            Setiap angka merepresentasikan kehidupan pemuda yang dibekali ruang belajar, pendampingan komunitas, dan inisiatif riil yang hidup berkelanjutan di lapangan.
          </p>
        </div>

        {/* 3 Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          
          <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-none mb-2 font-mono">
              {counts.youth.toLocaleString('id-ID')}<span className="text-amber-400">+</span>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-200 mb-1">
              Pemuda Terbina & Terkoneksi
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Menyelesaikan rangkaian pelatihan karakter, kepemimpinan diri, dan pembekalan vokasi.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-sky-400 leading-none mb-2 font-mono">
              {counts.projects}<span className="text-white">+</span>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-200 mb-1">
              Inisiatif Komunitas Mandiri
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Proyek sosial, sanggar belajar mandiri, dan unit usaha mikro oleh para alumni binaan.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-amber-400 leading-none mb-2 font-mono">
              {counts.cities}
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-200 mb-1">
              Kota & Kabupaten Terjangkau
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Jejaring relawan dan alumni terkoordinasi di wilayah Jabodetabek, Jawa Barat, hingga luar Jawa.
            </p>
          </div>

        </div>

        {/* Footnote */}
        <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>DATA DIAUDIT BERKALA OLEH DEWAN PENGAWAS YAYASAN</span>
        </div>

      </div>
    </section>
  );
}
