import React from "react";
import { BookOpen, Lightbulb, Sparkles, ShieldCheck, Zap, Database, HeartHandshake } from "lucide-react";
import { VALUES_DATA } from "@/data/foundation-data";

export default function CultureValues() {
  const principleIcons = [BookOpen, Lightbulb, Sparkles];
  const coreValueIcons = [ShieldCheck, Zap, Database, HeartHandshake];

  return (
    <section id="nilai-budaya" className="py-20 bg-white text-[#081426] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-700 text-xs font-bold uppercase tracking-wider mb-3">
            Filosofi & Etika Gerakan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#081426]">
            Prinsip Gerakan & Nilai Inti Yayasan
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Landasan etis yang memandu setiap relawan, pengurus, dan mitra dalam merumuskan gagasan serta mengeksekusi program di lapangan.
          </p>
        </div>

        {/* 3 Prinsip Gerakan (Step-Flow Cards) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">
              3 Prinsip Gerakan Berkelanjutan
            </h3>
            <span className="text-xs text-slate-500">Alur Aksi Nyata</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {VALUES_DATA.principles.map((prinsip, idx) => {
              const Icon = principleIcons[idx];
              return (
                <div
                  key={prinsip.title}
                  className="relative p-7 rounded-2xl bg-gradient-to-b from-[#F4F7FB] to-white border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(18,25,38,0.04)] hover:shadow-[0_12px_28px_-4px_rgba(3,27,58,0.08)] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0F2342] text-amber-400 flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded bg-amber-500/10 text-amber-700 border border-amber-500/20">
                      FASE 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#081426] mb-2">
                    {prinsip.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {prinsip.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Nilai Inti (Core Values Bento Grid) */}
        <div className="space-y-4 pt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">
              4 Nilai Inti (Core Values)
            </h3>
            <span className="text-xs text-slate-500">Standar Karakter & Budaya</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES_DATA.coreValues.map((val, idx) => {
              const Icon = coreValueIcons[idx];
              return (
                <div
                  key={val.name}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(18,25,38,0.04)] hover:border-royal-500/40 hover:shadow-[0_12px_32px_-4px_rgba(3,27,58,0.09)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#0F2342] text-sky-400 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="font-mono text-[11px] font-bold text-sky-600 tracking-wider uppercase mb-1">
                      {val.name}
                    </div>
                    <h4 className="text-base font-bold text-[#081426] mb-2">
                      {val.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Pilar Pembinaan Karakter
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
