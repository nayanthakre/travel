import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-12 pb-32 px-6 border-t border-outline-variant/20 bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-on-surface-variant">
        <div className="col-span-2 md:col-span-1">
          <div className="text-xl font-bold text-primary mb-6">The Modern Caravan</div>
          <p className="text-sm leading-relaxed">Crafting meaningful journeys through the unseen landscapes of India.</p>
        </div>
        <div>
          <h5 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Explore</h5>
          <ul className="space-y-4 text-sm">
            <li><a className="hover:text-primary" href="#">Destinations</a></li>
            <li><a className="hover:text-primary" href="#">Itineraries</a></li>
            <li><a className="hover:text-primary" href="#">Experiences</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Community</h5>
          <ul className="space-y-4 text-sm">
            <li><a className="hover:text-primary" href="#">Travel Stories</a></li>
            <li><a className="hover:text-primary" href="#">Sustainability</a></li>
            <li><a className="hover:text-primary" href="#">Partner With Us</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Connect</h5>
          <div className="flex space-x-4">
            <span className="material-symbols-outlined cursor-pointer hover:text-primary">share</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary">contact_support</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary">mail</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
