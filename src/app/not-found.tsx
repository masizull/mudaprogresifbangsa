import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 py-16 bg-[#F4F7FB]">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl text-center space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#2454BE] flex items-center justify-center mx-auto border border-blue-100 shadow-sm">
          <span className="font-mono text-2xl font-black">404</span>
        </div>

        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#FF5500] block mb-1">
            HALAMAN TIDAK DITEMUKAN
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-[#081426] tracking-tight">
            Tautan Tidak Tersedia
          </h1>
          <p className="text-xs sm:text-[13px] text-slate-600 mt-2 leading-relaxed">
            Halaman yang Anda tuju mungkin telah dipindahkan, diubah namanya, atau sedang dalam tahap pemutakhiran kurikulum.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#2454BE] hover:bg-[#1D469E] text-white text-xs font-bold transition-all shadow-md inline-flex items-center justify-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Ke Beranda</span>
          </Link>
          <Link
            href="/program/akademi-progresif"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 transition-all inline-flex items-center justify-center gap-1.5"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Lihat Program</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
