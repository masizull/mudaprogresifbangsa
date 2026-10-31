'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const stories = [
    {
      name: 'Fadhil Pratama',
      role: 'Alumni Tunas Progresif & Mahasiswa Teknik',
      location: 'Bekasi Timur',
      text: 'Sebelum bergabung, saya bingung menentukan orientasi studi setelah SMK. Di Akademi Progresif, saya bukan hanya dipetakan minatnya, tetapi diajarkan cara memimpin inisiatif kelompok dan berpikir kritis secara mandiri.',
      tag: 'Kohort 2025'
    },
    {
      name: 'Anisa Maharani',
      role: 'Koordinator Satgas Ekologi Pemuda',
      location: 'Muara Gembong, Kab. Bekasi',
      text: 'Melalui bimbingan MPB, kami berhasil mengorganisir 40 anak muda lokal untuk merestorasi 3 hektar mangrove pesisir yang terancam abrasi, sekaligus menginisiasi bank sampah sirkular.',
      tag: 'Aksi Lingkungan'
    },
    {
      name: 'Dimas Kurnia',
      role: 'Founder Gerai Kopi Komunitas (Inkubator Karya)',
      location: 'Cikarang',
      text: 'Bantuan hibah bibit usaha dan pendampingan akuntansi dari Inkubator Karya Muda memberi saya modal keberanian untuk membuka usaha mandiri yang kini mempekerjakan 4 rekan sebaya.',
      tag: 'Kemandirian Ekonomi'
    }
  ];

  const next = () => setCurrent((current + 1) % stories.length);
  const prev = () => setCurrent((current - 1 + stories.length) % stories.length);

  return (
    <section className="py-20 bg-brand-slate-bg border-b border-subtle">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-blue mb-1 block">
              Suara Penggerak
            </span>
            <h3 className="text-2xl font-bold text-brand-navy">Cerita Nyata Dari Gelanggang</h3>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={prev}
              className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
              aria-label="Previous Story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={next}
              className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
              aria-label="Next Story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-8 sm:p-10 rounded-card bg-white border border-subtle shadow-ambient relative">
          <Quote className="w-10 h-10 text-orange-200 mb-4" />
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-6">
            "{stories[current].text}"
          </p>
          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <div>
              <div className="font-bold text-brand-navy text-sm sm:text-base">{stories[current].name}</div>
              <div className="text-xs text-slate-500">{stories[current].role} &bull; {stories[current].location}</div>
            </div>
            <span className="px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold">
              {stories[current].tag}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
