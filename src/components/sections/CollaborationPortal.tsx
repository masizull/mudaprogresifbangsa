"use client";

import React, { useState } from "react";
import { Handshake, Landmark, GraduationCap, Building2, Users2, ArrowRight, CheckCircle2 } from "lucide-react";
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
    <section id="kemitraan" className="py-20 bg-white text-[#081426] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Handshake className="w-4 h-4 text-amber-600" />
            Sinergi Multi-Pihak
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#081426]">
            Portal Kemitraan & Kolaborasi Strategis
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Kami meyakini perubahan berdampak besar hanya bisa dicapai melalui kolaborasi lintas sektor. Bergabunglah bersama kami merawat masa depan anak bangsa.
          </p>
        </div>

        {/* 4 Partnership Track Cards (Bento 2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COLLABORATION_DATA.map((collab, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={collab.id}
                className="group relative bg-[#F4F7FB] rounded-3xl p-8 border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(18,25,38,0.05)] hover:shadow-[0_12px_32px_-4px_rgba(3,27,58,0.09)] hover:border-royal-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0F2342] text-amber-400 flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-royal-600 bg-white px-3 py-1 rounded-full border border-slate-200">
                      TRACK 0{idx + 1}
                    </span>
                  </div>

                  <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
                    {collab.category}
                  </div>
                  <h3 className="text-xl font-bold text-[#081426] mb-3 group-hover:text-royal-600 transition-colors">
                    {collab.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {collab.desc}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {collab.badges.map((b) => (
                      <span
                        key={b}
                        className="px-2.5 py-1 rounded-md bg-white border border-slate-200/80 text-slate-600 text-xs font-medium"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleOpenSinergi(collab.category)}
                    className="px-5 py-2.5 rounded-full bg-[#0F2342] hover:bg-royal-600 text-white text-xs font-bold transition-all duration-200 inline-flex items-center gap-2 group/btn shadow-sm"
                  >
                    <span>Ajukan Kemitraan</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] text-slate-400 font-medium">Respon Cepat</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Banner Sinergi Cepat */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0F2342] via-[#081426] to-[#0F2342] text-white p-8 sm:p-10 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ingin Berdiskusi Langsung Mengenai Proposal Program?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Sekretariat Yayasan Muda Progresif Bangsa terbuka untuk audiensi daring maupun tatap muka langsung di kantor yayasan.
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleOpenSinergi("Konsultasi Langsung")}
            className="px-6 py-3.5 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white text-xs sm:text-sm font-bold shadow-cta-orange transition-all duration-200 shrink-0 inline-flex items-center gap-2"
          >
            <span>Hubungi Sekretariat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Synergy Modal Dialog */}
      <SynergyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCategory={selectedCategory}
      />
    </section>
  );
}
