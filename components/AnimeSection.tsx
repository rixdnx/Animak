
import React from 'react';
import AnimeCard from './AnimeCard';
import { Anime } from '../types';

interface AnimeSectionProps {
  title: string;
  items: Anime[];
}

const AnimeSection: React.FC<AnimeSectionProps> = ({ title, items }) => {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-4 px-6">
        <h2 className="text-xl font-semibold text-white tracking-tight">{title}</h2>
        <button className="text-blue-500 text-sm font-medium hover:text-blue-400 transition-colors">
          See all
        </button>
      </div>
      
      {/* 
          Slider container: 
          - snap-x snap-mandatory: enables the snapping behavior 
          - scrollbar-hide: keeps it clean 
          - flex gap-4: spacing between items
      */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-6 px-6 snap-x snap-mandatory scroll-smooth">
        {items.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
        {/* Extra spacer for the end of the slider */}
        <div className="flex-shrink-0 w-2 h-full"></div>
      </div>
    </section>
  );
};

export default AnimeSection;
