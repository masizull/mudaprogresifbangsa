import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CollaborationPortal from "@/components/sections/CollaborationPortal";

export default function KolaborasiPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#2454BE] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>

      <CollaborationPortal />
    </div>
  );
}
