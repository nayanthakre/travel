import React from 'react';

const Discover = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-12 pb-32">
      <section className="mb-24 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label text-sm font-semibold mb-6">Arunachal Pradesh</span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter leading-none mb-8">
              The Soul of <span className="text-primary italic">Ziro Valley</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed">
              Step beyond the ordinary. Experience the warmth of Apatani hospitality and the deep flavors of an ancient, mist-covered landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-primary/20">Book a Stay</button>
              <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform">Explore Menu</button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary-container/10 rounded-[2rem] -rotate-3 transition-transform group-hover:rotate-0"></div>
            <img className="relative rounded-[1.5rem] w-full aspect-[4/5] object-cover shadow-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZMnmCZ2B6-Kyh0TCWdxbfP5wg7X-BZ54dmFNI8r0dJ1df3Y_Hf6mlgjrw0ESann4KVImfrKLzgIjcBAn6VVgemjw-cO52ov0q0PtT58pYe7eEmorVTuJtwukouGTSP0jFEzdVLRTGt-t6-j6xieMEx1Bmej5FpxWU01mZLz7fzt2HepaHhD5dFXOPrJN4ZNikVy1ZU-06rlJUQXd0ShjtNZa_U84GjSkl1x7FNJO4C8dbV1PZPIE6D1zB70MiFI4QNO5LXacqH2ca" alt="Ziro Valley" />
          </div>
        </div>
      </section>

      <section className="mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-headline text-4xl font-bold mb-4">Locally Owned Homestays</h2>
            <p className="text-on-surface-variant">Live with the Apatani community in homes that breathe history.</p>
          </div>
          <div className="flex bg-surface-container-low p-2 rounded-full">
            <button className="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface font-medium text-sm">Traditional</button>
            <button className="px-6 py-2 rounded-full text-on-surface-variant font-medium text-sm hover:text-primary transition-colors">Modern</button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Homestay Cards */}
        </div>
      </section>

      <section className="mb-32 textile-pattern bg-surface-container-low -mx-6 px-6 py-24 rounded-[3rem]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-extrabold mb-4 text-primary">Flavors of Ziro</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Discover the culinary heritage of the Apatani tribe, where every ingredient is harvested from the valley floor.</p>
            <div className="flex justify-center gap-4 mt-8">
              <button className="bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-semibold">All Dishes</button>
              <button className="border border-outline px-6 py-2 rounded-full text-sm font-semibold hover:bg-surface transition-colors">Vegetarian</button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Food Item Cards */}
          </div>
        </div>
      </section>

      <section className="mb-32">
        <div className="bg-secondary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline text-4xl font-bold mb-8">Meet the Locals: A Guide to Respectful Connection</h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">The Apatanis are known for their sustainable agriculture and rich oral history. Engaging with them requires patience, a smile, and respect for their traditions.</p>
              <div className="space-y-6">
                {/* Guide Items */}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img className="rounded-2xl w-full aspect-square object-cover rotate-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFmnqf0yMSJSC4ZvN2Embm5ypDnXONri0YJmdg8zUYxe-Llahi8fYLyQGuXB7t3WtV8JEiqp6kBMWJMJXtHTEWo_jcQxCvkfqOnwi0ivX8gvgqIfKlca9rF9_jv_0GSFz5NZ4PM0LaWE_pvIUjCAzHJVAufnjXfXvT8o3w2L_d9ptLRai9vFt1TBQJwi_CMMSADNgvpiGmPXMr8rJx0j5bYLz1bFIeDf4ZedWksuZJEXJOcsJIob08byhtFUqSc2TDwmHtls-TlWIP" alt="Apatani man" />
              <img className="rounded-2xl w-full aspect-square object-cover -rotate-3 mt-12" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6stv8_56qU7Zd_7v_9zc98-HUQ7Vgi26fQmMy7nrkkeVeepTURbc0LNwY7Mm7IjREf43iOsRVoXQc144QRMVJxL3Rz8W_bKYLqiWcIt40rPLGw4NG_mlYlQkj_I4t_sRvuWZs8A9BXumioaK2QYBN0Kyi0OSrYR__-IvDxNpJ0DLST1SwDN1mgM2YyyjwyDU9IN4wv8Ybr-9Fg72oqp92z_Ui-LZQO6tYX6rvzBe4x1DPYIq_ohFearmRzFC2sYJhT06NEANrFBod" alt="Apatani woman" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Discover;
