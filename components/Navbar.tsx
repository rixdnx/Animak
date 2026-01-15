
import React from 'react';
import { Menu, Bell } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 fixed top-0 w-full z-50 bg-[#050B18]/80 backdrop-blur-md">
      <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
        <Menu className="w-6 h-6 text-white" />
      </button>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-white/10 transition-colors relative">
          <Bell className="w-6 h-6 text-white" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-[#050B18]"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
