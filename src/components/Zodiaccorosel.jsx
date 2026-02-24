
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Corobg from "../assets/corbg.png"
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const ZodiacCarousel = ({ autoScrollInterval = 4000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isHovered) {
            timeoutRef.current = setTimeout(() => { nextSlide(); }, autoScrollInterval);
        }
        return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }, [currentIndex, isHovered]);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % zodiacSigns.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + zodiacSigns.length) % zodiacSigns.length);

    const getVisibleCards = () => {
        const cards = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % zodiacSigns.length;
            cards.push({ ...zodiacSigns[index], key: `${index}-${currentIndex}` });
        }
        return cards;
    };

    const handleCardClick = (signName) => navigate(`/horoscope/${signName.toLowerCase()}`);

    return (
        <div className="relative w-full overflow-hidden" style={{ background: "#020617" }}>

            {/* ─── BACKGROUND IMAGE ─────────────────────────────────────── */}
            <div className="absolute inset-0 z-0">
                <img src={Corobg} alt="Cosmic Background" className="w-full h-full object-cover" />

                {/* 
          ✅ KEY FIX: The gradient now starts from #020617 (slate-950) at the very top
          which exactly matches the colour that Stats.jsx fades TO at its bottom.
          This eliminates the hard image bleed / gap entirely.
        */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `
              linear-gradient(
                to bottom,
                #020617 0%,          /* matches Stats bottom fade — seamless join */
                rgba(2,6,23,0.75) 8%,
                rgba(59,7,100,0.60) 50%,
                rgba(2,6,23,0.88) 100%
              )
            `,
                    }}
                />
            </div>

            {/* Constellation SVG */}
            <div className="absolute inset-0 opacity-10 z-[1]">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="constellation" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                            <circle cx="50" cy="50" r="1.5" fill="#FCD34D" />
                            <circle cx="150" cy="100" r="1" fill="#FCD34D" />
                            <circle cx="100" cy="150" r="1.5" fill="#FCD34D" />
                            <line x1="50" y1="50" x2="150" y2="100" stroke="#FCD34D" strokeWidth="0.5" />
                            <line x1="150" y1="100" x2="100" y2="150" stroke="#FCD34D" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#constellation)" />
                </svg>
            </div>

            {/* Glowing orbs */}
            <div className="absolute top-20 left-10 w-40 h-40 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float z-[1]" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float z-[1]" style={{ animationDelay: "2s" }} />

            {/* ─── CONTENT ──────────────────────────────────────────────── */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-20">

                {/* Header */}
                <div className="text-center mb-12 md:mb-16 space-y-4">
                    <div className="inline-flex items-center gap-3">
                        <Sparkles className="text-amber-400 animate-pulse" size={24} />
                        <span className="text-amber-400 uppercase tracking-[0.3em] text-xs md:text-sm font-bold">
                            Discover Your Sign
                        </span>
                        <Sparkles className="text-amber-400 animate-pulse" size={24} style={{ animationDelay: "0.5s" }} />
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
                        Zodiac Insights
                    </h1>
                    <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed px-4">
                        Explore the twelve celestial guardians and unlock the secrets written in the stars
                    </p>
                </div>

                {/* Carousel */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="relative px-4 md:px-12 lg:px-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                            {getVisibleCards().map((sign, idx) => (
                                <div
                                    key={sign.key}
                                    className={`group relative w-full transition-all duration-500 ${idx === 1 ? 'md:scale-105 z-20' : 'md:scale-95 z-10'}`}
                                    style={{
                                        animation: 'slideIn 0.6s ease-out',
                                        animationDelay: `${idx * 0.1}s`,
                                        animationFillMode: 'both',
                                    }}
                                >
                                    <div
                                        onClick={() => handleCardClick(sign.name)}
                                        className={`relative h-[520px] md:h-[540px] rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-2xl flex flex-col
                      ${idx === 1 ? 'hover:scale-105 shadow-xl' : 'hover:scale-100 opacity-90 hover:opacity-100'}`}
                                    >
                                        {/* Glow */}
                                        <div
                                            className={`absolute -inset-1 rounded-2xl blur-xl transition-opacity duration-500 ${idx === 1 ? 'opacity-70 group-hover:opacity-90' : 'opacity-0 group-hover:opacity-60'}`}
                                            style={{ background: sign.color }}
                                        />

                                        {/* Featured badge */}
                                        {idx === 1 && (
                                            <div
                                                className="absolute -top-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold z-30 shadow-lg animate-pulse"
                                                style={{ backgroundColor: sign.color, color: '#1e293b' }}
                                            >
                                                Featured
                                            </div>
                                        )}

                                        {/* Card body */}
                                        <div
                                            className="relative h-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 rounded-2xl overflow-hidden flex flex-col"
                                            style={{ borderColor: sign.color + '40' }}
                                        >
                                            {/* Symbol area */}
                                            <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center overflow-hidden">
                                                <div
                                                    className="absolute inset-0 opacity-10"
                                                    style={{
                                                        background: `radial-gradient(circle at 50% 50%, ${sign.color} 1px, transparent 1px)`,
                                                        backgroundSize: '30px 30px',
                                                    }}
                                                />
                                                <div
                                                    className="relative z-10 text-7xl md:text-8xl group-hover:scale-110 transition-transform duration-500"
                                                    style={{ filter: `drop-shadow(0 0 20px ${sign.color})` }}
                                                >
                                                    {sign.symbol}
                                                </div>
                                                <div
                                                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm"
                                                    style={{
                                                        backgroundColor: sign.color + '20',
                                                        border: `1px solid ${sign.color}60`,
                                                        color: sign.color,
                                                    }}
                                                >
                                                    {sign.element}
                                                </div>
                                            </div>

                                            {/* Info area */}
                                            <div className="p-5 md:p-6 flex flex-col h-full">
                                                <div className="text-center space-y-2 mb-4">
                                                    <h3 className="text-2xl font-serif font-bold" style={{ color: sign.color }}>
                                                        {sign.name}
                                                    </h3>
                                                    <p className="text-slate-400 text-sm">{sign.dates}</p>
                                                </div>

                                                <p className="text-slate-300 text-sm leading-relaxed text-center line-clamp-3 mb-4 flex-grow">
                                                    {sign.description}
                                                </p>

                                                <div className="pt-4 mb-4 border-t border-slate-700">
                                                    <div className="text-slate-400 text-xs uppercase tracking-wider mb-2 text-center">
                                                        Key Traits
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 justify-center min-h-[32px]">
                                                        {sign.traits.map((trait, i) => (
                                                            <span
                                                                key={i}
                                                                className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                                                            >
                                                                {trait}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="mt-auto">
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); handleCardClick(sign.name); }}
                                                        className="w-full py-3 rounded-lg font-bold text-sm transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                                                        style={{
                                                            background: `linear-gradient(135deg, ${sign.color}30, ${sign.color}15)`,
                                                            border: `1px solid ${sign.color}60`,
                                                            color: sign.color,
                                                        }}
                                                    >
                                                        View 2026 Horoscope
                                                        <Sparkles size={14} className="group-hover:rotate-12 transition-transform" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop nav arrows */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 p-4 bg-slate-800/80 backdrop-blur-sm border border-amber-400/30 text-amber-400 rounded-full hover:bg-slate-700 hover:border-amber-400 transition-all hover:scale-110 z-20 items-center justify-center"
                        aria-label="Previous"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 p-4 bg-slate-800/80 backdrop-blur-sm border border-amber-400/30 text-amber-400 rounded-full hover:bg-slate-700 hover:border-amber-400 transition-all hover:scale-110 z-20 items-center justify-center"
                        aria-label="Next"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-10 md:mt-12">
                    {zodiacSigns.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`transition-all duration-300 rounded-full ${index === currentIndex ? 'w-8 h-2 bg-amber-400' : 'w-2 h-2 bg-slate-600 hover:bg-slate-500'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Mobile nav */}
                <div className="flex md:hidden justify-center gap-4 mt-8">
                    <button onClick={prevSlide} className="p-3 bg-slate-800/80 backdrop-blur-sm border border-amber-400/30 text-amber-400 rounded-full hover:bg-slate-700 hover:border-amber-400 transition-all" aria-label="Previous">
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={nextSlide} className="p-3 bg-slate-800/80 backdrop-blur-sm border border-amber-400/30 text-amber-400 rounded-full hover:bg-slate-700 hover:border-amber-400 transition-all" aria-label="Next">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          33%       { transform: translate(20px, -20px); }
          66%       { transform: translate(-20px, 20px); }
        }
        .animate-float { animation: float 10s ease-in-out infinite; }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </div>
    );
};

// ─── ZODIAC DATA (unchanged) ───────────────────────────────────────────────────
const zodiacSigns = [
    { name: "Aries", symbol: "♈", dates: "Mar 21 - Apr 19", element: "Fire", color: "#FF6B6B", description: "Bold, ambitious, and confident. Aries are natural leaders who charge ahead with courage and determination.", traits: ["Courageous", "Passionate", "Leader"] },
    { name: "Taurus", symbol: "♉", dates: "Apr 20 - May 20", element: "Earth", color: "#51CF66", description: "Reliable, patient, and devoted. Taurus values stability, comfort, and the finer things in life.", traits: ["Reliable", "Patient", "Devoted"] },
    { name: "Gemini", symbol: "♊", dates: "May 21 - Jun 20", element: "Air", color: "#FFD43B", description: "Curious, adaptable, and communicative. Gemini thrives on variety and intellectual stimulation.", traits: ["Adaptable", "Curious", "Social"] },
    { name: "Cancer", symbol: "♋", dates: "Jun 21 - Jul 22", element: "Water", color: "#74C0FC", description: "Intuitive, emotional, and protective. Cancer is deeply connected to home, family, and emotions.", traits: ["Nurturing", "Intuitive", "Protective"] },
    { name: "Leo", symbol: "♌", dates: "Jul 23 - Aug 22", element: "Fire", color: "#FFA94D", description: "Confident, creative, and generous. Leo shines brightly with natural charisma and warmth.", traits: ["Confident", "Generous", "Creative"] },
    { name: "Virgo", symbol: "♍", dates: "Aug 23 - Sep 22", element: "Earth", color: "#8CE99A", description: "Analytical, practical, and meticulous. Virgo excels at organization and attention to detail.", traits: ["Analytical", "Practical", "Helpful"] },
    { name: "Libra", symbol: "♎", dates: "Sep 23 - Oct 22", element: "Air", color: "#FFB3C1", description: "Diplomatic, fair-minded, and social. Libra seeks harmony, beauty, and balanced relationships.", traits: ["Diplomatic", "Fair", "Social"] },
    { name: "Scorpio", symbol: "♏", dates: "Oct 23 - Nov 21", element: "Water", color: "#E599F7", description: "Intense, mysterious, and transformative. Scorpio possesses deep emotional strength and magnetism.", traits: ["Passionate", "Mysterious", "Loyal"] },
    { name: "Sagittarius", symbol: "♐", dates: "Nov 22 - Dec 21", element: "Fire", color: "#FF9CAA", description: "Adventurous, optimistic, and philosophical. Sagittarius seeks truth, freedom, and new horizons.", traits: ["Optimistic", "Adventurous", "Free"] },
    { name: "Capricorn", symbol: "♑", dates: "Dec 22 - Jan 19", element: "Earth", color: "#A78BFA", description: "Ambitious, disciplined, and responsible. Capricorn climbs toward success with determination.", traits: ["Ambitious", "Disciplined", "Wise"] },
    { name: "Aquarius", symbol: "♒", dates: "Jan 20 - Feb 18", element: "Air", color: "#67E8F9", description: "Innovative, independent, and humanitarian. Aquarius envisions a better future for all.", traits: ["Innovative", "Independent", "Unique"] },
    { name: "Pisces", symbol: "♓", dates: "Feb 19 - Mar 20", element: "Water", color: "#C4B5FD", description: "Compassionate, artistic, and intuitive. Pisces flows with deep empathy and imagination.", traits: ["Compassionate", "Artistic", "Intuitive"] },
];

export default ZodiacCarousel;