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
  const whatsappLink = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_PREFILLED_TEXT)}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-grow">
        {children}
      </main>

      <Footer setCurrentPage={setCurrentPage} />

      {/* Mobile Navigation */}
      <MobileBottomNav currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Desktop Floating WhatsApp Button */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex whatsapp-float bg-[#E84D94] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <Icons.WhatsApp />
        <span className="absolute right-full mr-4 bg-white text-[#E84D94] px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-[#E84D94]/10">
          Chat with Us
        </span>
      </a>
    </div>
  );
};

export default Layout;