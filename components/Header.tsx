
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LOGO_URL, SOCIAL_LINKS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: t.nav.top, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.brand, path: '/brand' },
    { name: t.nav.event, path: '/event' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <>
      {/* Main Header Bar - Always Fixed Top */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-[#D4AF37]/30 h-24 transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between lg:grid lg:grid-cols-3">
          
          {/* Logo - Left column */}
          <div className="flex justify-start">
            <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <img src={LOGO_URL} alt="G Music Logo" className="h-12 md:h-16 w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation - Center column (Hidden on Mobile) */}
          <nav className="hidden lg:flex items-center justify-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-bold tracking-[0.2em] transition-all duration-300 hover:text-[#D4AF37] uppercase whitespace-nowrap ${
                  location.pathname === link.path ? 'gold-text scale-105' : 'text-gray-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Social & Language - Right column (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center justify-end space-x-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}

            <div className="h-6 w-[1px] bg-gray-700 mx-2" />

            {/* Language Selector */}
            <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest">
               <button 
                 onClick={() => setLanguage('EN')} 
                 className={`transition-colors duration-300 hover:text-[#D4AF37] ${language === 'EN' ? 'gold-text' : 'text-gray-500'}`}
               >
                 EN
               </button>
               <span className="text-gray-700">|</span>
               <button 
                 onClick={() => setLanguage('TC')} 
                 className={`transition-colors duration-300 hover:text-[#D4AF37] ${language === 'TC' ? 'gold-text' : 'text-gray-500'}`}
               >
                 繁
               </button>
               <span className="text-gray-700">|</span>
               <button 
                 onClick={() => setLanguage('JP')} 
                 className={`transition-colors duration-300 hover:text-[#D4AF37] ${language === 'JP' ? 'gold-text' : 'text-gray-500'}`}
               >
                 JP
               </button>
            </div>
          </div>

          {/* Mobile Hamburger Button (Visible on Mobile) */}
          <button 
            className="lg:hidden text-white hover:text-[#D4AF37] transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </header>

      {/* Mobile Menu Overlay - Starts below header (top-24) */}
      <div 
        className={`fixed top-24 left-0 w-full bottom-0 bg-black/95 backdrop-blur-xl z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Container with overflow handling but centered content */}
        <div className="w-full h-full overflow-y-auto no-scrollbar flex flex-col items-center justify-center py-4">
          
          <div className="flex flex-col items-center space-y-6 w-full">
            
            {/* Mobile Nav Links - Compact Spacing */}
            <nav className="flex flex-col items-center space-y-4 w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-serif tracking-[0.2em] transition-all duration-300 hover:text-[#D4AF37] uppercase py-1 ${
                    location.pathname === link.path ? 'gold-text scale-110 font-bold' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Language Selector */}
            <div className="flex items-center gap-5 text-xs font-bold tracking-widest border border-[#D4AF37]/20 rounded-full px-6 py-2 bg-white/5 mt-4">
               <button 
                 onClick={() => setLanguage('EN')} 
                 className={`transition-colors duration-300 ${language === 'EN' ? 'gold-text' : 'text-gray-400'}`}
               >
                 EN
               </button>
               <span className="text-gray-600">|</span>
               <button 
                 onClick={() => setLanguage('TC')} 
                 className={`transition-colors duration-300 ${language === 'TC' ? 'gold-text' : 'text-gray-400'}`}
               >
                 繁體
               </button>
               <span className="text-gray-600">|</span>
               <button 
                 onClick={() => setLanguage('JP')} 
                 className={`transition-colors duration-300 ${language === 'JP' ? 'gold-text' : 'text-gray-400'}`}
               >
                 日本語
               </button>
            </div>

            {/* Mobile Social Links */}
            <div className="flex items-center space-x-8 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300 transform hover:scale-125"
                  aria-label={social.name}
                >
                  {/* Slightly smaller icon for compact view */}
                  {/* Cast to React.ReactElement<any> to allow 'size' property during React.cloneElement */}
                  {React.cloneElement(social.icon as React.ReactElement<any>, { size: 24 })}
                </a>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
