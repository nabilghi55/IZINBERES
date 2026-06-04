'use client';

import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  FileText, 
  ShieldCheck, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { t } = useLanguage();
  
  const service = (t.serviceDetails.data as any)[slug];

  if (!service) {
    return (
      <div className="bg-white min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">{t.nav.services}: {slug?.replace(/-/g, ' ')}</h1>
          <p className="text-xl text-gray-600 mb-8">{t.serviceDetails.back}</p>
          <Link href="/services" className="text-primary font-bold flex items-center justify-center hover:underline">
            <ArrowRight className="mr-2 rotate-180" size={20} /> {t.serviceDetails.back}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gray-50 pt-20 pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="text-sm font-bold text-accent uppercase tracking-wider flex items-center mb-6 hover:underline">
            {t.nav.services} / {slug}
          </Link>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">{service.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="mr-3 text-primary" /> {t.serviceDetails.included}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                      <span className="font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ShieldCheck className="mr-3 text-primary" /> {t.serviceDetails.requirements}
                </h2>
                <ul className="space-y-4">
                  {service.requirements.map((req: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold">{idx + 1}</span>
                      </div>
                      <span className="text-gray-600 text-lg">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar / CTA */}
            <div className="lg:col-span-1">
               <div className="sticky top-32 space-y-6">
                  <div className="bg-primary text-white p-8 rounded-3xl shadow-xl shadow-primary/20">
                    <div className="flex items-center gap-3 mb-6">
                      <Clock size={24} className="text-accent" />
                      <span className="font-bold text-lg">{t.serviceDetails.timeline}</span>
                    </div>
                    <p className="text-3xl font-extrabold mb-8">{service.timeline}</p>
                    <Link 
                      href="/contact" 
                      className="btn-white w-full"
                    >
                      {t.serviceDetails.requestQuote}
                    </Link>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                      <HelpCircle className="mr-2 text-accent" size={20} /> {t.serviceDetails.needHelp}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {t.serviceDetails.helpDesc}
                    </p>
                    <Link 
                      href="/contact" 
                      className="text-primary font-bold hover:underline flex items-center group"
                    >
                      {t.serviceDetails.consultNow} <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
