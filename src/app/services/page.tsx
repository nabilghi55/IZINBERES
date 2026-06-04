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
  const { language } = useLanguage();
  
  const allServices = [
    {
      category: "Pendirian Badan Usaha",
      categoryEn: "Business Entity Formation",
      categoryZh: "企业设立",
      services: [
        { title: 'Pendirian PT', description: 'Legalitas lengkap PT Lokal (Akta, SK, NIB, NPWP).', icon: Building2, href: '/services/pendirian-pt' },
        { title: 'Pendirian PT PMA', description: 'Solusi investasi asing dengan kepatuhan BKPM.', icon: Globe, href: '/services/pt-pma' },
        { title: 'Pendirian CV', description: 'Legalitas untuk usaha persekutuan komanditer.', icon: Briefcase, href: '/services/cv' },
        { title: 'Yayasan & Perkumpulan', description: 'Pendaftaran entitas non-profit dan sosial.', icon: Scale, href: '/services/yayasan' },
      ]
    },
    {
      category: "Sertifikasi & Perizinan Khusus",
      categoryEn: "Certification & Special Licensing",
      categoryZh: "认证与特殊许可",
      services: [
        { title: 'Izin BPOM', description: 'Registrasi pangan olahan, kosmetik, dan obat.', icon: Stethoscope, href: '/services/bpom' },
        { title: 'Sertifikasi Halal', description: 'Pengurusan sertifikat resmi BPJPH/MUI.', icon: ChefHat, href: '/services/halal' },
        { title: 'HAKI / Merek', description: 'Perlindungan merek dagang dan hak cipta.', icon: ShieldCheck, href: '/services/haki' },
        { title: 'Izin Alkes', description: 'Penyaluran alat kesehatan dan PKRT.', icon: Award, href: '/services/alkes' },
      ]
    },
    {
      category: "Kepatuhan & Operasional",
      categoryEn: "Compliance & Operations",
      categoryZh: "合规与运营",
      services: [
        { title: 'Manajemen OSS RBA', description: 'Update data NIB dan sistem OSS terbaru.', icon: FileText, href: '/services/oss' },
        { title: 'SBU & SIUJK', description: 'Sertifikat badan usaha jasa konstruksi.', icon: Home, href: '/services/siujk' },
        { title: 'Izin Lingkungan', description: 'Pengurusan dokumen SPPL, UKL-UPL, Amdal.', icon: Truck, href: '/services/lingkungan' },
        { title: 'Sertifikasi ISO', description: 'Standar manajemen mutu internasional.', icon: Award, href: '/services/iso' },
      ]
    }
  ];

  const getCategory = (group: any) => {
    if (language === 'en') return group.categoryEn;
    if (language === 'zh') return group.categoryZh;
    return group.category;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#001A33] pt-32 pb-64 overflow-hidden">
        {/* Modern Mesh Gradient / Soft Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary opacity-20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        
        {/* Dot Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-12 shadow-2xl">
              <Link href="/" className="text-white/40 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.2em]">{language === 'id' ? 'Beranda' : language === 'en' ? 'Home' : '首页'}</Link>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-accent text-xs font-black uppercase tracking-[0.2em]">{language === 'id' ? 'Layanan' : language === 'en' ? 'Services' : '服务'}</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.95]">
              {language === 'id' ? 'Solusi Legalitas' : language === 'en' ? 'Legal Solutions' : '法律解决方案'} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-300 to-accent">
                {language === 'id' ? 'Tanpa Ribet.' : language === 'en' ? 'Made Easy.' : '变得简单'}
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/60 max-w-2xl font-medium leading-relaxed">
              {language === 'id' 
                ? 'Kami menangani seluruh aspek birokrasi perizinan sehingga Anda dapat fokus penuh pada pengembangan bisnis Anda.'
                : language === 'en' 
                ? 'We handle all aspects of licensing bureaucracy so you can focus entirely on growing your business.'
                : '我们处理许可官僚机构的所有方面，让您可以完全专注于发展您的业务。'}
            </p>
          </div>
        </div>

        {/* Smooth transition to the list */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Trust Slider */}
      <div className="-mt-12 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
           <p className="text-gray-400 font-black uppercase tracking-[0.3em] text-[10px]">
             {language === 'id' ? 'Diakui & Terdaftar Di' : language === 'en' ? 'Recognized & Registered At' : '认可与注册'}
           </p>
        </div>
        <LogoSlider />
      </div>

      {/* Services Explorer */}
      <section className="pt-24 pb-40 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {allServices.map((group, groupIdx) => (
            <div key={groupIdx} className="mb-32 last:mb-0">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-1 bg-accent rounded-full" />
                    <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">
                       {language === 'id' ? 'Kategori' : language === 'en' ? 'Category' : '类别'} 0{groupIdx + 1}
                    </span>
                  </div>
                  <h3 className="text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter italic">
                    {getCategory(group)}
                  </h3>
                </div>
                <div className="bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100">
                  <p className="text-gray-400 font-black text-sm uppercase tracking-wider">
                    {group.services.length} {language === 'id' ? 'Layanan Tersedia' : language === 'en' ? 'Services Available' : '可选服务'}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {group.services.map((service, idx) => (
                  <ServiceCard key={idx} {...service} />
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
                  {language === 'id' ? 'Tidak Menemukan Izin yang Dicari?' : language === 'en' ? "Can't Find the License You Need?" : '找不到所需的许可证？'}
                </h2>
                <p className="text-xl text-white/70 mb-12 font-medium leading-relaxed">
                  {language === 'id' 
                    ? 'Regulasi di Indonesia sangat dinamis. Hubungi tim ahli kami untuk konsultasi khusus mengenai kebutuhan spesifik bisnis Anda.'
                    : language === 'en' 
                    ? 'Regulations in Indonesia are very dynamic. Contact our expert team for specific consultation regarding your business needs.'
                    : '印度尼西亚的法规非常动态。联系我们的专家团队，针对您的业务需求进行具体咨询。'}
                </p>
                <Link href="/contact" className="btn-white inline-flex py-5 px-10 text-xl">
                  {language === 'id' ? 'Tanya Ahli Kami' : language === 'en' ? 'Ask Our Expert' : '咨询我们的专家'} <ArrowRight className="ml-2" />
                </Link>
              </div>
              
              <div className="hidden lg:grid grid-cols-2 gap-6">
                {[
                  { label: 'Free Consultation', val: '100%', icon: Globe },
                  { label: 'Success Rate', val: '99.9%', icon: ShieldCheck },
                  { label: 'Processing Time', val: '24/7', icon: Clock },
                  { label: 'Expert Lawyers', val: '50+', icon: Users }
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
