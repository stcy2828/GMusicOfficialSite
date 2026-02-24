
import React, { useState, useEffect } from 'react';
import { TOP_POSTERS } from '../constants';

const Carousel: React.FC = () => {
  const posters = TOP_POSTERS;
  const [mobileIndex, setMobileIndex] = useState(0);

  // Mobile Slideshow Logic: Accelerated to 2s pause + 0.5s transition
  useEffect(() => {
    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % posters.length);
    }, 4000); // Total 2.5s per slide (2s pause + 0.5s slide)

    return () => clearInterval(interval);
  }, [posters.length]);

  return (
    <div className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden bg-black pt-20 md:pt-24 selection:bg-transparent">
      {/* Side Cinematic Gradients - Hidden on mobile to let posters touch edges */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />
      <div className="hidden md:block absolute inset-y-0 right-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />
      
      {/* 1. DESKTOP VERSION (Continuous Scroll) */}
      <div className="hidden md:flex h-full items-center">
        <div className="flex animate-scroll-fade items-center gap-0 py-10 will-change-transform">
          {/* Double the posters for seamless infinite loop on desktop */}
          {[...posters, ...posters].map((poster, idx) => (
            <div 
              key={`${poster.id}-desktop-${idx}`}
              className="h-[65vh] flex-shrink-0 relative"
            >
              <img 
                src={poster.imageUrl} 
                alt={poster.name}
                className="h-full w-auto block border-y border-[#D4AF37]/20 shadow-2xl"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 2. MOBILE VERSION (Fast Slideshow: 2s Pause + Left Slide) */}
      <div className="flex md:hidden h-full items-center justify-center relative">
        <div 
          className="flex h-full w-full transition-transform duration-500 ease-in-out will-change-transform"
          style={{ transform: `translate3d(-${mobileIndex * 100}%, 0, 0)` }}
        >
          {posters.map((poster) => (
            <div 
              key={`${poster.id}-mobile`}
              className="w-full h-full flex-shrink-0 flex items-center justify-center"
            >
              <img 
                src={poster.imageUrl} 
                alt={poster.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2 z-20">
          {posters.map((_, i) => (
            <button
              key={i}
              onClick={() => setMobileIndex(i)}
              className={`transition-all duration-300 rounded-full h-1 ${
                i === mobileIndex ? 'bg-[#D4AF37] w-6' : 'bg-gray-700 w-1.5'
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-fade {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* Shift by half since we doubled the array */
        }
        .animate-scroll-fade {
          animation: scroll-fade 40s linear infinite;
        }
        /* Mobile specific scroll speed tweak if needed via pure CSS, but handled by JS above */
      `}</style>
    </div>
  );
};

export default Carousel;
