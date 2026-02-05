
import React from 'react';
import { QuizStep, Product } from './types.ts';

export const WHATSAPP_NUMBER = "9709060826";
export const WHATSAPP_PREFILLED_TEXT = "Hi Fitness Sarthi, I want to start my transformation journey and learn more about your weight loss programs!";


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
    <svg className="w-10 h-10 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 6l3 12h12l3-12H3zM9 6v12M15 6v12M12 6V3m0 0a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  ),
  Hormone: () => (
    <svg className="w-10 h-10 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" strokeWidth="1" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 2v3m0 14v3M2 12h3m14 0h3m-2.434-6.566l-2.122 2.122m-8.888 8.888l-2.122 2.122m0-13.132l2.122 2.122m8.888 8.888l2.122 2.122" />
    </svg>
  ),
  Bloating: () => (
    <svg className="w-10 h-10 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  Fatigue: () => (
    <svg className="w-10 h-10 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
  ChevronDown: () => (
    <svg className="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  ),
  Workouts: () => (
    <svg className="w-10 h-10 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Nutrition: () => (
    <svg className="w-10 h-10 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Habits: () => (
    <svg className="w-10 h-10 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  ),
  Community: () => (
    <svg className="w-10 h-10 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
    </svg>
  ),
  Location: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Email: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  TikTok: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.39-2.82-.12-1.01.3-1.89 1.05-2.27 2.03-.23.6-.3 1.25-.19 1.89.15.82.61 1.58 1.26 2.1.66.52 1.49.81 2.33.82 1.05.02 2.13-.39 2.87-1.14.86-.81 1.25-2.03 1.21-3.21-.03-4.58-.02-9.16-.03-13.75z" />
    </svg>
  ),
  Facebook: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  YouTube: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 00-2.122 2.136C0 8.055 0 12 0 12s0 3.945.501 5.814a3.017 3.017 0 002.122 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.945 24 12 24 12s0-3.945-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  Instagram: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z" />
    </svg>
  ),
  Play: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
  // New solid line icons for Quiz
  User: () => <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
  Calendar: () => <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  Body: () => <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 4a2 2 0 100 4 2 2 0 000-4zm-2 6h4v10h-4V10z" /></svg>,
  Flame: () => <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>,
  Target: () => <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" /><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" /></svg>,
  Sparkles: () => <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>,
  Refresh: () => <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
  Question: () => <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  Plate: () => <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 8v8m-4-4h8" /></svg>,
  Apple: () => <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 6.5C12 6.5 13 4 15 4C17 4 19 6 19 9C19 14.5 12 20 12 20C12 20 5 14.5 5 9C5 6 7 4 9 4C11 4 12 6.5 12 6.5Z" /></svg>,
  Rocket: () => <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15.5 8.5C15.5 8.5 18 11 18 14.5C18 18 14.5 21 11 21C7.5 21 4 18 4 14.5C4 11 6.5 8.5 6.5 8.5L11 4L15.5 8.5ZM11 13C11 13 12 12 13 12M11 15V17M9 15L7 17M13 15L15 17" /></svg>,
};


