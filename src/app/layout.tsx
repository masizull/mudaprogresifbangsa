import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

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

export const viewport: Viewport = {
  themeColor: '#0A1838',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
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
  manifest: '/mudaprogresifbangsa/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'MPB Foundation',
  },
  openGraph: {
    title: 'Yayasan Muda Progresif Bangsa',
    description: 'Dari Pengetahuan, Menjadi Gagasan, Berdampak Pada Aksi.',
    url: 'https://masizull.github.io/mudaprogresifbangsa/',
    siteName: 'Muda Progresif Bangsa Foundation',
    locale: 'id_ID',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/mudaprogresifbangsa/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/mudaprogresifbangsa/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/mudaprogresifbangsa/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
