import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ScrollReveal from '../components/ScrollReveal.tsx';
import ProductCard from '../components/Products/ProductCard.tsx';
import ProductModal from '../components/Products/ProductModal.tsx';
import { PRODUCT_LIST } from '../constants.tsx';
import { Product } from '../types.ts';

const ProductsPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="pb-32 bg-[#fdfafb]">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl lg:text-6xl font-serif text-[#3B3E81] mb-6">Essentials for Your <span className="text-[#E84D94]">Wellness Journey</span></h1>
            <p className="text-xl text-[#3B3E81]/70 max-w-2xl mx-auto leading-relaxed">
              Curated fitness gear and wellness tools designed to help you recover, strengthen, and thrive in motherhood.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCT_LIST.map((product, i) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={i} 
              onOpenModal={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="max-w-5xl mx-auto px-4 mt-16">
        <ScrollReveal className="bg-[#3B3E81] rounded-[50px] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#E84D94] rounded-full blur-[100px] opacity-20" />
          <h2 className="text-3xl font-serif mb-6 relative z-10">Quality You Can Trust</h2>
          <p className="text-white/70 max-w-xl mx-auto relative z-10 leading-relaxed">
            All our products are tested and approved by fitness experts specializing in postpartum health. Safe, durable, and effective gear for every FitMamu.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-10 relative z-10 opacity-60">
             <span className="text-xs uppercase tracking-[0.3em] font-bold">Safe Materials</span>
             <span className="text-xs uppercase tracking-[0.3em] font-bold">Expert Tested</span>
             <span className="text-xs uppercase tracking-[0.3em] font-bold">Fast Delivery</span>
          </div>
        </ScrollReveal>
      </section>

      {/* Modal Overlay rendered via Portal */}
      {selectedProduct && createPortal(
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />,
        document.body
      )}
    </div>
  );
};

export default ProductsPage;