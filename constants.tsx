
import { AppView, Pet, Product, Vet } from './types';

export const COLORS = {
  primary: '#5CB15A',
  secondary: '#FFFFFF',
  background: '#F5F5F5',
  card: '#D4D4D4',
  text: '#000000',
  accent_yellow: '#F0BB22',
  accent_blue: '#7A86AE',
  accent_red: '#E54D4D'
};

export const MOCK_PETS: Pet[] = [
  {
    id: '1',
    name: 'Bella',
    breed: 'Border Collie',
    image: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&q=80&w=400',
    age: '1y 4m 11d',
    weight: '7.5 kg',
    height: '54 cm',
    color: 'Black',
    gender: 'female',
    status: { health: 88, food: 48, mood: 51 }
  },
  {
    id: '2',
    name: 'Roudy',
    breed: 'Rottweiler',
    image: 'https://images.unsplash.com/photo-1567752881298-894bb81f9379?auto=format&fit=crop&q=80&w=400',
    age: '2y 1m',
    weight: '15.2 kg',
    height: '62 cm',
    color: 'Black & Tan',
    gender: 'male',
    status: { health: 92, food: 70, mood: 85 }
  },
  {
    id: '3',
    name: 'Furry',
    breed: 'Samoyed',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400',
    age: '3y',
    weight: '12 kg',
    height: '50 cm',
    color: 'White',
    gender: 'female',
    status: { health: 85, food: 40, mood: 90 }
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Josera Mini Deluxe',
    brand: 'Josera',
    price: 2900,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=400',
    category: 'Food',
    rating: 4.5,
    recommendedFor: 'Furry',
    size: '900g'
  },
  {
    id: 'p2',
    name: 'Pedigree Adult Meat',
    brand: 'Pedigree',
    price: 5390,
    image: 'https://images.unsplash.com/photo-1585491724212-73d43df43b76?auto=format&fit=crop&q=80&w=400',
    category: 'Food',
    rating: 5.0,
    recommendedFor: 'Bella',
    size: '3kg'
  }
];

export const MOCK_VETS: Vet[] = [
  {
    id: 'v1',
    name: 'Dr. Nambuvan',
    title: 'Bachelor of Veterinary Science',
    rating: 5.0,
    reviews: 100,
    experience: '10 years',
    price: 100,
    distance: '2.5 km',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400'
  }
];
