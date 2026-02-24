
import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL, SOCIAL_LINKS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black py-20 border-t border-[#D4AF37]/20">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center">
        {/* Main Footer Row - Using grid for precise centering on desktop */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center mb-12 gap-10 md:gap-0">
          
          {/* Left Column - Balanced spacing */}
          <div className="hidden md:block" />
          
          {/* Center Column - Logo */}
          <div className="flex justify-center">
            <img 
              src={LOGO_URL} 
              alt="G Music Logo" 
              className="h-20 md:h-24 w-auto object-contain" 
            />
          </div>
          
          {/* Right Column - Social Icons */}
          <div className="flex justify-center md:justify-end items-center space-x-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#D4AF37] transition-all duration-300 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="pt-8 border-t border-[#D4AF37]/5 w-full flex justify-center">
          <span 
            className="text-gray-600 text-[10px] tracking-[0.3em] font-medium uppercase text-center"
          >
            {t.footer.copyright}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
