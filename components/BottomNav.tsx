
import React from 'react';
import { Home, Search, Bookmark, User } from 'lucide-react';
import { NavItem } from '../types';

interface BottomNavProps {
  activeTab: NavItem;
  onTabChange: (tab: NavItem) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs: { id: NavItem; icon: React.ElementType }[] = [
    { id: 'home', icon: Home },
    { id: 'search', icon: Search },
    { id: 'bookmark', icon: Bookmark },
    { id: 'profile', icon: User },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50">
      <div className="bg-[#101928]/90 backdrop-blur-xl border border-white/10 rounded-[32px] px-6 py-4 flex items-center justify-between shadow-2xl">
        {tabs.map(({ id, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`p-2 rounded-xl transition-all duration-300 ${
              activeTab === id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40' 
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            <Icon className="w-6 h-6" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
