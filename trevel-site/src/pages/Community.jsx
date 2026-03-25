import React from 'react';

const Community = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 pb-32">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-headline font-semibold text-sm mb-6">Our Shared Journey</span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tight mb-8">
              The Modern Caravan Community
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed">
              Connect with the soul of India through our network of artisans, explorers, and storytellers.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-primary text-on-primary rounded-full font-headline font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20">
                Join the Caravan
              </button>
              <button className="px-8 py-4 bg-secondary-container text-on-secondary-container rounded-full font-headline font-bold hover:scale-[1.02] active:scale-95 transition-all">
                Explore Stories
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-tertiary-fixed rounded-full blur-3xl opacity-30"></div>
            <img className="asymmetric-mask shadow-2xl w-full h-[500px] object-cover relative z-10" alt="A group of diverse travelers and local Indian artisans sitting together in a circle sharing stories in a warm sunlit courtyard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYJL8cpQ6gJytbbUyS31a4iszdhfcVXgiCKfkC0EFdWkeqP_yLJ0VdKDStptcpN0MoVqKXoiM1MvEoyu8YdxXh7XoMHlDL-bdH6UBgLFaJ4WQmIPpqHDAHvRqkXK_rBA1SnFRk8OuV4EX_Pg83u_qLA585zG_SV8ifOBAFUNVuWn-Y7SWV2GLiEHHYBLPucTUGYyRlKNg1ydtk8ooIPkFP1Ub7AX_lSrcpwLywt3uJTT8LfDD7ntbQ6Cd2WZJqzSWHiggCpebO6RmS" />
            <div className="absolute -bottom-6 -left-6 bg-surface-container-highest p-6 rounded-xl shadow-xl z-20 max-w-[200px]">
              <p className="text-primary font-headline font-bold text-sm mb-1">Live Now</p>
              <p className="text-on-surface text-xs leading-relaxed">Join the live discussion on Himalayan Sustainability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Traveler Circles */}
      <section className="py-16">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-headline font-bold mb-2">Traveler Circles</h2>
            <p className="text-on-surface-variant">Find your tribe among like-minded explorers</p>
          </div>
          <button className="text-secondary font-headline font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View all circles <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-3 px-6 py-4 bg-surface-container-lowest border border-outline-variant/20 rounded-xl hover:bg-secondary-container hover:text-on-secondary-container transition-all group">
            <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary-container">camera_enhance</span>
            <span className="font-headline font-bold">Heritage Photography</span>
          </button>
          <button className="flex items-center gap-3 px-6 py-4 bg-surface-container-lowest border border-outline-variant/20 rounded-xl hover:bg-secondary-container hover:text-on-secondary-container transition-all group">
            <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary-container">terrain</span>
            <span className="font-headline font-bold">Himalayan Trekking</span>
          </button>
          <button className="flex items-center gap-3 px-6 py-4 bg-surface-container-lowest border border-outline-variant/20 rounded-xl hover:bg-secondary-container hover:text-on-secondary-container transition-all group">
            <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary-container">account_balance</span>
            <span className="font-headline font-bold">Temple Architecture</span>
          </button>
          <button className="flex items-center gap-3 px-6 py-4 bg-surface-container-lowest border border-outline-variant/20 rounded-xl hover:bg-secondary-container hover:text-on-secondary-container transition-all group">
            <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary-container">eco</span>
            <span className="font-headline font-bold">Rural Sustainability</span>
          </button>
          <button className="flex items-center gap-3 px-6 py-4 bg-surface-container-lowest border border-outline-variant/20 rounded-xl hover:bg-secondary-container hover:text-on-secondary-container transition-all group">
            <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary-container">palette</span>
            <span className="font-headline font-bold">Traditional Crafts</span>
          </button>
        </div>
      </section>

      {/* Local Storytellers (Bento Grid) */}
      <section className="py-16 textile-pattern rounded-3xl p-8 md:p-12">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Local Storytellers</h2>
          <p className="text-on-surface-variant text-lg">Beyond the maps lie the voices of those who hold the keys to India's living history.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          <div className="md:col-span-7 relative group overflow-hidden rounded-2xl shadow-lg">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Portrait of an elder Apatani woman with traditional facial tattoos and bamboo nose plugs in Ziro valley, Arunachal Pradesh" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhSBM0jIiRAZkNzv_LXptDqQ46_dV5fsq-dz12DMotBBur4OnISrHkMnXDzWpQ-e-GMf1coBZ-JWTrKysc4PlMojzlxiWeVJQ_QLaad5e2Ra-NSsQJVbMHxbzk_6EWzWGPcA2pcqNMxeYS3yWeZ9vYk9yP4RdqQRu43be62UL0kLahkiPmux2rjC0ZoI0Ml_FzotLOIF-kp-1jFNDwQV58f3hBD6ttylW9jLxJFVuRCOZLaAzfBVLe9hVacM5Inpy3vbnXKRZU6RJH" />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent flex flex-col justify-end p-8">
              <span className="text-tertiary font-headline font-bold text-sm tracking-widest uppercase mb-2">Interview of the Month</span>
              <h3 className="text-3xl font-headline font-bold text-white mb-4 leading-tight">Meet Tani, an Apatani weaver in Ziro</h3>
              <p className="text-white/80 max-w-md mb-6">"Our patterns are not just designs; they are our ancestors' whispers caught in thread."</p>
              <button className="w-fit px-6 py-2 bg-white text-primary rounded-full font-headline font-bold hover:bg-primary hover:text-white transition-all">Read Her Story</button>
            </div>
          </div>
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            <div className="relative group overflow-hidden rounded-2xl shadow-md">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Young artisan potter working on a traditional clay wheel in Mandu, Madhya Pradesh, hands covered in smooth brown mud" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArenaGVLrM2FOhcaNT_qabCbsqwvXNsohuCucgZEczh0oWqx7V5IU9t0tWhC5BjInVJdTbUToj9Z9mgHQB6aCMJwVk9z25_R7nfn7QEf_4IF1bwz8cxNcs-_C1TzaYvTtQDOSpMjbnMjSE-qLhttxjpCk8_871bvfbeGyx3jbP3ikjKumAX0KXl9sBICdOlTS6vAKcIfI-Jf2-F9UTVIPzPQP6_ZyiXVJWoYuJnK9ObaxDVx9E2EUD9q-rveV5dnKCjbJ1lP0iaLwC" />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-xl font-headline font-bold text-white mb-1">Rohan of Mandu</h4>
                <p className="text-white/70 text-sm">Preserving the terracotta legacy of the Deccan.</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-md">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Smiling Rajasthani folk musician holding an ornate traditional stringed instrument in a desert village setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbg4JitPOGmbXtfNFKahHhWFgZOMzYkddM6Dq9h8okjrD0cz4aqZxPno5lRGJipCEnqXAnlsOVnT2v7LMJQeBcZ97xv24evbjzjWvp7fI4_1EUbfWQnUTc7E6g5mp69TywZpCeTWBT2vDvJwkW8OiyEDr7SKIF4_yuDDAcXinZKOEubIIXlOr6-3izjHY60WKK0t7fCwPr5ghdvX1xXcx5WV6uM898YhJWG_j5vo4TQBtkHld3HPd3pdKsH8OZycmzRYOUnhdMVLzw" />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-xl font-headline font-bold text-white mb-1">The Manganiyars</h4>
                <p className="text-white/70 text-sm">Oral traditions and desert melodies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artisan Workshops */}
      <section className="py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-headline font-bold mb-4">Upcoming Artisan Workshops</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        <div className="space-y-6">
          {/* Workshop Item 1 */}
          <div className="group flex flex-col md:flex-row items-center gap-8 p-6 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-300">
            <div className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container p-4 rounded-xl min-w-[100px]">
              <span className="text-xs uppercase font-headline font-bold tracking-widest">Oct</span>
              <span className="text-3xl font-headline font-black">24</span>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-headline font-bold mb-1 group-hover:text-primary transition-colors">Pottery Workshop in Mandu</h3>
              <p className="text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">location_on</span> Mandu, Madhya Pradesh
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Traveler profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBScdSAqXeADlHG1ljaVA_6EQA4OgEWYQEAOKys3DjdBCDBvWm9xNwn5KmAFTVjEyFVTT9ymWhUSQ7YKz1FOLQ_eluGqh4vR1ykBocZ-pIKDjltTF512-IdvsT-unKD4INM6AJ7JooHJGewHxZ6w8lm2pkhAE7keUhD16lnGYlVnriPcus62abcyrIK1SWuGxNCpOua01K4BYgA5rzJA31rqECSc0BemjqnQf4o_aulfZn5vO0t8OgceI8TxRoM5Dw1tbHiu3XL9U95" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Traveler profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_zoucEm97qU8yYKccdUnhFyinsfTotMSStEP6gvRU5qSqkUE2TjFg-0J3uYLzqjVOqpM5GyCH2RhK6ctvYt_AIMlcO8gEtXLSTkYk-c8Pp76dKO1UC5i6Y9S94jQ5krmI4EkvuIYjBXbQUQ5qDAMXeBZ0WEDoczqAvEla9uA9dZrHc9V4-ipVfqAOeuNOGrHeug2KzF-eACkDy1DLmwIT9tX940Tg9p8kNSHLVN8_S3KZDK86U4QMHI3dzD9Ukv9XWMqxvaPN4Ac7" />
                <div className="w-10 h-10 rounded-full bg-surface-variant border-2 border-white flex items-center justify-center text-xs font-bold">+12</div>
              </div>
              <button className="px-6 py-2 border-2 border-primary text-primary rounded-full font-headline font-bold hover:bg-primary hover:text-white transition-all">Secure Spot</button>
            </div>
          </div>
          {/* Workshop Item 2 */}
          <div className="group flex flex-col md:flex-row items-center gap-8 p-6 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-300">
            <div className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container p-4 rounded-xl min-w-[100px]">
              <span className="text-xs uppercase font-headline font-bold tracking-widest">Nov</span>
              <span className="text-3xl font-headline font-black">02</span>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-headline font-bold mb-1 group-hover:text-secondary transition-colors">Oral Traditions of the Deccan</h3>
              <p className="text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">location_on</span> Hampi, Karnataka
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Traveler profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxn6jSW0WlPsN0i9twCoM9wAIRh6XlClyYAU2pnI-QKDWY_d5qh_1dd3ERI6TVBmekH0N5dDEac-59L90GkqnB-ktBml-3ebcNXRcZnCVJo3VFfZYOuQobVvLGiFlznUE13QXony8BlZ7byhYHOp28Mu8LbQRvYTzDhsOdRtjLnAO3erGHWdp7c0sZCxt6hRsVgcY-14yDIIWIuO_zsfMPr6cjoDruEp2JM07XdhtEgYxxZnjwYXJKVBSyqIpGUB5hXVm61RyPX-uM" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Traveler profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV8qbUUS7sCJ1b9V8CmZ_T9gZVFjDs-LPpLZDMPbmrg2J9l7R0mEYPQZ37OUaHcSpm24iJQDvaH_1x5F3EWPJ5Xd7MnqtRqnDAylqnSzxzODHexq5b1pQTsZniGgbruMtN5qWvaN8i9pSmgHqWCOz3MlG3oqKsTQdb3T1QFrRVXpeDWhrJjctHJlwIzD8-_6-eQltaTkm0umiK1VFV1D3JcQaNVM4qV24rzpRGDYdjpKyKtE0z382_PM3OWmeZqL3IDJ-C-4bZIXZ2" />
                <div className="w-10 h-10 rounded-full bg-surface-variant border-2 border-white flex items-center justify-center text-xs font-bold">+8</div>
              </div>
              <button className="px-6 py-2 border-2 border-primary text-primary rounded-full font-headline font-bold hover:bg-primary hover:text-white transition-all">Secure Spot</button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Feed */}
      <section className="py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-headline font-bold mb-2">Moments from the Road</h2>
            <p className="text-on-surface-variant">Real stories captured by our community of travelers</p>
          </div>
          <div className="flex bg-surface-container rounded-full p-1">
            <button className="px-6 py-2 bg-white rounded-full shadow-sm font-headline font-bold text-sm">Trending</button>
            <button className="px-6 py-2 font-headline font-bold text-sm text-on-surface-variant">Latest</button>
          </div>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {/* Feed Item 1 */}
          <div className="break-inside-avoid group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative">
              <img className="w-full object-cover" alt="Atmospheric wide shot of the Taj Mahal at dawn with soft orange sky and reflection in water" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYjKPQwDWsxK859NTT17xScD-qcul_gc2eybssQbJEyg0aO92_uTvm0FXne9Mcxn8zLiGaZ9j8-pJDyCYFrqWmmCsXiwYLAkXguLoSxeSUKjEKdUg8pYIzcAcPxHNp1tFds_EQ47tjsHo6ZuzI7FtDKDmAoS4TTthFT59eJtpGzGOF36O1rCD__xSCkvzp4awuWbvoO3q29bRKkpyphIYUPHB_6R8Uz7LWUlCkw4AS3Oh_sYoVxR7TOCNwKKD_O_PmGoAK--hVb10g" />
              <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md p-2 rounded-full">
                <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-headline font-bold text-lg mb-2">Sunrise at Orchha</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">"The way the light hits the chhatris here is something you can't describe in words. It felt like time stopped."</p>
              <div className="flex items-center gap-3">
                <img className="w-8 h-8 rounded-full" alt="Traveler Sarah" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvt7PAB87Jhj-pJrZKePde8Z--_JIyUEOyf9YL3_ffQMOUn233SwHahDcFg2YjqQ82Em1cH-wUEHFSMGjIV9fblI5Xt4z92xB2L-pKGyrBhad3tU7mb9M0EwrmOjKVLW6mvrpXRCh-kjnf8O4tQK8sYuTvdPITltZqWk_ai1d801wyi1b-2CLSEujP53MEeH_D-l_qohUpIGZZY2l0dly4c_TkL9rZIDdaBtLlRHoj37cfY5Y1jQNm5gA-lqyB6fJlYT2E9rPKkNnR" />
                <span className="text-xs font-bold text-on-surface">By Sarah J.</span>
              </div>
            </div>
          </div>
          {/* Feed Item 2 */}
          <div className="break-inside-avoid group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative">
              <img className="w-full object-cover" alt="Traditional Khasi feast served on green banana leaves with vibrant colored dishes and fresh herbs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDNBMwMgsxf-mw1g5f43fOxV1quyeZH7IIwGkglrPoLgkUPDLmYpt2VjYe-ZwVnpneQhTfTcxpst0Iic_hZXm3eZKGLdT3JZTPiC4nqKr2V6Q3UD5ixD0PPVMMcPr_mYXSk1RaqW-rFSoNzptWmuUnhU8NwXqy6GF8z8-Kw8EHs0ed9VvGMgOa7dsej8Sq3DotaA4NhULDd2cDJY_m09JF8j-O_MDDa_FoFPm3v-9_VxWbeyL0ht4cnEYOzmFQe2Xt4dRntfpzvVfy" />
            </div>
            <div className="p-6">
              <h4 className="font-headline font-bold text-lg mb-2">A feast with the Khasi community</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">"Jadoh, fermented fish, and stories that lasted until midnight in a small village near Mawlynnong."</p>
              <div className="flex items-center gap-3">
                <img className="w-8 h-8 rounded-full" alt="Traveler Arjun" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm-w_monxl8aQiCnKwSng1V5trGX2NW5XSpxIDHPAa06ABEaHNSdglphRCN8sU0_Y7pJ0NVMPc87BLS838GKzwn5Ay0vIH7mO_MkT7xB4WwvYjh6gGT-Y0eUEV_zG5k_0X7mpvYZQRr_7Aq3vRu7z6gyza9hY014o85d-dOj0nDj36_LPm7K1SijfBRBpPgTViL63XwfEeSt8SjhoSx0LGtSXCYI8TJCsItw_9O8BopjRvu8Z2k34dY3HcZy-h3vGCs2GwtTuyY23l" />
                <span className="text-xs font-bold text-on-surface">By Arjun R.</span>
              </div>
            </div>
          </div>
          {/* Feed Item 3 */}
          <div className="break-inside-avoid group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative">
              <img className="w-full object-cover" alt="Close-up of golden boulders and ancient stone structures in Hampi under a warm afternoon sun" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA86KU6vFKvAafPZ_thhz3x_bROG4JFuyMf3yEVgvUae9NhOAu9vYUTglaOPmIwORZoeBzQMu2TkXj0H-4LXxlEhxCiTPT1hn-TfrMsW4ctsqNKX1QtW6m-S_qHT7g8EtccBUKsANPmyAJO-SmMWUDNcsSQYzmJ3KN5lnfTsSPj9B-sk9zvngg7F3N6TCNig0_0ZmvdsAn1zMUWF8VtyHzDEKEBxQbBaEo1vsPiUtPYkDMx5R0v_qsN9HrkT7LgHslA4pHMaiNG2Rd2" />
            </div>
            <div className="p-6">
              <h4 className="font-headline font-bold text-lg mb-2">Shadows of Vijayanagara</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">"Climbing the Matanga Hill at 5 AM was the highlight of my year. The ruins look magical from above."</p>
              <div className="flex items-center gap-3">
                <img className="w-8 h-8 rounded-full" alt="Traveler Chloe" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgtk7L3nGeC10dHV-3Axu14dG3bMcTT2p6qWWWGUX4zIN-nb5Kb669zjwc-h6ARnAve9H-ZmbnOI6o2NSqAYJGmJDT1N5VF_QdU-TskOUauQ5ViFwQSsDQXgI55NyvWTxjW949vP9PzidjffIMECoUKV1cVQ0gp0VfRcGWKB62X3uvLtOz3QNf2isAex6o647qJdHIyj7Unu5mboeYwGW9VlV0RX_LRsH8pFmVGxDidKnHnlZirjkL7KcsT4Ws-4Hr7YhiYrzq-QyU" />
                <span className="text-xs font-bold text-on-surface">By Chloe M.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <button className="px-10 py-4 bg-on-surface text-white rounded-full font-headline font-bold hover:scale-105 active:scale-95 transition-all">
            Load More Stories
          </button>
        </div>
      </section>
    </main>
  );
};

export default Community;