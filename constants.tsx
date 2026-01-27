
import React from 'react';
import { QuizQuestion, Product } from './types.ts';

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

export const PRODUCT_LIST: Product[] = [
  // Wellness Equipment
  
  {
    id: 'p1',
    name: 'Smart BCM Machine',
    price: 'NPR 87,000',
    category: 'Wellness Equipment',
    images: [
      'https://manozks.github.io/fitmamu/assets/products/bcm-1.jpg',
      'https://manozks.github.io/fitmamu/assets/products/bcm-2.jpg',
      'https://manozks.github.io/fitmamu/assets/products/bcm-3.jpg'
    ],
    videoUrl: 'https://youtu.be/44NHDgXzwOc?si=UI7mw4VVwO1m_o3E',
    description: 'Advanced Blood Circulation Massager. Reduces leg bloating, improves metabolism, and relaxes tired muscles after long nights of motherhood.'
  },
  {
    id: 'p2',
    name: 'Thermal Meridian Massager',
    price: 'NPR 158,200',
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
    category: 'Wellness Equipment',
    images: [
      'https://manozks.github.io/fitmamu/assets/products/head-care-1.jpg',
      'https://manozks.github.io/fitmamu/assets/products/head-care-2.jpg'
    ],
    videoUrl: 'https://youtu.be/-UrPp8bFm48?si=jC59eF22F_CrpS54',
    description: 'Multifunctional Head-care Apparatus is an integrated treating equipment which can balance blood pressure and deliver laser healthcare and vibrating massage.'
  },

  // Food Supplements
  {
    id: 'p4',
    name: 'TIENS Spirulina Capsules',
    price: 'NPR 3,200',
    category: 'Food Supplements',
    images: ['https://manozks.github.io/fitmamu/assets/products/spirulina.jpg'],
    description: 'Spirulina is a nutritional supplement with a wide range of activities. It has a high content of easily absorbed protein, vitamins, minerals and other substances necessary for the human body, which makes it a great food for the 21st century. It is thanks to this unique nutritional value that spirulina enriches the diet of astronauts on space expeditions.'
  },
  {
    id: 'p5',
    name: 'Chitosan Capsules',
    price: 'NPR 2,800',
    category: 'Food Supplements',
    images: ['https://manozks.github.io/fitmamu/assets/products/chitosan.jpg'],
    description: 'Chitosan together with cellulose are the most abundant polysacccharides (complex carbohydrate) on earth. It is made from chitin found in the shells of crustaceans, insects and in the cellular walls of some fungal species. As a natural compound, it is non-toxic and biodegradable, completely safe for the environment. This is why it is becoming widely applied not only in foods supplements, but also in human and veterinary medicine, cosmetology or biotechnology in the broad sense. Nutrition specialists tend to call chitosan the sixth – after proteins, fats, sugars, mineral compounds and vitamins, life-essential element.'
  },

  // Sanitary Napkins
  {
    id: 'p6',
    name: 'Sanitary Napkin-10 pads - Day Use',
    price: 'NPR 680',
    category: 'Sanitary Napkins',
    images: ['https://manozks.github.io/fitmamu/assets/products/napkin-day.jpg'],
    videoUrl: 'https://youtu.be/qeFtlFbdop4?si=9xGFPCvkqY9KS8D8',
    description: 'Absorbs liquid 3 times faster. The ultra-thin and super absorbent, liquid locking design keeps you accident-free, comfortable and clean. Some of the Oxygen & Negative Ion Sanitary Napkin is: 8 Layers of Protection. Anti-bacterial and anti-inflammable.  Reduces fatigue and strengths Immunity. Eradicates ordor and promotes metabolism.  Dry, air permeable, anti-leakage.'
  },
  {
    id: 'p7',
    name: 'Sanitary Napkin-8 pads - Night Use',
    price: 'NPR 680',
    category: 'Sanitary Napkins',
    images: ['https://manozks.github.io/fitmamu/assets/products/napkin-night.jpg'],
    description: 'The extra long, bodyline shape overnight sanitary napkin is designed to give you a good nights sleep. It is super absorbent, ultra thin for your comfort and prevents leakage. Some of the features of Oxygen & Negative Ion Sanitary 8 Layers of Protection. Anti-bacterial and anti-inflammable, Reduces fatigue and strengths Immunity, Eradicates odor and promotes metabolism. Dry, air permeable, anti-leakage. Dry, air permeable, anti-leakage.'
  },
{
    id: 'p8',
    name: 'Sanitary Napkin-30 pads - Panty Liner',
    price: 'NPR 886',
    category: 'Sanitary Napkins',
    images: ['https://manozks.github.io/fitmamu/assets/products/napkin-panty-liner.jpg'],
    videoUrl: 'https://youtu.be/qeFtlFbdop4?si=6usKjF0W9-gDiHpA',
    description: 'Moist environments provide the perfect breeding ground for bacteria and during the menstrual cycle, women are vulnerable to inflammation or infection without proper care. According to doctors in obstetrics and gynaecology, some women suffer from gynaecologic diseases due to the improper use of sanitary products. Indeed the World Health Organisation claims that 63% of gynecologic diseases are caused by using poor quality sanitary products as women are vulnerable to infection during this delicate period and weakened immunity can lead to more serious health threats.'
  },


  // Home Care
  {
    id: 'p9',
    name: 'Eco-Friendly Yoga Mat',
    price: 'NPR 1000',
    category: 'Personal Care',
    images: [
      'https://manozks.github.io/fitmamu/assets/products/yoga-mat-1.jpg',
      'https://manozks.github.io/fitmamu/assets/products/yoga-mat-2.jpg',
      'https://manozks.github.io/fitmamu/assets/products/yoga-mat-3.jpg'
    ],
    description: 'High-grip, non-slip mat made from sustainable natural rubber. Specifically designed for postpartum movement, providing extra cushioning for sensitive joints and stable support for pelvic floor exercises.'
  },

   {
    id: 'p10',
    name: 'Anti-Burst Yoga Ball',
    price: 'NPR 2200',
    category: 'Personal Care',
    images: [
      'https://manozks.github.io/fitmamu/assets/products/yoga-ball-1.jpg',
      'https://manozks.github.io/fitmamu/assets/products/yoga-ball-2.jpg',
      'https://manozks.github.io/fitmamu/assets/products/yoga-ball-3.jpg'
    ],
    description: 'High-grip, non-slip mat made from sustainable natural rubber. Specifically designed for postpartum movement, providing extra cushioning for sensitive joints and stable support for pelvic floor exercises.'
  },

  {
    id: 'p11',
    name: 'Toning Dumbbell Set',
    price: 'NPR 380',
    category: 'Personal Care',
    images: [
      'https://manozks.github.io/fitmamu/assets/products/dumbbells-1.jpg',
      'https://manozks.github.io/fitmamu/assets/products/dumbbells-2.jpg',
      'https://manozks.github.io/fitmamu/assets/products/dumbbells-3.jpg'
    ],
    description: 'Soft-grip neoprene dumbbells. These weights are safe and effective for low-impact resistance training at home to boost metabolism.'
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
  )
};
