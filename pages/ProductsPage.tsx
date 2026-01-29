
import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import ScrollReveal from '../components/ScrollReveal.tsx';
import ProductCard from '../components/Products/ProductCard.tsx';
import ProductModal from '../components/Products/ProductModal.tsx';
import { VideoModal } from '../components/VideoModal.tsx';
import { PRODUCT_LIST } from '../constants.tsx';
import { Product } from '../types.ts';

const ProductsPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(PRODUCT_LIST.map(p => p.category))];
    return cats;
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return PRODUCT_LIST;
    return PRODUCT_LIST.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pb-32 bg-[#fdfafb]">
      {/* Hero Section */}
      <section className="pt-20 pb-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl lg:text-6xl font-serif text-[#282038] mb-6">
              Essentials for Your <span className="text-[#E84D94]">Postpartum Journey</span>
            </h1>
            <p className="text-xl text-[#282038]/70 max-w-2xl mx-auto leading-relaxed">
              Curated fitness gear, wellness tools, and nutritional support designed to help you recover, strengthen, and thrive.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Tabs - Refined for Horizontal Scroll */}
      <section className="sticky top-[64px] z-50 bg-[#fdfafb]/90 backdrop-blur-md py-4 mb-8 border-b border-[#E84D94]/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-4 pt-2 flex-nowrap  -mx-4 px-4 md:mx-0 md:px-0 justify-start md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform active:scale-95 flex-shrink-0 ${
                  activeCategory === cat
                    ? 'bg-[#E84D94] text-white shadow-lg shadow-[#E84D94]/30 scale-105'
                    : 'bg-white text-[#282038]/60 border border-[#e2e2e2] hover:border-[#E84D94]/30 hover:text-[#E84D94]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 py-4 min-h-[400px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {filteredProducts.map((product, i) => (
            <div 
              key={product.id} 
              className="flex animate-in fade-in slide-in-from-bottom-4 duration-500" 
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <ProductCard 
                product={product} 
                index={i} 
                onOpenModal={(p) => setSelectedProduct(p)}
                onOpenVideo={(url) => setActiveVideoUrl(url)}
              />
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-[#282038]/40 font-serif">No products found in this category.</p>
          </div>
        )}
      </section>

      {/* Trust Banner */}
      <section className="max-w-5xl mx-auto px-4 mt-16">
        <ScrollReveal className="bg-[#282038] rounded-[50px] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#E84D94] rounded-full blur-[100px] opacity-20" />
          <div className="relative z-10">
            <h2 className="text-3xl font-serif mb-6">Quality You Can Trust</h2>
            <p className="text-white/70 max-w-xl mx-auto leading-relaxed mb-10">
              All our products are tested and approved by fitness experts specializing in postpartum health. Safe, durable, and effective gear for every FitMamu.
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <span className="text-xs uppercase tracking-[0.3em] font-bold">Safe Materials</span>
              <span className="text-xs uppercase tracking-[0.3em] font-bold">Expert Tested</span>
              <span className="text-xs uppercase tracking-[0.3em] font-bold">Fast Delivery</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Modal Overlay rendered via Portal */}
      {selectedProduct && createPortal(
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onOpenVideo={(url) => {
            setSelectedProduct(null);
            setActiveVideoUrl(url);
          }}
        />,
        document.body
      )}

      {/* Video Modal rendered via Portal */}
      {activeVideoUrl && createPortal(
        <VideoModal 
          videoUrl={activeVideoUrl} 
          onClose={() => setActiveVideoUrl(null)} 
        />,
        document.body
      )}
    </div>
  );
};

export default ProductsPage;
