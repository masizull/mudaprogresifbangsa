"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Copy, Check, Users, FileText, Landmark, UserCheck, Award } from "lucide-react";
import { FOUNDATION_INFO } from "@/data/foundation-data";

export default function GovernanceLegal() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const legalItems = [
    {
      id: "akta",
      title: "Akta Pendirian Notaris",
      number: FOUNDATION_INFO.legal.deedNumber,
      date: FOUNDATION_INFO.legal.deedDate,
      authority: FOUNDATION_INFO.legal.notary,
      extra: `No. Pendaftaran: ${FOUNDATION_INFO.legal.registrationNumber}`,
      copyText: `${FOUNDATION_INFO.legal.deedNumber} tanggal ${FOUNDATION_INFO.legal.deedDate} Notaris ${FOUNDATION_INFO.legal.notary}`,
      icon: FileText,
      accent: "border-sky-500",
      tag: "Akta Otentik"
    },
    {
      id: "kemenkumham",
      title: "Keputusan Menkumham RI",
      number: FOUNDATION_INFO.legal.kemenkumhamSk,
      date: FOUNDATION_INFO.legal.kemenkumhamDate,
      authority: `Dirjen AHU: ${FOUNDATION_INFO.legal.dirjenAhu}`,
      extra: `Daftar Yayasan: ${FOUNDATION_INFO.legal.foundationRegistry}`,
      copyText: FOUNDATION_INFO.legal.kemenkumhamSk,
      icon: Landmark,
      accent: "border-royal-500",
      tag: "Pengesahan Badan Hukum"
    },
    {
      id: "npwp",
      title: "NPWP Badan Resmi",
      number: FOUNDATION_INFO.legal.npwp,
      date: "Terdaftar Resmi",
      authority: FOUNDATION_INFO.legal.kpp,
      extra: "Wajib Pajak Badan Terdaftar",
      copyText: FOUNDATION_INFO.legal.npwp,
      icon: ShieldCheck,
      accent: "border-amber-500",
      tag: "Kepatuhan Pajak"
    }
  ];

  return (
    <section id="struktur-legalitas" className="py-20 bg-[#F4F7FB] text-[#081426]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-500/10 border border-royal-500/20 text-royal-700 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-royal-600" />
            Transparansi & Akuntabilitas Hukum
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#081426]">
            Tata Kelola Organisasi & Legalitas Resmi
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Yayasan Muda Progresif Bangsa terdaftar resmi secara hukum di Kementerian Hukum dan HAM Republik Indonesia dengan struktur kepengurusan yang akuntabel.
          </p>
        </div>

        {/* 3 Legalitas Cards with One-Click Copy */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500">
              Verifikasi Dokumen Legalitas (Klik untuk Salin)
            </h3>
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> Terverifikasi Sah
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {legalItems.map((item) => {
              const Icon = item.icon;
              const isCopied = copiedKey === item.id;
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl border-2 p-6 shadow-[0_4px_20px_-2px_rgba(18,25,38,0.05)] hover:shadow-[0_12px_28px_-4px_rgba(3,27,58,0.09)] transition-all duration-200 flex flex-col justify-between ${
                    isCopied ? "border-emerald-500 ring-2 ring-emerald-500/20" : "border-slate-200"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#0F2342] text-sky-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {item.tag}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#081426] mb-1">
                      {item.title}
                    </h4>

                    {/* Nomor Kode Legalitas (JetBrains Mono) */}
                    <div className="my-3 p-2.5 rounded-lg bg-slate-50 border border-slate-200/90 flex items-center justify-between">
                      <span className="font-mono text-xs sm:text-sm font-bold text-royal-700 select-all break-all">
                        {item.number}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(item.id, item.copyText)}
                        className="ml-2 p-1.5 rounded-md hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
                        title="Salin nomor legalitas"
                      >
                        {isCopied ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    <div className="space-y-1 text-xs text-slate-600">
                      <div><span className="font-medium text-slate-500">Penerbit:</span> {item.authority}</div>
                      <div><span className="font-medium text-slate-500">Keterangan:</span> {item.extra}</div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-mono">
                      {item.date}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(item.id, item.copyText)}
                      className="text-xs font-semibold text-royal-600 hover:text-royal-700 flex items-center gap-1"
                    >
                      {isCopied ? (
                        <span className="text-emerald-600 font-bold">Tersalin ke Clipboard!</span>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Salin No. Legalitas</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* NPWP Card Scan / Visual Verification */}
          <div className="mt-6 p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-12 rounded-lg overflow-hidden border border-slate-200 shrink-0">
                <Image
                  src={FOUNDATION_INFO.legal.npwpCardImage}
                  alt="Kartu NPWP Yayasan Muda Progresif Bangsa"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-xs font-bold text-[#081426] flex items-center gap-2">
                  <span>Kartu Pokok Wajib Pajak (NPWP 16 Digit) Terverifikasi</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-50 text-emerald-700 font-mono border border-emerald-200">VALID</span>
                </div>
                <div className="font-mono text-xs text-slate-600 mt-0.5">
                  Nomor: {FOUNDATION_INFO.legal.npwp} (KPP Pratama Bekasi Utara)
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleCopy("npwp-btn", FOUNDATION_INFO.legal.npwp)}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors shrink-0"
            >
              {copiedKey === "npwp-btn" ? "Tersalin!" : "Salin NPWP"}
            </button>
          </div>
        </div>

        {/* Struktur Organisasi Sesuai SK Menkumham RI */}
        <div className="pt-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5" />
              Hierarki Kepemimpinan
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#081426]">
              Struktur Organisasi Yayasan
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Sesuai Berita Acara & SK Pengesahan Kemenkumham RI Tahun 2025
            </p>
          </div>

          {/* Org Chart Layout */}
          <div className="space-y-6">
            {/* Top Level: Dewan Pembina & Dewan Pengawas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Dewan Pembina */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0F2342] to-[#081426] text-white border border-sky-400/30 shadow-lg text-center relative overflow-hidden">
                <div className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest mb-1">
                  DEWAN PEMBINA
                </div>
                <div className="text-xl font-bold text-white mt-1">
                  {FOUNDATION_INFO.governance.pembina.name}
                </div>
                <div className="text-xs text-amber-400 mt-1 font-medium">
                  {FOUNDATION_INFO.governance.pembina.role}
                </div>
              </div>

              {/* Dewan Pengawas */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0F2342] to-[#081426] text-white border border-amber-400/30 shadow-lg text-center relative overflow-hidden">
                <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-1">
                  DEWAN PENGAWAS
                </div>
                <div className="text-xl font-bold text-white mt-1">
                  {FOUNDATION_INFO.governance.pengawas.name}
                </div>
                <div className="text-xs text-slate-300 mt-1 font-medium">
                  {FOUNDATION_INFO.governance.pengawas.role}
                </div>
              </div>
            </div>

            {/* Connecting Line Indicator */}
            <div className="flex justify-center">
              <div className="w-0.5 h-6 bg-slate-300" />
            </div>

            {/* Badan Pengurus Harian (Eksekutif) */}
            <div>
              <div className="text-center mb-4">
                <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-slate-200">
                  BADAN PENGURUS HARIAN (EKSEKUTIF)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {FOUNDATION_INFO.governance.eksekutif.map((person) => (
                  <div
                    key={person.name}
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(18,25,38,0.04)] text-center hover:border-royal-500/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-full bg-royal-50 text-royal-600 font-mono font-bold text-xs mx-auto flex items-center justify-center mb-3 border border-royal-200">
                        {person.code}
                      </div>
                      <div className="text-sm font-bold text-[#081426]">
                        {person.name}
                      </div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-100 text-xs font-semibold text-slate-500">
                      {person.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
