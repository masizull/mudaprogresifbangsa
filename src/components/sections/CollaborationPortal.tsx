"use client";

import React, { useState } from "react";
import { Landmark, GraduationCap, Building2, Users2, ArrowRight } from "lucide-react";
import { COLLABORATION_DATA } from "@/data/foundation-data";
import SynergyModal from "@/components/modals/SynergyModal";

export default function CollaborationPortal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Sektor Swasta / CSR");

  const icons = [Landmark, GraduationCap, Building2, Users2];

  const handleOpenSinergi = (category: string) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  return (
    <section id="kemitraan" className="py-10 sm:py-12 bg-white text-[#081426] border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header without pill badges */}
        <div>
          <div className="text-[11px] font-mono font-bold tracking-widest text-amber-600 uppercase mb-1">
            Sinergi Multi-Pihak
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#081426]">
            Portal Kemitraan & Kolaborasi Strategis
          </h2>
          <p className="mt-1 text-slate-600 text-xs sm:text-sm max-w-2xl">
            Perubahan berdampak luas dicapai melalui kolaborasi lintas sektor. Bergabunglah bersama kami merawat masa depan kepemudaan Indonesia.
          </p>
        </div>

        {/* 4 Tracks Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {COLLABORATION_DATA.map((collab, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={collab.id}
                className="bg-[#F4F7FB] rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0F2342] text-amber-400 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-slate-400 uppercase">
                      TRACK 0{idx + 1}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    {collab.category}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#081426] mb-1.5 leading-snug">
                    {collab.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {collab.desc}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {collab.badges.map((b) => (
                      <span
                        key={b}
                        className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600 text-[11px]"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleOpenSinergi(collab.category)}
                    className="px-3.5 py-1.5 rounded-lg bg-[#0F2342] hover:bg-[#2454BE] text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Ajukan Kemitraan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-slate-400">Respon 1x24 Jam</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0F2342] via-[#081426] to-[#0F2342] text-white p-5 sm:p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-white">
              Ingin Berdiskusi Langsung Mengenai Proposal Program?
            </h3>
            <p className="text-slate-300 text-xs max-w-xl">
              Sekretariat Yayasan Muda Progresif Bangsa terbuka untuk audiensi daring maupun tatap muka langsung di kantor yayasan.
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleOpenSinergi("Konsultasi Langsung")}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 text-xs font-bold shadow transition-colors shrink-0 inline-flex items-center gap-1.5"
          >
            <span>Hubungi Sekretariat</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      <SynergyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCategory={selectedCategory}
      />
    </section>
  );
}
