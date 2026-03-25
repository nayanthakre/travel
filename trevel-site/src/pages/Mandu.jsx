import React from 'react';

const Mandu = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 pb-32">
      <div className="mb-16">
        <nav className="flex items-center gap-2 mb-6 text-sm font-medium text-secondary">
          <span>Mandu Expedition</span>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-on-surface-variant">Day 1</span>
        </nav>
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter mb-4 leading-[1.1]">
          The City of <br /><span className="text-primary">Joy</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          Explore the architectural marvels of Mandu, a city that resonates with the love story of Prince Baz Bahadur and Rani Roopmati.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 space-y-12">
          <section>
            <h2 className="font-headline text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-sm">01</span>
              Historic Forts
            </h2>
            <article className="group mb-12 bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow transition-all duration-300 hover:scale-[1.01]">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-full">
                  <img alt="Mandu Fort" className="w-full h-full object-cover asymmetric-clip" src="https://www.mptourism.com/images/point-of-interest/Mandu-Jahaz-Mahal.jpg" />
                  <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    MUST VISIT
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Jahaz Mahal</h3>
                  <div className="flex flex-wrap gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-1 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      8:00 AM - 6:00 PM
                    </div>
                    <div className="flex items-center gap-1 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">payments</span>
                      ₹15 (Indians) / ₹200 (Foreigners)
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-on-surface-variant leading-relaxed">
                      The "Ship Palace" is an exquisite example of Afghan architecture, beautifully situated between two artificial lakes.
                    </p>
                    <div className="bg-surface-container-low p-4 rounded-lg">
                      <span className="text-xs font-bold text-secondary tracking-widest uppercase block mb-1">Why Visit</span>
                      <p className="text-sm text-on-surface italic">"Witness the illusion of a ship floating on water and explore the magnificent halls and pavilions."</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Mandu;