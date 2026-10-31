'use client';

import React, { useState } from 'react';
import { X, BookOpen, Clock, Award } from 'lucide-react';

export default function CurriculumModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('tunas');

  if (!isOpen) return null;

  const tunasModules = [
    { no: '01', title: 'Fondasi Diri & Identifikasi Nilai Hidup', desc: 'Mengenali kekuatan, kelemahan, minat, dan prinsip hidup dasar.' },
    { no: '02', title: 'Manajemen Emosi & Resiliensi Personal', desc: 'Membangun ketangguhan mental menghadapi tekanan akademik dan sosial.' },
    { no: '03', title: 'Komunikasi Asertif & Seni Mendengar', desc: 'Menyampaikan gagasan tanpa konfrontatif dan mempraktikkan active listening.' },
    { no: '04', title: 'Desain Peta Jalan Pendidikan Tinggi', desc: 'Memetakan pilihan jurusan, kampus, serta opsi beasiswa nasional/global.' },
    { no: '05', title: 'Literasi Digital & Etika Informasi', desc: 'Memfilter informasi, keamanan data, dan pemanfaatan AI secara etis.' },
    { no: '06', title: 'Eksplorasi Empat Pilar Kontribusi', desc: 'Pengenalan awal ranah pendidikan, kesehatan, kemanusiaan, dan pemberdayaan.' },
    { no: '07-12', title: 'Praktik Lapangan & Proyek Mini Tunas', desc: 'Simulasi kolaborasi tim dalam merumuskan solusi kecil di lingkungan terdekat.' }
  ];

  const penggerakModules = [
    { no: '01', title: 'Analisis Sosial & Pemetaan Kebutuhan Komunitas', desc: 'Metode riset partisipatif untuk memahami persoalan akar rumput secara objektif.' },
    { no: '02', title: 'Desain Program Berbasis Dampak (Logic Model)', desc: 'Menyusun indikator capaian, rencana aksi, dan mitigasi risiko intervensi.' },
    { no: '03', title: 'Kepemimpinan Kolaboratif & Manajemen Konflik', desc: 'Mengelola tim lintas latar belakang dan menyelesaikan dinamika internal.' },
    { no: '04', title: 'Mobilisasi Sumber Daya & Penggalangan Dana Etis', desc: 'Akuntabilitas keuangan, penggalangan dana publik, dan komunikasi pemangku kepentingan.' },
    { no: '05', title: 'Advokasi & Komunikasi Kebijakan Publik', desc: 'Membawa suara komunitas pemuda ke hadapan pemangku regulasi lokal.' },
    { no: '06', title: 'Monitoring, Evaluasi, & Dokumentasi Pembelajaran', desc: 'Mengukur dampak riil program dan menyusun laporan pertanggungjawaban publik.' },
    { no: '07-12', title: 'Ekspedisi Proyek Penggerak Nyata', desc: 'Menjalankan intervensi mandiri selama 6 minggu di wilayah sasaran.' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-card shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-brand-orange" />
            <span className="font-bold text-sm text-brand-navy tracking-tight">
              Struktur Kurikulum & Silabus Akademi Progresif
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Level Switcher */}
        <div className="p-4 bg-slate-100/60 border-b border-slate-200 flex gap-2 flex-shrink-0">
          <button 
            onClick={() => setActiveTab('tunas')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${activeTab === 'tunas' ? 'bg-brand-blue text-white shadow-sm' : 'bg-white text-slate-600 hover:text-brand-navy'}`}
          >
            Tunas Progresif (Kelas Dasar)
          </button>
          <button 
            onClick={() => setActiveTab('penggerak')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${activeTab === 'penggerak' ? 'bg-brand-orange text-white shadow-sm' : 'bg-white text-slate-600 hover:text-brand-navy'}`}
          >
            Penggerak Progresif (Kelas Lanjutan)
          </button>
        </div>

        {/* Scrollable Curriculum List */}
        <div className="p-6 overflow-y-auto space-y-3.5">
          <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400" /> 12 Sesi (120 Menit/Sesi)</span>
            <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-brand-orange" /> Sertifikat Kompetensi MPB</span>
          </div>

          {(activeTab === 'tunas' ? tunasModules : penggerakModules).map((mod, i) => (
            <div key={i} className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded bg-white font-mono text-xs font-bold text-brand-navy flex items-center justify-center border border-slate-200 flex-shrink-0">
                  {mod.no}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-brand-navy">{mod.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{mod.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between flex-shrink-0">
          <span className="text-xs text-slate-500">Pendampingan berlanjut hingga jenjang perkuliahan.</span>
          <button 
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-brand-navy text-white text-xs font-semibold hover:bg-brand-navy-light cursor-pointer"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
}
