"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  GraduationCap,
  Landmark,
  HeartHandshake,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  X,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  FileCheck2,
  BadgePercent,
  Clock,
} from "lucide-react";
import { COLLABORATION_TRACKS, WORKFLOW_STEPS } from "@/components/sections/CollaborationPortal";

const SECTOR_ICONS: Record<string, React.ElementType> = {
  "swasta-csr": Building2,
  "kampus-akademia": GraduationCap,
  "pemerintah-dinas": Landmark,
  "komunitas-filantropi": HeartHandshake,
};

function KolaborasiPageContent() {
  const searchParams = useSearchParams();
  const initialSector = searchParams.get("sektor") || "swasta-csr";

  const [activeTrackId, setActiveTrackId] = useState<string>(initialSector);
  const [expandedSchemeId, setExpandedSchemeId] = useState<string | null>(null);
  const [expandedInfoSection, setExpandedInfoSection] = useState<string | null>(null);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProgram, setSelectedProgram] = useState<string>("");
  const [orgName, setOrgName] = useState("");
  const [picName, setPicName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync initial sector from query param on navigation
  useEffect(() => {
    const sektorFromQuery = searchParams.get("sektor");
    if (sektorFromQuery && COLLABORATION_TRACKS.some((t) => t.id === sektorFromQuery)) {
      setActiveTrackId(sektorFromQuery);
    }
  }, [searchParams]);

  const activeTrack =
    COLLABORATION_TRACKS.find((t) => t.id === activeTrackId) ||
    COLLABORATION_TRACKS[0];

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = isModalOpen ? "hidden" : "";
    }
    return () => {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [isModalOpen]);

  const openModal = (progTitle: string) => {
    setSelectedProgram(progTitle);
    setIsSubmitted(false);
    setIsModalOpen(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Halo Tim Kemitraan Yayasan Muda Progresif Bangsa,\n\nSaya ${picName || "Rekan"} dari ${orgName || "Instansi/Perusahaan"} ingin mengajukan kerja sama untuk program: ${selectedProgram || activeTrack.name}.\n\nMohon info mengenai formulir resmi dan jadwal audiensi. Terima kasih.`
    );
    window.open(`https://wa.me/6281389020269?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-slate-50 py-10 sm:py-14 px-4 sm:px-6 select-none">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Back to Landing Page Link */}
        <div>
          <Link
            href="/#portal-kerjasama"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0F2342] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-mono font-bold text-[#2454BE] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
              <span>PORTAL KERJA SAMA RESMI</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F2342] tracking-tight">
              Halaman Kolaborasi Strategis
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Pilih kategori institusi Anda dan klik baris program untuk meninjau rincian luaran &amp; durasi.
            </p>
          </div>
          
          <button
            type="button"
            onClick={() => openModal(`Kemitraan ${activeTrack.name}`)}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF5500] hover:bg-[#E04B00] active:scale-95 text-white text-xs font-bold shadow-md shadow-orange-500/20 shrink-0 transition-all"
          >
            <span>Ajukan Kemitraan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4-Category Switcher with Icons & Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {COLLABORATION_TRACKS.map((t, idx) => {
            const isAct = t.id === activeTrackId;
            const Icon = SECTOR_ICONS[t.id] || Building2;

            return (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setActiveTrackId(t.id);
                  setExpandedSchemeId(null);
                }}
                className={`py-3 px-3.5 rounded-2xl text-left transition-all border flex items-center gap-2.5 ${
                  isAct
                    ? "bg-[#0A1838] text-white border-transparent shadow-md scale-[1.01]"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                    isAct ? "bg-white/10 text-amber-400" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[9px] font-mono uppercase font-bold tracking-wider opacity-60">
                    TRACK 0{idx + 1}
                  </span>
                  <span className="block text-xs font-bold truncate">
                    {t.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Program List (Details Hidden by Default, Expand on Click) */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 pb-1 border-b border-slate-100">
            <span>Daftar Pilihan Program ({activeTrack.name})</span>
            <span className="text-[11px] font-mono text-slate-400">Klik baris untuk membuka</span>
          </div>

          <div className="space-y-2.5 pt-1">
            {activeTrack.schemes.map((scheme, idx) => {
              const isExp = expandedSchemeId === scheme.id;
              return (
                <div
                  key={scheme.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isExp
                      ? "border-blue-400 bg-blue-50/20 shadow-sm"
                      : "border-slate-200/90 hover:border-slate-300 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedSchemeId(isExp ? null : scheme.id)
                    }
                    className="w-full flex items-center justify-between gap-3 p-4 text-left transition-colors"
                  >
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-600 font-mono text-[11px] font-bold flex items-center justify-center">
                        0{idx + 1}
                      </span>
                      <span className="text-sm font-bold text-[#0F2342]">
                        {scheme.title}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-[#2454BE] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">
                        {scheme.pillar}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        isExp ? "rotate-180 text-[#2454BE]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isExp && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pt-2 border-t border-slate-100 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/60">
                          <div className="space-y-1.5 max-w-xl">
                            <p className="leading-relaxed text-slate-700">{scheme.summary}</p>
                            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
                              <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                                Output: {scheme.outputMetric}
                              </span>
                              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                                Durasi: {scheme.duration}
                              </span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => openModal(scheme.title)}
                            className="px-4 py-2 rounded-xl bg-[#0F2342] hover:bg-[#1D469E] active:scale-95 text-white text-xs font-bold shrink-0 transition-colors inline-flex items-center gap-1.5"
                          >
                            <span>Pilih Program Ini</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Single Clean Accordion for Supporting Info (Benefit Mitra, Alur & Legalitas) */}
        <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm">
          <button
            type="button"
            onClick={() =>
              setExpandedInfoSection(
                expandedInfoSection === "info" ? null : "info"
              )
            }
            className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-xs font-bold text-[#0F2342] hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Lihat Benefit Mitra, Alur 5 Tahap &amp; Legalitas Resmi Yayasan</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-slate-400 transition-transform ${
                expandedInfoSection === "info" ? "rotate-180 text-[#0F2342]" : ""
              }`}
            />
          </button>

          {expandedInfoSection === "info" && (
            <div className="px-5 pb-6 pt-2 border-t border-slate-100 text-xs text-slate-600 space-y-5 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="font-bold text-[#0F2342] flex items-center gap-1.5">
                    <FileCheck2 className="w-4 h-4 text-blue-600" />
                    <span>Dokumen &amp; Keluaran Resmi (Deliverables):</span>
                  </div>
                  <ul className="space-y-1.5 pl-1 text-slate-600">
                    {activeTrack.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="font-bold text-[#0F2342] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Nilai Tambah &amp; Manfaat Mitra (Shared Value):</span>
                  </div>
                  <ul className="space-y-1.5 pl-1 text-slate-600">
                    {activeTrack.sharedValues.map((v, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Alur Tahapan Singkat 5 Langkah */}
              <div className="pt-2">
                <div className="font-bold text-[#0F2342] mb-2 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>Alur Pelaksanaan Kerjasama:</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-[11px]">
                  {WORKFLOW_STEPS.map((ws) => (
                    <div key={ws.step} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                      <div>
                        <div className="font-mono font-bold text-[#2454BE]">Tahap {ws.step}</div>
                        <div className="font-bold text-slate-800 leading-tight mt-0.5">{ws.title}</div>
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 mt-1">{ws.duration}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legalitas Resmi Box */}
              <div className="pt-3 border-t border-slate-100 text-slate-500 text-[11px] leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <strong>Legalitas Resmi:</strong> SK Kemenkumham{" "}
                  <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800 font-mono">AHU-0031979.AH.01.04.Tahun 2025</code> • NPWP{" "}
                  <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800 font-mono">1000 0000 0842 6981</code>
                </div>
                <span className="text-emerald-700 font-semibold shrink-0">Rekening Giro Resmi Terdaftar</span>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Viewport-Centered Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#2454BE] uppercase">PORTAL PENGAJUAN</span>
                <h3 className="text-base font-bold text-[#0F2342]">
                  Formulir Kerjasama Sinergi
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Tutup Formulir"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {isSubmitted ? (
              <div className="py-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <div className="text-base font-bold text-[#0F2342]">
                  Pengajuan Berhasil Disampaikan!
                </div>
                <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                  Terima kasih atas inisiatif kolaborasi. Tim kemitraan sekretariat MPB akan menghubungi Anda dalam 1x24 jam kerja.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Konfirmasi via WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#0F2342] text-white text-xs font-semibold"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsSubmitted(true);
                }}
                className="mt-4 space-y-3"
              >
                <div className="p-3 rounded-xl bg-blue-50/70 text-xs text-slate-700 border border-blue-200/70">
                  <div className="text-[10px] font-mono font-bold text-[#2454BE] uppercase">Program yang Dipilih:</div>
                  <div className="font-bold text-[#0F2342] mt-0.5">
                    {activeTrack.name} — {selectedProgram || "Kemitraan Terbuka"}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Nama Instansi / Perusahaan *
                  </label>
                  <input
                    type="text"
                    required
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    placeholder="Contoh: PT Bangun Bangsa / Universitas X"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Nama Narahubung (PIC) *
                  </label>
                  <input
                    type="text"
                    required
                    value={picName}
                    onChange={(e) => setPicName(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Nomor WhatsApp Aktif *
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="Contoh: 08123456789"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#FF5500] hover:bg-[#E04B00] text-white text-xs font-bold shadow-md shadow-orange-500/20 transition-all"
                  >
                    Kirim Pengajuan
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default function KolaborasiPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-slate-400">Memuat halaman kolaborasi...</div>}>
      <KolaborasiPageContent />
    </Suspense>
  );
}
