import React from "react";
import { GraduationCap, TrendingUp, Network, CheckCircle2 } from "lucide-react";
import { ABOUT_FOCUS_DATA, VISION_MISSION_DATA, FOUNDATION_INFO } from "@/data/foundation-data";

export default function AboutAndVision() {
  const focusIcons = [GraduationCap, TrendingUp, Network];

  return (
    <section id="tentang" className="py-10 sm:py-12 bg-[#F4F7FB] text-[#081426]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header Section without pill badges */}
        <div className="max-w-2xl">
          <div className="text-[11px] font-mono font-bold tracking-widest text-[#2454BE] uppercase mb-1">
            Tentang Yayasan
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#081426] leading-snug">
            Membangun Karakter Bangsa Lewat Gerakan Intelektual & Aksi Nyata
          </h2>
          <p className="mt-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed">
            {FOUNDATION_INFO.legalName} didirikan pada tahun 2025 sebagai ikhtiar kolektif pemuda Indonesia untuk merajut kemandirian sosial, meningkatkan literasi kebangsaan, dan membuka akses seluas-luasnya bagi generasi muda di seluruh penjuru negeri.
          </p>
        </div>

        {/* 3 Fokus Utama Kami */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {ABOUT_FOCUS_DATA.map((item, idx) => {
            const Icon = focusIcons[idx];
            return (
              <div
                key={item.title}
                className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0F2342] text-sky-400 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Fokus 0{idx + 1}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#081426] mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visi & Misi Bento Section */}
        <div id="visi-misi" className="pt-2">
          <div className="mb-6">
            <div className="text-[11px] font-mono font-bold tracking-widest text-amber-600 uppercase mb-1">
              Komitmen Strategis
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#081426]">
              Visi & Misi Yayasan
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Arah pandang masa depan dan empat peta jalan terukur untuk kemajuan kepemudaan Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Visi Card */}
            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#081426] via-[#0F2342] to-[#162F56] text-white p-5 sm:p-6 flex flex-col justify-between border border-sky-500/20 shadow-md">
              <div className="space-y-3">
                <div className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-wider">
                  Visi Utama
                </div>
                <h3 className="text-base sm:text-lg font-bold leading-snug text-white">
                  “{VISION_MISSION_DATA.vision}”
                </h3>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="font-semibold text-white">Akta Notaris No. 14 Tahun 2025</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Landasan Ketetapan Hukum</div>
              </div>
            </div>

            {/* 4 Misi Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {VISION_MISSION_DATA.missions.map((misi) => (
                <div
                  key={misi.number}
                  className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-extrabold text-[#2454BE] uppercase">
                        MISI {misi.number}
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#081426] mb-1 leading-snug">
                      {misi.title}
                    </h4>
                    <p className="text-[12px] sm:text-xs text-slate-600 leading-relaxed">
                      {misi.desc}
                    </p>
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
