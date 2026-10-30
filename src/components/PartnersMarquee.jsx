import React from 'react';

export default function PartnersMarquee() {
  const partners = [
    { name: 'Balai Pemuda Mandiri', code: 'BP', color: 'bg-slate-800' },
    { name: 'Jejaring Komunitas Bekasi', code: 'JK', color: 'bg-brand-blue' },
    { name: 'Forum Literasi Inklusif', code: 'FL', color: 'bg-brand-orange' },
    { name: 'Inkubasi Koperasi Pemuda', code: 'IK', color: 'bg-slate-900' },
    { name: 'Aliansi Aksi Iklim Lestari', code: 'LH', color: 'bg-emerald-700' },
    { name: 'Asosiasi Pendidik Progresif', code: 'AP', color: 'bg-slate-800' }
  ];

  return (
    <section id="mitra" className="py-20 bg-white border-b border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
          Didukung & Berkolaborasi Bersama Ekosistem Multipihak
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 h-full w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="pointer-events-none absolute top-0 right-0 h-full w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="marquee-track flex items-center gap-12 sm:gap-16 w-max animate-marquee py-2">
          {[...partners, ...partners].map((p, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-2.5 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-200 cursor-pointer"
            >
              <div className={`w-8 h-8 rounded ${p.color} text-white flex items-center justify-center font-bold text-xs`}>
                {p.code}
              </div>
              <span className="font-bold tracking-tight text-slate-700 text-sm whitespace-nowrap">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
