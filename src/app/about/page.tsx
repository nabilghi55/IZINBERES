'use client';

import React from 'react';
import { Target, Eye, ShieldCheck, Clock, Award } from 'lucide-react';
import LogoSlider from '@/components/LogoSlider';

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gray-50 pt-20 pb-24 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tight leading-tight">
              Memudahkan Legalitas <br />
              <span className="text-primary">Bisnis di Indonesia.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed font-medium">
              Didirikan dengan misi untuk mempercepat pertumbuhan kewirausahaan, IzinBeres menyediakan dukungan hukum end-to-end untuk bisnis lokal maupun internasional.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">Siapa Kami</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6 font-medium">
                IzinBeres adalah tim konsultan hukum, pakar bisnis, and spesialis regulasi yang berdedikasi untuk membantu perusahaan menavigasi kompleksitas hukum Indonesia. Kami memahami bahwa birokrasi seringkali menjadi penghambat inovasi.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                Apakah Anda seorang pengusaha pertama yang mendirikan PT Lokal atau perusahaan multinasional yang meluncurkan lini produk baru, kami menyediakan keahlian dan pengetahuan lokal yang diperlukan untuk memastikan kepatuhan penuh dan masuk ke pasar dengan cepat.
              </p>
            </div>
            <div className="order-1 lg:order-2 bg-primary rounded-[3rem] p-12 text-white shadow-2xl shadow-primary/20 rotate-1 lg:rotate-2">
               <div className="grid grid-cols-2 gap-10">
                  {[
                    { label: 'Berdiri Sejak', value: '2020', icon: Clock },
                    { label: 'Kepuasan Klien', value: '98%', icon: Award },
                    { label: 'Izin Terbit', value: '1500+', icon: ShieldCheck },
                    { label: 'Konsultan Ahli', value: '30+', icon: Target }
                  ].map((stat, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                        <stat.icon size={24} />
                      </div>
                      <p className="text-4xl font-black mb-1 tracking-tight">{stat.value}</p>
                      <p className="text-white/60 font-bold uppercase text-xs tracking-widest">{stat.label}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-12 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
               <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-8">
                 <Target size={32} />
               </div>
               <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Misi Kami</h3>
               <p className="text-gray-500 leading-relaxed text-lg font-medium">
                 Memberdayakan pemilik bisnis dengan menyediakan layanan hukum yang mudah diakses, transparan, dan efisien, menghilangkan hambatan birokrasi yang menghalangi pertumbuhan ekonomi.
               </p>
            </div>
            <div className="p-12 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
               <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-8">
                 <Eye size={32} />
               </div>
               <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Visi Kami</h3>
               <p className="text-gray-500 leading-relaxed text-lg font-medium">
                 Menjadi mitra legalitas digital-first paling tepercaya di Asia Tenggara, yang dikenal karena integritas, kecepatan, dan keunggulan dalam kepatuhan bisnis.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Trust */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <p className="text-gray-400 font-black uppercase tracking-[0.3em] text-xs">Diakui & Terdaftar Di</p>
        </div>
        <LogoSlider />
      </section>
    </div>
  );
};

export default AboutPage;
