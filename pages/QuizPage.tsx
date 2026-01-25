
import React, { useState } from 'react';
import { Page } from '../types.ts';
import { QUIZ_QUESTIONS, WHATSAPP_NUMBER } from '../constants.tsx';

interface QuizPageProps {
  setCurrentPage: (page: Page) => void;
}

const QuizPage: React.FC<QuizPageProps> = ({ setCurrentPage }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { text: string, value: string }>>({});
  const [isFinished, setIsFinished] = useState(false);

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;
  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  const getWhatsAppLink = (finalAnswers: Record<string, { text: string, value: string }>) => {
    let message = "Hi FitMamu, I just completed the quiz!\n\n";
    message += "*My Profile Summary:*\n";
    
    QUIZ_QUESTIONS.forEach((q) => {
      const answer = finalAnswers[q.id];
      if (answer) {
        message += `• ${q.text}: *${answer.text}*\n`;
      }
    });
    
    message += "\nI'm ready to start my 6-week challenge!";
    
    // Using api.whatsapp.com/send is more compatible than wa.me in many embedded environments
    return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
  };

  const handleOptionSelect = (optionText: string, optionValue: string) => {
    const updatedAnswers = { 
      ...answers, 
      [currentQuestion.id]: { text: optionText, value: optionValue } 
    };
    setAnswers(updatedAnswers);
    
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 300);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    const finalLink = getWhatsAppLink(answers);
    return (
      <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 bg-[#3B3E81]/60 backdrop-blur-md animate-in fade-in duration-300 overflow-y pt-20">
        <div 
          className="max-w-md w-full text-center space-y-8 bg-white p-10 lg:p-16 rounded-[40px] shadow-2xl border border-[#E84D94]/10 animate-in zoom-in-95 duration-500 my-10"
        >
          <div className="w-24 h-24 bg-[#E84D94]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-[#E84D94]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-serif text-[#3B3E81]">Assessment Done!</h1>
            <p className="text-xl text-[#3B3E81]/70 leading-relaxed">
              Your personalized profile is ready. Click below to send your results to our team and start your journey.
            </p>
          </div>
          
          <div className="pt-4 space-y-4">
            <a 
              href={finalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#E84D94] text-white py-5 rounded-full text-xl font-bold hover:bg-[#D13B82] transition-all shadow-xl shadow-[#E84D94]/30 animate-pulse active:scale-95 text-center"
            >
              Send to WhatsApp
            </a>
            <button 
              onClick={() => setCurrentPage(Page.Home)}
              className="w-full text-[#3B3E81]/50 font-medium py-2 hover:text-[#3B3E81] transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top duration-700">
          <h1 className="text-3xl lg:text-4xl font-serif text-[#3B3E81] mb-2">Let’s Understand You & Your Body</h1>
          <p className="text-[#3B3E81]/60">Answer a few questions so we can personalize your 6-week program.</p>
        </div>

        <div className="mb-12">
          <div className="flex justify-between text-sm font-medium text-[#E84D94] mb-2">
            <span>Progress</span>
            <span>Step {currentStep + 1} of {QUIZ_QUESTIONS.length}</span>
          </div>
          <div className="w-full bg-[#E84D94]/10 h-3 rounded-full overflow-hidden">
            <div 
              className="bg-[#E84D94] h-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-8 lg:p-12 shadow-2xl border border-[#E84D94]/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#3B3E81] mb-10 leading-tight">{currentQuestion.text}</h2>
          
          <div className="grid gap-4">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.text, option.value)}
                className={`w-full text-left p-6 lg:p-7 rounded-3xl border-2 transition-all flex items-center justify-between group
                  ${answers[currentQuestion.id]?.value === option.value 
                    ? 'border-[#E84D94] bg-[#E84D94]/5 text-[#E84D94]' 
                    : 'border-slate-100 hover:border-[#E84D94]/30 hover:bg-[#E84D94]/5 text-slate-600'
                  }`}
              >
                <span className={`font-semibold text-lg lg:text-xl ${answers[currentQuestion.id]?.value === option.value ? 'text-[#E84D94]' : 'text-[#3B3E81]'}`}>
                  {option.text}
                </span>
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all
                  ${answers[currentQuestion.id]?.value === option.value 
                    ? 'border-[#E84D94] bg-[#E84D94] text-white scale-110' 
                    : 'border-slate-200 group-hover:border-[#E84D94]/30'
                  }`}
                >
                  {answers[currentQuestion.id]?.value === option.value && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 flex justify-between items-center">
            <button
              disabled={currentStep === 0}
              onClick={() => setCurrentStep(prev => prev - 1)}
              className={`text-slate-400 font-bold flex items-center gap-2 hover:text-[#3B3E81] transition-all
                ${currentStep === 0 ? 'opacity-0 invisible' : 'opacity-100'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
            <div className="text-slate-300 font-bold text-sm tracking-widest uppercase">
              FitMamu • {currentStep + 1}/{QUIZ_QUESTIONS.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
