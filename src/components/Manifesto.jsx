import React, { useState } from 'react';
import { Quote, Sparkles, Check } from 'lucide-react';

export default function Manifesto() {
  const [activeTab, setActiveTab] = useState('sikap');

  return (
    <section id="manifesto" className="py-24 sm:py-32 bg-white border-y border-subtle">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-brand-orange"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-brand-orange font-mono">
            Manifesto Gerakan // 01
          </span>
        </div>

        {/* Oversized Bold Editorial Quote */}
        <blockquote className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-brand-navy leading-[1.28] tracking-[-0.02em]">
          “Indonesia tidak kekurangan narasi tentang bonus demografi. Yang langka adalah ruang tempa yang disiplin, kesempatan yang setara, dan keyakinan nyata untuk membiarkan anak muda memimpin solusi di tanahnya sendiri.”
        </blockquote>

        {/* Interactive Tab Switcher */}
        <div className="mt-12 pt-8 border-t border-slate-100">
          <div className="flex gap-3 mb-6">
            <button 
              onClick={() => setActiveTab('sikap')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeTab === 'sikap' ? 'bg-brand-navy text-white' : 'bg-slate-100 text-slate-600 hover:text-brand-navy'}`}
            >
              Pernyataan Sikap Yayasan
            </button>
            <button 
              onClick={() => setActiveTab('makna')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeTab === 'makna' ? 'bg-brand-navy text-white' : 'bg-slate-100 text-slate-600 hover:text-brand-navy'}`}
            >
              Arti Kata "Progresif" Bagi Kami
            </button>
          </div>

          {activeTab === 'sikap' ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Pernyataan Sikap</p>
                <h3 className="text-lg font-bold text-brand-navy mt-1">Muda Progresif Bangsa</h3>
                <p className="text-xs text-slate-500 mt-0.5">Berdiri atas inisiatif pemuda, dikelola untuk kemaslahatan publik.</p>
              </div>

              <div className="md:col-span-8 space-y-4 text-slate-600 text-base leading-[1.6]">
                <p>
                  Kami menolak gagasan bahwa generasi muda adalah objek pasif penerima kebijakan. Progresif bagi kami bukan sekadar jargon modernitas, melainkan kesediaan untuk terus belajar, terbuka terhadap koreksi, dan mengambil langkah konkret yang dapat dipertanggungjawabkan di hadapan masyarakat.
                </p>
                <p>
                  Dimulai dari ruang kelas dan komunitas di Kota serta Kabupaten Bekasi, kami merekonstruksi pembinaan kepemudaan: bukan seremoni panggung, melainkan laboratorium aksi yang teruji dalam empat matra esensial—pendidikan, kesehatan, kemanusiaan, dan kemandirian ekonomi.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center font-bold text-xs mb-3">1</div>
                <h4 className="font-bold text-sm text-brand-navy mb-1.5">Kesediaan Terus Belajar</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Menyadari bahwa tantangan zaman berubah cepat; pemuda harus memiliki kerendahan hati untuk terus memperbarui kompetensi.</p>
              </div>
              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center font-bold text-xs mb-3">2</div>
                <h4 className="font-bold text-sm text-brand-navy mb-1.5">Terbuka Terhadap Evaluasi</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Berani menguji gagasan di lapangan nyata dan tidak alergi terhadap masukan konstruktif warga maupun mentor.</p>
              </div>
              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-slate-200 text-brand-navy flex items-center justify-center font-bold text-xs mb-3">3</div>
                <h4 className="font-bold text-sm text-brand-navy mb-1.5">Aksi yang Bertanggung Jawab</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Setiap inisiatif dirancang dengan tata kelola transparan, berdampak terukur, dan menghormati harkat komunitas lokal.</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
