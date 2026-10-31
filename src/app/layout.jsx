import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata = {
  title: 'Yayasan Muda Progresif Bangsa | Muda Bergerak, Bangsa Serentak',
  description: 'Yayasan kepemudaan independen yang mengkatalisasi daya kepemimpinan, kapabilitas ekonomi, dan kesadaran ekologis generasi muda Indonesia.',
  keywords: ['Muda Progresif Bangsa', 'Yayasan Pemuda', 'Akademi Progresif', 'Bekasi', 'Kepemimpinan Muda', 'Inkubator Karya'],
  authors: [{ name: 'Yayasan Muda Progresif Bangsa' }],
  openGraph: {
    title: 'Yayasan Muda Progresif Bangsa | Muda Bergerak, Bangsa Serentak',
    description: 'Mengkatalisasi daya kepemimpinan, kapabilitas sosio-ekonomi, dan kesadaran ekologis pemuda Indonesia.',
    url: 'https://masizull.github.io/mudaprogresifbangsa/',
    siteName: 'Muda Progresif Bangsa',
    locale: 'id_ID',
    type: 'website',
  },
  icons: {
    icon: '/mudaprogresifbangsa/logo/LOGO MPB - WARNA.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body className="bg-brand-slate-bg text-brand-navy antialiased selection:bg-brand-orange selection:text-white font-sans min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
