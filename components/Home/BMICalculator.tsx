import React, { useState } from 'react';

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [feet, setFeet] = useState<string>('');
  const [inches, setInches] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  const [targetRange, setTargetRange] = useState<{ min: number; max: number } | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const ft = parseFloat(feet);
    const inch = parseFloat(inches) || 0;

    if (w > 0 && ft > 0) {
      const totalInches = (ft * 12) + inch;
      const heightInMeters = totalInches * 0.0254;
      const result = w / (heightInMeters * heightInMeters);
      setBmi(parseFloat(result.toFixed(1)));
      
      const minWeight = 18.5 * (heightInMeters * heightInMeters);
      const maxWeight = 24.9 * (heightInMeters * heightInMeters);
      setTargetRange({ 
        min: parseFloat(minWeight.toFixed(1)), 
        max: parseFloat(maxWeight.toFixed(1)) 
      });

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

  const getWeightRecommendation = () => {
    if (!bmi || !targetRange || !weight) return null;
    const currentWeight = parseFloat(weight);
    
    if (category === 'Healthy') {
      return (
        <div className="bg-emerald-50 p-6 rounded-[24px] border border-emerald-100 text-emerald-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm">✓</div>
            <p className="font-bold uppercase tracking-wider text-xs">Maintain Weight</p>
          </div>
          <p className="text-sm leading-relaxed">
            Great job! You are in the healthy range. Keep your weight between <strong>{targetRange.min}kg</strong> and <strong>{targetRange.max}kg</strong> to stay here.
          </p>
        </div>
      );
    }

    if (bmi < 18.5) {
      const diff = (targetRange.min - currentWeight).toFixed(1);
      return (
        <div className="bg-[#E84D94]/5 p-6 rounded-[24px] border border-[#E84D94]/10 text-[#E84D94]">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-[#E84D94] text-white flex items-center justify-center text-sm">↑</div>
            <p className="font-bold uppercase tracking-wider text-xs">Recommended Gain</p>
          </div>
          <p className="text-sm leading-relaxed text-[#282038]/80">
            You are currently underweight. Aim to gain approximately <strong className="text-[#E84D94] text-lg">{diff} kg</strong> to reach a healthy threshold.
          </p>
        </div>
      );
    }

    const diff = (currentWeight - targetRange.max).toFixed(1);
    return (
      <div className="bg-orange-50 p-6 rounded-[24px] border border-orange-100 text-orange-800">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm">↓</div>
          <p className="font-bold uppercase tracking-wider text-xs">Recommended Loss</p>
        </div>
        <p className="text-sm leading-relaxed text-[#282038]/80">
          To reach the healthy range, aim to lose approximately <strong className="text-orange-600 text-lg">{diff} kg</strong> to reach your target of <strong>{targetRange.max} kg</strong>.
        </p>
      </div>
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-[#E84D94]/10">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Form Side */}
          <div className="lg:w-1/2 p-8 lg:p-16 bg-[#282038] text-white flex flex-col justify-center">
            <h2 className="text-3xl lg:text-5xl font-serif mb-6">Health Check</h2>
            <p className="text-white/70 mb-10 leading-relaxed max-w-md">
              The BMI calculation is a standard scientific measure for everyone. Enter your details to understand your body's target range.
            </p>
            
            <form onSubmit={calculateBMI} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold mb-3 text-white/50 uppercase tracking-widest">Weight (kg)</label>
                  <input 
                    type="number" 
                    step="0.1"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 65"
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#E84D94] text-white placeholder-white/20 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-3 text-white/50 uppercase tracking-widest">Height (Ft / In)</label>
                  <div className="flex gap-2">
                    <input 
                      type="number" 
                      value={feet}
                      onChange={(e) => setFeet(e.target.value)}
                      placeholder="Ft"
                      className="w-1/2 bg-white/10 border border-white/20 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#E84D94] text-white placeholder-white/20"
                      required
                    />
                    <input 
                      type="number" 
                      value={inches}
                      onChange={(e) => setInches(e.target.value)}
                      placeholder="In"
                      className="w-1/2 bg-white/10 border border-white/20 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#E84D94] text-white placeholder-white/20"
                    />
                  </div>
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#E84D94] hover:bg-[#D13B82] text-white font-bold py-6 rounded-3xl transition-all shadow-2xl shadow-black/30 transform active:scale-[0.98] text-lg mt-4"
              >
                Analyze My Body
              </button>
            </form>
          </div>

          {/* Result Side */}
          <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col items-center justify-center text-center bg-slate-50/50 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#E84D94]/5 rounded-full blur-3xl -mr-32 -mt-32" />

            {bmi ? (
              <div className="animate-in fade-in zoom-in-95 duration-500 w-full max-w-md relative z-10">
                <div className="mb-2">
                  <span className="text-[#282038]/40 font-bold uppercase tracking-[0.4em] text-[10px]">Assessment Result</span>
                </div>
                
                <div className="relative inline-block mb-4">
                  <div className="text-8xl lg:text-9xl font-serif text-[#282038] tracking-tighter">{bmi}</div>
                  <div className="absolute -top-1 -right-6 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm text-[12px] font-black text-[#E84D94] animate-bounce">BMI</div>
                </div>
                
                <div className={`text-3xl font-serif mb-6 ${getCategoryColor()}`}>
                  {category}
                </div>
                
                {/* Visual Scale */}
                <div className="relative w-full h-10 mb-8">
                  <div className="absolute inset-0 flex h-3 rounded-full overflow-hidden mt-4">
                      <div className="h-full bg-blue-400 w-[18.5%]" />
                      <div className="h-full bg-emerald-400 w-[25%]" />
                      <div className="h-full bg-orange-400 w-[20%]" />
                      <div className="h-full bg-red-400 w-[36.5%]" />
                  </div>
                  <div 
                    className="absolute top-0 w-6 h-6 bg-white border-4 border-[#282038] rounded-full shadow-xl transition-all duration-1000 ease-out z-20" 
                    style={{ left: `calc(${Math.min(Math.max((bmi / 40) * 100, 2), 98)}% - 12px)` }} 
                  />
                </div>

                <div className="space-y-4 text-left">
                  {getWeightRecommendation()}
                  
                

                  {targetRange && (
                    <div className="flex items-center justify-between p-5 bg-white rounded-3xl shadow-sm border border-slate-100">
                      <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400 mb-1 tracking-widest">Target Weight Range</p>
                        <p className="font-bold text-[#282038] text-lg">{targetRange.min} - {targetRange.max} kg</p>
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 12h12l3-12H3z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                <button className="mt-8 w-full bg-[#282038] text-white py-4 rounded-2xl font-bold text-sm hover:bg-[#2A2C5C] transition-colors shadow-lg">
                  Join the 6-Week Challenge
                </button>
              </div>
            ) : (
              <div className="text-slate-300">
                <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100">
                  <svg className="w-10 h-10 text-slate-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-slate-400 mb-2">Calculate Your BMI</h3>
                <p className="text-xs text-slate-400/60 max-w-xs mx-auto">
                  Enter your height and weight to get your clinical assessment and ideal target range.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;