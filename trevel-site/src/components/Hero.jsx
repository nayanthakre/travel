import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[870px] flex items-center justify-center px-6 pt-12 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt="Majestic Indian heritage site" className="w-full h-full object-cover brightness-[0.7] saturate-[0.8]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBih-1IkrO6YeaEnQsVZOnEmzjk3vTjvj0nNR1sWZsvOmhSyLzkx2N4SbAi5JejXmdghv1ojgPVnydVfs1bsRLwA1NpI1TligCvqNNIC6mtXRBbZOOigdc5Hnc3iJYdnzoZ2WJiQYjdqpOxgR_Qp5urHcJCxycZ4ic-LD8UDABfXR0ITmOd8NNXd07_BuPE0xVb6iYkpLRMc3lotZK8KZbhOWF4N1wikEMtm5pIlagLZFzBKdAaH9GjsQ3AvRIa-LAddgTZZmdzgvTT" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background"></div>
      </div>
      <div className="relative z-10 max-w-5xl w-full text-center">
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          India, <span className="text-primary-fixed">Unscripted.</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
          Let our AI craft an artisan journey through the hidden pulse of the subcontinent.
        </p>
        <div className="bg-surface-container-lowest/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl mx-auto max-w-4xl textile-overlay border border-white/20">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Origin City</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary">location_on</span>
                <input className="w-full pl-10 pr-4 py-3 bg-surface-variant border-none border-b-2 border-transparent focus:ring-0 focus:border-secondary transition-all rounded-xl placeholder:text-stone-400" placeholder="e.g. Mumbai" type="text" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Budget</label>
              <select className="w-full px-4 py-3 bg-surface-variant border-none border-b-2 border-transparent focus:ring-0 focus:border-secondary transition-all rounded-xl appearance-none cursor-pointer">
                <option>Mid-range</option>
                <option>Budget</option>
                <option>Luxury</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Style</label>
              <select className="w-full px-4 py-3 bg-surface-variant border-none border-b-2 border-transparent focus:ring-0 focus:border-secondary transition-all rounded-xl appearance-none cursor-pointer">
                <option>Adventurous</option>
                <option>Cultural</option>
                <option>Relaxed</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Duration</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary">calendar_month</span>
                <input className="w-full pl-10 pr-4 py-3 bg-surface-variant border-none border-b-2 border-transparent focus:ring-0 focus:border-secondary transition-all rounded-xl placeholder:text-stone-400" placeholder="7 Days" type="text" />
              </div>
            </div>
            <div className="md:col-span-4 mt-4">
              <button className="w-full hero-gradient text-white font-bold py-4 px-8 rounded-full flex items-center justify-center space-x-3 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <span>Generate My Artisan Itinerary</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
