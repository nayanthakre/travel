import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#fff8ef]/70 dark:bg-stone-900/70 backdrop-blur-xl docked full-width top-0 sticky z-50 shadow-sm dark:shadow-none font-['Plus_Jakarta_Sans'] tracking-tight">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-[#a73400] dark:text-orange-600">The Modern Caravan</div>
        <nav className="hidden md:flex items-center space-x-8">
          <a className="text-stone-600 dark:text-stone-400 hover:text-[#006972] hover:scale-105 transition-transform duration-200" href="/">Itineraries</a>
          <a className="text-[#a73400] dark:text-orange-500 border-b-2 border-[#a73400] pb-1 hover:scale-105 transition-transform duration-200" href="/discover">Discovery</a>
          <a className="text-stone-600 dark:text-stone-400 hover:text-[#006972] hover:scale-105 transition-transform duration-200" href="#">Communities</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-stone-600 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">bookmark</span>
          </button>
          <button className="p-2 text-stone-600 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
