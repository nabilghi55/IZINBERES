'use client';

import React from 'react';

const partners = [
  { name: 'KEMENKUMHAM', color: '#003366' },
  { name: 'OSS RBA', color: '#3b82f6' },
  { name: 'BPOM RI', color: '#059669' },
  { name: 'MUI HALAL', color: '#10b981' },
  { name: 'DJKI HAKI', color: '#6366f1' },
  { name: 'BKPM', color: '#1e3a8a' },
  { name: 'KEMENKES', color: '#0d9488' },
  { name: 'ISO CERT', color: '#475569' },
];

const LogoSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-12 border-y border-gray-100 relative group">
       {/* Gradient Overlays for smooth fade effect */}
       <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
       <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
       
       <div className="flex animate-scroll whitespace-nowrap">
          {/* Double the array for infinite effect */}
          {[...partners, ...partners].map((partner, idx) => (
            <div 
              key={idx} 
              className="inline-flex items-center justify-center px-12 py-4 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500"
            >
              <div className="flex flex-col items-center gap-2">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg transform group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: partner.color }}
                >
                  {partner.name.substring(0, 1)}
                </div>
                <span className="text-gray-900 font-black tracking-tighter text-lg">{partner.name}</span>
              </div>
            </div>
          ))}
       </div>
    </div>
  );
};

export default LogoSlider;
