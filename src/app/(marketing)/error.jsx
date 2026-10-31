'use client';

import React, { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    console.error('App Router Caught Error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6 bg-brand-slate-bg">
      <div className="max-w-md w-full bg-white p-8 rounded-card border border-slate-200 shadow-ambient text-center">
        <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-brand-navy mb-2">Terjadi Kendala Memuat Halaman</h2>
        <p className="text-xs text-slate-600 mb-6 leading-relaxed">
          Sistem kami mendeteksi sedikit anomali saat memuat antarmuka. Silakan klik tombol di bawah untuk menyegarkan tampilan.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-semibold shadow-cta-orange transition-all cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Muat Ulang Halaman</span>
        </button>
      </div>
    </div>
  );
}
