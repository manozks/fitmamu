import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal.tsx';
import { WHATSAPP_NUMBER, Icons } from '../../constants.tsx';
import { Product } from '../../types.ts';

interface ProductCardProps {
  product: Product;
  index: number;
  onOpenModal: (product: Product) => void;
  onOpenVideo: (url: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index, onOpenModal, onOpenVideo }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getBuyLink = (productName: string) => {
    const msg = `Hi FitMamu, I'm interested in ordering the ${productName}. Can you tell me more about it?`;
    return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(msg)}`;
  };

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // Prevent looping
    target.src = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800";
  };

  const truncateLength = 100;
  const isLongDescription = product.description.length > truncateLength;
  const displayedDescription = isExpanded || !isLongDescription 
    ? product.description 
    : `${product.description.substring(0, truncateLength)}...`;

  return (
    <ScrollReveal delay={index * 100}>
      <div className="bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-[#e2e2e2] group h-full flex flex-col">
        <div 
          className="relative overflow-hidden h-72 cursor-pointer"
          onClick={() => onOpenModal(product)}
        >
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onError={handleImgError}
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full font-bold text-[#E84D94] shadow-sm">
            {product.price}
          </div>
          
          {/* Video Button Overlay (conditional) */}
          {product.videoUrl && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onOpenVideo(product.videoUrl!);
              }}
              className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-3 rounded-full text-[#E84D94] shadow-lg hover:scale-110 transition-transform z-10 flex items-center justify-center border border-[#E84D94]/10"
              title="Watch Product Video"
            >
              <Icons.Play />
            </button>
          )}

          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
             <span className="bg-white text-[#E84D94] px-6 py-2 rounded-full font-bold shadow-lg scale-90 group-hover:scale-100 transition-transform">Quick View</span>
          </div>
        </div>
        <div className="p-8 flex-grow flex flex-col justify-between">
          <div>
            <h3 
              className="text-2xl font-serif text-[#3B3E81] mb-3 cursor-pointer hover:text-[#E84D94] transition-colors"
              onClick={() => onOpenModal(product)}
            >
              {product.name}
            </h3>
            <div className="text-[#3B3E81]/60 leading-relaxed mb-6">
              {displayedDescription}
              {isLongDescription && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(!isExpanded);
                  }}
                  className="ml-2 text-[#E84D94] font-bold text-sm hover:underline focus:outline-none"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              )}
            </div>
          </div>
          <div className="space-y-3">
            <a 
              href={getBuyLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#E84D94] text-white w-full py-4 rounded-full font-bold shadow-lg shadow-[#E84D94]/10 hover:bg-[#D13B82] transition-all"
            >
              Order via WhatsApp
            </a>
            <div className="flex gap-2">
              <button 
                onClick={() => onOpenModal(product)}
                className="flex-1 py-3 text-[#3B3E81]/40 text-sm font-bold uppercase tracking-widest hover:text-[#E84D94] transition-colors border border-slate-100 rounded-2xl hover:bg-slate-50"
              >
                Details
              </button>
              {product.videoUrl && (
                <button 
                  onClick={() => onOpenVideo(product.videoUrl!)}
                  className="flex-1 py-3 text-[#E84D94] text-sm font-bold uppercase tracking-widest hover:bg-[#E84D94]/5 transition-colors border border-[#E84D94]/20 rounded-2xl flex items-center justify-center gap-2"
                >
                  <Icons.Play /> Video
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ProductCard;