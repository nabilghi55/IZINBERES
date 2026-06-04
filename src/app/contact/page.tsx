'use client';

import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-primary pt-24 pb-40 text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">Hubungi Kami</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">
            Punya pertanyaan mengenai perizinan bisnis? Tim kami siap memberikan jawaban dan dukungan yang Anda butuhkan.
          </p>
        </div>
      </section>

      <section className="-mt-24 pb-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {[
                { title: 'Telepon', value: '+62 812-xxxx-xxxx', icon: Phone, sub: 'Senin-Jumat, 09:00 - 17:00' },
                { title: 'Email', value: 'info@izinberes.com', icon: Mail, sub: 'Balasan dalam 24 jam' },
                { title: 'Alamat', value: 'DKI Jakarta, Indonesia', icon: MapPin, sub: 'Pusat Bisnis Sudirman' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 mb-1 uppercase text-xs tracking-widest">{item.title}</h3>
                    <p className="text-lg text-primary font-black mb-1">{item.value}</p>
                    <p className="text-xs text-gray-400 font-bold">{item.sub}</p>
                  </div>
                </div>
              ))}

              <div className="bg-accent rounded-[2rem] p-10 text-white shadow-2xl shadow-accent/20">
                <h3 className="text-2xl font-black mb-4 tracking-tight">Dukungan Instan</h3>
                <p className="mb-8 opacity-80 font-medium">Butuh jawaban cepat? Chat langsung dengan konsultan kami melalui WhatsApp.</p>
                <a 
                  href="https://wa.me/62812XXXXXXXX"
                  className="btn-white w-full py-5 text-accent"
                >
                  <MessageCircle size={24} /> Chat di WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
               <div className="bg-white rounded-[3rem] p-12 shadow-sm border border-gray-100">
                  <h2 className="text-3xl font-black text-gray-900 mb-10 tracking-tight">Kirim Pesan</h2>
                  <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Nama Lengkap</label>
                        <input 
                          type="text" 
                          placeholder="Contoh: Budi Santoso" 
                          className="w-full px-6 py-5 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Alamat Email</label>
                        <input 
                          type="email" 
                          placeholder="budi@perusahaan.com" 
                          className="w-full px-6 py-5 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Nomor WhatsApp</label>
                        <input 
                          type="text" 
                          placeholder="0812xxxxxxx" 
                          className="w-full px-6 py-5 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Layanan yang Dibutuhkan</label>
                        <select className="w-full px-6 py-5 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium appearance-none">
                          <option>Pendirian PT</option>
                          <option>PT PMA</option>
                          <option>Izin BPOM</option>
                          <option>Sertifikasi Halal</option>
                          <option>Lainnya</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Pesan Anda</label>
                      <textarea 
                        rows={5} 
                        placeholder="Ceritakan kebutuhan legalitas bisnis Anda..." 
                        className="w-full px-6 py-5 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="btn-primary w-full md:w-auto px-12 py-5"
                    >
                      <Send size={22} /> Kirim Sekarang
                    </button>
                  </form>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="h-[500px] bg-gray-50 rounded-[3rem] flex items-center justify-center border border-gray-100 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/106.8272, -6.1751,12/1200x500?access_token=placeholder')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-1000" />
              <div className="text-center relative z-10 p-10 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white">
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin size={40} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Lokasi Kantor Kami</h3>
                <p className="text-gray-500 font-bold mb-1">Sudirman Central Business District (SCBD)</p>
                <p className="text-gray-400 text-sm font-medium">Jakarta Selatan, DKI Jakarta</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
