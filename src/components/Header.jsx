import React from 'react';
import { useTranslation } from 'react-i18next';
// Ensure these paths match your project structure
import Logo from "../assets/logo.webp";
import gurulogo from "../assets/gurulogo.jpeg";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="w-full bg-gradient-to-r from-amber-600 via-yellow-200 to-amber-600 shadow-md border-b-4 border-amber-700 relative z-40">
      <div className="container mx-auto px-2 md:px-4 py-2 md:py-3">

        {/* --- FLEX CONTAINER --- 
            Mobile: flex-row (Side-by-side) to save height 
            Desktop: md:flex-row (Keeps original desktop layout) 
        */}
        <div className="flex flex-row items-center justify-center md:justify-between gap-3 md:gap-6">

          {/* 1. LOGO SECTION */}
          <div className="shrink-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full border-2 md:border-4 border-white/50 overflow-hidden shadow-lg bg-white">
              <img
                src={gurulogo}
                alt="Guru Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 2. TEXT CONTENT SECTION */}
          {/* Mobile: Text aligned left/center relative to logo 
              Desktop: Centered fully */}
          <div className="flex-1 flex flex-col items-start md:items-center justify-center">

            {/* Main Title */}
            <h1
              className="font-serif font-bold text-lg sm:text-2xl md:text-4xl lg:text-5xl text-[#002855] leading-none md:leading-tight text-left md:text-center px-0 md:px-2 uppercase drop-shadow-sm"
              style={{ textShadow: "1px 1px 0px #ffffff60" }}
            >
              {t('header.title')}
            </h1>

            {/* Subtitle Badge */}
            <div className="mt-1 md:mt-2 bg-white/80 md:bg-white/90 border border-yellow-600 shadow-sm px-2 md:px-4 py-0.5 md:py-1 rounded-sm transform md:-skew-x-6">
              <p className="text-purple-900 font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-wide whitespace-nowrap">
                {t('header.subtitle')}
              </p>
            </div>
          </div>

          {/* 3. DESKTOP SPACER / SECOND LOGO (Optional) 
              This empty div helps balance the center text on desktop if you don't have a right logo.
              Hidden on mobile to save space. */}
          <div className="hidden md:block w-24 lg:w-32">
            {/* If you ever add a right logo, put it here. Currently keeps layout balanced. */}
          </div>

        </div>

      </div>
    </header>
  );
};

export default Header;