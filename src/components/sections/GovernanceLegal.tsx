"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Copy, Check, FileText, Landmark } from "lucide-react";
import { FOUNDATION_INFO } from "@/data/foundation-data";

export function LegalDocuments({ showHeader = true }: { showHeader?: boolean }) {
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
      tag: "Kepatuhan Pajak"
    }
  ];

  return (
    <div className="space-y-6">
      {showHeader && (
        <div>
          <div className="text-[11px] font-mono font-bold tracking-widest text-[#2454BE] uppercase mb-1">
            Transparansi & Akuntabilitas Hukum
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#081426]">
            Tata Kelola Organisasi & Legalitas Resmi
          </h2>
          <p className="mt-1 text-slate-600 text-xs sm:text-sm max-w-2xl">
            Yayasan Muda Progresif Bangsa terdaftar resmi secara hukum di Kementerian Hukum dan HAM Republik Indonesia dengan struktur kepengurusan yang akuntabel.
          </p>
        </div>
      )}

      {/* 3 Legalitas Cards with Copy */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs">
          <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Dokumen Verifikasi Hukum
          </span>
          <span className="text-emerald-700 font-semibold flex items-center gap-1 text-[11px]">
            <Check className="w-3.5 h-3.5" /> Terverifikasi Sah
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {legalItems.map((item) => {
            const Icon = item.icon;
            const isCopied = copiedKey === item.id;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-xl border p-4 shadow-sm transition-all duration-150 flex flex-col justify-between ${
                  isCopied ? "border-emerald-500 ring-1 ring-emerald-500/20" : "border-slate-200"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0F2342] text-sky-400 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-[#081426] mb-1">
                    {item.title}
                  </h4>

                  {/* Nomor Kode Legalitas (JetBrains Mono) */}
                  <div className="my-2.5 p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#2454BE] select-all truncate">
                      {item.number}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(item.id, item.copyText)}
                      className="ml-2 p-1 rounded hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
                      title="Salin nomor"
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <div className="text-[11px] text-slate-500 space-y-0.5">
                    <div><span className="font-medium text-slate-600">Penerbit:</span> {item.authority}</div>
                    <div><span className="font-medium text-slate-600">Catatan:</span> {item.extra}</div>
                  </div>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-mono">{item.date}</span>
                  <button
                    type="button"
                    onClick={() => handleCopy(item.id, item.copyText)}
                    className="font-semibold text-[#2454BE] hover:underline"
                  >
                    {isCopied ? "Tersalin!" : "Salin Kode"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* NPWP Card Scan / Visual Verification */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="relative w-16 h-10 rounded overflow-hidden border border-slate-200 shrink-0">
              <Image
                src={FOUNDATION_INFO.legal.npwpCardImage}
                alt="Kartu NPWP"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-xs font-bold text-[#081426] flex items-center gap-2">
                <span>Kartu Pokok Wajib Pajak (NPWP 16 Digit)</span>
                <span className="px-1.5 py-0.2 rounded text-[9px] bg-emerald-50 text-emerald-700 font-mono border border-emerald-200">VALID</span>
              </div>
              <div className="font-mono text-xs text-slate-500 mt-0.5">
                Nomor: {FOUNDATION_INFO.legal.npwp} (KPP Pratama Bekasi Utara)
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleCopy("npwp-btn", FOUNDATION_INFO.legal.npwp)}
            className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors shrink-0"
          >
            {copiedKey === "npwp-btn" ? "Tersalin!" : "Salin NPWP"}
          </button>
        </div>
      </div>
    </div>
  );
}

export function LeadershipStructure({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <div className="space-y-6">
      {showHeader && (
        <div>
          <div className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-400">
            Hierarki Kepemimpinan SK Menkumham RI
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[#081426]">
            Dewan Pembina, Pengawas & Badan Pengurus Harian
          </h3>
        </div>
      )}

      <div className="space-y-4">
        {/* Dewan Pembina & Pengawas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#0F2342] text-white border border-sky-400/20">
            <div className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-wider">
              DEWAN PEMBINA
            </div>
            <div className="text-base font-bold text-white mt-1">
              {FOUNDATION_INFO.governance.pembina.name}
            </div>
            <div className="text-xs text-amber-400 font-medium">
              {FOUNDATION_INFO.governance.pembina.role}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0F2342] text-white border border-amber-400/20">
            <div className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">
              DEWAN PENGAWAS
            </div>
            <div className="text-base font-bold text-white mt-1">
              {FOUNDATION_INFO.governance.pengawas.name}
            </div>
            <div className="text-xs text-slate-300 font-medium">
              {FOUNDATION_INFO.governance.pengawas.role}
            </div>
          </div>
        </div>

        {/* Badan Pengurus Harian */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {FOUNDATION_INFO.governance.eksekutif.map((person) => (
            <div
              key={person.name}
              className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-center flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#2454BE] font-mono font-bold text-xs mx-auto flex items-center justify-center mb-2 border border-blue-100">
                  {person.code}
                </div>
                <div className="text-xs font-bold text-[#081426] leading-tight">
                  {person.name}
                </div>
              </div>
              <div className="mt-2 pt-1.5 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                {person.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function GovernanceLegal() {
  return (
    <section id="struktur-legalitas" className="py-10 sm:py-12 bg-[#F4F7FB] text-[#081426]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <LegalDocuments />
        <LeadershipStructure />
      </div>
    </section>
  );
}
