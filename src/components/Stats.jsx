import React from 'react';
import { useTranslation } from 'react-i18next';

const StatsSection = () => {
  const { t } = useTranslation();
  // Ensure this returns an array from your translation file
  const statsData = t('stats.items', { returnObjects: true });

  return (
    // Section Background: Cream color matches your theme
    <section className="py-12 md:py-16 bg-[#F5E6CA] relative z-20 overflow-hidden">
      
      {/* Decorative Background Glows (The 'Aura' effect) */}
      <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-orange-300/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-yellow-300/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Elegant Top Divider */}
      <div className="flex items-center justify-center mb-10 md:mb-12 opacity-60">
        <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-amber-700"></div>
        <span className="mx-4 text-amber-800 text-lg md:text-xl">✦</span>
        <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-amber-700"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Responsive Grid: 1 column on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          {statsData && statsData.map((item, index) => (
            <div 
              key={index}
              // CARD STYLING:
              // 1. Parchment Gradient Background
              // 2. Responsive Padding (p-6 on mobile, p-8 on desktop)
              // 3. Hover effects: Shadow glow + slight lift
              className="group relative bg-gradient-to-br from-white via-orange-50 to-orange-100 
                         border border-amber-200 rounded-2xl p-6 md:p-8 text-center 
                         shadow-[0_4px_20px_-5px_rgba(251,191,36,0.3)] 
                         hover:shadow-[0_10px_30px_-5px_rgba(245,158,11,0.4)]
                         transition-all duration-500 transform hover:-translate-y-2"
            >
              
              {/* Decorative 'Spinning' Zodiac Ring behind the number */}
              {/* FIXED: Uses arbitrary value [spin_8s_linear_infinite] so no config needed */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 border border-dashed border-amber-300/50 rounded-full group-hover:animate-[spin_8s_linear_infinite] pointer-events-none"></div>

              {/* Content Container */}
              <div className="relative z-10">
                {/* Big Number: Responsive text size (text-5xl mobile, text-6xl desktop) */}
                <h3 className="text-5xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-700 to-orange-600 mb-3 drop-shadow-sm">
                  {item.number}
                </h3>
                
                {/* Decorative Divider under number */}
                <div className="w-10 md:w-12 h-1 bg-amber-300 mx-auto rounded-full mb-3 md:mb-4 group-hover:w-16 md:group-hover:w-20 transition-all duration-500"></div>

                {/* Label: Clear, uppercase text */}
                <p className="text-amber-900/80 font-medium uppercase tracking-[0.2em] text-xs md:text-sm">
                  {item.label}
                </p>
              </div>

              {/* Corner Accents (Vedic Style) */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-amber-400 rounded-tl-lg opacity-50"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-amber-400 rounded-tr-lg opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-amber-400 rounded-bl-lg opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-amber-400 rounded-br-lg opacity-50"></div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default StatsSection;