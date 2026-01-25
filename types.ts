
export enum Page {
  Home = 'home',
  Quiz = 'quiz',
  Sales = 'sales'
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
