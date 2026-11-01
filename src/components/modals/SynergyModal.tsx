"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, MessageSquare, Building2, User, Phone, Mail } from "lucide-react";
import { FOUNDATION_INFO } from "@/data/foundation-data";

interface SynergyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export default function SynergyModal({ isOpen, onClose, defaultCategory = "Sektor Swasta / CSR" }: SynergyModalProps) {
  const [formData, setFormData] = useState({
    institution: "",
    picName: "",
    email: "",
    phone: "",
    category: defaultCategory,
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Halo Pengurus Yayasan Muda Progresif Bangsa,\n\nSaya ${formData.picName || "Rekan"} dari ${formData.institution || "Lembaga/Mitra"} ingin mengajukan sinergi kemitraan pada kategori: ${formData.category}.\n\nPesan: ${formData.message || "Mohon informasi lebih lanjut mengenai penjajakan kerja sama."}\n\nTerima kasih.`
    );
    window.open(`https://wa.me/6281288882025?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#081426]/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-white text-[#081426] shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#0F2342] text-white p-6 sm:p-7 flex items-center justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">
              Portal Sinergi Kemitraan
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Formulir Pengajuan Kerjasama
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-[#081426]">
                Pengajuan Berhasil Disampaikan!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Terima kasih atas inisiatif kolaborasi bersama {FOUNDATION_INFO.legalName}. Tim sekretariat kami akan meninjau dan menghubungi Anda dalam 1x24 jam kerja.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Konfirmasi Langsung via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  Tutup Jendela
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Nama Lembaga / Perusahaan *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Contoh: PT Bangun Bangsa"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-royal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Nama Narahubung (PIC) *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={formData.picName}
                      onChange={(e) => setFormData({ ...formData, picName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-royal-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Nomor WhatsApp Aktif *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="08123456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-royal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Email Resmi
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="pic@perusahaan.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-royal-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Kategori Kemitraan
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-royal-500"
                >
                  <option value="Pemerintah & Regulator">Pemerintah & Instansi Negara</option>
                  <option value="Perguruan Tinggi & Riset">Perguruan Tinggi & Lembaga Riset</option>
                  <option value="Sektor Swasta / CSR">Sektor Swasta, CSR & Korporasi</option>
                  <option value="Komunitas & Gerakan Sipil">Komunitas, LSM & Organisasi Pemuda</option>
                  <option value="Donasi & Beasiswa">Filantropi & Donasi Beasiswa</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Gagasan Sinergi / Program yang Diminati
                </label>
                <textarea
                  rows={3}
                  placeholder="Ceritakan rencana kolaborasi, target pilar (Akademi, Vokasi, Care, Tanggap), atau bentuk bantuan yang ingin disinergikan..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-royal-500 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-slate-300 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white text-xs font-bold shadow-cta-orange transition-all duration-200 inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Kirim Usulan Kemitraan
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
