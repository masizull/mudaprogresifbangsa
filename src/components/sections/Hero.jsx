'use client';

import React from 'react';
import { ArrowRight, BookOpen, Compass, Users, Sparkles } from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export default function Hero() {
  const { openRegister, openCurriculum } = useModals();

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-brand-slate-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-[#0055D4] text-xs sm:text-sm font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
            <span>Inisiatif Pembinaan Pemuda Berkelanjutan</span>
            <span className="text-blue-300">|</span>
            <span className="text-slate-500 font-medium hidden sm:inline">Basis Bekasi Menuju Nasional</span>
          </div>
        </div>

        {/* Massive Editorial Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-[-0.035em] text-brand-navy leading-[1.12]">
            Muda Bergerak,<br />
            <span className="text-brand-orange">Bangsa Serentak.</span>
          </h1>
          
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-[1.6] max-w-2xl mx-auto font-normal">
            Mengkatalisasi daya kepemimpinan, kapabilitas sosio-ekonomi, dan aksi ekologis generasi muda. Kami membangun ruang tempa nyata agar pemuda beralih dari pengamat menjadi penentu kemajuan Indonesia.
          </p>
        </div>

        {/* 2 Clean CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button 
            onClick={openRegister}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 text-base font-semibold shadow-cta-orange transition-all duration-200 ease-in-out hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Ambil Peran Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button 
            onClick={openCurriculum}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-slate-50 text-brand-navy border border-slate-300 px-7 py-4 text-base font-semibold shadow-ambient transition-all duration-200 ease-in-out hover:-translate-y-0.5 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-slate-400" />
            <span>Pelajari Cetak Biru Kurikulum</span>
          </button>
        </div>

        {/* Structural Hero Showcase Frame */}
        <div className="relative max-w-5xl mx-auto rounded-card bg-white border border-slate-200/90 shadow-ambient overflow-hidden">
          <div className="px-5 py-3.5 bg-slate-50/90 border-b border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="ml-2 font-mono text-[11px] text-slate-400 tracking-wider">MPB-FRAMEWORK // VERIFIED V.2.6</span>
            </div>
            <div className="flex items-center gap-2 text-brand-blue font-semibold">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
              Kohort Aktif 2026: Tunas & Penggerak Progresif
            </div>
          </div>

          <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col p-5 rounded-lg bg-slate-50/70 border border-slate-200/60 transition-all duration-200 hover:border-brand-orange hover:bg-white group cursor-pointer" onClick={openCurriculum}>
              <div className="w-8 h-8 rounded-lg bg-orange-100 text-brand-orange flex items-center justify-center font-bold text-sm mb-4 group-hover:scale-105 transition-transform">
                01
              </div>
              <h4 className="font-bold text-brand-navy text-base tracking-tight mb-2 flex items-center justify-between">
                <span>Refleksi & Karakter</span>
                <Sparkles className="w-4 h-4 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Mengenali kekuatan diri, membedah potensi kepemimpinan, dan menyusun peta jalan pendidikan yang presisi sejak bangku sekolah.
              </p>
            </div>

            <div className="flex flex-col p-5 rounded-lg bg-slate-50/70 border border-slate-200/60 transition-all duration-200 hover:border-brand-blue hover:bg-white group cursor-pointer" onClick={openCurriculum}>
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center font-bold text-sm mb-4 group-hover:scale-105 transition-transform">
                02
              </div>
              <h4 className="font-bold text-brand-navy text-base tracking-tight mb-2 flex items-center justify-between">
                <span>Analisis & Aksi Nyata</span>
                <Compass className="w-4 h-4 text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Pelatihan memetakan kebutuhan akar rumput, merancang intervensi sosial, dan memimpin kolaborasi tim tanpa sekat birokrasi.
              </p>
            </div>

            <div className="flex flex-col p-5 rounded-lg bg-slate-50/70 border border-slate-200/60 transition-all duration-200 hover:border-slate-400 hover:bg-white group cursor-pointer" onClick={openRegister}>
              <div className="w-8 h-8 rounded-lg bg-slate-200 text-brand-navy flex items-center justify-center font-bold text-sm mb-4 group-hover:scale-105 transition-transform">
                03
              </div>
              <h4 className="font-bold text-brand-navy text-base tracking-tight mb-2 flex items-center justify-between">
                <span>Regenerasi Penggerak</span>
                <Users className="w-4 h-4 text-brand-navy opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Lulusan dibimbing menjadi tutor, relawan terampil, dan inisiator gerakan mandiri yang berkelanjutan di daerah asal.
              </p>
            </div>
          </div>

          <div className="px-6 py-4 bg-slate-100/70 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
            <span className="font-semibold text-brand-navy">Fokus Operasional:</span>
            <div className="flex items-center gap-6">
              <span>• 12 Modul Kurikulum Aplikatif</span>
              <span>• 120 Menit Mentorship Intensif</span>
              <span>• Pendampingan Hingga Perguruan Tinggi</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
