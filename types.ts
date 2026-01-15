
export interface Anime {
  id: string;
  title: string;
  description: string;
  image: string;
  year: number;
  duration: string;
  rating: number;
  category: string;
}

export type NavItem = 'home' | 'search' | 'bookmark' | 'profile';
