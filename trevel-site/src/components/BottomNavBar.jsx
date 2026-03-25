import React from 'react';

const BottomNavBar = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-[#ffffff]/70 dark:bg-stone-950/70 backdrop-blur-2xl z-50 rounded-t-[1.5rem] border-t border-[#e1bfb4]/20 shadow-[0_-10px_40px_rgba(30,27,19,0.05)] font-['Be_Vietnam_Pro'] text-[11px] font-medium">
      <div className="flex flex-col items-center justify-center bg-[#cc4911] text-white rounded-full px-4 py-1 active:scale-90 transition-transform">
        <span className="material-symbols-outlined">explore</span>
        <span>Explore</span>
      </div>
      <div className="flex flex-col items-center justify-center text-stone-500 dark:text-stone-400 hover:text-[#006972] dark:hover:text-teal-400 active:scale-90 transition-transform">
        <span className="material-symbols-outlined">favorite</span>
        <span>Saved</span>
      </div>
      <div className="flex flex-col items-center justify-center text-stone-500 dark:text-stone-400 hover:text-[#006972] dark:hover:text-teal-400 active:scale-90 transition-transform">
        <span className="material-symbols-outlined">event_note</span>
        <span>Plans</span>
      </div>
      <div className="flex flex-col items-center justify-center text-stone-500 dark:text-stone-400 hover:text-[#006972] dark:hover:text-teal-400 active:scale-90 transition-transform">
        <span className="material-symbols-outlined">person</span>
        <span>Profile</span>
      </div>
    </nav>
  );
};

export default BottomNavBar;
