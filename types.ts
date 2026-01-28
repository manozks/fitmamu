import React from 'react';

export enum Page {
  Home = 'home',
  Quiz = 'quiz',
  Sales = 'sales',
  Products = 'products'
}

export interface QuizOption {
  id: string;
  text: string;
  subtext?: string;
  value: string;
  icon?: React.ReactNode; // Updated to support SVG components
}

export type QuizStepType = 'question' | 'statement';

export interface QuizStep {
  id: string;
  type: QuizStepType;
  text: string;
  image?: string; // New field for authority/trust images
  description?: string;
  content?: React.ReactNode; // For statement-heavy slides
  options?: QuizOption[];
  category?: 'body_type' | 'health_condition' | 'goal' | 'habit' | 'focus_area' | 'stats';
  multiSelect?: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  images: string[];
  description: string;
  category: 'Food Supplements' | 'Personal Care' | 'Wellness Equipment' | 'Sanitary Napkins';
  videoUrl?: string;
}
