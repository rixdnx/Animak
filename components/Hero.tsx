
import React from 'react';
import { Play } from 'lucide-react';
import { HERO_ANIME } from '../data';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] mt-20 px-4 md:px-6">
      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group">
        {/* Background Image */}
        <img 
          src={HERO_ANIME.image} 
          alt={HERO_ANIME.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B18] via-[#050B18]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-transparent to-transparent opacity-60"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 max-w-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {HERO_ANIME.title}
          </h1>
          <p className="text-gray-300 text-sm md:text-base mb-6 line-clamp-3 leading-relaxed">
            {HERO_ANIME.description}
          </p>
          
          <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-2xl w-fit transition-all transform active:scale-95 shadow-lg shadow-blue-600/30">
            <Play className="w-5 h-5 fill-current" />
            Watch Now
          </button>

          {/* Pagination dots (Visual only) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
            <div className="w-6 h-1.5 bg-blue-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
