
import React, { useState } from 'react';

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [feet, setFeet] = useState<string>('');
  const [inches, setInches] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const ft = parseFloat(feet);
    const inch = parseFloat(inches) || 0;

    if (w > 0 && ft > 0) {
      // Convert height to meters: ((feet * 12) + inches) * 0.0254
      const heightInMeters = ((ft * 12) + inch) * 0.0254;
      const result = w / (heightInMeters * heightInMeters);
      setBmi(parseFloat(result.toFixed(1)));
      
      if (result < 18.5) setCategory('Underweight');
      else if (result >= 18.5 && result < 25) setCategory('Healthy');
      else if (result >= 25 && result < 30) setCategory('Overweight');
      else setCategory('Obese');
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case 'Healthy': return 'text-emerald-500';
      case 'Overweight': return 'text-orange-500';
      case 'Obese': return 'text-red-500';
      default: return 'text-[#E84D94]';
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-[#E84D94]/10">
        <div className="flex flex-col lg:flex-row">
          {/* Form Side */}
          <div className="lg:w-1/2 p-8 lg:p-16 bg-[#3B3E81] text-white">
            <h2 className="text-3xl lg:text-4xl font-serif mb-6">Know Your BMI</h2>
            <p className="text-white/70 mb-8">
              A Body Mass Index (BMI) is a useful starting point to understand your body composition. 
              Let's see where you stand on your postpartum journey.
            </p>
            
            <form onSubmit={calculateBMI} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-white/80">Weight (kg)</label>
                <input 
                  type="number" 
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g. 65"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#E84D94] text-white placeholder-white/30"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white/80">Height (Feet & Inches)</label>
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="number" 
                    value={feet}
                    onChange={(e) => setFeet(e.target.value)}
                    placeholder="Feet (e.g. 5)"
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#E84D94] text-white placeholder-white/30"
                    required
                  />
                  <input 
                    type="number" 
                    value={inches}
                    onChange={(e) => setInches(e.target.value)}
                    placeholder="Inches (e.g. 5)"
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#E84D94] text-white placeholder-white/30"
                  />
                </div>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#E84D94] hover:bg-[#D13B82] text-white font-bold py-4 rounded-full transition-all shadow-lg"
              >
                Calculate Now
              </button>
            </form>
          </div>

          {/* Result Side */}
          <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col items-center justify-center text-center">
            {bmi ? (
              <div className="animate-in fade-in zoom-in duration-500">
                <p className="text-[#3B3E81]/60 font-medium uppercase tracking-widest text-sm mb-2">Your Result</p>
                <div className="text-7xl lg:text-8xl font-serif text-[#3B3E81] mb-4">{bmi}</div>
                <div className={`text-2xl font-bold mb-8 ${getCategoryColor()}`}>
                  {category}
                </div>
                
                <div className="w-full max-w-sm bg-slate-100 h-2 rounded-full mb-8 overflow-hidden flex">
                    <div className="h-full bg-blue-400" style={{ width: '20%' }} />
                    <div className="h-full bg-emerald-400" style={{ width: '30%' }} />
                    <div className="h-full bg-orange-400" style={{ width: '25%' }} />
                    <div className="h-full bg-red-400" style={{ width: '25%' }} />
                </div>

                <p className="text-slate-500 mb-8 max-w-sm">
                  {category === 'Healthy' 
                    ? "Great job! You're in a healthy range. Let's keep that momentum with sustainable habits." 
                    : "Every journey starts with awareness. Our FitMamu program helps you reach your goals safely."}
                </p>
                
                <div className="p-6 bg-[#E84D94]/5 rounded-3xl border border-[#E84D94]/10">
                  <p className="text-[#3B3E81] font-semibold mb-2">Ready for a personalized plan?</p>
                  <p className="text-sm text-slate-500">Take our free quiz to get recommendations based on your unique body type.</p>
                </div>
              </div>
            ) : (
              <div className="text-slate-400">
                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-lg">Enter your details to calculate your BMI</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
