"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Quick Trigger with verified hotline phone number */}
      <a
        href="https://wa.me/6281288882025?text=Halo%20Yayasan%20Muda%20Progresif%20Bangsa,%20saya%20ingin%20bertanya%20seputar%20program"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-200"
        title="Hubungi WhatsApp Resmi Yayasan (+62 812-8888-2025)"
        aria-label="Hubungi WhatsApp Resmi Yayasan"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Back to top button */}
      {showTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-[#081426] hover:bg-[#162F56] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-200 border border-slate-700 cursor-pointer"
          title="Kembali ke atas"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
