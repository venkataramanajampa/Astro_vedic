
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Astrologer from "../assets/HeadAstrologer.jpeg";
import HeroBg from "../assets/bg.png";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    /*
      KEY CHANGES vs original:
      1. Removed any margin/padding that created a gap below.
      2. Added a bottom fade gradient so the hero blends into Stats (#0B0918)
         with zero hard edge — same technique used between Stats → Zodiac.
      3. Kept all responsive classes and i18n calls exactly as before.
      4. `w-full` ensures it spans the full viewport width.
    */
    <div
      className="relative w-full flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${HeroBg})`,
        minHeight: "100svh",        /* full viewport on all devices incl. mobile */
        paddingTop: "clamp(64px, 10vw, 120px)",      /* responsive top padding */
        paddingBottom: "clamp(80px, 12vw, 140px)",   /* extra bottom for fade */
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65 z-0" />

      {/*
        Bottom fade: blends the hero image into the Stats section background.
        #0B0918 is Stats' bg colour — this eliminates the hard horizontal cut.
      */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: "160px",
          background: "linear-gradient(to bottom, transparent 0%, #0B0918 100%)",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-5 sm:px-8 md:px-10 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6 lg:gap-0">

          {/* ── TEXT SIDE ── */}
          <div className="w-full md:w-1/2 text-left">
            <span className="text-orange-400 font-semibold tracking-wider uppercase text-xs sm:text-sm">
              {t('hero.brand_name')}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mt-3 mb-4 md:mb-6">
              {t('hero.title_prefix')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                {t('hero.title_highlight')}
              </span>
            </h1>

            <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-md md:max-w-xl opacity-90">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-block px-6 sm:px-8 py-3 font-semibold rounded-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-xl text-sm sm:text-base"
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #F0D080)",
                  color: "#07040F",
                  boxShadow: "0 4px 20px #C9A84C40",
                }}
              >
                {t('hero.cta_button')}
              </Link>

              {/* WhatsApp quick link */}
              <a
                href="https://wa.me/917989525323?text=Namaste%20Guruji%20%F0%9F%99%8F%20I%20would%20like%20to%20consult%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105"
                style={{
                  background: "#25D36622",
                  border: "1px solid #25D366",
                  color: "#25D366",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat Now
              </a>
            </div>
          </div>

          {/* ── IMAGE SIDE ── */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-2 md:mt-0">
            <div
              className="relative p-3 rounded-2xl transition-all duration-500 hover:-rotate-1"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(201,168,76,0.3)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
                maxWidth: "min(320px, 85vw)",
                transform: "rotate(2deg)",
              }}
            >
              {/* Inner white card */}
              <div className="bg-white p-3 rounded-xl overflow-hidden">
                <img
                  src={Astrologer}
                  alt={t('hero.astrologer_name')}
                  className="w-full rounded-lg object-cover object-[center_50%]"
                  style={{ height: "clamp(180px, 30vw, 288px)" }}
                  loading="eager"
                />
                <div className="text-center py-2">
                  <h3 className="font-bold text-gray-800 font-serif text-base md:text-lg">
                    {t('hero.astrologer_name')}
                  </h3>
                  <p className="text-orange-600 text-xs font-bold uppercase tracking-wide mt-0.5">
                    {t('hero.astrologer_role')}
                  </p>
                  <div className="mt-1.5 flex justify-center gap-0.5 text-amber-400 text-sm">
                    {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                  </div>
                </div>
              </div>

              {/* Available badge */}
              <div
                className="absolute flex items-center gap-2.5 px-3 py-2 rounded-xl shadow-2xl"
                style={{
                  bottom: "-12px",
                  left: "-16px",
                  background: "white",
                  border: "1px solid #f0f0f0",
                  animation: "badge-bounce 3s ease-in-out infinite",
                  zIndex: 30,
                  minWidth: "max-content",
                }}
              >
                <div className="bg-green-100 p-1.5 rounded-full">
                  <span className="text-green-600 font-bold text-sm">✓</span>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-semibold tracking-wide">
                    {t('hero.badge_status')}
                  </p>
                  <p className="text-xs font-bold text-gray-800 whitespace-nowrap">
                    {t('hero.badge_action')}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes badge-bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;