import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal.tsx';
import { WHATSAPP_NUMBER, WHATSAPP_PREFILLED_TEXT, Icons } from '../constants.tsx';

const SalesPage: React.FC = () => {
  const whatsappLink = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_PREFILLED_TEXT)}`;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    { title: "Daily 15-min Workouts", desc: "Designed for postpartum core safety & metabolic health.", icon: <Icons.Workouts />, img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400" },
    { title: "60 Custom Recipes", desc: "Anti-inflammatory, hormone-balancing nutritious meals.", icon: <Icons.Nutrition />, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400" },
    { title: "Habit Coaching", desc: "Micro-habits for sleep, hydration, and stress management.", icon: <Icons.Habits />, img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400" },
    { title: "WhatsApp Community", desc: "Supportive circle of moms on the same journey.", icon: <Icons.Community />, img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=400" }
  ];

  const testimonials = [
    {
      quote: "Really good and humbly environment i got in this fitness sarthi. They help me to tranform, make me energetic and bring positive vibes inside. Not only physical change but they make me mentally sound and relax. Change i fell after joining fitness sarathi really appreciated. I became able to lose 7 kg within a month. thank you fitness sarathi",
      author: "smreeta shakya",
      role: "Mom of 1",
      tag: "Weight Loss Success"
    },
    {
      quote: "I sincerely want to thank you for helping me on my weight loss journey and supporting me in solving my health problems. Your guidance, encouragement, and care have made such a positive difference in my life. I feel healthier, stronger, and more confident because of you. I truly appreciate all the time, effort, and dedication you put into helping me achieve these changes.”Thank you",
      author: "eliza sitoula",
      role: "Mom of 2",
      tag: "Wellness"
    },
    {
      quote: "Sarthi has been truly amazing at guiding me through the best and healthiest ways to lose weight. I am realy thankfull to sarthi for helping me to feel so much better and get healthy. Strongly recommend",
      author: "Ajmi Shrestha",
      role: "New Mom",
      tag: "Safe Recovery"
    },
    {
      quote: "Fitness Sharathi is very good. They give us a diet schedule by combining the foods we eat daily. By following that schedule, I have lost 4 kg in a week. If we can continue this, it will be very good for us. They also provide services online, now you can reduce your weight and live a healthy life while staying at home.",
      author: "Samu Ghimire",
        role: "Mom of 1",
      tag: "Weight Loss Success"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length, isAutoPlaying, isHovered]);

  const faqs = [
    { q: "Is this safe for C-section recovery?", a: "Yes, our movements are carefully curated for safe core rehabilitation. However, we always recommend consulting your doctor after your 6-week check-up to ensure you are personally ready for low-impact movement." },
    { q: "Do I need any gym equipment?", a: "None at all! All workouts are bodyweight-based and can be done comfortably in your living room, even with a baby nearby. We focus on efficiency with minimal space." },
    { q: "What if I have PCOS/Thyroid issues?", a: "The nutrition plan specifically includes anti-inflammatory foods that help stabilize hormones and regulate metabolism. We focus on nourishing the body rather than restrictive dieting." },
    { q: "How do I get my personalized plan?", a: "Once you complete the checkout via WhatsApp, you'll be paired with a welcome guide who will send over your specific roadmap based on your quiz answers!" }
  ];

  return (
    <div className="pb-32">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#E84D94]/10 to-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="text-left space-y-6">
            <h1 className="text-4xl lg:text-6xl font-serif text-[#3B3E81] leading-tight">Your 6-Week <br /><span className="text-[#E84D94]">FitMamu</span> Program</h1>
            <p className="text-xl text-[#3B3E81]/80 leading-relaxed max-w-xl">
              Everything you need to regain your strength, balance your hormones, and find your spark again—without hours in the gym.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#E84D94]/10 text-[#E84D94] px-6 py-2 rounded-full font-bold">
              <span className="w-2 h-2 rounded-full bg-[#E84D94] animate-pulse" />
              Limited Spots Available for Next Batch
            </div>
          </ScrollReveal>
           <ScrollReveal className="relative" delay={200}>
             <img 
               src="https://manozks.github.io/fitmamu/assets/home/fitmum.jpg" 
               alt="Happy Fit Mom Exercising" 
               className="rounded-[40px] shadow-2xl w-full h-full object-cover"
             />
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-[#E84D94]/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#E84D94]/10 rounded-full flex items-center justify-center text-[#E84D94] font-bold text-xl">4.9</div>
                  <div>
                    <p className="font-bold text-[#3B3E81]">User Rating</p>
                    <p className="text-sm text-[#3B3E81]/60">From 100+ FitMamus</p>
                  </div>
                </div>
             </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Program Cards */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <ScrollReveal>
          <h2 className="text-3xl font-serif text-center mb-12 text-[#3B3E81]">What's Inside the Program</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-white overflow-hidden rounded-[32px] border border-[#E84D94]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group h-full">
                <img src={f.img} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" alt={f.title} />
                <div className="p-8">
                  <div className="mb-4">{f.icon}</div>
                  <h3 className="font-bold text-lg mb-2 text-[#3B3E81]">{f.title}</h3>
                  <p className="text-[#3B3E81]/60 text-sm">{f.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <ScrollReveal className="bg-[#3B3E81] py-24 text-white relative overflow-hidden min-h-[550px] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="Happy Fit Mom" />
        </div>
        
        <div 
          className="max-w-5xl mx-auto px-4 text-center relative z-10 w-full group/carousel cursor-pointer"
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
                <p className="text-[#E84D94] font-bold tracking-[0.3em] uppercase mb-6 text-xs">{t.tag}</p>
                <h2 className="text-xl md:text-2xl font-serif mb-8 leading-snug italic max-w-4xl px-4">
                  "{t.quote}"
                </h2>
                <div className="w-16 h-1 bg-[#E84D94] mx-auto mb-6" />
                <p className="text-white font-bold text-lg">— {t.author}</p>
                <p className="text-white/40 text-sm uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-12 relative z-20">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveTestimonial(i);
                  setIsAutoPlaying(false);
                }}
                className={`h-1.5 transition-all duration-500 rounded-full ${i === activeTestimonial ? 'w-10 bg-[#E84D94]' : 'w-3 bg-white/20 hover:bg-white/40'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          
          {!isAutoPlaying && (
            <div className="mt-6 text-[10px] text-white/30 uppercase tracking-widest animate-pulse">
              Scroll stopped • Click an indicator to navigate
            </div>
          )}
        </div>
      </ScrollReveal>

      {/* Pricing Section */}
      <section className="max-w-xl mx-auto px-4 py-24">
        <ScrollReveal className="bg-[#3B3E81] rounded-[40px] p-8 lg:p-12 text-white text-center relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#E84D94] rounded-full blur-[80px] opacity-40" />
          <h2 className="text-3xl font-serif mb-2">Total Transformation</h2>
          <div className="flex items-center justify-center gap-2 my-8">
            <span className="text-white/40 line-through text-2xl">$199</span>
            <span className="text-5xl font-bold text-[#E84D94]">$79</span>
            <span className="text-[#E84D94] text-sm bg-[#E84D94]/20 px-2 py-1 rounded border border-[#E84D94]/30">Save 60%</span>
          </div>
          <p className="text-white/60 mb-10 leading-relaxed">Join the 6-week challenge today and get instant access to the community, recipes, and workout dashboard.</p>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#E84D94] text-white py-5 rounded-full text-xl font-bold hover:bg-[#D13B82] transition-all shadow-xl shadow-black/20 text-center"
          >
            Pay & Start Today via WhatsApp
          </a>
          <div className="mt-8 flex justify-center gap-6 text-xs text-white/40 uppercase tracking-widest font-bold">
            <span>Money-Back Guarantee</span>
            <span>Secure Access</span>
          </div>
        </ScrollReveal>
      </section>

      {/* FAQs */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <ScrollReveal>
          <h2 className="text-3xl font-serif text-center mb-12 text-[#3B3E81]">Common Questions</h2>
        </ScrollReveal>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-white rounded-2xl border border-[#E84D94]/10 shadow-sm overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#E84D94]/5 transition-colors"
                >
                  <span className="font-bold text-[#3B3E81] text-lg leading-tight">{f.q}</span>
                  <span className={`text-[#E84D94] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                    <Icons.ChevronDown />
                  </span>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-[#3B3E81]/70 leading-relaxed border-t border-[#E84D94]/5">
                    {f.a}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t border-[#E84D94]/10 p-4 lg:p-6 z-40 animate-in slide-in-from-bottom-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="font-bold text-[#3B3E81]">FitMamu 6-Week Challenge</p>
            <p className="text-sm text-[#3B3E81]/60">Next batch starts Monday • 8 slots left</p>
          </div>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow sm:flex-grow-0 bg-[#E84D94] text-white px-8 py-3 lg:py-4 rounded-full text-sm lg:text-base font-bold flex items-center justify-center gap-2 hover:bg-[#D13B82] transition-all shadow-lg shadow-[#E84D94]/10"
          >
            <Icons.WhatsApp /> Start Your Journey Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SalesPage;
