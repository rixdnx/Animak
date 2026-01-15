
import { Anime } from './types';

export const HERO_ANIME: Anime = {
  id: 'hero-1',
  title: 'Violet Evergarden',
  description: 'After a great war, Violet Evergarden, a young ex-soldier woman, works as a writer...',
  image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=1000&auto=format&fit=crop',
  year: 2018,
  duration: '1h 30min',
  rating: 4.8,
  category: 'Drama'
};

export const BEST_ANIME: Anime[] = [
  {
    id: '1',
    title: 'Mi Vecino Totoro',
    description: 'Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros.',
    image: 'https://images.unsplash.com/photo-1620336655055-188811779b6d?q=80&w=600&auto=format&fit=crop',
    year: 1988,
    duration: '1h 26min',
    rating: 4.9,
    category: 'Adventure'
  },
  {
    id: '2',
    title: "Howl's Moving Castle",
    description: 'When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard.',
    image: 'https://images.unsplash.com/photo-1635338573211-137688241249?q=80&w=600&auto=format&fit=crop',
    year: 2004,
    duration: '1h 59min',
    rating: 4.7,
    category: 'Fantasy'
  },
  {
    id: '3',
    title: 'The Wind Rises',
    description: 'A look at the life of Jiro Horikoshi, the man who designed Japanese fighter planes during World War II.',
    image: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=600&auto=format&fit=crop',
    year: 2013,
    duration: '2h 6min',
    rating: 4.6,
    category: 'Drama'
  }
];

export const POPULAR_ANIME: Anime[] = [
  {
    id: '4',
    title: 'Princess Mononoke',
    description: 'On a journey to find the cure for a Tatarigami curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony.',
    image: 'https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=600&auto=format&fit=crop',
    year: 1997,
    duration: '2h 14min',
    rating: 4.9,
    category: 'Fantasy'
  },
  {
    id: '5',
    title: 'Spirited Away',
    description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
    image: 'https://images.unsplash.com/photo-1601850494422-3cf14624b0bb?q=80&w=600&auto=format&fit=crop',
    year: 2001,
    duration: '2h 5min',
    rating: 4.9,
    category: 'Adventure'
  },
  {
    id: '6',
    title: 'Your Name',
    description: 'Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?',
    image: 'https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=600&auto=format&fit=crop',
    year: 2016,
    duration: '1h 46min',
    rating: 4.8,
    category: 'Romance'
  }
];
