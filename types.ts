
export enum Page {
  Home = 'home',
  Quiz = 'quiz',
  Sales = 'sales',
  Products = 'products'
}

export interface QuizOption {
  id: string;
  text: string;
  value: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  description?: string;
  options: QuizOption[];
  category: 'body_type' | 'health_condition' | 'goal' | 'habit';
}

export interface QuizResult {
  dosha: 'Vata' | 'Pitta' | 'Kapha';
  focus: string[];
}

export interface Product {
  id: string;
  name: string;
  price: string;
  images: string[];
  description: string;
  category: 'Food Supplements' | 'Home care' | 'Wellness Equipment' | 'Sanitary Napkins';
  videoUrl?: string;
}
