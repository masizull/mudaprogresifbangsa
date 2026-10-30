import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export default function FloatingActions({ onOpenRegister }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Quick Trigger */}
      <a 
        href="https://wa.me/?text=Halo%20Yayasan%20Muda%20Progresif%20Bangsa,%20saya%20ingin%20bertanya%20seputar%20program" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-200"
        title="Hubungi WhatsApp Resmi"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Back to top */}
      {showTop && (
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-brand-navy hover:bg-brand-navy-light text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-200 border border-slate-700"
          title="Kembali ke atas"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
