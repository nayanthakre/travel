import React from 'react';
import { Link } from 'react-router-dom';

const HiddenGems = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-xl">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm block mb-4">Curated Discoveries</span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">The Silence of <span className="text-primary italic">Hidden Gems.</span></h2>
        </div>
        <p className="text-on-surface-variant text-lg max-w-sm">
          Move beyond the circuit. Discover the architectural poetry left behind by lost empires.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <Link to="/hampi" className="md:col-span-8 group relative h-[500px] overflow-hidden rounded-[2.5rem] bg-surface-container-high shadow-sm hover:shadow-xl transition-all duration-500">
          <img alt="Hampi landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF9nj36Matvw83-Sd_irRGvsoJTuzSHSv68yCjTchXAkxbYZhkI3wMWh5uNUSedhNJFc2G4L-3Wbt0OQOn8B-JjFXHAj-8H2gSP_1VcTcVtnoS6LusFts9MJFTBSWZb3AsqfBHF-2H1iIMv7bGi5P5EC7im_GRDBT85NcR_XDgWF_gSgQP3--RnAyIpQPNyfOpiYHk-qrUrVwov0owmoPruOCNVexPBeGxSdhDdBJ0z3ib2qUrLPRZoSdO9wD08LtTRd8Bn-0v5-GY" />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent"></div>
          <div className="absolute bottom-0 p-10 text-white">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-tertiary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">UNESCO Heritage</span>
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium">Karnataka</span>
            </div>
            <h3 className="font-headline text-4xl font-bold mb-3 tracking-tight">Hampi</h3>
            <p className="max-w-md text-white/80 leading-relaxed">
              A boulder-strewn landscape where the ruins of the Vijayanagara Empire whisper stories of forgotten gold and granite grandeur.
            </p>
          </div>
        </Link>
        <Link to="/orchha" className="md:col-span-4 group relative h-[500px] overflow-hidden rounded-[2.5rem] bg-surface-container-high shadow-sm hover:shadow-xl transition-all duration-500">
          <img alt="Orchha cenotaphs" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPuQP1W-4eenEb9n7a-FC7ncRKttXJDB6RE7_E-1IsfiPMiniBpg75BbiguL_ch86Ct6Pxp_fuKlFCxwzjS4SMidGw2iUl2zlmGYIcuY5fjpHGud2TBBuxpLB2C940N_qSLC1zwnUjuGAeBMAGUuNCgGM6Rkw7n-nSTbqoSbi1hkvIe-P94kRV03iY5j-psgTTis0T2CRb8Ovgn6CahQybF0MnM7Q3Ci3Y-C0RIBhsNPhHWUnAoAVffqFdeSlVGU-zn4AGgMhcG280" />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent"></div>
          <div className="absolute bottom-0 p-8 text-white">
            <span className="bg-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter mb-4 inline-block">The Undiscovered</span>
            <h3 className="font-headline text-3xl font-bold mb-2 tracking-tight">Orchha</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              A hidden medieval town in Madhya Pradesh where palaces and cenotaphs stand still against the Betwa river.
            </p>
          </div>
        </Link>
        <Link to="/mandu" className="md:col-span-12 group relative h-[400px] overflow-hidden rounded-[2.5rem] bg-surface-container-high shadow-sm hover:shadow-xl transition-all duration-500">
          <div className="grid md:grid-cols-2 h-full">
            <div className="relative overflow-hidden">
              <img alt="Mandu Palace" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzADgAHuiQ-cV2wM-tof9qvOCVRbuKq605bbkdyqwlWrwACkqzGuYbBEJNYii9e9Ck0E7Dpumyo9uhC8C6YK4U3JFn49lSuiklZZ5pLQ7sOSYeV9T2M_3mr8yKQ8x6SQK6G5Et6Ahz9vsJT0qekHFs6jO6CnmAgrmxj9V28ax6aMPptYzxCdSdnEz6TThu2OSlh1uROJT-o21iFhsgmU8TzKj_OSzs_K5FY2UeWMSjwNuHm_A4RZ7rvK6JoBBOKjfSERgB8kPuIRCC" />
            </div>
            <div className="bg-surface-container-high p-12 flex flex-col justify-center textile-overlay">
              <h3 className="font-headline text-4xl font-bold text-on-surface mb-6">Mandu: <span className="text-tertiary">The City of Joy</span></h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Perched on a plateau, Mandu is a tribute to the love between Prince Baz Bahadur and Rani Roopmati. Its monumental Afghan architecture comes alive during the monsoon mist.
              </p>
              <a className="text-primary font-bold flex items-center space-x-2 group-hover:translate-x-2 transition-transform" href="#">
                <span>Explore the Monsoon Magic</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HiddenGems;
