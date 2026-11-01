import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { PILLARS_DATA } from "@/data/foundation-data";

export function generateStaticParams() {
  return PILLARS_DATA.map((p) => ({
    slug: p.slug,
  }));
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const pilar = PILLARS_DATA.find((p) => p.slug === params.slug);

  if (!pilar) {
    notFound();
  }

  return (
    <div className="py-10 sm:py-12 bg-[#F4F7FB] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Breadcrumb / Back button */}
        <Link
          href="/#ekosistem-pilar"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#2454BE] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Ekosistem Pilar</span>
        </Link>

        {/* Hero Card of Pillar */}
        <div className="bg-[#081426] text-white rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wider">
                PILAR {pilar.number} • {pilar.basisLabel} {pilar.basisValue}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                {pilar.title}
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {pilar.heroDesc}
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                {pilar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-white/10 text-[11px] font-mono text-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/15 shadow-lg">
                <Image
                  src={pilar.image}
                  alt={pilar.imageAlt}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Programs Grid */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-extrabold text-[#081426]">
            Sub-Program & Rencana Operasional
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pilar.programs.map((prog) => (
              <div
                key={prog.title}
                className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-sm sm:text-base font-bold text-[#081426] leading-snug">
                      {prog.title}
                    </h3>
                    {prog.highlight && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#2454BE] font-bold">
                        {prog.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {prog.desc}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Program Prioritas Yayasan</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Sinergi */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-[#081426]">
              Tertarik Bermitra atau Menjadi Relawan di {pilar.nameOnly}?
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Hubungi tim pengurus untuk audiensi kurikulum, donasi program, atau kolaborasi institusi.
            </p>
          </div>
          <Link
            href="/kolaborasi"
            className="px-5 py-2.5 rounded-xl bg-[#2454BE] hover:bg-[#1D469E] text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 shrink-0"
          >
            <span>Ajukan Kolaborasi</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