export const QUIZ_STEPS: QuizStep[] = [
  {
    id: 'age',
    type: 'question',
    text: "What is your age group?",
    description: "Age helps us determine your metabolic baseline.",
    category: 'stats',
    options: [
      { id: 'a1', text: '20–30', value: '20-30', icon: <Icons.Calendar /> },
      { id: 'a2', text: '30–40', value: '30-40', icon: <Icons.Calendar /> },
      { id: 'a3', text: '40–50', value: '40-50', icon: <Icons.Calendar /> },
      { id: 'a4', text: '50–60', value: '50-60', icon: <Icons.Calendar /> }
    ]
  },
  {
    id: 'body_type',
    type: 'question',
    text: "How would you describe your current body type?",
    category: 'body_type',
    options: [
      { id: 'b1', text: 'Thin', subtext: 'Holding fat in some areas', value: 'skinny_fat', icon: <Icons.Body /> },
      { id: 'b2', text: 'Medium build', subtext: 'Standard proportions', value: 'medium', icon: <Icons.Body /> },
      { id: 'b3', text: 'Curvy', subtext: 'Defined shape', value: 'curvy', icon: <Icons.Body /> },
      { id: 'b4', text: 'Curvy + Belly Fat', subtext: 'Stubborn mid-section fat', value: 'stubborn_belly', icon: <Icons.Body /> }
    ]
  },
  {
    id: 'goal',
    type: 'question',
    text: "What is your main weight-loss goal?",
    category: 'goal',
    options: [
      { id: 'g1', text: 'Lose 10–20 kg', subtext: 'Significant transformation', value: 'large_loss', icon: <Icons.Flame /> },
      { id: 'g2', text: 'Fit into clothes', subtext: 'Better fit and comfort', value: 'clothing_fit', icon: <Icons.Target /> },
      { id: 'g3', text: 'Target Belly Fat', subtext: 'Mid-section focus', value: 'belly_focus', icon: <Icons.Target /> },
      { id: 'g4', text: 'Feel Lighter', subtext: 'General wellness & comfort', value: 'wellness', icon: <Icons.Sparkles /> }
    ]
  },
  {
    id: 'trust_statement',
    type: 'statement',
    text: "Women just like you have already done it.",
    description: "✨ Over 500+ women have safely burned fat with Fitness Sarthi. You are in the right place."
  },
  {
    id: 'food_knowledge',
    type: 'question',
    text: "Do you know what kind of food you should eat for weight loss?",
    category: 'habit',
    options: [
      { id: 'f1', text: 'Yes, I’m confident', value: 'confident', icon: <Icons.Nutrition /> },
      { id: 'f2', text: 'No, I’m confused', value: 'confused', icon: <Icons.Question /> },
      { id: 'f3', text: 'Maybe… tried many things', value: 'uncertain', icon: <Icons.Refresh /> }
    ]
  },
  {
    id: 'eliminate_myth',
    type: 'question',
    text: "Which food do you think you should eliminate first to lose weight?",
    category: 'habit',
    options: [
      { id: 'e1', text: 'Bread / Pasta / Rice', value: 'carbs', icon: <Icons.Plate /> },
      { id: 'e2', text: 'Fruits', value: 'fruit', icon: <Icons.Apple /> },
      { id: 'e3', text: 'Sugar', value: 'sugar', icon: <Icons.Plate /> }
    ]
  },
  {
    id: 'myth_breaker',
    type: 'statement',
    text: "🚫 Carbs are NOT the enemy.",
    description: "Most women ditch rice and fruits—and still see no results. The problem isn’t carbs… it’s wrong timing, quantity, and combinations."
  },
  {
    id: 'open_carbs',
    type: 'question',
    text: "Are you open to adding the right kind of carbs to lose weight?",
    category: 'habit',
    options: [
      { id: 'o1', text: 'Definitely', value: 'yes', icon: <Icons.Check /> },
      { id: 'o2', text: 'Maybe', value: 'maybe', icon: <Icons.Question /> },
      { id: 'o3', text: 'Not sure', value: 'no', icon: <Icons.Check /> }
    ]
  },
  {
    id: 'hope_statement',
    type: 'statement',
    text: "💛 Don’t worry—you can lose weight.",
    description: "That dress in your wardrobe will fit again. One of my clients, Subani, went from XXL to M. Small but effective changes made all the difference."
  },
  {
    id: 'reason_why',
    type: 'question',
    text: "What is your #1 reason for wanting to lose weight?",
    category: 'goal',
    options: [
      { id: 'r1', text: 'Look better', value: 'aesthetics', icon: <Icons.Sparkles /> },
      { id: 'r2', text: 'Get confidence back', value: 'confidence', icon: <Icons.Sparkles /> },
      { id: 'r3', text: 'Lose mom pouch', value: 'mom_belly', icon: <Icons.Body /> },
      { id: 'r4', text: 'Health & Energy', value: 'health', icon: <Icons.Fatigue /> }
    ]
  },
  {
    id: 'energy_reframe',
    type: 'statement',
    text: "🔥 Fat loss = more energy to live fully.",
    description: "When your body sheds excess weight, it means more stamina, fewer energy crashes, and strength to keep up with what truly matters."
  },
  {
    id: 'health_issues',
    type: 'question',
    text: "Are you currently experiencing any of these?",
    description: "Select all that apply to your journey.",
    category: 'health_condition',
    multiSelect: true,
    options: [
      { id: 'h1', text: 'High Blood Pressure', value: 'bp', icon: <Icons.Fatigue /> },
      { id: 'h2', text: 'Muscle/Joint Pain', value: 'pain', icon: <Icons.Body /> },
      { id: 'h3', text: 'Hormonal issues', value: 'pcos_thyroid', icon: <Icons.Hormone /> },
      { id: 'h4', text: 'Digestive problems', value: 'digestion', icon: <Icons.Bloating /> },
      { id: 'h5', text: 'None of the above', value: 'none', icon: <Icons.Check /> }
    ]
  },
  {
    id: 'reassurance_statement',
    type: 'statement',
    text: "🤍 We’ve got you covered.",
    description: "Managing weight loss with health concerns can feel overwhelming—but your plan is designed by taking everything into account."
  },
  {
    id: 'comfortable_approach',
    type: 'question',
    text: "What kind of approach are you MOST comfortable with?",
    category: 'habit',
    options: [
      { id: 'ap1', text: 'Simple & Easy', value: 'simple', icon: <Icons.Check /> },
      { id: 'ap2', text: 'Flexible (Not restrictive)', value: 'flexible', icon: <Icons.Nutrition /> },
      { id: 'ap3', text: 'Nepali Food & Culture', value: 'nepali', icon: <Icons.Nutrition /> },
      { id: 'ap4', text: 'Gentle Workouts', value: 'gentle', icon: <Icons.Workouts /> }
    ]
  },
  {
    id: 'authority_statement',
    type: 'statement',
    text: "Hi, I’m Silkey Sah—",
    image: "https://manozks.github.io/fitmamu/assets/silkey-profile.jpg",
    description: "A woman over 30, a mother of two, and someone who achieved weight loss when everyone said it was impossible after kids. I'm an internationally certified coach, and I help women find their realistic way back."
  },
  {
    id: 'final_ready',
    type: 'question',
    text: "Are you ready for a personalized plan made just for you?",
    category: 'habit',
    options: [
      { id: 'fr1', text: 'Yes, I’m ready', value: 'ready', icon: <Icons.Rocket /> },
      { id: 'fr2', text: 'I want to know more', value: 'curious', icon: <Icons.Question /> },
      { id: 'fr3', text: 'Nervous but hopeful', value: 'hopeful', icon: <Icons.Sparkles /> }
    ]
  }
];

