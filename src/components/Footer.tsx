import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Globe, Share2, Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-black text-white tracking-tight">IzinBeres</span>
              <span className="text-accent ml-0.5 font-black">.com</span>
            </Link>
            <p className="text-gray-500 leading-relaxed text-sm">
              Mitra terpercaya Anda untuk pengurusan izin usaha dan kepatuhan hukum di Indonesia. Kami menyederhanakan birokrasi agar Anda bisa fokus membesarkan bisnis.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Globe size={18} /></Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Share2 size={18} /></Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Info size={18} /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 uppercase tracking-wider">Navigasi</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/about" className="hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Semua Layanan</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Hubungi Kami</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pusat Bantuan</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 uppercase tracking-wider">Layanan Utama</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/services/pendirian-pt" className="hover:text-white transition-colors">Pendirian PT</Link></li>
              <li><Link href="/services/pt-pma" className="hover:text-white transition-colors">Pendirian PT PMA</Link></li>
              <li><Link href="/services/bpom" className="hover:text-white transition-colors">Izin BPOM</Link></li>
              <li><Link href="/services/halal" className="hover:text-white transition-colors">Sertifikasi Halal</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 uppercase tracking-wider">Hubungi Kami</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-0.5 flex-shrink-0 text-accent" size={18} />
                <span className="leading-relaxed">Jakarta Selatan, DKI Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="flex-shrink-0 text-accent" size={18} />
                <span className="font-bold">+62 812-xxxx-xxxx</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="flex-shrink-0 text-accent" size={18} />
                <span className="font-bold">info@izinberes.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-600">
          <p>© {new Date().getFullYear()} IzinBeres.com. Seluruh hak cipta dilindungi.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
