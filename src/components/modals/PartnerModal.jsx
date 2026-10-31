'use client';

import React, { useState } from 'react';
import { X, CheckCircle, Building, Send } from 'lucide-react';

export default function PartnerModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    institution: '',
    contactPerson: '',
    email: '',
    phone: '',
    type: 'Beasiswa Pembinaan',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-card shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-blue"></span>
            <span className="font-bold text-sm text-brand-navy tracking-tight">
              Kemitraan Strategis & Penyaluran CSR
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                Yayasan Muda Progresif Bangsa membuka kolaborasi penyediaan beasiswa peserta, tenaga mentor ahli, dukungan sarana belajar, maupun program CSR terarah.
              </p>

              <div>
                <label className="block text-xs font-semibold text-brand-navy mb-1.5">Nama Institusi / Perusahaan *</label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input 
                    type="text" 
                    name="institution"
                    required
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="Contoh: PT Bangun Negeri / Yayasan Bakti"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1.5">Narahubung (PIC) *</label>
                  <input 
                    type="text" 
                    name="contactPerson"
                    required
                    value={formData.contactPerson}
                    onChange={handleChange}
                    placeholder="Nama Lengkap"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1.5">WhatsApp PIC *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0812xxxxxxxx"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-navy mb-1.5">Bentuk Dukungan yang Diminati</label>
                <select 
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                >
                  <option value="Beasiswa Pembinaan Peserta">Sponsor Beasiswa Peserta Akademi</option>
                  <option value="Penyediaan Tenaga Ahli / Mentor">Penyediaan Mentor & Pemateri Vokasi</option>
                  <option value="Fasilitas & Ruang Praktik">Fasilitas / Laboratorium Lapangan</option>
                  <option value="Program CSR Kolaboratif">Program CSR Terpadu Multi-Pilar</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-navy mb-1.5">Catatan / Rencana Kerja Sama</label>
                <textarea 
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Ceritakan gambaran singkat visi kemitraan institusi Anda..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                ></textarea>
              </div>

              <div className="pt-3 flex justify-end gap-3">
                <button 
                  type="button" 
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 cursor-pointer"
                >
                  Batal
                </button>
                <button 
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-navy hover:bg-brand-navy-light text-white text-sm font-semibold transition-all shadow-ambient cursor-pointer"
                >
                  <span>Kirimkan Usulan</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Usulan Berhasil Diterima</h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto mb-6">
                Terima kasih, <strong>{formData.institution}</strong>. Tim Kemitraan Strategis MPB akan meninjau dan mengirimkan proposal balasan via WhatsApp/Email dalam 1x24 jam kerja.
              </p>
              <button 
                onClick={() => { setSubmitted(false); onClose(); }}
                className="px-5 py-2.5 rounded-full bg-brand-navy text-white text-xs font-semibold hover:bg-brand-navy-light transition-all cursor-pointer"
              >
                Selesai
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
