'use client';

import React from 'react';
import { 
  Building2, 
  Globe, 
  ShieldCheck, 
  ChefHat, 
  Stethoscope, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  MessageCircle,
  Briefcase
} from 'lucide-react';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import { useLanguage } from '@/lib/LanguageContext';
import LogoSlider from '@/components/LogoSlider';

const HomePage = () => {
  const { t } = useLanguage();

  const featuredServices = [
    {
      title: t.serviceList[0].services[0].title,
      description: t.serviceList[0].services[0].description,
      icon: Building2,
      href: '/services/pendirian-pt',
      category: t.serviceList[0].category
    },
    {
      title: t.serviceList[0].services[1].title,
      description: t.serviceList[0].services[1].description,
      icon: Globe,
      href: '/services/pt-pma',
      category: t.serviceList[0].category
    },
    {
      title: t.serviceList[1].services[0].title,
      description: t.serviceList[1].services[0].description,
      icon: Stethoscope,
      href: '/services/bpom',
      category: t.serviceList[1].category
    },
    {
      title: t.serviceList[1].services[1].title,
      description: t.serviceList[1].services[1].description,
      icon: ChefHat,
      href: '/services/halal',
      category: t.serviceList[1].category
    },
    {
      title: t.serviceList[1].services[2].title,
      description: t.serviceList[1].services[2].description,
      icon: Briefcase,
      href: '/services/haki',
      category: t.serviceList[1].category
    },
    {
      title: t.serviceList[2].services[0].title,
      description: t.serviceList[2].services[0].description,
      icon: ShieldCheck,
      href: '/services/oss',
      category: t.serviceList[2].category
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm mb-6">
                <CheckCircle2 size={16} className="mr-2" />
                {t.hero.badge}
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                {t.hero.title} <br />
                <span className="text-primary text-shadow-sm">{t.hero.titleAccent}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link 
                  href="/services" 
                  className="btn-primary min-w-[200px]"
                >
                  {t.hero.ctaPrimary} <ArrowRight className="ml-1" size={22} />
                </Link>
                <Link 
                  href="/contact" 
                  className="btn-outline min-w-[200px]"
                >
                  {t.hero.ctaSecondary}
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden border border-gray-100 shadow-2xl relative">
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <div className="grid grid-cols-2 gap-6 w-full">
                      {[
                        { label: t.hero.stats.fast, icon: TrendingUp },
                        { label: t.hero.stats.expert, icon: Users },
                        { label: t.hero.stats.legal, icon: ShieldCheck },
                        { label: t.hero.stats.support, icon: MessageCircle }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                            <item.icon size={24} />
                          </div>
                          <span className="font-bold text-gray-900">{item.label}</span>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-accent font-bold uppercase tracking-wider mb-3">{t.services.badge}</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-4 text-shadow-sm">{t.services.title}</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {t.services.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, idx) => (
              <ServiceCard 
                key={idx} 
                {...service} 
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              href="/services" 
              className="inline-flex items-center text-primary font-bold text-lg hover:underline group"
            >
              {t.services.viewAll} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
               <h2 className="text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                {t.whyChooseUs.title} <br />
                <span className="text-primary">{t.whyChooseUs.titleAccent}</span>
               </h2>
               <div className="space-y-6">
                 {t.whyChooseUs.items.map((item, idx) => (
                   <div key={idx} className="flex gap-4 group">
                     <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                       <CheckCircle2 size={16} />
                     </div>
                     <div>
                       <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                       <p className="text-gray-600">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
            
            <div className="bg-primary rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MessageCircle size={120} />
              </div>
              <h3 className="text-3xl font-bold mb-6 italic leading-relaxed">{t.whyChooseUs.testimonial}</h3>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl">R</div>
                <div>
                  <p className="font-bold text-lg">Richard Wang</p>
                  <p className="text-white/60">CEO, Global Ventures Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Slider */}
      <section className="py-20 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <p className="text-gray-400 font-black uppercase tracking-[0.3em] text-xs">{t.about.trustTitle}</p>
        </div>
        <LogoSlider />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h2 className="text-4xl font-extrabold mb-6">{t.cta.title}</h2>
          <p className="text-xl mb-10 text-white/80">
            {t.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="btn-white px-12 py-5 text-xl"
            >
              {t.cta.button}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
