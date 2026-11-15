"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  GraduationCap,
  Landmark,
  HeartHandshake,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

const PARTNER_CATEGORIES = [
  {
    id: "swasta-csr",
    name: "Swasta & CSR",
    tagline: "ESG, Vokasi & Inkubasi UMKM",
    icon: Building2,
  },
  {
    id: "kampus-akademia",
    name: "Kampus & Akademia",
    tagline: "MBKM, Riset & Pengabdian",
    icon: GraduationCap,
  },
  {
    id: "pemerintah-dinas",
    name: "Pemerintah & Dinas",
    tagline: "Swakelola Tipe III & Daerah",
    icon: Landmark,
  },
  {
    id: "komunitas-filantropi",
    name: "Komunitas & ZISWAF",
    tagline: "Penyaluran & Aksi Kemanusiaan",
    icon: HeartHandshake,
  },
];

export default function CollaborationTeaser() {
  return (
    <section
      id="portal-kerjasama"
      className="py-16 bg-slate-50/70 border-t border-slate-200/70 select-none"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Clean Minimal Heading */}
        <div className="max-w-xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F2342]">
            Sinergi &amp; Kolaborasi Strategis
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Pilih kategori institusi Anda untuk melihat skema program dan
            mengajukan kemitraan di halaman khusus kolaborasi.
          </p>
        </div>

        {/* 4 Clean Cards -> Redirects to /kolaborasi?sektor=... */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PARTNER_CATEGORIES.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.id}
                href={`/kolaborasi?sektor=${item.id}`}
                className="group bg-white rounded-2xl border border-slate-200/90 p-5 hover:border-[#0F2342] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#0F2342] group-hover:bg-[#0F2342] group-hover:text-white flex items-center justify-center transition-colors mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F2342]">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">{item.tagline}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0B72E7] group-hover:text-[#FF5500] transition-colors">
                  <span>Buka Halaman</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Only 2 Clean Action Buttons on Landing Page */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/kolaborasi"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F2342] hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
          >
            <span>Buka Portal Kolaborasi</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/6281389020269?text=Halo%20Tim%20Kemitraan%20Muda%20Progresif%20Bangsa%20Foundation%2C%20saya%20ingin%20berdiskusi%20mengenai%20peluang%20kerjasama."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs sm:text-sm font-semibold transition-all"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Hubungi Tim Kemitraan</span>
          </a>
        </div>
      </div>
    </section>
  );
}
