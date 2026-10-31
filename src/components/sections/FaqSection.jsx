'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Siapa saja yang memenuhi syarat mendaftar Akademi Progresif?',
      a: 'Sasaran utama kelas Tunas Progresif adalah pelajar kelas X dan XI SMA, SMK, MA, atau sederajat yang berdomisili di Kota/Kabupaten Bekasi dan sekitarnya. Sementara Penggerak Progresif diperuntukkan bagi lulusan Tunas atau mahasiswa muda yang siap memimpin intervensi sosial.'
    },
    {
      q: 'Apakah program pembinaan ini berbayar atau tersedia beasiswa?',
      a: 'Akademi Progresif menyediakan jalur beasiswa penuh (100% didukung dana kemitraan & CSR mitra) bagi peserta dari keluarga prasejahtera yang lolos tahap asesmen komitmen. Tersedia pula jalur mandiri terjangkau untuk operasional modul intensif.'
    },
    {
      q: 'Berapa lama durasi program dan bagaimana format pertemuannya?',
      a: 'Program dirancang dalam 12 sesi dengan durasi 120 menit per sesi, diselenggarakan setiap akhir pekan (Sabtu/Minggu) secara hybrid (luring di ruang komunitas mitra dan daring interaktif).'
    },
    {
      q: 'Bagaimana perusahaan atau lembaga filantropi dapat bermitra dengan MPB?',
      a: 'Mitra dapat menyalurkan program CSR melalui sponsor beasiswa peserta, penyediaan mentor industri, penyediaan fasilitas praktik kerja, maupun joint initiative intervensi ekologi.'
    }
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 bg-white border-b border-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-orange mb-2 block">
            Pertanyaan Umum // 05
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Semua yang Perlu Anda Ketahui
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Jawaban transparan seputar mekanisme seleksi, silabus, dan peluang kemitraan yayasan.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="rounded-lg border border-slate-200 overflow-hidden transition-all duration-200"
            >
              <button 
                onClick={() => toggle(idx)}
                className="w-full p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors focus:outline-none cursor-pointer"
              >
                <span className="font-bold text-sm sm:text-base text-brand-navy pr-4">
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${openIndex === idx ? 'rotate-180 text-brand-orange' : ''}`} />
              </button>
              
              {openIndex === idx && (
                <div className="p-5 bg-white border-t border-slate-200 text-slate-600 text-sm leading-relaxed animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-card bg-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-sm text-brand-navy">Punya pertanyaan lain yang belum terjawab?</h4>
            <p className="text-xs text-slate-500">Tim sekretariat kami siap membantu via WhatsApp atau email.</p>
          </div>
          <a 
            href="https://wa.me/?text=Halo%20Yayasan%20Muda%20Progresif%20Bangsa,%20saya%20ingin%20bertanya%20seputar%20program" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-semibold transition-all whitespace-nowrap"
          >
            Hubungi Narahubung
          </a>
        </div>

      </div>
    </section>
  );
}
