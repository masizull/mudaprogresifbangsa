import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, Copy, MapPin, Mail, Phone, ShieldCheck } from "lucide-react";
import { FOUNDATION_INFO, VISION_MISSION_DATA, VALUES_DATA } from "@/data/foundation-data";
import { LegalDocuments, LeadershipStructure } from "@/components/sections/GovernanceLegal";

export function generateStaticParams() {
  return [
    { tab: "profil" },
    { tab: "visi-misi" },
    { tab: "legalitas" },
    { tab: "pengurus" },
    { tab: "sekretariat" },
  ];
}

export default function TentangKamiTabPage({ params }: { params: { tab: string } }) {
  const { tab } = params;

  return (
    <div className="py-10 sm:py-12 bg-[#F4F7FB] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#2454BE] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>

        {/* Tab Navigation Pill Bar */}
        <div className="flex flex-wrap gap-2 bg-white p-2 rounded-xl border border-slate-200 shadow-sm text-xs font-semibold">
          <Link
            href="/tentang-kami/profil"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              tab === "profil" ? "bg-[#2454BE] text-white" : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            Profil Yayasan
          </Link>
          <Link
            href="/tentang-kami/visi-misi"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              tab === "visi-misi" ? "bg-[#2454BE] text-white" : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            Visi, Misi & Nilai
          </Link>
          <Link
            href="/tentang-kami/legalitas"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              tab === "legalitas" ? "bg-[#2454BE] text-white" : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            Legalitas Resmi
          </Link>
          <Link
            href="/tentang-kami/pengurus"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              tab === "pengurus" ? "bg-[#2454BE] text-white" : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            Dewan & Pengurus
          </Link>
          <Link
            href="/tentang-kami/sekretariat"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              tab === "sekretariat" ? "bg-[#2454BE] text-white" : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            Kantor Sekretariat
          </Link>
        </div>

        {/* Dynamic Content based on Tab */}
        {tab === "profil" && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <span className="text-[11px] font-mono font-bold text-[#2454BE] uppercase">Profil Lembaga</span>
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#081426]">
              {FOUNDATION_INFO.legalName}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Yayasan Muda Progresif Bangsa (Muda Progresif Bangsa Foundation) didirikan pada tahun 2025 sebagai ikhtiar kolektif generasi muda Indonesia untuk mengkatalisasi pendidikan berkualitas, riset kebijakan berbasis bukti (evidence-based), dan aksi kemanusiaan berkelanjutan.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 italic">
              “{FOUNDATION_INFO.tagline}”
            </div>
            <div className="pt-2 text-xs text-slate-600 space-y-1">
              <div><strong>Tahun Pendirian:</strong> {FOUNDATION_INFO.established}</div>
              <div><strong>Alamat Sekretariat:</strong> {FOUNDATION_INFO.address}</div>
            </div>
          </div>
        )}

        {tab === "visi-misi" && (
          <div className="space-y-6">
            <div className="bg-[#0F2342] text-white rounded-2xl p-6 sm:p-8 border border-white/10 shadow-md">
              <span className="text-[11px] font-mono font-bold text-sky-400 uppercase">Visi Utama</span>
              <h2 className="text-lg sm:text-xl font-bold mt-1 leading-snug">
                “{VISION_MISSION_DATA.vision}”
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VISION_MISSION_DATA.missions.map((m) => (
                <div key={m.number} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-[10px] font-mono font-bold text-[#2454BE] uppercase mb-1">
                    MISI {m.number}
                  </div>
                  <h3 className="text-sm font-bold text-[#081426] mb-1">{m.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "legalitas" && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <LegalDocuments showHeader={true} />
          </div>
        )}

        {tab === "pengurus" && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <LeadershipStructure showHeader={true} />
          </div>
        )}

        {tab === "sekretariat" && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <span className="text-[11px] font-mono font-bold text-[#2454BE] uppercase">Kontak & Lokasi</span>
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#081426]">
              Kantor Sekretariat Yayasan
            </h1>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{FOUNDATION_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                <span>{FOUNDATION_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>+62 812-8888-2025 (Hotline WhatsApp)</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
