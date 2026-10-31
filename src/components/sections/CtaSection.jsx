'use client';

import React from 'react';
import { ArrowRight, Building, Users } from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export default function CtaSection() {
  const { openRegister, openPartner } = useModals();

  return (
    <section id="gabung" className="py-24 bg-brand-slate-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-brand-navy rounded-card p-8 sm:p-14 text-white shadow-ambient relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-orange via-brand-blue to-brand-orange"></div>

          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-orange mb-3 block">
              Panggilan Aksi // 2026-2027
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Setiap Generasi Punya Panggilan Zaman. Ini Panggilan Kita.
            </h2>
            <p className="mt-4 text-slate-300 text-base leading-relaxed">
              Apakah Anda seorang pelajar yang mencari arah hidup, profesional muda yang ingin mendedikasikan waktu sebagai mentor, atau institusi yang ingin berkolaborasi? Pintu kami selalu terbuka.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Action 1: Pelajar */}
            <div className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-brand-orange transition-colors duration-200 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-brand-orange uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>Jalur Kaderisasi</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Daftar Akademi Progresif</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Ikuti seleksi kohort baru untuk jenjang Tunas & Penggerak Progresif di Kota/Kabupaten Bekasi dan sekitarnya.
                </p>
              </div>
              <button 
                onClick={openRegister}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white px-5 py-3 text-sm font-semibold shadow-cta-orange transition-all duration-200 cursor-pointer"
              >
                <span>Registrasi Peserta Baru</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Action 2: Mitra */}
            <div className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-brand-blue transition-colors duration-200 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-brand-blue uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5" />
                  <span>Jalur Kelembagaan</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Kemitraan & Penyaluran CSR</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Dukung beasiswa kelas, penyediaan mentor ahli, atau kolaborasi penyelenggaraan program sosial terukur.
                </p>
              </div>
              <button 
                onClick={openPartner}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-slate-100 text-brand-navy px-5 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer"
              >
                <span>Hubungi Tim Kemitraan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
