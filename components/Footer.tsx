
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
    const socialIcons = [
    { icon: <Icons.Instagram />, link: 'https://www.instagram.com/fitness_sarthi/' },
    { icon: <Icons.TikTok />, link: 'https://www.tiktok.com/@fitness_sarthi' },
    { icon: <Icons.Facebook />, link: 'https://www.facebook.com/fitness.sarthi/' },
    { icon: <Icons.YouTube />, link: 'https://www.youtube.com/@fitness_sarthi' }
  ];

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
              {socialIcons.map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank"
                  rel="noopener noreferrer"
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
