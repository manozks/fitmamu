import React, { useState, useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal.tsx';
import { WHATSAPP_NUMBER, Icons } from '../constants.tsx';

const SalesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const getWhatsAppLink = (pkgName: string) => {
    const text = `Hi Fitness Sarthi, I'm interested in the ${pkgName}. Can you share more details on how to start?`;
    return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;
  };

  const packages = [
    {
      name: "1-Month Starter",
      tagline: "The Fat-Loss Kickstart",
      price: "NPR 4,500",
      originalPrice: "NPR 6,000",
      description: "Ideal for beginners looking to break a plateau and build foundation habits.",
      features: [
        "Basic Personalized Diet Plan",
        "Metabolism Boost Protocol",
        "Foundation Habit Building",
        "Weekly Progress Tracking",
        "Standard Email Support"
      ],
      icon: <Icons.Flame />,
      featured: false,
      color: "bg-white"
    },
    {
      name: "3-Month Transformation",
      tagline: "Sustainable Results",
      price: "NPR 11,500",
      originalPrice: "NPR 18,000",
      description: "Our most popular choice for long-term physiological change and gut health.",
      features: [
        "Advanced Customized Meal Plans",
        "Lifestyle & Mindset Coaching",
        "Gut Health Optimization",
        "Hormone Balance Support",
        "Direct WhatsApp Mentorship",
        "Bi-weekly Consultation"
      ],
      icon: <Icons.Target />,
      featured: true,
      color: "bg-[#DCFCE7]"
    },
    {
      name: "6-Month Complete Wellness",
      tagline: "Total Life Transformation",
      price: "NPR 19,900",
      originalPrice: "NPR 36,000",
      description: "Advanced support for PCOS, Thyroid, Postpartum, and clinical wellness.",
      features: [
        "Full Body Health Restoration",
        "Advanced Detoxification",
        "Cortisol & Stress Management",
        "PCOS/Thyroid Specialized Diet",
        "Postpartum Recovery Plan",
        "Unlimited Expert Access",
        "Lifetime Community Entry"
      ],
      icon: <Icons.Sparkles />,
      featured: false,
      color: "bg-white"
    }
  ];

  const testimonials = [
    {
      quote: "The 3-month transformation completely changed my relationship with food. I lost 8kg sustainably! Silkey Sah's guidance is practical and very easy to follow even with a busy work schedule.",
      author: "Smreeta Shakya",
      role: "Sarthi Member",
      tag: "Sustainable Loss"
    },
    {
      quote: "As someone with PCOS, I never thought I'd lose weight. The 6-month wellness plan was a godsend. It's not just about the scale; it's about how much energy I have now. I feel 10 years younger.",
      author: "Eliza Sitoula",
      role: "Wellness Client",
      tag: "Hormone Health"
    },
    {
      quote: "The personalized diet plan featuring Nepali foods made it so easy to stick to. I didn't have to buy expensive 'superfoods' to see real results in my gut health and waistline.",
      author: "Samu Ghimire",
      role: "Transformation Graduate",
      tag: "Gut Health"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length, isAutoPlaying, isHovered]);

  return (
    <div className="pb-32 bg-[#fdfafb]">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#DCFCE7] to-[#fdfafb] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="inline-block px-4 py-1.5 bg-[#16A34A]/10 text-[#16A34A] rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Expert-Led Weight Management
            </div>
            <h1 className="text-4xl lg:text-7xl font-serif text-[#14532D] leading-tight mb-6">
              Your Journey to a <br />
              <span className="text-[#16A34A] italic text-5xl lg:text-8xl">Healthier You</span>
            </h1>
            <p className="text-xl text-[#374151] max-w-2xl mx-auto leading-relaxed mb-10">
              Science-backed diet plans and holistic coaching tailored to your biology. Choose the path that fits your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <span className="text-[#16A34A]"><Icons.Check /></span>
                <span className="text-xs font-bold uppercase tracking-wider">Metabolism Boost</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#16A34A]"><Icons.Check /></span>
                <span className="text-xs font-bold uppercase tracking-wider">Hormone Sync</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#16A34A]"><Icons.Check /></span>
                <span className="text-xs font-bold uppercase tracking-wider">Gut Healing</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Package Selection */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-serif text-[#14532D]">Personalized Service Packages</h2>
          <div className="w-24 h-1 bg-[#16A34A] mx-auto mt-6 rounded-full" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <ScrollReveal key={i} delay={i * 100} className="h-full">
              <div className={`relative h-full border-2 ${pkg.featured ? 'border-[#16A34A] shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-sm'} ${pkg.color} rounded-[40px] p-8 lg:p-10 flex flex-col transition-all duration-500 hover:-translate-y-2`}>
                {pkg.featured && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#16A34A] text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <div className={`w-14 h-14 rounded-2xl ${pkg.featured ? 'bg-white' : 'bg-[#DCFCE7]'} flex items-center justify-center text-[#16A34A] mb-6 shadow-sm`}>
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-[#14532D] mb-1">{pkg.name}</h3>
                  <p className="text-[#16A34A] text-xs font-bold uppercase tracking-widest mb-4">{pkg.tagline}</p>
                  <p className="text-[#374151]/70 text-sm leading-relaxed mb-6">{pkg.description}</p>
                  
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-[#14532D]">{pkg.price}</span>
                    <span className="text-[#374151]/30 line-through text-lg">{pkg.originalPrice}</span>
                  </div>
                </div>

                <div className="flex-grow space-y-4 mb-10">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 text-[#16A34A] shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-[#374151] font-medium leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={getWhatsAppLink(pkg.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-5 rounded-2xl font-bold text-center transition-all shadow-lg active:scale-[0.98] ${
                    pkg.featured 
                    ? 'bg-[#16A34A] text-white hover:bg-[#14532D]' 
                    : 'bg-white text-[#16A34A] border-2 border-[#16A34A] hover:bg-[#DCFCE7]'
                  }`}
                >
                  Join Package
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <ScrollReveal className="bg-[#14532D] py-24 text-white relative overflow-hidden min-h-[550px] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="Happy Healthy Life" />
        </div>
        
        <div 
          className="max-w-5xl mx-auto px-6 text-center relative z-10 w-full group/carousel cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsAutoPlaying(false)}
        >
          <div className="relative h-[300px] flex flex-col justify-center">
            {testimonials.map((t, i) => (
              <div 
                key={i}
                className={`transition-all duration-1000 absolute inset-0 flex flex-col items-center justify-center
                  ${i === activeTestimonial ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-8 pointer-events-none'}`}
              >
                <p className="text-[#22C55E] font-bold tracking-[0.3em] uppercase mb-6 text-xs">{t.tag}</p>
                <h2 className="text-xl md:text-3xl font-serif mb-8 leading-snug italic max-w-4xl px-4">
                  "{t.quote}"
                </h2>
                <div className="w-16 h-1 bg-[#22C55E] mx-auto mb-6" />
                <p className="text-white font-bold text-lg">— {t.author}</p>
                <p className="text-white/40 text-sm uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-12 relative z-20">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveTestimonial(i);
                  setIsAutoPlaying(false);
                }}
                className={`h-1.5 transition-all duration-500 rounded-full ${i === activeTestimonial ? 'w-10 bg-[#22C55E]' : 'w-3 bg-white/20 hover:bg-white/40'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Transformation Process */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <ScrollReveal className="lg:w-1/2">
              <h2 className="text-3xl lg:text-5xl font-serif text-[#14532D] mb-8 leading-tight">Your Transformation <br /><span className="text-[#16A34A]">Timeline</span></h2>
              <div className="space-y-12 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-[#DCFCE7]">
                {[
                  { title: "Phase 1: Analysis", desc: "In-depth body composition and hormone profile analysis." },
                  { title: "Phase 2: Restoration", desc: "Resetting your metabolism and stabilizing insulin levels." },
                  { title: "Phase 3: Transformation", desc: "Active weight loss through customized meal rotation." },
                  { title: "Phase 4: Mastery", desc: "Transitioning into long-term weight maintenance habits." }
                ].map((step, i) => (
                  <div key={i} className="relative pl-12">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-4 border-[#16A34A] flex items-center justify-center z-10 shadow-sm">
                      <span className="text-[#16A34A] font-bold text-xs">{i+1}</span>
                    </div>
                    <h4 className="font-bold text-[#14532D] text-lg mb-1">{step.title}</h4>
                    <p className="text-[#374151]/70 text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal className="lg:w-1/2 relative" delay={200}>
              <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl border-[12px] border-[#DCFCE7]">
                <img 
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1000" 
                  alt="Healthy Food and Progress" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-xs">
                <p className="text-[#16A34A] font-black text-4xl mb-2">92%</p>
                <p className="text-[#374151] font-bold text-sm uppercase tracking-wider">Success Rate in our 6-Month Wellness Program</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl font-serif text-[#14532D]">Common Questions</h2>
        </ScrollReveal>
        <div className="space-y-4">
          {[
            { q: "Which package is right for me?", a: "If you're just starting, the 1-Month Starter is great. However, for chronic conditions like PCOS or long-term weight goals, we highly recommend the 3-Month or 6-Month plans for physiological stability." },
            { q: "Is the diet plan purely Nepali food?", a: "Yes! We focus on locally available ingredients and traditional cooking styles, modified for optimal nutrition and calorie control." },
            { q: "How often do we interact?", a: "Depending on the plan, interactions range from weekly tracking to unlimited direct access to your coach on WhatsApp." }
          ].map((f, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#DCFCE7]/30 transition-colors"
                >
                  <span className="font-bold text-[#14532D] leading-tight">{f.q}</span>
                  <span className={`text-[#16A34A] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                    <Icons.ChevronDown />
                  </span>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 pt-0 text-[#374151]/70 leading-relaxed border-t border-slate-50 text-sm">
                    {f.a}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Sticky Call to Action */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-100 p-4 lg:p-6 z-40 animate-in slide-in-from-bottom-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="font-bold text-[#14532D]">Fitness Sarthi Personalized Wellness</p>
            <p className="text-xs text-[#374151]/60">Enrollment open for all monthly packages</p>
          </div>
          <a 
            href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow sm:flex-grow-0 bg-[#16A34A] text-white px-8 py-3 lg:py-4 rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#14532D] transition-all shadow-lg"
          >
            <Icons.WhatsApp /> Start My Transformation
          </a>
        </div>
      </div>
    </div>
  );
};

export default SalesPage;