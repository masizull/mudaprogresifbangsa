'use client';

import React from 'react';
import Link from 'next/link';
import { useModals } from '@/context/ModalContext';

export default function Footer() {
  const { openRegister, openPartner, openCurriculum } = useModals();

  return (
    <footer className="bg-brand-navy text-slate-400 border-t border-slate-800/80 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Col 1 */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="./logo/LOGO MPB - PUTIH.png" 
                  alt="Logo MPB Putih" 
                  className="h-8 w-auto object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <span className="text-lg font-extrabold tracking-tight text-white">
                  Muda Progresif Bangsa
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed max-w-sm mb-6">
                Yayasan nirlaba independen yang mendedikasikan seluruh daya untuk penguatan kapasitas, etos kepemimpinan, dan kemandirian generasi muda Indonesia.
              </p>
            </div>
            <div className="text-xs text-slate-500 font-mono space-y-1">
              <p>SK Kemenkumham RI: Terdaftar Resmi</p>
              <p>Sekretariat: Kota & Kabupaten Bekasi, Jawa Barat, Indonesia</p>
            </div>
          </div>

          {/* Col 2 */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Program Inti
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={openCurriculum} className="hover:text-white transition-colors text-left cursor-pointer">Tunas Progresif (Dasar)</button></li>
              <li><button onClick={openCurriculum} className="hover:text-white transition-colors text-left cursor-pointer">Penggerak Progresif (Lanjutan)</button></li>
              <li><Link href="#pilar-program" className="hover:text-white transition-colors">Inkubator Wirausaha Muda</Link></li>
              <li><Link href="#pilar-program" className="hover:text-white transition-colors">Satgas Restorasi Ekologi</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Tata Kelola
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#manifesto" className="hover:text-white transition-colors">Manifesto Etik</Link></li>
              <li><Link href="#dampak" className="hover:text-white transition-colors">Laporan Kinerja</Link></li>
              <li><Link href="#mitra" className="hover:text-white transition-colors">Jejaring Mitra</Link></li>
              <li><Link href="#visi-misi" className="hover:text-white transition-colors">Struktur Dewan</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Komunikasi
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="mailto:kontak@mudaprogresif.org" className="hover:text-white transition-colors">kontak@mudaprogresif.org</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram Resmi</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn Lembaga</a></li>
              <li><button onClick={openRegister} className="hover:text-white transition-colors text-left cursor-pointer">Kanal WhatsApp</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 Yayasan Muda Progresif Bangsa. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-slate-300 transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Syarat & Ketentuan</Link>
            <Link href="#hero" className="hover:text-slate-300 transition-colors">Kembali ke Atas &uarr;</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
