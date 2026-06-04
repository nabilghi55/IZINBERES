'use client';

import React from 'react';
import Link from 'next/link';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  category?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, href, category }) => {
  const { t } = useLanguage();

  return (
    <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon size={28} />
      </div>
      
      {category && (
        <span className="inline-block px-3 py-1 rounded-full bg-gray-50 text-xs font-semibold text-gray-500 mb-4">
          {category}
        </span>
      )}
      
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      
      <Link 
        href={href} 
        className="inline-flex items-center font-black text-primary transition-all hover:gap-2 hover:text-accent group/btn"
      >
        <span className="relative">
          {t.services.learnMore}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover/btn:w-full" />
        </span>
        <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;
