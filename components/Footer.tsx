
import React from 'react';
import { Page } from '../types.ts';
import { Icons, WHATSAPP_NUMBER } from '../constants.tsx';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    program: [
      { label: '6-Week Challenge', page: Page.Sales },
      { label: 'Personalized Quiz', page: Page.Quiz },
      { label: 'Workout Gear', page: Page.Products },
      { label: 'Meal Plans', page: Page.Home },
    ],
    resources: [
      { label: 'Success Stories', page: Page.Home },
      { label: 'BMI Calculator', page: Page.Home },
      { label: 'Health Blog', page: Page.Home },
      { label: 'Support & FAQ', page: Page.Home },
    ]
  };

  return (
    <footer className="bg-white pt-20 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-3 space-y-8">
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => setCurrentPage(Page.Home)}
            >
              <div className="w-10 h-10 bg-[#E84D94] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#E84D94]/20 group-hover:rotate-6 transition-transform">
                 <span className="font-serif text-xl font-bold">F</span>
              </div>
              <span className="font-serif text-2xl font-bold text-[#3B3E81]">FitMamu</span>
            </div>
            
            <p className="text-[#3B3E81]/60 max-w-sm leading-relaxed text-sm md:text-base">
              Empowering mothers to transform their health and regain confidence through sustainable movement, nutrition, and supportive community.
            </p>

            <div className="flex items-center gap-5">
              {[
                { icon: <Icons.WhatsApp />, link: '#' },
                { icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z" />
                  </svg>
                ), link: '#' },
                { icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                ), link: '#' },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  className="text-[#3B3E81]/40 hover:text-[#E84D94] transition-colors duration-300 transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="font-bold text-[#3B3E81] text-sm uppercase tracking-widest">Program</h4>
            <ul className="space-y-4">
              {footerLinks.program.map((link, i) => (
                <li key={i}>
                  <button 
                    onClick={() => setCurrentPage(link.page)}
                    className="text-[#3B3E81]/50 hover:text-[#E84D94] transition-colors text-sm font-medium text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <h4 className="font-bold text-[#3B3E81] text-sm uppercase tracking-widest">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, i) => (
                <li key={i}>
                  <button 
                    onClick={() => setCurrentPage(link.page)}
                    className="text-[#3B3E81]/50 hover:text-[#E84D94] transition-colors text-sm font-medium text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Column */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="font-bold text-[#3B3E81] text-sm uppercase tracking-widest">Location</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="text-[#E84D94] mt-1 shrink-0"><Icons.Location /></span>
                <span className="text-[#3B3E81]/50 text-sm font-medium leading-snug">
                  Labimall, Pulchowk<br />Lalitpur, Nepal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#E84D94] shrink-0"><Icons.Email /></span>
                <a 
                  href="mailto:support@fitmamu.com" 
                  className="text-[#3B3E81]/50 hover:text-[#E84D94] transition-colors text-sm font-medium"
                >
                  support@fitmamu.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#E84D94] shrink-0"><Icons.WhatsApp /></span>
                <a 
                  href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3B3E81]/50 hover:text-[#E84D94] transition-colors text-sm font-medium"
                >
                  +977 {WHATSAPP_NUMBER}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-center items-center">
          <p className="text-[#3B3E81]/40 text-xs font-medium">
            © {currentYear} FitMamu.  All rights reserved.
Consult your physician before starting any exercise program.
          </p>
          
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
