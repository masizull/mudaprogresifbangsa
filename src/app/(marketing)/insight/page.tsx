import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react";

export default function InsightPage() {
  const articles = [
    {
      title: "Urgensi Pendidikan Kesetaraan PKBM dalam Memutus Rantai Kemiskinan",
      date: "28 Oktober 2025",
      author: "Tim Riset MPB",
      category: "Kajian Kebijakan",
      excerpt: "Menganalisis peran strategis pendidikan non-formal yang kontekstual dan berorientasi kecakapan hidup modern bagi anak muda keluarga rentan."
    },
    {
      title: "Membangun Ketangguhan Komunitas Pemuda Menghadapi Bencana",
      date: "14 November 2025",
      author: "Relawan Tanggap",
      category: "Aksi Sosial",
      excerpt: "Laporan kesiapsiagaan korps relawan pemuda di wilayah Jabodetabek dan Jawa Barat dalam aksi tanggap darurat dan trauma healing."
    },
    {
      title: "Inkubasi Vokasi Terapan: Jembatan Menuju Kemandirian Finansial Pemuda",
      date: "02 Desember 2025",
      author: "Direktorat Vokasi",
      category: "Vokasi & Usaha",
      excerpt: "Bagaimana integrasi pelatihan keterampilan digital dan sertifikasi kompetensi industri melipatgandakan daya tawar tenaga kerja muda."
    }
  ];

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

        {/* Header */}
        <div>
          <span className="text-[11px] font-mono font-bold text-[#2454BE] uppercase tracking-wider">
            Publikasi & Kabar Gerakan
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-[#081426] mt-0.5">
            Insight, Berita & Kajian Pemikiran
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Artikel ilmiah populer, catatan advokasi kebijakan kepemudaan, dan laporan dokumentasi aksi kemasyarakatan Yayasan Muda Progresif Bangsa.
          </p>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.map((art) => (
            <div
              key={art.title}
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-[#2454BE]">
                  {art.category}
                </span>
                <h3 className="text-sm font-bold text-[#081426] mt-3 mb-2 leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {art.date}
                </span>
                <span className="font-semibold text-[#2454BE] flex items-center gap-0.5">
                  Baca <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
