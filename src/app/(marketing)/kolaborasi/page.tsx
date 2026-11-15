"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  X,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { COLLABORATION_TRACKS, WORKFLOW_STEPS } from "@/components/sections/CollaborationPortal";

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
    <main className="min-h-screen bg-slate-50 py-10 sm:py-14 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back to Landing Page Link */}
        <div className="mb-6">
          <Link
            href="/#portal-kerjasama"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0F2342] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#0F2342]">
              Halaman Kolaborasi Strategis
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Pilih kategori dan klik nama program untuk membuka rinciannya.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openModal(`Kemitraan ${activeTrack.name}`)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#F97316] hover:bg-orange-600 active:scale-95 text-white text-xs font-semibold shadow-sm shrink-0 transition-all"
          >
            <span>Ajukan Kemitraan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Simple 4-Category Switcher */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {COLLABORATION_TRACKS.map((t) => {
            const isAct = t.id === activeTrackId;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setActiveTrackId(t.id);
                  setExpandedSchemeId(null);
                }}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                  isAct
                    ? "bg-[#0F2342] text-white border-[#0F2342] shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {t.name}
              </button>
            );
          })}
        </div>

        {/* Program List (Details Hidden by Default, Expand on Click) */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm space-y-2.5">
          <div className="text-xs font-semibold text-slate-400 mb-1">
            Daftar Program {activeTrack.name} (Klik baris untuk membuka detail):
          </div>

          {activeTrack.schemes.map((scheme) => {
            const isExp = expandedSchemeId === scheme.id;
            return (
              <div
                key={scheme.id}
                className="rounded-xl border border-slate-200/90 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() =>
                    setExpandedSchemeId(isExp ? null : scheme.id)
                  }
                  className="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-slate-50/80 transition-colors"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold text-[#0F2342]">
                      {scheme.title}
                    </span>
                    <span className="text-[11px] font-medium text-[#0B72E7] bg-blue-50 px-2 py-0.5 rounded-md">
                      {scheme.pillar}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      isExp ? "rotate-180 text-[#0F2342]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isExp && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-2 border-t border-slate-100 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="space-y-1">
                          <p className="leading-relaxed">{scheme.summary}</p>
                          <p className="text-slate-400 pt-0.5">
                            Target Output: <strong className="text-slate-700">{scheme.outputMetric}</strong> • Durasi: <strong className="text-slate-700">{scheme.duration}</strong>
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => openModal(scheme.title)}
                          className="px-3.5 py-2 rounded-xl bg-[#0F2342] hover:bg-slate-800 text-white text-xs font-semibold shrink-0 transition-colors"
                        >
                          Pilih Program Ini
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Single Clean Accordion for Supporting Info (Hidden by default) */}
        <div className="mt-4 bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm">
          <button
            type="button"
            onClick={() =>
              setExpandedInfoSection(
                expandedInfoSection === "info" ? null : "info"
              )
            }
            className="w-full flex items-center justify-between p-4 text-left text-xs font-bold text-[#0F2342] hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Lihat Benefit Mitra, Alur 5 Tahap &amp; Legalitas Resmi</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-slate-400 transition-transform ${
                expandedInfoSection === "info" ? "rotate-180 text-[#0F2342]" : ""
              }`}
            />
          </button>

          {expandedInfoSection === "info" && (
            <div className="px-4 pb-5 pt-2 border-t border-slate-100 text-xs text-slate-600 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="font-bold text-[#0F2342] mb-1.5">
                    Dokumen &amp; Keluaran Resmi (Deliverables):
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600">
                    {activeTrack.deliverables.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-[#0F2342] mb-1.5">
                    Nilai Tambah &amp; Manfaat Mitra:
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600">
                    {activeTrack.sharedValues.map((v, i) => (
                      <li key={i}>{v}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Alur Tahapan Singkat */}
              <div className="pt-3 border-t border-slate-100">
                <div className="font-bold text-[#0F2342] mb-1.5">
                  Alur Pelaksanaan Kerjasama:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-[11px]">
                  {WORKFLOW_STEPS.map((ws) => (
                    <div key={ws.step} className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="font-mono font-bold text-[#2454BE]">Tahap {ws.step}</div>
                      <div className="font-semibold text-slate-800 leading-tight mt-0.5">{ws.title}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{ws.duration}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legalitas Resmi */}
              <div className="pt-3 border-t border-slate-100 text-slate-500 text-[11px] leading-relaxed">
                <strong>Legalitas Resmi:</strong> SK Kemenkumham{" "}
                <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700">AHU-0031979.AH.01.04.Tahun 2025</code> • NPWP{" "}
                <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700">1000 0000 0842 6981</code> • Rekening Giro Resmi atas nama Yayasan Muda Progresif Bangsa.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Viewport-Centered Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-[#0F2342]">
                Formulir Pengajuan Kerjasama
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
                aria-label="Tutup Formulir"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {isSubmitted ? (
              <div className="py-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <div className="text-sm font-bold text-[#0F2342]">
                  Pengajuan Berhasil Disampaikan!
                </div>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Tim sekretariat kami akan meninjau dan merespons dalam 1x24 jam kerja.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold inline-flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Konfirmasi via WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#0F2342] text-white text-xs font-semibold"
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
                <div className="p-2.5 rounded-xl bg-slate-50 text-xs text-slate-700 border border-slate-200/80">
                  <strong className="text-[#0F2342]">{activeTrack.name}</strong> — {selectedProgram || "Kerjasama Umum"}
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
                    className="px-4 py-2 rounded-xl bg-[#0B72E7] hover:bg-blue-600 text-white text-xs font-semibold shadow-sm transition-colors"
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
