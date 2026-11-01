import React from "react";
import { GraduationCap, TrendingUp, Network, Compass, Target, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ABOUT_FOCUS_DATA, VISION_MISSION_DATA, FOUNDATION_INFO } from "@/data/foundation-data";

export default function AboutAndVision() {
  const focusIcons = [GraduationCap, TrendingUp, Network];

  return (
    <section id="tentang" className="py-20 bg-[#F4F7FB] text-[#081426]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header Section */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-500/10 border border-royal-500/20 text-royal-600 text-xs font-bold tracking-wide uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            Tentang Yayasan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#081426]">
            Membangun Karakter Bangsa Lewat Gerakan Intelektual & Aksi Nyata
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            {FOUNDATION_INFO.legalName} didirikan pada tahun 2025 sebagai ikhtiar kolektif pemuda Indonesia untuk merajut kemandirian sosial, meningkatkan literasi kebangsaan, dan membuka akses seluas-luasnya bagi generasi muda di seluruh penjuru negeri.
          </p>
        </div>

        {/* 3 Fokus Utama Kami (Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ABOUT_FOCUS_DATA.map((item, idx) => {
            const Icon = focusIcons[idx];
            return (
              <div
                key={item.title}
                className="group relative bg-white p-7 rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(18,25,38,0.05)] hover:shadow-[0_12px_32px_-4px_rgba(3,27,58,0.09)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F2342] text-sky-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono font-bold text-sky-600 uppercase tracking-wider mb-1">
                  Fokus 0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-[#081426] mb-3 group-hover:text-royal-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visi & Misi Section (Bento Grid) */}
        <div id="visi-misi" className="pt-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold tracking-wide uppercase mb-3">
              <Target className="w-3.5 h-3.5" />
              Komitmen Strategis
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#081426]">
              Visi & Misi Yayasan
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Arah pandang masa depan dan empat peta jalan terukur untuk kemajuan kepemudaan Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Visi Card (Large Bento 5 cols) - Gradient Navy */}
            <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#081426] via-[#0F2342] to-[#162F56] text-white p-8 sm:p-10 flex flex-col justify-between border-2 border-sky-500/30 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-royal-500/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-400/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
                  Visi Utama Yayasan
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold leading-snug text-white">
                  “{VISION_MISSION_DATA.vision}”
                </h3>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-white/15">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-amber-400 font-bold">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs text-slate-300 font-medium">Berdasarkan Ketetapan Resmi</div>
                    <div className="text-sm font-semibold text-white">Akta Notaris No. 14 Tahun 2025</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Misi Utama Cards (7 cols - 2x2 grid) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {VISION_MISSION_DATA.missions.map((misi) => (
                <div
                  key={misi.number}
                  className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(18,25,38,0.05)] hover:border-royal-500/50 hover:shadow-[0_10px_28px_-4px_rgba(3,27,58,0.08)] transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-extrabold text-royal-600 bg-royal-50 px-2.5 py-1 rounded-md border border-royal-200">
                        MISI {misi.number}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                    <h4 className="text-base font-bold text-[#081426] mb-2 leading-snug">
                      {misi.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {misi.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-medium">Mandat Program</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
