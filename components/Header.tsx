import React, { useState, useEffect } from 'react';
import { Page } from '../types.ts';
import { WHATSAPP_NUMBER, WHATSAPP_PREFILLED_TEXT, Icons } from '../constants.tsx';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappLink = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_PREFILLED_TEXT)}`;

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const navItems = [
    { label: 'Home', page: Page.Home },
    { label: 'The Quiz', page: Page.Quiz },
    { label: 'Transformation', page: Page.Sales },
    { label: 'Products', page: Page.Products },
  ];

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white sticky top-0 z-[100] border-b border-[#16A34A]/10 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleNavigation(Page.Home)}
          className="flex items-center gap-2 z-[120] relative group transition-transform active:scale-95"
        >
          <img 
            src="https://manozks.github.io/fitmamu/assets/logo.png" 
            alt="Fitness Sarthi Logo" 
            className="h-10 w-auto object-contain group-hover:rotate-3 transition-transform duration-300"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <button 
              key={item.page}
              onClick={() => setCurrentPage(item.page)} 
              className={`hover:text-[#16A34A] transition-colors py-2 px-1 relative ${
                currentPage === item.page ? 'text-[#16A34A]' : ''
              }`}
            >
              {item.label}
              {currentPage === item.page && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#16A34A] rounded-full" />
              )}
            </button>
          ))}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#16A34A] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#22C55E] transition-all shadow-md hover:shadow-lg"
          >
            Start Journey
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden p-2 text-[#16A34A] z-[120] relative w-12 h-12 flex items-center justify-center rounded-xl transition-transform active:scale-90"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-6 items-end">
            <span className={`h-0.5 bg-[#16A34A] rounded-full transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
            <span className={`h-0.5 bg-[#16A34A] rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`} />
            <span className={`h-0.5 bg-[#16A34A] rounded-full transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[110] transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
        } md:hidden flex flex-col`}
      >
        <div className="flex-1 overflow-y-auto px-6 pt-24 pb-12">
          <div className="mb-12">
             <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#16A34A] text-white w-full py-5 rounded-[20px] text-lg font-bold shadow-xl shadow-[#16A34A]/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Transformation
              </a>
          </div>

          <div className="space-y-4">
             {navItems.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <button 
                    key={item.page}
                    onClick={() => handleNavigation(item.page)}
                    className={`w-full text-left p-6 rounded-[16px] transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#DCFCE7] text-[#16A34A] font-bold' 
                        : 'bg-slate-50 text-[#14532D] font-medium'
                    }`}
                  >
                    <span className="text-xl font-serif">{item.label}</span>
                  </button>
                );
              })}
          </div>

          <div className="mt-20 text-center">
             <p className="text-[#16A34A] text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Safe • Effective • Holistic</p>
             <p className="mt-4 text-[#14532D]/40 text-[9px] font-medium tracking-widest uppercase">© Fitness Sarthi</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
