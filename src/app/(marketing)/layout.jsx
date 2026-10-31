import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/layout/FloatingActions';
import { ModalProvider } from '@/context/ModalContext';

export default function MarketingLayout({ children }) {
  return (
    <ModalProvider>
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingActions />
    </ModalProvider>
  );
}
