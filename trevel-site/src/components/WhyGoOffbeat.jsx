import React from 'react';

const WhyGoOffbeat = () => {
  return (
    <section className="bg-surface-container-low py-32 textile-overlay relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Why Go <span className="text-secondary">Offbeat?</span></h2>
          <p className="text-on-surface-variant text-lg">We believe travel should be more than just consumption. It should be an exchange of stories and soul.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-8 bg-surface rounded-[2rem] shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-secondary-container text-on-secondary-container rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
            </div>
            <h4 className="font-headline text-xl font-bold mb-4">Sustainable Footprints</h4>
            <p className="text-on-surface-variant leading-relaxed">Reducing the strain on popular hubs by redistributing tourism to fragile, beautiful communities.</p>
          </div>
          <div className="text-center p-8 bg-surface rounded-[2rem] shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
            </div>
            <h4 className="font-headline text-xl font-bold mb-4">Direct Impact</h4>
            <p className="text-on-surface-variant leading-relaxed">Your journey directly supports local artisans, homestay owners, and community cooperatives.</p>
          </div>
          <div className="text-center p-8 bg-surface rounded-[2rem] shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-tertiary-container text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>temple_hindu</span>
            </div>
            <h4 className="font-headline text-xl font-bold mb-4">Living Heritage</h4>
            <p className="text-on-surface-variant leading-relaxed">Preserving intangible culture by engaging with traditions that don't make it to the guidebooks.</p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default WhyGoOffbeat;
