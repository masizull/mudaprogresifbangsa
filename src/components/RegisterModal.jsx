import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, User, Mail, Phone, BookOpen, MapPin } from 'lucide-react';

export default function RegisterModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    level: 'tunas', // tunas or penggerak
    institution: '',
    region: 'Kota Bekasi',
    interest: 'Pendidikan & Kepemimpinan'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1 && (!formData.name || !formData.phone)) {
      alert('Mohon isi nama lengkap dan nomor WhatsApp.');
      return;
    }
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  const getWaUrl = () => {
    const text = encodeURIComponent(
      `Halo Yayasan Muda Progresif Bangsa! Saya ${formData.name} dari ${formData.institution} (${formData.region}) ingin mendaftar program ${formData.level === 'tunas' ? 'Tunas Progresif' : 'Penggerak Progresif'}.`
    );
    return `https://wa.me/?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-card shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange"></span>
            <span className="font-bold text-sm text-brand-navy tracking-tight">
              Pendaftaran Akademi Progresif 2026/2027
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
            <>
              {/* Stepper Indicator */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className={`flex items-center gap-2 text-xs font-semibold ${step >= 1 ? 'text-brand-orange' : 'text-slate-400'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-orange-100 text-brand-orange' : 'bg-slate-100 text-slate-400'}`}>1</span>
                  <span>Data Diri</span>
                </div>
                <div className="w-12 h-px bg-slate-200"></div>
                <div className={`flex items-center gap-2 text-xs font-semibold ${step >= 2 ? 'text-brand-orange' : 'text-slate-400'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-orange-100 text-brand-orange' : 'bg-slate-100 text-slate-400'}`}>2</span>
                  <span>Pilihan Jalur</span>
                </div>
              </div>

              {step === 1 && (
                <form onSubmit={handleNext} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1.5">Nama Lengkap *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Contoh: Muhammad Rayhan"
                        className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1.5">Nomor WhatsApp Aktif *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0812xxxxxxxx"
                        className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1.5">Asal Sekolah / Kampus</label>
                    <div className="relative">
                      <BookOpen className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input 
                        type="text" 
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        placeholder="Contoh: SMAN 1 Bekasi / Universitas"
                        className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button 
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold transition-all shadow-cta-orange"
                    >
                      <span>Lanjutkan</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-2">Pilih Jenjang Pembinaan</label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${formData.level === 'tunas' ? 'border-brand-blue bg-blue-50/50 text-brand-navy' : 'border-slate-200 hover:border-slate-300'}`}>
                        <input 
                          type="radio" 
                          name="level" 
                          value="tunas" 
                          checked={formData.level === 'tunas'}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="font-bold text-xs text-brand-blue mb-1">Tunas Progresif</div>
                        <div className="text-[11px] text-slate-600">Kelas dasar (fokus karakter & kepemimpinan diri)</div>
                      </label>

                      <label className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${formData.level === 'penggerak' ? 'border-brand-orange bg-orange-50/50 text-brand-navy' : 'border-slate-200 hover:border-slate-300'}`}>
                        <input 
                          type="radio" 
                          name="level" 
                          value="penggerak" 
                          checked={formData.level === 'penggerak'}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="font-bold text-xs text-brand-orange mb-1">Penggerak Progresif</div>
                        <div className="text-[11px] text-slate-600">Kelas lanjutan (analisis sosial & kepemimpinan aksi)</div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1.5">Wilayah Domisili</label>
                    <select 
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    >
                      <option value="Kota Bekasi">Kota Bekasi</option>
                      <option value="Kabupaten Bekasi">Kabupaten Bekasi</option>
                      <option value="DKI Jakarta">DKI Jakarta</option>
                      <option value="Depok / Bogor">Depok / Bogor</option>
                      <option value="Lainnya">Lainnya (Nasional)</option>
                    </select>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button 
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-brand-navy"
                    >
                      &larr; Kembali
                    </button>
                    <button 
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold transition-all shadow-cta-orange"
                    >
                      <span>Kirim Pendaftaran</span>
                      <CheckCircle className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Pendaftaran Terkirim!</h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto mb-6">
                Terima kasih, <strong>{formData.name}</strong>. Data Anda telah kami catat untuk kohort {formData.level === 'tunas' ? 'Tunas Progresif' : 'Penggerak Progresif'}. Tim seleksi akan segera menghubungi nomor WhatsApp Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href={getWaUrl()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-all"
                >
                  Konfirmasi via WhatsApp
                </a>
                <button 
                  onClick={handleReset}
                  className="px-4 py-2.5 rounded-full border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-all"
                >
                  Tutup Jendela
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
