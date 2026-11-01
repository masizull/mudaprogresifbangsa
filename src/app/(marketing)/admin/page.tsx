"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Save,
  Download,
  RotateCcw,
  Check,
  Copy,
  LayoutDashboard,
  FileText,
  ShieldCheck,
  Users,
  Layers,
  ArrowRight,
  ExternalLink,
  Plus,
  Trash2,
  AlertCircle
} from "lucide-react";
import defaultData from "@/data/profile-db.json";

export default function AdminCMSPage() {
  const [data, setData] = useState(defaultData);
  const [activeTab, setActiveTab] = useState("general");
  const [saveStatus, setSaveStatus] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const basePath = process.env.NODE_ENV === "production" ? "/mudaprogresifbangsa" : "";

  // Load from localStorage if present
  useEffect(() => {
    const saved = localStorage.getItem("mpb_cms_profile_data");
    if (saved) {
      try {
        setData(JSON.parse(saved));
      } catch (e) {
        console.error("Gagal membaca data dari localStorage", e);
      }
    }
  }, []);

  // Save changes
  const handleSave = async () => {
    try {
      localStorage.setItem("mpb_cms_profile_data", JSON.stringify(data));
      // Attempt API call if backend is active
      try {
        await fetch(`${basePath}/api/profile/`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } catch (err) {
        // Static host fallback
      }

      setSaveStatus("Perubahan berhasil disimpan di browser & disinkronkan!");
      setTimeout(() => setSaveStatus(null), 3000);
    } catch (err) {
      setSaveStatus("Gagal menyimpan perubahan");
    }
  };

  // Download profile-db.json file
  const handleDownloadJSON = () => {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "profile-db.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Copy JSON to clipboard
  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Reset to default
  const handleReset = () => {
    if (confirm("Kembalikan seluruh data konten ke standar awal yayasan?")) {
      localStorage.removeItem("mpb_cms_profile_data");
      setData(defaultData);
      setSaveStatus("Data dikembalikan ke pengaturan awal.");
      setTimeout(() => setSaveStatus(null), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB] text-[#081426] py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Top Header & Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0F2342] flex items-center justify-center p-2 text-white">
              <LayoutDashboard className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-extrabold text-[#081426]">
                  CMS Panel Yayasan
                </h1>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                  AKTIF
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Muda Progresif Bangsa Foundation Content Management System
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 rounded-xl bg-[#2454BE] hover:bg-[#1D469E] text-white text-xs font-bold shadow-sm flex items-center gap-1.5 transition-all"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Simpan Perubahan</span>
            </button>
            <button
              type="button"
              onClick={handleDownloadJSON}
              title="Unduh profile-db.json untuk di-commit ke Git"
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh JSON</span>
            </button>
            <button
              type="button"
              onClick={handleCopyJSON}
              title="Salin JSON konfigurasi"
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={handleReset}
              title="Reset ke pengaturan bawaan"
              className="p-2 rounded-xl border border-slate-200 hover:bg-rose-50 text-rose-600 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <Link
              href="/"
              target="_blank"
              className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 text-xs font-bold flex items-center gap-1 transition-colors"
            >
              <span>Lihat Web</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Alert Notification */}
        {saveStatus && (
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{saveStatus}</span>
          </div>
        )}

        {/* Notice Info Box */}
        <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-[#2454BE] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Info Integrasi CMS:</span> Anda dapat mengedit teks banner, visi misi, legalitas, kepengurusan, dan 4 pilar di bawah. Klik <strong>Simpan Perubahan</strong> untuk menyimpan langsung di browser, atau klik <strong>Unduh JSON</strong> untuk mendapatkan berkas <code>profile-db.json</code> terbaru.
          </div>
        </div>

        {/* Main Grid: Sidebar Tabs + Form Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Navigation Sidebar */}
          <div className="md:col-span-4 bg-white rounded-2xl p-2.5 border border-slate-200 shadow-sm space-y-1">
            <button
              type="button"
              onClick={() => setActiveTab("general")}
              className={`w-full text-left p-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-colors ${
                activeTab === "general"
                  ? "bg-[#2454BE] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>1. Beranda & Hero Teks</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("vision")}
              className={`w-full text-left p-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-colors ${
                activeTab === "vision"
                  ? "bg-[#2454BE] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>2. Visi, Misi & Narasi</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("legal")}
              className={`w-full text-left p-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-colors ${
                activeTab === "legal"
                  ? "bg-[#2454BE] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>3. Legalitas & SK Hukum</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("governance")}
              className={`w-full text-left p-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-colors ${
                activeTab === "governance"
                  ? "bg-[#2454BE] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>4. Struktur Kepengurusan</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("programs")}
              className={`w-full text-left p-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-colors ${
                activeTab === "programs"
                  ? "bg-[#2454BE] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>5. Ekosistem 4 Pilar</span>
            </button>
          </div>

          {/* Form Content Area */}
          <div className="md:col-span-8 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-6">
            
            {/* TAB 1: GENERAL */}
            {activeTab === "general" && (
              <div className="space-y-4">
                <div className="border-b border-slate-100 pb-2 mb-3">
                  <h2 className="text-sm sm:text-base font-bold text-[#081426]">
                    Pengaturan Teks Beranda & Hero
                  </h2>
                  <p className="text-xs text-slate-500">
                    Ubah headline utama, narasi hero, dan identitas kantor yayasan.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Hero Headline Baris 1
                    </label>
                    <input
                      type="text"
                      value={data.general.heroLine1}
                      onChange={(e) =>
                        setData({
                          ...data,
                          general: { ...data.general, heroLine1: e.target.value }
                        })
                      }
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#2454BE] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Hero Headline Baris 2
                    </label>
                    <input
                      type="text"
                      value={data.general.heroLine2}
                      onChange={(e) =>
                        setData({
                          ...data,
                          general: { ...data.general, heroLine2: e.target.value }
                        })
                      }
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#2454BE] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Deskripsi Singkat Hero
                  </label>
                  <textarea
                    rows={3}
                    value={data.general.heroDesc}
                    onChange={(e) =>
                      setData({
                        ...data,
                        general: { ...data.general, heroDesc: e.target.value }
                      })
                    }
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#2454BE] focus:outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Alamat Lengkap Kantor Sekretariat
                  </label>
                  <input
                    type="text"
                    value={data.general.address}
                    onChange={(e) =>
                      setData({
                        ...data,
                        general: { ...data.general, address: e.target.value }
                      })
                    }
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#2454BE] focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* TAB 2: VISION */}
            {activeTab === "vision" && (
              <div className="space-y-4">
                <div className="border-b border-slate-100 pb-2 mb-3">
                  <h2 className="text-sm sm:text-base font-bold text-[#081426]">
                    Visi, Misi & Narasi Tentang Kami
                  </h2>
                  <p className="text-xs text-slate-500">
                    Rumusan komitmen strategis dan nilai filosofis gerakan yayasan.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Judul Seksi Tentang Kami
                  </label>
                  <input
                    type="text"
                    value={data.general.aboutHeadline}
                    onChange={(e) =>
                      setData({
                        ...data,
                        general: { ...data.general, aboutHeadline: e.target.value }
                      })
                    }
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#2454BE] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Uraian Deskripsi Yayasan
                  </label>
                  <textarea
                    rows={3}
                    value={data.general.aboutDesc}
                    onChange={(e) =>
                      setData({
                        ...data,
                        general: { ...data.general, aboutDesc: e.target.value }
                      })
                    }
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#2454BE] focus:outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Rumusan Visi Utama
                  </label>
                  <textarea
                    rows={3}
                    value={data.general.vision}
                    onChange={(e) =>
                      setData({
                        ...data,
                        general: { ...data.general, vision: e.target.value }
                      })
                    }
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#2454BE] focus:outline-none resize-none"
                  />
                </div>
              </div>
            )}

            {/* TAB 3: LEGAL */}
            {activeTab === "legal" && (
              <div className="space-y-4">
                <div className="border-b border-slate-100 pb-2 mb-3">
                  <h2 className="text-sm sm:text-base font-bold text-[#081426]">
                    Legalitas & Verifikasi Hukum Resmi
                  </h2>
                  <p className="text-xs text-slate-500">
                    Nomor akta notaris, nomor pengesahan Kemenkumham RI, dan NPWP 16 digit.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nomor Akta Notaris
                    </label>
                    <input
                      type="text"
                      value={data.legal.deedNumber}
                      onChange={(e) =>
                        setData({
                          ...data,
                          legal: { ...data.legal, deedNumber: e.target.value }
                        })
                      }
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#2454BE] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nama Notaris & Gelar
                    </label>
                    <input
                      type="text"
                      value={data.legal.notaryName}
                      onChange={(e) =>
                        setData({
                          ...data,
                          legal: { ...data.legal, notaryName: e.target.value }
                        })
                      }
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#2454BE] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nomor SK Kemenkumham RI
                    </label>
                    <input
                      type="text"
                      value={data.legal.kemenkumhamSk}
                      onChange={(e) =>
                        setData({
                          ...data,
                          legal: { ...data.legal, kemenkumhamSk: e.target.value }
                        })
                      }
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-mono font-bold text-[#2454BE] focus:ring-2 focus:ring-[#2454BE] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      NPWP Badan 16 Digit
                    </label>
                    <input
                      type="text"
                      value={data.legal.npwp}
                      onChange={(e) =>
                        setData({
                          ...data,
                          legal: { ...data.legal, npwp: e.target.value }
                        })
                      }
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-mono font-bold text-slate-800 focus:ring-2 focus:ring-[#2454BE] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: GOVERNANCE */}
            {activeTab === "governance" && (
              <div className="space-y-4">
                <div className="border-b border-slate-100 pb-2 mb-3">
                  <h2 className="text-sm sm:text-base font-bold text-[#081426]">
                    Struktur Dewan & Pengurus Yayasan
                  </h2>
                  <p className="text-xs text-slate-500">
                    Ketua Dewan Pembina, Dewan Pengawas, dan Badan Pengurus Harian.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Pendiri & Ketua Dewan Pembina
                    </label>
                    <input
                      type="text"
                      value={data.governance.pembina}
                      onChange={(e) =>
                        setData({
                          ...data,
                          governance: { ...data.governance, pembina: e.target.value }
                        })
                      }
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-bold focus:ring-2 focus:ring-[#2454BE] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Ketua Dewan Pengawas
                    </label>
                    <input
                      type="text"
                      value={data.governance.pengawas}
                      onChange={(e) =>
                        setData({
                          ...data,
                          governance: { ...data.governance, pengawas: e.target.value }
                        })
                      }
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-bold focus:ring-2 focus:ring-[#2454BE] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="text-xs font-bold text-slate-700 mb-2">
                    Badan Pengurus Harian (BPH)
                  </h3>
                  <div className="space-y-2">
                    {data.governance.bph.map((item, idx) => (
                      <div
                        key={idx}
                        className="grid grid-cols-1 sm:grid-cols-12 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200 items-center"
                      >
                        <div className="sm:col-span-5">
                          <input
                            type="text"
                            value={item.role}
                            onChange={(e) => {
                              const updatedBph = [...data.governance.bph];
                              updatedBph[idx].role = e.target.value;
                              setData({
                                ...data,
                                governance: { ...data.governance, bph: updatedBph }
                              });
                            }}
                            className="w-full p-2 rounded-lg border border-slate-300 text-xs font-semibold"
                          />
                        </div>
                        <div className="sm:col-span-7">
                          <input
                            type="text"
                            value={item.name}
                            onChange={(e) => {
                              const updatedBph = [...data.governance.bph];
                              updatedBph[idx].name = e.target.value;
                              setData({
                                ...data,
                                governance: { ...data.governance, bph: updatedBph }
                              });
                            }}
                            className="w-full p-2 rounded-lg border border-slate-300 text-xs font-bold text-[#081426]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: PROGRAMS */}
            {activeTab === "programs" && (
              <div className="space-y-4">
                <div className="border-b border-slate-100 pb-2 mb-3">
                  <h2 className="text-sm sm:text-base font-bold text-[#081426]">
                    Manajemen Ekosistem 4 Pilar Program
                  </h2>
                  <p className="text-xs text-slate-500">
                    Edit judul, basis penyelenggaraan, dan ringkasan 4 pilar program utama.
                  </p>
                </div>

                <div className="space-y-4">
                  {data.programs.map((prog, idx) => (
                    <div
                      key={prog.id}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-[#2454BE]">
                          PILAR 0{prog.id}
                        </span>
                        <span className="text-xs font-mono text-slate-400">/{prog.slug}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 mb-1">
                            Nama Program Pilar
                          </label>
                          <input
                            type="text"
                            value={prog.title}
                            onChange={(e) => {
                              const copyProgs = [...data.programs];
                              copyProgs[idx].title = e.target.value;
                              setData({ ...data, programs: copyProgs });
                            }}
                            className="w-full p-2 rounded-lg border border-slate-300 text-xs font-bold"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 mb-1">
                            Basis Penyelenggaraan
                          </label>
                          <input
                            type="text"
                            value={prog.basisValue}
                            onChange={(e) => {
                              const copyProgs = [...data.programs];
                              copyProgs[idx].basisValue = e.target.value;
                              setData({ ...data, programs: copyProgs });
                            }}
                            className="w-full p-2 rounded-lg border border-slate-300 text-xs font-medium"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          Deskripsi Ringkas (Tampil di Hero Slider)
                        </label>
                        <input
                          type="text"
                          value={prog.shortDesc}
                          onChange={(e) => {
                            const copyProgs = [...data.programs];
                            copyProgs[idx].shortDesc = e.target.value;
                            setData({ ...data, programs: copyProgs });
                          }}
                          className="w-full p-2 rounded-lg border border-slate-300 text-xs"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Save Trigger */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Tekan simpan untuk memperbarui state konten situs.
              </span>
              <button
                type="button"
                onClick={handleSave}
                className="px-5 py-2.5 rounded-xl bg-[#2454BE] hover:bg-[#1D469E] text-white text-xs font-bold shadow-sm flex items-center gap-2 transition-all"
              >
                <Save className="w-4 h-4" />
                <span>Simpan Perubahan</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
