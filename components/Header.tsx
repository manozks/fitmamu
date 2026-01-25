
import React, { useState } from 'react';
import { Page } from '../types.ts';
import { WHATSAPP_NUMBER, WHATSAPP_PREFILLED_TEXT } from '../constants.tsx';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PREFILLED_TEXT)}`;

  const navItems = [
    { label: 'Home', page: Page.Home },
    { label: 'The Quiz', page: Page.Quiz },
    { label: '6-Week Challenge', page: Page.Sales },
  ];

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-[#E84D94]/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleNavigation(Page.Home)}
          className="text-2xl font-serif text-[#E84D94] font-bold z-50"
        >
          FitMamu
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <button 
              key={item.page}
              onClick={() => setCurrentPage(item.page)} 
              className={`hover:text-[#E84D94] transition-colors ${currentPage === item.page ? 'text-[#E84D94]' : ''}`}
            >
              {item.label}
            </button>
          ))}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E84D94] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#D13B82] transition-all shadow-md hover:shadow-lg"
          >
            Join Challenge
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-[#3B3E81] z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
          {navItems.map((item) => (
            <button 
              key={item.page}
              onClick={() => handleNavigation(item.page)}
              className={`text-2xl font-serif ${
                currentPage === item.page ? 'text-[#E84D94] font-bold' : 'text-[#3B3E81]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E84D94] text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl shadow-[#E84D94]/20"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Challenge
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
