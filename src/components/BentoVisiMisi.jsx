import React, { useState } from 'react';
import { Target, BookOpen, TrendingUp, Trees, Network, ChevronRight } from 'lucide-react';

export default function BentoVisiMisi() {
  const [activeMisi, setActiveMisi] = useState(null);

  const missions = [
    {
      id: '01',
      title: 'Pendidikan & Literasi Kontekstual',
      focus: 'Akademi Progresif Berjenjang',
      color: 'text-brand-blue',
      badgeBg: 'bg-blue-50',
      icon: BookOpen,
      desc: 'Menyelenggarakan kurikulum alternatif yang menutup jurang antara sistem belajar formal dengan keahlian berpikir kritis, navigasi karier, serta kepemimpinan diri di era kecerdasan buatan.',
      details: 'Mencakup 12 sesi pembinaan intensif, modul refleksi karakter, dan simulasi pemecahan masalah riil komunitas.'
    },
    {
      id: '02',
      title: 'Kemandirian Sosio-Ekonomi',
      focus: 'Koperasi & Wirausaha Pemuda',
      color: 'text-brand-orange',
      badgeBg: 'bg-orange-50',
      icon: TrendingUp,
      desc: 'Membangun ruang inkubasi wirausaha muda dan keterampilan vokasi praktis guna memperkuat resiliensi finansial keluarga prasejahtera di sentra komunitas.',
      details: 'Pemberian hibah modal rintisan mikro, pelatihan pembukuan usaha, dan integrasi dengan rantai pasok lokal.'
    },
    {
      id: '03',
      title: 'Ketahanan Ekologis Berkelanjutan',
      focus: 'Konservasi & Ekonomi Sirkular',
      color: 'text-emerald-600',
      badgeBg: 'bg-emerald-50',
      icon: Trees,
      desc: 'Menggerakkan kesadaran iklim melalui restorasi lingkungan lokal, pengelolaan limbah sirkular, dan advokasi ruang hijau publik berbasis pemuda.',
      details: 'Fokus pada restorasi sempadan sungai, penanaman vegetasi mangrove pesisir, dan bank sampah digital.'
    },
    {
      id: '04',
      title: 'Ekosistem Kemitraan Multipihak',
      focus: 'Sinergi CSR & Filantropi Terarah',
      color: 'text-brand-navy',
      badgeBg: 'bg-slate-200',
      icon: Network,
      desc: 'Menjembatani energi pemuda akar rumput dengan jejaring filantropi, dunia usaha, institusi pendidikan, dan pembuat regulasi demi dampak terukur.',
      details: 'Tata kelola audit terbuka, pelaporan akuntabel berkala, dan forum tahunan kolaborasi pemuda.'
    }
  ];

  return (
    <section id="visi-misi" className="py-24 sm:py-32 bg-brand-slate-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-blue font-mono mb-2 block">
            Arah & Fondasi // 02
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy leading-[1.15]">
            Arsitektur Gagasan Menuju Transformasi Nyata
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Struktur visi dan misi dirancang asimetris untuk membedakan antara landasan filosofis jangka panjang dengan strategi intervensi lapangan.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Item 1: Visi Utama (Featured Large Card) */}
          <div className="md:col-span-7 bg-brand-navy text-white rounded-card p-8 sm:p-10 flex flex-col justify-between shadow-ambient relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-1 bg-brand-orange"></div>
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                VISI STRATEGIS 2030
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-[1.2] mb-6">
                Mewujudkan generasi pemuda berkarakter tangguh, berdaya saing mandiri, dan berani memimpin masa depan bagi kedaulatan bangsa.
              </h3>
              
              <p className="text-slate-300 text-base leading-relaxed max-w-xl">
                Visi ini menempatkan anak muda bukan sebagai pelengkap angka statistik ketenagakerjaan, melainkan subjek berdikari yang berakar pada integritas etis dan empati sosial tinggi.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300">
              <span>PARAMETER: KEPEMIMPINAN BERKELANJUTAN</span>
              <span className="text-brand-orange font-bold">AKUNTABEL & INKLUSIF</span>
            </div>
          </div>

          {/* Bento Item 2: Misi 01 */}
          <div className="md:col-span-5 bg-white rounded-card p-8 border border-subtle shadow-ambient flex flex-col justify-between hover:border-slate-300 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono font-bold text-brand-blue tracking-wider">MISI // 01</span>
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center font-bold text-sm">
                  01
                </span>
              </div>
              <h4 className="text-xl font-bold text-brand-navy tracking-tight mb-3">Pendidikan & Literasi Kontekstual</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Menyelenggarakan kurikulum alternatif yang menutup jurang antara sistem belajar formal dengan keahlian berpikir kritis, navigasi karier, serta kepemimpinan diri di era kecerdasan buatan.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-brand-blue">
              <span>Inisiatif: Akademi Progresif Berjenjang</span>
            </div>
          </div>

          {/* Bento Item 3, 4, 5 */}
          {missions.slice(1).map((misi) => {
            const IconComponent = misi.icon;
            return (
              <div 
                key={misi.id} 
                className="md:col-span-4 bg-white rounded-card p-8 border border-subtle shadow-ambient flex flex-col justify-between hover:border-slate-300 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-xs font-mono font-bold tracking-wider ${misi.color}`}>
                      MISI // {misi.id}
                    </span>
                    <span className={`w-8 h-8 rounded-lg ${misi.badgeBg} ${misi.color} flex items-center justify-center font-bold text-sm`}>
                      {misi.id}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-brand-navy tracking-tight mb-3">{misi.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {misi.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className={misi.color}>Fokus: {misi.focus}</span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
