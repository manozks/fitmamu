import React, { useState } from 'react';
import { Page, QuizStep } from '../types.ts';
import { QUIZ_STEPS, WHATSAPP_NUMBER } from '../constants.tsx';

interface QuizPageProps {
  setCurrentPage: (page: Page) => void;
}

const QuizPage: React.FC<QuizPageProps> = ({ setCurrentPage }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisText, setAnalysisText] = useState('Initializing analysis...');
  const [isFinished, setIsFinished] = useState(false);

  const currentStepData = QUIZ_STEPS[currentStep];

  const handleOptionSelect = (option: any) => {
    const isMulti = currentStepData.multiSelect;
    let newValue;

    if (isMulti) {
      const currentValues = answers[currentStepData.id] || [];
      if (currentValues.some((v: any) => v.value === option.value)) {
        newValue = currentValues.filter((v: any) => v.value !== option.value);
      } else {
        newValue = [...currentValues, { text: option.text, value: option.value }];
      }
    } else {
      newValue = { text: option.text, value: option.value };
    }

    setAnswers(prev => ({ ...prev, [currentStepData.id]: newValue }));

    if (!isMulti) {
      goToNext();
    }
  };

  const goToNext = () => {
    if (currentStep < QUIZ_STEPS.length - 1) {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 300);
    } else {
      startAnalysis();
    }
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    const stages = [
      "Analyzing body composition...",
      "Identifying hormone profile...",
      "Optimizing workout splits...",
      "Finalizing Nepali-style nutrition blueprint...",
      "Preparing your mentor roadmap..."
    ];

    stages.forEach((stage, i) => {
      setTimeout(() => {
        setAnalysisText(stage);
        if (i === stages.length - 1) {
          setTimeout(() => {
            setIsAnalyzing(false);
            setIsFinished(true);
          }, 1000);
        }
      }, i * 800);
    });
  };

  const getWhatsAppLink = () => {
    let message = "Hi Silkey Sah, I just completed my Fitness Sarthi assessment!\n\n";
    message += "*My Journey Details:*\n";
    
    QUIZ_STEPS.forEach((step) => {
      if (step.type === 'question') {
        const answer = answers[step.id];
        if (answer) {
          if (Array.isArray(answer)) {
            message += `• ${step.text}: *${answer.map(a => a.text).join(', ')}*\n`;
          } else {
            message += `• ${step.text}: *${answer.text}*\n`;
          }
        }
      }
    });
    
    message += "\nI am ready for my Nepali-style personalized plan. Please guide me!";
    return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
  };

  // Helper to render the shared quiz navigation header
  const renderQuizHeader = () => (
    <div className="flex items-center justify-between mb-8 px-2 w-full max-w-2xl mx-auto pt-6">
      <button 
        onClick={() => {
          if (isFinished) setIsFinished(false);
          else if (currentStep > 0) setCurrentStep(prev => prev - 1);
          else setCurrentPage(Page.Home);
        }}
        className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#14532D] hover:text-[#16A34A] transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="text-center flex-1 mx-4">
         <div className="flex gap-1 justify-center">
            {QUIZ_STEPS.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-300 ${isFinished || i <= currentStep ? 'w-4 bg-[#16A34A]' : 'w-1 bg-slate-200'}`} 
              />
            ))}
         </div>
      </div>
      <div className="w-10" />
    </div>
  );

  if (isAnalyzing) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 bg-slate-50/30">
        <div className="w-full max-w-sm text-center">
          <div className="relative w-32 h-32 mx-auto mb-12">
            <div className="absolute inset-0 border-8 border-slate-100 rounded-full" />
            <div className="absolute inset-0 border-8 border-[#16A34A] border-t-transparent rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center font-serif text-[#14532D] font-bold text-xl">
              Sarthi
            </div>
          </div>
          <h2 className="text-2xl font-serif text-[#14532D] mb-4 animate-pulse">Personalizing your plan</h2>
          <p className="text-[#374151]/60 font-medium tracking-wide h-6">{analysisText}</p>
        </div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="min-h-screen bg-slate-50/50 flex flex-col items-center p-4">
        {renderQuizHeader()}
        <div className="max-w-xl w-full bg-white rounded-[48px] shadow-2xl overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-500">
          <div className="bg-[#14532D] p-10 text-center text-white relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#16A34A] rounded-full blur-3xl opacity-20 -mr-16 -mt-16" />
            <h1 className="text-3xl lg:text-4xl font-serif mb-2">Roadmap Ready!</h1>
            <p className="text-white/60">Based on your Nepali lifestyle and goals.</p>
          </div>
          <div className="p-8 lg:p-12 space-y-8">
            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-[32px] flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white shrink-0 mt-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-emerald-900 mb-1">Coach Assigned: Silkey Sah</h4>
                <p className="text-sm text-emerald-800/70 leading-relaxed">
                  Your profile has been matched with our <strong>Hormone Balancing Module</strong>. This is not a strict diet, but a lifestyle shift.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#16A34A] text-white py-5 rounded-full text-xl font-bold hover:bg-[#22C55E] transition-all shadow-xl shadow-[#16A34A]/20 text-center animate-bounce"
              >
                Get My Personal Plan
              </a>
              <p className="text-center mt-6 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
                Trusted by 500+ Women • Safe • Body-Friendly
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col items-center p-4">
      {renderQuizHeader()}

      <div className="max-w-2xl w-full">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {currentStepData.type === 'question' ? (
            <>
              <div className="text-center mb-10 px-4">
                <h1 className="text-3xl lg:text-4xl font-serif text-[#14532D] mb-3 leading-tight">{currentStepData.text}</h1>
                {currentStepData.description && <p className="text-[#374151]/50 text-lg">{currentStepData.description}</p>}
              </div>

              <div className="grid gap-4">
                {currentStepData.options?.map((option) => {
                  const isSelected = currentStepData.multiSelect 
                    ? (answers[currentStepData.id] || []).some((v: any) => v.value === option.value)
                    : answers[currentStepData.id]?.value === option.value;
                    
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleOptionSelect(option)}
                      className={`relative w-full text-left p-6 rounded-[32px] border-2 border-[#e2e2e2] transition-all flex items-center gap-6 group
                        ${isSelected ? 'border-[#16A34A] bg-[#DCFCE7] shadow-lg shadow-[#16A34A]/5' : 'border-white bg-white hover:border-[#16A34A]/20 hover:bg-slate-50 shadow-sm'}`}
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110
                        ${isSelected ? 'bg-[#16A34A] text-white' : 'bg-[#DCFCE7] text-[#16A34A]'}`}>
                        <div className="w-8 h-8 flex items-center justify-center">
                          {option.icon}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <p className={`font-bold text-lg ${isSelected ? 'text-[#16A34A]' : 'text-[#374151]'}`}>{option.text}</p>
                        {option.subtext && <p className="text-sm text-slate-400 font-medium">{option.subtext}</p>}
                      </div>
                      {currentStepData.multiSelect && (
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'bg-[#16A34A] border-[#16A34A]' : 'border-slate-200'}`}>
                          {isSelected && <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {currentStepData.multiSelect && (
                <div className="pt-8 pb-20">
                  <button
                    onClick={goToNext}
                    disabled={!(answers[currentStepData.id]?.length > 0)}
                    className={`w-full py-5 rounded-full font-bold text-lg transition-all shadow-xl ${(answers[currentStepData.id]?.length > 0) ? 'bg-[#16A34A] text-white hover:bg-[#22C55E]' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                  >
                    Continue Journey
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center p-8 lg:p-12 bg-white rounded-[40px] shadow-xl border border-slate-100 flex flex-col items-center mb-20">
              {currentStepData.image ? (
                <div className="relative mb-8">
                   <div className="absolute inset-0 bg-[#16A34A] rounded-full blur-2xl opacity-20 animate-pulse" />
                   <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#16A34A]/20 p-1 relative z-10">
                      <img 
                        src={currentStepData.image} 
                        alt="Silkey Sah" 
                        className="w-full h-full rounded-full object-cover shadow-2xl"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://manozks.github.io/fitmamu/assets/silkey-profile.jpg'; // Better fallback
                        }}
                      />
                   </div>
                </div>
              ) : (
                <div className="w-20 h-20 bg-[#DCFCE7] rounded-full flex items-center justify-center mb-8">
                   <div className="w-10 h-10 text-[#16A34A]">
                      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 4.5l3.5 3.5m0 0l3.5-3.5m-3.5 3.5v9m-7-9l3.5 3.5m0 0l3.5-3.5m-3.5 3.5v9" /></svg>
                   </div>
                </div>
              )}
              
              <h2 className="text-3xl lg:text-4xl font-serif text-[#14532D] mb-6 leading-tight">
                {currentStepData.text}
              </h2>
              
              <div className="text-[#374151]/60 text-lg leading-relaxed mb-10 max-w-md">
                {currentStepData.description}
              </div>
              
              <button
                onClick={goToNext}
                className="w-full bg-[#16A34A] text-white py-5 rounded-full font-bold text-lg hover:bg-[#22C55E] transition-all shadow-lg hover:-translate-y-1 active:scale-95"
              >
                Continue Assessment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;