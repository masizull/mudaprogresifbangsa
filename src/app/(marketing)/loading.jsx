import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/20 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-2xl flex items-center gap-3">
        <div className="w-5 h-5 rounded-full border-2 border-[#2454BE] border-t-amber-500 animate-spin" />
        <span className="text-xs font-bold text-slate-800">
          Memuat Halaman Muda Progresif...
        </span>
      </div>
    </div>
  );
}