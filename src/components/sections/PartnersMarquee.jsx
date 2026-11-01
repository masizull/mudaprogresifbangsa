import React from 'react';

export default function PartnersMarquee() {
  const partners = [
    { name: 'Balai Pemuda Mandiri', code: 'BP', color: 'bg-slate-800' },
    { name: 'Jejaring Komunitas Bekasi', code: 'JK', color: 'bg-[#2454BE]' },
    { name: 'Forum Literasi Inklusif', code: 'FL', color: 'bg-amber-600' },
    { name: 'Inkubasi Koperasi Pemuda', code: 'IK', color: 'bg-slate-900' },
    { name: 'Aliansi Aksi Iklim Lestari', code: 'LH', color: 'bg-emerald-700' },
    { name: 'Asosiasi Pendidik Progresif', code: 'AP', color: 'bg-slate-800' }
  ];

  return (
    <section id="mitra" className="py-8 sm:py-10 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6 text-center">
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
          Didukung & Berkolaborasi Bersama Ekosistem Multipihak
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 h-full w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="marquee-track flex items-center gap-10 sm:gap-14 w-max animate-marquee py-1">
          {[...partners, ...partners].map((p, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-2 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-150 cursor-pointer"
            >
              <div className={`w-7 h-7 rounded ${p.color} text-white flex items-center justify-center font-bold text-[11px]`}>
                {p.code}
              </div>
              <span className="font-bold tracking-tight text-slate-700 text-xs whitespace-nowrap">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
