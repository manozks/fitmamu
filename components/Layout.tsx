
import React from 'react';
import { Page } from '../types.ts';
import { WHATSAPP_NUMBER, WHATSAPP_PREFILLED_TEXT, Icons } from '../constants.tsx';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import MobileBottomNav from './MobileBottomNav.tsx';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, setCurrentPage }) => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PREFILLED_TEXT)}`;

  return (
    <div className="min-h-screen flex flex-col pb-20 md:pb-0">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-grow">
        {children}
      </main>

      <Footer setCurrentPage={setCurrentPage} />

      {/* Mobile Bottom Navigation Bar */}
      <MobileBottomNav currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Desktop Floating WhatsApp Button (Hidden on Mobile as we have the Bottom Nav) */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex whatsapp-float bg-[#E84D94] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <Icons.WhatsApp />
      </a>
    </div>
  );
};

export default Layout;
