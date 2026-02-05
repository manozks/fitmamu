import React, { useEffect, useState } from 'react';
import { WHATSAPP_NUMBER, Icons } from '../../constants.tsx';
import { Product } from '../../types.ts';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onOpenVideo: (url: string) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onOpenVideo }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    // Prevent background scrolling when modal is open
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const getBuyLink = (productName: string) => {
    const msg = `Hi Fitness Sarthi, I'm interested in ordering the ${productName}. Can you tell me more about it?`;
    return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(msg)}`;
  };

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800";
  };

  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center p-4 sm:p-6 md:p-10 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#14532D]/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div 
        className="bg-white w-full max-w-5xl rounded-[32px] md:rounded-[48px] shadow-2xl overflow-hidden relative z-[10000] flex flex-col md:flex-row max-h-[90vh] animate-in zoom-in-95 duration-300"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-[10100] w-10 h-10 bg-white shadow-xl rounded-full flex items-center justify-center text-[#14532D] hover:text-[#16A34A] transition-all transform hover:rotate-90 active:scale-90"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left Column: Image & Gallery */}
        <div className="w-full md:w-1/2 flex flex-col bg-[#f8f9fa] border-r border-slate-100 min-h-0 overflow-hidden">
          {/* Main Image View */}
          <div className="relative flex-1 min-h-[250px] md:min-h-0 overflow-hidden bg-white flex items-center justify-center group/main">
            <img 
              src={product.images[activeImageIndex]} 
              alt={product.name} 
              className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
              key={activeImageIndex}
              onError={handleImgError}
            />
            {product.videoUrl && (
              <button 
                onClick={() => onOpenVideo(product.videoUrl!)}
                className="absolute inset-0 bg-black/10 opacity-0 group-hover/main:opacity-100 transition-opacity flex items-center justify-center group/play"
              >
                <div className="w-20 h-20 bg-[#16A34A] rounded-full flex items-center justify-center text-white shadow-2xl scale-90 group-hover/play:scale-100 transition-transform">
                   <Icons.Play />
                </div>
              </button>
            )}
          </div>

          {/* Gallery Thumbnails */}
          <div className="p-4 md:p-8 bg-white border-t border-slate-100 flex-shrink-0">
             <div className="flex gap-3 md:gap-4 overflow-x py-2 scrollbar-hide">
                {product.images.map((img, idx) => (
                   <button 
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-14 h-14 md:w-20 md:h-20 flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden border-2 transition-all transform ${
                        activeImageIndex === idx 
                        ? 'border-[#16A34A] scale-105 shadow-lg shadow-[#16A34A]/20 z-10' 
                        : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                   >
                      <img 
                        src={img} 
                        alt={`${product.name} view ${idx + 1}`} 
                        className="w-full h-full object-cover"
                        onError={handleImgError}
                      />
                   </button>
                ))}
             </div>
             <div className="mt-3 md:mt-4 flex items-center justify-between">
               <p className="text-[8px] md:text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em]">
                  Item View: {activeImageIndex + 1} / {product.images.length}
               </p>
               <div className="flex gap-1">
                 {product.images.map((_, i) => (
                   <div key={i} className={`h-1 rounded-full transition-all ${i === activeImageIndex ? 'w-4 bg-[#16A34A]' : 'w-1 bg-slate-200'}`} />
                 ))}
               </div>
             </div>
          </div>
        </div>
        
        {/* Right Column: Details - Scrolling enabled */}
        <div className="w-full md:w-1/2 bg-white flex flex-col min-h-0">
          <div className="flex-1 overflow-y-auto p-6 md:p-12">
            <div className="mb-6">
              <span className="text-[#16A34A] font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">Product Detail</span>
              <h2 className="text-2xl md:text-3xl font-serif text-[#14532D] mb-2 leading-tight">{product.name}</h2>
              <div className="flex items-baseline gap-3 mt-2">
                <p className="text-2xl md:text-3xl font-bold text-[#16A34A]">{product.price}</p>
                {product.originalPrice && (
                  <p className="text-lg md:text-xl text-[#374151]/30 line-through font-medium">
                    {product.originalPrice}
                  </p>
                )}
              </div>
            </div>

            
            
            <div className="mb-8">
              <h4 className="font-bold text-[#374151]/40 mb-3 uppercase tracking-widest text-[10px]">Description</h4>
              <p className="text-[#374151]/80 leading-relaxed text-sm md:text-base">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
               <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-[9px] uppercase font-bold text-slate-400 mb-1 tracking-wider">Availability</p>
                  <p className="font-bold text-emerald-500 text-sm">Ready to Ship</p>
               </div>
               <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-[9px] uppercase font-bold text-slate-400 mb-1 tracking-wider">Estimated Delivery</p>
                  <p className="font-bold text-[#14532D] text-sm">2-4 Business Days</p>
               </div>
            </div>

            {/* Buttons positioned at the end of content but inside scrollable area */}
            <div className="pt-6 border-t border-slate-100 space-y-4">
              {product.videoUrl && (
                <button 
                  onClick={() => onOpenVideo(product.videoUrl!)}
                  className="flex items-center justify-center gap-3 bg-white text-[#16A34A] border-2 border-[#16A34A] w-full py-4 rounded-full font-bold hover:bg-[#DCFCE7] transition-all shadow-sm"
                >
                  <Icons.Play /> Watch Product Video
                </button>
              )}
              
              <a 
                href={getBuyLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#16A34A] text-white w-full py-4 md:py-5 rounded-full font-bold shadow-xl shadow-[#16A34A]/20 hover:bg-[#22C55E] transition-all transform active:scale-[0.98]"
              >
                <Icons.WhatsApp /> Order via WhatsApp
              </a>
              
              <p className="text-center mt-5 text-[#374151]/30 text-[9px] font-bold uppercase tracking-[0.3em]">
                Includes Professional Guidance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;