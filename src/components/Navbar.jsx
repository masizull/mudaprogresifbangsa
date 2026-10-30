import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenRegister, onOpenPartner }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
      setScrolled(currentScroll > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-brand-orange z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled 
          ? 'bg-brand-slate-bg/95 backdrop-blur-md border-b border-subtle shadow-ambient' 
          : 'bg-brand-slate-bg border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo & Identity */}
          <a href="#hero" className="flex items-center gap-3.5 group focus:outline-none rounded-lg p-1">
            <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
              <img 
                src="./logo/LOGO MPB - WARNA.png" 
                alt="Logo Muda Progresif Bangsa" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-10 h-10 rounded-lg bg-brand-navy items-center justify-center text-white font-bold text-base tracking-tight shadow-sm">
                <span className="text-brand-orange">M</span>PB
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-brand-navy leading-none group-hover:text-brand-blue transition-colors duration-200">
                Muda Progresif Bangsa
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-500 mt-1">
                Yayasan Kepemudaan
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-slate-600">
            <a href="#manifesto" className="hover:text-brand-navy transition-colors duration-200">Manifesto</a>
            <a href="#visi-misi" className="hover:text-brand-navy transition-colors duration-200">Visi & Misi</a>
            <a href="#pilar-program" className="hover:text-brand-navy transition-colors duration-200">Pilar Program</a>
            <a href="#dampak" className="hover:text-brand-navy transition-colors duration-200">Dampak</a>
            <a href="#faq" className="hover:text-brand-navy transition-colors duration-200">Tanya Jawab</a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={onOpenPartner}
              className="text-[14px] font-semibold text-slate-700 hover:text-brand-blue transition-colors duration-200 px-3 py-2 cursor-pointer"
            >
              Kemitraan & CSR
            </button>
            <button 
              onClick={onOpenRegister}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white px-5 py-2.5 text-[14px] font-semibold shadow-cta-orange transition-all duration-200 ease-in-out hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Gabung Bergerak</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center">
            <button 
              type="button" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-brand-navy hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-subtle bg-white px-4 pt-3 pb-6 space-y-3">
            <a href="#manifesto" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-700 hover:text-brand-orange">Manifesto</a>
            <a href="#visi-misi" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-700 hover:text-brand-orange">Visi & Misi</a>
            <a href="#pilar-program" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-700 hover:text-brand-orange">Pilar Program</a>
            <a href="#dampak" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-700 hover:text-brand-orange">Dampak Nyata</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-700 hover:text-brand-orange">Tanya Jawab</a>
            
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenPartner(); }}
                className="w-full text-center py-2.5 text-base font-semibold text-slate-800 border border-slate-200 rounded-full hover:bg-slate-50"
              >
                Kemitraan & CSR
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenRegister(); }}
                className="w-full text-center py-3 text-base font-semibold bg-brand-orange text-white rounded-full shadow-cta-orange"
              >
                Gabung Bergerak
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
