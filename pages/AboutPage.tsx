
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textOverlayRef = useRef<HTMLDivElement>(null);
  const sideBySideRef = useRef<HTMLDivElement>(null);
  const ourBusinessRef = useRef<HTMLDivElement>(null);
  const ourBrandRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !imageRef.current || !overlayRef.current || !textOverlayRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const scrollFraction = Math.max(0, Math.min(1, (viewportHeight - rect.top) / viewportHeight));

      const imageOpacity = Math.min(1, scrollFraction * 2.5);
      imageRef.current.style.opacity = imageOpacity.toString();
      imageRef.current.style.transform = `scale(${1.05 - (imageOpacity * 0.05)})`;

      if (scrollFraction > 0.6) {
        const overlayProgress = (scrollFraction - 0.6) * 2.5; 
        const opacity = Math.min(0.7, overlayProgress * 0.7);
        overlayRef.current.style.opacity = opacity.toString();
        
        const textOpacity = Math.min(0.85, overlayProgress);
        textOverlayRef.current.style.opacity = textOpacity.toString();
        textOverlayRef.current.style.transform = `translateY(${20 - (textOpacity * 20)}px)`;
      } else {
        overlayRef.current.style.opacity = '0';
        textOverlayRef.current.style.opacity = '0';
        textOverlayRef.current.style.transform = 'translateY(20px)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.1 });

    const sections = [sideBySideRef, ourBusinessRef, ourBrandRef];
    sections.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const intro1 = "https://github.com/stcy2828/GMusicWebsite/blob/main/material/intro1.webp?raw=true";
  const intro2 = "https://github.com/stcy2828/GMusicWebsite/blob/main/material/Intro2.webp?raw=true";
  const intro3 = "https://github.com/stcy2828/GMusicWebsite/blob/main/material/Intro3.webp?raw=true";
  const brand1 = "https://github.com/stcy2828/GMusicWebsite/blob/main/material/Brand-1.webp?raw=true";
  const brand2 = "https://github.com/stcy2828/GMusicWebsite/blob/main/material/Brand-2.webp?raw=true";

  return (
    <div className="min-h-screen pt-32 pb-32 bg-black selection:bg-[#D4AF37] selection:text-black">
      {/* Title - Unified with other pages (text-xl on mobile for single line) */}
      <div className="max-w-[1400px] mx-auto px-6">
        <h1 className="text-xl md:text-5xl font-serif gold-text tracking-[0.2em] mb-12 md:mb-20 text-center uppercase">
          {t.about.title}
        </h1>
      </div>

      {/* Cinematic Hero Section */}
      <div ref={heroRef} className="max-w-[1200px] mx-auto px-6 mb-12 min-h-[60vh] flex items-center justify-center relative">
        <div className="relative w-full overflow-hidden rounded-sm border border-[#D4AF37]/20 shadow-2xl">
          <img 
            ref={imageRef}
            src={intro1} 
            alt="G Music Production" 
            className="w-full h-auto object-cover opacity-0 transition-transform duration-700 ease-out"
            style={{ willChange: 'opacity, transform' }}
          />
          <div 
            ref={overlayRef}
            className="absolute inset-0 bg-black opacity-0 transition-opacity duration-1000 ease-in-out pointer-events-none"
            style={{ willChange: 'opacity' }}
          />
          <div 
            ref={textOverlayRef}
            className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-16 opacity-0 pointer-events-none"
            style={{ willChange: 'opacity, transform' }}
          >
            <img src={LOGO_URL} alt="G Music Logo" className="h-20 md:h-28 w-auto mb-8 object-contain brightness-110" />
            <h2 className="gold-text text-3xl md:text-6xl font-serif tracking-[0.3em] uppercase mb-4 text-center">
              {t.about.hero_title}
            </h2>
            <p className="text-white text-base md:text-xl tracking-[0.5em] uppercase font-light text-center">
              {t.about.hero_subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Side-by-Side: Company Background | Image 2 */}
      <div 
        ref={sideBySideRef}
        className="max-w-[1200px] mx-auto px-6 mb-24 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left: Company Background */}
          <div className="w-full lg:w-5/12 space-y-6">
            <h2 className="text-2xl font-serif gold-text tracking-widest uppercase flex items-center mb-4">
              {t.about.bg_title}
              <span className="ml-6 h-[1px] flex-1 bg-[#D4AF37]/30" />
            </h2>
            <p className="text-gray-400 leading-relaxed tracking-wide text-base md:text-lg text-justify font-light">
              {t.about.bg_p1}
            </p>
            <p className="text-gray-400 leading-relaxed tracking-wide text-base md:text-lg text-justify font-light">
              {t.about.bg_p2}
            </p>
          </div>

          {/* Right: Image 2 */}
          <div className="w-full lg:w-7/12">
            <div className="relative group overflow-hidden rounded-sm border border-white/10 shadow-2xl">
              <img 
                src={intro2} 
                alt="Concert Atmosphere" 
                className="w-full h-auto transition-transform duration-[3000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Our Business Section - Aligned Left */}
      <div 
        ref={ourBusinessRef}
        className="max-w-[1200px] mx-auto px-6 mb-32 opacity-0 translate-y-10 transition-all duration-1000 ease-out text-left"
      >
        <div className="max-w-4xl">
          <h2 className="text-2xl font-serif gold-text tracking-widest uppercase mb-8 flex items-center">
            {t.about.biz_title}
            <span className="ml-6 h-[1px] w-24 bg-[#D4AF37]/30" />
          </h2>
          <div className="space-y-6">
            <p className="text-gray-400 leading-relaxed tracking-wide text-base md:text-lg font-light text-justify">
              {t.about.biz_p1}
            </p>
            <p className="text-gray-400 leading-relaxed tracking-wide text-base md:text-lg font-light text-justify">
              {t.about.biz_p2}
            </p>
          </div>
        </div>
      </div>

      {/* Our Brand Section - Aligned Left layout */}
      <div 
        ref={ourBrandRef}
        className="max-w-[1200px] mx-auto px-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        {/* Title - Aligned Left */}
        <div className="flex justify-start mb-12">
          <h2 className="text-2xl font-serif gold-text tracking-widest uppercase flex items-center">
            {t.about.brand_title}
            <span className="ml-6 h-[1px] w-24 bg-[#D4AF37]/30" />
          </h2>
        </div>

        {/* Side-by-side Images - Scaled down to 35% each (total 70% of row), no border, vertically centered */}
        <div className="flex flex-col md:flex-row gap-12 mb-12 items-center justify-start">
          <div className="w-full md:w-[35%] overflow-hidden group">
            <img 
              src={brand1} 
              alt="Drive In Ultra" 
              className="w-full h-auto transition-transform duration-[2000ms] group-hover:scale-105"
            />
          </div>
          <div className="w-full md:w-[35%] overflow-hidden group">
            <img 
              src={brand2} 
              alt="Infinite One" 
              className="w-full h-auto transition-transform duration-[2000ms] group-hover:scale-105"
            />
          </div>
        </div>

        {/* Paragraph - Aligned Left */}
        <div className="flex justify-start">
          <div className="max-w-4xl">
            <p className="text-gray-400 leading-relaxed tracking-wide text-base md:text-lg font-light text-justify">
              {t.about.brand_p1}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Link to Dedicated Brand Page */}
      <div className="mt-16 md:mt-24 flex flex-col items-center">
        <div className="max-w-[800px] w-full px-6 mb-16">
          <img 
            src={intro3} 
            alt="G Music Vision" 
            className="w-full h-auto rounded-sm border border-white/5 shadow-2xl"
          />
        </div>
        <Link 
          to="/brand" 
          className="inline-block px-14 py-5 border border-[#D4AF37] gold-text tracking-[0.4em] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 font-bold uppercase text-[11px] group"
        >
          {t.about.btn_brand}
          <span className="ml-4 inline-block transform transition-transform group-hover:translate-x-2">→</span>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
