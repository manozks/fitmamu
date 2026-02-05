import React from 'react';
import { Page } from '../../types.ts';

interface HeroProps {
  onStartQuiz: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartQuiz }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#16A34A]/5 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#16A34A]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-block px-4 py-1.5 bg-[#DCFCE7] text-[#16A34A] rounded-full text-xs font-bold uppercase tracking-wider">
            Postpartum Friendly • PCOS Approved
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif leading-tight text-[#14532D]">
            Lose Weight, <span className="text-[#16A34A] italic">Gain Confidence</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#374151]/80 leading-relaxed max-w-xl">
            6-week Fitness Sarthi Program: Daily 15-min Workouts, 60 Healthy Recipes, and Simple Habits for busy moms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onStartQuiz}
              className="bg-[#16A34A] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#22C55E] transition-all shadow-xl hover:shadow-[#16A34A]/20"
            >
              Take the Quiz & Start Today
            </button>
            <div className="flex items-center gap-3 px-4 py-2 bg-white/50 rounded-lg border border-[#16A34A]/10">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/mom${i}/40/40`} className="w-8 h-8 rounded-full border-2 border-white" alt="user" />
                ))}
              </div>
              <span className="text-sm font-medium text-[#374151]/70">1,200+ Moms Joined</span>
            </div>
          </div>
        </div>
        
        <div className="relative animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto border-8 border-white bg-white">
            <img 
              src="https://manozks.github.io/fitmamu/assets/home/hero-mom.jpg" 
              alt="Healthy Mom Exercising" 
              className="w-full h-full object-cover"
                          />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-[#16A34A]/10">
               <p className="text-[#14532D] font-bold text-center italic">"Finally, a workout that fits my life!"</p>
               <p className="text-sm text-[#374151]/60 text-center">- Silkey, Mom of 2</p>
            </div>
          </div>
          {/* Shapes */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#16A34A]/20 rounded-full -z-10" />
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#16A34A]/10 rounded-full -z-10 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;