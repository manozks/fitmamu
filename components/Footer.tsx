
import React from 'react';
import { Page } from '../types.ts';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-white border-t border-[#E84D94]/10 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 
          className="font-serif text-2xl text-[#E84D94] mb-4 cursor-pointer"
          onClick={() => setCurrentPage(Page.Home)}
        >
          FitMamu
        </h2>
        <p className="text-[#3B3E81]/80 max-w-md mx-auto mb-8">
          Empowering moms to reclaim their confidence, energy, and health through sustainable, low-impact programs.
        </p>
        <div className="flex justify-center gap-6 mb-8">
           <div className="w-10 h-10 rounded-full bg-[#E84D94]/5 flex items-center justify-center text-[#E84D94] cursor-pointer hover:bg-[#E84D94]/10 transition-colors">IG</div>
           <div className="w-10 h-10 rounded-full bg-[#E84D94]/5 flex items-center justify-center text-[#E84D94] cursor-pointer hover:bg-[#E84D94]/10 transition-colors">FB</div>
           <div className="w-10 h-10 rounded-full bg-[#E84D94]/5 flex items-center justify-center text-[#E84D94] cursor-pointer hover:bg-[#E84D94]/10 transition-colors">YT</div>
        </div>
        <p className="text-xs text-[#3B3E81]/60">
          © {new Date().getFullYear()} FitMamu. All rights reserved. 
          <br /> Consult your physician before starting any exercise program.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
