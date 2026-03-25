import React from 'react';

const DayDetail = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 pb-32">
      <div className="mb-16">
        <nav className="flex items-center gap-2 mb-6 text-sm font-medium text-secondary">
          <span>Hampi Expedition</span>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-on-surface-variant">Day 1</span>
        </nav>
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter mb-4 leading-[1.1]">
          The Ruins of <br /><span className="text-primary">Vijayanagara</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          Step back into the 14th century. A journey through the spiritual heart and the architectural grandeur of a forgotten empire carved in stone.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 space-y-12">
          <section>
            <h2 className="font-headline text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-sm">01</span>
              Iconic Landmarks
            </h2>
            <article className="group mb-12 bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow transition-all duration-300 hover:scale-[1.01]">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-full">
                  <img alt="Virupaksha Temple" className="w-full h-full object-cover asymmetric-clip" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNLaQpDhczkbzHYI_2cUJHHXW2q5DxsXealnUgoIhAdDZCWK5kdgwLfhR_jQqyjWtuUy3uRdRF4nAcndqLxz7jasPQuDGONpu0R4hwWDrTMCwGbwBENYhQ4h4Xh8NI38jNAVV-IfPwCrSsZGKXMH5SpkbBOOHKIT5ZUIhpX3ir5DK27qJfNewasy6qLQGErsWT8_IJRtSbZFuhZCageyRhCaSe_Vaayepfge4aPQt7EWOPMm3vgxVUkG8F0cDnTyGgm8WJkWONiY14" />
                  <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    MUST VISIT
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Virupaksha Temple</h3>
                  <div className="flex flex-wrap gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-1 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      6:00 AM - 6:00 PM
                    </div>
                    <div className="flex items-center gap-1 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">payments</span>
                      Free (Inner sanctum ₹5)
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-on-surface-variant leading-relaxed">
                      The oldest temple in Hampi and the only one still in active worship. Dedicated to Lord Shiva, its towering gopuram dominates the skyline.
                    </p>
                    <div className="bg-surface-container-low p-4 rounded-lg">
                      <span className="text-xs font-bold text-secondary tracking-widest uppercase block mb-1">Why Visit</span>
                      <p className="text-sm text-on-surface italic">"Witness the living history and meet Lakshmi, the temple elephant, for a blessing."</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="group mb-12 bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow transition-all duration-300 hover:scale-[1.01]">
              <div className="grid md:grid-cols-2">
                <div className="order-1 md:order-2 relative h-64 md:h-full">
                  <img alt="Stone Chariot Hampi" className="w-full h-full object-cover rounded-tr-xl md:rounded-bl-none md:rounded-tr-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFlvxzLPR8pBVq6QPaFC21DKvDl8LMwlr6RU7mhEKPBAyOWOxYApSDL2Bv-kTOJIXP9QkDxWxMNJMhs-cT7uRPwlzcssqEZp5kj509MzJ74Yop8CcqF2TxWa26pqSZWoKhb3fNV9a6ZMx34_Is5I5wv4wcppi65E654rDY2Xe8IGL1ldgpmol2CBxfr8sOGNPXO93IOCwBMjJ7FKdyU2RBsVn8C5o29HgOsOoOAWi2LVdlOqhbyvcowviQdKb796csMtKMnBU9bxxK" />
                </div>
                <div className="order-2 md:order-1 p-8">
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Vittala Temple &amp; Stone Chariot</h3>
                  <div className="flex flex-wrap gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-1 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      8:30 AM - 5:30 PM
                    </div>
                    <div className="flex items-center gap-1 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">payments</span>
                      ₹40 (Indians) / ₹600 (Foreigners)
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-on-surface-variant leading-relaxed">
                      The pinnacle of Vijayanagara architecture, famous for its musical pillars and the iconic Stone Chariot, a symbol of Karnataka tourism.
                    </p>
                    <div className="bg-secondary-container/30 p-4 rounded-lg">
                      <span className="text-xs font-bold text-secondary tracking-widest uppercase block mb-1">Pro Tip</span>
                      <p className="text-sm text-on-surface">Walk along the riverside path from Hampi Bazaar to reach here for breathtaking boulder views.</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
          <section className="bg-surface-container rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-headline text-3xl font-extrabold mb-6 tracking-tight">Getting Around</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-b-2 border-secondary/20">
                  <span className="material-symbols-outlined text-secondary text-3xl mb-3">electric_rickshaw</span>
                  <h4 className="font-bold mb-2">Auto-Rickshaw Tour</h4>
                  <p className="text-sm text-on-surface-variant mb-4">Perfect for hitting all major spots in one day. Reliable and shade-covered.</p>
                  <span className="text-primary font-bold">₹800 - ₹1200 / day</span>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-b-2 border-tertiary/20">
                  <span className="material-symbols-outlined text-tertiary text-3xl mb-3">pedal_bike</span>
                  <h4 className="font-bold mb-2">Bicycle Rental</h4>
                  <p className="text-sm text-on-surface-variant mb-4">For the slow traveler. Explore the hidden trails between ruins at your own pace.</p>
                  <span className="text-primary font-bold">₹150 - ₹200 / day</span>
                </div>
              </div>
            </div>
          </section>
        </div>
        <aside className="md:col-span-4 space-y-8">
          <div className="bg-surface-container-high rounded-3xl overflow-hidden editorial-shadow">
            <div className="h-48 relative">
              <img alt="Mango Tree Restaurant" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ2S8E049TNhyFLJOy3CEXqLLwTYfwMERJFlDMysyzOGE9Tmgj7rdp1KDttZ0USOYfnPjG7wj3cQwLKnzEUftBoisV1cf9M_tNwZrCvRQOV8HHNVc7pGT7bs9PPHCqzKboiYbdxtmOMgFHzEzb3o3V20FdwykSeT3Pdoi4_kcQa_TaWxWp7ooy6DLWbYzgdIHd60MQPBIG72J1Snp4vFJS-T7R9ckw6d3DS8xla_C3etolA1Qtu9ID7zq1t9wBCO2m6JxRGlnLkrw3" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-6">
                <h4 className="text-white font-headline text-xl font-bold">Mango Tree Restaurant</h4>
                <div className="flex items-center text-white/80 text-xs">
                  <span className="material-symbols-outlined text-xs mr-1">location_on</span> Near Hampi Bazaar
                </div>
              </div>
            </div>
            <div className="p-8">
              <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase mb-4 block">Authentic Dining</span>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                A legendary spot known for its relaxed atmosphere. Sit on floor cushions and enjoy a panoramic view of the river while you eat.
              </p>
              <div className="space-y-3">
                <h5 className="text-xs font-bold text-on-surface">MUST-TRY SPECIALTIES:</h5>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    Special Thali on Banana Leaf
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    Fresh Nutella Banoffee Pie
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    Iced Lemon Mint Tea
                  </li>
                </ul>
              </div>
              <button className="mt-8 w-full py-3 bg-secondary text-white rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-on-secondary-fixed-variant transition-colors">
                Get Directions
                <span className="material-symbols-outlined text-sm">near_me</span>
              </button>
            </div>
          </div>
          <div className="bg-primary text-white rounded-3xl p-8 relative overflow-hidden">
            <span className="material-symbols-outlined absolute -top-4 -right-4 text-white/10 text-9xl rotate-12">temple_hindu</span>
            <h4 className="font-headline text-xl font-bold mb-4 relative z-10">Cultural Etiquette</h4>
            <div className="space-y-4 relative z-10">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary-fixed">check_circle</span>
                <p className="text-sm text-primary-fixed/90 leading-snug">Dress modestly; cover shoulders and knees when entering active temples.</p>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary-fixed">check_circle</span>
                <p className="text-sm text-primary-fixed/90 leading-snug">Remove footwear before entering any temple sanctum or raised platform.</p>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary-fixed">check_circle</span>
                <p className="text-sm text-primary-fixed/90 leading-snug">Ask for permission before taking photographs of devotees or priests.</p>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-highest rounded-3xl p-2 h-64 relative overflow-hidden group">
            <img alt="Map area" className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQG9l2zovSsvdybz5_k7PlA3KA1fpFwZRqLSVIXhPy0KnLpq-f0vYQwLpwjYlVzo6fQGDQnrKvcPGrSbOlNCYvvcqUqLVt3Gl6uevgzskqC8ll46H3sxyxcT6osMup6wmH-HjM98Z-_csSj5490nI3aAPSVV04GqbBx-8XYXIzwu21gB4rPw0E0JMH7roBreItHZn36hO--Aus9lEJ6mDn5g-brnGjmQwWck7IW1fyiHY2jWdLIGB3nHqF0sasgMf3lg_F_syvSSyt" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-surface/90 backdrop-blur-md text-on-surface px-6 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-sm">map</span>
                Explore Live Map
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default DayDetail;
