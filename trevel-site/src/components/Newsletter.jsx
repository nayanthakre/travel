import React from 'react';

const Newsletter = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="bg-on-surface text-surface-container-lowest rounded-[3rem] p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
        <img alt="Pattern overlay" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6wZxzL5hoJLHbDT1qJd1qZoYW7BhAUChPae_iXSsb62iXkEIYcWKo3lrNG4N2izjlhK6TeFVPak_z0ERReJnGnyvwdLtPgLgOlebDWaqhknz7XePOO0Dmzpq9MJAg3xkxCk67ClLRZkT65g21Frg47W3TX7MhprTiPs3rBXt6g4di9GXxEZUc4SzFcFBjg2iCOS66eFRQEHsTYcyrx7oxkpILIUa8m2HMNA989HXLQmFoEOLlEgaNcdr7dmEa0x78dCe3obxWn7GR" />
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 z-10">Join the Caravan</h2>
        <p className="text-surface-variant/80 text-lg max-w-xl mb-10 z-10">Get early access to exclusive nomadic routes and stories from the road, delivered once a month.</p>
        <form className="flex flex-col md:flex-row gap-4 w-full max-w-md z-10">
          <input className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:ring-2 focus:ring-secondary focus:bg-white/20 transition-all outline-none" placeholder="Email address" type="email" />
          <button className="bg-primary hover:bg-primary-container text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/20">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