export const PRODUCT_LIST: Product[] = [
  // Wellness Equipment
  
  {
    id: 'p1',
    name: 'Smart BCM Machine',
    price: 'NPR 87,000',
    originalPrice: 'NPR 95,000',
    category: 'Wellness Equipment',
    images: [
      'https://manozks.github.io/fitmamu/assets/products/bcm-1.jpg',
      'https://manozks.github.io/fitmamu/assets/products/bcm-2.jpg',
      'https://manozks.github.io/fitmamu/assets/products/bcm-3.jpg'
    ],
    videoUrl: 'https://youtu.be/44NHDgXzwOc?si=UI7mw4VVwO1m_o3E',
    description: 'Tiens Blood Circulation Massager uses high frequency vibration to massage the reflex points beneath the feet and palms (reflexology), promoting blood circulation. The vibration frequency provided by this machine helps energise the veins, relax muscles, smooth any blood obstructions to speed up blood flow, harmonising internal cycles'
  },
  {
    id: 'p2',
    name: 'Thermal Meridian Massager',
    price: 'NPR 158,200',
    originalPrice: 'NPR 175,000',
    category: 'Wellness Equipment',
    images: [
      'https://manozks.github.io/fitmamu/assets/products/thermal-1.jpg'
    ],
    videoUrl: 'https://youtu.be/L1gmFkdhKnw?si=nQii-A-RxPZdL1h0',
    description: 'It helps improve blood circulation, relieve muscle tension, reduce pain, and promote relaxation by targeting key energy pathways used in traditional acupuncture and massage practices.'
  },
  {
    id: 'p3',
    name: 'Multifunctional Head Care Apparatus',
    price: 'NPR 23,730',
    originalPrice: 'NPR 26,000',
    category: 'Wellness Equipment',
    images: [
      'https://manozks.github.io/fitmamu/assets/products/head-care-1.jpg',
      'https://manozks.github.io/fitmamu/assets/products/head-care-2.jpg'
    ],
    videoUrl: 'https://youtu.be/-UrPp8bFm48?si=jC59eF22F_CrpS54',
    description: 'Multifunctional Head-care Apparatus is an integrated treating equipment which can balance blood pressure and deliver laser healthcare and vibrating massage.'
  },
  {
    id: 'p4',
    name: 'TIENS Acu-Life Electro Acupuncture Apparatus',
    price: 'NPR 63,280',
    originalPrice: 'NPR 70,000',
    category: 'Wellness Equipment',
    images: [
        'https://manozks.github.io/fitmamu/assets/products/acu-Life-electro.jpg'
    ],
    videoUrl: 'https://youtu.be/aYH75WFkv3A?si=Aaeu_ZFNwB0eaoYA',
    description: 'According to the Chinese Traditional Medicine (CTM) theory, “Block causes pain, no block no pain”. A pain on the body always indicates a blocked channel or a shortage of blood and Qi. Tiens Acu-Life Electro Acupuncture Apparatus uses pain-free method to clear the body channels to improve blood circulation, relieve pain, heal chronic ailments and prevent diseases.'
  },
  {
    id: 'p5',
    name: 'CILVARIS - TIENS BEAUTY SECRET PORTABLE APPARATUS',
    price: 'NPR 44,296',
    originalPrice: 'NPR 49,000',
    category: 'Wellness Equipment',
    images: [
           'https://manozks.github.io/fitmamu/assets/products/cilvaris.jpg'
    ],
    videoUrl: 'https://youtu.be/3bdZ_z5Oj0Q?si=khXXjvCOqg1Tz-Oi',
    description: 'Tiens Cilvaris La Beauty Secrete Portable Apparatus - Face Massage Equipment | TQ-D27 TIENS Cilvaris Handheld Face Massager | Anti-Aging Skin Tightening Device | LED Therapy & Vibration Massage for Glowing Skin Deep Skin Rejuvenation & Glow Enhancer Therapy Face Massager | Anti-Age, Wrinkle Remover & Skin Firming Machine'
  },

  // Food Supplements
  {
    id: 'p6',
    name: 'TIENS Spirulina Capsules',
    price: 'NPR 3,200',
    originalPrice: 'NPR 3,500',
    category: 'Food Supplements',
    images: ['https://manozks.github.io/fitmamu/assets/products/spirulina.jpg'],
    description: 'Spirulina is a nutritional supplement with a wide range of activities. It has a high content of easily absorbed protein, vitamins, minerals and other substances necessary for the human body, which makes it a great food for the 21st century. It is thanks to this unique nutritional value that spirulina enriches the diet of astronauts on space expeditions.'
  },
  {
    id: 'p7',
    name: 'Chitosan Capsules',
    price: 'NPR 2,800',
    originalPrice: 'NPR 3,000',
    category: 'Food Supplements',
    images: ['https://manozks.github.io/fitmamu/assets/products/chitosan.jpg'],
    description: 'Chitosan together with cellulose are the most abundant polysacccharides (complex carbohydrate) on earth. It is made from chitin found in the shells of crustaceans, insects and in the cellular walls of some fungal species. As a natural compound, it is non-toxic and biodegradable, completely safe for the environment. This is why it is becoming widely applied not only in foods supplements, but also in human and veterinary medicine, cosmetology or biotechnology in the broad sense. Nutrition specialists tend to call chitosan the sixth – after proteins, fats, sugars, mineral compounds and vitamins, life-essential element.'
  },

  // Sanitary Napkins
  {
    id: 'p8',
    name: 'Sanitary Napkin-10 pads - Day Use',
    price: 'NPR 680',
    originalPrice: 'NPR 750',
    category: 'Sanitary Napkins',
    images: ['https://manozks.github.io/fitmamu/assets/products/napkin-day.jpg'],
    videoUrl: 'https://youtu.be/qeFtlFbdop4?si=9xGFPCvkqY9KS8D8',
    description: 'Absorbs liquid 3 times faster. The ultra-thin and super absorbent, liquid locking design keeps you accident-free, comfortable and clean. Some of the Oxygen & Negative Ion Sanitary Napkin is: 8 Layers of Protection. Anti-bacterial and anti-inflammable.  Reduces fatigue and strengths Immunity. Eradicates ordor and promotes metabolism.  Dry, air permeable, anti-leakage.'
  },
  {
    id: 'p9',
    name: 'Sanitary Napkin-8 pads - Night Use',
    price: 'NPR 680',
    originalPrice: 'NPR 750',
    category: 'Sanitary Napkins',
    images: ['https://manozks.github.io/fitmamu/assets/products/napkin-night.jpg'],
    description: 'The extra long, bodyline shape overnight sanitary napkin is designed to give you a good nights sleep. It is super absorbent, ultra thin for your comfort and prevents leakage. Some of the features of Oxygen & Negative Ion Sanitary 8 Layers of Protection. Anti-bacterial and anti-inflammable, Reduces fatigue and strengths Immunity, Eradicates odor and promotes metabolism. Dry, air permeable, anti-leakage. Dry, air permeable, anti-leakage.'
  },
{
    id: 'p10',
    name: 'Sanitary Napkin-30 pads - Panty Liner',
    price: 'NPR 886',
    originalPrice: 'NPR 980',
    category: 'Sanitary Napkins',
    images: ['https://manozks.github.io/fitmamu/assets/products/napkin-panty-liner.jpg'],
    videoUrl: 'https://youtu.be/qeFtlFbdop4?si=6usKjF0W9-gDiHpA',
    description: 'Moist environments provide the perfect breeding ground for bacteria and during the menstrual cycle, women are vulnerable to inflammation or infection without proper care. According to doctors in obstetrics and gynaecology, some women suffer from gynaecologic diseases due to the improper use of sanitary products. Indeed the World Health Organisation claims that 63% of gynecologic diseases are caused by using poor quality sanitary products as women are vulnerable to infection during this delicate period and weakened immunity can lead to more serious health threats.'
  },


  // Home Care
  {
    id: 'p11',
    name: 'Eco-Friendly Yoga Mat',
    price: 'NPR 1000',
    originalPrice: 'NPR 1200',
    category: 'Personal Care',
    images: [
      'https://manozks.github.io/fitmamu/assets/products/yoga-mat-1.jpg',
      'https://manozks.github.io/fitmamu/assets/products/yoga-mat-2.jpg',
      'https://manozks.github.io/fitmamu/assets/products/yoga-mat-3.jpg'
    ],
    description: 'High-grip, non-slip mat made from sustainable natural rubber. Specifically designed for postpartum movement, providing extra cushioning for sensitive joints and stable support for pelvic floor exercises.'
  },

   {
    id: 'p12',
    name: 'Anti-Burst Yoga Ball',
    price: 'NPR 2200',
    originalPrice: 'NPR 2600',
    category: 'Personal Care',
    images: [
      'https://manozks.github.io/fitmamu/assets/products/yoga-ball-1.jpg',
      'https://manozks.github.io/fitmamu/assets/products/yoga-ball-2.jpg',
      'https://manozks.github.io/fitmamu/assets/products/yoga-ball-3.jpg'
    ],
    description: 'High-grip, non-slip mat made from sustainable natural rubber. Specifically designed for postpartum movement, providing extra cushioning for sensitive joints and stable support for pelvic floor exercises.'
  },

  {
    id: 'p13',
    name: 'Toning Dumbbell Set',
    price: 'NPR 380',
    originalPrice: 'NPR 450',
    category: 'Personal Care',
    images: [
      'https://manozks.github.io/fitmamu/assets/products/dumbbells-1.jpg',
      'https://manozks.github.io/fitmamu/assets/products/dumbbells-2.jpg',
      'https://manozks.github.io/fitmamu/assets/products/dumbbells-3.jpg'
    ],
    description: 'Soft-grip neoprene dumbbells. These weights are safe and effective for low-impact resistance training at home to boost metabolism.'
  }
];


