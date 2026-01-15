
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnimeSection from './components/AnimeSection';
import BottomNav from './components/BottomNav';
import { BEST_ANIME, POPULAR_ANIME } from './data';
import { NavItem } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavItem>('home');

  return (
    <div className="min-h-screen bg-[#050B18] pb-32">
      <Navbar />
      
      <main className="max-w-screen-2xl mx-auto transition-all duration-500">
        {activeTab === 'home' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Hero />
            <AnimeSection title="Best anime" items={BEST_ANIME} />
            <AnimeSection title="Popular" items={POPULAR_ANIME} />
            <AnimeSection title="Recommended for you" items={[...BEST_ANIME].reverse()} />
          </div>
        )}

        {activeTab === 'search' && (
          <div className="pt-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-2xl font-bold mb-6">Search Anime</h1>
            <div className="relative mb-8">
              <input 
                type="text" 
                placeholder="Search your favorite anime..." 
                className="w-full bg-[#101928] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <p className="text-gray-500 text-center mt-20">Type to find amazing anime worlds.</p>
          </div>
        )}

        {activeTab === 'bookmark' && (
          <div className="pt-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-2xl font-bold mb-6">My Watchlist</h1>
            <div className="grid grid-cols-2 gap-4">
              {BEST_ANIME.slice(0, 2).map(anime => (
                <div key={anime.id} className="bg-[#101928] rounded-2xl overflow-hidden p-2">
                   <img src={anime.image} className="w-full aspect-[3/4] object-cover rounded-xl mb-2" />
                   <h3 className="text-sm font-medium line-clamp-1">{anime.title}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="pt-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
            <div className="w-24 h-24 rounded-full bg-blue-600 mx-auto mb-4 flex items-center justify-center text-3xl font-bold">
              U
            </div>
            <h1 className="text-2xl font-bold mb-1">User Profile</h1>
            <p className="text-gray-500 mb-8">Member since 2024</p>
            
            <div className="space-y-3 max-w-xs mx-auto">
              <button className="w-full py-4 bg-[#101928] rounded-2xl text-left px-6 hover:bg-white/5 transition-colors">Settings</button>
              <button className="w-full py-4 bg-[#101928] rounded-2xl text-left px-6 hover:bg-white/5 transition-colors">Subscription</button>
              <button className="w-full py-4 bg-red-500/10 text-red-500 rounded-2xl text-left px-6 hover:bg-red-500/20 transition-colors">Logout</button>
            </div>
          </div>
        )}
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;
