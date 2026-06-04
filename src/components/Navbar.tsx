'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { Language } from '@/lib/translations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.services, href: '/services' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.contact, href: '/contact' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'id', label: 'ID', flag: '🇮🇩' },
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'zh', label: 'ZH', flag: '🇨🇳' },
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <span className="text-2xl font-black text-primary tracking-tighter group-hover:text-accent transition-colors">IzinBeres</span>
              <span className="text-accent ml-0.5 font-black">.com</span>
            </Link>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-8 mr-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-primary font-black transition-all text-sm uppercase tracking-widest relative group/link"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover/link:w-full" />
                </Link>
              ))}
            </div>

            {/* Language Switcher with Flag */}
            <div className="relative mr-2">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all text-sm font-black text-gray-900 border border-gray-200"
              >
                <span className="text-lg leading-none">{currentLang.flag}</span>
                <span>{currentLang.label}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-3 w-36 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2 animate-in fade-in slide-in-from-top-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-5 py-3 text-sm font-black transition-all hover:bg-primary/5 ${
                        language === lang.code ? 'text-primary' : 'text-gray-500'
                      }`}
                    >
                      <span className="text-xl leading-none">{lang.flag}</span>
                      <span>{lang.label === 'ID' ? 'Indonesia' : lang.label === 'EN' ? 'English' : 'Mandarin'}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="btn-primary py-3 px-6 text-sm uppercase tracking-wider"
            >
              {t.nav.cta}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             {/* Language Mobile */}
             <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-sm font-black"
              >
                <span className="text-lg leading-none">{currentLang.flag}</span>
                <span>{currentLang.label}</span>
              </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 focus:outline-none p-1"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Language Mobile Drawer (Simplified) */}
      {isLangOpen && (
        <div className="md:hidden absolute right-4 top-24 w-32 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-[60] animate-in fade-in zoom-in-95">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsLangOpen(false);
              }}
              className="w-full flex items-center gap-3 px-5 py-4 text-sm font-black text-gray-900 border-b last:border-0 border-gray-50"
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 h-screen overflow-y-auto pb-32 animate-in slide-in-from-top-5 duration-500">
          <div className="px-6 pt-10 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-6 text-2xl font-black text-gray-900 border-b border-gray-50 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full py-6 text-xl mt-10"
            >
              {t.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
