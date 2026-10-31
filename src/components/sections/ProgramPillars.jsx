'use client';

import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export default function ProgramPillars() {
  const { openRegister, openCurriculum } = useModals();
  const [activeFilter, setActiveFilter] = useState('all');

  const programs = [
    {
      id: 'edu',
      category: 'Pilar I • Pendidikan',
      categoryTag: '12 Sesi Terarah',
      title: 'Akademi Progresif',
      color: 'text-brand-blue',
      badgeBg: 'bg-blue-50 text-brand-blue border-blue-100',
      desc: 'Wadah pembinaan kepemimpinan dan peta karier bagi pelajar SMA/SMK sederajat melalui jenjang Tunas Progresif (fondasi diri) dan Penggerak Progresif (analisis sosial).',
      checklist: [
        'Pemetaan Minat, Bakat, & Desain Peta Pendidikan',
        'Pelatihan Komunikasi, Debat Etis, & Problem Solving',
        'Mentoring 1-on-1 dengan Alumni Perguruan Tinggi'
      ],
      target: '1.200 Pelajar / Tahun',
      actionText: 'Lihat Silabus',
      onAction: openCurriculum
    },
    {
      id: 'eco',
      category: 'Pilar II • Ekonomi',
      categoryTag: 'Inkubasi Mandiri',
      title: 'Inkubator Karya Muda',
      color: 'text-brand-orange',
      badgeBg: 'bg-orange-50 text-brand-orange border-orange-100',
      desc: 'Pemberdayaan keterampilan vokasional terapan dan wirausaha mikro berbasis komunitas agar anak muda mampu mandiri secara finansial dan menggerakkan sirkulasi modal daerah.',
      checklist: [
        'Bootcamp Wirausaha Sosial & Literasi Finansial',
        'Hibah Bibit Usaha & Penguatan Koperasi Komunitas',
        'Pendampingan Akses Pasar & Ekosistem Digital'
      ],
      target: '45 Usaha Rintisan / Thn',
      actionText: 'Gabung Inkubasi',
      onAction: openRegister
    },
    {
      id: 'env',
      category: 'Pilar III • Lingkungan',
      categoryTag: 'Aksi Kolaboratif',
      title: 'Satuan Aksi Ekologis',
      color: 'text-emerald-700',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      desc: 'Menggerakkan generasi muda dalam mitigasi krisis iklim berbasis lokal: rehabilitasi DAS, bank sampah mandiri, serta advokasi lingkungan berwawasan lestari.',
      checklist: [
        'Audit Sampah Komunitas & Tata Kelola Sirkular',
        'Restorasi Hijau Wilayah Pesisir & Sempadan Sungai',
        'Pendidikan Iklim Masuk Sekolah & Komunitas Muda'
      ],
      target: '15 Ton Sampah Terolah',
      actionText: 'Daftar Relawan',
      onAction: openRegister
    }
  ];

  const filtered = activeFilter === 'all' 
    ? programs 
    : programs.filter(p => p.id === activeFilter);

  return (
    <section id="pilar-program" className="py-24 sm:py-32 bg-white border-y border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-orange font-mono mb-2 block">
              Pilar Operasional // 03
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy leading-[1.15]">
              Tiga Matra Intervensi Nyata
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Program kami dirancang modular dan saling terhubung, menjamin pertumbuhan holistik dari ranah intelektual, kemandirian finansial, hingga tanggung jawab ekologis.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-slate-500 hidden sm:inline">Pilih kategori modul:</span>
            <div className="inline-flex rounded-full bg-slate-100 p-1 border border-slate-200 text-xs font-semibold">
              <button 
                onClick={() => setActiveFilter('all')} 
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${activeFilter === 'all' ? 'bg-brand-navy text-white' : 'text-slate-600 hover:text-brand-navy'}`}
              >
                Semua
              </button>
              <button 
                onClick={() => setActiveFilter('edu')} 
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${activeFilter === 'edu' ? 'bg-brand-navy text-white' : 'text-slate-600 hover:text-brand-navy'}`}
              >
                Pendidikan
              </button>
              <button 
                onClick={() => setActiveFilter('eco')} 
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${activeFilter === 'eco' ? 'bg-brand-navy text-white' : 'text-slate-600 hover:text-brand-navy'}`}
              >
                Ekonomi
              </button>
              <button 
                onClick={() => setActiveFilter('env')} 
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${activeFilter === 'env' ? 'bg-brand-navy text-white' : 'text-slate-600 hover:text-brand-navy'}`}
              >
                Lingkungan
              </button>
            </div>
          </div>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <article 
              key={item.id} 
              className="bg-brand-slate-bg rounded-card border border-subtle p-8 flex flex-col justify-between shadow-ambient hover:shadow-ambient-hover hover:border-slate-300 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold text-xs border ${item.badgeBg}`}>
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{item.categoryTag}</span>
                </div>

                <h3 className={`text-2xl font-bold text-brand-navy tracking-tight group-hover:${item.color} transition-colors duration-200 mb-3`}>
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                <ul className="space-y-3 mb-8 text-sm text-slate-700">
                  {item.checklist.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className={`mt-0.5 flex-shrink-0 ${item.color}`}>
                        <Check className="w-4 h-4" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200/70 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Target: {item.target}</span>
                <button 
                  onClick={item.onAction}
                  className={`text-sm font-bold ${item.color} inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer`}
                >
                  <span>{item.actionText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
