import React from "react";
import { BookOpen, Lightbulb, Sparkles, ShieldCheck, Zap, Database, HeartHandshake } from "lucide-react";
import { VALUES_DATA } from "@/data/foundation-data";

export default function CultureValues() {
  const principleIcons = [BookOpen, Lightbulb, Sparkles];
  const coreValueIcons = [ShieldCheck, Zap, Database, HeartHandshake];

  return (
    <section id="nilai-budaya" className="py-10 sm:py-12 bg-white text-[#081426] border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div>
          <div className="text-[11px] font-mono font-bold tracking-widest text-[#2454BE] uppercase mb-1">
            Filosofi & Etika Gerakan
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#081426]">
            Prinsip Gerakan & Nilai Inti Yayasan
          </h2>
          <p className="mt-1 text-slate-600 text-xs sm:text-sm max-w-2xl">
            Landasan etis yang memandu setiap relawan, pengurus, dan mitra dalam merumuskan gagasan serta mengeksekusi program di lapangan.
          </p>
        </div>

        {/* 3 Prinsip Gerakan */}
        <div className="space-y-3">
          <div className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-400">
            3 Prinsip Gerakan Berkelanjutan
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {VALUES_DATA.principles.map((prinsip, idx) => {
              const Icon = principleIcons[idx];
              return (
                <div
                  key={prinsip.title}
                  className="p-4 sm:p-5 rounded-xl bg-[#F4F7FB] border border-slate-200/80 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0F2342] text-amber-400 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-slate-400">
                      FASE 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-[#081426] mb-1">
                    {prinsip.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {prinsip.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Nilai Inti */}
        <div className="space-y-3 pt-2">
          <div className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-400">
            4 Nilai Inti (Core Values)
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {VALUES_DATA.coreValues.map((val, idx) => {
              const Icon = coreValueIcons[idx];
              return (
                <div
                  key={val.name}
                  className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-[#0F2342] text-sky-400 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="font-mono text-[10px] font-bold text-[#2454BE] tracking-wider uppercase mb-1">
                      {val.name}
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#081426] mb-1">
                      {val.title}
                    </h4>
                    <p className="text-[12px] sm:text-xs text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
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
