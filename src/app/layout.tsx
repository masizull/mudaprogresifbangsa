import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { FOUNDATION_INFO } from '@/data/foundation-data';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Yayasan Muda Progresif Bangsa | Dari Pengetahuan Menjadi Gagasan Berdampak Pada Aksi',
  description: 'Lembaga nirlaba independen penggerak pendidikan non-formal (PKBM), riset kebijakan berbasis bukti, vokasi kemandirian, dan jaring sosial kepemudaan Indonesia.',
  keywords: [
    'Muda Progresif Bangsa',
    'Yayasan Muda Progresif Bangsa',
    'Akademi Progresif',
    'Vokasi Progresif',
    'Progresif Care',
    'Tanggap Progresif',
    'PKBM Bekasi',
    'Riset Kepemudaan'
  ],
  authors: [{ name: 'Yayasan Muda Progresif Bangsa' }],
  openGraph: {
    title: 'Yayasan Muda Progresif Bangsa',
    description: 'Dari Pengetahuan, Menjadi Gagasan, Berdampak Pada Aksi.',
    url: 'https://masizull.github.io/mudaprogresifbangsa/',
    siteName: 'Muda Progresif Bangsa Foundation',
    locale: 'id_ID',
    type: 'website',
  },
  icons: {
    icon: '/mudaprogresifbangsa/logo/LOGO MPB - WARNA.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`scroll-smooth ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0A1838] text-[#081426] antialiased selection:bg-[#FF5500] selection:text-white font-sans min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
