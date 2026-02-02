// import React from 'react';
// import { Link } from 'react-router-dom';
// import Astrologer from "../assets/HeadAstrologer.jpeg"
// const HeroSection = () => {
//   return (
//     // Container with a soft gradient background
//     <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 min-h-[500px] flex items-center overflow-hidden">

//       {/* Decorative Background Elements */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//       <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="flex flex-col md:flex-row items-center">

//           {/* Text Content */}
//           <div className="w-full md:w-1/2 text-left">
//             <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">
//              Sri Karthikeya Jyothisya Nivas
//             </span>
//             <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mt-2 mb-6">
//               Align Your Life with <br/>
//               <span className="text-orange-600">Natural Law</span>
//             </h1>
//             <p className="text-gray-600 text-lg mb-8 leading-relaxed">
//               Eliminate problems in management and life by establishing automation in administration supported by the total intelligence of Natural Law.
//             </p>
//             <div className="flex gap-4">
//               <Link to="/contact" className="px-8 py-3 bg-orange-600 text-white font-medium rounded-lg shadow-lg hover:bg-orange-700 transition transform hover:-translate-y-1">
//                 Consult an Astrologer
//               </Link>
//               {/* <button className="px-8 py-3 bg-white text-orange-600 font-medium rounded-lg shadow hover:shadow-md transition">
//                 Learn More
//               </button> */}
//             </div>
//           </div>

//           {/* Astrologer Image Section */}
//           <div className="w-full md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
//             {/* Main Image Card */}
//             <div className="bg-white p-4 rounded-2xl shadow-2xl max-w-sm transform rotate-2 hover:rotate-0 transition duration-500">
//               <img 
//                 src={Astrologer} // Replace with Astrologer Photo
//                 alt="Head Astrologer" 
//                 className="w-full h-64 object-cover rounded-xl mb-4"
//               />
//               <div className="text-center">
//                 <h3 className="text-xl font-bold text-gray-800">Acharya Sharma</h3>
//                 <p className="text-orange-500 text-sm font-medium">Vedic Expert • 20 Yrs Exp</p>
//                 <div className="mt-3 flex justify-center gap-1 text-yellow-400">
//                   {/* Star Icons */}
//                   <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
//                 </div>
//               </div>
//             </div>

//             {/* Floating Badge (Optional) */}
//             <div className="absolute bottom-10 -left-4 bg-white p-3 rounded-lg shadow-lg flex items-center gap-3 animate-bounce">
//               <div className="bg-green-100 p-2 rounded-full">
//                 <span className="text-green-600 text-xl">✓</span>
//               </div>
//               <div>
//                 <p className="text-xs text-gray-500">Available Now</p>
//                 <p className="text-sm font-bold text-gray-800">Live Chat</p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Astrologer from "../assets/HeadAstrologer.jpeg";
import HeroBg from "../assets/bg.png";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div
      // 1. HEIGHT & SPACING FIX:
      // - Changed 'min-h-[550px]' to 'min-h-[auto] md:min-h-[600px]'
      // - Added 'py-12 md:py-0' to give vertical breathing room on mobile (prevents overlap)
      // - kept 'overflow-hidden' to clip any rotating elements
      className="relative w-full min-h-[auto] md:min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden py-12 md:py-0"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* 2. LAYOUT GAP FIX: Added 'gap-10' to separate text and image on mobile */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-left z-20">
            <span className="text-orange-400 font-semibold tracking-wider uppercase text-sm md:text-base">
              {t('hero.brand_name')}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mt-3 mb-4 md:mb-6">
              {t('hero.title_prefix')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                {t('hero.title_highlight')}
              </span>
            </h1>

            <p className="text-gray-200 text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-xl opacity-90">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-medium rounded-lg shadow-lg shadow-orange-900/50 hover:shadow-orange-600/50 hover:scale-105 transition-all duration-300 border border-orange-500/50"
              >
                {t('hero.cta_button')}
              </Link>
            </div>
          </div>

          {/* Astrologer Image Section */}
          <div className="w-full md:w-1/2 relative flex justify-center md:justify-end mt-4 md:mt-0">

            {/* Main Image Card */}
            {/* 3. CARD & IMAGE FIX:
                - Added 'mb-8' on mobile to ensure it doesn't touch the next section.
                - Reduced image height to 'h-48' on mobile (was too tall). 
                - Increased to 'md:h-80' on desktop for impact.
            */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/20 p-3 rounded-2xl shadow-2xl max-w-xs md:max-w-sm transform rotate-1 md:rotate-2 hover:rotate-0 transition duration-500 mb-8 md:mb-0">
              {/* Inner white card */}
              <div className="bg-white p-3 rounded-xl overflow-hidden">
                <img
                  src={Astrologer}
                  alt={t('hero.astrologer_name')}
                  // Responsive Height: h-48 (mobile) -> md:h-72 (desktop)
                  className="w-full h-48 md:h-72 object-cover object-top rounded-lg mb-3"
                />
                <div className="text-center pb-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 font-serif">{t('hero.astrologer_name')}</h3>
                  <p className="text-orange-600 text-xs md:text-sm font-bold uppercase tracking-wide mt-1">{t('hero.astrologer_role')}</p>
                  <div className="mt-2 flex justify-center gap-1 text-amber-400 text-sm">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Repositioned for Mobile */}
              {/* Changed bottom/left positioning to ensure it stays within bounds */}
              <div className="absolute -bottom-4 -left-2 md:bottom-8 md:-left-12 bg-white p-2 md:p-3 rounded-lg shadow-xl flex items-center gap-3 animate-[bounce_3s_infinite] border border-gray-100 z-30">
                <div className="bg-green-100 p-1.5 md:p-2 rounded-full">
                  <span className="text-green-600 text-base md:text-xl font-bold">✓</span>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-semibold">{t('hero.badge_status')}</p>
                  <p className="text-xs md:text-sm font-bold text-gray-800 whitespace-nowrap">{t('hero.badge_action')}</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;