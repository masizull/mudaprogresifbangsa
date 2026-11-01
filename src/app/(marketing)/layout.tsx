import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/layout/FloatingActions';
import { ModalProvider } from '@/context/ModalContext';
import PageTransitionWrapper from '@/components/layout/PageTransitionWrapper';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalProvider>
      <Navbar />
      <PageTransitionWrapper>
        <main className="flex-1">
          {children}
        </main>
      </PageTransitionWrapper>
      <Footer />
      <FloatingActions />
    </ModalProvider>
  );
}