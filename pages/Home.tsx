
import React from 'react';
import Hero from '../components/Home/Hero.tsx';
import BMICalculator from '../components/Home/BMICalculator.tsx';
import ScrollReveal from '../components/ScrollReveal.tsx';
import { Page } from '../types.ts';
import { WHATSAPP_NUMBER, WHATSAPP_PREFILLED_TEXT, Icons } from '../constants.tsx';

interface HomeProps {
  setCurrentPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const whatsappLink = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_PREFILLED_TEXT)}`;

  const problems = [
    { title: "Heaviness", desc: "Feeling heavy after pregnancy", icon: <Icons.Heaviness /> },
    { title: "Hormones", desc: "Struggling with PCOS or Thyroid", icon: <Icons.Hormone /> },
    { title: "Bloating", desc: "Persistent bloating & digestive issues", icon: <Icons.Bloating /> },
    { title: "Fatigue", desc: "Low energy & sleepless nights", icon: <Icons.Fatigue /> }
  ];

  const benefits = [
    { 
      title: "15-Min Workouts", 
      desc: "Effective, low-impact movements designed for busy moms.", 
      img: "/assets/home/benefit-workout.jpg" 
    },
    { 
      title: "60+ Healthy Recipes", 
      desc: "Delicious, family-friendly meals that nourish your body.", 
      img: "/assets/home/benefit-recipe.jpg" 
    },
    { 
      title: "Self-Care & Habits", 
      desc: "Daily rituals to reclaim your peace and mental clarity.", 
      img: "/assets/home/benefit-habit.jpg" 
    }
  ];

  const selfCareImg = "/assets/home/benefit-selfcare.jpg";

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallback: string) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== fallback) {
      target.src = fallback;
    }
  };

  return (
    <div className="space-y-24 pb-24">
      <Hero onStartQuiz={() => setCurrentPage(Page.Quiz)} />

      <ScrollReveal>
        <BMICalculator />
      </ScrollReveal>

      {/* Problem Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-serif text-[#3B3E81] mb-6">Sound Familiar?</h2>
          <p className="text-[#3B3E81]/70 text-lg max-w-2xl mx-auto">
            Motherhood is beautiful, but it takes a toll on your body and mind. 
            We're here to help you navigate the changes safely and sustainably.
          </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((p, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-[#E84D94]/10 hover:shadow-md transition-shadow group flex flex-col items-center text-center lg:items-start lg:text-left h-full">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {p.icon}
                </div>
                <h3 className="font-bold text-xl mb-2 text-[#3B3E81]">{p.title}</h3>
                <p className="text-[#3B3E81]/60 leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Benefits Section - Everything you need to succeed */}
      <section className="bg-[#E84D94]/5 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
            <ScrollReveal className="lg:w-1/2">
              <h2 className="text-3xl lg:text-5xl font-serif text-[#3B3E81] mb-6">Everything you need to succeed</h2>
              <p className="text-[#3B3E81]/80 text-lg mb-8 leading-relaxed">
                Our 6-week FitMamu program isn't just a workout plan—it's a complete toolkit designed for the biological and lifestyle needs of moms.
              </p>
              <ul className="space-y-4">
                {[
                  'Low-impact & core safe movements', 
                  'Anti-inflammatory hormone recipes', 
                  'No equipment needed', 
                  'Compassionate community support'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-medium text-[#3B3E81]/80">
                    <span className="w-6 h-6 rounded-full bg-[#E84D94] flex items-center justify-center text-white text-[10px]"><Icons.Check /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative group overflow-hidden rounded-3xl shadow-lg">
                  <img 
                    src={benefits[0].img} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Healthy Mom Workout" />
                  <div className="absolute inset-0 bg-[#3B3E81]/10 group-hover:bg-[#3B3E81]/5 transition-colors" />
                </div>
                <div className="relative group overflow-hidden rounded-3xl shadow-lg">
                  <img 
                    src={benefits[1].img} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Food" 
                   
                  />
                  <div className="absolute inset-0 bg-[#3B3E81]/10 group-hover:bg-[#3B3E81]/5 transition-colors" />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="relative group overflow-hidden rounded-3xl shadow-lg">
                  <img 
                    src={benefits[2].img} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Habits" 
                   
                  />
                  <div className="absolute inset-0 bg-[#3B3E81]/10 group-hover:bg-[#3B3E81]/5 transition-colors" />
                </div>
                <div className="relative group overflow-hidden rounded-3xl shadow-lg">
                  <img 
                    src={selfCareImg} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Self-care" 
                   
                  />
                  <div className="absolute inset-0 bg-[#3B3E81]/10 group-hover:bg-[#3B3E81]/5 transition-colors" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Inspirational Section */}
      <ScrollReveal className="relative h-[600px] overflow-hidden">
        <img 
          src="/assets/home/inspiration-bg.jpg" 
          className="w-full h-full object-cover"
          alt="Healthy mom stretching"
          onError={(e) => handleImgError(e, "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1600")}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B3E81]/80 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-lg text-white space-y-6">
              <h2 className="text-4xl lg:text-6xl font-serif leading-tight">Strength is more than just muscle.</h2>
              <p className="text-xl text-white/90 italic font-light leading-relaxed">"Being a mom is a marathon. FitMamu gives me the endurance to keep up with my little ones while feeling radiant inside."</p>
              <button 
                onClick={() => setCurrentPage(Page.Quiz)}
                className="bg-[#E84D94] text-white px-10 py-4 rounded-full font-bold hover:bg-[#D13B82] transition-all shadow-xl hover:-translate-y-1"
              >
                Join the Movement
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl font-serif mb-4 text-[#3B3E81]">Your Journey in 3 Steps</h2>
        </ScrollReveal>
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-[#E84D94]/10 -z-10" />
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Take the Quiz", desc: "Share your postpartum journey and specific health needs." },
              { step: "02", title: "Get Your Plan", desc: "Receive a personalized nutrition and movement roadmap." },
              { step: "03", title: "Start the Challenge", desc: "Join our circle and transform with daily expert guidance." }
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 200} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#E84D94] text-[#E84D94] flex items-center justify-center text-2xl font-bold mx-auto shadow-lg shadow-[#E84D94]/5">
                  {s.step}
                </div>
                <h3 className="font-bold text-xl text-[#3B3E81]">{s.title}</h3>
                <p className="text-[#3B3E81]/60 leading-relaxed">{s.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4">
        <ScrollReveal className="bg-[#3B3E81] rounded-[50px] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E84D94] rounded-full blur-[100px] -mr-32 -mt-32 opacity-30" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl lg:text-6xl font-serif">Ready to feel like yourself again?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
              Don't wait for "someday." Start your 6-week FitMamu journey today and join a community that truly understands.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <button 
                onClick={() => setCurrentPage(Page.Quiz)}
                className="bg-white text-[#E84D94] px-12 py-4 rounded-full text-lg font-bold hover:bg-[#fdfafb] transition-all shadow-xl hover:-translate-y-1"
              >
                Take the Free Quiz
              </button>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-white/30 px-10 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all"
              >
                <Icons.WhatsApp /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Home;
