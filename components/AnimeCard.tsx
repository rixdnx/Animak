
import React from 'react';
import { Play } from 'lucide-react';
import { Anime } from '../types';

interface AnimeCardProps {
  anime: Anime;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  return (
    <div className="flex-shrink-0 w-40 md:w-48 group cursor-pointer snap-start">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-3">
        <img 
          src={anime.image} 
          alt={anime.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/40 transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 text-white fill-current translate-x-0.5" />
          </div>
        </div>

        {/* Play Icon in Corner */}
        <div className="absolute bottom-3 left-3 w-8 h-8 rounded-full bg-blue-500/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <Play className="w-4 h-4 text-white fill-current translate-x-0.5" />
        </div>
      </div>
      
      <div className="px-1">
        <h3 className="text-white font-medium text-sm md:text-base line-clamp-1 group-hover:text-blue-400 transition-colors">
          {anime.title}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-gray-500 text-xs font-medium">{anime.year}</span>
          <span className="text-gray-700 text-xs">•</span>
          <span className="text-gray-500 text-xs font-medium">{anime.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
