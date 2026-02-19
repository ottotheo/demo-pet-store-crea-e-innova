
export enum AppView {
  SPLASH = 'SPLASH',
  ONBOARDING = 'ONBOARDING',
  LOGIN = 'LOGIN',
  HOME = 'HOME',
  PET_PROFILE = 'PET_PROFILE',
  ADD_PET = 'ADD_PET',
  SHOP = 'SHOP',
  EXPLORE = 'EXPLORE',
  MANAGE = 'MANAGE',
  PROFILE = 'PROFILE',
  BOOKING = 'BOOKING',
  CART = 'CART',
  PAYMENT = 'PAYMENT',
  NOTIFICATIONS = 'NOTIFICATIONS'
}

export interface Pet {
  id: string;
  name: string;
  breed: string;
  image: string;
  age: string;
  weight: string;
  height: string;
  color: string;
  gender: 'male' | 'female';
  status: {
    health: number;
    food: number;
    mood: number;
  };
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  recommendedFor?: string;
  size?: string;
}

export interface Vet {
  id: string;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  experience: string;
  price: number;
  distance: string;
  image: string;
}
