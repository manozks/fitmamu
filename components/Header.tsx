
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
    { label: '6-Week Challenge', page: Page.Sales },
    { label: 'Products', page: Page.Products },
  ];

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white sticky top-0 z-[100] border-b border-[#E84D94]/10 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleNavigation(Page.Home)}
          className="flex items-center gap-2 z-[120] relative group transition-transform active:scale-95"
        >
          <img 
            src="https://manozks.github.io/fitmamu/assets/logo.png" 
            alt="Fitness Sarthi Logo" 
            className="h-[10] w-auto object-contain group-hover:rotate-3 transition-transform duration-300"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <button 
              key={item.page}
              onClick={() => setCurrentPage(item.page)} 
              className={`hover:text-[#E84D94] transition-colors py-2 px-1 relative ${
                currentPage === item.page ? 'text-[#E84D94]' : ''
              }`}
            >
              {item.label}
              {currentPage === item.page && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E84D94] rounded-full" />
              )}
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

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden p-2 text-[#E84D94] z-[120] relative w-12 h-12 flex items-center justify-center rounded-xl transition-transform active:scale-90"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-6 items-end">
            <span className={`h-0.5 bg-[#E84D94] rounded-full transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
            <span className={`h-0.5 bg-[#E84D94] rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`} />
            <span className={`h-0.5 bg-[#E84D94] rounded-full transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
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
          {/* Top Join Challenge in Menu */}
          <div className="mb-12">
             <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#E84D94] text-white w-full py-5 rounded-[20px] text-lg font-bold shadow-xl shadow-[#E84D94]/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Join 6-Week Challenge
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
                        ? 'bg-[#E84D94]/10 text-[#E84D94] font-bold' 
                        : 'bg-slate-50 text-[#282038] font-medium'
                    }`}
                  >
                    <span className="text-xl font-serif">{item.label}</span>
                  </button>
                );
              })}
          </div>

          {/* Bottom Branding Section */}
          <div className="mt-20 text-center">
             <p className="text-[#E84D94] text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Safe • Effective • Postpartum</p>
             <p className="mt-4 text-[#282038]/40 text-[9px] font-medium tracking-widest uppercase">© FitMamu</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
