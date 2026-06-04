'use client';

import React from 'react';
import { 
  Building2, 
  Globe, 
  ShieldCheck, 
  ChefHat, 
  Stethoscope, 
  Award,
  Search,
  Scale,
  Briefcase,
  FileText,
  Home,
  Truck,
  ArrowRight,
  Users,
  Clock
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { useLanguage } from '@/lib/LanguageContext';
import Link from 'next/link';
import LogoSlider from '@/components/LogoSlider';

const ServicesPage = () => {
  const { t, language } = useLanguage();
  
  // Icon mapping for service list
  const iconMap: Record<string, any> = {
    'Pendirian PT': Building2,
    'Pendirian PT PMA': Globe,
    'PT Formation': Building2,
    'PT PMA Formation': Globe,
    '本地 PT 设立': Building2,
    'PT PMA 设立': Globe,
    'Pendirian CV': Briefcase,
    'CV Formation': Briefcase,
    'CV 设立': Briefcase,
    'Yayasan & Perkumpulan': Scale,
    'Foundations & Associations': Scale,
    '基金会与协会': Scale,
    'Izin BPOM': Stethoscope,
    'BPOM Permit': Stethoscope,
    'BPOM 许可证': Stethoscope,
    'Sertifikasi Halal': ChefHat,
    'Halal Certification': ChefHat,
    '清真认证': ChefHat,
    'HAKI / Merek': ShieldCheck,
    'IPR / Trademark': ShieldCheck,
    '知识产权 / 商标': ShieldCheck,
    'Izin Alkes': Award,
    'Medical Device Permit': Award,
    '医疗器械许可': Award,
    'Manajemen OSS RBA': FileText,
    'OSS RBA Management': FileText,
    'OSS RBA 管理': FileText,
    'SBU & SIUJK': Home,
    '建筑服务行业执照': Home,
    'Izin Lingkungan': Truck,
    'Environmental Permits': Truck,
    '环境许可': Truck,
    'Sertifikasi ISO': Award,
    'ISO Certification': Award,
    'ISO 认证': Award,
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#001A33] pt-32 pb-64 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary opacity-20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-12 shadow-2xl">
              <Link href="/" className="text-white/40 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.2em]">{t.nav.home}</Link>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-accent text-xs font-black uppercase tracking-[0.2em]">{t.nav.services}</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.95]">
              {t.services.title.split(' ')[0]} {t.services.title.split(' ')[1]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-300 to-accent">
                {language === 'id' ? 'Tanpa Ribet.' : language === 'en' ? 'Made Easy.' : '变得简单'}
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/60 max-w-2xl font-medium leading-relaxed">
              {t.services.description}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Trust Slider */}
      <div className="-mt-12 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
           <p className="text-gray-400 font-black uppercase tracking-[0.3em] text-[10px]">
             {t.about.trustTitle}
           </p>
        </div>
        <LogoSlider />
      </div>

      {/* Services Explorer */}
      <section className="pt-24 pb-40 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {t.serviceList.map((group, groupIdx) => (
            <div key={groupIdx} className="mb-32 last:mb-0">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-1 bg-accent rounded-full" />
                    <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">
                       {t.services.category} 0{groupIdx + 1}
                    </span>
                  </div>
                  <h3 className="text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter italic">
                    {group.category}
                  </h3>
                </div>
                <div className="bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100">
                  <p className="text-gray-400 font-black text-sm uppercase tracking-wider">
                    {group.services.length} {t.services.available}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {group.services.map((service, idx) => (
                  <ServiceCard 
                    key={idx} 
                    {...service} 
                    icon={iconMap[service.title] || Building2} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support Section */}
      <section className="py-32 bg-gray-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-primary rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            
            <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-8">
                  <Search size={40} className="text-accent" />
                </div>
                <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter leading-tight">
                  {t.services.customTitle}
                </h2>
                <p className="text-xl text-white/70 mb-12 font-medium leading-relaxed">
                  {t.services.customDesc}
                </p>
                <Link href="/contact" className="btn-white inline-flex py-5 px-10 text-xl">
                  {t.services.customButton} <ArrowRight className="ml-2" />
                </Link>
              </div>
              
              <div className="hidden lg:grid grid-cols-2 gap-6">
                {[
                  { label: t.services.stats.consultation, val: '100%', icon: Globe },
                  { label: t.services.stats.success, val: '99.9%', icon: ShieldCheck },
                  { label: t.services.stats.time, val: '24/7', icon: Clock },
                  { label: t.services.stats.lawyers, val: '50+', icon: Users }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-sm">
                    <p className="text-4xl font-black mb-2 text-accent">{item.val}</p>
                    <p className="text-sm font-black uppercase tracking-widest text-white/50">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
