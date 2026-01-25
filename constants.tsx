import React from 'react';
import { QuizQuestion } from './types.ts';

export const WHATSAPP_NUMBER = "9709060826";
export const WHATSAPP_PREFILLED_TEXT = "Hi FitMamu, I want to start my 6-week challenge!";

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'goal',
    text: "What is your primary goal?",
    category: 'goal',
    options: [
      { id: 'g1', text: 'Lose weight postpartum', value: 'weight' },
      { id: 'g2', text: 'Tone muscles & gain energy', value: 'toning' },
      { id: 'g3', text: 'Manage PCOS/Thyroid symptoms', value: 'health' },
      { id: 'g4', text: 'Build sustainable healthy habits', value: 'habits' }
    ]
  },
  {
    id: 'body_type',
    text: "How would you describe your current energy levels?",
    category: 'body_type',
    options: [
      { id: 'bt1', text: 'I feel light but get tired easily (often anxious)', value: 'Vata' },
      { id: 'bt2', text: 'I feel focused but intense (often irritable/hot)', value: 'Pitta' },
      { id: 'bt3', text: 'I feel heavy and slow (low metabolism/bloated)', value: 'Kapha' }
    ]
  },
  {
    id: 'health',
    text: "Do you struggle with any of these conditions?",
    category: 'health_condition',
    options: [
      { id: 'h1', text: 'PCOS / Hormonal Imbalance', value: 'pcos' },
      { id: 'h2', text: 'Thyroid Issues', value: 'thyroid' },
      { id: 'h3', text: 'Postpartum Bloating/Diastasis Recti', value: 'postpartum' },
      { id: 'h4', text: 'None of the above', value: 'none' }
    ]
  },
  {
    id: 'time',
    text: "How much time can you realistically dedicate to movement daily?",
    category: 'habit',
    options: [
      { id: 't1', text: '10-15 minutes (Busy Mom life)', value: 'low' },
      { id: 't2', text: '20-30 minutes', value: 'medium' },
      { id: 't3', text: '45+ minutes', value: 'high' }
    ]
  }
];

export const Icons = {
  Check: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  ),
  WhatsApp: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  Heaviness: () => (
    <svg className="w-10 h-10 text-[#E84D94]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 6l3 12h12l3-12H3zM9 6v12M15 6v12M12 6V3m0 0a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  ),
  Hormone: () => (
    <svg className="w-10 h-10 text-[#E84D94]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" strokeWidth="1" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 2v3m0 14v3M2 12h3m14 0h3m-2.434-6.566l-2.122 2.122m-8.888 8.888l-2.122 2.122m0-13.132l2.122 2.122m8.888 8.888l2.122 2.122" />
    </svg>
  ),
  Bloating: () => (
    <svg className="w-10 h-10 text-[#E84D94]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  Fatigue: () => (
    <svg className="w-10 h-10 text-[#E84D94]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
  ChevronDown: () => (
    <svg className="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  ),
  Workouts: () => (
    <svg className="w-10 h-10 text-[#E84D94]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Nutrition: () => (
    <svg className="w-10 h-10 text-[#E84D94]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Habits: () => (
    <svg className="w-10 h-10 text-[#E84D94]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  ),
  Community: () => (
    <svg className="w-10 h-10 text-[#E84D94]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
    </svg>
  )
};