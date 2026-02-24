
import React, { useEffect, useRef, useState } from 'react';
import { getInfoItems } from '../constants';
import { InfoItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const InfoSection: React.FC = () => {
  const [items, setItems] = useState<InfoItem[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    // Fetch information from static data and limit to the most recent 5 items
    const allItems = getInfoItems(language);
    setItems(allItems.slice(0, 5));
  }, [language]);

  useEffect(() => {
    if (items.length === 0) return;

    const observerOptions = {
      threshold: 0.05,
      rootMargin: '50px', // Trigger earlier to ensure users see content
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          // Once it's visible, we don't need to observe it anymore
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.info-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [items]);

  const formatDate = (dateStr: string) => {
    return dateStr.replace(/-/g, '.');
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-24 px-4 bg-black min-h-[400px]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif gold-text tracking-[0.3em] mb-10 md:mb-20 text-center">{t.info.title}</h2>
        
        <div className="space-y-4">
          {items.length > 0 ? (
            items.map((item) => (
              <div 
                key={item.id}
                className="info-animate opacity-0 translate-y-10 transition-all duration-1000 ease-out flex flex-col md:flex-row md:items-center py-10 border-b border-[#D4AF37]/10 group cursor-pointer hover:bg-white/5 px-6"
              >
                <div className="flex items-center mb-4 md:mb-0 md:w-64">
                  <span className="text-gray-500 text-xs tracking-[0.2em] mr-8 font-mono">{formatDate(item.date)}</span>
                  <span className="text-[9px] px-3 py-1 border border-[#D4AF37] gold-text font-bold uppercase tracking-[0.2em]">
                    {item.category}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm md:text-base text-gray-300 group-hover:gold-text transition-colors duration-300 tracking-[0.1em] leading-relaxed">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 text-gray-600 tracking-widest uppercase text-xs border border-dashed border-gray-800">
              {t.info.noInfo}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
